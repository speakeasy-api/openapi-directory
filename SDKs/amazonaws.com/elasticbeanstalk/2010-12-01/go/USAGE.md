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
    
    req := operations.GetAbortEnvironmentUpdateRequest{
        QueryParams: operations.GetAbortEnvironmentUpdateQueryParams{
            Action: "AbortEnvironmentUpdate",
            EnvironmentID: "voluptas",
            EnvironmentName: "facilis",
            Version: "2010-12-01",
        },
        Headers: operations.GetAbortEnvironmentUpdateHeaders{
            XAmzAlgorithm: "sunt",
            XAmzContentSha256: "quis",
            XAmzCredential: "qui",
            XAmzDate: "aut",
            XAmzSecurityToken: "temporibus",
            XAmzSignature: "nemo",
            XAmzSignedHeaders: "ea",
        },
    }
    
    res, err := s.GetAbortEnvironmentUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->