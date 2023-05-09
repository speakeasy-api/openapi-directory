# catalogsImportationProcess

### Available Operations

* [importationCancel](#importationcancel) - Cancel importation
* [importationCommit](#importationcommit) - Commit Importation
* [importationCommitColumns](#importationcommitcolumns) - Commit columns
* [importationConfigureRemainingCatalogColumns](#importationconfigureremainingcatalogcolumns) - Configure remaining catalog columns
* [importationGetImportationMonitoring](#importationgetimportationmonitoring) - Get the importation status
* [importationGetProductsReport](#importationgetproductsreport) - Importation Get Products Report
* [importationGetReport](#importationgetreport) - Importation Get Report
* [importationGetReportings](#importationgetreportings) - Get the latest catalog importation reporting
* [importationGetReportingsAllStores](#importationgetreportingsallstores) - Get the latest catalog importation reporting for all your stores
* [importationStartManualUpdate](#importationstartmanualupdate) - Start Manual Import
* [importationTechnicalProgression](#importationtechnicalprogression) - Get technical progression

## importationCancel

Cancel importation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationCancelRequest;
import org.openapis.openapi.models.operations.ImportationCancelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationCancelRequest req = new ImportationCancelRequest("odio", "occaecati");            

            ImportationCancelResponse res = sdk.catalogsImportationProcess.importationCancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationCommit

Commit Importation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationCommitRequest;
import org.openapis.openapi.models.operations.ImportationCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationCommitRequest req = new ImportationCommitRequest("voluptatibus", "quisquam");            

            ImportationCommitResponse res = sdk.catalogsImportationProcess.importationCommit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationCommitColumns

Commit columns

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationCommitColumnsRequest;
import org.openapis.openapi.models.operations.ImportationCommitColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationCommitColumnsRequest req = new ImportationCommitColumnsRequest("vero", "omnis");            

            ImportationCommitColumnsResponse res = sdk.catalogsImportationProcess.importationCommitColumns(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationConfigureRemainingCatalogColumns

This operation should be used after you have mapped the required BeezUP Columns

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationConfigureRemainingCatalogColumnsRequest;
import org.openapis.openapi.models.operations.ImportationConfigureRemainingCatalogColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationConfigureRemainingCatalogColumnsRequest req = new ImportationConfigureRemainingCatalogColumnsRequest("quis", "ipsum");            

            ImportationConfigureRemainingCatalogColumnsResponse res = sdk.catalogsImportationProcess.importationConfigureRemainingCatalogColumns(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetImportationMonitoring

Get the importation status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetImportationMonitoringRequest;
import org.openapis.openapi.models.operations.ImportationGetImportationMonitoringResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetImportationMonitoringRequest req = new ImportationGetImportationMonitoringRequest("delectus", "voluptate");            

            ImportationGetImportationMonitoringResponse res = sdk.catalogsImportationProcess.importationGetImportationMonitoring(req);

            if (res.importationMonitoring != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetProductsReport

Importation Get Products Report

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetProductsReportRequest;
import org.openapis.openapi.models.operations.ImportationGetProductsReportResponse;
import org.openapis.openapi.models.shared.GetImportationProductsReportRequest;
import org.openapis.openapi.models.shared.GetImportationProductsReportRequestErrorCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetProductsReportRequest req = new ImportationGetProductsReportRequest("consectetur",                 new GetImportationProductsReportRequest(1, 100) {{
                                ean = "vero";
                                errorCodes = new org.openapis.openapi.models.shared.GetImportationProductsReportRequestErrorCode[]{{
                                    add(new GetImportationProductsReportRequestErrorCode() {{
                                        errorCode = "dignissimos";
                                        userColumnName = "My SKU";
                                    }}),
                                    add(new GetImportationProductsReportRequestErrorCode() {{
                                        errorCode = "hic";
                                        userColumnName = "My SKU";
                                    }}),
                                    add(new GetImportationProductsReportRequestErrorCode() {{
                                        errorCode = "distinctio";
                                        userColumnName = "My SKU";
                                    }}),
                                    add(new GetImportationProductsReportRequestErrorCode() {{
                                        errorCode = "quod";
                                        userColumnName = "My SKU";
                                    }}),
                                }};
                                mpn = "odio";
                                sku = "similique";
                                title = "Miss";
                            }};, "vero");            

            ImportationGetProductsReportResponse res = sdk.catalogsImportationProcess.importationGetProductsReport(req);

            if (res.getImportationProductsReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetReport

Importation Get Report

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetReportRequest;
import org.openapis.openapi.models.operations.ImportationGetReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetReportRequest req = new ImportationGetReportRequest("ducimus", "dolore");            

            ImportationGetReportResponse res = sdk.catalogsImportationProcess.importationGetReport(req);

            if (res.getImportationReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetReportings

Get the latest catalog importation reporting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetReportingsRequest;
import org.openapis.openapi.models.operations.ImportationGetReportingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetReportingsRequest req = new ImportationGetReportingsRequest("quibusdam");            

            ImportationGetReportingsResponse res = sdk.catalogsImportationProcess.importationGetReportings(req);

            if (res.importationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetReportingsAllStores

Get the latest catalog importation reporting for all your stores

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetReportingsAllStoresResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetReportingsAllStoresResponse res = sdk.catalogsImportationProcess.importationGetReportingsAllStores();

            if (res.importationsPerStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationStartManualUpdate

Start Manual Import

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationStartManualUpdateRequest;
import org.openapis.openapi.models.operations.ImportationStartManualUpdateResponse;
import org.openapis.openapi.models.shared.CompareOptionsEnum;
import org.openapis.openapi.models.shared.CompressionFormatStrategyEnum;
import org.openapis.openapi.models.shared.Credential;
import org.openapis.openapi.models.shared.DownloadCatalogStrategyEnum;
import org.openapis.openapi.models.shared.DuplicateProductValueConfiguration;
import org.openapis.openapi.models.shared.DuplicateProductValueStrategyEnum;
import org.openapis.openapi.models.shared.FileFormatStrategyEnum;
import org.openapis.openapi.models.shared.InputConfiguration;
import org.openapis.openapi.models.shared.InputFileConfiguration;
import org.openapis.openapi.models.shared.InputFileFetchConfiguration;
import org.openapis.openapi.models.shared.InputFileReadConfiguration;
import org.openapis.openapi.models.shared.InputFileReadCsvConfiguration;
import org.openapis.openapi.models.shared.InputFileReadXmlConfiguration;
import org.openapis.openapi.models.shared.StartManualImportRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationStartManualUpdateRequest req = new ImportationStartManualUpdateRequest(                new StartManualImportRequest(                new InputConfiguration(                new org.openapis.openapi.models.shared.InputFileConfiguration[]{{
                                                                add(new InputFileConfiguration(                new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                                    compressedRelativePath = "folder/file.xxx";
                                                                                    compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                                    credential = new Credential("MyLogin") {{
                                                                                        password = "MyPassword";
                                                                                    }};;
                                                                                    downloadTimeout = 360;
                                                                                }};, 1,                 new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                                    csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                                        csvTextQualifier = """;
                                                                                    }};;
                                                                                    cultureName = "fr-FR";
                                                                                    encodingTypeName = "UTF-8";
                                                                                    xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true);;
                                                                                }};) {{
                                                                    fetch = new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                        compressedRelativePath = "folder/file.xxx";
                                                                        compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                        credential = new Credential("MyLogin") {{
                                                                            password = "MyPassword";
                                                                            userName = "MyLogin";
                                                                        }};
                                                                        downloadCatalogStrategy = DownloadCatalogStrategyEnum.SIMPLE_URI;
                                                                        downloadTimeout = 360;
                                                                        uri = "http://www.mywebsite.com/mycatalog.csv";
                                                                    }};
                                                                    fileNumber = 1;
                                                                    read = new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                        csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                            csvSeparator = ";";
                                                                            csvTextQualifier = """;
                                                                            hasHeaderRecord = true;
                                                                            ignoreHeaderRecord = true;
                                                                        }};
                                                                        cultureName = "fr-FR";
                                                                        encodingTypeName = "UTF-8";
                                                                        format = FileFormatStrategyEnum.CSV;
                                                                        xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true) {{
                                                                            flattenXmlChildElements = true;
                                                                            useXmlAttributes = true;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new InputFileConfiguration(                new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                                    compressedRelativePath = "folder/file.xxx";
                                                                                    compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                                    credential = new Credential("MyLogin") {{
                                                                                        password = "MyPassword";
                                                                                    }};;
                                                                                    downloadTimeout = 360;
                                                                                }};, 1,                 new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                                    csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                                        csvTextQualifier = """;
                                                                                    }};;
                                                                                    cultureName = "fr-FR";
                                                                                    encodingTypeName = "UTF-8";
                                                                                    xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true);;
                                                                                }};) {{
                                                                    fetch = new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                        compressedRelativePath = "folder/file.xxx";
                                                                        compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                        credential = new Credential("MyLogin") {{
                                                                            password = "MyPassword";
                                                                            userName = "MyLogin";
                                                                        }};
                                                                        downloadCatalogStrategy = DownloadCatalogStrategyEnum.SIMPLE_URI;
                                                                        downloadTimeout = 360;
                                                                        uri = "http://www.mywebsite.com/mycatalog.csv";
                                                                    }};
                                                                    fileNumber = 1;
                                                                    read = new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                        csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                            csvSeparator = ";";
                                                                            csvTextQualifier = """;
                                                                            hasHeaderRecord = true;
                                                                            ignoreHeaderRecord = true;
                                                                        }};
                                                                        cultureName = "fr-FR";
                                                                        encodingTypeName = "UTF-8";
                                                                        format = FileFormatStrategyEnum.CSV;
                                                                        xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true) {{
                                                                            flattenXmlChildElements = true;
                                                                            useXmlAttributes = true;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new InputFileConfiguration(                new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                                    compressedRelativePath = "folder/file.xxx";
                                                                                    compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                                    credential = new Credential("MyLogin") {{
                                                                                        password = "MyPassword";
                                                                                    }};;
                                                                                    downloadTimeout = 360;
                                                                                }};, 1,                 new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                                    csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                                        csvTextQualifier = """;
                                                                                    }};;
                                                                                    cultureName = "fr-FR";
                                                                                    encodingTypeName = "UTF-8";
                                                                                    xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true);;
                                                                                }};) {{
                                                                    fetch = new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                        compressedRelativePath = "folder/file.xxx";
                                                                        compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                        credential = new Credential("MyLogin") {{
                                                                            password = "MyPassword";
                                                                            userName = "MyLogin";
                                                                        }};
                                                                        downloadCatalogStrategy = DownloadCatalogStrategyEnum.SIMPLE_URI;
                                                                        downloadTimeout = 360;
                                                                        uri = "http://www.mywebsite.com/mycatalog.csv";
                                                                    }};
                                                                    fileNumber = 1;
                                                                    read = new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                        csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                            csvSeparator = ";";
                                                                            csvTextQualifier = """;
                                                                            hasHeaderRecord = true;
                                                                            ignoreHeaderRecord = true;
                                                                        }};
                                                                        cultureName = "fr-FR";
                                                                        encodingTypeName = "UTF-8";
                                                                        format = FileFormatStrategyEnum.CSV;
                                                                        xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true) {{
                                                                            flattenXmlChildElements = true;
                                                                            useXmlAttributes = true;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new InputFileConfiguration(                new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                                    compressedRelativePath = "folder/file.xxx";
                                                                                    compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                                    credential = new Credential("MyLogin") {{
                                                                                        password = "MyPassword";
                                                                                    }};;
                                                                                    downloadTimeout = 360;
                                                                                }};, 1,                 new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                                    csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                                        csvTextQualifier = """;
                                                                                    }};;
                                                                                    cultureName = "fr-FR";
                                                                                    encodingTypeName = "UTF-8";
                                                                                    xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true);;
                                                                                }};) {{
                                                                    fetch = new InputFileFetchConfiguration(DownloadCatalogStrategyEnum.SIMPLE_URI, "http://www.mywebsite.com/mycatalog.csv") {{
                                                                        compressedRelativePath = "folder/file.xxx";
                                                                        compressionFormatStrategy = CompressionFormatStrategyEnum.NONE;
                                                                        credential = new Credential("MyLogin") {{
                                                                            password = "MyPassword";
                                                                            userName = "MyLogin";
                                                                        }};
                                                                        downloadCatalogStrategy = DownloadCatalogStrategyEnum.SIMPLE_URI;
                                                                        downloadTimeout = 360;
                                                                        uri = "http://www.mywebsite.com/mycatalog.csv";
                                                                    }};
                                                                    fileNumber = 1;
                                                                    read = new InputFileReadConfiguration(FileFormatStrategyEnum.CSV) {{
                                                                        csvFileReadProperties = new InputFileReadCsvConfiguration(";", true, true) {{
                                                                            csvSeparator = ";";
                                                                            csvTextQualifier = """;
                                                                            hasHeaderRecord = true;
                                                                            ignoreHeaderRecord = true;
                                                                        }};
                                                                        cultureName = "fr-FR";
                                                                        encodingTypeName = "UTF-8";
                                                                        format = FileFormatStrategyEnum.CSV;
                                                                        xmlFileReadProperties = new InputFileReadXmlConfiguration(true, true) {{
                                                                            flattenXmlChildElements = true;
                                                                            useXmlAttributes = true;
                                                                        }};
                                                                    }};
                                                                }}),
                                                            }}) {{
                                                transformFileUrl = "http://beezupblob.com/Mytransformation.xslt";
                                            }};) {{
                                duplicateProductSkuConfiguration = new DuplicateProductValueConfiguration(CompareOptionsEnum.IGNORE_CASE, DuplicateProductValueStrategyEnum.KEEP_FIRST_DUPLICATE_PRODUCT_ONLY);;
                            }};, "sequi");            

            ImportationStartManualUpdateResponse res = sdk.catalogsImportationProcess.importationStartManualUpdate(req);

            if (res.linksImportationGetImportationMonitoringLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationTechnicalProgression

Get technical progression

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationTechnicalProgressionRequest;
import org.openapis.openapi.models.operations.ImportationTechnicalProgressionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationTechnicalProgressionRequest req = new ImportationTechnicalProgressionRequest("natus", "impedit");            

            ImportationTechnicalProgressionResponse res = sdk.catalogsImportationProcess.importationTechnicalProgression(req);

            if (res.importationTechnicalProgression != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
