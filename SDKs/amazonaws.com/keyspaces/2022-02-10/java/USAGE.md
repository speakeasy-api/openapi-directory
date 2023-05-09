<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateKeyspaceRequest;
import org.openapis.openapi.models.operations.CreateKeyspaceResponse;
import org.openapis.openapi.models.operations.CreateKeyspaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateKeyspaceRequest;
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

            CreateKeyspaceRequest req = new CreateKeyspaceRequest(                new CreateKeyspaceRequest("provident") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nulla", "corrupti") {{
                                        key = "quibusdam";
                                        value = "unde";
                                    }}),
                                    add(new Tag("error", "deserunt") {{
                                        key = "illum";
                                        value = "vel";
                                    }}),
                                    add(new Tag("magnam", "debitis") {{
                                        key = "suscipit";
                                        value = "iure";
                                    }}),
                                }};
                            }};, CreateKeyspaceXAmzTargetEnum.KEYSPACES_SERVICE_CREATE_KEYSPACE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CreateKeyspaceResponse res = sdk.createKeyspace(req);

            if (res.createKeyspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->