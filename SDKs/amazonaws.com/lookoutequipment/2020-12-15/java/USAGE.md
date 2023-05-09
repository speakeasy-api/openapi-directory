<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetRequest;
import org.openapis.openapi.models.shared.DatasetSchema;
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

            CreateDatasetRequest req = new CreateDatasetRequest(                new CreateDatasetRequest("provident", "distinctio") {{
                                datasetSchema = new DatasetSchema() {{
                                    inlineDataSchema = "quibusdam";
                                }};;
                                serverSideKmsKeyId = "unde";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vel", "error") {{
                                        key = "corrupti";
                                        value = "illum";
                                    }}),
                                    add(new Tag("iure", "magnam") {{
                                        key = "deserunt";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag("delectus", "tempora") {{
                                        key = "debitis";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("minus", "placeat") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateDatasetXAmzTargetEnum.AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_DATASET) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            CreateDatasetResponse res = sdk.createDataset(req);

            if (res.createDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->