# Groups

## Overview

User groups

### Available Operations

* [AddGroupMembers](#addgroupmembers) - Add group members
* [CreateGroup](#creategroup) - Create new user group
* [RemoveGroup](#removegroup) - Remove user group
* [RemoveGroupMembers](#removegroupmembers) - Remove group members
* [RequestGroup](#requestgroup) - Request user group
* [RequestGroupMembers](#requestgroupmembers) - Request group member users or / and users who can become a member
* [RequestGroupRoles](#requestgrouproles) - Request list of roles assigned to the group
* [~~RequestGroupRooms~~](#requestgrouprooms) - Request rooms granted to the group or / and rooms that can be granted :warning: **Deprecated**
* [RequestGroups](#requestgroups) - Request list of user groups
* [RequestLastAdminRoomsGroups](#requestlastadminroomsgroups) - Request rooms where the group is defined as last admin group
* [UpdateGroup](#updategroup) - Update user group's metadata

## AddGroupMembers

### Description:
Add members to a group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
New members are added to the group.

### Further Information:
Batch function.  
The newly provided members will be added to the existing ones.

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
    res, err := s.Groups.AddGroupMembers(ctx, operations.AddGroupMembersRequest{
        ChangeGroupMembersRequest: shared.ChangeGroupMembersRequest{
            Ids: []int64{
                474697,
                244425,
            },
        },
        XSdsAuthToken: sdk.String("error"),
        XSdsDateFormat: operations.AddGroupMembersXSdsDateFormatEnumUtc.ToPointer(),
        GroupID: 338007,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## CreateGroup

### Description:
Create a new user group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
A new user group is created.

### Further Information:
* If a group should **NOT** expire, leave `expireAt` empty.
* Group names are limited to **150** characters
* Forbidden characters in group name: [`<`, `>`]


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Groups.CreateGroup(ctx, operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
            },
            Name: "Bill Conn",
        },
        XSdsAuthToken: sdk.String("tenetur"),
        XSdsDateFormat: operations.CreateGroupXSdsDateFormatEnumLocal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## RemoveGroup

### Description:
Delete a user group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete groups</span> required.

### Postcondition: 
User group is deleted.

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
    res, err := s.Groups.RemoveGroup(ctx, operations.RemoveGroupRequest{
        XSdsAuthToken: sdk.String("id"),
        GroupID: 820994,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveGroupMembers

### Description:  
Remove group members.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
Provided users are removed from the user group.

### Further Information:
Batch function.  
The provided users are removed from the user group. Maximum number of users to remove in one request is 200.

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
    res, err := s.Groups.RemoveGroupMembers(ctx, operations.RemoveGroupMembersRequest{
        ChangeGroupMembersRequest: shared.ChangeGroupMembersRequest{
            Ids: []int64{
                97101,
            },
        },
        XSdsAuthToken: sdk.String("error"),
        XSdsDateFormat: operations.RemoveGroupMembersXSdsDateFormatEnumLeet.ToPointer(),
        GroupID: 673660,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## RequestGroup

### Description:  
Retrieve detailed information about a user group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
User group is returned.

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
    res, err := s.Groups.RequestGroup(ctx, operations.RequestGroupRequest{
        XSdsAuthToken: sdk.String("quasi"),
        XSdsDateFormat: operations.RequestGroupXSdsDateFormatEnumLeet.ToPointer(),
        GroupID: 976460,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## RequestGroupMembers

### Description:  
Retrieve a list of group member users or / and users who can become a member.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|user:cn:searchString`  
Get all users that are **NOT** in this group **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `isMember` | Filter group members | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |

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
    res, err := s.Groups.RequestGroupMembers(ctx, operations.RequestGroupMembersRequest{
        XSdsAuthToken: sdk.String("vero"),
        Filter: sdk.String("nihil"),
        GroupID: 509624,
        Limit: sdk.Int(976762),
        Offset: sdk.Int(55714),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupUserList != nil {
        // handle response
    }
}
```

## RequestGroupRoles

### Description:  
Retrieve a list of all roles granted to a group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of granted roles is returned.

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
    res, err := s.Groups.RequestGroupRoles(ctx, operations.RequestGroupRolesRequest{
        XSdsAuthToken: sdk.String("omnis"),
        GroupID: 451159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleList != nil {
        // handle response
    }
}
```

## ~~RequestGroupRooms~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>

### Description:  
Retrieves a list of rooms granted to the group and / or that can be granted.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of rooms is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isGranted:eq:false|name:cn:searchString`  
Get all rooms where the group is **NOT** granted **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Room name filter | `cn` | Room name contains value. | `search String` |
| `isGranted` | Filter rooms which the group is (not) granted | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`:  DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `true` |

</details>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Groups.RequestGroupRooms(ctx, operations.RequestGroupRoomsRequest{
        XSdsAuthToken: sdk.String("cum"),
        XSdsDateFormat: operations.RequestGroupRoomsXSdsDateFormatEnumUtc.ToPointer(),
        Filter: sdk.String("doloremque"),
        GroupID: 441711,
        Limit: sdk.Int(282807),
        Offset: sdk.Int(979587),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomTreeDataList != nil {
        // handle response
    }
}
```

## RequestGroups

### Description:  
Returns a list of user groups.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.

### Postcondition: 
List of user groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:searchString`  
Filter by group name containing `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |
| `hasRole` | (**`NEW`**) Group role filter<br>For more information about roles check **`GET /roles`** API | `eq` | Group role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li></ul> |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:asc|expireAt:desc`  
Sort by `name` ascending **AND** by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Group name |
| `createdAt` | Creation date |
| `expireAt` | Expiration date |
| `cntUsers` | Amount of users |

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
    res, err := s.Groups.RequestGroups(ctx, operations.RequestGroupsRequest{
        XSdsAuthToken: sdk.String("dicta"),
        XSdsDateFormat: operations.RequestGroupsXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("dolore"),
        Limit: sdk.Int(480894),
        Offset: sdk.Int(118727),
        Sort: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupList != nil {
        // handle response
    }
}
```

## RequestLastAdminRoomsGroups

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:  
Retrieve a list of all rooms where the group is defined as last admin group.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
List of rooms is returned. 

### Further Information:
An empty list is returned if no rooms were found where the group is defined as last admin group.

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
    res, err := s.Groups.RequestLastAdminRoomsGroups(ctx, operations.RequestLastAdminRoomsGroupsRequest{
        XSdsAuthToken: sdk.String("enim"),
        GroupID: 880476,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LastAdminGroupRoomList != nil {
        // handle response
    }
}
```

## UpdateGroup

### Description:  
Update user group's metadata .

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.

### Postcondition: 
User group's metadata is changed.

### Further Information:
* If a group should **NOT** expire, leave `expireAt` empty.
* Group names are limited to **150** characters
* **All** characters are allowed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Groups.UpdateGroup(ctx, operations.UpdateGroupRequest{
        UpdateGroupRequest: shared.UpdateGroupRequest{
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-01-30T20:15:26.045Z"),
            },
            Name: sdk.String("Edna Pouros"),
        },
        XSdsAuthToken: sdk.String("pariatur"),
        XSdsDateFormat: operations.UpdateGroupXSdsDateFormatEnumLocal.ToPointer(),
        GroupID: 508969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
