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

            TranslateRequest req = new TranslateRequest() {{
                security = new TranslateSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new TranslateRequest() {{
                    from = "et";
                    text = new String[]() {{
                        add("dolorem"),
                        add("et"),
                        add("voluptate"),
                    }};
                    to = "iste";
                    translationContext = "vitae";
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