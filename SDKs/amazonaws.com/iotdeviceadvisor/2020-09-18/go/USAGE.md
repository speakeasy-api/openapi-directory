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
            XAmzAlgorithm: "optio",
            XAmzContentSha256: "at",
            XAmzCredential: "a",
            XAmzDate: "rerum",
            XAmzSecurityToken: "repudiandae",
            XAmzSignature: "praesentium",
            XAmzSignedHeaders: "tempora",
        },
        Request: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: &operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "est",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "dignissimos",
                        ThingArn: "et",
                    },
                },
                IntendedForQualification: true,
                RootGroup: "vitae",
                SuiteDefinitionName: "ipsum",
            },
            Tags: map[string]string{
                "magni": "expedita",
                "ea": "dolor",
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