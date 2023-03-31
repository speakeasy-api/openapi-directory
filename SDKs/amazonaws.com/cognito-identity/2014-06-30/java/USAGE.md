<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateIdentityPoolHeaders;
import org.openapis.openapi.models.operations.CreateIdentityPoolRequest;
import org.openapis.openapi.models.operations.CreateIdentityPoolResponse;
import org.openapis.openapi.models.shared.CreateIdentityPoolInput;
import org.openapis.openapi.models.shared.CognitoIdentityProvider;

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

            CreateIdentityPoolRequest req = new CreateIdentityPoolRequest() {{
                headers = new CreateIdentityPoolHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSCognitoIdentityService.CreateIdentityPool";
                }};
                request = new CreateIdentityPoolInput() {{
                    allowClassicFlow = false;
                    allowUnauthenticatedIdentities = false;
                    cognitoIdentityProviders = new org.openapis.openapi.models.shared.CognitoIdentityProvider[]{{
                        add(new CognitoIdentityProvider() {{
                            clientId = "vel";
                            providerName = "error";
                            serverSideTokenCheck = false;
                        }}),
                        add(new CognitoIdentityProvider() {{
                            clientId = "deserunt";
                            providerName = "suscipit";
                            serverSideTokenCheck = false;
                        }}),
                        add(new CognitoIdentityProvider() {{
                            clientId = "iure";
                            providerName = "magnam";
                            serverSideTokenCheck = false;
                        }}),
                        add(new CognitoIdentityProvider() {{
                            clientId = "debitis";
                            providerName = "ipsa";
                            serverSideTokenCheck = false;
                        }}),
                    }};
                    developerProviderName = "delectus";
                    identityPoolName = "tempora";
                    identityPoolTags = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    openIdConnectProviderARNs = new String[]{{
                        add("excepturi"),
                        add("nisi"),
                    }};
                    samlProviderARNs = new String[]{{
                        add("temporibus"),
                        add("ab"),
                        add("quis"),
                        add("veritatis"),
                    }};
                    supportedLoginProviders = new java.util.HashMap<String, String>() {{
                        put("perferendis", "ipsam");
                        put("repellendus", "sapiente");
                        put("quo", "odit");
                    }};
                }};
            }};            

            CreateIdentityPoolResponse res = sdk.createIdentityPool(req);

            if (res.identityPool.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->