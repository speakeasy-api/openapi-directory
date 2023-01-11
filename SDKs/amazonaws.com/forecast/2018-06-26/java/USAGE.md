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
                    xAmzAlgorithm = "voluptatem";
                    xAmzContentSha256 = "quia";
                    xAmzCredential = "voluptas";
                    xAmzDate = "maxime";
                    xAmzSecurityToken = "error";
                    xAmzSignature = "exercitationem";
                    xAmzSignedHeaders = "quisquam";
                    xAmzTarget = "AmazonForecast.CreateDataset";
                }};
                request = new CreateDatasetRequest() {{
                    dataFrequency = "quaerat";
                    datasetName = "earum";
                    datasetType = "TARGET_TIME_SERIES";
                    domain = "CUSTOM";
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKeyArn = "ut";
                        roleArn = "ut";
                    }};
                    schema = new Schema() {{
                        attributes = new openapisdk.models.shared.SchemaAttribute[]() {{
                            add(new SchemaAttribute() {{
                                attributeName = "magni";
                                attributeType = "timestamp";
                            }}),
                            add(new SchemaAttribute() {{
                                attributeName = "quaerat";
                                attributeType = "timestamp";
                            }}),
                            add(new SchemaAttribute() {{
                                attributeName = "voluptas";
                                attributeType = "float";
                            }}),
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "sed";
                            value = "accusantium";
                        }}),
                        add(new Tag() {{
                            key = "repellat";
                            value = "quam";
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