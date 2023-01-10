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
            XAmzAlgorithm: "mollitia",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "ipsam",
            XAmzDate: "dolor",
            XAmzSecurityToken: "aut",
            XAmzSignature: "veniam",
            XAmzSignedHeaders: "ullam",
            XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
        },
        Request: shared.DescribeDimensionKeysRequest{
            EndTime: "1986-12-25T05:47:46Z",
            Filter: map[string]string{
                "inventore": "est",
                "nisi": "consequatur",
                "fugiat": "tenetur",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "aliquam",
                },
                Group: "aspernatur",
                Limit: 4017103272747439088,
            },
            Identifier: "inventore",
            MaxResults: 3526406646607909592,
            Metric: "saepe",
            NextToken: "voluptas",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "optio",
                    "omnis",
                },
                Group: "ut",
                Limit: 8667532264838713382,
            },
            PeriodInSeconds: 8056810507064755208,
            ServiceType: "RDS",
            StartTime: "1976-11-13T17:32:31Z",
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