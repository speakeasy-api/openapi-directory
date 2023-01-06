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
    
    req := operations.CompleteAttachmentUploadRequest{
        Headers: operations.CompleteAttachmentUploadHeaders{
            XAmzAlgorithm: "nisi",
            XAmzBearer: "nulla",
            XAmzContentSha256: "et",
            XAmzCredential: "autem",
            XAmzDate: "est",
            XAmzSecurityToken: "soluta",
            XAmzSignature: "laudantium",
            XAmzSignedHeaders: "quia",
        },
        Request: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "ex",
                "cum",
                "vel",
            },
            ClientToken: "sunt",
        },
    }
    
    res, err := s.CompleteAttachmentUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteAttachmentUploadResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->