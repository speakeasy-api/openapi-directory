<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateHttpNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateHttpNamespaceHeaders;
import org.openapis.openapi.models.operations.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.operations.CreateHttpNamespaceResponse;
import org.openapis.openapi.models.shared.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateHttpNamespaceRequest req = new CreateHttpNamespaceRequest() {{
                headers = new CreateHttpNamespaceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Route53AutoNaming_v20170314.CreateHttpNamespace";
                }};
                request = new CreateHttpNamespaceRequest() {{
                    creatorRequestId = "illum";
                    description = "vel";
                    name = "error";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                        add(new Tag() {{
                            key = "magnam";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "delectus";
                        }}),
                    }};
                }};
            }};            

            CreateHttpNamespaceResponse res = sdk.createHttpNamespace(req);

            if (res.createHttpNamespaceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->