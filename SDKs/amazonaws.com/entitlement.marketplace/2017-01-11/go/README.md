# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/entitlement.marketplace/2017-01-11/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetEntitlements(ctx, operations.GetEntitlementsRequest{
        GetEntitlementsRequest: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "provident": []string{
                    "quibusdam",
                    "unde",
                    "nulla",
                },
                "corrupti": []string{
                    "vel",
                    "error",
                    "deserunt",
                    "suscipit",
                },
                "iure": []string{
                    "debitis",
                    "ipsa",
                },
            },
            MaxResults: sdk.Int64(963663),
            NextToken: sdk.String("tempora"),
            ProductCode: "suscipit",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.GetEntitlementsXAmzTargetEnumAwsmpEntitlementServiceGetEntitlements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntitlementsResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetEntitlements](docs/sdk/README.md#getentitlements) - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
