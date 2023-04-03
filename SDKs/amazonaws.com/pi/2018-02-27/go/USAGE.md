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

    req := operations.DescribeDimensionKeysRequest{
        DescribeDimensionKeysRequest: shared.DescribeDimensionKeysRequest{
            AdditionalMetrics: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            EndTime: "2021-04-14T16:47:33.722Z",
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
                Limit: 272656,
            },
            Identifier: "suscipit",
            MaxResults: 477665,
            Metric: "minus",
            NextToken: "placeat",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                Group: "recusandae",
                Limit: 836079,
            },
            PeriodInSeconds: 71036,
            ServiceType: "RDS",
            StartTime: "2022-05-09T10:00:51.349Z",
        },
        MaxResults: "perferendis",
        NextToken: "ipsam",
        XAmzAlgorithm: "repellendus",
        XAmzContentSha256: "sapiente",
        XAmzCredential: "quo",
        XAmzDate: "odit",
        XAmzSecurityToken: "at",
        XAmzSignature: "at",
        XAmzSignedHeaders: "maiores",
        XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
    }

    ctx := context.Background()
    res, err := s.DescribeDimensionKeys(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDimensionKeysResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->