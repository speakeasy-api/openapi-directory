# MySQLDatabases

## Overview

Manage your MySql databases.

### Available Operations

* [ChangeDatabaseUserPassword](#changedatabaseuserpassword) - Change password for mysql user
* [ChangeDatabaseUserStatus](#changedatabaseuserstatus) - Enable/disable mysql user
* [CreateMySQLDatabase](#createmysqldatabase) - Create a new mysql database
* [CreateMySQLUser](#createmysqluser) - Create a new mysql user
* [DeleteDatabase](#deletedatabase) - Delete a mysql database
* [DeleteDatabaseUser](#deletedatabaseuser) - Delete a mysql user
* [GetDatabaseUsers](#getdatabaseusers) - Overview of mysql users
* [GetMySQLDatabase](#getmysqldatabase) - Get a specific database
* [GetMySQLDatabases](#getmysqldatabases) - Overview of mysql databases

## ChangeDatabaseUserPassword

Change password for mysql user

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MySQLDatabases.ChangeDatabaseUserPassword(ctx, operations.ChangeDatabaseUserPasswordRequest{
        UpdateUserPasswordRequest: &shared.UpdateUserPasswordRequest{
            Password: sdk.String("ipsum"),
        },
        DatabaseNamePathParameter: "quisquam",
        DatabaseNameQueryParameter: "tenetur",
        UserNamePathParameter: "amet",
        UserNameQueryParameter: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeDatabaseUserStatus

Enable/disable mysql user

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MySQLDatabases.ChangeDatabaseUserStatus(ctx, operations.ChangeDatabaseUserStatusRequest{
        UpdateUserStatusRequest: &shared.UpdateUserStatusRequest{
            Enabled: sdk.Bool(false),
        },
        DatabaseNamePathParameter: "accusamus",
        DatabaseNameQueryParameter: "numquam",
        UserNamePathParameter: "enim",
        UserNameQueryParameter: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateMySQLDatabase

Create a new mysql database

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MySQLDatabases.CreateMySQLDatabase(ctx, shared.CreateMySQLDatabase{
        AccountID: sdk.Int(957451),
        DatabaseName: sdk.String("totam"),
        Password: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateMySQLUser

The creation of a new mysql user will result in a user with read_only rights.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MySQLDatabases.CreateMySQLUser(ctx, operations.CreateMySQLUserRequest{
        CreateMySQLUser: &shared.CreateMySQLUser{
            Name: sdk.String("Mamie Durgan"),
            Password: sdk.String("libero"),
        },
        DatabaseNamePathParameter: "voluptas",
        DatabaseNameQueryParameter: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatabase

Delete a mysql database

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
    res, err := s.MySQLDatabases.DeleteDatabase(ctx, operations.DeleteDatabaseRequest{
        DatabaseNamePathParameter: "quam",
        DatabaseNameQueryParameter: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatabaseUser

The deletion of a mysql user is allowed for users with read_only rights.

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
    res, err := s.MySQLDatabases.DeleteDatabaseUser(ctx, operations.DeleteDatabaseUserRequest{
        DatabaseNamePathParameter: "incidunt",
        DatabaseNameQueryParameter: "qui",
        UserNamePathParameter: "cupiditate",
        UserNameQueryParameter: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDatabaseUsers

Overview of mysql users

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
    res, err := s.MySQLDatabases.GetDatabaseUsers(ctx, operations.GetDatabaseUsersRequest{
        DatabaseNamePathParameter: "pariatur",
        DatabaseNameQueryParameter: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MySQLUsers != nil {
        // handle response
    }
}
```

## GetMySQLDatabase

Get a specific database

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
    res, err := s.MySQLDatabases.GetMySQLDatabase(ctx, operations.GetMySQLDatabaseRequest{
        DatabaseNamePathParameter: "dicta",
        DatabaseNameQueryParameter: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MySQLDatabase != nil {
        // handle response
    }
}
```

## GetMySQLDatabases

Overview of mysql databases

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
    res, err := s.MySQLDatabases.GetMySQLDatabases(ctx, operations.GetMySQLDatabasesRequest{
        Skip: sdk.Int(517379),
        Take: sdk.Int(276894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MySQLDatabases != nil {
        // handle response
    }
}
```
