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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsForEnhancedBalanceSheetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsForEnhancedBalanceSheetRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->numberOfPeriods = 272656;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getAccountsForEnhancedBalanceSheet($request);

    if ($response->enhancedReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsForEnhancedProfitAndLoss

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsForEnhancedProfitAndLossRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsForEnhancedProfitAndLossRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->numberOfPeriods = 383441;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getAccountsForEnhancedProfitAndLoss($request);

    if ($response->enhancedReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommerceCustomerRetentionMetrics

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommerceCustomerRetentionMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommerceCustomerRetentionMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 477665;
    $request->periodLength = 791725;
    $request->periodUnit = PeriodUnitEnum::YEAR;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getCommerceCustomerRetentionMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommerceLifetimeValueMetrics

Gets the lifetime value metric for a specific company connection, over one or more periods of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommerceLifetimeValueMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommerceLifetimeValueMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 528895;
    $request->periodLength = 479977;
    $request->periodUnit = PeriodUnitEnum::MONTH;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getCommerceLifetimeValueMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommerceOrdersMetrics

Gets the order information for a specific company connection, over one or more periods of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommerceOrdersMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommerceOrdersMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 392785;
    $request->periodLength = 925597;
    $request->periodUnit = PeriodUnitEnum::YEAR;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getCommerceOrdersMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommerceRefundsMetrics

Gets the refunds information for a specific company connection, over one or more periods of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommerceRefundsMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommerceRefundsMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 71036;
    $request->periodLength = 337396;
    $request->periodUnit = PeriodUnitEnum::DAY;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getCommerceRefundsMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommerceRevenueMetrics

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommerceRevenueMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PeriodUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommerceRevenueMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 648172;
    $request->periodLength = 20218;
    $request->periodUnit = PeriodUnitEnum::WEEK;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getCommerceRevenueMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEnhancedBalanceSheet~~

Gets a fully categorized balance sheet statement for a given company, over one or more period(s).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnhancedBalanceSheetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnhancedBalanceSheetRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 832620;
    $request->periodLength = 957156;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getEnhancedBalanceSheet($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnhancedCashFlowTransactions

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnhancedCashFlowTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnhancedCashFlowTransactionsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'quo';

    $response = $sdk->reports->getEnhancedCashFlowTransactions($request);

    if ($response->enhancedCashFlowTransactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEnhancedFinancialMetrics~~

Gets all the available financial metrics for a given company, over one or more periods.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnhancedFinancialMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnhancedFinancialMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->numberOfPeriods = 140350;
    $request->periodLength = 870013;
    $request->reportDate = '29-09-2020';
    $request->showMetricInputs = false;

    $response = $sdk->reports->getEnhancedFinancialMetrics($request);

    if ($response->financialMetrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnhancedInvoicesReport

Gets a list of invoices linked to the corresponding banking transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnhancedInvoicesReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnhancedInvoicesReportRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'at';

    $response = $sdk->reports->getEnhancedInvoicesReport($request);

    if ($response->enhancedInvoicesReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEnhancedProfitAndLoss~~

Gets a fully categorized profit and loss statement for a given company, over one or more period(s).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnhancedProfitAndLossRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnhancedProfitAndLossRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->includeDisplayNames = false;
    $request->numberOfPeriods = 978619;
    $request->periodLength = 473608;
    $request->reportDate = '29-09-2020';

    $response = $sdk->reports->getEnhancedProfitAndLoss($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecurringRevenueMetrics

Gets key metrics for subscription revenue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecurringRevenueMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecurringRevenueMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->reports->getRecurringRevenueMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestRecurringRevenueMetrics

Request production of key subscription revenue metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestRecurringRevenueMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestRecurringRevenueMetricsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->reports->requestRecurringRevenueMetrics($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
