# TerminalSettingsCompanyLevel

### Available Operations

* [GetCompaniesCompanyIDTerminalLogos](#getcompaniescompanyidterminallogos) - Get the terminal logo
* [GetCompaniesCompanyIDTerminalSettings](#getcompaniescompanyidterminalsettings) - Get terminal settings
* [PatchCompaniesCompanyIDTerminalLogos](#patchcompaniescompanyidterminallogos) - Update the terminal logo
* [PatchCompaniesCompanyIDTerminalSettings](#patchcompaniescompanyidterminalsettings) - Update terminal settings

## GetCompaniesCompanyIDTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the company identified in the path. 

The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).

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
    res, err := s.TerminalSettingsCompanyLevel.GetCompaniesCompanyIDTerminalLogos(ctx, operations.GetCompaniesCompanyIDTerminalLogosRequest{
        CompanyID: "alias",
        Model: "maiores",
    }, operations.GetCompaniesCompanyIDTerminalLogosSecurity{
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

## GetCompaniesCompanyIDTerminalSettings

Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

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
    res, err := s.TerminalSettingsCompanyLevel.GetCompaniesCompanyIDTerminalSettings(ctx, operations.GetCompaniesCompanyIDTerminalSettingsRequest{
        CompanyID: "reiciendis",
    }, operations.GetCompaniesCompanyIDTerminalSettingsSecurity{
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

## PatchCompaniesCompanyIDTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal). 
* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the Adyen PSP level, specify an empty logo value.

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
    res, err := s.TerminalSettingsCompanyLevel.PatchCompaniesCompanyIDTerminalLogos(ctx, operations.PatchCompaniesCompanyIDTerminalLogosRequest{
        Logo: &shared.Logo{
            Data: sdk.String("dolores"),
        },
        CompanyID: "id",
        Model: "minima",
    }, operations.PatchCompaniesCompanyIDTerminalLogosSecurity{
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

## PatchCompaniesCompanyIDTerminalSettings

Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
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
    res, err := s.TerminalSettingsCompanyLevel.PatchCompaniesCompanyIDTerminalSettings(ctx, operations.PatchCompaniesCompanyIDTerminalSettingsRequest{
        TerminalSettings: &shared.TerminalSettings{
            CardholderReceipt: &shared.CardholderReceipt{
                HeaderForAuthorizedReceipt: sdk.String("dolore"),
            },
            Connectivity: &shared.Connectivity{
                SimcardStatus: shared.ConnectivitySimcardStatusEnumInventory.ToPointer(),
            },
            Gratuities: []shared.Gratuity{
                shared.Gratuity{
                    AllowCustomAmount: sdk.Bool(false),
                    Currency: sdk.String("quae"),
                    PredefinedTipEntries: []string{
                        "omnis",
                        "quaerat",
                        "molestiae",
                        "ex",
                    },
                    UsePredefinedTipEntries: sdk.Bool(false),
                },
            },
            Hardware: &shared.Hardware{
                DisplayMaximumBackLight: sdk.Int(284000),
            },
            Nexo: &shared.Nexo{
                DisplayUrls: &shared.NotificationURL{
                    LocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("adipisci"),
                            URL: sdk.String("debitis"),
                            Username: sdk.String("Jordi_Kemmer"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("esse"),
                            URL: sdk.String("provident"),
                            Username: sdk.String("Eudora_Kemmer13"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("ullam"),
                            URL: sdk.String("quasi"),
                            Username: sdk.String("Madonna_Heathcote"),
                        },
                    },
                    PublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("animi"),
                            URL: sdk.String("ex"),
                            Username: sdk.String("Grady_Bashirian35"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("in"),
                            URL: sdk.String("nam"),
                            Username: sdk.String("Tressie_Nienow26"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("voluptatibus"),
                            URL: sdk.String("molestias"),
                            Username: sdk.String("Sienna.Will69"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("tempora"),
                            URL: sdk.String("quis"),
                            Username: sdk.String("Arne.Corkery2"),
                        },
                    },
                },
                EncryptionKey: &shared.Key{
                    Identifier: sdk.String("velit"),
                    Passphrase: sdk.String("aspernatur"),
                    Version: sdk.Int(432281),
                },
                EventUrls: &shared.EventURL{
                    EventLocalUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("rem"),
                            URL: sdk.String("at"),
                            Username: sdk.String("Oma.Daugherty11"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("minima"),
                            URL: sdk.String("beatae"),
                            Username: sdk.String("Krystal_McKenzie94"),
                        },
                    },
                    EventPublicUrls: []shared.URL{
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("eaque"),
                            URL: sdk.String("earum"),
                            Username: sdk.String("Laury.Wyman78"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("suscipit"),
                            URL: sdk.String("dolorem"),
                            Username: sdk.String("Caleb.Runolfsdottir65"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("necessitatibus"),
                            URL: sdk.String("nulla"),
                            Username: sdk.String("Adela49"),
                        },
                        shared.URL{
                            Encrypted: sdk.Bool(false),
                            Password: sdk.String("natus"),
                            URL: sdk.String("occaecati"),
                            Username: sdk.String("Geovanny16"),
                        },
                    },
                },
                NexoEventUrls: []string{
                    "nulla",
                    "necessitatibus",
                    "ipsa",
                    "tempora",
                },
            },
            OfflineProcessing: &shared.OfflineProcessing{
                ChipFloorLimit: sdk.Int(470621),
                OfflineSwipeLimits: []shared.MinorUnitsMonetaryValue{
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(115834),
                        CurrencyCode: sdk.String("iusto"),
                    },
                    shared.MinorUnitsMonetaryValue{
                        Amount: sdk.Int(457059),
                        CurrencyCode: sdk.String("praesentium"),
                    },
                },
            },
            Opi: &shared.Opi{
                EnablePayAtTable: sdk.Bool(false),
                PayAtTableStoreNumber: sdk.String("maiores"),
                PayAtTableURL: sdk.String("reiciendis"),
            },
            Passcodes: &shared.Passcodes{
                AdminMenuPin: sdk.String("vel"),
                RefundPin: sdk.String("architecto"),
                ScreenLockPin: sdk.String("fugiat"),
                TxMenuPin: sdk.String("doloremque"),
            },
            PayAtTable: &shared.PayAtTable{
                AuthenticationMethod: shared.PayAtTableAuthenticationMethodEnumMagswipe.ToPointer(),
                EnablePayAtTable: sdk.Bool(false),
            },
            Payment: &shared.Payment{
                HideMinorUnitsInCurrencies: []string{
                    "tempora",
                    "esse",
                },
            },
            ReceiptOptions: &shared.ReceiptOptions{
                Logo: sdk.String("ex"),
                QrCodeData: sdk.String("consectetur"),
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
                DeviceName: sdk.String("aliquid"),
                DeviceSlogan: sdk.String("ipsa"),
                SkipSignature: sdk.Bool(false),
            },
            Standalone: &shared.Standalone{
                CurrencyCode: sdk.String("laborum"),
                EnableStandalone: sdk.Bool(false),
            },
            Surcharge: &shared.Surcharge{
                AskConfirmation: sdk.Bool(false),
                Configurations: []shared.Configuration{
                    shared.Configuration{
                        Brand: "nostrum",
                        Currencies: []shared.Currency{
                            shared.Currency{
                                Amount: sdk.Int(713767),
                                CurrencyCode: "aliquid",
                                Percentage: map[string]interface{}{
                                    "suscipit": "aliquid",
                                    "perferendis": "eum",
                                    "voluptas": "iste",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(661607),
                                CurrencyCode: "ab",
                                Percentage: map[string]interface{}{
                                    "possimus": "voluptates",
                                    "mollitia": "laborum",
                                    "libero": "ad",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(536923),
                                CurrencyCode: "enim",
                                Percentage: map[string]interface{}{
                                    "repellendus": "ex",
                                },
                            },
                            shared.Currency{
                                Amount: sdk.Int(775803),
                                CurrencyCode: "ex",
                                Percentage: map[string]interface{}{
                                    "ad": "expedita",
                                    "voluptatem": "molestias",
                                },
                            },
                        },
                        Sources: []string{
                            "aliquid",
                            "beatae",
                            "voluptatum",
                        },
                    },
                },
            },
            Timeouts: &shared.Timeouts{
                FromActiveToSleep: sdk.Int(606308),
            },
            WifiProfiles: &shared.WifiProfiles{
                Profiles: []shared.Profile{
                    shared.Profile{
                        AuthType: "rerum",
                        AutoWifi: sdk.Bool(false),
                        BssType: "est",
                        Channel: sdk.Int(634786),
                        DefaultProfile: sdk.Bool(false),
                        Eap: sdk.String("voluptatem"),
                        EapCaCert: &shared.File{
                            Data: "sapiente",
                            Name: "Juan Parker",
                        },
                        EapClientCert: &shared.File{
                            Data: "voluptatem",
                            Name: "Nina Wehner",
                        },
                        EapClientKey: &shared.File{
                            Data: "rem",
                            Name: "Herman Zemlak",
                        },
                        EapClientPwd: sdk.String("perferendis"),
                        EapIdentity: sdk.String("illum"),
                        EapIntermediateCert: &shared.File{
                            Data: "totam",
                            Name: "Taylor Reichel",
                        },
                        EapPwd: sdk.String("dolor"),
                        HiddenSsid: sdk.Bool(false),
                        Name: sdk.String("Mrs. Stephanie Lind"),
                        Psk: sdk.String("consequatur"),
                        Ssid: "architecto",
                        Wsec: "sit",
                    },
                },
                Settings: &shared.Settings{
                    Band: sdk.String("modi"),
                    Roaming: sdk.Bool(false),
                    Timeout: sdk.Int(144286),
                },
            },
        },
        CompanyID: "ab",
    }, operations.PatchCompaniesCompanyIDTerminalSettingsSecurity{
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
