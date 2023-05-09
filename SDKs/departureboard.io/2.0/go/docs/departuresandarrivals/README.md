# DeparturesAndArrivals

### Available Operations

* [GetArrivalsAndDeparturesByCRS](#getarrivalsanddeparturesbycrs) - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [GetArrivalsByCRS](#getarrivalsbycrs) - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [GetDeparturesByCRS](#getdeparturesbycrs) - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

## GetArrivalsAndDeparturesByCRS

getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

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
    res, err := s.DeparturesAndArrivals.GetArrivalsAndDeparturesByCRS(ctx, operations.GetArrivalsAndDeparturesByCRSRequest{
        Crs: "illum",
        APIKey: "vel",
        FilterStation: sdk.String("error"),
        FilterType: sdk.String("deserunt"),
        NumServices: sdk.Int64(384382),
        ServiceDetails: sdk.Bool(false),
        TimeOffset: sdk.Int64(437587),
        TimeWindow: sdk.Int64(297534),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetArrivalsByCRS

getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

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
    res, err := s.DeparturesAndArrivals.GetArrivalsByCRS(ctx, operations.GetArrivalsByCRSRequest{
        Crs: "debitis",
        APIKey: "ipsa",
        FilterStation: sdk.String("delectus"),
        NumServices: sdk.Int64(272656),
        ServiceDetails: sdk.Bool(false),
        TimeOffset: sdk.Int64(383441),
        TimeWindow: sdk.Int64(477665),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeparturesByCRS

getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

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
    res, err := s.DeparturesAndArrivals.GetDeparturesByCRS(ctx, operations.GetDeparturesByCRSRequest{
        Crs: "minus",
        APIKey: "placeat",
        FilterStation: sdk.String("voluptatum"),
        NumServices: sdk.Int64(479977),
        ServiceDetails: sdk.Bool(false),
        TimeOffset: sdk.Int64(568045),
        TimeWindow: sdk.Int64(392785),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
