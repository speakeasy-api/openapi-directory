<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TranslateSecurity;
import org.openapis.openapi.models.operations.TranslateRequest;
import org.openapis.openapi.models.operations.TranslateResponse;
import org.openapis.openapi.models.shared.TranslateRequest;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateRequest req = new TranslateRequest() {{
                security = new TranslateSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new TranslateRequest() {{
                    from = "corrupti";
                    text = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    to = "nulla";
                    translationContext = "corrupti";
                }};
            }};            

            TranslateResponse res = sdk.language.translate(req);

            if (res.translateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->