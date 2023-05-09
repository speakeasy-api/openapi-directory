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
    res, err := s.CreateEnvironmentEc2(ctx, operations.CreateEnvironmentEc2Request{
        CreateEnvironmentEc2Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: sdk.Int64(548814),
            ClientRequestToken: sdk.String("provident"),
            ConnectionType: shared.ConnectionTypeEnumConnectSsm.ToPointer(),
            Description: sdk.String("quibusdam"),
            DryRun: sdk.Bool(false),
            ImageID: sdk.String("unde"),
            InstanceType: "nulla",
            Name: "Dallas Kassulke",
            OwnerArn: sdk.String("suscipit"),
            SubnetID: sdk.String("iure"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "tempora",
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
        XAmzTarget: operations.CreateEnvironmentEc2XAmzTargetEnumAwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentEc2Result != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->