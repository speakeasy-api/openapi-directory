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

            GetCancelJobRequest req = new GetCancelJobRequest() {{
                queryParams = new GetCancelJobQueryParams() {{
                    apiVersion = "sit";
                    awsAccessKeyId = "voluptas";
                    action = "CancelJob";
                    jobId = "expedita";
                    operation = "CancelJob";
                    signature = "dolor";
                    signatureMethod = "expedita";
                    signatureVersion = "voluptas";
                    timestamp = "fugit";
                    version = "2010-06-01";
                }};
            }};

            GetCancelJobResponse res = sdk.getCancelJob(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->