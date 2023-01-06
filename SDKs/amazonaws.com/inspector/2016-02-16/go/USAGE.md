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
    
    req := operations.AddAttributesToFindingsRequest{
        Headers: operations.AddAttributesToFindingsHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "necessitatibus",
            XAmzCredential: "iure",
            XAmzDate: "voluptate",
            XAmzSecurityToken: "quaerat",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "ullam",
            XAmzTarget: "InspectorService.AddAttributesToFindings",
        },
        Request: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "nihil",
                    Value: "magni",
                },
            },
            FindingArns: []string{
                "excepturi",
            },
        },
    }
    
    res, err := s.AddAttributesToFindings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttributesToFindingsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->