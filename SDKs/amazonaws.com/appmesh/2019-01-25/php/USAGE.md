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