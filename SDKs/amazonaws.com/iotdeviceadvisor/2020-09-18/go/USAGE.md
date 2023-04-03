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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateSuiteDefinitionRequest{
        RequestBody: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "corrupti",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "distinctio",
                        ThingArn: "quibusdam",
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: "unde",
                        ThingArn: "nulla",
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: "corrupti",
                        ThingArn: "illum",
                    },
                },
                IntendedForQualification: false,
                IsLongDurationTest: false,
                Protocol: "MqttV3_1_1",
                RootGroup: "error",
                SuiteDefinitionName: "deserunt",
            },
            Tags: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.CreateSuiteDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSuiteDefinitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->