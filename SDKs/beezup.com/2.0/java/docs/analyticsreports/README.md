# analyticsReports

### Available Operations

* [deleteReportFilter](#deletereportfilter) - Delete the report filter
* [getReportFilter](#getreportfilter) - Get the report filter description
* [getReportFilters](#getreportfilters) - Get report filter list for the given store
* [saveReportFilter](#savereportfilter) - Save the report filter

## deleteReportFilter

Delete the report filter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportFilterRequest;
import org.openapis.openapi.models.operations.DeleteReportFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteReportFilterRequest req = new DeleteReportFilterRequest("dolorem", "corporis");            

            DeleteReportFilterResponse res = sdk.analyticsReports.deleteReportFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportFilter

Get the report filter description

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportFilterRequest;
import org.openapis.openapi.models.operations.GetReportFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportFilterRequest req = new GetReportFilterRequest("explicabo", "nobis");            

            GetReportFilterResponse res = sdk.analyticsReports.getReportFilter(req);

            if (res.reportFilter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportFilters

Get report filter list for the given store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportFiltersRequest;
import org.openapis.openapi.models.operations.GetReportFiltersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportFiltersRequest req = new GetReportFiltersRequest("enim");            

            GetReportFiltersResponse res = sdk.analyticsReports.getReportFilters(req);

            if (res.reportFilterList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveReportFilter

Save the report filter

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveReportFilterRequest;
import org.openapis.openapi.models.operations.SaveReportFilterResponse;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilter;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilters;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFilter;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorTypeEnum;
import org.openapis.openapi.models.shared.ProductStateFilterEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportFilterParameters;
import org.openapis.openapi.models.shared.ReportFilterPeriodTypeEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.SaveReportFilterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SaveReportFilterRequest req = new SaveReportFilterRequest("omnis",                 new SaveReportFilterRequest(                new ReportFilterParameters(                new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                                                firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                                operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                                                secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                                thirdParameter = 100L;
                                                                            }};) {{
                                                                globalMarginPercent = 10L;
                                                                linkClickToOrderMaxDay = 5L;
                                                            }};, OffsetDateTime.parse("2006-11-20T00:00:00Z"), OffsetDateTime.parse("2006-12-20T00:00:00Z"), ReportFilterPeriodTypeEnum.LAST_WEEK, ReportTypeEnum.BY_PRODUCT) {{
                                                analyticsProductColumnFilters = new AnalyticsProductColumnFilters() {{
                                                    additionalAnalyticsProductColumnFilters = new java.util.HashMap<String, org.openapis.openapi.models.shared.AnalyticsProductColumnFilter>() {{
                                                        put("excepturi", new AnalyticsProductColumnFilter("sapiente") {{
                                                            operatorName = "accusantium";
                                                            values = new String[]{{
                                                                add("culpa"),
                                                                add("doloribus"),
                                                            }};
                                                        }});
                                                        put("architecto", new AnalyticsProductColumnFilter("consequuntur") {{
                                                            operatorName = "mollitia";
                                                            values = new String[]{{
                                                                add("culpa"),
                                                            }};
                                                        }});
                                                    }};
                                                    sku = "M1234";
                                                    title = "Refrigérateur";
                                                }};;
                                                categoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                                    categoryPath = new String[]{{
                                                        add("mollitia"),
                                                        add("occaecati"),
                                                        add("numquam"),
                                                        add("commodi"),
                                                    }};
                                                }};;
                                                channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28";
                                                performanceIndicatorFilters = new org.openapis.openapi.models.shared.PerformanceIndicatorFilter[]{{
                                                    add(new PerformanceIndicatorFilter("Equals", PerformanceIndicatorTypeEnum.COST, 10.42) {{
                                                        operatorName = "Equals";
                                                        performanceIndicator = PerformanceIndicatorTypeEnum.COST;
                                                        value = 10.42;
                                                    }}),
                                                    add(new PerformanceIndicatorFilter("Equals", PerformanceIndicatorTypeEnum.COST, 10.42) {{
                                                        operatorName = "Equals";
                                                        performanceIndicator = PerformanceIndicatorTypeEnum.COST;
                                                        value = 10.42;
                                                    }}),
                                                }};
                                                productColumnsToDisplay = new String[]{{
                                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                                }};
                                                productState = ProductStateFilterEnum.ALL;
                                            }};, "My report filter");, "velit");            

            SaveReportFilterResponse res = sdk.analyticsReports.saveReportFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
