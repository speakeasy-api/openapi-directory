# IndividualsElectronicAddresses

## Overview

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


### Available Operations

* [DeleteIndividualsPartyIDElectronicAddressesAddressID](#deleteindividualspartyidelectronicaddressesaddressid) - Delete an electronic address
* [GetIndividualsPartyIDElectronicAddresses](#getindividualspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [GetIndividualsPartyIDElectronicAddressesAddressID](#getindividualspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [PostIndividualsPartyIDElectronicAddresses](#postindividualspartyidelectronicaddresses) - Create an electronic address
* [PutIndividualsPartyIDElectronicAddressesAddressID](#putindividualspartyidelectronicaddressesaddressid) - Update an electronic address

## DeleteIndividualsPartyIDElectronicAddressesAddressID

Delete an electronic address


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
    res, err := s.IndividualsElectronicAddresses.DeleteIndividualsPartyIDElectronicAddressesAddressID(ctx, operations.DeleteIndividualsPartyIDElectronicAddressesAddressIDRequest{
        AddressID: "commodi",
        APIKey: "quam",
        PartyID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndividualsPartyIDElectronicAddresses

Retrieve a list of electronic addresses

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
    res, err := s.IndividualsElectronicAddresses.GetIndividualsPartyIDElectronicAddresses(ctx, operations.GetIndividualsPartyIDElectronicAddressesRequest{
        APIKey: "velit",
        PartyID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddresses != nil {
        // handle response
    }
}
```

## GetIndividualsPartyIDElectronicAddressesAddressID

Retrieve an electronic address


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
    res, err := s.IndividualsElectronicAddresses.GetIndividualsPartyIDElectronicAddressesAddressID(ctx, operations.GetIndividualsPartyIDElectronicAddressesAddressIDRequest{
        AddressID: "quia",
        APIKey: "quis",
        PartyID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddress != nil {
        // handle response
    }
}
```

## PostIndividualsPartyIDElectronicAddresses

Create an electronic address


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
    res, err := s.IndividualsElectronicAddresses.PostIndividualsPartyIDElectronicAddresses(ctx, operations.PostIndividualsPartyIDElectronicAddressesRequest{
        APIKey: "laborum",
        ElectronicAddressInput: shared.ElectronicAddressInput{
            AreaCode: sdk.String("02"),
            CountryPrefix: sdk.String("61"),
            ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumMobile.ToPointer(),
            Email: sdk.String("Britney94@gmail.com"),
            Extension: sdk.String("ipsam"),
            Number: sdk.String("62164453"),
            URL: sdk.String("id"),
        },
        PartyID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddress != nil {
        // handle response
    }
}
```

## PutIndividualsPartyIDElectronicAddressesAddressID

Update an electronic address


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
    res, err := s.IndividualsElectronicAddresses.PutIndividualsPartyIDElectronicAddressesAddressID(ctx, operations.PutIndividualsPartyIDElectronicAddressesAddressIDRequest{
        AddressID: "aut",
        APIKey: "quasi",
        ElectronicAddressInput: shared.ElectronicAddressInput{
            AreaCode: sdk.String("02"),
            CountryPrefix: sdk.String("61"),
            ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumMobile.ToPointer(),
            Email: sdk.String("Margie_Boyer87@hotmail.com"),
            Extension: sdk.String("nihil"),
            Number: sdk.String("62164453"),
            URL: sdk.String("praesentium"),
        },
        PartyID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddress != nil {
        // handle response
    }
}
```
