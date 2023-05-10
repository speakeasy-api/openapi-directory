# SDK

## Overview

Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.

Amazon Web Services documentation
<https://docs.aws.amazon.com/healthlake/>
### Available Operations

* [createFHIRDatastore](#createfhirdatastore) - Creates a Data Store that can ingest and export FHIR formatted data.
* [deleteFHIRDatastore](#deletefhirdatastore) - Deletes a Data Store. 
* [describeFHIRDatastore](#describefhirdatastore) - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* [describeFHIRExportJob](#describefhirexportjob) - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* [describeFHIRImportJob](#describefhirimportjob) - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* [listFHIRDatastores](#listfhirdatastores) - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* [listFHIRExportJobs](#listfhirexportjobs) -  Lists all FHIR export jobs associated with an account and their statuses. 
* [listFHIRImportJobs](#listfhirimportjobs) -  Lists all FHIR import jobs associated with an account and their statuses. 
* [listTagsForResource](#listtagsforresource) -  Returns a list of all existing tags associated with a Data Store. 
* [startFHIRExportJob](#startfhirexportjob) - Begins a FHIR export job.
* [startFHIRImportJob](#startfhirimportjob) - Begins a FHIR Import job.
* [tagResource](#tagresource) -  Adds a user specifed key and value tag to a Data Store. 
* [untagResource](#untagresource) -  Removes tags from a Data Store. 

## createFHIRDatastore

Creates a Data Store that can ingest and export FHIR formatted data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\FHIRVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreloadDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\PreloadDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KmsEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\CmkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFHIRDatastoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFHIRDatastoreRequest();
    $request->createFHIRDatastoreRequest = new CreateFHIRDatastoreRequest();
    $request->createFHIRDatastoreRequest->clientToken = 'iure';
    $request->createFHIRDatastoreRequest->datastoreName = 'magnam';
    $request->createFHIRDatastoreRequest->datastoreTypeVersion = FHIRVersionEnum::R4;
    $request->createFHIRDatastoreRequest->preloadDataConfig = new PreloadDataConfig();
    $request->createFHIRDatastoreRequest->preloadDataConfig->preloadDataType = PreloadDataTypeEnum::SYNTHEA;
    $request->createFHIRDatastoreRequest->sseConfiguration = new SseConfiguration();
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig = new KmsEncryptionConfig();
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig->cmkType = CmkTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig->kmsKeyId = 'ipsa';
    $request->createFHIRDatastoreRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = CreateFHIRDatastoreXAmzTargetEnum::HEALTH_LAKE_CREATE_FHIR_DATASTORE;

    $response = $sdk->sdk->createFHIRDatastore($request);

    if ($response->createFHIRDatastoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFHIRDatastore

Deletes a Data Store. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFHIRDatastoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFHIRDatastoreRequest();
    $request->deleteFHIRDatastoreRequest = new DeleteFHIRDatastoreRequest();
    $request->deleteFHIRDatastoreRequest->datastoreId = 'excepturi';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = DeleteFHIRDatastoreXAmzTargetEnum::HEALTH_LAKE_DELETE_FHIR_DATASTORE;

    $response = $sdk->sdk->deleteFHIRDatastore($request);

    if ($response->deleteFHIRDatastoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFHIRDatastore

Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFHIRDatastoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFHIRDatastoreRequest();
    $request->describeFHIRDatastoreRequest = new DescribeFHIRDatastoreRequest();
    $request->describeFHIRDatastoreRequest->datastoreId = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = DescribeFHIRDatastoreXAmzTargetEnum::HEALTH_LAKE_DESCRIBE_FHIR_DATASTORE;

    $response = $sdk->sdk->describeFHIRDatastore($request);

    if ($response->describeFHIRDatastoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFHIRExportJob

Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFHIRExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFHIRExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFHIRExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFHIRExportJobRequest();
    $request->describeFHIRExportJobRequest = new DescribeFHIRExportJobRequest();
    $request->describeFHIRExportJobRequest->datastoreId = 'maiores';
    $request->describeFHIRExportJobRequest->jobId = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DescribeFHIRExportJobXAmzTargetEnum::HEALTH_LAKE_DESCRIBE_FHIR_EXPORT_JOB;

    $response = $sdk->sdk->describeFHIRExportJob($request);

    if ($response->describeFHIRExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFHIRImportJob

Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFHIRImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFHIRImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFHIRImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFHIRImportJobRequest();
    $request->describeFHIRImportJobRequest = new DescribeFHIRImportJobRequest();
    $request->describeFHIRImportJobRequest->datastoreId = 'nam';
    $request->describeFHIRImportJobRequest->jobId = 'officia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = DescribeFHIRImportJobXAmzTargetEnum::HEALTH_LAKE_DESCRIBE_FHIR_IMPORT_JOB;

    $response = $sdk->sdk->describeFHIRImportJob($request);

    if ($response->describeFHIRImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFHIRDatastores

Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFHIRDatastoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFHIRDatastoresRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreFilter;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFHIRDatastoresXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFHIRDatastoresRequest();
    $request->listFHIRDatastoresRequest = new ListFHIRDatastoresRequest();
    $request->listFHIRDatastoresRequest->filter = new DatastoreFilter();
    $request->listFHIRDatastoresRequest->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T03:15:36.542Z');
    $request->listFHIRDatastoresRequest->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T23:43:42.369Z');
    $request->listFHIRDatastoresRequest->filter->datastoreName = 'impedit';
    $request->listFHIRDatastoresRequest->filter->datastoreStatus = DatastoreStatusEnum::DELETING;
    $request->listFHIRDatastoresRequest->maxResults = 456150;
    $request->listFHIRDatastoresRequest->nextToken = 'ipsum';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ListFHIRDatastoresXAmzTargetEnum::HEALTH_LAKE_LIST_FHIR_DATASTORES;

    $response = $sdk->sdk->listFHIRDatastores($request);

    if ($response->listFHIRDatastoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFHIRExportJobs

 Lists all FHIR export jobs associated with an account and their statuses. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFHIRExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFHIRExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFHIRExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFHIRExportJobsRequest();
    $request->listFHIRExportJobsRequest = new ListFHIRExportJobsRequest();
    $request->listFHIRExportJobsRequest->datastoreId = 'laboriosam';
    $request->listFHIRExportJobsRequest->jobName = 'hic';
    $request->listFHIRExportJobsRequest->jobStatus = JobStatusEnum::FAILED;
    $request->listFHIRExportJobsRequest->maxResults = 681820;
    $request->listFHIRExportJobsRequest->nextToken = 'in';
    $request->listFHIRExportJobsRequest->submittedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T05:33:50.280Z');
    $request->listFHIRExportJobsRequest->submittedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T15:25:35.140Z');
    $request->maxResults = 'quidem';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ListFHIRExportJobsXAmzTargetEnum::HEALTH_LAKE_LIST_FHIR_EXPORT_JOBS;

    $response = $sdk->sdk->listFHIRExportJobs($request);

    if ($response->listFHIRExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFHIRImportJobs

 Lists all FHIR import jobs associated with an account and their statuses. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFHIRImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFHIRImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFHIRImportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFHIRImportJobsRequest();
    $request->listFHIRImportJobsRequest = new ListFHIRImportJobsRequest();
    $request->listFHIRImportJobsRequest->datastoreId = 'corporis';
    $request->listFHIRImportJobsRequest->jobName = 'explicabo';
    $request->listFHIRImportJobsRequest->jobStatus = JobStatusEnum::COMPLETED;
    $request->listFHIRImportJobsRequest->maxResults = 315428;
    $request->listFHIRImportJobsRequest->nextToken = 'omnis';
    $request->listFHIRImportJobsRequest->submittedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T08:35:09.957Z');
    $request->listFHIRImportJobsRequest->submittedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T22:47:10.600Z');
    $request->maxResults = 'iure';
    $request->nextToken = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = ListFHIRImportJobsXAmzTargetEnum::HEALTH_LAKE_LIST_FHIR_IMPORT_JOBS;

    $response = $sdk->sdk->listFHIRImportJobs($request);

    if ($response->listFHIRImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Returns a list of all existing tags associated with a Data Store. 

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
    $request->listTagsForResourceRequest->resourceARN = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::HEALTH_LAKE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFHIRExportJob

Begins a FHIR export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFHIRExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFHIRExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3Configuration;
use \OpenAPI\OpenAPI\Models\Operations\StartFHIRExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFHIRExportJobRequest();
    $request->startFHIRExportJobRequest = new StartFHIRExportJobRequest();
    $request->startFHIRExportJobRequest->clientToken = 'error';
    $request->startFHIRExportJobRequest->dataAccessRoleArn = 'quia';
    $request->startFHIRExportJobRequest->datastoreId = 'quis';
    $request->startFHIRExportJobRequest->jobName = 'vitae';
    $request->startFHIRExportJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startFHIRExportJobRequest->outputDataConfig->s3Configuration = new S3Configuration();
    $request->startFHIRExportJobRequest->outputDataConfig->s3Configuration->kmsKeyId = 'laborum';
    $request->startFHIRExportJobRequest->outputDataConfig->s3Configuration->s3Uri = 'animi';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = StartFHIRExportJobXAmzTargetEnum::HEALTH_LAKE_START_FHIR_EXPORT_JOB;

    $response = $sdk->sdk->startFHIRExportJob($request);

    if ($response->startFHIRExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFHIRImportJob

Begins a FHIR Import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFHIRImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFHIRImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3Configuration;
use \OpenAPI\OpenAPI\Models\Operations\StartFHIRImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFHIRImportJobRequest();
    $request->startFHIRImportJobRequest = new StartFHIRImportJobRequest();
    $request->startFHIRImportJobRequest->clientToken = 'possimus';
    $request->startFHIRImportJobRequest->dataAccessRoleArn = 'aut';
    $request->startFHIRImportJobRequest->datastoreId = 'quasi';
    $request->startFHIRImportJobRequest->inputDataConfig = new InputDataConfig();
    $request->startFHIRImportJobRequest->inputDataConfig->s3Uri = 'error';
    $request->startFHIRImportJobRequest->jobName = 'temporibus';
    $request->startFHIRImportJobRequest->jobOutputDataConfig = new OutputDataConfig();
    $request->startFHIRImportJobRequest->jobOutputDataConfig->s3Configuration = new S3Configuration();
    $request->startFHIRImportJobRequest->jobOutputDataConfig->s3Configuration->kmsKeyId = 'laborum';
    $request->startFHIRImportJobRequest->jobOutputDataConfig->s3Configuration->s3Uri = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = StartFHIRImportJobXAmzTargetEnum::HEALTH_LAKE_START_FHIR_IMPORT_JOB;

    $response = $sdk->sdk->startFHIRImportJob($request);

    if ($response->startFHIRImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Adds a user specifed key and value tag to a Data Store. 

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
    $request->tagResourceRequest->resourceARN = 'omnis';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::HEALTH_LAKE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Removes tags from a Data Store. 

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
    $request->untagResourceRequest->resourceARN = 'corporis';
    $request->untagResourceRequest->tagKeys = [
        'iusto',
        'dicta',
    ];
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::HEALTH_LAKE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
