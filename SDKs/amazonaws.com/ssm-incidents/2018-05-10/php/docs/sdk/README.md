# SDK

## Overview

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services. </p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-incidents/>
### Available Operations

* [createReplicationSet](#createreplicationset) - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* [createResponsePlan](#createresponseplan) - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* [createTimelineEvent](#createtimelineevent) - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* [deleteIncidentRecord](#deleteincidentrecord) - Delete an incident record from Incident Manager. 
* [deleteReplicationSet](#deletereplicationset) - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* [deleteResponsePlan](#deleteresponseplan) - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* [deleteTimelineEvent](#deletetimelineevent) - Deletes a timeline event from an incident.
* [getIncidentRecord](#getincidentrecord) - Returns the details for the specified incident record.
* [getReplicationSet](#getreplicationset) - Retrieve your Incident Manager replication set.
* [getResourcePolicies](#getresourcepolicies) - Retrieves the resource policies attached to the specified response plan.
* [getResponsePlan](#getresponseplan) - Retrieves the details of the specified response plan.
* [getTimelineEvent](#gettimelineevent) - Retrieves a timeline event based on its ID and incident record.
* [listIncidentRecords](#listincidentrecords) - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* [listRelatedItems](#listrelateditems) - List all related items for an incident record.
* [listReplicationSets](#listreplicationsets) - Lists details about the replication set configured in your account. 
* [listResponsePlans](#listresponseplans) - Lists all response plans in your account.
* [listTagsForResource](#listtagsforresource) - Lists the tags that are attached to the specified response plan.
* [listTimelineEvents](#listtimelineevents) - Lists timeline events for the specified incident record.
* [putResourcePolicy](#putresourcepolicy) - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* [startIncident](#startincident) - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* [tagResource](#tagresource) - Adds a tag to a response plan.
* [untagResource](#untagresource) - Removes a tag from a resource.
* [updateDeletionProtection](#updatedeletionprotection) - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* [updateIncidentRecord](#updateincidentrecord) - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* [updateRelatedItems](#updaterelateditems) - Add or remove related items from the related items tab of an incident record.
* [updateReplicationSet](#updatereplicationset) - Add or delete Regions from your replication set.
* [updateResponsePlan](#updateresponseplan) - Updates the specified response plan.
* [updateTimelineEvent](#updatetimelineevent) - Updates a timeline event. You can update events of type <code>Custom Event</code>.

## createReplicationSet

A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationSetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RegionMapInputValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationSetRequest();
    $request->requestBody = new CreateReplicationSetRequestBody();
    $request->requestBody->clientToken = 'placeat';
    $request->requestBody->regions = [
        'iusto' => new RegionMapInputValue(),
        'excepturi' => new RegionMapInputValue(),
        'nisi' => new RegionMapInputValue(),
    ];
    $request->requestBody->tags = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createReplicationSet($request);

    if ($response->createReplicationSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResponsePlan

Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResponsePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResponsePlanRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\SsmAutomation;
use \OpenAPI\OpenAPI\Models\Shared\DynamicSsmParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\VariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmTargetAccountEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateResponsePlanRequestBodyChatChannel;
use \OpenAPI\OpenAPI\Models\Operations\CreateResponsePlanRequestBodyIncidentTemplate;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTargetItem;
use \OpenAPI\OpenAPI\Models\Shared\Integration;
use \OpenAPI\OpenAPI\Models\Shared\PagerDutyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PagerDutyIncidentConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResponsePlanRequest();
    $request->requestBody = new CreateResponsePlanRequestBody();
    $request->requestBody->actions = [
        new Action(),
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->requestBody->chatChannel = new CreateResponsePlanRequestBodyChatChannel();
    $request->requestBody->chatChannel->chatbotSns = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->requestBody->chatChannel->empty = [
        'nam' => 'officia',
    ];
    $request->requestBody->clientToken = 'occaecati';
    $request->requestBody->displayName = 'fugit';
    $request->requestBody->engagements = [
        'hic',
        'optio',
        'totam',
    ];
    $request->requestBody->incidentTemplate = new CreateResponsePlanRequestBodyIncidentTemplate();
    $request->requestBody->incidentTemplate->dedupeString = 'beatae';
    $request->requestBody->incidentTemplate->impact = 414662;
    $request->requestBody->incidentTemplate->incidentTags = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->requestBody->incidentTemplate->notificationTargets = [
        new NotificationTargetItem(),
        new NotificationTargetItem(),
    ];
    $request->requestBody->incidentTemplate->summary = 'ipsum';
    $request->requestBody->incidentTemplate->title = 'Ms.';
    $request->requestBody->integrations = [
        new Integration(),
    ];
    $request->requestBody->name = 'Cathy Mosciski';
    $request->requestBody->tags = [
        'natus' => 'laboriosam',
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->createResponsePlan($request);

    if ($response->createResponsePlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTimelineEvent

Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTimelineEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTimelineEventRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EventReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTimelineEventRequest();
    $request->requestBody = new CreateTimelineEventRequestBody();
    $request->requestBody->clientToken = 'saepe';
    $request->requestBody->eventData = 'quidem';
    $request->requestBody->eventReferences = [
        new EventReference(),
    ];
    $request->requestBody->eventTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T00:28:21.182Z');
    $request->requestBody->eventType = 'est';
    $request->requestBody->incidentRecordArn = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->createTimelineEvent($request);

    if ($response->createTimelineEventOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIncidentRecord

Delete an incident record from Incident Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIncidentRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIncidentRecordRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIncidentRecordRequest();
    $request->requestBody = new DeleteIncidentRecordRequestBody();
    $request->requestBody->arn = 'omnis';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->deleteIncidentRecord($request);

    if ($response->deleteIncidentRecordOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationSet

Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationSetRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->arn = 'mollitia';

    $response = $sdk->sdk->deleteReplicationSet($request);

    if ($response->deleteReplicationSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->requestBody = new DeleteResourcePolicyRequestBody();
    $request->requestBody->policyId = 'occaecati';
    $request->requestBody->resourceArn = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResponsePlan

Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResponsePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResponsePlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResponsePlanRequest();
    $request->requestBody = new DeleteResponsePlanRequestBody();
    $request->requestBody->arn = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->deleteResponsePlan($request);

    if ($response->deleteResponsePlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTimelineEvent

Deletes a timeline event from an incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTimelineEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTimelineEventRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTimelineEventRequest();
    $request->requestBody = new DeleteTimelineEventRequestBody();
    $request->requestBody->eventId = 'ipsam';
    $request->requestBody->incidentRecordArn = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->deleteTimelineEvent($request);

    if ($response->deleteTimelineEventOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIncidentRecord

Returns the details for the specified incident record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIncidentRecordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIncidentRecordRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->arn = 'omnis';

    $response = $sdk->sdk->getIncidentRecord($request);

    if ($response->getIncidentRecordOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReplicationSet

Retrieve your Incident Manager replication set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReplicationSetRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->arn = 'dicta';

    $response = $sdk->sdk->getReplicationSet($request);

    if ($response->getReplicationSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicies

Retrieves the resource policies attached to the specified response plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePoliciesRequest();
    $request->requestBody = new GetResourcePoliciesRequestBody();
    $request->requestBody->maxResults = 359444;
    $request->requestBody->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->maxResults = 'quae';
    $request->nextToken = 'ipsum';
    $request->resourceArn = 'quidem';

    $response = $sdk->sdk->getResourcePolicies($request);

    if ($response->getResourcePoliciesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResponsePlan

Retrieves the details of the specified response plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResponsePlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResponsePlanRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->arn = 'quasi';

    $response = $sdk->sdk->getResponsePlan($request);

    if ($response->getResponsePlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimelineEvent

Retrieves a timeline event based on its ID and incident record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTimelineEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimelineEventRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->eventId = 'est';
    $request->incidentRecordArn = 'quibusdam';

    $response = $sdk->sdk->getTimelineEvent($request);

    if ($response->getTimelineEventOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncidentRecords

Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIncidentRecordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncidentRecordsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValueList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncidentRecordsRequest();
    $request->requestBody = new ListIncidentRecordsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 647174;
    $request->requestBody->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->maxResults = 'perferendis';
    $request->nextToken = 'magni';

    $response = $sdk->sdk->listIncidentRecords($request);

    if ($response->listIncidentRecordsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRelatedItems

List all related items for an incident record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRelatedItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRelatedItemsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRelatedItemsRequest();
    $request->requestBody = new ListRelatedItemsRequestBody();
    $request->requestBody->incidentRecordArn = 'assumenda';
    $request->requestBody->maxResults = 369808;
    $request->requestBody->nextToken = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->maxResults = 'delectus';
    $request->nextToken = 'eum';

    $response = $sdk->sdk->listRelatedItems($request);

    if ($response->listRelatedItemsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReplicationSets

Lists details about the replication set configured in your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReplicationSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReplicationSetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReplicationSetsRequest();
    $request->requestBody = new ListReplicationSetsRequestBody();
    $request->requestBody->maxResults = 248753;
    $request->requestBody->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->maxResults = 'debitis';
    $request->nextToken = 'a';

    $response = $sdk->sdk->listReplicationSets($request);

    if ($response->listReplicationSetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResponsePlans

Lists all response plans in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResponsePlansRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResponsePlansRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResponsePlansRequest();
    $request->requestBody = new ListResponsePlansRequestBody();
    $request->requestBody->maxResults = 680056;
    $request->requestBody->nextToken = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->maxResults = 'facere';
    $request->nextToken = 'ea';

    $response = $sdk->sdk->listResponsePlans($request);

    if ($response->listResponsePlansOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags that are attached to the specified response plan.

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
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->resourceArn = 'delectus';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTimelineEvents

Lists timeline events for the specified incident record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTimelineEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTimelineEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValueList;
use \OpenAPI\OpenAPI\Models\Operations\ListTimelineEventsRequestBodySortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTimelineEventsRequestBodySortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTimelineEventsRequest();
    $request->requestBody = new ListTimelineEventsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->incidentRecordArn = 'provident';
    $request->requestBody->maxResults = 725255;
    $request->requestBody->nextToken = 'id';
    $request->requestBody->sortBy = ListTimelineEventsRequestBodySortByEnum::EVENT_TIME;
    $request->requestBody->sortOrder = ListTimelineEventsRequestBodySortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->maxResults = 'omnis';
    $request->nextToken = 'molestiae';

    $response = $sdk->sdk->listTimelineEvents($request);

    if ($response->listTimelineEventsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->requestBody = new PutResourcePolicyRequestBody();
    $request->requestBody->policy = 'perferendis';
    $request->requestBody->resourceArn = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startIncident

Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartIncidentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartIncidentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RelatedItem;
use \OpenAPI\OpenAPI\Models\Shared\ItemIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemValue;
use \OpenAPI\OpenAPI\Models\Shared\PagerDutyIncidentDetail;
use \OpenAPI\OpenAPI\Models\Operations\StartIncidentRequestBodyTriggerDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartIncidentRequest();
    $request->requestBody = new StartIncidentRequestBody();
    $request->requestBody->clientToken = 'nobis';
    $request->requestBody->impact = 428769;
    $request->requestBody->relatedItems = [
        new RelatedItem(),
        new RelatedItem(),
        new RelatedItem(),
        new RelatedItem(),
    ];
    $request->requestBody->responsePlanArn = 'aspernatur';
    $request->requestBody->title = 'Mr.';
    $request->requestBody->triggerDetails = new StartIncidentRequestBodyTriggerDetails();
    $request->requestBody->triggerDetails->rawData = 'magnam';
    $request->requestBody->triggerDetails->source = 'et';
    $request->requestBody->triggerDetails->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-17T13:06:08.135Z');
    $request->requestBody->triggerDetails->triggerArn = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->startIncident($request);

    if ($response->startIncidentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds a tag to a response plan.

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
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->resourceArn = 'facilis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
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
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->resourceArn = 'repellat';
    $request->tagKeys = [
        'sed',
        'saepe',
        'pariatur',
        'accusantium',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeletionProtection

Update deletion protection to either allow or deny deletion of the final Region in a replication set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeletionProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeletionProtectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeletionProtectionRequest();
    $request->requestBody = new UpdateDeletionProtectionRequestBody();
    $request->requestBody->arn = 'consequuntur';
    $request->requestBody->clientToken = 'praesentium';
    $request->requestBody->deletionProtected = false;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->updateDeletionProtection($request);

    if ($response->updateDeletionProtectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIncidentRecord

Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncidentRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncidentRecordRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncidentRecordRequestBodyChatChannel;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTargetItem;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncidentRecordRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIncidentRecordRequest();
    $request->requestBody = new UpdateIncidentRecordRequestBody();
    $request->requestBody->arn = 'ea';
    $request->requestBody->chatChannel = new UpdateIncidentRecordRequestBodyChatChannel();
    $request->requestBody->chatChannel->chatbotSns = [
        'odit',
        'ea',
        'accusantium',
    ];
    $request->requestBody->chatChannel->empty = [
        'maiores' => 'quidem',
    ];
    $request->requestBody->clientToken = 'ipsam';
    $request->requestBody->impact = 453543;
    $request->requestBody->notificationTargets = [
        new NotificationTargetItem(),
        new NotificationTargetItem(),
    ];
    $request->requestBody->status = UpdateIncidentRecordRequestBodyStatusEnum::RESOLVED;
    $request->requestBody->summary = 'eaque';
    $request->requestBody->title = 'Dr.';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->updateIncidentRecord($request);

    if ($response->updateIncidentRecordOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRelatedItems

Add or remove related items from the related items tab of an incident record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelatedItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelatedItemsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRelatedItemsRequestBodyRelatedItemsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RelatedItem;
use \OpenAPI\OpenAPI\Models\Shared\ItemIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemValue;
use \OpenAPI\OpenAPI\Models\Shared\PagerDutyIncidentDetail;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRelatedItemsRequest();
    $request->requestBody = new UpdateRelatedItemsRequestBody();
    $request->requestBody->clientToken = 'corporis';
    $request->requestBody->incidentRecordArn = 'hic';
    $request->requestBody->relatedItemsUpdate = new UpdateRelatedItemsRequestBodyRelatedItemsUpdate();
    $request->requestBody->relatedItemsUpdate->itemToAdd = new RelatedItem();
    $request->requestBody->relatedItemsUpdate->itemToAdd->generatedId = 'libero';
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier = new ItemIdentifier();
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->type = ItemTypeEnum::AUTOMATION;
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value = new ItemValue();
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->arn = 'dolores';
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->metricDefinition = 'quis';
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->pagerDutyIncidentDetail = new PagerDutyIncidentDetail();
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->pagerDutyIncidentDetail->autoResolve = false;
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->pagerDutyIncidentDetail->id = '87053202-c73d-45fe-9b90-c28909b3fe49';
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->pagerDutyIncidentDetail->secretId = 'dolorum';
    $request->requestBody->relatedItemsUpdate->itemToAdd->identifier->value->url = 'deleniti';
    $request->requestBody->relatedItemsUpdate->itemToAdd->title = 'Dr.';
    $request->requestBody->relatedItemsUpdate->itemToRemove = new ItemIdentifier();
    $request->requestBody->relatedItemsUpdate->itemToRemove->type = ItemTypeEnum::OTHER;
    $request->requestBody->relatedItemsUpdate->itemToRemove->value = new ItemValue();
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->arn = 'nobis';
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->metricDefinition = 'libero';
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->pagerDutyIncidentDetail = new PagerDutyIncidentDetail();
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->pagerDutyIncidentDetail->autoResolve = false;
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->pagerDutyIncidentDetail->id = 'f4863332-3f9b-477f-ba41-00674ebf6928';
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->pagerDutyIncidentDetail->secretId = 'sit';
    $request->requestBody->relatedItemsUpdate->itemToRemove->value->url = 'fugiat';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->updateRelatedItems($request);

    if ($response->updateRelatedItemsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReplicationSet

Add or delete Regions from your replication set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationSetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpdateReplicationSetAction;
use \OpenAPI\OpenAPI\Models\Shared\AddRegionAction;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRegionAction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReplicationSetRequest();
    $request->requestBody = new UpdateReplicationSetRequestBody();
    $request->requestBody->actions = [
        new UpdateReplicationSetAction(),
        new UpdateReplicationSetAction(),
        new UpdateReplicationSetAction(),
    ];
    $request->requestBody->arn = 'necessitatibus';
    $request->requestBody->clientToken = 'distinctio';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->updateReplicationSet($request);

    if ($response->updateReplicationSetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResponsePlan

Updates the specified response plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResponsePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResponsePlanRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\SsmAutomation;
use \OpenAPI\OpenAPI\Models\Shared\DynamicSsmParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\VariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SsmTargetAccountEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResponsePlanRequestBodyChatChannel;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTargetItem;
use \OpenAPI\OpenAPI\Models\Shared\Integration;
use \OpenAPI\OpenAPI\Models\Shared\PagerDutyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PagerDutyIncidentConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResponsePlanRequest();
    $request->requestBody = new UpdateResponsePlanRequestBody();
    $request->requestBody->actions = [
        new Action(),
    ];
    $request->requestBody->arn = 'perferendis';
    $request->requestBody->chatChannel = new UpdateResponsePlanRequestBodyChatChannel();
    $request->requestBody->chatChannel->chatbotSns = [
        'optio',
    ];
    $request->requestBody->chatChannel->empty = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->requestBody->clientToken = 'similique';
    $request->requestBody->displayName = 'alias';
    $request->requestBody->engagements = [
        'quaerat',
        'tempora',
        'vel',
        'quod',
    ];
    $request->requestBody->incidentTemplateDedupeString = 'officiis';
    $request->requestBody->incidentTemplateImpact = 185636;
    $request->requestBody->incidentTemplateNotificationTargets = [
        new NotificationTargetItem(),
        new NotificationTargetItem(),
        new NotificationTargetItem(),
    ];
    $request->requestBody->incidentTemplateSummary = 'a';
    $request->requestBody->incidentTemplateTags = [
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];
    $request->requestBody->incidentTemplateTitle = 'tenetur';
    $request->requestBody->integrations = [
        new Integration(),
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->updateResponsePlan($request);

    if ($response->updateResponsePlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTimelineEvent

Updates a timeline event. You can update events of type <code>Custom Event</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTimelineEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTimelineEventRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EventReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTimelineEventRequest();
    $request->requestBody = new UpdateTimelineEventRequestBody();
    $request->requestBody->clientToken = 'nihil';
    $request->requestBody->eventData = 'sit';
    $request->requestBody->eventId = 'expedita';
    $request->requestBody->eventReferences = [
        new EventReference(),
    ];
    $request->requestBody->eventTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T23:45:18.595Z');
    $request->requestBody->eventType = 'libero';
    $request->requestBody->incidentRecordArn = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->updateTimelineEvent($request);

    if ($response->updateTimelineEventOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
