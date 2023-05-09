# PublicSecuritySecurity

### Available Operations

* [Login](#login) - Login
* [LostPassword](#lostpassword) - Lost password
* [Register](#register) - User Registration

## Login

User Login - The login will give your tokens

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
    res, err := s.PublicSecuritySecurity.Login(ctx, shared.LoginRequest{
        Login: "paulsimon@mysupercompany.com",
        Password: "I@mW0nder$Full",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICredentials != nil {
        // handle response
    }
}
```

## LostPassword

Lost password - Your password will be regenerated and sent to your email

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
    res, err := s.PublicSecuritySecurity.LostPassword(ctx, "paulsimon@mysupercompany.com")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Register

User Registration - Create a new user on BeezUP

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
    res, err := s.PublicSecuritySecurity.Register(ctx, shared.RegisterRequest{
        CommercialOwnerUserID: sdk.String("47ea14ab-195d-4f9a-a24e-32c329ee40f6"),
        CultureName: sdk.String("en-GB"),
        Email: "myemail@mycompany.com",
        Password: "I@mW0nder$Full",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
