# LegalEntities

### Available Operations

* [GetLegalEntitiesID](#getlegalentitiesid) - Get a legal entity
* [GetLegalEntitiesIDBusinessLines](#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [PatchLegalEntitiesID](#patchlegalentitiesid) - Update a legal entity
* [PostLegalEntities](#postlegalentities) - Create a legal entity
* [PostLegalEntitiesIDCheckVerificationErrors](#postlegalentitiesidcheckverificationerrors) - Check a legal entity's verification errors

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
        ID: "ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4",
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
        ID: "53f870b3-26b5-4a73-829c-db1a8422bb67",
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
                    JobTitle: sdk.String("Internal Directives Manager"),
                    LegalEntityID: "fugit",
                    Type: shared.LegalEntityAssociationTypeEnumPciSignatory,
                },
                shared.LegalEntityAssociationInput{
                    JobTitle: sdk.String("Central Research Director"),
                    LegalEntityID: "nam",
                    Type: shared.LegalEntityAssociationTypeEnumUltimateParentCompany,
                },
                shared.LegalEntityAssociationInput{
                    JobTitle: sdk.String("Lead Accounts Producer"),
                    LegalEntityID: "nobis",
                    Type: shared.LegalEntityAssociationTypeEnumPciSignatory,
                },
            },
            Individual: &shared.IndividualInput{
                BirthData: &shared.BirthData{
                    DateOfBirth: sdk.String("saepe"),
                },
                Email: sdk.String("Arnulfo_Rohan@gmail.com"),
                IdentificationData: &shared.IdentificationData{
                    CardNumber: sdk.String("cupiditate"),
                    ExpiryDate: sdk.String("aperiam"),
                    IssuerCountry: sdk.String("delectus"),
                    IssuerState: sdk.String("dolorem"),
                    NationalIDExempt: sdk.Bool(false),
                    Number: sdk.String("dolore"),
                    Type: shared.IdentificationDataTypeEnumNationalIDNumber,
                },
                Name: shared.Name{
                    FirstName: "Dayna",
                    Infix: sdk.String("dolorum"),
                    LastName: "Bradtke",
                },
                Nationality: sdk.String("quae"),
                Phone: &shared.PhoneNumber{
                    Number: "aut",
                    Type: sdk.String("quas"),
                },
                ResidentialAddress: shared.Address{
                    City: sdk.String("Aliso Viejo"),
                    Country: "Oman",
                    PostalCode: sdk.String("79275-1054"),
                    StateOrProvince: sdk.String("occaecati"),
                    Street: sdk.String("786 Cyrus Vista"),
                    Street2: sdk.String("voluptate"),
                },
                TaxInformation: []shared.TaxInformation{
                    shared.TaxInformation{
                        Country: sdk.String("Tanzania"),
                        Number: sdk.String("tenetur"),
                        Type: sdk.String("dignissimos"),
                    },
                },
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("hic"),
                },
            },
            Organization: &shared.OrganizationInput{
                DateOfIncorporation: sdk.String("distinctio"),
                Description: sdk.String("quod"),
                DoingBusinessAs: sdk.String("odio"),
                Email: sdk.String("Melody.Swift@yahoo.com"),
                LegalName: "quibusdam",
                Phone: &shared.PhoneNumber{
                    Number: "illum",
                    Type: sdk.String("sequi"),
                },
                PrincipalPlaceOfBusiness: &shared.Address{
                    City: sdk.String("Rutherfordtown"),
                    Country: "Virgin Islands, British",
                    PostalCode: sdk.String("81799"),
                    StateOrProvince: sdk.String("iusto"),
                    Street: sdk.String("406 Freeman Isle"),
                    Street2: sdk.String("aspernatur"),
                },
                RegisteredAddress: shared.Address{
                    City: sdk.String("Reinholdboro"),
                    Country: "Colombia",
                    PostalCode: sdk.String("51290"),
                    StateOrProvince: sdk.String("ex"),
                    Street: sdk.String("593 Schamberger Union"),
                    Street2: sdk.String("ea"),
                },
                RegistrationNumber: sdk.String("impedit"),
                StockData: &shared.StockData{
                    MarketIdentifier: sdk.String("corporis"),
                    StockNumber: sdk.String("veniam"),
                    TickerSymbol: sdk.String("aliquid"),
                },
                TaxInformation: []shared.TaxInformation{
                    shared.TaxInformation{
                        Country: sdk.String("French Polynesia"),
                        Number: sdk.String("ea"),
                        Type: sdk.String("quo"),
                    },
                },
                TaxReportingClassification: &shared.TaxReportingClassification{
                    BusinessType: shared.TaxReportingClassificationBusinessTypeEnumListedPublicCompany.ToPointer(),
                    FinancialInstitutionNumber: sdk.String("recusandae"),
                    MainSourceOfIncome: shared.TaxReportingClassificationMainSourceOfIncomeEnumBusinessOperation.ToPointer(),
                    Type: shared.TaxReportingClassificationTypeEnumFinancialNonReportable.ToPointer(),
                },
                Type: shared.OrganizationTypeEnumAssociationIncorporated.ToPointer(),
                VatAbsenceReason: shared.OrganizationVatAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
                VatNumber: sdk.String("libero"),
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("aut"),
                },
            },
            Reference: sdk.String("aut"),
            SoleProprietorship: &shared.SoleProprietorship{
                CountryOfGoverningLaw: "deleniti",
                DateOfIncorporation: sdk.String("impedit"),
                DoingBusinessAs: sdk.String("aliquam"),
                Name: "Eloise Block MD",
                PrincipalPlaceOfBusiness: &shared.Address{
                    City: sdk.String("Schroederburgh"),
                    Country: "Italy",
                    PostalCode: sdk.String("75883"),
                    StateOrProvince: sdk.String("libero"),
                    Street: sdk.String("22150 Elisha Lock"),
                    Street2: sdk.String("eius"),
                },
                RegisteredAddress: shared.Address{
                    City: sdk.String("Jackystad"),
                    Country: "Palestinian Territory",
                    PostalCode: sdk.String("68243"),
                    StateOrProvince: sdk.String("assumenda"),
                    Street: sdk.String("57006 DuBuque Shoals"),
                    Street2: sdk.String("illum"),
                },
                RegistrationNumber: sdk.String("quo"),
                VatAbsenceReason: shared.SoleProprietorshipVatAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
                VatNumber: sdk.String("eius"),
            },
            Type: shared.LegalEntityInfoTypeEnumIndividual.ToPointer(),
        },
        ID: "51904e52-3c7e-40bc-b178-e4796f2a70c6",
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
                JobTitle: sdk.String("Central Marketing Designer"),
                LegalEntityID: "fugit",
                Type: shared.LegalEntityAssociationTypeEnumUboThroughOwnership,
            },
            shared.LegalEntityAssociationInput{
                JobTitle: sdk.String("Investor Response Designer"),
                LegalEntityID: "explicabo",
                Type: shared.LegalEntityAssociationTypeEnumSignatory,
            },
            shared.LegalEntityAssociationInput{
                JobTitle: sdk.String("Regional Marketing Representative"),
                LegalEntityID: "consequuntur",
                Type: shared.LegalEntityAssociationTypeEnumSignatory,
            },
        },
        Individual: &shared.IndividualInput{
            BirthData: &shared.BirthData{
                DateOfBirth: sdk.String("explicabo"),
            },
            Email: sdk.String("Kole45@hotmail.com"),
            IdentificationData: &shared.IdentificationData{
                CardNumber: sdk.String("eveniet"),
                ExpiryDate: sdk.String("accusamus"),
                IssuerCountry: sdk.String("veritatis"),
                IssuerState: sdk.String("esse"),
                NationalIDExempt: sdk.Bool(false),
                Number: sdk.String("quod"),
                Type: shared.IdentificationDataTypeEnumVatDocument,
            },
            Name: shared.Name{
                FirstName: "Serena",
                Infix: sdk.String("aliquid"),
                LastName: "Botsford",
            },
            Nationality: sdk.String("saepe"),
            Phone: &shared.PhoneNumber{
                Number: "vel",
                Type: sdk.String("harum"),
            },
            ResidentialAddress: shared.Address{
                City: sdk.String("Maximusstead"),
                Country: "Ghana",
                PostalCode: sdk.String("70672-7107"),
                StateOrProvince: sdk.String("quaerat"),
                Street: sdk.String("245 Wilkinson Terrace"),
                Street2: sdk.String("quas"),
            },
            TaxInformation: []shared.TaxInformation{
                shared.TaxInformation{
                    Country: sdk.String("Bermuda"),
                    Number: sdk.String("a"),
                    Type: sdk.String("error"),
                },
                shared.TaxInformation{
                    Country: sdk.String("Micronesia"),
                    Number: sdk.String("pariatur"),
                    Type: sdk.String("possimus"),
                },
            },
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("quia"),
            },
        },
        Organization: &shared.OrganizationInput{
            DateOfIncorporation: sdk.String("eveniet"),
            Description: sdk.String("asperiores"),
            DoingBusinessAs: sdk.String("facere"),
            Email: sdk.String("Carmine_Botsford@gmail.com"),
            LegalName: "aliquid",
            Phone: &shared.PhoneNumber{
                Number: "tenetur",
                Type: sdk.String("quae"),
            },
            PrincipalPlaceOfBusiness: &shared.Address{
                City: sdk.String("Jackson"),
                Country: "Jordan",
                PostalCode: sdk.String("78703"),
                StateOrProvince: sdk.String("sapiente"),
                Street: sdk.String("34330 Denesik Street"),
                Street2: sdk.String("ex"),
            },
            RegisteredAddress: shared.Address{
                City: sdk.String("Tobinchester"),
                Country: "Bhutan",
                PostalCode: sdk.String("90804-0302"),
                StateOrProvince: sdk.String("adipisci"),
                Street: sdk.String("8050 Keebler Place"),
                Street2: sdk.String("ab"),
            },
            RegistrationNumber: sdk.String("corrupti"),
            StockData: &shared.StockData{
                MarketIdentifier: sdk.String("non"),
                StockNumber: sdk.String("voluptatem"),
                TickerSymbol: sdk.String("dolor"),
            },
            TaxInformation: []shared.TaxInformation{
                shared.TaxInformation{
                    Country: sdk.String("Egypt"),
                    Number: sdk.String("impedit"),
                    Type: sdk.String("explicabo"),
                },
                shared.TaxInformation{
                    Country: sdk.String("Haiti"),
                    Number: sdk.String("aut"),
                    Type: sdk.String("dignissimos"),
                },
                shared.TaxInformation{
                    Country: sdk.String("Bouvet Island (Bouvetoya)"),
                    Number: sdk.String("maiores"),
                    Type: sdk.String("natus"),
                },
            },
            TaxReportingClassification: &shared.TaxReportingClassification{
                BusinessType: shared.TaxReportingClassificationBusinessTypeEnumListedPublicCompany.ToPointer(),
                FinancialInstitutionNumber: sdk.String("voluptatibus"),
                MainSourceOfIncome: shared.TaxReportingClassificationMainSourceOfIncomeEnumRealEstateSales.ToPointer(),
                Type: shared.TaxReportingClassificationTypeEnumNonFinancialPassive.ToPointer(),
            },
            Type: shared.OrganizationTypeEnumAssociationIncorporated.ToPointer(),
            VatAbsenceReason: shared.OrganizationVatAbsenceReasonEnumIndustryExemption.ToPointer(),
            VatNumber: sdk.String("quaerat"),
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("consequuntur"),
            },
        },
        Reference: sdk.String("repellendus"),
        SoleProprietorship: &shared.SoleProprietorship{
            CountryOfGoverningLaw: "officia",
            DateOfIncorporation: sdk.String("maxime"),
            DoingBusinessAs: sdk.String("dignissimos"),
            Name: "Mrs. Aubrey Hills",
            PrincipalPlaceOfBusiness: &shared.Address{
                City: sdk.String("Enid"),
                Country: "Bangladesh",
                PostalCode: sdk.String("66326"),
                StateOrProvince: sdk.String("est"),
                Street: sdk.String("584 Kayla Key"),
                Street2: sdk.String("labore"),
            },
            RegisteredAddress: shared.Address{
                City: sdk.String("Ponce"),
                Country: "Rwanda",
                PostalCode: sdk.String("43983"),
                StateOrProvince: sdk.String("recusandae"),
                Street: sdk.String("0724 Tressa Spurs"),
                Street2: sdk.String("numquam"),
            },
            RegistrationNumber: sdk.String("doloribus"),
            VatAbsenceReason: shared.SoleProprietorshipVatAbsenceReasonEnumIndustryExemption.ToPointer(),
            VatNumber: sdk.String("reiciendis"),
        },
        Type: shared.LegalEntityInfoRequiredTypeTypeEnumTrust,
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

## PostLegalEntitiesIDCheckVerificationErrors

Returns the verification errors for a legal entity and its supporting entities.

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
    res, err := s.LegalEntities.PostLegalEntitiesIDCheckVerificationErrors(ctx, operations.PostLegalEntitiesIDCheckVerificationErrorsRequest{
        ID: "ee41f333-17fe-435b-a0eb-1ea426555ba3",
    }, operations.PostLegalEntitiesIDCheckVerificationErrorsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerificationErrors != nil {
        // handle response
    }
}
```
