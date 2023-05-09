<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompleteAttachmentUpload(ctx, operations.CompleteAttachmentUploadRequest{
        RequestBody: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClientToken: "unde",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzBearer: "corrupti",
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteAttachmentUploadResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->