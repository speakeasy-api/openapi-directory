# OMInvoiceAPISettings

### Available Operations

* [GetOrderInvoiceDesignSettings](#getorderinvoicedesignsettings) - Get Order Invoice design settings
* [GetOrderInvoiceDesignSettingsPreview](#getorderinvoicedesignsettingspreview) - View a preview an Order Invoice using custom design settings
* [GetOrderInvoiceGeneralSettings](#getorderinvoicegeneralsettings) - Get Order Invoice general settings
* [SaveOrderInvoiceDesignSettings](#saveorderinvoicedesignsettings) - Save Order Invoice design settings
* [SaveOrderInvoiceGeneralSettings](#saveorderinvoicegeneralsettings) - Save Order Invoice general settings

## GetOrderInvoiceDesignSettings

Get Order Invoice design settings

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
    res, err := s.OMInvoiceAPISettings.GetOrderInvoiceDesignSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderInvoiceDesignSettings != nil {
        // handle response
    }
}
```

## GetOrderInvoiceDesignSettingsPreview

View a preview an Order Invoice using custom design settings

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
    res, err := s.OMInvoiceAPISettings.GetOrderInvoiceDesignSettingsPreview(ctx, operations.GetOrderInvoiceDesignSettingsPreviewRequest{
        AcceptEncoding: "commodi",
        OrderInvoiceDesignSettings: shared.OrderInvoiceDesignSettings{
            FooterContentHTML: sdk.String("itaque"),
            HeaderContentHTML: sdk.String("commodi"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderInvoiceDesignPreviewResponse != nil {
        // handle response
    }
}
```

## GetOrderInvoiceGeneralSettings

Get Order Invoice general settings

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
    res, err := s.OMInvoiceAPISettings.GetOrderInvoiceGeneralSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderInvoiceGeneralSettingsResponse != nil {
        // handle response
    }
}
```

## SaveOrderInvoiceDesignSettings

Save Order Invoice design settings

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
    res, err := s.OMInvoiceAPISettings.SaveOrderInvoiceDesignSettings(ctx, shared.OrderInvoiceDesignSettings{
        FooterContentHTML: sdk.String("totam"),
        HeaderContentHTML: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SaveOrderInvoiceGeneralSettings

Save Order Invoice general settings

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
    res, err := s.OMInvoiceAPISettings.SaveOrderInvoiceGeneralSettings(ctx, shared.OrderInvoiceGeneralSettings{
        CultureName: "en",
        InvoicePrefix: "TOTO",
        InvoiceStartingSequenceNumber: 879,
        ProductVATPercent: 4.0,
        ShippingVATPercent: 8.0,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
