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
    
    req := operations.DescribeJobExecutionRequest{
        PathParams: operations.DescribeJobExecutionPathParams{
            JobID: "sit",
            ThingName: "voluptas",
        },
        QueryParams: operations.DescribeJobExecutionQueryParams{
            ExecutionNumber: 6050128673802995827,
            IncludeJobDocument: false,
        },
        Headers: operations.DescribeJobExecutionHeaders{
            XAmzAlgorithm: "consequuntur",
            XAmzContentSha256: "dolor",
            XAmzCredential: "expedita",
            XAmzDate: "voluptas",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "et",
            XAmzSignedHeaders: "nihil",
        },
    }
    
    res, err := s.DescribeJobExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobExecutionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->