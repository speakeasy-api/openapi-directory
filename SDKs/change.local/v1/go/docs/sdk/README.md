# SDK

### Available Operations

* [GetAPIV1DonationsCarbonCalculate](#getapiv1donationscarboncalculate) - Calculate shipping carbon offset
* [GetAPIV1DonationsCarbonStats](#getapiv1donationscarbonstats) - Retrieve carbon offset stats
* [GetAPIV1DonationsCryptoCalculate](#getapiv1donationscryptocalculate) - Calculate crypto carbon offset
* [GetAPIV1DonationsIndex](#getapiv1donationsindex) - List your donations
* [GetAPIV1DonationsShow](#getapiv1donationsshow) - Retrieve a donation
* [GetAPIV1NonprofitsList](#getapiv1nonprofitslist) - Search a nonprofit
* [GetAPIV1NonprofitsShow](#getapiv1nonprofitsshow) - Show a nonprofit
* [PostAPIV1DonationsCreate](#postapiv1donationscreate) - Create a donation

## GetAPIV1DonationsCarbonCalculate

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

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
    res, err := s.SDK.GetAPIV1DonationsCarbonCalculate(ctx, operations.GetAPIV1DonationsCarbonCalculateRequest{
        DestinationAddress: sdk.Float64(8579.46),
        DistanceMi: sdk.Float64(5448.83),
        OriginAddress: sdk.Float64(8472.52),
        TransportationMethod: operations.GetAPIV1DonationsCarbonCalculateTransportationMethodEnumTruck.ToPointer(),
        WeightLb: 6235.64,
    }, operations.GetAPIV1DonationsCarbonCalculateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1DonationsCarbonStats

Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.

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
    res, err := s.SDK.GetAPIV1DonationsCarbonStats(ctx, operations.GetAPIV1DonationsCarbonStatsRequest{
        ID: sdk.Float64(6458.94),
    }, operations.GetAPIV1DonationsCarbonStatsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1DonationsCryptoCalculate

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

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
    res, err := s.SDK.GetAPIV1DonationsCryptoCalculate(ctx, operations.GetAPIV1DonationsCryptoCalculateRequest{
        Count: sdk.Float64(3843.82),
        Currency: operations.GetAPIV1DonationsCryptoCalculateCurrencyEnumEth,
    }, operations.GetAPIV1DonationsCryptoCalculateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1DonationsIndex

Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.

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
    res, err := s.SDK.GetAPIV1DonationsIndex(ctx, operations.GetAPIV1DonationsIndexRequest{
        Page: sdk.Float64(2975.34),
    }, operations.GetAPIV1DonationsIndexSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1DonationsShow

Retrieves the details of a donation you've previously made.

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
    res, err := s.SDK.GetAPIV1DonationsShow(ctx, operations.GetAPIV1DonationsShowRequest{
        ID: "e0f467cc-8796-4ed1-91a0-5dfc2ddf7cc7",
    }, operations.GetAPIV1DonationsShowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1NonprofitsList

Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.

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
    res, err := s.SDK.GetAPIV1NonprofitsList(ctx, operations.GetAPIV1NonprofitsListRequest{
        Name: sdk.String("Miss Lowell Parisian"),
        Page: sdk.Float64(5820.2),
    }, operations.GetAPIV1NonprofitsListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV1NonprofitsShow

Retrieves information for a nonprofit.

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
    res, err := s.SDK.GetAPIV1NonprofitsShow(ctx, operations.GetAPIV1NonprofitsShowRequest{
        ID: "28fc8167-42cb-4739-a059-29396fea7596",
    }, operations.GetAPIV1NonprofitsShowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1DonationsCreate

Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.

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
    res, err := s.SDK.PostAPIV1DonationsCreate(ctx, operations.PostAPIV1DonationsCreateRequest{
        Amount: "saepe",
        FundingSource: operations.PostAPIV1DonationsCreateFundingSourceEnumCustomer,
        NonprofitID: "architecto",
        ZipCode: sdk.String("96661"),
    }, operations.PostAPIV1DonationsCreateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
