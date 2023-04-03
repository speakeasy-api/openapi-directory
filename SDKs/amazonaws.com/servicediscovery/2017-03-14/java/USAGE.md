<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateHttpNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.operations.CreateHttpNamespaceResponse;
import org.openapis.openapi.models.shared.CreateHttpNamespaceRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHttpNamespaceRequest req = new CreateHttpNamespaceRequest() {{
                createHttpNamespaceRequest = new CreateHttpNamespaceRequest() {{
                    creatorRequestId = "corrupti";
                    description = "provident";
                    name = "distinctio";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "unde";
                            value = "nulla";
                        }}),
                        add(new Tag() {{
                            key = "corrupti";
                            value = "illum";
                        }}),
                        add(new Tag() {{
                            key = "vel";
                            value = "error";
                        }}),
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "Route53AutoNaming_v20170314.CreateHttpNamespace";
            }}            

            CreateHttpNamespaceResponse res = sdk.createHttpNamespace(req);

            if (res.createHttpNamespaceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->