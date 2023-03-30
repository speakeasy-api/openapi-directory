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

    req := operations.DescribeDimensionKeysRequest{
        QueryParams: operations.DescribeDimensionKeysQueryParams{
            MaxResults: "corrupti",
            NextToken: "provident",
        },
        Headers: operations.DescribeDimensionKeysHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
            XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
        },
        Request: shared.DescribeDimensionKeysRequest{
            AdditionalMetrics: []string{
                "deserunt",
                "suscipit",
                "iure",
            },
            EndTime: "2022-12-11T12:25:59.890Z",
            Filter: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "excepturi",
                    "nisi",
                },
                Group: "recusandae",
                Limit: 836079,
            },
            Identifier: "ab",
            MaxResults: 337396,
            Metric: "veritatis",
            NextToken: "deserunt",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "ipsam",
                },
                Group: "repellendus",
                Limit: 957156,
            },
            PeriodInSeconds: 778157,
            ServiceType: "RDS",
            StartTime: "2022-05-16T13:31:48.764Z",
        },
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