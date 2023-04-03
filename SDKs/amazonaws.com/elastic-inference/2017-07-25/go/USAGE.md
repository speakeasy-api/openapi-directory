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