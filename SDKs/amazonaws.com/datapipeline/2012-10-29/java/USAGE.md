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
                    xAmzAlgorithm = "molestias";
                    xAmzContentSha256 = "asperiores";
                    xAmzCredential = "suscipit";
                    xAmzDate = "nam";
                    xAmzSecurityToken = "ducimus";
                    xAmzSignature = "ullam";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "DataPipeline.ActivatePipeline";
                }};
                request = new ActivatePipelineInput() {{
                    parameterValues = new openapisdk.models.shared.ParameterValue[]() {{
                        add(new ParameterValue() {{
                            id = "suscipit";
                            stringValue = "magnam";
                        }}),
                        add(new ParameterValue() {{
                            id = "aspernatur";
                            stringValue = "corporis";
                        }}),
                        add(new ParameterValue() {{
                            id = "accusamus";
                            stringValue = "fugit";
                        }}),
                    }};
                    pipelineId = "qui";
                    startTimestamp = "1993-08-20T08:47:17Z";
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