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
            Name: "explicabo",
            Region: "id",
            SnapshotID: "blanditiis",
        },
        Headers: operations.CreateProjectHeaders{
            XAmzAlgorithm: "explicabo",
            XAmzContentSha256: "voluptate",
            XAmzCredential: "exercitationem",
            XAmzDate: "et",
            XAmzSecurityToken: "qui",
            XAmzSignature: "odit",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.CreateProjectRequestBody{
            Contents: "et",
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