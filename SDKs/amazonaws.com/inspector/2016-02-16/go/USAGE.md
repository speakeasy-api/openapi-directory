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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "InspectorService.AddAttributesToFindings",
        },
        Request: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "et",
                    Value: "nihil",
                },
            },
            FindingArns: []string{
                "dicta",
                "debitis",
                "voluptatum",
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