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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.DescribeAcceleratorOfferingsRequest{
        Headers: operations.DescribeAcceleratorOfferingsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.DescribeAcceleratorOfferingsRequestBody{
            AcceleratorTypes: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            LocationType: "availability-zone",
        },
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