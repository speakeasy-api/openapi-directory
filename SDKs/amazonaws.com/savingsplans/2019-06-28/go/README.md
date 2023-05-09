# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/savingsplans/2019-06-28/go
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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateSavingsPlan(ctx, operations.CreateSavingsPlanRequest{
        RequestBody: operations.CreateSavingsPlanRequestBody{
            ClientToken: sdk.String("corrupti"),
            Commitment: "provident",
            PurchaseTime: types.MustTimeFromString("2021-04-24T16:27:50.833Z"),
            SavingsPlanOfferingID: "unde",
            Tags: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            UpfrontPaymentAmount: sdk.String("debitis"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSavingsPlanResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateSavingsPlan](docs/sdk/README.md#createsavingsplan) - Creates a Savings Plan.
* [DeleteQueuedSavingsPlan](docs/sdk/README.md#deletequeuedsavingsplan) - Deletes the queued purchase for the specified Savings Plan.
* [DescribeSavingsPlanRates](docs/sdk/README.md#describesavingsplanrates) - Describes the specified Savings Plans rates.
* [DescribeSavingsPlans](docs/sdk/README.md#describesavingsplans) - Describes the specified Savings Plans.
* [DescribeSavingsPlansOfferingRates](docs/sdk/README.md#describesavingsplansofferingrates) - Describes the specified Savings Plans offering rates.
* [DescribeSavingsPlansOfferings](docs/sdk/README.md#describesavingsplansofferings) - Describes the specified Savings Plans offerings.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [TagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
