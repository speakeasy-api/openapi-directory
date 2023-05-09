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
    res, err := s.DescribeDimensionKeys(ctx, operations.DescribeDimensionKeysRequest{
        DescribeDimensionKeysRequest: shared.DescribeDimensionKeysRequest{
            AdditionalMetrics: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            EndTime: types.MustTimeFromString("2021-04-14T16:47:33.722Z"),
            Filter: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "debitis",
                    "ipsa",
                },
                Group: "delectus",
                Limit: sdk.Int64(272656),
            },
            Identifier: "suscipit",
            MaxResults: sdk.Int64(477665),
            Metric: "minus",
            NextToken: sdk.String("placeat"),
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                Group: "recusandae",
                Limit: sdk.Int64(836079),
            },
            PeriodInSeconds: sdk.Int64(71036),
            ServiceType: shared.ServiceTypeEnumRds,
            StartTime: types.MustTimeFromString("2022-05-09T10:00:51.349Z"),
        },
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("ipsam"),
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DescribeDimensionKeysXAmzTargetEnumPerformanceInsightsv20180227DescribeDimensionKeys,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDimensionKeysResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->