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
            CoreDeviceThingName: "veniam",
        },
        Headers: operations.BatchAssociateClientDeviceWithCoreDeviceHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ut",
            XAmzCredential: "animi",
            XAmzDate: "atque",
            XAmzSecurityToken: "omnis",
            XAmzSignature: "unde",
            XAmzSignedHeaders: "repellat",
        },
        Request: operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody{
            Entries: []shared.AssociateClientDeviceWithCoreDeviceEntry{
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "tempore",
                },
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