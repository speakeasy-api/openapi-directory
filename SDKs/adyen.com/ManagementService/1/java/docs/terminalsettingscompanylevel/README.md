# terminalSettingsCompanyLevel

### Available Operations

* [getCompaniesCompanyIdTerminalLogos](#getcompaniescompanyidterminallogos) - Get the terminal logo
* [getCompaniesCompanyIdTerminalSettings](#getcompaniescompanyidterminalsettings) - Get terminal settings
* [patchCompaniesCompanyIdTerminalLogos](#patchcompaniescompanyidterminallogos) - Update the terminal logo
* [patchCompaniesCompanyIdTerminalSettings](#patchcompaniescompanyidterminalsettings) - Update terminal settings

## getCompaniesCompanyIdTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the company identified in the path. 

The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalLogosRequest req = new GetCompaniesCompanyIdTerminalLogosRequest("in", "officiis");            

            GetCompaniesCompanyIdTerminalLogosResponse res = sdk.terminalSettingsCompanyLevel.getCompaniesCompanyIdTerminalLogos(req, new GetCompaniesCompanyIdTerminalLogosSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.logo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdTerminalSettings

Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalSettingsRequest req = new GetCompaniesCompanyIdTerminalSettingsRequest("beatae");            

            GetCompaniesCompanyIdTerminalSettingsResponse res = sdk.terminalSettingsCompanyLevel.getCompaniesCompanyIdTerminalSettings(req, new GetCompaniesCompanyIdTerminalSettingsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCompaniesCompanyIdTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal). 
* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the Adyen PSP level, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.Logo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompaniesCompanyIdTerminalLogosRequest req = new PatchCompaniesCompanyIdTerminalLogosRequest("laudantium", "exercitationem") {{
                logo = new Logo() {{
                    data = "praesentium";
                }};;
            }};            

            PatchCompaniesCompanyIdTerminalLogosResponse res = sdk.terminalSettingsCompanyLevel.patchCompaniesCompanyIdTerminalLogos(req, new PatchCompaniesCompanyIdTerminalLogosSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.logo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCompaniesCompanyIdTerminalSettings

Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalSettingsSecurity;
import org.openapis.openapi.models.shared.CardholderReceipt;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.Connectivity;
import org.openapis.openapi.models.shared.ConnectivitySimcardStatusEnum;
import org.openapis.openapi.models.shared.Currency;
import org.openapis.openapi.models.shared.EventUrl;
import org.openapis.openapi.models.shared.File;
import org.openapis.openapi.models.shared.Gratuity;
import org.openapis.openapi.models.shared.Hardware;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.MinorUnitsMonetaryValue;
import org.openapis.openapi.models.shared.Nexo;
import org.openapis.openapi.models.shared.NotificationUrl;
import org.openapis.openapi.models.shared.OfflineProcessing;
import org.openapis.openapi.models.shared.Opi;
import org.openapis.openapi.models.shared.Passcodes;
import org.openapis.openapi.models.shared.PayAtTable;
import org.openapis.openapi.models.shared.PayAtTableAuthenticationMethodEnum;
import org.openapis.openapi.models.shared.Payment;
import org.openapis.openapi.models.shared.Profile;
import org.openapis.openapi.models.shared.ReceiptOptions;
import org.openapis.openapi.models.shared.ReceiptPrinting;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.Settings;
import org.openapis.openapi.models.shared.Signature;
import org.openapis.openapi.models.shared.Standalone;
import org.openapis.openapi.models.shared.Surcharge;
import org.openapis.openapi.models.shared.TerminalSettings;
import org.openapis.openapi.models.shared.Timeouts;
import org.openapis.openapi.models.shared.Url;
import org.openapis.openapi.models.shared.WifiProfiles;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompaniesCompanyIdTerminalSettingsRequest req = new PatchCompaniesCompanyIdTerminalSettingsRequest("cum") {{
                terminalSettings = new TerminalSettings() {{
                    cardholderReceipt = new CardholderReceipt() {{
                        headerForAuthorizedReceipt = "laboriosam";
                    }};;
                    connectivity = new Connectivity() {{
                        simcardStatus = ConnectivitySimcardStatusEnum.INVENTORY;
                    }};;
                    gratuities = new org.openapis.openapi.models.shared.Gratuity[]{{
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "error";
                            predefinedTipEntries = new String[]{{
                                add("expedita"),
                                add("debitis"),
                                add("neque"),
                                add("dolorum"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "nostrum";
                            predefinedTipEntries = new String[]{{
                                add("dolorum"),
                                add("corrupti"),
                                add("accusamus"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "tempora";
                            predefinedTipEntries = new String[]{{
                                add("fugit"),
                                add("ut"),
                                add("fugiat"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                    }};
                    hardware = new Hardware() {{
                        displayMaximumBackLight = 30235;
                    }};;
                    nexo = new Nexo() {{
                        displayUrls = new NotificationUrl() {{
                            localUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "expedita";
                                    url = "magnam";
                                    username = "Adan.Koelpin";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "voluptatum";
                                    url = "quas";
                                    username = "Theodora50";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "ex";
                                    url = "sed";
                                    username = "Alberto_Kautzer";
                                }}),
                            }};
                            publicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "consequatur";
                                    url = "incidunt";
                                    username = "Vivienne.Ebert9";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "occaecati";
                                    url = "labore";
                                    username = "Maureen_Lind94";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "laboriosam";
                                    url = "alias";
                                    username = "Danielle_OConnell";
                                }}),
                            }};
                        }};;
                        encryptionKey = new Key() {{
                            identifier = "reiciendis";
                            passphrase = "provident";
                            version = 833819;
                        }};;
                        eventUrls = new EventUrl() {{
                            eventLocalUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "voluptates";
                                    url = "perferendis";
                                    username = "Marc_Predovic";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "fuga";
                                    url = "praesentium";
                                    username = "Lynn79";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "repudiandae";
                                    url = "quasi";
                                    username = "Kari_Kihn38";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "quidem";
                                    url = "maxime";
                                    username = "Aubrey82";
                                }}),
                            }};
                            eventPublicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "atque";
                                    url = "error";
                                    username = "Sherwood_Torphy32";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "aspernatur";
                                    url = "ex";
                                    username = "Will_Little50";
                                }}),
                            }};
                        }};;
                        nexoEventUrls = new String[]{{
                            add("repudiandae"),
                            add("atque"),
                        }};
                    }};;
                    offlineProcessing = new OfflineProcessing() {{
                        chipFloorLimit = 541381;
                        offlineSwipeLimits = new org.openapis.openapi.models.shared.MinorUnitsMonetaryValue[]{{
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 923306;
                                currencyCode = "dolorum";
                            }}),
                        }};
                    }};;
                    opi = new Opi() {{
                        enablePayAtTable = false;
                        payAtTableStoreNumber = "repellendus";
                        payAtTableURL = "labore";
                    }};;
                    passcodes = new Passcodes() {{
                        adminMenuPin = "reiciendis";
                        refundPin = "doloremque";
                        screenLockPin = "repudiandae";
                        txMenuPin = "dicta";
                    }};;
                    payAtTable = new PayAtTable() {{
                        authenticationMethod = PayAtTableAuthenticationMethodEnum.MAGSWIPE;
                        enablePayAtTable = false;
                    }};;
                    payment = new Payment() {{
                        hideMinorUnitsInCurrencies = new String[]{{
                            add("dolores"),
                        }};
                    }};;
                    receiptOptions = new ReceiptOptions() {{
                        logo = "enim";
                        qrCodeData = "laboriosam";
                    }};;
                    receiptPrinting = new ReceiptPrinting() {{
                        merchantApproved = false;
                        merchantCancelled = false;
                        merchantCaptureApproved = false;
                        merchantCaptureRefused = false;
                        merchantRefundApproved = false;
                        merchantRefundRefused = false;
                        merchantRefused = false;
                        merchantVoid = false;
                        shopperApproved = false;
                        shopperCancelled = false;
                        shopperCaptureApproved = false;
                        shopperCaptureRefused = false;
                        shopperRefundApproved = false;
                        shopperRefundRefused = false;
                        shopperRefused = false;
                        shopperVoid = false;
                    }};;
                    signature = new Signature() {{
                        askSignatureOnScreen = false;
                        deviceName = "velit";
                        deviceSlogan = "a";
                        skipSignature = false;
                    }};;
                    standalone = new Standalone() {{
                        currencyCode = "molestias";
                        enableStandalone = false;
                    }};;
                    surcharge = new Surcharge() {{
                        askConfirmation = false;
                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                            add(new Configuration("illo",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("iure") {{
                                                    amount = 696463;
                                                    currencyCode = "eveniet";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("vero", "doloremque");
                                                    }};
                                                }}),
                                                add(new Currency("qui") {{
                                                    amount = 59944;
                                                    currencyCode = "totam";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("molestiae", "eveniet");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "saepe";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("id") {{
                                        amount = 580107;
                                        currencyCode = "officiis";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("in", "adipisci");
                                            put("eveniet", "occaecati");
                                            put("consequuntur", "fugit");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("reprehenderit"),
                                    add("error"),
                                }};
                            }}),
                            add(new Configuration("minima",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("quaerat") {{
                                                    amount = 680349;
                                                    currencyCode = "nesciunt";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("recusandae", "omnis");
                                                    }};
                                                }}),
                                                add(new Currency("eum") {{
                                                    amount = 477646;
                                                    currencyCode = "ex";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("culpa", "adipisci");
                                                        put("debitis", "laudantium");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "cum";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("alias") {{
                                        amount = 898063;
                                        currencyCode = "ratione";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("distinctio", "voluptatum");
                                            put("rem", "aliquam");
                                            put("ad", "repellat");
                                        }};
                                    }}),
                                    add(new Currency("reiciendis") {{
                                        amount = 362189;
                                        currencyCode = "perspiciatis";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("mollitia", "voluptas");
                                            put("alias", "maiores");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("id"),
                                }};
                            }}),
                        }};
                    }};;
                    timeouts = new Timeouts() {{
                        fromActiveToSleep = 367927;
                    }};;
                    wifiProfiles = new WifiProfiles() {{
                        profiles = new org.openapis.openapi.models.shared.Profile[]{{
                            add(new Profile("sapiente", "eum", "dicta", "minima") {{
                                authType = "esse";
                                autoWifi = false;
                                bssType = "provident";
                                channel = 337477;
                                defaultProfile = false;
                                eap = "eum";
                                eapCaCert = new File("mollitia", "provident") {{
                                    data = "reiciendis";
                                    name = "Miss Bruce Hermann";
                                }};
                                eapClientCert = new File("ullam", "in") {{
                                    data = "possimus";
                                    name = "Dr. Reginald Hyatt";
                                }};
                                eapClientKey = new File("voluptatibus", "molestias") {{
                                    data = "nam";
                                    name = "Oliver Osinski";
                                }};
                                eapClientPwd = "officiis";
                                eapIdentity = "sapiente";
                                eapIntermediateCert = new File("cumque", "quae") {{
                                    data = "cumque";
                                    name = "Luz Goldner Sr.";
                                }};
                                eapPwd = "perferendis";
                                hiddenSsid = false;
                                name = "Judy Kemmer";
                                psk = "at";
                                ssid = "impedit";
                                wsec = "eos";
                            }}),
                            add(new Profile("doloremque", "dicta", "odio", "tempora") {{
                                authType = "beatae";
                                autoWifi = false;
                                bssType = "cupiditate";
                                channel = 589695;
                                defaultProfile = false;
                                eap = "earum";
                                eapCaCert = new File("maiores", "debitis") {{
                                    data = "soluta";
                                    name = "Gilberto Bechtelar";
                                }};
                                eapClientCert = new File("fuga", "ratione") {{
                                    data = "aliquid";
                                    name = "Ricardo Effertz";
                                }};
                                eapClientKey = new File("natus", "occaecati") {{
                                    data = "animi";
                                    name = "Mr. Jody Altenwerth";
                                }};
                                eapClientPwd = "suscipit";
                                eapIdentity = "adipisci";
                                eapIntermediateCert = new File("nihil", "molestiae") {{
                                    data = "quasi";
                                    name = "Melba Stokes I";
                                }};
                                eapPwd = "dicta";
                                hiddenSsid = false;
                                name = "Tamara Lang";
                                psk = "vel";
                                ssid = "architecto";
                                wsec = "fugiat";
                            }}),
                            add(new Profile("culpa", "voluptatem", "sapiente", "officiis") {{
                                authType = "esse";
                                autoWifi = false;
                                bssType = "ex";
                                channel = 235263;
                                defaultProfile = false;
                                eap = "aliquid";
                                eapCaCert = new File("aliquid", "officia") {{
                                    data = "ipsa";
                                    name = "Ralph Hegmann";
                                }};
                                eapClientCert = new File("id", "ab") {{
                                    data = "suscipit";
                                    name = "Lisa Kemmer";
                                }};
                                eapClientKey = new File("ad", "deleniti") {{
                                    data = "error";
                                    name = "Pat O'Keefe";
                                }};
                                eapClientPwd = "enim";
                                eapIdentity = "vitae";
                                eapIntermediateCert = new File("expedita", "voluptatem") {{
                                    data = "repellendus";
                                    name = "Krista Jakubowski";
                                }};
                                eapPwd = "molestias";
                                hiddenSsid = false;
                                name = "Gene Brekke";
                                psk = "veritatis";
                                ssid = "rerum";
                                wsec = "est";
                            }}),
                            add(new Profile("veniam", "nesciunt", "expedita", "eum") {{
                                authType = "architecto";
                                autoWifi = false;
                                bssType = "fuga";
                                channel = 867168;
                                defaultProfile = false;
                                eap = "debitis";
                                eapCaCert = new File("rem", "minus") {{
                                    data = "voluptatem";
                                    name = "Nina Wehner";
                                }};
                                eapClientCert = new File("impedit", "quibusdam") {{
                                    data = "nemo";
                                    name = "Dr. Chris Hermiston";
                                }};
                                eapClientKey = new File("veritatis", "tempora") {{
                                    data = "nam";
                                    name = "Molly Fadel IV";
                                }};
                                eapClientPwd = "dolor";
                                eapIdentity = "consequatur";
                                eapIntermediateCert = new File("fugiat", "ipsam") {{
                                    data = "architecto";
                                    name = "Ms. Pauline Considine I";
                                }};
                                eapPwd = "consequuntur";
                                hiddenSsid = false;
                                name = "Tracey Vandervort";
                                psk = "esse";
                                ssid = "necessitatibus";
                                wsec = "sed";
                            }}),
                        }};
                        settings = new Settings() {{
                            band = "vel";
                            roaming = false;
                            timeout = 528234;
                        }};;
                    }};;
                }};;
            }};            

            PatchCompaniesCompanyIdTerminalSettingsResponse res = sdk.terminalSettingsCompanyLevel.patchCompaniesCompanyIdTerminalSettings(req, new PatchCompaniesCompanyIdTerminalSettingsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
