# excelReports

## Overview

Downloadable reports

### Available Operations

* [~~downloadExcelReport~~](#downloadexcelreport) - Download generated excel report :warning: **Deprecated**
* [generateExcelReport](#generateexcelreport) - Generate an Excel report
* [getAccountingMarketingMetrics](#getaccountingmarketingmetrics) - Get the marketing metrics from an accounting source for a given company.
* [getExcelReport](#getexcelreport) - Download generated excel report
* [getExcelReportGenerationStatus](#getexcelreportgenerationstatus) - Get status of Excel report

## ~~downloadExcelReport~~

Download the previously generated Excel report to a local drive.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadExcelReportRequest;
import org.openapis.openapi.models.operations.DownloadExcelReportResponse;
import org.openapis.openapi.models.shared.ExcelReportTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DownloadExcelReportRequest req = new DownloadExcelReportRequest("8a210b68-6988-11ed-a1eb-0242ac120002", ExcelReportTypeEnum.ENHANCED_FINANCIALS);            

            DownloadExcelReportResponse res = sdk.excelReports.downloadExcelReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateExcelReport

Generate an Excel report which can subsequently be downloaded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateExcelReportRequest;
import org.openapis.openapi.models.operations.GenerateExcelReportResponse;
import org.openapis.openapi.models.shared.ExcelReportTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateExcelReportRequest req = new GenerateExcelReportRequest("8a210b68-6988-11ed-a1eb-0242ac120002", ExcelReportTypeEnum.AUDIT);            

            GenerateExcelReportResponse res = sdk.excelReports.generateExcelReport(req);

            if (res.excelStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountingMarketingMetrics

Request an Excel report for download.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountingMarketingMetricsRequest;
import org.openapis.openapi.models.operations.GetAccountingMarketingMetricsResponse;
import org.openapis.openapi.models.shared.PeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountingMarketingMetricsRequest req = new GetAccountingMarketingMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 128926L, 750686L, PeriodUnitEnum.WEEK, "29-09-2020") {{
                includeDisplayNames = false;
                showInputValues = false;
            }};            

            GetAccountingMarketingMetricsResponse res = sdk.excelReports.getAccountingMarketingMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExcelReport

Download the previously generated Excel report to a local drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExcelReportRequest;
import org.openapis.openapi.models.operations.GetExcelReportResponse;
import org.openapis.openapi.models.shared.ExcelReportTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExcelReportRequest req = new GetExcelReportRequest("8a210b68-6988-11ed-a1eb-0242ac120002", ExcelReportTypeEnum.AUDIT);            

            GetExcelReportResponse res = sdk.excelReports.getExcelReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExcelReportGenerationStatus

Returns the status of the latest report requested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExcelReportGenerationStatusRequest;
import org.openapis.openapi.models.operations.GetExcelReportGenerationStatusResponse;
import org.openapis.openapi.models.shared.ExcelReportTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExcelReportGenerationStatusRequest req = new GetExcelReportGenerationStatusRequest("8a210b68-6988-11ed-a1eb-0242ac120002", ExcelReportTypeEnum.ENHANCED_FINANCIALS);            

            GetExcelReportGenerationStatusResponse res = sdk.excelReports.getExcelReportGenerationStatus(req);

            if (res.excelStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
