# Users

## Overview

The Users service allows you to manage your project users.

### Available Operations

* [UsersCreate](#userscreate) - Create User
* [UsersDelete](#usersdelete) - Delete User
* [UsersDeleteSession](#usersdeletesession) - Delete User Session
* [UsersDeleteSessions](#usersdeletesessions) - Delete User Sessions
* [UsersGet](#usersget) - Get User
* [UsersGetLogs](#usersgetlogs) - Get User Logs
* [UsersGetPrefs](#usersgetprefs) - Get User Preferences
* [UsersGetSessions](#usersgetsessions) - Get User Sessions
* [UsersList](#userslist) - List Users
* [UsersUpdatePrefs](#usersupdateprefs) - Update User Preferences
* [UsersUpdateStatus](#usersupdatestatus) - Update User Status
* [UsersUpdateVerification](#usersupdateverification) - Update Email Verification

## UsersCreate

Create a new user.

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
    res, err := s.Users.UsersCreate(ctx, operations.UsersCreateRequestBody{
        Email: "Catalina_Casper86@yahoo.com",
        Name: sdk.String("Nathaniel Marks"),
        Password: "accusantium",
    }, operations.UsersCreateSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## UsersDelete

Delete a user by its unique ID.

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
    res, err := s.Users.UsersDelete(ctx, operations.UsersDeleteRequest{
        UserID: "ab",
    }, operations.UsersDeleteSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeleteSession

Delete a user sessions by its unique ID.

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
    res, err := s.Users.UsersDeleteSession(ctx, operations.UsersDeleteSessionRequest{
        SessionID: "maiores",
        UserID: "quidem",
    }, operations.UsersDeleteSessionSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeleteSessions

Delete all user's sessions by using the user's unique ID.

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
    res, err := s.Users.UsersDeleteSessions(ctx, operations.UsersDeleteSessionsRequest{
        UserID: "ipsam",
    }, operations.UsersDeleteSessionsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersGet

Get a user by its unique ID.

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
    res, err := s.Users.UsersGet(ctx, operations.UsersGetRequest{
        UserID: "voluptate",
    }, operations.UsersGetSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## UsersGetLogs

Get a user activity logs list by its unique ID.

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
    res, err := s.Users.UsersGetLogs(ctx, operations.UsersGetLogsRequest{
        UserID: "autem",
    }, operations.UsersGetLogsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LogList != nil {
        // handle response
    }
}
```

## UsersGetPrefs

Get the user preferences by its unique ID.

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
    res, err := s.Users.UsersGetPrefs(ctx, operations.UsersGetPrefsRequest{
        UserID: "nam",
    }, operations.UsersGetPrefsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Preferences != nil {
        // handle response
    }
}
```

## UsersGetSessions

Get the user sessions list by its unique ID.

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
    res, err := s.Users.UsersGetSessions(ctx, operations.UsersGetSessionsRequest{
        UserID: "eaque",
    }, operations.UsersGetSessionsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionList != nil {
        // handle response
    }
}
```

## UsersList

Get a list of all the project's users. You can use the query params to filter your results.

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
    res, err := s.Users.UsersList(ctx, operations.UsersListRequest{
        Limit: sdk.Int(866383),
        Offset: sdk.Int(365496),
        OrderType: sdk.String("voluptatibus"),
        Search: sdk.String("perferendis"),
    }, operations.UsersListSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## UsersUpdatePrefs

Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.

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
    res, err := s.Users.UsersUpdatePrefs(ctx, operations.UsersUpdatePrefsRequest{
        RequestBody: &operations.UsersUpdatePrefsRequestBody{
            Prefs: map[string]interface{}{
                "amet": "aut",
                "cumque": "corporis",
                "hic": "libero",
                "nobis": "dolores",
            },
        },
        UserID: "quis",
    }, operations.UsersUpdatePrefsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Preferences != nil {
        // handle response
    }
}
```

## UsersUpdateStatus

Update the user status by its unique ID.

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
    res, err := s.Users.UsersUpdateStatus(ctx, operations.UsersUpdateStatusRequest{
        RequestBody: &operations.UsersUpdateStatusRequestBody{
            Status: 521037,
        },
        UserID: "dignissimos",
    }, operations.UsersUpdateStatusSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## UsersUpdateVerification

Update the user email verification status by its unique ID.

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
    res, err := s.Users.UsersUpdateVerification(ctx, operations.UsersUpdateVerificationRequest{
        RequestBody: &operations.UsersUpdateVerificationRequestBody{
            EmailVerification: false,
        },
        UserID: "eaque",
    }, operations.UsersUpdateVerificationSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
