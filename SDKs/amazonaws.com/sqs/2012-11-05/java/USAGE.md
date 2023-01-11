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

            GetChangeMessageVisibilityRequest req = new GetChangeMessageVisibilityRequest() {{
                pathParams = new GetChangeMessageVisibilityPathParams() {{
                    accountNumber = 8717895732742165505;
                    queueName = "voluptas";
                }};
                queryParams = new GetChangeMessageVisibilityQueryParams() {{
                    action = "ChangeMessageVisibility";
                    receiptHandle = "expedita";
                    version = "2012-11-05";
                    visibilityTimeout = 2669985732393126063;
                }};
                headers = new GetChangeMessageVisibilityHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "fugit";
                    xAmzDate = "et";
                    xAmzSecurityToken = "nihil";
                    xAmzSignature = "rerum";
                    xAmzSignedHeaders = "dicta";
                }};
            }};

            GetChangeMessageVisibilityResponse res = sdk.getChangeMessageVisibility(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->