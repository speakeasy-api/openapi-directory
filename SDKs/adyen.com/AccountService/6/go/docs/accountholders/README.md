# AccountHolders

### Available Operations

* [PostCloseAccountHolder](#postcloseaccountholder) - Close an account holder
* [PostCloseStores](#postclosestores) - Close stores
* [PostCreateAccountHolder](#postcreateaccountholder) - Create an account holder
* [PostGetAccountHolder](#postgetaccountholder) - Get an account holder
* [PostGetTaxForm](#postgettaxform) - Get a tax form
* [PostSuspendAccountHolder](#postsuspendaccountholder) - Suspend an account holder
* [PostUnSuspendAccountHolder](#postunsuspendaccountholder) - Unsuspend an account holder
* [PostUpdateAccountHolder](#postupdateaccountholder) - Update an account holder
* [PostUpdateAccountHolderState](#postupdateaccountholderstate) - Update payout or processing state

## PostCloseAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.

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
    res, err := s.AccountHolders.PostCloseAccountHolder(ctx, shared.CloseAccountHolderRequest{
        AccountHolderCode: "provident",
    }, operations.PostCloseAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostCloseStores

Closes stores associated with an account holder.

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
    res, err := s.AccountHolders.PostCloseStores(ctx, shared.CloseStoresRequest{
        AccountHolderCode: "distinctio",
        Stores: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
    }, operations.PostCloseStoresSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostCreateAccountHolder

Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).

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
    res, err := s.AccountHolders.PostCreateAccountHolder(ctx, shared.CreateAccountHolderRequest{
        AccountHolderCode: "vel",
        AccountHolderDetails: shared.AccountHolderDetails{
            Address: &shared.ViasAddress{
                City: sdk.String("Oberbrunnerbury"),
                Country: sdk.String("Jamaica"),
                HouseNumberOrName: sdk.String("magnam"),
                PostalCode: sdk.String("09234-7854"),
                StateOrProvince: sdk.String("excepturi"),
                Street: sdk.String("9803 Lydia Bridge"),
            },
            BankAccountDetails: []shared.BankAccountDetail{
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("repellendus"),
                    AccountType: sdk.String("sapiente"),
                    BankAccountName: sdk.String("quo"),
                    BankAccountReference: sdk.String("odit"),
                    BankAccountUUID: sdk.String("at"),
                    BankBicSwift: sdk.String("at"),
                    BankCity: sdk.String("maiores"),
                    BankCode: sdk.String("molestiae"),
                    BankName: sdk.String("quod"),
                    BranchCode: sdk.String("quod"),
                    CheckCode: sdk.String("esse"),
                    CountryCode: sdk.String("LK"),
                    CurrencyCode: sdk.String("porro"),
                    Iban: sdk.String("dolorum"),
                    OwnerCity: sdk.String("dicta"),
                    OwnerCountryCode: sdk.String("nam"),
                    OwnerDateOfBirth: sdk.String("officia"),
                    OwnerHouseNumberOrName: sdk.String("occaecati"),
                    OwnerName: sdk.String("fugit"),
                    OwnerNationality: sdk.String("deleniti"),
                    OwnerPostalCode: sdk.String("hic"),
                    OwnerState: sdk.String("optio"),
                    OwnerStreet: sdk.String("totam"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("beatae"),
                    URLForVerification: sdk.String("commodi"),
                },
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("molestiae"),
                    AccountType: sdk.String("modi"),
                    BankAccountName: sdk.String("qui"),
                    BankAccountReference: sdk.String("impedit"),
                    BankAccountUUID: sdk.String("cum"),
                    BankBicSwift: sdk.String("esse"),
                    BankCity: sdk.String("ipsum"),
                    BankCode: sdk.String("excepturi"),
                    BankName: sdk.String("aspernatur"),
                    BranchCode: sdk.String("perferendis"),
                    CheckCode: sdk.String("ad"),
                    CountryCode: sdk.String("MU"),
                    CurrencyCode: sdk.String("sed"),
                    Iban: sdk.String("iste"),
                    OwnerCity: sdk.String("dolor"),
                    OwnerCountryCode: sdk.String("natus"),
                    OwnerDateOfBirth: sdk.String("laboriosam"),
                    OwnerHouseNumberOrName: sdk.String("hic"),
                    OwnerName: sdk.String("saepe"),
                    OwnerNationality: sdk.String("fuga"),
                    OwnerPostalCode: sdk.String("in"),
                    OwnerState: sdk.String("corporis"),
                    OwnerStreet: sdk.String("iste"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("iure"),
                    URLForVerification: sdk.String("saepe"),
                },
            },
            BankAggregatorDataReference: sdk.String("quidem"),
            BusinessDetails: &shared.BusinessDetails{
                DoingBusinessAs: sdk.String("architecto"),
                LegalBusinessName: sdk.String("ipsa"),
                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("O'Harachester"),
                            Country: sdk.String("Chad"),
                            HouseNumberOrName: sdk.String("dolorem"),
                            PostalCode: sdk.String("17363"),
                            StateOrProvince: sdk.String("minima"),
                            Street: sdk.String("0469 Brakus Plain"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("dolorem"),
                            RegistrationNumber: sdk.String("culpa"),
                            StockExchange: sdk.String("consequuntur"),
                            StockNumber: sdk.String("repellat"),
                            StockTicker: sdk.String("mollitia"),
                        },
                        UltimateParentCompanyCode: sdk.String("occaecati"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("South Jamil"),
                            Country: sdk.String("Kuwait"),
                            HouseNumberOrName: sdk.String("velit"),
                            PostalCode: sdk.String("13166-3171"),
                            StateOrProvince: sdk.String("tenetur"),
                            Street: sdk.String("6800 Smitham Points"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("quasi"),
                            RegistrationNumber: sdk.String("reiciendis"),
                            StockExchange: sdk.String("voluptatibus"),
                            StockNumber: sdk.String("vero"),
                            StockTicker: sdk.String("nihil"),
                        },
                        UltimateParentCompanyCode: sdk.String("praesentium"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Baltimore"),
                            Country: sdk.String("Mozambique"),
                            HouseNumberOrName: sdk.String("voluptate"),
                            PostalCode: sdk.String("00429-1324"),
                            StateOrProvince: sdk.String("dicta"),
                            Street: sdk.String("384 Bergnaum Extension"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("quidem"),
                            RegistrationNumber: sdk.String("molestias"),
                            StockExchange: sdk.String("excepturi"),
                            StockNumber: sdk.String("pariatur"),
                            StockTicker: sdk.String("modi"),
                        },
                        UltimateParentCompanyCode: sdk.String("praesentium"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Terenceland"),
                            Country: sdk.String("Turks and Caicos Islands"),
                            HouseNumberOrName: sdk.String("sint"),
                            PostalCode: sdk.String("92306"),
                            StateOrProvince: sdk.String("quibusdam"),
                            Street: sdk.String("67822 Grant Oval"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("quos"),
                            RegistrationNumber: sdk.String("perferendis"),
                            StockExchange: sdk.String("magni"),
                            StockNumber: sdk.String("assumenda"),
                            StockTicker: sdk.String("ipsam"),
                        },
                        UltimateParentCompanyCode: sdk.String("alias"),
                    },
                },
                RegistrationNumber: sdk.String("fugit"),
                Shareholders: []shared.ShareholderContact{
                    shared.ShareholderContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Dominiquecester"),
                            Country: sdk.String("Russian Federation"),
                            HouseNumberOrName: sdk.String("labore"),
                            PostalCode: sdk.String("42753-5856"),
                            StateOrProvince: sdk.String("dolor"),
                            Street: sdk.String("964 Rose Wall"),
                        },
                        Email: sdk.String("Bettye_Gulgowski41@hotmail.com"),
                        FullPhoneNumber: sdk.String("aliquid"),
                        JobTitle: sdk.String("International Accountability Engineer"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Kristian"),
                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                            Infix: sdk.String("accusamus"),
                            LastName: sdk.String("Wintheiser"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("quidem"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("nam"),
                                    IssuerCountry: sdk.String("id"),
                                    IssuerState: sdk.String("blanditiis"),
                                    Number: sdk.String("deleniti"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("amet"),
                                    IssuerCountry: sdk.String("deserunt"),
                                    IssuerState: sdk.String("nisi"),
                                    Number: sdk.String("vel"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("omnis"),
                                    IssuerCountry: sdk.String("molestiae"),
                                    IssuerState: sdk.String("perferendis"),
                                    Number: sdk.String("nihil"),
                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                },
                            },
                            Nationality: sdk.String("distinctio"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("id"),
                            PhoneNumber: sdk.String("labore"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                        },
                        ShareholderCode: sdk.String("suscipit"),
                        ShareholderReference: sdk.String("natus"),
                        ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                        WebAddress: sdk.String("eum"),
                    },
                    shared.ShareholderContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Canton"),
                            Country: sdk.String("Bolivia"),
                            HouseNumberOrName: sdk.String("magnam"),
                            PostalCode: sdk.String("53555"),
                            StateOrProvince: sdk.String("accusantium"),
                            Street: sdk.String("9634 Sophie Coves"),
                        },
                        Email: sdk.String("Avis_Kertzmann26@yahoo.com"),
                        FullPhoneNumber: sdk.String("maxime"),
                        JobTitle: sdk.String("Global Assurance Architect"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Barbara"),
                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                            Infix: sdk.String("repudiandae"),
                            LastName: sdk.String("Herman"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("expedita"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("repellat"),
                                    IssuerCountry: sdk.String("quibusdam"),
                                    IssuerState: sdk.String("sed"),
                                    Number: sdk.String("saepe"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("accusantium"),
                                    IssuerCountry: sdk.String("consequuntur"),
                                    IssuerState: sdk.String("praesentium"),
                                    Number: sdk.String("natus"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                            },
                            Nationality: sdk.String("sunt"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("quo"),
                            PhoneNumber: sdk.String("illum"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                        },
                        ShareholderCode: sdk.String("maxime"),
                        ShareholderReference: sdk.String("ea"),
                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                        WebAddress: sdk.String("odit"),
                    },
                    shared.ShareholderContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Alexanneton"),
                            Country: sdk.String("Wallis and Futuna"),
                            HouseNumberOrName: sdk.String("quidem"),
                            PostalCode: sdk.String("44708"),
                            StateOrProvince: sdk.String("nemo"),
                            Street: sdk.String("082 Norwood Harbors"),
                        },
                        Email: sdk.String("Morgan33@hotmail.com"),
                        FullPhoneNumber: sdk.String("totam"),
                        JobTitle: sdk.String("Central Brand Director"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Cody"),
                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                            Infix: sdk.String("perferendis"),
                            LastName: sdk.String("Dach"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("minus"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("dolor"),
                                    IssuerCountry: sdk.String("vero"),
                                    IssuerState: sdk.String("nostrum"),
                                    Number: sdk.String("hic"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("omnis"),
                                    IssuerCountry: sdk.String("facilis"),
                                    IssuerState: sdk.String("perspiciatis"),
                                    Number: sdk.String("voluptatem"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                            },
                            Nationality: sdk.String("consequuntur"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("blanditiis"),
                            PhoneNumber: sdk.String("error"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                        },
                        ShareholderCode: sdk.String("occaecati"),
                        ShareholderReference: sdk.String("rerum"),
                        ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                        WebAddress: sdk.String("asperiores"),
                    },
                },
                Signatories: []shared.SignatoryContact{
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("New Marielle"),
                            Country: sdk.String("Malaysia"),
                            HouseNumberOrName: sdk.String("pariatur"),
                            PostalCode: sdk.String("77935-3222"),
                            StateOrProvince: sdk.String("qui"),
                            Street: sdk.String("95744 Farrell Port"),
                        },
                        Email: sdk.String("Arvid43@gmail.com"),
                        FullPhoneNumber: sdk.String("odio"),
                        JobTitle: sdk.String("Product Accountability Developer"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Weston"),
                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                            Infix: sdk.String("natus"),
                            LastName: sdk.String("Daugherty"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("atque"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("fugiat"),
                                    IssuerCountry: sdk.String("ab"),
                                    IssuerState: sdk.String("soluta"),
                                    Number: sdk.String("dolorum"),
                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                },
                            },
                            Nationality: sdk.String("voluptate"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("dolorum"),
                            PhoneNumber: sdk.String("deleniti"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                        },
                        SignatoryCode: sdk.String("necessitatibus"),
                        SignatoryReference: sdk.String("distinctio"),
                        WebAddress: sdk.String("asperiores"),
                    },
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Curtport"),
                            Country: sdk.String("Northern Mariana Islands"),
                            HouseNumberOrName: sdk.String("saepe"),
                            PostalCode: sdk.String("10278"),
                            StateOrProvince: sdk.String("ad"),
                            Street: sdk.String("365 Rickie Manors"),
                        },
                        Email: sdk.String("Aaliyah27@yahoo.com"),
                        FullPhoneNumber: sdk.String("vel"),
                        JobTitle: sdk.String("Forward Accountability Officer"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Marilou"),
                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                            Infix: sdk.String("esse"),
                            LastName: sdk.String("Pfeffer"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("iusto"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("quisquam"),
                                    IssuerCountry: sdk.String("tenetur"),
                                    IssuerState: sdk.String("amet"),
                                    Number: sdk.String("tempore"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                            },
                            Nationality: sdk.String("numquam"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("enim"),
                            PhoneNumber: sdk.String("dolorem"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                        },
                        SignatoryCode: sdk.String("totam"),
                        SignatoryReference: sdk.String("nihil"),
                        WebAddress: sdk.String("sit"),
                    },
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Durganville"),
                            Country: sdk.String("Isle of Man"),
                            HouseNumberOrName: sdk.String("libero"),
                            PostalCode: sdk.String("64221"),
                            StateOrProvince: sdk.String("cupiditate"),
                            Street: sdk.String("871 Larson Forest"),
                        },
                        Email: sdk.String("Chandler.Raynor46@gmail.com"),
                        FullPhoneNumber: sdk.String("molestias"),
                        JobTitle: sdk.String("Internal Directives Manager"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Burdette"),
                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                            Infix: sdk.String("odio"),
                            LastName: sdk.String("Cassin"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("ullam"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("hic"),
                                    IssuerCountry: sdk.String("voluptatem"),
                                    IssuerState: sdk.String("cumque"),
                                    Number: sdk.String("soluta"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("et"),
                                    IssuerCountry: sdk.String("saepe"),
                                    IssuerState: sdk.String("ipsum"),
                                    Number: sdk.String("veritatis"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("quos"),
                                    IssuerCountry: sdk.String("tempore"),
                                    IssuerState: sdk.String("cupiditate"),
                                    Number: sdk.String("aperiam"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                            },
                            Nationality: sdk.String("dolorem"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("dolore"),
                            PhoneNumber: sdk.String("labore"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                        },
                        SignatoryCode: sdk.String("dolorum"),
                        SignatoryReference: sdk.String("architecto"),
                        WebAddress: sdk.String("quae"),
                    },
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("New Tobytown"),
                            Country: sdk.String("Oman"),
                            HouseNumberOrName: sdk.String("repellendus"),
                            PostalCode: sdk.String("92751-0545"),
                            StateOrProvince: sdk.String("voluptatibus"),
                            Street: sdk.String("863 Vida Lakes"),
                        },
                        Email: sdk.String("Shana_Wiegand@gmail.com"),
                        FullPhoneNumber: sdk.String("distinctio"),
                        JobTitle: sdk.String("Forward Applications Orchestrator"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Melody"),
                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                            Infix: sdk.String("ducimus"),
                            LastName: sdk.String("Greenholt"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("quibusdam"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("sequi"),
                                    IssuerCountry: sdk.String("natus"),
                                    IssuerState: sdk.String("impedit"),
                                    Number: sdk.String("aut"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("exercitationem"),
                                    IssuerCountry: sdk.String("nulla"),
                                    IssuerState: sdk.String("fugit"),
                                    Number: sdk.String("porro"),
                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("doloribus"),
                                    IssuerCountry: sdk.String("iusto"),
                                    IssuerState: sdk.String("eligendi"),
                                    Number: sdk.String("ducimus"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("officia"),
                                    IssuerCountry: sdk.String("tempora"),
                                    IssuerState: sdk.String("ipsam"),
                                    Number: sdk.String("ea"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                            },
                            Nationality: sdk.String("vel"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("possimus"),
                            PhoneNumber: sdk.String("magnam"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                        },
                        SignatoryCode: sdk.String("ex"),
                        SignatoryReference: sdk.String("laudantium"),
                        WebAddress: sdk.String("dicta"),
                    },
                },
                StockExchange: sdk.String("dolor"),
                StockNumber: sdk.String("maiores"),
                StockTicker: sdk.String("quasi"),
                TaxID: sdk.String("ex"),
            },
            Email: sdk.String("Keven_Wiza@hotmail.com"),
            FullPhoneNumber: sdk.String("quisquam"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Sven"),
                    Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                    Infix: sdk.String("impedit"),
                    LastName: sdk.String("Herzog"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("veniam"),
                    DocumentData: []shared.PersonalDocumentData{
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("inventore"),
                            IssuerCountry: sdk.String("magnam"),
                            IssuerState: sdk.String("ea"),
                            Number: sdk.String("quo"),
                            Type: shared.PersonalDocumentDataTypeEnumID,
                        },
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("recusandae"),
                            IssuerCountry: sdk.String("aspernatur"),
                            IssuerState: sdk.String("minima"),
                            Number: sdk.String("eaque"),
                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                        },
                    },
                    Nationality: sdk.String("libero"),
                },
            },
            LastReviewDate: sdk.String("aut"),
            LegalArrangements: []shared.LegalArrangementDetail{
                shared.LegalArrangementDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Olafborough"),
                        Country: sdk.String("Cambodia"),
                        HouseNumberOrName: sdk.String("accusamus"),
                        PostalCode: sdk.String("20668"),
                        StateOrProvince: sdk.String("velit"),
                        Street: sdk.String("4758 Hoeger Ridge"),
                    },
                    LegalArrangementCode: sdk.String("quasi"),
                    LegalArrangementEntities: []shared.LegalArrangementEntityDetail{
                        shared.LegalArrangementEntityDetail{
                            Address: &shared.ViasAddress{
                                City: sdk.String("East Larissa"),
                                Country: sdk.String("Austria"),
                                HouseNumberOrName: sdk.String("molestiae"),
                                PostalCode: sdk.String("42445"),
                                StateOrProvince: sdk.String("fuga"),
                                Street: sdk.String("6824 Reyna Dam"),
                            },
                            BusinessDetails: &shared.BusinessDetails{
                                DoingBusinessAs: sdk.String("praesentium"),
                                LegalBusinessName: sdk.String("quisquam"),
                                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Lake Mavisberg"),
                                            Country: sdk.String("Sao Tome and Principe"),
                                            HouseNumberOrName: sdk.String("illum"),
                                            PostalCode: sdk.String("62130-5028"),
                                            StateOrProvince: sdk.String("ipsam"),
                                            Street: sdk.String("17490 Schmidt Lock"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("inventore"),
                                            RegistrationNumber: sdk.String("nihil"),
                                            StockExchange: sdk.String("totam"),
                                            StockNumber: sdk.String("accusamus"),
                                            StockTicker: sdk.String("aliquam"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("odio"),
                                    },
                                },
                                RegistrationNumber: sdk.String("occaecati"),
                                Shareholders: []shared.ShareholderContact{
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Chicago"),
                                            Country: sdk.String("Niger"),
                                            HouseNumberOrName: sdk.String("molestiae"),
                                            PostalCode: sdk.String("74551"),
                                            StateOrProvince: sdk.String("deleniti"),
                                            Street: sdk.String("66251 Gladys Creek"),
                                        },
                                        Email: sdk.String("Carol90@hotmail.com"),
                                        FullPhoneNumber: sdk.String("occaecati"),
                                        JobTitle: sdk.String("Global Security Architect"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Talon"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("veritatis"),
                                            LastName: sdk.String("Koch"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("quod"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("vero"),
                                                    IssuerCountry: sdk.String("aliquid"),
                                                    IssuerState: sdk.String("quasi"),
                                                    Number: sdk.String("saepe"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("harum"),
                                                    IssuerCountry: sdk.String("molestiae"),
                                                    IssuerState: sdk.String("rerum"),
                                                    Number: sdk.String("occaecati"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("distinctio"),
                                                    IssuerCountry: sdk.String("eligendi"),
                                                    IssuerState: sdk.String("sit"),
                                                    Number: sdk.String("culpa"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                            },
                                            Nationality: sdk.String("adipisci"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("cumque"),
                                            PhoneNumber: sdk.String("consequuntur"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("minus"),
                                        ShareholderReference: sdk.String("quaerat"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                                        WebAddress: sdk.String("consectetur"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Joanastead"),
                                            Country: sdk.String("Uruguay"),
                                            HouseNumberOrName: sdk.String("nulla"),
                                            PostalCode: sdk.String("40965-8819"),
                                            StateOrProvince: sdk.String("asperiores"),
                                            Street: sdk.String("010 Nader Inlet"),
                                        },
                                        Email: sdk.String("Angie.Wehner@hotmail.com"),
                                        FullPhoneNumber: sdk.String("eius"),
                                        JobTitle: sdk.String("Legacy Configuration Producer"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Alexie"),
                                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                            Infix: sdk.String("sapiente"),
                                            LastName: sdk.String("Carter"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("ullam"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("ullam"),
                                                    IssuerCountry: sdk.String("nisi"),
                                                    IssuerState: sdk.String("aut"),
                                                    Number: sdk.String("voluptatum"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("quibusdam"),
                                                    IssuerCountry: sdk.String("ex"),
                                                    IssuerState: sdk.String("deleniti"),
                                                    Number: sdk.String("itaque"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                            },
                                            Nationality: sdk.String("architecto"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("omnis"),
                                            PhoneNumber: sdk.String("tenetur"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("at"),
                                        ShareholderReference: sdk.String("et"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("ipsa"),
                                    },
                                },
                                Signatories: []shared.SignatoryContact{
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("East Dasiafurt"),
                                            Country: sdk.String("Sri Lanka"),
                                            HouseNumberOrName: sdk.String("accusantium"),
                                            PostalCode: sdk.String("05460-5202"),
                                            StateOrProvince: sdk.String("occaecati"),
                                            Street: sdk.String("71304 William Pass"),
                                        },
                                        Email: sdk.String("Webster.Hirthe40@gmail.com"),
                                        FullPhoneNumber: sdk.String("quaerat"),
                                        JobTitle: sdk.String("Corporate Creative Orchestrator"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Raegan"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("officia"),
                                            LastName: sdk.String("Yundt"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("nemo"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("quaerat"),
                                                    IssuerCountry: sdk.String("porro"),
                                                    IssuerState: sdk.String("quod"),
                                                    Number: sdk.String("labore"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                            },
                                            Nationality: sdk.String("adipisci"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("fuga"),
                                            PhoneNumber: sdk.String("id"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("velit"),
                                        SignatoryReference: sdk.String("culpa"),
                                        WebAddress: sdk.String("est"),
                                    },
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Lynn"),
                                            Country: sdk.String("Swaziland"),
                                            HouseNumberOrName: sdk.String("vel"),
                                            PostalCode: sdk.String("54287"),
                                            StateOrProvince: sdk.String("cum"),
                                            Street: sdk.String("4398 Tia Inlet"),
                                        },
                                        Email: sdk.String("Myrtice.Feest@gmail.com"),
                                        FullPhoneNumber: sdk.String("earum"),
                                        JobTitle: sdk.String("Internal Functionality Strategist"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Georgianna"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("quidem"),
                                            LastName: sdk.String("Ullrich"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("necessitatibus"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("sunt"),
                                                    IssuerCountry: sdk.String("asperiores"),
                                                    IssuerState: sdk.String("adipisci"),
                                                    Number: sdk.String("non"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("beatae"),
                                                    IssuerCountry: sdk.String("dignissimos"),
                                                    IssuerState: sdk.String("a"),
                                                    Number: sdk.String("debitis"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                            },
                                            Nationality: sdk.String("corporis"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("harum"),
                                            PhoneNumber: sdk.String("laboriosam"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("voluptates"),
                                        SignatoryReference: sdk.String("libero"),
                                        WebAddress: sdk.String("vitae"),
                                    },
                                },
                                StockExchange: sdk.String("accusamus"),
                                StockNumber: sdk.String("similique"),
                                StockTicker: sdk.String("tempora"),
                                TaxID: sdk.String("aspernatur"),
                            },
                            Email: sdk.String("Garland74@yahoo.com"),
                            FullPhoneNumber: sdk.String("dolorum"),
                            IndividualDetails: &shared.IndividualDetails{
                                Name: &shared.ViasName{
                                    FirstName: sdk.String("David"),
                                    Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                    Infix: sdk.String("dolores"),
                                    LastName: sdk.String("Labadie"),
                                },
                                PersonalData: &shared.ViasPersonalData{
                                    DateOfBirth: sdk.String("in"),
                                    DocumentData: []shared.PersonalDocumentData{
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aliquam"),
                                            IssuerCountry: sdk.String("officiis"),
                                            IssuerState: sdk.String("temporibus"),
                                            Number: sdk.String("ullam"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("cum"),
                                            IssuerCountry: sdk.String("blanditiis"),
                                            IssuerState: sdk.String("quas"),
                                            Number: sdk.String("hic"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    Nationality: sdk.String("culpa"),
                                },
                            },
                            LegalArrangementEntityCode: sdk.String("corrupti"),
                            LegalArrangementEntityReference: sdk.String("pariatur"),
                            LegalArrangementMembers: []shared.LegalArrangementEntityDetailLegalArrangementMembersEnum{
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumTrustee,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumPartner,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumShareholder,
                            },
                            LegalEntityType: shared.LegalArrangementEntityDetailLegalEntityTypeEnumBusiness.ToPointer(),
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("rerum"),
                                PhoneNumber: sdk.String("sed"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            WebAddress: sdk.String("explicabo"),
                        },
                        shared.LegalArrangementEntityDetail{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Port Arthur"),
                                Country: sdk.String("Kazakhstan"),
                                HouseNumberOrName: sdk.String("expedita"),
                                PostalCode: sdk.String("62614"),
                                StateOrProvince: sdk.String("commodi"),
                                Street: sdk.String("136 Geovany Vista"),
                            },
                            BusinessDetails: &shared.BusinessDetails{
                                DoingBusinessAs: sdk.String("debitis"),
                                LegalBusinessName: sdk.String("illo"),
                                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("New Wilfridboro"),
                                            Country: sdk.String("Cameroon"),
                                            HouseNumberOrName: sdk.String("provident"),
                                            PostalCode: sdk.String("82455"),
                                            StateOrProvince: sdk.String("voluptatibus"),
                                            Street: sdk.String("24940 Shyann Loop"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("facilis"),
                                            RegistrationNumber: sdk.String("quaerat"),
                                            StockExchange: sdk.String("incidunt"),
                                            StockNumber: sdk.String("ipsam"),
                                            StockTicker: sdk.String("debitis"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("rem"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Port Lisaborough"),
                                            Country: sdk.String("Gibraltar"),
                                            HouseNumberOrName: sdk.String("recusandae"),
                                            PostalCode: sdk.String("81092-3481"),
                                            StateOrProvince: sdk.String("laudantium"),
                                            Street: sdk.String("5736 Mueller Village"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("expedita"),
                                            RegistrationNumber: sdk.String("debitis"),
                                            StockExchange: sdk.String("neque"),
                                            StockNumber: sdk.String("dolorum"),
                                            StockTicker: sdk.String("nostrum"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("officia"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Loweside"),
                                            Country: sdk.String("Ethiopia"),
                                            HouseNumberOrName: sdk.String("atque"),
                                            PostalCode: sdk.String("28067"),
                                            StateOrProvince: sdk.String("magnam"),
                                            Street: sdk.String("43055 Hessel Cliff"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("blanditiis"),
                                            RegistrationNumber: sdk.String("ex"),
                                            StockExchange: sdk.String("sed"),
                                            StockNumber: sdk.String("sit"),
                                            StockTicker: sdk.String("vel"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("nostrum"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("North Miami"),
                                            Country: sdk.String("Algeria"),
                                            HouseNumberOrName: sdk.String("incidunt"),
                                            PostalCode: sdk.String("26105-2656"),
                                            StateOrProvince: sdk.String("nam"),
                                            Street: sdk.String("302 Klocko Parks"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("reiciendis"),
                                            RegistrationNumber: sdk.String("provident"),
                                            StockExchange: sdk.String("repellendus"),
                                            StockNumber: sdk.String("delectus"),
                                            StockTicker: sdk.String("voluptates"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("perferendis"),
                                    },
                                },
                                RegistrationNumber: sdk.String("est"),
                                Shareholders: []shared.ShareholderContact{
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Raquelchester"),
                                            Country: sdk.String("Lithuania"),
                                            HouseNumberOrName: sdk.String("mollitia"),
                                            PostalCode: sdk.String("07905"),
                                            StateOrProvince: sdk.String("reprehenderit"),
                                            Street: sdk.String("536 Borer Land"),
                                        },
                                        Email: sdk.String("Reyna_Jenkins@gmail.com"),
                                        FullPhoneNumber: sdk.String("officiis"),
                                        JobTitle: sdk.String("Human Accountability Orchestrator"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Erling"),
                                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                            Infix: sdk.String("ex"),
                                            LastName: sdk.String("Wuckert"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("corrupti"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("error"),
                                                    IssuerCountry: sdk.String("blanditiis"),
                                                    IssuerState: sdk.String("suscipit"),
                                                    Number: sdk.String("repudiandae"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("atque"),
                                                    IssuerCountry: sdk.String("sunt"),
                                                    IssuerState: sdk.String("recusandae"),
                                                    Number: sdk.String("dolorum"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("labore"),
                                                    IssuerCountry: sdk.String("reiciendis"),
                                                    IssuerState: sdk.String("doloremque"),
                                                    Number: sdk.String("repudiandae"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("accusantium"),
                                                    IssuerCountry: sdk.String("beatae"),
                                                    IssuerState: sdk.String("dolores"),
                                                    Number: sdk.String("enim"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                            },
                                            Nationality: sdk.String("velit"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("a"),
                                            PhoneNumber: sdk.String("molestias"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("saepe"),
                                        ShareholderReference: sdk.String("consequuntur"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("officiis"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Isabelleburgh"),
                                            Country: sdk.String("Tunisia"),
                                            HouseNumberOrName: sdk.String("occaecati"),
                                            PostalCode: sdk.String("16346"),
                                            StateOrProvince: sdk.String("illo"),
                                            Street: sdk.String("6928 Hosea Cape"),
                                        },
                                        Email: sdk.String("Angelica.Krajcik73@yahoo.com"),
                                        FullPhoneNumber: sdk.String("iure"),
                                        JobTitle: sdk.String("Human Directives Technician"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Micheal"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("rem"),
                                            LastName: sdk.String("Haag"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("ad"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("alias"),
                                                    IssuerCountry: sdk.String("corporis"),
                                                    IssuerState: sdk.String("perspiciatis"),
                                                    Number: sdk.String("nihil"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("voluptas"),
                                                    IssuerCountry: sdk.String("alias"),
                                                    IssuerState: sdk.String("maiores"),
                                                    Number: sdk.String("reiciendis"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("id"),
                                                    IssuerCountry: sdk.String("minima"),
                                                    IssuerState: sdk.String("dolore"),
                                                    Number: sdk.String("dolorum"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("quae"),
                                                    IssuerCountry: sdk.String("recusandae"),
                                                    IssuerState: sdk.String("omnis"),
                                                    Number: sdk.String("quaerat"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                            },
                                            Nationality: sdk.String("ex"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("ut"),
                                            PhoneNumber: sdk.String("culpa"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("debitis"),
                                        ShareholderReference: sdk.String("laudantium"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("nemo"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Knoxville"),
                                            Country: sdk.String("Montenegro"),
                                            HouseNumberOrName: sdk.String("quis"),
                                            PostalCode: sdk.String("95130"),
                                            StateOrProvince: sdk.String("animi"),
                                            Street: sdk.String("6586 Grady Burgs"),
                                        },
                                        Email: sdk.String("Winfield_Herman@hotmail.com"),
                                        FullPhoneNumber: sdk.String("earum"),
                                        JobTitle: sdk.String("Investor Branding Assistant"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Dixie"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("molestias"),
                                            LastName: sdk.String("Towne"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("sapiente"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("vitae"),
                                                    IssuerCountry: sdk.String("rerum"),
                                                    IssuerState: sdk.String("tempora"),
                                                    Number: sdk.String("quis"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("fugit"),
                                                    IssuerCountry: sdk.String("cumque"),
                                                    IssuerState: sdk.String("quae"),
                                                    Number: sdk.String("perferendis"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("aspernatur"),
                                                    IssuerCountry: sdk.String("eum"),
                                                    IssuerState: sdk.String("eius"),
                                                    Number: sdk.String("rem"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("impedit"),
                                                    IssuerCountry: sdk.String("eos"),
                                                    IssuerState: sdk.String("sapiente"),
                                                    Number: sdk.String("eum"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                            },
                                            Nationality: sdk.String("minima"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("beatae"),
                                            PhoneNumber: sdk.String("cupiditate"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("earum"),
                                        ShareholderReference: sdk.String("soluta"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                                        WebAddress: sdk.String("illum"),
                                    },
                                },
                                Signatories: []shared.SignatoryContact{
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("National City"),
                                            Country: sdk.String("Wallis and Futuna"),
                                            HouseNumberOrName: sdk.String("debitis"),
                                            PostalCode: sdk.String("73217"),
                                            StateOrProvince: sdk.String("fuga"),
                                            Street: sdk.String("68800 Jesse Pass"),
                                        },
                                        Email: sdk.String("Geovanny16@yahoo.com"),
                                        FullPhoneNumber: sdk.String("doloribus"),
                                        JobTitle: sdk.String("Human Interactions Associate"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Donato"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("molestiae"),
                                            LastName: sdk.String("Buckridge"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("iusto"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("praesentium"),
                                                    IssuerCountry: sdk.String("maiores"),
                                                    IssuerState: sdk.String("reiciendis"),
                                                    Number: sdk.String("vel"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("fugiat"),
                                                    IssuerCountry: sdk.String("doloremque"),
                                                    IssuerState: sdk.String("dicta"),
                                                    Number: sdk.String("odio"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                            },
                                            Nationality: sdk.String("esse"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("ex"),
                                            PhoneNumber: sdk.String("consectetur"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("ipsa"),
                                        SignatoryReference: sdk.String("laborum"),
                                        WebAddress: sdk.String("sunt"),
                                    },
                                },
                                StockExchange: sdk.String("nostrum"),
                                StockNumber: sdk.String("fugiat"),
                                StockTicker: sdk.String("expedita"),
                                TaxID: sdk.String("aliquid"),
                            },
                            Email: sdk.String("Georgiana43@yahoo.com"),
                            FullPhoneNumber: sdk.String("voluptas"),
                            IndividualDetails: &shared.IndividualDetails{
                                Name: &shared.ViasName{
                                    FirstName: sdk.String("Leta"),
                                    Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                    Infix: sdk.String("ab"),
                                    LastName: sdk.String("Muller"),
                                },
                                PersonalData: &shared.ViasPersonalData{
                                    DateOfBirth: sdk.String("possimus"),
                                    DocumentData: []shared.PersonalDocumentData{
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("mollitia"),
                                            IssuerCountry: sdk.String("laborum"),
                                            IssuerState: sdk.String("libero"),
                                            Number: sdk.String("ad"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("enim"),
                                            IssuerCountry: sdk.String("vitae"),
                                            IssuerState: sdk.String("repellendus"),
                                            Number: sdk.String("ex"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("ex"),
                                            IssuerCountry: sdk.String("ut"),
                                            IssuerState: sdk.String("ad"),
                                            Number: sdk.String("expedita"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("molestias"),
                                            IssuerCountry: sdk.String("cum"),
                                            IssuerState: sdk.String("aliquid"),
                                            Number: sdk.String("beatae"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                    Nationality: sdk.String("omnis"),
                                },
                            },
                            LegalArrangementEntityCode: sdk.String("veritatis"),
                            LegalArrangementEntityReference: sdk.String("rerum"),
                            LegalArrangementMembers: []shared.LegalArrangementEntityDetailLegalArrangementMembersEnum{
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumSettlor,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumBeneficiary,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumTrustee,
                            },
                            LegalEntityType: shared.LegalArrangementEntityDetailLegalEntityTypeEnumPublicCompany.ToPointer(),
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("architecto"),
                                PhoneNumber: sdk.String("fuga"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            WebAddress: sdk.String("debitis"),
                        },
                    },
                    LegalArrangementReference: sdk.String("voluptatem"),
                    LegalForm: shared.LegalArrangementDetailLegalFormEnumCashManagementTrust.ToPointer(),
                    Name: "Darin Jakubowski",
                    RegistrationNumber: sdk.String("minus"),
                    TaxNumber: sdk.String("nemo"),
                    Type: shared.LegalArrangementDetailTypeEnumTrust,
                },
            },
            MerchantCategoryCode: sdk.String("ratione"),
            Metadata: map[string]string{
                "perferendis": "illum",
                "totam": "impedit",
            },
            PayoutMethods: []shared.PayoutMethod{
                shared.PayoutMethod{
                    MerchantAccount: "nam",
                    PayoutMethodCode: sdk.String("ipsam"),
                    PayoutMethodReference: sdk.String("culpa"),
                    RecurringDetailReference: "dolor",
                    ShopperReference: "aliquam",
                },
                shared.PayoutMethod{
                    MerchantAccount: "inventore",
                    PayoutMethodCode: sdk.String("deleniti"),
                    PayoutMethodReference: sdk.String("veritatis"),
                    RecurringDetailReference: "tempora",
                    ShopperReference: "dolor",
                },
                shared.PayoutMethod{
                    MerchantAccount: "consequatur",
                    PayoutMethodCode: sdk.String("architecto"),
                    PayoutMethodReference: sdk.String("sit"),
                    RecurringDetailReference: "modi",
                    ShopperReference: "fugit",
                },
                shared.PayoutMethod{
                    MerchantAccount: "ab",
                    PayoutMethodCode: sdk.String("laudantium"),
                    PayoutMethodReference: sdk.String("quae"),
                    RecurringDetailReference: "dolor",
                    ShopperReference: "fugiat",
                },
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("East Amy"),
                Country: sdk.String("Mauritania"),
                HouseNumberOrName: sdk.String("eveniet"),
                PostalCode: sdk.String("84813-1744"),
                StateOrProvince: sdk.String("voluptatum"),
                Street: sdk.String("30747 Timmothy Crossing"),
            },
            StoreDetails: []shared.StoreDetail{
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Fort Austin"),
                        Country: sdk.String("Hong Kong"),
                        HouseNumberOrName: sdk.String("at"),
                        PostalCode: sdk.String("66199-7534"),
                        StateOrProvince: sdk.String("blanditiis"),
                        Street: sdk.String("3235 Brendon Locks"),
                    },
                    FullPhoneNumber: sdk.String("nesciunt"),
                    Logo: sdk.String("fuga"),
                    MerchantAccount: "laudantium",
                    MerchantCategoryCode: "incidunt",
                    MerchantHouseNumber: sdk.String("quasi"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("rem"),
                        PhoneNumber: sdk.String("fugiat"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumEcommerce.ToPointer(),
                    SplitConfigurationUUID: sdk.String("consequuntur"),
                    Status: shared.StoreDetailStatusEnumClosed.ToPointer(),
                    Store: sdk.String("aperiam"),
                    StoreName: sdk.String("cupiditate"),
                    StoreReference: sdk.String("reiciendis"),
                    VirtualAccount: sdk.String("soluta"),
                    WebAddress: sdk.String("alias"),
                },
            },
            WebAddress: sdk.String("omnis"),
        },
        CreateDefaultAccount: sdk.Bool(false),
        Description: sdk.String("eos"),
        LegalEntity: shared.CreateAccountHolderRequestLegalEntityEnumNonProfit,
        PrimaryCurrency: sdk.String("iste"),
        ProcessingTier: sdk.Int(170099),
        VerificationProfile: sdk.String("inventore"),
    }, operations.PostCreateAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostGetAccountHolder

Returns the details of an account holder.

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
    res, err := s.AccountHolders.PostGetAccountHolder(ctx, shared.GetAccountHolderRequest{
        AccountCode: sdk.String("fuga"),
        AccountHolderCode: sdk.String("accusamus"),
        ShowDetails: sdk.Bool(false),
    }, operations.PostGetAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostGetTaxForm

Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).

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
    res, err := s.AccountHolders.PostGetTaxForm(ctx, shared.GetTaxFormRequest{
        AccountHolderCode: "voluptatibus",
        FormType: "distinctio",
        Year: 608593,
    }, operations.PostGetTaxFormSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTaxFormResponse != nil {
        // handle response
    }
}
```

## PostSuspendAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Suspended**.

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
    res, err := s.AccountHolders.PostSuspendAccountHolder(ctx, shared.SuspendAccountHolderRequest{
        AccountHolderCode: "delectus",
    }, operations.PostSuspendAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuspendAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostUnSuspendAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. 
Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.

You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).

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
    res, err := s.AccountHolders.PostUnSuspendAccountHolder(ctx, shared.UnSuspendAccountHolderRequest{
        AccountHolderCode: "minima",
    }, operations.PostUnSuspendAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnSuspendAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostUpdateAccountHolder

Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.

When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:

* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.

When updating any field in the following objects, you must submit all the fields required for validation:

 * `address`

* `fullPhoneNumber`

* `bankAccountDetails.BankAccountDetail`

* `businessDetails.shareholders.ShareholderContact`

 For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.



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
    res, err := s.AccountHolders.PostUpdateAccountHolder(ctx, shared.UpdateAccountHolderRequest{
        AccountHolderCode: "praesentium",
        AccountHolderDetails: &shared.AccountHolderDetails{
            Address: &shared.ViasAddress{
                City: sdk.String("Fall River"),
                Country: sdk.String("Sri Lanka"),
                HouseNumberOrName: sdk.String("quos"),
                PostalCode: sdk.String("94592"),
                StateOrProvince: sdk.String("nam"),
                Street: sdk.String("034 Aurelia Fields"),
            },
            BankAccountDetails: []shared.BankAccountDetail{
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("enim"),
                    AccountType: sdk.String("sint"),
                    BankAccountName: sdk.String("nulla"),
                    BankAccountReference: sdk.String("deserunt"),
                    BankAccountUUID: sdk.String("esse"),
                    BankBicSwift: sdk.String("nemo"),
                    BankCity: sdk.String("reprehenderit"),
                    BankCode: sdk.String("est"),
                    BankName: sdk.String("quis"),
                    BranchCode: sdk.String("sint"),
                    CheckCode: sdk.String("accusamus"),
                    CountryCode: sdk.String("SA"),
                    CurrencyCode: sdk.String("hic"),
                    Iban: sdk.String("necessitatibus"),
                    OwnerCity: sdk.String("asperiores"),
                    OwnerCountryCode: sdk.String("ex"),
                    OwnerDateOfBirth: sdk.String("voluptas"),
                    OwnerHouseNumberOrName: sdk.String("debitis"),
                    OwnerName: sdk.String("delectus"),
                    OwnerNationality: sdk.String("quae"),
                    OwnerPostalCode: sdk.String("minus"),
                    OwnerState: sdk.String("fuga"),
                    OwnerStreet: sdk.String("laborum"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("consectetur"),
                    URLForVerification: sdk.String("velit"),
                },
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("atque"),
                    AccountType: sdk.String("ipsum"),
                    BankAccountName: sdk.String("impedit"),
                    BankAccountReference: sdk.String("magni"),
                    BankAccountUUID: sdk.String("soluta"),
                    BankBicSwift: sdk.String("repudiandae"),
                    BankCity: sdk.String("nam"),
                    BankCode: sdk.String("dolore"),
                    BankName: sdk.String("iusto"),
                    BranchCode: sdk.String("voluptate"),
                    CheckCode: sdk.String("sequi"),
                    CountryCode: sdk.String("KW"),
                    CurrencyCode: sdk.String("neque"),
                    Iban: sdk.String("quo"),
                    OwnerCity: sdk.String("deleniti"),
                    OwnerCountryCode: sdk.String("quibusdam"),
                    OwnerDateOfBirth: sdk.String("iure"),
                    OwnerHouseNumberOrName: sdk.String("odit"),
                    OwnerName: sdk.String("voluptatibus"),
                    OwnerNationality: sdk.String("vel"),
                    OwnerPostalCode: sdk.String("magnam"),
                    OwnerState: sdk.String("quibusdam"),
                    OwnerStreet: sdk.String("inventore"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("facere"),
                    URLForVerification: sdk.String("libero"),
                },
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("architecto"),
                    AccountType: sdk.String("voluptatibus"),
                    BankAccountName: sdk.String("quia"),
                    BankAccountReference: sdk.String("porro"),
                    BankAccountUUID: sdk.String("aliquam"),
                    BankBicSwift: sdk.String("velit"),
                    BankCity: sdk.String("illo"),
                    BankCode: sdk.String("accusantium"),
                    BankName: sdk.String("vel"),
                    BranchCode: sdk.String("ea"),
                    CheckCode: sdk.String("beatae"),
                    CountryCode: sdk.String("TJ"),
                    CurrencyCode: sdk.String("excepturi"),
                    Iban: sdk.String("eum"),
                    OwnerCity: sdk.String("velit"),
                    OwnerCountryCode: sdk.String("ut"),
                    OwnerDateOfBirth: sdk.String("perspiciatis"),
                    OwnerHouseNumberOrName: sdk.String("earum"),
                    OwnerName: sdk.String("dicta"),
                    OwnerNationality: sdk.String("impedit"),
                    OwnerPostalCode: sdk.String("voluptatibus"),
                    OwnerState: sdk.String("iste"),
                    OwnerStreet: sdk.String("itaque"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("alias"),
                    URLForVerification: sdk.String("nisi"),
                },
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("itaque"),
                    AccountType: sdk.String("velit"),
                    BankAccountName: sdk.String("laborum"),
                    BankAccountReference: sdk.String("non"),
                    BankAccountUUID: sdk.String("dolor"),
                    BankBicSwift: sdk.String("iusto"),
                    BankCity: sdk.String("sit"),
                    BankCode: sdk.String("doloremque"),
                    BankName: sdk.String("consequatur"),
                    BranchCode: sdk.String("officia"),
                    CheckCode: sdk.String("recusandae"),
                    CountryCode: sdk.String("IE"),
                    CurrencyCode: sdk.String("quidem"),
                    Iban: sdk.String("voluptas"),
                    OwnerCity: sdk.String("facilis"),
                    OwnerCountryCode: sdk.String("placeat"),
                    OwnerDateOfBirth: sdk.String("perspiciatis"),
                    OwnerHouseNumberOrName: sdk.String("expedita"),
                    OwnerName: sdk.String("deleniti"),
                    OwnerNationality: sdk.String("a"),
                    OwnerPostalCode: sdk.String("voluptate"),
                    OwnerState: sdk.String("ullam"),
                    OwnerStreet: sdk.String("unde"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("necessitatibus"),
                    URLForVerification: sdk.String("animi"),
                },
            },
            BankAggregatorDataReference: sdk.String("impedit"),
            BusinessDetails: &shared.BusinessDetails{
                DoingBusinessAs: sdk.String("ipsam"),
                LegalBusinessName: sdk.String("corporis"),
                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Kochboro"),
                            Country: sdk.String("Belgium"),
                            HouseNumberOrName: sdk.String("vero"),
                            PostalCode: sdk.String("10231"),
                            StateOrProvince: sdk.String("iste"),
                            Street: sdk.String("3775 Kuhlman Creek"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("alias"),
                            RegistrationNumber: sdk.String("magni"),
                            StockExchange: sdk.String("vel"),
                            StockNumber: sdk.String("quae"),
                            StockTicker: sdk.String("quae"),
                        },
                        UltimateParentCompanyCode: sdk.String("modi"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("West Tony"),
                            Country: sdk.String("Belize"),
                            HouseNumberOrName: sdk.String("ipsum"),
                            PostalCode: sdk.String("87811-3671"),
                            StateOrProvince: sdk.String("id"),
                            Street: sdk.String("865 Balistreri Lights"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("ipsa"),
                            RegistrationNumber: sdk.String("voluptates"),
                            StockExchange: sdk.String("inventore"),
                            StockNumber: sdk.String("aperiam"),
                            StockTicker: sdk.String("totam"),
                        },
                        UltimateParentCompanyCode: sdk.String("dolore"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Rautown"),
                            Country: sdk.String("Ireland"),
                            HouseNumberOrName: sdk.String("esse"),
                            PostalCode: sdk.String("81685"),
                            StateOrProvince: sdk.String("molestiae"),
                            Street: sdk.String("8875 Hellen Heights"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("rerum"),
                            RegistrationNumber: sdk.String("laudantium"),
                            StockExchange: sdk.String("corporis"),
                            StockNumber: sdk.String("officiis"),
                            StockTicker: sdk.String("voluptatibus"),
                        },
                        UltimateParentCompanyCode: sdk.String("cum"),
                    },
                },
                RegistrationNumber: sdk.String("at"),
                Shareholders: []shared.ShareholderContact{
                    shared.ShareholderContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Lake Markusshire"),
                            Country: sdk.String("Antigua and Barbuda"),
                            HouseNumberOrName: sdk.String("expedita"),
                            PostalCode: sdk.String("18451-1369"),
                            StateOrProvince: sdk.String("adipisci"),
                            Street: sdk.String("626 Bennett Parks"),
                        },
                        Email: sdk.String("Vincenza25@yahoo.com"),
                        FullPhoneNumber: sdk.String("numquam"),
                        JobTitle: sdk.String("Dynamic Accountability Orchestrator"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Jerald"),
                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                            Infix: sdk.String("necessitatibus"),
                            LastName: sdk.String("Herzog"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("qui"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("voluptatum"),
                                    IssuerCountry: sdk.String("cupiditate"),
                                    IssuerState: sdk.String("minima"),
                                    Number: sdk.String("placeat"),
                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("neque"),
                                    IssuerCountry: sdk.String("in"),
                                    IssuerState: sdk.String("minus"),
                                    Number: sdk.String("eum"),
                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("corporis"),
                                    IssuerCountry: sdk.String("magnam"),
                                    IssuerState: sdk.String("voluptates"),
                                    Number: sdk.String("maiores"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                            },
                            Nationality: sdk.String("aperiam"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("libero"),
                            PhoneNumber: sdk.String("ratione"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                        },
                        ShareholderCode: sdk.String("totam"),
                        ShareholderReference: sdk.String("occaecati"),
                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                        WebAddress: sdk.String("quo"),
                    },
                },
                Signatories: []shared.SignatoryContact{
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Paucekborough"),
                            Country: sdk.String("Oman"),
                            HouseNumberOrName: sdk.String("impedit"),
                            PostalCode: sdk.String("78198-3404"),
                            StateOrProvince: sdk.String("minima"),
                            Street: sdk.String("4516 Jessie Lakes"),
                        },
                        Email: sdk.String("Torey.Murazik31@hotmail.com"),
                        FullPhoneNumber: sdk.String("commodi"),
                        JobTitle: sdk.String("Human Creative Developer"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Fatima"),
                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                            Infix: sdk.String("dolorem"),
                            LastName: sdk.String("Gleason"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("ipsa"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("vero"),
                                    IssuerCountry: sdk.String("sequi"),
                                    IssuerState: sdk.String("repudiandae"),
                                    Number: sdk.String("cum"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("earum"),
                                    IssuerCountry: sdk.String("veniam"),
                                    IssuerState: sdk.String("animi"),
                                    Number: sdk.String("dolores"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("dicta"),
                                    IssuerCountry: sdk.String("consequuntur"),
                                    IssuerState: sdk.String("necessitatibus"),
                                    Number: sdk.String("nobis"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                            },
                            Nationality: sdk.String("ducimus"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("maiores"),
                            PhoneNumber: sdk.String("veritatis"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                        },
                        SignatoryCode: sdk.String("laboriosam"),
                        SignatoryReference: sdk.String("pariatur"),
                        WebAddress: sdk.String("libero"),
                    },
                },
                StockExchange: sdk.String("excepturi"),
                StockNumber: sdk.String("occaecati"),
                StockTicker: sdk.String("nemo"),
                TaxID: sdk.String("aliquam"),
            },
            Email: sdk.String("Yasmin.Rosenbaum@yahoo.com"),
            FullPhoneNumber: sdk.String("hic"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Madyson"),
                    Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                    Infix: sdk.String("totam"),
                    LastName: sdk.String("Mann"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("odio"),
                    DocumentData: []shared.PersonalDocumentData{
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("saepe"),
                            IssuerCountry: sdk.String("architecto"),
                            IssuerState: sdk.String("quos"),
                            Number: sdk.String("iste"),
                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                        },
                    },
                    Nationality: sdk.String("tempore"),
                },
            },
            LastReviewDate: sdk.String("libero"),
            LegalArrangements: []shared.LegalArrangementDetail{
                shared.LegalArrangementDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Fort Omafort"),
                        Country: sdk.String("Croatia"),
                        HouseNumberOrName: sdk.String("adipisci"),
                        PostalCode: sdk.String("60337-0547"),
                        StateOrProvince: sdk.String("possimus"),
                        Street: sdk.String("29193 Raquel Manor"),
                    },
                    LegalArrangementCode: sdk.String("odit"),
                    LegalArrangementEntities: []shared.LegalArrangementEntityDetail{
                        shared.LegalArrangementEntityDetail{
                            Address: &shared.ViasAddress{
                                City: sdk.String("West Annette"),
                                Country: sdk.String("Dominican Republic"),
                                HouseNumberOrName: sdk.String("facilis"),
                                PostalCode: sdk.String("39357-3337"),
                                StateOrProvince: sdk.String("minus"),
                                Street: sdk.String("723 Wiza Crossing"),
                            },
                            BusinessDetails: &shared.BusinessDetails{
                                DoingBusinessAs: sdk.String("debitis"),
                                LegalBusinessName: sdk.String("labore"),
                                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("South Ezekielberg"),
                                            Country: sdk.String("Lao People's Democratic Republic"),
                                            HouseNumberOrName: sdk.String("est"),
                                            PostalCode: sdk.String("78684-2167"),
                                            StateOrProvince: sdk.String("vitae"),
                                            Street: sdk.String("4831 Virgie Loaf"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("dignissimos"),
                                            RegistrationNumber: sdk.String("libero"),
                                            StockExchange: sdk.String("illo"),
                                            StockNumber: sdk.String("ab"),
                                            StockTicker: sdk.String("incidunt"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("accusamus"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Redondo Beach"),
                                            Country: sdk.String("Greece"),
                                            HouseNumberOrName: sdk.String("eos"),
                                            PostalCode: sdk.String("94539-7145"),
                                            StateOrProvince: sdk.String("illo"),
                                            Street: sdk.String("83755 Altenwerth Spur"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("aspernatur"),
                                            RegistrationNumber: sdk.String("nam"),
                                            StockExchange: sdk.String("expedita"),
                                            StockNumber: sdk.String("quas"),
                                            StockTicker: sdk.String("provident"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("repudiandae"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Kulasbury"),
                                            Country: sdk.String("Tajikistan"),
                                            HouseNumberOrName: sdk.String("similique"),
                                            PostalCode: sdk.String("42474-0030"),
                                            StateOrProvince: sdk.String("amet"),
                                            Street: sdk.String("567 Axel Course"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("laudantium"),
                                            RegistrationNumber: sdk.String("doloremque"),
                                            StockExchange: sdk.String("earum"),
                                            StockNumber: sdk.String("iusto"),
                                            StockTicker: sdk.String("amet"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("provident"),
                                    },
                                },
                                RegistrationNumber: sdk.String("dolorum"),
                                Shareholders: []shared.ShareholderContact{
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Thaddeustown"),
                                            Country: sdk.String("Guinea-Bissau"),
                                            HouseNumberOrName: sdk.String("molestiae"),
                                            PostalCode: sdk.String("75058-1510"),
                                            StateOrProvince: sdk.String("velit"),
                                            Street: sdk.String("19255 Santa Fork"),
                                        },
                                        Email: sdk.String("Jacquelyn69@hotmail.com"),
                                        FullPhoneNumber: sdk.String("ea"),
                                        JobTitle: sdk.String("Lead Optimization Strategist"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Dedrick"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("provident"),
                                            LastName: sdk.String("Feeney"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("eligendi"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("consectetur"),
                                                    IssuerCountry: sdk.String("soluta"),
                                                    IssuerState: sdk.String("natus"),
                                                    Number: sdk.String("temporibus"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("amet"),
                                                    IssuerCountry: sdk.String("tenetur"),
                                                    IssuerState: sdk.String("aspernatur"),
                                                    Number: sdk.String("quo"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                            },
                                            Nationality: sdk.String("illum"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("laborum"),
                                            PhoneNumber: sdk.String("dignissimos"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("qui"),
                                        ShareholderReference: sdk.String("consectetur"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                                        WebAddress: sdk.String("explicabo"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("West Janiyaburgh"),
                                            Country: sdk.String("Bahrain"),
                                            HouseNumberOrName: sdk.String("illo"),
                                            PostalCode: sdk.String("69274-3229"),
                                            StateOrProvince: sdk.String("modi"),
                                            Street: sdk.String("1850 Kailey Gardens"),
                                        },
                                        Email: sdk.String("Litzy.Hansen2@yahoo.com"),
                                        FullPhoneNumber: sdk.String("modi"),
                                        JobTitle: sdk.String("District Implementation Technician"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Jeramy"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("nostrum"),
                                            LastName: sdk.String("Krajcik"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("veniam"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("ab"),
                                                    IssuerCountry: sdk.String("modi"),
                                                    IssuerState: sdk.String("aut"),
                                                    Number: sdk.String("aut"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("odio"),
                                                    IssuerCountry: sdk.String("commodi"),
                                                    IssuerState: sdk.String("numquam"),
                                                    Number: sdk.String("dolorum"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("voluptate"),
                                                    IssuerCountry: sdk.String("consectetur"),
                                                    IssuerState: sdk.String("nesciunt"),
                                                    Number: sdk.String("quaerat"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("minus"),
                                                    IssuerCountry: sdk.String("sunt"),
                                                    IssuerState: sdk.String("distinctio"),
                                                    Number: sdk.String("iusto"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                            },
                                            Nationality: sdk.String("et"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("facilis"),
                                            PhoneNumber: sdk.String("amet"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("fuga"),
                                        ShareholderReference: sdk.String("alias"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("aut"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Johnpaulhaven"),
                                            Country: sdk.String("Belgium"),
                                            HouseNumberOrName: sdk.String("quae"),
                                            PostalCode: sdk.String("99686"),
                                            StateOrProvince: sdk.String("sed"),
                                            Street: sdk.String("09902 Christopher Turnpike"),
                                        },
                                        Email: sdk.String("Brandon.Brekke@hotmail.com"),
                                        FullPhoneNumber: sdk.String("optio"),
                                        JobTitle: sdk.String("Principal Infrastructure Orchestrator"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Morris"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("sequi"),
                                            LastName: sdk.String("Jacobi"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("ea"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("ducimus"),
                                                    IssuerCountry: sdk.String("odit"),
                                                    IssuerState: sdk.String("velit"),
                                                    Number: sdk.String("reiciendis"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("nulla"),
                                                    IssuerCountry: sdk.String("laborum"),
                                                    IssuerState: sdk.String("natus"),
                                                    Number: sdk.String("accusamus"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("nisi"),
                                                    IssuerCountry: sdk.String("rerum"),
                                                    IssuerState: sdk.String("recusandae"),
                                                    Number: sdk.String("voluptates"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("rem"),
                                                    IssuerCountry: sdk.String("quia"),
                                                    IssuerState: sdk.String("ullam"),
                                                    Number: sdk.String("quisquam"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                            },
                                            Nationality: sdk.String("voluptatibus"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("eligendi"),
                                            PhoneNumber: sdk.String("quae"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("architecto"),
                                        ShareholderReference: sdk.String("architecto"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                                        WebAddress: sdk.String("optio"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Agustinacester"),
                                            Country: sdk.String("Venezuela"),
                                            HouseNumberOrName: sdk.String("a"),
                                            PostalCode: sdk.String("15322-9821"),
                                            StateOrProvince: sdk.String("assumenda"),
                                            Street: sdk.String("977 Leannon Walk"),
                                        },
                                        Email: sdk.String("Kiera.Kozey@gmail.com"),
                                        FullPhoneNumber: sdk.String("odio"),
                                        JobTitle: sdk.String("Dynamic Interactions Administrator"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Cordie"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("voluptas"),
                                            LastName: sdk.String("Cruickshank"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("officia"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("distinctio"),
                                                    IssuerCountry: sdk.String("eius"),
                                                    IssuerState: sdk.String("ipsa"),
                                                    Number: sdk.String("rem"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("accusantium"),
                                                    IssuerCountry: sdk.String("veniam"),
                                                    IssuerState: sdk.String("saepe"),
                                                    Number: sdk.String("neque"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                            },
                                            Nationality: sdk.String("aliquam"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("quos"),
                                            PhoneNumber: sdk.String("doloribus"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("est"),
                                        ShareholderReference: sdk.String("delectus"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                                        WebAddress: sdk.String("vitae"),
                                    },
                                },
                                Signatories: []shared.SignatoryContact{
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Blandaworth"),
                                            Country: sdk.String("Guinea"),
                                            HouseNumberOrName: sdk.String("doloribus"),
                                            PostalCode: sdk.String("62135-7061"),
                                            StateOrProvince: sdk.String("commodi"),
                                            Street: sdk.String("138 Mayer Forge"),
                                        },
                                        Email: sdk.String("Unique.Ferry32@gmail.com"),
                                        FullPhoneNumber: sdk.String("ex"),
                                        JobTitle: sdk.String("Forward Brand Executive"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Tyler"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("quisquam"),
                                            LastName: sdk.String("Ernser"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("ducimus"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("minima"),
                                                    IssuerCountry: sdk.String("architecto"),
                                                    IssuerState: sdk.String("qui"),
                                                    Number: sdk.String("aliquid"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("incidunt"),
                                                    IssuerCountry: sdk.String("adipisci"),
                                                    IssuerState: sdk.String("praesentium"),
                                                    Number: sdk.String("dolor"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("expedita"),
                                                    IssuerCountry: sdk.String("facilis"),
                                                    IssuerState: sdk.String("impedit"),
                                                    Number: sdk.String("sit"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                            },
                                            Nationality: sdk.String("culpa"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("consequuntur"),
                                            PhoneNumber: sdk.String("amet"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("modi"),
                                        SignatoryReference: sdk.String("veniam"),
                                        WebAddress: sdk.String("quod"),
                                    },
                                },
                                StockExchange: sdk.String("itaque"),
                                StockNumber: sdk.String("a"),
                                StockTicker: sdk.String("quisquam"),
                                TaxID: sdk.String("enim"),
                            },
                            Email: sdk.String("Reyna0@hotmail.com"),
                            FullPhoneNumber: sdk.String("culpa"),
                            IndividualDetails: &shared.IndividualDetails{
                                Name: &shared.ViasName{
                                    FirstName: sdk.String("Angel"),
                                    Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                    Infix: sdk.String("necessitatibus"),
                                    LastName: sdk.String("Crist"),
                                },
                                PersonalData: &shared.ViasPersonalData{
                                    DateOfBirth: sdk.String("dicta"),
                                    DocumentData: []shared.PersonalDocumentData{
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("perspiciatis"),
                                            IssuerCountry: sdk.String("debitis"),
                                            IssuerState: sdk.String("ullam"),
                                            Number: sdk.String("architecto"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("perferendis"),
                                            IssuerCountry: sdk.String("veritatis"),
                                            IssuerState: sdk.String("provident"),
                                            Number: sdk.String("cumque"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                    Nationality: sdk.String("quibusdam"),
                                },
                            },
                            LegalArrangementEntityCode: sdk.String("quod"),
                            LegalArrangementEntityReference: sdk.String("nemo"),
                            LegalArrangementMembers: []shared.LegalArrangementEntityDetailLegalArrangementMembersEnum{
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumControllingPerson,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumPartner,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumProtector,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumPartner,
                            },
                            LegalEntityType: shared.LegalArrangementEntityDetailLegalEntityTypeEnumBusiness.ToPointer(),
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("odio"),
                                PhoneNumber: sdk.String("natus"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            WebAddress: sdk.String("cum"),
                        },
                        shared.LegalArrangementEntityDetail{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Pomona"),
                                Country: sdk.String("Peru"),
                                HouseNumberOrName: sdk.String("itaque"),
                                PostalCode: sdk.String("62597"),
                                StateOrProvince: sdk.String("aspernatur"),
                                Street: sdk.String("729 O'Reilly Union"),
                            },
                            BusinessDetails: &shared.BusinessDetails{
                                DoingBusinessAs: sdk.String("autem"),
                                LegalBusinessName: sdk.String("quo"),
                                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Greenwood"),
                                            Country: sdk.String("Svalbard & Jan Mayen Islands"),
                                            HouseNumberOrName: sdk.String("facilis"),
                                            PostalCode: sdk.String("68978"),
                                            StateOrProvince: sdk.String("ad"),
                                            Street: sdk.String("696 Priscilla Heights"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("alias"),
                                            RegistrationNumber: sdk.String("suscipit"),
                                            StockExchange: sdk.String("deserunt"),
                                            StockNumber: sdk.String("molestias"),
                                            StockTicker: sdk.String("laborum"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("est"),
                                    },
                                },
                                RegistrationNumber: sdk.String("occaecati"),
                                Shareholders: []shared.ShareholderContact{
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Aufderharville"),
                                            Country: sdk.String("Iceland"),
                                            HouseNumberOrName: sdk.String("magnam"),
                                            PostalCode: sdk.String("79386"),
                                            StateOrProvince: sdk.String("nulla"),
                                            Street: sdk.String("6234 Paucek Spurs"),
                                        },
                                        Email: sdk.String("Ayla.OConnell4@hotmail.com"),
                                        FullPhoneNumber: sdk.String("voluptatem"),
                                        JobTitle: sdk.String("Internal Interactions Assistant"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Adele"),
                                            Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                            Infix: sdk.String("architecto"),
                                            LastName: sdk.String("Murazik"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("porro"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("quae"),
                                                    IssuerCountry: sdk.String("magni"),
                                                    IssuerState: sdk.String("officiis"),
                                                    Number: sdk.String("sed"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("impedit"),
                                                    IssuerCountry: sdk.String("ipsa"),
                                                    IssuerState: sdk.String("excepturi"),
                                                    Number: sdk.String("a"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("laudantium"),
                                                    IssuerCountry: sdk.String("maiores"),
                                                    IssuerState: sdk.String("alias"),
                                                    Number: sdk.String("asperiores"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                            },
                                            Nationality: sdk.String("dicta"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("suscipit"),
                                            PhoneNumber: sdk.String("earum"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("velit"),
                                        ShareholderReference: sdk.String("eius"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("in"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Botsfordberg"),
                                            Country: sdk.String("Tajikistan"),
                                            HouseNumberOrName: sdk.String("excepturi"),
                                            PostalCode: sdk.String("17121"),
                                            StateOrProvince: sdk.String("odit"),
                                            Street: sdk.String("7064 Malika Hills"),
                                        },
                                        Email: sdk.String("Kayleigh.Bogan@yahoo.com"),
                                        FullPhoneNumber: sdk.String("similique"),
                                        JobTitle: sdk.String("Future Applications Officer"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Lura"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("omnis"),
                                            LastName: sdk.String("Corwin"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("nesciunt"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("quis"),
                                                    IssuerCountry: sdk.String("cupiditate"),
                                                    IssuerState: sdk.String("aliquam"),
                                                    Number: sdk.String("excepturi"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("laudantium"),
                                                    IssuerCountry: sdk.String("velit"),
                                                    IssuerState: sdk.String("reiciendis"),
                                                    Number: sdk.String("amet"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("ipsa"),
                                                    IssuerCountry: sdk.String("quisquam"),
                                                    IssuerState: sdk.String("tenetur"),
                                                    Number: sdk.String("quas"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("aliquid"),
                                                    IssuerCountry: sdk.String("asperiores"),
                                                    IssuerState: sdk.String("a"),
                                                    Number: sdk.String("nobis"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                            },
                                            Nationality: sdk.String("accusantium"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("dicta"),
                                            PhoneNumber: sdk.String("minus"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("eveniet"),
                                        ShareholderReference: sdk.String("porro"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                                        WebAddress: sdk.String("quidem"),
                                    },
                                },
                                Signatories: []shared.SignatoryContact{
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Cary"),
                                            Country: sdk.String("Equatorial Guinea"),
                                            HouseNumberOrName: sdk.String("sequi"),
                                            PostalCode: sdk.String("94559-9699"),
                                            StateOrProvince: sdk.String("nulla"),
                                            Street: sdk.String("3283 Turner Key"),
                                        },
                                        Email: sdk.String("Alford.Nienow50@hotmail.com"),
                                        FullPhoneNumber: sdk.String("eius"),
                                        JobTitle: sdk.String("Forward Directives Producer"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Liliane"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("quia"),
                                            LastName: sdk.String("Gutkowski"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("reprehenderit"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("quos"),
                                                    IssuerCountry: sdk.String("corrupti"),
                                                    IssuerState: sdk.String("amet"),
                                                    Number: sdk.String("molestiae"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("laborum"),
                                                    IssuerCountry: sdk.String("modi"),
                                                    IssuerState: sdk.String("perferendis"),
                                                    Number: sdk.String("necessitatibus"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("molestias"),
                                                    IssuerCountry: sdk.String("dolore"),
                                                    IssuerState: sdk.String("sunt"),
                                                    Number: sdk.String("maiores"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("odit"),
                                                    IssuerCountry: sdk.String("earum"),
                                                    IssuerState: sdk.String("veniam"),
                                                    Number: sdk.String("ipsam"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                            },
                                            Nationality: sdk.String("exercitationem"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("veniam"),
                                            PhoneNumber: sdk.String("nihil"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("nisi"),
                                        SignatoryReference: sdk.String("tenetur"),
                                        WebAddress: sdk.String("quis"),
                                    },
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Greenville"),
                                            Country: sdk.String("Holy See (Vatican City State)"),
                                            HouseNumberOrName: sdk.String("pariatur"),
                                            PostalCode: sdk.String("68069"),
                                            StateOrProvince: sdk.String("sed"),
                                            Street: sdk.String("991 Sandra Prairie"),
                                        },
                                        Email: sdk.String("Whitney79@gmail.com"),
                                        FullPhoneNumber: sdk.String("soluta"),
                                        JobTitle: sdk.String("International Integration Representative"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Johnathan"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("non"),
                                            LastName: sdk.String("Boyle"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("mollitia"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("harum"),
                                                    IssuerCountry: sdk.String("cumque"),
                                                    IssuerState: sdk.String("doloremque"),
                                                    Number: sdk.String("expedita"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("eaque"),
                                                    IssuerCountry: sdk.String("deserunt"),
                                                    IssuerState: sdk.String("aliquid"),
                                                    Number: sdk.String("excepturi"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("tempora"),
                                                    IssuerCountry: sdk.String("possimus"),
                                                    IssuerState: sdk.String("dolor"),
                                                    Number: sdk.String("rerum"),
                                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("accusamus"),
                                                    IssuerCountry: sdk.String("optio"),
                                                    IssuerState: sdk.String("delectus"),
                                                    Number: sdk.String("minus"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                            },
                                            Nationality: sdk.String("quos"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("asperiores"),
                                            PhoneNumber: sdk.String("voluptatum"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("corporis"),
                                        SignatoryReference: sdk.String("accusantium"),
                                        WebAddress: sdk.String("illo"),
                                    },
                                },
                                StockExchange: sdk.String("aut"),
                                StockNumber: sdk.String("doloribus"),
                                StockTicker: sdk.String("nostrum"),
                                TaxID: sdk.String("at"),
                            },
                            Email: sdk.String("Constance_Streich@hotmail.com"),
                            FullPhoneNumber: sdk.String("mollitia"),
                            IndividualDetails: &shared.IndividualDetails{
                                Name: &shared.ViasName{
                                    FirstName: sdk.String("Aniyah"),
                                    Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                    Infix: sdk.String("aperiam"),
                                    LastName: sdk.String("Friesen"),
                                },
                                PersonalData: &shared.ViasPersonalData{
                                    DateOfBirth: sdk.String("voluptates"),
                                    DocumentData: []shared.PersonalDocumentData{
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aliquam"),
                                            IssuerCountry: sdk.String("quisquam"),
                                            IssuerState: sdk.String("quas"),
                                            Number: sdk.String("consequuntur"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("inventore"),
                                            IssuerCountry: sdk.String("aliquid"),
                                            IssuerState: sdk.String("laudantium"),
                                            Number: sdk.String("est"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    Nationality: sdk.String("aliquid"),
                                },
                            },
                            LegalArrangementEntityCode: sdk.String("consectetur"),
                            LegalArrangementEntityReference: sdk.String("cumque"),
                            LegalArrangementMembers: []shared.LegalArrangementEntityDetailLegalArrangementMembersEnum{
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumProtector,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumProtector,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumControllingPerson,
                            },
                            LegalEntityType: shared.LegalArrangementEntityDetailLegalEntityTypeEnumPublicCompany.ToPointer(),
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("tempora"),
                                PhoneNumber: sdk.String("blanditiis"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                            },
                            WebAddress: sdk.String("sequi"),
                        },
                        shared.LegalArrangementEntityDetail{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Alejandrincester"),
                                Country: sdk.String("Belgium"),
                                HouseNumberOrName: sdk.String("tenetur"),
                                PostalCode: sdk.String("65761"),
                                StateOrProvince: sdk.String("nihil"),
                                Street: sdk.String("6406 Elena Springs"),
                            },
                            BusinessDetails: &shared.BusinessDetails{
                                DoingBusinessAs: sdk.String("aliquam"),
                                LegalBusinessName: sdk.String("iste"),
                                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Schroederbury"),
                                            Country: sdk.String("Micronesia"),
                                            HouseNumberOrName: sdk.String("unde"),
                                            PostalCode: sdk.String("40730"),
                                            StateOrProvince: sdk.String("cumque"),
                                            Street: sdk.String("68717 Grant Rapid"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("corrupti"),
                                            RegistrationNumber: sdk.String("rem"),
                                            StockExchange: sdk.String("atque"),
                                            StockNumber: sdk.String("officiis"),
                                            StockTicker: sdk.String("cum"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("pariatur"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Salt Lake City"),
                                            Country: sdk.String("Faroe Islands"),
                                            HouseNumberOrName: sdk.String("quod"),
                                            PostalCode: sdk.String("76557-7498"),
                                            StateOrProvince: sdk.String("accusantium"),
                                            Street: sdk.String("187 Boehm Branch"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("laudantium"),
                                            RegistrationNumber: sdk.String("iusto"),
                                            StockExchange: sdk.String("dolor"),
                                            StockNumber: sdk.String("voluptates"),
                                            StockTicker: sdk.String("tempora"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("magni"),
                                    },
                                },
                                RegistrationNumber: sdk.String("rerum"),
                                Shareholders: []shared.ShareholderContact{
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("South Schuylerview"),
                                            Country: sdk.String("Jersey"),
                                            HouseNumberOrName: sdk.String("voluptatum"),
                                            PostalCode: sdk.String("45665-3516"),
                                            StateOrProvince: sdk.String("enim"),
                                            Street: sdk.String("1058 Edison Ville"),
                                        },
                                        Email: sdk.String("Virginia_Nitzsche@hotmail.com"),
                                        FullPhoneNumber: sdk.String("natus"),
                                        JobTitle: sdk.String("Product Metrics Liaison"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Sherwood"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("cumque"),
                                            LastName: sdk.String("Hauck"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("enim"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("nemo"),
                                                    IssuerCountry: sdk.String("illum"),
                                                    IssuerState: sdk.String("nesciunt"),
                                                    Number: sdk.String("sit"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("minus"),
                                                    IssuerCountry: sdk.String("asperiores"),
                                                    IssuerState: sdk.String("recusandae"),
                                                    Number: sdk.String("voluptates"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                            },
                                            Nationality: sdk.String("dicta"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("fugit"),
                                            PhoneNumber: sdk.String("sit"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("necessitatibus"),
                                        ShareholderReference: sdk.String("sed"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("sunt"),
                                    },
                                },
                                Signatories: []shared.SignatoryContact{
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Peabody"),
                                            Country: sdk.String("French Southern Territories"),
                                            HouseNumberOrName: sdk.String("deserunt"),
                                            PostalCode: sdk.String("17250"),
                                            StateOrProvince: sdk.String("at"),
                                            Street: sdk.String("91011 Welch Camp"),
                                        },
                                        Email: sdk.String("Bart86@gmail.com"),
                                        FullPhoneNumber: sdk.String("enim"),
                                        JobTitle: sdk.String("Senior Paradigm Strategist"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Derek"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("nobis"),
                                            LastName: sdk.String("Jakubowski"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("repellat"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("deleniti"),
                                                    IssuerCountry: sdk.String("expedita"),
                                                    IssuerState: sdk.String("hic"),
                                                    Number: sdk.String("excepturi"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                            },
                                            Nationality: sdk.String("sed"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("beatae"),
                                            PhoneNumber: sdk.String("similique"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("animi"),
                                        SignatoryReference: sdk.String("dolore"),
                                        WebAddress: sdk.String("tenetur"),
                                    },
                                },
                                StockExchange: sdk.String("dignissimos"),
                                StockNumber: sdk.String("esse"),
                                StockTicker: sdk.String("animi"),
                                TaxID: sdk.String("laudantium"),
                            },
                            Email: sdk.String("Sylvan88@yahoo.com"),
                            FullPhoneNumber: sdk.String("eius"),
                            IndividualDetails: &shared.IndividualDetails{
                                Name: &shared.ViasName{
                                    FirstName: sdk.String("Maye"),
                                    Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                    Infix: sdk.String("dignissimos"),
                                    LastName: sdk.String("Hintz"),
                                },
                                PersonalData: &shared.ViasPersonalData{
                                    DateOfBirth: sdk.String("explicabo"),
                                    DocumentData: []shared.PersonalDocumentData{
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aliquid"),
                                            IssuerCountry: sdk.String("quis"),
                                            IssuerState: sdk.String("facilis"),
                                            Number: sdk.String("ipsum"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("quaerat"),
                                            IssuerCountry: sdk.String("architecto"),
                                            IssuerState: sdk.String("praesentium"),
                                            Number: sdk.String("eveniet"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("expedita"),
                                            IssuerCountry: sdk.String("libero"),
                                            IssuerState: sdk.String("iste"),
                                            Number: sdk.String("illo"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("quos"),
                                            IssuerCountry: sdk.String("temporibus"),
                                            IssuerState: sdk.String("sint"),
                                            Number: sdk.String("iusto"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    Nationality: sdk.String("accusamus"),
                                },
                            },
                            LegalArrangementEntityCode: sdk.String("aperiam"),
                            LegalArrangementEntityReference: sdk.String("voluptates"),
                            LegalArrangementMembers: []shared.LegalArrangementEntityDetailLegalArrangementMembersEnum{
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumControllingPerson,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumBeneficiary,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumSettlor,
                            },
                            LegalEntityType: shared.LegalArrangementEntityDetailLegalEntityTypeEnumPublicCompany.ToPointer(),
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("rem"),
                                PhoneNumber: sdk.String("tenetur"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            WebAddress: sdk.String("modi"),
                        },
                        shared.LegalArrangementEntityDetail{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Bowie"),
                                Country: sdk.String("French Southern Territories"),
                                HouseNumberOrName: sdk.String("labore"),
                                PostalCode: sdk.String("19048-8773"),
                                StateOrProvince: sdk.String("dolorum"),
                                Street: sdk.String("3917 Rohan Street"),
                            },
                            BusinessDetails: &shared.BusinessDetails{
                                DoingBusinessAs: sdk.String("omnis"),
                                LegalBusinessName: sdk.String("aut"),
                                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("McDermottport"),
                                            Country: sdk.String("Cape Verde"),
                                            HouseNumberOrName: sdk.String("necessitatibus"),
                                            PostalCode: sdk.String("33415"),
                                            StateOrProvince: sdk.String("sed"),
                                            Street: sdk.String("47181 King Fork"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("esse"),
                                            RegistrationNumber: sdk.String("accusantium"),
                                            StockExchange: sdk.String("distinctio"),
                                            StockNumber: sdk.String("sapiente"),
                                            StockTicker: sdk.String("quam"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("est"),
                                    },
                                    shared.UltimateParentCompany{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Fort Lottie"),
                                            Country: sdk.String("Malawi"),
                                            HouseNumberOrName: sdk.String("iusto"),
                                            PostalCode: sdk.String("93236-3969"),
                                            StateOrProvince: sdk.String("corporis"),
                                            Street: sdk.String("97930 Dickinson Court"),
                                        },
                                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                            LegalBusinessName: sdk.String("vitae"),
                                            RegistrationNumber: sdk.String("voluptatibus"),
                                            StockExchange: sdk.String("doloremque"),
                                            StockNumber: sdk.String("sed"),
                                            StockTicker: sdk.String("amet"),
                                        },
                                        UltimateParentCompanyCode: sdk.String("rerum"),
                                    },
                                },
                                RegistrationNumber: sdk.String("in"),
                                Shareholders: []shared.ShareholderContact{
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Cleveland Heights"),
                                            Country: sdk.String("Cyprus"),
                                            HouseNumberOrName: sdk.String("nisi"),
                                            PostalCode: sdk.String("99160"),
                                            StateOrProvince: sdk.String("quod"),
                                            Street: sdk.String("589 Lafayette Vista"),
                                        },
                                        Email: sdk.String("Lizzie.Donnelly@gmail.com"),
                                        FullPhoneNumber: sdk.String("repellendus"),
                                        JobTitle: sdk.String("Customer Solutions Consultant"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Clifford"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("labore"),
                                            LastName: sdk.String("Quitzon"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("in"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("sunt"),
                                                    IssuerCountry: sdk.String("enim"),
                                                    IssuerState: sdk.String("nulla"),
                                                    Number: sdk.String("maiores"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("mollitia"),
                                                    IssuerCountry: sdk.String("impedit"),
                                                    IssuerState: sdk.String("accusamus"),
                                                    Number: sdk.String("et"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("blanditiis"),
                                                    IssuerCountry: sdk.String("cum"),
                                                    IssuerState: sdk.String("dicta"),
                                                    Number: sdk.String("impedit"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("eveniet"),
                                                    IssuerCountry: sdk.String("repudiandae"),
                                                    IssuerState: sdk.String("sed"),
                                                    Number: sdk.String("impedit"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                            },
                                            Nationality: sdk.String("impedit"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("vel"),
                                            PhoneNumber: sdk.String("eligendi"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("ex"),
                                        ShareholderReference: sdk.String("beatae"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                                        WebAddress: sdk.String("maiores"),
                                    },
                                    shared.ShareholderContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Sunrise Manor"),
                                            Country: sdk.String("Paraguay"),
                                            HouseNumberOrName: sdk.String("illo"),
                                            PostalCode: sdk.String("47787-3997"),
                                            StateOrProvince: sdk.String("nihil"),
                                            Street: sdk.String("24576 Emmalee Drive"),
                                        },
                                        Email: sdk.String("Jayden48@gmail.com"),
                                        FullPhoneNumber: sdk.String("nulla"),
                                        JobTitle: sdk.String("Forward Intranet Associate"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Faustino"),
                                            Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                            Infix: sdk.String("illum"),
                                            LastName: sdk.String("Corkery"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("maxime"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("repellat"),
                                                    IssuerCountry: sdk.String("nostrum"),
                                                    IssuerState: sdk.String("illum"),
                                                    Number: sdk.String("quibusdam"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("esse"),
                                                    IssuerCountry: sdk.String("explicabo"),
                                                    IssuerState: sdk.String("consectetur"),
                                                    Number: sdk.String("temporibus"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("ipsa"),
                                                    IssuerCountry: sdk.String("maiores"),
                                                    IssuerState: sdk.String("exercitationem"),
                                                    Number: sdk.String("culpa"),
                                                    Type: shared.PersonalDocumentDataTypeEnumVisa,
                                                },
                                            },
                                            Nationality: sdk.String("aspernatur"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("sapiente"),
                                            PhoneNumber: sdk.String("neque"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                                        },
                                        ShareholderCode: sdk.String("suscipit"),
                                        ShareholderReference: sdk.String("harum"),
                                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                                        WebAddress: sdk.String("doloremque"),
                                    },
                                },
                                Signatories: []shared.SignatoryContact{
                                    shared.SignatoryContact{
                                        Address: &shared.ViasAddress{
                                            City: sdk.String("Jaylanstad"),
                                            Country: sdk.String("Kuwait"),
                                            HouseNumberOrName: sdk.String("quis"),
                                            PostalCode: sdk.String("03293"),
                                            StateOrProvince: sdk.String("est"),
                                            Street: sdk.String("7557 Emiliano Heights"),
                                        },
                                        Email: sdk.String("Dorcas.Aufderhar@gmail.com"),
                                        FullPhoneNumber: sdk.String("fugiat"),
                                        JobTitle: sdk.String("Future Program Producer"),
                                        Name: &shared.ViasName{
                                            FirstName: sdk.String("Neva"),
                                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                            Infix: sdk.String("porro"),
                                            LastName: sdk.String("Russel"),
                                        },
                                        PersonalData: &shared.ViasPersonalData{
                                            DateOfBirth: sdk.String("nisi"),
                                            DocumentData: []shared.PersonalDocumentData{
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("soluta"),
                                                    IssuerCountry: sdk.String("fugiat"),
                                                    IssuerState: sdk.String("laboriosam"),
                                                    Number: sdk.String("nam"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("maiores"),
                                                    IssuerCountry: sdk.String("consectetur"),
                                                    IssuerState: sdk.String("necessitatibus"),
                                                    Number: sdk.String("maxime"),
                                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("voluptatem"),
                                                    IssuerCountry: sdk.String("provident"),
                                                    IssuerState: sdk.String("adipisci"),
                                                    Number: sdk.String("accusantium"),
                                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                                },
                                                shared.PersonalDocumentData{
                                                    ExpirationDate: sdk.String("repellat"),
                                                    IssuerCountry: sdk.String("omnis"),
                                                    IssuerState: sdk.String("explicabo"),
                                                    Number: sdk.String("vel"),
                                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                                },
                                            },
                                            Nationality: sdk.String("id"),
                                        },
                                        PhoneNumber: &shared.ViasPhoneNumber{
                                            PhoneCountryCode: sdk.String("possimus"),
                                            PhoneNumber: sdk.String("fugit"),
                                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                                        },
                                        SignatoryCode: sdk.String("nostrum"),
                                        SignatoryReference: sdk.String("sequi"),
                                        WebAddress: sdk.String("voluptatum"),
                                    },
                                },
                                StockExchange: sdk.String("quasi"),
                                StockNumber: sdk.String("error"),
                                StockTicker: sdk.String("nobis"),
                                TaxID: sdk.String("tempora"),
                            },
                            Email: sdk.String("Devin91@yahoo.com"),
                            FullPhoneNumber: sdk.String("possimus"),
                            IndividualDetails: &shared.IndividualDetails{
                                Name: &shared.ViasName{
                                    FirstName: sdk.String("Caden"),
                                    Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                    Infix: sdk.String("repudiandae"),
                                    LastName: sdk.String("Hessel"),
                                },
                                PersonalData: &shared.ViasPersonalData{
                                    DateOfBirth: sdk.String("ea"),
                                    DocumentData: []shared.PersonalDocumentData{
                                        shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aliquam"),
                                            IssuerCountry: sdk.String("blanditiis"),
                                            IssuerState: sdk.String("hic"),
                                            Number: sdk.String("maiores"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    Nationality: sdk.String("autem"),
                                },
                            },
                            LegalArrangementEntityCode: sdk.String("nesciunt"),
                            LegalArrangementEntityReference: sdk.String("cupiditate"),
                            LegalArrangementMembers: []shared.LegalArrangementEntityDetailLegalArrangementMembersEnum{
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumSettlor,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumBeneficiary,
                                shared.LegalArrangementEntityDetailLegalArrangementMembersEnumBeneficiary,
                            },
                            LegalEntityType: shared.LegalArrangementEntityDetailLegalEntityTypeEnumPartnership.ToPointer(),
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("nam"),
                                PhoneNumber: sdk.String("assumenda"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            WebAddress: sdk.String("fuga"),
                        },
                    },
                    LegalArrangementReference: sdk.String("tempore"),
                    LegalForm: shared.LegalArrangementDetailLegalFormEnumFixedTrust.ToPointer(),
                    Name: "Laurie Kling",
                    RegistrationNumber: sdk.String("provident"),
                    TaxNumber: sdk.String("laboriosam"),
                    Type: shared.LegalArrangementDetailTypeEnumTrust,
                },
            },
            MerchantCategoryCode: sdk.String("ab"),
            Metadata: map[string]string{
                "quisquam": "eaque",
                "alias": "qui",
                "consequuntur": "vitae",
                "quidem": "sequi",
            },
            PayoutMethods: []shared.PayoutMethod{
                shared.PayoutMethod{
                    MerchantAccount: "exercitationem",
                    PayoutMethodCode: sdk.String("illum"),
                    PayoutMethodReference: sdk.String("praesentium"),
                    RecurringDetailReference: "unde",
                    ShopperReference: "similique",
                },
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("Reynoldsburgh"),
                Country: sdk.String("Togo"),
                HouseNumberOrName: sdk.String("nobis"),
                PostalCode: sdk.String("86580-7335"),
                StateOrProvince: sdk.String("vero"),
                Street: sdk.String("020 Dorian Park"),
            },
            StoreDetails: []shared.StoreDetail{
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Loyalview"),
                        Country: sdk.String("Bhutan"),
                        HouseNumberOrName: sdk.String("a"),
                        PostalCode: sdk.String("08910-4559"),
                        StateOrProvince: sdk.String("voluptate"),
                        Street: sdk.String("7199 Klein Circle"),
                    },
                    FullPhoneNumber: sdk.String("facere"),
                    Logo: sdk.String("maxime"),
                    MerchantAccount: "fuga",
                    MerchantCategoryCode: "ab",
                    MerchantHouseNumber: sdk.String("ex"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("consectetur"),
                        PhoneNumber: sdk.String("maiores"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumPos.ToPointer(),
                    SplitConfigurationUUID: sdk.String("sequi"),
                    Status: shared.StoreDetailStatusEnumInactiveWithModifications.ToPointer(),
                    Store: sdk.String("voluptatum"),
                    StoreName: sdk.String("perferendis"),
                    StoreReference: sdk.String("laborum"),
                    VirtualAccount: sdk.String("omnis"),
                    WebAddress: sdk.String("nihil"),
                },
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("West Babylon"),
                        Country: sdk.String("Dominican Republic"),
                        HouseNumberOrName: sdk.String("adipisci"),
                        PostalCode: sdk.String("78895"),
                        StateOrProvince: sdk.String("ipsam"),
                        Street: sdk.String("6594 Kaylee Loaf"),
                    },
                    FullPhoneNumber: sdk.String("commodi"),
                    Logo: sdk.String("porro"),
                    MerchantAccount: "aliquid",
                    MerchantCategoryCode: "mollitia",
                    MerchantHouseNumber: sdk.String("quidem"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("explicabo"),
                        PhoneNumber: sdk.String("et"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumEcommerce.ToPointer(),
                    SplitConfigurationUUID: sdk.String("natus"),
                    Status: shared.StoreDetailStatusEnumPending.ToPointer(),
                    Store: sdk.String("a"),
                    StoreName: sdk.String("impedit"),
                    StoreReference: sdk.String("unde"),
                    VirtualAccount: sdk.String("ut"),
                    WebAddress: sdk.String("facere"),
                },
            },
            WebAddress: sdk.String("voluptas"),
        },
        Description: sdk.String("doloribus"),
        LegalEntity: shared.UpdateAccountHolderRequestLegalEntityEnumPublicCompany.ToPointer(),
        PrimaryCurrency: sdk.String("quisquam"),
        ProcessingTier: sdk.Int(818078),
        VerificationProfile: sdk.String("dignissimos"),
    }, operations.PostUpdateAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccountHolderResponse != nil {
        // handle response
    }
}
```

## PostUpdateAccountHolderState

Disables or enables the processing or payout state of an account holder.

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
    res, err := s.AccountHolders.PostUpdateAccountHolderState(ctx, shared.UpdateAccountHolderStateRequest{
        AccountHolderCode: "iste",
        Disable: false,
        Reason: sdk.String("provident"),
        StateType: shared.UpdateAccountHolderStateRequestStateTypeEnumLimitedProcessing,
    }, operations.PostUpdateAccountHolderStateSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountHolderStatusResponse != nil {
        // handle response
    }
}
```
