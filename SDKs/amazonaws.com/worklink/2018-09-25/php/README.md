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
use \OpenAPI\OpenAPI\Models\Operations\AssociateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDomainRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDomainRequest();
    $request->requestBody = new AssociateDomainRequestBody();
    $request->requestBody->acmCertificateArn = 'corrupti';
    $request->requestBody->displayName = 'provident';
    $request->requestBody->domainName = 'distinctio';
    $request->requestBody->fleetArn = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->associateDomain($request);

    if ($response->associateDomainResponse !== null) {
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

* [~~associateDomain~~](docs/sdk/README.md#associatedomain) - Specifies a domain to be associated to Amazon WorkLink. :warning: **Deprecated**
* [~~associateWebsiteAuthorizationProvider~~](docs/sdk/README.md#associatewebsiteauthorizationprovider) - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network. :warning: **Deprecated**
* [~~associateWebsiteCertificateAuthority~~](docs/sdk/README.md#associatewebsitecertificateauthority) - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network. :warning: **Deprecated**
* [~~createFleet~~](docs/sdk/README.md#createfleet) - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app. :warning: **Deprecated**
* [~~deleteFleet~~](docs/sdk/README.md#deletefleet) - Deletes a fleet. Prevents users from accessing previously associated websites.  :warning: **Deprecated**
* [~~describeAuditStreamConfiguration~~](docs/sdk/README.md#describeauditstreamconfiguration) - Describes the configuration for delivering audit streams to the customer account. :warning: **Deprecated**
* [~~describeCompanyNetworkConfiguration~~](docs/sdk/README.md#describecompanynetworkconfiguration) - Describes the networking configuration to access the internal websites associated with the specified fleet. :warning: **Deprecated**
* [~~describeDevice~~](docs/sdk/README.md#describedevice) - Provides information about a user's device. :warning: **Deprecated**
* [~~describeDevicePolicyConfiguration~~](docs/sdk/README.md#describedevicepolicyconfiguration) - Describes the device policy configuration for the specified fleet. :warning: **Deprecated**
* [~~describeDomain~~](docs/sdk/README.md#describedomain) - Provides information about the domain. :warning: **Deprecated**
* [~~describeFleetMetadata~~](docs/sdk/README.md#describefleetmetadata) - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details. :warning: **Deprecated**
* [~~describeIdentityProviderConfiguration~~](docs/sdk/README.md#describeidentityproviderconfiguration) - Describes the identity provider configuration of the specified fleet. :warning: **Deprecated**
* [~~describeWebsiteCertificateAuthority~~](docs/sdk/README.md#describewebsitecertificateauthority) - Provides information about the certificate authority. :warning: **Deprecated**
* [~~disassociateDomain~~](docs/sdk/README.md#disassociatedomain) - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.  :warning: **Deprecated**
* [~~disassociateWebsiteAuthorizationProvider~~](docs/sdk/README.md#disassociatewebsiteauthorizationprovider) - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider. :warning: **Deprecated**
* [~~disassociateWebsiteCertificateAuthority~~](docs/sdk/README.md#disassociatewebsitecertificateauthority) - Removes a certificate authority (CA). :warning: **Deprecated**
* [~~listDevices~~](docs/sdk/README.md#listdevices) - Retrieves a list of devices registered with the specified fleet. :warning: **Deprecated**
* [~~listDomains~~](docs/sdk/README.md#listdomains) - Retrieves a list of domains associated to a specified fleet. :warning: **Deprecated**
* [~~listFleets~~](docs/sdk/README.md#listfleets) - Retrieves a list of fleets for the current account and Region. :warning: **Deprecated**
* [~~listTagsForResource~~](docs/sdk/README.md#listtagsforresource) - Retrieves a list of tags for the specified resource. :warning: **Deprecated**
* [~~listWebsiteAuthorizationProviders~~](docs/sdk/README.md#listwebsiteauthorizationproviders) - Retrieves a list of website authorization providers associated with a specified fleet. :warning: **Deprecated**
* [~~listWebsiteCertificateAuthorities~~](docs/sdk/README.md#listwebsitecertificateauthorities) - Retrieves a list of certificate authorities added for the current account and Region. :warning: **Deprecated**
* [~~restoreDomainAccess~~](docs/sdk/README.md#restoredomainaccess) - Moves a domain to ACTIVE status if it was in the INACTIVE status. :warning: **Deprecated**
* [~~revokeDomainAccess~~](docs/sdk/README.md#revokedomainaccess) - Moves a domain to INACTIVE status if it was in the ACTIVE status. :warning: **Deprecated**
* [~~signOutUser~~](docs/sdk/README.md#signoutuser) - Signs the user out from all of their devices. The user can sign in again if they have valid credentials. :warning: **Deprecated**
* [~~tagResource~~](docs/sdk/README.md#tagresource) - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. :warning: **Deprecated**
* [~~untagResource~~](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource. :warning: **Deprecated**
* [~~updateAuditStreamConfiguration~~](docs/sdk/README.md#updateauditstreamconfiguration) - Updates the audit stream configuration for the fleet. :warning: **Deprecated**
* [~~updateCompanyNetworkConfiguration~~](docs/sdk/README.md#updatecompanynetworkconfiguration) - Updates the company network configuration for the fleet. :warning: **Deprecated**
* [~~updateDevicePolicyConfiguration~~](docs/sdk/README.md#updatedevicepolicyconfiguration) - Updates the device policy configuration for the fleet. :warning: **Deprecated**
* [~~updateDomainMetadata~~](docs/sdk/README.md#updatedomainmetadata) - Updates domain metadata, such as DisplayName. :warning: **Deprecated**
* [~~updateFleetMetadata~~](docs/sdk/README.md#updatefleetmetadata) - Updates fleet metadata, such as DisplayName. :warning: **Deprecated**
* [~~updateIdentityProviderConfiguration~~](docs/sdk/README.md#updateidentityproviderconfiguration) - Updates the identity provider configuration for the fleet. :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
