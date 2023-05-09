<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDevicePoolRequest;
import org.openapis.openapi.models.operations.CreateDevicePoolResponse;
import org.openapis.openapi.models.operations.CreateDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDevicePoolRequest;
import org.openapis.openapi.models.shared.DeviceAttributeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDevicePoolRequest req = new CreateDevicePoolRequest(                new CreateDevicePoolRequest("provident", "distinctio",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.INSTANCE_ARN;
                                                    operator = RuleOperatorEnum.NOT_IN;
                                                    value = "corrupti";
                                                }}),
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.MODEL;
                                                    operator = RuleOperatorEnum.GREATER_THAN;
                                                    value = "error";
                                                }}),
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.INSTANCE_LABELS;
                                                    operator = RuleOperatorEnum.GREATER_THAN;
                                                    value = "iure";
                                                }}),
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.MANUFACTURER;
                                                    operator = RuleOperatorEnum.CONTAINS;
                                                    value = "ipsa";
                                                }}),
                                            }}) {{
                                description = "delectus";
                                maxDevices = 272656L;
                            }};, CreateDevicePoolXAmzTargetEnum.DEVICE_FARM20150623_CREATE_DEVICE_POOL) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateDevicePoolResponse res = sdk.createDevicePool(req);

            if (res.createDevicePoolResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->