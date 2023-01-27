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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
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
            XApideckAppID: "voluptas",
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.DriveGroupInput{
            Description: "consequuntur",
            DisplayName: "dolor",
            Name: "expedita",
        },
    }
    
    res, err := s.DriveGroups.DriveGroupsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDriveGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->