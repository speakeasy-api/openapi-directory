<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateItemDraftSecurity;
import org.openapis.openapi.models.operations.CreateItemDraftHeaders;
import org.openapis.openapi.models.operations.CreateItemDraftRequest;
import org.openapis.openapi.models.operations.CreateItemDraftResponse;
import org.openapis.openapi.models.shared.ItemDraft;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.Aspect;
import org.openapis.openapi.models.shared.PricingSummary;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.Charity;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateItemDraftRequest req = new CreateItemDraftRequest() {{
                security = new CreateItemDraftSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateItemDraftHeaders() {{
                    contentLanguage = "corrupti";
                    xEbayCMarketplaceId = "provident";
                }};
                request = new ItemDraft() {{
                    categoryId = "distinctio";
                    charity = new Charity() {{
                        charityId = "quibusdam";
                        donationPercentage = "unde";
                    }};
                    condition = "nulla";
                    format = "corrupti";
                    pricingSummary = new PricingSummary() {{
                        auctionReservePrice = new Amount() {{
                            currency = "illum";
                            value = "vel";
                        }};
                        auctionStartPrice = new Amount() {{
                            currency = "error";
                            value = "deserunt";
                        }};
                        price = new Amount() {{
                            currency = "suscipit";
                            value = "iure";
                        }};
                    }};
                    product = new Product() {{
                        aspects = new org.openapis.openapi.models.shared.Aspect[]{{
                            add(new Aspect() {{
                                name = "debitis";
                                values = new String[]{{
                                    add("delectus"),
                                }};
                            }}),
                            add(new Aspect() {{
                                name = "tempora";
                                values = new String[]{{
                                    add("molestiae"),
                                    add("minus"),
                                }};
                            }}),
                        }};
                        brand = "placeat";
                        description = "voluptatum";
                        epid = "iusto";
                        imageUrls = new String[]{{
                            add("nisi"),
                            add("recusandae"),
                            add("temporibus"),
                        }};
                        title = "Mr.";
                    }};
                }};
            }};            

            CreateItemDraftResponse res = sdk.itemDraft.createItemDraft(req);

            if (res.itemDraftResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->