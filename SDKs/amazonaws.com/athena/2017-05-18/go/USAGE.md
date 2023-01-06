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
    
    req := operations.BatchGetNamedQueryRequest{
        Headers: operations.BatchGetNamedQueryHeaders{
            XAmzAlgorithm: "maxime",
            XAmzContentSha256: "libero",
            XAmzCredential: "qui",
            XAmzDate: "ea",
            XAmzSecurityToken: "porro",
            XAmzSignature: "labore",
            XAmzSignedHeaders: "dolore",
            XAmzTarget: "AmazonAthena.BatchGetNamedQuery",
        },
        Request: shared.BatchGetNamedQueryInput{
            NamedQueryIds: []string{
                "et",
                "omnis",
                "ut",
            },
        },
    }
    
    res, err := s.BatchGetNamedQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetNamedQueryOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->