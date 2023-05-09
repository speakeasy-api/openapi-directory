# Organizations

## Overview

With these endpoints you can get useful information about your Organizations.
This also can be used to manage your [Products](#tag/Products).

<a href="https://configcat.com/docs/organization/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the Organizations.

### Available Operations

* [GetOrganizations](#getorganizations) - List Organizations

## GetOrganizations

This endpoint returns the list of the Organizations that belongs to the user.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrganizations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationModelHaljsons != nil {
        // handle response
    }
}
```
