# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fungenerators.com/pirate/1.5/go
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
    res, err := s.Generation.GetPirateGenerateInsult(ctx, operations.GetPirateGenerateInsultRequest{
        Limit: sdk.Int64(548814),
    }, operations.GetPirateGenerateInsultSecurity{
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


### [Generation](docs/generation/README.md)

* [GetPirateGenerateInsult](docs/generation/README.md#getpirategenerateinsult) - Generate random pirate insults.
* [GetPirateGenerateLoremIpsum](docs/generation/README.md#getpirategenerateloremipsum) - Generate pirate lorem ipsum.
* [GetPirateGenerateName](docs/generation/README.md#getpirategeneratename) - Generate random pirate names.

### [Translation](docs/translation/README.md)

* [GetPirateTranslate](docs/translation/README.md#getpiratetranslate) - Translate from English to pirate.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
