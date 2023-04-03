<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateDevicePoolRequest;
import org.openapis.openapi.models.operations.CreateDevicePoolResponse;
import org.openapis.openapi.models.shared.CreateDevicePoolRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.DeviceAttributeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDevicePoolRequest req = new CreateDevicePoolRequest() {{
                createDevicePoolRequest = new CreateDevicePoolRequest() {{
                    description = "corrupti";
                    maxDevices = 592845;
                    name = "distinctio";
                    projectArn = "quibusdam";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            attribute = "MODEL";
                            operator = "GREATER_THAN_OR_EQUALS";
                            value = "illum";
                        }}),
                        add(new Rule() {{
                            attribute = "REMOTE_DEBUG_ENABLED";
                            operator = "GREATER_THAN_OR_EQUALS";
                            value = "deserunt";
                        }}),
                        add(new Rule() {{
                            attribute = "REMOTE_ACCESS_ENABLED";
                            operator = "GREATER_THAN";
                            value = "magnam";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
                xAmzTarget = "DeviceFarm_20150623.CreateDevicePool";
            }}            

            CreateDevicePoolResponse res = sdk.createDevicePool(req);

            if (res.createDevicePoolResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->