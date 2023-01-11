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

            CreateActivityRequest req = new CreateActivityRequest() {{
                headers = new CreateActivityHeaders() {{
                    xAmzAlgorithm = "laboriosam";
                    xAmzContentSha256 = "totam";
                    xAmzCredential = "atque";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "quibusdam";
                    xAmzSignature = "dolorum";
                    xAmzSignedHeaders = "placeat";
                    xAmzTarget = "AWSStepFunctions.CreateActivity";
                }};
                request = new CreateActivityInput() {{
                    name = "laborum";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "numquam";
                            value = "et";
                        }}),
                    }};
                }};
            }};

            CreateActivityResponse res = sdk.createActivity(req);

            if (res.createActivityOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->