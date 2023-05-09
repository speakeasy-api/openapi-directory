# IndividualsAddresses

## Overview

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


### Available Operations

* [DeleteIndividualsPartyIDAddressesAddressID](#deleteindividualspartyidaddressesaddressid) - Delete an address
* [GetIndividualsPartyIDAddresses](#getindividualspartyidaddresses) - Retrieve a list of addresses
* [GetIndividualsPartyIDAddressesAddressID](#getindividualspartyidaddressesaddressid) - Retrieve an address
* [PostIndividualsPartyIDAddresses](#postindividualspartyidaddresses) - Create an address
* [PutIndividualsPartyIDAddressesAddressID](#putindividualspartyidaddressesaddressid) - Update an address

## DeleteIndividualsPartyIDAddressesAddressID

Delete an address


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
    res, err := s.IndividualsAddresses.DeleteIndividualsPartyIDAddressesAddressID(ctx, operations.DeleteIndividualsPartyIDAddressesAddressIDRequest{
        AddressID: "architecto",
        APIKey: "ipsa",
        PartyID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndividualsPartyIDAddresses

Retrieve a list of addresses

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
    res, err := s.IndividualsAddresses.GetIndividualsPartyIDAddresses(ctx, operations.GetIndividualsPartyIDAddressesRequest{
        APIKey: "est",
        PartyID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Addresses != nil {
        // handle response
    }
}
```

## GetIndividualsPartyIDAddressesAddressID

Retrieve an address


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
    res, err := s.IndividualsAddresses.GetIndividualsPartyIDAddressesAddressID(ctx, operations.GetIndividualsPartyIDAddressesAddressIDRequest{
        AddressID: "laborum",
        APIKey: "dolores",
        PartyID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Address != nil {
        // handle response
    }
}
```

## PostIndividualsPartyIDAddresses

Create an address


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
    res, err := s.IndividualsAddresses.PostIndividualsPartyIDAddresses(ctx, operations.PostIndividualsPartyIDAddressesRequest{
        AddressInput: shared.AddressInput{
            City: sdk.String("Canberra"),
            Country: sdk.String("Australia"),
            Line1: sdk.String("Level 7"),
            Line2: sdk.String("21 Genge Street"),
            Line3: sdk.String("corporis"),
            Name: sdk.String("Kembery Building"),
            PostalCode: sdk.String("2601"),
            Suburb: sdk.String("Civic"),
        },
        APIKey: "explicabo",
        PartyID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Address != nil {
        // handle response
    }
}
```

## PutIndividualsPartyIDAddressesAddressID

Update an address


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
    res, err := s.IndividualsAddresses.PutIndividualsPartyIDAddressesAddressID(ctx, operations.PutIndividualsPartyIDAddressesAddressIDRequest{
        AddressID: "enim",
        AddressInput: shared.AddressInput{
            City: sdk.String("Canberra"),
            Country: sdk.String("Australia"),
            Line1: sdk.String("Level 7"),
            Line2: sdk.String("21 Genge Street"),
            Line3: sdk.String("omnis"),
            Name: sdk.String("Kembery Building"),
            PostalCode: sdk.String("2601"),
            Suburb: sdk.String("Civic"),
        },
        APIKey: "nemo",
        PartyID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Address != nil {
        // handle response
    }
}
```
