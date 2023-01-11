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
                    accountNumber = 4772934432398856168;
                    queueName = "velit";
                }};
                queryParams = new GetChangeMessageVisibilityQueryParams() {{
                    action = "ChangeMessageVisibility";
                    receiptHandle = "nulla";
                    version = "2012-11-05";
                    visibilityTimeout = 1092410701567644413;
                }};
                headers = new GetChangeMessageVisibilityHeaders() {{
                    xAmzAlgorithm = "qui";
                    xAmzContentSha256 = "odit";
                    xAmzCredential = "tempora";
                    xAmzDate = "voluptatem";
                    xAmzSecurityToken = "dignissimos";
                    xAmzSignature = "velit";
                    xAmzSignedHeaders = "magnam";
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