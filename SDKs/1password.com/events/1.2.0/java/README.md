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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditEventsResponse;
import org.openapis.openapi.models.operations.GetAuditEventsSecurity;
import org.openapis.openapi.models.shared.Cursor;
import org.openapis.openapi.models.shared.ResetCursor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ResetCursor() {{
                endTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
                limit = 5928.45;
                startTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
            }}            

            GetAuditEventsResponse res = sdk.apiV1.getAuditEvents(req, new GetAuditEventsSecurity("distinctio") {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getAuditEvents200ApplicationJSONObject != null) {
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


### [apiV1](docs/apiv1/README.md)

* [getAuditEvents](docs/apiv1/README.md#getauditevents) - Retrieves audit events for actions performed by team members within a 1Password account
* [getItemUsages](docs/apiv1/README.md#getitemusages) - Retrieves events for each usage of an item stored in a shared vault within a 1Password account
* [getSignInAttempts](docs/apiv1/README.md#getsigninattempts) - Retrieves events for both successful and failed attempts to sign into a 1Password account

### [auth](docs/auth/README.md)

* [~~getAuthIntrospect~~](docs/auth/README.md#getauthintrospect) - Performs introspection of the provided Bearer JWT token :warning: **Deprecated**
* [getAuthIntrospectV2](docs/auth/README.md#getauthintrospectv2) - Performs introspection of the provided Bearer JWT token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
