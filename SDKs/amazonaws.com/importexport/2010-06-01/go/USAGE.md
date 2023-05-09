<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETCancelJob(ctx, operations.GETCancelJobRequest{
        APIVersion: sdk.String("corrupti"),
        AWSAccessKeyID: "provident",
        Action: operations.GETCancelJobActionEnumCancelJob,
        JobID: "distinctio",
        Operation: operations.GETCancelJobOperationEnumCancelJob,
        Signature: "quibusdam",
        SignatureMethod: "unde",
        SignatureVersion: "nulla",
        Timestamp: "corrupti",
        Version: operations.GETCancelJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->