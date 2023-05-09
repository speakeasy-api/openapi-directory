<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DeleteBusinessGroupsIDSpacesSpaceID(ctx, operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest{
        ID: "P18784",
        SpaceID: "P18784",
    }, operations.DeleteBusinessGroupsIDSpacesSpaceIDSecurity{
        GmaAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->