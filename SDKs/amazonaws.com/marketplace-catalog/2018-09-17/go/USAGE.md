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
            Catalog: "error",
            ChangeSetID: "voluptatem",
        },
        Headers: operations.CancelChangeSetHeaders{
            XAmzAlgorithm: "quia",
            XAmzContentSha256: "enim",
            XAmzCredential: "aut",
            XAmzDate: "impedit",
            XAmzSecurityToken: "ratione",
            XAmzSignature: "adipisci",
            XAmzSignedHeaders: "eius",
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