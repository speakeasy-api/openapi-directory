<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateSuiteDefinitionRequest{
        Headers: operations.CreateSuiteDefinitionHeaders{
            XAmzAlgorithm: "quia",
            XAmzContentSha256: "cupiditate",
            XAmzCredential: "sed",
            XAmzDate: "maxime",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "consequatur",
            XAmzSignedHeaders: "excepturi",
        },
        Request: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: &operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "ut",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "sit",
                        ThingArn: "aliquid",
                    },
                },
                IntendedForQualification: false,
                RootGroup: "itaque",
                SuiteDefinitionName: "fuga",
            },
            Tags: map[string]string{
                "accusantium": "vel",
            },
        },
    }
    
    res, err := s.CreateSuiteDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSuiteDefinitionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->