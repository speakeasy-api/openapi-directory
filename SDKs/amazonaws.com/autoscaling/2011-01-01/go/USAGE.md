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
    
    req := operations.GetAttachInstancesRequest{
        QueryParams: operations.GetAttachInstancesQueryParams{
            Action: "AttachInstances",
            AutoScalingGroupName: "voluptas",
            InstanceIds: []string{
                "expedita",
                "consequuntur",
            },
            Version: "2011-01-01",
        },
        Headers: operations.GetAttachInstancesHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "fugit",
            XAmzDate: "et",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "rerum",
            XAmzSignedHeaders: "dicta",
        },
    }
    
    res, err := s.GetAttachInstances(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->