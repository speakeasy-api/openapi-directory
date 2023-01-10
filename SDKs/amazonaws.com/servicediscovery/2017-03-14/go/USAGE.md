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
            XAmzAlgorithm: "sapiente",
            XAmzContentSha256: "at",
            XAmzCredential: "fuga",
            XAmzDate: "dicta",
            XAmzSecurityToken: "optio",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "eum",
            XAmzTarget: "Route53AutoNaming_v20170314.CreateHttpNamespace",
        },
        Request: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: "non",
            Description: "corrupti",
            Name: "nam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "adipisci",
                    Value: "enim",
                },
                shared.Tag{
                    Key: "laborum",
                    Value: "rerum",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "sequi",
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