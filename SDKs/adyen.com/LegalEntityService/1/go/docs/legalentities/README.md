# LegalEntities

### Available Operations

* [GetLegalEntitiesID](#getlegalentitiesid) - Get a legal entity
* [GetLegalEntitiesIDBusinessLines](#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [PatchLegalEntitiesID](#patchlegalentitiesid) - Update a legal entity
* [PostLegalEntities](#postlegalentities) - Create a legal entity

## GetLegalEntitiesID

Returns a legal entity.

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
    res, err := s.LegalEntities.GetLegalEntitiesID(ctx, operations.GetLegalEntitiesIDRequest{
        ID: "8633323f-9b77-4f3a-8100-674ebf69280d",
    }, operations.GetLegalEntitiesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalEntity != nil {
        // handle response
    }
}
```

## GetLegalEntitiesIDBusinessLines

Returns the business lines owned by a legal entity.

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
    res, err := s.LegalEntities.GetLegalEntitiesIDBusinessLines(ctx, operations.GetLegalEntitiesIDBusinessLinesRequest{
        ID: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
    }, operations.GetLegalEntitiesIDBusinessLinesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessLines != nil {
        // handle response
    }
}
```

## PatchLegalEntitiesID

Updates a legal entity.

 >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.

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
    res, err := s.LegalEntities.PatchLegalEntitiesID(ctx, operations.PatchLegalEntitiesIDRequest{
        LegalEntityInfoInput: &shared.LegalEntityInfoInput{
            EntityAssociations: []shared.LegalEntityAssociationInput{
                shared.LegalEntityAssociationInput{
                    JobTitle: sdk.String("Human Paradigm Engineer"),
                    LegalEntityID: "vel",
                    Type: shared.LegalEntityAssociationTypeEnumUboThroughOwnership,
                },
            },
            Individual: &shared.IndividualInput{
                BirthData: &shared.BirthData{
                    DateOfBirth: sdk.String("officiis"),
                },
                Email: sdk.String("Marilou_Wilderman@gmail.com"),
                IdentificationData: &shared.IdentificationData{
                    CardNumber: sdk.String("iusto"),
                    ExpiryDate: sdk.String("ipsum"),
                    IssuerCountry: sdk.String("quisquam"),
                    IssuerState: sdk.String("tenetur"),
                    NationalIDExempt: sdk.Bool(false),
                    Number: sdk.String("amet"),
                    Type: shared.IdentificationDataTypeEnumRegistrationDocument,
                },
                Name: shared.Name{
                    FirstName: "Shania",
                    Infix: sdk.String("numquam"),
                    LastName: "Haley",
                },
                Nationality: sdk.String("dolorem"),
                Phone: &shared.PhoneNumber{
                    CountryCode: sdk.String("VG"),
                    Number: "totam",
                    Type: "nihil",
                },
                ResidentialAddress: shared.Address{
                    City: sdk.String("Lake Corbinville"),
                    Country: "Isle of Man",
                    PostalCode: sdk.String("36422-1588"),
                    StateOrProvince: sdk.String("soluta"),
                    Street: sdk.String("65211 Purdy Inlet"),
                    Street2: sdk.String("quam"),
                },
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("molestias"),
                },
            },
            Organization: &shared.OrganizationInput{
                Description: sdk.String("temporibus"),
                DoingBusinessAs: sdk.String("qui"),
                Email: sdk.String("Burdette.Cummerata@gmail.com"),
                LegalName: "ullam",
                Phone: &shared.PhoneNumber{
                    CountryCode: sdk.String("PM"),
                    Number: "hic",
                    Type: "voluptatem",
                },
                PrincipalPlaceOfBusiness: &shared.Address{
                    City: sdk.String("Rogahnfort"),
                    Country: "Benin",
                    PostalCode: sdk.String("20757-5092"),
                    StateOrProvince: sdk.String("dolore"),
                    Street: sdk.String("26100 Ward Avenue"),
                    Street2: sdk.String("est"),
                },
                RegisteredAddress: shared.Address{
                    City: sdk.String("San Francisco"),
                    Country: "Western Sahara",
                    PostalCode: sdk.String("75105"),
                    StateOrProvince: sdk.String("odio"),
                    Street: sdk.String("9786 Cyrus Vista"),
                    Street2: sdk.String("voluptate"),
                },
                RegistrationNumber: sdk.String("consectetur"),
                StockData: &shared.StockData{
                    MarketIdentifier: sdk.String("vero"),
                    StockNumber: sdk.String("tenetur"),
                    TickerSymbol: sdk.String("dignissimos"),
                },
                TaxExempt: sdk.Bool(false),
                TaxID: sdk.String("hic"),
                TaxIDAbsenceReason: shared.OrganizationTaxIDAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
                Type: shared.OrganizationTypeEnumPartnershipIncorporated.ToPointer(),
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("odio"),
                },
            },
            Reference: sdk.String("similique"),
            Type: shared.LegalEntityInfoTypeEnumOrganization.ToPointer(),
        },
        ID: "d74dd39c-0f5d-42cf-b7c7-0a45626d4368",
    }, operations.PatchLegalEntitiesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalEntity != nil {
        // handle response
    }
}
```

## PostLegalEntities

Creates a legal entity. 

This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses. 

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LegalEntities.PostLegalEntities(ctx, shared.LegalEntityInfoRequiredTypeInput{
        EntityAssociations: []shared.LegalEntityAssociationInput{
            shared.LegalEntityAssociationInput{
                JobTitle: sdk.String("Dynamic Metrics Executive"),
                LegalEntityID: "ex",
                Type: shared.LegalEntityAssociationTypeEnumUboThroughOwnership,
            },
        },
        Individual: &shared.IndividualInput{
            BirthData: &shared.BirthData{
                DateOfBirth: sdk.String("excepturi"),
            },
            Email: sdk.String("Everett_Willms41@hotmail.com"),
            IdentificationData: &shared.IdentificationData{
                CardNumber: sdk.String("impedit"),
                ExpiryDate: sdk.String("corporis"),
                IssuerCountry: sdk.String("veniam"),
                IssuerState: sdk.String("aliquid"),
                NationalIDExempt: sdk.Bool(false),
                Number: sdk.String("inventore"),
                Type: shared.IdentificationDataTypeEnumNationalIDNumber,
            },
            Name: shared.Name{
                FirstName: "Gwendolyn",
                Infix: sdk.String("quo"),
                LastName: "Feeney",
            },
            Nationality: sdk.String("recusandae"),
            Phone: &shared.PhoneNumber{
                CountryCode: sdk.String("BT"),
                Number: "minima",
                Type: "eaque",
            },
            ResidentialAddress: shared.Address{
                City: sdk.String("Rancho Cordova"),
                Country: "American Samoa",
                PostalCode: sdk.String("57318"),
                StateOrProvince: sdk.String("inventore"),
                Street: sdk.String("06682 Helen Route"),
                Street2: sdk.String("quas"),
            },
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("assumenda"),
            },
        },
        Organization: &shared.OrganizationInput{
            Description: sdk.String("nulla"),
            DoingBusinessAs: sdk.String("voluptas"),
            Email: sdk.String("Ava13@hotmail.com"),
            LegalName: "provident",
            Phone: &shared.PhoneNumber{
                CountryCode: sdk.String("AW"),
                Number: "molestiae",
                Type: "magnam",
            },
            PrincipalPlaceOfBusiness: &shared.Address{
                City: sdk.String("Devynport"),
                Country: "Kenya",
                PostalCode: sdk.String("64682-4381"),
                StateOrProvince: sdk.String("praesentium"),
                Street: sdk.String("006 DuBuque Shoals"),
                Street2: sdk.String("illum"),
            },
            RegisteredAddress: shared.Address{
                City: sdk.String("Parkerburgh"),
                Country: "China",
                PostalCode: sdk.String("05028"),
                StateOrProvince: sdk.String("ipsam"),
                Street: sdk.String("17490 Schmidt Lock"),
                Street2: sdk.String("inventore"),
            },
            RegistrationNumber: sdk.String("nihil"),
            StockData: &shared.StockData{
                MarketIdentifier: sdk.String("totam"),
                StockNumber: sdk.String("accusamus"),
                TickerSymbol: sdk.String("aliquam"),
            },
            TaxExempt: sdk.Bool(false),
            TaxID: sdk.String("odio"),
            TaxIDAbsenceReason: shared.OrganizationTaxIDAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
            Type: shared.OrganizationTypeEnumListedPublicCompany.ToPointer(),
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("sapiente"),
            },
        },
        Reference: sdk.String("dolores"),
        Type: shared.LegalEntityInfoRequiredTypeTypeEnumOrganization,
    }, operations.PostLegalEntitiesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalEntity != nil {
        // handle response
    }
}
```
