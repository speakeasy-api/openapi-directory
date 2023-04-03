<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateTemplateDesignerTemplatesPostResponse;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest;
import org.openapis.openapi.models.shared.OrientationEnum;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest req = new CreateOrUpdateTemplateRequest() {{
                components = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }}),
                }};
                css = "suscipit";
                footerHtml = "molestiae";
                format = "a5";
                headerHtml = "placeat";
                name = "voluptatum";
                orientation = "landscape";
                previewPayload = new java.util.HashMap<String, Object>() {{
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                    put("quis", "veritatis");
                }};
                templateHtml = "deserunt";
            }}            

            CreateTemplateDesignerTemplatesPostResponse res = sdk.createTemplateDesignerTemplatesPost(req);

            if (res.responseOkDesignerTemplate.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->