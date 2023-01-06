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
    
    req := operations.AssociateAlias20200531Request{
        PathParams: operations.AssociateAlias20200531PathParams{
            TargetDistributionID: "mollitia",
        },
        QueryParams: operations.AssociateAlias20200531QueryParams{
            Alias: "ad",
        },
        Headers: operations.AssociateAlias20200531Headers{
            XAmzAlgorithm: "error",
            XAmzContentSha256: "enim",
            XAmzCredential: "necessitatibus",
            XAmzDate: "non",
            XAmzSecurityToken: "nam",
            XAmzSignature: "in",
            XAmzSignedHeaders: "eum",
        },
    }
    
    res, err := s.AssociateAlias20200531(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->