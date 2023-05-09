# Users

## Overview

User management

### Available Operations

* [CreateUser](#createuser) - Create new user
* [RemoveUser](#removeuser) - Remove user
* [RemoveUserAttribute](#removeuserattribute) - Remove custom user attribute
* [RequestEmergencyMfaCode](#requestemergencymfacode) - Request emergency MFA code
* [RequestLastAdminRoomsUsers](#requestlastadminroomsusers) - Request rooms where the user is last admin
* [RequestUser](#requestuser) - Request user
* [RequestUserAttributes](#requestuserattributes) - Request custom user attributes
* [RequestUserGroups](#requestusergroups) - Request groups that user is a member of or / and can become a member
* [RequestUserRoles](#requestuserroles) - Request user's granted roles
* [RequestUsers](#requestusers) - Request users
* [~~RequestUsersRooms~~](#requestusersrooms) - Request rooms granted to the user or / and rooms that can be granted :warning: **Deprecated**
* [~~SetUserAttributes~~](#setuserattributes) - Set custom user attributes :warning: **Deprecated**
* [UpdateUser](#updateuser) - Update user's metadata
* [UpdateUserAttributes](#updateuserattributes) - Add or edit custom user attributes

## CreateUser

### Description:
Create a new user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
New user is created.

### Further Information:
* If a user should **NOT** expire, leave `expireAt` empty.
* All input fields are limited to **150** characters
* Forbidden characters in first or last name: [`<`, `>`]
* Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>

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
    res, err := s.Users.CreateUser(ctx, operations.CreateUserRequest{
        CreateUserRequest: shared.CreateUserRequest{
            AuthData: &shared.UserAuthData{
                AdConfigID: sdk.Int(621169),
                Login: sdk.String("veritatis"),
                Method: "ducimus",
                MustChangePassword: sdk.Bool(false),
                OidConfigID: sdk.Int(452729),
                Password: sdk.String("pariatur"),
            },
            AuthMethods: []shared.UserAuthMethod{
                shared.UserAuthMethod{
                    AuthID: "similique",
                    IsEnabled: false,
                    Options: []shared.KeyValueEntry{
                        shared.KeyValueEntry{
                            Key: "ex",
                            Value: "quaerat",
                        },
                        shared.KeyValueEntry{
                            Key: "commodi",
                            Value: "officiis",
                        },
                        shared.KeyValueEntry{
                            Key: "placeat",
                            Value: "quidem",
                        },
                        shared.KeyValueEntry{
                            Key: "exercitationem",
                            Value: "quam",
                        },
                    },
                },
                shared.UserAuthMethod{
                    AuthID: "dolorem",
                    IsEnabled: false,
                    Options: []shared.KeyValueEntry{
                        shared.KeyValueEntry{
                            Key: "ipsa",
                            Value: "sint",
                        },
                        shared.KeyValueEntry{
                            Key: "vero",
                            Value: "sequi",
                        },
                    },
                },
                shared.UserAuthMethod{
                    AuthID: "repudiandae",
                    IsEnabled: false,
                    Options: []shared.KeyValueEntry{
                        shared.KeyValueEntry{
                            Key: "dicta",
                            Value: "earum",
                        },
                        shared.KeyValueEntry{
                            Key: "veniam",
                            Value: "animi",
                        },
                        shared.KeyValueEntry{
                            Key: "dolores",
                            Value: "nam",
                        },
                    },
                },
                shared.UserAuthMethod{
                    AuthID: "dicta",
                    IsEnabled: false,
                    Options: []shared.KeyValueEntry{
                        shared.KeyValueEntry{
                            Key: "necessitatibus",
                            Value: "nobis",
                        },
                    },
                },
            },
            Email: sdk.String("Jess9@gmail.com"),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-02-19T19:59:49.568Z"),
            },
            FirstName: "Monte",
            Gender: sdk.String("male"),
            IsNonmemberViewer: sdk.Bool(false),
            LastName: "Mayert",
            Login: sdk.String("nemo"),
            MfaConfig: &shared.MfaConfig{
                MfaEnforced: sdk.Bool(false),
            },
            NeedsToChangePassword: sdk.Bool(false),
            NotifyUser: sdk.Bool(false),
            Password: sdk.String("aliquam"),
            Phone: sdk.String("(975) 496-5554 x091"),
            ReceiverLanguage: sdk.String("quos"),
            Title: sdk.String("Miss"),
            UserName: sdk.String("Reyna.Reynolds3"),
        },
        XSdsAuthToken: sdk.String("delectus"),
        XSdsDateFormat: operations.CreateUserXSdsDateFormatEnumEpoch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserData != nil {
        // handle response
    }
}
```

## RemoveUser

### Description:
Delete a user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete users</span> required.

### Postcondition:
User is deleted.

### Further Information:
User **CANNOT** be deleted if he is a last room administrator of any room.

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
    res, err := s.Users.RemoveUser(ctx, operations.RemoveUserRequest{
        XSdsAuthToken: sdk.String("cum"),
        UserID: 216870,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveUserAttribute

### Description:
Delete custom user attribute.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Custom user attribute is deleted.

### Further Information:
* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.

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
    res, err := s.Users.RemoveUserAttribute(ctx, operations.RemoveUserAttributeRequest{
        XSdsAuthToken: sdk.String("adipisci"),
        Key: "saepe",
        UserID: 644420,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestEmergencyMfaCode

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:  
Request emergency MFA code for a specific user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Emergency MFA code is returned.

### Further Information:
Emergency code can be used instead of standard MFA authentication to disable all MFA setups.

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
    res, err := s.Users.RequestEmergencyMfaCode(ctx, operations.RequestEmergencyMfaCodeRequest{
        XSdsAuthToken: sdk.String("doloremque"),
        UserID: 339756,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmergencyMfaCodeResponse != nil {
        // handle response
    }
}
```

## RequestLastAdminRoomsUsers

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:  
Retrieve a list of all rooms where the user is last admin (except homeroom and its subordinary rooms).

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
List of rooms is returned. 

### Further Information:
An empty list is returned if no rooms were found where the user is last admin.

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
    res, err := s.Users.RequestLastAdminRoomsUsers(ctx, operations.RequestLastAdminRoomsUsersRequest{
        XSdsAuthToken: sdk.String("veniam"),
        UserID: 727481,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LastAdminUserRoomList != nil {
        // handle response
    }
}
```

## RequestUser

### Description:  
Retrieve detailed information about a single user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
User information is returned.

### Further Information:
None.

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

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
    res, err := s.Users.RequestUser(ctx, operations.RequestUserRequest{
        XSdsAuthToken: sdk.String("architecto"),
        XSdsDateFormat: operations.RequestUserXSdsDateFormatEnumOffset.ToPointer(),
        EffectiveRoles: sdk.Bool(false),
        UserID: 475589,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserData != nil {
        // handle response
    }
}
```

## RequestUserAttributes

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>

### Description:  
Retrieve a list of user attributes.

### Precondition:
None.

### Postcondition:
List of attributes is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:cn:searchString_1|value:cn:searchString_2`  
Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `key` | User attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
| `value` | User attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:asc|value:desc`  
Sort by `key` ascending **AND** by `value` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `key` | User attribute key |
| `value` | User attribute value |

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
    res, err := s.Users.RequestUserAttributes(ctx, operations.RequestUserAttributesRequest{
        XSdsAuthToken: sdk.String("eligendi"),
        Filter: sdk.String("possimus"),
        Limit: sdk.Int(251464),
        Offset: sdk.Int(298187),
        Sort: sdk.String("itaque"),
        UserID: 150935,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttributesResponse != nil {
        // handle response
    }
}
```

## RequestUserGroups

### Description:  
Retrieves a list of groups a user is member of and / or can become a member.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isMember:eq:false|name:cn:searchString`  
Get all groups that the user is **NOT** member of **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |
| `isMember` | Filter the groups which the user is (not) member of | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |

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
    res, err := s.Users.RequestUserGroups(ctx, operations.RequestUserGroupsRequest{
        XSdsAuthToken: sdk.String("asperiores"),
        Filter: sdk.String("veniam"),
        Limit: sdk.Int(164532),
        Offset: sdk.Int(813880),
        UserID: 512905,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupList != nil {
        // handle response
    }
}
```

## RequestUserRoles

### Description:  
Retrieve a list of all roles granted to a user.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

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
    res, err := s.Users.RequestUserRoles(ctx, operations.RequestUserRolesRequest{
        XSdsAuthToken: sdk.String("odit"),
        UserID: 863477,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleList != nil {
        // handle response
    }
}
```

## RequestUsers

### Description:  
Returns a list of DRACOON users.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR`  | Operator Description | `VALUE`                                                                                                                                                                                                                                                                                                                                                                                              |
| :--- | :--- |:------------| :--- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `email` | Email filter | `eq`, `cn`  | Email contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
| `userName` | User name filter | `eq`, `cn`  | UserName contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
| `firstName` | User first name filter | `cn`        | User first name contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
| `lastName` | User last name filter | `cn`        | User last name contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
| `isLocked` | User lock status filter | `eq`        |  | `true or false`                                                                                                                                                                                                                                                                                                                                                                                      |
| `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq`        |  | `true or false`<br>default: `false`                                                                                                                                                                                                                                                                                                                                                                  |
| `createdAt` | Creation date filter | `ge, le`    | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)`                                                                                                                                                                                                                                                                                                                                                                                  |
| `phone` | Phone filter | `eq`        | Phone equals value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
| `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq`        |  | `true or false`                                                                                                                                                                                                                                                                                                                                                                                      |
| `hasRole` | User role filter<br>Depends on **effectiveRoles**.<br>For more Roles information please call `GET /roles API` | `eq`, `neq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
| <del>`login`</del> | User login filter | `cn` | User login contains value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`firstName:asc|lastLoginSuccessAt:desc`  
Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `userName` | User name |
| `email` | User email |
| `firstName` | User first name |
| `lastName` | User last name |
| `isLocked` | User lock status |
| `lastLoginSuccessAt` | Last successful login date |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`gender`</del> | Gender |
| <del>`lockStatus`</del> | User lock status |
| <del>`login`</del> | User login |

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
    res, err := s.Users.RequestUsers(ctx, operations.RequestUsersRequest{
        XSdsAuthToken: sdk.String("amet"),
        XSdsDateFormat: operations.RequestUsersXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("ab"),
        IncludeAttributes: sdk.Bool(false),
        IncludeManageableRooms: sdk.Bool(false),
        IncludeRoles: sdk.Bool(false),
        Limit: sdk.Int(242637),
        Offset: sdk.Int(705710),
        Sort: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## ~~RequestUsersRooms~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>

### Description:  
Retrieves a list of rooms granted to the user and / or that can be granted.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.

### Postcondition:
List of rooms is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`  
Get all rooms that the user is granted **AND** is last admin **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Room name filter | `cn` | Room name contains value. | `search String` |
| `isGranted` | Filter the rooms which the user is (not) granted. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `isLastAdmin` | Filter the rooms which the user is last room administrator.<br>Only in connection with `isGranted:eq:true` filter possible. | `eq` |  | `true` |
| `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |

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
    res, err := s.Users.RequestUsersRooms(ctx, operations.RequestUsersRoomsRequest{
        XSdsAuthToken: sdk.String("nisi"),
        XSdsDateFormat: operations.RequestUsersRoomsXSdsDateFormatEnumLeet.ToPointer(),
        Filter: sdk.String("quaerat"),
        Limit: sdk.Int(503748),
        Offset: sdk.Int(718627),
        UserID: 392430,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomTreeDataList != nil {
        // handle response
    }
}
```

## ~~SetUserAttributes~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>

### Description:  
Set custom user attributes.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Custom user attributes are set.

### Further Information:
Batch function.  
All existing user attributes will be deleted.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Users.SetUserAttributes(ctx, operations.SetUserAttributesRequest{
        UserAttributes: shared.UserAttributes{
            Items: []shared.KeyValueEntry{
                shared.KeyValueEntry{
                    Key: "nisi",
                    Value: "libero",
                },
                shared.KeyValueEntry{
                    Key: "minus",
                    Value: "facere",
                },
            },
        },
        XSdsAuthToken: sdk.String("facilis"),
        XSdsDateFormat: operations.SetUserAttributesXSdsDateFormatEnumLocal.ToPointer(),
        UserID: 318917,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserData != nil {
        // handle response
    }
}
```

## UpdateUser

### Description:  
Update user's metadata.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
User's metadata is updated.

### Further Information:
* If a user should **NOT** expire, leave `expireAt` empty.
* All input fields are limited to **150** characters
* **All** characters are allowed.

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>

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
    res, err := s.Users.UpdateUser(ctx, operations.UpdateUserRequest{
        UpdateUserRequest: shared.UpdateUserRequest{
            AuthData: &shared.UserAuthDataUpdateRequest{
                AdConfigID: sdk.Int(973819),
                Login: sdk.String("voluptatibus"),
                Method: sdk.String("consequuntur"),
                OidConfigID: sdk.Int(891581),
            },
            AuthMethods: []shared.UserAuthMethod{
                shared.UserAuthMethod{
                    AuthID: "rerum",
                    IsEnabled: false,
                    Options: []shared.KeyValueEntry{
                        shared.KeyValueEntry{
                            Key: "reprehenderit",
                            Value: "nostrum",
                        },
                    },
                },
                shared.UserAuthMethod{
                    AuthID: "neque",
                    IsEnabled: false,
                    Options: []shared.KeyValueEntry{
                        shared.KeyValueEntry{
                            Key: "est",
                            Value: "rem",
                        },
                        shared.KeyValueEntry{
                            Key: "eligendi",
                            Value: "fugiat",
                        },
                    },
                },
            },
            Email: sdk.String("Sidney11@yahoo.com"),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2021-06-07T03:31:13.366Z"),
            },
            FirstName: sdk.String("Bert"),
            Gender: sdk.String("female"),
            IsLocked: sdk.Bool(false),
            LastName: sdk.String("Koelpin"),
            LockStatus: sdk.Int(854115),
            MfaConfig: &shared.MfaConfig{
                MfaEnforced: sdk.Bool(false),
            },
            Phone: sdk.String("(339) 547-0028 x973"),
            ReceiverLanguage: sdk.String("eos"),
            Title: sdk.String("Dr."),
            UserName: sdk.String("Trey.Kilback"),
        },
        XSdsAuthToken: sdk.String("repellat"),
        XSdsDateFormat: operations.UpdateUserXSdsDateFormatEnumEpoch.ToPointer(),
        UserID: 197259,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserData != nil {
        // handle response
    }
}
```

## UpdateUserAttributes

### Description:  
Add or edit custom user attributes.
<br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.

### Postcondition:
Custom user attributes gets added or edited.

### Further Information:
Batch function.  
If an entry exists before, it will be overwritten.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.

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
    res, err := s.Users.UpdateUserAttributes(ctx, operations.UpdateUserAttributesRequest{
        UserAttributes: shared.UserAttributes{
            Items: []shared.KeyValueEntry{
                shared.KeyValueEntry{
                    Key: "deleniti",
                    Value: "illo",
                },
                shared.KeyValueEntry{
                    Key: "labore",
                    Value: "assumenda",
                },
            },
        },
        XSdsAuthToken: sdk.String("aliquam"),
        XSdsDateFormat: operations.UpdateUserAttributesXSdsDateFormatEnumEpoch.ToPointer(),
        UserID: 591065,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserData != nil {
        // handle response
    }
}
```
