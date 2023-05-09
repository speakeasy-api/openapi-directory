<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParallelDataRequest;
import org.openapis.openapi.models.operations.CreateParallelDataResponse;
import org.openapis.openapi.models.operations.CreateParallelDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateParallelDataRequest;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.EncryptionKeyTypeEnum;
import org.openapis.openapi.models.shared.ParallelDataConfig;
import org.openapis.openapi.models.shared.ParallelDataFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParallelDataRequest req = new CreateParallelDataRequest(                new CreateParallelDataRequest("provident", "distinctio",                 new ParallelDataConfig(ParallelDataFormatEnum.TMX, "unde");) {{
                                description = "nulla";
                                encryptionKey = new EncryptionKey("corrupti", EncryptionKeyTypeEnum.KMS);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("voluptatum", "iusto") {{
                                        key = "minus";
                                        value = "placeat";
                                    }}),
                                }};
                            }};, CreateParallelDataXAmzTargetEnum.AWS_SHINE_FRONTEND_SERVICE20170701_CREATE_PARALLEL_DATA) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            CreateParallelDataResponse res = sdk.createParallelData(req);

            if (res.createParallelDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->