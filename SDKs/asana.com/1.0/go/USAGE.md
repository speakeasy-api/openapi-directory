<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.CreateAttachmentForObject(ctx, operations.CreateAttachmentForObjectRequest{
        AttachmentRequest: shared.AttachmentRequest{
            ConnectToApp: sdk.Bool(false),
            File: &shared.AttachmentRequestFile{
                Content: []byte("corrupti"),
                File: "provident",
            },
            Name: sdk.String("Ellis Mitchell"),
            Parent: sdk.String("illum"),
            ResourceSubtype: shared.AttachmentRequestResourceSubtypeEnumExternal.ToPointer(),
            URL: sdk.String("vel"),
        },
        OptFields: []string{
            "deserunt",
            "suscipit",
            "iure",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->