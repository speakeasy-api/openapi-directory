# language

### Available Operations

* [translate](#translate) - Translates input text inot a given language.

## translate

Translates input text inot a given language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateResponse;
import org.openapis.openapi.models.operations.TranslateSecurity;
import org.openapis.openapi.models.shared.TranslateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TranslateRequest req = new TranslateRequest() {{
                from = "vel";
                text = new String[]{{
                    add("deserunt"),
                    add("suscipit"),
                    add("iure"),
                }};
                to = "magnam";
                translationContext = "debitis";
            }};            

            TranslateResponse res = sdk.language.translate(req, new TranslateSecurity("ipsa") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.translateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
