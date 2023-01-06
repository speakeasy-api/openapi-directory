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
            XAmzAlgorithm: "nihil",
            XAmzContentSha256: "perferendis",
            XAmzCredential: "odit",
            XAmzDate: "autem",
            XAmzSecurityToken: "dolore",
            XAmzSignature: "aliquam",
            XAmzSignedHeaders: "soluta",
            XAmzTarget: "Route53AutoNaming_v20170314.CreateHttpNamespace",
        },
        Request: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: "vel",
            Description: "aut",
            Name: "accusamus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quisquam",
                    Value: "nihil",
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