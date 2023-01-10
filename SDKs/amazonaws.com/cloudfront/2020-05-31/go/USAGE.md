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
            TargetDistributionID: "voluptas",
        },
        QueryParams: operations.AssociateAlias20200531QueryParams{
            Alias: "necessitatibus",
        },
        Headers: operations.AssociateAlias20200531Headers{
            XAmzAlgorithm: "iure",
            XAmzContentSha256: "voluptate",
            XAmzCredential: "quaerat",
            XAmzDate: "aut",
            XAmzSecurityToken: "ullam",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "debitis",
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