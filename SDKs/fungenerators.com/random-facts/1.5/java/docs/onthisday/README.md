# onThisDay

## Overview

On this day historical events for birth, death and other events.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [getFactOnthisdayBorn](#getfactonthisdayborn) - Returns a random ( famous/ relatively famous ) person born on a given day and month
* [getFactOnthisdayDied](#getfactonthisdaydied) - Returns a random ( famous/ relatively famous ) person died on a given day and month
* [getFactOnthisdayEvent](#getfactonthisdayevent) - Returns a random ( famous/ relatively famous ) historic event on a given day and month

## getFactOnthisdayBorn

Returns a random ( famous/ relatively famous ) person born on a given day and month

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactOnthisdayBornRequest;
import org.openapis.openapi.models.operations.GetFactOnthisdayBornResponse;
import org.openapis.openapi.models.operations.GetFactOnthisdayBornSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactOnthisdayBornRequest req = new GetFactOnthisdayBornRequest() {{
                day = "illum";
                month = "vel";
            }};            

            GetFactOnthisdayBornResponse res = sdk.onThisDay.getFactOnthisdayBorn(req, new GetFactOnthisdayBornSecurity("error") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFactOnthisdayDied

Returns a random ( famous/ relatively famous ) person died on a given day and month

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactOnthisdayDiedRequest;
import org.openapis.openapi.models.operations.GetFactOnthisdayDiedResponse;
import org.openapis.openapi.models.operations.GetFactOnthisdayDiedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactOnthisdayDiedRequest req = new GetFactOnthisdayDiedRequest() {{
                day = "deserunt";
                month = "suscipit";
            }};            

            GetFactOnthisdayDiedResponse res = sdk.onThisDay.getFactOnthisdayDied(req, new GetFactOnthisdayDiedSecurity("iure") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFactOnthisdayEvent

Returns a random ( famous/ relatively famous ) historic event on a given day and month

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactOnthisdayEventRequest;
import org.openapis.openapi.models.operations.GetFactOnthisdayEventResponse;
import org.openapis.openapi.models.operations.GetFactOnthisdayEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactOnthisdayEventRequest req = new GetFactOnthisdayEventRequest() {{
                day = "magnam";
                month = "debitis";
            }};            

            GetFactOnthisdayEventResponse res = sdk.onThisDay.getFactOnthisdayEvent(req, new GetFactOnthisdayEventSecurity("ipsa") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
