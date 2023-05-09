# analyticsStatistics

### Available Operations

* [getStoreReportByCategory](#getstorereportbycategory) - Get the report by category
* [getStoreReportByChannel](#getstorereportbychannel) - Get the report by channel
* [getStoreReportByDay](#getstorereportbyday) - Get the report by day for a StoreId
* [getStoreReportByDayPerStore](#getstorereportbydayperstore) - Get the report by day for a StoreId
* [getStoreReportByProduct](#getstorereportbyproduct) - Get the report by product

## getStoreReportByCategory

Get the report by category

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreReportByCategoryRequest;
import org.openapis.openapi.models.operations.GetStoreReportByCategoryResponse;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.OrderByDirectionEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFilter;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorTypeEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportByCategoryRequest;
import org.openapis.openapi.models.shared.ReportFilterPeriodTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreReportByCategoryRequest req = new GetStoreReportByCategoryRequest(                new ReportByCategoryRequest(                new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                                firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                                secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                thirdParameter = 100L;
                                                            }};) {{
                                                globalMarginPercent = 10L;
                                                linkClickToOrderMaxDay = 5L;
                                            }};, ReportFilterPeriodTypeEnum.LAST90_DAYS) {{
                                beginPeriodUtcDate = OffsetDateTime.parse("2006-11-20T00:00:00Z");
                                categoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }};
                                }};;
                                channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28";
                                endPeriodUtcDate = OffsetDateTime.parse("2006-12-20T00:00:00Z");
                                orderBy = PerformanceIndicatorTypeEnum.COST;
                                orderByDirection = OrderByDirectionEnum.ASCENDING;
                                pageNumber = 1;
                                pageSize = 100;
                                performanceIndicatorFilters = new org.openapis.openapi.models.shared.PerformanceIndicatorFilter[]{{
                                    add(new PerformanceIndicatorFilter("Equals", PerformanceIndicatorTypeEnum.COST, 10.42) {{
                                        operatorName = "Equals";
                                        performanceIndicator = PerformanceIndicatorTypeEnum.COST;
                                        value = 10.42;
                                    }}),
                                }};
                            }};, "omnis");            

            GetStoreReportByCategoryResponse res = sdk.analyticsStatistics.getStoreReportByCategory(req);

            if (res.reportByCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreReportByChannel

Get the report by channel

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreReportByChannelRequest;
import org.openapis.openapi.models.operations.GetStoreReportByChannelResponse;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.OrderByDirectionEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFilter;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorTypeEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportByChannelRequest;
import org.openapis.openapi.models.shared.ReportFilterPeriodTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreReportByChannelRequest req = new GetStoreReportByChannelRequest(                new ReportByChannelRequest(                new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                                firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                                secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                thirdParameter = 100L;
                                                            }};) {{
                                                globalMarginPercent = 10L;
                                                linkClickToOrderMaxDay = 5L;
                                            }};, ReportFilterPeriodTypeEnum.THIS_MONTH) {{
                                beginPeriodUtcDate = OffsetDateTime.parse("2006-11-20T00:00:00Z");
                                categoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("perferendis"),
                                        add("doloremque"),
                                        add("reprehenderit"),
                                    }};
                                }};;
                                channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28";
                                endPeriodUtcDate = OffsetDateTime.parse("2006-12-20T00:00:00Z");
                                orderBy = PerformanceIndicatorTypeEnum.COST;
                                orderByDirection = OrderByDirectionEnum.ASCENDING;
                                pageNumber = 1;
                                pageSize = 100;
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
                            }};, "maiores");            

            GetStoreReportByChannelResponse res = sdk.analyticsStatistics.getStoreReportByChannel(req);

            if (res.reportByChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreReportByDay

Get the report by day for a StoreId

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreReportByDayRequest;
import org.openapis.openapi.models.operations.GetStoreReportByDayResponse;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportByDayRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreReportByDayRequest req = new GetStoreReportByDayRequest(                new ReportByDayRequest(LocalDate.parse("2006-11-20T00:00:00Z"), LocalDate.parse("2006-12-20T00:00:00Z")) {{
                                advancedFilters = new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                    firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                    operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                    secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                    thirdParameter = 100L;
                                                }};) {{
                                    globalMarginPercent = 10L;
                                    linkClickToOrderMaxDay = 5L;
                                }};;
                                catalogCategoryId = "81a058a6-0451-4b79-84ef-94c58d0ed4ac";
                                channelIds = new String[]{{
                                    add("2dc136a7-0d3d-4cc9-a825-a28a42c53e28"),
                                }};
                                productId = "578419df-1bbf-41a6-96fa-862e42182b67";
                            }};, "corporis");            

            GetStoreReportByDayResponse res = sdk.analyticsStatistics.getStoreReportByDay(req);

            if (res.reportByDayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreReportByDayPerStore

Get the report by day for a StoreId

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreReportByDayPerStoreResponse;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportByDayRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ReportByDayRequest req = new ReportByDayRequest(LocalDate.parse("2006-11-20T00:00:00Z"), LocalDate.parse("2006-12-20T00:00:00Z")) {{
                advancedFilters = new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                    firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                    operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                    secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                    thirdParameter = 100L;
                                }};) {{
                    globalMarginPercent = 10L;
                    linkClickToOrderMaxDay = 5L;
                }};;
                catalogCategoryId = "81a058a6-0451-4b79-84ef-94c58d0ed4ac";
                channelIds = new String[]{{
                    add("2dc136a7-0d3d-4cc9-a825-a28a42c53e28"),
                    add("2dc136a7-0d3d-4cc9-a825-a28a42c53e28"),
                }};
                productId = "578419df-1bbf-41a6-96fa-862e42182b67";
            }};            

            GetStoreReportByDayPerStoreResponse res = sdk.analyticsStatistics.getStoreReportByDayPerStore(req);

            if (res.reportByDayPerStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreReportByProduct

Get the report by product

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreReportByProductRequest;
import org.openapis.openapi.models.operations.GetStoreReportByProductResponse;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilter;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilters;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.OrderByDirectionEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFilter;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorTypeEnum;
import org.openapis.openapi.models.shared.ProductStateFilterEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportByProductRequest;
import org.openapis.openapi.models.shared.ReportFilterPeriodTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreReportByProductRequest req = new GetStoreReportByProductRequest(                new ReportByProductRequest(                new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                                firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                                secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                thirdParameter = 100L;
                                                            }};) {{
                                                globalMarginPercent = 10L;
                                                linkClickToOrderMaxDay = 5L;
                                            }};, OffsetDateTime.parse("2006-11-20T00:00:00Z"), OffsetDateTime.parse("2006-12-20T00:00:00Z"), ReportFilterPeriodTypeEnum.THIS_MONTH, ProductStateFilterEnum.ALL) {{
                                analyticsProductColumnFilters = new AnalyticsProductColumnFilters() {{
                                    additionalAnalyticsProductColumnFilters = new java.util.HashMap<String, org.openapis.openapi.models.shared.AnalyticsProductColumnFilter>() {{
                                        put("harum", new AnalyticsProductColumnFilter("quidem") {{
                                            operatorName = "enim";
                                            values = new String[]{{
                                                add("commodi"),
                                                add("repudiandae"),
                                                add("quae"),
                                                add("ipsum"),
                                            }};
                                        }});
                                    }};
                                    sku = "M1234";
                                    title = "Refrigérateur";
                                }};;
                                categoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("excepturi"),
                                        add("pariatur"),
                                        add("modi"),
                                    }};
                                }};;
                                channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28";
                                orderBy = PerformanceIndicatorTypeEnum.COST;
                                orderByDirection = OrderByDirectionEnum.ASCENDING;
                                pageNumber = 1;
                                pageSize = 100;
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
                                    add(new PerformanceIndicatorFilter("Equals", PerformanceIndicatorTypeEnum.COST, 10.42) {{
                                        operatorName = "Equals";
                                        performanceIndicator = PerformanceIndicatorTypeEnum.COST;
                                        value = 10.42;
                                    }}),
                                }};
                                productColumnsToDisplay = new String[]{{
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                    add("bea7c21e-948b-4ac3-9ffd-4396e62c4163"),
                                }};
                            }};, "voluptates");            

            GetStoreReportByProductResponse res = sdk.analyticsStatistics.getStoreReportByProduct(req);

            if (res.reportByProductResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
