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
            Name: "magnam",
            Region: "similique",
            SnapshotID: "fuga",
        },
        Headers: operations.CreateProjectHeaders{
            XAmzAlgorithm: "voluptatem",
            XAmzContentSha256: "officia",
            XAmzCredential: "iure",
            XAmzDate: "at",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "nobis",
        },
        Request: operations.CreateProjectRequestBody{
            Contents: "vero",
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