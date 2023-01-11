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
    
req = operations.BatchGetItemRequest(
    query_params=operations.BatchGetItemQueryParams(
        request_items="occaecati",
    ),
    headers=operations.BatchGetItemHeaders(
        x_amz_algorithm="error",
        x_amz_content_sha256="aliquam",
        x_amz_credential="eaque",
        x_amz_date="non",
        x_amz_security_token="earum",
        x_amz_signature="voluptatem",
        x_amz_signed_headers="impedit",
        x_amz_target="DynamoDB_20111205.BatchGetItem",
    ),
    request=shared.BatchGetItemInput(
        request_items={
            "ut": shared.KeysAndAttributes(
                attributes_to_get=[
                    "ab",
                    "consequatur",
                ],
                consistent_read=True,
                keys=[
                    shared.Key(
                        hash_key_element=shared.AttributeValue(
                            b="fuga",
                            bs=[
                                "neque",
                            ],
                            n="necessitatibus",
                            ns=[
                                "non",
                                "sit",
                            ],
                            s="est",
                            ss=[
                                "in",
                            ],
                        ),
                        range_key_element=shared.AttributeValue(
                            b="mollitia",
                            bs=[
                                "et",
                            ],
                            n="consequuntur",
                            ns=[
                                "officia",
                                "quidem",
                                "quasi",
                            ],
                            s="odit",
                            ss=[
                                "aperiam",
                                "omnis",
                            ],
                        ),
                    ),
                ],
            ),
        },
    ),
)
    
res = s.batch_get_item(req)

if res.batch_get_item_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->