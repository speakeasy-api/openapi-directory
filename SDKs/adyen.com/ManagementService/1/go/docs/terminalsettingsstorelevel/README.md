# TerminalSettingsStoreLevel

### Available Operations

* [GetMerchantsMerchantIDStoresReferenceTerminalLogos](#getmerchantsmerchantidstoresreferenceterminallogos) - Get the terminal logo
* [GetMerchantsMerchantIDStoresReferenceTerminalSettings](#getmerchantsmerchantidstoresreferenceterminalsettings) - Get terminal settings
* [GetStoresStoreIDTerminalLogos](#getstoresstoreidterminallogos) - Get the terminal logo
* [GetStoresStoreIDTerminalSettings](#getstoresstoreidterminalsettings) - Get terminal settings
* [PatchMerchantsMerchantIDStoresReferenceTerminalLogos](#patchmerchantsmerchantidstoresreferenceterminallogos) - Update the terminal logo
* [PatchMerchantsMerchantIDStoresReferenceTerminalSettings](#patchmerchantsmerchantidstoresreferenceterminalsettings) - Update terminal settings
* [PatchStoresStoreIDTerminalLogos](#patchstoresstoreidterminallogos) - Update the terminal logo
* [PatchStoresStoreIDTerminalSettings](#patchstoresstoreidterminalsettings) - Update terminal settings

## GetMerchantsMerchantIDStoresReferenceTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

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
    res, err := s.TerminalSettingsStoreLevel.GetMerchantsMerchantIDStoresReferenceTerminalLogos(ctx, operations.GetMerchantsMerchantIDStoresReferenceTerminalLogosRequest{
        MerchantID: "ducimus",
        Model: "excepturi",
        Reference: "dolores",
    }, operations.GetMerchantsMerchantIDStoresReferenceTerminalLogosSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Logo != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDStoresReferenceTerminalSettings

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

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
    res, err := s.TerminalSettingsStoreLevel.GetMerchantsMerchantIDStoresReferenceTerminalSettings(ctx, operations.GetMerchantsMerchantIDStoresReferenceTerminalSettingsRequest{
        MerchantID: "error",
        Reference: "veritatis",
    }, operations.GetMerchantsMerchantIDStoresReferenceTerminalSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalSettings != nil {
        // handle response
    }
}
```

## GetStoresStoreIDTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

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
    res, err := s.TerminalSettingsStoreLevel.GetStoresStoreIDTerminalLogos(ctx, operations.GetStoresStoreIDTerminalLogosRequest{
        Model: "ducimus",
        StoreID: "voluptate",
    }, operations.GetStoresStoreIDTerminalLogosSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Logo != nil {
        // handle response
    }
}
```

## GetStoresStoreIDTerminalSettings

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

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
    res, err := s.TerminalSettingsStoreLevel.GetStoresStoreIDTerminalSettings(ctx, operations.GetStoresStoreIDTerminalSettingsRequest{
        StoreID: "pariatur",
    }, operations.GetStoresStoreIDTerminalSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalSettings != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDStoresReferenceTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

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
    res, err := s.TerminalSettingsStoreLevel.PatchMerchantsMerchantIDStoresReferenceTerminalLogos(ctx, operations.PatchMerchantsMerchantIDStoresReferenceTerminalLogosRequest{
        Logo: &shared.Logo{
            Data: sdk.String("itaque"),
        },
        MerchantID: "similique",
        Model: "optio",
        Reference: "ex",
    }, operations.PatchMerchantsMerchantIDStoresReferenceTerminalLogosSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Logo != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDStoresReferenceTerminalSettings

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

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
    res, err := s.TerminalSettingsStoreLevel.PatchMerchantsMerchantIDStoresReferenceTerminalSettings(ctx, operations.PatchMerchantsMerchantIDStoresReferenceTerminalSettingsRequest{
        TerminalSettings: &shared.TerminalSettings{
            CardholderReceipt: &shared.CardholderReceipt{
                HeaderForAuthorizedReceipt: sdk.String("quaerat"),
            },
            Connectivity: &shared.Connectivity{
                SimcardStatus: shared.ConnectivitySimcardStatusEnumActivated.ToPointer(),
            },
            Gratuities: []shared.Gratuity{
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("placeat"),
                    PredefinedTipEntries: []string{
                        "exercitationem",
                        "quam",
                        "dolorem",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("modi"),
                    PredefinedTipEntries: []string{
                        "sint",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("vero"),
                    PredefinedTipEntries: []string{
                        "repudiandae",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("cum"),
                    PredefinedTipEntries: []string{
                        "earum",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
            },
            Hardware: &shared.Hardware{
                DisplayMaximumBackLight: sdk.Int(334474),
            },
            Nexo: &shared.Nexo{
                DisplayUrls: &shared.NotificationURL{
                    LocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("dolores"),
                            URL: sdk.String("nam"),
                            Username: sdk.String("Betty_Cruickshank5"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("ducimus"),
                            URL: sdk.String("maiores"),
                            Username: sdk.String("Ashleigh_Boyer"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("libero"),
                            URL: sdk.String("excepturi"),
                            Username: sdk.String("Kody34"),
                        },
                    },
                    PublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("eligendi"),
                            URL: sdk.String("sint"),
                            Username: sdk.String("Emelie_Welch"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("totam"),
                            URL: sdk.String("molestias"),
                            Username: sdk.String("Jazmyne.Bechtelar55"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("iste"),
                            URL: sdk.String("assumenda"),
                            Username: sdk.String("Mose3"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("delectus"),
                            URL: sdk.String("impedit"),
                            Username: sdk.String("Naomi90"),
                        },
                    },
                },
                EncryptionKey: &shared.Key{
                    Identifier: sdk.String("deserunt"),
                    Passphrase: sdk.String("doloremque"),
                    Version: sdk.Int(339756),
                },
                EventUrls: &shared.EventURL{
                    EventLocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("libero"),
                            URL: sdk.String("architecto"),
                            Username: sdk.String("Kurt_Krajcik25"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("magnam"),
                            URL: sdk.String("itaque"),
                            Username: sdk.String("Camille16"),
                        },
                    },
                    EventPublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("laudantium"),
                            URL: sdk.String("odit"),
                            Username: sdk.String("Salma.Farrell"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("velit"),
                            URL: sdk.String("facilis"),
                            Username: sdk.String("Mortimer.Huels50"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("distinctio"),
                            URL: sdk.String("nisi"),
                            Username: sdk.String("Ethan_Huel81"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("facilis"),
                            URL: sdk.String("ipsum"),
                            Username: sdk.String("Emma.Wiza89"),
                        },
                    },
                },
                NexoEventUrls: []string{
                    "rerum",
                    "eos",
                },
            },
            OfflineProcessing: &shared.OfflineProcessing{
                ChipFloorLimit: sdk.Int(440777),
                OfflineSwipeLimits: []shared.MinorUnitsMonetaryValue{
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(207296),
                        CurrencyCode: sdk.String("iusto"),
                    },
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(664965),
                        CurrencyCode: sdk.String("rem"),
                    },
                },
            },
            Opi: &shared.Opi{
                EnablePayAtTable: sdk.Bool(false),
                PayAtTableStoreNumber: sdk.String("eligendi"),
                PayAtTableURL: sdk.String("fugiat"),
            },
            Passcodes: &shared.Passcodes{
                AdminMenuPin: sdk.String("unde"),
                RefundPin: sdk.String("officiis"),
                ScreenLockPin: sdk.String("ducimus"),
                TxMenuPin: sdk.String("dolor"),
            },
            PayAtTable: &shared.PayAtTable{
                AuthenticationMethod: shared.PayAtTableAuthenticationMethodEnumMagswipe.ToPointer(),
                EnablePayAtTable: sdk.Bool(false),
            },
            Payment: &shared.Payment{
                HideMinorUnitsInCurrencies: []string{
                    "porro",
                    "vitae",
                    "dignissimos",
                },
            },
            ReceiptOptions: &shared.ReceiptOptions{
                Logo: sdk.String("esse"),
                QrCodeData: sdk.String("fugiat"),
            },
            ReceiptPrinting: &shared.ReceiptPrinting{
                MerchantApproved: sdk.Bool(false),
                MerchantCancelled: sdk.Bool(false),
                MerchantCaptureApproved: sdk.Bool(false),
                MerchantCaptureRefused: sdk.Bool(false),
                MerchantRefundApproved: sdk.Bool(false),
                MerchantRefundRefused: sdk.Bool(false),
                MerchantRefused: sdk.Bool(false),
                MerchantVoid: sdk.Bool(false),
                ShopperApproved: sdk.Bool(false),
                ShopperCancelled: sdk.Bool(false),
                ShopperCaptureApproved: sdk.Bool(false),
                ShopperCaptureRefused: sdk.Bool(false),
                ShopperRefundApproved: sdk.Bool(false),
                ShopperRefundRefused: sdk.Bool(false),
                ShopperRefused: sdk.Bool(false),
                ShopperVoid: sdk.Bool(false),
            },
            Signature: &shared.Signature{
                AskSignatureOnScreen: sdk.Bool(false),
                DeviceName: sdk.String("ad"),
                DeviceSlogan: sdk.String("aspernatur"),
                SkipSignature: sdk.Bool(false),
            },
            Standalone: &shared.Standalone{
                CurrencyCode: sdk.String("enim"),
                EnableStandalone: sdk.Bool(false),
            },
            Surcharge: &shared.Surcharge{
                AskConfirmation: sdk.Bool(false),
                Configurations: []shared.Configuration{
                    shared.Configuration{
                        Brand: "iusto",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(729828),
                                CurrencyCode: "illo",
                                Percentage: map[string]interface{}{
                                    "incidunt": "accusamus",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(902581),
                                CurrencyCode: "tempore",
                                Percentage: map[string]interface{}{
                                    "eos": "reiciendis",
                                    "earum": "reprehenderit",
                                },
                            },
                        },
                        Sources: []string{
                            "nemo",
                            "repellat",
                            "quisquam",
                        },
                    },
                    shared.Configuration{
                        Brand: "sequi",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(534908),
                                CurrencyCode: "illo",
                                Percentage: map[string]interface{}{
                                    "assumenda": "aliquam",
                                    "quisquam": "provident",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(514993),
                                CurrencyCode: "repudiandae",
                                Percentage: map[string]interface{}{
                                    "maxime": "aspernatur",
                                },
                            },
                        },
                        Sources: []string{
                            "expedita",
                            "quas",
                            "provident",
                        },
                    },
                    shared.Configuration{
                        Brand: "repudiandae",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(492361),
                                CurrencyCode: "corporis",
                                Percentage: map[string]interface{}{
                                    "similique": "repellendus",
                                    "iure": "dolorem",
                                    "commodi": "impedit",
                                    "commodi": "aut",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(32055),
                                CurrencyCode: "ad",
                                Percentage: map[string]interface{}{
                                    "amet": "illum",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(506863),
                                CurrencyCode: "quidem",
                                Percentage: map[string]interface{}{
                                    "amet": "quasi",
                                    "dicta": "laudantium",
                                    "doloremque": "earum",
                                },
                            },
                        },
                        Sources: []string{
                            "amet",
                            "provident",
                        },
                    },
                    shared.Configuration{
                        Brand: "dolorum",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(592880),
                                CurrencyCode: "repudiandae",
                                Percentage: map[string]interface{}{
                                    "nemo": "molestiae",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(930840),
                                CurrencyCode: "facilis",
                                Percentage: map[string]interface{}{
                                    "aperiam": "sint",
                                    "accusamus": "eos",
                                    "totam": "dicta",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(30661),
                                CurrencyCode: "velit",
                                Percentage: map[string]interface{}{
                                    "sunt": "a",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(223291),
                                CurrencyCode: "occaecati",
                                Percentage: map[string]interface{}{
                                    "beatae": "at",
                                    "labore": "minus",
                                    "esse": "voluptatem",
                                },
                            },
                        },
                        Sources: []string{
                            "rerum",
                        },
                    },
                },
            },
            Timeouts: &shared.Timeouts{
                FromActiveToSleep: sdk.Int(411615),
            },
            WifiProfiles: &shared.WifiProfiles{
                Profiles: []shared.Profile{
                    shared.Profile{
                        AuthType: "dignissimos",
                        AutoWifi: sdk.Bool(false),
                        BssType: "repellat",
                        Channel: sdk.Int(243678),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("porro"),
                        EapCaCert: &shared.File{
                            Data: "provident",
                            Name: "Vicky Kuhn",
                        },
                        EapClientCert: &shared.File{
                            Data: "natus",
                            Name: "Luke Fay",
                        },
                        EapClientKey: &shared.File{
                            Data: "quo",
                            Name: "Gilberto Osinski",
                        },
                        EapClientPwd: sdk.String("qui"),
                        EapIdentity: sdk.String("consectetur"),
                        EapIntermediateCert: &shared.File{
                            Data: "repellat",
                            Name: "Rose Heller",
                        },
                        EapPwd: sdk.String("ab"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("May Nolan"),
                        Psk: sdk.String("distinctio"),
                        Ssid: "in",
                        Wsec: "exercitationem",
                    },
                },
                Settings: &shared.Settings{
                    Band: sdk.String("labore"),
                    Roaming: sdk.Bool(false),
                    Timeout: sdk.Int(254382),
                },
            },
        },
        MerchantID: "repudiandae",
        Reference: "modi",
    }, operations.PatchMerchantsMerchantIDStoresReferenceTerminalSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalSettings != nil {
        // handle response
    }
}
```

## PatchStoresStoreIDTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

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
    res, err := s.TerminalSettingsStoreLevel.PatchStoresStoreIDTerminalLogos(ctx, operations.PatchStoresStoreIDTerminalLogosRequest{
        Logo: &shared.Logo{
            Data: sdk.String("in"),
        },
        Model: "explicabo",
        StoreID: "accusamus",
    }, operations.PatchStoresStoreIDTerminalLogosSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Logo != nil {
        // handle response
    }
}
```

## PatchStoresStoreIDTerminalSettings

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

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
    res, err := s.TerminalSettingsStoreLevel.PatchStoresStoreIDTerminalSettings(ctx, operations.PatchStoresStoreIDTerminalSettingsRequest{
        TerminalSettings: &shared.TerminalSettings{
            CardholderReceipt: &shared.CardholderReceipt{
                HeaderForAuthorizedReceipt: sdk.String("rem"),
            },
            Connectivity: &shared.Connectivity{
                SimcardStatus: shared.ConnectivitySimcardStatusEnumActivated.ToPointer(),
            },
            Gratuities: []shared.Gratuity{
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("deleniti"),
                    PredefinedTipEntries: []string{
                        "voluptate",
                        "similique",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
            },
            Hardware: &shared.Hardware{
                DisplayMaximumBackLight: sdk.Int(326118),
            },
            Nexo: &shared.Nexo{
                DisplayUrls: &shared.NotificationURL{
                    LocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("magnam"),
                            URL: sdk.String("sit"),
                            Username: sdk.String("Dixie65"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("dignissimos"),
                            URL: sdk.String("fugiat"),
                            Username: sdk.String("Ewell96"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("ab"),
                            URL: sdk.String("modi"),
                            Username: sdk.String("Adrian.Ankunding41"),
                        },
                    },
                    PublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("dolorum"),
                            URL: sdk.String("possimus"),
                            Username: sdk.String("Izaiah31"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("itaque"),
                            URL: sdk.String("minus"),
                            Username: sdk.String("Boris_Rau"),
                        },
                    },
                },
                EncryptionKey: &shared.Key{
                    Identifier: sdk.String("et"),
                    Passphrase: sdk.String("facilis"),
                    Version: sdk.Int(229276),
                },
                EventUrls: &shared.EventURL{
                    EventLocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("fuga"),
                            URL: sdk.String("alias"),
                            Username: sdk.String("Juliana_Anderson"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("repellendus"),
                            URL: sdk.String("veritatis"),
                            Username: sdk.String("Angela_Bechtelar65"),
                        },
                    },
                    EventPublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("officia"),
                            URL: sdk.String("sed"),
                            Username: sdk.String("Alexa_Abbott2"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("incidunt"),
                            URL: sdk.String("qui"),
                            Username: sdk.String("Christopher.Tremblay10"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("aliquid"),
                            URL: sdk.String("modi"),
                            Username: sdk.String("Noel_Wolf"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("libero"),
                            URL: sdk.String("totam"),
                            Username: sdk.String("Clay_Jacobi"),
                        },
                    },
                },
                NexoEventUrls: []string{
                    "odit",
                    "velit",
                },
            },
            OfflineProcessing: &shared.OfflineProcessing{
                ChipFloorLimit: sdk.Int(967338),
                OfflineSwipeLimits: []shared.MinorUnitsMonetaryValue{
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(861123),
                        CurrencyCode: sdk.String("laborum"),
                    },
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(617657),
                        CurrencyCode: sdk.String("accusamus"),
                    },
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(42906),
                        CurrencyCode: sdk.String("nisi"),
                    },
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(700856),
                        CurrencyCode: sdk.String("recusandae"),
                    },
                },
            },
            Opi: &shared.Opi{
                EnablePayAtTable: sdk.Bool(false),
                PayAtTableStoreNumber: sdk.String("voluptates"),
                PayAtTableURL: sdk.String("non"),
            },
            Passcodes: &shared.Passcodes{
                AdminMenuPin: sdk.String("rem"),
                RefundPin: sdk.String("quia"),
                ScreenLockPin: sdk.String("ullam"),
                TxMenuPin: sdk.String("quisquam"),
            },
            PayAtTable: &shared.PayAtTable{
                AuthenticationMethod: shared.PayAtTableAuthenticationMethodEnumMagswipe.ToPointer(),
                EnablePayAtTable: sdk.Bool(false),
            },
            Payment: &shared.Payment{
                HideMinorUnitsInCurrencies: []string{
                    "eligendi",
                    "quae",
                    "officiis",
                    "architecto",
                },
            },
            ReceiptOptions: &shared.ReceiptOptions{
                Logo: sdk.String("architecto"),
                QrCodeData: sdk.String("enim"),
            },
            ReceiptPrinting: &shared.ReceiptPrinting{
                MerchantApproved: sdk.Bool(false),
                MerchantCancelled: sdk.Bool(false),
                MerchantCaptureApproved: sdk.Bool(false),
                MerchantCaptureRefused: sdk.Bool(false),
                MerchantRefundApproved: sdk.Bool(false),
                MerchantRefundRefused: sdk.Bool(false),
                MerchantRefused: sdk.Bool(false),
                MerchantVoid: sdk.Bool(false),
                ShopperApproved: sdk.Bool(false),
                ShopperCancelled: sdk.Bool(false),
                ShopperCaptureApproved: sdk.Bool(false),
                ShopperCaptureRefused: sdk.Bool(false),
                ShopperRefundApproved: sdk.Bool(false),
                ShopperRefundRefused: sdk.Bool(false),
                ShopperRefused: sdk.Bool(false),
                ShopperVoid: sdk.Bool(false),
            },
            Signature: &shared.Signature{
                AskSignatureOnScreen: sdk.Bool(false),
                DeviceName: sdk.String("optio"),
                DeviceSlogan: sdk.String("rem"),
                SkipSignature: sdk.Bool(false),
            },
            Standalone: &shared.Standalone{
                CurrencyCode: sdk.String("perferendis"),
                EnableStandalone: sdk.Bool(false),
            },
            Surcharge: &shared.Surcharge{
                AskConfirmation: sdk.Bool(false),
                Configurations: []shared.Configuration{
                    shared.Configuration{
                        Brand: "reiciendis",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(615058),
                                CurrencyCode: "dicta",
                                Percentage: map[string]interface{}{
                                    "ullam": "dolore",
                                    "modi": "itaque",
                                    "maxime": "modi",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(163558),
                                CurrencyCode: "assumenda",
                                Percentage: map[string]interface{}{
                                    "doloribus": "impedit",
                                    "porro": "accusamus",
                                    "totam": "reiciendis",
                                    "ab": "sint",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(472414),
                                CurrencyCode: "esse",
                                Percentage: map[string]interface{}{
                                    "odio": "nesciunt",
                                    "debitis": "vel",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(208683),
                                CurrencyCode: "corporis",
                                Percentage: map[string]interface{}{
                                    "consequuntur": "officia",
                                    "reprehenderit": "distinctio",
                                },
                            },
                        },
                        Sources: []string{
                            "ipsa",
                            "rem",
                        },
                    },
                    shared.Configuration{
                        Brand: "maiores",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(331452),
                                CurrencyCode: "saepe",
                                Percentage: map[string]interface{}{
                                    "facere": "aliquam",
                                },
                            },
                        },
                        Sources: []string{
                            "doloribus",
                            "fugiat",
                            "est",
                        },
                    },
                    shared.Configuration{
                        Brand: "delectus",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(110522),
                                CurrencyCode: "nesciunt",
                                Percentage: map[string]interface{}{
                                    "illo": "repellat",
                                    "nemo": "doloribus",
                                    "possimus": "unde",
                                },
                            },
                        },
                        Sources: []string{
                            "explicabo",
                            "ipsam",
                        },
                    },
                },
            },
            Timeouts: &shared.Timeouts{
                FromActiveToSleep: sdk.Int(583193),
            },
            WifiProfiles: &shared.WifiProfiles{
                Profiles: []shared.Profile{
                    shared.Profile{
                        AuthType: "alias",
                        AutoWifi: sdk.Bool(false),
                        BssType: "quidem",
                        Channel: sdk.Int(198911),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("commodi"),
                        EapCaCert: &shared.File{
                            Data: "sapiente",
                            Name: "Lynn Trantow",
                        },
                        EapClientCert: &shared.File{
                            Data: "ut",
                            Name: "Essie Ferry",
                        },
                        EapClientKey: &shared.File{
                            Data: "minima",
                            Name: "Dr. Alexandra Bernhard",
                        },
                        EapClientPwd: sdk.String("quisquam"),
                        EapIdentity: sdk.String("dolor"),
                        EapIntermediateCert: &shared.File{
                            Data: "ducimus",
                            Name: "Warren Brakus",
                        },
                        EapPwd: sdk.String("magni"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Josephine Lakin"),
                        Psk: sdk.String("expedita"),
                        Ssid: "facilis",
                        Wsec: "impedit",
                    },
                    shared.Profile{
                        AuthType: "sit",
                        AutoWifi: sdk.Bool(false),
                        BssType: "nemo",
                        Channel: sdk.Int(633987),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("consequuntur"),
                        EapCaCert: &shared.File{
                            Data: "amet",
                            Name: "Don Hartmann",
                        },
                        EapClientCert: &shared.File{
                            Data: "a",
                            Name: "Bill Yundt",
                        },
                        EapClientKey: &shared.File{
                            Data: "architecto",
                            Name: "Molly Beier",
                        },
                        EapClientPwd: sdk.String("quia"),
                        EapIdentity: sdk.String("dicta"),
                        EapIntermediateCert: &shared.File{
                            Data: "vel",
                            Name: "Mr. Darrel Hermann Jr.",
                        },
                        EapPwd: sdk.String("provident"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Elmer Spinka"),
                        Psk: sdk.String("recusandae"),
                        Ssid: "velit",
                        Wsec: "magnam",
                    },
                    shared.Profile{
                        AuthType: "dignissimos",
                        AutoWifi: sdk.Bool(false),
                        BssType: "laboriosam",
                        Channel: sdk.Int(152283),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("odio"),
                        EapCaCert: &shared.File{
                            Data: "natus",
                            Name: "Felipe Wyman",
                        },
                        EapClientCert: &shared.File{
                            Data: "itaque",
                            Name: "Lindsey Gislason",
                        },
                        EapClientKey: &shared.File{
                            Data: "cum",
                            Name: "Juana Reichel",
                        },
                        EapClientPwd: sdk.String("quod"),
                        EapIdentity: sdk.String("id"),
                        EapIntermediateCert: &shared.File{
                            Data: "saepe",
                            Name: "Angelica Dooley",
                        },
                        EapPwd: sdk.String("illum"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Melvin O'Conner"),
                        Psk: sdk.String("distinctio"),
                        Ssid: "pariatur",
                        Wsec: "ad",
                    },
                    shared.Profile{
                        AuthType: "facere",
                        AutoWifi: sdk.Bool(false),
                        BssType: "laborum",
                        Channel: sdk.Int(911451),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("laborum"),
                        EapCaCert: &shared.File{
                            Data: "incidunt",
                            Name: "Vernon Abbott",
                        },
                        EapClientCert: &shared.File{
                            Data: "molestias",
                            Name: "Ernesto Mayert",
                        },
                        EapClientKey: &shared.File{
                            Data: "perferendis",
                            Name: "Jeanne Gutkowski",
                        },
                        EapClientPwd: sdk.String("hic"),
                        EapIdentity: sdk.String("nostrum"),
                        EapIntermediateCert: &shared.File{
                            Data: "officiis",
                            Name: "Drew Mraz",
                        },
                        EapPwd: sdk.String("nostrum"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Carole Paucek"),
                        Psk: sdk.String("quasi"),
                        Ssid: "deserunt",
                        Wsec: "quod",
                    },
                },
                Settings: &shared.Settings{
                    Band: sdk.String("laboriosam"),
                    Roaming: sdk.Bool(false),
                    Timeout: sdk.Int(41179),
                },
            },
        },
        StoreID: "voluptatem",
    }, operations.PatchStoresStoreIDTerminalSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalSettings != nil {
        // handle response
    }
}
```
