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

            CreateDatasetRequest req = new CreateDatasetRequest() {{
                headers = new CreateDatasetHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSLookoutEquipmentFrontendService.CreateDataset";
                }};
                request = new CreateDatasetRequest() {{
                    clientToken = "fugit";
                    datasetName = "et";
                    datasetSchema = new DatasetSchema() {{
                        inlineDataSchema = "nihil";
                    }};
                    serverSideKmsKeyId = "rerum";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "debitis";
                            value = "voluptatum";
                        }}),
                        add(new Tag() {{
                            key = "et";
                            value = "ut";
                        }}),
                        add(new Tag() {{
                            key = "dolorem";
                            value = "et";
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