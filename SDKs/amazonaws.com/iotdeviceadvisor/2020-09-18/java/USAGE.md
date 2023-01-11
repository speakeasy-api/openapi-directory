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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateSuiteDefinitionRequestBody() {{
                    suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {{
                        devicePermissionRoleArn = "voluptas";
                        devices = new openapisdk.models.shared.DeviceUnderTest[]() {{
                            add(new DeviceUnderTest() {{
                                certificateArn = "et";
                                thingArn = "nihil";
                            }}),
                        }};
                        intendedForQualification = true;
                        rootGroup = "dicta";
                        suiteDefinitionName = "debitis";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
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