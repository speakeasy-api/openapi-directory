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
use \OpenAPI\OpenAPI\Models\Operations\GetAuditlogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditlogsAuditLogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuditlogsRequest();
    $request->auditLogType = GetAuditlogsAuditLogTypeEnum::INTEGRATION_LINK_ADDED;
    $request->configId = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->environmentId = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->fromUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T00:14:45.467Z');
    $request->productId = '39205929-396f-4ea7-996e-b10faaa2352c';
    $request->toUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');

    $response = $sdk->auditLogs->getAuditlogs($request);

    if ($response->auditLogItemModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [auditLogs](docs/auditlogs/README.md)

* [getAuditlogs](docs/auditlogs/README.md#getauditlogs) - List Audit log items for Product
* [getDeletedSettings](docs/auditlogs/README.md#getdeletedsettings) - List Deleted Settings
* [getOrganizationAuditlogs](docs/auditlogs/README.md#getorganizationauditlogs) - List Audit log items for Organization

### [codeReferences](docs/codereferences/README.md)

* [postV1CodeReferences](docs/codereferences/README.md#postv1codereferences)
* [postV1CodeReferencesDeleteReports](docs/codereferences/README.md#postv1codereferencesdeletereports)

### [configs](docs/configs/README.md)

* [createConfig](docs/configs/README.md#createconfig) - Create Config
* [deleteConfig](docs/configs/README.md#deleteconfig) - Delete Config
* [getConfig](docs/configs/README.md#getconfig) - Get Config
* [getConfigs](docs/configs/README.md#getconfigs) - List Configs
* [updateConfig](docs/configs/README.md#updateconfig) - Update Config

### [environments](docs/environments/README.md)

* [createEnvironment](docs/environments/README.md#createenvironment) - Create Environment
* [deleteEnvironment](docs/environments/README.md#deleteenvironment) - Delete Environment
* [getEnvironment](docs/environments/README.md#getenvironment) - Get Environment
* [getEnvironments](docs/environments/README.md#getenvironments) - List Environments
* [updateEnvironment](docs/environments/README.md#updateenvironment) - Update Environment

### [featureFlagAndSettingValues](docs/featureflagandsettingvalues/README.md)

* [getSettingValue](docs/featureflagandsettingvalues/README.md#getsettingvalue) - Get value
* [getSettingValues](docs/featureflagandsettingvalues/README.md#getsettingvalues) - Get values
* [postSettingValues](docs/featureflagandsettingvalues/README.md#postsettingvalues) - Post values
* [replaceSettingValue](docs/featureflagandsettingvalues/README.md#replacesettingvalue) - Replace value
* [updateSettingValue](docs/featureflagandsettingvalues/README.md#updatesettingvalue) - Update value

### [featureFlagAndSettingValuesUsingSDKKey](docs/featureflagandsettingvaluesusingsdkkey/README.md)

* [getSettingValueBySdkkey](docs/featureflagandsettingvaluesusingsdkkey/README.md#getsettingvaluebysdkkey) - Get value
* [replaceSettingValueBySdkkey](docs/featureflagandsettingvaluesusingsdkkey/README.md#replacesettingvaluebysdkkey) - Replace value
* [updateSettingValueBySdkkey](docs/featureflagandsettingvaluesusingsdkkey/README.md#updatesettingvaluebysdkkey) - Update value

### [featureFlagsAndSettings](docs/featureflagsandsettings/README.md)

* [createSetting](docs/featureflagsandsettings/README.md#createsetting) - Create Flag
* [deleteSetting](docs/featureflagsandsettings/README.md#deletesetting) - Delete Flag
* [getSetting](docs/featureflagsandsettings/README.md#getsetting) - Get Flag
* [getSettings](docs/featureflagsandsettings/README.md#getsettings) - List Flags
* [updateSetting](docs/featureflagsandsettings/README.md#updatesetting) - Update Flag

### [integrationLinks](docs/integrationlinks/README.md)

* [addOrUpdateIntegrationLink](docs/integrationlinks/README.md#addorupdateintegrationlink) - Add or update Integration link
* [deleteIntegrationLink](docs/integrationlinks/README.md#deleteintegrationlink) - Delete Integration link
* [getIntegrationLinkDetails](docs/integrationlinks/README.md#getintegrationlinkdetails) - Get Integration link
* [jiraAddOrUpdateIntegrationLink](docs/integrationlinks/README.md#jiraaddorupdateintegrationlink)
* [postV1JiraConnect](docs/integrationlinks/README.md#postv1jiraconnect)

### [me](docs/me/README.md)

* [getMe](docs/me/README.md#getme) - Get authenticated user details

### [members](docs/members/README.md)

* [addMemberToGroup](docs/members/README.md#addmembertogroup) - Update Member Permissions
* [deleteOrganizationMember](docs/members/README.md#deleteorganizationmember) - Delete Member from Organization
* [deleteProductMember](docs/members/README.md#deleteproductmember) - Delete Member from Product
* [getOrganizationMembers](docs/members/README.md#getorganizationmembers) - List Organization Members
* [getProductMembers](docs/members/README.md#getproductmembers) - List Product Members
* [inviteMember](docs/members/README.md#invitemember) - Invite Member

### [organizations](docs/organizations/README.md)

* [getOrganizations](docs/organizations/README.md#getorganizations) - List Organizations

### [permissionGroups](docs/permissiongroups/README.md)

* [createPermissionGroup](docs/permissiongroups/README.md#createpermissiongroup) - Create Permission Group
* [deletePermissionGroup](docs/permissiongroups/README.md#deletepermissiongroup) - Delete Permission Group
* [getPermissionGroup](docs/permissiongroups/README.md#getpermissiongroup) - Get Permission Group
* [getPermissionGroups](docs/permissiongroups/README.md#getpermissiongroups) - List Permission Groups
* [updatePermissionGroup](docs/permissiongroups/README.md#updatepermissiongroup) - Update Permission Group

### [products](docs/products/README.md)

* [createProduct](docs/products/README.md#createproduct) - Create Product
* [deleteProduct](docs/products/README.md#deleteproduct) - Delete Product
* [getProduct](docs/products/README.md#getproduct) - Get Product
* [getProducts](docs/products/README.md#getproducts) - List Products
* [updateProduct](docs/products/README.md#updateproduct) - Update Product

### [sdkKeys](docs/sdkkeys/README.md)

* [getSDKKeys](docs/sdkkeys/README.md#getsdkkeys) - Get SDK Key

### [segments](docs/segments/README.md)

* [createSegment](docs/segments/README.md#createsegment) - Create Segment
* [deleteSegment](docs/segments/README.md#deletesegment) - Delete Segment
* [getSegment](docs/segments/README.md#getsegment) - Get Segment
* [getSegments](docs/segments/README.md#getsegments) - List Segments
* [updateSegment](docs/segments/README.md#updatesegment) - Update Segment

### [tags](docs/tags/README.md)

* [createTag](docs/tags/README.md#createtag) - Create Tag
* [deleteTag](docs/tags/README.md#deletetag) - Delete Tag
* [getSettingsByTag](docs/tags/README.md#getsettingsbytag) - List Settings by Tag
* [getTag](docs/tags/README.md#gettag) - Get Tag
* [getTags](docs/tags/README.md#gettags) - List Tags
* [updateTag](docs/tags/README.md#updatetag) - Update Tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
