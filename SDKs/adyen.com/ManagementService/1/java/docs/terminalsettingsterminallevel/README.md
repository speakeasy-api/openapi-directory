# terminalSettingsTerminalLevel

### Available Operations

* [getTerminalsTerminalIdTerminalLogos](#getterminalsterminalidterminallogos) - Get the terminal logo
* [getTerminalsTerminalIdTerminalSettings](#getterminalsterminalidterminalsettings) - Get terminal settings
* [patchTerminalsTerminalIdTerminalLogos](#patchterminalsterminalidterminallogos) - Update the logo
* [patchTerminalsTerminalIdTerminalSettings](#patchterminalsterminalidterminalsettings) - Update terminal settings

## getTerminalsTerminalIdTerminalLogos

Returns the logo that is configured for the payment terminal identified in the path.
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTerminalsTerminalIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.GetTerminalsTerminalIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.GetTerminalsTerminalIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTerminalsTerminalIdTerminalLogosRequest req = new GetTerminalsTerminalIdTerminalLogosRequest("delectus");            

            GetTerminalsTerminalIdTerminalLogosResponse res = sdk.terminalSettingsTerminalLevel.getTerminalsTerminalIdTerminalLogos(req, new GetTerminalsTerminalIdTerminalLogosSecurity() {{
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

## getTerminalsTerminalIdTerminalSettings

Returns the settings that are configured for the payment terminal identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTerminalsTerminalIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.GetTerminalsTerminalIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.GetTerminalsTerminalIdTerminalSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTerminalsTerminalIdTerminalSettingsRequest req = new GetTerminalsTerminalIdTerminalSettingsRequest("labore");            

            GetTerminalsTerminalIdTerminalSettingsResponse res = sdk.terminalSettingsTerminalLevel.getTerminalsTerminalIdTerminalSettings(req, new GetTerminalsTerminalIdTerminalSettingsSecurity() {{
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

## patchTerminalsTerminalIdTerminalLogos

Updates the logo for the payment terminal identified in the path.

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (store, merchant account, or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchTerminalsTerminalIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.PatchTerminalsTerminalIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.PatchTerminalsTerminalIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.Logo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchTerminalsTerminalIdTerminalLogosRequest req = new PatchTerminalsTerminalIdTerminalLogosRequest("expedita") {{
                logo = new Logo() {{
                    data = "corrupti";
                }};;
            }};            

            PatchTerminalsTerminalIdTerminalLogosResponse res = sdk.terminalSettingsTerminalLevel.patchTerminalsTerminalIdTerminalLogos(req, new PatchTerminalsTerminalIdTerminalLogosSecurity() {{
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

## patchTerminalsTerminalIdTerminalSettings

Updates the settings that are configured for the payment terminal identified in the path.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchTerminalsTerminalIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.PatchTerminalsTerminalIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.PatchTerminalsTerminalIdTerminalSettingsSecurity;
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

            PatchTerminalsTerminalIdTerminalSettingsRequest req = new PatchTerminalsTerminalIdTerminalSettingsRequest("rem") {{
                terminalSettings = new TerminalSettings() {{
                    cardholderReceipt = new CardholderReceipt() {{
                        headerForAuthorizedReceipt = "atque";
                    }};;
                    connectivity = new Connectivity() {{
                        simcardStatus = ConnectivitySimcardStatusEnum.INVENTORY;
                    }};;
                    gratuities = new org.openapis.openapi.models.shared.Gratuity[]{{
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "pariatur";
                            predefinedTipEntries = new String[]{{
                                add("quo"),
                                add("incidunt"),
                                add("quod"),
                                add("minus"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "porro";
                            predefinedTipEntries = new String[]{{
                                add("excepturi"),
                                add("occaecati"),
                                add("libero"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "quo";
                            predefinedTipEntries = new String[]{{
                                add("hic"),
                                add("maxime"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                    }};
                    hardware = new Hardware() {{
                        displayMaximumBackLight = 36691;
                    }};;
                    nexo = new Nexo() {{
                        displayUrls = new NotificationUrl() {{
                            localUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "fugit";
                                    url = "pariatur";
                                    username = "Nigel1";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "laudantium";
                                    url = "iusto";
                                    username = "Daisha16";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "rerum";
                                    url = "doloremque";
                                    username = "Alexa.Keeling44";
                                }}),
                            }};
                            publicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "blanditiis";
                                    url = "nihil";
                                    username = "Kamren_Price";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "nostrum";
                                    url = "atque";
                                    username = "Baron52";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "magni";
                                    url = "quae";
                                    username = "Kayli28";
                                }}),
                            }};
                        }};;
                        encryptionKey = new Key() {{
                            identifier = "sapiente";
                            passphrase = "saepe";
                            version = 965735;
                        }};;
                        eventUrls = new EventUrl() {{
                            eventLocalUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "natus";
                                    url = "cumque";
                                    username = "Lia.Hahn88";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "mollitia";
                                    url = "cumque";
                                    username = "Ethyl.Haley";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "illum";
                                    url = "nesciunt";
                                    username = "Alanna_Kuhlman92";
                                }}),
                            }};
                            eventPublicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "praesentium";
                                    url = "dicta";
                                    username = "Buford_Bailey";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "sed";
                                    url = "deleniti";
                                    username = "Boris_Dooley30";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "deserunt";
                                    url = "modi";
                                    username = "Bonita52";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "ipsa";
                                    url = "at";
                                    username = "Cornelius8";
                                }}),
                            }};
                        }};;
                        nexoEventUrls = new String[]{{
                            add("fugit"),
                        }};
                    }};;
                    offlineProcessing = new OfflineProcessing() {{
                        chipFloorLimit = 685467;
                        offlineSwipeLimits = new org.openapis.openapi.models.shared.MinorUnitsMonetaryValue[]{{
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 49499;
                                currencyCode = "dolorem";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 101854;
                                currencyCode = "aperiam";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 134173;
                                currencyCode = "nulla";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 316541;
                                currencyCode = "illo";
                            }}),
                        }};
                    }};;
                    opi = new Opi() {{
                        enablePayAtTable = false;
                        payAtTableStoreNumber = "magnam";
                        payAtTableURL = "delectus";
                    }};;
                    passcodes = new Passcodes() {{
                        adminMenuPin = "numquam";
                        refundPin = "optio";
                        screenLockPin = "nobis";
                        txMenuPin = "ex";
                    }};;
                    payAtTable = new PayAtTable() {{
                        authenticationMethod = PayAtTableAuthenticationMethodEnum.MKE;
                        enablePayAtTable = false;
                    }};;
                    payment = new Payment() {{
                        hideMinorUnitsInCurrencies = new String[]{{
                            add("deleniti"),
                        }};
                    }};;
                    receiptOptions = new ReceiptOptions() {{
                        logo = "expedita";
                        qrCodeData = "hic";
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
                        deviceName = "excepturi";
                        deviceSlogan = "aliquid";
                        skipSignature = false;
                    }};;
                    standalone = new Standalone() {{
                        currencyCode = "sed";
                        enableStandalone = false;
                    }};;
                    surcharge = new Surcharge() {{
                        askConfirmation = false;
                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                            add(new Configuration("eveniet",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("enim") {{
                                                    amount = 709051;
                                                    currencyCode = "libero";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("illo", "minus");
                                                        put("quos", "temporibus");
                                                        put("sint", "iusto");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "similique";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("officiis") {{
                                        amount = 657301;
                                        currencyCode = "dolore";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("dignissimos", "esse");
                                            put("animi", "laudantium");
                                            put("esse", "eveniet");
                                            put("earum", "velit");
                                        }};
                                    }}),
                                    add(new Currency("ut") {{
                                        amount = 263346;
                                        currencyCode = "rerum";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("dignissimos", "ipsam");
                                            put("explicabo", "impedit");
                                            put("aliquid", "quis");
                                            put("facilis", "ipsum");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("architecto"),
                                    add("praesentium"),
                                }};
                            }}),
                        }};
                    }};;
                    timeouts = new Timeouts() {{
                        fromActiveToSleep = 881189;
                    }};;
                    wifiProfiles = new WifiProfiles() {{
                        profiles = new org.openapis.openapi.models.shared.Profile[]{{
                            add(new Profile("odit", "iusto", "expedita", "eos") {{
                                authType = "voluptates";
                                autoWifi = false;
                                bssType = "laudantium";
                                channel = 271551;
                                defaultProfile = false;
                                eap = "quae";
                                eapCaCert = new File("earum", "architecto") {{
                                    data = "omnis";
                                    name = "Wallace Wiegand";
                                }};
                                eapClientCert = new File("debitis", "facere") {{
                                    data = "aliquam";
                                    name = "Ebony Donnelly IV";
                                }};
                                eapClientKey = new File("reiciendis", "sequi") {{
                                    data = "quisquam";
                                    name = "Jay Pagac";
                                }};
                                eapClientPwd = "porro";
                                eapIdentity = "laborum";
                                eapIntermediateCert = new File("cupiditate", "reprehenderit") {{
                                    data = "nobis";
                                    name = "Arturo Armstrong";
                                }};
                                eapPwd = "quia";
                                hiddenSsid = false;
                                name = "Edward Hand";
                                psk = "quia";
                                ssid = "laudantium";
                                wsec = "sed";
                            }}),
                        }};
                        settings = new Settings() {{
                            band = "repellendus";
                            roaming = false;
                            timeout = 199879;
                        }};;
                    }};;
                }};;
            }};            

            PatchTerminalsTerminalIdTerminalSettingsResponse res = sdk.terminalSettingsTerminalLevel.patchTerminalsTerminalIdTerminalSettings(req, new PatchTerminalsTerminalIdTerminalSettingsSecurity() {{
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
