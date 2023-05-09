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
    res, err := s.AddStorageSystem(ctx, operations.AddStorageSystemRequest{
        AddStorageSystemRequest: shared.AddStorageSystemRequest{
            AgentArns: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            ClientToken: "unde",
            CloudWatchLogGroupArn: sdk.String("nulla"),
            Credentials: shared.Credentials{
                Password: "corrupti",
                Username: "illum",
            },
            Name: sdk.String("Sabrina Oberbrunner"),
            ServerConfiguration: shared.DiscoveryServerConfiguration{
                ServerHostname: "magnam",
                ServerPort: sdk.Int64(891773),
            },
            SystemType: shared.DiscoverySystemTypeEnumNetAppOntap,
            Tags: []shared.TagListEntry{
                shared.TagListEntry{
                    Key: "delectus",
                    Value: sdk.String("tempora"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.AddStorageSystemXAmzTargetEnumFmrsServiceAddStorageSystem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddStorageSystemResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->