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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                ApplicationID: shared.SchemeApplicationID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteProxyRequest{
        Security: operations.DeleteProxySecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.DeleteProxyHeaders{
            XApideckAppID: "ullam",
            XApideckConsumerID: "id",
            XApideckDownstreamAuthorization: "temporibus",
            XApideckDownstreamURL: "ipsam",
            XApideckServiceID: "eum",
        },
    }
    
    res, err := s.Execute.DeleteProxy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProxy200ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->