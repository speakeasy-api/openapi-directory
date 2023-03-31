<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateDatasetHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest() {{
                headers = new CreateDatasetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSLookoutEquipmentFrontendService.CreateDataset";
                }};
                request = new CreateDatasetRequest() {{
                    clientToken = "illum";
                    datasetName = "vel";
                    datasetSchema = new DatasetSchema() {{
                        inlineDataSchema = "error";
                    }};
                    serverSideKmsKeyId = "deserunt";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
            }};            

            CreateDatasetResponse res = sdk.createDataset(req);

            if (res.createDatasetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->