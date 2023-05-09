# itemDraft

### Available Operations

* [createItemDraft](#createitemdraft) - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

## createItemDraft

This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateItemDraftRequest;
import org.openapis.openapi.models.operations.CreateItemDraftResponse;
import org.openapis.openapi.models.operations.CreateItemDraftSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Aspect;
import org.openapis.openapi.models.shared.Charity;
import org.openapis.openapi.models.shared.ItemDraft;
import org.openapis.openapi.models.shared.PricingSummary;
import org.openapis.openapi.models.shared.Product;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateItemDraftRequest req = new CreateItemDraftRequest("quod") {{
                contentLanguage = "quod";
                itemDraft = new ItemDraft() {{
                    categoryId = "esse";
                    charity = new Charity() {{
                        charityId = "totam";
                        donationPercentage = "porro";
                    }};;
                    condition = "dolorum";
                    format = "dicta";
                    pricingSummary = new PricingSummary() {{
                        auctionReservePrice = new Amount() {{
                            currency = "nam";
                            value = "officia";
                        }};;
                        auctionStartPrice = new Amount() {{
                            currency = "occaecati";
                            value = "fugit";
                        }};;
                        price = new Amount() {{
                            currency = "deleniti";
                            value = "hic";
                        }};;
                    }};;
                    product = new Product() {{
                        aspects = new org.openapis.openapi.models.shared.Aspect[]{{
                            add(new Aspect() {{
                                name = "Jack Johns";
                                values = new String[]{{
                                    add("impedit"),
                                }};
                            }}),
                            add(new Aspect() {{
                                name = "Cory Emmerich";
                                values = new String[]{{
                                    add("ad"),
                                }};
                            }}),
                            add(new Aspect() {{
                                name = "Louis Moore";
                                values = new String[]{{
                                    add("hic"),
                                    add("saepe"),
                                }};
                            }}),
                            add(new Aspect() {{
                                name = "Harvey Hessel";
                                values = new String[]{{
                                    add("quidem"),
                                    add("architecto"),
                                    add("ipsa"),
                                    add("reiciendis"),
                                }};
                            }}),
                        }};
                        brand = "est";
                        description = "mollitia";
                        epid = "laborum";
                        imageUrls = new String[]{{
                            add("dolorem"),
                        }};
                        title = "Mrs.";
                    }};;
                }};;
            }};            

            CreateItemDraftResponse res = sdk.itemDraft.createItemDraft(req, new CreateItemDraftSecurity("explicabo") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemDraftResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
