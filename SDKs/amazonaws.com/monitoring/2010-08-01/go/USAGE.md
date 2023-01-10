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
    
    req := operations.GetDeleteAlarmsRequest{
        QueryParams: operations.GetDeleteAlarmsQueryParams{
            Action: "DeleteAlarms",
            AlarmNames: []string{
                "omnis",
                "illum",
            },
            Version: "2010-08-01",
        },
        Headers: operations.GetDeleteAlarmsHeaders{
            XAmzAlgorithm: "dolores",
            XAmzContentSha256: "harum",
            XAmzCredential: "neque",
            XAmzDate: "eligendi",
            XAmzSecurityToken: "et",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "fugiat",
        },
    }
    
    res, err := s.GetDeleteAlarms(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->