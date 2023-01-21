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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
        },
        Request: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "et",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "rerum",
                    Value: "dicta",
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