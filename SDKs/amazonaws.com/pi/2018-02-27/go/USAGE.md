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
            EndTime: "2022-02-09T12:04:06.508Z",
            Filter: map[string]string{
                "delectus": "tempora",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "molestiae",
                    "minus",
                },
                Group: "placeat",
                Limit: 528895,
            },
            Identifier: "iusto",
            MaxResults: 568045,
            Metric: "nisi",
            NextToken: "recusandae",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "ab",
                    "quis",
                    "veritatis",
                    "deserunt",
                },
                Group: "perferendis",
                Limit: 368241,
            },
            PeriodInSeconds: 832620,
            ServiceType: "DOCDB",
            StartTime: "2022-07-31T07:34:52.790Z",
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