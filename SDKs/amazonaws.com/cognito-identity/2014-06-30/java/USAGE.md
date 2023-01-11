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

            CreateIdentityPoolRequest req = new CreateIdentityPoolRequest() {{
                headers = new CreateIdentityPoolHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSCognitoIdentityService.CreateIdentityPool";
                }};
                request = new CreateIdentityPoolInput() {{
                    allowClassicFlow = true;
                    allowUnauthenticatedIdentities = false;
                    cognitoIdentityProviders = new openapisdk.models.shared.CognitoIdentityProvider[]() {{
                        add(new CognitoIdentityProvider() {{
                            clientId = "rerum";
                            providerName = "dicta";
                            serverSideTokenCheck = true;
                        }}),
                    }};
                    developerProviderName = "voluptatum";
                    identityPoolName = "et";
                    identityPoolTags = new java.util.HashMap<String, String>() {{
                        put("dolorem", "et");
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                    openIdConnectProviderARNs = new String[]() {{
                        add("illum"),
                    }};
                    samlProviderARNs = new String[]() {{
                        add("vel"),
                    }};
                    supportedLoginProviders = new java.util.HashMap<String, String>() {{
                        put("dolore", "id");
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