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
                    xAmzAlgorithm = "aperiam";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "ab";
                    xAmzDate = "molestias";
                    xAmzSecurityToken = "molestias";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "animi";
                    xAmzTarget = "DeviceFarm_20150623.CreateDevicePool";
                }};
                request = new CreateDevicePoolRequest() {{
                    description = "nihil";
                    maxDevices = 5987901294680041728;
                    name = "hic";
                    projectArn = "vitae";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            attribute = "FLEET_TYPE";
                            operator = "EQUALS";
                            value = "pariatur";
                        }}),
                        add(new Rule() {{
                            attribute = "INSTANCE_ARN";
                            operator = "GREATER_THAN_OR_EQUALS";
                            value = "architecto";
                        }}),
                        add(new Rule() {{
                            attribute = "INSTANCE_LABELS";
                            operator = "LESS_THAN";
                            value = "rem";
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