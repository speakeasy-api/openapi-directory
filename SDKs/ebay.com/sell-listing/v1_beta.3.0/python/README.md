# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ebay.com/sell-listing/v1_beta.3.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### item_draft

* `create_item_draft` - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
