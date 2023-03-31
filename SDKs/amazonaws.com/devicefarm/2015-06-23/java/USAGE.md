<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateDevicePoolHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateDevicePoolRequest req = new CreateDevicePoolRequest() {{
                headers = new CreateDevicePoolHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "DeviceFarm_20150623.CreateDevicePool";
                }};
                request = new CreateDevicePoolRequest() {{
                    description = "illum";
                    maxDevices = 423655;
                    name = "error";
                    projectArn = "deserunt";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            attribute = "REMOTE_DEBUG_ENABLED";
                            operator = "LESS_THAN_OR_EQUALS";
                            value = "debitis";
                        }}),
                        add(new Rule() {{
                            attribute = "ARN";
                            operator = "CONTAINS";
                            value = "tempora";
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