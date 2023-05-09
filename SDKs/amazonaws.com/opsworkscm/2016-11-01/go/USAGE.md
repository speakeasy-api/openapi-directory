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
    res, err := s.AssociateNode(ctx, operations.AssociateNodeRequest{
        AssociateNodeRequest: shared.AssociateNodeRequest{
            EngineAttributes: []shared.EngineAttribute{
                shared.EngineAttribute{
                    Name: sdk.String("Kelvin Sporer"),
                    Value: sdk.String("corrupti"),
                },
                shared.EngineAttribute{
                    Name: sdk.String("Ben Mueller"),
                    Value: sdk.String("iure"),
                },
                shared.EngineAttribute{
                    Name: sdk.String("Raquel Bednar"),
                    Value: sdk.String("suscipit"),
                },
            },
            NodeName: "molestiae",
            ServerName: "minus",
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.AssociateNodeXAmzTargetEnumOpsWorksCmV20161101AssociateNode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateNodeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->