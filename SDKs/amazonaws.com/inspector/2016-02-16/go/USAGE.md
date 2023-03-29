<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddAttributesToFindingsRequest{
        Headers: operations.AddAttributesToFindingsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "InspectorService.AddAttributesToFindings",
        },
        Request: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "fuga",
                    Value: "facilis",
                },
                shared.Attribute{
                    Key: "eum",
                    Value: "iusto",
                },
            },
            FindingArns: []string{
                "saepe",
                "inventore",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddAttributesToFindings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttributesToFindingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->