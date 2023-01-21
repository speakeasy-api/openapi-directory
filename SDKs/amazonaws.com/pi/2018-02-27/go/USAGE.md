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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
        },
        Request: shared.DescribeDimensionKeysRequest{
            EndTime: "2011-08-12T10:11:12Z",
            Filter: map[string]string{
                "rerum": "dicta",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "voluptatum",
                },
                Group: "et",
                Limit: 7144924247938981575,
            },
            Identifier: "dolorem",
            MaxResults: 7259475919510918339,
            Metric: "voluptate",
            NextToken: "iste",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "totam",
                },
                Group: "dolores",
                Limit: 1929546706668609706,
            },
            PeriodInSeconds: 6392442863481646880,
            ServiceType: "RDS",
            StartTime: "2003-08-14T16:48:00Z",
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