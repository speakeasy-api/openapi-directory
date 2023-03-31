<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateApiPathParams;
import org.openapis.openapi.models.operations.AssociateApiHeaders;
import org.openapis.openapi.models.operations.AssociateApiRequestBody;
import org.openapis.openapi.models.operations.AssociateApiRequest;
import org.openapis.openapi.models.operations.AssociateApiResponse;

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

            AssociateApiRequest req = new AssociateApiRequest() {{
                pathParams = new AssociateApiPathParams() {{
                    domainName = "corrupti";
                }};
                headers = new AssociateApiHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateApiRequestBody() {{
                    apiId = "vel";
                }};
            }};            

            AssociateApiResponse res = sdk.associateApi(req);

            if (res.associateApiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->