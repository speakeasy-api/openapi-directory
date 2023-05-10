# SDK

## Overview

Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure, and monitor all of your services across multiple accounts and virtual private clouds (VPCs). Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a> 

Amazon Web Services documentation
<https://docs.aws.amazon.com/vpc-lattice/>
### Available Operations

* [batchUpdateRule](#batchupdaterule) - Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 
* [createAccessLogSubscription](#createaccesslogsubscription) - Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [createListener](#createlistener) - Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [createRule](#createrule) - Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [createService](#createservice) - <p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [createServiceNetwork](#createservicenetwork) - <p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [createServiceNetworkServiceAssociation](#createservicenetworkserviceassociation) - <p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>
* [createServiceNetworkVpcAssociation](#createservicenetworkvpcassociation) - <p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>
* [createTargetGroup](#createtargetgroup) - <p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [deleteAccessLogSubscription](#deleteaccesslogsubscription) - Deletes the specified access log subscription.
* [deleteAuthPolicy](#deleteauthpolicy) - Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.
* [deleteListener](#deletelistener) - Deletes the specified listener.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes the specified resource policy.
* [deleteRule](#deleterule) - <p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
* [deleteService](#deleteservice) - Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [deleteServiceNetwork](#deleteservicenetwork) - Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [deleteServiceNetworkServiceAssociation](#deleteservicenetworkserviceassociation) - Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.
* [deleteServiceNetworkVpcAssociation](#deleteservicenetworkvpcassociation) - Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.
* [deleteTargetGroup](#deletetargetgroup) - Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
* [deregisterTargets](#deregistertargets) - Deregisters the specified targets from the specified target group.
* [getAccessLogSubscription](#getaccesslogsubscription) - Retrieves information about the specified access log subscription.
* [getAuthPolicy](#getauthpolicy) - Retrieves information about the auth policy for the specified service or service network.
* [getListener](#getlistener) - Retrieves information about the specified listener for the specified service.
* [getResourcePolicy](#getresourcepolicy) - Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.
* [getRule](#getrule) - Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
* [getService](#getservice) - Retrieves information about the specified service.
* [getServiceNetwork](#getservicenetwork) - Retrieves information about the specified service network.
* [getServiceNetworkServiceAssociation](#getservicenetworkserviceassociation) - Retrieves information about the specified association between a service network and a service.
* [getServiceNetworkVpcAssociation](#getservicenetworkvpcassociation) - Retrieves information about the association between a service network and a VPC.
* [getTargetGroup](#gettargetgroup) - Retrieves information about the specified target group.
* [listAccessLogSubscriptions](#listaccesslogsubscriptions) - Lists all access log subscriptions for the specified service network or service.
* [listListeners](#listlisteners) - Lists the listeners for the specified service.
* [listRules](#listrules) - Lists the rules for the listener.
* [listServiceNetworkServiceAssociations](#listservicenetworkserviceassociations) - <p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>
* [listServiceNetworkVpcAssociations](#listservicenetworkvpcassociations) - Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.
* [listServiceNetworks](#listservicenetworks) - Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.
* [listServices](#listservices) - Lists the services owned by the caller account or shared with the caller account.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [listTargetGroups](#listtargetgroups) - Lists your target groups. You can narrow your search by using the filters below in your request.
* [listTargets](#listtargets) - Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 
* [putAuthPolicy](#putauthpolicy) - Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
* [putResourcePolicy](#putresourcepolicy) - Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.
* [registerTargets](#registertargets) - Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateAccessLogSubscription](#updateaccesslogsubscription) - Updates the specified access log subscription.
* [updateListener](#updatelistener) - Updates the specified listener for the specified service.
* [updateRule](#updaterule) - Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.
* [updateService](#updateservice) - Updates the specified service.
* [updateServiceNetwork](#updateservicenetwork) - Updates the specified service network.
* [updateServiceNetworkVpcAssociation](#updateservicenetworkvpcassociation) - Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
* [updateTargetGroup](#updatetargetgroup) - Updates the specified target group.

## batchUpdateRule

Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RuleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RuleAction;
use \OpenAPI\OpenAPI\Models\Shared\FixedResponseAction;
use \OpenAPI\OpenAPI\Models\Shared\ForwardAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTargetGroup;
use \OpenAPI\OpenAPI\Models\Shared\RuleMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchType;
use \OpenAPI\OpenAPI\Models\Shared\PathMatch;
use \OpenAPI\OpenAPI\Models\Shared\PathMatchType;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateRuleRequest();
    $request->requestBody = new BatchUpdateRuleRequestBody();
    $request->requestBody->rules = [
        new RuleUpdate(),
        new RuleUpdate(),
        new RuleUpdate(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->listenerIdentifier = 'suscipit';
    $request->serviceIdentifier = 'molestiae';

    $response = $sdk->sdk->batchUpdateRule($request);

    if ($response->batchUpdateRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccessLogSubscription

Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessLogSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessLogSubscriptionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessLogSubscriptionRequest();
    $request->requestBody = new CreateAccessLogSubscriptionRequestBody();
    $request->requestBody->clientToken = 'minus';
    $request->requestBody->destinationArn = 'placeat';
    $request->requestBody->resourceIdentifier = 'voluptatum';
    $request->requestBody->tags = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->createAccessLogSubscription($request);

    if ($response->createAccessLogSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createListener

Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateListenerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateListenerRequestBodyDefaultAction;
use \OpenAPI\OpenAPI\Models\Shared\FixedResponseAction;
use \OpenAPI\OpenAPI\Models\Shared\ForwardAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTargetGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateListenerRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateListenerRequest();
    $request->requestBody = new CreateListenerRequestBody();
    $request->requestBody->clientToken = 'sapiente';
    $request->requestBody->defaultAction = new CreateListenerRequestBodyDefaultAction();
    $request->requestBody->defaultAction->fixedResponse = new FixedResponseAction();
    $request->requestBody->defaultAction->fixedResponse->statusCode = 778157;
    $request->requestBody->defaultAction->forward = new ForwardAction();
    $request->requestBody->defaultAction->forward->targetGroups = [
        new WeightedTargetGroup(),
    ];
    $request->requestBody->name = 'Wilfred Wolff';
    $request->requestBody->port = 800911;
    $request->requestBody->protocol = CreateListenerRequestBodyProtocolEnum::HTTP;
    $request->requestBody->tags = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->serviceIdentifier = 'molestiae';

    $response = $sdk->sdk->createListener($request);

    if ($response->createListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRule

Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBodyAction;
use \OpenAPI\OpenAPI\Models\Shared\FixedResponseAction;
use \OpenAPI\OpenAPI\Models\Shared\ForwardAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTargetGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequestBodyMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchType;
use \OpenAPI\OpenAPI\Models\Shared\PathMatch;
use \OpenAPI\OpenAPI\Models\Shared\PathMatchType;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRuleRequest();
    $request->requestBody = new CreateRuleRequestBody();
    $request->requestBody->action = new CreateRuleRequestBodyAction();
    $request->requestBody->action->fixedResponse = new FixedResponseAction();
    $request->requestBody->action->fixedResponse->statusCode = 264555;
    $request->requestBody->action->forward = new ForwardAction();
    $request->requestBody->action->forward->targetGroups = [
        new WeightedTargetGroup(),
    ];
    $request->requestBody->clientToken = 'impedit';
    $request->requestBody->match = new CreateRuleRequestBodyMatch();
    $request->requestBody->match->httpMatch = new HttpMatch();
    $request->requestBody->match->httpMatch->headerMatches = [
        new HeaderMatch(),
        new HeaderMatch(),
        new HeaderMatch(),
    ];
    $request->requestBody->match->httpMatch->method = 'esse';
    $request->requestBody->match->httpMatch->pathMatch = new PathMatch();
    $request->requestBody->match->httpMatch->pathMatch->caseSensitive = false;
    $request->requestBody->match->httpMatch->pathMatch->match = new PathMatchType();
    $request->requestBody->match->httpMatch->pathMatch->match->exact = 'ipsum';
    $request->requestBody->match->httpMatch->pathMatch->match->prefix = 'excepturi';
    $request->requestBody->name = 'Dorothy Hane';
    $request->requestBody->priority = 612096;
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
    $request->listenerIdentifier = 'saepe';
    $request->serviceIdentifier = 'quidem';

    $response = $sdk->sdk->createRule($request);

    if ($response->createRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

<p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceRequest();
    $request->requestBody = new CreateServiceRequestBody();
    $request->requestBody->authType = CreateServiceRequestBodyAuthTypeEnum::NONE;
    $request->requestBody->certificateArn = 'ipsa';
    $request->requestBody->clientToken = 'reiciendis';
    $request->requestBody->customDomainName = 'est';
    $request->requestBody->name = 'Cameron Dach';
    $request->requestBody->tags = [
        'nobis' => 'enim',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->createService($request);

    if ($response->createServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceNetwork

<p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceNetworkRequest();
    $request->requestBody = new CreateServiceNetworkRequestBody();
    $request->requestBody->authType = CreateServiceNetworkRequestBodyAuthTypeEnum::AWS_IAM;
    $request->requestBody->clientToken = 'sapiente';
    $request->requestBody->name = 'Angie Durgan';
    $request->requestBody->tags = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createServiceNetwork($request);

    if ($response->createServiceNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceNetworkServiceAssociation

<p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkServiceAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkServiceAssociationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceNetworkServiceAssociationRequest();
    $request->requestBody = new CreateServiceNetworkServiceAssociationRequestBody();
    $request->requestBody->clientToken = 'quo';
    $request->requestBody->serviceIdentifier = 'sequi';
    $request->requestBody->serviceNetworkIdentifier = 'tenetur';
    $request->requestBody->tags = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->createServiceNetworkServiceAssociation($request);

    if ($response->createServiceNetworkServiceAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceNetworkVpcAssociation

<p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkVpcAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceNetworkVpcAssociationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceNetworkVpcAssociationRequest();
    $request->requestBody = new CreateServiceNetworkVpcAssociationRequestBody();
    $request->requestBody->clientToken = 'nihil';
    $request->requestBody->securityGroupIds = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->requestBody->serviceNetworkIdentifier = 'voluptate';
    $request->requestBody->tags = [
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->requestBody->vpcIdentifier = 'corporis';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->createServiceNetworkVpcAssociation($request);

    if ($response->createServiceNetworkVpcAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTargetGroup

<p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTargetGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTargetGroupRequestBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckConfig;
use \OpenAPI\OpenAPI\Models\Shared\Matcher;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckProtocolVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupProtocolVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTargetGroupRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTargetGroupRequest();
    $request->requestBody = new CreateTargetGroupRequestBody();
    $request->requestBody->clientToken = 'repudiandae';
    $request->requestBody->config = new CreateTargetGroupRequestBodyConfig();
    $request->requestBody->config->healthCheck = new HealthCheckConfig();
    $request->requestBody->config->healthCheck->enabled = false;
    $request->requestBody->config->healthCheck->healthCheckIntervalSeconds = 64147;
    $request->requestBody->config->healthCheck->healthCheckTimeoutSeconds = 216822;
    $request->requestBody->config->healthCheck->healthyThresholdCount = 692472;
    $request->requestBody->config->healthCheck->matcher = new Matcher();
    $request->requestBody->config->healthCheck->matcher->httpCode = 'molestias';
    $request->requestBody->config->healthCheck->path = 'excepturi';
    $request->requestBody->config->healthCheck->port = 865103;
    $request->requestBody->config->healthCheck->protocol = TargetGroupProtocolEnum::HTTP;
    $request->requestBody->config->healthCheck->protocolVersion = HealthCheckProtocolVersionEnum::HTTP2;
    $request->requestBody->config->healthCheck->unhealthyThresholdCount = 523248;
    $request->requestBody->config->ipAddressType = IpAddressTypeEnum::IPV6;
    $request->requestBody->config->port = 93940;
    $request->requestBody->config->protocol = TargetGroupProtocolEnum::HTTPS;
    $request->requestBody->config->protocolVersion = TargetGroupProtocolVersionEnum::HTTP2;
    $request->requestBody->config->vpcIdentifier = 'veritatis';
    $request->requestBody->name = 'Miss Randall Hamill';
    $request->requestBody->tags = [
        'deserunt' => 'distinctio',
    ];
    $request->requestBody->type = CreateTargetGroupRequestBodyTypeEnum::ALB;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->createTargetGroup($request);

    if ($response->createTargetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessLogSubscription

Deletes the specified access log subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessLogSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessLogSubscriptionRequest();
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->accessLogSubscriptionIdentifier = 'tempora';

    $response = $sdk->sdk->deleteAccessLogSubscription($request);

    if ($response->deleteAccessLogSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAuthPolicy

Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAuthPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAuthPolicyRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->resourceIdentifier = 'sint';

    $response = $sdk->sdk->deleteAuthPolicy($request);

    if ($response->deleteAuthPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteListener

Deletes the specified listener.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteListenerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteListenerRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->listenerIdentifier = 'a';
    $request->serviceIdentifier = 'dolorum';

    $response = $sdk->sdk->deleteListener($request);

    if ($response->deleteListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes the specified resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->resourceArn = 'cumque';

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRule

<p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRuleRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->listenerIdentifier = 'enim';
    $request->ruleIdentifier = 'accusamus';
    $request->serviceIdentifier = 'delectus';

    $response = $sdk->sdk->deleteRule($request);

    if ($response->deleteRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->serviceIdentifier = 'amet';

    $response = $sdk->sdk->deleteService($request);

    if ($response->deleteServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceNetwork

Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceNetworkRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->serviceNetworkIdentifier = 'nihil';

    $response = $sdk->sdk->deleteServiceNetwork($request);

    if ($response->deleteServiceNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceNetworkServiceAssociation

Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceNetworkServiceAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceNetworkServiceAssociationRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->serviceNetworkServiceAssociationIdentifier = 'nobis';

    $response = $sdk->sdk->deleteServiceNetworkServiceAssociation($request);

    if ($response->deleteServiceNetworkServiceAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceNetworkVpcAssociation

Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceNetworkVpcAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceNetworkVpcAssociationRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->serviceNetworkVpcAssociationIdentifier = 'ullam';

    $response = $sdk->sdk->deleteServiceNetworkVpcAssociation($request);

    if ($response->deleteServiceNetworkVpcAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTargetGroup

Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTargetGroupRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->targetGroupIdentifier = 'ad';

    $response = $sdk->sdk->deleteTargetGroup($request);

    if ($response->deleteTargetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterTargets

Deregisters the specified targets from the specified target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTargetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterTargetsRequest();
    $request->requestBody = new DeregisterTargetsRequestBody();
    $request->requestBody->targets = [
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->targetGroupIdentifier = 'debitis';

    $response = $sdk->sdk->deregisterTargets($request);

    if ($response->deregisterTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccessLogSubscription

Retrieves information about the specified access log subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessLogSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessLogSubscriptionRequest();
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->accessLogSubscriptionIdentifier = 'repudiandae';

    $response = $sdk->sdk->getAccessLogSubscription($request);

    if ($response->getAccessLogSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthPolicy

Retrieves information about the auth policy for the specified service or service network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthPolicyRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->resourceIdentifier = 'pariatur';

    $response = $sdk->sdk->getAuthPolicy($request);

    if ($response->getAuthPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListener

Retrieves information about the specified listener for the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListenerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListenerRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->listenerIdentifier = 'illum';
    $request->serviceIdentifier = 'pariatur';

    $response = $sdk->sdk->getListener($request);

    if ($response->getListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ab';
    $request->resourceArn = 'maiores';

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRule

Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRuleRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->listenerIdentifier = 'nemo';
    $request->ruleIdentifier = 'voluptatibus';
    $request->serviceIdentifier = 'perferendis';

    $response = $sdk->sdk->getRule($request);

    if ($response->getRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getService

Retrieves information about the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRequest();
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->serviceIdentifier = 'nobis';

    $response = $sdk->sdk->getService($request);

    if ($response->getServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceNetwork

Retrieves information about the specified service network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceNetworkRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->serviceNetworkIdentifier = 'eos';

    $response = $sdk->sdk->getServiceNetwork($request);

    if ($response->getServiceNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceNetworkServiceAssociation

Retrieves information about the specified association between a service network and a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceNetworkServiceAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceNetworkServiceAssociationRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->serviceNetworkServiceAssociationIdentifier = 'hic';

    $response = $sdk->sdk->getServiceNetworkServiceAssociation($request);

    if ($response->getServiceNetworkServiceAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceNetworkVpcAssociation

Retrieves information about the association between a service network and a VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceNetworkVpcAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceNetworkVpcAssociationRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->serviceNetworkVpcAssociationIdentifier = 'blanditiis';

    $response = $sdk->sdk->getServiceNetworkVpcAssociation($request);

    if ($response->getServiceNetworkVpcAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTargetGroup

Retrieves information about the specified target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTargetGroupRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->targetGroupIdentifier = 'modi';

    $response = $sdk->sdk->getTargetGroup($request);

    if ($response->getTargetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccessLogSubscriptions

Lists all access log subscriptions for the specified service network or service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessLogSubscriptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessLogSubscriptionsRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->maxResults = 964490;
    $request->nextToken = 'quaerat';
    $request->resourceIdentifier = 'quos';

    $response = $sdk->sdk->listAccessLogSubscriptions($request);

    if ($response->listAccessLogSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listListeners

Lists the listeners for the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListListenersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListListenersRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->maxResults = 569574;
    $request->nextToken = 'cum';
    $request->serviceIdentifier = 'voluptate';

    $response = $sdk->sdk->listListeners($request);

    if ($response->listListenersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRules

Lists the rules for the listener.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRulesRequest();
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->listenerIdentifier = 'ipsa';
    $request->maxResults = 434417;
    $request->nextToken = 'odio';
    $request->serviceIdentifier = 'quaerat';

    $response = $sdk->sdk->listRules($request);

    if ($response->listRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceNetworkServiceAssociations

<p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceNetworkServiceAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceNetworkServiceAssociationsRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->maxResults = 24678;
    $request->nextToken = 'fugiat';
    $request->serviceIdentifier = 'ab';
    $request->serviceNetworkIdentifier = 'soluta';

    $response = $sdk->sdk->listServiceNetworkServiceAssociations($request);

    if ($response->listServiceNetworkServiceAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceNetworkVpcAssociations

Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceNetworkVpcAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceNetworkVpcAssociationsRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->maxResults = 714697;
    $request->nextToken = 'asperiores';
    $request->serviceNetworkIdentifier = 'nihil';
    $request->vpcIdentifier = 'ipsum';

    $response = $sdk->sdk->listServiceNetworkVpcAssociations($request);

    if ($response->listServiceNetworkVpcAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceNetworks

Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceNetworksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceNetworksRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->maxResults = 758379;
    $request->nextToken = 'accusamus';

    $response = $sdk->sdk->listServiceNetworks($request);

    if ($response->listServiceNetworksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

Lists the services owned by the caller account or shared with the caller account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->maxResults = 519711;
    $request->nextToken = 'similique';

    $response = $sdk->sdk->listServices($request);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->resourceArn = 'qui';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargetGroups

Lists your target groups. You can narrow your search by using the filters below in your request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetGroupsTargetGroupTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetGroupsRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->maxResults = 947371;
    $request->nextToken = 'amet';
    $request->targetGroupType = ListTargetGroupsTargetGroupTypeEnum::INSTANCE;
    $request->vpcIdentifier = 'accusamus';

    $response = $sdk->sdk->listTargetGroups($request);

    if ($response->listTargetGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargets

Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetsRequest();
    $request->requestBody = new ListTargetsRequestBody();
    $request->requestBody->targets = [
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->maxResults = 207470;
    $request->nextToken = 'sed';
    $request->targetGroupIdentifier = 'vel';

    $response = $sdk->sdk->listTargets($request);

    if ($response->listTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAuthPolicy

Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAuthPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAuthPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAuthPolicyRequest();
    $request->requestBody = new PutAuthPolicyRequestBody();
    $request->requestBody->policy = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->resourceIdentifier = 'maxime';

    $response = $sdk->sdk->putAuthPolicy($request);

    if ($response->putAuthPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.

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
    $request->requestBody->policy = 'pariatur';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->resourceArn = 'distinctio';

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerTargets

Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTargetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterTargetsRequest();
    $request->requestBody = new RegisterTargetsRequestBody();
    $request->requestBody->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'fugit';
    $request->targetGroupIdentifier = 'magni';

    $response = $sdk->sdk->registerTargets($request);

    if ($response->registerTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tags to the specified resource.

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
        'sunt' => 'ullam',
        'nam' => 'hic',
    ];
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->resourceArn = 'veritatis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified resource.

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
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->resourceArn = 'dolore';
    $request->tagKeys = [
        'adipisci',
        'dolorum',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccessLogSubscription

Updates the specified access log subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessLogSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessLogSubscriptionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccessLogSubscriptionRequest();
    $request->requestBody = new UpdateAccessLogSubscriptionRequestBody();
    $request->requestBody->destinationArn = 'architecto';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->accessLogSubscriptionIdentifier = 'porro';

    $response = $sdk->sdk->updateAccessLogSubscription($request);

    if ($response->updateAccessLogSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateListener

Updates the specified listener for the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateListenerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateListenerRequestBodyDefaultAction;
use \OpenAPI\OpenAPI\Models\Shared\FixedResponseAction;
use \OpenAPI\OpenAPI\Models\Shared\ForwardAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTargetGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateListenerRequest();
    $request->requestBody = new UpdateListenerRequestBody();
    $request->requestBody->defaultAction = new UpdateListenerRequestBodyDefaultAction();
    $request->requestBody->defaultAction->fixedResponse = new FixedResponseAction();
    $request->requestBody->defaultAction->fixedResponse->statusCode = 984330;
    $request->requestBody->defaultAction->forward = new ForwardAction();
    $request->requestBody->defaultAction->forward->targetGroups = [
        new WeightedTargetGroup(),
        new WeightedTargetGroup(),
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->listenerIdentifier = 'voluptatibus';
    $request->serviceIdentifier = 'quisquam';

    $response = $sdk->sdk->updateListener($request);

    if ($response->updateListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRule

Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequestBodyAction;
use \OpenAPI\OpenAPI\Models\Shared\FixedResponseAction;
use \OpenAPI\OpenAPI\Models\Shared\ForwardAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTargetGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequestBodyMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchType;
use \OpenAPI\OpenAPI\Models\Shared\PathMatch;
use \OpenAPI\OpenAPI\Models\Shared\PathMatchType;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRuleRequest();
    $request->requestBody = new UpdateRuleRequestBody();
    $request->requestBody->action = new UpdateRuleRequestBodyAction();
    $request->requestBody->action->fixedResponse = new FixedResponseAction();
    $request->requestBody->action->fixedResponse->statusCode = 876506;
    $request->requestBody->action->forward = new ForwardAction();
    $request->requestBody->action->forward->targetGroups = [
        new WeightedTargetGroup(),
        new WeightedTargetGroup(),
        new WeightedTargetGroup(),
    ];
    $request->requestBody->match = new UpdateRuleRequestBodyMatch();
    $request->requestBody->match->httpMatch = new HttpMatch();
    $request->requestBody->match->httpMatch->headerMatches = [
        new HeaderMatch(),
        new HeaderMatch(),
    ];
    $request->requestBody->match->httpMatch->method = 'ipsum';
    $request->requestBody->match->httpMatch->pathMatch = new PathMatch();
    $request->requestBody->match->httpMatch->pathMatch->caseSensitive = false;
    $request->requestBody->match->httpMatch->pathMatch->match = new PathMatchType();
    $request->requestBody->match->httpMatch->pathMatch->match->exact = 'delectus';
    $request->requestBody->match->httpMatch->pathMatch->match->prefix = 'voluptate';
    $request->requestBody->priority = 231701;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->listenerIdentifier = 'similique';
    $request->ruleIdentifier = 'facilis';
    $request->serviceIdentifier = 'vero';

    $response = $sdk->sdk->updateRule($request);

    if ($response->updateRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

Updates the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceRequestBody();
    $request->requestBody->authType = UpdateServiceRequestBodyAuthTypeEnum::NONE;
    $request->requestBody->certificateArn = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->serviceIdentifier = 'exercitationem';

    $response = $sdk->sdk->updateService($request);

    if ($response->updateServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceNetwork

Updates the specified service network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNetworkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNetworkRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceNetworkRequest();
    $request->requestBody = new UpdateServiceNetworkRequestBody();
    $request->requestBody->authType = UpdateServiceNetworkRequestBodyAuthTypeEnum::AWS_IAM;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->serviceNetworkIdentifier = 'alias';

    $response = $sdk->sdk->updateServiceNetwork($request);

    if ($response->updateServiceNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceNetworkVpcAssociation

Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNetworkVpcAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNetworkVpcAssociationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceNetworkVpcAssociationRequest();
    $request->requestBody = new UpdateServiceNetworkVpcAssociationRequestBody();
    $request->requestBody->securityGroupIds = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->serviceNetworkVpcAssociationIdentifier = 'dicta';

    $response = $sdk->sdk->updateServiceNetworkVpcAssociation($request);

    if ($response->updateServiceNetworkVpcAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTargetGroup

Updates the specified target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTargetGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTargetGroupRequestBodyHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\Matcher;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckProtocolVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTargetGroupRequest();
    $request->requestBody = new UpdateTargetGroupRequestBody();
    $request->requestBody->healthCheck = new UpdateTargetGroupRequestBodyHealthCheck();
    $request->requestBody->healthCheck->enabled = false;
    $request->requestBody->healthCheck->healthCheckIntervalSeconds = 224317;
    $request->requestBody->healthCheck->healthCheckTimeoutSeconds = 980700;
    $request->requestBody->healthCheck->healthyThresholdCount = 97844;
    $request->requestBody->healthCheck->matcher = new Matcher();
    $request->requestBody->healthCheck->matcher->httpCode = 'ex';
    $request->requestBody->healthCheck->path = 'nulla';
    $request->requestBody->healthCheck->port = 569211;
    $request->requestBody->healthCheck->protocol = TargetGroupProtocolEnum::HTTPS;
    $request->requestBody->healthCheck->protocolVersion = HealthCheckProtocolVersionEnum::HTTP1;
    $request->requestBody->healthCheck->unhealthyThresholdCount = 960835;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->targetGroupIdentifier = 'inventore';

    $response = $sdk->sdk->updateTargetGroup($request);

    if ($response->updateTargetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
