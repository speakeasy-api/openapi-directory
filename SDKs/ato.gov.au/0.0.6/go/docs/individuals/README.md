# Individuals

## Overview

An individual is a person about whom the registry wishes to maintain information.

  For example, the individual's date and place of birth (for the purposes of identification) and the individual's
  residential address (which is used for administrative purposes).


### Available Operations

* [DeleteIndividualsPartyID](#deleteindividualspartyid) - Delete an individual
* [GetIndividuals](#getindividuals) - Retrieve a list of individuals
* [GetIndividualsPartyID](#getindividualspartyid) - Retrieve an individual
* [PostIndividuals](#postindividuals) - Create an individual
* [PutIndividualsPartyID](#putindividualspartyid) - Update an individual

## DeleteIndividualsPartyID

Delete an individual with the specified identifier


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
    res, err := s.Individuals.DeleteIndividualsPartyID(ctx, operations.DeleteIndividualsPartyIDRequest{
        APIKey: "corrupti",
        PartyID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndividuals

Retrieve a list of individuals


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
    res, err := s.Individuals.GetIndividuals(ctx, operations.GetIndividualsRequest{
        APIKey: "vel",
        DateOfBirth: sdk.String("error"),
        PlaceOfBirth: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Individuals != nil {
        // handle response
    }
}
```

## GetIndividualsPartyID

Retrieve an individual with the specified identifier


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
    res, err := s.Individuals.GetIndividualsPartyID(ctx, operations.GetIndividualsPartyIDRequest{
        APIKey: "suscipit",
        PartyID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Individual != nil {
        // handle response
    }
}
```

## PostIndividuals

Create an individual


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
    res, err := s.Individuals.PostIndividuals(ctx, operations.PostIndividualsRequest{
        APIKey: "magnam",
        IndividualInput: shared.IndividualInput{
            Addresses: []shared.IndividualAddressInput{
                shared.IndividualAddressInput{
                    AddressType: shared.IndividualAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("delectus"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.IndividualAddressInput{
                    AddressType: shared.IndividualAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("suscipit"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.IndividualAddressInput{
                    AddressType: shared.IndividualAddressAddressTypeEnumPrincipalPlaceOfBusiness.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("minus"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.IndividualAddressInput{
                    AddressType: shared.IndividualAddressAddressTypeEnumPrincipalPlaceOfResidence.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("voluptatum"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
            },
            DateOfBirth: types.MustDateFromString("1979-01-13"),
            ElectronicAddresses: []shared.ElectronicAddressInput{
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumLandline.ToPointer(),
                    Email: sdk.String("Tianna33@yahoo.com"),
                    Extension: sdk.String("veritatis"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("deserunt"),
                },
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumEmail.ToPointer(),
                    Email: sdk.String("Rita.Will87@yahoo.com"),
                    Extension: sdk.String("at"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("maiores"),
                },
            },
            Gender: shared.IndividualGenderEnumMale.ToPointer(),
            Names: []shared.IndividualNameInput{
                shared.IndividualNameInput{
                    Direction: shared.IndividualNameDirectionEnumRightToLeft.ToPointer(),
                    FamilyName: sdk.String("Ferguson"),
                    FormalSalutation: sdk.String("Mr Robert Ferguson"),
                    GivenName: sdk.String("Robert"),
                    InformalSalutation: sdk.String("Rob"),
                    MiddleName: sdk.String("James"),
                    NamePrefix: shared.IndividualNameNamePrefixEnumMr.ToPointer(),
                    NameSuffix: sdk.String("totam"),
                    NameType: shared.IndividualNameNameTypeEnumPrincipalName.ToPointer(),
                },
                shared.IndividualNameInput{
                    Direction: shared.IndividualNameDirectionEnumRightToLeft.ToPointer(),
                    FamilyName: sdk.String("Ferguson"),
                    FormalSalutation: sdk.String("Mr Robert Ferguson"),
                    GivenName: sdk.String("Robert"),
                    InformalSalutation: sdk.String("Rob"),
                    MiddleName: sdk.String("James"),
                    NamePrefix: shared.IndividualNameNamePrefixEnumMr.ToPointer(),
                    NameSuffix: sdk.String("nam"),
                    NameType: shared.IndividualNameNameTypeEnumPrincipalName.ToPointer(),
                },
                shared.IndividualNameInput{
                    Direction: shared.IndividualNameDirectionEnumRightToLeft.ToPointer(),
                    FamilyName: sdk.String("Ferguson"),
                    FormalSalutation: sdk.String("Mr Robert Ferguson"),
                    GivenName: sdk.String("Robert"),
                    InformalSalutation: sdk.String("Rob"),
                    MiddleName: sdk.String("James"),
                    NamePrefix: shared.IndividualNameNamePrefixEnumMr.ToPointer(),
                    NameSuffix: sdk.String("deleniti"),
                    NameType: shared.IndividualNameNameTypeEnumPrincipalName.ToPointer(),
                },
                shared.IndividualNameInput{
                    Direction: shared.IndividualNameDirectionEnumRightToLeft.ToPointer(),
                    FamilyName: sdk.String("Ferguson"),
                    FormalSalutation: sdk.String("Mr Robert Ferguson"),
                    GivenName: sdk.String("Robert"),
                    InformalSalutation: sdk.String("Rob"),
                    MiddleName: sdk.String("James"),
                    NamePrefix: shared.IndividualNameNamePrefixEnumMs.ToPointer(),
                    NameSuffix: sdk.String("beatae"),
                    NameType: shared.IndividualNameNameTypeEnumAlias.ToPointer(),
                },
            },
            PlaceOfBirth: "Tamworth",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Individual != nil {
        // handle response
    }
}
```

## PutIndividualsPartyID

Update an individual


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
    res, err := s.Individuals.PutIndividualsPartyID(ctx, operations.PutIndividualsPartyIDRequest{
        APIKey: "molestiae",
        IndividualInput: shared.IndividualInput{
            Addresses: []shared.IndividualAddressInput{
                shared.IndividualAddressInput{
                    AddressType: shared.IndividualAddressAddressTypeEnumMailing.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("impedit"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
                shared.IndividualAddressInput{
                    AddressType: shared.IndividualAddressAddressTypeEnumPrincipalPlaceOfResidence.ToPointer(),
                    City: sdk.String("Canberra"),
                    Country: sdk.String("Australia"),
                    Line1: sdk.String("Level 7"),
                    Line2: sdk.String("21 Genge Street"),
                    Line3: sdk.String("esse"),
                    Name: sdk.String("Kembery Building"),
                    PostalCode: sdk.String("2601"),
                    Suburb: sdk.String("Civic"),
                },
            },
            DateOfBirth: types.MustDateFromString("1979-01-13"),
            ElectronicAddresses: []shared.ElectronicAddressInput{
                shared.ElectronicAddressInput{
                    AreaCode: sdk.String("02"),
                    CountryPrefix: sdk.String("61"),
                    ElectronicAddressType: shared.ElectronicAddressElectronicAddressTypeEnumLandline.ToPointer(),
                    Email: sdk.String("Aiden.Hane@gmail.com"),
                    Extension: sdk.String("iste"),
                    Number: sdk.String("62164453"),
                    URL: sdk.String("dolor"),
                },
            },
            Gender: shared.IndividualGenderEnumNotApplicable.ToPointer(),
            Names: []shared.IndividualNameInput{
                shared.IndividualNameInput{
                    Direction: shared.IndividualNameDirectionEnumRightToLeft.ToPointer(),
                    FamilyName: sdk.String("Ferguson"),
                    FormalSalutation: sdk.String("Mr Robert Ferguson"),
                    GivenName: sdk.String("Robert"),
                    InformalSalutation: sdk.String("Rob"),
                    MiddleName: sdk.String("James"),
                    NamePrefix: shared.IndividualNameNamePrefixEnumMs.ToPointer(),
                    NameSuffix: sdk.String("fuga"),
                    NameType: shared.IndividualNameNameTypeEnumAlias.ToPointer(),
                },
                shared.IndividualNameInput{
                    Direction: shared.IndividualNameDirectionEnumLeftToRight.ToPointer(),
                    FamilyName: sdk.String("Ferguson"),
                    FormalSalutation: sdk.String("Mr Robert Ferguson"),
                    GivenName: sdk.String("Robert"),
                    InformalSalutation: sdk.String("Rob"),
                    MiddleName: sdk.String("James"),
                    NamePrefix: shared.IndividualNameNamePrefixEnumMs.ToPointer(),
                    NameSuffix: sdk.String("iure"),
                    NameType: shared.IndividualNameNameTypeEnumPrincipalName.ToPointer(),
                },
            },
            PlaceOfBirth: "Tamworth",
        },
        PartyID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Individual != nil {
        // handle response
    }
}
```
