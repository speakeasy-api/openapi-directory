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
            Raw: true,
        },
        Headers: operations.DriveGroupsAddHeaders{
            XApideckAppID: "deleniti",
            XApideckConsumerID: "ut",
            XApideckServiceID: "corporis",
        },
        Request: shared.DriveGroupInput{
            Description: "enim",
            DisplayName: "quia",
            Name: "autem",
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