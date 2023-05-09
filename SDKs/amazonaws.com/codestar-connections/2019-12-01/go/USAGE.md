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
    res, err := s.CreateConnection(ctx, operations.CreateConnectionRequest{
        CreateConnectionInput: shared.CreateConnectionInput{
            ConnectionName: "corrupti",
            HostArn: sdk.String("provident"),
            ProviderType: shared.ProviderTypeEnumGitHubEnterpriseServer.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.CreateConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->