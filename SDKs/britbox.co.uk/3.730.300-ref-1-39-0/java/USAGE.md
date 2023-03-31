<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddPaymentMethodSecurity;
import org.openapis.openapi.models.operations.AddPaymentMethodQueryParams;
import org.openapis.openapi.models.operations.AddPaymentMethodRequest;
import org.openapis.openapi.models.operations.AddPaymentMethodResponse;
import org.openapis.openapi.models.shared.AddPaymentMethodRequestTypeEnum;
import org.openapis.openapi.models.shared.AddPaymentMethodRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.SchemeAccountAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddPaymentMethodRequest req = new AddPaymentMethodRequest() {{
                security = new AddPaymentMethodSecurity() {{
                    accountAuth = new SchemeAccountAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AddPaymentMethodQueryParams() {{
                    ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                        add("rpt"),
                        add("cas"),
                        add("lrl"),
                    }};
                    lang = "unde";
                }};
                request = new AddPaymentMethodRequest() {{
                    makeDefault = false;
                    token = "nulla";
                    type = "Card";
                }};
            }};            

            AddPaymentMethodResponse res = sdk.account.addPaymentMethod(req);

            if (res.paymentMethod.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->