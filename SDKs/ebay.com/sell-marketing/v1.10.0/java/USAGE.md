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

            BulkCreateAdsByInventoryReferenceRequest req = new BulkCreateAdsByInventoryReferenceRequest() {{
                security = new BulkCreateAdsByInventoryReferenceSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BulkCreateAdsByInventoryReferencePathParams() {{
                    campaignId = "et";
                }};
                request = new BulkCreateAdsByInventoryReferenceRequest() {{
                    requests = new openapisdk.models.shared.CreateAdsByInventoryReferenceRequest[]() {{
                        add(new CreateAdsByInventoryReferenceRequest() {{
                            bidPercentage = "voluptatem";
                            inventoryReferenceId = "ex";
                            inventoryReferenceType = "magni";
                        }}),
                        add(new CreateAdsByInventoryReferenceRequest() {{
                            bidPercentage = "vero";
                            inventoryReferenceId = "distinctio";
                            inventoryReferenceType = "cumque";
                        }}),
                    }};
                }};
            }};

            BulkCreateAdsByInventoryReferenceResponse res = sdk.ad.bulkCreateAdsByInventoryReference(req);

            if (res.bulkCreateAdsByInventoryReferenceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->