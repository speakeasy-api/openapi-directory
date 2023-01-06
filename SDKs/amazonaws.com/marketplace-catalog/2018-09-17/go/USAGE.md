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
            Catalog: "ad",
            ChangeSetID: "voluptatem",
        },
        Headers: operations.CancelChangeSetHeaders{
            XAmzAlgorithm: "accusantium",
            XAmzContentSha256: "et",
            XAmzCredential: "sunt",
            XAmzDate: "ratione",
            XAmzSecurityToken: "quidem",
            XAmzSignature: "exercitationem",
            XAmzSignedHeaders: "iure",
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