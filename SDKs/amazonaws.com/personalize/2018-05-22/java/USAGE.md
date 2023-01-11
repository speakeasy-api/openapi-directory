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

            CreateBatchInferenceJobRequest req = new CreateBatchInferenceJobRequest() {{
                headers = new CreateBatchInferenceJobHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AmazonPersonalize.CreateBatchInferenceJob";
                }};
                request = new CreateBatchInferenceJobRequest() {{
                    batchInferenceJobConfig = new BatchInferenceJobConfig() {{
                        itemExplorationConfig = new java.util.HashMap<String, String>() {{
                            put("et", "nihil");
                        }};
                    }};
                    filterArn = "rerum";
                    jobInput = new BatchInferenceJobInput() {{
                        s3DataSource = new S3DataConfig() {{
                            kmsKeyArn = "dicta";
                            path = "debitis";
                        }};
                    }};
                    jobName = "voluptatum";
                    jobOutput = new BatchInferenceJobOutput() {{
                        s3DataDestination = new S3DataConfig() {{
                            kmsKeyArn = "et";
                            path = "ut";
                        }};
                    }};
                    numResults = 161231572858529631;
                    roleArn = "et";
                    solutionVersionArn = "voluptate";
                }};
            }};

            CreateBatchInferenceJobResponse res = sdk.createBatchInferenceJob(req);

            if (res.createBatchInferenceJobResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->