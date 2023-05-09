# Form

## Overview

Create and edit forms

### Available Operations

* [DeleteFormsID](#deleteformsid) - Delete this form and all of it's responses.
* [GetFormResponses](#getformresponses) - List form responses
* [GetFormResponsesID](#getformresponsesid) - Get a single form response by id
* [GetForms](#getforms) - List forms
* [GetFormsID](#getformsid) - Get a single form by id
* [PostFormResponses](#postformresponses) - Submit a response to a form
* [PostForms](#postforms) - Create a form

## DeleteFormsID

Delete this form and all of it's responses.

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
    res, err := s.Form.DeleteFormsID(ctx, operations.DeleteFormsIDRequest{
        ID: "ad879eeb-9665-4b85-afbd-02bae0be2d78",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFormResponses

List form responses

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
    res, err := s.Form.GetFormResponses(ctx, operations.GetFormResponsesRequest{
        Contribution: sdk.String("odit"),
        Form: sdk.String("explicabo"),
        User: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponses != nil {
        // handle response
    }
}
```

## GetFormResponsesID

Get a single form response by id

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
    res, err := s.Form.GetFormResponsesID(ctx, operations.GetFormResponsesIDRequest{
        ID: "9e3ea4b5-197f-4924-83da-7ce52b895c53",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponse != nil {
        // handle response
    }
}
```

## GetForms

List forms

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
    res, err := s.Form.GetForms(ctx, operations.GetFormsRequest{
        OwnedBy: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Forms != nil {
        // handle response
    }
}
```

## GetFormsID

Get a single form by id

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
    res, err := s.Form.GetFormsID(ctx, operations.GetFormsIDRequest{
        ID: "c6454efb-0b34-4896-83ca-5acfbe2fd570",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Form != nil {
        // handle response
    }
}
```

## PostFormResponses

Submit a response to a form

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Form.PostFormResponses(ctx, shared.FormResponseSubmission{
        Contribution: sdk.String("odio"),
        Form: sdk.String("minima"),
        Responses: map[string]string{
            "ducimus": "excepturi",
            "dolores": "error",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponse != nil {
        // handle response
    }
}
```

## PostForms

Create a form

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Form.PostForms(ctx, shared.FormSubmission{
        CallToAction: sdk.String("veritatis"),
        CSSURL: sdk.String("ducimus"),
        Fields: []shared.FormField{
            shared.FormField{
                Description: sdk.String("pariatur"),
                Label: sdk.String("itaque"),
                Name: sdk.String("Benny Jacobs"),
                Options: []string{
                    "placeat",
                    "quidem",
                    "exercitationem",
                    "quam",
                },
                Public: sdk.Bool(false),
                Required: sdk.Bool(false),
                Type: sdk.String("dolorem"),
            },
            shared.FormField{
                Description: sdk.String("modi"),
                Label: sdk.String("ipsa"),
                Name: sdk.String("Ignacio Dietrich"),
                Options: []string{
                    "earum",
                },
                Public: sdk.Bool(false),
                Required: sdk.Bool(false),
                Type: sdk.String("veniam"),
            },
        },
        Heading: sdk.String("animi"),
        Name: sdk.String("Juana Buckridge"),
        NoCSS: sdk.Bool(false),
        Tags: []shared.Tag{
            shared.Tag{
                Colour: sdk.String("#0061a6"),
                ID: "07f116db-9954-45fc-95fa-88970e189dbb",
                Name: "Sharon Windler",
                TagSet: &shared.TagSet{
                    ID: "33ea055b-197c-4d44-a2f5-2d82d3513bb6",
                    Name: "Alex Labadie",
                },
                URLWords: sdk.String("quis"),
            },
            shared.Tag{
                Colour: sdk.String("#0061a6"),
                ID: "6bcdb35f-f2e4-4b27-937a-8cd9e7319c17",
                Name: "Ginger Hand",
                TagSet: &shared.TagSet{
                    ID: "f77b114e-eb52-4ff7-85fc-37814d4c98e0",
                    Name: "Adam Reilly",
                },
                URLWords: sdk.String("provident"),
            },
            shared.Tag{
                Colour: sdk.String("#0061a6"),
                ID: "eb75dad6-36c6-4005-83d8-bb31180f739a",
                Name: "Mrs. Terrence Waelchi",
                TagSet: &shared.TagSet{
                    ID: "eb809e28-1033-41f3-981d-4c700b607f3c",
                    Name: "Vincent Romaguera",
                },
                URLWords: sdk.String("soluta"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Form != nil {
        // handle response
    }
}
```
