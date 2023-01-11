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
                    xAmzAlgorithm = "aut";
                    xAmzContentSha256 = "laborum";
                    xAmzCredential = "praesentium";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "ullam";
                    xAmzSignature = "aspernatur";
                    xAmzSignedHeaders = "laudantium";
                    xAmzTarget = "AmazonPersonalize.CreateBatchInferenceJob";
                }};
                request = new CreateBatchInferenceJobRequest() {{
                    batchInferenceJobConfig = new BatchInferenceJobConfig() {{
                        itemExplorationConfig = new java.util.HashMap<String, String>() {{
                            put("doloribus", "rem");
                            put("sit", "aut");
                        }};
                    }};
                    filterArn = "non";
                    jobInput = new BatchInferenceJobInput() {{
                        s3DataSource = new S3DataConfig() {{
                            kmsKeyArn = "quod";
                            path = "ut";
                        }};
                    }};
                    jobName = "voluptas";
                    jobOutput = new BatchInferenceJobOutput() {{
                        s3DataDestination = new S3DataConfig() {{
                            kmsKeyArn = "atque";
                            path = "et";
                        }};
                    }};
                    numResults = 7799152415069629267;
                    roleArn = "ipsum";
                    solutionVersionArn = "dolor";
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