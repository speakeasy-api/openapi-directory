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

            BatchAcknowledgeAlarmRequest req = new BatchAcknowledgeAlarmRequest() {{
                headers = new BatchAcknowledgeAlarmHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new BatchAcknowledgeAlarmRequestBody() {{
                    acknowledgeActionRequests = new openapisdk.models.shared.AcknowledgeAlarmActionRequest[]() {{
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "fugit";
                            keyValue = "et";
                            note = "nihil";
                            requestId = "rerum";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "dicta";
                            keyValue = "debitis";
                            note = "voluptatum";
                            requestId = "et";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "ut";
                            keyValue = "dolorem";
                            note = "et";
                            requestId = "voluptate";
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