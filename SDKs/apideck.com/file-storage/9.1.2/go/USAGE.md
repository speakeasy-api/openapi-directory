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
        DriveGroupInput: shared.DriveGroupInput{
            Description: "A description",
            DisplayName: "accounting",
            Name: "accounting",
        },
        Raw: false,
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckServiceID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, req, operations.DriveGroupsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDriveGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->