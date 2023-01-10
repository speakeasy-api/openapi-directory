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
            JobID: "aut",
            ThingName: "adipisci",
        },
        QueryParams: operations.DescribeJobExecutionQueryParams{
            ExecutionNumber: 3214739643573370622,
            IncludeJobDocument: false,
        },
        Headers: operations.DescribeJobExecutionHeaders{
            XAmzAlgorithm: "in",
            XAmzContentSha256: "fuga",
            XAmzCredential: "nemo",
            XAmzDate: "dolore",
            XAmzSecurityToken: "suscipit",
            XAmzSignature: "architecto",
            XAmzSignedHeaders: "ratione",
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