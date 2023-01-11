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

            ActivatePipelineRequest req = new ActivatePipelineRequest() {{
                headers = new ActivatePipelineHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "DataPipeline.ActivatePipeline";
                }};
                request = new ActivatePipelineInput() {{
                    parameterValues = new openapisdk.models.shared.ParameterValue[]() {{
                        add(new ParameterValue() {{
                            id = "et";
                            stringValue = "nihil";
                        }}),
                    }};
                    pipelineId = "rerum";
                    startTimestamp = "2004-06-02T10:14:12Z";
                }};
            }};

            ActivatePipelineResponse res = sdk.activatePipeline(req);

            if (res.activatePipelineOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->