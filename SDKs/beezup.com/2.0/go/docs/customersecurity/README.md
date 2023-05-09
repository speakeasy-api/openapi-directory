# CustomerSecurity

### Available Operations

* [Logout](#logout) - Log out the current user from go2
* [ZendeskToken](#zendesktoken) - Zendesk token

## Logout

Log out the current user from go2

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
    res, err := s.CustomerSecurity.Logout(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ZendeskToken

Zendesk token - Generates a JWT token to access BeezUP restricted Help Center in SSO as described here: https://support.zendesk.com/hc/en-us/articles/222874768-Using-restricted-Help-Center-content-with-the-Web-Widget

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
    res, err := s.CustomerSecurity.ZendeskToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ZendeskToken != nil {
        // handle response
    }
}
```
