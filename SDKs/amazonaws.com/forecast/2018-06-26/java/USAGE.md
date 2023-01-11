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
                    xAmzTarget = "AmazonForecast.CreateDataset";
                }};
                request = new CreateDatasetRequest() {{
                    dataFrequency = "fugit";
                    datasetName = "et";
                    datasetType = "TARGET_TIME_SERIES";
                    domain = "METRICS";
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKeyArn = "dicta";
                        roleArn = "debitis";
                    }};
                    schema = new Schema() {{
                        attributes = new openapisdk.models.shared.SchemaAttribute[]() {{
                            add(new SchemaAttribute() {{
                                attributeName = "et";
                                attributeType = "integer";
                            }}),
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "et";
                            value = "voluptate";
                        }}),
                        add(new Tag() {{
                            key = "iste";
                            value = "vitae";
                        }}),
                        add(new Tag() {{
                            key = "totam";
                            value = "dolores";
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