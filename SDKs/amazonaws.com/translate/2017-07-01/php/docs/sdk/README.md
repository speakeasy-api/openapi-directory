# SDK

## Overview

Provides translation of the input content from the source language to the target language.

Amazon Web Services documentation
<https://docs.aws.amazon.com/translate/>
### Available Operations

* [createParallelData](#createparalleldata) - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
* [deleteParallelData](#deleteparalleldata) - Deletes a parallel data resource in Amazon Translate.
* [deleteTerminology](#deleteterminology) - A synchronous action that deletes a custom terminology.
* [describeTextTranslationJob](#describetexttranslationjob) - Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
* [getParallelData](#getparalleldata) - Provides information about a parallel data resource.
* [getTerminology](#getterminology) - Retrieves a custom terminology.
* [importTerminology](#importterminology) - <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
* [listLanguages](#listlanguages) - Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
* [listParallelData](#listparalleldata) - Provides a list of your parallel data resources in Amazon Translate.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [listTerminologies](#listterminologies) - Provides a list of custom terminologies associated with your account.
* [listTextTranslationJobs](#listtexttranslationjobs) - Gets a list of the batch translation jobs that you have submitted.
* [startTextTranslationJob](#starttexttranslationjob) - <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
* [stopTextTranslationJob](#stoptexttranslationjob) - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
* [tagResource](#tagresource) - Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [translateText](#translatetext) - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
* [untagResource](#untagresource) - Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [updateParallelData](#updateparalleldata) - Updates a previously created parallel data resource by importing a new input file from Amazon S3.

## createParallelData

Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParallelDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ParallelDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateParallelDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParallelDataRequest();
    $request->createParallelDataRequest = new CreateParallelDataRequest();
    $request->createParallelDataRequest->clientToken = 'dicta';
    $request->createParallelDataRequest->description = 'nam';
    $request->createParallelDataRequest->encryptionKey = new EncryptionKey();
    $request->createParallelDataRequest->encryptionKey->id = 'a928fc81-6742-4cb7-b920-5929396fea75';
    $request->createParallelDataRequest->encryptionKey->type = EncryptionKeyTypeEnum::KMS;
    $request->createParallelDataRequest->name = 'Brad Turcotte Jr.';
    $request->createParallelDataRequest->parallelDataConfig = new ParallelDataConfig();
    $request->createParallelDataRequest->parallelDataConfig->format = ParallelDataFormatEnum::TMX;
    $request->createParallelDataRequest->parallelDataConfig->s3Uri = 'est';
    $request->createParallelDataRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateParallelDataXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_CREATE_PARALLEL_DATA;

    $response = $sdk->sdk->createParallelData($request);

    if ($response->createParallelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParallelData

Deletes a parallel data resource in Amazon Translate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParallelDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteParallelDataRequest();
    $request->deleteParallelDataRequest = new DeleteParallelDataRequest();
    $request->deleteParallelDataRequest->name = 'Corey Hane III';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DeleteParallelDataXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_DELETE_PARALLEL_DATA;

    $response = $sdk->sdk->deleteParallelData($request);

    if ($response->deleteParallelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTerminology

A synchronous action that deletes a custom terminology.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTerminologyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTerminologyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTerminologyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTerminologyRequest();
    $request->deleteTerminologyRequest = new DeleteTerminologyRequest();
    $request->deleteTerminologyRequest->name = 'Jaime O'Hara';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DeleteTerminologyXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_DELETE_TERMINOLOGY;

    $response = $sdk->sdk->deleteTerminology($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTextTranslationJob

Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTextTranslationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTextTranslationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTextTranslationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTextTranslationJobRequest();
    $request->describeTextTranslationJobRequest = new DescribeTextTranslationJobRequest();
    $request->describeTextTranslationJobRequest->jobId = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = DescribeTextTranslationJobXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_DESCRIBE_TEXT_TRANSLATION_JOB;

    $response = $sdk->sdk->describeTextTranslationJob($request);

    if ($response->describeTextTranslationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParallelData

Provides information about a parallel data resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetParallelDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParallelDataRequest();
    $request->getParallelDataRequest = new GetParallelDataRequest();
    $request->getParallelDataRequest->name = 'Mr. Alberta Schuster';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = GetParallelDataXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_GET_PARALLEL_DATA;

    $response = $sdk->sdk->getParallelData($request);

    if ($response->getParallelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTerminology

Retrieves a custom terminology.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminologyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTerminologyRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminologyDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminologyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminologyRequest();
    $request->getTerminologyRequest = new GetTerminologyRequest();
    $request->getTerminologyRequest->name = 'Jan Bednar';
    $request->getTerminologyRequest->terminologyDataFormat = TerminologyDataFormatEnum::TSV;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = GetTerminologyXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_GET_TERMINOLOGY;

    $response = $sdk->sdk->getTerminology($request);

    if ($response->getTerminologyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importTerminology

<p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportTerminologyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportTerminologyRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TerminologyData;
use \OpenAPI\OpenAPI\Models\Shared\DirectionalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TerminologyDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportTerminologyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportTerminologyRequest();
    $request->importTerminologyRequest = new ImportTerminologyRequest();
    $request->importTerminologyRequest->description = 'dolore';
    $request->importTerminologyRequest->encryptionKey = new EncryptionKey();
    $request->importTerminologyRequest->encryptionKey->id = '71b5e6e1-3b99-4d48-8e1e-91e450ad2abd';
    $request->importTerminologyRequest->encryptionKey->type = EncryptionKeyTypeEnum::KMS;
    $request->importTerminologyRequest->mergeStrategy = MergeStrategyEnum::OVERWRITE;
    $request->importTerminologyRequest->name = 'Pauline Deckow';
    $request->importTerminologyRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->importTerminologyRequest->terminologyData = new TerminologyData();
    $request->importTerminologyRequest->terminologyData->directionality = DirectionalityEnum::UNI;
    $request->importTerminologyRequest->terminologyData->file = 'magni';
    $request->importTerminologyRequest->terminologyData->format = TerminologyDataFormatEnum::TSV;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ImportTerminologyXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_IMPORT_TERMINOLOGY;

    $response = $sdk->sdk->importTerminology($request);

    if ($response->importTerminologyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLanguages

Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLanguagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLanguagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisplayLanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLanguagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLanguagesRequest();
    $request->listLanguagesRequest = new ListLanguagesRequest();
    $request->listLanguagesRequest->displayLanguageCode = DisplayLanguageCodeEnum::PT;
    $request->listLanguagesRequest->maxResults = 288476;
    $request->listLanguagesRequest->nextToken = 'delectus';
    $request->maxResults = 'eum';
    $request->nextToken = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = ListLanguagesXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_LIST_LANGUAGES;

    $response = $sdk->sdk->listLanguages($request);

    if ($response->listLanguagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listParallelData

Provides a list of your parallel data resources in Amazon Translate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListParallelDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListParallelDataRequest();
    $request->listParallelDataRequest = new ListParallelDataRequest();
    $request->listParallelDataRequest->maxResults = 223081;
    $request->listParallelDataRequest->nextToken = 'debitis';
    $request->maxResults = 'a';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = ListParallelDataXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_LIST_PARALLEL_DATA;

    $response = $sdk->sdk->listParallelData($request);

    if ($response->listParallelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'cumque';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTerminologies

Provides a list of custom terminologies associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTerminologiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTerminologiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTerminologiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTerminologiesRequest();
    $request->listTerminologiesRequest = new ListTerminologiesRequest();
    $request->listTerminologiesRequest->maxResults = 313218;
    $request->listTerminologiesRequest->nextToken = 'accusamus';
    $request->maxResults = 'delectus';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ListTerminologiesXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_LIST_TERMINOLOGIES;

    $response = $sdk->sdk->listTerminologies($request);

    if ($response->listTerminologiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTextTranslationJobs

Gets a list of the batch translation jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTextTranslationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTextTranslationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextTranslationJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTextTranslationJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTextTranslationJobsRequest();
    $request->listTextTranslationJobsRequest = new ListTextTranslationJobsRequest();
    $request->listTextTranslationJobsRequest->filter = new TextTranslationJobFilter();
    $request->listTextTranslationJobsRequest->filter->jobName = 'deserunt';
    $request->listTextTranslationJobsRequest->filter->jobStatus = JobStatusEnum::COMPLETED;
    $request->listTextTranslationJobsRequest->filter->submittedAfterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T03:14:12.839Z');
    $request->listTextTranslationJobsRequest->filter->submittedBeforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->listTextTranslationJobsRequest->maxResults = 19193;
    $request->listTextTranslationJobsRequest->nextToken = 'nihil';
    $request->maxResults = 'magnam';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListTextTranslationJobsXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_LIST_TEXT_TRANSLATION_JOBS;

    $response = $sdk->sdk->listTextTranslationJobs($request);

    if ($response->listTextTranslationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTextTranslationJob

<p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTextTranslationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTextTranslationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranslationSettings;
use \OpenAPI\OpenAPI\Models\Shared\FormalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProfanityEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartTextTranslationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTextTranslationJobRequest();
    $request->startTextTranslationJobRequest = new StartTextTranslationJobRequest();
    $request->startTextTranslationJobRequest->clientToken = 'vero';
    $request->startTextTranslationJobRequest->dataAccessRoleArn = 'aspernatur';
    $request->startTextTranslationJobRequest->inputDataConfig = new InputDataConfig();
    $request->startTextTranslationJobRequest->inputDataConfig->contentType = 'architecto';
    $request->startTextTranslationJobRequest->inputDataConfig->s3Uri = 'magnam';
    $request->startTextTranslationJobRequest->jobName = 'et';
    $request->startTextTranslationJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startTextTranslationJobRequest->outputDataConfig->encryptionKey = new EncryptionKey();
    $request->startTextTranslationJobRequest->outputDataConfig->encryptionKey->id = '959890af-a563-4e25-96fe-4c8b711e5b7f';
    $request->startTextTranslationJobRequest->outputDataConfig->encryptionKey->type = EncryptionKeyTypeEnum::KMS;
    $request->startTextTranslationJobRequest->outputDataConfig->s3Uri = 'quibusdam';
    $request->startTextTranslationJobRequest->parallelDataNames = [
        'saepe',
    ];
    $request->startTextTranslationJobRequest->settings = new TranslationSettings();
    $request->startTextTranslationJobRequest->settings->formality = FormalityEnum::INFORMAL;
    $request->startTextTranslationJobRequest->settings->profanity = ProfanityEnum::MASK;
    $request->startTextTranslationJobRequest->sourceLanguageCode = 'accusantium';
    $request->startTextTranslationJobRequest->targetLanguageCodes = [
        'praesentium',
    ];
    $request->startTextTranslationJobRequest->terminologyNames = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = StartTextTranslationJobXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_START_TEXT_TRANSLATION_JOB;

    $response = $sdk->sdk->startTextTranslationJob($request);

    if ($response->startTextTranslationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTextTranslationJob

<p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTextTranslationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTextTranslationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTextTranslationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTextTranslationJobRequest();
    $request->stopTextTranslationJobRequest = new StopTextTranslationJobRequest();
    $request->stopTextTranslationJobRequest->jobId = 'accusantium';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = StopTextTranslationJobXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_STOP_TEXT_TRANSLATION_JOB;

    $response = $sdk->sdk->stopTextTranslationJob($request);

    if ($response->stopTextTranslationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'eaque';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateText

Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranslateTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranslationSettings;
use \OpenAPI\OpenAPI\Models\Shared\FormalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProfanityEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranslateTextXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateTextRequest();
    $request->translateTextRequest = new TranslateTextRequest();
    $request->translateTextRequest->settings = new TranslationSettings();
    $request->translateTextRequest->settings->formality = FormalityEnum::FORMAL;
    $request->translateTextRequest->settings->profanity = ProfanityEnum::MASK;
    $request->translateTextRequest->sourceLanguageCode = 'hic';
    $request->translateTextRequest->targetLanguageCode = 'libero';
    $request->translateTextRequest->terminologyNames = [
        'dolores',
        'quis',
        'totam',
    ];
    $request->translateTextRequest->text = 'dignissimos';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = TranslateTextXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_TRANSLATE_TEXT;

    $response = $sdk->sdk->translateText($request);

    if ($response->translateTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'quam';
    $request->untagResourceRequest->tagKeys = [
        'vero',
    ];
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateParallelData

Updates a previously created parallel data resource by importing a new input file from Amazon S3.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParallelDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ParallelDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParallelDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateParallelDataRequest();
    $request->updateParallelDataRequest = new UpdateParallelDataRequest();
    $request->updateParallelDataRequest->clientToken = 'porro';
    $request->updateParallelDataRequest->description = 'consequuntur';
    $request->updateParallelDataRequest->name = 'Jeremiah Beatty';
    $request->updateParallelDataRequest->parallelDataConfig = new ParallelDataConfig();
    $request->updateParallelDataRequest->parallelDataConfig->format = ParallelDataFormatEnum::TSV;
    $request->updateParallelDataRequest->parallelDataConfig->s3Uri = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = UpdateParallelDataXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_UPDATE_PARALLEL_DATA;

    $response = $sdk->sdk->updateParallelData($request);

    if ($response->updateParallelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
