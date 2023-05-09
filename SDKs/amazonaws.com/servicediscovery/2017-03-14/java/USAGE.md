<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.operations.CreateHttpNamespaceResponse;
import org.openapis.openapi.models.operations.CreateHttpNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHttpNamespaceRequest req = new CreateHttpNamespaceRequest(                new CreateHttpNamespaceRequest("provident") {{
                                creatorRequestId = "distinctio";
                                description = "quibusdam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "vel") {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag("suscipit", "iure") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("ipsa", "delectus") {{
                                        key = "magnam";
                                        value = "debitis";
                                    }}),
                                }};
                            }};, CreateHttpNamespaceXAmzTargetEnum.ROUTE53_AUTO_NAMING_V20170314_CREATE_HTTP_NAMESPACE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateHttpNamespaceResponse res = sdk.createHttpNamespace(req);

            if (res.createHttpNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->