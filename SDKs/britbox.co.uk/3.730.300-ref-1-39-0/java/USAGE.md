<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPaymentMethodRequest;
import org.openapis.openapi.models.operations.AddPaymentMethodResponse;
import org.openapis.openapi.models.operations.AddPaymentMethodSecurity;
import org.openapis.openapi.models.shared.AddPaymentMethodRequest;
import org.openapis.openapi.models.shared.AddPaymentMethodRequestTypeEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddPaymentMethodRequest req = new AddPaymentMethodRequest(                new AddPaymentMethodRequest("corrupti", AddPaymentMethodRequestTypeEnum.CARD) {{
                                makeDefault = false;
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.RPT),
                }};
                lang = "nulla";
            }};            

            AddPaymentMethodResponse res = sdk.account.addPaymentMethod(req, new AddPaymentMethodSecurity("corrupti") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->