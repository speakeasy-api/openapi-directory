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
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.operations.CreateGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest(                new CreateGroupRequest("provident") {{
                                description = "distinctio";
                                displayName = "quibusdam";
                            }};, CreateGroupXAmzTargetEnum.AWS_IDENTITY_STORE_CREATE_GROUP) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateGroupResponse res = sdk.createGroup(req);

            if (res.createGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createGroup](docs/sdk/README.md#creategroup) - Creates a group within the specified identity store.
* [createGroupMembership](docs/sdk/README.md#creategroupmembership) - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* [createUser](docs/sdk/README.md#createuser) - Creates a user within the specified identity store.
* [deleteGroup](docs/sdk/README.md#deletegroup) - Delete a group within an identity store given <code>GroupId</code>.
* [deleteGroupMembership](docs/sdk/README.md#deletegroupmembership) - Delete a membership within a group given <code>MembershipId</code>.
* [deleteUser](docs/sdk/README.md#deleteuser) - Deletes a user within an identity store given <code>UserId</code>.
* [describeGroup](docs/sdk/README.md#describegroup) - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* [describeGroupMembership](docs/sdk/README.md#describegroupmembership) - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* [describeUser](docs/sdk/README.md#describeuser) - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* [getGroupId](docs/sdk/README.md#getgroupid) - Retrieves <code>GroupId</code> in an identity store.
* [getGroupMembershipId](docs/sdk/README.md#getgroupmembershipid) - Retrieves the <code>MembershipId</code> in an identity store.
* [getUserId](docs/sdk/README.md#getuserid) - Retrieves the <code>UserId</code> in an identity store.
* [isMemberInGroups](docs/sdk/README.md#ismemberingroups) - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* [listGroupMemberships](docs/sdk/README.md#listgroupmemberships) - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [listGroupMembershipsForMember](docs/sdk/README.md#listgroupmembershipsformember) - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [listGroups](docs/sdk/README.md#listgroups) - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* [listUsers](docs/sdk/README.md#listusers) - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* [updateGroup](docs/sdk/README.md#updategroup) - For the specified group in the specified identity store, updates the group metadata and attributes.
* [updateUser](docs/sdk/README.md#updateuser) - For the specified user in the specified identity store, updates the user metadata and attributes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
