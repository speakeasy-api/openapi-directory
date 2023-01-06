<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DescribeDimensionKeysRequest{
        Headers: operations.DescribeDimensionKeysHeaders{
            XAmzAlgorithm: "incidunt",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "est",
            XAmzDate: "necessitatibus",
            XAmzSecurityToken: "ut",
            XAmzSignature: "iusto",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
        },
        Request: shared.DescribeDimensionKeysRequest{
            EndTime: "1997-03-28T01:34:42Z",
            Filter: map[string]string{
                "ullam": "atque",
                "quisquam": "aut",
                "ipsa": "ut",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "sed",
                    "ducimus",
                },
                Group: "vel",
                Limit: 8822795913292991854,
            },
            Identifier: "nam",
            MaxResults: 7173580319038902782,
            Metric: "consequuntur",
            NextToken: "autem",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "rerum",
                    "repellat",
                    "earum",
                },
                Group: "modi",
                Limit: 3290167875846611358,
            },
            PeriodInSeconds: 4005798154613431552,
            ServiceType: "RDS",
            StartTime: "2022-03-22T23:47:38Z",
        },
    }
    
    res, err := s.DescribeDimensionKeys(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDimensionKeysResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->