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