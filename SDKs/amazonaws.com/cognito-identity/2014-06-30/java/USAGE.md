<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIdentityPoolRequest;
import org.openapis.openapi.models.operations.CreateIdentityPoolResponse;
import org.openapis.openapi.models.operations.CreateIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CognitoIdentityProvider;
import org.openapis.openapi.models.shared.CreateIdentityPoolInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIdentityPoolRequest req = new CreateIdentityPoolRequest(                new CreateIdentityPoolInput(false, "provident") {{
                                allowClassicFlow = false;
                                cognitoIdentityProviders = new org.openapis.openapi.models.shared.CognitoIdentityProvider[]{{
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "quibusdam";
                                        providerName = "unde";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "nulla";
                                        providerName = "corrupti";
                                        serverSideTokenCheck = false;
                                    }}),
                                    add(new CognitoIdentityProvider() {{
                                        clientId = "illum";
                                        providerName = "vel";
                                        serverSideTokenCheck = false;
                                    }}),
                                }};
                                developerProviderName = "error";
                                identityPoolTags = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "iure");
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                                openIdConnectProviderARNs = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                samlProviderARNs = new String[]{{
                                    add("placeat"),
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                }};
                                supportedLoginProviders = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "temporibus");
                                    put("ab", "quis");
                                }};
                            }};, CreateIdentityPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_SERVICE_CREATE_IDENTITY_POOL) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            CreateIdentityPoolResponse res = sdk.createIdentityPool(req);

            if (res.identityPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->