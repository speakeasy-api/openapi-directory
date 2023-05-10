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
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2AccessTokensUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2AccessTokensUuidRequest();
    $request->uuid = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->accessTokens->deleteV2AccessTokensUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accessTokens](docs/accesstokens/README.md)

* [deleteV2AccessTokensUuid](docs/accesstokens/README.md#deletev2accesstokensuuid) - Delete a personal access token
* [getV2AccessTokens](docs/accesstokens/README.md#getv2accesstokens) - Get a list of personal access tokens
* [getV2AccessTokensUuid](docs/accesstokens/README.md#getv2accesstokensuuid) - Get a personal access token
* [patchV2AccessTokensUuid](docs/accesstokens/README.md#patchv2accesstokensuuid) - Update a personal access token
* [postV2AccessTokens](docs/accesstokens/README.md#postv2accesstokens) - Create a personal access token

### [auditLogs](docs/auditlogs/README.md)

* [auditLogsGetAuditActions](docs/auditlogs/README.md#auditlogsgetauditactions) - Returns list of audit log actions.
* [auditLogsGetAuditLogs](docs/auditlogs/README.md#auditlogsgetauditlogs) - Returns list of audit log  events.

### [authentication](docs/authentication/README.md)

* [postUsers2FALogin](docs/authentication/README.md#postusers2falogin) - Second factor authentication.
* [postUsersLogin](docs/authentication/README.md#postuserslogin) - Create an authentication token

### [images](docs/images/README.md)

* [getNamespacesRepositoriesImages](docs/images/README.md#getnamespacesrepositoriesimages) - Get details of repository's images
* [getNamespacesRepositoriesImagesSummary](docs/images/README.md#getnamespacesrepositoriesimagessummary) - Get summary of repository's images
* [getNamespacesRepositoriesImagesTags](docs/images/README.md#getnamespacesrepositoriesimagestags) - Get image's tags
* [postNamespacesDeleteImages](docs/images/README.md#postnamespacesdeleteimages) - Delete images

### [orgSettings](docs/orgsettings/README.md)

* [getV2OrgsNameSettings](docs/orgsettings/README.md#getv2orgsnamesettings) - Get organization settings
* [putV2OrgsNameSettings](docs/orgsettings/README.md#putv2orgsnamesettings) - Update organization settings

### [repositories](docs/repositories/README.md)

* [getV2NamespacesNamespaceRepositoriesRepositoryTags](docs/repositories/README.md#getv2namespacesnamespacerepositoriesrepositorytags) - List repository tags
* [getV2NamespacesNamespaceRepositoriesRepositoryTagsTag](docs/repositories/README.md#getv2namespacesnamespacerepositoriesrepositorytagstag) - Read repository tag
* [headV2NamespacesNamespaceRepositoriesRepositoryTags](docs/repositories/README.md#headv2namespacesnamespacerepositoriesrepositorytags) - Check repository tags
* [headV2NamespacesNamespaceRepositoriesRepositoryTagsTag](docs/repositories/README.md#headv2namespacesnamespacerepositoriesrepositorytagstag) - Check repository tag

### [scim](docs/scim/README.md)

* [getV2Scim20ResourceTypes](docs/scim/README.md#getv2scim20resourcetypes) - List resource types
* [getV2Scim20ResourceTypesName](docs/scim/README.md#getv2scim20resourcetypesname) - Get a resource type
* [getV2Scim20Schemas](docs/scim/README.md#getv2scim20schemas) - List schemas
* [getV2Scim20SchemasId](docs/scim/README.md#getv2scim20schemasid) - Get a schema
* [getV2Scim20ServiceProviderConfig](docs/scim/README.md#getv2scim20serviceproviderconfig) - Get service provider config
* [getV2Scim20Users](docs/scim/README.md#getv2scim20users) - List users
* [getV2Scim20UsersId](docs/scim/README.md#getv2scim20usersid) - Get a user
* [postV2Scim20Users](docs/scim/README.md#postv2scim20users) - Create user
* [putV2Scim20UsersId](docs/scim/README.md#putv2scim20usersid) - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
