# UsersManagement

### Available Operations

* [DeleteUsersIDUser](#deleteusersiduser) - Delete the user
* [DeleteUsersIDUserConfig](#deleteusersiduserconfig) - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* [GetUsers](#getusers) - Get users
* [GetUsersIDUser](#getusersiduser) - Get a user
* [GetUsersIDUserConfig](#getusersiduserconfig) - Get configuration of a user.
* [GetUsersIDUserProfiles](#getusersiduserprofiles) - Get profiles
* [GetUsersIDUserProfilesMain](#getusersiduserprofilesmain) - Get the main profile
* [GetUsersIDUserProfilesIDProfile](#getusersiduserprofilesidprofile) - Get a profile
* [PostUsersIDUserConfig](#postusersiduserconfig) - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* [PostUsersIDUserToken](#postusersidusertoken) - Create a token

## DeleteUsersIDUser

This endpoint deletes the user.<br><br>

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
    res, err := s.UsersManagement.DeleteUsersIDUser(ctx, operations.DeleteUsersIDUserRequest{
        Expand: sdk.String("dolorem"),
        IDUser: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## DeleteUsersIDUserConfig

- keys (string): list of coma separated keys to be deleted.<br><br>

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
    res, err := s.UsersManagement.DeleteUsersIDUserConfig(ctx, operations.DeleteUsersIDUserConfigRequest{
        IDUser: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsers

Get users

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
    res, err := s.UsersManagement.GetUsers(ctx, operations.GetUsersRequest{
        Expand: sdk.String("architecto"),
        Search: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUser

Get a user

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
    res, err := s.UsersManagement.GetUsersIDUser(ctx, operations.GetUsersIDUserRequest{
        Expand: sdk.String("labore"),
        IDUser: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUsersIDUserConfig

<br><br>

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
    res, err := s.UsersManagement.GetUsersIDUserConfig(ctx, operations.GetUsersIDUserConfigRequest{
        IDUser: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserConfig200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUserProfiles

Get profiles

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
    res, err := s.UsersManagement.GetUsersIDUserProfiles(ctx, operations.GetUsersIDUserProfilesRequest{
        Expand: sdk.String("laborum"),
        IDUser: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUserProfilesMain

Get the main profile

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
    res, err := s.UsersManagement.GetUsersIDUserProfilesMain(ctx, operations.GetUsersIDUserProfilesMainRequest{
        Expand: sdk.String("tenetur"),
        IDUser: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```

## GetUsersIDUserProfilesIDProfile

Get a profile

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
    res, err := s.UsersManagement.GetUsersIDUserProfilesIDProfile(ctx, operations.GetUsersIDUserProfilesIDProfileRequest{
        Expand: sdk.String("alias"),
        IDProfile: 227084,
        IDUser: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```

## PostUsersIDUserConfig

Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored

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
    res, err := s.UsersManagement.PostUsersIDUserConfig(ctx, operations.PostUsersIDUserConfigRequest{
        IDUser: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersIDUserToken

Create an access_token for this user and get it.<br><br>

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
    res, err := s.UsersManagement.PostUsersIDUserToken(ctx, operations.PostUsersIDUserTokenRequest{
        RequestBody: operations.PostUsersIDUserTokenRequestBody{
            Application: "unde",
        },
        IDUser: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersIDUserToken200ApplicationJSONObject != nil {
        // handle response
    }
}
```
