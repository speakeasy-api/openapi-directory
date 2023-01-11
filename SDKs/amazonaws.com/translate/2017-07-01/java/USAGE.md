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

            CreateParallelDataRequest req = new CreateParallelDataRequest() {{
                headers = new CreateParallelDataHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "sapiente";
                    xAmzDate = "laborum";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "accusamus";
                    xAmzSignedHeaders = "pariatur";
                    xAmzTarget = "AWSShineFrontendService_20170701.CreateParallelData";
                }};
                request = new CreateParallelDataRequest() {{
                    clientToken = "eos";
                    description = "ut";
                    encryptionKey = new EncryptionKey() {{
                        id = "animi";
                        type = "KMS";
                    }};
                    name = "eum";
                    parallelDataConfig = new ParallelDataConfig() {{
                        format = "TMX";
                        s3Uri = "maiores";
                    }};
                }};
            }};

            CreateParallelDataResponse res = sdk.createParallelData(req);

            if (res.createParallelDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->