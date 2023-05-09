# OrganisationsAddresses

## Overview

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


### Available Operations

* [DeleteOrganisationsPartyIDAddressesAddressID](#deleteorganisationspartyidaddressesaddressid) - Delete an address
* [GetOrganisationsPartyIDAddresses](#getorganisationspartyidaddresses) - Retrieve a list of addresses
* [GetOrganisationsPartyIDAddressesAddressID](#getorganisationspartyidaddressesaddressid) - Retrieve an address
* [PostOrganisationsPartyIDAddresses](#postorganisationspartyidaddresses) - Create an address
* [PutOrganisationsPartyIDAddressesAddressID](#putorganisationspartyidaddressesaddressid) - Update an address

## DeleteOrganisationsPartyIDAddressesAddressID

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
    res, err := s.OrganisationsAddresses.DeleteOrganisationsPartyIDAddressesAddressID(ctx, operations.DeleteOrganisationsPartyIDAddressesAddressIDRequest{
        AddressID: "ad",
        APIKey: "eum",
        PartyID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganisationsPartyIDAddresses

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
    res, err := s.OrganisationsAddresses.GetOrganisationsPartyIDAddresses(ctx, operations.GetOrganisationsPartyIDAddressesRequest{
        APIKey: "necessitatibus",
        PartyID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Addresses != nil {
        // handle response
    }
}
```

## GetOrganisationsPartyIDAddressesAddressID

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
    res, err := s.OrganisationsAddresses.GetOrganisationsPartyIDAddressesAddressID(ctx, operations.GetOrganisationsPartyIDAddressesAddressIDRequest{
        AddressID: "nemo",
        APIKey: "quasi",
        PartyID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Address != nil {
        // handle response
    }
}
```

## PostOrganisationsPartyIDAddresses

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
    res, err := s.OrganisationsAddresses.PostOrganisationsPartyIDAddresses(ctx, operations.PostOrganisationsPartyIDAddressesRequest{
        AddressInput: shared.AddressInput{
            City: sdk.String("Canberra"),
            Country: sdk.String("Australia"),
            Line1: sdk.String("Level 7"),
            Line2: sdk.String("21 Genge Street"),
            Line3: sdk.String("doloribus"),
            Name: sdk.String("Kembery Building"),
            PostalCode: sdk.String("2601"),
            Suburb: sdk.String("Civic"),
        },
        APIKey: "debitis",
        PartyID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Address != nil {
        // handle response
    }
}
```

## PutOrganisationsPartyIDAddressesAddressID

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
    res, err := s.OrganisationsAddresses.PutOrganisationsPartyIDAddressesAddressID(ctx, operations.PutOrganisationsPartyIDAddressesAddressIDRequest{
        AddressID: "maxime",
        AddressInput: shared.AddressInput{
            City: sdk.String("Canberra"),
            Country: sdk.String("Australia"),
            Line1: sdk.String("Level 7"),
            Line2: sdk.String("21 Genge Street"),
            Line3: sdk.String("deleniti"),
            Name: sdk.String("Kembery Building"),
            PostalCode: sdk.String("2601"),
            Suburb: sdk.String("Civic"),
        },
        APIKey: "facilis",
        PartyID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Address != nil {
        // handle response
    }
}
```
