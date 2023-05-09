# monitors

### Available Operations

* [allMonitors](#allmonitors) - All Monitors
* [createMonitor](#createmonitor) - Create Monitor
* [deleteMonitor](#deletemonitor) - Delete Monitor
* [runAMonitor](#runamonitor) - Run a Monitor
* [singleMonitor](#singlemonitor) - Single Monitor
* [updateMonitor](#updatemonitor) - Update Monitor

## allMonitors

The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.

The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllMonitorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllMonitorsResponse res = sdk.monitors.allMonitors();

            if (res.allMonitors200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMonitor

This endpoint allows you to create a monitor.

Some sample `cron` values are:

| Frequency                  | Cron Pattern   |
|-----------------------|----------------|
| Every 5 minutes       | `*/5 * * * *`  |
| Every 30 minutes     | `*/30 * * * *` |
| Every Hour         | `0 */1 * * *`  |
| Every 6 Hours      | `0 */6 * * *`  |
| Every day at 5pm    | `0 17 * * *`   |
| Every Monday at 12pm  | `0 12 * * MON` |
| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |

Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 

For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMonitorRequestBody;
import org.openapis.openapi.models.operations.CreateMonitorRequestBodyMonitor;
import org.openapis.openapi.models.operations.CreateMonitorRequestBodyMonitorSchedule;
import org.openapis.openapi.models.operations.CreateMonitorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMonitorRequestBody req = new CreateMonitorRequestBody() {{
                monitor = new CreateMonitorRequestBodyMonitor() {{
                    collection = "5852-8d05dd85-222c-1452-553b-e76a531b71ed";
                    environment = "5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef";
                    name = "This is a Monitor Name";
                    schedule = new CreateMonitorRequestBodyMonitorSchedule() {{
                        cron = "0 0 * * *";
                        timezone = "Asia/Kolkata";
                    }};;
                }};;
            }};            

            CreateMonitorResponse res = sdk.monitors.createMonitor(req);

            if (res.createMonitor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMonitor

This endpoint can be used to delete an existing monitor using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMonitorRequest;
import org.openapis.openapi.models.operations.DeleteMonitorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMonitorRequest req = new DeleteMonitorRequest("iste");            

            DeleteMonitorResponse res = sdk.monitors.deleteMonitor(req);

            if (res.deleteMonitor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runAMonitor

This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunAMonitorRequest;
import org.openapis.openapi.models.operations.RunAMonitorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunAMonitorRequest req = new RunAMonitorRequest("iure");            

            RunAMonitorResponse res = sdk.monitors.runAMonitor(req);

            if (res.runAMonitor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleMonitor

This endpoint fetches you basic information about the monitor using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleMonitorRequest;
import org.openapis.openapi.models.operations.SingleMonitorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleMonitorRequest req = new SingleMonitorRequest("saepe");            

            SingleMonitorResponse res = sdk.monitors.singleMonitor(req);

            if (res.singleMonitor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMonitor

This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.

Some example `cron` values are:

| Frequency                  | Cron Pattern   |
|-----------------------|----------------|
| Every 5 minutes       | `*/5 * * * *`  |
| Every 30 minutes     | `*/30 * * * *` |
| Every Hour         | `0 */1 * * *`  |
| Every 6 Hours      | `0 */6 * * *`  |
| Every day at 5pm    | `0 17 * * *`   |
| Every Monday at 12pm  | `0 12 * * MON` |
| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |

Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 

For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMonitorRequest;
import org.openapis.openapi.models.operations.UpdateMonitorRequestBody;
import org.openapis.openapi.models.operations.UpdateMonitorRequestBodyMonitor;
import org.openapis.openapi.models.operations.UpdateMonitorRequestBodyMonitorSchedule;
import org.openapis.openapi.models.operations.UpdateMonitorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMonitorRequest req = new UpdateMonitorRequest("quidem") {{
                requestBody = new UpdateMonitorRequestBody() {{
                    monitor = new UpdateMonitorRequestBodyMonitor() {{
                        name = "Updated Monitor Name";
                        schedule = new UpdateMonitorRequestBodyMonitorSchedule() {{
                            cron = "*/5 * * * *";
                            timezone = "America/Chicago";
                        }};;
                    }};;
                }};;
            }};            

            UpdateMonitorResponse res = sdk.monitors.updateMonitor(req);

            if (res.updateMonitor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
