# SDK

## Overview

The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud, virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on this data without maintaining multiple log aggregators and reporting tools. After you run <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged from your applications.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudtrail-data/>
### Available Operations

* [putAuditEvents](#putauditevents) - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.

## putAuditEvents

Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.

### Example Usage

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
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAuditEventsRequest req = new PutAuditEventsRequest(                new PutAuditEventsRequestBody(                new org.openapis.openapi.models.shared.AuditEvent[]{{
                                                add(new AuditEvent("reprehenderit", "ut") {{
                                                    eventData = "velit";
                                                    eventDataChecksum = "error";
                                                    id = "251aa52c-3f5a-4d01-9da1-ffe78f097b00";
                                                }}),
                                                add(new AuditEvent("distinctio", "quibusdam") {{
                                                    eventData = "maiores";
                                                    eventDataChecksum = "dicta";
                                                    id = "5471b5e6-e13b-499d-888e-1e91e450ad2a";
                                                }}),
                                            }});, "labore") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
                externalId = "assumenda";
            }};            

            PutAuditEventsResponse res = sdk.sdk.putAuditEvents(req);

            if (res.putAuditEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
