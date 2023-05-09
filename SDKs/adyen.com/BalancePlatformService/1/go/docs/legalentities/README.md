# LegalEntities

### Available Operations

* [GetLegalEntitiesID](#getlegalentitiesid) - Get a legal entity
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
        ID: "c688282a-a482-4562-b222-e9817ee17cbe",
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
                    JobTitle: sdk.String("Senior Interactions Administrator"),
                    LegalEntityID: "harum",
                    Type: shared.LegalEntityAssociationTypeEnumUboThroughControl,
                },
                shared.LegalEntityAssociationInput{
                    JobTitle: sdk.String("International Intranet Director"),
                    LegalEntityID: "distinctio",
                    Type: shared.LegalEntityAssociationTypeEnumUboThroughOwnership,
                },
            },
            Individual: &shared.IndividualInput{
                BirthData: &shared.BirthData{
                    DateOfBirth: sdk.String("sit"),
                },
                Email: sdk.String("Morton.Fisher0@yahoo.com"),
                IdentificationData: &shared.IdentificationData{
                    CardNumber: sdk.String("minus"),
                    ExpiryDate: sdk.String("quaerat"),
                    IssuerCountry: sdk.String("sapiente"),
                    IssuerState: sdk.String("consectetur"),
                    NationalIDExempt: sdk.Bool(false),
                    Number: sdk.String("esse"),
                    Type: shared.IdentificationDataTypeEnumProofOfAddress,
                },
                Name: shared.Name3{
                    FirstName: "Landen",
                    Infix: sdk.String("a"),
                    LastName: "Stiedemann",
                },
                Nationality: sdk.String("quas"),
                Phone: &shared.PhoneNumber2{
                    CountryCode: sdk.String("JP"),
                    Number: "quasi",
                    Type: "a",
                },
                ResidentialAddress: shared.Address3{
                    City: sdk.String("Mayerhaven"),
                    Country: "Somalia",
                    PostalCode: sdk.String("99801"),
                    StateOrProvince: sdk.String("quasi"),
                    Street: sdk.String("6390 Kassulke Lake"),
                    Street2: sdk.String("eius"),
                },
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("libero"),
                },
            },
            Organization: &shared.OrganizationInput{
                Description: sdk.String("illum"),
                DoingBusinessAs: sdk.String("soluta"),
                Email: sdk.String("Elnora35@gmail.com"),
                LegalName: "reprehenderit",
                Phone: &shared.PhoneNumber2{
                    CountryCode: sdk.String("GR"),
                    Number: "nisi",
                    Type: "aut",
                },
                PrincipalPlaceOfBusiness: &shared.Address3{
                    City: sdk.String("Christophaven"),
                    Country: "Iceland",
                    PostalCode: sdk.String("96069-0804"),
                    StateOrProvince: sdk.String("ipsa"),
                    Street: sdk.String("02268 Joyce Bridge"),
                    Street2: sdk.String("laudantium"),
                },
                RegisteredAddress: shared.Address3{
                    City: sdk.String("Mabelton"),
                    Country: "Mali",
                    PostalCode: sdk.String("02527"),
                    StateOrProvince: sdk.String("explicabo"),
                    Street: sdk.String("0419 Frami Walks"),
                    Street2: sdk.String("voluptas"),
                },
                RegistrationNumber: sdk.String("asperiores"),
                StockData: &shared.StockData{
                    MarketIdentifier: sdk.String("aperiam"),
                    StockNumber: sdk.String("ea"),
                    TickerSymbol: sdk.String("quaerat"),
                },
                TaxExempt: sdk.Bool(false),
                TaxID: sdk.String("consequuntur"),
                TaxIDAbsenceReason: shared.OrganizationTaxIDAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
                Type: shared.OrganizationTypeEnumNonProfit.ToPointer(),
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("maxime"),
                },
            },
            Reference: sdk.String("dignissimos"),
            Type: shared.LegalEntityInfoTypeEnumOrganization.ToPointer(),
        },
        ID: "f515cc41-3aa6-43aa-a8d6-7864dbb675fd",
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
                JobTitle: sdk.String("Chief Markets Associate"),
                LegalEntityID: "cum",
                Type: shared.LegalEntityAssociationTypeEnumSignatory,
            },
            shared.LegalEntityAssociationInput{
                JobTitle: sdk.String("District Tactics Representative"),
                LegalEntityID: "facere",
                Type: shared.LegalEntityAssociationTypeEnumSignatory,
            },
        },
        Individual: &shared.IndividualInput{
            BirthData: &shared.BirthData{
                DateOfBirth: sdk.String("doloribus"),
            },
            Email: sdk.String("Vivienne_Predovic29@yahoo.com"),
            IdentificationData: &shared.IdentificationData{
                CardNumber: sdk.String("sunt"),
                ExpiryDate: sdk.String("asperiores"),
                IssuerCountry: sdk.String("adipisci"),
                IssuerState: sdk.String("non"),
                NationalIDExempt: sdk.Bool(false),
                Number: sdk.String("amet"),
                Type: shared.IdentificationDataTypeEnumDriversLicense,
            },
            Name: shared.Name3{
                FirstName: "Jena",
                Infix: sdk.String("a"),
                LastName: "Toy",
            },
            Nationality: sdk.String("consectetur"),
            Phone: &shared.PhoneNumber2{
                CountryCode: sdk.String("GS"),
                Number: "harum",
                Type: "laboriosam",
            },
            ResidentialAddress: shared.Address3{
                City: sdk.String("Fort Morrisland"),
                Country: "Thailand",
                PostalCode: sdk.String("21333-3762"),
                StateOrProvince: sdk.String("minus"),
                Street: sdk.String("54238 Herman Ferry"),
                Street2: sdk.String("cum"),
            },
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("blanditiis"),
            },
        },
        Organization: &shared.OrganizationInput{
            Description: sdk.String("quas"),
            DoingBusinessAs: sdk.String("hic"),
            Email: sdk.String("Lorenza_Lowe94@gmail.com"),
            LegalName: "exercitationem",
            Phone: &shared.PhoneNumber2{
                CountryCode: sdk.String("QA"),
                Number: "sit",
                Type: "rerum",
            },
            PrincipalPlaceOfBusiness: &shared.Address3{
                City: sdk.String("Fort Brendonworth"),
                Country: "Pitcairn Islands",
                PostalCode: sdk.String("70626"),
                StateOrProvince: sdk.String("sed"),
                Street: sdk.String("4613 Bradtke Hill"),
                Street2: sdk.String("sapiente"),
            },
            RegisteredAddress: shared.Address3{
                City: sdk.String("Bellflower"),
                Country: "Vietnam",
                PostalCode: sdk.String("59215"),
                StateOrProvince: sdk.String("eius"),
                Street: sdk.String("245 Wolf Fords"),
                Street2: sdk.String("tempora"),
            },
            RegistrationNumber: sdk.String("voluptate"),
            StockData: &shared.StockData{
                MarketIdentifier: sdk.String("reiciendis"),
                StockNumber: sdk.String("ex"),
                TickerSymbol: sdk.String("sit"),
            },
            TaxExempt: sdk.Bool(false),
            TaxID: sdk.String("non"),
            TaxIDAbsenceReason: shared.OrganizationTaxIDAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
            Type: shared.OrganizationTypeEnumNonProfit.ToPointer(),
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("facilis"),
            },
        },
        Reference: sdk.String("quaerat"),
        Type: shared.LegalEntityInfoRequiredTypeTypeEnumIndividual,
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
