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

            GetAbortEnvironmentUpdateRequest req = new GetAbortEnvironmentUpdateRequest() {{
                queryParams = new GetAbortEnvironmentUpdateQueryParams() {{
                    action = "AbortEnvironmentUpdate";
                    environmentId = "voluptas";
                    environmentName = "facilis";
                    version = "2010-12-01";
                }};
                headers = new GetAbortEnvironmentUpdateHeaders() {{
                    xAmzAlgorithm = "sunt";
                    xAmzContentSha256 = "quis";
                    xAmzCredential = "qui";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "temporibus";
                    xAmzSignature = "nemo";
                    xAmzSignedHeaders = "ea";
                }};
            }};

            GetAbortEnvironmentUpdateResponse res = sdk.getAbortEnvironmentUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->