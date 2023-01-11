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

            GetCloneReceiptRuleSetRequest req = new GetCloneReceiptRuleSetRequest() {{
                queryParams = new GetCloneReceiptRuleSetQueryParams() {{
                    action = "CloneReceiptRuleSet";
                    originalRuleSetName = "in";
                    ruleSetName = "dolorem";
                    version = "2010-12-01";
                }};
                headers = new GetCloneReceiptRuleSetHeaders() {{
                    xAmzAlgorithm = "sint";
                    xAmzContentSha256 = "non";
                    xAmzCredential = "qui";
                    xAmzDate = "debitis";
                    xAmzSecurityToken = "in";
                    xAmzSignature = "dolore";
                    xAmzSignedHeaders = "quas";
                }};
            }};

            GetCloneReceiptRuleSetResponse res = sdk.getCloneReceiptRuleSet(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->