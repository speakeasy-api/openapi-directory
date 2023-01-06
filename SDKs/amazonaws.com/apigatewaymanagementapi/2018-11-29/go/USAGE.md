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
    
    req := operations.DeleteConnectionRequest{
        PathParams: operations.DeleteConnectionPathParams{
            ConnectionID: "explicabo",
        },
        Headers: operations.DeleteConnectionHeaders{
            XAmzAlgorithm: "necessitatibus",
            XAmzContentSha256: "veniam",
            XAmzCredential: "qui",
            XAmzDate: "in",
            XAmzSecurityToken: "odit",
            XAmzSignature: "molestias",
            XAmzSignedHeaders: "corporis",
        },
    }
    
    res, err := s.DeleteConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->