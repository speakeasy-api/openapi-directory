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
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantTokenCapabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParticipantTokenRequest();
    $request->requestBody = new CreateParticipantTokenRequestBody();
    $request->requestBody->attributes = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->requestBody->capabilities = [
        ParticipantTokenCapabilityEnum::PUBLISH,
        ParticipantTokenCapabilityEnum::SUBSCRIBE,
        ParticipantTokenCapabilityEnum::SUBSCRIBE,
        ParticipantTokenCapabilityEnum::PUBLISH,
    ];
    $request->requestBody->duration = 437587;
    $request->requestBody->stageArn = 'magnam';
    $request->requestBody->userId = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->createParticipantToken($request);

    if ($response->createParticipantTokenResponse !== null) {
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

* [createParticipantToken](docs/sdk/README.md#createparticipanttoken) - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* [createStage](docs/sdk/README.md#createstage) - Creates a new stage (and optionally participant tokens).
* [deleteStage](docs/sdk/README.md#deletestage) - Shuts down and deletes the specified stage (disconnecting all participants).
* [disconnectParticipant](docs/sdk/README.md#disconnectparticipant) - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* [getStage](docs/sdk/README.md#getstage) - Gets information for the specified stage.
* [listStages](docs/sdk/README.md#liststages) - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource with the specified ARN.
* [updateStage](docs/sdk/README.md#updatestage) - Updates a stage’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
