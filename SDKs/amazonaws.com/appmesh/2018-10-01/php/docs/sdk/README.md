# SDK

## Overview

<p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
         control containerized microservices. App Mesh standardizes how your microservices
         communicate, giving you end-to-end visibility and helping to ensure high-availability for
         your applications.</p>
         <p>App Mesh gives you consistent visibility and network traffic controls for every
         microservice in an application. You can use App Mesh with Amazon ECS
         (using the Amazon EC2 launch type), Amazon EKS, and Kubernetes on AWS.</p>
         <note>
            <p>App Mesh supports containerized microservice applications that use service discovery
            naming for their components. To use App Mesh, you must have a containerized application
            running on Amazon EC2 instances, hosted in either Amazon ECS, Amazon EKS, or Kubernetes on AWS. For
            more information about service discovery on Amazon ECS, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the
               <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> is supported.
            For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
               for Services and Pods</a> in the Kubernetes documentation.</p>
         </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appmesh/>
### Available Operations

* [createMesh](#createmesh) - <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>
* [createRoute](#createroute) - <p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>
* [createVirtualNode](#createvirtualnode) - <p>Creates a new virtual node within a service mesh.</p>
         <p>A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you must specify the
         DNS service discovery name for your task group.</p>
         <p>Any inbound traffic that your virtual node expects should be specified as a
            <code>listener</code>. Any outbound traffic that your virtual node expects to reach
         should be specified as a <code>backend</code>.</p>
         <p>The response metadata for your new virtual node contains the <code>arn</code> that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name, for example, <code>mesh/default/virtualNode/simpleapp</code>, as the
            <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
         <note>
            <p>If you require your Envoy stats or tracing to use a different name, you can override
            the <code>node.cluster</code> value that is set by
               <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
               <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
         </note>
* [createVirtualRouter](#createvirtualrouter) - <p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>
* [deleteMesh](#deletemesh) - <p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>
* [deleteRoute](#deleteroute) - Deletes an existing route.
* [deleteVirtualNode](#deletevirtualnode) - Deletes an existing virtual node.
* [deleteVirtualRouter](#deletevirtualrouter) - <p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>
* [describeMesh](#describemesh) - Describes an existing service mesh.
* [describeRoute](#describeroute) - Describes an existing route.
* [describeVirtualNode](#describevirtualnode) - Describes an existing virtual node.
* [describeVirtualRouter](#describevirtualrouter) - Describes an existing virtual router.
* [listMeshes](#listmeshes) - Returns a list of existing service meshes.
* [listRoutes](#listroutes) - Returns a list of existing routes in a service mesh.
* [listVirtualNodes](#listvirtualnodes) - Returns a list of existing virtual nodes.
* [listVirtualRouters](#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [updateRoute](#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [updateVirtualNode](#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [updateVirtualRouter](#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.

## createMesh

<p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMeshRequest();
    $request->requestBody = new CreateMeshRequestBody();
    $request->requestBody->clientToken = 'error';
    $request->requestBody->meshName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->createMesh($request);

    if ($response->createMeshOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoute

<p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\HttpRoute;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTarget;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteMatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRouteRequest();
    $request->requestBody = new CreateRouteRequestBody();
    $request->requestBody->clientToken = 'suscipit';
    $request->requestBody->routeName = 'molestiae';
    $request->requestBody->spec = new CreateRouteRequestBodySpec();
    $request->requestBody->spec->httpRoute = new HttpRoute();
    $request->requestBody->spec->httpRoute->action = new HttpRouteAction();
    $request->requestBody->spec->httpRoute->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->httpRoute->match = new HttpRouteMatch();
    $request->requestBody->spec->httpRoute->match->prefix = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->meshName = 'quis';
    $request->virtualRouterName = 'veritatis';

    $response = $sdk->sdk->createRoute($request);

    if ($response->createRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualNode

<p>Creates a new virtual node within a service mesh.</p>
         <p>A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you must specify the
         DNS service discovery name for your task group.</p>
         <p>Any inbound traffic that your virtual node expects should be specified as a
            <code>listener</code>. Any outbound traffic that your virtual node expects to reach
         should be specified as a <code>backend</code>.</p>
         <p>The response metadata for your new virtual node contains the <code>arn</code> that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name, for example, <code>mesh/default/virtualNode/simpleapp</code>, as the
            <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
         <note>
            <p>If you require your Envoy stats or tracing to use a different name, you can override
            the <code>node.cluster</code> value that is set by
               <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
               <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
         </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualNodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualNodeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualNodeRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\Listener;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\ServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\DnsServiceDiscovery;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualNodeRequest();
    $request->requestBody = new CreateVirtualNodeRequestBody();
    $request->requestBody->clientToken = 'deserunt';
    $request->requestBody->spec = new CreateVirtualNodeRequestBodySpec();
    $request->requestBody->spec->backends = [
        'ipsam',
    ];
    $request->requestBody->spec->listeners = [
        new Listener(),
        new Listener(),
        new Listener(),
        new Listener(),
    ];
    $request->requestBody->spec->serviceDiscovery = new ServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->dns = new DnsServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->dns->serviceName = 'sapiente';
    $request->requestBody->virtualNodeName = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->meshName = 'esse';

    $response = $sdk->sdk->createVirtualNode($request);

    if ($response->createVirtualNodeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualRouter

<p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualRouterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualRouterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualRouterRequestBodySpec;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualRouterRequest();
    $request->requestBody = new CreateVirtualRouterRequestBody();
    $request->requestBody->clientToken = 'totam';
    $request->requestBody->spec = new CreateVirtualRouterRequestBodySpec();
    $request->requestBody->spec->serviceNames = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->requestBody->virtualRouterName = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->meshName = 'molestiae';

    $response = $sdk->sdk->createVirtualRouter($request);

    if ($response->createVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMesh

<p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMeshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMeshRequest();
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->meshName = 'aspernatur';

    $response = $sdk->sdk->deleteMesh($request);

    if ($response->deleteMeshOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoute

Deletes an existing route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRouteRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->meshName = 'laboriosam';
    $request->routeName = 'hic';
    $request->virtualRouterName = 'saepe';

    $response = $sdk->sdk->deleteRoute($request);

    if ($response->deleteRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualNode

Deletes an existing virtual node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVirtualNodeRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->meshName = 'architecto';
    $request->virtualNodeName = 'ipsa';

    $response = $sdk->sdk->deleteVirtualNode($request);

    if ($response->deleteVirtualNodeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualRouter

<p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualRouterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVirtualRouterRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->meshName = 'explicabo';
    $request->virtualRouterName = 'nobis';

    $response = $sdk->sdk->deleteVirtualRouter($request);

    if ($response->deleteVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMesh

Describes an existing service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMeshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMeshRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->meshName = 'culpa';

    $response = $sdk->sdk->describeMesh($request);

    if ($response->describeMeshOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRoute

Describes an existing route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRouteRequest();
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->meshName = 'repellat';
    $request->routeName = 'mollitia';
    $request->virtualRouterName = 'occaecati';

    $response = $sdk->sdk->describeRoute($request);

    if ($response->describeRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualNode

Describes an existing virtual node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualNodeRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->meshName = 'quis';
    $request->virtualNodeName = 'vitae';

    $response = $sdk->sdk->describeVirtualNode($request);

    if ($response->describeVirtualNodeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualRouter

Describes an existing virtual router.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualRouterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualRouterRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->meshName = 'ipsam';
    $request->virtualRouterName = 'id';

    $response = $sdk->sdk->describeVirtualRouter($request);

    if ($response->describeVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMeshes

Returns a list of existing service meshes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMeshesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMeshesRequest();
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->limit = 971945;
    $request->nextToken = 'voluptatibus';

    $response = $sdk->sdk->listMeshes($request);

    if ($response->listMeshesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoutes

Returns a list of existing routes in a service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoutesRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->limit = 739264;
    $request->meshName = 'perferendis';
    $request->nextToken = 'doloremque';
    $request->virtualRouterName = 'reprehenderit';

    $response = $sdk->sdk->listRoutes($request);

    if ($response->listRoutesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualNodes

Returns a list of existing virtual nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualNodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualNodesRequest();
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->limit = 688661;
    $request->meshName = 'enim';
    $request->nextToken = 'accusamus';

    $response = $sdk->sdk->listVirtualNodes($request);

    if ($response->listVirtualNodesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualRouters

Returns a list of existing virtual routers in a service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualRoutersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualRoutersRequest();
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->limit = 865103;
    $request->meshName = 'modi';
    $request->nextToken = 'praesentium';

    $response = $sdk->sdk->listVirtualRouters($request);

    if ($response->listVirtualRoutersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoute

Updates an existing route for a specified service mesh and virtual router.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\HttpRoute;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTarget;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteMatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRouteRequest();
    $request->requestBody = new UpdateRouteRequestBody();
    $request->requestBody->clientToken = 'rem';
    $request->requestBody->spec = new UpdateRouteRequestBodySpec();
    $request->requestBody->spec->httpRoute = new HttpRoute();
    $request->requestBody->spec->httpRoute->action = new HttpRouteAction();
    $request->requestBody->spec->httpRoute->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->httpRoute->match = new HttpRouteMatch();
    $request->requestBody->spec->httpRoute->match->prefix = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->meshName = 'est';
    $request->routeName = 'quibusdam';
    $request->virtualRouterName = 'explicabo';

    $response = $sdk->sdk->updateRoute($request);

    if ($response->updateRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVirtualNode

Updates an existing virtual node in a specified service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualNodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualNodeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualNodeRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\Listener;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\ServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\DnsServiceDiscovery;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualNodeRequest();
    $request->requestBody = new UpdateVirtualNodeRequestBody();
    $request->requestBody->clientToken = 'deserunt';
    $request->requestBody->spec = new UpdateVirtualNodeRequestBodySpec();
    $request->requestBody->spec->backends = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->requestBody->spec->listeners = [
        new Listener(),
    ];
    $request->requestBody->spec->serviceDiscovery = new ServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->dns = new DnsServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->dns->serviceName = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->meshName = 'fugit';
    $request->virtualNodeName = 'dolorum';

    $response = $sdk->sdk->updateVirtualNode($request);

    if ($response->updateVirtualNodeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVirtualRouter

Updates an existing virtual router in a specified service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualRouterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualRouterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualRouterRequestBodySpec;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualRouterRequest();
    $request->requestBody = new UpdateVirtualRouterRequestBody();
    $request->requestBody->clientToken = 'excepturi';
    $request->requestBody->spec = new UpdateVirtualRouterRequestBodySpec();
    $request->requestBody->spec->serviceNames = [
        'facilis',
        'tempore',
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->meshName = 'provident';
    $request->virtualRouterName = 'necessitatibus';

    $response = $sdk->sdk->updateVirtualRouter($request);

    if ($response->updateVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
