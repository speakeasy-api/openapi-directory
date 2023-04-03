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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    req := operations.CreateAttachmentForObjectRequest{
        AttachmentRequest: shared.AttachmentRequest{
            ConnectToApp: false,
            File: &shared.AttachmentRequestFile{
                Content: []byte("corrupti"),
                File: "provident",
            },
            Name: "distinctio",
            Parent: "quibusdam",
            ResourceSubtype: "external",
            URL: "unde",
        },
        OptFields: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        OptPretty: false,
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