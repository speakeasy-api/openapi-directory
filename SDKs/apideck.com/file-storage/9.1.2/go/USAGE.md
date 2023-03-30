<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DriveGroupsAddRequest{
        Security: operations.DriveGroupsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.DriveGroupsAddQueryParams{
            Raw: false,
        },
        Headers: operations.DriveGroupsAddHeaders{
            XApideckAppID: "unde",
            XApideckConsumerID: "deserunt",
            XApideckServiceID: "porro",
        },
        Request: shared.DriveGroupInput{
            Description: "A description",
            DisplayName: "accounting",
            Name: "accounting",
        },
    }

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDriveGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->