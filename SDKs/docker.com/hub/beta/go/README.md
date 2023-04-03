# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/docker.com/hub/beta/go
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
    s := sdk.New()

    req := operations.DeleteV2AccessTokensUUIDRequest{
        UUID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }

    ctx := context.Background()
    res, err := s.AccessTokens.DeleteV2AccessTokensUUID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccessTokens

* `DeleteV2AccessTokensUUID` - Delete a personal access token
* `GetV2AccessTokens` - Get a list of personal access tokens
* `GetV2AccessTokensUUID` - Get a personal access token
* `PatchV2AccessTokensUUID` - Update a personal access token
* `PostV2AccessTokens` - Create a personal access token

### AuditLogs

* `AuditLogsGetAuditActions` - Returns list of audit log actions.
* `AuditLogsGetAuditLogs` - Returns list of audit log  events.

### Authentication

* `PostUsers2FALogin` - Second factor authentication.
* `PostUsersLogin` - Create an authentication token

### Images

* `GetNamespacesRepositoriesImages` - Get details of repository's images
* `GetNamespacesRepositoriesImagesSummary` - Get summary of repository's images
* `GetNamespacesRepositoriesImagesTags` - Get image's tags
* `PostNamespacesDeleteImages` - Delete images

### OrgSettings

* `GetV2OrgsNameSettings` - Get organization settings
* `PutV2OrgsNameSettings` - Update organization settings

### Repositories

* `GetV2NamespacesNamespaceRepositoriesRepositoryTags` - List repository tags
* `GetV2NamespacesNamespaceRepositoriesRepositoryTagsTag` - Read repository tag
* `HeadV2NamespacesNamespaceRepositoriesRepositoryTags` - Check repository tags
* `HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTag` - Check repository tag

### Scim

* `GetV2Scim20ResourceTypes` - List resource types
* `GetV2Scim20ResourceTypesName` - Get a resource type
* `GetV2Scim20Schemas` - List schemas
* `GetV2Scim20SchemasID` - Get a schema
* `GetV2Scim20ServiceProviderConfig` - Get service provider config
* `GetV2Scim20Users` - List users
* `GetV2Scim20UsersID` - Get a user
* `PostV2Scim20Users` - Create user
* `PutV2Scim20UsersID` - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
