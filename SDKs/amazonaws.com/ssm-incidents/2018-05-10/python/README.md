# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/ssm-incidents/2018-05-10/python
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


req = operations.CreateReplicationSetRequest(
    request_body=operations.CreateReplicationSetRequestBody(
        client_token="corrupti",
        regions={
            "distinctio": shared.RegionMapInputValue(
                sse_kms_key_id="quibusdam",
            ),
            "unde": shared.RegionMapInputValue(
                sse_kms_key_id="nulla",
            ),
            "corrupti": shared.RegionMapInputValue(
                sse_kms_key_id="illum",
            ),
        },
        tags={
            "error": "deserunt",
            "suscipit": "iure",
        },
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.create_replication_set(req)

if res.create_replication_set_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_replication_set` - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* `create_response_plan` - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* `create_timeline_event` - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* `delete_incident_record` - Delete an incident record from Incident Manager. 
* `delete_replication_set` - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* `delete_resource_policy` - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* `delete_response_plan` - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* `delete_timeline_event` - Deletes a timeline event from an incident.
* `get_incident_record` - Returns the details for the specified incident record.
* `get_replication_set` - Retrieve your Incident Manager replication set.
* `get_resource_policies` - Retrieves the resource policies attached to the specified response plan.
* `get_response_plan` - Retrieves the details of the specified response plan.
* `get_timeline_event` - Retrieves a timeline event based on its ID and incident record.
* `list_incident_records` - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* `list_related_items` - List all related items for an incident record.
* `list_replication_sets` - Lists details about the replication set configured in your account. 
* `list_response_plans` - Lists all response plans in your account.
* `list_tags_for_resource` - Lists the tags that are attached to the specified response plan.
* `list_timeline_events` - Lists timeline events for the specified incident record.
* `put_resource_policy` - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* `start_incident` - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* `tag_resource` - Adds a tag to a response plan.
* `untag_resource` - Removes a tag from a resource.
* `update_deletion_protection` - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* `update_incident_record` - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* `update_related_items` - Add or remove related items from the related items tab of an incident record.
* `update_replication_set` - Add or delete Regions from your replication set.
* `update_response_plan` - Updates the specified response plan.
* `update_timeline_event` - Updates a timeline event. You can update events of type <code>Custom Event</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
