# SDK

## Overview

Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller

Amazon Web Services documentation
<https://docs.aws.amazon.com/route53-recovery-control-config/>
### Available Operations

* [createCluster](#createcluster) - Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
* [createControlPanel](#createcontrolpanel) - Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
* [createRoutingControl](#createroutingcontrol) - <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* [createSafetyRule](#createsafetyrule) - <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
* [deleteCluster](#deletecluster) - Delete a cluster.
* [deleteControlPanel](#deletecontrolpanel) - Deletes a control panel.
* [deleteRoutingControl](#deleteroutingcontrol) - Deletes a routing control.
* [deleteSafetyRule](#deletesafetyrule) - <p>Deletes a safety rule.</p>/&gt;
* [describeCluster](#describecluster) - Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
* [describeControlPanel](#describecontrolpanel) - Displays details about a control panel.
* [describeRoutingControl](#describeroutingcontrol) - <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* [describeSafetyRule](#describesafetyrule) - Returns information about a safety rule.
* [listAssociatedRoute53HealthChecks](#listassociatedroute53healthchecks) - Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
* [listClusters](#listclusters) - Returns an array of all the clusters in an account.
* [listControlPanels](#listcontrolpanels) - Returns an array of control panels in an account or in a cluster.
* [listRoutingControls](#listroutingcontrols) - Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
* [listSafetyRules](#listsafetyrules) - List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
* [listTagsForResource](#listtagsforresource) - Lists the tags for a resource.
* [tagResource](#tagresource) - Adds a tag to a resource.
* [untagResource](#untagresource) - Removes a tag from a resource.
* [updateControlPanel](#updatecontrolpanel) - Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
* [updateRoutingControl](#updateroutingcontrol) - Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
* [updateSafetyRule](#updatesafetyrule) - Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.

## createCluster

Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->requestBody = new CreateClusterRequestBody();
    $request->requestBody->clientToken = 'delectus';
    $request->requestBody->clusterName = 'tempora';
    $request->requestBody->tags = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createControlPanel

Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateControlPanelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateControlPanelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateControlPanelRequest();
    $request->requestBody = new CreateControlPanelRequestBody();
    $request->requestBody->clientToken = 'veritatis';
    $request->requestBody->clusterArn = 'deserunt';
    $request->requestBody->controlPanelName = 'perferendis';
    $request->requestBody->tags = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createControlPanel($request);

    if ($response->createControlPanelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoutingControl

<p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoutingControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoutingControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRoutingControlRequest();
    $request->requestBody = new CreateRoutingControlRequestBody();
    $request->requestBody->clientToken = 'totam';
    $request->requestBody->clusterArn = 'porro';
    $request->requestBody->controlPanelArn = 'dolorum';
    $request->requestBody->routingControlName = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->createRoutingControl($request);

    if ($response->createRoutingControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSafetyRule

<p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSafetyRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSafetyRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSafetyRuleRequestBodyAssertionRule;
use \OpenAPI\OpenAPI\Models\Shared\RuleConfig;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSafetyRuleRequestBodyGatingRule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSafetyRuleRequest();
    $request->requestBody = new CreateSafetyRuleRequestBody();
    $request->requestBody->assertionRule = new CreateSafetyRuleRequestBodyAssertionRule();
    $request->requestBody->assertionRule->assertedControls = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->requestBody->assertionRule->controlPanelArn = 'modi';
    $request->requestBody->assertionRule->name = 'Krista Rippin';
    $request->requestBody->assertionRule->ruleConfig = new RuleConfig();
    $request->requestBody->assertionRule->ruleConfig->inverted = false;
    $request->requestBody->assertionRule->ruleConfig->threshold = 568434;
    $request->requestBody->assertionRule->ruleConfig->type = RuleTypeEnum::ATLEAST;
    $request->requestBody->assertionRule->waitPeriodMs = 18789;
    $request->requestBody->clientToken = 'ad';
    $request->requestBody->gatingRule = new CreateSafetyRuleRequestBodyGatingRule();
    $request->requestBody->gatingRule->controlPanelArn = 'natus';
    $request->requestBody->gatingRule->gatingControls = [
        'iste',
    ];
    $request->requestBody->gatingRule->name = 'Faye Howe';
    $request->requestBody->gatingRule->ruleConfig = new RuleConfig();
    $request->requestBody->gatingRule->ruleConfig->inverted = false;
    $request->requestBody->gatingRule->ruleConfig->threshold = 681820;
    $request->requestBody->gatingRule->ruleConfig->type = RuleTypeEnum::AND;
    $request->requestBody->gatingRule->targetControls = [
        'iste',
        'iure',
    ];
    $request->requestBody->gatingRule->waitPeriodMs = 902349;
    $request->requestBody->tags = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->createSafetyRule($request);

    if ($response->createSafetyRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCluster

Delete a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClusterRequest();
    $request->clusterArn = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->deleteCluster($request);

    if ($response->deleteClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteControlPanel

Deletes a control panel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteControlPanelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteControlPanelRequest();
    $request->controlPanelArn = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->deleteControlPanel($request);

    if ($response->deleteControlPanelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoutingControl

Deletes a routing control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoutingControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoutingControlRequest();
    $request->routingControlArn = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->deleteRoutingControl($request);

    if ($response->deleteRoutingControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSafetyRule

<p>Deletes a safety rule.</p>/&gt;

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSafetyRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSafetyRuleRequest();
    $request->safetyRuleArn = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->deleteSafetyRule($request);

    if ($response->deleteSafetyRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCluster

Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClusterRequest();
    $request->clusterArn = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->describeCluster($request);

    if ($response->describeClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeControlPanel

Displays details about a control panel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeControlPanelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeControlPanelRequest();
    $request->controlPanelArn = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->describeControlPanel($request);

    if ($response->describeControlPanelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRoutingControl

<p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRoutingControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRoutingControlRequest();
    $request->routingControlArn = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->describeRoutingControl($request);

    if ($response->describeRoutingControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSafetyRule

Returns information about a safety rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSafetyRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSafetyRuleRequest();
    $request->safetyRuleArn = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->describeSafetyRule($request);

    if ($response->describeSafetyRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociatedRoute53HealthChecks

Returns an array of all Amazon Route 53 health checks associated with a specific routing control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedRoute53HealthChecksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociatedRoute53HealthChecksRequest();
    $request->maxResults = 414263;
    $request->nextToken = 'repudiandae';
    $request->routingControlArn = 'quae';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->listAssociatedRoute53HealthChecks($request);

    if ($response->listAssociatedRoute53HealthChecksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

Returns an array of all the clusters in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->maxResults = 523248;
    $request->nextToken = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->listClusters($request);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listControlPanels

Returns an array of control panels in an account or in a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListControlPanelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListControlPanelsRequest();
    $request->clusterArn = 'consequatur';
    $request->maxResults = 667411;
    $request->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->listControlPanels($request);

    if ($response->listControlPanelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoutingControls

Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRoutingControlsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoutingControlsRequest();
    $request->controlPanelArn = 'aliquid';
    $request->maxResults = 586513;
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->listRoutingControls($request);

    if ($response->listRoutingControlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSafetyRules

List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSafetyRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSafetyRulesRequest();
    $request->controlPanelArn = 'excepturi';
    $request->maxResults = 270008;
    $request->nextToken = 'facilis';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->listSafetyRules($request);

    if ($response->listSafetyRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for a resource.

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
    $request->resourceArn = 'aliquid';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds a tag to a resource.

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
        'in' => 'in',
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->resourceArn = 'magnam';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

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
    $request->resourceArn = 'occaecati';
    $request->tagKeys = [
        'accusamus',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateControlPanel

Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateControlPanelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateControlPanelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateControlPanelRequest();
    $request->requestBody = new UpdateControlPanelRequestBody();
    $request->requestBody->controlPanelArn = 'amet';
    $request->requestBody->controlPanelName = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->updateControlPanel($request);

    if ($response->updateControlPanelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoutingControl

Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoutingControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoutingControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoutingControlRequest();
    $request->requestBody = new UpdateRoutingControlRequestBody();
    $request->requestBody->routingControlArn = 'magnam';
    $request->requestBody->routingControlName = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->updateRoutingControl($request);

    if ($response->updateRoutingControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSafetyRule

Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSafetyRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSafetyRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSafetyRuleRequestBodyAssertionRuleUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSafetyRuleRequestBodyGatingRuleUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSafetyRuleRequest();
    $request->requestBody = new UpdateSafetyRuleRequestBody();
    $request->requestBody->assertionRuleUpdate = new UpdateSafetyRuleRequestBodyAssertionRuleUpdate();
    $request->requestBody->assertionRuleUpdate->name = 'Brandon Brakus V';
    $request->requestBody->assertionRuleUpdate->safetyRuleArn = 'ullam';
    $request->requestBody->assertionRuleUpdate->waitPeriodMs = 590873;
    $request->requestBody->gatingRuleUpdate = new UpdateSafetyRuleRequestBodyGatingRuleUpdate();
    $request->requestBody->gatingRuleUpdate->name = 'Kirk Bartoletti';
    $request->requestBody->gatingRuleUpdate->safetyRuleArn = 'mollitia';
    $request->requestBody->gatingRuleUpdate->waitPeriodMs = 320997;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->updateSafetyRule($request);

    if ($response->updateSafetyRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
