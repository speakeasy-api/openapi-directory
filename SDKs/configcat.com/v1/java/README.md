# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAuditlogsPathParams;
import org.openapis.openapi.models.operations.GetAuditlogsAuditLogTypeEnum;
import org.openapis.openapi.models.operations.GetAuditlogsQueryParams;
import org.openapis.openapi.models.operations.GetAuditlogsRequest;
import org.openapis.openapi.models.operations.GetAuditlogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basic = new SchemeBasic() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAuditlogsRequest req = new GetAuditlogsRequest() {{
                pathParams = new GetAuditlogsPathParams() {{
                    productId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
                queryParams = new GetAuditlogsQueryParams() {{
                    auditLogType = "organizationAdminLeft";
                    configId = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                    environmentId = "b7392059-2939-46fe-a759-6eb10faaa235";
                    fromUtcDateTime = "2022-04-01T23:59:21.675Z";
                    toUtcDateTime = "2022-05-24T03:24:11.703Z";
                }};
            }};            

            GetAuditlogsResponse res = sdk.auditLogs.getAuditlogs(req);

            if (res.auditLogItemModels.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### auditLogs

* `getAuditlogs` - List Audit log items for Product
* `getDeletedSettings` - List Deleted Settings
* `getOrganizationAuditlogs` - List Audit log items for Organization

### codeReferences

* `postV1CodeReferences`
* `postV1CodeReferencesDeleteReports`

### configs

* `createConfig` - Create Config
* `deleteConfig` - Delete Config
* `getConfig` - Get Config
* `getConfigs` - List Configs
* `updateConfig` - Update Config

### environments

* `createEnvironment` - Create Environment
* `deleteEnvironment` - Delete Environment
* `getEnvironment` - Get Environment
* `getEnvironments` - List Environments
* `updateEnvironment` - Update Environment

### featureFlagAndSettingValues

* `getSettingValue` - Get value
* `getSettingValues` - Get values
* `replaceSettingValue` - Replace value
* `updateSettingValue` - Update value

### featureFlagAndSettingValuesUsingSDKKey

* `getSettingValueBySdkkey` - Get value
* `replaceSettingValueBySdkkey` - Replace value
* `updateSettingValueBySdkkey` - Update value

### featureFlagsAndSettings

* `createSetting` - Create Flag
* `deleteSetting` - Delete Flag
* `getSetting` - Get Flag
* `getSettings` - List Flags
* `updateSetting` - Update Flag

### integrationLinks

* `addOrUpdateIntegrationLink` - Add or update Integration link
* `deleteIntegrationLink` - Delete Integration link
* `getIntegrationLinkDetails` - Get Integration link
* `jiraAddOrUpdateIntegrationLink`
* `postV1JiraConnect`

### me

* `getMe` - Get authenticated user details

### members

* `addMemberToGroup` - Update Member Permissions
* `deleteOrganizationMember` - Delete Member from Organization
* `deleteProductMember` - Delete Member from Product
* `getOrganizationMembers` - List Organization Members
* `getProductMembers` - List Product Members
* `inviteMember` - Invite Member

### organizations

* `getOrganizations` - List Organizations

### permissionGroups

* `createPermissionGroup` - Create Permission Group
* `deletePermissionGroup` - Delete Permission Group
* `getPermissionGroup` - Get Permission Group
* `getPermissionGroups` - List Permission Groups
* `updatePermissionGroup` - Update Permission Group

### products

* `createProduct` - Create Product
* `deleteProduct` - Delete Product
* `getProduct` - Get Product
* `getProducts` - List Products
* `updateProduct` - Update Product

### sdkKeys

* `getSDKKeys` - Get SDK Key

### segments

* `createSegment` - Create Segment
* `deleteSegment` - Delete Segment
* `getSegment` - Get Segment
* `getSegments` - List Segments
* `updateSegment` - Update Segment

### tags

* `createTag` - Create Tag
* `deleteTag` - Delete Tag
* `getSettingsByTag` - List Settings by Tag
* `getTag` - Get Tag
* `getTags` - List Tags
* `updateTag` - Update Tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
