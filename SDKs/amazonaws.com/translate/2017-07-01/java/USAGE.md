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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSShineFrontendService_20170701.CreateParallelData";
                }};
                request = new CreateParallelDataRequest() {{
                    clientToken = "fugit";
                    description = "et";
                    encryptionKey = new EncryptionKey() {{
                        id = "nihil";
                        type = "KMS";
                    }};
                    name = "dicta";
                    parallelDataConfig = new ParallelDataConfig() {{
                        format = "TSV";
                        s3Uri = "voluptatum";
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