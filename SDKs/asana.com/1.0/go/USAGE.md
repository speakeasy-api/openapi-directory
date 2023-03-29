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

    req := operations.CreateAttachmentForTaskRequest{
        PathParams: operations.CreateAttachmentForTaskPathParams{
            TaskGid: "unde",
        },
        QueryParams: operations.CreateAttachmentForTaskQueryParams{
            Limit: 592845,
            Offset: "porro",
            OptFields: []string{
                "id",
                "vero",
                "perspiciatis",
                "nulla",
            },
            OptPretty: false,
        },
        Request: shared.AttachmentRequest{
            File: &shared.AttachmentRequestFile{
                Content: []byte("nihil"),
                File: "fuga",
            },
            Name: "facilis",
            ResourceSubtype: "asana_file_attachments",
            URL: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Attachments.CreateAttachmentForTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForTask200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->