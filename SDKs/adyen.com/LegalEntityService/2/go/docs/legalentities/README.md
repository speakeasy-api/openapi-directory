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
        ID: "3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be",
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
        ID: "453f870b-326b-45a7-b429-cdb1a8422bb6",
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
                    JobTitle: sdk.String("Global Configuration Officer"),
                    LegalEntityID: "neque",
                    Type: shared.LegalEntityAssociationTypeEnumPciSignatory,
                },
                shared.LegalEntityAssociationInput{
                    JobTitle: sdk.String("Corporate Optimization Liaison"),
                    LegalEntityID: "ullam",
                    Type: shared.LegalEntityAssociationTypeEnumUboThroughOwnership,
                },
            },
            Individual: &shared.IndividualInput{
                BirthData: &shared.BirthData{
                    DateOfBirth: sdk.String("hic"),
                },
                Email: sdk.String("Nova.Rogahn90@gmail.com"),
                IdentificationData: &shared.IdentificationData{
                    CardNumber: sdk.String("ipsum"),
                    ExpiryDate: sdk.String("veritatis"),
                    IssuerCountry: sdk.String("nobis"),
                    IssuerState: sdk.String("quos"),
                    NationalIDExempt: sdk.Bool(false),
                    Number: sdk.String("tempore"),
                    Type: shared.IdentificationDataTypeEnumProofOfResidency,
                },
                Name: shared.Name{
                    FirstName: "Alvina",
                    Infix: sdk.String("delectus"),
                    LastName: "Durgan",
                },
                Nationality: sdk.String("dolore"),
                Phone: &shared.PhoneNumber{
                    Number: "labore",
                    Type: sdk.String("adipisci"),
                },
                ResidentialAddress: shared.Address{
                    City: sdk.String("Bradtketon"),
                    Country: "Andorra",
                    PostalCode: sdk.String("90687-9275"),
                    StateOrProvince: sdk.String("qui"),
                    Street: sdk.String("54597 Moen Green"),
                    Street2: sdk.String("ipsum"),
                },
                TaxInformation: []shared.TaxInformation{
                    shared.TaxInformation{
                        Country: sdk.String("Kenya"),
                        Number: sdk.String("consectetur"),
                        Type: sdk.String("vero"),
                    },
                    shared.TaxInformation{
                        Country: sdk.String("United States Minor Outlying Islands"),
                        Number: sdk.String("dignissimos"),
                        Type: sdk.String("hic"),
                    },
                    shared.TaxInformation{
                        Country: sdk.String("Portugal"),
                        Number: sdk.String("quod"),
                        Type: sdk.String("odio"),
                    },
                    shared.TaxInformation{
                        Country: sdk.String("Netherlands"),
                        Number: sdk.String("facilis"),
                        Type: sdk.String("vero"),
                    },
                },
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("ducimus"),
                },
            },
            Organization: &shared.OrganizationInput{
                DateOfIncorporation: sdk.String("dolore"),
                Description: sdk.String("quibusdam"),
                DoingBusinessAs: sdk.String("illum"),
                Email: sdk.String("Liam97@gmail.com"),
                LegalName: "exercitationem",
                Phone: &shared.PhoneNumber{
                    Number: "nulla",
                    Type: sdk.String("fugit"),
                },
                PrincipalPlaceOfBusiness: &shared.Address{
                    City: sdk.String("Wunschworth"),
                    Country: "Kyrgyz Republic",
                    PostalCode: sdk.String("40623-4148"),
                    StateOrProvince: sdk.String("magnam"),
                    Street: sdk.String("45129 Gustave Throughway"),
                    Street2: sdk.String("excepturi"),
                },
                RegisteredAddress: shared.Address{
                    City: sdk.String("Gary"),
                    Country: "Vanuatu",
                    PostalCode: sdk.String("94733-3034"),
                    StateOrProvince: sdk.String("quo"),
                    Street: sdk.String("91309 Ankunding Branch"),
                    Street2: sdk.String("deleniti"),
                },
                RegistrationNumber: sdk.String("impedit"),
                StockData: &shared.StockData{
                    MarketIdentifier: sdk.String("aliquam"),
                    StockNumber: sdk.String("fugit"),
                    TickerSymbol: sdk.String("accusamus"),
                },
                TaxInformation: []shared.TaxInformation{
                    shared.TaxInformation{
                        Country: sdk.String("Egypt"),
                        Number: sdk.String("et"),
                        Type: sdk.String("dolorum"),
                    },
                },
                TaxReportingClassification: &shared.TaxReportingClassification{
                    BusinessType: shared.TaxReportingClassificationBusinessTypeEnumInternationalOrganization.ToPointer(),
                    FinancialInstitutionNumber: sdk.String("placeat"),
                    MainSourceOfIncome: shared.TaxReportingClassificationMainSourceOfIncomeEnumRealEstateSales.ToPointer(),
                    Type: shared.TaxReportingClassificationTypeEnumFinancialNonReportable.ToPointer(),
                },
                Type: shared.OrganizationTypeEnumListedPublicCompany.ToPointer(),
                VatAbsenceReason: shared.OrganizationVatAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
                VatNumber: sdk.String("quas"),
                WebData: &shared.WebDataInput{
                    WebAddress: sdk.String("assumenda"),
                },
            },
            Reference: sdk.String("nulla"),
            SoleProprietorship: &shared.SoleProprietorship{
                CountryOfGoverningLaw: "voluptas",
                DateOfIncorporation: sdk.String("libero"),
                DoingBusinessAs: sdk.String("quasi"),
                Name: "Carrie Cole IV",
                PrincipalPlaceOfBusiness: &shared.Address{
                    City: sdk.String("South Devyn"),
                    Country: "Kenya",
                    PostalCode: sdk.String("56468"),
                    StateOrProvince: sdk.String("ut"),
                    Street: sdk.String("3815 Bogan Cape"),
                    Street2: sdk.String("id"),
                },
                RegisteredAddress: shared.Address{
                    City: sdk.String("DuBuquefort"),
                    Country: "Suriname",
                    PostalCode: sdk.String("62130-5028"),
                    StateOrProvince: sdk.String("ipsam"),
                    Street: sdk.String("17490 Schmidt Lock"),
                    Street2: sdk.String("inventore"),
                },
                RegistrationNumber: sdk.String("nihil"),
                VatAbsenceReason: shared.SoleProprietorshipVatAbsenceReasonEnumBelowTaxThreshold.ToPointer(),
                VatNumber: sdk.String("accusamus"),
            },
            Type: shared.LegalEntityInfoTypeEnumOrganization.ToPointer(),
        },
        ID: "796f2a70-c688-4282-aa48-2562f222e981",
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
                JobTitle: sdk.String("Chief Accountability Executive"),
                LegalEntityID: "esse",
                Type: shared.LegalEntityAssociationTypeEnumUboThroughOwnership,
            },
            shared.LegalEntityAssociationInput{
                JobTitle: sdk.String("Legacy Accountability Coordinator"),
                LegalEntityID: "quasi",
                Type: shared.LegalEntityAssociationTypeEnumUltimateParentCompany,
            },
        },
        Individual: &shared.IndividualInput{
            BirthData: &shared.BirthData{
                DateOfBirth: sdk.String("vel"),
            },
            Email: sdk.String("Jared.Price@hotmail.com"),
            IdentificationData: &shared.IdentificationData{
                CardNumber: sdk.String("distinctio"),
                ExpiryDate: sdk.String("eligendi"),
                IssuerCountry: sdk.String("sit"),
                IssuerState: sdk.String("culpa"),
                NationalIDExempt: sdk.Bool(false),
                Number: sdk.String("tempore"),
                Type: shared.IdentificationDataTypeEnumNationalIDNumber,
            },
            Name: shared.Name{
                FirstName: "Obie",
                Infix: sdk.String("consequuntur"),
                LastName: "Altenwerth",
            },
            Nationality: sdk.String("minus"),
            Phone: &shared.PhoneNumber{
                Number: "quaerat",
                Type: sdk.String("sapiente"),
            },
            ResidentialAddress: shared.Address{
                City: sdk.String("South Joana"),
                Country: "Montenegro",
                PostalCode: sdk.String("85409-6588"),
                StateOrProvince: sdk.String("quia"),
                Street: sdk.String("980 Aurelie Path"),
                Street2: sdk.String("culpa"),
            },
            TaxInformation: []shared.TaxInformation{
                shared.TaxInformation{
                    Country: sdk.String("United States Minor Outlying Islands"),
                    Number: sdk.String("quae"),
                    Type: sdk.String("earum"),
                },
                shared.TaxInformation{
                    Country: sdk.String("Isle of Man"),
                    Number: sdk.String("in"),
                    Type: sdk.String("eius"),
                },
            },
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("libero"),
            },
        },
        Organization: &shared.OrganizationInput{
            DateOfIncorporation: sdk.String("illum"),
            Description: sdk.String("soluta"),
            DoingBusinessAs: sdk.String("accusantium"),
            Email: sdk.String("Veronica.Carter@gmail.com"),
            LegalName: "ullam",
            Phone: &shared.PhoneNumber{
                Number: "nisi",
                Type: sdk.String("aut"),
            },
            PrincipalPlaceOfBusiness: &shared.Address{
                City: sdk.String("Christophaven"),
                Country: "Iceland",
                PostalCode: sdk.String("96069-0804"),
                StateOrProvince: sdk.String("ipsa"),
                Street: sdk.String("02268 Joyce Bridge"),
                Street2: sdk.String("laudantium"),
            },
            RegisteredAddress: shared.Address{
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
            TaxInformation: []shared.TaxInformation{
                shared.TaxInformation{
                    Country: sdk.String("South Georgia and the South Sandwich Islands"),
                    Number: sdk.String("officia"),
                    Type: sdk.String("maxime"),
                },
            },
            TaxReportingClassification: &shared.TaxReportingClassification{
                BusinessType: shared.TaxReportingClassificationBusinessTypeEnumSubsidiaryOfListedPublicCompany.ToPointer(),
                FinancialInstitutionNumber: sdk.String("officia"),
                MainSourceOfIncome: shared.TaxReportingClassificationMainSourceOfIncomeEnumOther.ToPointer(),
                Type: shared.TaxReportingClassificationTypeEnumFinancialNonReportable.ToPointer(),
            },
            Type: shared.OrganizationTypeEnumAssociationIncorporated.ToPointer(),
            VatAbsenceReason: shared.OrganizationVatAbsenceReasonEnumIndustryExemption.ToPointer(),
            VatNumber: sdk.String("porro"),
            WebData: &shared.WebDataInput{
                WebAddress: sdk.String("quod"),
            },
        },
        Reference: sdk.String("labore"),
        SoleProprietorship: &shared.SoleProprietorship{
            CountryOfGoverningLaw: "ab",
            DateOfIncorporation: sdk.String("adipisci"),
            DoingBusinessAs: sdk.String("fuga"),
            Name: "Ricardo Franecki",
            PrincipalPlaceOfBusiness: &shared.Address{
                City: sdk.String("Lynn"),
                Country: "Swaziland",
                PostalCode: sdk.String("45428"),
                StateOrProvince: sdk.String("facilis"),
                Street: sdk.String("443 Shields Harbors"),
                Street2: sdk.String("recusandae"),
            },
            RegisteredAddress: shared.Address{
                City: sdk.String("North Myrtice"),
                Country: "Denmark",
                PostalCode: sdk.String("39829"),
                StateOrProvince: sdk.String("suscipit"),
                Street: sdk.String("698 Bo Well"),
                Street2: sdk.String("adipisci"),
            },
            RegistrationNumber: sdk.String("non"),
            VatAbsenceReason: shared.SoleProprietorshipVatAbsenceReasonEnumIndustryExemption.ToPointer(),
            VatNumber: sdk.String("beatae"),
        },
        Type: shared.LegalEntityInfoRequiredTypeTypeEnumSoleProprietorship,
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
