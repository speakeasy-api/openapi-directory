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
            TaskGid: "ea",
        },
        QueryParams: operations.CreateAttachmentForTaskQueryParams{
            Limit: 4146570165734796573,
            Offset: "a",
            OptFields: []string{
                "harum",
                "et",
            },
            OptPretty: true,
        },
        Request: shared.AttachmentRequest{
            File: &shared.AttachmentRequestFile{
                Content: []byte("ut"),
                File: "sed",
            },
            Name: "et",
            ResourceSubtype: "asana_file_attachments",
            URL: "facere",
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