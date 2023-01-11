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

            CreateContainerRequest req = new CreateContainerRequest() {{
                headers = new CreateContainerHeaders() {{
                    xAmzAlgorithm = "magnam";
                    xAmzContentSha256 = "veniam";
                    xAmzCredential = "dolores";
                    xAmzDate = "rerum";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "voluptatem";
                    xAmzSignedHeaders = "voluptatem";
                    xAmzTarget = "MediaStore_20170901.CreateContainer";
                }};
                request = new CreateContainerInput() {{
                    containerName = "est";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "et";
                            value = "ea";
                        }}),
                        add(new Tag() {{
                            key = "voluptas";
                            value = "velit";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "in";
                        }}),
                    }};
                }};
            }};

            CreateContainerResponse res = sdk.createContainer(req);

            if (res.createContainerOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->