<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateIdentityPoolXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateIdentityPoolRequest;
import org.openapis.openapi.models.operations.CreateIdentityPoolResponse;
import org.openapis.openapi.models.shared.CreateIdentityPoolInput;
import org.openapis.openapi.models.shared.CognitoIdentityProvider;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIdentityPoolRequest req = new CreateIdentityPoolRequest() {{
                createIdentityPoolInput = new CreateIdentityPoolInput() {{
                    allowClassicFlow = false;
                    allowUnauthenticatedIdentities = false;
                    cognitoIdentityProviders = new org.openapis.openapi.models.shared.CognitoIdentityProvider[]{{
                        add(new CognitoIdentityProvider() {{
                            clientId = "provident";
                            providerName = "distinctio";
                            serverSideTokenCheck = false;
                        }}),
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
                    }};
                    developerProviderName = "illum";
                    identityPoolName = "vel";
                    identityPoolTags = new java.util.HashMap<String, String>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    openIdConnectProviderARNs = new String[]{{
                        add("tempora"),
                        add("suscipit"),
                        add("molestiae"),
                        add("minus"),
                    }};
                    samlProviderARNs = new String[]{{
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                        add("nisi"),
                    }};
                    supportedLoginProviders = new java.util.HashMap<String, String>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
                        put("ipsam", "repellendus");
                    }};
                }};
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
                xAmzTarget = "AWSCognitoIdentityService.CreateIdentityPool";
            }}            

            CreateIdentityPoolResponse res = sdk.createIdentityPool(req);

            if (res.identityPool.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->