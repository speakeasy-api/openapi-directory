<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchInferenceJobRequest req = new CreateBatchInferenceJobRequest() {{
                createBatchInferenceJobRequest = new CreateBatchInferenceJobRequest() {{
                    batchInferenceJobConfig = new BatchInferenceJobConfig() {{
                        itemExplorationConfig = new java.util.HashMap<String, String>() {{
                            put("provident", "distinctio");
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                        }};
                    }};
                    filterArn = "illum";
                    jobInput = new BatchInferenceJobInput() {{
                        s3DataSource = new S3DataConfig() {{
                            kmsKeyArn = "vel";
                            path = "error";
                        }};
                    }};
                    jobName = "deserunt";
                    jobOutput = new BatchInferenceJobOutput() {{
                        s3DataDestination = new S3DataConfig() {{
                            kmsKeyArn = "suscipit";
                            path = "iure";
                        }};
                    }};
                    numResults = 297534;
                    roleArn = "debitis";
                    solutionVersionArn = "ipsa";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            tagKey = "tempora";
                            tagValue = "suscipit";
                        }}),
                        add(new Tag() {{
                            tagKey = "molestiae";
                            tagValue = "minus";
                        }}),
                        add(new Tag() {{
                            tagKey = "placeat";
                            tagValue = "voluptatum";
                        }}),
                        add(new Tag() {{
                            tagKey = "iusto";
                            tagValue = "excepturi";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "AmazonPersonalize.CreateBatchInferenceJob";
            }}            

            CreateBatchInferenceJobResponse res = sdk.createBatchInferenceJob(req);

            if (res.createBatchInferenceJobResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->