# OrganisationsElectronicAddresses

## Overview

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


### Available Operations

* [DeleteOrganisationsPartyIDElectronicAddressesAddressID](#deleteorganisationspartyidelectronicaddressesaddressid) - Delete an electronic address
* [GetOrganisationsPartyIDElectronicAddresses](#getorganisationspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [GetOrganisationsPartyIDElectronicAddressesAddressID](#getorganisationspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [PostOrganisationsPartyIDElectronicAddresses](#postorganisationspartyidelectronicaddresses) - Create an electronic address
* [PutOrganisationsPartyIDElectronicAddressesAddressID](#putorganisationspartyidelectronicaddressesaddressid) - Update an electronic address

## DeleteOrganisationsPartyIDElectronicAddressesAddressID

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
    res, err := s.OrganisationsElectronicAddresses.DeleteOrganisationsPartyIDElectronicAddressesAddressID(ctx, operations.DeleteOrganisationsPartyIDElectronicAddressesAddressIDRequest{
        AddressID: "magni",
        APIKey: "sunt",
        PartyID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganisationsPartyIDElectronicAddresses

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
    res, err := s.OrganisationsElectronicAddresses.GetOrganisationsPartyIDElectronicAddresses(ctx, operations.GetOrganisationsPartyIDElectronicAddressesRequest{
        APIKey: "illum",
        PartyID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddresses != nil {
        // handle response
    }
}
```

## GetOrganisationsPartyIDElectronicAddressesAddressID

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
    res, err := s.OrganisationsElectronicAddresses.GetOrganisationsPartyIDElectronicAddressesAddressID(ctx, operations.GetOrganisationsPartyIDElectronicAddressesAddressIDRequest{
        AddressID: "maxime",
        APIKey: "ea",
        PartyID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddress != nil {
        // handle response
    }
}
```

## PostOrganisationsPartyIDElectronicAddresses

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
    res, err := s.OrganisationsElectronicAddresses.PostOrganisationsPartyIDElectronicAddresses(ctx, operations.PostOrganisationsPartyIDElectronicAddressesRequest{
        APIKey: "odit",
        ElectronicAddressInput: shared.ElectronicAddressInput{
            AreaCode: sdk.String("02"),
            CountryPrefix: sdk.String("61"),
            ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumLandline.ToPointer(),
            Email: sdk.String("Annie.Wunsch45@gmail.com"),
            Extension: sdk.String("autem"),
            Number: sdk.String("62164453"),
            URL: sdk.String("nam"),
        },
        PartyID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddress != nil {
        // handle response
    }
}
```

## PutOrganisationsPartyIDElectronicAddressesAddressID

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
    res, err := s.OrganisationsElectronicAddresses.PutOrganisationsPartyIDElectronicAddressesAddressID(ctx, operations.PutOrganisationsPartyIDElectronicAddressesAddressIDRequest{
        AddressID: "pariatur",
        APIKey: "nemo",
        ElectronicAddressInput: shared.ElectronicAddressInput{
            AreaCode: sdk.String("02"),
            CountryPrefix: sdk.String("61"),
            ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumWebsite.ToPointer(),
            Email: sdk.String("Russ76@gmail.com"),
            Extension: sdk.String("corporis"),
            Number: sdk.String("62164453"),
            URL: sdk.String("hic"),
        },
        PartyID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddress != nil {
        // handle response
    }
}
```
