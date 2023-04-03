# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/elastic-inference/2017-07-25/go
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

    req := operations.DescribeAcceleratorOfferingsRequest{
        RequestBody: operations.DescribeAcceleratorOfferingsRequestBody{
            AcceleratorTypes: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            LocationType: "availability-zone",
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.DescribeAcceleratorOfferings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAcceleratorOfferingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DescribeAcceleratorOfferings` -  Describes the locations in which a given accelerator type or set of types is present in a given region. 
* `DescribeAcceleratorTypes` -  Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput. 
* `DescribeAccelerators` -  Describes information over a provided set of accelerators belonging to an account. 
* `ListTagsForResource` -  Returns all tags of an Elastic Inference Accelerator. 
* `TagResource` -  Adds the specified tags to an Elastic Inference Accelerator. 
* `UntagResource` -  Removes the specified tags from an Elastic Inference Accelerator. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
