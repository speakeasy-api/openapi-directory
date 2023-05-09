# Administrative

## Overview

Create and manage administrative resources

### Available Operations

* [DoctorsList](#doctorslist) - Retrieve or search doctors within practice group
* [DoctorsRead](#doctorsread) - Retrieve an existing dcotor
* [UserGroupsList](#usergroupslist) - Retrieve or search user groups
* [UserGroupsRead](#usergroupsread) - Retrieve an existing user group
* [UsersList](#userslist) - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* [UsersRead](#usersread) - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

## DoctorsList

Retrieve or search doctors within practice group

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administrative.DoctorsList(ctx, operations.DoctorsListRequest{
        Cursor: sdk.String("quibusdam"),
        Doctor: sdk.Int64(602763),
        PageSize: sdk.Int64(857946),
    }, operations.DoctorsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DoctorsRead

Retrieve an existing dcotor

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administrative.DoctorsRead(ctx, operations.DoctorsReadRequest{
        Doctor: sdk.Int64(544883),
        ID: "d69a674e-0f46-47cc-8796-ed151a05dfc2",
    }, operations.DoctorsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Doctor != nil {
        // handle response
    }
}
```

## UserGroupsList

Retrieve or search user groups

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administrative.UserGroupsList(ctx, operations.UserGroupsListRequest{
        Cursor: sdk.String("at"),
        Doctor: sdk.Int64(870088),
        PageSize: sdk.Int64(978619),
    }, operations.UserGroupsListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UserGroupsRead

Retrieve an existing user group

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administrative.UserGroupsRead(ctx, operations.UserGroupsReadRequest{
        Doctor: sdk.Int64(473608),
        ID: "cc78ca1b-a928-4fc8-9674-2cb739205929",
    }, operations.UserGroupsReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserProfilesGroup != nil {
        // handle response
    }
}
```

## UsersList

Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administrative.UsersList(ctx, operations.UsersListRequest{
        Cursor: sdk.String("dolor"),
        Doctor: sdk.Int64(616934),
        PageSize: sdk.Int64(386489),
    }, operations.UsersListSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UsersRead

Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administrative.UsersRead(ctx, operations.UsersReadRequest{
        Doctor: sdk.Int64(943749),
        ID: "ea7596eb-10fa-4aa2-b52c-5955907aff1a",
    }, operations.UsersReadSecurity{
        DrchronoOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserProfile != nil {
        // handle response
    }
}
```
