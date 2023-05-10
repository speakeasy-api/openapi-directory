# SDK

## Overview

<fullname>Cloud Map</fullname> <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance becomes available, you can call the Cloud Map API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicediscovery/>
### Available Operations

* [createHttpNamespace](#createhttpnamespace) - <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [createPrivateDnsNamespace](#createprivatednsnamespace) - Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.
* [createPublicDnsNamespace](#createpublicdnsnamespace) - <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>
* [createService](#createservice) - <p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [deleteNamespace](#deletenamespace) - Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
* [deleteService](#deleteservice) - Deletes a specified service. If the service still contains one or more registered instances, the request fails.
* [deregisterInstance](#deregisterinstance) - Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.
* [discoverInstances](#discoverinstances) - Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.
* [getInstance](#getinstance) - Gets information about a specified instance.
* [getInstancesHealthStatus](#getinstanceshealthstatus) - <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
* [getNamespace](#getnamespace) - Gets information about a namespace.
* [getOperation](#getoperation) - <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>
* [getService](#getservice) - Gets the settings for a specified service.
* [listInstances](#listinstances) - Lists summary information about the instances that you registered by using a specified service.
* [listNamespaces](#listnamespaces) - Lists summary information about the namespaces that were created by the current Amazon Web Services account.
* [listOperations](#listoperations) - Lists operations that match the criteria that you specify.
* [listServices](#listservices) - Lists summary information for all the services that are associated with one or more specified namespaces.
* [listTagsForResource](#listtagsforresource) - Lists tags for the specified resource.
* [registerInstance](#registerinstance) - <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [tagResource](#tagresource) - Adds one or more tags to the specified resource.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateHttpNamespace](#updatehttpnamespace) - Updates an HTTP namespace.
* [updateInstanceCustomHealthStatus](#updateinstancecustomhealthstatus) - <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
* [updatePrivateDnsNamespace](#updateprivatednsnamespace) - Updates a private DNS namespace.
* [updatePublicDnsNamespace](#updatepublicdnsnamespace) - Updates a public DNS namespace.
* [updateService](#updateservice) - <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

## createHttpNamespace

<p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHttpNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHttpNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateHttpNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHttpNamespaceRequest();
    $request->createHttpNamespaceRequest = new CreateHttpNamespaceRequest();
    $request->createHttpNamespaceRequest->creatorRequestId = 'ipsa';
    $request->createHttpNamespaceRequest->description = 'delectus';
    $request->createHttpNamespaceRequest->name = 'Laurie Kreiger';
    $request->createHttpNamespaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = CreateHttpNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_CREATE_HTTP_NAMESPACE;

    $response = $sdk->sdk->createHttpNamespace($request);

    if ($response->createHttpNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPrivateDnsNamespace

Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePrivateDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePrivateDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PrivateDnsNamespaceProperties;
use \OpenAPI\OpenAPI\Models\Shared\PrivateDnsPropertiesMutable;
use \OpenAPI\OpenAPI\Models\Shared\Soa;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePrivateDnsNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePrivateDnsNamespaceRequest();
    $request->createPrivateDnsNamespaceRequest = new CreatePrivateDnsNamespaceRequest();
    $request->createPrivateDnsNamespaceRequest->creatorRequestId = 'veritatis';
    $request->createPrivateDnsNamespaceRequest->description = 'deserunt';
    $request->createPrivateDnsNamespaceRequest->name = 'Roberta Sipes';
    $request->createPrivateDnsNamespaceRequest->properties = new PrivateDnsNamespaceProperties();
    $request->createPrivateDnsNamespaceRequest->properties->dnsProperties = new PrivateDnsPropertiesMutable();
    $request->createPrivateDnsNamespaceRequest->properties->dnsProperties->soa = new Soa();
    $request->createPrivateDnsNamespaceRequest->properties->dnsProperties->soa->ttl = 140350;
    $request->createPrivateDnsNamespaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createPrivateDnsNamespaceRequest->vpc = 'at';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = CreatePrivateDnsNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_CREATE_PRIVATE_DNS_NAMESPACE;

    $response = $sdk->sdk->createPrivateDnsNamespace($request);

    if ($response->createPrivateDnsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPublicDnsNamespace

<p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePublicDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePublicDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublicDnsNamespaceProperties;
use \OpenAPI\OpenAPI\Models\Shared\PublicDnsPropertiesMutable;
use \OpenAPI\OpenAPI\Models\Shared\Soa;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePublicDnsNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePublicDnsNamespaceRequest();
    $request->createPublicDnsNamespaceRequest = new CreatePublicDnsNamespaceRequest();
    $request->createPublicDnsNamespaceRequest->creatorRequestId = 'dolorum';
    $request->createPublicDnsNamespaceRequest->description = 'dicta';
    $request->createPublicDnsNamespaceRequest->name = 'Luke McCullough';
    $request->createPublicDnsNamespaceRequest->properties = new PublicDnsNamespaceProperties();
    $request->createPublicDnsNamespaceRequest->properties->dnsProperties = new PublicDnsPropertiesMutable();
    $request->createPublicDnsNamespaceRequest->properties->dnsProperties->soa = new Soa();
    $request->createPublicDnsNamespaceRequest->properties->dnsProperties->soa->ttl = 944669;
    $request->createPublicDnsNamespaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = CreatePublicDnsNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_CREATE_PUBLIC_DNS_NAMESPACE;

    $response = $sdk->sdk->createPublicDnsNamespace($request);

    if ($response->createPublicDnsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

<p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnsConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecord;
use \OpenAPI\OpenAPI\Models\Shared\RecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckConfig;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckCustomConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceRequest();
    $request->createServiceRequest = new CreateServiceRequest();
    $request->createServiceRequest->creatorRequestId = 'cum';
    $request->createServiceRequest->description = 'esse';
    $request->createServiceRequest->dnsConfig = new DnsConfig();
    $request->createServiceRequest->dnsConfig->dnsRecords = [
        new DnsRecord(),
    ];
    $request->createServiceRequest->dnsConfig->namespaceId = 'excepturi';
    $request->createServiceRequest->dnsConfig->routingPolicy = RoutingPolicyEnum::MULTIVALUE;
    $request->createServiceRequest->healthCheckConfig = new HealthCheckConfig();
    $request->createServiceRequest->healthCheckConfig->failureThreshold = 18789;
    $request->createServiceRequest->healthCheckConfig->resourcePath = 'ad';
    $request->createServiceRequest->healthCheckConfig->type = HealthCheckTypeEnum::HTTPS;
    $request->createServiceRequest->healthCheckCustomConfig = new HealthCheckCustomConfig();
    $request->createServiceRequest->healthCheckCustomConfig->failureThreshold = 149675;
    $request->createServiceRequest->name = 'Curtis Morissette';
    $request->createServiceRequest->namespaceId = 'saepe';
    $request->createServiceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createServiceRequest->type = ServiceTypeOptionEnum::HTTP;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateServiceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_CREATE_SERVICE;

    $response = $sdk->sdk->createService($request);

    if ($response->createServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNamespace

Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNamespaceRequest();
    $request->deleteNamespaceRequest = new DeleteNamespaceRequest();
    $request->deleteNamespaceRequest->id = '0faaa235-2c59-4559-87af-f1a3a2fa9467';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_DELETE_NAMESPACE;

    $response = $sdk->sdk->deleteNamespace($request);

    if ($response->deleteNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Deletes a specified service. If the service still contains one or more registered instances, the request fails.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->deleteServiceRequest = new DeleteServiceRequest();
    $request->deleteServiceRequest->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteServiceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_DELETE_SERVICE;

    $response = $sdk->sdk->deleteService($request);

    if ($response->deleteServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterInstance

Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterInstanceRequest();
    $request->deregisterInstanceRequest = new DeregisterInstanceRequest();
    $request->deregisterInstanceRequest->instanceId = 'commodi';
    $request->deregisterInstanceRequest->serviceId = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeregisterInstanceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_DEREGISTER_INSTANCE;

    $response = $sdk->sdk->deregisterInstance($request);

    if ($response->deregisterInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoverInstances

Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoverInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\HealthStatusFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoverInstancesRequest();
    $request->discoverInstancesRequest = new DiscoverInstancesRequest();
    $request->discoverInstancesRequest->healthStatus = HealthStatusFilterEnum::ALL;
    $request->discoverInstancesRequest->maxResults = 523248;
    $request->discoverInstancesRequest->namespaceName = 'voluptates';
    $request->discoverInstancesRequest->optionalParameters = [
        'repudiandae' => 'sint',
    ];
    $request->discoverInstancesRequest->queryParameters = [
        'itaque' => 'incidunt',
    ];
    $request->discoverInstancesRequest->serviceName = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DiscoverInstancesXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_DISCOVER_INSTANCES;

    $response = $sdk->sdk->discoverInstances($request);

    if ($response->discoverInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstance

Gets information about a specified instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceRequest();
    $request->getInstanceRequest = new GetInstanceRequest();
    $request->getInstanceRequest->instanceId = 'labore';
    $request->getInstanceRequest->serviceId = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = GetInstanceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCE;

    $response = $sdk->sdk->getInstance($request);

    if ($response->getInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstancesHealthStatus

<p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancesHealthStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstancesHealthStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancesHealthStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstancesHealthStatusRequest();
    $request->getInstancesHealthStatusRequest = new GetInstancesHealthStatusRequest();
    $request->getInstancesHealthStatusRequest->instances = [
        'alias',
        'fugit',
    ];
    $request->getInstancesHealthStatusRequest->maxResults = 677817;
    $request->getInstancesHealthStatusRequest->nextToken = 'excepturi';
    $request->getInstancesHealthStatusRequest->serviceId = 'tempora';
    $request->maxResults = 'facilis';
    $request->nextToken = 'tempore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = GetInstancesHealthStatusXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCES_HEALTH_STATUS;

    $response = $sdk->sdk->getInstancesHealthStatus($request);

    if ($response->getInstancesHealthStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespace

Gets information about a namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceRequest();
    $request->getNamespaceRequest = new GetNamespaceRequest();
    $request->getNamespaceRequest->id = '9e9a3efa-77df-4b14-8d66-ae395efb9ba8';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = GetNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_GET_NAMESPACE;

    $response = $sdk->sdk->getNamespace($request);

    if ($response->getNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperation

<p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationRequest();
    $request->getOperationRequest = new GetOperationRequest();
    $request->getOperationRequest->operationId = 'omnis';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = GetOperationXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_GET_OPERATION;

    $response = $sdk->sdk->getOperation($request);

    if ($response->getOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getService

Gets the settings for a specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRequest();
    $request->getServiceRequest = new GetServiceRequest();
    $request->getServiceRequest->id = '469b6e21-4195-4989-8afa-563e2516fe4c';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = GetServiceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_GET_SERVICE;

    $response = $sdk->sdk->getService($request);

    if ($response->getServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstances

Lists summary information about the instances that you registered by using a specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstancesRequest();
    $request->listInstancesRequest = new ListInstancesRequest();
    $request->listInstancesRequest->maxResults = 714242;
    $request->listInstancesRequest->nextToken = 'nihil';
    $request->listInstancesRequest->serviceId = 'repellat';
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = ListInstancesXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_LIST_INSTANCES;

    $response = $sdk->sdk->listInstances($request);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNamespaces

Lists summary information about the namespaces that were created by the current Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNamespacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNamespacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamespaceFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespaceFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListNamespacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNamespacesRequest();
    $request->listNamespacesRequest = new ListNamespacesRequest();
    $request->listNamespacesRequest->filters = [
        new NamespaceFilter(),
    ];
    $request->listNamespacesRequest->maxResults = 779051;
    $request->listNamespacesRequest->nextToken = 'illum';
    $request->maxResults = 'pariatur';
    $request->nextToken = 'maxime';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = ListNamespacesXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_LIST_NAMESPACES;

    $response = $sdk->sdk->listNamespaces($request);

    if ($response->listNamespacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOperations

Lists operations that match the criteria that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOperationsRequest();
    $request->listOperationsRequest = new ListOperationsRequest();
    $request->listOperationsRequest->filters = [
        new OperationFilter(),
        new OperationFilter(),
        new OperationFilter(),
    ];
    $request->listOperationsRequest->maxResults = 373291;
    $request->listOperationsRequest->nextToken = 'voluptate';
    $request->maxResults = 'autem';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ListOperationsXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_LIST_OPERATIONS;

    $response = $sdk->sdk->listOperations($request);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

Lists summary information for all the services that are associated with one or more specified namespaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->listServicesRequest = new ListServicesRequest();
    $request->listServicesRequest->filters = [
        new ServiceFilter(),
    ];
    $request->listServicesRequest->maxResults = 764912;
    $request->listServicesRequest->nextToken = 'corporis';
    $request->maxResults = 'hic';
    $request->nextToken = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = ListServicesXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_LIST_SERVICES;

    $response = $sdk->sdk->listServices($request);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists tags for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'nesciunt';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerInstance

<p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterInstanceRequest();
    $request->registerInstanceRequest = new RegisterInstanceRequest();
    $request->registerInstanceRequest->attributes = [
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->registerInstanceRequest->creatorRequestId = 'perspiciatis';
    $request->registerInstanceRequest->instanceId = 'voluptatem';
    $request->registerInstanceRequest->serviceId = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = RegisterInstanceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_REGISTER_INSTANCE;

    $response = $sdk->sdk->registerInstance($request);

    if ($response->registerInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'asperiores';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'libero';
    $request->untagResourceRequest->tagKeys = [
        'quaerat',
        'quos',
        'aliquid',
        'dolorem',
    ];
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHttpNamespace

Updates an HTTP namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHttpNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHttpNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\HttpNamespaceChange;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHttpNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHttpNamespaceRequest();
    $request->updateHttpNamespaceRequest = new UpdateHttpNamespaceRequest();
    $request->updateHttpNamespaceRequest->id = '77f3a410-0674-4ebf-a928-0d1ba77a89eb';
    $request->updateHttpNamespaceRequest->namespace = new HttpNamespaceChange();
    $request->updateHttpNamespaceRequest->namespace->description = 'asperiores';
    $request->updateHttpNamespaceRequest->updaterRequestId = 'nihil';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = UpdateHttpNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_UPDATE_HTTP_NAMESPACE;

    $response = $sdk->sdk->updateHttpNamespace($request);

    if ($response->updateHttpNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstanceCustomHealthStatus

<p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceCustomHealthStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceCustomHealthStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomHealthStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceCustomHealthStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstanceCustomHealthStatusRequest();
    $request->updateInstanceCustomHealthStatusRequest = new UpdateInstanceCustomHealthStatusRequest();
    $request->updateInstanceCustomHealthStatusRequest->instanceId = 'amet';
    $request->updateInstanceCustomHealthStatusRequest->serviceId = 'optio';
    $request->updateInstanceCustomHealthStatusRequest->status = CustomHealthStatusEnum::UNHEALTHY;
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = UpdateInstanceCustomHealthStatusXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS;

    $response = $sdk->sdk->updateInstanceCustomHealthStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePrivateDnsNamespace

Updates a private DNS namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePrivateDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePrivateDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PrivateDnsNamespaceChange;
use \OpenAPI\OpenAPI\Models\Shared\PrivateDnsNamespacePropertiesChange;
use \OpenAPI\OpenAPI\Models\Shared\PrivateDnsPropertiesMutableChange;
use \OpenAPI\OpenAPI\Models\Shared\SOAChange;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePrivateDnsNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePrivateDnsNamespaceRequest();
    $request->updatePrivateDnsNamespaceRequest = new UpdatePrivateDnsNamespaceRequest();
    $request->updatePrivateDnsNamespaceRequest->id = '8a0d446c-e2af-47a7-bcf3-be453f870b32';
    $request->updatePrivateDnsNamespaceRequest->namespace = new PrivateDnsNamespaceChange();
    $request->updatePrivateDnsNamespaceRequest->namespace->description = 'vel';
    $request->updatePrivateDnsNamespaceRequest->namespace->properties = new PrivateDnsNamespacePropertiesChange();
    $request->updatePrivateDnsNamespaceRequest->namespace->properties->dnsProperties = new PrivateDnsPropertiesMutableChange();
    $request->updatePrivateDnsNamespaceRequest->namespace->properties->dnsProperties->soa = new SOAChange();
    $request->updatePrivateDnsNamespaceRequest->namespace->properties->dnsProperties->soa->ttl = 730442;
    $request->updatePrivateDnsNamespaceRequest->updaterRequestId = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = UpdatePrivateDnsNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_UPDATE_PRIVATE_DNS_NAMESPACE;

    $response = $sdk->sdk->updatePrivateDnsNamespace($request);

    if ($response->updatePrivateDnsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePublicDnsNamespace

Updates a public DNS namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePublicDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePublicDnsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublicDnsNamespaceChange;
use \OpenAPI\OpenAPI\Models\Shared\PublicDnsNamespacePropertiesChange;
use \OpenAPI\OpenAPI\Models\Shared\PublicDnsPropertiesMutableChange;
use \OpenAPI\OpenAPI\Models\Shared\SOAChange;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePublicDnsNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePublicDnsNamespaceRequest();
    $request->updatePublicDnsNamespaceRequest = new UpdatePublicDnsNamespaceRequest();
    $request->updatePublicDnsNamespaceRequest->id = 'db1a8422-bb67-49d2-b227-15bf0cbb1e31';
    $request->updatePublicDnsNamespaceRequest->namespace = new PublicDnsNamespaceChange();
    $request->updatePublicDnsNamespaceRequest->namespace->description = 'nobis';
    $request->updatePublicDnsNamespaceRequest->namespace->properties = new PublicDnsNamespacePropertiesChange();
    $request->updatePublicDnsNamespaceRequest->namespace->properties->dnsProperties = new PublicDnsPropertiesMutableChange();
    $request->updatePublicDnsNamespaceRequest->namespace->properties->dnsProperties->soa = new SOAChange();
    $request->updatePublicDnsNamespaceRequest->namespace->properties->dnsProperties->soa->ttl = 552193;
    $request->updatePublicDnsNamespaceRequest->updaterRequestId = 'tempore';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = UpdatePublicDnsNamespaceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_UPDATE_PUBLIC_DNS_NAMESPACE;

    $response = $sdk->sdk->updatePublicDnsNamespace($request);

    if ($response->updatePublicDnsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

<p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChange;
use \OpenAPI\OpenAPI\Models\Shared\DnsConfigChange;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecord;
use \OpenAPI\OpenAPI\Models\Shared\RecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckConfig;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->updateServiceRequest = new UpdateServiceRequest();
    $request->updateServiceRequest->id = 'a1108e0a-dcf4-4b92-9879-fce953f73ef7';
    $request->updateServiceRequest->service = new ServiceChange();
    $request->updateServiceRequest->service->description = 'hic';
    $request->updateServiceRequest->service->dnsConfig = new DnsConfigChange();
    $request->updateServiceRequest->service->dnsConfig->dnsRecords = [
        new DnsRecord(),
        new DnsRecord(),
        new DnsRecord(),
    ];
    $request->updateServiceRequest->service->healthCheckConfig = new HealthCheckConfig();
    $request->updateServiceRequest->service->healthCheckConfig->failureThreshold = 799203;
    $request->updateServiceRequest->service->healthCheckConfig->resourcePath = 'odio';
    $request->updateServiceRequest->service->healthCheckConfig->type = HealthCheckTypeEnum::HTTPS;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = UpdateServiceXAmzTargetEnum::ROUTE53_AUTO_NAMING_V20170314_UPDATE_SERVICE;

    $response = $sdk->sdk->updateService($request);

    if ($response->updateServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
