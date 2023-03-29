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

    req := operations.DescribeJobExecutionRequest{
        PathParams: operations.DescribeJobExecutionPathParams{
            JobID: "unde",
            ThingName: "deserunt",
        },
        QueryParams: operations.DescribeJobExecutionQueryParams{
            ExecutionNumber: 715190,
            IncludeJobDocument: false,
        },
        Headers: operations.DescribeJobExecutionHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.DescribeJobExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobExecutionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->