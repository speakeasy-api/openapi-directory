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
import org.openapis.openapi.models.operations.CreateGroupXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateGroupHeaders;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.shared.CreateGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest() {{
                headers = new CreateGroupHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSIdentityStore.CreateGroup";
                }};
                request = new CreateGroupRequest() {{
                    description = "illum";
                    displayName = "vel";
                    identityStoreId = "error";
                }};
            }};            

            CreateGroupResponse res = sdk.createGroup(req);

            if (res.createGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createGroup` - Creates a group within the specified identity store.
* `createGroupMembership` - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* `createUser` - Creates a new user within the specified identity store.
* `deleteGroup` - Delete a group within an identity store given <code>GroupId</code>.
* `deleteGroupMembership` - Delete a membership within a group given <code>MembershipId</code>.
* `deleteUser` - Deletes a user within an identity store given <code>UserId</code>.
* `describeGroup` - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* `describeGroupMembership` - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* `describeUser` - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* `getGroupId` - Retrieves <code>GroupId</code> in an identity store.
* `getGroupMembershipId` - Retrieves the <code>MembershipId</code> in an identity store.
* `getUserId` - Retrieves the <code>UserId</code> in an identity store.
* `isMemberInGroups` - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* `listGroupMemberships` - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* `listGroupMembershipsForMember` - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* `listGroups` - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* `listUsers` - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* `updateGroup` - For the specified group in the specified identity store, updates the group metadata and attributes.
* `updateUser` - For the specified user in the specified identity store, updates the user metadata and attributes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
