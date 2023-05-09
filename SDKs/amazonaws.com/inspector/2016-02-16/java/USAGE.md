<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddAttributesToFindingsRequest;
import org.openapis.openapi.models.operations.AddAttributesToFindingsResponse;
import org.openapis.openapi.models.operations.AddAttributesToFindingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddAttributesToFindingsRequest;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddAttributesToFindingsRequest req = new AddAttributesToFindingsRequest(                new AddAttributesToFindingsRequest(                new org.openapis.openapi.models.shared.Attribute[]{{
                                                add(new Attribute("unde") {{
                                                    key = "distinctio";
                                                    value = "quibusdam";
                                                }}),
                                                add(new Attribute("illum") {{
                                                    key = "nulla";
                                                    value = "corrupti";
                                                }}),
                                                add(new Attribute("deserunt") {{
                                                    key = "vel";
                                                    value = "error";
                                                }}),
                                            }},                 new String[]{{
                                                add("iure"),
                                                add("magnam"),
                                            }});, AddAttributesToFindingsXAmzTargetEnum.INSPECTOR_SERVICE_ADD_ATTRIBUTES_TO_FINDINGS) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            AddAttributesToFindingsResponse res = sdk.addAttributesToFindings(req);

            if (res.addAttributesToFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->