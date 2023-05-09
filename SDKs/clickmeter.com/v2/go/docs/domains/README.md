# Domains

### Available Operations

* [DomainsCount](#domainscount) - Retrieve count of domains
* [DomainsDelete](#domainsdelete) - Delete a domain
* [DomainsGet](#domainsget) - Retrieve a list of domains
* [DomainsPutForm](#domainsputform) - Create a domain
* [DomainsPutJSON](#domainsputjson) - Create a domain
* [DomainsPutRaw](#domainsputraw) - Create a domain
* [DomainsUpdateForm](#domainsupdateform) - Update a domain
* [DomainsUpdateJSON](#domainsupdatejson) - Update a domain
* [DomainsUpdateRaw](#domainsupdateraw) - Update a domain
* [GetDomainsID](#getdomainsid) - Get a domain

## DomainsCount

Retrieve count of domains

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
    res, err := s.Domains.DomainsCount(ctx, operations.DomainsCountRequest{
        Name: sdk.String("Howard Cronin"),
        Type: operations.DomainsCountTypeEnumPersonal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## DomainsDelete

Delete a domain

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
    res, err := s.Domains.DomainsDelete(ctx, operations.DomainsDeleteRequest{
        ID: 115661,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsGet

Retrieve a list of domains

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
    res, err := s.Domains.DomainsGet(ctx, operations.DomainsGetRequest{
        Limit: sdk.Int(663318),
        Name: sdk.String("Laurence Nienow"),
        Offset: sdk.Int(25756),
        Type: operations.DomainsGetTypeEnumGo.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsPutForm

Create a domain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Domains.DomainsPutForm(ctx, shared.APICoreDtoDomainsDomain{
        Custom404: sdk.String("ipsa"),
        CustomHomepage: sdk.String("voluptates"),
        ID: sdk.Int64(80061),
        Name: sdk.String("Lena Greenholt"),
        Type: shared.APICoreDtoDomainsDomainTypeEnumSystem.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsPutJSON

Create a domain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Domains.DomainsPutJSON(ctx, shared.APICoreDtoDomainsDomain{
        Custom404: sdk.String("autem"),
        CustomHomepage: sdk.String("esse"),
        ID: sdk.Int64(172951),
        Name: sdk.String("Albert Ortiz"),
        Type: shared.APICoreDtoDomainsDomainTypeEnumGo.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsPutRaw

Create a domain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Domains.DomainsPutRaw(ctx, []byte("provident"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsUpdateForm

Update a domain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Domains.DomainsUpdateForm(ctx, operations.DomainsUpdateFormRequest{
        APICoreDtoDomainsDomain: shared.APICoreDtoDomainsDomain{
            Custom404: sdk.String("accusamus"),
            CustomHomepage: sdk.String("necessitatibus"),
            ID: sdk.Int64(733289),
            Name: sdk.String("Angel Jones"),
            Type: shared.APICoreDtoDomainsDomainTypeEnumDedicated.ToPointer(),
        },
        ID: 357207,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsUpdateJSON

Update a domain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Domains.DomainsUpdateJSON(ctx, operations.DomainsUpdateJSONRequest{
        APICoreDtoDomainsDomain: shared.APICoreDtoDomainsDomain{
            Custom404: sdk.String("officiis"),
            CustomHomepage: sdk.String("voluptatibus"),
            ID: sdk.Int64(737279),
            Name: sdk.String("Robert Crona"),
            Type: shared.APICoreDtoDomainsDomainTypeEnumPersonal.ToPointer(),
        },
        ID: 34070,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## DomainsUpdateRaw

Update a domain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Domains.DomainsUpdateRaw(ctx, operations.DomainsUpdateRawRequest{
        RequestBody: []byte("expedita"),
        ID: 885208,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GetDomainsID

Get a domain

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
    res, err := s.Domains.GetDomainsID(ctx, operations.GetDomainsIDRequest{
        ID: 177005,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoDomainsDomain != nil {
        // handle response
    }
}
```
