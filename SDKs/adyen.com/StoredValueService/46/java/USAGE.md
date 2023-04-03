<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostChangeStatusSecurity;
import org.openapis.openapi.models.operations.PostChangeStatusResponse;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestShopperInteractionEnum;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestStatusEnum;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequest;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueStatusChangeRequest req = new StoredValueStatusChangeRequest() {{
                amount = new Amount() {{
                    currency = "corrupti";
                    value = 592845;
                }};
                merchantAccount = "distinctio";
                paymentMethod = new java.util.HashMap<String, String>() {{
                    put("unde", "nulla");
                    put("corrupti", "illum");
                    put("vel", "error");
                    put("deserunt", "suscipit");
                }};
                recurringDetailReference = "iure";
                reference = "magnam";
                shopperInteraction = "POS";
                shopperReference = "ipsa";
                status = "inactive";
                store = "tempora";
            }}            

            PostChangeStatusResponse res = sdk.general.postChangeStatus(req, new PostChangeStatusSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueStatusChangeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->