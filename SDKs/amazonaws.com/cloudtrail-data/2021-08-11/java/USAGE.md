<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PutAuditEventsQueryParams;
import org.openapis.openapi.models.operations.PutAuditEventsHeaders;
import org.openapis.openapi.models.operations.PutAuditEventsRequestBody;
import org.openapis.openapi.models.operations.PutAuditEventsRequest;
import org.openapis.openapi.models.operations.PutAuditEventsResponse;
import org.openapis.openapi.models.shared.AuditEvent;

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

            PutAuditEventsRequest req = new PutAuditEventsRequest() {{
                queryParams = new PutAuditEventsQueryParams() {{
                    channelArn = "corrupti";
                    externalId = "provident";
                }};
                headers = new PutAuditEventsHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
                request = new PutAuditEventsRequestBody() {{
                    auditEvents = new org.openapis.openapi.models.shared.AuditEvent[]{{
                        add(new AuditEvent() {{
                            eventData = "deserunt";
                            eventDataChecksum = "suscipit";
                            id = "iure";
                        }}),
                        add(new AuditEvent() {{
                            eventData = "magnam";
                            eventDataChecksum = "debitis";
                            id = "ipsa";
                        }}),
                        add(new AuditEvent() {{
                            eventData = "delectus";
                            eventDataChecksum = "tempora";
                            id = "suscipit";
                        }}),
                    }};
                }};
            }};            

            PutAuditEventsResponse res = sdk.putAuditEvents(req);

            if (res.putAuditEventsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->