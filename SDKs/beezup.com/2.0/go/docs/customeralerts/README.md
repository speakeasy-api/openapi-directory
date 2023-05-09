# CustomerAlerts

### Available Operations

* [GetStoreAlerts](#getstorealerts) - Get store's alerts
* [SaveStoreAlerts](#savestorealerts) - Save store alerts

## GetStoreAlerts

Get store's alerts

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
    res, err := s.CustomerAlerts.GetStoreAlerts(ctx, operations.GetStoreAlertsRequest{
        IfNoneMatch: sdk.String("nulla"),
        StoreID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreAlerts != nil {
        // handle response
    }
}
```

## SaveStoreAlerts

You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)

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
    res, err := s.CustomerAlerts.SaveStoreAlerts(ctx, operations.SaveStoreAlertsRequest{
        RequestBody: map[string]shared.SaveStoreAlertRequest{
            "quasi": shared.SaveStoreAlertRequest{
                Enabled: true,
                Properties: []shared.StoreAlertProperty{
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                },
            },
            "error": shared.SaveStoreAlertRequest{
                Enabled: true,
                Properties: []shared.StoreAlertProperty{
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                    shared.StoreAlertProperty{
                        PropertyID: 2,
                        PropertyValue: "2",
                    },
                },
            },
        },
        StoreID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
