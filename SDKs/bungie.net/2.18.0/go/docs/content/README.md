# Content

## Overview

content

### Available Operations

* [ContentGetContentByID](#contentgetcontentbyid) - Returns a content item referenced by id
* [ContentGetContentByTagAndType](#contentgetcontentbytagandtype) - Returns the newest item that matches a given tag and Content Type.
* [ContentGetContentType](#contentgetcontenttype) - Gets an object describing a particular variant of content.
* [ContentRssNewsArticles](#contentrssnewsarticles) - Returns a JSON string response that is the RSS feed for news articles.
* [ContentSearchContentByTagAndType](#contentsearchcontentbytagandtype) - Searches for Content Items that match the given Tag and Content Type.
* [ContentSearchContentWithText](#contentsearchcontentwithtext) - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* [ContentSearchHelpArticles](#contentsearchhelparticles) - Search for Help Articles.

## ContentGetContentByID

Returns a content item referenced by id

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
    res, err := s.Content.ContentGetContentByID(ctx, operations.ContentGetContentByIDRequest{
        Head: sdk.Bool(false),
        ID: 423655,
        Locale: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ContentGetContentByTagAndType

Returns the newest item that matches a given tag and Content Type.

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
    res, err := s.Content.ContentGetContentByTagAndType(ctx, operations.ContentGetContentByTagAndTypeRequest{
        Head: sdk.Bool(false),
        Locale: "deserunt",
        Tag: "suscipit",
        Type: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ContentGetContentType

Gets an object describing a particular variant of content.

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
    res, err := s.Content.ContentGetContentType(ctx, operations.ContentGetContentTypeRequest{
        Type: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ContentRssNewsArticles

Returns a JSON string response that is the RSS feed for news articles.

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
    res, err := s.Content.ContentRssNewsArticles(ctx, operations.ContentRssNewsArticlesRequest{
        Categoryfilter: sdk.String("debitis"),
        Includebody: sdk.Bool(false),
        PageToken: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ContentSearchContentByTagAndType

Searches for Content Items that match the given Tag and Content Type.

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
    res, err := s.Content.ContentSearchContentByTagAndType(ctx, operations.ContentSearchContentByTagAndTypeRequest{
        Currentpage: sdk.Int(963663),
        Head: sdk.Bool(false),
        Itemsperpage: sdk.Int(272656),
        Locale: "suscipit",
        Tag: "molestiae",
        Type: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ContentSearchContentWithText

Gets content based on querystring information passed in. Provides basic search and text search capabilities.

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
    res, err := s.Content.ContentSearchContentWithText(ctx, operations.ContentSearchContentWithTextRequest{
        Ctype: sdk.String("placeat"),
        Currentpage: sdk.Int(528895),
        Head: sdk.Bool(false),
        Locale: "iusto",
        Searchtext: sdk.String("excepturi"),
        Source: sdk.String("nisi"),
        Tag: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ContentSearchHelpArticles

Search for Help Articles.

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
    res, err := s.Content.ContentSearchHelpArticles(ctx, operations.ContentSearchHelpArticlesRequest{
        Searchtext: "temporibus",
        Size: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
