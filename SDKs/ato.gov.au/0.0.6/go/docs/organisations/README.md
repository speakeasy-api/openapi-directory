# Organisations

## Overview

An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the
registry wishes to maintain information.

  For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,
  Partnership or Joint Venture).


### Available Operations

* [DeleteOrganisationsPartyID](#deleteorganisationspartyid) - Delete an organisation
* [GetOrganisations](#getorganisations) - Retrieve a list of organisations
* [GetOrganisationsPartyID](#getorganisationspartyid) - Retrieve an organisation
* [PostOrganisations](#postorganisations) - Create an organisation
* [PutOrganisationsPartyID](#putorganisationspartyid) - Update an organisation

## DeleteOrganisationsPartyID

Delete an organisation with the specified identifier


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
    res, err := s.Organisations.DeleteOrganisationsPartyID(ctx, operations.DeleteOrganisationsPartyIDRequest{
        APIKey: "labore",
        PartyID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganisations

Retrieve a list of organisations


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
    res, err := s.Organisations.GetOrganisations(ctx, operations.GetOrganisationsRequest{
        APIKey: "qui",
        Identifier: sdk.String("aliquid"),
        RegisteredIdentifier: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organisations != nil {
        // handle response
    }
}
```

## GetOrganisationsPartyID

Retrieve an organisation with the specified identifier


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
    res, err := s.Organisations.GetOrganisationsPartyID(ctx, operations.GetOrganisationsPartyIDRequest{
        APIKey: "quos",
        PartyID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organisation != nil {
        // handle response
    }
}
```

## PostOrganisations

Create an organisation


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organisations.PostOrganisations(ctx, operations.PostOrganisationsRequest{
        APIKey: "magni",
        OrganisationInput: shared.OrganisationInput{
            Addresses: []shared.OrganisationAddressInput{
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("alias"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("dolorum"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumPrincipalPlaceOfBusiness.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("tempora"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumPrincipalPlaceOfBusiness.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("tempore"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
            },
            ElectronicAddresses: []shared.ElectronicAddressInput{
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumWebsite.ToPointer(),
                    Email: sdk.String("Delores.Roob@yahoo.com"),
                    Extension: sdk.String("provident"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("necessitatibus"),
                },
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumLandline.ToPointer(),
                    Email: sdk.String("Damien_Toy44@yahoo.com"),
                    Extension: sdk.String("in"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("illum"),
                },
            },
            EstablishmentDate: types.MustDateFromString("1928-03-03"),
            LegalEntityType: shared.OrganisationLegalEntityTypeEnumJointVenture,
            Names: []shared.OrganisationNameInput{
                shared.OrganisationNameInput{
                    Name: sdk.String("321 Technology Ventures"),
                },
                shared.OrganisationNameInput{
                    Name: sdk.String("321 Technology Ventures"),
                },
                shared.OrganisationNameInput{
                    Name: sdk.String("321 Technology Ventures"),
                },
            },
            RegisteredIdentifiers: []shared.RegisteredIdentifierInput{
                shared.RegisteredIdentifierInput{
                    Identifier: sdk.String("123456789"),
                    IdentifierType: shared.RegisteredIdentifierIdentifierTypeEnumAcn.ToPointer(),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organisation != nil {
        // handle response
    }
}
```

## PutOrganisationsPartyID

Update an organisation


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organisations.PutOrganisationsPartyID(ctx, operations.PutOrganisationsPartyIDRequest{
        APIKey: "cumque",
        OrganisationInput: shared.OrganisationInput{
            Addresses: []shared.OrganisationAddressInput{
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("aliquid"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumPrincipalPlaceOfBusiness.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("accusamus"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("occaecati"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.OrganisationAddressInput{
                    AddressType: shared.OrganisationAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("accusamus"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
            },
            ElectronicAddresses: []shared.ElectronicAddressInput{
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumMobile.ToPointer(),
                    Email: sdk.String("Mohammad_Olson@yahoo.com"),
                    Extension: sdk.String("sapiente"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("amet"),
                },
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumMobile.ToPointer(),
                    Email: sdk.String("Henry.Mosciski@yahoo.com"),
                    Extension: sdk.String("perferendis"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("nihil"),
                },
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumFax.ToPointer(),
                    Email: sdk.String("Maggie38@hotmail.com"),
                    Extension: sdk.String("natus"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("nobis"),
                },
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumLandline.ToPointer(),
                    Email: sdk.String("Brice9@hotmail.com"),
                    Extension: sdk.String("excepturi"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("ullam"),
                },
            },
            EstablishmentDate: types.MustDateFromString("1928-03-03"),
            LegalEntityType: shared.OrganisationLegalEntityTypeEnumTrust,
            Names: []shared.OrganisationNameInput{
                shared.OrganisationNameInput{
                    Name: sdk.String("321 Technology Ventures"),
                },
                shared.OrganisationNameInput{
                    Name: sdk.String("321 Technology Ventures"),
                },
                shared.OrganisationNameInput{
                    Name: sdk.String("321 Technology Ventures"),
                },
            },
            RegisteredIdentifiers: []shared.RegisteredIdentifierInput{
                shared.RegisteredIdentifierInput{
                    Identifier: sdk.String("123456789"),
                    IdentifierType: shared.RegisteredIdentifierIdentifierTypeEnumAcn.ToPointer(),
                },
                shared.RegisteredIdentifierInput{
                    Identifier: sdk.String("123456789"),
                    IdentifierType: shared.RegisteredIdentifierIdentifierTypeEnumAbn.ToPointer(),
                },
                shared.RegisteredIdentifierInput{
                    Identifier: sdk.String("123456789"),
                    IdentifierType: shared.RegisteredIdentifierIdentifierTypeEnumAbn.ToPointer(),
                },
            },
        },
        PartyID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organisation != nil {
        // handle response
    }
}
```
