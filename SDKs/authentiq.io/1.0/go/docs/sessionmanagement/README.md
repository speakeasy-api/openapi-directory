# SessionManagement

### Available Operations

* [AuthorizeIframe](#authorizeiframe) - Include a session iframe

## AuthorizeIframe

An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.

The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.


OIDC OP Session Management Iframe
<http://openid.net/specs/openid-connect-session-1_0.html#OPiframe>

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
    res, err := s.SessionManagement.AuthorizeIframe(ctx, operations.AuthorizeIframeRequest{
        ClientID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
