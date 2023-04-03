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

    req := operations.BatchGetFieldRequest{
        RequestBody: operations.BatchGetFieldRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "provident",
                },
                shared.FieldIdentifier{
                    ID: "distinctio",
                },
                shared.FieldIdentifier{
                    ID: "quibusdam",
                },
            },
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        DomainID: "suscipit",
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