# analyticsOptimisations

### Available Operations

* [copyOptimisation](#copyoptimisation) - Copy product optimisations between 2 channels
* [optimise](#optimise) - Optimise products by page
* [optimiseAll](#optimiseall) - Optimise all products
* [optimiseByCategory](#optimisebycategory) - Optimise products by category
* [optimiseByChannel](#optimisebychannel) - Optimise products by channel
* [optimiseByProduct](#optimisebyproduct) - Optimise product

## copyOptimisation

Copy product optimisations between 2 channels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyOptimisationRequest;
import org.openapis.openapi.models.operations.CopyOptimisationResponse;
import org.openapis.openapi.models.shared.CopyOptimisationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CopyOptimisationRequest req = new CopyOptimisationRequest(                new CopyOptimisationRequest("2dc136a7-0d3d-4cc9-a825-a28a42c53e28", "2dc136a7-0d3d-4cc9-a825-a28a42c53e28", true);, "provident");            

            CopyOptimisationResponse res = sdk.analyticsOptimisations.copyOptimisation(req);

            if (res.copyOptimisationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optimise

/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptimiseRequest;
import org.openapis.openapi.models.operations.OptimiseResponse;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilter;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilters;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.OptimisationActionNameGeneralParametersEnum;
import org.openapis.openapi.models.shared.OptimiseRequest;
import org.openapis.openapi.models.shared.OrderByDirectionEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFilter;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorTypeEnum;
import org.openapis.openapi.models.shared.ProductStateFilterEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportFilterPeriodTypeEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptimiseRequest req = new OptimiseRequest(OptimisationActionNameGeneralParametersEnum.DISABLE,                 new OptimiseRequest(                new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                                firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                                secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                thirdParameter = 100L;
                                                            }};) {{
                                                globalMarginPercent = 10L;
                                                linkClickToOrderMaxDay = 5L;
                                            }};, OffsetDateTime.parse("2006-11-20T00:00:00Z"), OffsetDateTime.parse("2006-12-20T00:00:00Z"), ReportFilterPeriodTypeEnum.LAST90_DAYS, ReportTypeEnum.BY_PRODUCT) {{
                                analyticsProductColumnFilters = new AnalyticsProductColumnFilters() {{
                                    additionalAnalyticsProductColumnFilters = new java.util.HashMap<String, org.openapis.openapi.models.shared.AnalyticsProductColumnFilter>() {{
                                        put("nulla", new AnalyticsProductColumnFilter("iure") {{
                                            operatorName = "corrupti";
                                            values = new String[]{{
                                                add("vel"),
                                                add("error"),
                                                add("deserunt"),
                                                add("suscipit"),
                                            }};
                                        }});
                                        put("magnam", new AnalyticsProductColumnFilter("tempora") {{
                                            operatorName = "debitis";
                                            values = new String[]{{
                                                add("delectus"),
                                            }};
                                        }});
                                        put("suscipit", new AnalyticsProductColumnFilter("nisi") {{
                                            operatorName = "molestiae";
                                            values = new String[]{{
                                                add("placeat"),
                                                add("voluptatum"),
                                                add("iusto"),
                                                add("excepturi"),
                                            }};
                                        }});
                                    }};
                                    sku = "M1234";
                                    title = "Refrigérateur";
                                }};;
                                categoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("temporibus"),
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
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
                                }};
                                productState = ProductStateFilterEnum.ALL;
                            }};, "ipsam");            

            OptimiseResponse res = sdk.analyticsOptimisations.optimise(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optimiseAll

/!\ WARNING /!\ \
Apply the operation on every product related to this request. \
This operation is used at the bottom of the analytics page result.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptimiseAllRequest;
import org.openapis.openapi.models.operations.OptimiseAllResponse;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilter;
import org.openapis.openapi.models.shared.AnalyticsProductColumnFilters;
import org.openapis.openapi.models.shared.BeezUPCommonCatalogCategoryFilter;
import org.openapis.openapi.models.shared.LinkClickToOrderTypeEnum;
import org.openapis.openapi.models.shared.MarginTypeEnum;
import org.openapis.openapi.models.shared.OptimisationActionNameGeneralParametersEnum;
import org.openapis.openapi.models.shared.OptimiseAllRequest;
import org.openapis.openapi.models.shared.OrderByDirectionEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFilter;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormula;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaOperatorNameEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorFormulaParameterTypeEnum;
import org.openapis.openapi.models.shared.PerformanceIndicatorTypeEnum;
import org.openapis.openapi.models.shared.ProductStateFilterEnum;
import org.openapis.openapi.models.shared.ReportAdvancedFilters;
import org.openapis.openapi.models.shared.ReportFilterPeriodTypeEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptimiseAllRequest req = new OptimiseAllRequest(OptimisationActionNameGeneralParametersEnum.DISABLE,                 new OptimiseAllRequest(                new ReportAdvancedFilters(LinkClickToOrderTypeEnum.ON_CLICK_DATE, MarginTypeEnum.GLOBAL, true, true,                 new PerformanceIndicatorFormula() {{
                                                                firstParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                operatorName = PerformanceIndicatorFormulaOperatorNameEnum.MULTIPLY;
                                                                secondParameter = PerformanceIndicatorFormulaParameterTypeEnum.COST;
                                                                thirdParameter = 100L;
                                                            }};) {{
                                                globalMarginPercent = 10L;
                                                linkClickToOrderMaxDay = 5L;
                                            }};, OffsetDateTime.parse("2006-11-20T00:00:00Z"), OffsetDateTime.parse("2006-12-20T00:00:00Z"), ReportFilterPeriodTypeEnum.LAST3_MONTHS, ReportTypeEnum.BY_PRODUCT) {{
                                analyticsProductColumnFilters = new AnalyticsProductColumnFilters() {{
                                    additionalAnalyticsProductColumnFilters = new java.util.HashMap<String, org.openapis.openapi.models.shared.AnalyticsProductColumnFilter>() {{
                                        put("odit", new AnalyticsProductColumnFilter("esse") {{
                                            operatorName = "at";
                                            values = new String[]{{
                                                add("maiores"),
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                            }};
                                        }});
                                        put("totam", new AnalyticsProductColumnFilter("occaecati") {{
                                            operatorName = "porro";
                                            values = new String[]{{
                                                add("dicta"),
                                                add("nam"),
                                                add("officia"),
                                            }};
                                        }});
                                        put("fugit", new AnalyticsProductColumnFilter("molestiae") {{
                                            operatorName = "deleniti";
                                            values = new String[]{{
                                                add("optio"),
                                                add("totam"),
                                                add("beatae"),
                                                add("commodi"),
                                            }};
                                        }});
                                        put("modi", new AnalyticsProductColumnFilter("aspernatur") {{
                                            operatorName = "qui";
                                            values = new String[]{{
                                                add("cum"),
                                                add("esse"),
                                                add("ipsum"),
                                                add("excepturi"),
                                            }};
                                        }});
                                    }};
                                    sku = "M1234";
                                    title = "Refrigérateur";
                                }};;
                                categoryFilter = new BeezUPCommonCatalogCategoryFilter() {{
                                    categoryPath = new String[]{{
                                        add("ad"),
                                    }};
                                }};;
                                channelId = "2dc136a7-0d3d-4cc9-a825-a28a42c53e28";
                                orderBy = PerformanceIndicatorTypeEnum.COST;
                                orderByDirection = OrderByDirectionEnum.ASCENDING;
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
                                }};
                                productState = ProductStateFilterEnum.ALL;
                            }};, "iste");            

            OptimiseAllResponse res = sdk.analyticsOptimisations.optimiseAll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optimiseByCategory

/!\ WARNING /!\ \
This operation will reenable or disable products's category for every channel indicated in the body.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptimiseByCategoryRequest;
import org.openapis.openapi.models.operations.OptimiseByCategoryResponse;
import org.openapis.openapi.models.shared.OptimisationActionNameGeneralParametersEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptimiseByCategoryRequest req = new OptimiseByCategoryRequest(OptimisationActionNameGeneralParametersEnum.REENABLE, "natus", "laboriosam") {{
                requestBody = new String[]{{
                    add("saepe"),
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                }};
            }};            

            OptimiseByCategoryResponse res = sdk.analyticsOptimisations.optimiseByCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optimiseByChannel

/!\ WARNING /!\ \
Apply the operation on every product on this channel.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptimiseByChannelRequest;
import org.openapis.openapi.models.operations.OptimiseByChannelResponse;
import org.openapis.openapi.models.shared.OptimisationActionNameGeneralParametersEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptimiseByChannelRequest req = new OptimiseByChannelRequest(OptimisationActionNameGeneralParametersEnum.DISABLE, "iure", "saepe");            

            OptimiseByChannelResponse res = sdk.analyticsOptimisations.optimiseByChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optimiseByProduct

/!\ WARNING /!\ \
This operation will reenable or disable this product for every channel indicated in the body.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptimiseByProductRequest;
import org.openapis.openapi.models.operations.OptimiseByProductResponse;
import org.openapis.openapi.models.shared.OptimisationActionNameGeneralParametersEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptimiseByProductRequest req = new OptimiseByProductRequest(OptimisationActionNameGeneralParametersEnum.DISABLE, "architecto", "ipsa") {{
                requestBody = new String[]{{
                    add("est"),
                    add("mollitia"),
                    add("laborum"),
                    add("dolores"),
                }};
            }};            

            OptimiseByProductResponse res = sdk.analyticsOptimisations.optimiseByProduct(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
