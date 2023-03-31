# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### itemDraft

* `createItemDraft` - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
