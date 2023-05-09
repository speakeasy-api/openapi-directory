# reservations

### Available Operations

* [getReservation](#getreservation) - Get one reservation data
* [getReservations](#getreservations) - Get Reservations data
* [updatereservation](#updatereservation) - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

## getReservation

Get one reservation data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReservationRequest;
import org.openapis.openapi.models.operations.GetReservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetReservationRequest req = new GetReservationRequest("minima") {{
                includeChargestation = false;
                includeOrganization = false;
            }};            

            GetReservationResponse res = sdk.reservations.getReservation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReservations

Get Reservations data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReservationsRequest;
import org.openapis.openapi.models.operations.GetReservationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetReservationsRequest req = new GetReservationsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2021-09-28T20:14:16.452Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-02-16T11:34:48.736Z");
                includeChargestation = false;
                includeOrganization = false;
                paginateEnabled = false;
                paginateLimit = 311860L;
                paginatePage = "tempora";
                sortBy = "vel";
                sortOrder = SortOrder1Enum.ASC;
                updatedAtDollarGte = OffsetDateTime.parse("2022-06-11T17:29:13.872Z");
                updatedAtDollarLte = OffsetDateTime.parse("2021-02-04T11:05:24.484Z");
            }};            

            GetReservationsResponse res = sdk.reservations.getReservations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatereservation

Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatereservationRequest;
import org.openapis.openapi.models.operations.UpdatereservationRequestBody;
import org.openapis.openapi.models.operations.UpdatereservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdatereservationRequest req = new UpdatereservationRequest(                new UpdatereservationRequestBody() {{
                                connector = 687488L;
                                driver = "iusto";
                                endDate = "ipsum";
                                evse = 788740L;
                            }};, "tenetur");            

            UpdatereservationResponse res = sdk.reservations.updatereservation(req);

            if (res.updatereservation201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
