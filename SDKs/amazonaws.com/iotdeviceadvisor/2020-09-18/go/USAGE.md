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

    req := operations.CreateSuiteDefinitionRequest{
        Headers: operations.CreateSuiteDefinitionHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "illum",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "error",
                        ThingArn: "deserunt",
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: "suscipit",
                        ThingArn: "iure",
                    },
                },
                IntendedForQualification: false,
                IsLongDurationTest: false,
                Protocol: "MqttV3_1_1",
                RootGroup: "debitis",
                SuiteDefinitionName: "ipsa",
            },
            Tags: map[string]string{
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
                "iusto": "excepturi",
            },
        },
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