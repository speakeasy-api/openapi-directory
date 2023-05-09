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
    res, err := s.CreateSuiteDefinition(ctx, operations.CreateSuiteDefinitionRequest{
        RequestBody: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: sdk.String("corrupti"),
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("distinctio"),
                        ThingArn: sdk.String("quibusdam"),
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("unde"),
                        ThingArn: sdk.String("nulla"),
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: sdk.String("corrupti"),
                        ThingArn: sdk.String("illum"),
                    },
                },
                IntendedForQualification: sdk.Bool(false),
                IsLongDurationTest: sdk.Bool(false),
                Protocol: shared.ProtocolEnumMqttV311.ToPointer(),
                RootGroup: sdk.String("error"),
                SuiteDefinitionName: sdk.String("deserunt"),
            },
            Tags: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSuiteDefinitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->