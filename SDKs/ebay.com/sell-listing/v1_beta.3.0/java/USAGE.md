<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateItemDraftRequest req = new CreateItemDraftRequest() {{
                security = new CreateItemDraftSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateItemDraftHeaders() {{
                    contentLanguage = "sit";
                    xEBAYCMARKETPLACEID = "voluptas";
                }};
                request = new ItemDraft() {{
                    categoryId = "culpa";
                    charity = new Charity() {{
                        charityId = "expedita";
                        donationPercentage = "consequuntur";
                    }};
                    condition = "dolor";
                    format = "expedita";
                    pricingSummary = new PricingSummary() {{
                        auctionReservePrice = new Amount() {{
                            currency = "voluptas";
                            value = "fugit";
                        }};
                        auctionStartPrice = new Amount() {{
                            currency = "et";
                            value = "nihil";
                        }};
                        price = new Amount() {{
                            currency = "rerum";
                            value = "dicta";
                        }};
                    }};
                    product = new Product() {{
                        aspects = new openapisdk.models.shared.Aspect[]() {{
                            add(new Aspect() {{
                                name = "voluptatum";
                                values = new String[]() {{
                                    add("ut"),
                                }};
                            }}),
                        }};
                        brand = "dolorem";
                        description = "et";
                        epid = "voluptate";
                        imageUrls = new String[]() {{
                            add("vitae"),
                            add("totam"),
                            add("dolores"),
                        }};
                        title = "illum";
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