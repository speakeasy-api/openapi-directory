<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GenerateDataSet(ctx, operations.GenerateDataSetRequest{
        GenerateDataSetRequest: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            DataSetPublicationDate: types.MustTimeFromString("2021-09-24T02:21:06.409Z"),
            DataSetType: shared.DataSetTypeEnumDisbursedAmountByCustomerGeo,
            DestinationS3BucketName: "deserunt",
            DestinationS3Prefix: sdk.String("suscipit"),
            RoleNameArn: "iure",
            SnsTopicArn: "magnam",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.GenerateDataSetXAmzTargetEnumMarketplaceCommerceAnalytics20150701GenerateDataSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDataSetResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->