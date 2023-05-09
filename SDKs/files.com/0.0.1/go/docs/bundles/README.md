# Bundles

## Overview

Operations about bundles

### Available Operations

* [DeleteBundlesID](#deletebundlesid) - Delete Bundle
* [GetBundles](#getbundles) - List Bundles
* [GetBundlesID](#getbundlesid) - Show Bundle
* [PatchBundlesID](#patchbundlesid) - Update Bundle
* [PostBundles](#postbundles) - Create Bundle
* [PostBundlesIDShare](#postbundlesidshare) - Send email(s) with a link to bundle

## DeleteBundlesID

Delete Bundle

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
    res, err := s.Bundles.DeleteBundlesID(ctx, operations.DeleteBundlesIDRequest{
        ID: 144847,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBundles

List Bundles

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
    res, err := s.Bundles.GetBundles(ctx, operations.GetBundlesRequest{
        Cursor: sdk.String("magni"),
        Filter: map[string]interface{}{
            "sunt": "ullam",
            "nam": "hic",
        },
        FilterGt: map[string]interface{}{
            "cumque": "soluta",
        },
        FilterGteq: map[string]interface{}{
            "et": "saepe",
            "ipsum": "veritatis",
            "nobis": "quos",
        },
        FilterLt: map[string]interface{}{
            "cupiditate": "aperiam",
            "delectus": "dolorem",
            "dolore": "labore",
        },
        FilterLteq: map[string]interface{}{
            "dolorum": "architecto",
        },
        PerPage: sdk.Int(63038),
        SortBy: map[string]interface{}{
            "quas": "itaque",
        },
        UserID: sdk.Int(9240),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleEntities != nil {
        // handle response
    }
}
```

## GetBundlesID

Show Bundle

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
    res, err := s.Bundles.GetBundlesID(ctx, operations.GetBundlesIDRequest{
        ID: 669917,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleEntity != nil {
        // handle response
    }
}
```

## PatchBundlesID

Update Bundle

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bundles.PatchBundlesID(ctx, operations.PatchBundlesIDRequest{
        RequestBody: &operations.PatchBundlesIDRequestBody{
            ClickwrapID: sdk.Int(1),
            Code: sdk.String("abc123"),
            Description: sdk.String("The public description of the bundle."),
            DontSeparateSubmissionsByFolder: sdk.Bool(true),
            ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
            FormFieldSetID: sdk.Int(833038),
            InboxID: sdk.Int(1),
            MaxUses: sdk.Int(1),
            Note: sdk.String("The internal note on the bundle."),
            Password: sdk.String("Password"),
            PathTemplate: sdk.String("{{name}}_{{ip}}"),
            Paths: []string{
                "doloribus",
                "ut",
                "facilis",
                "cupiditate",
            },
            Permissions: operations.PatchBundlesIDRequestBodyPermissionsEnumRead.ToPointer(),
            PreviewOnly: sdk.Bool(false),
            RequireRegistration: sdk.Bool(false),
            RequireShareRecipient: sdk.Bool(false),
            SendEmailReceiptToUploader: sdk.Bool(true),
            SkipCompany: sdk.Bool(true),
            SkipEmail: sdk.Bool(true),
            SkipName: sdk.Bool(true),
            WatermarkAttachmentDelete: sdk.Bool(false),
            WatermarkAttachmentFile: &operations.PatchBundlesIDRequestBodyWatermarkAttachmentFile{
                Content: []byte("qui"),
                WatermarkAttachmentFile: "quae",
            },
        },
        ID: 512393,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleEntity != nil {
        // handle response
    }
}
```

## PostBundles

Create Bundle

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bundles.PostBundles(ctx, operations.PostBundlesRequestBody{
        ClickwrapID: sdk.Int(1),
        Code: sdk.String("abc123"),
        Description: sdk.String("The public description of the bundle."),
        DontSeparateSubmissionsByFolder: sdk.Bool(true),
        ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        FormFieldSetID: sdk.Int(485628),
        InboxID: sdk.Int(1),
        MaxUses: sdk.Int(1),
        Note: sdk.String("The internal note on the bundle."),
        Password: sdk.String("Password"),
        PathTemplate: sdk.String("{{name}}_{{ip}}"),
        Paths: []string{
            "voluptatibus",
            "quisquam",
            "vero",
        },
        Permissions: operations.PostBundlesRequestBodyPermissionsEnumRead.ToPointer(),
        PreviewOnly: sdk.Bool(false),
        RequireRegistration: sdk.Bool(false),
        RequireShareRecipient: sdk.Bool(false),
        SendEmailReceiptToUploader: sdk.Bool(true),
        SkipCompany: sdk.Bool(true),
        SkipEmail: sdk.Bool(true),
        SkipName: sdk.Bool(true),
        UserID: sdk.Int(606476),
        WatermarkAttachmentFile: &operations.PostBundlesRequestBodyWatermarkAttachmentFile{
            Content: []byte("quis"),
            WatermarkAttachmentFile: "ipsum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleEntity != nil {
        // handle response
    }
}
```

## PostBundlesIDShare

Send email(s) with a link to bundle

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
    res, err := s.Bundles.PostBundlesIDShare(ctx, operations.PostBundlesIDShareRequest{
        RequestBody: &operations.PostBundlesIDShareRequestBody{
            Note: sdk.String("Just a note."),
            Recipients: []map[string]interface{}{
                map[string]interface{}{
                    "consectetur": "vero",
                    "tenetur": "dignissimos",
                },
                map[string]interface{}{
                    "distinctio": "quod",
                    "odio": "similique",
                    "facilis": "vero",
                    "ducimus": "dolore",
                },
                map[string]interface{}{
                    "illum": "sequi",
                    "natus": "impedit",
                    "aut": "voluptatibus",
                    "exercitationem": "nulla",
                },
                map[string]interface{}{
                    "porro": "maiores",
                },
            },
            To: []string{
                "iusto",
                "eligendi",
                "ducimus",
                "alias",
            },
        },
        ID: 639473,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
