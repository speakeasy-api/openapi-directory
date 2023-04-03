<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateParallelDataXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParallelDataRequest req = new CreateParallelDataRequest() {{
                createParallelDataRequest = new CreateParallelDataRequest() {{
                    clientToken = "corrupti";
                    description = "provident";
                    encryptionKey = new EncryptionKey() {{
                        id = "distinctio";
                        type = "KMS";
                    }};
                    name = "quibusdam";
                    parallelDataConfig = new ParallelDataConfig() {{
                        format = "CSV";
                        s3Uri = "nulla";
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
                xAmzTarget = "AWSShineFrontendService_20170701.CreateParallelData";
            }}            

            CreateParallelDataResponse res = sdk.createParallelData(req);

            if (res.createParallelDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->