# timePeriods

## Overview

A time period is an object that represents a domain-scoped date range that can be set on [goals](/docs/goals).

### Available Operations

* [getTimePeriod](#gettimeperiod) - Get a time period
* [getTimePeriods](#gettimeperiods) - Get time periods

## getTimePeriod

Returns the full record for a single time period.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimePeriodRequest;
import org.openapis.openapi.models.operations.GetTimePeriodResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTimePeriodRequest req = new GetTimePeriodRequest("numquam") {{
                optFields = new String[]{{
                    add("in"),
                    add("officiis"),
                }};
                optPretty = false;
            }};            

            GetTimePeriodResponse res = sdk.timePeriods.getTimePeriod(req);

            if (res.getTimePeriod200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimePeriods

Returns compact time period records.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimePeriodsRequest;
import org.openapis.openapi.models.operations.GetTimePeriodsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTimePeriodsRequest req = new GetTimePeriodsRequest("beatae") {{
                endOn = LocalDate.parse("2022-04-21");
                limit = 510629L;
                offset = "cum";
                optFields = new String[]{{
                    add("dolorum"),
                    add("voluptatum"),
                }};
                optPretty = false;
                startOn = LocalDate.parse("2021-02-10");
            }};            

            GetTimePeriodsResponse res = sdk.timePeriods.getTimePeriods(req);

            if (res.getTimePeriods200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
