# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/identitystore/2020-06-15/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateGroup(ctx, operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Description: sdk.String("corrupti"),
            DisplayName: sdk.String("provident"),
            IdentityStoreID: "distinctio",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.CreateGroupXAmzTargetEnumAwsIdentityStoreCreateGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateGroup](docs/sdk/README.md#creategroup) - Creates a group within the specified identity store.
* [CreateGroupMembership](docs/sdk/README.md#creategroupmembership) - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* [CreateUser](docs/sdk/README.md#createuser) - Creates a user within the specified identity store.
* [DeleteGroup](docs/sdk/README.md#deletegroup) - Delete a group within an identity store given <code>GroupId</code>.
* [DeleteGroupMembership](docs/sdk/README.md#deletegroupmembership) - Delete a membership within a group given <code>MembershipId</code>.
* [DeleteUser](docs/sdk/README.md#deleteuser) - Deletes a user within an identity store given <code>UserId</code>.
* [DescribeGroup](docs/sdk/README.md#describegroup) - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* [DescribeGroupMembership](docs/sdk/README.md#describegroupmembership) - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* [DescribeUser](docs/sdk/README.md#describeuser) - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* [GetGroupID](docs/sdk/README.md#getgroupid) - Retrieves <code>GroupId</code> in an identity store.
* [GetGroupMembershipID](docs/sdk/README.md#getgroupmembershipid) - Retrieves the <code>MembershipId</code> in an identity store.
* [GetUserID](docs/sdk/README.md#getuserid) - Retrieves the <code>UserId</code> in an identity store.
* [IsMemberInGroups](docs/sdk/README.md#ismemberingroups) - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* [ListGroupMemberships](docs/sdk/README.md#listgroupmemberships) - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [ListGroupMembershipsForMember](docs/sdk/README.md#listgroupmembershipsformember) - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [ListGroups](docs/sdk/README.md#listgroups) - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* [ListUsers](docs/sdk/README.md#listusers) - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* [UpdateGroup](docs/sdk/README.md#updategroup) - For the specified group in the specified identity store, updates the group metadata and attributes.
* [UpdateUser](docs/sdk/README.md#updateuser) - For the specified user in the specified identity store, updates the user metadata and attributes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
