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
                BasicAuth: shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.PostRmmPreSignAttachmentRequest{
        Security: operations.PostRmmPreSignAttachmentSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: shared.PreSignRequest{
            FileExtension: "sit",
            MediaType: "voluptas",
        },
    }
    
    res, err := s.Attachments.PostRmmPreSignAttachment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreSignInfo != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->