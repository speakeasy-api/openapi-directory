# Group

### Available Operations

* [CreateGroupIfNotExistsForUsingGET](#creategroupifnotexistsforusingget) - this functions helps you to map your application group ids to Etherpad group ids
* [CreateGroupIfNotExistsForUsingPOST](#creategroupifnotexistsforusingpost) - this functions helps you to map your application group ids to Etherpad group ids
* [CreateGroupPadUsingGET](#creategrouppadusingget) - creates a new pad in this group
* [CreateGroupPadUsingPOST](#creategrouppadusingpost) - creates a new pad in this group
* [CreateGroupUsingGET](#creategroupusingget) - creates a new group
* [CreateGroupUsingPOST](#creategroupusingpost) - creates a new group
* [DeleteGroupUsingGET](#deletegroupusingget) - deletes a group
* [DeleteGroupUsingPOST](#deletegroupusingpost) - deletes a group
* [ListAllGroupsUsingGET](#listallgroupsusingget)
* [ListAllGroupsUsingPOST](#listallgroupsusingpost)
* [ListPadsUsingGET](#listpadsusingget) - returns all pads of this group
* [ListPadsUsingPOST](#listpadsusingpost) - returns all pads of this group
* [ListSessionsOfGroupUsingGET](#listsessionsofgroupusingget)
* [ListSessionsOfGroupUsingPOST](#listsessionsofgroupusingpost)

## CreateGroupIfNotExistsForUsingGET

this functions helps you to map your application group ids to Etherpad group ids

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.CreateGroupIfNotExistsForUsingGET(ctx, operations.CreateGroupIfNotExistsForUsingGETRequest{
        GroupMapper: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupIfNotExistsForUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGroupIfNotExistsForUsingPOST

this functions helps you to map your application group ids to Etherpad group ids

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.CreateGroupIfNotExistsForUsingPOST(ctx, operations.CreateGroupIfNotExistsForUsingPOSTRequest{
        GroupMapper: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupIfNotExistsForUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGroupPadUsingGET

creates a new pad in this group

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.CreateGroupPadUsingGET(ctx, operations.CreateGroupPadUsingGETRequest{
        GroupID: sdk.String("laboriosam"),
        PadName: sdk.String("hic"),
        Text: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupPadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGroupPadUsingPOST

creates a new pad in this group

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.CreateGroupPadUsingPOST(ctx, operations.CreateGroupPadUsingPOSTRequest{
        GroupID: sdk.String("fuga"),
        PadName: sdk.String("in"),
        Text: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupPadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGroupUsingGET

creates a new group

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
    res, err := s.Group.CreateGroupUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGroupUsingPOST

creates a new group

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
    res, err := s.Group.CreateGroupUsingPOST(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteGroupUsingGET

deletes a group

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.DeleteGroupUsingGET(ctx, operations.DeleteGroupUsingGETRequest{
        GroupID: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteGroupUsingPOST

deletes a group

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.DeleteGroupUsingPOST(ctx, operations.DeleteGroupUsingPOSTRequest{
        GroupID: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAllGroupsUsingGET

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
    res, err := s.Group.ListAllGroupsUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllGroupsUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAllGroupsUsingPOST

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
    res, err := s.Group.ListAllGroupsUsingPOST(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllGroupsUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPadsUsingGET

returns all pads of this group

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.ListPadsUsingGET(ctx, operations.ListPadsUsingGETRequest{
        GroupID: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPadsUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPadsUsingPOST

returns all pads of this group

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.ListPadsUsingPOST(ctx, operations.ListPadsUsingPOSTRequest{
        GroupID: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPadsUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListSessionsOfGroupUsingGET

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.ListSessionsOfGroupUsingGET(ctx, operations.ListSessionsOfGroupUsingGETRequest{
        GroupID: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSessionsOfGroupUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListSessionsOfGroupUsingPOST

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Group.ListSessionsOfGroupUsingPOST(ctx, operations.ListSessionsOfGroupUsingPOSTRequest{
        GroupID: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSessionsOfGroupUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```
