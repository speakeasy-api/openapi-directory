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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessTokens.DeleteV2AccessTokensUUID(ctx, operations.DeleteV2AccessTokensUUIDRequest{
        UUID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
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


### [AccessTokens](docs/accesstokens/README.md)

* [DeleteV2AccessTokensUUID](docs/accesstokens/README.md#deletev2accesstokensuuid) - Delete a personal access token
* [GetV2AccessTokens](docs/accesstokens/README.md#getv2accesstokens) - Get a list of personal access tokens
* [GetV2AccessTokensUUID](docs/accesstokens/README.md#getv2accesstokensuuid) - Get a personal access token
* [PatchV2AccessTokensUUID](docs/accesstokens/README.md#patchv2accesstokensuuid) - Update a personal access token
* [PostV2AccessTokens](docs/accesstokens/README.md#postv2accesstokens) - Create a personal access token

### [AuditLogs](docs/auditlogs/README.md)

* [AuditLogsGetAuditActions](docs/auditlogs/README.md#auditlogsgetauditactions) - Returns list of audit log actions.
* [AuditLogsGetAuditLogs](docs/auditlogs/README.md#auditlogsgetauditlogs) - Returns list of audit log  events.

### [Authentication](docs/authentication/README.md)

* [PostUsers2FALogin](docs/authentication/README.md#postusers2falogin) - Second factor authentication.
* [PostUsersLogin](docs/authentication/README.md#postuserslogin) - Create an authentication token

### [Images](docs/images/README.md)

* [GetNamespacesRepositoriesImages](docs/images/README.md#getnamespacesrepositoriesimages) - Get details of repository's images
* [GetNamespacesRepositoriesImagesSummary](docs/images/README.md#getnamespacesrepositoriesimagessummary) - Get summary of repository's images
* [GetNamespacesRepositoriesImagesTags](docs/images/README.md#getnamespacesrepositoriesimagestags) - Get image's tags
* [PostNamespacesDeleteImages](docs/images/README.md#postnamespacesdeleteimages) - Delete images

### [OrgSettings](docs/orgsettings/README.md)

* [GetV2OrgsNameSettings](docs/orgsettings/README.md#getv2orgsnamesettings) - Get organization settings
* [PutV2OrgsNameSettings](docs/orgsettings/README.md#putv2orgsnamesettings) - Update organization settings

### [Repositories](docs/repositories/README.md)

* [GetV2NamespacesNamespaceRepositoriesRepositoryTags](docs/repositories/README.md#getv2namespacesnamespacerepositoriesrepositorytags) - List repository tags
* [GetV2NamespacesNamespaceRepositoriesRepositoryTagsTag](docs/repositories/README.md#getv2namespacesnamespacerepositoriesrepositorytagstag) - Read repository tag
* [HeadV2NamespacesNamespaceRepositoriesRepositoryTags](docs/repositories/README.md#headv2namespacesnamespacerepositoriesrepositorytags) - Check repository tags
* [HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTag](docs/repositories/README.md#headv2namespacesnamespacerepositoriesrepositorytagstag) - Check repository tag

### [Scim](docs/scim/README.md)

* [GetV2Scim20ResourceTypes](docs/scim/README.md#getv2scim20resourcetypes) - List resource types
* [GetV2Scim20ResourceTypesName](docs/scim/README.md#getv2scim20resourcetypesname) - Get a resource type
* [GetV2Scim20Schemas](docs/scim/README.md#getv2scim20schemas) - List schemas
* [GetV2Scim20SchemasID](docs/scim/README.md#getv2scim20schemasid) - Get a schema
* [GetV2Scim20ServiceProviderConfig](docs/scim/README.md#getv2scim20serviceproviderconfig) - Get service provider config
* [GetV2Scim20Users](docs/scim/README.md#getv2scim20users) - List users
* [GetV2Scim20UsersID](docs/scim/README.md#getv2scim20usersid) - Get a user
* [PostV2Scim20Users](docs/scim/README.md#postv2scim20users) - Create user
* [PutV2Scim20UsersID](docs/scim/README.md#putv2scim20usersid) - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
