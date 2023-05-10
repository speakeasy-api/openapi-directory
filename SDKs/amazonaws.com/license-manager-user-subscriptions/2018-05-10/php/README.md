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
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateUserRequest();
    $request->requestBody = new AssociateUserRequestBody();
    $request->requestBody->domain = 'corrupti';
    $request->requestBody->identityProvider = new AssociateUserRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'provident';
    $request->requestBody->instanceId = 'distinctio';
    $request->requestBody->username = 'Rosalinda_Mitchell84';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->associateUser($request);

    if ($response->associateUserResponse !== null) {
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

* [associateUser](docs/sdk/README.md#associateuser) - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [deregisterIdentityProvider](docs/sdk/README.md#deregisteridentityprovider) - Deregisters the identity provider from providing user-based subscriptions.
* [disassociateUser](docs/sdk/README.md#disassociateuser) - Disassociates the user from an EC2 instance providing user-based subscriptions.
* [listIdentityProviders](docs/sdk/README.md#listidentityproviders) - Lists the identity providers for user-based subscriptions.
* [listInstances](docs/sdk/README.md#listinstances) - Lists the EC2 instances providing user-based subscriptions.
* [listProductSubscriptions](docs/sdk/README.md#listproductsubscriptions) - Lists the user-based subscription products available from an identity provider.
* [listUserAssociations](docs/sdk/README.md#listuserassociations) - Lists user associations for an identity provider.
* [registerIdentityProvider](docs/sdk/README.md#registeridentityprovider) - Registers an identity provider for user-based subscriptions.
* [startProductSubscription](docs/sdk/README.md#startproductsubscription) - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [stopProductSubscription](docs/sdk/README.md#stopproductsubscription) - Stops a product subscription for a user with the specified identity provider.
* [updateIdentityProviderSettings](docs/sdk/README.md#updateidentityprovidersettings) - Updates additional product configuration settings for the registered identity provider.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
