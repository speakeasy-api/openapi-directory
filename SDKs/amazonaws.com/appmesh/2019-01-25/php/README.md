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
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->gatewayRouteName = 'provident';
    $request->requestBody->spec = new CreateGatewayRouteRequestBodySpec();
    $request->requestBody->spec->grpcRoute = new GrpcGatewayRoute();
    $request->requestBody->spec->grpcRoute->action = new GrpcGatewayRouteAction();
    $request->requestBody->spec->grpcRoute->action->rewrite = new GrpcGatewayRouteRewrite();
    $request->requestBody->spec->grpcRoute->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->grpcRoute->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->grpcRoute->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->grpcRoute->action->target->port = 844266;
    $request->requestBody->spec->grpcRoute->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->grpcRoute->action->target->virtualService->virtualServiceName = 'unde';
    $request->requestBody->spec->grpcRoute->match = new GrpcGatewayRouteMatch();
    $request->requestBody->spec->grpcRoute->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->grpcRoute->match->hostname->exact = 'nulla';
    $request->requestBody->spec->grpcRoute->match->hostname->suffix = 'corrupti';
    $request->requestBody->spec->grpcRoute->match->metadata = [
        new GrpcGatewayRouteMetadata(),
        new GrpcGatewayRouteMetadata(),
        new GrpcGatewayRouteMetadata(),
        new GrpcGatewayRouteMetadata(),
    ];
    $request->requestBody->spec->grpcRoute->match->port = 423655;
    $request->requestBody->spec->grpcRoute->match->serviceName = 'error';
    $request->requestBody->spec->http2Route = new HttpGatewayRoute();
    $request->requestBody->spec->http2Route->action = new HttpGatewayRouteAction();
    $request->requestBody->spec->http2Route->action->rewrite = new HttpGatewayRouteRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->http2Route->action->rewrite->path = new HttpGatewayRoutePathRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->path->exact = 'suscipit';
    $request->requestBody->spec->http2Route->action->rewrite->prefix = new HttpGatewayRoutePrefixRewrite();
    $request->requestBody->spec->http2Route->action->rewrite->prefix->defaultPrefix = DefaultGatewayRouteRewriteEnum::ENABLED;
    $request->requestBody->spec->http2Route->action->rewrite->prefix->value = 'magnam';
    $request->requestBody->spec->http2Route->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->http2Route->action->target->port = 891773;
    $request->requestBody->spec->http2Route->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->http2Route->action->target->virtualService->virtualServiceName = 'ipsa';
    $request->requestBody->spec->http2Route->match = new HttpGatewayRouteMatch();
    $request->requestBody->spec->http2Route->match->headers = [
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
    ];
    $request->requestBody->spec->http2Route->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->http2Route->match->hostname->exact = 'tempora';
    $request->requestBody->spec->http2Route->match->hostname->suffix = 'suscipit';
    $request->requestBody->spec->http2Route->match->method = HttpMethodEnum::DELETE;
    $request->requestBody->spec->http2Route->match->path = new HttpPathMatch();
    $request->requestBody->spec->http2Route->match->path->exact = 'minus';
    $request->requestBody->spec->http2Route->match->path->regex = 'placeat';
    $request->requestBody->spec->http2Route->match->port = 528895;
    $request->requestBody->spec->http2Route->match->prefix = 'iusto';
    $request->requestBody->spec->http2Route->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->httpRoute = new HttpGatewayRoute();
    $request->requestBody->spec->httpRoute->action = new HttpGatewayRouteAction();
    $request->requestBody->spec->httpRoute->action->rewrite = new HttpGatewayRouteRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->hostname = new GatewayRouteHostnameRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->hostname->defaultTargetHostname = DefaultGatewayRouteRewriteEnum::ENABLED;
    $request->requestBody->spec->httpRoute->action->rewrite->path = new HttpGatewayRoutePathRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->path->exact = 'recusandae';
    $request->requestBody->spec->httpRoute->action->rewrite->prefix = new HttpGatewayRoutePrefixRewrite();
    $request->requestBody->spec->httpRoute->action->rewrite->prefix->defaultPrefix = DefaultGatewayRouteRewriteEnum::DISABLED;
    $request->requestBody->spec->httpRoute->action->rewrite->prefix->value = 'ab';
    $request->requestBody->spec->httpRoute->action->target = new GatewayRouteTarget();
    $request->requestBody->spec->httpRoute->action->target->port = 337396;
    $request->requestBody->spec->httpRoute->action->target->virtualService = new GatewayRouteVirtualService();
    $request->requestBody->spec->httpRoute->action->target->virtualService->virtualServiceName = 'veritatis';
    $request->requestBody->spec->httpRoute->match = new HttpGatewayRouteMatch();
    $request->requestBody->spec->httpRoute->match->headers = [
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
        new HttpGatewayRouteHeader(),
    ];
    $request->requestBody->spec->httpRoute->match->hostname = new GatewayRouteHostnameMatch();
    $request->requestBody->spec->httpRoute->match->hostname->exact = 'perferendis';
    $request->requestBody->spec->httpRoute->match->hostname->suffix = 'ipsam';
    $request->requestBody->spec->httpRoute->match->method = HttpMethodEnum::TRACE;
    $request->requestBody->spec->httpRoute->match->path = new HttpPathMatch();
    $request->requestBody->spec->httpRoute->match->path->exact = 'sapiente';
    $request->requestBody->spec->httpRoute->match->path->regex = 'quo';
    $request->requestBody->spec->httpRoute->match->port = 140350;
    $request->requestBody->spec->httpRoute->match->prefix = 'at';
    $request->requestBody->spec->httpRoute->match->queryParameters = [
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
        new HttpQueryParameter(),
    ];
    $request->requestBody->spec->priority = 978619;
    $request->requestBody->tags = [
        new TagRef(),
        new TagRef(),
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->meshName = 'nam';
    $request->meshOwner = 'officia';
    $request->virtualGatewayName = 'occaecati';

    $response = $sdk->createGatewayRoute($request);

    if ($response->createGatewayRouteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createGatewayRoute](docs/sdk/README.md#creategatewayroute) - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* [createMesh](docs/sdk/README.md#createmesh) - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* [createRoute](docs/sdk/README.md#createroute) - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* [createVirtualGateway](docs/sdk/README.md#createvirtualgateway) - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* [createVirtualNode](docs/sdk/README.md#createvirtualnode) - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
* [createVirtualRouter](docs/sdk/README.md#createvirtualrouter) - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* [createVirtualService](docs/sdk/README.md#createvirtualservice) - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* [deleteGatewayRoute](docs/sdk/README.md#deletegatewayroute) - Deletes an existing gateway route.
* [deleteMesh](docs/sdk/README.md#deletemesh) - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* [deleteRoute](docs/sdk/README.md#deleteroute) - Deletes an existing route.
* [deleteVirtualGateway](docs/sdk/README.md#deletevirtualgateway) - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* [deleteVirtualNode](docs/sdk/README.md#deletevirtualnode) - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* [deleteVirtualRouter](docs/sdk/README.md#deletevirtualrouter) - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* [deleteVirtualService](docs/sdk/README.md#deletevirtualservice) - Deletes an existing virtual service.
* [describeGatewayRoute](docs/sdk/README.md#describegatewayroute) - Describes an existing gateway route.
* [describeMesh](docs/sdk/README.md#describemesh) - Describes an existing service mesh.
* [describeRoute](docs/sdk/README.md#describeroute) - Describes an existing route.
* [describeVirtualGateway](docs/sdk/README.md#describevirtualgateway) - Describes an existing virtual gateway.
* [describeVirtualNode](docs/sdk/README.md#describevirtualnode) - Describes an existing virtual node.
* [describeVirtualRouter](docs/sdk/README.md#describevirtualrouter) - Describes an existing virtual router.
* [describeVirtualService](docs/sdk/README.md#describevirtualservice) - Describes an existing virtual service.
* [listGatewayRoutes](docs/sdk/README.md#listgatewayroutes) - Returns a list of existing gateway routes that are associated to a virtual gateway.
* [listMeshes](docs/sdk/README.md#listmeshes) - Returns a list of existing service meshes.
* [listRoutes](docs/sdk/README.md#listroutes) - Returns a list of existing routes in a service mesh.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags for an App Mesh resource.
* [listVirtualGateways](docs/sdk/README.md#listvirtualgateways) - Returns a list of existing virtual gateways in a service mesh.
* [listVirtualNodes](docs/sdk/README.md#listvirtualnodes) - Returns a list of existing virtual nodes.
* [listVirtualRouters](docs/sdk/README.md#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [listVirtualServices](docs/sdk/README.md#listvirtualservices) - Returns a list of existing virtual services in a service mesh.
* [tagResource](docs/sdk/README.md#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes specified tags from a resource.
* [updateGatewayRoute](docs/sdk/README.md#updategatewayroute) - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* [updateMesh](docs/sdk/README.md#updatemesh) - Updates an existing service mesh.
* [updateRoute](docs/sdk/README.md#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [updateVirtualGateway](docs/sdk/README.md#updatevirtualgateway) - Updates an existing virtual gateway in a specified service mesh.
* [updateVirtualNode](docs/sdk/README.md#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [updateVirtualRouter](docs/sdk/README.md#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.
* [updateVirtualService](docs/sdk/README.md#updatevirtualservice) - Updates an existing virtual service in a specified service mesh.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
