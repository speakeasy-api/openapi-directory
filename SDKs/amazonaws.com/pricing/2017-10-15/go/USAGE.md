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
    res, err := s.DescribeServices(ctx, operations.DescribeServicesRequest{
        DescribeServicesRequest: shared.DescribeServicesRequest{
            FormatVersion: sdk.String("corrupti"),
            MaxResults: sdk.Int64(592845),
            NextToken: sdk.String("distinctio"),
            ServiceCode: sdk.String("quibusdam"),
        },
        MaxResults: sdk.String("unde"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.DescribeServicesXAmzTargetEnumAwsPriceListServiceDescribeServices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServicesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->