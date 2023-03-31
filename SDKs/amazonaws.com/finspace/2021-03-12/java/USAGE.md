<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateEnvironmentHeaders;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationModeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodySuperuserParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;

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

            CreateEnvironmentRequest req = new CreateEnvironmentRequest() {{
                headers = new CreateEnvironmentHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateEnvironmentRequestBody() {{
                    dataBundles = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    description = "iure";
                    federationMode = "FEDERATED";
                    federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                        applicationCallBackURL = "debitis";
                        attributeMap = new java.util.HashMap<String, String>() {{
                            put("delectus", "tempora");
                        }};
                        federationProviderName = "suscipit";
                        federationURN = "molestiae";
                        samlMetadataDocument = "minus";
                        samlMetadataURL = "placeat";
                    }};
                    kmsKeyId = "voluptatum";
                    name = "iusto";
                    superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters() {{
                        emailAddress = "excepturi";
                        firstName = "Glen";
                        lastName = "Walsh";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("ab", "quis");
                        put("veritatis", "deserunt");
                        put("perferendis", "ipsam");
                        put("repellendus", "sapiente");
                    }};
                }};
            }};            

            CreateEnvironmentResponse res = sdk.createEnvironment(req);

            if (res.createEnvironmentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->