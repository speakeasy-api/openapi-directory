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
                PersonalAccessToken: &shared.SchemePersonalAccessToken{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAttachmentForTaskRequest{
        PathParams: operations.CreateAttachmentForTaskPathParams{
            TaskGid: "sit",
        },
        QueryParams: operations.CreateAttachmentForTaskQueryParams{
            Limit: 2259404117704393152,
            Offset: "culpa",
            OptFields: []string{
                "consequuntur",
                "dolor",
            },
            OptPretty: true,
        },
        Request: shared.AttachmentRequest{
            File: &shared.AttachmentRequestFile{
                Content: []byte("voluptas"),
                File: "fugit",
            },
            Name: "et",
            ResourceSubtype: "asana_file_attachments",
            URL: "rerum",
        },
    }
    
    res, err := s.Attachments.CreateAttachmentForTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForTask200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->