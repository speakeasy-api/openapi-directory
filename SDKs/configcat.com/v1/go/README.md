# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/configcat.com/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AuditLogs.GetAuditlogs(ctx, operations.GetAuditlogsRequest{
        AuditLogType: operations.GetAuditlogsAuditLogTypeEnumIntegrationLinkAdded.ToPointer(),
        ConfigID: sdk.String("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
        EnvironmentID: sdk.String("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
        FromUtcDateTime: types.MustTimeFromString("2022-02-02T00:14:45.467Z"),
        ProductID: "39205929-396f-4ea7-996e-b10faaa2352c",
        ToUtcDateTime: types.MustTimeFromString("2022-05-24T03:24:11.703Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogItemModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AuditLogs](docs/auditlogs/README.md)

* [GetAuditlogs](docs/auditlogs/README.md#getauditlogs) - List Audit log items for Product
* [GetDeletedSettings](docs/auditlogs/README.md#getdeletedsettings) - List Deleted Settings
* [GetOrganizationAuditlogs](docs/auditlogs/README.md#getorganizationauditlogs) - List Audit log items for Organization

### [CodeReferences](docs/codereferences/README.md)

* [PostV1CodeReferences](docs/codereferences/README.md#postv1codereferences)
* [PostV1CodeReferencesDeleteReports](docs/codereferences/README.md#postv1codereferencesdeletereports)

### [Configs](docs/configs/README.md)

* [CreateConfig](docs/configs/README.md#createconfig) - Create Config
* [DeleteConfig](docs/configs/README.md#deleteconfig) - Delete Config
* [GetConfig](docs/configs/README.md#getconfig) - Get Config
* [GetConfigs](docs/configs/README.md#getconfigs) - List Configs
* [UpdateConfig](docs/configs/README.md#updateconfig) - Update Config

### [Environments](docs/environments/README.md)

* [CreateEnvironment](docs/environments/README.md#createenvironment) - Create Environment
* [DeleteEnvironment](docs/environments/README.md#deleteenvironment) - Delete Environment
* [GetEnvironment](docs/environments/README.md#getenvironment) - Get Environment
* [GetEnvironments](docs/environments/README.md#getenvironments) - List Environments
* [UpdateEnvironment](docs/environments/README.md#updateenvironment) - Update Environment

### [FeatureFlagAndSettingValues](docs/featureflagandsettingvalues/README.md)

* [GetSettingValue](docs/featureflagandsettingvalues/README.md#getsettingvalue) - Get value
* [GetSettingValues](docs/featureflagandsettingvalues/README.md#getsettingvalues) - Get values
* [PostSettingValues](docs/featureflagandsettingvalues/README.md#postsettingvalues) - Post values
* [ReplaceSettingValue](docs/featureflagandsettingvalues/README.md#replacesettingvalue) - Replace value
* [UpdateSettingValue](docs/featureflagandsettingvalues/README.md#updatesettingvalue) - Update value

### [FeatureFlagAndSettingValuesUsingSDKKey](docs/featureflagandsettingvaluesusingsdkkey/README.md)

* [GetSettingValueBySdkkey](docs/featureflagandsettingvaluesusingsdkkey/README.md#getsettingvaluebysdkkey) - Get value
* [ReplaceSettingValueBySdkkey](docs/featureflagandsettingvaluesusingsdkkey/README.md#replacesettingvaluebysdkkey) - Replace value
* [UpdateSettingValueBySdkkey](docs/featureflagandsettingvaluesusingsdkkey/README.md#updatesettingvaluebysdkkey) - Update value

### [FeatureFlagsAndSettings](docs/featureflagsandsettings/README.md)

* [CreateSetting](docs/featureflagsandsettings/README.md#createsetting) - Create Flag
* [DeleteSetting](docs/featureflagsandsettings/README.md#deletesetting) - Delete Flag
* [GetSetting](docs/featureflagsandsettings/README.md#getsetting) - Get Flag
* [GetSettings](docs/featureflagsandsettings/README.md#getsettings) - List Flags
* [UpdateSetting](docs/featureflagsandsettings/README.md#updatesetting) - Update Flag

### [IntegrationLinks](docs/integrationlinks/README.md)

* [AddOrUpdateIntegrationLink](docs/integrationlinks/README.md#addorupdateintegrationlink) - Add or update Integration link
* [DeleteIntegrationLink](docs/integrationlinks/README.md#deleteintegrationlink) - Delete Integration link
* [GetIntegrationLinkDetails](docs/integrationlinks/README.md#getintegrationlinkdetails) - Get Integration link
* [JiraAddOrUpdateIntegrationLink](docs/integrationlinks/README.md#jiraaddorupdateintegrationlink)
* [PostV1JiraConnect](docs/integrationlinks/README.md#postv1jiraconnect)

### [Me](docs/me/README.md)

* [GetMe](docs/me/README.md#getme) - Get authenticated user details

### [Members](docs/members/README.md)

* [AddMemberToGroup](docs/members/README.md#addmembertogroup) - Update Member Permissions
* [DeleteOrganizationMember](docs/members/README.md#deleteorganizationmember) - Delete Member from Organization
* [DeleteProductMember](docs/members/README.md#deleteproductmember) - Delete Member from Product
* [GetOrganizationMembers](docs/members/README.md#getorganizationmembers) - List Organization Members
* [GetProductMembers](docs/members/README.md#getproductmembers) - List Product Members
* [InviteMember](docs/members/README.md#invitemember) - Invite Member

### [Organizations](docs/organizations/README.md)

* [GetOrganizations](docs/organizations/README.md#getorganizations) - List Organizations

### [PermissionGroups](docs/permissiongroups/README.md)

* [CreatePermissionGroup](docs/permissiongroups/README.md#createpermissiongroup) - Create Permission Group
* [DeletePermissionGroup](docs/permissiongroups/README.md#deletepermissiongroup) - Delete Permission Group
* [GetPermissionGroup](docs/permissiongroups/README.md#getpermissiongroup) - Get Permission Group
* [GetPermissionGroups](docs/permissiongroups/README.md#getpermissiongroups) - List Permission Groups
* [UpdatePermissionGroup](docs/permissiongroups/README.md#updatepermissiongroup) - Update Permission Group

### [Products](docs/products/README.md)

* [CreateProduct](docs/products/README.md#createproduct) - Create Product
* [DeleteProduct](docs/products/README.md#deleteproduct) - Delete Product
* [GetProduct](docs/products/README.md#getproduct) - Get Product
* [GetProducts](docs/products/README.md#getproducts) - List Products
* [UpdateProduct](docs/products/README.md#updateproduct) - Update Product

### [SDKKeys](docs/sdkkeys/README.md)

* [GetSDKKeys](docs/sdkkeys/README.md#getsdkkeys) - Get SDK Key

### [Segments](docs/segments/README.md)

* [CreateSegment](docs/segments/README.md#createsegment) - Create Segment
* [DeleteSegment](docs/segments/README.md#deletesegment) - Delete Segment
* [GetSegment](docs/segments/README.md#getsegment) - Get Segment
* [GetSegments](docs/segments/README.md#getsegments) - List Segments
* [UpdateSegment](docs/segments/README.md#updatesegment) - Update Segment

### [Tags](docs/tags/README.md)

* [CreateTag](docs/tags/README.md#createtag) - Create Tag
* [DeleteTag](docs/tags/README.md#deletetag) - Delete Tag
* [GetSettingsByTag](docs/tags/README.md#getsettingsbytag) - List Settings by Tag
* [GetTag](docs/tags/README.md#gettag) - Get Tag
* [GetTags](docs/tags/README.md#gettags) - List Tags
* [UpdateTag](docs/tags/README.md#updatetag) - Update Tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
