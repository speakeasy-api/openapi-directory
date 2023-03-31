# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/identitystore/2020-06-15/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateGroupRequest(
    create_group_request=shared.CreateGroupRequest(
        description="corrupti",
        display_name="provident",
        identity_store_id="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="AWSIdentityStore.CreateGroup",
)
    
res = s.create_group(req)

if res.create_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_group` - Creates a group within the specified identity store.
* `create_group_membership` - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* `create_user` - Creates a new user within the specified identity store.
* `delete_group` - Delete a group within an identity store given <code>GroupId</code>.
* `delete_group_membership` - Delete a membership within a group given <code>MembershipId</code>.
* `delete_user` - Deletes a user within an identity store given <code>UserId</code>.
* `describe_group` - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* `describe_group_membership` - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* `describe_user` - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* `get_group_id` - Retrieves <code>GroupId</code> in an identity store.
* `get_group_membership_id` - Retrieves the <code>MembershipId</code> in an identity store.
* `get_user_id` - Retrieves the <code>UserId</code> in an identity store.
* `is_member_in_groups` - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* `list_group_memberships` - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* `list_group_memberships_for_member` - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* `list_groups` - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* `list_users` - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* `update_group` - For the specified group in the specified identity store, updates the group metadata and attributes.
* `update_user` - For the specified user in the specified identity store, updates the user metadata and attributes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
