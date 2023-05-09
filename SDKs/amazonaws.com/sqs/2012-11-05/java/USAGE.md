<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddPermissionActionEnum;
import org.openapis.openapi.models.operations.GETAddPermissionRequest;
import org.openapis.openapi.models.operations.GETAddPermissionResponse;
import org.openapis.openapi.models.operations.GETAddPermissionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddPermissionRequest req = new GETAddPermissionRequest(                new String[]{{
                                add("distinctio"),
                                add("quibusdam"),
                                add("unde"),
                            }}, 857946L, GETAddPermissionActionEnum.ADD_PERMISSION,                 new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }}, "deserunt", "suscipit", GETAddPermissionVersionEnum.TWO_THOUSAND_AND_TWELVE1105) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            GETAddPermissionResponse res = sdk.getAddPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->