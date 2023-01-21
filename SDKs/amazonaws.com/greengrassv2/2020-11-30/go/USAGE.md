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
            CoreDeviceThingName: "sit",
        },
        Headers: operations.BatchAssociateClientDeviceWithCoreDeviceHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody{
            Entries: []shared.AssociateClientDeviceWithCoreDeviceEntry{
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "et",
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