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
    
    req := operations.BatchAssociateClientDeviceWithCoreDeviceRequest{
        PathParams: operations.BatchAssociateClientDeviceWithCoreDevicePathParams{
            CoreDeviceThingName: "libero",
        },
        Headers: operations.BatchAssociateClientDeviceWithCoreDeviceHeaders{
            XAmzAlgorithm: "saepe",
            XAmzContentSha256: "et",
            XAmzCredential: "corporis",
            XAmzDate: "a",
            XAmzSecurityToken: "illum",
            XAmzSignature: "numquam",
            XAmzSignedHeaders: "dolores",
        },
        Request: operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody{
            Entries: []shared.AssociateClientDeviceWithCoreDeviceEntry{
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "voluptatibus",
                },
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "sint",
                },
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "expedita",
                },
            },
        },
    }
    
    res, err := s.BatchAssociateClientDeviceWithCoreDevice(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateClientDeviceWithCoreDeviceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->