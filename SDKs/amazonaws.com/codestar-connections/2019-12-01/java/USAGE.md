<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateConnectionHeaders;
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.shared.CreateConnectionInput;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ProviderTypeEnum;

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

            CreateConnectionRequest req = new CreateConnectionRequest() {{
                headers = new CreateConnectionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection";
                }};
                request = new CreateConnectionInput() {{
                    connectionName = "illum";
                    hostArn = "vel";
                    providerType = "GitHub";
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

            CreateConnectionResponse res = sdk.createConnection(req);

            if (res.createConnectionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->