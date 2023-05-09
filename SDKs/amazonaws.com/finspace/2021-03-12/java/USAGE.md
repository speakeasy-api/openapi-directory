<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationModeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodySuperuserParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new CreateEnvironmentRequestBody("provident") {{
                                dataBundles = new String[]{{
                                    add("quibusdam"),
                                    add("unde"),
                                    add("nulla"),
                                }};
                                description = "corrupti";
                                federationMode = CreateEnvironmentRequestBodyFederationModeEnum.LOCAL;
                                federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                                    applicationCallBackURL = "vel";
                                    attributeMap = new java.util.HashMap<String, String>() {{
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                        put("debitis", "ipsa");
                                    }};
                                    federationProviderName = "delectus";
                                    federationURN = "tempora";
                                    samlMetadataDocument = "suscipit";
                                    samlMetadataURL = "molestiae";
                                }};;
                                kmsKeyId = "minus";
                                superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters() {{
                                    emailAddress = "placeat";
                                    firstName = "Junior";
                                    lastName = "Kshlerin";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateEnvironmentResponse res = sdk.createEnvironment(req);

            if (res.createEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->