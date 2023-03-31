# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/ssm-contacts/2021-05-03/python
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


req = operations.AcceptPageRequest(
    accept_page_request=shared.AcceptPageRequest(
        accept_code="corrupti",
        accept_code_validation="ENFORCE",
        accept_type="READ",
        contact_channel_id="quibusdam",
        note="unde",
        page_id="nulla",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
    x_amz_target="SSMContacts.AcceptPage",
)
    
res = s.accept_page(req)

if res.accept_page_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `accept_page` - Used to acknowledge an engagement to a contact channel during an incident.
* `activate_contact_channel` - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* `create_contact` - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* `create_contact_channel` - A contact channel is the method that Incident Manager uses to engage your contact.
* `create_rotation` - Creates a rotation in an on-call schedule.
* `create_rotation_override` - Creates an override for a rotation in an on-call schedule.
* `deactivate_contact_channel` - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* `delete_contact` - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* `delete_contact_channel` - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* `delete_rotation` - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* `delete_rotation_override` - Deletes an existing override for an on-call rotation.
* `describe_engagement` - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* `describe_page` - Lists details of the engagement to a contact channel.
* `get_contact` - Retrieves information about the specified contact or escalation plan.
* `get_contact_channel` - List details about a specific contact channel.
* `get_contact_policy` - Retrieves the resource policies attached to the specified contact or escalation plan.
* `get_rotation` - Retrieves information about an on-call rotation.
* `get_rotation_override` - Retrieves information about an override to an on-call rotation.
* `list_contact_channels` - Lists all contact channels for the specified contact.
* `list_contacts` - Lists all contacts and escalation plans in Incident Manager.
* `list_engagements` - Lists all engagements that have happened in an incident.
* `list_page_receipts` - Lists all of the engagements to contact channels that have been acknowledged.
* `list_page_resolutions` - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* `list_pages_by_contact` - Lists the engagements to a contact's contact channels.
* `list_pages_by_engagement` - Lists the engagements to contact channels that occurred by engaging a contact.
* `list_preview_rotation_shifts` - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* `list_rotation_overrides` - Retrieves a list of overrides currently specified for an on-call rotation.
* `list_rotation_shifts` - Returns a list of shifts generated by an existing rotation in the system.
* `list_rotations` - Retrieves a list of on-call rotations.
* `list_tags_for_resource` - Lists the tags of an escalation plan or contact.
* `put_contact_policy` - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* `send_activation_code` - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* `start_engagement` - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* `stop_engagement` - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* `tag_resource` - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* `untag_resource` - Removes tags from the specified resource.
* `update_contact` - Updates the contact or escalation plan specified.
* `update_contact_channel` - Updates a contact's contact channel.
* `update_rotation` - Updates the information specified for an on-call rotation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
