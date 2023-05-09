# Ee

### Available Operations

* [AssignMsisdn](#assignmsisdn) - Assigns a msisdn to a profile on ITV side.
* [CheckEeBtEligibility](#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [CreatePinRequest](#createpinrequest) - Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.

* [CreateToken](#createtoken) - Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
* [GetEligibleOffers](#geteligibleoffers) - Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.

* [GetPlan](#getplan) - Returns the plan description for EE flow including additional description data.
* [GetEePlans](#geteeplans) - Returns all the plans available for EE flow including additional description data.
* [ValidatePinRequest](#validatepinrequest) - Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

## AssignMsisdn

Assigns a msisdn to a profile on ITV side.

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
    res, err := s.Ee.AssignMsisdn(ctx, operations.AssignMsisdnRequest{
        ItvAssignMsisdnRequest: shared.ItvAssignMsisdnRequest{
            EeProductID: "necessitatibus",
            Msisdn: "ratione",
            ProfileToken: "laborum",
            TrackingHeader: "distinctio",
        },
        Lang: sdk.String("voluptatum"),
    }, operations.AssignMsisdnSecurity{
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
    res, err := s.Ee.CheckEeBtEligibility(ctx, operations.CheckEeBtEligibilityRequest{
        Lang: sdk.String("rem"),
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

## CreatePinRequest

Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.


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
    res, err := s.Ee.CreatePinRequest(ctx, operations.CreatePinRequestRequest{
        EeCreatePinRequest: shared.EeCreatePinRequest{
            AccessToken: "aliquam",
            Msisdn: "ad",
            TrackingHeader: sdk.String("repellat"),
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EeCreatePinResponse != nil {
        // handle response
    }
}
```

## CreateToken

Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.

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
    res, err := s.Ee.CreateToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EeCreateTokenResponse != nil {
        // handle response
    }
}
```

## GetEligibleOffers

Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.


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
    res, err := s.Ee.GetEligibleOffers(ctx, operations.GetEligibleOffersRequest{
        EeOffersRequest: shared.EeOffersRequest{
            AccessToken: "nihil",
            Msisdn: "mollitia",
            TrackingHeader: sdk.String("voluptas"),
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EeOffersResponse != nil {
        // handle response
    }
}
```

## GetPlan

Returns the plan description for EE flow including additional description data.

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
    res, err := s.Ee.GetPlan(ctx, operations.GetPlanRequest{
        ID: "2a54a31e-9476-44a3-a865-e7956f9251a5",
        Lang: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EePlanListItem != nil {
        // handle response
    }
}
```

## GetEePlans

Returns all the plans available for EE flow including additional description data.

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
    res, err := s.Ee.GetEePlans(ctx, operations.GetEePlansRequest{
        Lang: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EePlans != nil {
        // handle response
    }
}
```

## ValidatePinRequest

Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

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
    res, err := s.Ee.ValidatePinRequest(ctx, operations.ValidatePinRequestRequest{
        EeValidatePinRequest: shared.EeValidatePinRequest{
            AccessToken: "possimus",
            Pin: "animi",
            PinReference: "ex",
            TrackingHeader: sdk.String("aliquid"),
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EeValidatePinResponse != nil {
        // handle response
    }
}
```
