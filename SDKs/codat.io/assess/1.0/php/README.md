# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountCategoryRequest();
    $request->accountId = 'corrupti';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->categories->getAccountCategory($request);

    if ($response->categorisedAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [categories](docs/categories/README.md)

* [~~getAccountCategory~~](docs/categories/README.md#getaccountcategory) - Get suggested and/or confirmed category for a specific account :warning: **Deprecated**
* [~~listAccountsCategories~~](docs/categories/README.md#listaccountscategories) - List suggested and confirmed account categories :warning: **Deprecated**
* [~~listAvailableAccountCategories~~](docs/categories/README.md#listavailableaccountcategories) - List account categories :warning: **Deprecated**
* [~~updateAccountCategory~~](docs/categories/README.md#updateaccountcategory) - Patch account categories :warning: **Deprecated**
* [~~updateAccountsCategories~~](docs/categories/README.md#updateaccountscategories) - Confirm categories for accounts :warning: **Deprecated**

### [dataIntegrity](docs/dataintegrity/README.md)

* [getDataIntegrityDetails](docs/dataintegrity/README.md#getdataintegritydetails) - Lists data integrity details for date type
* [getDataIntegrityStatus](docs/dataintegrity/README.md#getdataintegritystatus) - Get data integrity status
* [getDataIntegritySummaries](docs/dataintegrity/README.md#getdataintegritysummaries) - Get data integrity summary

### [excelReports](docs/excelreports/README.md)

* [~~downloadExcelReport~~](docs/excelreports/README.md#downloadexcelreport) - Download generated excel report :warning: **Deprecated**
* [generateExcelReport](docs/excelreports/README.md#generateexcelreport) - Generate an Excel report
* [getAccountingMarketingMetrics](docs/excelreports/README.md#getaccountingmarketingmetrics) - Get the marketing metrics from an accounting source for a given company.
* [getExcelReport](docs/excelreports/README.md#getexcelreport) - Download generated excel report
* [getExcelReportGenerationStatus](docs/excelreports/README.md#getexcelreportgenerationstatus) - Get status of Excel report

### [reports](docs/reports/README.md)

* [getAccountsForEnhancedBalanceSheet](docs/reports/README.md#getaccountsforenhancedbalancesheet) - Enhanced Balance Sheet Accounts
* [getAccountsForEnhancedProfitAndLoss](docs/reports/README.md#getaccountsforenhancedprofitandloss) - Enhanced Profit and Loss Accounts
* [getCommerceCustomerRetentionMetrics](docs/reports/README.md#getcommercecustomerretentionmetrics) - Get the customer retention metrics for a specific company.
* [getCommerceLifetimeValueMetrics](docs/reports/README.md#getcommercelifetimevaluemetrics) - Get the lifetime value metric for a specific company.
* [getCommerceOrdersMetrics](docs/reports/README.md#getcommerceordersmetrics) - Get order information for a specific company
* [getCommerceRefundsMetrics](docs/reports/README.md#getcommercerefundsmetrics) - Get the refunds information for a specific company
* [getCommerceRevenueMetrics](docs/reports/README.md#getcommercerevenuemetrics) - Commerce Revenue Metrics
* [~~getEnhancedBalanceSheet~~](docs/reports/README.md#getenhancedbalancesheet) - Enhanced Balance Sheet :warning: **Deprecated**
* [getEnhancedCashFlowTransactions](docs/reports/README.md#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [~~getEnhancedFinancialMetrics~~](docs/reports/README.md#getenhancedfinancialmetrics) - List financial metrics :warning: **Deprecated**
* [getEnhancedInvoicesReport](docs/reports/README.md#getenhancedinvoicesreport) - Enhanced Invoices Report
* [~~getEnhancedProfitAndLoss~~](docs/reports/README.md#getenhancedprofitandloss) - Enhanced Profit and Loss :warning: **Deprecated**
* [getRecurringRevenueMetrics](docs/reports/README.md#getrecurringrevenuemetrics) - Get key metrics for subscription revenue
* [requestRecurringRevenueMetrics](docs/reports/README.md#requestrecurringrevenuemetrics) - Request production of key subscription revenue metrics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
