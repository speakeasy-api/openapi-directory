<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobHeaders;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobRequest;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobResponse;
import org.openapis.openapi.models.shared.CreateBatchInferenceJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.BatchInferenceJobOutput;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.BatchInferenceJobInput;
import org.openapis.openapi.models.shared.BatchInferenceJobConfig;

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

            CreateBatchInferenceJobRequest req = new CreateBatchInferenceJobRequest() {{
                headers = new CreateBatchInferenceJobHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonPersonalize.CreateBatchInferenceJob";
                }};
                request = new CreateBatchInferenceJobRequest() {{
                    batchInferenceJobConfig = new BatchInferenceJobConfig() {{
                        itemExplorationConfig = new java.util.HashMap<String, String>() {{
                            put("vel", "error");
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                    }};
                    filterArn = "delectus";
                    jobInput = new BatchInferenceJobInput() {{
                        s3DataSource = new S3DataConfig() {{
                            kmsKeyArn = "tempora";
                            path = "suscipit";
                        }};
                    }};
                    jobName = "molestiae";
                    jobOutput = new BatchInferenceJobOutput() {{
                        s3DataDestination = new S3DataConfig() {{
                            kmsKeyArn = "minus";
                            path = "placeat";
                        }};
                    }};
                    numResults = 528895;
                    roleArn = "iusto";
                    solutionVersionArn = "excepturi";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            tagKey = "recusandae";
                            tagValue = "temporibus";
                        }}),
                        add(new Tag() {{
                            tagKey = "ab";
                            tagValue = "quis";
                        }}),
                    }};
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