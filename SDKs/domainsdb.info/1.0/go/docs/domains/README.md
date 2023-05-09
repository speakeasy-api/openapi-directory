# Domains

## Overview

Domains Database

### Available Operations

* [GetDomainsTldZoneIDDownload](#getdomainstldzoneiddownload) - Download Whole Dataset for TLD
* [GetDomainsTldZoneIDSearch](#getdomainstldzoneidsearch) - Domains Search for TLD
* [GetDomainsUpdatesAdded](#getdomainsupdatesadded) - Get added domains, latest if date not specified
* [GetDomainsUpdatesAddedDownload](#getdomainsupdatesaddeddownload) - Download added domains, latest if date not specified
* [GetDomainsUpdatesDeleted](#getdomainsupdatesdeleted) - Get deleted domains, latest if date not specified
* [GetDomainsUpdatesDeletedDownload](#getdomainsupdatesdeleteddownload) - Download deleted domains, latest if date not specified
* [GetDomainsUpdatesList](#getdomainsupdateslist) - List of updates
* [GetSearchDomainItem](#getsearchdomainitem) - Domains Database Search
* [GetTldDomainItem](#gettlddomainitem) - Get TLD records

## GetDomainsTldZoneIDDownload

Download Whole Dataset for TLD

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
    res, err := s.Domains.GetDomainsTldZoneIDDownload(ctx, operations.GetDomainsTldZoneIDDownloadRequest{
        APIKey: sdk.String("quibusdam"),
        Date: sdk.String("unde"),
        ZoneID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDomainsTldZoneIDSearch

Domains Search for TLD

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
    res, err := s.Domains.GetDomainsTldZoneIDSearch(ctx, operations.GetDomainsTldZoneIDSearchRequest{
        A: sdk.String("corrupti"),
        Cname: sdk.String("illum"),
        Mx: sdk.String("vel"),
        Ns: sdk.String("error"),
        Txt: sdk.String("deserunt"),
        APIKey: sdk.String("suscipit"),
        Country: sdk.String("Jamaica"),
        Date: sdk.String("magnam"),
        Domain: sdk.String("debitis"),
        IsDead: sdk.Bool(false),
        Limit: sdk.Int64(56713),
        Page: sdk.String("delectus"),
        ZoneID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```

## GetDomainsUpdatesAdded

Get added domains, latest if date not specified

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
    res, err := s.Domains.GetDomainsUpdatesAdded(ctx, operations.GetDomainsUpdatesAddedRequest{
        APIKey: sdk.String("suscipit"),
        Date: sdk.String("molestiae"),
        Limit: sdk.Int64(791725),
        Page: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```

## GetDomainsUpdatesAddedDownload

Download added domains, latest if date not specified

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
    res, err := s.Domains.GetDomainsUpdatesAddedDownload(ctx, operations.GetDomainsUpdatesAddedDownloadRequest{
        APIKey: sdk.String("voluptatum"),
        Date: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDomainsUpdatesDeleted

Get deleted domains, latest if date not specified

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
    res, err := s.Domains.GetDomainsUpdatesDeleted(ctx, operations.GetDomainsUpdatesDeletedRequest{
        APIKey: sdk.String("excepturi"),
        Date: sdk.String("nisi"),
        Limit: sdk.Int64(925597),
        Page: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```

## GetDomainsUpdatesDeletedDownload

Download deleted domains, latest if date not specified

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
    res, err := s.Domains.GetDomainsUpdatesDeletedDownload(ctx, operations.GetDomainsUpdatesDeletedDownloadRequest{
        APIKey: sdk.String("ab"),
        Date: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDomainsUpdatesList

List of updates

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
    res, err := s.Domains.GetDomainsUpdatesList(ctx, operations.GetDomainsUpdatesListRequest{
        APIKey: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateModel != nil {
        // handle response
    }
}
```

## GetSearchDomainItem

Domains Database Search

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
    res, err := s.Domains.GetSearchDomainItem(ctx, operations.GetSearchDomainItemRequest{
        A: sdk.String("deserunt"),
        Cname: sdk.String("perferendis"),
        Mx: sdk.String("ipsam"),
        Ns: sdk.String("repellendus"),
        Txt: sdk.String("sapiente"),
        APIKey: sdk.String("quo"),
        Country: sdk.String("Burundi"),
        Date: sdk.String("at"),
        Domain: sdk.String("at"),
        IsDead: sdk.Bool(false),
        Limit: sdk.Int64(978619),
        Page: sdk.String("molestiae"),
        Zone: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```

## GetTldDomainItem

Get TLD records

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
    res, err := s.Domains.GetTldDomainItem(ctx, operations.GetTldDomainItemRequest{
        A: sdk.String("quod"),
        Cname: sdk.String("esse"),
        Mx: sdk.String("totam"),
        Ns: sdk.String("porro"),
        Txt: sdk.String("dolorum"),
        APIKey: sdk.String("dicta"),
        Country: sdk.String("Puerto Rico"),
        Date: sdk.String("officia"),
        Domain: sdk.String("occaecati"),
        IsDead: sdk.Bool(false),
        Limit: sdk.Int64(143353),
        Page: sdk.String("deleniti"),
        ZoneID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```
