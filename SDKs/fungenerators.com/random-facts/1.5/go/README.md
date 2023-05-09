# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fungenerators.com/random-facts/1.5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.FactOfTheDay.GetFactFod(ctx, operations.GetFactFodRequest{
        Category: sdk.String("corrupti"),
    }, operations.GetFactFodSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [FactOfTheDay](docs/factoftheday/README.md)

* [GetFactFod](docs/factoftheday/README.md#getfactfod) - Get fact of the day for the given category.
* [GetFactFodCategories](docs/factoftheday/README.md#getfactfodcategories) - Get the list of supported fact of the day categories.

### [NumberFacts](docs/numberfacts/README.md)

* [GetFactNumbers](docs/numberfacts/README.md#getfactnumbers) - Get a random fact about a number

### [OnThisDay](docs/onthisday/README.md)

* [GetFactOnthisdayBorn](docs/onthisday/README.md#getfactonthisdayborn) - Returns a random ( famous/ relatively famous ) person born on a given day and month
* [GetFactOnthisdayDied](docs/onthisday/README.md#getfactonthisdaydied) - Returns a random ( famous/ relatively famous ) person died on a given day and month
* [GetFactOnthisdayEvent](docs/onthisday/README.md#getfactonthisdayevent) - Returns a random ( famous/ relatively famous ) historic event on a given day and month

### [PrivateFacts](docs/privatefacts/README.md)

* [DeleteFact](docs/privatefacts/README.md#deletefact) - Delete a Fact entry identified by the id.
* [GetFact](docs/privatefacts/README.md#getfact) - Get a Fact belonging to the id.
* [PutFact](docs/privatefacts/README.md#putfact) - Add a Fact entry to the database (private collection).

### [RandomFacts](docs/randomfacts/README.md)

* [GetFact](docs/randomfacts/README.md#getfact) - Get a Fact belonging to the id.
* [GetFactCategories](docs/randomfacts/README.md#getfactcategories) - Get a random Fact.
* [GetFactRandom](docs/randomfacts/README.md#getfactrandom) - Get a random Fact for a given category(optional) and subcategory(optional).
* [GetFactSearch](docs/randomfacts/README.md#getfactsearch) - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
