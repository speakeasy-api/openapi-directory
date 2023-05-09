# User

### Available Operations

* [GetUserProjects](#getuserprojects) - List all active projects for the user

## GetUserProjects

List all active projects for the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUserProjects(ctx, operations.GetUserProjectsRequest{
        Page: sdk.Int64(798047),
        Size: sdk.Int64(885338),
        Username: "Christophe.Parisian68",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserProjects200ApplicationJSONObject != nil {
        // handle response
    }
}
```
