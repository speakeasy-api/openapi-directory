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
            Name: "corrupti",
            Region: "provident",
            SnapshotID: "distinctio",
        },
        Headers: operations.CreateProjectHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
        Request: operations.CreateProjectRequestBody{
            Contents: "deserunt",
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