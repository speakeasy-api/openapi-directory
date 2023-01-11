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

            CreateDevicePoolRequest req = new CreateDevicePoolRequest() {{
                headers = new CreateDevicePoolHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "DeviceFarm_20150623.CreateDevicePool";
                }};
                request = new CreateDevicePoolRequest() {{
                    description = "fugit";
                    maxDevices = 1543572285742637646;
                    name = "nihil";
                    projectArn = "rerum";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            attribute = "REMOTE_ACCESS_ENABLED";
                            operator = "EQUALS";
                            value = "et";
                        }}),
                        add(new Rule() {{
                            attribute = "ARN";
                            operator = "LESS_THAN_OR_EQUALS";
                            value = "et";
                        }}),
                        add(new Rule() {{
                            attribute = "FORM_FACTOR";
                            operator = "GREATER_THAN";
                            value = "vitae";
                        }}),
                    }};
                }};
            }};

            CreateDevicePoolResponse res = sdk.createDevicePool(req);

            if (res.createDevicePoolResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->