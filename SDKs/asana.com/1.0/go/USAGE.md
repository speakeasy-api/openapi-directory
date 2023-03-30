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
            Oauth2: &shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.CreateAttachmentForObjectRequest{
        QueryParams: operations.CreateAttachmentForObjectQueryParams{
            OptFields: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            OptPretty: false,
        },
        Request: shared.AttachmentRequest{
            ConnectToApp: false,
            File: &shared.AttachmentRequestFile{
                Content: []byte("unde"),
                File: "nulla",
            },
            Name: "corrupti",
            Parent: "illum",
            ResourceSubtype: "external",
            URL: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.Attachments.CreateAttachmentForObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->