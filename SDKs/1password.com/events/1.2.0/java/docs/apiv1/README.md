# apiV1

### Available Operations

* [getAuditEvents](#getauditevents) - Retrieves audit events for actions performed by team members within a 1Password account
* [getItemUsages](#getitemusages) - Retrieves events for each usage of an item stored in a shared vault within a 1Password account
* [getSignInAttempts](#getsigninattempts) - Retrieves events for both successful and failed attempts to sign into a 1Password account

## getAuditEvents

This endpoint requires your JSON Web Token to have the *auditevents* feature.

### Example Usage

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
                limit = 6027.63;
                startTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
            }}            

            GetAuditEventsResponse res = sdk.apiV1.getAuditEvents(req, new GetAuditEventsSecurity("nulla") {{
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

## getItemUsages

This endpoint requires your JSON Web Token to have the *itemusages* feature.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemUsagesResponse;
import org.openapis.openapi.models.operations.GetItemUsagesSecurity;
import org.openapis.openapi.models.shared.Cursor;
import org.openapis.openapi.models.shared.ResetCursor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ResetCursor() {{
                endTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
                limit = 8472.52;
                startTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
            }}            

            GetItemUsagesResponse res = sdk.apiV1.getItemUsages(req, new GetItemUsagesSecurity("vel") {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getItemUsages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSignInAttempts

This endpoint requires your JSON Web Token to have the *signinattempts* feature.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSignInAttemptsResponse;
import org.openapis.openapi.models.operations.GetSignInAttemptsSecurity;
import org.openapis.openapi.models.shared.Cursor;
import org.openapis.openapi.models.shared.ResetCursor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ResetCursor() {{
                endTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
                limit = 6458.94;
                startTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
            }}            

            GetSignInAttemptsResponse res = sdk.apiV1.getSignInAttempts(req, new GetSignInAttemptsSecurity("suscipit") {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getSignInAttempts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
