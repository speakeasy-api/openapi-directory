<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateItemDraftRequest(
    security=operations.CreateItemDraftSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateItemDraftHeaders(
        content_language="sit",
        x_ebay_c_marketplace_id="voluptas",
    ),
    request=shared.ItemDraft(
        category_id="sint",
        charity=shared.Charity(
            charity_id="voluptate",
            donation_percentage="aperiam",
        ),
        condition="aut",
        format="unde",
        pricing_summary=shared.PricingSummary(
            auction_reserve_price=shared.Amount(
                currency="dolorem",
                value="aspernatur",
            ),
            auction_start_price=shared.Amount(
                currency="quia",
                value="autem",
            ),
            price=shared.Amount(
                currency="facere",
                value="at",
            ),
        ),
        product=shared.Product(
            aspects=[
                shared.Aspect(
                    name="qui",
                    values=[
                        "modi",
                    ],
                ),
                shared.Aspect(
                    name="debitis",
                    values=[
                        "fugiat",
                        "perferendis",
                    ],
                ),
            ],
            brand="soluta",
            description="aut",
            epid="nihil",
            image_urls=[
                "voluptates",
            ],
            title="quasi",
        ),
    ),
)
    
res = s.item_draft.create_item_draft(req)

if res.item_draft_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->