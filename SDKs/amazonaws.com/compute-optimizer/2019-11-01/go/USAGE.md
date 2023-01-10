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
            XAmzAlgorithm: "itaque",
            XAmzContentSha256: "corrupti",
            XAmzCredential: "voluptatem",
            XAmzDate: "quasi",
            XAmzSecurityToken: "repellat",
            XAmzSignature: "rem",
            XAmzSignedHeaders: "nisi",
            XAmzTarget: "ComputeOptimizerService.DescribeRecommendationExportJobs",
        },
        Request: shared.DescribeRecommendationExportJobsRequest{
            Filters: []shared.JobFilter{
                shared.JobFilter{
                    Name: "JobStatus",
                    Values: []string{
                        "soluta",
                        "laudantium",
                    },
                },
            },
            JobIds: []string{
                "eaque",
                "ex",
                "cum",
            },
            MaxResults: 7436471626629558277,
            NextToken: "sunt",
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