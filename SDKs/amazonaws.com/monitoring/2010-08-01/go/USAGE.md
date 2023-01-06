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
                "temporibus",
                "nemo",
                "ea",
            },
            Version: "2010-08-01",
        },
        Headers: operations.GetDeleteAlarmsHeaders{
            XAmzAlgorithm: "debitis",
            XAmzContentSha256: "vitae",
            XAmzCredential: "illo",
            XAmzDate: "dolor",
            XAmzSecurityToken: "aut",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "iusto",
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