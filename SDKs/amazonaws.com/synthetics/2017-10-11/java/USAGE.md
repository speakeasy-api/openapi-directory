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

            CreateCanaryRequest req = new CreateCanaryRequest() {{
                headers = new CreateCanaryHeaders() {{
                    xAmzAlgorithm = "dolore";
                    xAmzContentSha256 = "animi";
                    xAmzCredential = "odio";
                    xAmzDate = "officia";
                    xAmzSecurityToken = "odio";
                    xAmzSignature = "est";
                    xAmzSignedHeaders = "sunt";
                }};
                request = new CreateCanaryRequestBody() {{
                    artifactS3Location = "corrupti";
                    code = new CreateCanaryRequestBodyCode() {{
                        handler = "perspiciatis";
                        s3Bucket = "accusamus";
                        s3Key = "iusto";
                        s3Version = "aut";
                        zipFile = "illo";
                    }};
                    executionRoleArn = "molestiae";
                    failureRetentionPeriodInDays = 8359892027431733351;
                    name = "aliquid";
                    runConfig = new CreateCanaryRequestBodyRunConfig() {{
                        activeTracing = true;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("non", "dicta");
                        }};
                        memoryInMB = 2347781137780074665;
                        timeoutInSeconds = 5418904646391934224;
                    }};
                    runtimeVersion = "inventore";
                    schedule = new CreateCanaryRequestBodySchedule() {{
                        durationInSeconds = 6457110019065774024;
                        expression = "voluptatibus";
                    }};
                    successRetentionPeriodInDays = 6642582187036167272;
                    tags = new java.util.HashMap<String, String>() {{
                        put("perferendis", "impedit");
                    }};
                    vpcConfig = new CreateCanaryRequestBodyVpcConfig() {{
                        securityGroupIds = new String[]() {{
                            add("sunt"),
                            add("in"),
                        }};
                        subnetIds = new String[]() {{
                            add("laudantium"),
                            add("reiciendis"),
                        }};
                    }};
                }};
            }};

            CreateCanaryResponse res = sdk.createCanary(req);

            if (res.createCanaryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->