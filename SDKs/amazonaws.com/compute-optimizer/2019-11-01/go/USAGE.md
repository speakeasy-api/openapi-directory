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
    
    req := operations.DescribeRecommendationExportJobsRequest{
        Headers: operations.DescribeRecommendationExportJobsHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "ComputeOptimizerService.DescribeRecommendationExportJobs",
        },
        Request: shared.DescribeRecommendationExportJobsRequest{
            Filters: []shared.JobFilter{
                shared.JobFilter{
                    Name: "ResourceType",
                    Values: []string{
                        "rerum",
                    },
                },
            },
            JobIds: []string{
                "debitis",
                "voluptatum",
                "et",
            },
            MaxResults: 7144924247938981575,
            NextToken: "dolorem",
        },
    }
    
    res, err := s.DescribeRecommendationExportJobs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecommendationExportJobsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->