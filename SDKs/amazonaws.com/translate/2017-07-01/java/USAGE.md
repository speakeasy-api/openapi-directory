<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateParallelDataHeaders;
import org.openapis.openapi.models.operations.CreateParallelDataRequest;
import org.openapis.openapi.models.operations.CreateParallelDataResponse;
import org.openapis.openapi.models.shared.CreateParallelDataRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ParallelDataConfig;
import org.openapis.openapi.models.shared.ParallelDataFormatEnum;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;

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

            CreateParallelDataRequest req = new CreateParallelDataRequest() {{
                headers = new CreateParallelDataHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSShineFrontendService_20170701.CreateParallelData";
                }};
                request = new CreateParallelDataRequest() {{
                    clientToken = "illum";
                    description = "vel";
                    encryptionKey = new EncryptionKey() {{
                        id = "error";
                        type = "KMS";
                    }};
                    name = "deserunt";
                    parallelDataConfig = new ParallelDataConfig() {{
                        format = "CSV";
                        s3Uri = "iure";
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                        add(new Tag() {{
                            key = "delectus";
                            value = "tempora";
                        }}),
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