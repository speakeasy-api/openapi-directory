<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferenceRequest;
import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferenceResponse;
import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferenceSecurity;
import org.openapis.openapi.models.shared.BulkCreateAdsByInventoryReferenceRequest;
import org.openapis.openapi.models.shared.CreateAdsByInventoryReferenceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BulkCreateAdsByInventoryReferenceRequest req = new BulkCreateAdsByInventoryReferenceRequest(                new BulkCreateAdsByInventoryReferenceRequest() {{
                                requests = new org.openapis.openapi.models.shared.CreateAdsByInventoryReferenceRequest[]{{
                                    add(new CreateAdsByInventoryReferenceRequest() {{
                                        adGroupId = "provident";
                                        bidPercentage = "distinctio";
                                        inventoryReferenceId = "quibusdam";
                                        inventoryReferenceType = "unde";
                                    }}),
                                    add(new CreateAdsByInventoryReferenceRequest() {{
                                        adGroupId = "nulla";
                                        bidPercentage = "corrupti";
                                        inventoryReferenceId = "illum";
                                        inventoryReferenceType = "vel";
                                    }}),
                                    add(new CreateAdsByInventoryReferenceRequest() {{
                                        adGroupId = "error";
                                        bidPercentage = "deserunt";
                                        inventoryReferenceId = "suscipit";
                                        inventoryReferenceType = "iure";
                                    }}),
                                }};
                            }};, "magnam");            

            BulkCreateAdsByInventoryReferenceResponse res = sdk.ad.bulkCreateAdsByInventoryReference(req, new BulkCreateAdsByInventoryReferenceSecurity("debitis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkCreateAdsByInventoryReferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->