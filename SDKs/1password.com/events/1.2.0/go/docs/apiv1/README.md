# APIV1

### Available Operations

* [GetAuditEvents](#getauditevents) - Retrieves audit events for actions performed by team members within a 1Password account
* [GetItemUsages](#getitemusages) - Retrieves events for each usage of an item stored in a shared vault within a 1Password account
* [GetSignInAttempts](#getsigninattempts) - Retrieves events for both successful and failed attempts to sign into a 1Password account

## GetAuditEvents

This endpoint requires your JSON Web Token to have the *auditevents* feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIV1.GetAuditEvents(ctx, operations.GetAuditEventsRequestBody{}, operations.GetAuditEventsSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuditEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetItemUsages

This endpoint requires your JSON Web Token to have the *itemusages* feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIV1.GetItemUsages(ctx, operations.GetItemUsagesRequestBody{}, operations.GetItemUsagesSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemUsages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSignInAttempts

This endpoint requires your JSON Web Token to have the *signinattempts* feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIV1.GetSignInAttempts(ctx, operations.GetSignInAttemptsRequestBody{}, operations.GetSignInAttemptsSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSignInAttempts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
