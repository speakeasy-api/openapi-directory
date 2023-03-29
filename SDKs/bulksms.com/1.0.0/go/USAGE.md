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
    s := sdk.New()

    req := operations.PostRmmPreSignAttachmentRequest{
        Security: operations.PostRmmPreSignAttachmentSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: shared.PreSignRequest{
            FileExtension: "pdf",
            MediaType: "application/pdf",
        },
    }

    ctx := context.Background()
    res, err := s.Attachments.PostRmmPreSignAttachment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreSignInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->