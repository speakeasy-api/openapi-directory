<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostChangeStatusResponse;
import org.openapis.openapi.models.operations.PostChangeStatusSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequest;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestShopperInteractionEnum;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueStatusChangeRequest req = new StoredValueStatusChangeRequest("corrupti",                 new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}, "vel", StoredValueStatusChangeRequestStatusEnum.INACTIVE) {{
                amount = new Amount("deserunt", 384382L);;
                recurringDetailReference = "iure";
                shopperInteraction = StoredValueStatusChangeRequestShopperInteractionEnum.CONT_AUTH;
                shopperReference = "debitis";
                store = "ipsa";
            }};            

            PostChangeStatusResponse res = sdk.general.postChangeStatus(req, new PostChangeStatusSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueStatusChangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->