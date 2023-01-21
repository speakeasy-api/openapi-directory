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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: &operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "voluptas",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "et",
                        ThingArn: "nihil",
                    },
                },
                IntendedForQualification: true,
                RootGroup: "dicta",
                SuiteDefinitionName: "debitis",
            },
            Tags: map[string]string{
                "et": "ut",
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