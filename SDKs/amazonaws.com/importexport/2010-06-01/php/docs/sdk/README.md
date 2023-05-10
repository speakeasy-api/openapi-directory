# SDK

## Overview

<fullname>AWS Import/Export Service</fullname> AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity.

Amazon Web Services documentation
<https://docs.aws.amazon.com/importexport/>
### Available Operations

* [getCancelJob](#getcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [getCreateJob](#getcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [getGETShippingLabel](#getgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [getGETStatus](#getgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [getListJobs](#getlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [getUpdateJob](#getupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
* [postCancelJob](#postcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [postCreateJob](#postcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [postGetShippingLabel](#postgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [postGetStatus](#postgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [postListJobs](#postlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [postUpdateJob](#postupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

## getCancelJob

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelJobActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelJobOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelJobVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCancelJobRequest();
    $request->apiVersion = 'illum';
    $request->awsAccessKeyId = 'vel';
    $request->action = GETCancelJobActionEnum::CANCEL_JOB;
    $request->jobId = 'error';
    $request->operation = GETCancelJobOperationEnum::CANCEL_JOB;
    $request->signature = 'deserunt';
    $request->signatureMethod = 'suscipit';
    $request->signatureVersion = 'iure';
    $request->timestamp = 'magnam';
    $request->version = GETCancelJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->getCancelJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateJob

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateJobActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateJobJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateJobOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateJobVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateJobRequest();
    $request->apiVersion = 'debitis';
    $request->awsAccessKeyId = 'ipsa';
    $request->action = GETCreateJobActionEnum::CREATE_JOB;
    $request->jobType = GETCreateJobJobTypeEnum::EXPORT;
    $request->manifest = 'tempora';
    $request->manifestAddendum = 'suscipit';
    $request->operation = GETCreateJobOperationEnum::CREATE_JOB;
    $request->signature = 'molestiae';
    $request->signatureMethod = 'minus';
    $request->signatureVersion = 'placeat';
    $request->timestamp = 'voluptatum';
    $request->validateOnly = false;
    $request->version = GETCreateJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->getCreateJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETShippingLabel

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETShippingLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETShippingLabelActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETShippingLabelOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETShippingLabelVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETShippingLabelRequest();
    $request->apiVersion = 'iusto';
    $request->awsAccessKeyId = 'excepturi';
    $request->action = GETGETShippingLabelActionEnum::GET_SHIPPING_LABEL;
    $request->operation = GETGETShippingLabelOperationEnum::GET_SHIPPING_LABEL;
    $request->signature = 'nisi';
    $request->signatureMethod = 'recusandae';
    $request->signatureVersion = 'temporibus';
    $request->timestamp = 'ab';
    $request->version = GETGETShippingLabelVersionEnum::TWO_THOUSAND_AND_TEN0601;
    $request->city = 'North Lydia';
    $request->company = 'Hills Group';
    $request->country = 'Uzbekistan';
    $request->jobIds = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->name = 'Bernadette Schmidt';
    $request->phoneNumber = 'porro';
    $request->postalCode = '17651-5975';
    $request->stateOrProvince = 'beatae';
    $request->street1 = 'commodi';
    $request->street2 = 'molestiae';
    $request->street3 = 'modi';

    $response = $sdk->sdk->getGETShippingLabel($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETStatus

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStatusOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETStatusRequest();
    $request->apiVersion = 'qui';
    $request->awsAccessKeyId = 'impedit';
    $request->action = GETGETStatusActionEnum::GET_STATUS;
    $request->jobId = 'cum';
    $request->operation = GETGETStatusOperationEnum::GET_STATUS;
    $request->signature = 'esse';
    $request->signatureMethod = 'ipsum';
    $request->signatureVersion = 'excepturi';
    $request->timestamp = 'aspernatur';
    $request->version = GETGETStatusVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->getGETStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListJobs

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListJobsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListJobsOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListJobsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListJobsRequest();
    $request->apiVersion = 'perferendis';
    $request->awsAccessKeyId = 'ad';
    $request->action = GETListJobsActionEnum::LIST_JOBS;
    $request->marker = 'natus';
    $request->maxJobs = 149675;
    $request->operation = GETListJobsOperationEnum::LIST_JOBS;
    $request->signature = 'iste';
    $request->signatureMethod = 'dolor';
    $request->signatureVersion = 'natus';
    $request->timestamp = 'laboriosam';
    $request->version = GETListJobsVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->getListJobs($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateJob

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateJobActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateJobJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateJobOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateJobVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateJobRequest();
    $request->apiVersion = 'hic';
    $request->awsAccessKeyId = 'saepe';
    $request->action = GETUpdateJobActionEnum::UPDATE_JOB;
    $request->jobId = 'fuga';
    $request->jobType = GETUpdateJobJobTypeEnum::IMPORT;
    $request->manifest = 'corporis';
    $request->operation = GETUpdateJobOperationEnum::UPDATE_JOB;
    $request->signature = 'iste';
    $request->signatureMethod = 'iure';
    $request->signatureVersion = 'saepe';
    $request->timestamp = 'quidem';
    $request->validateOnly = false;
    $request->version = GETUpdateJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->getUpdateJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCancelJob

This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelJobActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelJobOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelJobVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCancelJobRequest();
    $request->awsAccessKeyId = 'architecto';
    $request->action = POSTCancelJobActionEnum::CANCEL_JOB;
    $request->operation = POSTCancelJobOperationEnum::CANCEL_JOB;
    $request->requestBody = 'ipsa';
    $request->signature = 'reiciendis';
    $request->signatureMethod = 'est';
    $request->signatureVersion = 'mollitia';
    $request->timestamp = 'laborum';
    $request->version = POSTCancelJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->postCancelJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateJob

This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateJobActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateJobOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateJobVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateJobRequest();
    $request->awsAccessKeyId = 'dolores';
    $request->action = POSTCreateJobActionEnum::CREATE_JOB;
    $request->operation = POSTCreateJobOperationEnum::CREATE_JOB;
    $request->requestBody = 'dolorem';
    $request->signature = 'corporis';
    $request->signatureMethod = 'explicabo';
    $request->signatureVersion = 'nobis';
    $request->timestamp = 'enim';
    $request->version = POSTCreateJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->postCreateJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetShippingLabel

This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetShippingLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetShippingLabelActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetShippingLabelOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetShippingLabelVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetShippingLabelRequest();
    $request->awsAccessKeyId = 'omnis';
    $request->action = POSTGetShippingLabelActionEnum::GET_SHIPPING_LABEL;
    $request->operation = POSTGetShippingLabelOperationEnum::GET_SHIPPING_LABEL;
    $request->requestBody = 'nemo';
    $request->signature = 'minima';
    $request->signatureMethod = 'excepturi';
    $request->signatureVersion = 'accusantium';
    $request->timestamp = 'iure';
    $request->version = POSTGetShippingLabelVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->postGetShippingLabel($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetStatus

This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStatusOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetStatusRequest();
    $request->awsAccessKeyId = 'culpa';
    $request->action = POSTGetStatusActionEnum::GET_STATUS;
    $request->operation = POSTGetStatusOperationEnum::GET_STATUS;
    $request->requestBody = 'doloribus';
    $request->signature = 'sapiente';
    $request->signatureMethod = 'architecto';
    $request->signatureVersion = 'mollitia';
    $request->timestamp = 'dolorem';
    $request->version = POSTGetStatusVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->postGetStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListJobs

This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListJobsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListJobsOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListJobsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListJobsRequest();
    $request->awsAccessKeyId = 'culpa';
    $request->action = POSTListJobsActionEnum::LIST_JOBS;
    $request->marker = 'consequuntur';
    $request->maxJobs = 'repellat';
    $request->operation = POSTListJobsOperationEnum::LIST_JOBS;
    $request->requestBody = 'mollitia';
    $request->signature = 'occaecati';
    $request->signatureMethod = 'numquam';
    $request->signatureVersion = 'commodi';
    $request->timestamp = 'quam';
    $request->version = POSTListJobsVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->postListJobs($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateJob

You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateJobActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateJobOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateJobVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateJobRequest();
    $request->awsAccessKeyId = 'molestiae';
    $request->action = POSTUpdateJobActionEnum::UPDATE_JOB;
    $request->operation = POSTUpdateJobOperationEnum::UPDATE_JOB;
    $request->requestBody = 'velit';
    $request->signature = 'error';
    $request->signatureMethod = 'quia';
    $request->signatureVersion = 'quis';
    $request->timestamp = 'vitae';
    $request->version = POSTUpdateJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->sdk->postUpdateJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
