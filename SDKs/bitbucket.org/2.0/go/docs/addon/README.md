# Addon

## Overview

The addon resource is intended to use used by Bitbucket Cloud Connect
Apps, and only supports JWT authentication.


### Available Operations

* [DeleteAddon](#deleteaddon) - Delete an app
* [DeleteAddonLinkersLinkerKeyValues](#deleteaddonlinkerslinkerkeyvalues) - Delete all linker values
* [DeleteAddonLinkersLinkerKeyValuesValueID](#deleteaddonlinkerslinkerkeyvaluesvalueid) - Delete a linker value
* [GetAddonLinkers](#getaddonlinkers) - List linkers for an app
* [GetAddonLinkersLinkerKey](#getaddonlinkerslinkerkey) - Get a linker for an app
* [GetAddonLinkersLinkerKeyValues](#getaddonlinkerslinkerkeyvalues) - List linker values for a linker
* [GetAddonLinkersLinkerKeyValuesValueID](#getaddonlinkerslinkerkeyvaluesvalueid) - Get a linker value
* [PostAddonLinkersLinkerKeyValues](#postaddonlinkerslinkerkeyvalues) - Create a linker value
* [PutAddon](#putaddon) - Update an installed app
* [PutAddonLinkersLinkerKeyValues](#putaddonlinkerslinkerkeyvalues) - Update a linker value

## DeleteAddon

Deletes the application for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket Marketplace need not use this endpoint as
updates for those applications can be sent out via the
UI of that section.

```
$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>"
```

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.DeleteAddon(ctx, operations.DeleteAddonSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAddonLinkersLinkerKeyValues

Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.DeleteAddonLinkersLinkerKeyValues(ctx, operations.DeleteAddonLinkersLinkerKeyValuesRequest{
        LinkerKey: "corrupti",
    }, operations.DeleteAddonLinkersLinkerKeyValuesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAddonLinkersLinkerKeyValuesValueID

Delete a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.DeleteAddonLinkersLinkerKeyValuesValueID(ctx, operations.DeleteAddonLinkersLinkerKeyValuesValueIDRequest{
        LinkerKey: "provident",
        ValueID: 715190,
    }, operations.DeleteAddonLinkersLinkerKeyValuesValueIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAddonLinkers

Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
for the authenticated application.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.GetAddonLinkers(ctx, operations.GetAddonLinkersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAddonLinkersLinkerKey

Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
for the authenticated application.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.GetAddonLinkersLinkerKey(ctx, operations.GetAddonLinkersLinkerKeyRequest{
        LinkerKey: "quibusdam",
    }, operations.GetAddonLinkersLinkerKeySecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAddonLinkersLinkerKeyValues

Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.GetAddonLinkersLinkerKeyValues(ctx, operations.GetAddonLinkersLinkerKeyValuesRequest{
        LinkerKey: "unde",
    }, operations.GetAddonLinkersLinkerKeyValuesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAddonLinkersLinkerKeyValuesValueID

Get a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.GetAddonLinkersLinkerKeyValuesValueID(ctx, operations.GetAddonLinkersLinkerKeyValuesValueIDRequest{
        LinkerKey: "nulla",
        ValueID: 544883,
    }, operations.GetAddonLinkersLinkerKeyValuesValueIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAddonLinkersLinkerKeyValues

Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
linker of authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.PostAddonLinkersLinkerKeyValues(ctx, operations.PostAddonLinkersLinkerKeyValuesRequest{
        LinkerKey: "illum",
    }, operations.PostAddonLinkersLinkerKeyValuesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAddon

Updates the application installation for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket need not use this endpoint as updates for those
applications can be sent out via the UI of that section.

Passing an empty body will update the installation using the
existing descriptor URL.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{}'
```

The new `descriptor` for the installation can be also provided
in the body directly.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor": $NEW_DESCRIPTOR}'
```

In both these modes the URL of the descriptor cannot be changed. To
change the descriptor location and upgrade an installation
the request must be made exclusively with a `descriptor_url`.

 ```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor_url": $NEW_URL}'
```

The `descriptor_url` must exactly match the marketplace registration
that Atlassian has for the application. Contact your Atlassian
developer advocate to update this registration. Once the registration
has been updated you may call this resource for each installation.

Note that the scopes of the application cannot be increased
in the new descriptor nor reduced to none.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.PutAddon(ctx, operations.PutAddonSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAddonLinkersLinkerKeyValues

Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Addon.PutAddonLinkersLinkerKeyValues(ctx, operations.PutAddonLinkersLinkerKeyValuesRequest{
        LinkerKey: "vel",
    }, operations.PutAddonLinkersLinkerKeyValuesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
