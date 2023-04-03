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

    req := shared.PreSignRequest{
        FileExtension: "pdf",
        MediaType: "application/pdf",
    }

    ctx := context.Background()
    res, err := s.Attachments.PostRmmPreSignAttachment(ctx, req, operations.PostRmmPreSignAttachmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreSignInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->