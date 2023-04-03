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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GETCreateDomainRequest{
        AWSAccessKeyID: "corrupti",
        Action: "CreateDomain",
        DomainName: "provident",
        Signature: "distinctio",
        SignatureMethod: "quibusdam",
        SignatureVersion: "unde",
        Timestamp: "nulla",
        Version: "2009-04-15",
    }

    ctx := context.Background()
    res, err := s.GETCreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->