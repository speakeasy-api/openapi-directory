<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAuditEventsRequest;
import org.openapis.openapi.models.operations.PutAuditEventsRequestBody;
import org.openapis.openapi.models.operations.PutAuditEventsResponse;
import org.openapis.openapi.models.shared.AuditEvent;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAuditEventsRequest req = new PutAuditEventsRequest(                new PutAuditEventsRequestBody(                new org.openapis.openapi.models.shared.AuditEvent[]{{
                                                add(new AuditEvent("sapiente", "quo") {{
                                                    eventData = "distinctio";
                                                    eventDataChecksum = "quibusdam";
                                                    id = "9d8d69a6-74e0-4f46-bcc8-796ed151a05d";
                                                }}),
                                                add(new AuditEvent("natus", "sed") {{
                                                    eventData = "odit";
                                                    eventDataChecksum = "at";
                                                    id = "df7cc78c-a1ba-4928-bc81-6742cb739205";
                                                }}),
                                                add(new AuditEvent("sapiente", "architecto") {{
                                                    eventData = "iste";
                                                    eventDataChecksum = "dolor";
                                                    id = "96fea759-6eb1-40fa-aa23-52c5955907af";
                                                }}),
                                            }});, "mollitia") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
                externalId = "commodi";
            }};            

            PutAuditEventsResponse res = sdk.putAuditEvents(req);

            if (res.putAuditEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->