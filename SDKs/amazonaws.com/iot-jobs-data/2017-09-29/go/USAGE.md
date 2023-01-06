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
            JobID: "qui",
            ThingName: "rem",
        },
        QueryParams: operations.DescribeJobExecutionQueryParams{
            ExecutionNumber: 3347108421516776634,
            IncludeJobDocument: false,
        },
        Headers: operations.DescribeJobExecutionHeaders{
            XAmzAlgorithm: "quo",
            XAmzContentSha256: "id",
            XAmzCredential: "illo",
            XAmzDate: "enim",
            XAmzSecurityToken: "est",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "eum",
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