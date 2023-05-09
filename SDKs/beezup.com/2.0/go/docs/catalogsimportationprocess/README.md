# CatalogsImportationProcess

### Available Operations

* [ImportationCancel](#importationcancel) - Cancel importation
* [ImportationCommit](#importationcommit) - Commit Importation
* [ImportationCommitColumns](#importationcommitcolumns) - Commit columns
* [ImportationConfigureRemainingCatalogColumns](#importationconfigureremainingcatalogcolumns) - Configure remaining catalog columns
* [ImportationGetImportationMonitoring](#importationgetimportationmonitoring) - Get the importation status
* [ImportationGetProductsReport](#importationgetproductsreport) - Importation Get Products Report
* [ImportationGetReport](#importationgetreport) - Importation Get Report
* [ImportationGetReportings](#importationgetreportings) - Get the latest catalog importation reporting
* [ImportationGetReportingsAllStores](#importationgetreportingsallstores) - Get the latest catalog importation reporting for all your stores
* [ImportationStartManualUpdate](#importationstartmanualupdate) - Start Manual Import
* [ImportationTechnicalProgression](#importationtechnicalprogression) - Get technical progression

## ImportationCancel

Cancel importation

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
    res, err := s.CatalogsImportationProcess.ImportationCancel(ctx, operations.ImportationCancelRequest{
        ExecutionID: "odio",
        StoreID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationCommit

Commit Importation

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
    res, err := s.CatalogsImportationProcess.ImportationCommit(ctx, operations.ImportationCommitRequest{
        ExecutionID: "voluptatibus",
        StoreID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationCommitColumns

Commit columns

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
    res, err := s.CatalogsImportationProcess.ImportationCommitColumns(ctx, operations.ImportationCommitColumnsRequest{
        ExecutionID: "vero",
        StoreID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationConfigureRemainingCatalogColumns

This operation should be used after you have mapped the required BeezUP Columns

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
    res, err := s.CatalogsImportationProcess.ImportationConfigureRemainingCatalogColumns(ctx, operations.ImportationConfigureRemainingCatalogColumnsRequest{
        ExecutionID: "quis",
        StoreID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportationGetImportationMonitoring

Get the importation status

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
    res, err := s.CatalogsImportationProcess.ImportationGetImportationMonitoring(ctx, operations.ImportationGetImportationMonitoringRequest{
        ExecutionID: "delectus",
        StoreID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationMonitoring != nil {
        // handle response
    }
}
```

## ImportationGetProductsReport

Importation Get Products Report

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
    res, err := s.CatalogsImportationProcess.ImportationGetProductsReport(ctx, operations.ImportationGetProductsReportRequest{
        ExecutionID: "consectetur",
        GetImportationProductsReportRequest: shared.GetImportationProductsReportRequest{
            Ean: sdk.String("vero"),
            ErrorCodes: []shared.GetImportationProductsReportRequestErrorCode{
                shared.GetImportationProductsReportRequestErrorCode{
                    ErrorCode: sdk.String("dignissimos"),
                    UserColumnName: sdk.String("My SKU"),
                },
                shared.GetImportationProductsReportRequestErrorCode{
                    ErrorCode: sdk.String("hic"),
                    UserColumnName: sdk.String("My SKU"),
                },
                shared.GetImportationProductsReportRequestErrorCode{
                    ErrorCode: sdk.String("distinctio"),
                    UserColumnName: sdk.String("My SKU"),
                },
                shared.GetImportationProductsReportRequestErrorCode{
                    ErrorCode: sdk.String("quod"),
                    UserColumnName: sdk.String("My SKU"),
                },
            },
            Mpn: sdk.String("odio"),
            PageNumber: 1,
            PageSize: 100,
            Sku: sdk.String("similique"),
            Title: sdk.String("Miss"),
        },
        StoreID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImportationProductsReportResponse != nil {
        // handle response
    }
}
```

## ImportationGetReport

Importation Get Report

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
    res, err := s.CatalogsImportationProcess.ImportationGetReport(ctx, operations.ImportationGetReportRequest{
        ExecutionID: "ducimus",
        StoreID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImportationReportResponse != nil {
        // handle response
    }
}
```

## ImportationGetReportings

Get the latest catalog importation reporting

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
    res, err := s.CatalogsImportationProcess.ImportationGetReportings(ctx, operations.ImportationGetReportingsRequest{
        StoreID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationsResponse != nil {
        // handle response
    }
}
```

## ImportationGetReportingsAllStores

Get the latest catalog importation reporting for all your stores

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
    res, err := s.CatalogsImportationProcess.ImportationGetReportingsAllStores(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationsPerStoreResponse != nil {
        // handle response
    }
}
```

## ImportationStartManualUpdate

Start Manual Import

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
    res, err := s.CatalogsImportationProcess.ImportationStartManualUpdate(ctx, operations.ImportationStartManualUpdateRequest{
        StartManualImportRequest: shared.StartManualImportRequest{
            DuplicateProductSkuConfiguration: &shared.DuplicateProductValueConfiguration{
                CompareOptions: shared.CompareOptionsEnumIgnoreCase,
                Strategy: shared.DuplicateProductValueStrategyEnumKeepFirstDuplicateProductOnly,
            },
            Input: shared.InputConfiguration{
                Files: []shared.InputFileConfiguration{
                    shared.InputFileConfiguration{
                        Fetch: shared.InputFileFetchConfiguration{
                            CompressedRelativePath: sdk.String("folder/file.xxx"),
                            CompressionFormatStrategy: shared.CompressionFormatStrategyEnumNone.ToPointer(),
                            Credential: &shared.Credential{
                                Password: sdk.String("MyPassword"),
                                UserName: "MyLogin",
                            },
                            DownloadCatalogStrategy: shared.DownloadCatalogStrategyEnumSimpleURI,
                            DownloadTimeout: sdk.Int(360),
                            URI: "http://www.mywebsite.com/mycatalog.csv",
                        },
                        FileNumber: 1,
                        Read: shared.InputFileReadConfiguration{
                            CsvFileReadProperties: &shared.InputFileReadCsvConfiguration{
                                CsvSeparator: ";",
                                CsvTextQualifier: sdk.String("""),
                                HasHeaderRecord: true,
                                IgnoreHeaderRecord: true,
                            },
                            CultureName: sdk.String("fr-FR"),
                            EncodingTypeName: sdk.String("UTF-8"),
                            Format: shared.FileFormatStrategyEnumCsv,
                            XMLFileReadProperties: &shared.InputFileReadXMLConfiguration{
                                FlattenXMLChildElements: true,
                                UseXMLAttributes: true,
                            },
                        },
                    },
                    shared.InputFileConfiguration{
                        Fetch: shared.InputFileFetchConfiguration{
                            CompressedRelativePath: sdk.String("folder/file.xxx"),
                            CompressionFormatStrategy: shared.CompressionFormatStrategyEnumNone.ToPointer(),
                            Credential: &shared.Credential{
                                Password: sdk.String("MyPassword"),
                                UserName: "MyLogin",
                            },
                            DownloadCatalogStrategy: shared.DownloadCatalogStrategyEnumSimpleURI,
                            DownloadTimeout: sdk.Int(360),
                            URI: "http://www.mywebsite.com/mycatalog.csv",
                        },
                        FileNumber: 1,
                        Read: shared.InputFileReadConfiguration{
                            CsvFileReadProperties: &shared.InputFileReadCsvConfiguration{
                                CsvSeparator: ";",
                                CsvTextQualifier: sdk.String("""),
                                HasHeaderRecord: true,
                                IgnoreHeaderRecord: true,
                            },
                            CultureName: sdk.String("fr-FR"),
                            EncodingTypeName: sdk.String("UTF-8"),
                            Format: shared.FileFormatStrategyEnumCsv,
                            XMLFileReadProperties: &shared.InputFileReadXMLConfiguration{
                                FlattenXMLChildElements: true,
                                UseXMLAttributes: true,
                            },
                        },
                    },
                    shared.InputFileConfiguration{
                        Fetch: shared.InputFileFetchConfiguration{
                            CompressedRelativePath: sdk.String("folder/file.xxx"),
                            CompressionFormatStrategy: shared.CompressionFormatStrategyEnumNone.ToPointer(),
                            Credential: &shared.Credential{
                                Password: sdk.String("MyPassword"),
                                UserName: "MyLogin",
                            },
                            DownloadCatalogStrategy: shared.DownloadCatalogStrategyEnumSimpleURI,
                            DownloadTimeout: sdk.Int(360),
                            URI: "http://www.mywebsite.com/mycatalog.csv",
                        },
                        FileNumber: 1,
                        Read: shared.InputFileReadConfiguration{
                            CsvFileReadProperties: &shared.InputFileReadCsvConfiguration{
                                CsvSeparator: ";",
                                CsvTextQualifier: sdk.String("""),
                                HasHeaderRecord: true,
                                IgnoreHeaderRecord: true,
                            },
                            CultureName: sdk.String("fr-FR"),
                            EncodingTypeName: sdk.String("UTF-8"),
                            Format: shared.FileFormatStrategyEnumCsv,
                            XMLFileReadProperties: &shared.InputFileReadXMLConfiguration{
                                FlattenXMLChildElements: true,
                                UseXMLAttributes: true,
                            },
                        },
                    },
                    shared.InputFileConfiguration{
                        Fetch: shared.InputFileFetchConfiguration{
                            CompressedRelativePath: sdk.String("folder/file.xxx"),
                            CompressionFormatStrategy: shared.CompressionFormatStrategyEnumNone.ToPointer(),
                            Credential: &shared.Credential{
                                Password: sdk.String("MyPassword"),
                                UserName: "MyLogin",
                            },
                            DownloadCatalogStrategy: shared.DownloadCatalogStrategyEnumSimpleURI,
                            DownloadTimeout: sdk.Int(360),
                            URI: "http://www.mywebsite.com/mycatalog.csv",
                        },
                        FileNumber: 1,
                        Read: shared.InputFileReadConfiguration{
                            CsvFileReadProperties: &shared.InputFileReadCsvConfiguration{
                                CsvSeparator: ";",
                                CsvTextQualifier: sdk.String("""),
                                HasHeaderRecord: true,
                                IgnoreHeaderRecord: true,
                            },
                            CultureName: sdk.String("fr-FR"),
                            EncodingTypeName: sdk.String("UTF-8"),
                            Format: shared.FileFormatStrategyEnumCsv,
                            XMLFileReadProperties: &shared.InputFileReadXMLConfiguration{
                                FlattenXMLChildElements: true,
                                UseXMLAttributes: true,
                            },
                        },
                    },
                },
                TransformFileURL: sdk.String("http://beezupblob.com/Mytransformation.xslt"),
            },
        },
        StoreID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinksImportationGetImportationMonitoringLink != nil {
        // handle response
    }
}
```

## ImportationTechnicalProgression

Get technical progression

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
    res, err := s.CatalogsImportationProcess.ImportationTechnicalProgression(ctx, operations.ImportationTechnicalProgressionRequest{
        ExecutionID: "natus",
        StoreID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportationTechnicalProgression != nil {
        // handle response
    }
}
```
