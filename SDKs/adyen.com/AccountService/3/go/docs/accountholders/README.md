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
                Shareholders: []shared.ShareholderContactWrapper{
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Camarillo"),
                                Country: sdk.String("Niger"),
                                HouseNumberOrName: sdk.String("distinctio"),
                                PostalCode: sdk.String("22135-5018"),
                                StateOrProvince: sdk.String("ipsam"),
                                Street: sdk.String("16527 Green Vista"),
                            },
                            Email: sdk.String("Delores.Roob@yahoo.com"),
                            FullPhoneNumber: sdk.String("provident"),
                            JobTitle: sdk.String("Human Intranet Orchestrator"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Damien"),
                                Gender: shared.ViasNameGenderEnumUnknown.ToPointer(),
                                Infix: sdk.String("a"),
                                LastName: sdk.String("Parisian"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("in"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("illum"),
                                            IssuerCountry: sdk.String("maiores"),
                                            IssuerState: sdk.String("rerum"),
                                            Number: sdk.String("dicta"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("cumque"),
                                            IssuerCountry: sdk.String("facere"),
                                            IssuerState: sdk.String("ea"),
                                            Number: sdk.String("aliquid"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("accusamus"),
                                Nationality: sdk.String("non"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("occaecati"),
                                PhoneNumber: sdk.String("enim"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            ShareholderCode: sdk.String("delectus"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                            WebAddress: sdk.String("provident"),
                        },
                    },
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Olsonmouth"),
                                Country: sdk.String("Malaysia"),
                                HouseNumberOrName: sdk.String("sapiente"),
                                PostalCode: sdk.String("63466"),
                                StateOrProvince: sdk.String("molestiae"),
                                Street: sdk.String("43762 Geraldine Pass"),
                            },
                            Email: sdk.String("Hildegard10@hotmail.com"),
                            FullPhoneNumber: sdk.String("magnam"),
                            JobTitle: sdk.String("Senior Intranet Director"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Landen"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("sint"),
                                LastName: sdk.String("Bartoletti"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("mollitia"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("mollitia"),
                                            IssuerCountry: sdk.String("ad"),
                                            IssuerState: sdk.String("eum"),
                                            Number: sdk.String("dolor"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("odit"),
                                            IssuerCountry: sdk.String("nemo"),
                                            IssuerState: sdk.String("quasi"),
                                            Number: sdk.String("iure"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("debitis"),
                                            IssuerCountry: sdk.String("eius"),
                                            IssuerState: sdk.String("maxime"),
                                            Number: sdk.String("deleniti"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("in"),
                                            IssuerCountry: sdk.String("architecto"),
                                            IssuerState: sdk.String("architecto"),
                                            Number: sdk.String("repudiandae"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("expedita"),
                                Nationality: sdk.String("nihil"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("repellat"),
                                PhoneNumber: sdk.String("quibusdam"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                            },
                            ShareholderCode: sdk.String("saepe"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumSignatory.ToPointer(),
                            WebAddress: sdk.String("accusantium"),
                        },
                    },
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("New Leviville"),
                                Country: sdk.String("British Indian Ocean Territory (Chagos Archipelago)"),
                                HouseNumberOrName: sdk.String("quo"),
                                PostalCode: sdk.String("88451-4009"),
                                StateOrProvince: sdk.String("quidem"),
                                Street: sdk.String("4470 Hickle Wall"),
                            },
                            Email: sdk.String("Russ76@gmail.com"),
                            FullPhoneNumber: sdk.String("corporis"),
                            JobTitle: sdk.String("Chief Mobility Producer"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Celestine"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("totam"),
                                LastName: sdk.String("Kuhn"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("eaque"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("nesciunt"),
                                            IssuerCountry: sdk.String("eos"),
                                            IssuerState: sdk.String("perferendis"),
                                            Number: sdk.String("dolores"),
                                            Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("quam"),
                                            IssuerCountry: sdk.String("dolor"),
                                            IssuerState: sdk.String("vero"),
                                            Number: sdk.String("nostrum"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("recusandae"),
                                Nationality: sdk.String("omnis"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("facilis"),
                                PhoneNumber: sdk.String("perspiciatis"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumFax.ToPointer(),
                            },
                            ShareholderCode: sdk.String("porro"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                            WebAddress: sdk.String("blanditiis"),
                        },
                    },
                },
                Signatories: []shared.SignatoryContactWrapper{
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("New Maximillianburgh"),
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
                            SignatoryCode: sdk.String("voluptate"),
                            SignatoryReference: sdk.String("dolorum"),
                            WebAddress: sdk.String("deleniti"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Treutelcester"),
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
                },
                TaxID: sdk.String("odio"),
            },
            Email: sdk.String("Wilbert_Schaefer33@yahoo.com"),
            FullPhoneNumber: sdk.String("ipsum"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Vida"),
                    Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                    Infix: sdk.String("consectetur"),
                    LastName: sdk.String("Thiel"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("tenetur"),
                    DocumentData: []shared.PersonalDocumentDataWrapper{
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("hic"),
                                IssuerCountry: sdk.String("distinctio"),
                                IssuerState: sdk.String("quod"),
                                Number: sdk.String("odio"),
                                Type: shared.PersonalDocumentDataTypeEnumSocialsecurity,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("facilis"),
                                IssuerCountry: sdk.String("vero"),
                                IssuerState: sdk.String("ducimus"),
                                Number: sdk.String("dolore"),
                                Type: shared.PersonalDocumentDataTypeEnumVisa,
                            },
                        },
                    },
                    IDNumber: sdk.String("illum"),
                    Nationality: sdk.String("sequi"),
                },
            },
            LastReviewDate: sdk.String("natus"),
            MerchantCategoryCode: sdk.String("impedit"),
            Metadata: map[string]string{
                "voluptatibus": "exercitationem",
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("Casper"),
                Country: sdk.String("Sao Tome and Principe"),
                HouseNumberOrName: sdk.String("maiores"),
                PostalCode: sdk.String("47406-2341"),
                StateOrProvince: sdk.String("vel"),
                Street: sdk.String("214 Cartwright Extensions"),
            },
            WebAddress: sdk.String("maiores"),
        },
        CreateDefaultAccount: sdk.Bool(false),
        LegalEntity: shared.CreateAccountHolderRequestLegalEntityEnumBusiness,
        ProcessingTier: sdk.Int(406120),
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
        AccountCode: sdk.String("nulla"),
        AccountHolderCode: sdk.String("excepturi"),
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
        FormType: "nostrum",
        Year: 960835,
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
        AccountHolderCode: "quisquam",
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
        AccountHolderCode: "saepe",
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
        AccountHolderCode: "ea",
        AccountHolderDetails: &shared.AccountHolderDetails{
            Address: &shared.ViasAddress{
                City: sdk.String("Herzogborough"),
                Country: sdk.String("Iceland"),
                HouseNumberOrName: sdk.String("inventore"),
                PostalCode: sdk.String("47291"),
                StateOrProvince: sdk.String("minima"),
                Street: sdk.String("97005 Haag Creek"),
            },
            BankAccountDetails: []shared.BankAccountDetailWrapper{
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("inventore"),
                        AccountType: sdk.String("non"),
                        BankAccountName: sdk.String("et"),
                        BankAccountUUID: sdk.String("dolorum"),
                        BankBicSwift: sdk.String("laborum"),
                        BankCity: sdk.String("placeat"),
                        BankCode: sdk.String("velit"),
                        BankName: sdk.String("eum"),
                        BranchCode: sdk.String("autem"),
                        CheckCode: sdk.String("nobis"),
                        CountryCode: sdk.String("MD"),
                        CurrencyCode: sdk.String("assumenda"),
                        Iban: sdk.String("nulla"),
                        OwnerCity: sdk.String("voluptas"),
                        OwnerCountryCode: sdk.String("libero"),
                        OwnerDateOfBirth: sdk.String("quasi"),
                        OwnerHouseNumberOrName: sdk.String("tempora"),
                        OwnerName: sdk.String("numquam"),
                        OwnerNationality: sdk.String("explicabo"),
                        OwnerPostalCode: sdk.String("provident"),
                        OwnerState: sdk.String("ipsa"),
                        OwnerStreet: sdk.String("molestiae"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("magnam"),
                        URLForVerification: sdk.String("odio"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("eius"),
                        AccountType: sdk.String("esse"),
                        BankAccountName: sdk.String("esse"),
                        BankAccountUUID: sdk.String("rem"),
                        BankBicSwift: sdk.String("fuga"),
                        BankCity: sdk.String("reprehenderit"),
                        BankCode: sdk.String("quidem"),
                        BankName: sdk.String("fugiat"),
                        BranchCode: sdk.String("ut"),
                        CheckCode: sdk.String("eum"),
                        CountryCode: sdk.String("HK"),
                        CurrencyCode: sdk.String("assumenda"),
                        Iban: sdk.String("eos"),
                        OwnerCity: sdk.String("praesentium"),
                        OwnerCountryCode: sdk.String("quisquam"),
                        OwnerDateOfBirth: sdk.String("veritatis"),
                        OwnerHouseNumberOrName: sdk.String("ipsa"),
                        OwnerName: sdk.String("id"),
                        OwnerNationality: sdk.String("quidem"),
                        OwnerPostalCode: sdk.String("neque"),
                        OwnerState: sdk.String("quo"),
                        OwnerStreet: sdk.String("illum"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("quo"),
                        URLForVerification: sdk.String("fuga"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("eius"),
                        AccountType: sdk.String("eos"),
                        BankAccountName: sdk.String("voluptas"),
                        BankAccountUUID: sdk.String("ab"),
                        BankBicSwift: sdk.String("cupiditate"),
                        BankCity: sdk.String("consequatur"),
                        BankCode: sdk.String("tempora"),
                        BankName: sdk.String("debitis"),
                        BranchCode: sdk.String("ipsam"),
                        CheckCode: sdk.String("aspernatur"),
                        CountryCode: sdk.String("CR"),
                        CurrencyCode: sdk.String("quo"),
                        Iban: sdk.String("esse"),
                        OwnerCity: sdk.String("recusandae"),
                        OwnerCountryCode: sdk.String("aperiam"),
                        OwnerDateOfBirth: sdk.String("distinctio"),
                        OwnerHouseNumberOrName: sdk.String("quod"),
                        OwnerName: sdk.String("dignissimos"),
                        OwnerNationality: sdk.String("inventore"),
                        OwnerPostalCode: sdk.String("nihil"),
                        OwnerState: sdk.String("totam"),
                        OwnerStreet: sdk.String("accusamus"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("aliquam"),
                        URLForVerification: sdk.String("odio"),
                    },
                },
                shared.BankAccountDetailWrapper{
                    BankAccountDetail: &shared.BankAccountDetail{
                        AccountNumber: sdk.String("occaecati"),
                        AccountType: sdk.String("commodi"),
                        BankAccountName: sdk.String("sapiente"),
                        BankAccountUUID: sdk.String("dolores"),
                        BankBicSwift: sdk.String("deserunt"),
                        BankCity: sdk.String("molestiae"),
                        BankCode: sdk.String("accusantium"),
                        BankName: sdk.String("porro"),
                        BranchCode: sdk.String("eum"),
                        CheckCode: sdk.String("quas"),
                        CountryCode: sdk.String("LB"),
                        CurrencyCode: sdk.String("consequuntur"),
                        Iban: sdk.String("deleniti"),
                        OwnerCity: sdk.String("fugit"),
                        OwnerCountryCode: sdk.String("fuga"),
                        OwnerDateOfBirth: sdk.String("mollitia"),
                        OwnerHouseNumberOrName: sdk.String("incidunt"),
                        OwnerName: sdk.String("atque"),
                        OwnerNationality: sdk.String("explicabo"),
                        OwnerPostalCode: sdk.String("minima"),
                        OwnerState: sdk.String("nisi"),
                        OwnerStreet: sdk.String("fugit"),
                        PrimaryAccount: sdk.Bool(false),
                        TaxID: sdk.String("sapiente"),
                        URLForVerification: sdk.String("consequuntur"),
                    },
                },
            },
            BusinessDetails: &shared.BusinessDetails{
                DoingBusinessAs: sdk.String("ratione"),
                LegalBusinessName: sdk.String("explicabo"),
                ListedUltimateParentCompany: []shared.UltimateParentCompanyWrapper{
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Karineland"),
                                Country: sdk.String("Kenya"),
                                HouseNumberOrName: sdk.String("eveniet"),
                                PostalCode: sdk.String("04878-3094"),
                                StateOrProvince: sdk.String("harum"),
                                Street: sdk.String("6537 Balistreri Pine"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("tempore"),
                                RegistrationNumber: sdk.String("adipisci"),
                                StockExchange: sdk.String("cumque"),
                                StockNumber: sdk.String("consequuntur"),
                                StockTicker: sdk.String("consequatur"),
                            },
                            UltimateParentCompanyCode: sdk.String("minus"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Fort Darlene"),
                                Country: sdk.String("Kenya"),
                                HouseNumberOrName: sdk.String("blanditiis"),
                                PostalCode: sdk.String("98540-9658"),
                                StateOrProvince: sdk.String("possimus"),
                                Street: sdk.String("99801 Logan Pike"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("aliquid"),
                                RegistrationNumber: sdk.String("tenetur"),
                                StockExchange: sdk.String("quae"),
                                StockNumber: sdk.String("earum"),
                                StockTicker: sdk.String("vel"),
                            },
                            UltimateParentCompanyCode: sdk.String("in"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Lake Rosina"),
                                Country: sdk.String("Saint Barthelemy"),
                                HouseNumberOrName: sdk.String("accusantium"),
                                PostalCode: sdk.String("91343"),
                                StateOrProvince: sdk.String("nisi"),
                                Street: sdk.String("51845 Parisian Club"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("omnis"),
                                RegistrationNumber: sdk.String("tenetur"),
                                StockExchange: sdk.String("quasi"),
                                StockNumber: sdk.String("at"),
                                StockTicker: sdk.String("et"),
                            },
                            UltimateParentCompanyCode: sdk.String("voluptate"),
                        },
                    },
                    shared.UltimateParentCompanyWrapper{
                        UltimateParentCompany: &shared.UltimateParentCompany{
                            Address: &shared.ViasAddress{
                                City: sdk.String("West Ashaburgh"),
                                Country: sdk.String("Djibouti"),
                                HouseNumberOrName: sdk.String("iste"),
                                PostalCode: sdk.String("05054-6052"),
                                StateOrProvince: sdk.String("voluptatem"),
                                Street: sdk.String("52713 Jennyfer Corners"),
                            },
                            BusinessDetails: &shared.UltimateParentCompanyBusinessDetails{
                                LegalBusinessName: sdk.String("maiores"),
                                RegistrationNumber: sdk.String("natus"),
                                StockExchange: sdk.String("velit"),
                                StockNumber: sdk.String("voluptatibus"),
                                StockTicker: sdk.String("voluptas"),
                            },
                            UltimateParentCompanyCode: sdk.String("asperiores"),
                        },
                    },
                },
                Shareholders: []shared.ShareholderContactWrapper{
                    shared.ShareholderContactWrapper{
                        ShareholderContact: &shared.ShareholderContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Elsieville"),
                                Country: sdk.String("South Georgia and the South Sandwich Islands"),
                                HouseNumberOrName: sdk.String("officia"),
                                PostalCode: sdk.String("46930-3782"),
                                StateOrProvince: sdk.String("ab"),
                                Street: sdk.String("66326 Walter Manor"),
                            },
                            Email: sdk.String("Herbert.Kuphal@hotmail.com"),
                            FullPhoneNumber: sdk.String("labore"),
                            JobTitle: sdk.String("Internal Assurance Producer"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Haskell"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("corporis"),
                                LastName: sdk.String("Wisozk"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("assumenda"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("recusandae"),
                                            IssuerCountry: sdk.String("aliquid"),
                                            IssuerState: sdk.String("aperiam"),
                                            Number: sdk.String("cum"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("in"),
                                            IssuerCountry: sdk.String("exercitationem"),
                                            IssuerState: sdk.String("earum"),
                                            Number: sdk.String("facere"),
                                            Type: shared.PersonalDocumentDataTypeEnumID,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("doloribus"),
                                Nationality: sdk.String("suscipit"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("reiciendis"),
                                PhoneNumber: sdk.String("quidem"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            ShareholderCode: sdk.String("necessitatibus"),
                            ShareholderType: shared.ShareholderContactShareholderTypeEnumController.ToPointer(),
                            WebAddress: sdk.String("sunt"),
                        },
                    },
                },
                Signatories: []shared.SignatoryContactWrapper{
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("East Danny"),
                                Country: sdk.String("Bolivia"),
                                HouseNumberOrName: sdk.String("dignissimos"),
                                PostalCode: sdk.String("82363-0971"),
                                StateOrProvince: sdk.String("accusamus"),
                                Street: sdk.String("2133 Enrique Route"),
                            },
                            Email: sdk.String("David50@hotmail.com"),
                            FullPhoneNumber: sdk.String("in"),
                            JobTitle: sdk.String("Product Paradigm Agent"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Roger"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("adipisci"),
                                LastName: sdk.String("Ritchie"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("blanditiis"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("hic"),
                                            IssuerCountry: sdk.String("nesciunt"),
                                            IssuerState: sdk.String("culpa"),
                                            Number: sdk.String("corrupti"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("totam"),
                                            IssuerCountry: sdk.String("hic"),
                                            IssuerState: sdk.String("exercitationem"),
                                            Number: sdk.String("nobis"),
                                            Type: shared.PersonalDocumentDataTypeEnumDrivinglicense,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("rerum"),
                                            IssuerCountry: sdk.String("sed"),
                                            IssuerState: sdk.String("reiciendis"),
                                            Number: sdk.String("explicabo"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("facilis"),
                                Nationality: sdk.String("voluptate"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("expedita"),
                                PhoneNumber: sdk.String("ab"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            SignatoryCode: sdk.String("dolore"),
                            SignatoryReference: sdk.String("laborum"),
                            WebAddress: sdk.String("sed"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Hayliecester"),
                                Country: sdk.String("Bulgaria"),
                                HouseNumberOrName: sdk.String("voluptas"),
                                PostalCode: sdk.String("13980-9059"),
                                StateOrProvince: sdk.String("incidunt"),
                                Street: sdk.String("52824 Lueilwitz Wall"),
                            },
                            Email: sdk.String("Dora.Klocko2@gmail.com"),
                            FullPhoneNumber: sdk.String("non"),
                            JobTitle: sdk.String("Human Optimization Developer"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Elta"),
                                Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                                Infix: sdk.String("ipsam"),
                                LastName: sdk.String("Tremblay"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("rem"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("nobis"),
                                            IssuerCountry: sdk.String("error"),
                                            IssuerState: sdk.String("veniam"),
                                            Number: sdk.String("minima"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("reiciendis"),
                                Nationality: sdk.String("nulla"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("magni"),
                                PhoneNumber: sdk.String("aperiam"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumSip.ToPointer(),
                            },
                            SignatoryCode: sdk.String("numquam"),
                            SignatoryReference: sdk.String("veniam"),
                            WebAddress: sdk.String("in"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("Bozeman"),
                                Country: sdk.String("Luxembourg"),
                                HouseNumberOrName: sdk.String("exercitationem"),
                                PostalCode: sdk.String("73656-9782"),
                                StateOrProvince: sdk.String("dolorum"),
                                Street: sdk.String("6658 Karina Creek"),
                            },
                            Email: sdk.String("Russell_Bartell@gmail.com"),
                            FullPhoneNumber: sdk.String("magnam"),
                            JobTitle: sdk.String("Lead Applications Coordinator"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Alberto"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("quas"),
                                LastName: sdk.String("Walker"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("corporis"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("blanditiis"),
                                            IssuerCountry: sdk.String("ex"),
                                            IssuerState: sdk.String("sed"),
                                            Number: sdk.String("sit"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("nostrum"),
                                Nationality: sdk.String("saepe"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("error"),
                                PhoneNumber: sdk.String("consequatur"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumLandline.ToPointer(),
                            },
                            SignatoryCode: sdk.String("reiciendis"),
                            SignatoryReference: sdk.String("dolorem"),
                            WebAddress: sdk.String("harum"),
                        },
                    },
                    shared.SignatoryContactWrapper{
                        SignatoryContact: &shared.SignatoryContact{
                            Address: &shared.ViasAddress{
                                City: sdk.String("North Kittyboro"),
                                Country: sdk.String("Paraguay"),
                                HouseNumberOrName: sdk.String("atque"),
                                PostalCode: sdk.String("79302-6469"),
                                StateOrProvince: sdk.String("provident"),
                                Street: sdk.String("990 Predovic Knoll"),
                            },
                            Email: sdk.String("Marlene.Langosh@hotmail.com"),
                            FullPhoneNumber: sdk.String("voluptatem"),
                            JobTitle: sdk.String("Forward Factors Executive"),
                            Name: &shared.ViasName{
                                FirstName: sdk.String("Kari"),
                                Gender: shared.ViasNameGenderEnumFemale.ToPointer(),
                                Infix: sdk.String("asperiores"),
                                LastName: sdk.String("Leannon"),
                            },
                            PersonalData: &shared.ViasPersonalData{
                                DateOfBirth: sdk.String("suscipit"),
                                DocumentData: []shared.PersonalDocumentDataWrapper{
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("maxime"),
                                            IssuerCountry: sdk.String("et"),
                                            IssuerState: sdk.String("esse"),
                                            Number: sdk.String("amet"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("ea"),
                                            IssuerCountry: sdk.String("atque"),
                                            IssuerState: sdk.String("error"),
                                            Number: sdk.String("officiis"),
                                            Type: shared.PersonalDocumentDataTypeEnumVisa,
                                        },
                                    },
                                    shared.PersonalDocumentDataWrapper{
                                        PersonalDocumentData: &shared.PersonalDocumentData{
                                            ExpirationDate: sdk.String("accusamus"),
                                            IssuerCountry: sdk.String("natus"),
                                            IssuerState: sdk.String("minima"),
                                            Number: sdk.String("aspernatur"),
                                            Type: shared.PersonalDocumentDataTypeEnumPassport,
                                        },
                                    },
                                },
                                IDNumber: sdk.String("maiores"),
                                Nationality: sdk.String("corrupti"),
                            },
                            PhoneNumber: &shared.ViasPhoneNumber{
                                PhoneCountryCode: sdk.String("at"),
                                PhoneNumber: sdk.String("error"),
                                PhoneType: shared.ViasPhoneNumberPhoneTypeEnumMobile.ToPointer(),
                            },
                            SignatoryCode: sdk.String("suscipit"),
                            SignatoryReference: sdk.String("repudiandae"),
                            WebAddress: sdk.String("atque"),
                        },
                    },
                },
                TaxID: sdk.String("atque"),
            },
            Email: sdk.String("Theresia.Parisian96@gmail.com"),
            FullPhoneNumber: sdk.String("doloremque"),
            IndividualDetails: &shared.IndividualDetails{
                Name: &shared.ViasName{
                    FirstName: sdk.String("Tevin"),
                    Gender: shared.ViasNameGenderEnumMale.ToPointer(),
                    Infix: sdk.String("accusantium"),
                    LastName: sdk.String("Breitenberg"),
                },
                PersonalData: &shared.ViasPersonalData{
                    DateOfBirth: sdk.String("dolores"),
                    DocumentData: []shared.PersonalDocumentDataWrapper{
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("laboriosam"),
                                IssuerCountry: sdk.String("velit"),
                                IssuerState: sdk.String("a"),
                                Number: sdk.String("molestias"),
                                Type: shared.PersonalDocumentDataTypeEnumID,
                            },
                        },
                        shared.PersonalDocumentDataWrapper{
                            PersonalDocumentData: &shared.PersonalDocumentData{
                                ExpirationDate: sdk.String("saepe"),
                                IssuerCountry: sdk.String("consequuntur"),
                                IssuerState: sdk.String("occaecati"),
                                Number: sdk.String("officiis"),
                                Type: shared.PersonalDocumentDataTypeEnumPassport,
                            },
                        },
                    },
                    IDNumber: sdk.String("in"),
                    Nationality: sdk.String("adipisci"),
                },
            },
            LastReviewDate: sdk.String("eveniet"),
            MerchantCategoryCode: sdk.String("occaecati"),
            Metadata: map[string]string{
                "fugit": "id",
            },
            PrincipalBusinessAddress: &shared.ViasAddress{
                City: sdk.String("South Lionel"),
                Country: sdk.String("Barbados"),
                HouseNumberOrName: sdk.String("corporis"),
                PostalCode: sdk.String("92804-0504"),
                StateOrProvince: sdk.String("eveniet"),
                Street: sdk.String("74816 Lehner Manors"),
            },
            WebAddress: sdk.String("aliquam"),
        },
        ProcessingTier: sdk.Int(320565),
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
        AccountHolderCode: "repellat",
        Disable: false,
        Reason: sdk.String("alias"),
        StateType: shared.UpdateAccountHolderStateRequestStateTypeEnumLimitlessPayout,
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
