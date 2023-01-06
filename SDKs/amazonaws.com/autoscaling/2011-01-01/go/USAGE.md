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
            AutoScalingGroupName: "eum",
            InstanceIds: []string{
                "ut",
                "similique",
            },
            Version: "2011-01-01",
        },
        Headers: operations.GetAttachInstancesHeaders{
            XAmzAlgorithm: "praesentium",
            XAmzContentSha256: "ipsa",
            XAmzCredential: "ipsa",
            XAmzDate: "rerum",
            XAmzSecurityToken: "iure",
            XAmzSignature: "rem",
            XAmzSignedHeaders: "dolore",
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