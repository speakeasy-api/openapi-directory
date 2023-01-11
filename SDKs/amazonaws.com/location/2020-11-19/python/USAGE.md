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
    
req = operations.AssociateTrackerConsumerRequest(
    path_params=operations.AssociateTrackerConsumerPathParams(
        tracker_name="omnis",
    ),
    headers=operations.AssociateTrackerConsumerHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="dolores",
        x_amz_credential="voluptatem",
        x_amz_date="consectetur",
        x_amz_security_token="est",
        x_amz_signature="ducimus",
        x_amz_signed_headers="adipisci",
    ),
    request=operations.AssociateTrackerConsumerRequestBody(
        consumer_arn="ut",
    ),
)
    
res = s.associate_tracker_consumer(req)

if res.associate_tracker_consumer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->