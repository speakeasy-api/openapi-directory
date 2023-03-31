<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCampaignHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateCampaignRequest req = new CreateCampaignRequest() {{
                headers = new CreateCampaignHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateCampaignRequestBody() {{
                    connectInstanceId = "illum";
                    dialerConfig = new CreateCampaignRequestBodyDialerConfig() {{
                        predictiveDialerConfig = new PredictiveDialerConfig() {{
                            bandwidthAllocation = 4236.55;
                        }};
                        progressiveDialerConfig = new ProgressiveDialerConfig() {{
                            bandwidthAllocation = 6235.64;
                        }};
                    }};
                    name = "deserunt";
                    outboundCallConfig = new CreateCampaignRequestBodyOutboundCallConfig() {{
                        answerMachineDetectionConfig = new AnswerMachineDetectionConfig() {{
                            enableAnswerMachineDetection = false;
                        }};
                        connectContactFlowId = "suscipit";
                        connectQueueId = "iure";
                        connectSourcePhoneNumber = "magnam";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                }};
            }};            

            CreateCampaignResponse res = sdk.createCampaign(req);

            if (res.createCampaignResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->