# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/canada-holidays.ca/1.8.0/go
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
    res, err := s.Holidays.Holiday(ctx, operations.HolidayRequest{
        HolidayID: 2,
        Optional: operations.HolidayOptionalEnumTrue.ToPointer(),
        Year: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Holiday200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Holidays](docs/holidays/README.md)

* [Holiday](docs/holidays/README.md#holiday) - Get a holiday by id
* [Holidays](docs/holidays/README.md#holidays) - Get all holidays

### [Info](docs/info/README.md)

* [Root](docs/info/README.md#root) - root
* [Spec](docs/info/README.md#spec) - Get JSON schema

### [Provinces](docs/provinces/README.md)

* [Province](docs/provinces/README.md#province) - Get a province or territory by abbreviation
* [Provinces](docs/provinces/README.md#provinces) - Get all provinces
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
