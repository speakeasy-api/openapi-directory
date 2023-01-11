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
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "voluptates";
                    xAmzDate = "repellat";
                    xAmzSecurityToken = "eligendi";
                    xAmzSignature = "adipisci";
                    xAmzSignedHeaders = "sit";
                    xAmzTarget = "AWSLookoutEquipmentFrontendService.CreateDataset";
                }};
                request = new CreateDatasetRequest() {{
                    clientToken = "atque";
                    datasetName = "odio";
                    datasetSchema = new DatasetSchema() {{
                        inlineDataSchema = "quam";
                    }};
                    serverSideKmsKeyId = "ut";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "voluptas";
                            value = "in";
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