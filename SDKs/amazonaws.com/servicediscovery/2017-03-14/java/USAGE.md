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

            CreateHttpNamespaceRequest req = new CreateHttpNamespaceRequest() {{
                headers = new CreateHttpNamespaceHeaders() {{
                    xAmzAlgorithm = "sapiente";
                    xAmzContentSha256 = "at";
                    xAmzCredential = "fuga";
                    xAmzDate = "dicta";
                    xAmzSecurityToken = "optio";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "eum";
                    xAmzTarget = "Route53AutoNaming_v20170314.CreateHttpNamespace";
                }};
                request = new CreateHttpNamespaceRequest() {{
                    creatorRequestId = "non";
                    description = "corrupti";
                    name = "nam";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "adipisci";
                            value = "enim";
                        }}),
                        add(new Tag() {{
                            key = "laborum";
                            value = "rerum";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            value = "sequi";
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