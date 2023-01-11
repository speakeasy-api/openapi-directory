<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateSignalingChannelRequest(
    headers=operations.CreateSignalingChannelHeaders(
        x_amz_algorithm="error",
        x_amz_content_sha256="voluptate",
        x_amz_credential="odit",
        x_amz_date="exercitationem",
        x_amz_security_token="hic",
        x_amz_signature="perferendis",
        x_amz_signed_headers="cupiditate",
    ),
    request=operations.CreateSignalingChannelRequestBody(
        channel_name="sed",
        channel_type="SINGLE_MASTER",
        single_master_configuration=operations.CreateSignalingChannelRequestBodySingleMasterConfiguration(
            message_ttl_seconds=7341080715805291804,
        ),
        tags=[
            shared.Tag(
                key="qui",
                value="eius",
            ),
            shared.Tag(
                key="voluptas",
                value="dicta",
            ),
        ],
    ),
)
    
res = s.create_signaling_channel(req)

if res.create_signaling_channel_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->