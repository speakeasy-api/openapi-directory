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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateSavingsPlanRequest{
        RequestBody: operations.CreateSavingsPlanRequestBody{
            ClientToken: "corrupti",
            Commitment: "provident",
            PurchaseTime: "2021-04-24T16:27:50.833Z",
            SavingsPlanOfferingID: "unde",
            Tags: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            UpfrontPaymentAmount: "debitis",
        },
        XAmzAlgorithm: "ipsa",
        XAmzContentSha256: "delectus",
        XAmzCredential: "tempora",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "minus",
        XAmzSignedHeaders: "placeat",
    }

    ctx := context.Background()
    res, err := s.CreateSavingsPlan(ctx, req)
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

### SDK SDK

* `CreateSavingsPlan` - Creates a Savings Plan.
* `DeleteQueuedSavingsPlan` - Deletes the queued purchase for the specified Savings Plan.
* `DescribeSavingsPlanRates` - Describes the specified Savings Plans rates.
* `DescribeSavingsPlans` - Describes the specified Savings Plans.
* `DescribeSavingsPlansOfferingRates` - Describes the specified Savings Plans offering rates.
* `DescribeSavingsPlansOfferings` - Describes the specified Savings Plans offerings.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `TagResource` - Adds the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
