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
            XAmzAlgorithm: "quod",
            XAmzContentSha256: "impedit",
            XAmzCredential: "nostrum",
            XAmzDate: "repudiandae",
            XAmzSecurityToken: "dicta",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "ea",
            XAmzTarget: "InspectorService.AddAttributesToFindings",
        },
        Request: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "deleniti",
                    Value: "omnis",
                },
                shared.Attribute{
                    Key: "eius",
                    Value: "consequuntur",
                },
            },
            FindingArns: []string{
                "laudantium",
                "similique",
                "ullam",
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