# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/connectcampaigns/2021-01-30/python
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


req = operations.CreateCampaignRequest(
    request_body=operations.CreateCampaignRequestBody(
        connect_instance_id="corrupti",
        dialer_config=operations.CreateCampaignRequestBodyDialerConfig(
            predictive_dialer_config=shared.PredictiveDialerConfig(
                bandwidth_allocation=5928.45,
            ),
            progressive_dialer_config=shared.ProgressiveDialerConfig(
                bandwidth_allocation=7151.9,
            ),
        ),
        name="quibusdam",
        outbound_call_config=operations.CreateCampaignRequestBodyOutboundCallConfig(
            answer_machine_detection_config=shared.AnswerMachineDetectionConfig(
                enable_answer_machine_detection=False,
            ),
            connect_contact_flow_id="unde",
            connect_queue_id="nulla",
            connect_source_phone_number="corrupti",
        ),
        tags={
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
    ),
    x_amz_algorithm="delectus",
    x_amz_content_sha256="tempora",
    x_amz_credential="suscipit",
    x_amz_date="molestiae",
    x_amz_security_token="minus",
    x_amz_signature="placeat",
    x_amz_signed_headers="voluptatum",
)
    
res = s.create_campaign(req)

if res.create_campaign_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_campaign` - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* `delete_campaign` - Deletes a campaign from the specified Amazon Connect account.
* `delete_connect_instance_config` - Deletes a connect instance config from the specified AWS account.
* `delete_instance_onboarding_job` - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* `describe_campaign` - Describes the specific campaign.
* `get_campaign_state` - Get state of a campaign for the specified Amazon Connect account.
* `get_campaign_state_batch` - Get state of campaigns for the specified Amazon Connect account.
* `get_connect_instance_config` - Get the specific Connect instance config.
* `get_instance_onboarding_job_status` - Get the specific instance onboarding job status.
* `list_campaigns` - Provides summary information about the campaigns under the specified Amazon Connect account.
* `list_tags_for_resource` - List tags for a resource.
* `pause_campaign` - Pauses a campaign for the specified Amazon Connect account.
* `put_dial_request_batch` - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* `resume_campaign` - Stops a campaign for the specified Amazon Connect account.
* `start_campaign` - Starts a campaign for the specified Amazon Connect account.
* `start_instance_onboarding_job` - Onboard the specific Amazon Connect instance to Connect Campaigns.
* `stop_campaign` - Stops a campaign for the specified Amazon Connect account.
* `tag_resource` - Tag a resource.
* `untag_resource` - Untag a resource.
* `update_campaign_dialer_config` - Updates the dialer config of a campaign. This API is idempotent.
* `update_campaign_name` - Updates the name of a campaign. This API is idempotent.
* `update_campaign_outbound_call_config` - Updates the outbound call config of a campaign. This API is idempotent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
