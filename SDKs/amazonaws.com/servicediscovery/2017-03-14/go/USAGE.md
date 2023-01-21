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
    
    req := operations.CreateHTTPNamespaceRequest{
        Headers: operations.CreateHTTPNamespaceHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Route53AutoNaming_v20170314.CreateHttpNamespace",
        },
        Request: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: "fugit",
            Description: "et",
            Name: "nihil",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dicta",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "et",
                },
                shared.Tag{
                    Key: "ut",
                    Value: "dolorem",
                },
            },
        },
    }
    
    res, err := s.CreateHTTPNamespace(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHTTPNamespaceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->