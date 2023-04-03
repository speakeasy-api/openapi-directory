<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionRequest;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionResponse;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.DeviceUnderTest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSuiteDefinitionRequest req = new CreateSuiteDefinitionRequest() {{
                requestBody = new CreateSuiteDefinitionRequestBody() {{
                    suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                        devicePermissionRoleArn = "corrupti";
                        devices = new org.openapis.openapi.models.shared.DeviceUnderTest[]{{
                            add(new DeviceUnderTest() {{
                                certificateArn = "distinctio";
                                thingArn = "quibusdam";
                            }}),
                            add(new DeviceUnderTest() {{
                                certificateArn = "unde";
                                thingArn = "nulla";
                            }}),
                            add(new DeviceUnderTest() {{
                                certificateArn = "corrupti";
                                thingArn = "illum";
                            }}),
                        }};
                        intendedForQualification = false;
                        isLongDurationTest = false;
                        protocol = "MqttV3_1_1";
                        rootGroup = "error";
                        suiteDefinitionName = "deserunt";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                }};
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }}            

            CreateSuiteDefinitionResponse res = sdk.createSuiteDefinition(req);

            if (res.createSuiteDefinitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->