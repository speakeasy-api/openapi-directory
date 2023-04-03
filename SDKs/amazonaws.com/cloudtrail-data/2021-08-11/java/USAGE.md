<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PutAuditEventsRequestBody;
import org.openapis.openapi.models.operations.PutAuditEventsRequest;
import org.openapis.openapi.models.operations.PutAuditEventsResponse;
import org.openapis.openapi.models.shared.AuditEvent;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAuditEventsRequest req = new PutAuditEventsRequest() {{
                requestBody = new PutAuditEventsRequestBody() {{
                    auditEvents = new org.openapis.openapi.models.shared.AuditEvent[]{{
                        add(new AuditEvent() {{
                            eventData = "provident";
                            eventDataChecksum = "distinctio";
                            id = "quibusdam";
                        }}),
                        add(new AuditEvent() {{
                            eventData = "unde";
                            eventDataChecksum = "nulla";
                            id = "corrupti";
                        }}),
                        add(new AuditEvent() {{
                            eventData = "illum";
                            eventDataChecksum = "vel";
                            id = "error";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
                channelArn = "tempora";
                externalId = "suscipit";
            }}            

            PutAuditEventsResponse res = sdk.putAuditEvents(req);

            if (res.putAuditEventsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->