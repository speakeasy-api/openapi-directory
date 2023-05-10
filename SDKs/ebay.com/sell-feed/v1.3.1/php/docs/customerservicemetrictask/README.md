# customerServiceMetricTask

### Available Operations

* [createCustomerServiceMetricTask](#createcustomerservicemetrictask) - <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
* [getCustomerServiceMetricTask](#getcustomerservicemetrictask) - <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
* [getCustomerServiceMetricTasks](#getcustomerservicemetrictasks) - Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

## createCustomerServiceMetricTask

<p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceMetricsTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerServiceMetricsFilterCriteria;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerServiceMetricTaskRequest();
    $request->createServiceMetricsTaskRequest = new CreateServiceMetricsTaskRequest();
    $request->createServiceMetricsTaskRequest->feedType = 'magnam';
    $request->createServiceMetricsTaskRequest->filterCriteria = new CustomerServiceMetricsFilterCriteria();
    $request->createServiceMetricsTaskRequest->filterCriteria->customerServiceMetricType = 'debitis';
    $request->createServiceMetricsTaskRequest->filterCriteria->evaluationMarketplaceId = 'ipsa';
    $request->createServiceMetricsTaskRequest->filterCriteria->listingCategories = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->createServiceMetricsTaskRequest->filterCriteria->shippingRegions = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->createServiceMetricsTaskRequest->schemaVersion = 'recusandae';
    $request->acceptLanguage = 'temporibus';

    $requestSecurity = new CreateCustomerServiceMetricTaskSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerServiceMetricTask->createCustomerServiceMetricTask($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomerServiceMetricTask

<p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerServiceMetricTaskRequest();
    $request->taskId = 'ab';

    $requestSecurity = new GetCustomerServiceMetricTaskSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerServiceMetricTask->getCustomerServiceMetricTask($request, $requestSecurity);

    if ($response->serviceMetricsTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomerServiceMetricTasks

Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricTasksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerServiceMetricTasksRequest();
    $request->dateRange = 'quis';
    $request->feedType = 'veritatis';
    $request->limit = 'deserunt';
    $request->lookBackDays = 'perferendis';
    $request->offset = 'ipsam';

    $requestSecurity = new GetCustomerServiceMetricTasksSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerServiceMetricTask->getCustomerServiceMetricTasks($request, $requestSecurity);

    if ($response->customerServiceMetricTaskCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
