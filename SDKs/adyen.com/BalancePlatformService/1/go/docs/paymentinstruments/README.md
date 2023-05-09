# PaymentInstruments

### Available Operations

* [GetPaymentInstrumentsID](#getpaymentinstrumentsid) - Get a payment instrument
* [GetPaymentInstrumentsIDReveal](#getpaymentinstrumentsidreveal) - Get the PAN of a payment instrument
* [GetPaymentInstrumentsIDTransactionRules](#getpaymentinstrumentsidtransactionrules) - Get all transaction rules for a payment instrument
* [PatchPaymentInstrumentsID](#patchpaymentinstrumentsid) - Update a payment instrument
* [PostPaymentInstruments](#postpaymentinstruments) - Create a payment instrument

## GetPaymentInstrumentsID

Returns the details of a payment instrument.

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
    res, err := s.PaymentInstruments.GetPaymentInstrumentsID(ctx, operations.GetPaymentInstrumentsIDRequest{
        ID: "4b8abf60-3a79-4f9d-be0a-b7da8a50ce18",
    }, operations.GetPaymentInstrumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInstrument != nil {
        // handle response
    }
}
```

## GetPaymentInstrumentsIDReveal

Returns the primary account number (PAN) of a payment instrument.

To make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):

* Balance Platform BCL PCI role

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
    res, err := s.PaymentInstruments.GetPaymentInstrumentsIDReveal(ctx, operations.GetPaymentInstrumentsIDRevealRequest{
        ID: "7f86bc17-3d68-49ee-a952-6f8d986e881e",
    }, operations.GetPaymentInstrumentsIDRevealSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInstrumentRevealInfo != nil {
        // handle response
    }
}
```

## GetPaymentInstrumentsIDTransactionRules

Returns a list of transaction rules associated with a payment instrument.

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
    res, err := s.PaymentInstruments.GetPaymentInstrumentsIDTransactionRules(ctx, operations.GetPaymentInstrumentsIDTransactionRulesRequest{
        ID: "ad4f0e10-1256-43f9-8e29-e973e922a57a",
    }, operations.GetPaymentInstrumentsIDTransactionRulesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionRulesResponse != nil {
        // handle response
    }
}
```

## PatchPaymentInstrumentsID

Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.

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
    res, err := s.PaymentInstruments.PatchPaymentInstrumentsID(ctx, operations.PatchPaymentInstrumentsIDRequest{
        PaymentInstrumentUpdateRequest: &shared.PaymentInstrumentUpdateRequest{
            BalanceAccountID: sdk.String("illo"),
            Card: &shared.CardInfo{
                Authentication: &shared.Authentication{
                    Email: sdk.String("Maurine87@yahoo.com"),
                    Password: sdk.String("doloremque"),
                    Phone: &shared.Phone{
                        Number: "iure",
                        Type: shared.PhoneTypeEnumLandline,
                    },
                },
                Brand: "totam",
                BrandVariant: "quae",
                CardholderName: "molestiae",
                Configuration: &shared.CardConfiguration{
                    Activation: sdk.String("eveniet"),
                    ActivationURL: sdk.String("qui"),
                    BulkAddress: &shared.BulkAddress{
                        City: sdk.String("Kerlukeside"),
                        Company: sdk.String("Pacocha LLC"),
                        Country: "Malawi",
                        Email: sdk.String("Elliott.Hammes36@yahoo.com"),
                        HouseNumberOrName: sdk.String("perspiciatis"),
                        Mobile: sdk.String("730.991.6326 x209"),
                        PostalCode: sdk.String("34426-2854"),
                        StateOrProvince: sdk.String("nemo"),
                        Street: sdk.String("453 Walker Overpass"),
                    },
                    CardImageID: sdk.String("aspernatur"),
                    Carrier: sdk.String("ullam"),
                    CarrierImageID: sdk.String("quasi"),
                    ConfigurationProfileID: "animi",
                    Currency: sdk.String("nostrum"),
                    Envelope: sdk.String("mollitia"),
                    Insert: sdk.String("provident"),
                    Language: sdk.String("possimus"),
                    LogoImageID: sdk.String("animi"),
                    PinMailer: sdk.String("ex"),
                    ShipmentMethod: sdk.String("aliquid"),
                },
                DeliveryContact: &shared.Contact{
                    Address: &shared.Address{
                        City: "Fort Winfieldbury",
                        Country: "Jordan",
                        HouseNumberOrName: "nam",
                        PostalCode: "66829-5897",
                        StateOrProvince: sdk.String("vitae"),
                        Street: "230 Nova Causeway",
                    },
                    Email: sdk.String("Dean.Collins@gmail.com"),
                    FullPhoneNumber: sdk.String("rem"),
                    Name: &shared.Name{
                        FirstName: "Sasha",
                        LastName: "Rutherford",
                    },
                    PersonalData: &shared.PersonalData{
                        DateOfBirth: sdk.String("eos"),
                        IDNumber: sdk.String("sapiente"),
                        Nationality: sdk.String("eum"),
                    },
                    PhoneNumber: &shared.PhoneNumber{
                        PhoneCountryCode: sdk.String("dicta"),
                        PhoneNumber: sdk.String("minima"),
                        PhoneType: shared.PhoneNumberPhoneTypeEnumFax.ToPointer(),
                    },
                    WebAddress: sdk.String("cupiditate"),
                },
                FormFactor: shared.CardInfoFormFactorEnumUnknown,
            },
            Status: shared.PaymentInstrumentUpdateRequestStatusEnumDiscarded.ToPointer(),
            StatusComment: sdk.String("soluta"),
        },
        ID: "fd0e9fe6-c632-4ca3-aed0-117996312fde",
    }, operations.PatchPaymentInstrumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePaymentInstrument != nil {
        // handle response
    }
}
```

## PostPaymentInstruments

Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.

 For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).

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
    res, err := s.PaymentInstruments.PostPaymentInstruments(ctx, shared.PaymentInstrumentInfo{
        BalanceAccountID: "ipsa",
        Card: &shared.CardInfo{
            Authentication: &shared.Authentication{
                Email: sdk.String("Janie47@gmail.com"),
                Password: sdk.String("esse"),
                Phone: &shared.Phone{
                    Number: "praesentium",
                    Type: shared.PhoneTypeEnumMobile,
                },
            },
            Brand: "reiciendis",
            BrandVariant: "vel",
            CardholderName: "architecto",
            Configuration: &shared.CardConfiguration{
                Activation: sdk.String("fugiat"),
                ActivationURL: sdk.String("doloremque"),
                BulkAddress: &shared.BulkAddress{
                    City: sdk.String("South Donavonport"),
                    Company: sdk.String("Feil - Jacobs"),
                    Country: "Azerbaijan",
                    Email: sdk.String("Bradford_Hegmann39@hotmail.com"),
                    HouseNumberOrName: sdk.String("officia"),
                    Mobile: sdk.String("1-504-466-0689 x667"),
                    PostalCode: sdk.String("53184"),
                    StateOrProvince: sdk.String("quo"),
                    Street: sdk.String("2370 Rippin Inlet"),
                },
                CardImageID: sdk.String("beatae"),
                Carrier: sdk.String("voluptatum"),
                CarrierImageID: sdk.String("omnis"),
                ConfigurationProfileID: "veritatis",
                Currency: sdk.String("rerum"),
                Envelope: sdk.String("est"),
                Insert: sdk.String("culpa"),
                Language: sdk.String("voluptatem"),
                LogoImageID: sdk.String("sapiente"),
                PinMailer: sdk.String("officiis"),
                ShipmentMethod: sdk.String("architecto"),
            },
            DeliveryContact: &shared.Contact{
                Address: &shared.Address{
                    City: "Stromanside",
                    Country: "Antarctica (the territory South of 60 deg S)",
                    HouseNumberOrName: "alias",
                    PostalCode: "94957-3913",
                    StateOrProvince: sdk.String("perferendis"),
                    Street: "578 Hintz Pike",
                },
                Email: sdk.String("Elody.Bode@gmail.com"),
                FullPhoneNumber: sdk.String("tempora"),
                Name: &shared.Name{
                    FirstName: "Dallin",
                    LastName: "Altenwerth",
                },
                PersonalData: &shared.PersonalData{
                    DateOfBirth: sdk.String("architecto"),
                    IDNumber: sdk.String("sit"),
                    Nationality: sdk.String("modi"),
                },
                PhoneNumber: &shared.PhoneNumber{
                    PhoneCountryCode: sdk.String("fugit"),
                    PhoneNumber: sdk.String("ab"),
                    PhoneType: shared.PhoneNumberPhoneTypeEnumMobile.ToPointer(),
                },
                WebAddress: sdk.String("quae"),
            },
            FormFactor: shared.CardInfoFormFactorEnumPhysical,
        },
        Description: sdk.String("fugiat"),
        IssuingCountryCode: "ipsam",
        PaymentInstrumentGroupID: sdk.String("consequuntur"),
        Reference: sdk.String("ipsa"),
        Status: shared.PaymentInstrumentInfoStatusEnumStolen.ToPointer(),
        Type: shared.PaymentInstrumentInfoTypeEnumCard,
    }, operations.PostPaymentInstrumentsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInstrument != nil {
        // handle response
    }
}
```
