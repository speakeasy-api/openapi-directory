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

            AssociateLensesRequest req = new AssociateLensesRequest() {{
                pathParams = new AssociateLensesPathParams() {{
                    workloadId = "unde";
                }};
                headers = new AssociateLensesHeaders() {{
                    xAmzAlgorithm = "ipsam";
                    xAmzContentSha256 = "ad";
                    xAmzCredential = "sint";
                    xAmzDate = "dolores";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "error";
                    xAmzSignedHeaders = "cupiditate";
                }};
                request = new AssociateLensesRequestBody() {{
                    lensAliases = new String[]() {{
                        add("sapiente"),
                        add("et"),
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