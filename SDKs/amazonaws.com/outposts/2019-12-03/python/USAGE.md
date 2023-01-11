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
    
req = operations.CreateOrderRequest(
    headers=operations.CreateOrderHeaders(
        x_amz_algorithm="adipisci",
        x_amz_content_sha256="ipsum",
        x_amz_credential="placeat",
        x_amz_date="ut",
        x_amz_security_token="voluptas",
        x_amz_signature="sed",
        x_amz_signed_headers="reprehenderit",
    ),
    request=operations.CreateOrderRequestBody(
        line_items=[
            shared.LineItemRequest(
                catalog_item_id="atque",
                quantity=8567863616121245583,
            ),
            shared.LineItemRequest(
                catalog_item_id="quo",
                quantity=6900483483283279297,
            ),
            shared.LineItemRequest(
                catalog_item_id="perferendis",
                quantity=4098291302621142390,
            ),
        ],
        outpost_identifier="assumenda",
        payment_option="NO_UPFRONT",
        payment_term="THREE_YEARS",
    ),
)
    
res = s.create_order(req)

if res.create_order_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->