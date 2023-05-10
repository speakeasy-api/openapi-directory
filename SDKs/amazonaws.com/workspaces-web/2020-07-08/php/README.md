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
use \OpenAPI\OpenAPI\Models\Operations\AssociateBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->browserSettingsArn = 'illum';
    $request->portalArn = 'vel';

    $response = $sdk->associateBrowserSettings($request);

    if ($response->associateBrowserSettingsResponse !== null) {
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

* [associateBrowserSettings](docs/sdk/README.md#associatebrowsersettings) - Associates a browser settings resource with a web portal.
* [associateNetworkSettings](docs/sdk/README.md#associatenetworksettings) - Associates a network settings resource with a web portal.
* [associateTrustStore](docs/sdk/README.md#associatetruststore) - Associates a trust store with a web portal.
* [associateUserAccessLoggingSettings](docs/sdk/README.md#associateuseraccessloggingsettings) - Associates a user access logging settings resource with a web portal.
* [associateUserSettings](docs/sdk/README.md#associateusersettings) - Associates a user settings resource with a web portal.
* [createBrowserSettings](docs/sdk/README.md#createbrowsersettings) - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* [createIdentityProvider](docs/sdk/README.md#createidentityprovider) - Creates an identity provider resource that is then associated with a web portal.
* [createNetworkSettings](docs/sdk/README.md#createnetworksettings) - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* [createPortal](docs/sdk/README.md#createportal) - Creates a web portal.
* [createTrustStore](docs/sdk/README.md#createtruststore) - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* [createUserAccessLoggingSettings](docs/sdk/README.md#createuseraccessloggingsettings) - Creates a user access logging settings resource that can be associated with a web portal.
* [createUserSettings](docs/sdk/README.md#createusersettings) - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* [deleteBrowserSettings](docs/sdk/README.md#deletebrowsersettings) - Deletes browser settings.
* [deleteIdentityProvider](docs/sdk/README.md#deleteidentityprovider) - Deletes the identity provider.
* [deleteNetworkSettings](docs/sdk/README.md#deletenetworksettings) - Deletes network settings.
* [deletePortal](docs/sdk/README.md#deleteportal) - Deletes a web portal.
* [deleteTrustStore](docs/sdk/README.md#deletetruststore) - Deletes the trust store.
* [deleteUserAccessLoggingSettings](docs/sdk/README.md#deleteuseraccessloggingsettings) - Deletes user access logging settings.
* [deleteUserSettings](docs/sdk/README.md#deleteusersettings) - Deletes user settings.
* [disassociateBrowserSettings](docs/sdk/README.md#disassociatebrowsersettings) - Disassociates browser settings from a web portal.
* [disassociateNetworkSettings](docs/sdk/README.md#disassociatenetworksettings) - Disassociates network settings from a web portal.
* [disassociateTrustStore](docs/sdk/README.md#disassociatetruststore) - Disassociates a trust store from a web portal.
* [disassociateUserAccessLoggingSettings](docs/sdk/README.md#disassociateuseraccessloggingsettings) - Disassociates user access logging settings from a web portal.
* [disassociateUserSettings](docs/sdk/README.md#disassociateusersettings) - Disassociates user settings from a web portal.
* [getBrowserSettings](docs/sdk/README.md#getbrowsersettings) - Gets browser settings.
* [getIdentityProvider](docs/sdk/README.md#getidentityprovider) - Gets the identity provider.
* [getNetworkSettings](docs/sdk/README.md#getnetworksettings) - Gets the network settings.
* [getPortal](docs/sdk/README.md#getportal) - Gets the web portal.
* [getPortalServiceProviderMetadata](docs/sdk/README.md#getportalserviceprovidermetadata) - Gets the service provider metadata.
* [getTrustStore](docs/sdk/README.md#gettruststore) - Gets the trust store.
* [getTrustStoreCertificate](docs/sdk/README.md#gettruststorecertificate) - Gets the trust store certificate.
* [getUserAccessLoggingSettings](docs/sdk/README.md#getuseraccessloggingsettings) - Gets user access logging settings.
* [getUserSettings](docs/sdk/README.md#getusersettings) - Gets user settings.
* [listBrowserSettings](docs/sdk/README.md#listbrowsersettings) - Retrieves a list of browser settings.
* [listIdentityProviders](docs/sdk/README.md#listidentityproviders) - Retrieves a list of identity providers for a specific web portal.
* [listNetworkSettings](docs/sdk/README.md#listnetworksettings) - Retrieves a list of network settings.
* [listPortals](docs/sdk/README.md#listportals) - Retrieves a list or web portals.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves a list of tags for a resource.
* [listTrustStoreCertificates](docs/sdk/README.md#listtruststorecertificates) - Retrieves a list of trust store certificates.
* [listTrustStores](docs/sdk/README.md#listtruststores) - Retrieves a list of trust stores.
* [listUserAccessLoggingSettings](docs/sdk/README.md#listuseraccessloggingsettings) - Retrieves a list of user access logging settings.
* [listUserSettings](docs/sdk/README.md#listusersettings) - Retrieves a list of user settings.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or overwrites one or more tags for the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource.
* [updateBrowserSettings](docs/sdk/README.md#updatebrowsersettings) - Updates browser settings.
* [updateIdentityProvider](docs/sdk/README.md#updateidentityprovider) - Updates the identity provider. 
* [updateNetworkSettings](docs/sdk/README.md#updatenetworksettings) - Updates network settings.
* [updatePortal](docs/sdk/README.md#updateportal) - Updates a web portal.
* [updateTrustStore](docs/sdk/README.md#updatetruststore) - Updates the trust store.
* [updateUserAccessLoggingSettings](docs/sdk/README.md#updateuseraccessloggingsettings) - Updates the user access logging settings.
* [updateUserSettings](docs/sdk/README.md#updateusersettings) - Updates the user settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
