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
    
    req := operations.ConnectionSettingsAllRequest{
        Security: operations.ConnectionSettingsAllSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.ConnectionSettingsAllPathParams{
            Resource: "aperiam",
            ServiceID: "facilis",
            UnifiedAPI: "eum",
        },
        Headers: operations.ConnectionSettingsAllHeaders{
            XApideckAppID: "atque",
            XApideckConsumerID: "recusandae",
        },
    }
    
    res, err := s.Connections.ConnectionSettingsAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->