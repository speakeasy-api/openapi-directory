# CatalogsGlobal

### Available Operations

* [CatalogIndex](#catalogindex) - Get the index of the catalog API
* [CatalogGetBeezUPColumns](#cataloggetbeezupcolumns) - Get the BeezUP columns

## CatalogIndex

The operation will give you all the operations you will be able to do and all the LOV used in this API.

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
    res, err := s.CatalogsGlobal.CatalogIndex(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CatalogIndex != nil {
        // handle response
    }
}
```

## CatalogGetBeezUPColumns

Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.

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
    res, err := s.CatalogsGlobal.CatalogGetBeezUPColumns(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.BeezUPColumnConfigurations != nil {
        // handle response
    }
}
```
