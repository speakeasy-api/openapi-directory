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
                    xAmzAlgorithm = "vitae";
                    xAmzContentSha256 = "vel";
                    xAmzCredential = "assumenda";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "ad";
                    xAmzSignature = "eum";
                    xAmzSignedHeaders = "voluptatem";
                    xAmzTarget = "AWSCognitoIdentityService.CreateIdentityPool";
                }};
                request = new CreateIdentityPoolInput() {{
                    allowClassicFlow = false;
                    allowUnauthenticatedIdentities = true;
                    cognitoIdentityProviders = new openapisdk.models.shared.CognitoIdentityProvider[]() {{
                        add(new CognitoIdentityProvider() {{
                            clientId = "consequatur";
                            providerName = "non";
                            serverSideTokenCheck = true;
                        }}),
                        add(new CognitoIdentityProvider() {{
                            clientId = "cum";
                            providerName = "eius";
                            serverSideTokenCheck = false;
                        }}),
                        add(new CognitoIdentityProvider() {{
                            clientId = "nisi";
                            providerName = "sit";
                            serverSideTokenCheck = true;
                        }}),
                    }};
                    developerProviderName = "rerum";
                    identityPoolName = "quisquam";
                    identityPoolTags = new java.util.HashMap<String, String>() {{
                        put("itaque", "reiciendis");
                        put("expedita", "itaque");
                    }};
                    openIdConnectProviderARNs = new String[]() {{
                        add("voluptatum"),
                    }};
                    samlProviderARNs = new String[]() {{
                        add("modi"),
                        add("adipisci"),
                    }};
                    supportedLoginProviders = new java.util.HashMap<String, String>() {{
                        put("tempora", "illum");
                        put("quae", "aut");
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