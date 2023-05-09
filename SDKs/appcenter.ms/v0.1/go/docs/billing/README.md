# Billing

### Available Operations

* [BillingAggregatedInformationGetAll](#billingaggregatedinformationgetall) - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* [BillingAggregatedInformationGetByApp](#billingaggregatedinformationgetbyapp) - Aggregated Billing Information for owner of a given app.
* [BillingAggregatedInformationGetForOrg](#billingaggregatedinformationgetfororg) - Aggregated Billing Information for a given Organization.

## BillingAggregatedInformationGetAll

Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.

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
    res, err := s.Billing.BillingAggregatedInformationGetAll(ctx, operations.BillingAggregatedInformationGetAllRequest{
        Period: operations.BillingAggregatedInformationGetAllPeriodEnumPrevious.ToPointer(),
        Service: operations.BillingAggregatedInformationGetAllServiceEnumBuild.ToPointer(),
        ShowOriginalPlans: sdk.Bool(false),
    }, operations.BillingAggregatedInformationGetAllSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAggregatedInformationGetAll200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BillingAggregatedInformationGetByApp

Aggregated Billing Information for owner of a given app.

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
    res, err := s.Billing.BillingAggregatedInformationGetByApp(ctx, operations.BillingAggregatedInformationGetByAppRequest{
        AppName: "et",
        OwnerName: "voluptate",
        Period: operations.BillingAggregatedInformationGetByAppPeriodEnumPrevious.ToPointer(),
        Service: operations.BillingAggregatedInformationGetByAppServiceEnumTest.ToPointer(),
        ShowOriginalPlans: sdk.Bool(false),
    }, operations.BillingAggregatedInformationGetByAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAggregatedInformationGetByApp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BillingAggregatedInformationGetForOrg

Aggregated Billing Information for a given Organization.

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
    res, err := s.Billing.BillingAggregatedInformationGetForOrg(ctx, operations.BillingAggregatedInformationGetForOrgRequest{
        OrgName: "veritatis",
        Period: operations.BillingAggregatedInformationGetForOrgPeriodEnumPrevious.ToPointer(),
        Service: operations.BillingAggregatedInformationGetForOrgServiceEnumTest.ToPointer(),
        ShowOriginalPlans: sdk.Bool(false),
    }, operations.BillingAggregatedInformationGetForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAggregatedInformationGetForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```
