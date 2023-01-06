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
    
    req := operations.GetDeviceRegistrationRequest{
        Headers: operations.GetDeviceRegistrationHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "maxime",
            XAmzCredential: "error",
            XAmzDate: "exercitationem",
            XAmzSecurityToken: "quisquam",
            XAmzSignature: "maiores",
            XAmzSignedHeaders: "quaerat",
        },
        Request: operations.GetDeviceRegistrationRequestBody{
            DeviceFleetName: "earum",
            DeviceName: "alias",
        },
    }
    
    res, err := s.GetDeviceRegistration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceRegistrationResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->