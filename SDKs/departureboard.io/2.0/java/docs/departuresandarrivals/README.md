# departuresAndArrivals

### Available Operations

* [getArrivalsAndDeparturesByCRS](#getarrivalsanddeparturesbycrs) - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [getArrivalsByCRS](#getarrivalsbycrs) - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [getDeparturesByCRS](#getdeparturesbycrs) - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

## getArrivalsAndDeparturesByCRS

getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArrivalsAndDeparturesByCRSRequest;
import org.openapis.openapi.models.operations.GetArrivalsAndDeparturesByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArrivalsAndDeparturesByCRSRequest req = new GetArrivalsAndDeparturesByCRSRequest("illum", "vel") {{
                filterStation = "error";
                filterType = "deserunt";
                numServices = 384382L;
                serviceDetails = false;
                timeOffset = 437587L;
                timeWindow = 297534L;
            }};            

            GetArrivalsAndDeparturesByCRSResponse res = sdk.departuresAndArrivals.getArrivalsAndDeparturesByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArrivalsByCRS

getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArrivalsByCRSRequest;
import org.openapis.openapi.models.operations.GetArrivalsByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArrivalsByCRSRequest req = new GetArrivalsByCRSRequest("debitis", "ipsa") {{
                filterStation = "delectus";
                numServices = 272656L;
                serviceDetails = false;
                timeOffset = 383441L;
                timeWindow = 477665L;
            }};            

            GetArrivalsByCRSResponse res = sdk.departuresAndArrivals.getArrivalsByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeparturesByCRS

getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeparturesByCRSRequest;
import org.openapis.openapi.models.operations.GetDeparturesByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeparturesByCRSRequest req = new GetDeparturesByCRSRequest("minus", "placeat") {{
                filterStation = "voluptatum";
                numServices = 479977L;
                serviceDetails = false;
                timeOffset = 568045L;
                timeWindow = 392785L;
            }};            

            GetDeparturesByCRSResponse res = sdk.departuresAndArrivals.getDeparturesByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
