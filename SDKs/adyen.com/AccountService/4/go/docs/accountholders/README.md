# AccountHolders

### Available Operations

* [PostCloseAccountHolder](#postcloseaccountholder) - Close an account holder
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
        AccountHolderCode: "distinctio",
        AccountHolderDetails: shared.AccountHolderDetails{
            Address: &shared.ViasAddress{
                City: sdk.String("New Orleans"),
                Country: sdk.String("Sweden"),
                HouseNumberOrName: sdk.String("corrupti"),
                PostalCode: sdk.String("46634-2809"),
                StateOrProvince: sdk.String("tempora"),
                Street: sdk.String("4785 Kenyon Hollow"),
            },
            BankAccountDetails: []shared.BankAccountDetailWrapper{
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("temporibus"),
                        AccountType: sdk.String("ab"),
                        BankAccountName: sdk.String("quis"),
                        BankAccountUUID: sdk.String("veritatis"),
                        BankBicSwift: sdk.String("deserunt"),
                        BankCity: sdk.String("perferendis"),
                        BankCode: sdk.String("ipsam"),
                        BankName: sdk.String("repellendus"),
                        BranchCode: sdk.String("sapiente"),
                        CheckCode: sdk.String("quo"),
                        CountryCode: sdk.String("BW"),
                        CurrencyCode: sdk.String("at"),
                        Iban: sdk.String("at"),
                        OwnerCity: sdk.String("maiores"),
                        OwnerCountryCode: sdk.String("molestiae"),
                        OwnerDateOfBirth: sdk.String("quod"),
                        OwnerHouseNumberOrName: sdk.String("quod"),
                        OwnerName: sdk.String("esse"),
                        OwnerNationality: sdk.String("totam"),
                        OwnerPostalCode: sdk.String("porro"),
                        OwnerState: sdk.String("dolorum"),
                        OwnerStreet: sdk.String("dicta"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("nam"),
                        URLForVerification: sdk.String("officia"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("occaecati"),
                        AccountType: sdk.String("fugit"),
                        BankAccountName: sdk.String("deleniti"),
                        BankAccountUUID: sdk.String("hic"),
                        BankBicSwift: sdk.String("optio"),
                        BankCity: sdk.String("totam"),
                        BankCode: sdk.String("beatae"),
                        BankName: sdk.String("commodi"),
                        BranchCode: sdk.String("molestiae"),
                        CheckCode: sdk.String("modi"),
                        CountryCode: sdk.String("CM"),
                        CurrencyCode: sdk.String("impedit"),
                        Iban: sdk.String("cum"),
                        OwnerCity: sdk.String("esse"),
                        OwnerCountryCode: sdk.String("ipsum"),
                        OwnerDateOfBirth: sdk.String("excepturi"),
                        OwnerHouseNumberOrName: sdk.String("aspernatur"),
                        OwnerName: sdk.String("perferendis"),
                        OwnerNationality: sdk.String("ad"),
                        OwnerPostalCode: sdk.String("natus"),
                        OwnerState: sdk.String("sed"),
                        OwnerStreet: sdk.String("iste"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("dolor"),
                        URLForVerification: sdk.String("natus"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("laboriosam"),
                        AccountType: sdk.String("hic"),
                        BankAccountName: sdk.String("saepe"),
                        BankAccountUUID: sdk.String("fuga"),
                        BankBicSwift: sdk.String("in"),
                        BankCity: sdk.String("corporis"),
                        BankCode: sdk.String("iste"),
                        BankName: sdk.String("iure"),
                        BranchCode: sdk.String("saepe"),
                        CheckCode: sdk.String("quidem"),
                        CountryCode: sdk.String("BJ"),
                        CurrencyCode: sdk.String("ipsa"),
                        Iban: sdk.String("reiciendis"),
                        OwnerCity: sdk.String("est"),
                        OwnerCountryCode: sdk.String("mollitia"),
                        OwnerDateOfBirth: sdk.String("laborum"),
                        OwnerHouseNumberOrName: sdk.String("dolores"),
                        OwnerName: sdk.String("dolorem"),
                        OwnerNationality: sdk.String("corporis"),
                        OwnerPostalCode: sdk.String("explicabo"),
                        OwnerState: sdk.String("nobis"),
                        OwnerStreet: sdk.String("enim"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("omnis"),
                        URLForVerification: sdk.String("nemo"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("minima"),
                        AccountType: sdk.String("excepturi"),
                        BankAccountName: sdk.String("accusantium"),
                        BankAccountUUID: sdk.String("iure"),
                        BankBicSwift: sdk.String("culpa"),
                        BankCity: sdk.String("doloribus"),
                        BankCode: sdk.String("sapiente"),
                        BankName: sdk.String("architecto"),
                        BranchCode: sdk.String("mollitia"),
                        CheckCode: sdk.String("dolorem"),
                        CountryCode: sdk.String("MZ"),
                        CurrencyCode: sdk.String("consequuntur"),
                        Iban: sdk.String("repellat"),
                        OwnerCity: sdk.String("mollitia"),
                        OwnerCountryCode: sdk.String("occaecati"),
                        OwnerDateOfBirth: sdk.String("numquam"),
                        OwnerHouseNumberOrName: sdk.String("commodi"),
                        OwnerName: sdk.String("quam"),
                        OwnerNationality: sdk.String("molestiae"),
                        OwnerPostalCode: sdk.String("velit"),
                        OwnerState: sdk.String("error"),
                        OwnerStreet: sdk.String("quia"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("quis"),
                        URLForVerification: sdk.String("vitae"),
                    },
                },
            },
            BusinessDetails: &shared.BusinessDetails{
                DoingBusinessAs: sdk.String("laborum"),
                LegalBusinessName: sdk.String("animi"),
                ListedUltimateParentCompany: []shared.UltimateParentCompanyWrapper{
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Port Clevelandshire"),
                                Country: sdk.String("Guinea-Bissau"),
                                HouseNumberOrName: sdk.String("id"),
                                PostalCode: sdk.String("00686-0998"),
                                StateOrProvince: sdk.String("nihil"),
                                Street: sdk.String("9064 Aufderhar Burgs"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("reprehenderit"),
                                RegistrationNumber: sdk.String("ut"),
                                StockExchange: sdk.String("maiores"),
                                StockNumber: sdk.String("dicta"),
                                StockTicker: sdk.String("corporis"),
                            },
                            UltimateParentCompanyCode: sdk.String("dolore"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Birdiechester"),
                                Country: sdk.String("Georgia"),
                                HouseNumberOrName: sdk.String("accusamus"),
                                PostalCode: sdk.String("90265"),
                                StateOrProvince: sdk.String("excepturi"),
                                Street: sdk.String("255 Botsford Valleys"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("sint"),
                                RegistrationNumber: sdk.String("veritatis"),
                                StockExchange: sdk.String("itaque"),
                                StockNumber: sdk.String("incidunt"),
                                StockTicker: sdk.String("enim"),
                            },
                            UltimateParentCompanyCode: sdk.String("consequatur"),
                        },
                    },
                },
                RegistrationNumber: sdk.String("est"),
                Shareholders: []shared.ShareholderContactWrapper{
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Lake Michellehaven"),
                                Country: sdk.String("Finland"),
                                HouseNumberOrName: sdk.String("modi"),
                                PostalCode: sdk.String("35501"),
                                StateOrProvince: sdk.String("assumenda"),
                                Street: sdk.String("0165 Mckayla River"),
                            },
                            Email: sdk.String("Vilma75@gmail.com"),
                            FullPhoneNumber: sdk.String("sint"),
                            JobTitle: sdk.String("Regional Intranet Agent"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Kianna"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("dolor"),
                                LastName: sdk.String("Toy"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("a"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("in"),
                                            IssuerCountry: sdk.String("in"),
                                            IssuerState: sdk.String("illum"),
                                            Number: sdk.String("maiores"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("dicta"),
                                            IssuerCountry: sdk.String("magnam"),
                                            IssuerState: sdk.String("cumque"),
                                            Number: sdk.String("facere"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aliquid"),
                                            IssuerCountry: sdk.String("laborum"),
                                            IssuerState: sdk.String("accusamus"),
                                            Number: sdk.String("non"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("enim"),
                                Nationality: sdk.String("accusamus"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("delectus"),
                                PhoneNumber: sdk.String("quidem"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            ShareholderCode: sdk.String("nam"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                            WebAddress: sdk.String("blanditiis"),
                        },
                    },
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Verlieburgh"),
                                Country: sdk.String("Niger"),
                                HouseNumberOrName: sdk.String("nisi"),
                                PostalCode: sdk.String("66404"),
                                StateOrProvince: sdk.String("magnam"),
                                Street: sdk.String("622 Liana Route"),
                            },
                            Email: sdk.String("Shaina29@yahoo.com"),
                            FullPhoneNumber: sdk.String("et"),
                            JobTitle: sdk.String("Global Identity Planner"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Katrina"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("accusantium"),
                                LastName: sdk.String("O'Hara"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("reiciendis"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("ad"),
                                            IssuerCountry: sdk.String("eum"),
                                            IssuerState: sdk.String("dolor"),
                                            Number: sdk.String("necessitatibus"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("nemo"),
                                            IssuerCountry: sdk.String("quasi"),
                                            IssuerState: sdk.String("iure"),
                                            Number: sdk.String("doloribus"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("eius"),
                                            IssuerCountry: sdk.String("maxime"),
                                            IssuerState: sdk.String("deleniti"),
                                            Number: sdk.String("facilis"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("architecto"),
                                Nationality: sdk.String("architecto"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("repudiandae"),
                                PhoneNumber: sdk.String("ullam"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            ShareholderCode: sdk.String("nihil"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                            WebAddress: sdk.String("quibusdam"),
                        },
                    },
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Fort Sanfordtown"),
                                Country: sdk.String("Cayman Islands"),
                                HouseNumberOrName: sdk.String("praesentium"),
                                PostalCode: sdk.String("11788-8451"),
                                StateOrProvince: sdk.String("ea"),
                                Street: sdk.String("09634 Mireya Camp"),
                            },
                            Email: sdk.String("Freddie85@hotmail.com"),
                            FullPhoneNumber: sdk.String("amet"),
                            JobTitle: sdk.String("Lead Accounts Director"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Tyreek"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("nobis"),
                                LastName: sdk.String("D'Amore"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("quis"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("dignissimos"),
                                            IssuerCountry: sdk.String("eaque"),
                                            IssuerState: sdk.String("quis"),
                                            Number: sdk.String("nesciunt"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("perferendis"),
                                            IssuerCountry: sdk.String("dolores"),
                                            IssuerState: sdk.String("minus"),
                                            Number: sdk.String("quam"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("vero"),
                                            IssuerCountry: sdk.String("nostrum"),
                                            IssuerState: sdk.String("hic"),
                                            Number: sdk.String("recusandae"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("facilis"),
                                Nationality: sdk.String("perspiciatis"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("voluptatem"),
                                PhoneNumber: sdk.String("porro"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                            },
                            ShareholderCode: sdk.String("blanditiis"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                            WebAddress: sdk.String("eaque"),
                        },
                    },
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Maximillianburgh"),
                                Country: sdk.String("Zambia"),
                                HouseNumberOrName: sdk.String("earum"),
                                PostalCode: sdk.String("66585"),
                                StateOrProvince: sdk.String("nobis"),
                                Street: sdk.String("935 Coy Estates"),
                            },
                            Email: sdk.String("Christy_Erdman73@gmail.com"),
                            FullPhoneNumber: sdk.String("voluptate"),
                            JobTitle: sdk.String("Central Usability Manager"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Marina"),
                                Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                Infix: sdk.String("veritatis"),
                                LastName: sdk.String("Beer"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("ipsa"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("odio"),
                                            IssuerCountry: sdk.String("quaerat"),
                                            IssuerState: sdk.String("accusamus"),
                                            Number: sdk.String("quidem"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("voluptas"),
                                            IssuerCountry: sdk.String("natus"),
                                            IssuerState: sdk.String("eos"),
                                            Number: sdk.String("atque"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("fugiat"),
                                Nationality: sdk.String("ab"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("soluta"),
                                PhoneNumber: sdk.String("dolorum"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                            },
                            ShareholderCode: sdk.String("voluptate"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                            WebAddress: sdk.String("deleniti"),
                        },
                    },
                },
                Signatories: []shared.SignatoryContactWrapper{
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Portland"),
                                Country: sdk.String("Yemen"),
                                HouseNumberOrName: sdk.String("nihil"),
                                PostalCode: sdk.String("46921"),
                                StateOrProvince: sdk.String("perferendis"),
                                Street: sdk.String("78393 McKenzie Glen"),
                            },
                            Email: sdk.String("Josianne87@hotmail.com"),
                            FullPhoneNumber: sdk.String("quaerat"),
                            JobTitle: sdk.String("Future Group Consultant"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Shea"),
                                Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                Infix: sdk.String("dolorum"),
                                LastName: sdk.String("Wilderman"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("esse"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("iusto"),
                                            IssuerCountry: sdk.String("ipsum"),
                                            IssuerState: sdk.String("quisquam"),
                                            Number: sdk.String("tenetur"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("tempore"),
                                            IssuerCountry: sdk.String("accusamus"),
                                            IssuerState: sdk.String("numquam"),
                                            Number: sdk.String("enim"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("sapiente"),
                                            IssuerCountry: sdk.String("totam"),
                                            IssuerState: sdk.String("nihil"),
                                            Number: sdk.String("sit"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("neque"),
                                Nationality: sdk.String("sed"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("vel"),
                                PhoneNumber: sdk.String("libero"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                            },
                            SignatoryCode: sdk.String("deserunt"),
                            SignatoryReference: sdk.String("quam"),
                            WebAddress: sdk.String("ipsum"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("East Kylie"),
                                Country: sdk.String("Slovakia (Slovak Republic)"),
                                HouseNumberOrName: sdk.String("pariatur"),
                                PostalCode: sdk.String("16521-1773"),
                                StateOrProvince: sdk.String("quam"),
                                Street: sdk.String("8121 Jefferey Court"),
                            },
                            Email: sdk.String("Mireya76@yahoo.com"),
                            FullPhoneNumber: sdk.String("soluta"),
                            JobTitle: sdk.String("Legacy Security Agent"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Cydney"),
                                Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                Infix: sdk.String("nobis"),
                                LastName: sdk.String("Lueilwitz"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("tempore"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aperiam"),
                                            IssuerCountry: sdk.String("delectus"),
                                            IssuerState: sdk.String("dolorem"),
                                            Number: sdk.String("dolore"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("adipisci"),
                                            IssuerCountry: sdk.String("dolorum"),
                                            IssuerState: sdk.String("architecto"),
                                            Number: sdk.String("quae"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("quas"),
                                            IssuerCountry: sdk.String("itaque"),
                                            IssuerState: sdk.String("consequatur"),
                                            Number: sdk.String("est"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("porro"),
                                Nationality: sdk.String("doloribus"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("ut"),
                                PhoneNumber: sdk.String("facilis"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            SignatoryCode: sdk.String("qui"),
                            SignatoryReference: sdk.String("quae"),
                            WebAddress: sdk.String("laudantium"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Krisworth"),
                                Country: sdk.String("Senegal"),
                                HouseNumberOrName: sdk.String("vero"),
                                PostalCode: sdk.String("32942-8949"),
                                StateOrProvince: sdk.String("distinctio"),
                                Street: sdk.String("467 Kuphal Forks"),
                            },
                            Email: sdk.String("Rosina_Dickinson@hotmail.com"),
                            FullPhoneNumber: sdk.String("aut"),
                            JobTitle: sdk.String("Principal Tactics Facilitator"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Caleigh"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("maiores"),
                                LastName: sdk.String("Wyman"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("iusto"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("ducimus"),
                                            IssuerCountry: sdk.String("alias"),
                                            IssuerState: sdk.String("officia"),
                                            Number: sdk.String("tempora"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("ea"),
                                            IssuerCountry: sdk.String("aspernatur"),
                                            IssuerState: sdk.String("vel"),
                                            Number: sdk.String("possimus"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("ratione"),
                                            IssuerCountry: sdk.String("ex"),
                                            IssuerState: sdk.String("laudantium"),
                                            Number: sdk.String("dicta"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("maiores"),
                                            IssuerCountry: sdk.String("quasi"),
                                            IssuerState: sdk.String("ex"),
                                            Number: sdk.String("nulla"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("voluptatibus"),
                                Nationality: sdk.String("nostrum"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("sapiente"),
                                PhoneNumber: sdk.String("quisquam"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            SignatoryCode: sdk.String("ea"),
                            SignatoryReference: sdk.String("impedit"),
                            WebAddress: sdk.String("corporis"),
                        },
                    },
                },
                TaxID: sdk.String("veniam"),
            },
            Email: sdk.String("Armando_Gutkowski@yahoo.com"),
            FullPhoneNumber: sdk.String("consectetur"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Tierra"),
                    Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                    Infix: sdk.String("minima"),
                    LastName: sdk.String("Becker"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("a"),
                    DocumentData: []shared.PersonalDocumentDataWrapper{
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("aut"),
                                IssuerCountry: sdk.String("aut"),
                                IssuerState: sdk.String("deleniti"),
                                Number: sdk.String("impedit"),
                                Type: shared.PersonalDocumentDataTypeEnumID,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("fugit"),
                                IssuerCountry: sdk.String("accusamus"),
                                IssuerState: sdk.String("inventore"),
                                Number: sdk.String("non"),
                                Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("dolorum"),
                                IssuerCountry: sdk.String("laborum"),
                                IssuerState: sdk.String("placeat"),
                                Number: sdk.String("velit"),
                                Type: shared.PersonalDocumentDataTypeEnumPassport,
                            },
                        },
                    },
                    IDNumber: sdk.String("autem"),
                    Nationality: sdk.String("nobis"),
                },
            },
            LastReviewDate: sdk.String("quas"),
            MerchantCategoryCode: sdk.String("assumenda"),
            Metadata: map[string]string{
                "voluptas": "libero",
                "quasi": "tempora",
                "numquam": "explicabo",
                "provident": "ipsa",
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("Elishamouth"),
                Country: sdk.String("Equatorial Guinea"),
                HouseNumberOrName: sdk.String("esse"),
                PostalCode: sdk.String("56468"),
                StateOrProvince: sdk.String("ut"),
                Street: sdk.String("3815 Bogan Cape"),
            },
            WebAddress: sdk.String("id"),
        },
        CreateDefaultAccount: sdk.Bool(false),
        Description: sdk.String("quidem"),
        LegalEntity: shared.CreateAccountHolderRequestLegalEntityEnumBusiness,
        PrimaryCurrency: sdk.String("quo"),
        ProcessingTier: sdk.Int(847276),
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
        AccountCode: sdk.String("quo"),
        AccountHolderCode: sdk.String("fuga"),
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
        AccountHolderCode: "eius",
        FormType: "eos",
        Year: 373813,
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
        AccountHolderCode: "ab",
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
        AccountHolderCode: "cupiditate",
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
        AccountHolderCode: "consequatur",
        AccountHolderDetails: &shared.AccountHolderDetails{
            Address: &shared.ViasAddress{
                City: sdk.String("Fort Gabe"),
                Country: sdk.String("Bulgaria"),
                HouseNumberOrName: sdk.String("sequi"),
                PostalCode: sdk.String("49077-4045"),
                StateOrProvince: sdk.String("accusamus"),
                Street: sdk.String("45491 Krajcik Burg"),
            },
            BankAccountDetails: []shared.BankAccountDetailWrapper{
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("eum"),
                        AccountType: sdk.String("quas"),
                        BankAccountName: sdk.String("praesentium"),
                        BankAccountUUID: sdk.String("consequuntur"),
                        BankBicSwift: sdk.String("deleniti"),
                        BankCity: sdk.String("fugit"),
                        BankCode: sdk.String("fuga"),
                        BankName: sdk.String("mollitia"),
                        BranchCode: sdk.String("incidunt"),
                        CheckCode: sdk.String("atque"),
                        CountryCode: sdk.String("BT"),
                        CurrencyCode: sdk.String("minima"),
                        Iban: sdk.String("nisi"),
                        OwnerCity: sdk.String("fugit"),
                        OwnerCountryCode: sdk.String("sapiente"),
                        OwnerDateOfBirth: sdk.String("consequuntur"),
                        OwnerHouseNumberOrName: sdk.String("ratione"),
                        OwnerName: sdk.String("explicabo"),
                        OwnerNationality: sdk.String("saepe"),
                        OwnerPostalCode: sdk.String("occaecati"),
                        OwnerState: sdk.String("atque"),
                        OwnerStreet: sdk.String("et"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("esse"),
                        URLForVerification: sdk.String("eveniet"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("accusamus"),
                        AccountType: sdk.String("veritatis"),
                        BankAccountName: sdk.String("esse"),
                        BankAccountUUID: sdk.String("quod"),
                        BankBicSwift: sdk.String("nam"),
                        BankCity: sdk.String("vero"),
                        BankCode: sdk.String("aliquid"),
                        BankName: sdk.String("quasi"),
                        BranchCode: sdk.String("saepe"),
                        CheckCode: sdk.String("vel"),
                        CountryCode: sdk.String("OM"),
                        CurrencyCode: sdk.String("molestiae"),
                        Iban: sdk.String("rerum"),
                        OwnerCity: sdk.String("occaecati"),
                        OwnerCountryCode: sdk.String("minima"),
                        OwnerDateOfBirth: sdk.String("distinctio"),
                        OwnerHouseNumberOrName: sdk.String("eligendi"),
                        OwnerName: sdk.String("sit"),
                        OwnerNationality: sdk.String("culpa"),
                        OwnerPostalCode: sdk.String("tempore"),
                        OwnerState: sdk.String("adipisci"),
                        OwnerStreet: sdk.String("cumque"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("consequuntur"),
                        URLForVerification: sdk.String("consequatur"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("minus"),
                        AccountType: sdk.String("quaerat"),
                        BankAccountName: sdk.String("sapiente"),
                        BankAccountUUID: sdk.String("consectetur"),
                        BankBicSwift: sdk.String("esse"),
                        BankCity: sdk.String("blanditiis"),
                        BankCode: sdk.String("provident"),
                        BankName: sdk.String("a"),
                        BranchCode: sdk.String("nulla"),
                        CheckCode: sdk.String("quas"),
                        CountryCode: sdk.String("JP"),
                        CurrencyCode: sdk.String("quasi"),
                        Iban: sdk.String("a"),
                        OwnerCity: sdk.String("error"),
                        OwnerCountryCode: sdk.String("sint"),
                        OwnerDateOfBirth: sdk.String("pariatur"),
                        OwnerHouseNumberOrName: sdk.String("possimus"),
                        OwnerName: sdk.String("quia"),
                        OwnerNationality: sdk.String("eveniet"),
                        OwnerPostalCode: sdk.String("asperiores"),
                        OwnerState: sdk.String("facere"),
                        OwnerStreet: sdk.String("veritatis"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("consequuntur"),
                        URLForVerification: sdk.String("quasi"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("similique"),
                        AccountType: sdk.String("culpa"),
                        BankAccountName: sdk.String("aliquid"),
                        BankAccountUUID: sdk.String("tenetur"),
                        BankBicSwift: sdk.String("quae"),
                        BankCity: sdk.String("earum"),
                        BankCode: sdk.String("vel"),
                        BankName: sdk.String("in"),
                        BranchCode: sdk.String("eius"),
                        CheckCode: sdk.String("libero"),
                        CountryCode: sdk.String("SY"),
                        CurrencyCode: sdk.String("soluta"),
                        Iban: sdk.String("accusantium"),
                        OwnerCity: sdk.String("aliquam"),
                        OwnerCountryCode: sdk.String("sapiente"),
                        OwnerDateOfBirth: sdk.String("dicta"),
                        OwnerHouseNumberOrName: sdk.String("ullam"),
                        OwnerName: sdk.String("reprehenderit"),
                        OwnerNationality: sdk.String("ullam"),
                        OwnerPostalCode: sdk.String("nisi"),
                        OwnerState: sdk.String("aut"),
                        OwnerStreet: sdk.String("voluptatum"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("qui"),
                        URLForVerification: sdk.String("quibusdam"),
                    },
                },
            },
            BusinessDetails: &shared.BusinessDetails{
                DoingBusinessAs: sdk.String("ex"),
                LegalBusinessName: sdk.String("deleniti"),
                ListedUltimateParentCompany: []shared.UltimateParentCompanyWrapper{
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Bradtkefurt"),
                                Country: sdk.String("United States of America"),
                                HouseNumberOrName: sdk.String("quasi"),
                                PostalCode: sdk.String("04030-2268"),
                                StateOrProvince: sdk.String("accusantium"),
                                Street: sdk.String("0546 Karlee Flat"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("voluptatem"),
                                RegistrationNumber: sdk.String("dolor"),
                                StockExchange: sdk.String("occaecati"),
                                StockNumber: sdk.String("numquam"),
                                StockTicker: sdk.String("impedit"),
                            },
                            UltimateParentCompanyCode: sdk.String("explicabo"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("North Jennyfer"),
                                Country: sdk.String("Bouvet Island (Bouvetoya)"),
                                HouseNumberOrName: sdk.String("maiores"),
                                PostalCode: sdk.String("29390-4318"),
                                StateOrProvince: sdk.String("officia"),
                                Street: sdk.String("469 Anjali Garden"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("porro"),
                                RegistrationNumber: sdk.String("quod"),
                                StockExchange: sdk.String("labore"),
                                StockNumber: sdk.String("ab"),
                                StockTicker: sdk.String("adipisci"),
                            },
                            UltimateParentCompanyCode: sdk.String("fuga"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Homenickburgh"),
                                Country: sdk.String("New Caledonia"),
                                HouseNumberOrName: sdk.String("est"),
                                PostalCode: sdk.String("58445-4287"),
                                StateOrProvince: sdk.String("cum"),
                                Street: sdk.String("4398 Tia Inlet"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("aperiam"),
                                RegistrationNumber: sdk.String("cum"),
                                StockExchange: sdk.String("consectetur"),
                                StockNumber: sdk.String("in"),
                                StockTicker: sdk.String("exercitationem"),
                            },
                            UltimateParentCompanyCode: sdk.String("earum"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Dundalk"),
                                Country: sdk.String("Western Sahara"),
                                HouseNumberOrName: sdk.String("suscipit"),
                                PostalCode: sdk.String("69821-9222"),
                                StateOrProvince: sdk.String("beatae"),
                                Street: sdk.String("9823 Howe Cape"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("voluptates"),
                                RegistrationNumber: sdk.String("libero"),
                                StockExchange: sdk.String("vitae"),
                                StockNumber: sdk.String("accusamus"),
                                StockTicker: sdk.String("similique"),
                            },
                            UltimateParentCompanyCode: sdk.String("tempora"),
                        },
                    },
                },
                RegistrationNumber: sdk.String("aspernatur"),
                Shareholders: []shared.ShareholderContactWrapper{
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("West Enrique"),
                                Country: sdk.String("Saint Helena"),
                                HouseNumberOrName: sdk.String("dolorum"),
                                PostalCode: sdk.String("71542"),
                                StateOrProvince: sdk.String("aliquam"),
                                Street: sdk.String("832 Kuvalis Motorway"),
                            },
                            Email: sdk.String("Colleen_Nader@hotmail.com"),
                            FullPhoneNumber: sdk.String("totam"),
                            JobTitle: sdk.String("Chief Tactics Producer"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Alberto"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("sed"),
                                LastName: sdk.String("Wisoky"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("explicabo"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("facilis"),
                                            IssuerCountry: sdk.String("voluptate"),
                                            IssuerState: sdk.String("expedita"),
                                            Number: sdk.String("ab"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("dolore"),
                                            IssuerCountry: sdk.String("laborum"),
                                            IssuerState: sdk.String("sed"),
                                            Number: sdk.String("in"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("quidem"),
                                            IssuerCountry: sdk.String("explicabo"),
                                            IssuerState: sdk.String("voluptas"),
                                            Number: sdk.String("unde"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("suscipit"),
                                            IssuerCountry: sdk.String("sapiente"),
                                            IssuerState: sdk.String("debitis"),
                                            Number: sdk.String("illo"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("perferendis"),
                                Nationality: sdk.String("corrupti"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("maiores"),
                                PhoneNumber: sdk.String("incidunt"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                            },
                            ShareholderCode: sdk.String("provident"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                            WebAddress: sdk.String("necessitatibus"),
                        },
                    },
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("South Kory"),
                                Country: sdk.String("Marshall Islands"),
                                HouseNumberOrName: sdk.String("voluptatibus"),
                                PostalCode: sdk.String("24940"),
                                StateOrProvince: sdk.String("non"),
                                Street: sdk.String("573 Gail Turnpike"),
                            },
                            Email: sdk.String("Aleen.Rolfson@yahoo.com"),
                            FullPhoneNumber: sdk.String("minima"),
                            JobTitle: sdk.String("Chief Usability Facilitator"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Cathryn"),
                                Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                Infix: sdk.String("saepe"),
                                LastName: sdk.String("Fritsch"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("veniam"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("officiis"),
                                            IssuerCountry: sdk.String("beatae"),
                                            IssuerState: sdk.String("laudantium"),
                                            Number: sdk.String("exercitationem"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("cum"),
                                            IssuerCountry: sdk.String("laboriosam"),
                                            IssuerState: sdk.String("dolorum"),
                                            Number: sdk.String("voluptatum"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("hic"),
                                Nationality: sdk.String("expedita"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("debitis"),
                                PhoneNumber: sdk.String("neque"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            ShareholderCode: sdk.String("nostrum"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumOwner.ToPointer(),
                            WebAddress: sdk.String("dolorum"),
                        },
                    },
                },
                Signatories: []shared.SignatoryContactWrapper{
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Edinburg"),
                                Country: sdk.String("Mali"),
                                HouseNumberOrName: sdk.String("fugit"),
                                PostalCode: sdk.String("80672"),
                                StateOrProvince: sdk.String("consequatur"),
                                Street: sdk.String("3055 Hessel Cliff"),
                            },
                            Email: sdk.String("Gust42@yahoo.com"),
                            FullPhoneNumber: sdk.String("nostrum"),
                            JobTitle: sdk.String("Chief Web Supervisor"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Duncan"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("dolorem"),
                                LastName: sdk.String("Pollich"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("dicta"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("occaecati"),
                                            IssuerCountry: sdk.String("labore"),
                                            IssuerState: sdk.String("quidem"),
                                            Number: sdk.String("atque"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("nam"),
                                Nationality: sdk.String("tenetur"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("laboriosam"),
                                PhoneNumber: sdk.String("alias"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                            },
                            SignatoryCode: sdk.String("deserunt"),
                            SignatoryReference: sdk.String("voluptate"),
                            WebAddress: sdk.String("unde"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Murray"),
                                Country: sdk.String("Spain"),
                                HouseNumberOrName: sdk.String("delectus"),
                                PostalCode: sdk.String("06648-6563"),
                                StateOrProvince: sdk.String("voluptatem"),
                                Street: sdk.String("905 Yvette Manors"),
                            },
                            Email: sdk.String("Mattie46@yahoo.com"),
                            FullPhoneNumber: sdk.String("amet"),
                            JobTitle: sdk.String("Internal Group Designer"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Linda"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("officiis"),
                                LastName: sdk.String("Thompson"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("natus"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("aspernatur"),
                                            IssuerCountry: sdk.String("ex"),
                                            IssuerState: sdk.String("maiores"),
                                            Number: sdk.String("corrupti"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("error"),
                                            IssuerCountry: sdk.String("blanditiis"),
                                            IssuerState: sdk.String("suscipit"),
                                            Number: sdk.String("repudiandae"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("atque"),
                                Nationality: sdk.String("sunt"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("recusandae"),
                                PhoneNumber: sdk.String("dolorum"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            SignatoryCode: sdk.String("labore"),
                            SignatoryReference: sdk.String("reiciendis"),
                            WebAddress: sdk.String("doloremque"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Broomfield"),
                                Country: sdk.String("Antigua and Barbuda"),
                                HouseNumberOrName: sdk.String("beatae"),
                                PostalCode: sdk.String("33295"),
                                StateOrProvince: sdk.String("magnam"),
                                Street: sdk.String("158 King Ferry"),
                            },
                            Email: sdk.String("Krista66@hotmail.com"),
                            FullPhoneNumber: sdk.String("quis"),
                            JobTitle: sdk.String("District Web Associate"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Foster"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("eveniet"),
                                LastName: sdk.String("Franey"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("vero"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("iure"),
                                            IssuerCountry: sdk.String("ipsa"),
                                            IssuerState: sdk.String("totam"),
                                            Number: sdk.String("quae"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("eveniet"),
                                Nationality: sdk.String("qui"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("cum"),
                                PhoneNumber: sdk.String("iure"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            SignatoryCode: sdk.String("ratione"),
                            SignatoryReference: sdk.String("laborum"),
                            WebAddress: sdk.String("distinctio"),
                        },
                    },
                },
                TaxID: sdk.String("voluptatum"),
            },
            Email: sdk.String("Elliott.Hammes36@yahoo.com"),
            FullPhoneNumber: sdk.String("perspiciatis"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Janie"),
                    Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                    Infix: sdk.String("voluptas"),
                    LastName: sdk.String("Abshire"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("maiores"),
                    DocumentData: []shared.PersonalDocumentDataWrapper{
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("dolores"),
                                IssuerCountry: sdk.String("id"),
                                IssuerState: sdk.String("minima"),
                                Number: sdk.String("dolore"),
                                Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("nesciunt"),
                                IssuerCountry: sdk.String("quae"),
                                IssuerState: sdk.String("recusandae"),
                                Number: sdk.String("omnis"),
                                Type: shared.PersonalDocumentDataTypeEnumID,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("molestiae"),
                                IssuerCountry: sdk.String("ex"),
                                IssuerState: sdk.String("ut"),
                                Number: sdk.String("culpa"),
                                Type: shared.PersonalDocumentDataTypeEnumID,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("debitis"),
                                IssuerCountry: sdk.String("laudantium"),
                                IssuerState: sdk.String("eum"),
                                Number: sdk.String("nemo"),
                                Type: shared.PersonalDocumentDataTypeEnumVisa,
                            },
                        },
                    },
                    IDNumber: sdk.String("esse"),
                    Nationality: sdk.String("provident"),
                },
            },
            LastReviewDate: sdk.String("quis"),
            MerchantCategoryCode: sdk.String("eum"),
            Metadata: map[string]string{
                "provident": "aspernatur",
                "ullam": "quasi",
                "animi": "nostrum",
                "mollitia": "provident",
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("Palm Harbor"),
                Country: sdk.String("India"),
                HouseNumberOrName: sdk.String("aliquid"),
                PostalCode: sdk.String("99347"),
                StateOrProvince: sdk.String("earum"),
                Street: sdk.String("6829 Towne Ville"),
            },
            WebAddress: sdk.String("cumque"),
        },
        Description: sdk.String("vitae"),
        PrimaryCurrency: sdk.String("rerum"),
        ProcessingTier: sdk.Int(272229),
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
        AccountHolderCode: "quis",
        Disable: false,
        Reason: sdk.String("inventore"),
        StateType: shared.UpdateAccountHolderStateRequestStateTypeEnumLimitedPayout,
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
