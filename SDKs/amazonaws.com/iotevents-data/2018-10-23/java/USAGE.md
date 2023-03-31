<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmHeaders;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequest;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmResponse;
import org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest;

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

            BatchAcknowledgeAlarmRequest req = new BatchAcknowledgeAlarmRequest() {{
                headers = new BatchAcknowledgeAlarmHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchAcknowledgeAlarmRequestBody() {{
                    acknowledgeActionRequests = new org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest[]{{
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "vel";
                            keyValue = "error";
                            note = "deserunt";
                            requestId = "suscipit";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "iure";
                            keyValue = "magnam";
                            note = "debitis";
                            requestId = "ipsa";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "delectus";
                            keyValue = "tempora";
                            note = "suscipit";
                            requestId = "molestiae";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "minus";
                            keyValue = "placeat";
                            note = "voluptatum";
                            requestId = "iusto";
                        }}),
                    }};
                }};
            }};            

            BatchAcknowledgeAlarmResponse res = sdk.batchAcknowledgeAlarm(req);

            if (res.batchAcknowledgeAlarmResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->