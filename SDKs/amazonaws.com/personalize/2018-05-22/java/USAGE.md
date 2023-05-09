<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobRequest;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobResponse;
import org.openapis.openapi.models.operations.CreateBatchInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchInferenceJobConfig;
import org.openapis.openapi.models.shared.BatchInferenceJobInput;
import org.openapis.openapi.models.shared.BatchInferenceJobOutput;
import org.openapis.openapi.models.shared.CreateBatchInferenceJobRequest;
import org.openapis.openapi.models.shared.S3DataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchInferenceJobRequest req = new CreateBatchInferenceJobRequest(                new CreateBatchInferenceJobRequest(                new BatchInferenceJobInput(                new S3DataConfig("provident") {{
                                                                kmsKeyArn = "distinctio";
                                                            }};);, "quibusdam",                 new BatchInferenceJobOutput(                new S3DataConfig("unde") {{
                                                                kmsKeyArn = "nulla";
                                                            }};);, "corrupti", "illum") {{
                                batchInferenceJobConfig = new BatchInferenceJobConfig() {{
                                    itemExplorationConfig = new java.util.HashMap<String, String>() {{
                                        put("error", "deserunt");
                                        put("suscipit", "iure");
                                    }};
                                }};;
                                filterArn = "magnam";
                                numResults = 891773L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("suscipit", "molestiae") {{
                                        tagKey = "delectus";
                                        tagValue = "tempora";
                                    }}),
                                }};
                            }};, CreateBatchInferenceJobXAmzTargetEnum.AMAZON_PERSONALIZE_CREATE_BATCH_INFERENCE_JOB) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CreateBatchInferenceJobResponse res = sdk.createBatchInferenceJob(req);

            if (res.createBatchInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->