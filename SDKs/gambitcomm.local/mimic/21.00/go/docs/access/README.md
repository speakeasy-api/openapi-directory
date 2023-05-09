# Access

### Available Operations

* [AccessAdd](#accessadd) - Adds/Overwrites the user entry in the access control database.
* [AccessDel](#accessdel) - Clears a users entry from access control database.
* [AccessGetAcldb](#accessgetacldb) - Returns the current access control database in use.
* [AccessGetAdmindir](#accessgetadmindir) - Returns the current admin directory.
* [AccessGetAdminuser](#accessgetadminuser) - Returns the current administrator.
* [AccessGetEnabled](#accessgetenabled) - Returns the state of access control checking.
* [AccessList](#accesslist) - Returns an array of entries.
* [AccessLoad](#accessload) - Loads the specified file for access control data.
* [AccessSave](#accesssave) - Saves current access control data in specified file.
* [AccessSetAcldb](#accesssetacldb) - Allows setting the name of the current access control database.
* [AccessSetEnabled](#accesssetenabled) - Allows the user to enable/disable the access control check.

## AccessAdd

Adds/Overwrites the user entry in the access control database.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessAdd(ctx, operations.AccessAddRequest{
        Agents: "quibusdam",
        Mask: "unde",
        User: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessDel

Using '*' for user clears all the users.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessDel(ctx, operations.AccessDelRequest{
        User: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessDel200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessGetAcldb

If nothing is specified then this returns "".

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
    res, err := s.Access.AccessGetAcldb(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessGetAcldb200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessGetAdmindir

If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )

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
    res, err := s.Access.AccessGetAdmindir(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessGetAdmindir200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessGetAdminuser

If nothing is specified in admin/settings.cfg then returns "".

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
    res, err := s.Access.AccessGetAdminuser(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessGetAdminuser200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessGetEnabled

0 indicates that it is disabled, 1 indicates it is enabled.

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
    res, err := s.Access.AccessGetEnabled(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessGetEnabled200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessList

Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).

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
    res, err := s.Access.AccessList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessEntries != nil {
        // handle response
    }
}
```

## AccessLoad

If filename is not specified then the currently set 'acldb' parameter is used.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessLoad(ctx, operations.AccessLoadRequest{
        Filename: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessLoad200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## AccessSave

If filename is not specified then the currently set 'acldb' parameter is used.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessSave(ctx, operations.AccessSaveRequest{
        Filename: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessSave200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## AccessSetAcldb

This will be used for subsequent load and save operations.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessSetAcldb(ctx, operations.AccessSetAcldbRequest{
        DatabaseName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessSetAcldb200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessSetEnabled

0 indicates disabled, 1 indicates enabled.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessSetEnabled(ctx, operations.AccessSetEnabledRequest{
        EnabledOrNot: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessSetEnabled200ApplicationJSONString != nil {
        // handle response
    }
}
```
