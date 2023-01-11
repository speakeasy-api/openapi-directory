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
                    xAmzAlgorithm = "maxime";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "asperiores";
                    xAmzDate = "provident";
                    xAmzSecurityToken = "doloribus";
                    xAmzSignature = "architecto";
                    xAmzSignedHeaders = "est";
                }};
                request = new BatchAcknowledgeAlarmRequestBody() {{
                    acknowledgeActionRequests = new openapisdk.models.shared.AcknowledgeAlarmActionRequest[]() {{
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "odio";
                            keyValue = "blanditiis";
                            note = "voluptatem";
                            requestId = "ea";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "eum";
                            keyValue = "at";
                            note = "fugit";
                            requestId = "dolore";
                        }}),
                        add(new AcknowledgeAlarmActionRequest() {{
                            alarmModelName = "voluptatem";
                            keyValue = "recusandae";
                            note = "impedit";
                            requestId = "odio";
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