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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "nulla",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "fuga",
                        ThingArn: "facilis",
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: "eum",
                        ThingArn: "iusto",
                    },
                },
                IntendedForQualification: false,
                IsLongDurationTest: false,
                Protocol: "MqttV3_1_1",
                RootGroup: "saepe",
                SuiteDefinitionName: "inventore",
            },
            Tags: map[string]string{
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
                "deleniti": "similique",
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