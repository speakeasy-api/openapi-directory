# TerminalSettingsMerchantLevel

### Available Operations

* [GetMerchantsMerchantIDTerminalLogos](#getmerchantsmerchantidterminallogos) - Get the terminal logo
* [GetMerchantsMerchantIDTerminalSettings](#getmerchantsmerchantidterminalsettings) - Get terminal settings
* [PatchMerchantsMerchantIDTerminalLogos](#patchmerchantsmerchantidterminallogos) - Update the terminal logo
* [PatchMerchantsMerchantIDTerminalSettings](#patchmerchantsmerchantidterminalsettings) - Update terminal settings

## GetMerchantsMerchantIDTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the merchant account identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

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
    res, err := s.TerminalSettingsMerchantLevel.GetMerchantsMerchantIDTerminalLogos(ctx, operations.GetMerchantsMerchantIDTerminalLogosRequest{
        MerchantID: "laudantium",
        Model: "quae",
    }, operations.GetMerchantsMerchantIDTerminalLogosSecurity{
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

## GetMerchantsMerchantIDTerminalSettings

Returns the payment terminal settings that are configured for the merchant account identified in the path. These settings apply to all terminals under the merchant account unless different values are configured at a lower level (store or individual terminal).

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
    res, err := s.TerminalSettingsMerchantLevel.GetMerchantsMerchantIDTerminalSettings(ctx, operations.GetMerchantsMerchantIDTerminalSettingsRequest{
        MerchantID: "dolor",
    }, operations.GetMerchantsMerchantIDTerminalSettingsSecurity{
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

## PatchMerchantsMerchantIDTerminalLogos

Updates the logo for a specific payment terminal model at the merchant account identified in the path. You can update the logo for only one terminal model at a time. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the company account, specify an empty logo value.

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
    res, err := s.TerminalSettingsMerchantLevel.PatchMerchantsMerchantIDTerminalLogos(ctx, operations.PatchMerchantsMerchantIDTerminalLogosRequest{
        Logo: &shared.Logo{
            Data: sdk.String("fugiat"),
        },
        MerchantID: "ipsam",
        Model: "consequuntur",
    }, operations.PatchMerchantsMerchantIDTerminalLogosSecurity{
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

## PatchMerchantsMerchantIDTerminalSettings

Updates payment terminal settings for the merchant account identified in the path.
These settings apply to all terminals under the merchant account, unless different values are configured at a lower level (store or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

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
    res, err := s.TerminalSettingsMerchantLevel.PatchMerchantsMerchantIDTerminalSettings(ctx, operations.PatchMerchantsMerchantIDTerminalSettingsRequest{
        TerminalSettings: &shared.TerminalSettings{
            CardholderReceipt: &shared.CardholderReceipt{
                HeaderForAuthorizedReceipt: sdk.String("ipsa"),
            },
            Connectivity: &shared.Connectivity{
                SimcardStatus: shared.ConnectivitySimcardStatusEnumInventory.ToPointer(),
            },
            Gratuities: []shared.Gratuity{
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("impedit"),
                    PredefinedTipEntries: []string{
                        "esse",
                        "necessitatibus",
                        "sed",
                        "veniam",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("nesciunt"),
                    PredefinedTipEntries: []string{
                        "eum",
                        "vel",
                        "voluptatum",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("magnam"),
                    PredefinedTipEntries: []string{
                        "ab",
                        "porro",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("autem"),
                    PredefinedTipEntries: []string{
                        "laboriosam",
                        "recusandae",
                        "consequuntur",
                        "voluptatem",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
            },
            Hardware: &shared.Hardware{
                DisplayMaximumBackLight: sdk.Int(350207),
            },
            Nexo: &shared.Nexo{
                DisplayUrls: &shared.NotificationURL{
                    LocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("quasi"),
                            URL: sdk.String("nisi"),
                            Username: sdk.String("Sasha_Thiel19"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("doloribus"),
                            URL: sdk.String("repudiandae"),
                            Username: sdk.String("Noble.McClure"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("blanditiis"),
                            URL: sdk.String("officia"),
                            Username: sdk.String("Garry_Funk"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("eius"),
                            URL: sdk.String("aspernatur"),
                            Username: sdk.String("Jerrell_Dooley27"),
                        },
                    },
                    PublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("rem"),
                            URL: sdk.String("fugiat"),
                            Username: sdk.String("Bianka23"),
                        },
                    },
                },
                EncryptionKey: &shared.Key{
                    Identifier: sdk.String("aperiam"),
                    Passphrase: sdk.String("cupiditate"),
                    Version: sdk.Int(970732),
                },
                EventUrls: &shared.EventURL{
                    EventLocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("alias"),
                            URL: sdk.String("omnis"),
                            Username: sdk.String("Chauncey.Mayert"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("inventore"),
                            URL: sdk.String("fuga"),
                            Username: sdk.String("Shanny_Wolff96"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("minima"),
                            URL: sdk.String("praesentium"),
                            Username: sdk.String("Providenci_Gutkowski41"),
                        },
                    },
                    EventPublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("commodi"),
                            URL: sdk.String("totam"),
                            Username: sdk.String("Trent_Gleichner3"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("ipsam"),
                            URL: sdk.String("vel"),
                            Username: sdk.String("Abbie97"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("enim"),
                            URL: sdk.String("sint"),
                            Username: sdk.String("Ryder.Nolan"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("reprehenderit"),
                            URL: sdk.String("est"),
                            Username: sdk.String("Ethan_Marquardt94"),
                        },
                    },
                },
                NexoEventUrls: []string{
                    "asperiores",
                    "ex",
                    "voluptas",
                    "debitis",
                },
            },
            OfflineProcessing: &shared.OfflineProcessing{
                ChipFloorLimit: sdk.Int(966148),
                OfflineSwipeLimits: []shared.MinorUnitsMonetaryValue{
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(791880),
                        CurrencyCode: sdk.String("fuga"),
                    },
                },
            },
            Opi: &shared.Opi{
                EnablePayAtTable: sdk.Bool(false),
                PayAtTableStoreNumber: sdk.String("laborum"),
                PayAtTableURL: sdk.String("consectetur"),
            },
            Passcodes: &shared.Passcodes{
                AdminMenuPin: sdk.String("velit"),
                RefundPin: sdk.String("atque"),
                ScreenLockPin: sdk.String("ipsum"),
                TxMenuPin: sdk.String("impedit"),
            },
            PayAtTable: &shared.PayAtTable{
                AuthenticationMethod: shared.PayAtTableAuthenticationMethodEnumMagswipe.ToPointer(),
                EnablePayAtTable: sdk.Bool(false),
            },
            Payment: &shared.Payment{
                HideMinorUnitsInCurrencies: []string{
                    "repudiandae",
                    "nam",
                    "dolore",
                },
            },
            ReceiptOptions: &shared.ReceiptOptions{
                Logo: sdk.String("iusto"),
                QrCodeData: sdk.String("voluptate"),
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
                DeviceName: sdk.String("sequi"),
                DeviceSlogan: sdk.String("dignissimos"),
                SkipSignature: sdk.Bool(false),
            },
            Standalone: &shared.Standalone{
                CurrencyCode: sdk.String("neque"),
                EnableStandalone: sdk.Bool(false),
            },
            Surcharge: &shared.Surcharge{
                AskConfirmation: sdk.Bool(false),
                Configurations: []shared.Configuration{
                    shared.Configuration{
                        Brand: "deleniti",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(437814),
                                CurrencyCode: "odit",
                                Percentage: map[string]interface{}{
                                    "vel": "magnam",
                                    "quibusdam": "inventore",
                                    "facere": "libero",
                                    "architecto": "voluptatibus",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(156383),
                                CurrencyCode: "porro",
                                Percentage: map[string]interface{}{
                                    "velit": "illo",
                                    "accusantium": "vel",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(406922),
                                CurrencyCode: "beatae",
                                Percentage: map[string]interface{}{
                                    "excepturi": "eum",
                                    "velit": "ut",
                                    "perspiciatis": "earum",
                                    "dicta": "impedit",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(975884),
                                CurrencyCode: "iste",
                                Percentage: map[string]interface{}{
                                    "alias": "nisi",
                                    "itaque": "velit",
                                    "laborum": "non",
                                    "dolor": "iusto",
                                },
                            },
                        },
                        Sources: []string{
                            "doloremque",
                        },
                    },
                    shared.Configuration{
                        Brand: "consequatur",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(927403),
                                CurrencyCode: "ea",
                                Percentage: map[string]interface{}{
                                    "voluptas": "facilis",
                                    "placeat": "perspiciatis",
                                    "expedita": "deleniti",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(954334),
                                CurrencyCode: "voluptate",
                                Percentage: map[string]interface{}{
                                    "unde": "necessitatibus",
                                    "animi": "impedit",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(373040),
                                CurrencyCode: "corporis",
                                Percentage: map[string]interface{}{
                                    "error": "esse",
                                    "labore": "veritatis",
                                    "vero": "consectetur",
                                },
                            },
                        },
                        Sources: []string{
                            "inventore",
                        },
                    },
                    shared.Configuration{
                        Brand: "dolorem",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(183033),
                                CurrencyCode: "iste",
                                Percentage: map[string]interface{}{
                                    "nemo": "soluta",
                                    "libero": "rem",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(678060),
                                CurrencyCode: "odio",
                                Percentage: map[string]interface{}{
                                    "alias": "magni",
                                },
                            },
                        },
                        Sources: []string{
                            "quae",
                            "quae",
                        },
                    },
                    shared.Configuration{
                        Brand: "modi",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(348357),
                                CurrencyCode: "itaque",
                                Percentage: map[string]interface{}{
                                    "ipsum": "unde",
                                },
                            },
                        },
                        Sources: []string{
                            "distinctio",
                            "maxime",
                            "quia",
                            "quia",
                        },
                    },
                },
            },
            Timeouts: &shared.Timeouts{
                FromActiveToSleep: sdk.Int(342137),
            },
            WifiProfiles: &shared.WifiProfiles{
                Profiles: []shared.Profile{
                    shared.Profile{
                        AuthType: "libero",
                        AutoWifi: sdk.Bool(false),
                        BssType: "dicta",
                        Channel: sdk.Int(663318),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("libero"),
                        EapCaCert: &shared.File{
                            Data: "fugiat",
                            Name: "Ms. Morris Schulist DVM",
                        },
                        EapClientCert: &shared.File{
                            Data: "inventore",
                            Name: "Lena Greenholt",
                        },
                        EapClientKey: &shared.File{
                            Data: "voluptatem",
                            Name: "Tamara D'Amore MD",
                        },
                        EapClientPwd: sdk.String("facere"),
                        EapIdentity: sdk.String("corrupti"),
                        EapIntermediateCert: &shared.File{
                            Data: "molestiae",
                            Name: "Sheldon Treutel",
                        },
                        EapPwd: sdk.String("ea"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Brittany Prosacco"),
                        Psk: sdk.String("officiis"),
                        Ssid: "voluptatibus",
                        Wsec: "cum",
                    },
                    shared.Profile{
                        AuthType: "at",
                        AutoWifi: sdk.Bool(false),
                        BssType: "alias",
                        Channel: sdk.Int(156653),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("quidem"),
                        EapCaCert: &shared.File{
                            Data: "fuga",
                            Name: "Steven Rath",
                        },
                        EapClientCert: &shared.File{
                            Data: "quibusdam",
                            Name: "Mrs. Mabel Connelly",
                        },
                        EapClientKey: &shared.File{
                            Data: "earum",
                            Name: "Delia Murray",
                        },
                        EapClientPwd: sdk.String("quis"),
                        EapIdentity: sdk.String("beatae"),
                        EapIntermediateCert: &shared.File{
                            Data: "unde",
                            Name: "Lucia McDermott",
                        },
                        EapPwd: sdk.String("numquam"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Cristina Nienow"),
                        Psk: sdk.String("necessitatibus"),
                        Ssid: "corporis",
                        Wsec: "qui",
                    },
                    shared.Profile{
                        AuthType: "expedita",
                        AutoWifi: sdk.Bool(false),
                        BssType: "voluptatum",
                        Channel: sdk.Int(587375),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("minima"),
                        EapCaCert: &shared.File{
                            Data: "placeat",
                            Name: "Gladys King",
                        },
                        EapClientCert: &shared.File{
                            Data: "modi",
                            Name: "Danielle Volkman",
                        },
                        EapClientKey: &shared.File{
                            Data: "aperiam",
                            Name: "Philip Greenfelder",
                        },
                        EapClientPwd: sdk.String("voluptas"),
                        EapIdentity: sdk.String("quo"),
                        EapIntermediateCert: &shared.File{
                            Data: "velit",
                            Name: "Grant Heathcote",
                        },
                        EapPwd: sdk.String("delectus"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Caleb Connelly"),
                        Psk: sdk.String("nemo"),
                        Ssid: "reprehenderit",
                        Wsec: "aperiam",
                    },
                },
                Settings: &shared.Settings{
                    Band: sdk.String("odio"),
                    Roaming: sdk.Bool(false),
                    Timeout: sdk.Int(325297),
                },
            },
        },
        MerchantID: "in",
    }, operations.PatchMerchantsMerchantIDTerminalSettingsSecurity{
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
