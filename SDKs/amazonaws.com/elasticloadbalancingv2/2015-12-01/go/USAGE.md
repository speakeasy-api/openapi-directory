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
    
    req := operations.GetDeleteListenerRequest{
        QueryParams: operations.GetDeleteListenerQueryParams{
            Action: "DeleteListener",
            ListenerArn: "voluptate",
            Version: "2015-12-01",
        },
        Headers: operations.GetDeleteListenerHeaders{
            XAmzAlgorithm: "autem",
            XAmzContentSha256: "sed",
            XAmzCredential: "voluptas",
            XAmzDate: "adipisci",
            XAmzSecurityToken: "exercitationem",
            XAmzSignature: "deserunt",
            XAmzSignedHeaders: "ex",
        },
    }
    
    res, err := s.GetDeleteListener(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->