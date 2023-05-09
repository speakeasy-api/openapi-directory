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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [putAuditEvents](docs/sdk/README.md#putauditevents) - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
