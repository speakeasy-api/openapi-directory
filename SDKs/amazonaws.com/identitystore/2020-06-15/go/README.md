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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Description: "corrupti",
            DisplayName: "provident",
            IdentityStoreID: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
        XAmzTarget: "AWSIdentityStore.CreateGroup",
    }

    ctx := context.Background()
    res, err := s.CreateGroup(ctx, req)
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

### SDK SDK

* `CreateGroup` - Creates a group within the specified identity store.
* `CreateGroupMembership` - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* `CreateUser` - Creates a new user within the specified identity store.
* `DeleteGroup` - Delete a group within an identity store given <code>GroupId</code>.
* `DeleteGroupMembership` - Delete a membership within a group given <code>MembershipId</code>.
* `DeleteUser` - Deletes a user within an identity store given <code>UserId</code>.
* `DescribeGroup` - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* `DescribeGroupMembership` - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* `DescribeUser` - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* `GetGroupID` - Retrieves <code>GroupId</code> in an identity store.
* `GetGroupMembershipID` - Retrieves the <code>MembershipId</code> in an identity store.
* `GetUserID` - Retrieves the <code>UserId</code> in an identity store.
* `IsMemberInGroups` - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* `ListGroupMemberships` - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* `ListGroupMembershipsForMember` - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* `ListGroups` - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* `ListUsers` - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* `UpdateGroup` - For the specified group in the specified identity store, updates the group metadata and attributes.
* `UpdateUser` - For the specified user in the specified identity store, updates the user metadata and attributes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
