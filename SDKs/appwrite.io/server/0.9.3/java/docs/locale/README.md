# locale

## Overview

The Locale service allows you to customize your app based on your users' location.

### Available Operations

* [localeGet](#localeget) - Get User Locale
* [localeGetContinents](#localegetcontinents) - List Continents
* [localeGetCountries](#localegetcountries) - List Countries
* [localeGetCountriesEU](#localegetcountrieseu) - List EU Countries
* [localeGetCountriesPhones](#localegetcountriesphones) - List Countries Phone Codes
* [localeGetCurrencies](#localegetcurrencies) - List Currencies
* [localeGetLanguages](#localegetlanguages) - List Languages

## localeGet

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetResponse;
import org.openapis.openapi.models.operations.LocaleGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetResponse res = sdk.locale.localeGet(new LocaleGetSecurity("pariatur", "nemo", "voluptatibus") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.locale != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## localeGetContinents

List of all continents. You can use the locale header to get the data in a supported language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetContinentsResponse;
import org.openapis.openapi.models.operations.LocaleGetContinentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetContinentsResponse res = sdk.locale.localeGetContinents(new LocaleGetContinentsSecurity("perferendis", "fugiat", "amet") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.continentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## localeGetCountries

List of all countries. You can use the locale header to get the data in a supported language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetCountriesResponse;
import org.openapis.openapi.models.operations.LocaleGetCountriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetCountriesResponse res = sdk.locale.localeGetCountries(new LocaleGetCountriesSecurity("aut", "cumque", "corporis") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.countryList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## localeGetCountriesEU

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetCountriesEUResponse;
import org.openapis.openapi.models.operations.LocaleGetCountriesEUSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetCountriesEUResponse res = sdk.locale.localeGetCountriesEU(new LocaleGetCountriesEUSecurity("hic", "libero", "nobis") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.countryList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## localeGetCountriesPhones

List of all countries phone codes. You can use the locale header to get the data in a supported language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetCountriesPhonesResponse;
import org.openapis.openapi.models.operations.LocaleGetCountriesPhonesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetCountriesPhonesResponse res = sdk.locale.localeGetCountriesPhones(new LocaleGetCountriesPhonesSecurity("dolores", "quis", "totam") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.phoneList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## localeGetCurrencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetCurrenciesResponse;
import org.openapis.openapi.models.operations.LocaleGetCurrenciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetCurrenciesResponse res = sdk.locale.localeGetCurrencies(new LocaleGetCurrenciesSecurity("dignissimos", "eaque", "quis") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.currencyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## localeGetLanguages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocaleGetLanguagesResponse;
import org.openapis.openapi.models.operations.LocaleGetLanguagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocaleGetLanguagesResponse res = sdk.locale.localeGetLanguages(new LocaleGetLanguagesSecurity("nesciunt", "eos", "perferendis") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.languageList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
