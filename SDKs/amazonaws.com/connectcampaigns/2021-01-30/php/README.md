# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createCampaign](docs/sdk/README.md#createcampaign) - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* [deleteCampaign](docs/sdk/README.md#deletecampaign) - Deletes a campaign from the specified Amazon Connect account.
* [deleteConnectInstanceConfig](docs/sdk/README.md#deleteconnectinstanceconfig) - Deletes a connect instance config from the specified AWS account.
* [deleteInstanceOnboardingJob](docs/sdk/README.md#deleteinstanceonboardingjob) - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* [describeCampaign](docs/sdk/README.md#describecampaign) - Describes the specific campaign.
* [getCampaignState](docs/sdk/README.md#getcampaignstate) - Get state of a campaign for the specified Amazon Connect account.
* [getCampaignStateBatch](docs/sdk/README.md#getcampaignstatebatch) - Get state of campaigns for the specified Amazon Connect account.
* [getConnectInstanceConfig](docs/sdk/README.md#getconnectinstanceconfig) - Get the specific Connect instance config.
* [getInstanceOnboardingJobStatus](docs/sdk/README.md#getinstanceonboardingjobstatus) - Get the specific instance onboarding job status.
* [listCampaigns](docs/sdk/README.md#listcampaigns) - Provides summary information about the campaigns under the specified Amazon Connect account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List tags for a resource.
* [pauseCampaign](docs/sdk/README.md#pausecampaign) - Pauses a campaign for the specified Amazon Connect account.
* [putDialRequestBatch](docs/sdk/README.md#putdialrequestbatch) - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* [resumeCampaign](docs/sdk/README.md#resumecampaign) - Stops a campaign for the specified Amazon Connect account.
* [startCampaign](docs/sdk/README.md#startcampaign) - Starts a campaign for the specified Amazon Connect account.
* [startInstanceOnboardingJob](docs/sdk/README.md#startinstanceonboardingjob) - Onboard the specific Amazon Connect instance to Connect Campaigns.
* [stopCampaign](docs/sdk/README.md#stopcampaign) - Stops a campaign for the specified Amazon Connect account.
* [tagResource](docs/sdk/README.md#tagresource) - Tag a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Untag a resource.
* [updateCampaignDialerConfig](docs/sdk/README.md#updatecampaigndialerconfig) - Updates the dialer config of a campaign. This API is idempotent.
* [updateCampaignName](docs/sdk/README.md#updatecampaignname) - Updates the name of a campaign. This API is idempotent.
* [updateCampaignOutboundCallConfig](docs/sdk/README.md#updatecampaignoutboundcallconfig) - Updates the outbound call config of a campaign. This API is idempotent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
