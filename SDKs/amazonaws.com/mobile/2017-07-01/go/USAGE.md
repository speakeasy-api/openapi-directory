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
    
    req := operations.CreateProjectRequest{
        QueryParams: operations.CreateProjectQueryParams{
            Name: "sit",
            Region: "voluptas",
            SnapshotID: "culpa",
        },
        Headers: operations.CreateProjectHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "dolor",
            XAmzDate: "expedita",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "fugit",
            XAmzSignedHeaders: "et",
        },
        Request: operations.CreateProjectRequestBody{
            Contents: "nihil",
        },
    }
    
    res, err := s.CreateProject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->