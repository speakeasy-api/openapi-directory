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

            GetAddClientIdToOpenIdConnectProviderRequest req = new GetAddClientIdToOpenIdConnectProviderRequest() {{
                queryParams = new GetAddClientIdToOpenIdConnectProviderQueryParams() {{
                    action = "AddClientIDToOpenIDConnectProvider";
                    clientID = "voluptas";
                    openIDConnectProviderArn = "culpa";
                    version = "2010-05-08";
                }};
                headers = new GetAddClientIdToOpenIdConnectProviderHeaders() {{
                    xAmzAlgorithm = "consequuntur";
                    xAmzContentSha256 = "dolor";
                    xAmzCredential = "expedita";
                    xAmzDate = "voluptas";
                    xAmzSecurityToken = "fugit";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "nihil";
                }};
            }};

            GetAddClientIdToOpenIdConnectProviderResponse res = sdk.getAddClientIdToOpenIdConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->