<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TranslateSecurity;
import org.openapis.openapi.models.operations.TranslateResponse;
import org.openapis.openapi.models.shared.TranslateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TranslateRequest req = new TranslateRequest() {{
                from = "corrupti";
                text = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                to = "nulla";
                translationContext = "corrupti";
            }}            

            TranslateResponse res = sdk.language.translate(req, new TranslateSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.translateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->