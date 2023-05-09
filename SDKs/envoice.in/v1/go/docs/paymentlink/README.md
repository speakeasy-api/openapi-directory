# PaymentLink

### Available Operations

* [PaymentLinkAPIAll](#paymentlinkapiall) - Create a payment link
* [PaymentLinkAPIDeleteForm](#paymentlinkapideleteform) - Delete an existing payment link
* [PaymentLinkAPIDeleteJSON](#paymentlinkapideletejson) - Delete an existing payment link
* [PaymentLinkAPIDeleteRaw](#paymentlinkapideleteraw) - Delete an existing payment link
* [PaymentLinkAPINewForm](#paymentlinkapinewform) - Create a payment link
* [PaymentLinkAPINewJSON](#paymentlinkapinewjson) - Create a payment link
* [PaymentLinkAPINewRaw](#paymentlinkapinewraw) - Create a payment link
* [PaymentLinkAPIURI](#paymentlinkapiuri) - Return the unique url to the client's payment link

## PaymentLinkAPIAll

Create a payment link

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
    res, err := s.PaymentLink.PaymentLinkAPIAll(ctx, operations.PaymentLinkAPIAllRequest{
        QueryOptionsPage: sdk.Int(936469),
        QueryOptionsPageSize: sdk.Int(745398),
        XAuthKey: "hic",
        XAuthSecret: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResultPaymentLink != nil {
        // handle response
    }
}
```

## PaymentLinkAPIDeleteForm

Delete an existing payment link

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
    res, err := s.PaymentLink.PaymentLinkAPIDeleteForm(ctx, operations.PaymentLinkAPIDeleteFormRequest{
        PaymentLink: shared.PaymentLink{
            AccessToken: sdk.String("eaque"),
            Client: &shared.Client{
                Address: sdk.String("598 Oscar Hill"),
                ClientCountryID: sdk.Int(211534),
                ClientCurrencyID: sdk.Int(147808),
                CompanyRegistrationNumber: sdk.String("cumque"),
                DefaultDueDateInDays: sdk.Int(684935),
                Email: sdk.String("Madisyn.Tromp9@gmail.com"),
                ID: sdk.Int(90233),
                Name: sdk.String("Ada McClure"),
                PhoneNumber: sdk.String("quasi"),
                UILanguageID: sdk.Int(169025),
                UserID: sdk.Int(984934),
                Vat: sdk.String("nulla"),
            },
            ClientID: sdk.Int(896582),
            Currency: &shared.Currency{
                Code: sdk.String("ipsa"),
                ID: sdk.Int(271113),
                Name: sdk.String("Tanya Buckridge"),
                Symbol: sdk.String("praesentium"),
                Value: sdk.String("maiores"),
            },
            CurrencyID: sdk.Int(967260),
            DiscountAmount: sdk.Float64(4237.06),
            ID: sdk.Int(99958),
            Invoice: &shared.Invoice{
                AccessToken: sdk.String("fugiat"),
                Activities: []shared.Activity{
                    shared.Activity{
                        EstimationID: sdk.Int(117315),
                        EstimationNumber: sdk.String("odio"),
                        ID: sdk.Int(271252),
                        InvoiceID: sdk.Int(458259),
                        InvoiceNumber: sdk.String("ex"),
                        Link: sdk.String("consectetur"),
                        Message: sdk.String("aliquid"),
                        OrderID: sdk.Int(58870),
                        OrderNumber: sdk.String("laborum"),
                        Type: shared.ActivityTypeEnumSentReminderViaSms.ToPointer(),
                        UserID: sdk.Int(344718),
                    },
                },
                Attachments: []shared.InvoiceAttachment{
                    shared.InvoiceAttachment{
                        ID: sdk.Int(713767),
                        InvoiceID: sdk.Int(399667),
                        Link: sdk.String("officia"),
                        ObfuscatedFileName: sdk.String("suscipit"),
                        OriginalFileName: sdk.String("aliquid"),
                        Size: sdk.Int64(21973),
                        Type: shared.InvoiceAttachmentTypeEnumExternal.ToPointer(),
                    },
                    shared.InvoiceAttachment{
                        ID: sdk.Int(374753),
                        InvoiceID: sdk.Int(614528),
                        Link: sdk.String("id"),
                        ObfuscatedFileName: sdk.String("ab"),
                        OriginalFileName: sdk.String("error"),
                        Size: sdk.Int64(822407),
                        Type: shared.InvoiceAttachmentTypeEnumUploaded.ToPointer(),
                    },
                    shared.InvoiceAttachment{
                        ID: sdk.Int(653421),
                        InvoiceID: sdk.Int(671794),
                        Link: sdk.String("libero"),
                        ObfuscatedFileName: sdk.String("ad"),
                        OriginalFileName: sdk.String("deleniti"),
                        Size: sdk.Int64(316220),
                        Type: shared.InvoiceAttachmentTypeEnumExternal.ToPointer(),
                    },
                    shared.InvoiceAttachment{
                        ID: sdk.Int(833316),
                        InvoiceID: sdk.Int(405036),
                        Link: sdk.String("quo"),
                        ObfuscatedFileName: sdk.String("ex"),
                        OriginalFileName: sdk.String("ut"),
                        Size: sdk.Int64(321043),
                        Type: shared.InvoiceAttachmentTypeEnumUploaded.ToPointer(),
                    },
                },
                ClientID: sdk.Int(29950),
                ClonedFromID: sdk.Int(561577),
                CurrencyID: sdk.Int(737254),
                DiscountAmount: sdk.Float64(3996.6),
                Duedate: types.MustTimeFromString("2022-06-21T05:39:54.582Z"),
                EnablePartialPayments: sdk.Bool(false),
                EstimationID: sdk.Int(606308),
                ID: sdk.Int(85233),
                InvoiceCategoryID: sdk.Int(703218),
                IsDigitallySigned: sdk.Bool(false),
                IssuedOn: types.MustTimeFromString("2021-09-24T14:32:36.483Z"),
                Items: []shared.InvoiceItem{
                    shared.InvoiceItem{
                        Cost: sdk.Float64(9591.43),
                        Description: sdk.String("officiis"),
                        DiscountAmount: sdk.Float64(1032.98),
                        DiscountPercentage: sdk.Float64(6821.19),
                        ID: sdk.Int(867168),
                        InvoiceID: sdk.Int(891315),
                        Quantity: sdk.Float64(291.9),
                        SubTotalAmount: sdk.Float64(12.07),
                        TaxAmount: sdk.Float64(5349.17),
                        TaxID: sdk.Int(937219),
                        TaxPercentage: sdk.Float64(4042.44),
                        TotalAmount: sdk.Float64(9583.08),
                        WorkTypeID: sdk.Int(524184),
                    },
                },
                Notes: sdk.String("minus"),
                Number: sdk.String("nemo"),
                OrderID: sdk.Int(992074),
                PaymentGateways: []shared.PaymentGatewayForInvoice{
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(355225),
                        Name: sdk.String("Desiree Leannon"),
                    },
                },
                PaymentLinkID: sdk.Int(720528),
                Payments: []shared.Payment{
                    shared.Payment{
                        Amount: sdk.Float64(6334.15),
                        ID: sdk.Int(222864),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(307376),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("inventore"),
                        PaidOn: types.MustTimeFromString("2022-10-30T17:21:08.305Z"),
                        ReferenceID: sdk.String("tempora"),
                        Type: shared.PaymentTypeEnumBank.ToPointer(),
                    },
                    shared.Payment{
                        Amount: sdk.Float64(86.89),
                        ID: sdk.Int(100014),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(24944),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("modi"),
                        PaidOn: types.MustTimeFromString("2022-12-07T20:31:49.684Z"),
                        ReferenceID: sdk.String("laudantium"),
                        Type: shared.PaymentTypeEnumPaypal.ToPointer(),
                    },
                },
                PoNumber: sdk.String("dolor"),
                RecurringProfileID: sdk.Int(856277),
                ShouldSendReminders: sdk.Bool(false),
                Status: shared.InvoiceStatusEnumPaid.ToPointer(),
                SubTotalAmount: sdk.Float64(1621.2),
                TaxAmount: sdk.Float64(551.07),
                Terms: sdk.String("quas"),
                TotalAmount: sdk.Float64(9111.98),
                UserID: sdk.Int(773456),
            },
            Items: []shared.PaymentLinkItem{
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(4564.1),
                    DiscountAmount: sdk.Float64(8972.77),
                    DiscountPercentage: sdk.Float64(1533.69),
                    ID: sdk.Int(332191),
                    PaymentLinkID: sdk.Int(199596),
                    Quantity: sdk.Float64(7129.27),
                    SubTotalAmount: sdk.Float64(4329.84),
                    Tax: &shared.Tax{
                        ID: sdk.Int(426943),
                        Name: sdk.String("Miss Oscar Heller"),
                        Percentage: sdk.Float64(7510.22),
                        UserID: sdk.Int(388319),
                    },
                    TaxAmount: sdk.Float64(9272.12),
                    TaxID: sdk.Int(160393),
                    TaxPercentage: sdk.Float64(289.52),
                    TotalAmount: sdk.Float64(3502.07),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(895692),
                        Title: sdk.String("Mr."),
                        UserID: sdk.Int(392569),
                    },
                    WorkTypeID: sdk.Int(871103),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(8783.73),
                    DiscountAmount: sdk.Float64(6675.93),
                    DiscountPercentage: sdk.Float64(6907.85),
                    ID: sdk.Int(192718),
                    PaymentLinkID: sdk.Int(987349),
                    Quantity: sdk.Float64(9180.92),
                    SubTotalAmount: sdk.Float64(7592.83),
                    Tax: &shared.Tax{
                        ID: sdk.Int(579681),
                        Name: sdk.String("Allison Kuvalis"),
                        Percentage: sdk.Float64(2540.25),
                        UserID: sdk.Int(364912),
                    },
                    TaxAmount: sdk.Float64(5510.79),
                    TaxID: sdk.Int(260904),
                    TaxPercentage: sdk.Float64(1319.03),
                    TotalAmount: sdk.Float64(4959.7),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(200516),
                        Title: sdk.String("Miss"),
                        UserID: sdk.Int(514054),
                    },
                    WorkTypeID: sdk.Int(277340),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(974.93),
                    DiscountAmount: sdk.Float64(5243.8),
                    DiscountPercentage: sdk.Float64(8518.54),
                    ID: sdk.Int(117380),
                    PaymentLinkID: sdk.Int(395544),
                    Quantity: sdk.Float64(1598.45),
                    SubTotalAmount: sdk.Float64(2330.78),
                    Tax: &shared.Tax{
                        ID: sdk.Int(46806),
                        Name: sdk.String("Miss Dominick Rogahn"),
                        Percentage: sdk.Float64(5790.11),
                        UserID: sdk.Int(612867),
                    },
                    TaxAmount: sdk.Float64(1700.99),
                    TaxID: sdk.Int(81369),
                    TaxPercentage: sdk.Float64(6863.62),
                    TotalAmount: sdk.Float64(8818.97),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(976802),
                        Title: sdk.String("Miss"),
                        UserID: sdk.Int(608593),
                    },
                    WorkTypeID: sdk.Int(966390),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(3283.79),
                    DiscountAmount: sdk.Float64(5076.36),
                    DiscountPercentage: sdk.Float64(8026.92),
                    ID: sdk.Int(300403),
                    PaymentLinkID: sdk.Int(836364),
                    Quantity: sdk.Float64(5495.01),
                    SubTotalAmount: sdk.Float64(4152.8),
                    Tax: &shared.Tax{
                        ID: sdk.Int(930819),
                        Name: sdk.String("Deanna Wehner"),
                        Percentage: sdk.Float64(8773.99),
                        UserID: sdk.Int(32901),
                    },
                    TaxAmount: sdk.Float64(3719.19),
                    TaxID: sdk.Int(425946),
                    TaxPercentage: sdk.Float64(13.83),
                    TotalAmount: sdk.Float64(938.94),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(247685),
                        Title: sdk.String("Dr."),
                        UserID: sdk.Int(318233),
                    },
                    WorkTypeID: sdk.Int(575213),
                },
            },
            Number: sdk.String("nulla"),
            SubTotalAmount: sdk.Float64(6436.78),
            TaxAmount: sdk.Float64(4585.03),
            TotalAmount: sdk.Float64(3644.63),
            User: &shared.User{
                ActionNotificationsLastReadOn: types.MustTimeFromString("2022-05-02T06:49:02.857Z"),
                Email: sdk.String("Kiana_Thompson90@yahoo.com"),
                ExternalConnections: []shared.ExternalConnection{
                    shared.ExternalConnection{
                        AccessToken: sdk.String("ex"),
                        AccessTokenSecret: sdk.String("voluptas"),
                        Data: sdk.String("debitis"),
                        ExpiresOn: types.MustTimeFromString("2022-10-21T17:37:55.823Z"),
                        ExternalUserID: sdk.String("minus"),
                        ExternalUsername: sdk.String("fuga"),
                        ID: sdk.Int(675689),
                        Provider: sdk.String("consectetur"),
                        UserID: sdk.Int(244889),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("atque"),
                        AccessTokenSecret: sdk.String("ipsum"),
                        Data: sdk.String("impedit"),
                        ExpiresOn: types.MustTimeFromString("2022-04-03T11:55:17.660Z"),
                        ExternalUserID: sdk.String("repudiandae"),
                        ExternalUsername: sdk.String("nam"),
                        ID: sdk.Int(294076),
                        Provider: sdk.String("iusto"),
                        UserID: sdk.Int(453094),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("sequi"),
                        AccessTokenSecret: sdk.String("dignissimos"),
                        Data: sdk.String("neque"),
                        ExpiresOn: types.MustTimeFromString("2021-05-24T15:53:38.806Z"),
                        ExternalUserID: sdk.String("quibusdam"),
                        ExternalUsername: sdk.String("iure"),
                        ID: sdk.Int(139072),
                        Provider: sdk.String("voluptatibus"),
                        UserID: sdk.Int(426904),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("magnam"),
                        AccessTokenSecret: sdk.String("quibusdam"),
                        Data: sdk.String("inventore"),
                        ExpiresOn: types.MustTimeFromString("2020-10-27T01:38:49.211Z"),
                        ExternalUserID: sdk.String("architecto"),
                        ExternalUsername: sdk.String("voluptatibus"),
                        ID: sdk.Int(156383),
                        Provider: sdk.String("porro"),
                        UserID: sdk.Int(304198),
                    },
                },
                HasBeenOnboarded: sdk.Bool(false),
                ID: sdk.Int(247045),
                IsLocked: sdk.Bool(false),
                IsVerified: sdk.Bool(false),
                KnowledgeNotificationsLastReadOn: types.MustTimeFromString("2022-12-18T15:43:31.696Z"),
                LastSeenOn: types.MustTimeFromString("2022-08-05T11:21:49.286Z"),
                Name: sdk.String("Leigh Mante"),
                Password: sdk.String("ut"),
                PasswordSalt: sdk.String("perspiciatis"),
                ReferralPath: sdk.String("earum"),
                ReferredUsers: sdk.Int(117525),
                ReferrerKey: sdk.String("impedit"),
                Settings: &shared.UserSettings{
                    AccountantEmail: sdk.String("voluptatibus"),
                    Address: sdk.String("9039 Margie Fields"),
                    APIKey: sdk.String("dolor"),
                    APISecret: sdk.String("iusto"),
                    BackgroundImage: sdk.String("sit"),
                    Bank: sdk.String("doloremque"),
                    BankAccount: sdk.String("consequatur"),
                    Cname: sdk.String("officia"),
                    CompanyRegistrationNumber: sdk.String("recusandae"),
                    Country: &shared.Country{
                        ID: sdk.Int(408303),
                        Name: sdk.String("Hector Purdy"),
                        Value: sdk.String("expedita"),
                    },
                    CountryID: sdk.Int(537236),
                    Currency: &shared.Currency{
                        Code: sdk.String("a"),
                        ID: sdk.Int(455579),
                        Name: sdk.String("Lindsey Treutel"),
                        Symbol: sdk.String("ipsam"),
                        Value: sdk.String("corporis"),
                    },
                    CurrencyID: sdk.Int(668234),
                    CurrencySymbol: sdk.String("error"),
                    DefaultDateFormat: sdk.String("esse"),
                    DefaultDueDateInDays: sdk.Int(288570),
                    DoNotTrack: sdk.Bool(false),
                    EnableClientPortal: sdk.Bool(false),
                    EnablePredictiveInvoicing: sdk.Bool(false),
                    EnableRecurringInvoicing: sdk.Bool(false),
                    HasInvoiceLogo: sdk.Bool(false),
                    Iban: sdk.String("veritatis"),
                    ID: sdk.Int(874400),
                    InvoiceTemplate: shared.UserSettingsInvoiceTemplateEnumDefault.ToPointer(),
                    InvoiceTemplateColorHex: sdk.String("vitae"),
                    PhoneNumber: sdk.String("inventore"),
                    Profession: shared.UserSettingsProfessionEnumSoftwareDevelopment.ToPointer(),
                    ReceiveSmsNotifications: sdk.Bool(false),
                    ReferralProgram: shared.UserSettingsReferralProgramEnumEnabled.ToPointer(),
                    StoreCheckoutFields: shared.UserSettingsStoreCheckoutFieldsEnumShowMinimumRequiredFields.ToPointer(),
                    StoreColorHex: sdk.String("iste"),
                    StoreCurrency: &shared.Currency{
                        Code: sdk.String("ex"),
                        ID: sdk.Int(367626),
                        Name: sdk.String("Wm Legros"),
                        Symbol: sdk.String("fugit"),
                        Value: sdk.String("alias"),
                    },
                    StoreCurrencyID: sdk.Int(168042),
                    StoreCustomJavaScript: sdk.String("vel"),
                    StoreDescription: sdk.String("quae"),
                    StoreEmail: sdk.String("quae"),
                    StoreLanguage: &shared.UILanguage{
                        ID: sdk.Int(264333),
                        Name: sdk.String("Mrs. Annette Watsica"),
                        UICulture: sdk.String("nulla"),
                    },
                    StoreLanguageID: sdk.Int(714376),
                    StoreName: sdk.String("maxime"),
                    StorePurchaseEmailMessage: sdk.String("quia"),
                    StorePurchaseThankYouMessage: sdk.String("quia"),
                    StoreTextColorHex: sdk.String("nostrum"),
                    StoreURL: sdk.String("omnis"),
                    SubscribeToProductEmails: sdk.Bool(false),
                    Swift: sdk.String("libero"),
                    Terms: sdk.String("dicta"),
                    UserID: sdk.Int(663318),
                    UserSignature: sdk.String("libero"),
                    VatNumber: sdk.String("fugiat"),
                    YearsOfExperience: sdk.Int(637462),
                },
                Status: shared.UserStatusEnumFraudlent.ToPointer(),
                SubscriptionPlan: &shared.SubscriptionPlan{
                    CancellatedOn: types.MustTimeFromString("2022-12-03T19:07:11.911Z"),
                    CouponCode: sdk.String("iusto"),
                    CurrencyCode: sdk.String("ipsa"),
                    ExternalIdentifier: sdk.String("voluptates"),
                    Features: []shared.SubscriptionPlanFeaturesEnum{
                        shared.SubscriptionPlanFeaturesEnumAPI,
                    },
                    HasDuePayment: sdk.Bool(false),
                    HasDuePaymentSince: types.MustTimeFromString("2022-06-01T04:35:31.707Z"),
                    ID: sdk.Int(755106),
                    Identifier: sdk.String("distinctio"),
                    IsActive: sdk.Bool(false),
                    IsLifetime: sdk.Bool(false),
                    LastPaymentOn: types.MustTimeFromString("2022-08-01T09:21:47.394Z"),
                    MaxClients: sdk.Int(456688),
                    Name: sdk.String("Krystal Breitenberg"),
                    OnHold: sdk.Bool(false),
                    OrderIdentifier: sdk.String("corrupti"),
                    Price: sdk.Float64(4731.43),
                    Recurrence: shared.SubscriptionPlanRecurrenceEnumYearly.ToPointer(),
                    SaleID: sdk.Int64(882284),
                    Status: shared.SubscriptionPlanStatusEnumFraudlent.ToPointer(),
                    SystemCancelationReason: shared.SubscriptionPlanSystemCancelationReasonEnumFraud.ToPointer(),
                    TrialEndsOn: types.MustTimeFromString("2022-03-07T21:35:48.234Z"),
                    TrialNumberOfDays: sdk.Int(421819),
                    TrialStartsOn: types.MustTimeFromString("2022-04-19T10:08:34.555Z"),
                    UserID: sdk.Int(515638),
                    Version: sdk.Int(357207),
                },
                Type: shared.UserTypeEnumCollaborator.ToPointer(),
                Username: sdk.String("Watson.Rippin15"),
                VerifiedOn: types.MustTimeFromString("2021-08-19T14:07:01.740Z"),
                YearsOfExperience: shared.UserYearsOfExperienceEnumSixPlus.ToPointer(),
            },
            UserID: sdk.Int(34070),
        },
        XAuthKey: "expedita",
        XAuthSecret: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PaymentLinkAPIDeleteJSON

Delete an existing payment link

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
    res, err := s.PaymentLink.PaymentLinkAPIDeleteJSON(ctx, operations.PaymentLinkAPIDeleteJSONRequest{
        PaymentLink: shared.PaymentLink{
            AccessToken: sdk.String("eos"),
            Client: &shared.Client{
                Address: sdk.String("451 Florine Passage"),
                ClientCountryID: sdk.Int(937117),
                ClientCurrencyID: sdk.Int(239337),
                CompanyRegistrationNumber: sdk.String("recusandae"),
                DefaultDueDateInDays: sdk.Int(630871),
                Email: sdk.String("Matteo60@gmail.com"),
                ID: sdk.Int(476946),
                Name: sdk.String("Kent Corkery"),
                PhoneNumber: sdk.String("nesciunt"),
                UILanguageID: sdk.Int(873557),
                UserID: sdk.Int(637856),
                Vat: sdk.String("dignissimos"),
            },
            ClientID: sdk.Int(760744),
            Currency: &shared.Currency{
                Code: sdk.String("necessitatibus"),
                ID: sdk.Int(359111),
                Name: sdk.String("Kristy Lemke"),
                Symbol: sdk.String("placeat"),
                Value: sdk.String("enim"),
            },
            CurrencyID: sdk.Int(204072),
            DiscountAmount: sdk.Float64(4468.77),
            ID: sdk.Int(796397),
            Invoice: &shared.Invoice{
                AccessToken: sdk.String("eum"),
                Activities: []shared.Activity{
                    shared.Activity{
                        EstimationID: sdk.Int(357347),
                        EstimationNumber: sdk.String("magnam"),
                        ID: sdk.Int(914971),
                        InvoiceID: sdk.Int(978173),
                        InvoiceNumber: sdk.String("tempore"),
                        Link: sdk.String("aperiam"),
                        Message: sdk.String("libero"),
                        OrderID: sdk.Int(189753),
                        OrderNumber: sdk.String("labore"),
                        Type: shared.ActivityTypeEnumNewPaymentWithWepay.ToPointer(),
                        UserID: sdk.Int(577709),
                    },
                    shared.Activity{
                        EstimationID: sdk.Int(375994),
                        EstimationNumber: sdk.String("quo"),
                        ID: sdk.Int(242099),
                        InvoiceID: sdk.Int(795591),
                        InvoiceNumber: sdk.String("fuga"),
                        Link: sdk.String("nostrum"),
                        Message: sdk.String("est"),
                        OrderID: sdk.Int(770873),
                        OrderNumber: sdk.String("delectus"),
                        Type: shared.ActivityTypeEnumNewPaymentWithAuthorizeNet.ToPointer(),
                        UserID: sdk.Int(878601),
                    },
                },
                Attachments: []shared.InvoiceAttachment{
                    shared.InvoiceAttachment{
                        ID: sdk.Int(997437),
                        InvoiceID: sdk.Int(865946),
                        Link: sdk.String("nemo"),
                        ObfuscatedFileName: sdk.String("reprehenderit"),
                        OriginalFileName: sdk.String("aperiam"),
                        Size: sdk.Int64(486410),
                        Type: shared.InvoiceAttachmentTypeEnumExternal.ToPointer(),
                    },
                },
                ClientID: sdk.Int(448369),
                ClonedFromID: sdk.Int(496915),
                CurrencyID: sdk.Int(567846),
                DiscountAmount: sdk.Float64(1721.95),
                Duedate: types.MustTimeFromString("2022-10-30T21:28:00.704Z"),
                EnablePartialPayments: sdk.Bool(false),
                EstimationID: sdk.Int(498180),
                ID: sdk.Int(452729),
                InvoiceCategoryID: sdk.Int(866789),
                IsDigitallySigned: sdk.Bool(false),
                IssuedOn: types.MustTimeFromString("2021-02-12T15:07:49.977Z"),
                Items: []shared.InvoiceItem{
                    shared.InvoiceItem{
                        Cost: sdk.Float64(4014.28),
                        Description: sdk.String("quaerat"),
                        DiscountAmount: sdk.Float64(4166.92),
                        DiscountPercentage: sdk.Float64(8886.16),
                        ID: sdk.Int(810839),
                        InvoiceID: sdk.Int(697274),
                        Quantity: sdk.Float64(3481.92),
                        SubTotalAmount: sdk.Float64(4633.44),
                        TaxAmount: sdk.Float64(2114.55),
                        TaxID: sdk.Int(264619),
                        TaxPercentage: sdk.Float64(593.83),
                        TotalAmount: sdk.Float64(5755.34),
                        WorkTypeID: sdk.Int(876027),
                    },
                    shared.InvoiceItem{
                        Cost: sdk.Float64(1949.01),
                        Description: sdk.String("repudiandae"),
                        DiscountAmount: sdk.Float64(7412.32),
                        DiscountPercentage: sdk.Float64(1201.2),
                        ID: sdk.Int(936928),
                        InvoiceID: sdk.Int(334474),
                        Quantity: sdk.Float64(6592.68),
                        SubTotalAmount: sdk.Float64(1753.72),
                        TaxAmount: sdk.Float64(7249.94),
                        TaxID: sdk.Int(115898),
                        TaxPercentage: sdk.Float64(1644.88),
                        TotalAmount: sdk.Float64(8998.67),
                        WorkTypeID: sdk.Int(748224),
                    },
                    shared.InvoiceItem{
                        Cost: sdk.Float64(568.77),
                        Description: sdk.String("ducimus"),
                        DiscountAmount: sdk.Float64(9804.86),
                        DiscountPercentage: sdk.Float64(873.82),
                        ID: sdk.Int(96450),
                        InvoiceID: sdk.Int(386447),
                        Quantity: sdk.Float64(8634.71),
                        SubTotalAmount: sdk.Float64(7294.48),
                        TaxAmount: sdk.Float64(5665.06),
                        TaxID: sdk.Int(578210),
                        TaxPercentage: sdk.Float64(3679.17),
                        TotalAmount: sdk.Float64(3063.82),
                        WorkTypeID: sdk.Int(342342),
                    },
                    shared.InvoiceItem{
                        Cost: sdk.Float64(9887.49),
                        Description: sdk.String("eligendi"),
                        DiscountAmount: sdk.Float64(5740.32),
                        DiscountPercentage: sdk.Float64(3145.73),
                        ID: sdk.Int(944950),
                        InvoiceID: sdk.Int(657319),
                        Quantity: sdk.Float64(5597.74),
                        SubTotalAmount: sdk.Float64(5173.26),
                        TaxAmount: sdk.Float64(5646.67),
                        TaxID: sdk.Int(484966),
                        TaxPercentage: sdk.Float64(511.7),
                        TotalAmount: sdk.Float64(9011.63),
                        WorkTypeID: sdk.Int(104078),
                    },
                },
                Notes: sdk.String("quos"),
                Number: sdk.String("iste"),
                OrderID: sdk.Int(826862),
                PaymentGateways: []shared.PaymentGatewayForInvoice{
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(725574),
                        Name: sdk.String("Sharon Windler"),
                    },
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(216870),
                        Name: sdk.String("Mrs. Kerry Nolan"),
                    },
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(727481),
                        Name: sdk.String("Mae Krajcik"),
                    },
                },
                PaymentLinkID: sdk.Int(251464),
                Payments: []shared.Payment{
                    shared.Payment{
                        Amount: sdk.Float64(9322.96),
                        ID: sdk.Int(150935),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(993002),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("veniam"),
                        PaidOn: types.MustTimeFromString("2022-03-09T22:24:35.771Z"),
                        ReferenceID: sdk.String("laudantium"),
                        Type: shared.PaymentTypeEnumStripe.ToPointer(),
                    },
                    shared.Payment{
                        Amount: sdk.Float64(8634.77),
                        ID: sdk.Int(227362),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(347698),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("ab"),
                        PaidOn: types.MustTimeFromString("2022-04-18T09:58:47.871Z"),
                        ReferenceID: sdk.String("tempore"),
                        Type: shared.PaymentTypeEnumSepa.ToPointer(),
                    },
                },
                PoNumber: sdk.String("voluptatibus"),
                RecurringProfileID: sdk.Int(310840),
                ShouldSendReminders: sdk.Bool(false),
                Status: shared.InvoiceStatusEnumUnpaid.ToPointer(),
                SubTotalAmount: sdk.Float64(7186.27),
                TaxAmount: sdk.Float64(3924.3),
                Terms: sdk.String("quis"),
                TotalAmount: sdk.Float64(3919.33),
                UserID: sdk.Int(727771),
            },
            Items: []shared.PaymentLinkItem{
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(8152),
                    DiscountAmount: sdk.Float64(7060.61),
                    DiscountPercentage: sdk.Float64(2176.63),
                    ID: sdk.Int(318917),
                    PaymentLinkID: sdk.Int(973819),
                    Quantity: sdk.Float64(9745.89),
                    SubTotalAmount: sdk.Float64(1623.58),
                    Tax: &shared.Tax{
                        ID: sdk.Int(891581),
                        Name: sdk.String("Susie Davis"),
                        Percentage: sdk.Float64(2072.96),
                        UserID: sdk.Int(480061),
                    },
                    TaxAmount: sdk.Float64(6649.65),
                    TaxID: sdk.Int(522176),
                    TaxPercentage: sdk.Float64(7538.9),
                    TotalAmount: sdk.Float64(8536.06),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(604078),
                        Title: sdk.String("Dr."),
                        UserID: sdk.Int(495617),
                    },
                    WorkTypeID: sdk.Int(220104),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(1180.41),
                    DiscountAmount: sdk.Float64(6228.94),
                    DiscountPercentage: sdk.Float64(7847.31),
                    ID: sdk.Int(111496),
                    PaymentLinkID: sdk.Int(491591),
                    Quantity: sdk.Float64(4589.7),
                    SubTotalAmount: sdk.Float64(8541.15),
                    Tax: &shared.Tax{
                        ID: sdk.Int(322333),
                        Name: sdk.String("Jill Wintheiser"),
                        Percentage: sdk.Float64(7298.28),
                        UserID: sdk.Int(72350),
                    },
                    TaxAmount: sdk.Float64(691.82),
                    TaxID: sdk.Int(280114),
                    TaxPercentage: sdk.Float64(8791.74),
                    TotalAmount: sdk.Float64(9025.81),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(734814),
                        Title: sdk.String("Mrs."),
                        UserID: sdk.Int(176499),
                    },
                    WorkTypeID: sdk.Int(970079),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(9391.61),
                    DiscountAmount: sdk.Float64(4441.21),
                    DiscountPercentage: sdk.Float64(5063.12),
                    ID: sdk.Int(367046),
                    PaymentLinkID: sdk.Int(999809),
                    Quantity: sdk.Float64(7897.7),
                    SubTotalAmount: sdk.Float64(1972.59),
                    Tax: &shared.Tax{
                        ID: sdk.Int(467119),
                        Name: sdk.String("Joshua Greenfelder"),
                        Percentage: sdk.Float64(7904.63),
                        UserID: sdk.Int(591065),
                    },
                    TaxAmount: sdk.Float64(5149.93),
                    TaxID: sdk.Int(921719),
                    TaxPercentage: sdk.Float64(96.83),
                    TotalAmount: sdk.Float64(8052.64),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(136357),
                        Title: sdk.String("Miss"),
                        UserID: sdk.Int(711991),
                    },
                    WorkTypeID: sdk.Int(559174),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(5908.58),
                    DiscountAmount: sdk.Float64(9222.99),
                    DiscountPercentage: sdk.Float64(7000.45),
                    ID: sdk.Int(492361),
                    PaymentLinkID: sdk.Int(360934),
                    Quantity: sdk.Float64(8738.33),
                    SubTotalAmount: sdk.Float64(6293.77),
                    Tax: &shared.Tax{
                        ID: sdk.Int(833982),
                        Name: sdk.String("Florence Jerde"),
                        Percentage: sdk.Float64(121.71),
                        UserID: sdk.Int(32055),
                    },
                    TaxAmount: sdk.Float64(3228.29),
                    TaxID: sdk.Int(60995),
                    TaxPercentage: sdk.Float64(2295.67),
                    TotalAmount: sdk.Float64(8493.2),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(506863),
                        Title: sdk.String("Miss"),
                        UserID: sdk.Int(736853),
                    },
                    WorkTypeID: sdk.Int(230411),
                },
            },
            Number: sdk.String("quasi"),
            SubTotalAmount: sdk.Float64(1181.26),
            TaxAmount: sdk.Float64(5149.22),
            TotalAmount: sdk.Float64(407.1),
            User: &shared.User{
                ActionNotificationsLastReadOn: types.MustTimeFromString("2021-07-24T17:17:44.726Z"),
                Email: sdk.String("Lacy_Pagac92@gmail.com"),
                ExternalConnections: []shared.ExternalConnection{
                    shared.ExternalConnection{
                        AccessToken: sdk.String("nemo"),
                        AccessTokenSecret: sdk.String("molestiae"),
                        Data: sdk.String("itaque"),
                        ExpiresOn: types.MustTimeFromString("2021-11-28T13:56:44.956Z"),
                        ExternalUserID: sdk.String("aperiam"),
                        ExternalUsername: sdk.String("sint"),
                        ID: sdk.Int(879522),
                        Provider: sdk.String("eos"),
                        UserID: sdk.Int(520081),
                    },
                },
                HasBeenOnboarded: sdk.Bool(false),
                ID: sdk.Int(115861),
                IsLocked: sdk.Bool(false),
                IsVerified: sdk.Bool(false),
                KnowledgeNotificationsLastReadOn: types.MustTimeFromString("2022-10-03T19:15:55.395Z"),
                LastSeenOn: types.MustTimeFromString("2022-11-16T15:13:44.571Z"),
                Name: sdk.String("Curtis McCullough PhD"),
                Password: sdk.String("labore"),
                PasswordSalt: sdk.String("minus"),
                ReferralPath: sdk.String("esse"),
                ReferredUsers: sdk.Int(32356),
                ReferrerKey: sdk.String("perferendis"),
                Settings: &shared.UserSettings{
                    AccountantEmail: sdk.String("rerum"),
                    Address: sdk.String("0492 McKenzie Falls"),
                    APIKey: sdk.String("eligendi"),
                    APISecret: sdk.String("dignissimos"),
                    BackgroundImage: sdk.String("consectetur"),
                    Bank: sdk.String("soluta"),
                    BankAccount: sdk.String("natus"),
                    Cname: sdk.String("temporibus"),
                    CompanyRegistrationNumber: sdk.String("officia"),
                    Country: &shared.Country{
                        ID: sdk.Int(228857),
                        Name: sdk.String("Bruce Satterfield"),
                        Value: sdk.String("laborum"),
                    },
                    CountryID: sdk.Int(490420),
                    Currency: &shared.Currency{
                        Code: sdk.String("vero"),
                        ID: sdk.Int(185348),
                        Name: sdk.String("Jaime Champlin"),
                        Symbol: sdk.String("nihil"),
                        Value: sdk.String("non"),
                    },
                    CurrencyID: sdk.Int(68093),
                    CurrencySymbol: sdk.String("illo"),
                    DefaultDateFormat: sdk.String("hic"),
                    DefaultDueDateInDays: sdk.Int(644479),
                    DoNotTrack: sdk.Bool(false),
                    EnableClientPortal: sdk.Bool(false),
                    EnablePredictiveInvoicing: sdk.Bool(false),
                    EnableRecurringInvoicing: sdk.Bool(false),
                    HasInvoiceLogo: sdk.Bool(false),
                    Iban: sdk.String("delectus"),
                    ID: sdk.Int(251212),
                    InvoiceTemplate: shared.UserSettingsInvoiceTemplateEnumTemplate2.ToPointer(),
                    InvoiceTemplateColorHex: sdk.String("in"),
                    PhoneNumber: sdk.String("exercitationem"),
                    Profession: shared.UserSettingsProfessionEnumSoftwareDevelopment.ToPointer(),
                    ReceiveSmsNotifications: sdk.Bool(false),
                    ReferralProgram: shared.UserSettingsReferralProgramEnumEnabled.ToPointer(),
                    StoreCheckoutFields: shared.UserSettingsStoreCheckoutFieldsEnumShowAllFields.ToPointer(),
                    StoreColorHex: sdk.String("modi"),
                    StoreCurrency: &shared.Currency{
                        Code: sdk.String("in"),
                        ID: sdk.Int(127294),
                        Name: sdk.String("Ian Baumbach"),
                        Symbol: sdk.String("enim"),
                        Value: sdk.String("voluptate"),
                    },
                    StoreCurrencyID: sdk.Int(626707),
                    StoreCustomJavaScript: sdk.String("minima"),
                    StoreDescription: sdk.String("libero"),
                    StoreEmail: sdk.String("magnam"),
                    StoreLanguage: &shared.UILanguage{
                        ID: sdk.Int(24272),
                        Name: sdk.String("Natalie Dooley"),
                        UICulture: sdk.String("fugiat"),
                    },
                    StoreLanguageID: sdk.Int(345138),
                    StoreName: sdk.String("molestiae"),
                    StorePurchaseEmailMessage: sdk.String("veniam"),
                    StorePurchaseThankYouMessage: sdk.String("reiciendis"),
                    StoreTextColorHex: sdk.String("ab"),
                    StoreURL: sdk.String("modi"),
                    SubscribeToProductEmails: sdk.Bool(false),
                    Swift: sdk.String("aut"),
                    Terms: sdk.String("aut"),
                    UserID: sdk.Int(911657),
                    UserSignature: sdk.String("odio"),
                    VatNumber: sdk.String("commodi"),
                    YearsOfExperience: sdk.Int(256114),
                },
                Status: shared.UserStatusEnumLocked.ToPointer(),
                SubscriptionPlan: &shared.SubscriptionPlan{
                    CancellatedOn: types.MustTimeFromString("2021-08-23T14:57:18.247Z"),
                    CouponCode: sdk.String("consectetur"),
                    CurrencyCode: sdk.String("nesciunt"),
                    ExternalIdentifier: sdk.String("quaerat"),
                    Features: []shared.SubscriptionPlanFeaturesEnum{
                        shared.SubscriptionPlanFeaturesEnumPaymentLinks,
                        shared.SubscriptionPlanFeaturesEnumAPI,
                        shared.SubscriptionPlanFeaturesEnumPaymentLinks,
                        shared.SubscriptionPlanFeaturesEnumClients,
                    },
                    HasDuePayment: sdk.Bool(false),
                    HasDuePaymentSince: types.MustTimeFromString("2022-10-26T00:55:24.466Z"),
                    ID: sdk.Int(704948),
                    Identifier: sdk.String("amet"),
                    IsActive: sdk.Bool(false),
                    IsLifetime: sdk.Bool(false),
                    LastPaymentOn: types.MustTimeFromString("2022-04-25T19:45:54.258Z"),
                    MaxClients: sdk.Int(5310),
                    Name: sdk.String("David Lubowitz"),
                    OnHold: sdk.Bool(false),
                    OrderIdentifier: sdk.String("veritatis"),
                    Price: sdk.Float64(607.78),
                    Recurrence: shared.SubscriptionPlanRecurrenceEnumMonthly.ToPointer(),
                    SaleID: sdk.Int64(904827),
                    Status: shared.SubscriptionPlanStatusEnumFraudlent.ToPointer(),
                    SystemCancelationReason: shared.SubscriptionPlanSystemCancelationReasonEnumFraud.ToPointer(),
                    TrialEndsOn: types.MustTimeFromString("2021-01-29T04:57:19.341Z"),
                    TrialNumberOfDays: sdk.Int(152027),
                    TrialStartsOn: types.MustTimeFromString("2022-12-31T18:10:52.300Z"),
                    UserID: sdk.Int(910073),
                    Version: sdk.Int(941668),
                },
                Type: shared.UserTypeEnumAnonymous.ToPointer(),
                Username: sdk.String("Dudley89"),
                VerifiedOn: types.MustTimeFromString("2022-09-30T11:43:51.351Z"),
                YearsOfExperience: shared.UserYearsOfExperienceEnumOne.ToPointer(),
            },
            UserID: sdk.Int(397988),
        },
        XAuthKey: "modi",
        XAuthSecret: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PaymentLinkAPIDeleteRaw

Delete an existing payment link

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
    res, err := s.PaymentLink.PaymentLinkAPIDeleteRaw(ctx, operations.PaymentLinkAPIDeleteRawRequest{
        RequestBody: []byte("voluptatibus"),
        XAuthKey: "molestias",
        XAuthSecret: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PaymentLinkAPINewForm

Create a payment link

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
    res, err := s.PaymentLink.PaymentLinkAPINewForm(ctx, operations.PaymentLinkAPINewFormRequest{
        PaymentLink: shared.PaymentLink{
            AccessToken: sdk.String("libero"),
            Client: &shared.Client{
                Address: sdk.String("1347 Brooks Field"),
                ClientCountryID: sdk.Int(967338),
                ClientCurrencyID: sdk.Int(997918),
                CompanyRegistrationNumber: sdk.String("nulla"),
                DefaultDueDateInDays: sdk.Int(671116),
                Email: sdk.String("Shawn_Baumbach@yahoo.com"),
                ID: sdk.Int(924840),
                Name: sdk.String("Kyle Leffler"),
                PhoneNumber: sdk.String("quisquam"),
                UILanguageID: sdk.Int(120277),
                UserID: sdk.Int(973017),
                Vat: sdk.String("eligendi"),
            },
            ClientID: sdk.Int(62035),
            Currency: &shared.Currency{
                Code: sdk.String("officiis"),
                ID: sdk.Int(100002),
                Name: sdk.String("Jill Rosenbaum MD"),
                Symbol: sdk.String("reiciendis"),
                Value: sdk.String("a"),
            },
            CurrencyID: sdk.Int(615058),
            DiscountAmount: sdk.Float64(1178.19),
            ID: sdk.Int(552439),
            Invoice: &shared.Invoice{
                AccessToken: sdk.String("ullam"),
                Activities: []shared.Activity{
                    shared.Activity{
                        EstimationID: sdk.Int(266284),
                        EstimationNumber: sdk.String("itaque"),
                        ID: sdk.Int(807419),
                        InvoiceID: sdk.Int(265905),
                        InvoiceNumber: sdk.String("consequuntur"),
                        Link: sdk.String("assumenda"),
                        Message: sdk.String("vero"),
                        OrderID: sdk.Int(985109),
                        OrderNumber: sdk.String("impedit"),
                        Type: shared.ActivityTypeEnumEstimationCreated.ToPointer(),
                        UserID: sdk.Int(883819),
                    },
                    shared.Activity{
                        EstimationID: sdk.Int(518990),
                        EstimationNumber: sdk.String("reiciendis"),
                        ID: sdk.Int(66074),
                        InvoiceID: sdk.Int(573444),
                        InvoiceNumber: sdk.String("nihil"),
                        Link: sdk.String("esse"),
                        Message: sdk.String("iure"),
                        OrderID: sdk.Int(485031),
                        OrderNumber: sdk.String("nesciunt"),
                        Type: shared.ActivityTypeEnumEstimationViewed.ToPointer(),
                        UserID: sdk.Int(423588),
                    },
                },
                Attachments: []shared.InvoiceAttachment{
                    shared.InvoiceAttachment{
                        ID: sdk.Int(357758),
                        InvoiceID: sdk.Int(375350),
                        Link: sdk.String("consequuntur"),
                        ObfuscatedFileName: sdk.String("officia"),
                        OriginalFileName: sdk.String("reprehenderit"),
                        Size: sdk.Int64(716033),
                        Type: shared.InvoiceAttachmentTypeEnumExternal.ToPointer(),
                    },
                },
                ClientID: sdk.Int(56372),
                ClonedFromID: sdk.Int(522062),
                CurrencyID: sdk.Int(978154),
                DiscountAmount: sdk.Float64(351.6),
                Duedate: types.MustTimeFromString("2022-02-04T05:24:45.768Z"),
                EnablePartialPayments: sdk.Bool(false),
                EstimationID: sdk.Int(206063),
                ID: sdk.Int(816365),
                InvoiceCategoryID: sdk.Int(307173),
                IsDigitallySigned: sdk.Bool(false),
                IssuedOn: types.MustTimeFromString("2021-01-12T02:47:10.751Z"),
                Items: []shared.InvoiceItem{
                    shared.InvoiceItem{
                        Cost: sdk.Float64(6685.77),
                        Description: sdk.String("delectus"),
                        DiscountAmount: sdk.Float64(2452.78),
                        DiscountPercentage: sdk.Float64(1105.22),
                        ID: sdk.Int(201096),
                        InvoiceID: sdk.Int(630832),
                        Quantity: sdk.Float64(748.95),
                        SubTotalAmount: sdk.Float64(9979.95),
                        TaxAmount: sdk.Float64(3632.14),
                        TaxID: sdk.Int(987890),
                        TaxPercentage: sdk.Float64(8237.53),
                        TotalAmount: sdk.Float64(6033.23),
                        WorkTypeID: sdk.Int(275425),
                    },
                    shared.InvoiceItem{
                        Cost: sdk.Float64(1280.21),
                        Description: sdk.String("ipsam"),
                        DiscountAmount: sdk.Float64(5831.93),
                        DiscountPercentage: sdk.Float64(7614.37),
                        ID: sdk.Int(2064),
                        InvoiceID: sdk.Int(695947),
                        Quantity: sdk.Float64(1989.11),
                        SubTotalAmount: sdk.Float64(4124.33),
                        TaxAmount: sdk.Float64(9561.24),
                        TaxID: sdk.Int(164319),
                        TaxPercentage: sdk.Float64(3304.4),
                        TotalAmount: sdk.Float64(8937.73),
                        WorkTypeID: sdk.Int(638390),
                    },
                    shared.InvoiceItem{
                        Cost: sdk.Float64(5750.62),
                        Description: sdk.String("ut"),
                        DiscountAmount: sdk.Float64(2567.68),
                        DiscountPercentage: sdk.Float64(9478.22),
                        ID: sdk.Int(236790),
                        InvoiceID: sdk.Int(728559),
                        Quantity: sdk.Float64(4483.86),
                        SubTotalAmount: sdk.Float64(3296.51),
                        TaxAmount: sdk.Float64(4031.47),
                        TaxID: sdk.Int(791762),
                        TaxPercentage: sdk.Float64(688.8),
                        TotalAmount: sdk.Float64(1081.65),
                        WorkTypeID: sdk.Int(943143),
                    },
                    shared.InvoiceItem{
                        Cost: sdk.Float64(3923.19),
                        Description: sdk.String("quisquam"),
                        DiscountAmount: sdk.Float64(2212.18),
                        DiscountPercentage: sdk.Float64(4965.48),
                        ID: sdk.Int(683727),
                        InvoiceID: sdk.Int(326903),
                        Quantity: sdk.Float64(1024.46),
                        SubTotalAmount: sdk.Float64(1814.76),
                        TaxAmount: sdk.Float64(3970.26),
                        TaxID: sdk.Int(166289),
                        TaxPercentage: sdk.Float64(2766.5),
                        TotalAmount: sdk.Float64(2404.9),
                        WorkTypeID: sdk.Int(506343),
                    },
                },
                Notes: sdk.String("dolor"),
                Number: sdk.String("exercitationem"),
                OrderID: sdk.Int(709701),
                PaymentGateways: []shared.PaymentGatewayForInvoice{
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(769634),
                        Name: sdk.String("Renee Nader"),
                    },
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(644734),
                        Name: sdk.String("Sally Schmidt"),
                    },
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(788661),
                        Name: sdk.String("Ora Shields Jr."),
                    },
                },
                PaymentLinkID: sdk.Int(633982),
                Payments: []shared.Payment{
                    shared.Payment{
                        Amount: sdk.Float64(7510.33),
                        ID: sdk.Int(898193),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(155978),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("dicta"),
                        PaidOn: types.MustTimeFromString("2022-05-28T14:41:13.872Z"),
                        ReferenceID: sdk.String("debitis"),
                        Type: shared.PaymentTypeEnumAch.ToPointer(),
                    },
                },
                PoNumber: sdk.String("architecto"),
                RecurringProfileID: sdk.Int(33771),
                ShouldSendReminders: sdk.Bool(false),
                Status: shared.InvoiceStatusEnumDraft.ToPointer(),
                SubTotalAmount: sdk.Float64(828.76),
                TaxAmount: sdk.Float64(5905.85),
                Terms: sdk.String("cumque"),
                TotalAmount: sdk.Float64(4355.31),
                UserID: sdk.Int(842402),
            },
            Items: []shared.PaymentLinkItem{
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(3632.24),
                    DiscountAmount: sdk.Float64(9234.56),
                    DiscountPercentage: sdk.Float64(2467.72),
                    ID: sdk.Int(299153),
                    PaymentLinkID: sdk.Int(493591),
                    Quantity: sdk.Float64(3884.04),
                    SubTotalAmount: sdk.Float64(1522.83),
                    Tax: &shared.Tax{
                        ID: sdk.Int(486272),
                        Name: sdk.String("Rene Ritchie"),
                        Percentage: sdk.Float64(6973.3),
                        UserID: sdk.Int(932080),
                    },
                    TaxAmount: sdk.Float64(3895.48),
                    TaxID: sdk.Int(601714),
                    TaxPercentage: sdk.Float64(2637.67),
                    TotalAmount: sdk.Float64(5951.98),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(944626),
                        Title: sdk.String("Miss"),
                        UserID: sdk.Int(135548),
                    },
                    WorkTypeID: sdk.Int(725784),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(7202.66),
                    DiscountAmount: sdk.Float64(2791.72),
                    DiscountPercentage: sdk.Float64(9253.95),
                    ID: sdk.Int(797254),
                    PaymentLinkID: sdk.Int(664666),
                    Quantity: sdk.Float64(9044.4),
                    SubTotalAmount: sdk.Float64(4230.54),
                    Tax: &shared.Tax{
                        ID: sdk.Int(779409),
                        Name: sdk.String("Desiree Hilll"),
                        Percentage: sdk.Float64(2476.18),
                        UserID: sdk.Int(649534),
                    },
                    TaxAmount: sdk.Float64(8270.51),
                    TaxID: sdk.Int(927977),
                    TaxPercentage: sdk.Float64(7189.81),
                    TotalAmount: sdk.Float64(8668.61),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(323365),
                        Title: sdk.String("Dr."),
                        UserID: sdk.Int(674683),
                    },
                    WorkTypeID: sdk.Int(911451),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(6731.91),
                    DiscountAmount: sdk.Float64(2763.37),
                    DiscountPercentage: sdk.Float64(8023.56),
                    ID: sdk.Int(369523),
                    PaymentLinkID: sdk.Int(60),
                    Quantity: sdk.Float64(3798.94),
                    SubTotalAmount: sdk.Float64(6472.1),
                    Tax: &shared.Tax{
                        ID: sdk.Int(560451),
                        Name: sdk.String("Ernesto Mayert"),
                        Percentage: sdk.Float64(194.62),
                        UserID: sdk.Int(143528),
                    },
                    TaxAmount: sdk.Float64(3992.22),
                    TaxID: sdk.Int(301309),
                    TaxPercentage: sdk.Float64(3085.28),
                    TotalAmount: sdk.Float64(7558.68),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(942185),
                        Title: sdk.String("Mrs."),
                        UserID: sdk.Int(888265),
                    },
                    WorkTypeID: sdk.Int(603650),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(8603.11),
                    DiscountAmount: sdk.Float64(6213.93),
                    DiscountPercentage: sdk.Float64(6530),
                    ID: sdk.Int(298613),
                    PaymentLinkID: sdk.Int(344289),
                    Quantity: sdk.Float64(4609.09),
                    SubTotalAmount: sdk.Float64(5488.49),
                    Tax: &shared.Tax{
                        ID: sdk.Int(684799),
                        Name: sdk.String("Edmund Boyle"),
                        Percentage: sdk.Float64(3857.39),
                        UserID: sdk.Int(41179),
                    },
                    TaxAmount: sdk.Float64(315.74),
                    TaxID: sdk.Int(816421),
                    TaxPercentage: sdk.Float64(9010.08),
                    TotalAmount: sdk.Float64(8075.64),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(9375),
                        Title: sdk.String("Mr."),
                        UserID: sdk.Int(102390),
                    },
                    WorkTypeID: sdk.Int(627161),
                },
            },
            Number: sdk.String("porro"),
            SubTotalAmount: sdk.Float64(5024.53),
            TaxAmount: sdk.Float64(608.92),
            TotalAmount: sdk.Float64(1698.19),
            User: &shared.User{
                ActionNotificationsLastReadOn: types.MustTimeFromString("2022-07-22T12:36:05.070Z"),
                Email: sdk.String("Oma_Bednar@hotmail.com"),
                ExternalConnections: []shared.ExternalConnection{
                    shared.ExternalConnection{
                        AccessToken: sdk.String("laudantium"),
                        AccessTokenSecret: sdk.String("maiores"),
                        Data: sdk.String("alias"),
                        ExpiresOn: types.MustTimeFromString("2021-06-06T21:58:33.426Z"),
                        ExternalUserID: sdk.String("dicta"),
                        ExternalUsername: sdk.String("suscipit"),
                        ID: sdk.Int(938257),
                        Provider: sdk.String("doloribus"),
                        UserID: sdk.Int(244569),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("eius"),
                        AccessTokenSecret: sdk.String("esse"),
                        Data: sdk.String("in"),
                        ExpiresOn: types.MustTimeFromString("2022-09-19T07:21:23.270Z"),
                        ExternalUserID: sdk.String("neque"),
                        ExternalUsername: sdk.String("vero"),
                        ID: sdk.Int(566312),
                        Provider: sdk.String("accusantium"),
                        UserID: sdk.Int(185816),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("impedit"),
                        AccessTokenSecret: sdk.String("beatae"),
                        Data: sdk.String("incidunt"),
                        ExpiresOn: types.MustTimeFromString("2022-11-11T05:11:31.731Z"),
                        ExternalUserID: sdk.String("corporis"),
                        ExternalUsername: sdk.String("rerum"),
                        ID: sdk.Int(4654),
                        Provider: sdk.String("error"),
                        UserID: sdk.Int(424854),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("accusantium"),
                        AccessTokenSecret: sdk.String("id"),
                        Data: sdk.String("laboriosam"),
                        ExpiresOn: types.MustTimeFromString("2022-06-12T04:15:05.357Z"),
                        ExternalUserID: sdk.String("veritatis"),
                        ExternalUsername: sdk.String("ullam"),
                        ID: sdk.Int(62688),
                        Provider: sdk.String("similique"),
                        UserID: sdk.Int(278116),
                    },
                },
                HasBeenOnboarded: sdk.Bool(false),
                ID: sdk.Int(462583),
                IsLocked: sdk.Bool(false),
                IsVerified: sdk.Bool(false),
                KnowledgeNotificationsLastReadOn: types.MustTimeFromString("2022-05-10T02:09:22.586Z"),
                LastSeenOn: types.MustTimeFromString("2021-03-04T13:22:29.959Z"),
                Name: sdk.String("Peggy Schneider"),
                Password: sdk.String("aliquam"),
                PasswordSalt: sdk.String("excepturi"),
                ReferralPath: sdk.String("maiores"),
                ReferredUsers: sdk.Int(512081),
                ReferrerKey: sdk.String("velit"),
                Settings: &shared.UserSettings{
                    AccountantEmail: sdk.String("reiciendis"),
                    Address: sdk.String("30795 Gonzalo Ways"),
                    APIKey: sdk.String("a"),
                    APISecret: sdk.String("nobis"),
                    BackgroundImage: sdk.String("perspiciatis"),
                    Bank: sdk.String("accusantium"),
                    BankAccount: sdk.String("dicta"),
                    Cname: sdk.String("minus"),
                    CompanyRegistrationNumber: sdk.String("commodi"),
                    Country: &shared.Country{
                        ID: sdk.Int(908734),
                        Name: sdk.String("Geoffrey Powlowski"),
                        Value: sdk.String("fugit"),
                    },
                    CountryID: sdk.Int(259377),
                    Currency: &shared.Currency{
                        Code: sdk.String("sequi"),
                        ID: sdk.Int(758194),
                        Name: sdk.String("Claude Kutch"),
                        Symbol: sdk.String("a"),
                        Value: sdk.String("animi"),
                    },
                    CurrencyID: sdk.Int(979287),
                    CurrencySymbol: sdk.String("itaque"),
                    DefaultDateFormat: sdk.String("nulla"),
                    DefaultDueDateInDays: sdk.Int(643419),
                    DoNotTrack: sdk.Bool(false),
                    EnableClientPortal: sdk.Bool(false),
                    EnablePredictiveInvoicing: sdk.Bool(false),
                    EnableRecurringInvoicing: sdk.Bool(false),
                    HasInvoiceLogo: sdk.Bool(false),
                    Iban: sdk.String("corporis"),
                    ID: sdk.Int(246577),
                    InvoiceTemplate: shared.UserSettingsInvoiceTemplateEnumTemplate2.ToPointer(),
                    InvoiceTemplateColorHex: sdk.String("enim"),
                    PhoneNumber: sdk.String("officia"),
                    Profession: shared.UserSettingsProfessionEnumIndividual.ToPointer(),
                    ReceiveSmsNotifications: sdk.Bool(false),
                    ReferralProgram: shared.UserSettingsReferralProgramEnumEnabled.ToPointer(),
                    StoreCheckoutFields: shared.UserSettingsStoreCheckoutFieldsEnumShowAllFields.ToPointer(),
                    StoreColorHex: sdk.String("accusantium"),
                    StoreCurrency: &shared.Currency{
                        Code: sdk.String("officia"),
                        ID: sdk.Int(770128),
                        Name: sdk.String("Mattie Gibson"),
                        Symbol: sdk.String("nobis"),
                        Value: sdk.String("natus"),
                    },
                    StoreCurrencyID: sdk.Int(793568),
                    StoreCustomJavaScript: sdk.String("quia"),
                    StoreDescription: sdk.String("magnam"),
                    StoreEmail: sdk.String("reprehenderit"),
                    StoreLanguage: &shared.UILanguage{
                        ID: sdk.Int(800799),
                        Name: sdk.String("Byron Farrell"),
                        UICulture: sdk.String("laborum"),
                    },
                    StoreLanguageID: sdk.Int(266946),
                    StoreName: sdk.String("perferendis"),
                    StorePurchaseEmailMessage: sdk.String("necessitatibus"),
                    StorePurchaseThankYouMessage: sdk.String("architecto"),
                    StoreTextColorHex: sdk.String("molestias"),
                    StoreURL: sdk.String("dolore"),
                    SubscribeToProductEmails: sdk.Bool(false),
                    Swift: sdk.String("sunt"),
                    Terms: sdk.String("maiores"),
                    UserID: sdk.Int(205011),
                    UserSignature: sdk.String("odit"),
                    VatNumber: sdk.String("earum"),
                    YearsOfExperience: sdk.Int(330596),
                },
                Status: shared.UserStatusEnumFraudlent.ToPointer(),
                SubscriptionPlan: &shared.SubscriptionPlan{
                    CancellatedOn: types.MustTimeFromString("2022-08-26T02:36:34.287Z"),
                    CouponCode: sdk.String("veniam"),
                    CurrencyCode: sdk.String("nihil"),
                    ExternalIdentifier: sdk.String("ad"),
                    Features: []shared.SubscriptionPlanFeaturesEnum{
                        shared.SubscriptionPlanFeaturesEnumCname,
                        shared.SubscriptionPlanFeaturesEnumClients,
                    },
                    HasDuePayment: sdk.Bool(false),
                    HasDuePaymentSince: types.MustTimeFromString("2021-11-25T16:54:25.224Z"),
                    ID: sdk.Int(382764),
                    Identifier: sdk.String("pariatur"),
                    IsActive: sdk.Bool(false),
                    IsLifetime: sdk.Bool(false),
                    LastPaymentOn: types.MustTimeFromString("2022-04-22T10:10:54.165Z"),
                    MaxClients: sdk.Int(831031),
                    Name: sdk.String("Amelia Williamson"),
                    OnHold: sdk.Bool(false),
                    OrderIdentifier: sdk.String("repellat"),
                    Price: sdk.Float64(9210.6),
                    Recurrence: shared.SubscriptionPlanRecurrenceEnumMonthly.ToPointer(),
                    SaleID: sdk.Int64(240696),
                    Status: shared.SubscriptionPlanStatusEnumFraudlent.ToPointer(),
                    SystemCancelationReason: shared.SubscriptionPlanSystemCancelationReasonEnumFraud.ToPointer(),
                    TrialEndsOn: types.MustTimeFromString("2022-01-09T11:33:54.925Z"),
                    TrialNumberOfDays: sdk.Int(435353),
                    TrialStartsOn: types.MustTimeFromString("2022-03-16T15:48:02.869Z"),
                    UserID: sdk.Int(746688),
                    Version: sdk.Int(677509),
                },
                Type: shared.UserTypeEnumAnonymous.ToPointer(),
                Username: sdk.String("Treva.Langosh"),
                VerifiedOn: types.MustTimeFromString("2022-05-09T02:28:59.420Z"),
                YearsOfExperience: shared.UserYearsOfExperienceEnumSixPlus.ToPointer(),
            },
            UserID: sdk.Int(687589),
        },
        XAuthKey: "cumque",
        XAuthSecret: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkAPINewForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PaymentLinkAPINewJSON

Create a payment link

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
    res, err := s.PaymentLink.PaymentLinkAPINewJSON(ctx, operations.PaymentLinkAPINewJSONRequest{
        PaymentLink: shared.PaymentLink{
            AccessToken: sdk.String("expedita"),
            Client: &shared.Client{
                Address: sdk.String("0635 Dorian Squares"),
                ClientCountryID: sdk.Int(220824),
                ClientCurrencyID: sdk.Int(700529),
                CompanyRegistrationNumber: sdk.String("sed"),
                DefaultDueDateInDays: sdk.Int(883078),
                Email: sdk.String("Vita_Schiller99@hotmail.com"),
                ID: sdk.Int(532326),
                Name: sdk.String("Mr. Zachary Bashirian"),
                PhoneNumber: sdk.String("nostrum"),
                UILanguageID: sdk.Int(869848),
                UserID: sdk.Int(823472),
                Vat: sdk.String("neque"),
            },
            ClientID: sdk.Int(866135),
            Currency: &shared.Currency{
                Code: sdk.String("vel"),
                ID: sdk.Int(960813),
                Name: sdk.String("Mrs. Eric Lueilwitz"),
                Symbol: sdk.String("ad"),
                Value: sdk.String("aliquam"),
            },
            CurrencyID: sdk.Int(788165),
            DiscountAmount: sdk.Float64(5579.87),
            ID: sdk.Int(162450),
            Invoice: &shared.Invoice{
                AccessToken: sdk.String("maiores"),
                Activities: []shared.Activity{
                    shared.Activity{
                        EstimationID: sdk.Int(400448),
                        EstimationNumber: sdk.String("laudantium"),
                        ID: sdk.Int(665872),
                        InvoiceID: sdk.Int(221329),
                        InvoiceNumber: sdk.String("aliquid"),
                        Link: sdk.String("consectetur"),
                        Message: sdk.String("cumque"),
                        OrderID: sdk.Int(525917),
                        OrderNumber: sdk.String("voluptatum"),
                        Type: shared.ActivityTypeEnumNewPaymentWithRazorpay.ToPointer(),
                        UserID: sdk.Int(237523),
                    },
                },
                Attachments: []shared.InvoiceAttachment{
                    shared.InvoiceAttachment{
                        ID: sdk.Int(271306),
                        InvoiceID: sdk.Int(503449),
                        Link: sdk.String("numquam"),
                        ObfuscatedFileName: sdk.String("sequi"),
                        OriginalFileName: sdk.String("voluptatum"),
                        Size: sdk.Int64(27078),
                        Type: shared.InvoiceAttachmentTypeEnumUploaded.ToPointer(),
                    },
                    shared.InvoiceAttachment{
                        ID: sdk.Int(84178),
                        InvoiceID: sdk.Int(949280),
                        Link: sdk.String("autem"),
                        ObfuscatedFileName: sdk.String("quidem"),
                        OriginalFileName: sdk.String("totam"),
                        Size: sdk.Int64(781193),
                        Type: shared.InvoiceAttachmentTypeEnumUploaded.ToPointer(),
                    },
                    shared.InvoiceAttachment{
                        ID: sdk.Int(168926),
                        InvoiceID: sdk.Int(471207),
                        Link: sdk.String("voluptas"),
                        ObfuscatedFileName: sdk.String("animi"),
                        OriginalFileName: sdk.String("commodi"),
                        Size: sdk.Int64(716),
                        Type: shared.InvoiceAttachmentTypeEnumUploaded.ToPointer(),
                    },
                    shared.InvoiceAttachment{
                        ID: sdk.Int(14780),
                        InvoiceID: sdk.Int(295892),
                        Link: sdk.String("maxime"),
                        ObfuscatedFileName: sdk.String("aliquam"),
                        OriginalFileName: sdk.String("iste"),
                        Size: sdk.Int64(355889),
                        Type: shared.InvoiceAttachmentTypeEnumUploaded.ToPointer(),
                    },
                },
                ClientID: sdk.Int(810302),
                ClonedFromID: sdk.Int(378403),
                CurrencyID: sdk.Int(577590),
                DiscountAmount: sdk.Float64(6009.34),
                Duedate: types.MustTimeFromString("2022-07-13T18:04:19.094Z"),
                EnablePartialPayments: sdk.Bool(false),
                EstimationID: sdk.Int(78246),
                ID: sdk.Int(725316),
                InvoiceCategoryID: sdk.Int(371287),
                IsDigitallySigned: sdk.Bool(false),
                IssuedOn: types.MustTimeFromString("2022-03-27T04:39:44.275Z"),
                Items: []shared.InvoiceItem{
                    shared.InvoiceItem{
                        Cost: sdk.Float64(6886.84),
                        Description: sdk.String("facere"),
                        DiscountAmount: sdk.Float64(7079.83),
                        DiscountPercentage: sdk.Float64(1053.72),
                        ID: sdk.Int(767210),
                        InvoiceID: sdk.Int(964511),
                        Quantity: sdk.Float64(2871.52),
                        SubTotalAmount: sdk.Float64(7126.4),
                        TaxAmount: sdk.Float64(5482.56),
                        TaxID: sdk.Int(523995),
                        TaxPercentage: sdk.Float64(5433.53),
                        TotalAmount: sdk.Float64(8861.18),
                        WorkTypeID: sdk.Int(739633),
                    },
                },
                Notes: sdk.String("pariatur"),
                Number: sdk.String("sapiente"),
                OrderID: sdk.Int(775427),
                PaymentGateways: []shared.PaymentGatewayForInvoice{
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(797293),
                        Name: sdk.String("Lowell Olson"),
                    },
                    shared.PaymentGatewayForInvoice{
                        ID: sdk.Int(726851),
                        Name: sdk.String("Cory Welch DDS"),
                    },
                },
                PaymentLinkID: sdk.Int(147400),
                Payments: []shared.Payment{
                    shared.Payment{
                        Amount: sdk.Float64(7562.87),
                        ID: sdk.Int(927490),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(83791),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("aut"),
                        PaidOn: types.MustTimeFromString("2022-01-15T07:00:59.329Z"),
                        ReferenceID: sdk.String("dolor"),
                        Type: shared.PaymentTypeEnumAuthorizeNet.ToPointer(),
                    },
                    shared.Payment{
                        Amount: sdk.Float64(2742.95),
                        ID: sdk.Int(169935),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(701841),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("doloremque"),
                        PaidOn: types.MustTimeFromString("2022-07-27T23:55:27.293Z"),
                        ReferenceID: sdk.String("at"),
                        Type: shared.PaymentTypeEnumSquare.ToPointer(),
                    },
                    shared.Payment{
                        Amount: sdk.Float64(4444.79),
                        ID: sdk.Int(531195),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(502393),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("nihil"),
                        PaidOn: types.MustTimeFromString("2021-08-09T11:08:53.449Z"),
                        ReferenceID: sdk.String("deserunt"),
                        Type: shared.PaymentTypeEnumRazorpay.ToPointer(),
                    },
                    shared.Payment{
                        Amount: sdk.Float64(3448.56),
                        ID: sdk.Int(542340),
                        Invoice: &shared.Invoice{},
                        InvoiceID: sdk.Int(101107),
                        IsAutomatic: sdk.Bool(false),
                        Note: sdk.String("est"),
                        PaidOn: types.MustTimeFromString("2022-06-24T07:51:44.560Z"),
                        ReferenceID: sdk.String("magni"),
                        Type: shared.PaymentTypeEnumPaypal.ToPointer(),
                    },
                },
                PoNumber: sdk.String("quas"),
                RecurringProfileID: sdk.Int(811259),
                ShouldSendReminders: sdk.Bool(false),
                Status: shared.InvoiceStatusEnumPaid.ToPointer(),
                SubTotalAmount: sdk.Float64(2864.53),
                TaxAmount: sdk.Float64(9580.68),
                Terms: sdk.String("saepe"),
                TotalAmount: sdk.Float64(9657.35),
                UserID: sdk.Int(642234),
            },
            Items: []shared.PaymentLinkItem{
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(7638.69),
                    DiscountAmount: sdk.Float64(6174.97),
                    DiscountPercentage: sdk.Float64(3125.11),
                    ID: sdk.Int(985379),
                    PaymentLinkID: sdk.Int(156098),
                    Quantity: sdk.Float64(8872.84),
                    SubTotalAmount: sdk.Float64(6514.67),
                    Tax: &shared.Tax{
                        ID: sdk.Int(765070),
                        Name: sdk.String("Darlene Keeling"),
                        Percentage: sdk.Float64(2012.66),
                        UserID: sdk.Int(22331),
                    },
                    TaxAmount: sdk.Float64(4871.48),
                    TaxID: sdk.Int(794306),
                    TaxPercentage: sdk.Float64(9903.69),
                    TotalAmount: sdk.Float64(9242.93),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(912151),
                        Title: sdk.String("Ms."),
                        UserID: sdk.Int(118349),
                    },
                    WorkTypeID: sdk.Int(144179),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(251.9),
                    DiscountAmount: sdk.Float64(3962.34),
                    DiscountPercentage: sdk.Float64(8986.38),
                    ID: sdk.Int(148975),
                    PaymentLinkID: sdk.Int(537170),
                    Quantity: sdk.Float64(1227.44),
                    SubTotalAmount: sdk.Float64(2001.9),
                    Tax: &shared.Tax{
                        ID: sdk.Int(963913),
                        Name: sdk.String("Jay Nolan DDS"),
                        Percentage: sdk.Float64(2596),
                        UserID: sdk.Int(528320),
                    },
                    TaxAmount: sdk.Float64(600.78),
                    TaxID: sdk.Int(872991),
                    TaxPercentage: sdk.Float64(2098.6),
                    TotalAmount: sdk.Float64(9998.54),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(132305),
                        Title: sdk.String("Mr."),
                        UserID: sdk.Int(193236),
                    },
                    WorkTypeID: sdk.Int(143078),
                },
                shared.PaymentLinkItem{
                    Cost: sdk.Float64(6854.67),
                    DiscountAmount: sdk.Float64(9431.03),
                    DiscountPercentage: sdk.Float64(494.99),
                    ID: sdk.Int(211301),
                    PaymentLinkID: sdk.Int(101854),
                    Quantity: sdk.Float64(449.29),
                    SubTotalAmount: sdk.Float64(1341.73),
                    Tax: &shared.Tax{
                        ID: sdk.Int(860362),
                        Name: sdk.String("Pamela Gusikowski"),
                        Percentage: sdk.Float64(7602.79),
                        UserID: sdk.Int(750537),
                    },
                    TaxAmount: sdk.Float64(4044.22),
                    TaxID: sdk.Int(998023),
                    TaxPercentage: sdk.Float64(651.18),
                    TotalAmount: sdk.Float64(5339.78),
                    WorkType: &shared.WorkType{
                        ID: sdk.Int(711615),
                        Title: sdk.String("Dr."),
                        UserID: sdk.Int(569834),
                    },
                    WorkTypeID: sdk.Int(396610),
                },
            },
            Number: sdk.String("sed"),
            SubTotalAmount: sdk.Float64(1066.82),
            TaxAmount: sdk.Float64(6273.41),
            TotalAmount: sdk.Float64(4087.74),
            User: &shared.User{
                ActionNotificationsLastReadOn: types.MustTimeFromString("2022-05-29T19:50:28.684Z"),
                Email: sdk.String("Jeremie_Koch@hotmail.com"),
                ExternalConnections: []shared.ExternalConnection{
                    shared.ExternalConnection{
                        AccessToken: sdk.String("eveniet"),
                        AccessTokenSecret: sdk.String("earum"),
                        Data: sdk.String("velit"),
                        ExpiresOn: types.MustTimeFromString("2022-03-18T15:15:11.631Z"),
                        ExternalUserID: sdk.String("rerum"),
                        ExternalUsername: sdk.String("itaque"),
                        ID: sdk.Int(489685),
                        Provider: sdk.String("ipsam"),
                        UserID: sdk.Int(131687),
                    },
                    shared.ExternalConnection{
                        AccessToken: sdk.String("impedit"),
                        AccessTokenSecret: sdk.String("aliquid"),
                        Data: sdk.String("quis"),
                        ExpiresOn: types.MustTimeFromString("2022-07-25T18:23:48.906Z"),
                        ExternalUserID: sdk.String("ut"),
                        ExternalUsername: sdk.String("quaerat"),
                        ID: sdk.Int(103988),
                        Provider: sdk.String("praesentium"),
                        UserID: sdk.Int(907899),
                    },
                },
                HasBeenOnboarded: sdk.Bool(false),
                ID: sdk.Int(221781),
                IsLocked: sdk.Bool(false),
                IsVerified: sdk.Bool(false),
                KnowledgeNotificationsLastReadOn: types.MustTimeFromString("2021-07-17T02:21:21.661Z"),
                LastSeenOn: types.MustTimeFromString("2022-11-07T07:22:33.976Z"),
                Name: sdk.String("Isaac Smith"),
                Password: sdk.String("enim"),
                PasswordSalt: sdk.String("accusamus"),
                ReferralPath: sdk.String("aperiam"),
                ReferredUsers: sdk.Int(916419),
                ReferrerKey: sdk.String("laudantium"),
                Settings: &shared.UserSettings{
                    AccountantEmail: sdk.String("tempora"),
                    Address: sdk.String("68595 Tressie Club"),
                    APIKey: sdk.String("aliquam"),
                    APISecret: sdk.String("labore"),
                    BackgroundImage: sdk.String("maiores"),
                    Bank: sdk.String("sequi"),
                    BankAccount: sdk.String("saepe"),
                    Cname: sdk.String("consequatur"),
                    CompanyRegistrationNumber: sdk.String("esse"),
                    Country: &shared.Country{
                        ID: sdk.Int(891302),
                        Name: sdk.String("Devin Runte"),
                        Value: sdk.String("deserunt"),
                    },
                    CountryID: sdk.Int(319834),
                    Currency: &shared.Currency{
                        Code: sdk.String("reiciendis"),
                        ID: sdk.Int(196451),
                        Name: sdk.String("Cameron Rohan"),
                        Symbol: sdk.String("aut"),
                        Value: sdk.String("ipsam"),
                    },
                    CurrencyID: sdk.Int(642804),
                    CurrencySymbol: sdk.String("cupiditate"),
                    DefaultDateFormat: sdk.String("reprehenderit"),
                    DefaultDueDateInDays: sdk.Int(157281),
                    DoNotTrack: sdk.Bool(false),
                    EnableClientPortal: sdk.Bool(false),
                    EnablePredictiveInvoicing: sdk.Bool(false),
                    EnableRecurringInvoicing: sdk.Bool(false),
                    HasInvoiceLogo: sdk.Bool(false),
                    Iban: sdk.String("necessitatibus"),
                    ID: sdk.Int(37764),
                    InvoiceTemplate: shared.UserSettingsInvoiceTemplateEnumDefault.ToPointer(),
                    InvoiceTemplateColorHex: sdk.String("nisi"),
                    PhoneNumber: sdk.String("molestiae"),
                    Profession: shared.UserSettingsProfessionEnumDesignAndCreative.ToPointer(),
                    ReceiveSmsNotifications: sdk.Bool(false),
                    ReferralProgram: shared.UserSettingsReferralProgramEnumDisabled.ToPointer(),
                    StoreCheckoutFields: shared.UserSettingsStoreCheckoutFieldsEnumShowMinimumRequiredFields.ToPointer(),
                    StoreColorHex: sdk.String("odit"),
                    StoreCurrency: &shared.Currency{
                        Code: sdk.String("iusto"),
                        ID: sdk.Int(712893),
                        Name: sdk.String("Ms. Kari Dooley"),
                        Symbol: sdk.String("esse"),
                        Value: sdk.String("accusantium"),
                    },
                    StoreCurrencyID: sdk.Int(718119),
                    StoreCustomJavaScript: sdk.String("sapiente"),
                    StoreDescription: sdk.String("quam"),
                    StoreEmail: sdk.String("est"),
                    StoreLanguage: &shared.UILanguage{
                        ID: sdk.Int(307306),
                        Name: sdk.String("Trevor Lemke"),
                        UICulture: sdk.String("voluptatibus"),
                    },
                    StoreLanguageID: sdk.Int(374414),
                    StoreName: sdk.String("non"),
                    StorePurchaseEmailMessage: sdk.String("ullam"),
                    StorePurchaseThankYouMessage: sdk.String("laborum"),
                    StoreTextColorHex: sdk.String("voluptas"),
                    StoreURL: sdk.String("doloribus"),
                    SubscribeToProductEmails: sdk.Bool(false),
                    Swift: sdk.String("animi"),
                    Terms: sdk.String("recusandae"),
                    UserID: sdk.Int(359453),
                    UserSignature: sdk.String("non"),
                    VatNumber: sdk.String("necessitatibus"),
                    YearsOfExperience: sdk.Int(719469),
                },
                Status: shared.UserStatusEnumLocked.ToPointer(),
                SubscriptionPlan: &shared.SubscriptionPlan{
                    CancellatedOn: types.MustTimeFromString("2022-12-20T21:27:48.504Z"),
                    CouponCode: sdk.String("optio"),
                    CurrencyCode: sdk.String("sequi"),
                    ExternalIdentifier: sdk.String("sunt"),
                    Features: []shared.SubscriptionPlanFeaturesEnum{
                        shared.SubscriptionPlanFeaturesEnumCname,
                    },
                    HasDuePayment: sdk.Bool(false),
                    HasDuePaymentSince: types.MustTimeFromString("2022-11-07T10:23:33.296Z"),
                    ID: sdk.Int(227741),
                    Identifier: sdk.String("rerum"),
                    IsActive: sdk.Bool(false),
                    IsLifetime: sdk.Bool(false),
                    LastPaymentOn: types.MustTimeFromString("2022-08-27T21:17:43.507Z"),
                    MaxClients: sdk.Int(836991),
                    Name: sdk.String("Carmen Hudson"),
                    OnHold: sdk.Bool(false),
                    OrderIdentifier: sdk.String("itaque"),
                    Price: sdk.Float64(1147.67),
                    Recurrence: shared.SubscriptionPlanRecurrenceEnumYearly.ToPointer(),
                    SaleID: sdk.Int64(33093),
                    Status: shared.SubscriptionPlanStatusEnumCanceled.ToPointer(),
                    SystemCancelationReason: shared.SubscriptionPlanSystemCancelationReasonEnumFraud.ToPointer(),
                    TrialEndsOn: types.MustTimeFromString("2021-05-12T09:40:30.785Z"),
                    TrialNumberOfDays: sdk.Int(980467),
                    TrialStartsOn: types.MustTimeFromString("2022-05-31T03:19:09.957Z"),
                    UserID: sdk.Int(960933),
                    Version: sdk.Int(45510),
                },
                Type: shared.UserTypeEnumSystemAdministrator.ToPointer(),
                Username: sdk.String("Clinton_McLaughlin"),
                VerifiedOn: types.MustTimeFromString("2022-12-31T04:26:39.100Z"),
                YearsOfExperience: shared.UserYearsOfExperienceEnumSixPlus.ToPointer(),
            },
            UserID: sdk.Int(196700),
        },
        XAuthKey: "commodi",
        XAuthSecret: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkAPINewJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PaymentLinkAPINewRaw

Create a payment link

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
    res, err := s.PaymentLink.PaymentLinkAPINewRaw(ctx, operations.PaymentLinkAPINewRawRequest{
        RequestBody: []byte("expedita"),
        XAuthKey: "in",
        XAuthSecret: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkAPINewRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## PaymentLinkAPIURI

Return the unique url to the client's payment link

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
    res, err := s.PaymentLink.PaymentLinkAPIURI(ctx, operations.PaymentLinkAPIURIRequest{
        ID: 123795,
        XAuthKey: "enim",
        XAuthSecret: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentLinkURIAPIModel != nil {
        // handle response
    }
}
```
