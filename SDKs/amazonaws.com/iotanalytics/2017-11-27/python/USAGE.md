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
    
req = operations.BatchPutMessageRequest(
    headers=operations.BatchPutMessageHeaders(
        x_amz_algorithm="vel",
        x_amz_content_sha256="cumque",
        x_amz_credential="ea",
        x_amz_date="earum",
        x_amz_security_token="quisquam",
        x_amz_signature="explicabo",
        x_amz_signed_headers="id",
    ),
    request=operations.BatchPutMessageRequestBody(
        channel_name="aperiam",
        messages=[
            shared.Message(
                message_id="dolores",
                payload="cum",
            ),
            shared.Message(
                message_id="consequuntur",
                payload="vero",
            ),
        ],
    ),
)
    
res = s.batch_put_message(req)

if res.batch_put_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->