<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBodyDialerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PredictiveDialerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProgressiveDialerConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBodyOutboundCallConfig;
use \OpenAPI\OpenAPI\Models\Shared\AnswerMachineDetectionConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCampaignRequest();
    $request->requestBody = new CreateCampaignRequestBody();
    $request->requestBody->connectInstanceId = 'corrupti';
    $request->requestBody->dialerConfig = new CreateCampaignRequestBodyDialerConfig();
    $request->requestBody->dialerConfig->predictiveDialerConfig = new PredictiveDialerConfig();
    $request->requestBody->dialerConfig->predictiveDialerConfig->bandwidthAllocation = 5928.45;
    $request->requestBody->dialerConfig->progressiveDialerConfig = new ProgressiveDialerConfig();
    $request->requestBody->dialerConfig->progressiveDialerConfig->bandwidthAllocation = 7151.9;
    $request->requestBody->name = 'Stuart Stiedemann';
    $request->requestBody->outboundCallConfig = new CreateCampaignRequestBodyOutboundCallConfig();
    $request->requestBody->outboundCallConfig->answerMachineDetectionConfig = new AnswerMachineDetectionConfig();
    $request->requestBody->outboundCallConfig->answerMachineDetectionConfig->enableAnswerMachineDetection = false;
    $request->requestBody->outboundCallConfig->connectContactFlowId = 'vel';
    $request->requestBody->outboundCallConfig->connectQueueId = 'error';
    $request->requestBody->outboundCallConfig->connectSourcePhoneNumber = 'deserunt';
    $request->requestBody->tags = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->createCampaign($request);

    if ($response->createCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->