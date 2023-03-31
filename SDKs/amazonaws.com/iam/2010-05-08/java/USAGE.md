<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderQueryParams;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderHeaders;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderResponse;

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

            GETAddClientIDToOpenIDConnectProviderRequest req = new GETAddClientIDToOpenIDConnectProviderRequest() {{
                queryParams = new GETAddClientIDToOpenIDConnectProviderQueryParams() {{
                    action = "AddClientIDToOpenIDConnectProvider";
                    clientID = "corrupti";
                    openIDConnectProviderArn = "provident";
                    version = "2010-05-08";
                }};
                headers = new GETAddClientIDToOpenIDConnectProviderHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            GETAddClientIDToOpenIDConnectProviderResponse res = sdk.getAddClientIDToOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->