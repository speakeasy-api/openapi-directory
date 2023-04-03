<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequest;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmResponse;
import org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAcknowledgeAlarmRequest req = new BatchAcknowledgeAlarmRequest() {{
                requestBody = new BatchAcknowledgeAlarmRequestBody() {{
                    acknowledgeActionRequests = new org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest[]{{
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "provident";
                            keyValue = "distinctio";
                            note = "quibusdam";
                            requestId = "unde";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "nulla";
                            keyValue = "corrupti";
                            note = "illum";
                            requestId = "vel";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "error";
                            keyValue = "deserunt";
                            note = "suscipit";
                            requestId = "iure";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }}            

            BatchAcknowledgeAlarmResponse res = sdk.batchAcknowledgeAlarm(req);

            if (res.batchAcknowledgeAlarmResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->