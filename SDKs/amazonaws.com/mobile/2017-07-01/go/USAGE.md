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

    req := operations.CreateProjectRequest{
        QueryParams: operations.CreateProjectQueryParams{
            Name: "unde",
            Region: "deserunt",
            SnapshotID: "porro",
        },
        Headers: operations.CreateProjectHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.CreateProjectRequestBody{
            Contents: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.CreateProject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->