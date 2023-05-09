# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fraudlabspro.com/fraud-detection/1.1/go
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
    res, err := s.PostV1OrderFeedback(ctx, operations.PostV1OrderFeedbackRequest{
        Action: operations.PostV1OrderFeedbackActionEnumReject,
        Format: operations.PostV1OrderFeedbackFormatEnumXML.ToPointer(),
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
        Key: "ipsam",
        Notes: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1OrderFeedback200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [PostV1OrderFeedback](docs/sdk/README.md#postv1orderfeedback) - Feedback the status of an order transaction.
* [PostV1OrderScreen](docs/sdk/README.md#postv1orderscreen) - Screen order for payment fraud.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
