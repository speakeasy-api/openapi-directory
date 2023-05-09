<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddAttributesToFindings(ctx, operations.AddAttributesToFindingsRequest{
        AddAttributesToFindingsRequest: shared.AddAttributesToFindingsRequest{
            Attributes: []shared.Attribute{
                shared.Attribute{
                    Key: "provident",
                    Value: sdk.String("distinctio"),
                },
                shared.Attribute{
                    Key: "quibusdam",
                    Value: sdk.String("unde"),
                },
                shared.Attribute{
                    Key: "nulla",
                    Value: sdk.String("corrupti"),
                },
            },
            FindingArns: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.AddAttributesToFindingsXAmzTargetEnumInspectorServiceAddAttributesToFindings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttributesToFindingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->