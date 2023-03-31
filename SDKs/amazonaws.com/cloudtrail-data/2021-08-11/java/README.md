# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `putAuditEvents` - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
