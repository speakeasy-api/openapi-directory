<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, operations.DriveGroupsAddRequest{
        DriveGroupInput: shared.DriveGroupInput{
            Description: sdk.String("A description"),
            DisplayName: sdk.String("accounting"),
            Name: "accounting",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckServiceID: sdk.String("distinctio"),
    }, operations.DriveGroupsAddSecurity{
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