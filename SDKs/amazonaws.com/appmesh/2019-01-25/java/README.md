# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateGatewayRoutePathParams;
import org.openapis.openapi.models.operations.CreateGatewayRouteQueryParams;
import org.openapis.openapi.models.operations.CreateGatewayRouteHeaders;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBodySpec;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBody;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequest;
import org.openapis.openapi.models.operations.CreateGatewayRouteResponse;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.HttpGatewayRoute;
import org.openapis.openapi.models.shared.HttpGatewayRouteMatch;
import org.openapis.openapi.models.shared.HttpQueryParameter;
import org.openapis.openapi.models.shared.QueryParameterMatch;
import org.openapis.openapi.models.shared.HttpPathMatch;
import org.openapis.openapi.models.shared.HttpMethodEnum;
import org.openapis.openapi.models.shared.GatewayRouteHostnameMatch;
import org.openapis.openapi.models.shared.HttpGatewayRouteHeader;
import org.openapis.openapi.models.shared.HeaderMatchMethod;
import org.openapis.openapi.models.shared.MatchRange;
import org.openapis.openapi.models.shared.HttpGatewayRouteAction;
import org.openapis.openapi.models.shared.GatewayRouteTarget;
import org.openapis.openapi.models.shared.GatewayRouteVirtualService;
import org.openapis.openapi.models.shared.HttpGatewayRouteRewrite;
import org.openapis.openapi.models.shared.HttpGatewayRoutePrefixRewrite;
import org.openapis.openapi.models.shared.DefaultGatewayRouteRewriteEnum;
import org.openapis.openapi.models.shared.HttpGatewayRoutePathRewrite;
import org.openapis.openapi.models.shared.GatewayRouteHostnameRewrite;
import org.openapis.openapi.models.shared.GrpcGatewayRoute;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMatch;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata;
import org.openapis.openapi.models.shared.GrpcMetadataMatchMethod;
import org.openapis.openapi.models.shared.GrpcGatewayRouteAction;
import org.openapis.openapi.models.shared.GrpcGatewayRouteRewrite;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest() {{
                pathParams = new CreateGatewayRoutePathParams() {{
                    meshName = "corrupti";
                    virtualGatewayName = "provident";
                }};
                queryParams = new CreateGatewayRouteQueryParams() {{
                    meshOwner = "distinctio";
                }};
                headers = new CreateGatewayRouteHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new CreateGatewayRouteRequestBody() {{
                    clientToken = "deserunt";
                    gatewayRouteName = "suscipit";
                    spec = new CreateGatewayRouteRequestBodySpec() {{
                        grpcRoute = new GrpcGatewayRoute() {{
                            action = new GrpcGatewayRouteAction() {{
                                rewrite = new GrpcGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "ENABLED";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 297534;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "debitis";
                                    }};
                                }};
                            }};
                            match = new GrpcGatewayRouteMatch() {{
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "ipsa";
                                    suffix = "delectus";
                                }};
                                metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "suscipit";
                                            prefix = "molestiae";
                                            range = new MatchRange() {{
                                                end = 791725;
                                                start = 812169;
                                            }};
                                            regex = "voluptatum";
                                            suffix = "iusto";
                                        }};
                                        name = "excepturi";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "nisi";
                                            prefix = "recusandae";
                                            range = new MatchRange() {{
                                                end = 836079;
                                                start = 71036;
                                            }};
                                            regex = "quis";
                                            suffix = "veritatis";
                                        }};
                                        name = "deserunt";
                                    }}),
                                }};
                                port = 20218;
                                serviceName = "ipsam";
                            }};
                        }};
                        http2Route = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "DISABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "sapiente";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "odit";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 870013;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "at";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "molestiae";
                                            prefix = "quod";
                                            range = new MatchRange() {{
                                                end = 800911;
                                                start = 461479;
                                            }};
                                            regex = "totam";
                                            suffix = "porro";
                                        }};
                                        name = "dolorum";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "dicta";
                                            prefix = "nam";
                                            range = new MatchRange() {{
                                                end = 639921;
                                                start = 582020;
                                            }};
                                            regex = "fugit";
                                            suffix = "deleniti";
                                        }};
                                        name = "hic";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "optio";
                                            prefix = "totam";
                                            range = new MatchRange() {{
                                                end = 105907;
                                                start = 414662;
                                            }};
                                            regex = "molestiae";
                                            suffix = "modi";
                                        }};
                                        name = "qui";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "impedit";
                                            prefix = "cum";
                                            range = new MatchRange() {{
                                                end = 456150;
                                                start = 216550;
                                            }};
                                            regex = "excepturi";
                                            suffix = "aspernatur";
                                        }};
                                        name = "perferendis";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "ad";
                                    suffix = "natus";
                                }};
                                method = "HEAD";
                                path = new HttpPathMatch() {{
                                    exact = "iste";
                                    regex = "dolor";
                                }};
                                port = 616934;
                                prefix = "laboriosam";
                                queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "saepe";
                                        }};
                                        name = "fuga";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "in";
                                        }};
                                        name = "corporis";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "iste";
                                        }};
                                        name = "iure";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "saepe";
                                        }};
                                        name = "quidem";
                                    }}),
                                }};
                            }};
                        }};
                        httpRoute = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "ENABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "ipsa";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "est";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 653140;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "laborum";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "dolorem";
                                            prefix = "corporis";
                                            range = new MatchRange() {{
                                                end = 128926;
                                                start = 750686;
                                            }};
                                            regex = "enim";
                                            suffix = "omnis";
                                        }};
                                        name = "nemo";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "minima";
                                    suffix = "excepturi";
                                }};
                                method = "GET";
                                path = new HttpPathMatch() {{
                                    exact = "iure";
                                    regex = "culpa";
                                }};
                                port = 988374;
                                prefix = "sapiente";
                                queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "mollitia";
                                        }};
                                        name = "dolorem";
                                    }}),
                                }};
                            }};
                        }};
                        priority = 635059;
                    }};
                    tags = new org.openapis.openapi.models.shared.TagRef[]{{
                        add(new TagRef() {{
                            key = "repellat";
                            value = "mollitia";
                        }}),
                    }};
                }};
            }};            

            CreateGatewayRouteResponse res = sdk.createGatewayRoute(req);

            if (res.createGatewayRouteOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createGatewayRoute` - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* `createMesh` - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* `createRoute` - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* `createVirtualGateway` - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* `createVirtualNode` - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
* `createVirtualRouter` - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* `createVirtualService` - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* `deleteGatewayRoute` - Deletes an existing gateway route.
* `deleteMesh` - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* `deleteRoute` - Deletes an existing route.
* `deleteVirtualGateway` - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* `deleteVirtualNode` - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* `deleteVirtualRouter` - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* `deleteVirtualService` - Deletes an existing virtual service.
* `describeGatewayRoute` - Describes an existing gateway route.
* `describeMesh` - Describes an existing service mesh.
* `describeRoute` - Describes an existing route.
* `describeVirtualGateway` - Describes an existing virtual gateway.
* `describeVirtualNode` - Describes an existing virtual node.
* `describeVirtualRouter` - Describes an existing virtual router.
* `describeVirtualService` - Describes an existing virtual service.
* `listGatewayRoutes` - Returns a list of existing gateway routes that are associated to a virtual gateway.
* `listMeshes` - Returns a list of existing service meshes.
* `listRoutes` - Returns a list of existing routes in a service mesh.
* `listTagsForResource` - List the tags for an App Mesh resource.
* `listVirtualGateways` - Returns a list of existing virtual gateways in a service mesh.
* `listVirtualNodes` - Returns a list of existing virtual nodes.
* `listVirtualRouters` - Returns a list of existing virtual routers in a service mesh.
* `listVirtualServices` - Returns a list of existing virtual services in a service mesh.
* `tagResource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `untagResource` - Deletes specified tags from a resource.
* `updateGatewayRoute` - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* `updateMesh` - Updates an existing service mesh.
* `updateRoute` - Updates an existing route for a specified service mesh and virtual router.
* `updateVirtualGateway` - Updates an existing virtual gateway in a specified service mesh.
* `updateVirtualNode` - Updates an existing virtual node in a specified service mesh.
* `updateVirtualRouter` - Updates an existing virtual router in a specified service mesh.
* `updateVirtualService` - Updates an existing virtual service in a specified service mesh.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
