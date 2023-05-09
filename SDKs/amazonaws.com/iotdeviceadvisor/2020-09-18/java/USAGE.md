<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequest;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionResponse;
import org.openapis.openapi.models.shared.DeviceUnderTest;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSuiteDefinitionRequest req = new CreateSuiteDefinitionRequest(                new CreateSuiteDefinitionRequestBody(                new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                                                devicePermissionRoleArn = "provident";
                                                devices = new org.openapis.openapi.models.shared.DeviceUnderTest[]{{
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "quibusdam";
                                                        thingArn = "unde";
                                                    }}),
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "nulla";
                                                        thingArn = "corrupti";
                                                    }}),
                                                    add(new DeviceUnderTest() {{
                                                        certificateArn = "illum";
                                                        thingArn = "vel";
                                                    }}),
                                                }};
                                                intendedForQualification = false;
                                                isLongDurationTest = false;
                                                protocol = ProtocolEnum.MQTT_V5;
                                                rootGroup = "deserunt";
                                                suiteDefinitionName = "suscipit";
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateSuiteDefinitionResponse res = sdk.createSuiteDefinition(req);

            if (res.createSuiteDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->