<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequest;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmRequestBody;
import org.openapis.openapi.models.operations.BatchAcknowledgeAlarmResponse;
import org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAcknowledgeAlarmRequest req = new BatchAcknowledgeAlarmRequest(                new BatchAcknowledgeAlarmRequestBody(                new org.openapis.openapi.models.shared.AcknowledgeAlarmActionRequest[]{{
                                                add(new AcknowledgeAlarmActionRequest("corrupti", "illum") {{
                                                    alarmModelName = "distinctio";
                                                    keyValue = "quibusdam";
                                                    note = "unde";
                                                    requestId = "nulla";
                                                }}),
                                                add(new AcknowledgeAlarmActionRequest("iure", "magnam") {{
                                                    alarmModelName = "vel";
                                                    keyValue = "error";
                                                    note = "deserunt";
                                                    requestId = "suscipit";
                                                }}),
                                                add(new AcknowledgeAlarmActionRequest("suscipit", "molestiae") {{
                                                    alarmModelName = "debitis";
                                                    keyValue = "ipsa";
                                                    note = "delectus";
                                                    requestId = "tempora";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            BatchAcknowledgeAlarmResponse res = sdk.batchAcknowledgeAlarm(req);

            if (res.batchAcknowledgeAlarmResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->