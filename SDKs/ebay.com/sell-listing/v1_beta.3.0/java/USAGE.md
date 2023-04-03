<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateItemDraftSecurity;
import org.openapis.openapi.models.operations.CreateItemDraftRequest;
import org.openapis.openapi.models.operations.CreateItemDraftResponse;
import org.openapis.openapi.models.shared.ItemDraft;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.Aspect;
import org.openapis.openapi.models.shared.PricingSummary;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Charity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateItemDraftRequest req = new CreateItemDraftRequest() {{
                contentLanguage = "corrupti";
                itemDraft = new ItemDraft() {{
                    categoryId = "provident";
                    charity = new Charity() {{
                        charityId = "distinctio";
                        donationPercentage = "quibusdam";
                    }};
                    condition = "unde";
                    format = "nulla";
                    pricingSummary = new PricingSummary() {{
                        auctionReservePrice = new Amount() {{
                            currency = "corrupti";
                            value = "illum";
                        }};
                        auctionStartPrice = new Amount() {{
                            currency = "vel";
                            value = "error";
                        }};
                        price = new Amount() {{
                            currency = "deserunt";
                            value = "suscipit";
                        }};
                    }};
                    product = new Product() {{
                        aspects = new org.openapis.openapi.models.shared.Aspect[]{{
                            add(new Aspect() {{
                                name = "magnam";
                                values = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                            }}),
                            add(new Aspect() {{
                                name = "molestiae";
                                values = new String[]{{
                                    add("placeat"),
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                }};
                            }}),
                        }};
                        brand = "nisi";
                        description = "recusandae";
                        epid = "temporibus";
                        imageUrls = new String[]{{
                            add("quis"),
                        }};
                        title = "Mr.";
                    }};
                }};
                xEbayCMarketplaceId = "deserunt";
            }}            

            CreateItemDraftResponse res = sdk.itemDraft.createItemDraft(req, new CreateItemDraftSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemDraftResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->