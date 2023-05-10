# SDK

## Overview

<p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end users. It reduces the time it takes for you to diagnose internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global networking footprint to calculate a baseline of performance and availability for internet traffic. This is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements as a baseline, Internet Monitor raises awareness for you when there are significant problems for your end users in the different geographic locations where your application runs.</p> <p>Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics, to easily support using CloudWatch tools with health information for geographies and networks specific to your application. Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network, you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem.</p> <p>To use Internet Monitor, you create a <i>monitor</i> and associate your application's resources with it, VPCs, CloudFront distributions, or WorkSpaces directories, to enable Internet Monitor to know where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations and networks that communicate with your application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/internetmonitor/>
### Available Operations

* [createMonitor](#createmonitor) - <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
* [deleteMonitor](#deletemonitor) - Deletes a monitor in Amazon CloudWatch Internet Monitor. 
* [getHealthEvent](#gethealthevent) - <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
* [getMonitor](#getmonitor) - Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
* [listHealthEvents](#listhealthevents) - <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
* [listMonitors](#listmonitors) - Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
* [listTagsForResource](#listtagsforresource) - Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
* [tagResource](#tagresource) - <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
* [untagResource](#untagresource) - Removes a tag from a resource.
* [updateMonitor](#updatemonitor) - <p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

## createMonitor

<p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBodyInternetMeasurementsLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\LogDeliveryStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMonitorRequest();
    $request->requestBody = new CreateMonitorRequestBody();
    $request->requestBody->clientToken = 'nisi';
    $request->requestBody->internetMeasurementsLogDelivery = new CreateMonitorRequestBodyInternetMeasurementsLogDelivery();
    $request->requestBody->internetMeasurementsLogDelivery->s3Config = new S3Config();
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->bucketName = 'recusandae';
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->bucketPrefix = 'temporibus';
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->logDeliveryStatus = LogDeliveryStatusEnum::ENABLED;
    $request->requestBody->maxCityNetworksToMonitor = 337396;
    $request->requestBody->monitorName = 'veritatis';
    $request->requestBody->resources = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->requestBody->tags = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->requestBody->trafficPercentageToMonitor = 461479;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->createMonitor($request);

    if ($response->createMonitorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMonitor

Deletes a monitor in Amazon CloudWatch Internet Monitor. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMonitorRequest();
    $request->monitorName = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->deleteMonitor($request);

    if ($response->deleteMonitorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHealthEvent

<p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHealthEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHealthEventRequest();
    $request->eventId = 'modi';
    $request->monitorName = 'qui';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getHealthEvent($request);

    if ($response->getHealthEventOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitor

Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitorRequest();
    $request->monitorName = 'ad';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getMonitor($request);

    if ($response->getMonitorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHealthEvents

<p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHealthEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHealthEventsEventStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHealthEventsRequest();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-15T09:45:44.943Z');
    $request->eventStatus = ListHealthEventsEventStatusEnum::ACTIVE;
    $request->maxResults = 359508;
    $request->monitorName = 'iste';
    $request->nextToken = 'iure';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-28T02:15:07.561Z');
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->listHealthEvents($request);

    if ($response->listHealthEventsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitors

Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitorsRequest();
    $request->maxResults = 210382;
    $request->monitorStatus = 'corporis';
    $request->nextToken = 'explicabo';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->listMonitors($request);

    if ($response->listMonitorsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->resourceArn = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'repellat' => 'mollitia',
    ];
    $request->resourceArn = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'quis';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->tagKeys = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMonitor

<p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or internet service providers), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequestBodyInternetMeasurementsLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\LogDeliveryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMonitorRequest();
    $request->monitorName = 'quasi';
    $request->requestBody = new UpdateMonitorRequestBody();
    $request->requestBody->clientToken = 'error';
    $request->requestBody->internetMeasurementsLogDelivery = new UpdateMonitorRequestBodyInternetMeasurementsLogDelivery();
    $request->requestBody->internetMeasurementsLogDelivery->s3Config = new S3Config();
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->bucketName = 'temporibus';
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->bucketPrefix = 'laborum';
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->logDeliveryStatus = LogDeliveryStatusEnum::ENABLED;
    $request->requestBody->maxCityNetworksToMonitor = 971945;
    $request->requestBody->resourcesToAdd = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->requestBody->resourcesToRemove = [
        'omnis',
    ];
    $request->requestBody->status = UpdateMonitorRequestBodyStatusEnum::ACTIVE;
    $request->requestBody->trafficPercentageToMonitor = 739264;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->updateMonitor($request);

    if ($response->updateMonitorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
