# Meta

## Overview

Endpoints that give information about the API.

### Available Operations

* [MetaGet](#metaget) - Get GitHub Enterprise Server meta information
* [MetaGetOctocat](#metagetoctocat) - Get Octocat
* [MetaGetZen](#metagetzen) - Get the Zen of GitHub
* [MetaRoot](#metaroot) - GitHub API Root

## MetaGet

Get GitHub Enterprise Server meta information

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/meta#get-github-meta-information>

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

## MetaGetOctocat

Get the octocat as ASCII art

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/meta#get-octocat>

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
        S: sdk.String("quos"),
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
<https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#root-endpoint>

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

    if res.MetaRoot200ApplicationJSONObject != nil {
        // handle response
    }
}
```
