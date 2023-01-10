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
    
    req := operations.GetBuildSuggestersRequest{
        QueryParams: operations.GetBuildSuggestersQueryParams{
            Action: "BuildSuggesters",
            DomainName: "quaerat",
            Version: "2013-01-01",
        },
        Headers: operations.GetBuildSuggestersHeaders{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "consectetur",
            XAmzCredential: "ducimus",
            XAmzDate: "consequatur",
            XAmzSecurityToken: "non",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "at",
        },
    }
    
    res, err := s.GetBuildSuggesters(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->