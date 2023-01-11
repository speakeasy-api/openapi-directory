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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection";
                }};
                request = new CreateConnectionInput() {{
                    connectionName = "fugit";
                    hostArn = "et";
                    providerType = "Bitbucket";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "dicta";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "voluptatum";
                            value = "et";
                        }}),
                        add(new Tag() {{
                            key = "ut";
                            value = "dolorem";
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