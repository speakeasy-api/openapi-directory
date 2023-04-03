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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    req := operations.GetAuditlogsRequest{
        AuditLogType: "integrationLinkAdded",
        ConfigID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        EnvironmentID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        FromUtcDateTime: "2022-02-02T00:14:45.467Z",
        ProductID: "39205929-396f-4ea7-996e-b10faaa2352c",
        ToUtcDateTime: "2022-05-24T03:24:11.703Z",
    }

    ctx := context.Background()
    res, err := s.AuditLogs.GetAuditlogs(ctx, req)
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


### AuditLogs

* `GetAuditlogs` - List Audit log items for Product
* `GetDeletedSettings` - List Deleted Settings
* `GetOrganizationAuditlogs` - List Audit log items for Organization

### CodeReferences

* `PostV1CodeReferences`
* `PostV1CodeReferencesDeleteReports`

### Configs

* `CreateConfig` - Create Config
* `DeleteConfig` - Delete Config
* `GetConfig` - Get Config
* `GetConfigs` - List Configs
* `UpdateConfig` - Update Config

### Environments

* `CreateEnvironment` - Create Environment
* `DeleteEnvironment` - Delete Environment
* `GetEnvironment` - Get Environment
* `GetEnvironments` - List Environments
* `UpdateEnvironment` - Update Environment

### FeatureFlagAndSettingValues

* `GetSettingValue` - Get value
* `GetSettingValues` - Get values
* `ReplaceSettingValue` - Replace value
* `UpdateSettingValue` - Update value

### FeatureFlagAndSettingValuesUsingSDKKey

* `GetSettingValueBySdkkey` - Get value
* `ReplaceSettingValueBySdkkey` - Replace value
* `UpdateSettingValueBySdkkey` - Update value

### FeatureFlagsAndSettings

* `CreateSetting` - Create Flag
* `DeleteSetting` - Delete Flag
* `GetSetting` - Get Flag
* `GetSettings` - List Flags
* `UpdateSetting` - Update Flag

### IntegrationLinks

* `AddOrUpdateIntegrationLink` - Add or update Integration link
* `DeleteIntegrationLink` - Delete Integration link
* `GetIntegrationLinkDetails` - Get Integration link
* `JiraAddOrUpdateIntegrationLink`
* `PostV1JiraConnect`

### Me

* `GetMe` - Get authenticated user details

### Members

* `AddMemberToGroup` - Update Member Permissions
* `DeleteOrganizationMember` - Delete Member from Organization
* `DeleteProductMember` - Delete Member from Product
* `GetOrganizationMembers` - List Organization Members
* `GetProductMembers` - List Product Members
* `InviteMember` - Invite Member

### Organizations

* `GetOrganizations` - List Organizations

### PermissionGroups

* `CreatePermissionGroup` - Create Permission Group
* `DeletePermissionGroup` - Delete Permission Group
* `GetPermissionGroup` - Get Permission Group
* `GetPermissionGroups` - List Permission Groups
* `UpdatePermissionGroup` - Update Permission Group

### Products

* `CreateProduct` - Create Product
* `DeleteProduct` - Delete Product
* `GetProduct` - Get Product
* `GetProducts` - List Products
* `UpdateProduct` - Update Product

### SDKKeys

* `GetSDKKeys` - Get SDK Key

### Segments

* `CreateSegment` - Create Segment
* `DeleteSegment` - Delete Segment
* `GetSegment` - Get Segment
* `GetSegments` - List Segments
* `UpdateSegment` - Update Segment

### Tags

* `CreateTag` - Create Tag
* `DeleteTag` - Delete Tag
* `GetSettingsByTag` - List Settings by Tag
* `GetTag` - Get Tag
* `GetTags` - List Tags
* `UpdateTag` - Update Tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
