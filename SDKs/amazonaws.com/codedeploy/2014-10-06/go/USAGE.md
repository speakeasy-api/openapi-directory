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
    
    req := operations.AddTagsToOnPremisesInstancesRequest{
        Headers: operations.AddTagsToOnPremisesInstancesHeaders{
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "dolor",
            XAmzCredential: "consequatur",
            XAmzDate: "assumenda",
            XAmzSecurityToken: "occaecati",
            XAmzSignature: "veniam",
            XAmzSignedHeaders: "sed",
            XAmzTarget: "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
        },
        Request: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "explicabo",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ducimus",
                    Value: "et",
                },
            },
        },
    }
    
    res, err := s.AddTagsToOnPremisesInstances(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->