# Internal

## Overview

Internal non-public APIs

### Available Operations

* [InternalRequestSubscriptionPlan](#internalrequestsubscriptionplan) - Request subscription plan
* [InternalSetSubscriptionPlan](#internalsetsubscriptionplan) - Set subscription plan

## InternalRequestSubscriptionPlan

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>

### Description:
Get the subscription plan id of the current tenant

### Precondition:
Valid `X-SDS-Service-Token` Header

### Postcondition:
Returns SubscriptionPlanResponse model that includes subscription plan id.

### Further Information:
None.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Internal.InternalRequestSubscriptionPlan(ctx, operations.InternalRequestSubscriptionPlanRequest{
        XSdsServiceToken: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionPlanResponse != nil {
        // handle response
    }
}
```

## InternalSetSubscriptionPlan

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>

### Description: 
Change the subscription plan id of the current tenant

### Precondition:
Valid `X-SDS-Service-Token` Header

### Postcondition:
The subscription plan of the current tenant is set to the given value.  
Returns SubscriptionPlanResponse model that includes subscription plan id.

### Further Information:
None.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Internal.InternalSetSubscriptionPlan(ctx, operations.InternalSetSubscriptionPlanRequest{
        SubscriptionPlanRequest: shared.SubscriptionPlanRequest{
            SubscriptionPlanID: 916723,
        },
        XSdsServiceToken: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionPlanResponse != nil {
        // handle response
    }
}
```
