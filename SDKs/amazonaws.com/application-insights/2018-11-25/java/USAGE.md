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
                    xAmzAlgorithm = "laudantium";
                    xAmzContentSha256 = "odio";
                    xAmzCredential = "deserunt";
                    xAmzDate = "qui";
                    xAmzSecurityToken = "inventore";
                    xAmzSignature = "omnis";
                    xAmzSignedHeaders = "veritatis";
                    xAmzTarget = "EC2WindowsBarleyService.CreateApplication";
                }};
                request = new CreateApplicationRequest() {{
                    cweMonitorEnabled = false;
                    opsCenterEnabled = true;
                    opsItemSNSTopicArn = "vitae";
                    resourceGroupName = "quia";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "adipisci";
                            value = "cupiditate";
                        }}),
                        add(new Tag() {{
                            key = "similique";
                            value = "omnis";
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