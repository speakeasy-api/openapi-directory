<!-- Start SDK Example Usage -->
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
    $request->apiVersion = 'corrupti';
    $request->awsAccessKeyId = 'provident';
    $request->action = GETCancelJobActionEnum::CANCEL_JOB;
    $request->jobId = 'distinctio';
    $request->operation = GETCancelJobOperationEnum::CANCEL_JOB;
    $request->signature = 'quibusdam';
    $request->signatureMethod = 'unde';
    $request->signatureVersion = 'nulla';
    $request->timestamp = 'corrupti';
    $request->version = GETCancelJobVersionEnum::TWO_THOUSAND_AND_TEN0601;

    $response = $sdk->getCancelJob($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->