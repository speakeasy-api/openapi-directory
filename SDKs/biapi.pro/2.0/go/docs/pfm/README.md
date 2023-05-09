# Pfm

### Available Operations

* [DeleteAuthToken](#deleteauthtoken) - Remove user access
* [GetUsersIDUser](#getusersiduser) - Get a user
* [GetUsersIDUserForecast](#getusersiduserforecast) - Get forecast
* [GetUsersIDUserProfiles](#getusersiduserprofiles) - Get profiles
* [GetUsersIDUserProfilesMain](#getusersiduserprofilesmain) - Get the main profile
* [GetUsersIDUserProfilesIDProfile](#getusersiduserprofilesidprofile) - Get a profile
* [PostAuthToken](#postauthtoken) - Login to API with credentials

## DeleteAuthToken

This endpoint removes the token in use.<br><br>

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
    res, err := s.Pfm.DeleteAuthToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Pfm.GetUsersIDUser(ctx, operations.GetUsersIDUserRequest{
        Expand: sdk.String("voluptas"),
        IDUser: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUsersIDUserForecast

Get forecast

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
    res, err := s.Pfm.GetUsersIDUserForecast(ctx, operations.GetUsersIDUserForecastRequest{
        IDUser: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Pfm.GetUsersIDUserProfiles(ctx, operations.GetUsersIDUserProfilesRequest{
        Expand: sdk.String("ea"),
        IDUser: "quaerat",
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
    res, err := s.Pfm.GetUsersIDUserProfilesMain(ctx, operations.GetUsersIDUserProfilesMainRequest{
        Expand: sdk.String("consequuntur"),
        IDUser: "repellendus",
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
    res, err := s.Pfm.GetUsersIDUserProfilesIDProfile(ctx, operations.GetUsersIDUserProfilesIDProfileRequest{
        Expand: sdk.String("officia"),
        IDProfile: 807023,
        IDUser: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```

## PostAuthToken

Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>

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
    res, err := s.Pfm.PostAuthToken(ctx, operations.PostAuthTokenRequestBody{
        Application: "officia",
        GrantType: sdk.String("asperiores"),
        Password: "nemo",
        Scope: sdk.String("quae"),
        Username: "Elwyn.Sawayn7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthToken200ApplicationJSONObject != nil {
        // handle response
    }
}
```
