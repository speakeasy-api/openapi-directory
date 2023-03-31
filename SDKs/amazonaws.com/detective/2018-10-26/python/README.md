# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/detective/2018-10-26/python
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


req = operations.AcceptInvitationRequest(
    request_body=operations.AcceptInvitationRequestBody(
        graph_arn="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
)
    
res = s.accept_invitation(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `accept_invitation` - <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
* `batch_get_graph_member_datasources` - Gets data source package information for the behavior graph.
* `batch_get_membership_datasources` - Gets information on the data source package history for an account.
* `create_graph` - <p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
* `create_members` - <p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
* `delete_graph` - <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>
* `delete_members` - <p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>
* `describe_organization_configuration` - <p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>
* `disable_organization_admin_account` - <p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
* `disassociate_membership` - <p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>
* `enable_organization_admin_account` - <p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>
* `get_members` - Returns the membership details for specified member accounts for a behavior graph.
* `list_datasource_packages` - Lists data source packages in the behavior graph.
* `list_graphs` - <p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>
* `list_invitations` - <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
* `list_members` - <p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>
* `list_organization_admin_accounts` - Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.
* `list_tags_for_resource` - Returns the tag values that are assigned to a behavior graph.
* `reject_invitation` - <p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>
* `start_monitoring_member` - <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
* `tag_resource` - Applies tag values to a behavior graph.
* `untag_resource` - Removes tags from a behavior graph.
* `update_datasource_packages` - Starts a data source packages for the behavior graph.
* `update_organization_configuration` - Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
