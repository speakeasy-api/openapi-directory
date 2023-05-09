# OnThisDay

## Overview

On this day historical events for birth, death and other events.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [GetFactOnthisdayBorn](#getfactonthisdayborn) - Returns a random ( famous/ relatively famous ) person born on a given day and month
* [GetFactOnthisdayDied](#getfactonthisdaydied) - Returns a random ( famous/ relatively famous ) person died on a given day and month
* [GetFactOnthisdayEvent](#getfactonthisdayevent) - Returns a random ( famous/ relatively famous ) historic event on a given day and month

## GetFactOnthisdayBorn

Returns a random ( famous/ relatively famous ) person born on a given day and month

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
    res, err := s.OnThisDay.GetFactOnthisdayBorn(ctx, operations.GetFactOnthisdayBornRequest{
        Day: sdk.String("quibusdam"),
        Month: sdk.String("unde"),
    }, operations.GetFactOnthisdayBornSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFactOnthisdayDied

Returns a random ( famous/ relatively famous ) person died on a given day and month

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
    res, err := s.OnThisDay.GetFactOnthisdayDied(ctx, operations.GetFactOnthisdayDiedRequest{
        Day: sdk.String("nulla"),
        Month: sdk.String("corrupti"),
    }, operations.GetFactOnthisdayDiedSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFactOnthisdayEvent

Returns a random ( famous/ relatively famous ) historic event on a given day and month

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
    res, err := s.OnThisDay.GetFactOnthisdayEvent(ctx, operations.GetFactOnthisdayEventRequest{
        Day: sdk.String("illum"),
        Month: sdk.String("vel"),
    }, operations.GetFactOnthisdayEventSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
