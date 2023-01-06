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
            ListenerArn: "in",
            Version: "2015-12-01",
        },
        Headers: operations.GetDeleteListenerHeaders{
            XAmzAlgorithm: "asperiores",
            XAmzContentSha256: "quo",
            XAmzCredential: "ea",
            XAmzDate: "soluta",
            XAmzSecurityToken: "tempora",
            XAmzSignature: "commodi",
            XAmzSignedHeaders: "blanditiis",
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