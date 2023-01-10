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
            ConnectionID: "magni",
        },
        Headers: operations.DeleteConnectionHeaders{
            XAmzAlgorithm: "recusandae",
            XAmzContentSha256: "illum",
            XAmzCredential: "consequatur",
            XAmzDate: "dolores",
            XAmzSecurityToken: "hic",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "explicabo",
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