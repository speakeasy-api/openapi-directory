# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/ram/2018-01-04/python
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


req = operations.AcceptResourceShareInvitationRequest(
    request_body=operations.AcceptResourceShareInvitationRequestBody(
        client_token="corrupti",
        resource_share_invitation_arn="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.accept_resource_share_invitation(req)

if res.accept_resource_share_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `accept_resource_share_invitation` - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* `associate_resource_share` - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* `associate_resource_share_permission` - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* `create_resource_share` - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* `delete_resource_share` - Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources outside of the Amazon Web Services account that created them.
* `disassociate_resource_share` - Disassociates the specified principals or resources from the specified resource share.
* `disassociate_resource_share_permission` - Disassociates an RAM permission from a resource share. Permission changes take effect immediately. You can remove a RAM permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* `enable_sharing_with_aws_organization` - <p>Enables resource sharing within your organization in Organizations. Calling this operation enables RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in an organization by specifying the organization's ID, or all of the accounts in an organizational unit (OU) by specifying the OU's ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM users and roles.</p> <p>You must call this operation from an IAM user or role in the organization's management account.</p>
* `get_permission` - Gets the contents of an RAM permission in JSON format.
* `get_resource_policies` - Retrieves the resource policies for the specified resources that you own and have shared.
* `get_resource_share_associations` - Retrieves the resource and principal associations for resource shares that you own.
* `get_resource_share_invitations` - Retrieves details about invitations that you have received for resource shares.
* `get_resource_shares` - Retrieves details about the resource shares that you own or that are shared with you.
* `list_pending_invitation_resources` - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* `list_permission_versions` - Lists the available versions of the specified RAM permission.
* `list_permissions` - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* `list_principals` - Lists the principals that you are sharing resources with or that are sharing resources with you.
* `list_resource_share_permissions` - Lists the RAM permissions that are associated with a resource share.
* `list_resource_types` - Lists the resource types that can be shared by RAM.
* `list_resources` - Lists the resources that you added to a resource share or the resources that are shared with you.
* `promote_resource_share_created_from_policy` - <p>When you attach a resource-based permission policy to a resource, it automatically creates a resource share. However, resource shares created this way are visible only to the resource share owner, and the resource share can't be modified in RAM.</p> <p>You can use this operation to promote the resource share to a full RAM resource share. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p>
* `reject_resource_share_invitation` - Rejects an invitation to a resource share from another Amazon Web Services account.
* `tag_resource` - Adds the specified tag keys and values to the specified resource share. The tags are attached only to the resource share, not to the resources that are in the resource share.
* `untag_resource` - Removes the specified tag key and value pairs from the specified resource share.
* `update_resource_share` - Modifies some of the properties of the specified resource share.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
