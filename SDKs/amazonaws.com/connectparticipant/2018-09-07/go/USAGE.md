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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CompleteAttachmentUploadRequest{
        RequestBody: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClientToken: "unde",
        },
        XAmzAlgorithm: "nulla",
        XAmzBearer: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
    }

    ctx := context.Background()
    res, err := s.CompleteAttachmentUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteAttachmentUploadResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->