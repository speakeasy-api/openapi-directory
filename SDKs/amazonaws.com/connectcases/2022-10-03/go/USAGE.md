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

    req := operations.BatchGetFieldRequest{
        PathParams: operations.BatchGetFieldPathParams{
            DomainID: "corrupti",
        },
        Headers: operations.BatchGetFieldHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.BatchGetFieldRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "error",
                },
                shared.FieldIdentifier{
                    ID: "deserunt",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchGetField(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetFieldResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->