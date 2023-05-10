# SDK

## Overview

<p>App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and control microservices. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility and helping to ensure high availability for your applications.</p> <p>App Mesh gives you consistent visibility and network traffic controls for every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and Amazon EC2.</p> <note> <p>App Mesh supports microservice applications that use service discovery naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS for Services and Pods</a> in the Kubernetes documentation.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appmesh/>
### Available Operations

* [createGatewayRoute](#creategatewayroute) - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* [createMesh](#createmesh) - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* [createRoute](#createroute) - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* [createVirtualGateway](#createvirtualgateway) - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* [createVirtualNode](#createvirtualnode) - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
* [createVirtualRouter](#createvirtualrouter) - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* [createVirtualService](#createvirtualservice) - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* [deleteGatewayRoute](#deletegatewayroute) - Deletes an existing gateway route.
* [deleteMesh](#deletemesh) - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* [deleteRoute](#deleteroute) - Deletes an existing route.
* [deleteVirtualGateway](#deletevirtualgateway) - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* [deleteVirtualNode](#deletevirtualnode) - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* [deleteVirtualRouter](#deletevirtualrouter) - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* [deleteVirtualService](#deletevirtualservice) - Deletes an existing virtual service.
* [describeGatewayRoute](#describegatewayroute) - Describes an existing gateway route.
* [describeMesh](#describemesh) - Describes an existing service mesh.
* [describeRoute](#describeroute) - Describes an existing route.
* [describeVirtualGateway](#describevirtualgateway) - Describes an existing virtual gateway.
* [describeVirtualNode](#describevirtualnode) - Describes an existing virtual node.
* [describeVirtualRouter](#describevirtualrouter) - Describes an existing virtual router.
* [describeVirtualService](#describevirtualservice) - Describes an existing virtual service.
* [listGatewayRoutes](#listgatewayroutes) - Returns a list of existing gateway routes that are associated to a virtual gateway.
* [listMeshes](#listmeshes) - Returns a list of existing service meshes.
* [listRoutes](#listroutes) - Returns a list of existing routes in a service mesh.
* [listTagsForResource](#listtagsforresource) - List the tags for an App Mesh resource.
* [listVirtualGateways](#listvirtualgateways) - Returns a list of existing virtual gateways in a service mesh.
* [listVirtualNodes](#listvirtualnodes) - Returns a list of existing virtual nodes.
* [listVirtualRouters](#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [listVirtualServices](#listvirtualservices) - Returns a list of existing virtual services in a service mesh.
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](#untagresource) - Deletes specified tags from a resource.
* [updateGatewayRoute](#updategatewayroute) - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* [updateMesh](#updatemesh) - Updates an existing service mesh.
* [updateRoute](#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [updateVirtualGateway](#updatevirtualgateway) - Updates an existing virtual gateway in a specified service mesh.
* [updateVirtualNode](#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [updateVirtualRouter](#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.
* [updateVirtualService](#updatevirtualservice) - Updates an existing virtual service in a specified service mesh.

## createGatewayRoute

<p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRouteRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRoute;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteRewrite;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteHostnameRewrite;
use \OpenAPI\OpenAPI\Models\Shared\DefaultGatewayRouteRewriteEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteTarget;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteVirtualService;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteHostnameMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GrpcMetadataMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\MatchRange;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRoute;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRoutePathRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRoutePrefixRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteHeader;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\HttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpPathMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGatewayRouteRequest();
    $request->requestBody = new CreateGatewayRouteRequestBody();
    $request->requestBody->clientToken = 'fugit';
    $request->requestBody->gatewayRouteName = 'deleniti';
    $request->requestBody->spec = new CreateGatewayRouteRequestBodySpec();
    $request->requestBody->spec->grpcRoute = new GrpcGatewayRoute();
    $request->requestBody->spec->grpcRoute->action = new GrpcGatewayRouteAction();
    $request->requestBody->spec->grpcRoute->action->rewrite = new GrpcGatewayRouteRewrite();
    $request->requestBody->spec->grpcRoute->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->grpcRoute->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->grpcRoute->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->grpcRoute->action->target->port = 758616;
    $request->requestBody->spec->grpcRoute->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->grpcRoute->action->target->virtualService->virtualServiceName = 'totam';
    $request->requestBody->spec->grpcRoute->match = new GrpcGatewayRouteMatch();
    $request->requestBody->spec->grpcRoute->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->grpcRoute->match->hostname->exact = 'beatae';
    $request->requestBody->spec->grpcRoute->match->hostname->suffix = 'commodi';
    $request->requestBody->spec->grpcRoute->match->metadata = [
        new GrpcGatewayRouteMetadata(),
        new GrpcGatewayRouteMetadata(),
    ];
    $request->requestBody->spec->grpcRoute->match->port = 264555;
    $request->requestBody->spec->grpcRoute->match->serviceName = 'qui';
    $request->requestBody->spec->http2Route = new HttpGatewayRoute();
    $request->requestBody->spec->http2Route->action = new HttpGatewayRouteAction();
    $request->requestBody->spec->http2Route->action->rewrite = new HttpGatewayRouteRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->http2Route->action->rewrite->path = new HttpGatewayRoutePathRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->path->exact = 'cum';
    $request->requestBody->spec->http2Route->action->rewrite->prefix = new HttpGatewayRoutePrefixRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->prefix->defaultPrefix = DefaultGatewayRouteRewriteEnum::ENABLED;
    $request->requestBody->spec->http2Route->action->rewrite->prefix->value = 'ipsum';
    $request->requestBody->spec->http2Route->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->http2Route->action->target->port = 568434;
    $request->requestBody->spec->http2Route->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->http2Route->action->target->virtualService->virtualServiceName = 'aspernatur';
    $request->requestBody->spec->http2Route->match = new HttpGatewayRouteMatch();
    $request->requestBody->spec->http2Route->match->headers = [
        new HttpGatewayRouteHeader(),
    ];
    $request->requestBody->spec->http2Route->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->http2Route->match->hostname->exact = 'ad';
    $request->requestBody->spec->http2Route->match->hostname->suffix = 'natus';
    $request->requestBody->spec->http2Route->match->method = HttpMethodEnum::HEAD;
    $request->requestBody->spec->http2Route->match->path = new HttpPathMatch();
    $request->requestBody->spec->http2Route->match->path->exact = 'iste';
    $request->requestBody->spec->http2Route->match->path->regex = 'dolor';
    $request->requestBody->spec->http2Route->match->port = 616934;
    $request->requestBody->spec->http2Route->match->prefix = 'laboriosam';
    $request->requestBody->spec->http2Route->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->httpRoute = new HttpGatewayRoute();
    $request->requestBody->spec->httpRoute->action = new HttpGatewayRouteAction();
    $request->requestBody->spec->httpRoute->action->rewrite = new HttpGatewayRouteRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->httpRoute->action->rewrite->path = new HttpGatewayRoutePathRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->path->exact = 'fuga';
    $request->requestBody->spec->httpRoute->action->rewrite->prefix = new HttpGatewayRoutePrefixRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->prefix->defaultPrefix = DefaultGatewayRouteRewriteEnum::ENABLED;
    $request->requestBody->spec->httpRoute->action->rewrite->prefix->value = 'corporis';
    $request->requestBody->spec->httpRoute->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->httpRoute->action->target->port = 613064;
    $request->requestBody->spec->httpRoute->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->httpRoute->action->target->virtualService->virtualServiceName = 'iure';
    $request->requestBody->spec->httpRoute->match = new HttpGatewayRouteMatch();
    $request->requestBody->spec->httpRoute->match->headers = [
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
    ];
    $request->requestBody->spec->httpRoute->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->httpRoute->match->hostname->exact = 'quidem';
    $request->requestBody->spec->httpRoute->match->hostname->suffix = 'architecto';
    $request->requestBody->spec->httpRoute->match->method = HttpMethodEnum::GET;
    $request->requestBody->spec->httpRoute->match->path = new HttpPathMatch();
    $request->requestBody->spec->httpRoute->match->path->exact = 'reiciendis';
    $request->requestBody->spec->httpRoute->match->path->regex = 'est';
    $request->requestBody->spec->httpRoute->match->port = 653140;
    $request->requestBody->spec->httpRoute->match->prefix = 'laborum';
    $request->requestBody->spec->httpRoute->match->queryParameters = [
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->priority = 210382;
    $request->requestBody->tags = [
        new TagRef(),
        new TagRef(),
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->meshName = 'accusantium';
    $request->meshOwner = 'iure';
    $request->virtualGatewayName = 'culpa';

    $response = $sdk->sdk->createGatewayRoute($request);

    if ($response->createGatewayRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMesh

<p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMeshRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\EgressFilter;
use \OpenAPI\OpenAPI\Models\Shared\EgressFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeshServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\IpPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMeshRequest();
    $request->requestBody = new CreateMeshRequestBody();
    $request->requestBody->clientToken = 'doloribus';
    $request->requestBody->meshName = 'sapiente';
    $request->requestBody->spec = new CreateMeshRequestBodySpec();
    $request->requestBody->spec->egressFilter = new EgressFilter();
    $request->requestBody->spec->egressFilter->type = EgressFilterTypeEnum::ALLOW_ALL;
    $request->requestBody->spec->serviceDiscovery = new MeshServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->ipPreference = IpPreferenceEnum::I_PV4_ONLY;
    $request->requestBody->tags = [
        new TagRef(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->createMesh($request);

    if ($response->createMeshOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoute

<p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>

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
use \OpenAPI\OpenAPI\Models\Shared\GrpcRoute;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTarget;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMetadataMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\MatchRange;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRetryPolicyEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TcpRetryPolicyEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\GrpcTimeout;
use \OpenAPI\OpenAPI\Models\Shared\HttpRoute;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteHeader;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\HttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpPathMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\TcpRoute;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\TcpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRouteRequest();
    $request->requestBody = new CreateRouteRequestBody();
    $request->requestBody->clientToken = 'quam';
    $request->requestBody->routeName = 'molestiae';
    $request->requestBody->spec = new CreateRouteRequestBodySpec();
    $request->requestBody->spec->grpcRoute = new GrpcRoute();
    $request->requestBody->spec->grpcRoute->action = new GrpcRouteAction();
    $request->requestBody->spec->grpcRoute->action->weightedTargets = [
        new WeightedTarget(),
    ];
    $request->requestBody->spec->grpcRoute->match = new GrpcRouteMatch();
    $request->requestBody->spec->grpcRoute->match->metadata = [
        new GrpcRouteMetadata(),
        new GrpcRouteMetadata(),
        new GrpcRouteMetadata(),
    ];
    $request->requestBody->spec->grpcRoute->match->methodName = 'quia';
    $request->requestBody->spec->grpcRoute->match->port = 338007;
    $request->requestBody->spec->grpcRoute->match->serviceName = 'vitae';
    $request->requestBody->spec->grpcRoute->retryPolicy = new GrpcRetryPolicy();
    $request->requestBody->spec->grpcRoute->retryPolicy->grpcRetryEvents = [
        GrpcRetryPolicyEventEnum::RESOURCE_EXHAUSTED,
        GrpcRetryPolicyEventEnum::DEADLINE_EXCEEDED,
        GrpcRetryPolicyEventEnum::CANCELLED,
    ];
    $request->requestBody->spec->grpcRoute->retryPolicy->httpRetryEvents = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->requestBody->spec->grpcRoute->retryPolicy->maxRetries = 820994;
    $request->requestBody->spec->grpcRoute->retryPolicy->perRetryTimeout = new Duration();
    $request->requestBody->spec->grpcRoute->retryPolicy->perRetryTimeout->unit = DurationUnitEnum::S;
    $request->requestBody->spec->grpcRoute->retryPolicy->perRetryTimeout->value = 97101;
    $request->requestBody->spec->grpcRoute->retryPolicy->tcpRetryEvents = [
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
    ];
    $request->requestBody->spec->grpcRoute->timeout = new GrpcTimeout();
    $request->requestBody->spec->grpcRoute->timeout->idle = new Duration();
    $request->requestBody->spec->grpcRoute->timeout->idle->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->grpcRoute->timeout->idle->value = 673660;
    $request->requestBody->spec->grpcRoute->timeout->perRequest = new Duration();
    $request->requestBody->spec->grpcRoute->timeout->perRequest->unit = DurationUnitEnum::S;
    $request->requestBody->spec->grpcRoute->timeout->perRequest->value = 971945;
    $request->requestBody->spec->http2Route = new HttpRoute();
    $request->requestBody->spec->http2Route->action = new HttpRouteAction();
    $request->requestBody->spec->http2Route->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->http2Route->match = new HttpRouteMatch();
    $request->requestBody->spec->http2Route->match->headers = [
        new HttpRouteHeader(),
        new HttpRouteHeader(),
        new HttpRouteHeader(),
        new HttpRouteHeader(),
    ];
    $request->requestBody->spec->http2Route->match->method = HttpMethodEnum::DELETE;
    $request->requestBody->spec->http2Route->match->path = new HttpPathMatch();
    $request->requestBody->spec->http2Route->match->path->exact = 'praesentium';
    $request->requestBody->spec->http2Route->match->path->regex = 'voluptatibus';
    $request->requestBody->spec->http2Route->match->port = 55714;
    $request->requestBody->spec->http2Route->match->prefix = 'omnis';
    $request->requestBody->spec->http2Route->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->http2Route->match->scheme = HttpSchemeEnum::HTTPS;
    $request->requestBody->spec->http2Route->retryPolicy = new HttpRetryPolicy();
    $request->requestBody->spec->http2Route->retryPolicy->httpRetryEvents = [
        'doloremque',
    ];
    $request->requestBody->spec->http2Route->retryPolicy->maxRetries = 441711;
    $request->requestBody->spec->http2Route->retryPolicy->perRetryTimeout = new Duration();
    $request->requestBody->spec->http2Route->retryPolicy->perRetryTimeout->unit = DurationUnitEnum::S;
    $request->requestBody->spec->http2Route->retryPolicy->perRetryTimeout->value = 979587;
    $request->requestBody->spec->http2Route->retryPolicy->tcpRetryEvents = [
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
    ];
    $request->requestBody->spec->http2Route->timeout = new HttpTimeout();
    $request->requestBody->spec->http2Route->timeout->idle = new Duration();
    $request->requestBody->spec->http2Route->timeout->idle->unit = DurationUnitEnum::S;
    $request->requestBody->spec->http2Route->timeout->idle->value = 296140;
    $request->requestBody->spec->http2Route->timeout->perRequest = new Duration();
    $request->requestBody->spec->http2Route->timeout->perRequest->unit = DurationUnitEnum::S;
    $request->requestBody->spec->http2Route->timeout->perRequest->value = 118727;
    $request->requestBody->spec->httpRoute = new HttpRoute();
    $request->requestBody->spec->httpRoute->action = new HttpRouteAction();
    $request->requestBody->spec->httpRoute->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->httpRoute->match = new HttpRouteMatch();
    $request->requestBody->spec->httpRoute->match->headers = [
        new HttpRouteHeader(),
        new HttpRouteHeader(),
    ];
    $request->requestBody->spec->httpRoute->match->method = HttpMethodEnum::TRACE;
    $request->requestBody->spec->httpRoute->match->path = new HttpPathMatch();
    $request->requestBody->spec->httpRoute->match->path->exact = 'commodi';
    $request->requestBody->spec->httpRoute->match->path->regex = 'repudiandae';
    $request->requestBody->spec->httpRoute->match->port = 64147;
    $request->requestBody->spec->httpRoute->match->prefix = 'ipsum';
    $request->requestBody->spec->httpRoute->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->httpRoute->match->scheme = HttpSchemeEnum::HTTPS;
    $request->requestBody->spec->httpRoute->retryPolicy = new HttpRetryPolicy();
    $request->requestBody->spec->httpRoute->retryPolicy->httpRetryEvents = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->requestBody->spec->httpRoute->retryPolicy->maxRetries = 523248;
    $request->requestBody->spec->httpRoute->retryPolicy->perRetryTimeout = new Duration();
    $request->requestBody->spec->httpRoute->retryPolicy->perRetryTimeout->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->httpRoute->retryPolicy->perRetryTimeout->value = 93940;
    $request->requestBody->spec->httpRoute->retryPolicy->tcpRetryEvents = [
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
    ];
    $request->requestBody->spec->httpRoute->timeout = new HttpTimeout();
    $request->requestBody->spec->httpRoute->timeout->idle = new Duration();
    $request->requestBody->spec->httpRoute->timeout->idle->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->httpRoute->timeout->idle->value = 83112;
    $request->requestBody->spec->httpRoute->timeout->perRequest = new Duration();
    $request->requestBody->spec->httpRoute->timeout->perRequest->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->httpRoute->timeout->perRequest->value = 277718;
    $request->requestBody->spec->priority = 318569;
    $request->requestBody->spec->tcpRoute = new TcpRoute();
    $request->requestBody->spec->tcpRoute->action = new TcpRouteAction();
    $request->requestBody->spec->tcpRoute->action->weightedTargets = [
        new WeightedTarget(),
    ];
    $request->requestBody->spec->tcpRoute->match = new TcpRouteMatch();
    $request->requestBody->spec->tcpRoute->match->port = 667411;
    $request->requestBody->spec->tcpRoute->timeout = new TcpTimeout();
    $request->requestBody->spec->tcpRoute->timeout->idle = new Duration();
    $request->requestBody->spec->tcpRoute->timeout->idle->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->tcpRoute->timeout->idle->value = 131797;
    $request->requestBody->tags = [
        new TagRef(),
        new TagRef(),
        new TagRef(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->meshName = 'quos';
    $request->meshOwner = 'perferendis';
    $request->virtualRouterName = 'magni';

    $response = $sdk->sdk->createRoute($request);

    if ($response->createRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualGateway

<p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualGatewayRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualGatewayRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayBackendDefaults;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayClientPolicy;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayClientPolicyTls;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayClientTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsFileCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsSdsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNames;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNameMatchers;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextAcmTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextFileTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextSdsTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListener;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayGrpcConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayHttpConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayHttp2ConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayHealthCheckPolicy;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayPortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayPortMapping;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTls;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsAcmCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayLogging;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayFileAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\LoggingFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatRef;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualGatewayRequest();
    $request->requestBody = new CreateVirtualGatewayRequestBody();
    $request->requestBody->clientToken = 'assumenda';
    $request->requestBody->spec = new CreateVirtualGatewayRequestBodySpec();
    $request->requestBody->spec->backendDefaults = new VirtualGatewayBackendDefaults();
    $request->requestBody->spec->backendDefaults->clientPolicy = new VirtualGatewayClientPolicy();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls = new VirtualGatewayClientPolicyTls();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate = new VirtualGatewayClientTlsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file = new VirtualGatewayListenerTlsFileCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->certificateChain = 'ipsam';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->privateKey = 'alias';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds = new VirtualGatewayListenerTlsSdsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds->secretName = 'fugit';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->enforce = false;
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->ports = [
        569618,
        270008,
        703737,
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation = new VirtualGatewayTlsValidationContext();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames = new SubjectAlternativeNames();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match = new SubjectAlternativeNameMatchers();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match->exact = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust = new VirtualGatewayTlsValidationContextTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm = new VirtualGatewayTlsValidationContextAcmTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm->certificateAuthorityArns = [
        'eligendi',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file = new VirtualGatewayTlsValidationContextFileTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file->certificateChain = 'sint';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds = new VirtualGatewayTlsValidationContextSdsTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds->secretName = 'aliquid';
    $request->requestBody->spec->listeners = [
        new VirtualGatewayListener(),
        new VirtualGatewayListener(),
        new VirtualGatewayListener(),
    ];
    $request->requestBody->spec->logging = new VirtualGatewayLogging();
    $request->requestBody->spec->logging->accessLog = new VirtualGatewayAccessLog();
    $request->requestBody->spec->logging->accessLog->file = new VirtualGatewayFileAccessLog();
    $request->requestBody->spec->logging->accessLog->file->format = new LoggingFormat();
    $request->requestBody->spec->logging->accessLog->file->format->json = [
        new JsonFormatRef(),
        new JsonFormatRef(),
        new JsonFormatRef(),
        new JsonFormatRef(),
    ];
    $request->requestBody->spec->logging->accessLog->file->format->text = 'sint';
    $request->requestBody->spec->logging->accessLog->file->path = 'officia';
    $request->requestBody->tags = [
        new TagRef(),
    ];
    $request->requestBody->virtualGatewayName = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->meshName = 'dicta';
    $request->meshOwner = 'magnam';

    $response = $sdk->sdk->createVirtualGateway($request);

    if ($response->createVirtualGatewayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualNode

<p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>

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
use \OpenAPI\OpenAPI\Models\Shared\BackendDefaults;
use \OpenAPI\OpenAPI\Models\Shared\ClientPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ClientPolicyTls;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsFileCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsSdsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNames;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNameMatchers;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextAcmTrust;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextFileTrust;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextSdsTrust;
use \OpenAPI\OpenAPI\Models\Shared\Backend;
use \OpenAPI\OpenAPI\Models\Shared\VirtualServiceBackend;
use \OpenAPI\OpenAPI\Models\Shared\Listener;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeGrpcConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeHttpConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeHttp2ConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeTcpConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTimeout;
use \OpenAPI\OpenAPI\Models\Shared\GrpcTimeout;
use \OpenAPI\OpenAPI\Models\Shared\HttpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\TcpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTls;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsAcmCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\Logging;
use \OpenAPI\OpenAPI\Models\Shared\AccessLog;
use \OpenAPI\OpenAPI\Models\Shared\FileAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\LoggingFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatRef;
use \OpenAPI\OpenAPI\Models\Shared\ServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudMapServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudMapInstanceAttribute;
use \OpenAPI\OpenAPI\Models\Shared\IpPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\DnsResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualNodeRequest();
    $request->requestBody = new CreateVirtualNodeRequestBody();
    $request->requestBody->clientToken = 'cumque';
    $request->requestBody->spec = new CreateVirtualNodeRequestBodySpec();
    $request->requestBody->spec->backendDefaults = new BackendDefaults();
    $request->requestBody->spec->backendDefaults->clientPolicy = new ClientPolicy();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls = new ClientPolicyTls();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate = new ClientTlsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file = new ListenerTlsFileCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->certificateChain = 'facere';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->privateKey = 'ea';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds = new ListenerTlsSdsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds->secretName = 'aliquid';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->enforce = false;
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->ports = [
        881104,
        249796,
        581273,
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation = new TlsValidationContext();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames = new SubjectAlternativeNames();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match = new SubjectAlternativeNameMatchers();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match->exact = [
        'accusamus',
        'delectus',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust = new TlsValidationContextTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm = new TlsValidationContextAcmTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm->certificateAuthorityArns = [
        'provident',
        'nam',
        'id',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file = new TlsValidationContextFileTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file->certificateChain = 'blanditiis';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds = new TlsValidationContextSdsTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds->secretName = 'deleniti';
    $request->requestBody->spec->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
        new Backend(),
    ];
    $request->requestBody->spec->listeners = [
        new Listener(),
    ];
    $request->requestBody->spec->logging = new Logging();
    $request->requestBody->spec->logging->accessLog = new AccessLog();
    $request->requestBody->spec->logging->accessLog->file = new FileAccessLog();
    $request->requestBody->spec->logging->accessLog->file->format = new LoggingFormat();
    $request->requestBody->spec->logging->accessLog->file->format->json = [
        new JsonFormatRef(),
        new JsonFormatRef(),
        new JsonFormatRef(),
    ];
    $request->requestBody->spec->logging->accessLog->file->format->text = 'nisi';
    $request->requestBody->spec->logging->accessLog->file->path = 'vel';
    $request->requestBody->spec->serviceDiscovery = new ServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->awsCloudMap = new AwsCloudMapServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->attributes = [
        new AwsCloudMapInstanceAttribute(),
        new AwsCloudMapInstanceAttribute(),
        new AwsCloudMapInstanceAttribute(),
    ];
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->ipPreference = IpPreferenceEnum::I_PV4_ONLY;
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->namespaceName = 'molestiae';
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->serviceName = 'perferendis';
    $request->requestBody->spec->serviceDiscovery->dns = new DnsServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->dns->hostname = 'knotty-eligibility.net';
    $request->requestBody->spec->serviceDiscovery->dns->ipPreference = IpPreferenceEnum::I_PV4_ONLY;
    $request->requestBody->spec->serviceDiscovery->dns->responseType = DnsResponseTypeEnum::LOADBALANCER;
    $request->requestBody->tags = [
        new TagRef(),
        new TagRef(),
    ];
    $request->requestBody->virtualNodeName = 'suscipit';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->meshName = 'et';
    $request->meshOwner = 'excepturi';

    $response = $sdk->sdk->createVirtualNode($request);

    if ($response->createVirtualNodeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualRouter

<p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>

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
use \OpenAPI\OpenAPI\Models\Shared\VirtualRouterListener;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\PortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualRouterRequest();
    $request->requestBody = new CreateVirtualRouterRequestBody();
    $request->requestBody->clientToken = 'ullam';
    $request->requestBody->spec = new CreateVirtualRouterRequestBodySpec();
    $request->requestBody->spec->listeners = [
        new VirtualRouterListener(),
        new VirtualRouterListener(),
        new VirtualRouterListener(),
    ];
    $request->requestBody->tags = [
        new TagRef(),
        new TagRef(),
        new TagRef(),
    ];
    $request->requestBody->virtualRouterName = 'sint';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->meshName = 'necessitatibus';
    $request->meshOwner = 'odit';

    $response = $sdk->sdk->createVirtualRouter($request);

    if ($response->createVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualService

<p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualServiceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualServiceRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\VirtualServiceProvider;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeServiceProvider;
use \OpenAPI\OpenAPI\Models\Shared\VirtualRouterServiceProvider;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualServiceRequest();
    $request->requestBody = new CreateVirtualServiceRequestBody();
    $request->requestBody->clientToken = 'nemo';
    $request->requestBody->spec = new CreateVirtualServiceRequestBodySpec();
    $request->requestBody->spec->provider = new VirtualServiceProvider();
    $request->requestBody->spec->provider->virtualNode = new VirtualNodeServiceProvider();
    $request->requestBody->spec->provider->virtualNode->virtualNodeName = 'quasi';
    $request->requestBody->spec->provider->virtualRouter = new VirtualRouterServiceProvider();
    $request->requestBody->spec->provider->virtualRouter->virtualRouterName = 'iure';
    $request->requestBody->tags = [
        new TagRef(),
        new TagRef(),
        new TagRef(),
        new TagRef(),
    ];
    $request->requestBody->virtualServiceName = 'debitis';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->meshName = 'repudiandae';
    $request->meshOwner = 'ullam';

    $response = $sdk->sdk->createVirtualService($request);

    if ($response->createVirtualServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGatewayRoute

Deletes an existing gateway route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGatewayRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGatewayRouteRequest();
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->gatewayRouteName = 'accusantium';
    $request->meshName = 'consequuntur';
    $request->meshOwner = 'praesentium';
    $request->virtualGatewayName = 'natus';

    $response = $sdk->sdk->deleteGatewayRoute($request);

    if ($response->deleteGatewayRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMesh

<p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>

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
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';
    $request->meshName = 'excepturi';

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
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->meshName = 'voluptate';
    $request->meshOwner = 'autem';
    $request->routeName = 'nam';
    $request->virtualRouterName = 'eaque';

    $response = $sdk->sdk->deleteRoute($request);

    if ($response->deleteRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualGateway

Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualGatewayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVirtualGatewayRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->meshName = 'cumque';
    $request->meshOwner = 'corporis';
    $request->virtualGatewayName = 'hic';

    $response = $sdk->sdk->deleteVirtualGateway($request);

    if ($response->deleteVirtualGatewayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualNode

<p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>

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
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->meshName = 'quis';
    $request->meshOwner = 'nesciunt';
    $request->virtualNodeName = 'eos';

    $response = $sdk->sdk->deleteVirtualNode($request);

    if ($response->deleteVirtualNodeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualRouter

<p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>

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
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->meshName = 'hic';
    $request->meshOwner = 'recusandae';
    $request->virtualRouterName = 'omnis';

    $response = $sdk->sdk->deleteVirtualRouter($request);

    if ($response->deleteVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualService

Deletes an existing virtual service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVirtualServiceRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->meshName = 'eaque';
    $request->meshOwner = 'occaecati';
    $request->virtualServiceName = 'rerum';

    $response = $sdk->sdk->deleteVirtualService($request);

    if ($response->deleteVirtualServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGatewayRoute

Describes an existing gateway route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGatewayRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGatewayRouteRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->gatewayRouteName = 'pariatur';
    $request->meshName = 'provident';
    $request->meshOwner = 'nobis';
    $request->virtualGatewayName = 'libero';

    $response = $sdk->sdk->describeGatewayRoute($request);

    if ($response->describeGatewayRouteOutput !== null) {
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
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->meshName = 'qui';
    $request->meshOwner = 'ipsum';

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
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->meshName = 'dolorum';
    $request->meshOwner = 'numquam';
    $request->routeName = 'veritatis';
    $request->virtualRouterName = 'ipsa';

    $response = $sdk->sdk->describeRoute($request);

    if ($response->describeRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualGateway

Describes an existing virtual gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualGatewayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualGatewayRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->meshName = 'voluptas';
    $request->meshOwner = 'natus';
    $request->virtualGatewayName = 'eos';

    $response = $sdk->sdk->describeVirtualGateway($request);

    if ($response->describeVirtualGatewayOutput !== null) {
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
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->meshName = 'voluptate';
    $request->meshOwner = 'dolorum';
    $request->virtualNodeName = 'deleniti';

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
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->meshName = 'id';
    $request->meshOwner = 'saepe';
    $request->virtualRouterName = 'eius';

    $response = $sdk->sdk->describeVirtualRouter($request);

    if ($response->describeVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualService

Describes an existing virtual service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualServiceRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';
    $request->meshName = 'suscipit';
    $request->meshOwner = 'deserunt';
    $request->virtualServiceName = 'provident';

    $response = $sdk->sdk->describeVirtualService($request);

    if ($response->describeVirtualServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGatewayRoutes

Returns a list of existing gateway routes that are associated to a virtual gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGatewayRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGatewayRoutesRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->limit = 273542;
    $request->meshName = 'vel';
    $request->meshOwner = 'quod';
    $request->nextToken = 'officiis';
    $request->virtualGatewayName = 'qui';

    $response = $sdk->sdk->listGatewayRoutes($request);

    if ($response->listGatewayRoutesOutput !== null) {
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
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->limit = 947371;
    $request->nextToken = 'amet';

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
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->limit = 471752;
    $request->meshName = 'sit';
    $request->meshOwner = 'expedita';
    $request->nextToken = 'neque';
    $request->virtualRouterName = 'sed';

    $response = $sdk->sdk->listRoutes($request);

    if ($response->listRoutesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for an App Mesh resource.

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
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->limit = 186458;
    $request->nextToken = 'cupiditate';
    $request->resourceArn = 'maxime';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualGateways

Returns a list of existing virtual gateways in a service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualGatewaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualGatewaysRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->limit = 174909;
    $request->meshName = 'distinctio';
    $request->meshOwner = 'facilis';
    $request->nextToken = 'aliquid';

    $response = $sdk->sdk->listVirtualGateways($request);

    if ($response->listVirtualGatewaysOutput !== null) {
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
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';
    $request->limit = 488056;
    $request->meshName = 'sunt';
    $request->meshOwner = 'ullam';
    $request->nextToken = 'nam';

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
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';
    $request->limit = 217450;
    $request->meshName = 'veritatis';
    $request->meshOwner = 'nobis';
    $request->nextToken = 'quos';

    $response = $sdk->sdk->listVirtualRouters($request);

    if ($response->listVirtualRoutersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualServices

Returns a list of existing virtual services in a service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualServicesRequest();
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';
    $request->limit = 240829;
    $request->meshName = 'dolorum';
    $request->meshOwner = 'architecto';
    $request->nextToken = 'quae';

    $response = $sdk->sdk->listVirtualServices($request);

    if ($response->listVirtualServicesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TagRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        new TagRef(),
    ];
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->resourceArn = 'ut';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes specified tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->tagKeys = [
        'cupiditate',
        'qui',
        'quae',
    ];
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->resourceArn = 'quis';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGatewayRoute

Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayRouteRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRoute;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteRewrite;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteHostnameRewrite;
use \OpenAPI\OpenAPI\Models\Shared\DefaultGatewayRouteRewriteEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteTarget;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteVirtualService;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\GatewayRouteHostnameMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcGatewayRouteMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GrpcMetadataMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\MatchRange;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRoute;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRoutePathRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRoutePrefixRewrite;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpGatewayRouteHeader;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\HttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpPathMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterMatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGatewayRouteRequest();
    $request->requestBody = new UpdateGatewayRouteRequestBody();
    $request->requestBody->clientToken = 'ipsum';
    $request->requestBody->spec = new UpdateGatewayRouteRequestBodySpec();
    $request->requestBody->spec->grpcRoute = new GrpcGatewayRoute();
    $request->requestBody->spec->grpcRoute->action = new GrpcGatewayRouteAction();
    $request->requestBody->spec->grpcRoute->action->rewrite = new GrpcGatewayRouteRewrite();
    $request->requestBody->spec->grpcRoute->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->grpcRoute->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->grpcRoute->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->grpcRoute->action->target->port = 455169;
    $request->requestBody->spec->grpcRoute->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->grpcRoute->action->target->virtualService->virtualServiceName = 'consectetur';
    $request->requestBody->spec->grpcRoute->match = new GrpcGatewayRouteMatch();
    $request->requestBody->spec->grpcRoute->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->grpcRoute->match->hostname->exact = 'vero';
    $request->requestBody->spec->grpcRoute->match->hostname->suffix = 'tenetur';
    $request->requestBody->spec->grpcRoute->match->metadata = [
        new GrpcGatewayRouteMetadata(),
        new GrpcGatewayRouteMetadata(),
    ];
    $request->requestBody->spec->grpcRoute->match->port = 941378;
    $request->requestBody->spec->grpcRoute->match->serviceName = 'distinctio';
    $request->requestBody->spec->http2Route = new HttpGatewayRoute();
    $request->requestBody->spec->http2Route->action = new HttpGatewayRouteAction();
    $request->requestBody->spec->http2Route->action->rewrite = new HttpGatewayRouteRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->http2Route->action->rewrite->path = new HttpGatewayRoutePathRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->path->exact = 'odio';
    $request->requestBody->spec->http2Route->action->rewrite->prefix = new HttpGatewayRoutePrefixRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->prefix->defaultPrefix = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->http2Route->action->rewrite->prefix->value = 'facilis';
    $request->requestBody->spec->http2Route->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->http2Route->action->target->port = 874288;
    $request->requestBody->spec->http2Route->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->http2Route->action->target->virtualService->virtualServiceName = 'ducimus';
    $request->requestBody->spec->http2Route->match = new HttpGatewayRouteMatch();
    $request->requestBody->spec->http2Route->match->headers = [
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
    ];
    $request->requestBody->spec->http2Route->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->http2Route->match->hostname->exact = 'quibusdam';
    $request->requestBody->spec->http2Route->match->hostname->suffix = 'illum';
    $request->requestBody->spec->http2Route->match->method = HttpMethodEnum::HEAD;
    $request->requestBody->spec->http2Route->match->path = new HttpPathMatch();
    $request->requestBody->spec->http2Route->match->path->exact = 'natus';
    $request->requestBody->spec->http2Route->match->path->regex = 'impedit';
    $request->requestBody->spec->http2Route->match->port = 13236;
    $request->requestBody->spec->http2Route->match->prefix = 'voluptatibus';
    $request->requestBody->spec->http2Route->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->httpRoute = new HttpGatewayRoute();
    $request->requestBody->spec->httpRoute->action = new HttpGatewayRouteAction();
    $request->requestBody->spec->httpRoute->action->rewrite = new HttpGatewayRouteRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->httpRoute->action->rewrite->path = new HttpGatewayRoutePathRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->path->exact = 'fugit';
    $request->requestBody->spec->httpRoute->action->rewrite->prefix = new HttpGatewayRoutePrefixRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->prefix->defaultPrefix = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->httpRoute->action->rewrite->prefix->value = 'maiores';
    $request->requestBody->spec->httpRoute->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->httpRoute->action->target->port = 985033;
    $request->requestBody->spec->httpRoute->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->httpRoute->action->target->virtualService->virtualServiceName = 'iusto';
    $request->requestBody->spec->httpRoute->match = new HttpGatewayRouteMatch();
    $request->requestBody->spec->httpRoute->match->headers = [
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
    ];
    $request->requestBody->spec->httpRoute->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->httpRoute->match->hostname->exact = 'ducimus';
    $request->requestBody->spec->httpRoute->match->hostname->suffix = 'alias';
    $request->requestBody->spec->httpRoute->match->method = HttpMethodEnum::CONNECT;
    $request->requestBody->spec->httpRoute->match->path = new HttpPathMatch();
    $request->requestBody->spec->httpRoute->match->path->exact = 'tempora';
    $request->requestBody->spec->httpRoute->match->path->regex = 'ipsam';
    $request->requestBody->spec->httpRoute->match->port = 410492;
    $request->requestBody->spec->httpRoute->match->prefix = 'aspernatur';
    $request->requestBody->spec->httpRoute->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->priority = 822118;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';
    $request->gatewayRouteName = 'quasi';
    $request->meshName = 'ex';
    $request->meshOwner = 'nulla';
    $request->virtualGatewayName = 'excepturi';

    $response = $sdk->sdk->updateGatewayRoute($request);

    if ($response->updateGatewayRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMesh

Updates an existing service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMeshRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMeshRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMeshRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\EgressFilter;
use \OpenAPI\OpenAPI\Models\Shared\EgressFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeshServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\IpPreferenceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMeshRequest();
    $request->requestBody = new UpdateMeshRequestBody();
    $request->requestBody->clientToken = 'voluptatibus';
    $request->requestBody->spec = new UpdateMeshRequestBodySpec();
    $request->requestBody->spec->egressFilter = new EgressFilter();
    $request->requestBody->spec->egressFilter->type = EgressFilterTypeEnum::ALLOW_ALL;
    $request->requestBody->spec->serviceDiscovery = new MeshServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->ipPreference = IpPreferenceEnum::I_PV6_ONLY;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->meshName = 'inventore';

    $response = $sdk->sdk->updateMesh($request);

    if ($response->updateMeshOutput !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GrpcRoute;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTarget;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRouteMetadataMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\MatchRange;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GrpcRetryPolicyEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TcpRetryPolicyEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\GrpcTimeout;
use \OpenAPI\OpenAPI\Models\Shared\HttpRoute;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpRouteHeader;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchMethod;
use \OpenAPI\OpenAPI\Models\Shared\HttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpPathMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpSchemeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpRetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\HttpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\TcpRoute;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteAction;
use \OpenAPI\OpenAPI\Models\Shared\TcpRouteMatch;
use \OpenAPI\OpenAPI\Models\Shared\TcpTimeout;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRouteRequest();
    $request->requestBody = new UpdateRouteRequestBody();
    $request->requestBody->clientToken = 'magnam';
    $request->requestBody->spec = new UpdateRouteRequestBodySpec();
    $request->requestBody->spec->grpcRoute = new GrpcRoute();
    $request->requestBody->spec->grpcRoute->action = new GrpcRouteAction();
    $request->requestBody->spec->grpcRoute->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->grpcRoute->match = new GrpcRouteMatch();
    $request->requestBody->spec->grpcRoute->match->metadata = [
        new GrpcRouteMetadata(),
        new GrpcRouteMetadata(),
        new GrpcRouteMetadata(),
        new GrpcRouteMetadata(),
    ];
    $request->requestBody->spec->grpcRoute->match->methodName = 'consectetur';
    $request->requestBody->spec->grpcRoute->match->port = 926213;
    $request->requestBody->spec->grpcRoute->match->serviceName = 'aspernatur';
    $request->requestBody->spec->grpcRoute->retryPolicy = new GrpcRetryPolicy();
    $request->requestBody->spec->grpcRoute->retryPolicy->grpcRetryEvents = [
        GrpcRetryPolicyEventEnum::CANCELLED,
        GrpcRetryPolicyEventEnum::UNAVAILABLE,
    ];
    $request->requestBody->spec->grpcRoute->retryPolicy->httpRetryEvents = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->requestBody->spec->grpcRoute->retryPolicy->maxRetries = 770581;
    $request->requestBody->spec->grpcRoute->retryPolicy->perRetryTimeout = new Duration();
    $request->requestBody->spec->grpcRoute->retryPolicy->perRetryTimeout->unit = DurationUnitEnum::S;
    $request->requestBody->spec->grpcRoute->retryPolicy->perRetryTimeout->value = 146946;
    $request->requestBody->spec->grpcRoute->retryPolicy->tcpRetryEvents = [
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
    ];
    $request->requestBody->spec->grpcRoute->timeout = new GrpcTimeout();
    $request->requestBody->spec->grpcRoute->timeout->idle = new Duration();
    $request->requestBody->spec->grpcRoute->timeout->idle->unit = DurationUnitEnum::S;
    $request->requestBody->spec->grpcRoute->timeout->idle->value = 250622;
    $request->requestBody->spec->grpcRoute->timeout->perRequest = new Duration();
    $request->requestBody->spec->grpcRoute->timeout->perRequest->unit = DurationUnitEnum::S;
    $request->requestBody->spec->grpcRoute->timeout->perRequest->value = 677412;
    $request->requestBody->spec->http2Route = new HttpRoute();
    $request->requestBody->spec->http2Route->action = new HttpRouteAction();
    $request->requestBody->spec->http2Route->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->http2Route->match = new HttpRouteMatch();
    $request->requestBody->spec->http2Route->match->headers = [
        new HttpRouteHeader(),
        new HttpRouteHeader(),
        new HttpRouteHeader(),
        new HttpRouteHeader(),
    ];
    $request->requestBody->spec->http2Route->match->method = HttpMethodEnum::POST;
    $request->requestBody->spec->http2Route->match->path = new HttpPathMatch();
    $request->requestBody->spec->http2Route->match->path->exact = 'eum';
    $request->requestBody->spec->http2Route->match->path->regex = 'autem';
    $request->requestBody->spec->http2Route->match->port = 752135;
    $request->requestBody->spec->http2Route->match->prefix = 'quas';
    $request->requestBody->spec->http2Route->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->http2Route->match->scheme = HttpSchemeEnum::HTTPS;
    $request->requestBody->spec->http2Route->retryPolicy = new HttpRetryPolicy();
    $request->requestBody->spec->http2Route->retryPolicy->httpRetryEvents = [
        'libero',
        'quasi',
    ];
    $request->requestBody->spec->http2Route->retryPolicy->maxRetries = 270328;
    $request->requestBody->spec->http2Route->retryPolicy->perRetryTimeout = new Duration();
    $request->requestBody->spec->http2Route->retryPolicy->perRetryTimeout->unit = DurationUnitEnum::S;
    $request->requestBody->spec->http2Route->retryPolicy->perRetryTimeout->value = 131482;
    $request->requestBody->spec->http2Route->retryPolicy->tcpRetryEvents = [
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
    ];
    $request->requestBody->spec->http2Route->timeout = new HttpTimeout();
    $request->requestBody->spec->http2Route->timeout->idle = new Duration();
    $request->requestBody->spec->http2Route->timeout->idle->unit = DurationUnitEnum::S;
    $request->requestBody->spec->http2Route->timeout->idle->value = 476477;
    $request->requestBody->spec->http2Route->timeout->perRequest = new Duration();
    $request->requestBody->spec->http2Route->timeout->perRequest->unit = DurationUnitEnum::S;
    $request->requestBody->spec->http2Route->timeout->perRequest->value = 487935;
    $request->requestBody->spec->httpRoute = new HttpRoute();
    $request->requestBody->spec->httpRoute->action = new HttpRouteAction();
    $request->requestBody->spec->httpRoute->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->httpRoute->match = new HttpRouteMatch();
    $request->requestBody->spec->httpRoute->match->headers = [
        new HttpRouteHeader(),
        new HttpRouteHeader(),
    ];
    $request->requestBody->spec->httpRoute->match->method = HttpMethodEnum::DELETE;
    $request->requestBody->spec->httpRoute->match->path = new HttpPathMatch();
    $request->requestBody->spec->httpRoute->match->path->exact = 'rem';
    $request->requestBody->spec->httpRoute->match->path->regex = 'fuga';
    $request->requestBody->spec->httpRoute->match->port = 442015;
    $request->requestBody->spec->httpRoute->match->prefix = 'quidem';
    $request->requestBody->spec->httpRoute->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->httpRoute->match->scheme = HttpSchemeEnum::HTTP;
    $request->requestBody->spec->httpRoute->retryPolicy = new HttpRetryPolicy();
    $request->requestBody->spec->httpRoute->retryPolicy->httpRetryEvents = [
        'suscipit',
        'assumenda',
    ];
    $request->requestBody->spec->httpRoute->retryPolicy->maxRetries = 181151;
    $request->requestBody->spec->httpRoute->retryPolicy->perRetryTimeout = new Duration();
    $request->requestBody->spec->httpRoute->retryPolicy->perRetryTimeout->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->httpRoute->retryPolicy->perRetryTimeout->value = 788546;
    $request->requestBody->spec->httpRoute->retryPolicy->tcpRetryEvents = [
        TcpRetryPolicyEventEnum::CONNECTION_ERROR,
    ];
    $request->requestBody->spec->httpRoute->timeout = new HttpTimeout();
    $request->requestBody->spec->httpRoute->timeout->idle = new Duration();
    $request->requestBody->spec->httpRoute->timeout->idle->unit = DurationUnitEnum::S;
    $request->requestBody->spec->httpRoute->timeout->idle->value = 660040;
    $request->requestBody->spec->httpRoute->timeout->perRequest = new Duration();
    $request->requestBody->spec->httpRoute->timeout->perRequest->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->httpRoute->timeout->perRequest->value = 206594;
    $request->requestBody->spec->priority = 778696;
    $request->requestBody->spec->tcpRoute = new TcpRoute();
    $request->requestBody->spec->tcpRoute->action = new TcpRouteAction();
    $request->requestBody->spec->tcpRoute->action->weightedTargets = [
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
        new WeightedTarget(),
    ];
    $request->requestBody->spec->tcpRoute->match = new TcpRouteMatch();
    $request->requestBody->spec->tcpRoute->match->port = 777408;
    $request->requestBody->spec->tcpRoute->timeout = new TcpTimeout();
    $request->requestBody->spec->tcpRoute->timeout->idle = new Duration();
    $request->requestBody->spec->tcpRoute->timeout->idle->unit = DurationUnitEnum::MS;
    $request->requestBody->spec->tcpRoute->timeout->idle->value = 259422;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'debitis';
    $request->meshName = 'ipsam';
    $request->meshOwner = 'aspernatur';
    $request->routeName = 'sequi';
    $request->virtualRouterName = 'quo';

    $response = $sdk->sdk->updateRoute($request);

    if ($response->updateRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVirtualGateway

Updates an existing virtual gateway in a specified service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualGatewayRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualGatewayRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayBackendDefaults;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayClientPolicy;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayClientPolicyTls;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayClientTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsFileCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsSdsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNames;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNameMatchers;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextAcmTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextFileTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayTlsValidationContextSdsTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListener;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayGrpcConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayHttpConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayHttp2ConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayHealthCheckPolicy;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayPortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayPortMapping;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTls;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsAcmCertificate;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayListenerTlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayLogging;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\VirtualGatewayFileAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\LoggingFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualGatewayRequest();
    $request->requestBody = new UpdateVirtualGatewayRequestBody();
    $request->requestBody->clientToken = 'esse';
    $request->requestBody->spec = new UpdateVirtualGatewayRequestBodySpec();
    $request->requestBody->spec->backendDefaults = new VirtualGatewayBackendDefaults();
    $request->requestBody->spec->backendDefaults->clientPolicy = new VirtualGatewayClientPolicy();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls = new VirtualGatewayClientPolicyTls();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate = new VirtualGatewayClientTlsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file = new VirtualGatewayListenerTlsFileCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->certificateChain = 'recusandae';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->privateKey = 'aperiam';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds = new VirtualGatewayListenerTlsSdsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds->secretName = 'distinctio';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->enforce = false;
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->ports = [
        490819,
        76956,
        469498,
        518835,
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation = new VirtualGatewayTlsValidationContext();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames = new SubjectAlternativeNames();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match = new SubjectAlternativeNameMatchers();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match->exact = [
        'aliquam',
        'odio',
        'occaecati',
        'commodi',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust = new VirtualGatewayTlsValidationContextTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm = new VirtualGatewayTlsValidationContextAcmTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm->certificateAuthorityArns = [
        'dolores',
        'deserunt',
        'molestiae',
        'accusantium',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file = new VirtualGatewayTlsValidationContextFileTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file->certificateChain = 'porro';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds = new VirtualGatewayTlsValidationContextSdsTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds->secretName = 'eum';
    $request->requestBody->spec->listeners = [
        new VirtualGatewayListener(),
        new VirtualGatewayListener(),
        new VirtualGatewayListener(),
    ];
    $request->requestBody->spec->logging = new VirtualGatewayLogging();
    $request->requestBody->spec->logging->accessLog = new VirtualGatewayAccessLog();
    $request->requestBody->spec->logging->accessLog->file = new VirtualGatewayFileAccessLog();
    $request->requestBody->spec->logging->accessLog->file->format = new LoggingFormat();
    $request->requestBody->spec->logging->accessLog->file->format->json = [
        new JsonFormatRef(),
        new JsonFormatRef(),
        new JsonFormatRef(),
    ];
    $request->requestBody->spec->logging->accessLog->file->format->text = 'consequuntur';
    $request->requestBody->spec->logging->accessLog->file->path = 'deleniti';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'minima';
    $request->meshName = 'nisi';
    $request->meshOwner = 'fugit';
    $request->virtualGatewayName = 'sapiente';

    $response = $sdk->sdk->updateVirtualGateway($request);

    if ($response->updateVirtualGatewayOutput !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\BackendDefaults;
use \OpenAPI\OpenAPI\Models\Shared\ClientPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ClientPolicyTls;
use \OpenAPI\OpenAPI\Models\Shared\ClientTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsFileCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsSdsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNames;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAlternativeNameMatchers;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextAcmTrust;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextFileTrust;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextSdsTrust;
use \OpenAPI\OpenAPI\Models\Shared\Backend;
use \OpenAPI\OpenAPI\Models\Shared\VirtualServiceBackend;
use \OpenAPI\OpenAPI\Models\Shared\Listener;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeGrpcConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeHttpConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeHttp2ConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeTcpConnectionPool;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PortProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlierDetection;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTimeout;
use \OpenAPI\OpenAPI\Models\Shared\GrpcTimeout;
use \OpenAPI\OpenAPI\Models\Shared\HttpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\TcpTimeout;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTls;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsAcmCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\ListenerTlsValidationContextTrust;
use \OpenAPI\OpenAPI\Models\Shared\Logging;
use \OpenAPI\OpenAPI\Models\Shared\AccessLog;
use \OpenAPI\OpenAPI\Models\Shared\FileAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\LoggingFormat;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatRef;
use \OpenAPI\OpenAPI\Models\Shared\ServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudMapServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudMapInstanceAttribute;
use \OpenAPI\OpenAPI\Models\Shared\IpPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsServiceDiscovery;
use \OpenAPI\OpenAPI\Models\Shared\DnsResponseTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualNodeRequest();
    $request->requestBody = new UpdateVirtualNodeRequestBody();
    $request->requestBody->clientToken = 'consequuntur';
    $request->requestBody->spec = new UpdateVirtualNodeRequestBodySpec();
    $request->requestBody->spec->backendDefaults = new BackendDefaults();
    $request->requestBody->spec->backendDefaults->clientPolicy = new ClientPolicy();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls = new ClientPolicyTls();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate = new ClientTlsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file = new ListenerTlsFileCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->certificateChain = 'ratione';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->file->privateKey = 'explicabo';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds = new ListenerTlsSdsCertificate();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->certificate->sds->secretName = 'saepe';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->enforce = false;
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->ports = [
        543806,
        92260,
        456911,
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation = new TlsValidationContext();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames = new SubjectAlternativeNames();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match = new SubjectAlternativeNameMatchers();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->subjectAlternativeNames->match->exact = [
        'accusamus',
        'veritatis',
        'esse',
        'quod',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust = new TlsValidationContextTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm = new TlsValidationContextAcmTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->acm->certificateAuthorityArns = [
        'vero',
        'aliquid',
        'quasi',
    ];
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file = new TlsValidationContextFileTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->file->certificateChain = 'saepe';
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds = new TlsValidationContextSdsTrust();
    $request->requestBody->spec->backendDefaults->clientPolicy->tls->validation->trust->sds->secretName = 'vel';
    $request->requestBody->spec->backends = [
        new Backend(),
        new Backend(),
        new Backend(),
    ];
    $request->requestBody->spec->listeners = [
        new Listener(),
        new Listener(),
    ];
    $request->requestBody->spec->logging = new Logging();
    $request->requestBody->spec->logging->accessLog = new AccessLog();
    $request->requestBody->spec->logging->accessLog->file = new FileAccessLog();
    $request->requestBody->spec->logging->accessLog->file->format = new LoggingFormat();
    $request->requestBody->spec->logging->accessLog->file->format->json = [
        new JsonFormatRef(),
        new JsonFormatRef(),
        new JsonFormatRef(),
    ];
    $request->requestBody->spec->logging->accessLog->file->format->text = 'occaecati';
    $request->requestBody->spec->logging->accessLog->file->path = 'minima';
    $request->requestBody->spec->serviceDiscovery = new ServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->awsCloudMap = new AwsCloudMapServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->attributes = [
        new AwsCloudMapInstanceAttribute(),
        new AwsCloudMapInstanceAttribute(),
        new AwsCloudMapInstanceAttribute(),
    ];
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->ipPreference = IpPreferenceEnum::I_PV6_ONLY;
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->namespaceName = 'sit';
    $request->requestBody->spec->serviceDiscovery->awsCloudMap->serviceName = 'culpa';
    $request->requestBody->spec->serviceDiscovery->dns = new DnsServiceDiscovery();
    $request->requestBody->spec->serviceDiscovery->dns->hostname = 'self-reliant-data.net';
    $request->requestBody->spec->serviceDiscovery->dns->ipPreference = IpPreferenceEnum::I_PV6_PREFERRED;
    $request->requestBody->spec->serviceDiscovery->dns->responseType = DnsResponseTypeEnum::LOADBALANCER;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'provident';
    $request->meshName = 'a';
    $request->meshOwner = 'nulla';
    $request->virtualNodeName = 'quas';

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
use \OpenAPI\OpenAPI\Models\Shared\VirtualRouterListener;
use \OpenAPI\OpenAPI\Models\Shared\PortMapping;
use \OpenAPI\OpenAPI\Models\Shared\PortProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualRouterRequest();
    $request->requestBody = new UpdateVirtualRouterRequestBody();
    $request->requestBody->clientToken = 'esse';
    $request->requestBody->spec = new UpdateVirtualRouterRequestBodySpec();
    $request->requestBody->spec->listeners = [
        new VirtualRouterListener(),
    ];
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->meshName = 'asperiores';
    $request->meshOwner = 'facere';
    $request->virtualRouterName = 'veritatis';

    $response = $sdk->sdk->updateVirtualRouter($request);

    if ($response->updateVirtualRouterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVirtualService

Updates an existing virtual service in a specified service mesh.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualServiceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualServiceRequestBodySpec;
use \OpenAPI\OpenAPI\Models\Shared\VirtualServiceProvider;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNodeServiceProvider;
use \OpenAPI\OpenAPI\Models\Shared\VirtualRouterServiceProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualServiceRequest();
    $request->requestBody = new UpdateVirtualServiceRequestBody();
    $request->requestBody->clientToken = 'consequuntur';
    $request->requestBody->spec = new UpdateVirtualServiceRequestBodySpec();
    $request->requestBody->spec->provider = new VirtualServiceProvider();
    $request->requestBody->spec->provider->virtualNode = new VirtualNodeServiceProvider();
    $request->requestBody->spec->provider->virtualNode->virtualNodeName = 'quasi';
    $request->requestBody->spec->provider->virtualRouter = new VirtualRouterServiceProvider();
    $request->requestBody->spec->provider->virtualRouter->virtualRouterName = 'similique';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->meshName = 'eius';
    $request->meshOwner = 'libero';
    $request->virtualServiceName = 'illum';

    $response = $sdk->sdk->updateVirtualService($request);

    if ($response->updateVirtualServiceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
