<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddPaymentMethodSecurity;
import org.openapis.openapi.models.operations.AddPaymentMethodRequest;
import org.openapis.openapi.models.operations.AddPaymentMethodResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.AddPaymentMethodRequestTypeEnum;
import org.openapis.openapi.models.shared.AddPaymentMethodRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddPaymentMethodRequest req = new AddPaymentMethodRequest() {{
                addPaymentMethodRequest = new AddPaymentMethodRequest() {{
                    makeDefault = false;
                    token = "corrupti";
                    type = "Card";
                }};
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add("cas"),
                    add("lrl"),
                    add("rpt"),
                }};
                lang = "nulla";
            }}            

            AddPaymentMethodResponse res = sdk.account.addPaymentMethod(req, new AddPaymentMethodSecurity() {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentMethod.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->