<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateItemDraftRequest(
    content_language="corrupti",
    item_draft=shared.ItemDraft(
        category_id="provident",
        charity=shared.Charity(
            charity_id="distinctio",
            donation_percentage="quibusdam",
        ),
        condition="unde",
        format="nulla",
        pricing_summary=shared.PricingSummary(
            auction_reserve_price=shared.Amount(
                currency="corrupti",
                value="illum",
            ),
            auction_start_price=shared.Amount(
                currency="vel",
                value="error",
            ),
            price=shared.Amount(
                currency="deserunt",
                value="suscipit",
            ),
        ),
        product=shared.Product(
            aspects=[
                shared.Aspect(
                    name="magnam",
                    values=[
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    ],
                ),
                shared.Aspect(
                    name="molestiae",
                    values=[
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    ],
                ),
            ],
            brand="nisi",
            description="recusandae",
            epid="temporibus",
            image_urls=[
                "quis",
            ],
            title="Mr.",
        ),
    ),
    x_ebay_c_marketplace_id="deserunt",
)
    
res = s.item_draft.create_item_draft(req, operations.CreateItemDraftSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.item_draft_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->