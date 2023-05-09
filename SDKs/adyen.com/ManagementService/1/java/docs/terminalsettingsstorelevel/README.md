# terminalSettingsStoreLevel

### Available Operations

* [getMerchantsMerchantIdStoresReferenceTerminalLogos](#getmerchantsmerchantidstoresreferenceterminallogos) - Get the terminal logo
* [getMerchantsMerchantIdStoresReferenceTerminalSettings](#getmerchantsmerchantidstoresreferenceterminalsettings) - Get terminal settings
* [getStoresStoreIdTerminalLogos](#getstoresstoreidterminallogos) - Get the terminal logo
* [getStoresStoreIdTerminalSettings](#getstoresstoreidterminalsettings) - Get terminal settings
* [patchMerchantsMerchantIdStoresReferenceTerminalLogos](#patchmerchantsmerchantidstoresreferenceterminallogos) - Update the terminal logo
* [patchMerchantsMerchantIdStoresReferenceTerminalSettings](#patchmerchantsmerchantidstoresreferenceterminalsettings) - Update terminal settings
* [patchStoresStoreIdTerminalLogos](#patchstoresstoreidterminallogos) - Update the terminal logo
* [patchStoresStoreIdTerminalSettings](#patchstoresstoreidterminalsettings) - Update terminal settings

## getMerchantsMerchantIdStoresReferenceTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresReferenceTerminalLogosResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresReferenceTerminalLogosSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest req = new GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest("occaecati", "nemo", "aliquam");            

            GetMerchantsMerchantIdStoresReferenceTerminalLogosResponse res = sdk.terminalSettingsStoreLevel.getMerchantsMerchantIdStoresReferenceTerminalLogos(req, new GetMerchantsMerchantIdStoresReferenceTerminalLogosSecurity() {{
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

## getMerchantsMerchantIdStoresReferenceTerminalSettings

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresReferenceTerminalSettingsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest req = new GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest("nostrum", "doloribus");            

            GetMerchantsMerchantIdStoresReferenceTerminalSettingsResponse res = sdk.terminalSettingsStoreLevel.getMerchantsMerchantIdStoresReferenceTerminalSettings(req, new GetMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity() {{
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

## getStoresStoreIdTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoresStoreIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.GetStoresStoreIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.GetStoresStoreIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoresStoreIdTerminalLogosRequest req = new GetStoresStoreIdTerminalLogosRequest("eligendi", "sint");            

            GetStoresStoreIdTerminalLogosResponse res = sdk.terminalSettingsStoreLevel.getStoresStoreIdTerminalLogos(req, new GetStoresStoreIdTerminalLogosSecurity() {{
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

## getStoresStoreIdTerminalSettings

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoresStoreIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.GetStoresStoreIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.GetStoresStoreIdTerminalSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoresStoreIdTerminalSettingsRequest req = new GetStoresStoreIdTerminalSettingsRequest("enim");            

            GetStoresStoreIdTerminalSettingsResponse res = sdk.terminalSettingsStoreLevel.getStoresStoreIdTerminalSettings(req, new GetStoresStoreIdTerminalSettingsSecurity() {{
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

## patchMerchantsMerchantIdStoresReferenceTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresReferenceTerminalLogosResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresReferenceTerminalLogosSecurity;
import org.openapis.openapi.models.shared.Logo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest req = new PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest("hic", "animi", "quas") {{
                logo = new Logo() {{
                    data = "totam";
                }};;
            }};            

            PatchMerchantsMerchantIdStoresReferenceTerminalLogosResponse res = sdk.terminalSettingsStoreLevel.patchMerchantsMerchantIdStoresReferenceTerminalLogos(req, new PatchMerchantsMerchantIdStoresReferenceTerminalLogosSecurity() {{
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

## patchMerchantsMerchantIdStoresReferenceTerminalSettings

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

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
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity;
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

            PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest req = new PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest("molestias", "odio") {{
                terminalSettings = new TerminalSettings() {{
                    cardholderReceipt = new CardholderReceipt() {{
                        headerForAuthorizedReceipt = "eaque";
                    }};;
                    connectivity = new Connectivity() {{
                        simcardStatus = ConnectivitySimcardStatusEnum.INVENTORY;
                    }};;
                    gratuities = new org.openapis.openapi.models.shared.Gratuity[]{{
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "quos";
                            predefinedTipEntries = new String[]{{
                                add("assumenda"),
                                add("tempore"),
                                add("libero"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                    }};
                    hardware = new Hardware() {{
                        displayMaximumBackLight = 244032;
                    }};;
                    nexo = new Nexo() {{
                        displayUrls = new NotificationUrl() {{
                            localUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "delectus";
                                    url = "impedit";
                                    username = "Naomi90";
                                }}),
                            }};
                            publicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "doloremque";
                                    url = "quis";
                                    username = "Estefania58";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "molestiae";
                                    url = "eligendi";
                                    username = "Regan93";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "sed";
                                    url = "asperiores";
                                    username = "Ernie_Cruickshank14";
                                }}),
                            }};
                        }};;
                        encryptionKey = new Key() {{
                            identifier = "pariatur";
                            passphrase = "amet";
                            version = 347698;
                        }};;
                        eventUrls = new EventUrl() {{
                            eventLocalUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "velit";
                                    url = "facilis";
                                    username = "Mortimer.Huels50";
                                }}),
                            }};
                            eventPublicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "nisi";
                                    url = "quis";
                                    username = "Giuseppe_Rempel70";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "ipsum";
                                    url = "ad";
                                    username = "Wayne89";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "labore";
                                    url = "rerum";
                                    username = "Chelsey.Kiehn";
                                }}),
                            }};
                        }};;
                        nexoEventUrls = new String[]{{
                            add("est"),
                            add("rem"),
                        }};
                    }};;
                    offlineProcessing = new OfflineProcessing() {{
                        chipFloorLimit = 753890;
                        offlineSwipeLimits = new org.openapis.openapi.models.shared.MinorUnitsMonetaryValue[]{{
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 604078;
                                currencyCode = "officiis";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 495617;
                                currencyCode = "dolor";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 118041;
                                currencyCode = "error";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 784731;
                                currencyCode = "vitae";
                            }}),
                        }};
                    }};;
                    opi = new Opi() {{
                        enablePayAtTable = false;
                        payAtTableStoreNumber = "dignissimos";
                        payAtTableURL = "esse";
                    }};;
                    passcodes = new Passcodes() {{
                        adminMenuPin = "fugiat";
                        refundPin = "ad";
                        screenLockPin = "aspernatur";
                        txMenuPin = "enim";
                    }};;
                    payAtTable = new PayAtTable() {{
                        authenticationMethod = PayAtTableAuthenticationMethodEnum.MKE;
                        enablePayAtTable = false;
                    }};;
                    payment = new Payment() {{
                        hideMinorUnitsInCurrencies = new String[]{{
                            add("dignissimos"),
                            add("libero"),
                        }};
                    }};;
                    receiptOptions = new ReceiptOptions() {{
                        logo = "illo";
                        qrCodeData = "ab";
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
                        deviceName = "incidunt";
                        deviceSlogan = "accusamus";
                        skipSignature = false;
                    }};;
                    standalone = new Standalone() {{
                        currencyCode = "saepe";
                        enableStandalone = false;
                    }};;
                    surcharge = new Surcharge() {{
                        askConfirmation = false;
                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                            add(new Configuration("labore",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("expedita") {{
                                                    amount = 304173;
                                                    currencyCode = "quisquam";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("laudantium", "repudiandae");
                                                        put("consequatur", "maxime");
                                                        put("aspernatur", "nam");
                                                    }};
                                                }}),
                                                add(new Currency("commodi") {{
                                                    amount = 559174;
                                                    currencyCode = "provident";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("rerum", "dignissimos");
                                                        put("corporis", "vero");
                                                        put("similique", "repellendus");
                                                        put("iure", "dolorem");
                                                    }};
                                                }}),
                                                add(new Currency("quae") {{
                                                    amount = 771226;
                                                    currencyCode = "commodi";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("voluptatem", "ad");
                                                    }};
                                                }}),
                                                add(new Currency("doloremque") {{
                                                    amount = 229567;
                                                    currencyCode = "illum";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("quidem", "cum");
                                                        put("amet", "quasi");
                                                        put("dicta", "laudantium");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "veniam";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("sequi") {{
                                        amount = 970079;
                                        currencyCode = "earum";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("praesentium", "nemo");
                                            put("repellat", "quisquam");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("deleniti"),
                                    add("illo"),
                                }};
                            }}),
                            add(new Configuration("dolor",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("voluptatem") {{
                                                    amount = 953676;
                                                    currencyCode = "dolor";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("atque", "beatae");
                                                        put("at", "labore");
                                                        put("minus", "esse");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "earum";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("itaque") {{
                                        amount = 228646;
                                        currencyCode = "provident";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("necessitatibus", "provident");
                                            put("repudiandae", "consequatur");
                                            put("nemo", "molestiae");
                                        }};
                                    }}),
                                    add(new Currency("eos") {{
                                        amount = 708771;
                                        currencyCode = "corrupti";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("sint", "accusamus");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("dicta"),
                                    add("voluptatem"),
                                    add("velit"),
                                }};
                            }}),
                            add(new Configuration("non",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("numquam") {{
                                                    amount = 72754;
                                                    currencyCode = "hic";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("delectus", "non");
                                                        put("distinctio", "in");
                                                        put("exercitationem", "labore");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "perferendis";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("consectetur") {{
                                        amount = 411615;
                                        currencyCode = "aperiam";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("repellat", "velit");
                                            put("porro", "provident");
                                        }};
                                    }}),
                                    add(new Currency("temporibus") {{
                                        amount = 753240;
                                        currencyCode = "dignissimos";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("soluta", "natus");
                                        }};
                                    }}),
                                    add(new Currency("consectetur") {{
                                        amount = 639622;
                                        currencyCode = "amet";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("aspernatur", "quo");
                                            put("itaque", "illum");
                                            put("laborum", "dignissimos");
                                            put("vero", "qui");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("explicabo"),
                                    add("explicabo"),
                                    add("exercitationem"),
                                    add("nihil"),
                                }};
                            }}),
                        }};
                    }};;
                    timeouts = new Timeouts() {{
                        fromActiveToSleep = 921193;
                    }};;
                    wifiProfiles = new WifiProfiles() {{
                        profiles = new org.openapis.openapi.models.shared.Profile[]{{
                            add(new Profile("rem", "aut", "quos", "laudantium") {{
                                authType = "in";
                                autoWifi = false;
                                bssType = "explicabo";
                                channel = 879857;
                                defaultProfile = false;
                                eap = "rem";
                                eapCaCert = new File("minima", "libero") {{
                                    data = "aperiam";
                                    name = "Nina Halvorson";
                                }};
                                eapClientCert = new File("dignissimos", "fugiat") {{
                                    data = "magnam";
                                    name = "Emma Keeling";
                                }};
                                eapClientKey = new File("eveniet", "odio") {{
                                    data = "nostrum";
                                    name = "Mrs. Lynn Wisozk Jr.";
                                }};
                                eapClientPwd = "commodi";
                                eapIdentity = "numquam";
                                eapIntermediateCert = new File("itaque", "minus") {{
                                    data = "dolorum";
                                    name = "Adrian Feest";
                                }};
                                eapPwd = "sunt";
                                hiddenSsid = false;
                                name = "Miss Mathew Lynch";
                                psk = "autem";
                                ssid = "fuga";
                                wsec = "alias";
                            }}),
                            add(new Profile("non", "rem", "quia", "ullam") {{
                                authType = "repellendus";
                                autoWifi = false;
                                bssType = "veritatis";
                                channel = 60778;
                                defaultProfile = false;
                                eap = "eaque";
                                eapCaCert = new File("voluptatem", "alias") {{
                                    data = "saepe";
                                    name = "Angelo Stokes";
                                }};
                                eapClientCert = new File("necessitatibus", "harum") {{
                                    data = "eveniet";
                                    name = "Mark Gottlieb";
                                }};
                                eapClientKey = new File("molestias", "officia") {{
                                    data = "explicabo";
                                    name = "Beth Gleason";
                                }};
                                eapClientPwd = "libero";
                                eapIdentity = "totam";
                                eapIntermediateCert = new File("velit", "reiciendis") {{
                                    data = "sequi";
                                    name = "Gertrude Ryan";
                                }};
                                eapPwd = "repellat";
                                hiddenSsid = false;
                                name = "Cameron Mosciski III";
                                psk = "rerum";
                                ssid = "recusandae";
                                wsec = "voluptates";
                            }}),
                        }};
                        settings = new Settings() {{
                            band = "quisquam";
                            roaming = false;
                            timeout = 120277;
                        }};;
                    }};;
                }};;
            }};            

            PatchMerchantsMerchantIdStoresReferenceTerminalSettingsResponse res = sdk.terminalSettingsStoreLevel.patchMerchantsMerchantIdStoresReferenceTerminalSettings(req, new PatchMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity() {{
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

## patchStoresStoreIdTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchStoresStoreIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.PatchStoresStoreIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.PatchStoresStoreIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.Logo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchStoresStoreIdTerminalLogosRequest req = new PatchStoresStoreIdTerminalLogosRequest("voluptatibus", "eligendi") {{
                logo = new Logo() {{
                    data = "quae";
                }};;
            }};            

            PatchStoresStoreIdTerminalLogosResponse res = sdk.terminalSettingsStoreLevel.patchStoresStoreIdTerminalLogos(req, new PatchStoresStoreIdTerminalLogosSecurity() {{
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

## patchStoresStoreIdTerminalSettings

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

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
import org.openapis.openapi.models.operations.PatchStoresStoreIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.PatchStoresStoreIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.PatchStoresStoreIdTerminalSettingsSecurity;
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

            PatchStoresStoreIdTerminalSettingsRequest req = new PatchStoresStoreIdTerminalSettingsRequest("officiis") {{
                terminalSettings = new TerminalSettings() {{
                    cardholderReceipt = new CardholderReceipt() {{
                        headerForAuthorizedReceipt = "architecto";
                    }};;
                    connectivity = new Connectivity() {{
                        simcardStatus = ConnectivitySimcardStatusEnum.ACTIVATED;
                    }};;
                    gratuities = new org.openapis.openapi.models.shared.Gratuity[]{{
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "optio";
                            predefinedTipEntries = new String[]{{
                                add("perferendis"),
                                add("facilis"),
                                add("reiciendis"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "a";
                            predefinedTipEntries = new String[]{{
                                add("dicta"),
                                add("quos"),
                                add("ullam"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                    }};
                    hardware = new Hardware() {{
                        displayMaximumBackLight = 295950;
                    }};;
                    nexo = new Nexo() {{
                        displayUrls = new NotificationUrl() {{
                            localUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "itaque";
                                    url = "maxime";
                                    username = "Dino_Cruickshank98";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "impedit";
                                    url = "porro";
                                    username = "Shawn.Leannon57";
                                }}),
                            }};
                            publicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "esse";
                                    url = "iure";
                                    username = "Jazmyne.Douglas20";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "corporis";
                                    url = "voluptas";
                                    username = "Cary_Nitzsche";
                                }}),
                            }};
                        }};;
                        encryptionKey = new Key() {{
                            identifier = "eius";
                            passphrase = "ipsa";
                            version = 522062;
                        }};;
                        eventUrls = new EventUrl() {{
                            eventLocalUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "accusantium";
                                    url = "veniam";
                                    username = "Suzanne.DuBuque55";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "doloribus";
                                    url = "fugiat";
                                    username = "Marcella11";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "nesciunt";
                                    url = "similique";
                                    username = "Aracely_Zulauf";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "possimus";
                                    url = "unde";
                                    username = "Dortha_Champlin";
                                }}),
                            }};
                            eventPublicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "alias";
                                    url = "quidem";
                                    username = "Cloyd.Jerde33";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "debitis";
                                    url = "officia";
                                    username = "King94";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "adipisci";
                                    url = "libero";
                                    username = "Isidro_Harber";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "ab";
                                    url = "beatae";
                                    username = "Tyler.Huel49";
                                }}),
                            }};
                        }};;
                        nexoEventUrls = new String[]{{
                            add("minima"),
                            add("architecto"),
                            add("qui"),
                        }};
                    }};;
                    offlineProcessing = new OfflineProcessing() {{
                        chipFloorLimit = 397026;
                        offlineSwipeLimits = new org.openapis.openapi.models.shared.MinorUnitsMonetaryValue[]{{
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 276650;
                                currencyCode = "adipisci";
                            }}),
                        }};
                    }};;
                    opi = new Opi() {{
                        enablePayAtTable = false;
                        payAtTableStoreNumber = "praesentium";
                        payAtTableURL = "dolor";
                    }};;
                    passcodes = new Passcodes() {{
                        adminMenuPin = "exercitationem";
                        refundPin = "expedita";
                        screenLockPin = "facilis";
                        txMenuPin = "impedit";
                    }};;
                    payAtTable = new PayAtTable() {{
                        authenticationMethod = PayAtTableAuthenticationMethodEnum.MAGSWIPE;
                        enablePayAtTable = false;
                    }};;
                    payment = new Payment() {{
                        hideMinorUnitsInCurrencies = new String[]{{
                            add("culpa"),
                            add("consequuntur"),
                        }};
                    }};;
                    receiptOptions = new ReceiptOptions() {{
                        logo = "amet";
                        qrCodeData = "deserunt";
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
                        deviceName = "modi";
                        deviceSlogan = "veniam";
                        skipSignature = false;
                    }};;
                    standalone = new Standalone() {{
                        currencyCode = "quod";
                        enableStandalone = false;
                    }};;
                    surcharge = new Surcharge() {{
                        askConfirmation = false;
                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                            add(new Configuration("nam",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("illum") {{
                                                    amount = 925395;
                                                    currencyCode = "quod";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("saepe", "autem");
                                                        put("quo", "nesciunt");
                                                        put("illum", "nemo");
                                                    }};
                                                }}),
                                                add(new Currency("laborum") {{
                                                    amount = 706872;
                                                    currencyCode = "non";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("assumenda", "recusandae");
                                                        put("distinctio", "pariatur");
                                                        put("ad", "facere");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "a";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("dicta") {{
                                        amount = 316550;
                                        currencyCode = "doloribus";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("officiis", "architecto");
                                            put("alias", "culpa");
                                            put("ipsa", "nobis");
                                            put("necessitatibus", "quia");
                                        }};
                                    }}),
                                    add(new Currency("quibusdam") {{
                                        amount = 426002;
                                        currencyCode = "perspiciatis";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("ullam", "architecto");
                                            put("accusantium", "perferendis");
                                            put("veritatis", "provident");
                                            put("cumque", "iure");
                                        }};
                                    }}),
                                    add(new Currency("cum") {{
                                        amount = 798690;
                                        currencyCode = "nemo";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("velit", "magnam");
                                            put("dignissimos", "laboriosam");
                                            put("sed", "odio");
                                            put("natus", "provident");
                                        }};
                                    }}),
                                    add(new Currency("cum") {{
                                        amount = 983854;
                                        currencyCode = "facilis";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("itaque", "laboriosam");
                                            put("unde", "modi");
                                            put("perspiciatis", "hic");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("libero"),
                                }};
                            }}),
                            add(new Configuration("quasi",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("necessitatibus") {{
                                                    amount = 801075;
                                                    currencyCode = "laboriosam";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("voluptatem", "facere");
                                                    }};
                                                }}),
                                                add(new Currency("porro") {{
                                                    amount = 807564;
                                                    currencyCode = "consequatur";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("architecto", "similique");
                                                    }};
                                                }}),
                                                add(new Currency("necessitatibus") {{
                                                    amount = 502453;
                                                    currencyCode = "quae";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("officiis", "sed");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "eveniet";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("laborum") {{
                                        amount = 276337;
                                        currencyCode = "maxime";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("alias", "suscipit");
                                            put("deserunt", "molestias");
                                        }};
                                    }}),
                                    add(new Currency("magnam") {{
                                        amount = 668218;
                                        currencyCode = "occaecati";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("quo", "perferendis");
                                            put("fugit", "aliquid");
                                        }};
                                    }}),
                                    add(new Currency("esse") {{
                                        amount = 308528;
                                        currencyCode = "eligendi";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("nostrum", "officiis");
                                            put("unde", "nulla");
                                            put("error", "mollitia");
                                            put("magnam", "nostrum");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("fuga"),
                                    add("facere"),
                                    add("impedit"),
                                }};
                            }}),
                            add(new Configuration("esse",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("accusantium") {{
                                                    amount = 757407;
                                                    currencyCode = "quasi";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("vero", "excepturi");
                                                    }};
                                                }}),
                                                add(new Currency("odit") {{
                                                    amount = 185816;
                                                    currencyCode = "impedit";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("incidunt", "dicta");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "impedit";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("doloribus") {{
                                        amount = 567693;
                                        currencyCode = "a";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("laudantium", "maiores");
                                            put("alias", "asperiores");
                                            put("rem", "dicta");
                                            put("suscipit", "earum");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("eius"),
                                }};
                            }}),
                            add(new Configuration("nemo",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("accusantium") {{
                                                    amount = 787916;
                                                    currencyCode = "tenetur";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("molestiae", "aliquid");
                                                        put("asperiores", "a");
                                                        put("nobis", "perspiciatis");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "corporis";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("quas") {{
                                        amount = 4654;
                                        currencyCode = "error";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "id");
                                            put("laboriosam", "ex");
                                        }};
                                    }}),
                                    add(new Currency("quam") {{
                                        amount = 85794;
                                        currencyCode = "ullam";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("similique", "incidunt");
                                        }};
                                    }}),
                                    add(new Currency("maiores") {{
                                        amount = 169312;
                                        currencyCode = "deserunt";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("omnis", "sed");
                                            put("nesciunt", "maxime");
                                            put("quis", "cupiditate");
                                            put("aliquam", "excepturi");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("velit"),
                                    add("reiciendis"),
                                    add("amet"),
                                }};
                            }}),
                        }};
                    }};;
                    timeouts = new Timeouts() {{
                        fromActiveToSleep = 118917;
                    }};;
                    wifiProfiles = new WifiProfiles() {{
                        profiles = new org.openapis.openapi.models.shared.Profile[]{{
                            add(new Profile("amet", "molestiae", "amet", "laborum") {{
                                authType = "commodi";
                                autoWifi = false;
                                bssType = "eveniet";
                                channel = 781582;
                                defaultProfile = false;
                                eap = "tempore";
                                eapCaCert = new File("eligendi", "asperiores") {{
                                    data = "quidem";
                                    name = "Silvia Considine";
                                }};
                                eapClientCert = new File("maiores", "itaque") {{
                                    data = "esse";
                                    name = "Perry Zieme";
                                }};
                                eapClientKey = new File("officia", "saepe") {{
                                    data = "nulla";
                                    name = "Lewis Franecki";
                                }};
                                eapClientPwd = "eum";
                                eapIdentity = "repudiandae";
                                eapIntermediateCert = new File("quisquam", "eos") {{
                                    data = "accusantium";
                                    name = "Myron Boyle";
                                }};
                                eapPwd = "nobis";
                                hiddenSsid = false;
                                name = "Kim Crist";
                                psk = "quod";
                                ssid = "quos";
                                wsec = "corrupti";
                            }}),
                            add(new Profile("error", "non", "quasi", "mollitia") {{
                                authType = "modi";
                                autoWifi = false;
                                bssType = "perferendis";
                                channel = 897058;
                                defaultProfile = false;
                                eap = "architecto";
                                eapCaCert = new File("earum", "veniam") {{
                                    data = "molestias";
                                    name = "Ashley Wunsch";
                                }};
                                eapClientCert = new File("nisi", "tenetur") {{
                                    data = "ipsam";
                                    name = "June Harris";
                                }};
                                eapClientKey = new File("repellendus", "perferendis") {{
                                    data = "quis";
                                    name = "Maurice Hoppe MD";
                                }};
                                eapClientPwd = "id";
                                eapIdentity = "sapiente";
                                eapIntermediateCert = new File("harum", "dolore") {{
                                    data = "sed";
                                    name = "Mrs. Jerald Waelchi";
                                }};
                                eapPwd = "voluptatibus";
                                hiddenSsid = false;
                                name = "Judith Schinner";
                                psk = "velit";
                                ssid = "earum";
                                wsec = "praesentium";
                            }}),
                            add(new Profile("consequuntur", "maiores", "inventore", "aliquid") {{
                                authType = "accusamus";
                                autoWifi = false;
                                bssType = "harum";
                                channel = 769156;
                                defaultProfile = false;
                                eap = "doloremque";
                                eapCaCert = new File("magni", "tempora") {{
                                    data = "expedita";
                                    name = "Timothy Nolan";
                                }};
                                eapClientCert = new File("delectus", "minus") {{
                                    data = "possimus";
                                    name = "Susie Cremin";
                                }};
                                eapClientKey = new File("accusantium", "illo") {{
                                    data = "quo";
                                    name = "Emanuel Lemke";
                                }};
                                eapClientPwd = "aut";
                                eapIdentity = "doloribus";
                                eapIntermediateCert = new File("sapiente", "mollitia") {{
                                    data = "nostrum";
                                    name = "Woodrow DuBuque";
                                }};
                                eapPwd = "quae";
                                hiddenSsid = false;
                                name = "Kevin Friesen";
                                psk = "aliquam";
                                ssid = "quisquam";
                                wsec = "quas";
                            }}),
                            add(new Profile("dicta", "harum", "facere", "facilis") {{
                                authType = "laudantium";
                                autoWifi = false;
                                bssType = "est";
                                channel = 221329;
                                defaultProfile = false;
                                eap = "aliquid";
                                eapCaCert = new File("recusandae", "tempora") {{
                                    data = "consectetur";
                                    name = "Ian Legros";
                                }};
                                eapClientCert = new File("autem", "quidem") {{
                                    data = "blanditiis";
                                    name = "Miss Emily Lemke DVM";
                                }};
                                eapClientKey = new File("animi", "commodi") {{
                                    data = "totam";
                                    name = "Kenny Cummings";
                                }};
                                eapClientPwd = "alias";
                                eapIdentity = "fuga";
                                eapIntermediateCert = new File("eligendi", "placeat") {{
                                    data = "aut";
                                    name = "Jody Gutmann";
                                }};
                                eapPwd = "voluptas";
                                hiddenSsid = false;
                                name = "Austin Blanda MD";
                                psk = "ipsam";
                                ssid = "quasi";
                                wsec = "cumque";
                            }}),
                        }};
                        settings = new Settings() {{
                            band = "beatae";
                            roaming = false;
                            timeout = 767210;
                        }};;
                    }};;
                }};;
            }};            

            PatchStoresStoreIdTerminalSettingsResponse res = sdk.terminalSettingsStoreLevel.patchStoresStoreIdTerminalSettings(req, new PatchStoresStoreIdTerminalSettingsSecurity() {{
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
