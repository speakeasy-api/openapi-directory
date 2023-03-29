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
            DomainID: "unde",
        },
        Headers: operations.BatchGetFieldHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.BatchGetFieldRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "fuga",
                },
                shared.FieldIdentifier{
                    ID: "facilis",
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