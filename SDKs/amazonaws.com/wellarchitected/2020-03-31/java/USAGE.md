<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateLensesPathParams;
import org.openapis.openapi.models.operations.AssociateLensesHeaders;
import org.openapis.openapi.models.operations.AssociateLensesRequestBody;
import org.openapis.openapi.models.operations.AssociateLensesRequest;
import org.openapis.openapi.models.operations.AssociateLensesResponse;

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

            AssociateLensesRequest req = new AssociateLensesRequest() {{
                pathParams = new AssociateLensesPathParams() {{
                    workloadId = "corrupti";
                }};
                headers = new AssociateLensesHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateLensesRequestBody() {{
                    lensAliases = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            AssociateLensesResponse res = sdk.associateLenses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->