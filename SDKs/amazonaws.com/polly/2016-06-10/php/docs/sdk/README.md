# SDK

## Overview

<p>Amazon Polly is a web service that makes it easy to synthesize speech from text.</p> <p>The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/polly/>
### Available Operations

* [deleteLexicon](#deletelexicon) - <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
* [describeVoices](#describevoices) - <p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>
* [getLexicon](#getlexicon) - Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
* [getSpeechSynthesisTask](#getspeechsynthesistask) - Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.
* [listLexicons](#listlexicons) - Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
* [listSpeechSynthesisTasks](#listspeechsynthesistasks) - Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.
* [putLexicon](#putlexicon) - <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
* [startSpeechSynthesisTask](#startspeechsynthesistask) - Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.
* [synthesizeSpeech](#synthesizespeech) - Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.

## deleteLexicon

<p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLexiconRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLexiconRequest();
    $request->lexiconName = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->deleteLexicon($request);

    if ($response->deleteLexiconOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVoices

<p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVoicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVoicesEngineEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVoicesLanguageCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVoicesRequest();
    $request->engine = DescribeVoicesEngineEnum::NEURAL;
    $request->includeAdditionalLanguageCodes = false;
    $request->languageCode = DescribeVoicesLanguageCodeEnum::EN_US;
    $request->nextToken = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->describeVoices($request);

    if ($response->describeVoicesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLexicon

Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLexiconRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLexiconRequest();
    $request->lexiconName = 'recusandae';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getLexicon($request);

    if ($response->getLexiconOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpeechSynthesisTask

Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpeechSynthesisTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpeechSynthesisTaskRequest();
    $request->taskId = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getSpeechSynthesisTask($request);

    if ($response->getSpeechSynthesisTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLexicons

Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLexiconsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLexiconsRequest();
    $request->nextToken = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->listLexicons($request);

    if ($response->listLexiconsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSpeechSynthesisTasks

Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSpeechSynthesisTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSpeechSynthesisTasksStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSpeechSynthesisTasksRequest();
    $request->maxResults = 639921;
    $request->nextToken = 'occaecati';
    $request->status = ListSpeechSynthesisTasksStatusEnum::SCHEDULED;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->listSpeechSynthesisTasks($request);

    if ($response->listSpeechSynthesisTasksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLexicon

<p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLexiconRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLexiconRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLexiconRequest();
    $request->lexiconName = 'modi';
    $request->requestBody = new PutLexiconRequestBody();
    $request->requestBody->content = 'qui';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->putLexicon($request);

    if ($response->putLexiconOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSpeechSynthesisTask

Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequestBodyEngineEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpeechMarkTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequestBodyTextTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSpeechSynthesisTaskRequest();
    $request->requestBody = new StartSpeechSynthesisTaskRequestBody();
    $request->requestBody->engine = StartSpeechSynthesisTaskRequestBodyEngineEnum::STANDARD;
    $request->requestBody->languageCode = StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum::PLPL;
    $request->requestBody->lexiconNames = [
        'iste',
    ];
    $request->requestBody->outputFormat = StartSpeechSynthesisTaskRequestBodyOutputFormatEnum::JSON;
    $request->requestBody->outputS3BucketName = 'natus';
    $request->requestBody->outputS3KeyPrefix = 'laboriosam';
    $request->requestBody->sampleRate = 'hic';
    $request->requestBody->snsTopicArn = 'saepe';
    $request->requestBody->speechMarkTypes = [
        SpeechMarkTypeEnum::SSML,
        SpeechMarkTypeEnum::SSML,
        SpeechMarkTypeEnum::VISEME,
    ];
    $request->requestBody->text = 'iure';
    $request->requestBody->textType = StartSpeechSynthesisTaskRequestBodyTextTypeEnum::TEXT;
    $request->requestBody->voiceId = StartSpeechSynthesisTaskRequestBodyVoiceIdEnum::ZEINA;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->startSpeechSynthesisTask($request);

    if ($response->startSpeechSynthesisTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## synthesizeSpeech

Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequest;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequestBodyEngineEnum;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequestBodyLanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequestBodyOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpeechMarkTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequestBodyTextTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SynthesizeSpeechRequestBodyVoiceIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SynthesizeSpeechRequest();
    $request->requestBody = new SynthesizeSpeechRequestBody();
    $request->requestBody->engine = SynthesizeSpeechRequestBodyEngineEnum::STANDARD;
    $request->requestBody->languageCode = SynthesizeSpeechRequestBodyLanguageCodeEnum::ES_US;
    $request->requestBody->lexiconNames = [
        'nobis',
    ];
    $request->requestBody->outputFormat = SynthesizeSpeechRequestBodyOutputFormatEnum::MP3;
    $request->requestBody->sampleRate = 'omnis';
    $request->requestBody->speechMarkTypes = [
        SpeechMarkTypeEnum::SSML,
        SpeechMarkTypeEnum::VISEME,
    ];
    $request->requestBody->text = 'accusantium';
    $request->requestBody->textType = SynthesizeSpeechRequestBodyTextTypeEnum::SSML;
    $request->requestBody->voiceId = SynthesizeSpeechRequestBodyVoiceIdEnum::SALLI;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->synthesizeSpeech($request);

    if ($response->synthesizeSpeechOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
