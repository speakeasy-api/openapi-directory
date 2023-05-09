# TerminalSettingsTerminalLevel

### Available Operations

* [GetTerminalsTerminalIDTerminalLogos](#getterminalsterminalidterminallogos) - Get the terminal logo
* [GetTerminalsTerminalIDTerminalSettings](#getterminalsterminalidterminalsettings) - Get terminal settings
* [PatchTerminalsTerminalIDTerminalLogos](#patchterminalsterminalidterminallogos) - Update the logo
* [PatchTerminalsTerminalIDTerminalSettings](#patchterminalsterminalidterminalsettings) - Update terminal settings

## GetTerminalsTerminalIDTerminalLogos

Returns the logo that is configured for the payment terminal identified in the path.
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.

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
    res, err := s.TerminalSettingsTerminalLevel.GetTerminalsTerminalIDTerminalLogos(ctx, operations.GetTerminalsTerminalIDTerminalLogosRequest{
        TerminalID: "facere",
    }, operations.GetTerminalsTerminalIDTerminalLogosSecurity{
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

## GetTerminalsTerminalIDTerminalSettings

Returns the settings that are configured for the payment terminal identified in the path.

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
    res, err := s.TerminalSettingsTerminalLevel.GetTerminalsTerminalIDTerminalSettings(ctx, operations.GetTerminalsTerminalIDTerminalSettingsRequest{
        TerminalID: "necessitatibus",
    }, operations.GetTerminalsTerminalIDTerminalSettingsSecurity{
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

## PatchTerminalsTerminalIDTerminalLogos

Updates the logo for the payment terminal identified in the path.

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (store, merchant account, or company account), specify an empty logo value.

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
    res, err := s.TerminalSettingsTerminalLevel.PatchTerminalsTerminalIDTerminalLogos(ctx, operations.PatchTerminalsTerminalIDTerminalLogosRequest{
        Logo: &shared.Logo{
            Data: sdk.String("maxime"),
        },
        TerminalID: "consequatur",
    }, operations.PatchTerminalsTerminalIDTerminalLogosSecurity{
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

## PatchTerminalsTerminalIDTerminalSettings

Updates the settings that are configured for the payment terminal identified in the path.

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
    res, err := s.TerminalSettingsTerminalLevel.PatchTerminalsTerminalIDTerminalSettings(ctx, operations.PatchTerminalsTerminalIDTerminalSettingsRequest{
        TerminalSettings: &shared.TerminalSettings{
            CardholderReceipt: &shared.CardholderReceipt{
                HeaderForAuthorizedReceipt: sdk.String("eaque"),
            },
            Connectivity: &shared.Connectivity{
                SimcardStatus: shared.ConnectivitySimcardStatusEnumActivated.ToPointer(),
            },
            Gratuities: []shared.Gratuity{
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("porro"),
                    PredefinedTipEntries: []string{
                        "quae",
                        "magni",
                        "officiis",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("sed"),
                    PredefinedTipEntries: []string{
                        "impedit",
                        "ipsa",
                        "excepturi",
                        "a",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("maiores"),
                    PredefinedTipEntries: []string{
                        "maiores",
                        "alias",
                        "asperiores",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
            },
            Hardware: &shared.Hardware{
                DisplayMaximumBackLight: sdk.Int(523365),
            },
            Nexo: &shared.Nexo{
                DisplayUrls: &shared.NotificationURL{
                    LocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("suscipit"),
                            URL: sdk.String("earum"),
                            Username: sdk.String("Winona45"),
                        },
                    },
                    PublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("eligendi"),
                            URL: sdk.String("quasi"),
                            Username: sdk.String("Concepcion.Terry"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("qui"),
                            URL: sdk.String("impedit"),
                            Username: sdk.String("Bella13"),
                        },
                    },
                },
                EncryptionKey: &shared.Key{
                    Identifier: sdk.String("corporis"),
                    Passphrase: sdk.String("rerum"),
                    Version: sdk.Int(4654),
                },
                EventUrls: &shared.EventURL{
                    EventLocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("vel"),
                            URL: sdk.String("accusantium"),
                            Username: sdk.String("Malika_Howell"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("veritatis"),
                            URL: sdk.String("ullam"),
                            Username: sdk.String("Angie46"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("magni"),
                            URL: sdk.String("deserunt"),
                            Username: sdk.String("Virgie20"),
                        },
                    },
                    EventPublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("quis"),
                            URL: sdk.String("cupiditate"),
                            Username: sdk.String("Ellen_Marks24"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("reiciendis"),
                            URL: sdk.String("amet"),
                            Username: sdk.String("Frank_Beer55"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("molestiae"),
                            URL: sdk.String("aliquid"),
                            Username: sdk.String("Yasmine_Wilkinson3"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("dicta"),
                            URL: sdk.String("minus"),
                            Username: sdk.String("Haylie_Upton69"),
                        },
                    },
                },
                NexoEventUrls: []string{
                    "voluptates",
                    "fugit",
                },
            },
            OfflineProcessing: &shared.OfflineProcessing{
                ChipFloorLimit: sdk.Int(259377),
                OfflineSwipeLimits: []shared.MinorUnitsMonetaryValue{
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(758194),
                        CurrencyCode: sdk.String("asperiores"),
                    },
                },
            },
            Opi: &shared.Opi{
                EnablePayAtTable: sdk.Bool(false),
                PayAtTableStoreNumber: sdk.String("esse"),
                PayAtTableURL: sdk.String("blanditiis"),
            },
            Passcodes: &shared.Passcodes{
                AdminMenuPin: sdk.String("sint"),
                RefundPin: sdk.String("repellat"),
                ScreenLockPin: sdk.String("a"),
                TxMenuPin: sdk.String("animi"),
            },
            PayAtTable: &shared.PayAtTable{
                AuthenticationMethod: shared.PayAtTableAuthenticationMethodEnumMke.ToPointer(),
                EnablePayAtTable: sdk.Bool(false),
            },
            Payment: &shared.Payment{
                HideMinorUnitsInCurrencies: []string{
                    "nulla",
                    "deserunt",
                    "corporis",
                    "velit",
                },
            },
            ReceiptOptions: &shared.ReceiptOptions{
                Logo: sdk.String("officiis"),
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
                DeviceName: sdk.String("officia"),
                DeviceSlogan: sdk.String("saepe"),
                SkipSignature: sdk.Bool(false),
            },
            Standalone: &shared.Standalone{
                CurrencyCode: sdk.String("eum"),
                EnableStandalone: sdk.Bool(false),
            },
            Surcharge: &shared.Surcharge{
                AskConfirmation: sdk.Bool(false),
                Configurations: []shared.Configuration{
                    shared.Configuration{
                        Brand: "accusantium",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(770128),
                                CurrencyCode: "quasi",
                                Percentage: map[string]interface{}{
                                    "eius": "quisquam",
                                    "eos": "nobis",
                                    "natus": "minus",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(154389),
                                CurrencyCode: "magnam",
                                Percentage: map[string]interface{}{
                                    "quod": "quos",
                                    "corrupti": "amet",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(473326),
                                CurrencyCode: "amet",
                                Percentage: map[string]interface{}{
                                    "modi": "perferendis",
                                    "necessitatibus": "architecto",
                                    "molestias": "dolore",
                                },
                            },
                        },
                        Sources: []string{
                            "maiores",
                        },
                    },
                    shared.Configuration{
                        Brand: "neque",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(936845),
                                CurrencyCode: "veniam",
                                Percentage: map[string]interface{}{
                                    "eaque": "exercitationem",
                                    "veniam": "nihil",
                                },
                            },
                        },
                        Sources: []string{
                            "nisi",
                            "tenetur",
                        },
                    },
                    shared.Configuration{
                        Brand: "quis",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(366480),
                                CurrencyCode: "suscipit",
                                Percentage: map[string]interface{}{
                                    "sit": "quidem",
                                    "repellendus": "perferendis",
                                    "id": "sapiente",
                                    "sed": "possimus",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(996072),
                                CurrencyCode: "repudiandae",
                                Percentage: map[string]interface{}{
                                    "adipisci": "pariatur",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(688463),
                                CurrencyCode: "dolore",
                                Percentage: map[string]interface{}{
                                    "iure": "explicabo",
                                    "minus": "soluta",
                                    "dolorum": "velit",
                                    "earum": "praesentium",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(621140),
                                CurrencyCode: "non",
                                Percentage: map[string]interface{}{
                                    "mollitia": "accusamus",
                                },
                            },
                        },
                        Sources: []string{
                            "cumque",
                            "doloremque",
                            "expedita",
                        },
                    },
                    shared.Configuration{
                        Brand: "corrupti",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(643199),
                                CurrencyCode: "aliquid",
                                Percentage: map[string]interface{}{
                                    "magni": "tempora",
                                    "possimus": "dolor",
                                    "rerum": "sed",
                                },
                            },
                        },
                        Sources: []string{
                            "optio",
                            "delectus",
                            "minus",
                            "quo",
                        },
                    },
                },
            },
            Timeouts: &shared.Timeouts{
                FromActiveToSleep: sdk.Int(550338),
            },
            WifiProfiles: &shared.WifiProfiles{
                Profiles: []shared.Profile{
                    shared.Profile{
                        AuthType: "voluptatum",
                        AutoWifi: sdk.Bool(false),
                        BssType: "iste",
                        Channel: sdk.Int(361106),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("accusantium"),
                        EapCaCert: &shared.File{
                            Data: "illo",
                            Name: "Melba Heaney",
                        },
                        EapClientCert: &shared.File{
                            Data: "neque",
                            Name: "Chester Willms V",
                        },
                        EapClientKey: &shared.File{
                            Data: "aperiam",
                            Name: "Alexis Hane",
                        },
                        EapClientPwd: sdk.String("quas"),
                        EapIdentity: sdk.String("consequuntur"),
                        EapIntermediateCert: &shared.File{
                            Data: "maiores",
                            Name: "Vicki Langworth",
                        },
                        EapPwd: sdk.String("aliquid"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Myra Leffler"),
                        Psk: sdk.String("adipisci"),
                        Ssid: "recusandae",
                        Wsec: "tempora",
                    },
                    shared.Profile{
                        AuthType: "blanditiis",
                        AutoWifi: sdk.Bool(false),
                        BssType: "numquam",
                        Channel: sdk.Int(196374),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("voluptatum"),
                        EapCaCert: &shared.File{
                            Data: "sit",
                            Name: "Peter Wiegand",
                        },
                        EapClientCert: &shared.File{
                            Data: "totam",
                            Name: "Kenny Cummings",
                        },
                        EapClientKey: &shared.File{
                            Data: "animi",
                            Name: "Mrs. Mary Pfannerstill",
                        },
                        EapClientPwd: sdk.String("aliquam"),
                        EapIdentity: sdk.String("iste"),
                        EapIntermediateCert: &shared.File{
                            Data: "ullam",
                            Name: "Clark Hodkiewicz",
                        },
                        EapPwd: sdk.String("illo"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Amanda Reinger DDS"),
                        Psk: sdk.String("dicta"),
                        Ssid: "harum",
                        Wsec: "facere",
                    },
                    shared.Profile{
                        AuthType: "facilis",
                        AutoWifi: sdk.Bool(false),
                        BssType: "beatae",
                        Channel: sdk.Int(767210),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("delectus"),
                        EapCaCert: &shared.File{
                            Data: "labore",
                            Name: "Byron Ledner",
                        },
                        EapClientCert: &shared.File{
                            Data: "cum",
                            Name: "Timmy Ryan",
                        },
                        EapClientKey: &shared.File{
                            Data: "minus",
                            Name: "Lynn Marks",
                        },
                        EapClientPwd: sdk.String("quo"),
                        EapIdentity: sdk.String("esse"),
                        EapIntermediateCert: &shared.File{
                            Data: "hic",
                            Name: "Edward Roberts",
                        },
                        EapPwd: sdk.String("eligendi"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Patrick Ankunding"),
                        Psk: sdk.String("dolor"),
                        Ssid: "voluptates",
                        Wsec: "tempora",
                    },
                    shared.Profile{
                        AuthType: "magni",
                        AutoWifi: sdk.Bool(false),
                        BssType: "rerum",
                        Channel: sdk.Int(39222),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("voluptatem"),
                        EapCaCert: &shared.File{
                            Data: "eum",
                            Name: "Franklin Kilback",
                        },
                        EapClientCert: &shared.File{
                            Data: "nihil",
                            Name: "Rickey Oberbrunner",
                        },
                        EapClientKey: &shared.File{
                            Data: "atque",
                            Name: "Monique Hamill",
                        },
                        EapClientPwd: sdk.String("quae"),
                        EapIdentity: sdk.String("quas"),
                        EapIntermediateCert: &shared.File{
                            Data: "placeat",
                            Name: "Clara Williamson",
                        },
                        EapPwd: sdk.String("officia"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Benny Mosciski"),
                        Psk: sdk.String("quia"),
                        Ssid: "officiis",
                        Wsec: "mollitia",
                    },
                },
                Settings: &shared.Settings{
                    Band: sdk.String("cumque"),
                    Roaming: sdk.Bool(false),
                    Timeout: sdk.Int(337081),
                },
            },
        },
        TerminalID: "enim",
    }, operations.PatchTerminalsTerminalIDTerminalSettingsSecurity{
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
