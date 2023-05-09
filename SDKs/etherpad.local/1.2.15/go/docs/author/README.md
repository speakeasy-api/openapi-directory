# Author

### Available Operations

* [CreateAuthorIfNotExistsForUsingGET](#createauthorifnotexistsforusingget) - this functions helps you to map your application author ids to Etherpad author ids
* [CreateAuthorIfNotExistsForUsingPOST](#createauthorifnotexistsforusingpost) - this functions helps you to map your application author ids to Etherpad author ids
* [CreateAuthorUsingGET](#createauthorusingget) - creates a new author
* [CreateAuthorUsingPOST](#createauthorusingpost) - creates a new author
* [GETAuthorNameUsingGET](#getauthornameusingget) - Returns the Author Name of the author
* [GetAuthorNameUsingPOST](#getauthornameusingpost) - Returns the Author Name of the author
* [ListPadsOfAuthorUsingGET](#listpadsofauthorusingget) - returns an array of all pads this author contributed to
* [ListPadsOfAuthorUsingPOST](#listpadsofauthorusingpost) - returns an array of all pads this author contributed to
* [ListSessionsOfAuthorUsingGET](#listsessionsofauthorusingget) - returns all sessions of an author
* [ListSessionsOfAuthorUsingPOST](#listsessionsofauthorusingpost) - returns all sessions of an author

## CreateAuthorIfNotExistsForUsingGET

this functions helps you to map your application author ids to Etherpad author ids

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.CreateAuthorIfNotExistsForUsingGET(ctx, operations.CreateAuthorIfNotExistsForUsingGETRequest{
        AuthorMapper: sdk.String("esse"),
        Name: sdk.String("Miss Lowell Parisian"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthorIfNotExistsForUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateAuthorIfNotExistsForUsingPOST

this functions helps you to map your application author ids to Etherpad author ids

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.CreateAuthorIfNotExistsForUsingPOST(ctx, operations.CreateAuthorIfNotExistsForUsingPOSTRequest{
        AuthorMapper: sdk.String("occaecati"),
        Name: sdk.String("Cassandra Welch"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthorIfNotExistsForUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateAuthorUsingGET

creates a new author

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.CreateAuthorUsingGET(ctx, operations.CreateAuthorUsingGETRequest{
        Name: sdk.String("Lucy Krajcik"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthorUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateAuthorUsingPOST

creates a new author

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.CreateAuthorUsingPOST(ctx, operations.CreateAuthorUsingPOSTRequest{
        Name: sdk.String("Jonathon Klocko"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthorUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETAuthorNameUsingGET

Returns the Author Name of the author

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.GETAuthorNameUsingGET(ctx, operations.GETAuthorNameUsingGETRequest{
        AuthorID: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETAuthorNameUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAuthorNameUsingPOST

Returns the Author Name of the author

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.GetAuthorNameUsingPOST(ctx, operations.GetAuthorNameUsingPOSTRequest{
        AuthorID: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthorNameUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPadsOfAuthorUsingGET

returns an array of all pads this author contributed to

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.ListPadsOfAuthorUsingGET(ctx, operations.ListPadsOfAuthorUsingGETRequest{
        AuthorID: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPadsOfAuthorUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPadsOfAuthorUsingPOST

returns an array of all pads this author contributed to

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.ListPadsOfAuthorUsingPOST(ctx, operations.ListPadsOfAuthorUsingPOSTRequest{
        AuthorID: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPadsOfAuthorUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListSessionsOfAuthorUsingGET

returns all sessions of an author

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.ListSessionsOfAuthorUsingGET(ctx, operations.ListSessionsOfAuthorUsingGETRequest{
        AuthorID: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSessionsOfAuthorUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListSessionsOfAuthorUsingPOST

returns all sessions of an author

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Author.ListSessionsOfAuthorUsingPOST(ctx, operations.ListSessionsOfAuthorUsingPOSTRequest{
        AuthorID: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSessionsOfAuthorUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```
