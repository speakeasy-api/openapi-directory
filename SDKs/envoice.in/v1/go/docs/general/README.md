# General

### Available Operations

* [GeneralAPICountries](#generalapicountries) - Return all of the platform supported countries
* [GeneralAPICurrencies](#generalapicurrencies) - Return all of the platform supported currencies
* [GeneralAPIDateFormats](#generalapidateformats) - Return all of the platform supported Date Formats
* [GeneralAPIUILanguages](#generalapiuilanguages) - Return all of the platform supported UI languages

## GeneralAPICountries

Return all of the platform supported countries

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
    res, err := s.General.GeneralAPICountries(ctx, operations.GeneralAPICountriesRequest{
        XAuthKey: "saepe",
        XAuthSecret: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CountryDetailsAPIModels != nil {
        // handle response
    }
}
```

## GeneralAPICurrencies

Return all of the platform supported currencies

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
    res, err := s.General.GeneralAPICurrencies(ctx, operations.GeneralAPICurrenciesRequest{
        XAuthKey: "veritatis",
        XAuthSecret: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CurrencyDetailsAPIModels != nil {
        // handle response
    }
}
```

## GeneralAPIDateFormats

Return all of the platform supported Date Formats

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
    res, err := s.General.GeneralAPIDateFormats(ctx, operations.GeneralAPIDateFormatsRequest{
        XAuthKey: "quos",
        XAuthSecret: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneralAPIDateFormats200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GeneralAPIUILanguages

Return all of the platform supported UI languages

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
    res, err := s.General.GeneralAPIUILanguages(ctx, operations.GeneralAPIUILanguagesRequest{
        XAuthKey: "cupiditate",
        XAuthSecret: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UILanguageDetailsAPIModels != nil {
        // handle response
    }
}
```
