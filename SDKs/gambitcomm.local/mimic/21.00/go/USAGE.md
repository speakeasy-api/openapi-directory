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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessAdd(ctx, operations.AccessAddRequest{
        Agents: "corrupti",
        Mask: "provident",
        User: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->