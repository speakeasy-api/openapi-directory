<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.shared.CreateDatasetRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.DatasetSchema;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest() {{
                createDatasetRequest = new CreateDatasetRequest() {{
                    clientToken = "corrupti";
                    datasetName = "provident";
                    datasetSchema = new DatasetSchema() {{
                        inlineDataSchema = "distinctio";
                    }};
                    serverSideKmsKeyId = "quibusdam";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
                xAmzTarget = "AWSLookoutEquipmentFrontendService.CreateDataset";
            }}            

            CreateDatasetResponse res = sdk.createDataset(req);

            if (res.createDatasetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->