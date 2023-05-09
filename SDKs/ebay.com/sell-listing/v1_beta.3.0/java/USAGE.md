<!-- Start SDK Example Usage -->
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

            CreateItemDraftRequest req = new CreateItemDraftRequest("corrupti") {{
                contentLanguage = "provident";
                itemDraft = new ItemDraft() {{
                    categoryId = "distinctio";
                    charity = new Charity() {{
                        charityId = "quibusdam";
                        donationPercentage = "unde";
                    }};;
                    condition = "nulla";
                    format = "corrupti";
                    pricingSummary = new PricingSummary() {{
                        auctionReservePrice = new Amount() {{
                            currency = "illum";
                            value = "vel";
                        }};;
                        auctionStartPrice = new Amount() {{
                            currency = "error";
                            value = "deserunt";
                        }};;
                        price = new Amount() {{
                            currency = "suscipit";
                            value = "iure";
                        }};;
                    }};;
                    product = new Product() {{
                        aspects = new org.openapis.openapi.models.shared.Aspect[]{{
                            add(new Aspect() {{
                                name = "Larry Windler";
                                values = new String[]{{
                                    add("minus"),
                                    add("placeat"),
                                }};
                            }}),
                            add(new Aspect() {{
                                name = "Ted Mante";
                                values = new String[]{{
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                            }}),
                        }};
                        brand = "perferendis";
                        description = "ipsam";
                        epid = "repellendus";
                        imageUrls = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                        title = "Dr.";
                    }};;
                }};;
            }};            

            CreateItemDraftResponse res = sdk.itemDraft.createItemDraft(req, new CreateItemDraftSecurity("molestiae") {{
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
<!-- End SDK Example Usage -->