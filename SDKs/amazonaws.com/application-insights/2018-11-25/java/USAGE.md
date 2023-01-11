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

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                headers = new CreateApplicationHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "EC2WindowsBarleyService.CreateApplication";
                }};
                request = new CreateApplicationRequest() {{
                    cweMonitorEnabled = true;
                    opsCenterEnabled = false;
                    opsItemSNSTopicArn = "nihil";
                    resourceGroupName = "rerum";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "debitis";
                            value = "voluptatum";
                        }}),
                        add(new Tag() {{
                            key = "et";
                            value = "ut";
                        }}),
                        add(new Tag() {{
                            key = "dolorem";
                            value = "et";
                        }}),
                    }};
                }};
            }};

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->