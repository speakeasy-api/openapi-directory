# FormFieldSets

## Overview

Operations about form_field_sets

### Available Operations

* [DeleteFormFieldSetsID](#deleteformfieldsetsid) - Delete Form Field Set
* [GetFormFieldSets](#getformfieldsets) - List Form Field Sets
* [GetFormFieldSetsID](#getformfieldsetsid) - Show Form Field Set
* [PatchFormFieldSetsID](#patchformfieldsetsid) - Update Form Field Set
* [PostFormFieldSets](#postformfieldsets) - Create Form Field Set

## DeleteFormFieldSetsID

Delete Form Field Set

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
    res, err := s.FormFieldSets.DeleteFormFieldSetsID(ctx, operations.DeleteFormFieldSetsIDRequest{
        ID: 556429,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFormFieldSets

List Form Field Sets

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
    res, err := s.FormFieldSets.GetFormFieldSets(ctx, operations.GetFormFieldSetsRequest{
        Cursor: sdk.String("praesentium"),
        PerPage: sdk.Int(159867),
        UserID: sdk.Int(536178),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormFieldSetEntities != nil {
        // handle response
    }
}
```

## GetFormFieldSetsID

Show Form Field Set

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
    res, err := s.FormFieldSets.GetFormFieldSetsID(ctx, operations.GetFormFieldSetsIDRequest{
        ID: 143829,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormFieldSetEntity != nil {
        // handle response
    }
}
```

## PatchFormFieldSetsID

Update Form Field Set

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
    res, err := s.FormFieldSets.PatchFormFieldSetsID(ctx, operations.PatchFormFieldSetsIDRequest{
        ID: 681393,
        PatchFormFieldSets: shared.PatchFormFieldSets{
            FormFields: []shared.PatchFormFieldSetsFormFields{
                shared.PatchFormFieldSetsFormFields{
                    DefaultOption: sdk.String("incidunt"),
                    FieldType: sdk.String("atque"),
                    HelpText: sdk.String("explicabo"),
                    ID: sdk.Int(325685),
                    Label: sdk.String("nisi"),
                    OptionsForSelect: sdk.String("fugit"),
                    Required: sdk.Bool(false),
                },
                shared.PatchFormFieldSetsFormFields{
                    DefaultOption: sdk.String("sapiente"),
                    FieldType: sdk.String("consequuntur"),
                    HelpText: sdk.String("ratione"),
                    ID: sdk.Int(129412),
                    Label: sdk.String("saepe"),
                    OptionsForSelect: sdk.String("occaecati"),
                    Required: sdk.Bool(false),
                },
                shared.PatchFormFieldSetsFormFields{
                    DefaultOption: sdk.String("atque"),
                    FieldType: sdk.String("et"),
                    HelpText: sdk.String("esse"),
                    ID: sdk.Int(910545),
                    Label: sdk.String("accusamus"),
                    OptionsForSelect: sdk.String("veritatis"),
                    Required: sdk.Bool(false),
                },
            },
            SkipCompany: sdk.Bool(false),
            SkipEmail: sdk.Bool(false),
            SkipName: sdk.Bool(false),
            Title: sdk.String("Ms."),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormFieldSetEntity != nil {
        // handle response
    }
}
```

## PostFormFieldSets

Create Form Field Set

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
    res, err := s.FormFieldSets.PostFormFieldSets(ctx, shared.PostFormFieldSets{
        FormFields: []shared.PostFormFieldSetsFormFields{
            shared.PostFormFieldSetsFormFields{
                DefaultOption: sdk.String("nam"),
                FieldType: sdk.String("vero"),
                HelpText: sdk.String("aliquid"),
                ID: sdk.Int(93459),
                Label: sdk.String("saepe"),
                OptionsForSelect: sdk.String("vel"),
                Required: sdk.Bool(false),
            },
            shared.PostFormFieldSetsFormFields{
                DefaultOption: sdk.String("harum"),
                FieldType: sdk.String("molestiae"),
                HelpText: sdk.String("rerum"),
                ID: sdk.Int(580197),
                Label: sdk.String("minima"),
                OptionsForSelect: sdk.String("distinctio"),
                Required: sdk.Bool(false),
            },
            shared.PostFormFieldSetsFormFields{
                DefaultOption: sdk.String("eligendi"),
                FieldType: sdk.String("sit"),
                HelpText: sdk.String("culpa"),
                ID: sdk.Int(731398),
                Label: sdk.String("adipisci"),
                OptionsForSelect: sdk.String("cumque"),
                Required: sdk.Bool(false),
            },
            shared.PostFormFieldSetsFormFields{
                DefaultOption: sdk.String("consequuntur"),
                FieldType: sdk.String("consequatur"),
                HelpText: sdk.String("minus"),
                ID: sdk.Int(308286),
                Label: sdk.String("sapiente"),
                OptionsForSelect: sdk.String("consectetur"),
                Required: sdk.Bool(false),
            },
        },
        SkipCompany: sdk.Bool(false),
        SkipEmail: sdk.Bool(false),
        SkipName: sdk.Bool(false),
        Title: sdk.String("Ms."),
        UserID: sdk.Int(503427),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormFieldSetEntity != nil {
        // handle response
    }
}
```
