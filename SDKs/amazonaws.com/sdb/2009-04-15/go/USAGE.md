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
    res, err := s.GETCreateDomain(ctx, operations.GETCreateDomainRequest{
        AWSAccessKeyID: "corrupti",
        Action: operations.GETCreateDomainActionEnumCreateDomain,
        DomainName: "provident",
        Signature: "distinctio",
        SignatureMethod: "quibusdam",
        SignatureVersion: "unde",
        Timestamp: "nulla",
        Version: operations.GETCreateDomainVersionEnumTwoThousandAndNine0415,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->