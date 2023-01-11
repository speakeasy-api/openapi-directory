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
                    contentLanguage = "veniam";
                    xEBAYCMARKETPLACEID = "architecto";
                }};
                request = new ItemDraft() {{
                    categoryId = "molestias";
                    charity = new Charity() {{
                        charityId = "rerum";
                        donationPercentage = "quo";
                    }};
                    condition = "et";
                    format = "saepe";
                    pricingSummary = new PricingSummary() {{
                        auctionReservePrice = new Amount() {{
                            currency = "commodi";
                            value = "in";
                        }};
                        auctionStartPrice = new Amount() {{
                            currency = "quibusdam";
                            value = "asperiores";
                        }};
                        price = new Amount() {{
                            currency = "quo";
                            value = "ea";
                        }};
                    }};
                    product = new Product() {{
                        aspects = new openapisdk.models.shared.Aspect[]() {{
                            add(new Aspect() {{
                                name = "tempora";
                                values = new String[]() {{
                                    add("blanditiis"),
                                    add("facere"),
                                }};
                            }}),
                        }};
                        brand = "in";
                        description = "et";
                        epid = "odit";
                        imageUrls = new String[]() {{
                            add("id"),
                            add("ipsum"),
                        }};
                        title = "aut";
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