<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferenceSecurity;
import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferencePathParams;
import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferenceRequest;
import org.openapis.openapi.models.operations.BulkCreateAdsByInventoryReferenceResponse;
import org.openapis.openapi.models.shared.BulkCreateAdsByInventoryReferenceRequest;
import org.openapis.openapi.models.shared.CreateAdsByInventoryReferenceRequest;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BulkCreateAdsByInventoryReferenceRequest req = new BulkCreateAdsByInventoryReferenceRequest() {{
                security = new BulkCreateAdsByInventoryReferenceSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BulkCreateAdsByInventoryReferencePathParams() {{
                    campaignId = "corrupti";
                }};
                request = new BulkCreateAdsByInventoryReferenceRequest() {{
                    requests = new org.openapis.openapi.models.shared.CreateAdsByInventoryReferenceRequest[]{{
                        add(new CreateAdsByInventoryReferenceRequest() {{
                            adGroupId = "distinctio";
                            bidPercentage = "quibusdam";
                            inventoryReferenceId = "unde";
                            inventoryReferenceType = "nulla";
                        }}),
                        add(new CreateAdsByInventoryReferenceRequest() {{
                            adGroupId = "corrupti";
                            bidPercentage = "illum";
                            inventoryReferenceId = "vel";
                            inventoryReferenceType = "error";
                        }}),
                        add(new CreateAdsByInventoryReferenceRequest() {{
                            adGroupId = "deserunt";
                            bidPercentage = "suscipit";
                            inventoryReferenceId = "iure";
                            inventoryReferenceType = "magnam";
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