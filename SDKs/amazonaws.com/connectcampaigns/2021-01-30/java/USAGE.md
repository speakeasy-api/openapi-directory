<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCampaignRequest;
import org.openapis.openapi.models.operations.CreateCampaignRequestBody;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyDialerConfig;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyOutboundCallConfig;
import org.openapis.openapi.models.operations.CreateCampaignResponse;
import org.openapis.openapi.models.shared.AnswerMachineDetectionConfig;
import org.openapis.openapi.models.shared.PredictiveDialerConfig;
import org.openapis.openapi.models.shared.ProgressiveDialerConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCampaignRequest req = new CreateCampaignRequest(                new CreateCampaignRequestBody("provident",                 new CreateCampaignRequestBodyDialerConfig() {{
                                                predictiveDialerConfig = new PredictiveDialerConfig(7151.9);;
                                                progressiveDialerConfig = new ProgressiveDialerConfig(8442.66);;
                                            }};, "unde",                 new CreateCampaignRequestBodyOutboundCallConfig() {{
                                                answerMachineDetectionConfig = new AnswerMachineDetectionConfig(false);;
                                                connectContactFlowId = "nulla";
                                                connectQueueId = "corrupti";
                                                connectSourcePhoneNumber = "illum";
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("error", "deserunt");
                                    put("suscipit", "iure");
                                }};
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateCampaignResponse res = sdk.createCampaign(req);

            if (res.createCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->