# CatalogsAuto

### Available Operations

* [AutoConfigureAutoImportInterval](#autoconfigureautoimportinterval) - Configure Auto Import Interval
* [AutoDeleteAutoImport](#autodeleteautoimport) - Delete Auto Import
* [AutoGetAutoImportConfiguration](#autogetautoimportconfiguration) - Get the auto import configuration
* [AutoPauseAutoImport](#autopauseautoimport) - Pause Auto Import
* [AutoResumeAutoImport](#autoresumeautoimport) - Resume Auto Import
* [AutoScheduleAutoImport](#autoscheduleautoimport) - Configure Auto Import Schedules
* [AutoStartAutoImport](#autostartautoimport) - Start Auto Import Manually
* [ImportationActivateAutoImport](#importationactivateautoimport) - Activate the auto importation of the last successful manual catalog importation.

## AutoConfigureAutoImportInterval

Configure Auto Import Interval

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CatalogsAuto.AutoConfigureAutoImportInterval(ctx, operations.AutoConfigureAutoImportIntervalRequest{
        ConfigureAutoImportIntervalRequest: shared.ConfigureAutoImportIntervalRequest{
            Interval: "04:00:00",
        },
        StoreID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoDeleteAutoImport

Delete Auto Import

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
    res, err := s.CatalogsAuto.AutoDeleteAutoImport(ctx, operations.AutoDeleteAutoImportRequest{
        StoreID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoGetAutoImportConfiguration

Get the auto import configuration

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
    res, err := s.CatalogsAuto.AutoGetAutoImportConfiguration(ctx, operations.AutoGetAutoImportConfigurationRequest{
        StoreID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutoImportConfiguration != nil {
        // handle response
    }
}
```

## AutoPauseAutoImport

Pause Auto Import

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
    res, err := s.CatalogsAuto.AutoPauseAutoImport(ctx, operations.AutoPauseAutoImportRequest{
        StoreID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoResumeAutoImport

Resume Auto Import

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
    res, err := s.CatalogsAuto.AutoResumeAutoImport(ctx, operations.AutoResumeAutoImportRequest{
        StoreID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoScheduleAutoImport

Configure Auto Import Schedules

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CatalogsAuto.AutoScheduleAutoImport(ctx, operations.AutoScheduleAutoImportRequest{
        ScheduleAutoImportRequest: shared.ScheduleAutoImportRequest{
            LocalTimeZoneName: sdk.String("Romance Standard Time"),
            Schedules: []string{
                "quibusdam",
                "labore",
                "modi",
            },
        },
        StoreID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoStartAutoImport

Start Auto Import Manually

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
    res, err := s.CatalogsAuto.AutoStartAutoImport(ctx, operations.AutoStartAutoImportRequest{
        StoreID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinksImportationGetImportationMonitoringLink != nil {
        // handle response
    }
}
```

## ImportationActivateAutoImport

Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.

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
    res, err := s.CatalogsAuto.ImportationActivateAutoImport(ctx, operations.ImportationActivateAutoImportRequest{
        StoreID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
