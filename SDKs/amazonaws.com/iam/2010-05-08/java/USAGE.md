<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddClientIDToOpenIDConnectProviderRequest req = new GETAddClientIDToOpenIDConnectProviderRequest(GETAddClientIDToOpenIDConnectProviderActionEnum.ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER, "provident", "distinctio", GETAddClientIDToOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            GETAddClientIDToOpenIDConnectProviderResponse res = sdk.getAddClientIDToOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->