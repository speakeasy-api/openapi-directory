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

    req := operations.CompleteAttachmentUploadRequest{
        Headers: operations.CompleteAttachmentUploadHeaders{
            XAmzAlgorithm: "unde",
            XAmzBearer: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "fuga",
                "facilis",
            },
            ClientToken: "eum",
        },
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