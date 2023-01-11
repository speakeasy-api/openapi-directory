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

            CreateSuiteDefinitionRequest req = new CreateSuiteDefinitionRequest() {{
                headers = new CreateSuiteDefinitionHeaders() {{
                    xAmzAlgorithm = "quia";
                    xAmzContentSha256 = "cupiditate";
                    xAmzCredential = "sed";
                    xAmzDate = "maxime";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "consequatur";
                    xAmzSignedHeaders = "excepturi";
                }};
                request = new CreateSuiteDefinitionRequestBody() {{
                    suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                        devicePermissionRoleArn = "ut";
                        devices = new openapisdk.models.shared.DeviceUnderTest[]() {{
                            add(new DeviceUnderTest() {{
                                certificateArn = "sit";
                                thingArn = "aliquid";
                            }}),
                        }};
                        intendedForQualification = false;
                        rootGroup = "itaque";
                        suiteDefinitionName = "fuga";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("accusantium", "vel");
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