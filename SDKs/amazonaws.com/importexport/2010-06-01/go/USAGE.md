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

    req := operations.GETCancelJobRequest{
        QueryParams: operations.GETCancelJobQueryParams{
            APIVersion: "unde",
            AWSAccessKeyID: "deserunt",
            Action: "CancelJob",
            JobID: "nulla",
            Operation: "CancelJob",
            Signature: "vero",
            SignatureMethod: "perspiciatis",
            SignatureVersion: "nulla",
            Timestamp: "nihil",
            Version: "2010-06-01",
        },
    }

    ctx := context.Background()
    res, err := s.GETCancelJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->