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
                TaxID: sdk.String("dolor"),
            },
            Email: sdk.String("Ayana_Jaskolski97@hotmail.com"),
            FullPhoneNumber: sdk.String("nostrum"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Victor"),
                    Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                    Infix: sdk.String("saepe"),
                    LastName: sdk.String("Jenkins"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("impedit"),
                    DocumentData: []shared.PersonalDocumentData{
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("veniam"),
                            IssuerCountry: sdk.String("aliquid"),
                            IssuerState: sdk.String("inventore"),
                            Number: sdk.String("magnam"),
                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                        },
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("quo"),
                            IssuerCountry: sdk.String("consectetur"),
                            IssuerState: sdk.String("recusandae"),
                            Number: sdk.String("aspernatur"),
                            Type: shared.PersonalDocumentDataTypeEnumID,
                        },
                    },
                    Nationality: sdk.String("eaque"),
                },
            },
            LastReviewDate: sdk.String("a"),
            MerchantCategoryCode: sdk.String("libero"),
            Metadata: map[string]string{
                "aut": "deleniti",
            },
            PayoutMethods: []shared.PayoutMethod{
                shared.PayoutMethod{
                    MerchantAccount: "aliquam",
                    PayoutMethodCode: sdk.String("fugit"),
                    PayoutMethodReference: sdk.String("accusamus"),
                    RecurringDetailReference: "inventore",
                    ShopperReference: "non",
                },
                shared.PayoutMethod{
                    MerchantAccount: "et",
                    PayoutMethodCode: sdk.String("dolorum"),
                    PayoutMethodReference: sdk.String("laborum"),
                    RecurringDetailReference: "placeat",
                    ShopperReference: "velit",
                },
                shared.PayoutMethod{
                    MerchantAccount: "eum",
                    PayoutMethodCode: sdk.String("autem"),
                    PayoutMethodReference: sdk.String("nobis"),
                    RecurringDetailReference: "quas",
                    ShopperReference: "assumenda",
                },
                shared.PayoutMethod{
                    MerchantAccount: "nulla",
                    PayoutMethodCode: sdk.String("voluptas"),
                    PayoutMethodReference: sdk.String("libero"),
                    RecurringDetailReference: "quasi",
                    ShopperReference: "tempora",
                },
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("East Larissa"),
                Country: sdk.String("Austria"),
                HouseNumberOrName: sdk.String("molestiae"),
                PostalCode: sdk.String("42445"),
                StateOrProvince: sdk.String("fuga"),
                Street: sdk.String("6824 Reyna Dam"),
            },
            StoreDetails: []shared.StoreDetail{
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Boganton"),
                        Country: sdk.String("Northern Mariana Islands"),
                        HouseNumberOrName: sdk.String("quidem"),
                        PostalCode: sdk.String("78762"),
                        StateOrProvince: sdk.String("eos"),
                        Street: sdk.String("0502 Hilpert Cove"),
                    },
                    FullPhoneNumber: sdk.String("sequi"),
                    Logo: sdk.String("quo"),
                    MerchantAccount: "esse",
                    MerchantCategoryCode: "recusandae",
                    MerchantHouseNumber: sdk.String("aperiam"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("distinctio"),
                        PhoneNumber: sdk.String("quod"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumEcommerce.ToPointer(),
                    SplitConfigurationUUID: sdk.String("nihil"),
                    Status: shared.StoreDetailStatusEnumInactive.ToPointer(),
                    Store: sdk.String("accusamus"),
                    StoreName: sdk.String("aliquam"),
                    StoreReference: sdk.String("odio"),
                    VirtualAccount: sdk.String("occaecati"),
                    WebAddress: sdk.String("commodi"),
                },
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Chicago"),
                        Country: sdk.String("Niger"),
                        HouseNumberOrName: sdk.String("molestiae"),
                        PostalCode: sdk.String("74551"),
                        StateOrProvince: sdk.String("deleniti"),
                        Street: sdk.String("66251 Gladys Creek"),
                    },
                    FullPhoneNumber: sdk.String("sapiente"),
                    Logo: sdk.String("consequuntur"),
                    MerchantAccount: "ratione",
                    MerchantCategoryCode: "explicabo",
                    MerchantHouseNumber: sdk.String("saepe"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("occaecati"),
                        PhoneNumber: sdk.String("atque"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumEcommerce.ToPointer(),
                    SplitConfigurationUUID: sdk.String("eveniet"),
                    Status: shared.StoreDetailStatusEnumPending.ToPointer(),
                    Store: sdk.String("veritatis"),
                    StoreName: sdk.String("esse"),
                    StoreReference: sdk.String("quod"),
                    VirtualAccount: sdk.String("nam"),
                    WebAddress: sdk.String("vero"),
                },
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("North Stuart"),
                        Country: sdk.String("Israel"),
                        HouseNumberOrName: sdk.String("harum"),
                        PostalCode: sdk.String("65377"),
                        StateOrProvince: sdk.String("sit"),
                        Street: sdk.String("7271 Peyton Garden"),
                    },
                    FullPhoneNumber: sdk.String("sapiente"),
                    Logo: sdk.String("consectetur"),
                    MerchantAccount: "esse",
                    MerchantCategoryCode: "blanditiis",
                    MerchantHouseNumber: sdk.String("provident"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("a"),
                        PhoneNumber: sdk.String("nulla"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumEcommerce.ToPointer(),
                    SplitConfigurationUUID: sdk.String("quasi"),
                    Status: shared.StoreDetailStatusEnumPending.ToPointer(),
                    Store: sdk.String("error"),
                    StoreName: sdk.String("sint"),
                    StoreReference: sdk.String("pariatur"),
                    VirtualAccount: sdk.String("possimus"),
                    WebAddress: sdk.String("quia"),
                },
            },
            WebAddress: sdk.String("eveniet"),
        },
        CreateDefaultAccount: sdk.Bool(false),
        Description: sdk.String("asperiores"),
        LegalEntity: shared.CreateAccountHolderRequestLegalEntityEnumNonProfit,
        PrimaryCurrency: sdk.String("veritatis"),
        ProcessingTier: sdk.Int(159414),
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
        AccountCode: sdk.String("quasi"),
        AccountHolderCode: sdk.String("similique"),
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
        AccountHolderCode: "culpa",
        FormType: "aliquid",
        Year: 949298,
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
        AccountHolderCode: "quae",
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
        AccountHolderCode: "earum",
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
        AccountHolderCode: "vel",
        AccountHolderDetails: &shared.AccountHolderDetails{
            Address: &shared.ViasAddress{
                City: sdk.String("Destineecester"),
                Country: sdk.String("Svalbard & Jan Mayen Islands"),
                HouseNumberOrName: sdk.String("soluta"),
                PostalCode: sdk.String("39134"),
                StateOrProvince: sdk.String("ullam"),
                Street: sdk.String("0518 Kailyn Viaduct"),
            },
            BankAccountDetails: []shared.BankAccountDetail{
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("architecto"),
                    AccountType: sdk.String("omnis"),
                    BankAccountName: sdk.String("tenetur"),
                    BankAccountReference: sdk.String("quasi"),
                    BankAccountUUID: sdk.String("at"),
                    BankBicSwift: sdk.String("et"),
                    BankCity: sdk.String("voluptate"),
                    BankCode: sdk.String("ipsa"),
                    BankName: sdk.String("minima"),
                    BranchCode: sdk.String("veritatis"),
                    CheckCode: sdk.String("consectetur"),
                    CountryCode: sdk.String("DM"),
                    CurrencyCode: sdk.String("iste"),
                    Iban: sdk.String("temporibus"),
                    OwnerCity: sdk.String("accusantium"),
                    OwnerCountryCode: sdk.String("rem"),
                    OwnerDateOfBirth: sdk.String("aut"),
                    OwnerHouseNumberOrName: sdk.String("laudantium"),
                    OwnerName: sdk.String("eum"),
                    OwnerNationality: sdk.String("mollitia"),
                    OwnerPostalCode: sdk.String("ab"),
                    OwnerState: sdk.String("corrupti"),
                    OwnerStreet: sdk.String("non"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("voluptatem"),
                    URLForVerification: sdk.String("dolor"),
                },
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("occaecati"),
                    AccountType: sdk.String("numquam"),
                    BankAccountName: sdk.String("impedit"),
                    BankAccountReference: sdk.String("explicabo"),
                    BankAccountUUID: sdk.String("voluptas"),
                    BankBicSwift: sdk.String("aut"),
                    BankCity: sdk.String("dignissimos"),
                    BankCode: sdk.String("dicta"),
                    BankName: sdk.String("maiores"),
                    BranchCode: sdk.String("natus"),
                    CheckCode: sdk.String("velit"),
                    CountryCode: sdk.String("WF"),
                    CurrencyCode: sdk.String("voluptas"),
                    Iban: sdk.String("asperiores"),
                    OwnerCity: sdk.String("aperiam"),
                    OwnerCountryCode: sdk.String("ea"),
                    OwnerDateOfBirth: sdk.String("quaerat"),
                    OwnerHouseNumberOrName: sdk.String("consequuntur"),
                    OwnerName: sdk.String("repellendus"),
                    OwnerNationality: sdk.String("officia"),
                    OwnerPostalCode: sdk.String("maxime"),
                    OwnerState: sdk.String("dignissimos"),
                    OwnerStreet: sdk.String("officia"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("asperiores"),
                    URLForVerification: sdk.String("nemo"),
                },
                shared.BankAccountDetail{
                    AccountNumber: sdk.String("quae"),
                    AccountType: sdk.String("quaerat"),
                    BankAccountName: sdk.String("porro"),
                    BankAccountReference: sdk.String("quod"),
                    BankAccountUUID: sdk.String("labore"),
                    BankBicSwift: sdk.String("ab"),
                    BankCity: sdk.String("adipisci"),
                    BankCode: sdk.String("fuga"),
                    BankName: sdk.String("id"),
                    BranchCode: sdk.String("suscipit"),
                    CheckCode: sdk.String("velit"),
                    CountryCode: sdk.String("MY"),
                    CurrencyCode: sdk.String("est"),
                    Iban: sdk.String("recusandae"),
                    OwnerCity: sdk.String("totam"),
                    OwnerCountryCode: sdk.String("fugiat"),
                    OwnerDateOfBirth: sdk.String("vel"),
                    OwnerHouseNumberOrName: sdk.String("ducimus"),
                    OwnerName: sdk.String("quos"),
                    OwnerNationality: sdk.String("vel"),
                    OwnerPostalCode: sdk.String("labore"),
                    OwnerState: sdk.String("possimus"),
                    OwnerStreet: sdk.String("facilis"),
                    PrimaryAccount: sdk.Bool(false),
                    TaxID: sdk.String("cum"),
                    URLForVerification: sdk.String("commodi"),
                },
            },
            BankAggregatorDataReference: sdk.String("in"),
            BusinessDetails: &shared.BusinessDetails{
                DoingBusinessAs: sdk.String("corporis"),
                LegalBusinessName: sdk.String("reiciendis"),
                ListedUltimateParentCompany: []shared.UltimateParentCompany{
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Fort Graham"),
                            Country: sdk.String("Aruba"),
                            HouseNumberOrName: sdk.String("cum"),
                            PostalCode: sdk.String("43982"),
                            StateOrProvince: sdk.String("doloribus"),
                            Street: sdk.String("9698 Bo Well"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("adipisci"),
                            RegistrationNumber: sdk.String("non"),
                            StockExchange: sdk.String("amet"),
                            StockNumber: sdk.String("beatae"),
                            StockTicker: sdk.String("dignissimos"),
                        },
                        UltimateParentCompanyCode: sdk.String("a"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("DeSoto"),
                            Country: sdk.String("Guernsey"),
                            HouseNumberOrName: sdk.String("harum"),
                            PostalCode: sdk.String("09718"),
                            StateOrProvince: sdk.String("similique"),
                            Street: sdk.String("13333 Parisian Ferry"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("minus"),
                            RegistrationNumber: sdk.String("dolores"),
                            StockExchange: sdk.String("blanditiis"),
                            StockNumber: sdk.String("in"),
                            StockTicker: sdk.String("dolore"),
                        },
                        UltimateParentCompanyCode: sdk.String("aliquam"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("South Valley"),
                            Country: sdk.String("Guam"),
                            HouseNumberOrName: sdk.String("adipisci"),
                            PostalCode: sdk.String("55926-5859"),
                            StateOrProvince: sdk.String("exercitationem"),
                            Street: sdk.String("061 Cole Well"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("facilis"),
                            RegistrationNumber: sdk.String("voluptate"),
                            StockExchange: sdk.String("expedita"),
                            StockNumber: sdk.String("ab"),
                            StockTicker: sdk.String("iste"),
                        },
                        UltimateParentCompanyCode: sdk.String("dolore"),
                    },
                    shared.UltimateParentCompany{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Creminport"),
                            Country: sdk.String("Iraq"),
                            HouseNumberOrName: sdk.String("quidem"),
                            PostalCode: sdk.String("36139"),
                            StateOrProvince: sdk.String("debitis"),
                            Street: sdk.String("90592 Laron Flats"),
                        },
                        BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                            LegalBusinessName: sdk.String("necessitatibus"),
                            RegistrationNumber: sdk.String("ipsum"),
                            StockExchange: sdk.String("ea"),
                            StockNumber: sdk.String("occaecati"),
                            StockTicker: sdk.String("quos"),
                        },
                        UltimateParentCompanyCode: sdk.String("voluptatibus"),
                    },
                },
                RegistrationNumber: sdk.String("tempora"),
                Shareholders: []shared.ShareholderContact{
                    shared.ShareholderContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Waldoview"),
                            Country: sdk.String("Anguilla"),
                            HouseNumberOrName: sdk.String("non"),
                            PostalCode: sdk.String("57323-8507"),
                            StateOrProvince: sdk.String("error"),
                            Street: sdk.String("3998 Amanda Underpass"),
                        },
                        Email: sdk.String("Ernesto.King51@gmail.com"),
                        FullPhoneNumber: sdk.String("exercitationem"),
                        JobTitle: sdk.String("Central Mobility Coordinator"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Marilyne"),
                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                            Infix: sdk.String("error"),
                            LastName: sdk.String("Welch"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("expedita"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("neque"),
                                    IssuerCountry: sdk.String("dolorum"),
                                    IssuerState: sdk.String("nostrum"),
                                    Number: sdk.String("officia"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("corrupti"),
                                    IssuerCountry: sdk.String("accusamus"),
                                    IssuerState: sdk.String("tempora"),
                                    Number: sdk.String("atque"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("ut"),
                                    IssuerCountry: sdk.String("fugiat"),
                                    IssuerState: sdk.String("voluptatem"),
                                    Number: sdk.String("culpa"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("magnam"),
                                    IssuerCountry: sdk.String("consequatur"),
                                    IssuerState: sdk.String("esse"),
                                    Number: sdk.String("ipsam"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                            },
                            Nationality: sdk.String("voluptatum"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("quas"),
                            PhoneNumber: sdk.String("repudiandae"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                        },
                        ShareholderCode: sdk.String("et"),
                        ShareholderReference: sdk.String("blanditiis"),
                        ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                        WebAddress: sdk.String("sed"),
                    },
                    shared.ShareholderContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("South Evelineside"),
                            Country: sdk.String("Nepal"),
                            HouseNumberOrName: sdk.String("consequatur"),
                            PostalCode: sdk.String("92610"),
                            StateOrProvince: sdk.String("occaecati"),
                            Street: sdk.String("65679 Abdul Fall"),
                        },
                        Email: sdk.String("Jackeline_Miller83@yahoo.com"),
                        FullPhoneNumber: sdk.String("delectus"),
                        JobTitle: sdk.String("Chief Solutions Technician"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Maurine"),
                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                            Infix: sdk.String("facere"),
                            LastName: sdk.String("Pfannerstill"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("praesentium"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("veniam"),
                                    IssuerCountry: sdk.String("voluptatem"),
                                    IssuerState: sdk.String("quisquam"),
                                    Number: sdk.String("repudiandae"),
                                    Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("atque"),
                                    IssuerCountry: sdk.String("reprehenderit"),
                                    IssuerState: sdk.String("asperiores"),
                                    Number: sdk.String("totam"),
                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("quidem"),
                                    IssuerCountry: sdk.String("maxime"),
                                    IssuerState: sdk.String("et"),
                                    Number: sdk.String("esse"),
                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                },
                            },
                            Nationality: sdk.String("assumenda"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("ea"),
                            PhoneNumber: sdk.String("atque"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                        },
                        ShareholderCode: sdk.String("officiis"),
                        ShareholderReference: sdk.String("officiis"),
                        ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                        WebAddress: sdk.String("natus"),
                    },
                },
                Signatories: []shared.SignatoryContact{
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("South Willstad"),
                            Country: sdk.String("Taiwan"),
                            HouseNumberOrName: sdk.String("error"),
                            PostalCode: sdk.String("39551-9682"),
                            StateOrProvince: sdk.String("reiciendis"),
                            Street: sdk.String("91011 Gillian Fields"),
                        },
                        Email: sdk.String("Kelton.Gusikowski58@hotmail.com"),
                        FullPhoneNumber: sdk.String("officiis"),
                        JobTitle: sdk.String("Customer Division Manager"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Sydni"),
                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                            Infix: sdk.String("consequuntur"),
                            LastName: sdk.String("Considine"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("id"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("reprehenderit"),
                                    IssuerCountry: sdk.String("error"),
                                    IssuerState: sdk.String("illo"),
                                    Number: sdk.String("corporis"),
                                    Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("eveniet"),
                                    IssuerCountry: sdk.String("non"),
                                    IssuerState: sdk.String("vero"),
                                    Number: sdk.String("doloremque"),
                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                },
                            },
                            Nationality: sdk.String("ipsa"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("totam"),
                            PhoneNumber: sdk.String("quae"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                        },
                        SignatoryCode: sdk.String("eveniet"),
                        SignatoryReference: sdk.String("qui"),
                        WebAddress: sdk.String("cum"),
                    },
                    shared.SignatoryContact{
                        Address: &shared.ViasAddress{
                            City: sdk.String("Stanberg"),
                            Country: sdk.String("Pakistan"),
                            HouseNumberOrName: sdk.String("distinctio"),
                            PostalCode: sdk.String("53390-3546"),
                            StateOrProvince: sdk.String("voluptas"),
                            Street: sdk.String("99163 Marilyne Estate"),
                        },
                        Email: sdk.String("Tianna47@gmail.com"),
                        FullPhoneNumber: sdk.String("ex"),
                        JobTitle: sdk.String("Future Web Manager"),
                        Name: &shared.ViasName{
                            FirstName: sdk.String("Sigrid"),
                            Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                            Infix: sdk.String("eum"),
                            LastName: sdk.String("Hills"),
                        },
                        PersonalData: &shared.ViasPersonalData{
                            DateOfBirth: sdk.String("recusandae"),
                            DocumentData: []shared.PersonalDocumentData{
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("provident"),
                                    IssuerCountry: sdk.String("quis"),
                                    IssuerState: sdk.String("eum"),
                                    Number: sdk.String("reiciendis"),
                                    Type: shared.PersonalDocumentDataTypeEnumPassport,
                                },
                                shared.PersonalDocumentData{
                                    ExpirationDate: sdk.String("aspernatur"),
                                    IssuerCountry: sdk.String("ullam"),
                                    IssuerState: sdk.String("quasi"),
                                    Number: sdk.String("animi"),
                                    Type: shared.PersonalDocumentDataTypeEnumID,
                                },
                            },
                            Nationality: sdk.String("mollitia"),
                        },
                        PhoneNumber: &shared.ViasPhoneNumber{
                            PhoneCountryCode: sdk.String("provident"),
                            PhoneNumber: sdk.String("possimus"),
                            PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                        },
                        SignatoryCode: sdk.String("ex"),
                        SignatoryReference: sdk.String("aliquid"),
                        WebAddress: sdk.String("accusantium"),
                    },
                },
                TaxID: sdk.String("repellat"),
            },
            Email: sdk.String("Felipe_King63@hotmail.com"),
            FullPhoneNumber: sdk.String("laborum"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Raphael"),
                    Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                    Infix: sdk.String("voluptatibus"),
                    LastName: sdk.String("Maggio"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("officiis"),
                    DocumentData: []shared.PersonalDocumentData{
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("cumque"),
                            IssuerCountry: sdk.String("vitae"),
                            IssuerState: sdk.String("rerum"),
                            Number: sdk.String("tempora"),
                            Type: shared.PersonalDocumentDataTypeEnumID,
                        },
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("inventore"),
                            IssuerCountry: sdk.String("fugit"),
                            IssuerState: sdk.String("cumque"),
                            Number: sdk.String("quae"),
                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                        },
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("velit"),
                            IssuerCountry: sdk.String("aspernatur"),
                            IssuerState: sdk.String("eum"),
                            Number: sdk.String("eius"),
                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                        },
                        shared.PersonalDocumentData{
                            ExpirationDate: sdk.String("at"),
                            IssuerCountry: sdk.String("impedit"),
                            IssuerState: sdk.String("eos"),
                            Number: sdk.String("sapiente"),
                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                        },
                    },
                    Nationality: sdk.String("dicta"),
                },
            },
            LastReviewDate: sdk.String("minima"),
            MerchantCategoryCode: sdk.String("beatae"),
            Metadata: map[string]string{
                "provident": "earum",
                "soluta": "hic",
                "illum": "eaque",
            },
            PayoutMethods: []shared.PayoutMethod{
                shared.PayoutMethod{
                    MerchantAccount: "perspiciatis",
                    PayoutMethodCode: sdk.String("maiores"),
                    PayoutMethodReference: sdk.String("debitis"),
                    RecurringDetailReference: "aliquid",
                    ShopperReference: "porro",
                },
                shared.PayoutMethod{
                    MerchantAccount: "suscipit",
                    PayoutMethodCode: sdk.String("dolorem"),
                    PayoutMethodReference: sdk.String("fugit"),
                    RecurringDetailReference: "cumque",
                    ShopperReference: "fuga",
                },
                shared.PayoutMethod{
                    MerchantAccount: "ratione",
                    PayoutMethodCode: sdk.String("animi"),
                    PayoutMethodReference: sdk.String("necessitatibus"),
                    RecurringDetailReference: "nulla",
                    ShopperReference: "consequatur",
                },
                shared.PayoutMethod{
                    MerchantAccount: "quasi",
                    PayoutMethodCode: sdk.String("et"),
                    PayoutMethodReference: sdk.String("ducimus"),
                    RecurringDetailReference: "natus",
                    ShopperReference: "occaecati",
                },
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("East Ava"),
                Country: sdk.String("Chad"),
                HouseNumberOrName: sdk.String("doloribus"),
                PostalCode: sdk.String("80244-1445"),
                StateOrProvince: sdk.String("maiores"),
                Street: sdk.String("408 Bianka Loaf"),
            },
            StoreDetails: []shared.StoreDetail{
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("Guillermoburgh"),
                        Country: sdk.String("Iceland"),
                        HouseNumberOrName: sdk.String("ipsa"),
                        PostalCode: sdk.String("13873-6330"),
                        StateOrProvince: sdk.String("eum"),
                        Street: sdk.String("6606 Volkman Plain"),
                    },
                    FullPhoneNumber: sdk.String("laborum"),
                    Logo: sdk.String("libero"),
                    MerchantAccount: "ad",
                    MerchantCategoryCode: "deleniti",
                    MerchantHouseNumber: sdk.String("enim"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("vitae"),
                        PhoneNumber: sdk.String("repellendus"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumPos.ToPointer(),
                    SplitConfigurationUUID: sdk.String("ex"),
                    Status: shared.StoreDetailStatusEnumClosed.ToPointer(),
                    Store: sdk.String("ad"),
                    StoreName: sdk.String("expedita"),
                    StoreReference: sdk.String("voluptatem"),
                    VirtualAccount: sdk.String("molestias"),
                    WebAddress: sdk.String("cum"),
                },
                shared.StoreDetail{
                    Address: shared.ViasAddress{
                        City: sdk.String("North Juston"),
                        Country: sdk.String("Mozambique"),
                        HouseNumberOrName: sdk.String("veritatis"),
                        PostalCode: sdk.String("66098-1688"),
                        StateOrProvince: sdk.String("voluptatem"),
                        Street: sdk.String("59495 Hickle Well"),
                    },
                    FullPhoneNumber: sdk.String("ratione"),
                    Logo: sdk.String("ullam"),
                    MerchantAccount: "perferendis",
                    MerchantCategoryCode: "illum",
                    MerchantHouseNumber: sdk.String("totam"),
                    PhoneNumber: &shared.ViasPhoneNumber{
                        PhoneCountryCode: sdk.String("impedit"),
                        PhoneNumber: sdk.String("quibusdam"),
                        PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                    },
                    ShopperInteraction: shared.StoreDetailShopperInteractionEnumEcommerce.ToPointer(),
                    SplitConfigurationUUID: sdk.String("culpa"),
                    Status: shared.StoreDetailStatusEnumClosed.ToPointer(),
                    Store: sdk.String("aliquam"),
                    StoreName: sdk.String("inventore"),
                    StoreReference: sdk.String("deleniti"),
                    VirtualAccount: sdk.String("veritatis"),
                    WebAddress: sdk.String("tempora"),
                },
            },
            WebAddress: sdk.String("dolor"),
        },
        Description: sdk.String("consequatur"),
        LegalEntity: shared.UpdateAccountHolderRequestLegalEntityEnumBusiness.ToPointer(),
        PrimaryCurrency: sdk.String("sit"),
        ProcessingTier: sdk.Int(265039),
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
        AccountHolderCode: "fugit",
        Disable: false,
        Reason: sdk.String("ab"),
        StateType: shared.UpdateAccountHolderStateRequestStateTypeEnumLimitlessProcessing,
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
