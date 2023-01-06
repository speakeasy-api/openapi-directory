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
            XAmzAlgorithm: "inventore",
            XAmzContentSha256: "voluptatem",
            XAmzCredential: "voluptates",
            XAmzDate: "quisquam",
            XAmzSecurityToken: "architecto",
            XAmzSignature: "sunt",
            XAmzSignedHeaders: "ut",
            XAmzTarget: "ComputeOptimizerService.DescribeRecommendationExportJobs",
        },
        Request: shared.DescribeRecommendationExportJobsRequest{
            Filters: []shared.JobFilter{
                shared.JobFilter{
                    Name: "JobStatus",
                    Values: []string{
                        "et",
                        "ipsam",
                    },
                },
                shared.JobFilter{
                    Name: "JobStatus",
                    Values: []string{
                        "inventore",
                        "impedit",
                        "molestiae",
                    },
                },
                shared.JobFilter{
                    Name: "ResourceType",
                    Values: []string{
                        "consectetur",
                        "repellendus",
                        "molestias",
                    },
                },
            },
            JobIds: []string{
                "quia",
            },
            MaxResults: 6233872421368037055,
            NextToken: "sit",
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