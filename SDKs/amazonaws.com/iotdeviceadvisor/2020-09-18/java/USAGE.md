<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSuiteDefinitionHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateSuiteDefinitionRequest req = new CreateSuiteDefinitionRequest() {{
                headers = new CreateSuiteDefinitionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateSuiteDefinitionRequestBody() {{
                    suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                        devicePermissionRoleArn = "illum";
                        devices = new org.openapis.openapi.models.shared.DeviceUnderTest[]{{
                            add(new DeviceUnderTest() {{
                                certificateArn = "error";
                                thingArn = "deserunt";
                            }}),
                            add(new DeviceUnderTest() {{
                                certificateArn = "suscipit";
                                thingArn = "iure";
                            }}),
                        }};
                        intendedForQualification = false;
                        isLongDurationTest = false;
                        protocol = "MqttV3_1_1";
                        rootGroup = "debitis";
                        suiteDefinitionName = "ipsa";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                    }};
                }};
            }};            

            CreateSuiteDefinitionResponse res = sdk.createSuiteDefinition(req);

            if (res.createSuiteDefinitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->