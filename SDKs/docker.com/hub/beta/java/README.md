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

import org.openapis.openapi.models.operations.DeleteV2AccessTokensUuidRequest;
import org.openapis.openapi.models.operations.DeleteV2AccessTokensUuidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2AccessTokensUuidRequest req = new DeleteV2AccessTokensUuidRequest() {{
                uuid = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
            }}            

            DeleteV2AccessTokensUuidResponse res = sdk.accessTokens.deleteV2AccessTokensUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accessTokens

* `deleteV2AccessTokensUuid` - Delete a personal access token
* `getV2AccessTokens` - Get a list of personal access tokens
* `getV2AccessTokensUuid` - Get a personal access token
* `patchV2AccessTokensUuid` - Update a personal access token
* `postV2AccessTokens` - Create a personal access token

### auditLogs

* `auditLogsGetAuditActions` - Returns list of audit log actions.
* `auditLogsGetAuditLogs` - Returns list of audit log  events.

### authentication

* `postUsers2FALogin` - Second factor authentication.
* `postUsersLogin` - Create an authentication token

### images

* `getNamespacesRepositoriesImages` - Get details of repository's images
* `getNamespacesRepositoriesImagesSummary` - Get summary of repository's images
* `getNamespacesRepositoriesImagesTags` - Get image's tags
* `postNamespacesDeleteImages` - Delete images

### orgSettings

* `getV2OrgsNameSettings` - Get organization settings
* `putV2OrgsNameSettings` - Update organization settings

### repositories

* `getV2NamespacesNamespaceRepositoriesRepositoryTags` - List repository tags
* `getV2NamespacesNamespaceRepositoriesRepositoryTagsTag` - Read repository tag
* `headV2NamespacesNamespaceRepositoriesRepositoryTags` - Check repository tags
* `headV2NamespacesNamespaceRepositoriesRepositoryTagsTag` - Check repository tag

### scim

* `getV2Scim20ResourceTypes` - List resource types
* `getV2Scim20ResourceTypesName` - Get a resource type
* `getV2Scim20Schemas` - List schemas
* `getV2Scim20SchemasId` - Get a schema
* `getV2Scim20ServiceProviderConfig` - Get service provider config
* `getV2Scim20Users` - List users
* `getV2Scim20UsersId` - Get a user
* `postV2Scim20Users` - Create user
* `putV2Scim20UsersId` - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
