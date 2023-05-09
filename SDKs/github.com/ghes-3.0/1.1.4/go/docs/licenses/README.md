# Licenses

## Overview

View various OSS licenses.

### Available Operations

* [LicensesGet](#licensesget) - Get a license
* [LicensesGetAllCommonlyUsed](#licensesgetallcommonlyused) - Get all commonly used licenses
* [LicensesGetForRepo](#licensesgetforrepo) - Get the license for a repository

## LicensesGet

Get a license

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/licenses#get-a-license>

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
    res, err := s.Licenses.LicensesGet(ctx, operations.LicensesGetRequest{
        License: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```

## LicensesGetAllCommonlyUsed

Get all commonly used licenses

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/licenses#get-all-commonly-used-licenses>

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
    res, err := s.Licenses.LicensesGetAllCommonlyUsed(ctx, operations.LicensesGetAllCommonlyUsedRequest{
        Featured: sdk.Bool(false),
        Page: sdk.Int64(656762),
        PerPage: sdk.Int64(898760),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseSimples != nil {
        // handle response
    }
}
```

## LicensesGetForRepo

This method returns the contents of the repository's license file, if one is detected.

Similar to [Get repository content](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/licenses/#get-the-license-for-a-repository>

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
    res, err := s.Licenses.LicensesGetForRepo(ctx, operations.LicensesGetForRepoRequest{
        Owner: "nulla",
        Repo: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseContent != nil {
        // handle response
    }
}
```
