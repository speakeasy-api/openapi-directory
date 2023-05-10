# SDK

## Overview

 Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/comprehendmedical/>
### Available Operations

* [describeEntitiesDetectionV2Job](#describeentitiesdetectionv2job) - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* [describeIcd10CMInferenceJob](#describeicd10cminferencejob) - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* [describePHIDetectionJob](#describephidetectionjob) - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* [describeRxNormInferenceJob](#describerxnorminferencejob) - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* [describeSNOMEDCTInferenceJob](#describesnomedctinferencejob) -  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 
* [~~detectEntities~~](#detectentities) - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p> :warning: **Deprecated**
* [detectEntitiesV2](#detectentitiesv2) - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* [detectPHI](#detectphi) -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* [inferIcd10CM](#infericd10cm) - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [inferRxNorm](#inferrxnorm) - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [inferSNOMEDCT](#infersnomedct) -  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
* [listEntitiesDetectionV2Jobs](#listentitiesdetectionv2jobs) - Gets a list of medical entity detection jobs that you have submitted.
* [listIcd10CMInferenceJobs](#listicd10cminferencejobs) - Gets a list of InferICD10CM jobs that you have submitted.
* [listPHIDetectionJobs](#listphidetectionjobs) - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* [listRxNormInferenceJobs](#listrxnorminferencejobs) - Gets a list of InferRxNorm jobs that you have submitted.
* [listSNOMEDCTInferenceJobs](#listsnomedctinferencejobs) -  Gets a list of InferSNOMEDCT jobs a user has submitted. 
* [startEntitiesDetectionV2Job](#startentitiesdetectionv2job) - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* [startIcd10CMInferenceJob](#starticd10cminferencejob) - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* [startPHIDetectionJob](#startphidetectionjob) - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* [startRxNormInferenceJob](#startrxnorminferencejob) - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* [startSNOMEDCTInferenceJob](#startsnomedctinferencejob) -  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 
* [stopEntitiesDetectionV2Job](#stopentitiesdetectionv2job) - Stops a medical entities detection job in progress.
* [stopIcd10CMInferenceJob](#stopicd10cminferencejob) - Stops an InferICD10CM inference job in progress.
* [stopPHIDetectionJob](#stopphidetectionjob) - Stops a protected health information (PHI) detection job in progress.
* [stopRxNormInferenceJob](#stoprxnorminferencejob) - Stops an InferRxNorm inference job in progress.
* [stopSNOMEDCTInferenceJob](#stopsnomedctinferencejob) -  Stops an InferSNOMEDCT inference job in progress. 

## describeEntitiesDetectionV2Job

Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitiesDetectionV2JobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEntitiesDetectionV2JobRequest();
    $request->describeEntitiesDetectionV2JobRequest = new DescribeEntitiesDetectionV2JobRequest();
    $request->describeEntitiesDetectionV2JobRequest->jobId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DescribeEntitiesDetectionV2JobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DESCRIBE_ENTITIES_DETECTION_V2_JOB;

    $response = $sdk->sdk->describeEntitiesDetectionV2Job($request);

    if ($response->describeEntitiesDetectionV2JobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIcd10CMInferenceJob

Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIcd10CMInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIcd10CMInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIcd10CMInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIcd10CMInferenceJobRequest();
    $request->describeIcd10CMInferenceJobRequest = new DescribeIcd10CMInferenceJobRequest();
    $request->describeIcd10CMInferenceJobRequest->jobId = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DescribeIcd10CMInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DESCRIBE_ICD10_CM_INFERENCE_JOB;

    $response = $sdk->sdk->describeIcd10CMInferenceJob($request);

    if ($response->describeIcd10CMInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePHIDetectionJob

Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePHIDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePHIDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePHIDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePHIDetectionJobRequest();
    $request->describePHIDetectionJobRequest = new DescribePHIDetectionJobRequest();
    $request->describePHIDetectionJobRequest->jobId = 'excepturi';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = DescribePHIDetectionJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DESCRIBE_PHI_DETECTION_JOB;

    $response = $sdk->sdk->describePHIDetectionJob($request);

    if ($response->describePHIDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRxNormInferenceJob

Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRxNormInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRxNormInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRxNormInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRxNormInferenceJobRequest();
    $request->describeRxNormInferenceJobRequest = new DescribeRxNormInferenceJobRequest();
    $request->describeRxNormInferenceJobRequest->jobId = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = DescribeRxNormInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DESCRIBE_RX_NORM_INFERENCE_JOB;

    $response = $sdk->sdk->describeRxNormInferenceJob($request);

    if ($response->describeRxNormInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSNOMEDCTInferenceJob

 Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSNOMEDCTInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSNOMEDCTInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSNOMEDCTInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSNOMEDCTInferenceJobRequest();
    $request->describeSNOMEDCTInferenceJobRequest = new DescribeSNOMEDCTInferenceJobRequest();
    $request->describeSNOMEDCTInferenceJobRequest->jobId = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeSNOMEDCTInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DESCRIBE_SNOMEDCT_INFERENCE_JOB;

    $response = $sdk->sdk->describeSNOMEDCTInferenceJob($request);

    if ($response->describeSNOMEDCTInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~detectEntities~~

<p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectEntitiesRequest();
    $request->detectEntitiesRequest = new DetectEntitiesRequest();
    $request->detectEntitiesRequest->text = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = DetectEntitiesXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DETECT_ENTITIES;

    $response = $sdk->sdk->detectEntities($request);

    if ($response->detectEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectEntitiesV2

<p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectEntitiesV2Request;
use \OpenAPI\OpenAPI\Models\Shared\DetectEntitiesV2Request;
use \OpenAPI\OpenAPI\Models\Operations\DetectEntitiesV2XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectEntitiesV2Request();
    $request->detectEntitiesV2Request = new DetectEntitiesV2Request();
    $request->detectEntitiesV2Request->text = 'totam';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = DetectEntitiesV2XAmzTargetEnum::COMPREHEND_MEDICAL20181030_DETECT_ENTITIES_V2;

    $response = $sdk->sdk->detectEntitiesV2($request);

    if ($response->detectEntitiesV2Response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectPHI

 Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectPHIRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectPHIRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectPHIXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectPHIRequest();
    $request->detectPHIRequest = new DetectPHIRequest();
    $request->detectPHIRequest->text = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DetectPHIXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DETECT_PHI;

    $response = $sdk->sdk->detectPHI($request);

    if ($response->detectPHIResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inferIcd10CM

InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InferIcd10CMRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferIcd10CMRequest;
use \OpenAPI\OpenAPI\Models\Operations\InferIcd10CMXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InferIcd10CMRequest();
    $request->inferIcd10CMRequest = new InferIcd10CMRequest();
    $request->inferIcd10CMRequest->text = 'iste';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = InferIcd10CMXAmzTargetEnum::COMPREHEND_MEDICAL20181030_INFER_ICD10_CM;

    $response = $sdk->sdk->inferIcd10CM($request);

    if ($response->inferIcd10CMResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inferRxNorm

InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InferRxNormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferRxNormRequest;
use \OpenAPI\OpenAPI\Models\Operations\InferRxNormXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InferRxNormRequest();
    $request->inferRxNormRequest = new InferRxNormRequest();
    $request->inferRxNormRequest->text = 'corporis';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = InferRxNormXAmzTargetEnum::COMPREHEND_MEDICAL20181030_INFER_RX_NORM;

    $response = $sdk->sdk->inferRxNorm($request);

    if ($response->inferRxNormResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inferSNOMEDCT

 InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InferSNOMEDCTRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferSNOMEDCTRequest;
use \OpenAPI\OpenAPI\Models\Operations\InferSNOMEDCTXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InferSNOMEDCTRequest();
    $request->inferSNOMEDCTRequest = new InferSNOMEDCTRequest();
    $request->inferSNOMEDCTRequest->text = 'est';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = InferSNOMEDCTXAmzTargetEnum::COMPREHEND_MEDICAL20181030_INFER_SNOMEDCT;

    $response = $sdk->sdk->inferSNOMEDCT($request);

    if ($response->inferSNOMEDCTResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntitiesDetectionV2Jobs

Gets a list of medical entity detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesDetectionV2JobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEntitiesDetectionV2JobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComprehendMedicalAsyncJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesDetectionV2JobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntitiesDetectionV2JobsRequest();
    $request->listEntitiesDetectionV2JobsRequest = new ListEntitiesDetectionV2JobsRequest();
    $request->listEntitiesDetectionV2JobsRequest->filter = new ComprehendMedicalAsyncJobFilter();
    $request->listEntitiesDetectionV2JobsRequest->filter->jobName = 'enim';
    $request->listEntitiesDetectionV2JobsRequest->filter->jobStatus = JobStatusEnum::FAILED;
    $request->listEntitiesDetectionV2JobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T08:35:09.957Z');
    $request->listEntitiesDetectionV2JobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T22:47:10.600Z');
    $request->listEntitiesDetectionV2JobsRequest->maxResults = 438601;
    $request->listEntitiesDetectionV2JobsRequest->nextToken = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = ListEntitiesDetectionV2JobsXAmzTargetEnum::COMPREHEND_MEDICAL20181030_LIST_ENTITIES_DETECTION_V2_JOBS;

    $response = $sdk->sdk->listEntitiesDetectionV2Jobs($request);

    if ($response->listEntitiesDetectionV2JobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIcd10CMInferenceJobs

Gets a list of InferICD10CM jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIcd10CMInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListIcd10CMInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComprehendMedicalAsyncJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListIcd10CMInferenceJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIcd10CMInferenceJobsRequest();
    $request->listIcd10CMInferenceJobsRequest = new ListIcd10CMInferenceJobsRequest();
    $request->listIcd10CMInferenceJobsRequest->filter = new ComprehendMedicalAsyncJobFilter();
    $request->listIcd10CMInferenceJobsRequest->filter->jobName = 'repellat';
    $request->listIcd10CMInferenceJobsRequest->filter->jobStatus = JobStatusEnum::FAILED;
    $request->listIcd10CMInferenceJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T02:19:51.375Z');
    $request->listIcd10CMInferenceJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-14T19:07:02.935Z');
    $request->listIcd10CMInferenceJobsRequest->maxResults = 474697;
    $request->listIcd10CMInferenceJobsRequest->nextToken = 'velit';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListIcd10CMInferenceJobsXAmzTargetEnum::COMPREHEND_MEDICAL20181030_LIST_ICD10_CM_INFERENCE_JOBS;

    $response = $sdk->sdk->listIcd10CMInferenceJobs($request);

    if ($response->listIcd10CMInferenceJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPHIDetectionJobs

Gets a list of protected health information (PHI) detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPHIDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPHIDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComprehendMedicalAsyncJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPHIDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPHIDetectionJobsRequest();
    $request->listPHIDetectionJobsRequest = new ListPHIDetectionJobsRequest();
    $request->listPHIDetectionJobsRequest->filter = new ComprehendMedicalAsyncJobFilter();
    $request->listPHIDetectionJobsRequest->filter->jobName = 'odit';
    $request->listPHIDetectionJobsRequest->filter->jobStatus = JobStatusEnum::STOP_REQUESTED;
    $request->listPHIDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T09:45:27.272Z');
    $request->listPHIDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-04T04:15:52.352Z');
    $request->listPHIDetectionJobsRequest->maxResults = 820994;
    $request->listPHIDetectionJobsRequest->nextToken = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListPHIDetectionJobsXAmzTargetEnum::COMPREHEND_MEDICAL20181030_LIST_PHI_DETECTION_JOBS;

    $response = $sdk->sdk->listPHIDetectionJobs($request);

    if ($response->listPHIDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRxNormInferenceJobs

Gets a list of InferRxNorm jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRxNormInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRxNormInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComprehendMedicalAsyncJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRxNormInferenceJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRxNormInferenceJobsRequest();
    $request->listRxNormInferenceJobsRequest = new ListRxNormInferenceJobsRequest();
    $request->listRxNormInferenceJobsRequest->filter = new ComprehendMedicalAsyncJobFilter();
    $request->listRxNormInferenceJobsRequest->filter->jobName = 'vero';
    $request->listRxNormInferenceJobsRequest->filter->jobStatus = JobStatusEnum::PARTIAL_SUCCESS;
    $request->listRxNormInferenceJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T23:08:44.457Z');
    $request->listRxNormInferenceJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-25T05:33:11.349Z');
    $request->listRxNormInferenceJobsRequest->maxResults = 451159;
    $request->listRxNormInferenceJobsRequest->nextToken = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = ListRxNormInferenceJobsXAmzTargetEnum::COMPREHEND_MEDICAL20181030_LIST_RX_NORM_INFERENCE_JOBS;

    $response = $sdk->sdk->listRxNormInferenceJobs($request);

    if ($response->listRxNormInferenceJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSNOMEDCTInferenceJobs

 Gets a list of InferSNOMEDCT jobs a user has submitted. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSNOMEDCTInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSNOMEDCTInferenceJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComprehendMedicalAsyncJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSNOMEDCTInferenceJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSNOMEDCTInferenceJobsRequest();
    $request->listSNOMEDCTInferenceJobsRequest = new ListSNOMEDCTInferenceJobsRequest();
    $request->listSNOMEDCTInferenceJobsRequest->filter = new ComprehendMedicalAsyncJobFilter();
    $request->listSNOMEDCTInferenceJobsRequest->filter->jobName = 'dolore';
    $request->listSNOMEDCTInferenceJobsRequest->filter->jobStatus = JobStatusEnum::PARTIAL_SUCCESS;
    $request->listSNOMEDCTInferenceJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T15:19:40.519Z');
    $request->listSNOMEDCTInferenceJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T15:01:52.114Z');
    $request->listSNOMEDCTInferenceJobsRequest->maxResults = 414263;
    $request->listSNOMEDCTInferenceJobsRequest->nextToken = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = ListSNOMEDCTInferenceJobsXAmzTargetEnum::COMPREHEND_MEDICAL20181030_LIST_SNOMEDCT_INFERENCE_JOBS;

    $response = $sdk->sdk->listSNOMEDCTInferenceJobs($request);

    if ($response->listSNOMEDCTInferenceJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEntitiesDetectionV2Job

Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartEntitiesDetectionV2JobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEntitiesDetectionV2JobRequest();
    $request->startEntitiesDetectionV2JobRequest = new StartEntitiesDetectionV2JobRequest();
    $request->startEntitiesDetectionV2JobRequest->clientRequestToken = 'praesentium';
    $request->startEntitiesDetectionV2JobRequest->dataAccessRoleArn = 'rem';
    $request->startEntitiesDetectionV2JobRequest->inputDataConfig = new InputDataConfig();
    $request->startEntitiesDetectionV2JobRequest->inputDataConfig->s3Bucket = 'voluptates';
    $request->startEntitiesDetectionV2JobRequest->inputDataConfig->s3Key = 'quasi';
    $request->startEntitiesDetectionV2JobRequest->jobName = 'repudiandae';
    $request->startEntitiesDetectionV2JobRequest->kmsKey = 'sint';
    $request->startEntitiesDetectionV2JobRequest->languageCode = LanguageCodeEnum::EN;
    $request->startEntitiesDetectionV2JobRequest->outputDataConfig = new OutputDataConfig();
    $request->startEntitiesDetectionV2JobRequest->outputDataConfig->s3Bucket = 'veritatis';
    $request->startEntitiesDetectionV2JobRequest->outputDataConfig->s3Key = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = StartEntitiesDetectionV2JobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_START_ENTITIES_DETECTION_V2_JOB;

    $response = $sdk->sdk->startEntitiesDetectionV2Job($request);

    if ($response->startEntitiesDetectionV2JobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startIcd10CMInferenceJob

Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartIcd10CMInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartIcd10CMInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartIcd10CMInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartIcd10CMInferenceJobRequest();
    $request->startIcd10CMInferenceJobRequest = new StartIcd10CMInferenceJobRequest();
    $request->startIcd10CMInferenceJobRequest->clientRequestToken = 'distinctio';
    $request->startIcd10CMInferenceJobRequest->dataAccessRoleArn = 'quibusdam';
    $request->startIcd10CMInferenceJobRequest->inputDataConfig = new InputDataConfig();
    $request->startIcd10CMInferenceJobRequest->inputDataConfig->s3Bucket = 'labore';
    $request->startIcd10CMInferenceJobRequest->inputDataConfig->s3Key = 'modi';
    $request->startIcd10CMInferenceJobRequest->jobName = 'qui';
    $request->startIcd10CMInferenceJobRequest->kmsKey = 'aliquid';
    $request->startIcd10CMInferenceJobRequest->languageCode = LanguageCodeEnum::EN;
    $request->startIcd10CMInferenceJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startIcd10CMInferenceJobRequest->outputDataConfig->s3Bucket = 'cupiditate';
    $request->startIcd10CMInferenceJobRequest->outputDataConfig->s3Key = 'quos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = StartIcd10CMInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_START_ICD10_CM_INFERENCE_JOB;

    $response = $sdk->sdk->startIcd10CMInferenceJob($request);

    if ($response->startIcd10CMInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPHIDetectionJob

Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartPHIDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartPHIDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartPHIDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPHIDetectionJobRequest();
    $request->startPHIDetectionJobRequest = new StartPHIDetectionJobRequest();
    $request->startPHIDetectionJobRequest->clientRequestToken = 'excepturi';
    $request->startPHIDetectionJobRequest->dataAccessRoleArn = 'tempora';
    $request->startPHIDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startPHIDetectionJobRequest->inputDataConfig->s3Bucket = 'facilis';
    $request->startPHIDetectionJobRequest->inputDataConfig->s3Key = 'tempore';
    $request->startPHIDetectionJobRequest->jobName = 'labore';
    $request->startPHIDetectionJobRequest->kmsKey = 'delectus';
    $request->startPHIDetectionJobRequest->languageCode = LanguageCodeEnum::EN;
    $request->startPHIDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startPHIDetectionJobRequest->outputDataConfig->s3Bucket = 'eum';
    $request->startPHIDetectionJobRequest->outputDataConfig->s3Key = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = StartPHIDetectionJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_START_PHI_DETECTION_JOB;

    $response = $sdk->sdk->startPHIDetectionJob($request);

    if ($response->startPHIDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRxNormInferenceJob

Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRxNormInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRxNormInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartRxNormInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRxNormInferenceJobRequest();
    $request->startRxNormInferenceJobRequest = new StartRxNormInferenceJobRequest();
    $request->startRxNormInferenceJobRequest->clientRequestToken = 'dolor';
    $request->startRxNormInferenceJobRequest->dataAccessRoleArn = 'debitis';
    $request->startRxNormInferenceJobRequest->inputDataConfig = new InputDataConfig();
    $request->startRxNormInferenceJobRequest->inputDataConfig->s3Bucket = 'a';
    $request->startRxNormInferenceJobRequest->inputDataConfig->s3Key = 'dolorum';
    $request->startRxNormInferenceJobRequest->jobName = 'in';
    $request->startRxNormInferenceJobRequest->kmsKey = 'in';
    $request->startRxNormInferenceJobRequest->languageCode = LanguageCodeEnum::EN;
    $request->startRxNormInferenceJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startRxNormInferenceJobRequest->outputDataConfig->s3Bucket = 'illum';
    $request->startRxNormInferenceJobRequest->outputDataConfig->s3Key = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = StartRxNormInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_START_RX_NORM_INFERENCE_JOB;

    $response = $sdk->sdk->startRxNormInferenceJob($request);

    if ($response->startRxNormInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSNOMEDCTInferenceJob

 Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSNOMEDCTInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSNOMEDCTInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartSNOMEDCTInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSNOMEDCTInferenceJobRequest();
    $request->startSNOMEDCTInferenceJobRequest = new StartSNOMEDCTInferenceJobRequest();
    $request->startSNOMEDCTInferenceJobRequest->clientRequestToken = 'laborum';
    $request->startSNOMEDCTInferenceJobRequest->dataAccessRoleArn = 'accusamus';
    $request->startSNOMEDCTInferenceJobRequest->inputDataConfig = new InputDataConfig();
    $request->startSNOMEDCTInferenceJobRequest->inputDataConfig->s3Bucket = 'non';
    $request->startSNOMEDCTInferenceJobRequest->inputDataConfig->s3Key = 'occaecati';
    $request->startSNOMEDCTInferenceJobRequest->jobName = 'enim';
    $request->startSNOMEDCTInferenceJobRequest->kmsKey = 'accusamus';
    $request->startSNOMEDCTInferenceJobRequest->languageCode = LanguageCodeEnum::EN;
    $request->startSNOMEDCTInferenceJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startSNOMEDCTInferenceJobRequest->outputDataConfig->s3Bucket = 'delectus';
    $request->startSNOMEDCTInferenceJobRequest->outputDataConfig->s3Key = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = StartSNOMEDCTInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_START_SNOMEDCT_INFERENCE_JOB;

    $response = $sdk->sdk->startSNOMEDCTInferenceJob($request);

    if ($response->startSNOMEDCTInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEntitiesDetectionV2Job

Stops a medical entities detection job in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEntitiesDetectionV2JobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEntitiesDetectionV2JobRequest();
    $request->stopEntitiesDetectionV2JobRequest = new StopEntitiesDetectionV2JobRequest();
    $request->stopEntitiesDetectionV2JobRequest->jobId = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = StopEntitiesDetectionV2JobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_STOP_ENTITIES_DETECTION_V2_JOB;

    $response = $sdk->sdk->stopEntitiesDetectionV2Job($request);

    if ($response->stopEntitiesDetectionV2JobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopIcd10CMInferenceJob

Stops an InferICD10CM inference job in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopIcd10CMInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopIcd10CMInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopIcd10CMInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopIcd10CMInferenceJobRequest();
    $request->stopIcd10CMInferenceJobRequest = new StopIcd10CMInferenceJobRequest();
    $request->stopIcd10CMInferenceJobRequest->jobId = 'magnam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = StopIcd10CMInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_STOP_ICD10_CM_INFERENCE_JOB;

    $response = $sdk->sdk->stopIcd10CMInferenceJob($request);

    if ($response->stopIcd10CMInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPHIDetectionJob

Stops a protected health information (PHI) detection job in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopPHIDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopPHIDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopPHIDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPHIDetectionJobRequest();
    $request->stopPHIDetectionJobRequest = new StopPHIDetectionJobRequest();
    $request->stopPHIDetectionJobRequest->jobId = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = StopPHIDetectionJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_STOP_PHI_DETECTION_JOB;

    $response = $sdk->sdk->stopPHIDetectionJob($request);

    if ($response->stopPHIDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopRxNormInferenceJob

Stops an InferRxNorm inference job in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopRxNormInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopRxNormInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopRxNormInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopRxNormInferenceJobRequest();
    $request->stopRxNormInferenceJobRequest = new StopRxNormInferenceJobRequest();
    $request->stopRxNormInferenceJobRequest->jobId = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = StopRxNormInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_STOP_RX_NORM_INFERENCE_JOB;

    $response = $sdk->sdk->stopRxNormInferenceJob($request);

    if ($response->stopRxNormInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSNOMEDCTInferenceJob

 Stops an InferSNOMEDCT inference job in progress. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopSNOMEDCTInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopSNOMEDCTInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopSNOMEDCTInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopSNOMEDCTInferenceJobRequest();
    $request->stopSNOMEDCTInferenceJobRequest = new StopSNOMEDCTInferenceJobRequest();
    $request->stopSNOMEDCTInferenceJobRequest->jobId = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = StopSNOMEDCTInferenceJobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_STOP_SNOMEDCT_INFERENCE_JOB;

    $response = $sdk->sdk->stopSNOMEDCTInferenceJob($request);

    if ($response->stopSNOMEDCTInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
