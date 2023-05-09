# Bt

### Available Operations

* [AssignToken](#assigntoken) - Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
* [CheckEeBtEligibility](#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [CheckUserToken](#checkusertoken) - Checks a provided token for BT eligible user.

* [GetPlanByToken](#getplanbytoken) - Returns all the plans available for BT flow including additional description data.
* [GetPlans](#getplans) - Returns all the plans available for BT flow including additional description data.

## AssignToken

Assigns an UserToken to a profile on the ITV side. Currently throws an exception.

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
    res, err := s.Bt.AssignToken(ctx, operations.AssignTokenRequest{
        ItvAssignBtTokenRequest: shared.ItvAssignBtTokenRequest{
            ProfileToken: "aut",
            Token: "voluptatum",
        },
        Lang: sdk.String("qui"),
    }, operations.AssignTokenSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CheckEeBtEligibility

Check whether or not a user is eligible for switching to Bt or EE offers.

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
    res, err := s.Bt.CheckEeBtEligibility(ctx, operations.CheckEeBtEligibilityRequest{
        Lang: sdk.String("quibusdam"),
    }, operations.CheckEeBtEligibilitySecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EeBtEligibility != nil {
        // handle response
    }
}
```

## CheckUserToken

Checks a provided token for BT eligible user.


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
    res, err := s.Bt.CheckUserToken(ctx, operations.CheckUserTokenRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCd,
        },
        ID: "a19f1d17-0513-439d-8808-6a1840394c26",
        Lang: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPlanByToken

Returns all the plans available for BT flow including additional description data.

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
    res, err := s.Bt.GetPlanByToken(ctx, operations.GetPlanByTokenRequest{
        Lang: sdk.String("dignissimos"),
        Token: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BtPlanListItem != nil {
        // handle response
    }
}
```

## GetPlans

Returns all the plans available for BT flow including additional description data.

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
    res, err := s.Bt.GetPlans(ctx, operations.GetPlansRequest{
        Lang: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BtPlans != nil {
        // handle response
    }
}
```
