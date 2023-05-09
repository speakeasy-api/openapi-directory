# holidays

## Overview

Get holiday(s) with associated provinces

### Available Operations

* [holiday](#holiday) - Get a holiday by id
* [holidays](#holidays) - Get all holidays

## holiday

Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HolidayOptionalEnum;
import org.openapis.openapi.models.operations.HolidayRequest;
import org.openapis.openapi.models.operations.HolidayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HolidayRequest req = new HolidayRequest(2L) {{
                optional = HolidayOptionalEnum.TRUE;
                year = 844266L;
            }};            

            HolidayResponse res = sdk.holidays.holiday(req);

            if (res.holiday200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## holidays

Returns Canadian public holidays. Each holiday lists the regions that observe it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HolidaysFederalEnum;
import org.openapis.openapi.models.operations.HolidaysOptionalEnum;
import org.openapis.openapi.models.operations.HolidaysRequest;
import org.openapis.openapi.models.operations.HolidaysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HolidaysRequest req = new HolidaysRequest() {{
                federal = HolidaysFederalEnum.TRUE;
                optional = HolidaysOptionalEnum.FALSE;
                year = 544883L;
            }};            

            HolidaysResponse res = sdk.holidays.holidays(req);

            if (res.holidays200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
