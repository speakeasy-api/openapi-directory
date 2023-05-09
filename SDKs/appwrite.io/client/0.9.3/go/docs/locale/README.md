# Locale

## Overview

The Locale service allows you to customize your app based on your users' location.

### Available Operations

* [LocaleGet](#localeget) - Get User Locale
* [LocaleGetContinents](#localegetcontinents) - List Continents
* [LocaleGetCountries](#localegetcountries) - List Countries
* [LocaleGetCountriesEU](#localegetcountrieseu) - List EU Countries
* [LocaleGetCountriesPhones](#localegetcountriesphones) - List Countries Phone Codes
* [LocaleGetCurrencies](#localegetcurrencies) - List Currencies
* [LocaleGetLanguages](#localegetlanguages) - List Languages

## LocaleGet

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

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
    res, err := s.Locale.LocaleGet(ctx, operations.LocaleGetSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Locale != nil {
        // handle response
    }
}
```

## LocaleGetContinents

List of all continents. You can use the locale header to get the data in a supported language.

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
    res, err := s.Locale.LocaleGetContinents(ctx, operations.LocaleGetContinentsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinentList != nil {
        // handle response
    }
}
```

## LocaleGetCountries

List of all countries. You can use the locale header to get the data in a supported language.

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
    res, err := s.Locale.LocaleGetCountries(ctx, operations.LocaleGetCountriesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CountryList != nil {
        // handle response
    }
}
```

## LocaleGetCountriesEU

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

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
    res, err := s.Locale.LocaleGetCountriesEU(ctx, operations.LocaleGetCountriesEUSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CountryList != nil {
        // handle response
    }
}
```

## LocaleGetCountriesPhones

List of all countries phone codes. You can use the locale header to get the data in a supported language.

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
    res, err := s.Locale.LocaleGetCountriesPhones(ctx, operations.LocaleGetCountriesPhonesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhoneList != nil {
        // handle response
    }
}
```

## LocaleGetCurrencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

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
    res, err := s.Locale.LocaleGetCurrencies(ctx, operations.LocaleGetCurrenciesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurrencyList != nil {
        // handle response
    }
}
```

## LocaleGetLanguages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

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
    res, err := s.Locale.LocaleGetLanguages(ctx, operations.LocaleGetLanguagesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguageList != nil {
        // handle response
    }
}
```
