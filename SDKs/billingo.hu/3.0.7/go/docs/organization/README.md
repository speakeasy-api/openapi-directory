# Organization

### Available Operations

* [GetOrganizationData](#getorganizationdata) - Retrieve a organization data.

## GetOrganizationData

Retrieves the data of organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organization.GetOrganizationData(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationData != nil {
        // handle response
    }
}
```
