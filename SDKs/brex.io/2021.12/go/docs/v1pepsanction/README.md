# V1Pepsanction

## Overview

Pep Sanction Check methods

### Available Operations

* [PepMonitorList](#pepmonitorlist) - Retrieves a list of monitor entries
* [PepMonitorUnregister](#pepmonitorunregister) - Deactive a pep sanction monitor
* [PepMonitorUpdate](#pepmonitorupdate) - Update details of active Pep Sanction monitor
* [PepOrder](#peporder) - Orders a new Pep Sanction Check Report
* [PepRetrieve](#pepretrieve) - Returns a json or pdf report

## PepMonitorList

Retrieve a list of all active Pep Sanction Report monitors for this account

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
    res, err := s.V1Pepsanction.PepMonitorList(ctx, operations.PepMonitorListSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PepMonitorList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## PepMonitorUnregister

Unregister a previously created Pep Sanction Report Monitor

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
    res, err := s.V1Pepsanction.PepMonitorUnregister(ctx, operations.PepMonitorUnregisterRequest{
        ID: "consequuntur",
    }, operations.PepMonitorUnregisterSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PepMonitorUnregister200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PepMonitorUpdate

Update the webhook URL of an active Pep Sanction Report Monitor

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
    res, err := s.V1Pepsanction.PepMonitorUpdate(ctx, operations.PepMonitorUpdateRequest{
        RequestBody: &operations.PepMonitorUpdateRequestBody{
            Webhook: sdk.String("null"),
        },
        ID: "repellat",
    }, operations.PepMonitorUpdateSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PepMonitorUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PepOrder

Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.

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
    res, err := s.V1Pepsanction.PepOrder(ctx, operations.PepOrderRequest{
        RequestBody: &operations.PepOrderRequestBody{
            Aliases: sdk.String("null"),
            Country: sdk.String("null"),
            Dob: sdk.String("null"),
            FamilyName: sdk.String("null"),
            Filters: sdk.String("null"),
            GivenName: sdk.String("null"),
            Lei: sdk.String("null"),
            Locale: sdk.String("null"),
            Medialists: sdk.String("NMEDIA"),
            MiddleName: sdk.String("null"),
            Monitoring: sdk.Bool(false),
            Peplists: sdk.String("GOV,PEPD,SOE"),
            Region: sdk.String("null"),
            SmartMatch: sdk.Bool(false),
            Watchlists: sdk.String("SANCTIONS,FINANCE,TERRORISM,CRIME,SMAGOV,OFAC,MEDICAL"),
            Webhook: sdk.String("null"),
        },
        Search: "mollitia",
        Type: operations.PepOrderTypeEnumB,
    }, operations.PepOrderSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PepOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PepRetrieve

Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header

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
    res, err := s.V1Pepsanction.PepRetrieve(ctx, operations.PepRetrieveRequest{
        Accept: operations.PepRetrieveAcceptEnumApplicationJSON.ToPointer(),
        ID: "commodi",
    }, operations.PepRetrieveSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PepRetrieve200ApplicationJSONObject != nil {
        // handle response
    }
}
```
