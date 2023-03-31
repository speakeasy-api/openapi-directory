<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ItemsAddRequest(
    item_input=shared.ItemInput(
        abbreviation="Ch",
        absent_at_location_ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        available=True,
        available_for_pickup=False,
        available_online=False,
        categories=[
            shared.ItemCategoriesInput(
                image_ids=[
                    "12345",
                    "12345",
                    "12345",
                    "12345",
                ],
                name="corrupti",
            ),
            shared.ItemCategoriesInput(
                image_ids=[
                    "12345",
                    "12345",
                    "12345",
                    "12345",
                ],
                name="vel",
            ),
            shared.ItemCategoriesInput(
                image_ids=[
                    "12345",
                    "12345",
                    "12345",
                ],
                name="deserunt",
            ),
        ],
        code="11910345",
        cost=2,
        deleted=True,
        description="Hot Chocolate",
        hidden=True,
        id="#cocoa",
        idempotency_key="random_string",
        name="Cocoa",
        options=[
            shared.ItemOptions(
                attribute_id="12345",
                id="12345",
                name="Option 1",
            ),
            shared.ItemOptions(
                attribute_id="12345",
                id="12345",
                name="Option 1",
            ),
        ],
        present_at_all_locations=False,
        price_amount=10,
        price_currency="USD",
        pricing_type="fixed",
        product_type="regular",
        sku="11910345",
        tax_ids=[
            "magnam",
            "debitis",
        ],
        variations=[
            shared.ItemVariationsInput(
                name="Variation",
                present_at_all_locations=False,
                price_amount=10,
                price_currency="USD",
                pricing_type="fixed",
                sequence=1,
                sku="11910345",
                stockable=False,
            ),
        ],
    ),
    raw=False,
    x_apideck_app_id="delectus",
    x_apideck_consumer_id="tempora",
    x_apideck_service_id="suscipit",
)
    
res = s.items.items_add(req, operations.ItemsAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_item_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->