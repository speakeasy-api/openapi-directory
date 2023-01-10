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
    
    req := operations.AssignInstanceRequest{
        Headers: operations.AssignInstanceHeaders{
            XAmzAlgorithm: "vel",
            XAmzContentSha256: "itaque",
            XAmzCredential: "ut",
            XAmzDate: "ut",
            XAmzSecurityToken: "unde",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "fuga",
            XAmzTarget: "OpsWorks_20130218.AssignInstance",
        },
        Request: shared.AssignInstanceRequest{
            InstanceID: "repellendus",
            LayerIds: []string{
                "repudiandae",
                "voluptates",
            },
        },
    }
    
    res, err := s.AssignInstance(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->