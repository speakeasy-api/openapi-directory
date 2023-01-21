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
    
    req := operations.CancelChangeSetRequest{
        QueryParams: operations.CancelChangeSetQueryParams{
            Catalog: "sit",
            ChangeSetID: "voluptas",
        },
        Headers: operations.CancelChangeSetHeaders{
            XAmzAlgorithm: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
        },
    }
    
    res, err := s.CancelChangeSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelChangeSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->