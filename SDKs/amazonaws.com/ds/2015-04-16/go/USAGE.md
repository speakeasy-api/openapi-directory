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
    
    req := operations.AcceptSharedDirectoryRequest{
        Headers: operations.AcceptSharedDirectoryHeaders{
            XAmzAlgorithm: "rerum",
            XAmzContentSha256: "dicta",
            XAmzCredential: "debitis",
            XAmzDate: "voluptatum",
            XAmzSecurityToken: "et",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "dolorem",
            XAmzTarget: "DirectoryService_20150416.AcceptSharedDirectory",
        },
        Request: shared.AcceptSharedDirectoryRequest{
            SharedDirectoryID: "voluptate",
        },
    }
    
    res, err := s.AcceptSharedDirectory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptSharedDirectoryResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->