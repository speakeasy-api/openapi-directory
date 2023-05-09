# Roles

## Overview

Role user management

### Available Operations

* [AddRoleGroups](#addrolegroups) - Assign group(s) to the role
* [AddRoleUsers](#addroleusers) - Assign user(s) to the role
* [RequestRoleGroups](#requestrolegroups) - Request groups with specific role
* [RequestRoleUsers](#requestroleusers) - Request users with specific role
* [RequestRoles](#requestroles) - Request all roles with assigned rights
* [RevokeRoleGroups](#revokerolegroups) - Revoke granted role from group(s)
* [RevokeRoleUsers](#revokeroleusers) - Revoke granted role from user(s)

## AddRoleGroups

### Description:
Assign group(s) to a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.

### Postcondition:
One or more groups will be added to a role.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.AddRoleGroups(ctx, operations.AddRoleGroupsRequest{
        GroupIds: shared.GroupIds{
            Ids: []int64{
                153627,
                24313,
            },
        },
        XSdsAuthToken: sdk.String("vel"),
        RoleID: 342611,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleGroupList != nil {
        // handle response
    }
}
```

## AddRoleUsers

### Description:
Assign user(s) to a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.

### Postcondition:
One or more users will be added to a role.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.AddRoleUsers(ctx, operations.AddRoleUsersRequest{
        UserIds: shared.UserIds{
            Ids: []int64{
                622231,
                8511,
                279068,
                968865,
            },
        },
        XSdsAuthToken: sdk.String("dolorem"),
        RoleID: 690894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleUserList != nil {
        // handle response
    }
}
```

## RequestRoleGroups

### Description:  
Get all groups with a specific role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition:
List of to the role assigned groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|name:cn:searchString`  
Get all groups that are **NOT** a member of that role **AND** whose name contains `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `isMember` | Filter the groups which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.RequestRoleGroups(ctx, operations.RequestRoleGroupsRequest{
        XSdsAuthToken: sdk.String("dicta"),
        Filter: sdk.String("architecto"),
        Limit: sdk.Int(577140),
        Offset: sdk.Int(289776),
        RoleID: 695270,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleGroupList != nil {
        // handle response
    }
}
```

## RequestRoleUsers

### Description:  
Get all users with a specific role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|user:cn:searchString`  
Get all users that are **NOT** member of that role **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `isMember` | Filter the users which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.RequestRoleUsers(ctx, operations.RequestRoleUsersRequest{
        XSdsAuthToken: sdk.String("atque"),
        Filter: sdk.String("laborum"),
        Limit: sdk.Int(724148),
        Offset: sdk.Int(948861),
        RoleID: 388867,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleUserList != nil {
        // handle response
    }
}
```

## RequestRoles

### Description:  
Retrieve a list of all roles with assigned rights.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of roles with assigned rights is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.RequestRoles(ctx, operations.RequestRolesRequest{
        XSdsAuthToken: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleList != nil {
        // handle response
    }
}
```

## RevokeRoleGroups

### Description:  
Revoke granted group(s) from a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.  
For each role, at least one non-expiring user **MUST** remain who may grant the role.

### Postcondition:
One or more groups will be removed from a role.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.RevokeRoleGroups(ctx, operations.RevokeRoleGroupsRequest{
        GroupIds: shared.GroupIds{
            Ids: []int64{
                647197,
            },
        },
        XSdsAuthToken: sdk.String("voluptate"),
        RoleID: 600392,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleGroupList != nil {
        // handle response
    }
}
```

## RevokeRoleUsers

### Description:  
Revoke granted user(s) from a role.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.  
For each role, at least one non-expiring user **MUST** remain who may grant the role.

### Postcondition:
One or more users will be removed from a role.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.RevokeRoleUsers(ctx, operations.RevokeRoleUsersRequest{
        UserIds: shared.UserIds{
            Ids: []int64{
                588740,
                833819,
                962771,
                914791,
            },
        },
        XSdsAuthToken: sdk.String("perferendis"),
        RoleID: 667285,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleUserList != nil {
        // handle response
    }
}
```
