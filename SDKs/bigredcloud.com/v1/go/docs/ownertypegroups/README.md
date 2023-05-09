# OwnerTypeGroups

### Available Operations

* [OwnerTypeGroupsGet](#ownertypegroupsget) - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## OwnerTypeGroupsGet

Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OwnerTypeGroups.OwnerTypeGroupsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultOwnerTypeGroupDto != nil {
        // handle response
    }
}
```
