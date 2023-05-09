<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTemplateDesignerTemplatesPostResponse;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest;
import org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequestMargin;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OrientationEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateOrUpdateTemplateRequest req = new CreateOrUpdateTemplateRequest(                new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                    put("iusto", "excepturi");
                                }}),
                            }}, "nisi", FormatEnum.A6, "temporibus", OrientationEnum.LANDSCAPE,                 new java.util.HashMap<String, Object>() {{
                                put("veritatis", "deserunt");
                                put("perferendis", "ipsam");
                            }}, "repellendus") {{
                footerHtml = "sapiente";
                headerHtml = "quo";
                margin = new CreateOrUpdateTemplateRequestMargin() {{
                    bottom = 140350L;
                    left = 870013L;
                    right = 870088L;
                    top = 978619L;
                }};;
            }};            

            CreateTemplateDesignerTemplatesPostResponse res = sdk.createTemplateDesignerTemplatesPost(req);

            if (res.responseOkDesignerTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->