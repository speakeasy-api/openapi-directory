# Monitors

### Available Operations

* [AllMonitors](#allmonitors) - All Monitors
* [CreateMonitor](#createmonitor) - Create Monitor
* [DeleteMonitor](#deletemonitor) - Delete Monitor
* [RunAMonitor](#runamonitor) - Run a Monitor
* [SingleMonitor](#singlemonitor) - Single Monitor
* [UpdateMonitor](#updatemonitor) - Update Monitor

## AllMonitors

The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.

The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Monitors.AllMonitors(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllMonitors200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateMonitor

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Monitors.CreateMonitor(ctx, operations.CreateMonitorRequestBody{
        Monitor: &operations.CreateMonitorRequestBodyMonitor{
            Collection: sdk.String("5852-8d05dd85-222c-1452-553b-e76a531b71ed"),
            Environment: sdk.String("5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef"),
            Name: sdk.String("This is a Monitor Name"),
            Schedule: &operations.CreateMonitorRequestBodyMonitorSchedule{
                Cron: sdk.String("0 0 * * *"),
                Timezone: sdk.String("Asia/Kolkata"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitor200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteMonitor

This endpoint can be used to delete an existing monitor using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Monitors.DeleteMonitor(ctx, operations.DeleteMonitorRequest{
        MonitorUID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMonitor200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RunAMonitor

This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Monitors.RunAMonitor(ctx, operations.RunAMonitorRequest{
        MonitorUID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunAMonitor200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SingleMonitor

This endpoint fetches you basic information about the monitor using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Monitors.SingleMonitor(ctx, operations.SingleMonitorRequest{
        MonitorUID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleMonitor200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateMonitor

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Monitors.UpdateMonitor(ctx, operations.UpdateMonitorRequest{
        RequestBody: &operations.UpdateMonitorRequestBody{
            Monitor: &operations.UpdateMonitorRequestBodyMonitor{
                Name: sdk.String("Updated Monitor Name"),
                Schedule: &operations.UpdateMonitorRequestBodyMonitorSchedule{
                    Cron: sdk.String("*/5 * * * *"),
                    Timezone: sdk.String("America/Chicago"),
                },
            },
        },
        MonitorUID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMonitor200ApplicationJSONObject != nil {
        // handle response
    }
}
```
