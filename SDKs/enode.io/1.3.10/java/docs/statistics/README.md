# statistics

### Available Operations

* [getStatisticsCharging](#getstatisticscharging) - Get User Charging Statistics

## getStatisticsCharging

Returns a normalized timeseries of statistics about power consumption and price for the User.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatisticsChargingRequest;
import org.openapis.openapi.models.operations.GetStatisticsChargingResolutionEnum;
import org.openapis.openapi.models.operations.GetStatisticsChargingResponse;
import org.openapis.openapi.models.operations.GetStatisticsChargingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatisticsChargingRequest req = new GetStatisticsChargingRequest(LocalDate.parse("2022-03-08")) {{
                chargingLocationId = "suscipit";
                endDate = LocalDate.parse("2022-03-18");
                resolution = GetStatisticsChargingResolutionEnum.YEAR;
                vehicleId = "voluptatum";
            }};            

            GetStatisticsChargingResponse res = sdk.statistics.getStatisticsCharging(req, new GetStatisticsChargingSecurity("iusto") {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getStatisticsCharging200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
