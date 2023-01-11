<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateConnectionRequest req = new CreateConnectionRequest() {{
                headers = new CreateConnectionHeaders() {{
                    xAmzAlgorithm = "nobis";
                    xAmzContentSha256 = "libero";
                    xAmzCredential = "cumque";
                    xAmzDate = "accusamus";
                    xAmzSecurityToken = "voluptates";
                    xAmzSignature = "est";
                    xAmzSignedHeaders = "inventore";
                    xAmzTarget = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection";
                }};
                request = new CreateConnectionInput() {{
                    connectionName = "minima";
                    hostArn = "iusto";
                    providerType = "GitHub";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "sed";
                            value = "quo";
                        }}),
                        add(new Tag() {{
                            key = "animi";
                            value = "et";
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