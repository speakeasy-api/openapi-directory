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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateCanaryRequestBody() {{
                    artifactS3Location = "voluptas";
                    code = new CreateCanaryRequestBodyCode() {{
                        handler = "fugit";
                        s3Bucket = "et";
                        s3Key = "nihil";
                        s3Version = "rerum";
                        zipFile = "dicta";
                    }};
                    executionRoleArn = "debitis";
                    failureRetentionPeriodInDays = 5617773211005988520;
                    name = "et";
                    runConfig = new CreateCanaryRequestBodyRunConfig() {{
                        activeTracing = false;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("et", "voluptate");
                            put("iste", "vitae");
                            put("totam", "dolores");
                        }};
                        memoryInMB = 1929546706668609706;
                        timeoutInSeconds = 6392442863481646880;
                    }};
                    runtimeVersion = "vel";
                    schedule = new CreateCanaryRequestBodySchedule() {{
                        durationInSeconds = 2627038740284806767;
                        expression = "dolore";
                    }};
                    successRetentionPeriodInDays = 4035568504096476779;
                    tags = new java.util.HashMap<String, String>() {{
                        put("accusantium", "totam");
                    }};
                    vpcConfig = new CreateCanaryRequestBodyVpcConfig() {{
                        securityGroupIds = new String[]() {{
                            add("quis"),
                            add("est"),
                        }};
                        subnetIds = new String[]() {{
                            add("odit"),
                            add("non"),
                            add("voluptas"),
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