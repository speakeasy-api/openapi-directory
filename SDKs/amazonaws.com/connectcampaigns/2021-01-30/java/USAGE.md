<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyDialerConfig;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyOutboundCallConfig;
import org.openapis.openapi.models.operations.CreateCampaignRequestBody;
import org.openapis.openapi.models.operations.CreateCampaignRequest;
import org.openapis.openapi.models.operations.CreateCampaignResponse;
import org.openapis.openapi.models.shared.AnswerMachineDetectionConfig;
import org.openapis.openapi.models.shared.ProgressiveDialerConfig;
import org.openapis.openapi.models.shared.PredictiveDialerConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCampaignRequest req = new CreateCampaignRequest() {{
                requestBody = new CreateCampaignRequestBody() {{
                    connectInstanceId = "corrupti";
                    dialerConfig = new CreateCampaignRequestBodyDialerConfig() {{
                        predictiveDialerConfig = new PredictiveDialerConfig() {{
                            bandwidthAllocation = 5928.45;
                        }};
                        progressiveDialerConfig = new ProgressiveDialerConfig() {{
                            bandwidthAllocation = 7151.9;
                        }};
                    }};
                    name = "quibusdam";
                    outboundCallConfig = new CreateCampaignRequestBodyOutboundCallConfig() {{
                        answerMachineDetectionConfig = new AnswerMachineDetectionConfig() {{
                            enableAnswerMachineDetection = false;
                        }};
                        connectContactFlowId = "unde";
                        connectQueueId = "nulla";
                        connectSourcePhoneNumber = "corrupti";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                }};
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }}            

            CreateCampaignResponse res = sdk.createCampaign(req);

            if (res.createCampaignResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->