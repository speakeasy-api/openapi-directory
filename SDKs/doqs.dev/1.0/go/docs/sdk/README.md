# SDK

### Available Operations

* [CreateTemplateDesignerTemplatesPost](#createtemplatedesignertemplatespost) - Create Template
* [DeleteDesignerTemplatesIDDelete](#deletedesignertemplatesiddelete) - Delete
* [GeneratePdfDesignerTemplatesIDGeneratePost](#generatepdfdesignertemplatesidgeneratepost) - Generate Pdf
* [ListTemplatesDesignerTemplatesIDGet](#listtemplatesdesignertemplatesidget) - List Templates
* [ListTemplatesDesignerTemplatesGet](#listtemplatesdesignertemplatesget) - List Templates
* [PreviewDesignerTemplatesPreviewPost](#previewdesignertemplatespreviewpost) - Preview
* [UpdateTemplateDesignerTemplatesIDPut](#updatetemplatedesignertemplatesidput) - Update Template

## CreateTemplateDesignerTemplatesPost

Create Template

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTemplateDesignerTemplatesPost(ctx, shared.CreateOrUpdateTemplateRequest{
        Components: []map[string]interface{}{
            map[string]interface{}{
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
            },
            map[string]interface{}{
                "officia": "occaecati",
                "fugit": "deleniti",
                "hic": "optio",
            },
            map[string]interface{}{
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            map[string]interface{}{
                "esse": "ipsum",
                "excepturi": "aspernatur",
                "perferendis": "ad",
            },
        },
        CSS: "natus",
        FooterHTML: sdk.String("sed"),
        Format: shared.FormatEnumA4,
        HeaderHTML: sdk.String("dolor"),
        Margin: &shared.CreateOrUpdateTemplateRequestMargin{
            Bottom: sdk.Int64(616934),
            Left: sdk.Int64(386489),
            Right: sdk.Int64(943749),
            Top: sdk.Int64(902599),
        },
        Name: "Harvey Hessel",
        Orientation: shared.OrientationEnumPortrait,
        PreviewPayload: map[string]interface{}{
            "architecto": "ipsa",
            "reiciendis": "est",
            "mollitia": "laborum",
        },
        TemplateHTML: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkDesignerTemplate != nil {
        // handle response
    }
}
```

## DeleteDesignerTemplatesIDDelete

Delete

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDesignerTemplatesIDDelete(ctx, operations.DeleteDesignerTemplatesIDDeleteRequest{
        ID: "352c5955-907a-4ff1-a3a2-fa9467739251",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkNoneType != nil {
        // handle response
    }
}
```

## GeneratePdfDesignerTemplatesIDGeneratePost

Generate Pdf

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GeneratePdfDesignerTemplatesIDGeneratePost(ctx, operations.GeneratePdfDesignerTemplatesIDGeneratePostRequest{
        GeneratePDFPayload: shared.GeneratePDFPayload{
            Data: map[string]interface{}{
                "animi": "enim",
                "odit": "quo",
                "sequi": "tenetur",
            },
        },
        ID: "5ad019da-1ffe-478f-897b-0074f15471b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneratePdfDesignerTemplatesIDGeneratePost200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## ListTemplatesDesignerTemplatesIDGet

List Templates

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTemplatesDesignerTemplatesIDGet(ctx, operations.ListTemplatesDesignerTemplatesIDGetRequest{
        ID: "e6e13b99-d488-4e1e-91e4-50ad2abd4426",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkDesignerTemplate != nil {
        // handle response
    }
}
```

## ListTemplatesDesignerTemplatesGet

List Templates

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTemplatesDesignerTemplatesGet(ctx, operations.ListTemplatesDesignerTemplatesGetRequest{
        Limit: sdk.Int64(586513),
        Offset: sdk.Int64(552822),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate != nil {
        // handle response
    }
}
```

## PreviewDesignerTemplatesPreviewPost

Preview

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PreviewDesignerTemplatesPreviewPost(ctx, shared.PreviewModel{
        CSS: "perferendis",
        Data: map[string]interface{}{
            "assumenda": "ipsam",
        },
        FooterHTML: sdk.String("alias"),
        HeaderHTML: sdk.String("fugit"),
        TemplateHTML: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkPreviewResponse != nil {
        // handle response
    }
}
```

## UpdateTemplateDesignerTemplatesIDPut

Update Template

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTemplateDesignerTemplatesIDPut(ctx, operations.UpdateTemplateDesignerTemplatesIDPutRequest{
        CreateOrUpdateTemplateRequest: shared.CreateOrUpdateTemplateRequest{
            Components: []map[string]interface{}{
                map[string]interface{}{
                    "facilis": "tempore",
                    "labore": "delectus",
                },
                map[string]interface{}{
                    "non": "eligendi",
                    "sint": "aliquid",
                },
                map[string]interface{}{
                    "necessitatibus": "sint",
                    "officia": "dolor",
                    "debitis": "a",
                },
            },
            CSS: "dolorum",
            FooterHTML: sdk.String("in"),
            Format: shared.FormatEnumA3,
            HeaderHTML: sdk.String("illum"),
            Margin: &shared.CreateOrUpdateTemplateRequestMargin{
                Bottom: sdk.Int64(978571),
                Left: sdk.Int64(699479),
                Right: sdk.Int64(116202),
                Top: sdk.Int64(297437),
            },
            Name: "Irving Jenkins",
            Orientation: shared.OrientationEnumPortrait,
            PreviewPayload: map[string]interface{}{
                "occaecati": "enim",
            },
            TemplateHTML: "accusamus",
        },
        ID: "fb9ba88f-3a66-4997-874b-a4469b6e2141",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseOkDesignerTemplate != nil {
        // handle response
    }
}
```
