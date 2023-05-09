# CatalogsImportationCatalogInfo

### Available Operations

* [ImportationConfigureCatalogColumn](#importationconfigurecatalogcolumn) - Configure catalog column
* [ImportationDeleteCustomColumn](#importationdeletecustomcolumn) - Delete Custom Column
* [ImportationGetCustomColumnExpression](#importationgetcustomcolumnexpression) - Get the encrypted custom column expression in this importation
* [ImportationGetCustomColumns](#importationgetcustomcolumns) - Get custom columns currently place in this importation
* [ImportationGetDetectedCatalogColumns](#importationgetdetectedcatalogcolumns) - Get detected catalog columns during this importation.
* [ImportationGetProductSample](#importationgetproductsample) - Get the product sample related to this importation with all columns (catalog and custom)
* [ImportationGetProductSampleCustomColumnValue](#importationgetproductsamplecustomcolumnvalue) - Get product sample custom column value related to this importation.
* [ImportationIgnoreColumn](#importationignorecolumn) - Ignore Column
* [ImportationMapCatalogColumn](#importationmapcatalogcolumn) - Map catalog column to a BeezUP column
* [ImportationMapCustomColumn](#importationmapcustomcolumn) - Map custom column to a BeezUP column
* [ImportationReattendColumn](#importationreattendcolumn) - Reattend Column
* [ImportationSaveCustomColumn](#importationsavecustomcolumn) - Create or replace a custom column
* [ImportationUnmapCatalogColumn](#importationunmapcatalogcolumn) - Unmap catalog column
* [ImportationUnmapCustomColumn](#importationunmapcustomcolumn) - Unmap custom column

## ImportationConfigureCatalogColumn

Configure catalog column

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CatalogsImportationCatalogInfo.ImportationConfigureCatalogColumn(ctx, operations.ImportationConfigureCatalogColumnRequest{
        ColumnID: "occaecati",
        ConfigureCatalogColumnCatalogRequest: shared.ConfigureCatalogColumnCatalogRequest{
            CatalogColumn: shared.CatalogColumn{
                CatalogColumnName: "SKU",
                Configuration: shared.ColumnConfiguration{
                    BeezUPColumnName: sdk.String("CategoryFirstLevel"),
                    CanBeTruncated: sdk.Bool(true),
                    ColumnCultureName: sdk.String("fr-FR"),
                    ColumnDataType: shared.BeezUPCommonColumnDataTypeEnumString,
                    ColumnFormat: sdk.String("MM/dd/yyyy"),
                    ColumnImportance: shared.BeezUPCommonColumnImportanceEnumRequired,
                    DisplayGroupName: sdk.String("Category"),
                },
                DuplicateProductValueConfiguration: &shared.DuplicateProductValueConfiguration{
                    CompareOptions: shared.CompareOptionsEnumIgnoreCase,
                    Strategy: shared.DuplicateProductValueStrategyEnumKeepFirstDuplicateProductOnly,
                },
                ID: "8f6671d6-a9bc-4de0-a0c4-4643b0c3f871",
                Ignored: sdk.Bool(false),
                Links: shared.CatalogColumnLinks{
                    Rename: &shared.LinksCatalogChangeCatalogColumnUserNameLink{
                        AllOptionalParamsProvided: sdk.Bool(false),
                        AllRequiredParamsProvided: sdk.Bool(false),
                        Description: sdk.String("This is a description link"),
                        DocURL: sdk.String("https://api-docs.beezup.com/#operation/EnableChannelCatalog"),
                        Href: "/v2/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}",
                        Info: &shared.BeezUPCommonInfoSummaries{
                            Errors: []shared.BeezUPCommonErrorSummary{
                                shared.BeezUPCommonErrorSummary{
                                    ErrorArguments: map[string]string{
                                        "delectus": "quidem",
                                        "provident": "nam",
                                        "id": "blanditiis",
                                        "deleniti": "sapiente",
                                    },
                                    ErrorCode: sdk.String("amet"),
                                    ErrorGUID: sdk.String("a6699707-4ba4-4469-b6e2-141959890afa"),
                                    ErrorMessage: sdk.String("ad"),
                                    ExceptionDetail: &shared.BeezUPCommonExceptionDetail{
                                        HelpLink: sdk.String("eum"),
                                        Message: sdk.String("dolor"),
                                        StackTrace: sdk.String("necessitatibus"),
                                        Type: sdk.String("odit"),
                                    },
                                    ObjectName: sdk.String("nemo"),
                                    PropertyName: sdk.String("quasi"),
                                    PropertyValue: sdk.String("iure"),
                                    Source: sdk.String("doloribus"),
                                    TechnicalErrorMessage: sdk.String("debitis"),
                                    UtcDate: types.MustTimeFromString("2022-03-12T17:44:26.081Z"),
                                },
                                shared.BeezUPCommonErrorSummary{
                                    ErrorArguments: map[string]string{
                                        "facilis": "in",
                                        "architecto": "architecto",
                                        "repudiandae": "ullam",
                                    },
                                    ErrorCode: sdk.String("expedita"),
                                    ErrorGUID: sdk.String("7fd2ed02-8921-4cdd-8692-601fb576b0d5"),
                                    ErrorMessage: sdk.String("voluptatibus"),
                                    ExceptionDetail: &shared.BeezUPCommonExceptionDetail{
                                        HelpLink: sdk.String("perferendis"),
                                        Message: sdk.String("fugiat"),
                                        StackTrace: sdk.String("amet"),
                                        Type: sdk.String("aut"),
                                    },
                                    ObjectName: sdk.String("cumque"),
                                    PropertyName: sdk.String("corporis"),
                                    PropertyValue: sdk.String("hic"),
                                    Source: sdk.String("libero"),
                                    TechnicalErrorMessage: sdk.String("nobis"),
                                    UtcDate: types.MustTimeFromString("2022-08-30T02:49:20.597Z"),
                                },
                            },
                            Informations: []shared.BeezUPCommonInfoSummary{
                                shared.BeezUPCommonInfoSummary{
                                    InformationArguments: map[string]string{
                                        "eaque": "quis",
                                        "nesciunt": "eos",
                                    },
                                    InformationCode: sdk.String("perferendis"),
                                    InformationMessage: sdk.String("dolores"),
                                    ObjectName: sdk.String("minus"),
                                    PropertyName: sdk.String("quam"),
                                    PropertyValue: sdk.String("dolor"),
                                },
                                shared.BeezUPCommonInfoSummary{
                                    InformationArguments: map[string]string{
                                        "nostrum": "hic",
                                        "recusandae": "omnis",
                                        "facilis": "perspiciatis",
                                        "voluptatem": "porro",
                                    },
                                    InformationCode: sdk.String("consequuntur"),
                                    InformationMessage: sdk.String("blanditiis"),
                                    ObjectName: sdk.String("error"),
                                    PropertyName: sdk.String("eaque"),
                                    PropertyValue: sdk.String("occaecati"),
                                },
                                shared.BeezUPCommonInfoSummary{
                                    InformationArguments: map[string]string{
                                        "adipisci": "asperiores",
                                        "earum": "modi",
                                        "iste": "dolorum",
                                    },
                                    InformationCode: sdk.String("deleniti"),
                                    InformationMessage: sdk.String("pariatur"),
                                    ObjectName: sdk.String("provident"),
                                    PropertyName: sdk.String("nobis"),
                                    PropertyValue: sdk.String("libero"),
                                },
                            },
                            Successes: []shared.BeezUPCommonSuccessSummary{
                                shared.BeezUPCommonSuccessSummary{
                                    ObjectName: sdk.String("quaerat"),
                                    PropertyName: sdk.String("quos"),
                                    PropertyValue: sdk.String("aliquid"),
                                    SuccessArguments: map[string]string{
                                        "dolorem": "dolor",
                                    },
                                    SuccessCode: sdk.String("qui"),
                                    SuccessMessage: sdk.String("ipsum"),
                                },
                                shared.BeezUPCommonSuccessSummary{
                                    ObjectName: sdk.String("hic"),
                                    PropertyName: sdk.String("excepturi"),
                                    PropertyValue: sdk.String("cum"),
                                    SuccessArguments: map[string]string{
                                        "dignissimos": "reiciendis",
                                        "amet": "dolorum",
                                    },
                                    SuccessCode: sdk.String("numquam"),
                                    SuccessMessage: sdk.String("veritatis"),
                                },
                                shared.BeezUPCommonSuccessSummary{
                                    ObjectName: sdk.String("ipsa"),
                                    PropertyName: sdk.String("ipsa"),
                                    PropertyValue: sdk.String("iure"),
                                    SuccessArguments: map[string]string{
                                        "quaerat": "accusamus",
                                        "quidem": "voluptatibus",
                                    },
                                    SuccessCode: sdk.String("voluptas"),
                                    SuccessMessage: sdk.String("natus"),
                                },
                                shared.BeezUPCommonSuccessSummary{
                                    ObjectName: sdk.String("eos"),
                                    PropertyName: sdk.String("atque"),
                                    PropertyValue: sdk.String("sit"),
                                    SuccessArguments: map[string]string{
                                        "ab": "soluta",
                                        "dolorum": "iusto",
                                        "voluptate": "dolorum",
                                        "deleniti": "omnis",
                                    },
                                    SuccessCode: sdk.String("necessitatibus"),
                                    SuccessMessage: sdk.String("distinctio"),
                                },
                            },
                            Warnings: []shared.BeezUPCommonWarningSummary{
                                shared.BeezUPCommonWarningSummary{
                                    TechnicalErrorMessage: sdk.String("nihil"),
                                    WarningArguments: map[string]string{
                                        "voluptate": "id",
                                    },
                                    WarningCode: sdk.String("saepe"),
                                    WarningMessage: sdk.String("eius"),
                                },
                                shared.BeezUPCommonWarningSummary{
                                    TechnicalErrorMessage: sdk.String("aspernatur"),
                                    WarningArguments: map[string]string{
                                        "amet": "optio",
                                    },
                                    WarningCode: sdk.String("accusamus"),
                                    WarningMessage: sdk.String("ad"),
                                },
                                shared.BeezUPCommonWarningSummary{
                                    TechnicalErrorMessage: sdk.String("saepe"),
                                    WarningArguments: map[string]string{
                                        "deserunt": "provident",
                                        "minima": "repellendus",
                                    },
                                    WarningCode: sdk.String("totam"),
                                    WarningMessage: sdk.String("similique"),
                                },
                                shared.BeezUPCommonWarningSummary{
                                    TechnicalErrorMessage: sdk.String("alias"),
                                    WarningArguments: map[string]string{
                                        "quaerat": "tempora",
                                        "vel": "quod",
                                        "officiis": "qui",
                                        "dolorum": "a",
                                    },
                                    WarningCode: sdk.String("esse"),
                                    WarningMessage: sdk.String("harum"),
                                },
                            },
                        },
                        Label: sdk.String("The translated label"),
                        Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                        OperationID: sdk.String("GetOrder"),
                        Parameters: map[string]shared.BeezUPCommonLinkParameter3{
                            "ipsum": shared.BeezUPCommonLinkParameter3{
                                Description: sdk.String("the store identifier"),
                                In: shared.BeezUPCommonParameterInEnumPath,
                                Label: sdk.String("The translated label"),
                                LovLink: &shared.BeezUPCommonLOVLink3{
                                    Href: "/v2/public/Go2CultureName",
                                    Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                },
                                LovRequired: sdk.Bool(true),
                                Properties: map[string]shared.BeezUPCommonLinkParameterProperty3{
                                    "tenetur": shared.BeezUPCommonLinkParameterProperty3{
                                        Description: sdk.String("the store identifier"),
                                        Label: sdk.String("The translated label"),
                                        LovLink: &shared.BeezUPCommonLOVLink3{
                                            Href: "/v2/public/Go2CultureName",
                                            Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                        },
                                        LovRequired: sdk.Bool(true),
                                        Required: sdk.Bool(true),
                                        Schema: sdk.String("orderListRequest"),
                                        Type: shared.BeezUPCommonParameterTypeEnumString,
                                        Value: map[string]interface{}{
                                            "tempore": "accusamus",
                                        },
                                    },
                                    "numquam": shared.BeezUPCommonLinkParameterProperty3{
                                        Description: sdk.String("the store identifier"),
                                        Label: sdk.String("The translated label"),
                                        LovLink: &shared.BeezUPCommonLOVLink3{
                                            Href: "/v2/public/Go2CultureName",
                                            Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                        },
                                        LovRequired: sdk.Bool(true),
                                        Required: sdk.Bool(true),
                                        Schema: sdk.String("orderListRequest"),
                                        Type: shared.BeezUPCommonParameterTypeEnumString,
                                        Value: map[string]interface{}{
                                            "dolorem": "sapiente",
                                            "totam": "nihil",
                                        },
                                    },
                                    "sit": shared.BeezUPCommonLinkParameterProperty3{
                                        Description: sdk.String("the store identifier"),
                                        Label: sdk.String("The translated label"),
                                        LovLink: &shared.BeezUPCommonLOVLink3{
                                            Href: "/v2/public/Go2CultureName",
                                            Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                        },
                                        LovRequired: sdk.Bool(true),
                                        Required: sdk.Bool(true),
                                        Schema: sdk.String("orderListRequest"),
                                        Type: shared.BeezUPCommonParameterTypeEnumString,
                                        Value: map[string]interface{}{
                                            "neque": "sed",
                                            "vel": "libero",
                                            "voluptas": "deserunt",
                                        },
                                    },
                                    "quam": shared.BeezUPCommonLinkParameterProperty3{
                                        Description: sdk.String("the store identifier"),
                                        Label: sdk.String("The translated label"),
                                        LovLink: &shared.BeezUPCommonLOVLink3{
                                            Href: "/v2/public/Go2CultureName",
                                            Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                        },
                                        LovRequired: sdk.Bool(true),
                                        Required: sdk.Bool(true),
                                        Schema: sdk.String("orderListRequest"),
                                        Type: shared.BeezUPCommonParameterTypeEnumString,
                                        Value: map[string]interface{}{
                                            "incidunt": "qui",
                                        },
                                    },
                                },
                                Required: sdk.Bool(true),
                                Schema: sdk.String("orderListRequest"),
                                Type: shared.BeezUPCommonParameterTypeEnumString.ToPointer(),
                                Value: map[string]interface{}{
                                    "maxime": "pariatur",
                                    "soluta": "dicta",
                                    "laborum": "totam",
                                },
                            },
                            "incidunt": shared.BeezUPCommonLinkParameter3{
                                Description: sdk.String("the store identifier"),
                                In: shared.BeezUPCommonParameterInEnumPath,
                                Label: sdk.String("The translated label"),
                                LovLink: &shared.BeezUPCommonLOVLink3{
                                    Href: "/v2/public/Go2CultureName",
                                    Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                },
                                LovRequired: sdk.Bool(true),
                                Properties: map[string]shared.BeezUPCommonLinkParameterProperty3{
                                    "dolores": shared.BeezUPCommonLinkParameterProperty3{
                                        Description: sdk.String("the store identifier"),
                                        Label: sdk.String("The translated label"),
                                        LovLink: &shared.BeezUPCommonLOVLink3{
                                            Href: "/v2/public/Go2CultureName",
                                            Method: shared.BeezUPCommonHTTPMethodEnumGet.ToPointer(),
                                        },
                                        LovRequired: sdk.Bool(true),
                                        Required: sdk.Bool(true),
                                        Schema: sdk.String("orderListRequest"),
                                        Type: shared.BeezUPCommonParameterTypeEnumString,
                                        Value: map[string]interface{}{
                                            "facilis": "aliquid",
                                            "quam": "molestias",
                                            "temporibus": "qui",
                                        },
                                    },
                                },
                                Required: sdk.Bool(true),
                                Schema: sdk.String("orderListRequest"),
                                Type: shared.BeezUPCommonParameterTypeEnumString.ToPointer(),
                                Value: map[string]interface{}{
                                    "fugit": "magni",
                                },
                            },
                        },
                        URLTemplated: sdk.Bool(false),
                    },
                },
                UserColumName: "My SKU",
            },
        },
        ExecutionID: "odio",
        StoreID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationDeleteCustomColumn

Delete Custom Column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationDeleteCustomColumn(ctx, operations.ImportationDeleteCustomColumnRequest{
        ColumnID: "ullam",
        ExecutionID: "nam",
        StoreID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationGetCustomColumnExpression

Get the encrypted custom column expression in this importation

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationGetCustomColumnExpression(ctx, operations.ImportationGetCustomColumnExpressionRequest{
        ColumnID: "voluptatem",
        ExecutionID: "cumque",
        StoreID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationGetCustomColumnExpression200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ImportationGetCustomColumns

Get custom columns currently place in this importation

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationGetCustomColumns(ctx, operations.ImportationGetCustomColumnsRequest{
        ExecutionID: "nobis",
        StoreID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationCustomColumnList != nil {
        // handle response
    }
}
```

## ImportationGetDetectedCatalogColumns

Get detected catalog columns during this importation.

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationGetDetectedCatalogColumns(ctx, operations.ImportationGetDetectedCatalogColumnsRequest{
        ExecutionID: "saepe",
        StoreID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectedCatalogColumnList != nil {
        // handle response
    }
}
```

## ImportationGetProductSample

Get the product sample related to this importation with all columns (catalog and custom)

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationGetProductSample(ctx, operations.ImportationGetProductSampleRequest{
        ExecutionID: "veritatis",
        ProductSampleIndex: 749255,
        StoreID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSample != nil {
        // handle response
    }
}
```

## ImportationGetProductSampleCustomColumnValue

/!\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationGetProductSampleCustomColumnValue(ctx, operations.ImportationGetProductSampleCustomColumnValueRequest{
        ColumnID: "tempore",
        ExecutionID: "cupiditate",
        ProductSampleIndex: 45614,
        StoreID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationGetProductSampleCustomColumnValue200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ImportationIgnoreColumn

Ignore Column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationIgnoreColumn(ctx, operations.ImportationIgnoreColumnRequest{
        ColumnID: "dolorem",
        ExecutionID: "dolore",
        StoreID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationMapCatalogColumn

Map catalog column to a BeezUP column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationMapCatalogColumn(ctx, operations.ImportationMapCatalogColumnRequest{
        ColumnID: "adipisci",
        ExecutionID: "dolorum",
        MapBeezUPColumnRequest: shared.MapBeezUPColumnRequest{
            BeezUPColumnName: "CategoryFirstLevel",
        },
        StoreID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationMapCustomColumn

Map custom column to a BeezUP column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationMapCustomColumn(ctx, operations.ImportationMapCustomColumnRequest{
        ColumnID: "quae",
        ExecutionID: "aut",
        MapBeezUPColumnRequest: shared.MapBeezUPColumnRequest{
            BeezUPColumnName: "CategoryFirstLevel",
        },
        StoreID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationReattendColumn

Reattend Column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationReattendColumn(ctx, operations.ImportationReattendColumnRequest{
        ColumnID: "itaque",
        ExecutionID: "consequatur",
        StoreID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationSaveCustomColumn

Create or replace a custom column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationSaveCustomColumn(ctx, operations.ImportationSaveCustomColumnRequest{
        ChangeCustomColumnRequest: shared.ChangeCustomColumnRequest{
            EncryptedBlocklyExpression: "apokpoa,opz,sixsoisiosnoisn",
            EncryptedExpression: "uziushdczaniodnndonisodndsiondsoidsndoin",
            UserColumName: "My SKU",
        },
        ColumnID: "repellendus",
        ExecutionID: "porro",
        StoreID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationUnmapCatalogColumn

Unmap catalog column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationUnmapCatalogColumn(ctx, operations.ImportationUnmapCatalogColumnRequest{
        ColumnID: "ut",
        ExecutionID: "facilis",
        StoreID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationUnmapCustomColumn

Unmap custom column

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
    res, err := s.CatalogsImportationCatalogInfo.ImportationUnmapCustomColumn(ctx, operations.ImportationUnmapCustomColumnRequest{
        ColumnID: "qui",
        ExecutionID: "quae",
        StoreID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
