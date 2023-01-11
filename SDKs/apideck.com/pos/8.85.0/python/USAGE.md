<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.ItemsAddRequest(
    security=operations.ItemsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.ItemsAddQueryParams(
        raw=False,
    ),
    headers=operations.ItemsAddHeaders(
        x_apideck_app_id="voluptas",
        x_apideck_consumer_id="dolorem",
        x_apideck_service_id="placeat",
    ),
    request=shared.ItemInput(
        abbreviation="aut",
        absent_at_location_ids=[
            "saepe",
        ],
        available=True,
        available_for_pickup=True,
        available_online=True,
        categories=[
            "iusto",
        ],
        code="quo",
        cost=96.199997,
        deleted=False,
        description="enim",
        hidden=True,
        id="nam",
        idempotency_key="placeat",
        modifier_groups=[
            "eum",
            "qui",
        ],
        name="et",
        options=[
            "ab",
            "in",
        ],
        present_at_all_locations=False,
        price_amount=70.099998,
        price_currency="AZN",
        pricing_type="per_unit",
        product_type="other",
        sku="aperiam",
        tax_ids=[
            "non",
            "tenetur",
            "quia",
        ],
        variations=[
            "iste",
            "fuga",
        ],
    ),
)
    
res = s.items.items_add(req)

if res.create_item_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->