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

    req := operations.GetEntitlementsRequest{
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
            MaxResults: 963663,
            NextToken: "tempora",
            ProductCode: "suscipit",
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "minus",
        XAmzCredential: "placeat",
        XAmzDate: "voluptatum",
        XAmzSecurityToken: "iusto",
        XAmzSignature: "excepturi",
        XAmzSignedHeaders: "nisi",
        XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
    }

    ctx := context.Background()
    res, err := s.GetEntitlements(ctx, req)
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

### SDK SDK

* `GetEntitlements` - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
