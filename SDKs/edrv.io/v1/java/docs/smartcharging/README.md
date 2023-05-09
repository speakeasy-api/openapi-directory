# smartCharging

### Available Operations

* [deletechargingschedule](#deletechargingschedule) - Delete a smart charging schedule
* [setchargingschedule](#setchargingschedule) - Set one of charging power or current of a specific chargestation connector

## deletechargingschedule

Delete a smart charging schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletechargingscheduleRequestBody;
import org.openapis.openapi.models.operations.DeletechargingscheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeletechargingscheduleRequestBody req = new DeletechargingscheduleRequestBody() {{
                id = "be453f87-0b32-46b5-a734-29cdb1a8422b";
            }};            

            DeletechargingscheduleResponse res = sdk.smartCharging.deletechargingschedule(req);

            if (res.deletechargingschedule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setchargingschedule

Set one of charging power or current of a specific chargestation connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetchargingscheduleRequestBody;
import org.openapis.openapi.models.operations.SetchargingscheduleRequestBodySchedule;
import org.openapis.openapi.models.operations.SetchargingscheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SetchargingscheduleRequestBody req = new SetchargingscheduleRequestBody() {{
                connector = "aliquid";
                schedule = new org.openapis.openapi.models.operations.SetchargingscheduleRequestBodySchedule[]{{
                    add(new SetchargingscheduleRequestBodySchedule() {{
                        endDate = "molestias";
                        limit = 8404.29;
                        startDate = "qui";
                        unit = "neque";
                    }}),
                    add(new SetchargingscheduleRequestBodySchedule() {{
                        endDate = "fugit";
                        limit = 1649.59;
                        startDate = "odio";
                        unit = "sunt";
                    }}),
                }};
            }};            

            SetchargingscheduleResponse res = sdk.smartCharging.setchargingschedule(req);

            if (res.setchargingschedule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
