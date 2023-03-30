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
            MaxResults: "unde",
            NextToken: "deserunt",
        },
        Headers: operations.DescribeDimensionKeysHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
            XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
        },
        Request: shared.DescribeDimensionKeysRequest{
            AdditionalMetrics: []string{
                "eum",
                "iusto",
                "ullam",
            },
            EndTime: "2022-05-08T12:03:51.760Z",
            Filter: map[string]string{
                "sapiente": "enim",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "voluptatum",
                    "autem",
                },
                Group: "vel",
                Limit: 528895,
            },
            Identifier: "deleniti",
            MaxResults: 568045,
            Metric: "reprehenderit",
            NextToken: "molestiae",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "quasi",
                    "laboriosam",
                    "dicta",
                    "est",
                },
                Group: "voluptatem",
                Limit: 368241,
            },
            PeriodInSeconds: 832620,
            ServiceType: "DOCDB",
            StartTime: "2022-06-18T23:20:33.546Z",
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