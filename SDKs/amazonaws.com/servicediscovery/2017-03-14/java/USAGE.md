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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "Route53AutoNaming_v20170314.CreateHttpNamespace";
                }};
                request = new CreateHttpNamespaceRequest() {{
                    creatorRequestId = "fugit";
                    description = "et";
                    name = "nihil";
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

            CreateHttpNamespaceResponse res = sdk.createHttpNamespace(req);

            if (res.createHttpNamespaceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->