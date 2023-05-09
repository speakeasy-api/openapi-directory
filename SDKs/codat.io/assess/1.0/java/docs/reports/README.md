# reports

## Overview

Data integrity is important

### Available Operations

* [getAccountsForEnhancedBalanceSheet](#getaccountsforenhancedbalancesheet) - Enhanced Balance Sheet Accounts
* [getAccountsForEnhancedProfitAndLoss](#getaccountsforenhancedprofitandloss) - Enhanced Profit and Loss Accounts
* [getCommerceCustomerRetentionMetrics](#getcommercecustomerretentionmetrics) - Get the customer retention metrics for a specific company.
* [getCommerceLifetimeValueMetrics](#getcommercelifetimevaluemetrics) - Get the lifetime value metric for a specific company.
* [getCommerceOrdersMetrics](#getcommerceordersmetrics) - Get order information for a specific company
* [getCommerceRefundsMetrics](#getcommercerefundsmetrics) - Get the refunds information for a specific company
* [getCommerceRevenueMetrics](#getcommercerevenuemetrics) - Commerce Revenue Metrics
* [~~getEnhancedBalanceSheet~~](#getenhancedbalancesheet) - Enhanced Balance Sheet :warning: **Deprecated**
* [getEnhancedCashFlowTransactions](#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [~~getEnhancedFinancialMetrics~~](#getenhancedfinancialmetrics) - List financial metrics :warning: **Deprecated**
* [getEnhancedInvoicesReport](#getenhancedinvoicesreport) - Enhanced Invoices Report
* [~~getEnhancedProfitAndLoss~~](#getenhancedprofitandloss) - Enhanced Profit and Loss :warning: **Deprecated**
* [getRecurringRevenueMetrics](#getrecurringrevenuemetrics) - Get key metrics for subscription revenue
* [requestRecurringRevenueMetrics](#requestrecurringrevenuemetrics) - Request production of key subscription revenue metrics

## getAccountsForEnhancedBalanceSheet

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsForEnhancedBalanceSheetRequest;
import org.openapis.openapi.models.operations.GetAccountsForEnhancedBalanceSheetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountsForEnhancedBalanceSheetRequest req = new GetAccountsForEnhancedBalanceSheetRequest("8a210b68-6988-11ed-a1eb-0242ac120002", 438601L, "29-09-2020");            

            GetAccountsForEnhancedBalanceSheetResponse res = sdk.reports.getAccountsForEnhancedBalanceSheet(req);

            if (res.enhancedReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsForEnhancedProfitAndLoss

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsForEnhancedProfitAndLossRequest;
import org.openapis.openapi.models.operations.GetAccountsForEnhancedProfitAndLossResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountsForEnhancedProfitAndLossRequest req = new GetAccountsForEnhancedProfitAndLossRequest("8a210b68-6988-11ed-a1eb-0242ac120002", 988374L, "29-09-2020");            

            GetAccountsForEnhancedProfitAndLossResponse res = sdk.reports.getAccountsForEnhancedProfitAndLoss(req);

            if (res.enhancedReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommerceCustomerRetentionMetrics

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommerceCustomerRetentionMetricsRequest;
import org.openapis.openapi.models.operations.GetCommerceCustomerRetentionMetricsResponse;
import org.openapis.openapi.models.shared.PeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommerceCustomerRetentionMetricsRequest req = new GetCommerceCustomerRetentionMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 102044L, 652790L, PeriodUnitEnum.DAY, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetCommerceCustomerRetentionMetricsResponse res = sdk.reports.getCommerceCustomerRetentionMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommerceLifetimeValueMetrics

Gets the lifetime value metric for a specific company connection, over one or more periods of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommerceLifetimeValueMetricsRequest;
import org.openapis.openapi.models.operations.GetCommerceLifetimeValueMetricsResponse;
import org.openapis.openapi.models.shared.PeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommerceLifetimeValueMetricsRequest req = new GetCommerceLifetimeValueMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 161309L, 995300L, PeriodUnitEnum.MONTH, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetCommerceLifetimeValueMetricsResponse res = sdk.reports.getCommerceLifetimeValueMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommerceOrdersMetrics

Gets the order information for a specific company connection, over one or more periods of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommerceOrdersMetricsRequest;
import org.openapis.openapi.models.operations.GetCommerceOrdersMetricsResponse;
import org.openapis.openapi.models.shared.PeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommerceOrdersMetricsRequest req = new GetCommerceOrdersMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 253291L, 414369L, PeriodUnitEnum.WEEK, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetCommerceOrdersMetricsResponse res = sdk.reports.getCommerceOrdersMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommerceRefundsMetrics

Gets the refunds information for a specific company connection, over one or more periods of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommerceRefundsMetricsRequest;
import org.openapis.openapi.models.operations.GetCommerceRefundsMetricsResponse;
import org.openapis.openapi.models.shared.PeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommerceRefundsMetricsRequest req = new GetCommerceRefundsMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 244425L, 623510L, PeriodUnitEnum.DAY, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetCommerceRefundsMetricsResponse res = sdk.reports.getCommerceRefundsMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommerceRevenueMetrics

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommerceRevenueMetricsRequest;
import org.openapis.openapi.models.operations.GetCommerceRevenueMetricsResponse;
import org.openapis.openapi.models.shared.PeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommerceRevenueMetricsRequest req = new GetCommerceRevenueMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 110375L, 674752L, PeriodUnitEnum.MONTH, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetCommerceRevenueMetricsResponse res = sdk.reports.getCommerceRevenueMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEnhancedBalanceSheet~~

Gets a fully categorized balance sheet statement for a given company, over one or more period(s).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnhancedBalanceSheetRequest;
import org.openapis.openapi.models.operations.GetEnhancedBalanceSheetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnhancedBalanceSheetRequest req = new GetEnhancedBalanceSheetRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 138183L, 778346L, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetEnhancedBalanceSheetResponse res = sdk.reports.getEnhancedBalanceSheet(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnhancedCashFlowTransactions

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnhancedCashFlowTransactionsRequest;
import org.openapis.openapi.models.operations.GetEnhancedCashFlowTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnhancedCashFlowTransactionsRequest req = new GetEnhancedCashFlowTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", 1) {{
                pageSize = 100;
                query = "tenetur";
            }};            

            GetEnhancedCashFlowTransactionsResponse res = sdk.reports.getEnhancedCashFlowTransactions(req);

            if (res.enhancedCashFlowTransactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEnhancedFinancialMetrics~~

Gets all the available financial metrics for a given company, over one or more periods.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnhancedFinancialMetricsRequest;
import org.openapis.openapi.models.operations.GetEnhancedFinancialMetricsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnhancedFinancialMetricsRequest req = new GetEnhancedFinancialMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 662527L, 820994L, "29-09-2020") {{
                showMetricInputs = false;
            }};            

            GetEnhancedFinancialMetricsResponse res = sdk.reports.getEnhancedFinancialMetrics(req);

            if (res.financialMetrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnhancedInvoicesReport

Gets a list of invoices linked to the corresponding banking transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnhancedInvoicesReportRequest;
import org.openapis.openapi.models.operations.GetEnhancedInvoicesReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnhancedInvoicesReportRequest req = new GetEnhancedInvoicesReportRequest("8a210b68-6988-11ed-a1eb-0242ac120002", 1) {{
                pageSize = 100;
                query = "quasi";
            }};            

            GetEnhancedInvoicesReportResponse res = sdk.reports.getEnhancedInvoicesReport(req);

            if (res.enhancedInvoicesReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEnhancedProfitAndLoss~~

Gets a fully categorized profit and loss statement for a given company, over one or more period(s).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnhancedProfitAndLossRequest;
import org.openapis.openapi.models.operations.GetEnhancedProfitAndLossResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnhancedProfitAndLossRequest req = new GetEnhancedProfitAndLossRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 837945L, 673660L, "29-09-2020") {{
                includeDisplayNames = false;
            }};            

            GetEnhancedProfitAndLossResponse res = sdk.reports.getEnhancedProfitAndLoss(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecurringRevenueMetrics

Gets key metrics for subscription revenue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecurringRevenueMetricsRequest;
import org.openapis.openapi.models.operations.GetRecurringRevenueMetricsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecurringRevenueMetricsRequest req = new GetRecurringRevenueMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetRecurringRevenueMetricsResponse res = sdk.reports.getRecurringRevenueMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestRecurringRevenueMetrics

Request production of key subscription revenue metrics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestRecurringRevenueMetricsRequest;
import org.openapis.openapi.models.operations.RequestRecurringRevenueMetricsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestRecurringRevenueMetricsRequest req = new RequestRecurringRevenueMetricsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            RequestRecurringRevenueMetricsResponse res = sdk.reports.requestRecurringRevenueMetrics(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
