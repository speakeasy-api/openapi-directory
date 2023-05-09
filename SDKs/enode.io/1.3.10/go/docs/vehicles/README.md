# Vehicles

### Available Operations

* [GetVehicleChargestate](#getvehiclechargestate) - Get Vehicle Charge State
* [GetVehicles](#getvehicles) - List Vehicles
* [GetVehiclesVehicleid](#getvehiclesvehicleid) - Get Vehicle
* [GetVehiclesVehicleidInformation](#getvehiclesvehicleidinformation) - Get Vehicle Information
* [GetVehiclesVehicleidLocation](#getvehiclesvehicleidlocation) - Get Vehicle Location
* [GetVehiclesVehicleidOdometer](#getvehiclesvehicleidodometer) - Get Vehicle Odometer
* [GetVehiclesVehicleidSmartchargingpolicy](#getvehiclesvehicleidsmartchargingpolicy) - Get Vehicle Smart Charging Policy
* [PostVehiclesVehicleidCharging](#postvehiclesvehicleidcharging) - Start / Stop Charging
* [PostVehiclesVehicleidWatch](#postvehiclesvehicleidwatch) - Start Watching Vehicle
* [PutVehiclesVehicleidSmartchargingpolicy](#putvehiclesvehicleidsmartchargingpolicy) - Update Vehicle Smart Charging Policy

## GetVehicleChargestate

Get Vehicle Charge State

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
    res, err := s.Vehicles.GetVehicleChargestate(ctx, operations.GetVehicleChargestateRequest{
        VehicleID: "excepturi",
    }, operations.GetVehicleChargestateSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVehicleChargestate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVehicles

List Vehicles

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
    res, err := s.Vehicles.GetVehicles(ctx, operations.GetVehiclesRequest{
        Field: []interface{}{
            "recusandae",
            "temporibus",
        },
    }, operations.GetVehiclesSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchemas != nil {
        // handle response
    }
}
```

## GetVehiclesVehicleid

Get Vehicle

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
    res, err := s.Vehicles.GetVehiclesVehicleid(ctx, operations.GetVehiclesVehicleidRequest{
        Field: []GetVehiclesVehicleidFieldEnum{
            operations.GetVehiclesVehicleidFieldEnumChargeState,
        },
        VehicleID: "veritatis",
    }, operations.GetVehiclesVehicleidSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVehiclesVehicleid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVehiclesVehicleidInformation

Get Vehicle Information

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
    res, err := s.Vehicles.GetVehiclesVehicleidInformation(ctx, operations.GetVehiclesVehicleidInformationRequest{
        VehicleID: "deserunt",
    }, operations.GetVehiclesVehicleidInformationSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVehiclesVehicleidInformation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVehiclesVehicleidLocation

Get Vehicle Location

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
    res, err := s.Vehicles.GetVehiclesVehicleidLocation(ctx, operations.GetVehiclesVehicleidLocationRequest{
        VehicleID: "perferendis",
    }, operations.GetVehiclesVehicleidLocationSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVehiclesVehicleidLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVehiclesVehicleidOdometer

Get Vehicle Odometer

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
    res, err := s.Vehicles.GetVehiclesVehicleidOdometer(ctx, operations.GetVehiclesVehicleidOdometerRequest{
        VehicleID: "ipsam",
    }, operations.GetVehiclesVehicleidOdometerSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVehiclesVehicleidOdometer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVehiclesVehicleidSmartchargingpolicy

Get Vehicle Smart Charging Policy

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
    res, err := s.Vehicles.GetVehiclesVehicleidSmartchargingpolicy(ctx, operations.GetVehiclesVehicleidSmartchargingpolicyRequest{
        VehicleID: "repellendus",
    }, operations.GetVehiclesVehicleidSmartchargingpolicySecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PostVehiclesVehicleidCharging

Instruct the vehicle to start or stop charging. 

#### Precedence over smart charging
If the vehicle is at a charging location where smart charging is activated:
- a request to `start` charging will override smart charging and charging will stay on until fully charged. 
- a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.

The smart charging settings are not altered by these actions.

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
    res, err := s.Vehicles.PostVehiclesVehicleidCharging(ctx, operations.PostVehiclesVehicleidChargingRequest{
        VehicleID: "sapiente",
    }, operations.PostVehiclesVehicleidChargingSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostVehiclesVehicleidWatch

Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.

Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)

The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.


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
    res, err := s.Vehicles.PostVehiclesVehicleidWatch(ctx, operations.PostVehiclesVehicleidWatchRequest{
        RequestBody: &operations.PostVehiclesVehicleidWatchRequestBody{
            Properties: operations.PostVehiclesVehicleidWatchRequestBodyPropertiesEnumIsChargingReasons.ToPointer(),
        },
        VehicleID: "odit",
    }, operations.PostVehiclesVehicleidWatchSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PutVehiclesVehicleidSmartchargingpolicy

Updates the Smart Charging settings for a vehicle

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
    res, err := s.Vehicles.PutVehiclesVehicleidSmartchargingpolicy(ctx, operations.PutVehiclesVehicleidSmartchargingpolicyRequest{
        RequestBody: &operations.PutVehiclesVehicleidSmartchargingpolicyRequestBody{
            Deadline: sdk.String("08:00"),
            IsEnabled: sdk.Bool(true),
        },
        VehicleID: "at",
    }, operations.PutVehiclesVehicleidSmartchargingpolicySecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema != nil {
        // handle response
    }
}
```
