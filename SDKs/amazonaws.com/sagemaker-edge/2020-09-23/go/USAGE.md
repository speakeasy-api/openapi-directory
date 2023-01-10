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
            XAmzAlgorithm: "quos",
            XAmzContentSha256: "quam",
            XAmzCredential: "quam",
            XAmzDate: "totam",
            XAmzSecurityToken: "omnis",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "neque",
        },
        Request: operations.GetDeviceRegistrationRequestBody{
            DeviceFleetName: "officia",
            DeviceName: "quo",
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