# fastestAndNextDepartures

### Available Operations

* [getFastestDeparturesByCRS](#getfastestdeparturesbycrs) - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
* [getNextDeparturesByCRS](#getnextdeparturesbycrs) - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

## getFastestDeparturesByCRS

getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFastestDeparturesByCRSRequest;
import org.openapis.openapi.models.operations.GetFastestDeparturesByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFastestDeparturesByCRSRequest req = new GetFastestDeparturesByCRSRequest("recusandae", "temporibus", "ab") {{
                serviceDetails = false;
                timeOffset = 337396L;
                timeWindow = 87129L;
            }};            

            GetFastestDeparturesByCRSResponse res = sdk.fastestAndNextDepartures.getFastestDeparturesByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNextDeparturesByCRS

getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNextDeparturesByCRSRequest;
import org.openapis.openapi.models.operations.GetNextDeparturesByCRSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNextDeparturesByCRSRequest req = new GetNextDeparturesByCRSRequest("deserunt", "perferendis", "ipsam") {{
                serviceDetails = false;
                timeOffset = 832620L;
                timeWindow = 957156L;
            }};            

            GetNextDeparturesByCRSResponse res = sdk.fastestAndNextDepartures.getNextDeparturesByCRS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
