# Meta

## Overview

Endpoints that give information about the API.

### Available Operations

* [MetaGet](#metaget) - Get GitHub meta information
* [MetaGetAllVersions](#metagetallversions) - Get all API versions
* [MetaGetOctocat](#metagetoctocat) - Get Octocat
* [MetaGetZen](#metagetzen) - Get the Zen of GitHub
* [MetaRoot](#metaroot) - GitHub API Root

## MetaGet

Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://docs.github.com/articles/about-github-s-ip-addresses/)."

**Note:** This endpoint returns both IPv4 and IPv6 addresses. However, not all features support IPv6. You should refer to the specific documentation for each feature to determine if IPv6 is supported.

**Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses.

API method documentation
<https://docs.github.com/rest/reference/meta#get-github-meta-information>

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
    res, err := s.Meta.MetaGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIOverview != nil {
        // handle response
    }
}
```

## MetaGetAllVersions

Get all supported GitHub API versions.

API method documentation
<https://docs.github.com/rest/reference/meta#get-all-api-versions>

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
    res, err := s.Meta.MetaGetAllVersions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MetaGetAllVersions200ApplicationJSONDateStrings != nil {
        // handle response
    }
}
```

## MetaGetOctocat

Get the octocat as ASCII art

API method documentation
<https://docs.github.com/rest/reference/meta#get-octocat>

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
    res, err := s.Meta.MetaGetOctocat(ctx, operations.MetaGetOctocatRequest{
        S: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetaGetOctocat200ApplicationOctocatStreamString != nil {
        // handle response
    }
}
```

## MetaGetZen

Get a random sentence from the Zen of GitHub

API method documentation
<https://docs.github.com/rest/meta#get-the-zen-of-github>

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
    res, err := s.Meta.MetaGetZen(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MetaGetZen200TextPlainString != nil {
        // handle response
    }
}
```

## MetaRoot

Get Hypermedia links to resources accessible in GitHub's REST API

API method documentation
<https://docs.github.com/rest/overview/resources-in-the-rest-api#root-endpoint>

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
    res, err := s.Meta.MetaRoot(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Root != nil {
        // handle response
    }
}
```
