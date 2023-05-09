# terminalSettingsMerchantLevel

### Available Operations

* [getMerchantsMerchantIdTerminalLogos](#getmerchantsmerchantidterminallogos) - Get the terminal logo
* [getMerchantsMerchantIdTerminalSettings](#getmerchantsmerchantidterminalsettings) - Get terminal settings
* [patchMerchantsMerchantIdTerminalLogos](#patchmerchantsmerchantidterminallogos) - Update the terminal logo
* [patchMerchantsMerchantIdTerminalSettings](#patchmerchantsmerchantidterminalsettings) - Update terminal settings

## getMerchantsMerchantIdTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the merchant account identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdTerminalLogosRequest req = new GetMerchantsMerchantIdTerminalLogosRequest("magnam", "exercitationem");            

            GetMerchantsMerchantIdTerminalLogosResponse res = sdk.terminalSettingsMerchantLevel.getMerchantsMerchantIdTerminalLogos(req, new GetMerchantsMerchantIdTerminalLogosSecurity() {{
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

## getMerchantsMerchantIdTerminalSettings

Returns the payment terminal settings that are configured for the merchant account identified in the path. These settings apply to all terminals under the merchant account unless different values are configured at a lower level (store or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdTerminalSettingsRequest req = new GetMerchantsMerchantIdTerminalSettingsRequest("ab");            

            GetMerchantsMerchantIdTerminalSettingsResponse res = sdk.terminalSettingsMerchantLevel.getMerchantsMerchantIdTerminalSettings(req, new GetMerchantsMerchantIdTerminalSettingsSecurity() {{
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

## patchMerchantsMerchantIdTerminalLogos

Updates the logo for a specific payment terminal model at the merchant account identified in the path. You can update the logo for only one terminal model at a time. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the company account, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalLogosRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalLogosResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalLogosSecurity;
import org.openapis.openapi.models.shared.Logo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdTerminalLogosRequest req = new PatchMerchantsMerchantIdTerminalLogosRequest("porro", "autem") {{
                logo = new Logo() {{
                    data = "nobis";
                }};;
            }};            

            PatchMerchantsMerchantIdTerminalLogosResponse res = sdk.terminalSettingsMerchantLevel.patchMerchantsMerchantIdTerminalLogos(req, new PatchMerchantsMerchantIdTerminalLogosSecurity() {{
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

## patchMerchantsMerchantIdTerminalSettings

Updates payment terminal settings for the merchant account identified in the path.
These settings apply to all terminals under the merchant account, unless different values are configured at a lower level (store or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalSettingsRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalSettingsResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalSettingsSecurity;
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

            PatchMerchantsMerchantIdTerminalSettingsRequest req = new PatchMerchantsMerchantIdTerminalSettingsRequest("laboriosam") {{
                terminalSettings = new TerminalSettings() {{
                    cardholderReceipt = new CardholderReceipt() {{
                        headerForAuthorizedReceipt = "recusandae";
                    }};;
                    connectivity = new Connectivity() {{
                        simcardStatus = ConnectivitySimcardStatusEnum.ACTIVATED;
                    }};;
                    gratuities = new org.openapis.openapi.models.shared.Gratuity[]{{
                        add(new Gratuity() {{
                            allowCustomAmount = false;
                            currency = "exercitationem";
                            predefinedTipEntries = new String[]{{
                                add("quasi"),
                                add("nisi"),
                                add("at"),
                                add("vero"),
                            }};
                            usePredefinedTipEntries = false;
                        }}),
                    }};
                    hardware = new Hardware() {{
                        displayMaximumBackLight = 667593;
                    }};;
                    nexo = new Nexo() {{
                        displayUrls = new NotificationUrl() {{
                            localUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "sequi";
                                    url = "doloribus";
                                    username = "Terrence.Rowe";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "voluptate";
                                    url = "blanditiis";
                                    username = "Ludie36";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "quos";
                                    url = "eius";
                                    username = "Brendon68";
                                }}),
                            }};
                            publicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "incidunt";
                                    url = "quasi";
                                    username = "Judge39";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "consequuntur";
                                    url = "consectetur";
                                    username = "Alycia_McDermott0";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "omnis";
                                    url = "eos";
                                    username = "Kole8";
                                }}),
                            }};
                        }};;
                        encryptionKey = new Key() {{
                            identifier = "fuga";
                            passphrase = "accusamus";
                            version = 976802;
                        }};;
                        eventUrls = new EventUrl() {{
                            eventLocalUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "omnis";
                                    url = "delectus";
                                    username = "Erling.Lang83";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "quos";
                                    url = "commodi";
                                    username = "Tomasa_Johns";
                                }}),
                                add(new Url() {{
                                    encrypted = false;
                                    password = "modi";
                                    url = "nam";
                                    username = "Serenity.Bartoletti";
                                }}),
                            }};
                            eventPublicUrls = new org.openapis.openapi.models.shared.Url[]{{
                                add(new Url() {{
                                    encrypted = false;
                                    password = "quasi";
                                    url = "non";
                                    username = "Wilford_Hamill";
                                }}),
                            }};
                        }};;
                        nexoEventUrls = new String[]{{
                            add("esse"),
                            add("nemo"),
                            add("reprehenderit"),
                        }};
                    }};;
                    offlineProcessing = new OfflineProcessing() {{
                        chipFloorLimit = 667715;
                        offlineSwipeLimits = new org.openapis.openapi.models.shared.MinorUnitsMonetaryValue[]{{
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 571844;
                                currencyCode = "accusamus";
                            }}),
                            add(new MinorUnitsMonetaryValue() {{
                                amount = 774684;
                                currencyCode = "hic";
                            }}),
                        }};
                    }};;
                    opi = new Opi() {{
                        enablePayAtTable = false;
                        payAtTableStoreNumber = "necessitatibus";
                        payAtTableURL = "asperiores";
                    }};;
                    passcodes = new Passcodes() {{
                        adminMenuPin = "ex";
                        refundPin = "voluptas";
                        screenLockPin = "debitis";
                        txMenuPin = "delectus";
                    }};;
                    payAtTable = new PayAtTable() {{
                        authenticationMethod = PayAtTableAuthenticationMethodEnum.MAGSWIPE;
                        enablePayAtTable = false;
                    }};;
                    payment = new Payment() {{
                        hideMinorUnitsInCurrencies = new String[]{{
                            add("fuga"),
                            add("laborum"),
                            add("consectetur"),
                            add("velit"),
                        }};
                    }};;
                    receiptOptions = new ReceiptOptions() {{
                        logo = "atque";
                        qrCodeData = "ipsum";
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
                        deviceName = "impedit";
                        deviceSlogan = "magni";
                        skipSignature = false;
                    }};;
                    standalone = new Standalone() {{
                        currencyCode = "soluta";
                        enableStandalone = false;
                    }};;
                    surcharge = new Surcharge() {{
                        askConfirmation = false;
                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                            add(new Configuration("libero",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("excepturi") {{
                                                    amount = 975425;
                                                    currencyCode = "quia";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("aliquam", "velit");
                                                        put("illo", "accusantium");
                                                        put("vel", "ea");
                                                        put("beatae", "vero");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "nam";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("quo") {{
                                        amount = 482892;
                                        currencyCode = "voluptate";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("dignissimos", "neque");
                                        }};
                                    }}),
                                    add(new Currency("quibusdam") {{
                                        amount = 535468;
                                        currencyCode = "quibusdam";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("odit", "voluptatibus");
                                            put("vel", "magnam");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("facere"),
                                }};
                            }}),
                            add(new Configuration("sit",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("a") {{
                                                    amount = 7468;
                                                    currencyCode = "officia";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("ea", "quidem");
                                                        put("voluptas", "facilis");
                                                        put("placeat", "perspiciatis");
                                                        put("expedita", "deleniti");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "eum";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("velit") {{
                                        amount = 284086;
                                        currencyCode = "perspiciatis";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("dicta", "impedit");
                                            put("voluptatibus", "iste");
                                            put("itaque", "alias");
                                            put("nisi", "itaque");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("non"),
                                    add("dolor"),
                                    add("iusto"),
                                }};
                            }}),
                            add(new Configuration("ex",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("quae") {{
                                                    amount = 745233;
                                                    currencyCode = "libero";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("dolorum", "odio");
                                                        put("fugit", "alias");
                                                        put("magni", "vel");
                                                    }};
                                                }}),
                                                add(new Currency("et") {{
                                                    amount = 63553;
                                                    currencyCode = "modi";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("exercitationem", "itaque");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "voluptate";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("labore") {{
                                        amount = 600193;
                                        currencyCode = "necessitatibus";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("impedit", "ipsam");
                                            put("corporis", "est");
                                            put("error", "esse");
                                        }};
                                    }}),
                                    add(new Currency("dolorem") {{
                                        amount = 85066;
                                        currencyCode = "vero";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("vitae", "inventore");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("qui"),
                                    add("iste"),
                                }};
                            }}),
                            add(new Configuration("necessitatibus",                 new org.openapis.openapi.models.shared.Currency[]{{
                                                add(new Currency("officiis") {{
                                                    amount = 575078;
                                                    currencyCode = "ea";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("ipsam", "rerum");
                                                        put("laudantium", "corporis");
                                                    }};
                                                }}),
                                                add(new Currency("eos") {{
                                                    amount = 972912;
                                                    currencyCode = "cum";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("alias", "quia");
                                                        put("quidem", "fuga");
                                                        put("repudiandae", "accusantium");
                                                        put("expedita", "officiis");
                                                    }};
                                                }}),
                                                add(new Currency("recusandae") {{
                                                    amount = 844854;
                                                    currencyCode = "odio";
                                                    percentage = new java.util.HashMap<String, Object>() {{
                                                        put("odit", "explicabo");
                                                        put("corporis", "error");
                                                        put("earum", "adipisci");
                                                    }};
                                                }}),
                                            }}) {{
                                brand = "ipsum";
                                currencies = new org.openapis.openapi.models.shared.Currency[]{{
                                    add(new Currency("fugiat") {{
                                        amount = 858338;
                                        currencyCode = "distinctio";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("quia", "quia");
                                            put("nostrum", "omnis");
                                            put("libero", "dicta");
                                            put("id", "libero");
                                        }};
                                    }}),
                                    add(new Currency("eligendi") {{
                                        amount = 637462;
                                        currencyCode = "quos";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("sit", "iusto");
                                            put("ipsa", "voluptates");
                                            put("inventore", "aperiam");
                                            put("totam", "dolore");
                                        }};
                                    }}),
                                    add(new Currency("est") {{
                                        amount = 715053;
                                        currencyCode = "voluptatem";
                                        percentage = new java.util.HashMap<String, Object>() {{
                                            put("esse", "dolores");
                                            put("assumenda", "beatae");
                                        }};
                                    }}),
                                }};
                                sources = new String[]{{
                                    add("corrupti"),
                                    add("molestiae"),
                                    add("provident"),
                                    add("accusamus"),
                                }};
                            }}),
                        }};
                    }};;
                    timeouts = new Timeouts() {{
                        fromActiveToSleep = 630871;
                    }};;
                    wifiProfiles = new WifiProfiles() {{
                        profiles = new org.openapis.openapi.models.shared.Profile[]{{
                            add(new Profile("delectus", "tempore", "vero", "odit") {{
                                authType = "quidem";
                                autoWifi = false;
                                bssType = "quis";
                                channel = 106255;
                                defaultProfile = false;
                                eap = "unde";
                                eapCaCert = new File("nesciunt", "at") {{
                                    data = "molestiae";
                                    name = "Kent Corkery";
                                }};
                                eapClientCert = new File("expedita", "voluptatum") {{
                                    data = "officia";
                                    name = "Kara Tromp";
                                }};
                                eapClientKey = new File("minus", "eum") {{
                                    data = "cupiditate";
                                    name = "Nichole Halvorson";
                                }};
                                eapClientPwd = "modi";
                                eapIdentity = "corporis";
                                eapIntermediateCert = new File("labore", "totam") {{
                                    data = "magnam";
                                    name = "Miss Emilio Reynolds";
                                }};
                                eapPwd = "occaecati";
                                hiddenSsid = false;
                                name = "Angelica Flatley";
                                psk = "nostrum";
                                ssid = "est";
                                wsec = "impedit";
                            }}),
                            add(new Profile("veritatis", "quasi", "laboriosam", "pariatur") {{
                                authType = "repellat";
                                autoWifi = false;
                                bssType = "pariatur";
                                channel = 362888;
                                defaultProfile = false;
                                eap = "reprehenderit";
                                eapCaCert = new File("dolores", "error") {{
                                    data = "aperiam";
                                    name = "Cathy Kirlin";
                                }};
                                eapClientCert = new File("optio", "ex") {{
                                    data = "veritatis";
                                    name = "Colleen Streich";
                                }};
                                eapClientKey = new File("quam", "dolorem") {{
                                    data = "quaerat";
                                    name = "Cecelia Schroeder";
                                }};
                                eapClientPwd = "modi";
                                eapIdentity = "ipsa";
                                eapIntermediateCert = new File("veniam", "animi") {{
                                    data = "sint";
                                    name = "Earl VonRueden DVM";
                                }};
                                eapPwd = "dolores";
                                hiddenSsid = false;
                                name = "Gerald Cruickshank";
                                psk = "ipsa";
                                ssid = "ducimus";
                                wsec = "maiores";
                            }}),
                        }};
                        settings = new Settings() {{
                            band = "libero";
                            roaming = false;
                            timeout = 566506;
                        }};;
                    }};;
                }};;
            }};            

            PatchMerchantsMerchantIdTerminalSettingsResponse res = sdk.terminalSettingsMerchantLevel.patchMerchantsMerchantIdTerminalSettings(req, new PatchMerchantsMerchantIdTerminalSettingsSecurity() {{
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
