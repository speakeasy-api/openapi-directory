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
import org.openapis.openapi.models.operations.CreateGatewayRouteRequest;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBody;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBodySpec;
import org.openapis.openapi.models.operations.CreateGatewayRouteResponse;
import org.openapis.openapi.models.shared.DefaultGatewayRouteRewriteEnum;
import org.openapis.openapi.models.shared.GatewayRouteHostnameMatch;
import org.openapis.openapi.models.shared.GatewayRouteHostnameRewrite;
import org.openapis.openapi.models.shared.GatewayRouteTarget;
import org.openapis.openapi.models.shared.GatewayRouteVirtualService;
import org.openapis.openapi.models.shared.GrpcGatewayRoute;
import org.openapis.openapi.models.shared.GrpcGatewayRouteAction;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMatch;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata;
import org.openapis.openapi.models.shared.GrpcGatewayRouteRewrite;
import org.openapis.openapi.models.shared.GrpcMetadataMatchMethod;
import org.openapis.openapi.models.shared.HeaderMatchMethod;
import org.openapis.openapi.models.shared.HttpGatewayRoute;
import org.openapis.openapi.models.shared.HttpGatewayRouteAction;
import org.openapis.openapi.models.shared.HttpGatewayRouteHeader;
import org.openapis.openapi.models.shared.HttpGatewayRouteMatch;
import org.openapis.openapi.models.shared.HttpGatewayRoutePathRewrite;
import org.openapis.openapi.models.shared.HttpGatewayRoutePrefixRewrite;
import org.openapis.openapi.models.shared.HttpGatewayRouteRewrite;
import org.openapis.openapi.models.shared.HttpMethodEnum;
import org.openapis.openapi.models.shared.HttpPathMatch;
import org.openapis.openapi.models.shared.HttpQueryParameter;
import org.openapis.openapi.models.shared.MatchRange;
import org.openapis.openapi.models.shared.QueryParameterMatch;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest(                new CreateGatewayRouteRequestBody("provident",                 new CreateGatewayRouteRequestBodySpec() {{
                                                grpcRoute = new GrpcGatewayRoute(                new GrpcGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("distinctio");) {{
                                                                                    port = 844266L;
                                                                                }};) {{
                                                                    rewrite = new GrpcGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                        }};;
                                                                    }};;
                                                                }};,                 new GrpcGatewayRouteMatch() {{
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "nulla";
                                                                        suffix = "corrupti";
                                                                    }};;
                                                                    metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                                                        add(new GrpcGatewayRouteMetadata("placeat") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "vel";
                                                                                prefix = "error";
                                                                                range = new MatchRange(437587L, 297534L) {{
                                                                                    end = 645894L;
                                                                                    start = 384382L;
                                                                                }};
                                                                                regex = "debitis";
                                                                                suffix = "ipsa";
                                                                            }};
                                                                            name = "Ricky Hoppe";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("sapiente") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "voluptatum";
                                                                                prefix = "iusto";
                                                                                range = new MatchRange(925597L, 836079L) {{
                                                                                    end = 568045L;
                                                                                    start = 392785L;
                                                                                }};
                                                                                regex = "ab";
                                                                                suffix = "quis";
                                                                            }};
                                                                            name = "Iris Aufderhar";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("officia") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "quo";
                                                                                prefix = "odit";
                                                                                range = new MatchRange(978619L, 473608L) {{
                                                                                    end = 870013L;
                                                                                    start = 870088L;
                                                                                }};
                                                                                regex = "quod";
                                                                                suffix = "quod";
                                                                            }};
                                                                            name = "Deanna Sauer MD";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("esse") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "occaecati";
                                                                                prefix = "fugit";
                                                                                range = new MatchRange(758616L, 521848L) {{
                                                                                    end = 537373L;
                                                                                    start = 944669L;
                                                                                }};
                                                                                regex = "beatae";
                                                                                suffix = "commodi";
                                                                            }};
                                                                            name = "Pauline Dibbert";
                                                                        }}),
                                                                    }};
                                                                    port = 216550L;
                                                                    serviceName = "excepturi";
                                                                }};);;
                                                http2Route = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("aspernatur");) {{
                                                                                    port = 18789L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "natus";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                            value = "iste";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("est") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "natus";
                                                                                prefix = "laboriosam";
                                                                                range = new MatchRange(681820L, 449950L) {{
                                                                                    end = 943749L;
                                                                                    start = 902599L;
                                                                                }};
                                                                                regex = "corporis";
                                                                                suffix = "iste";
                                                                            }};
                                                                            name = "Mr. Kerry Predovic";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "mollitia";
                                                                        suffix = "laborum";
                                                                    }};;
                                                                    method = HttpMethodEnum.HEAD;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "dolorem";
                                                                        regex = "corporis";
                                                                    }};;
                                                                    port = 128926L;
                                                                    prefix = "nobis";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("doloribus") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "omnis";
                                                                            }};
                                                                            name = "Ms. Cathy Marks";
                                                                        }}),
                                                                        add(new HttpQueryParameter("repellat") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "sapiente";
                                                                            }};
                                                                            name = "Angie Durgan";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                httpRoute = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("mollitia");) {{
                                                                                    port = 581850L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "commodi";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                            value = "molestiae";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("possimus") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "error";
                                                                                prefix = "quia";
                                                                                range = new MatchRange(674752L, 656330L) {{
                                                                                    end = 338007L;
                                                                                    start = 110375L;
                                                                                }};
                                                                                regex = "enim";
                                                                                suffix = "odit";
                                                                            }};
                                                                            name = "Jimmy Wiegand";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "aut";
                                                                        suffix = "quasi";
                                                                    }};;
                                                                    method = HttpMethodEnum.CONNECT;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "temporibus";
                                                                        regex = "laborum";
                                                                    }};;
                                                                    port = 96098L;
                                                                    prefix = "reiciendis";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("cum") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "vero";
                                                                            }};
                                                                            name = "Miss Irma Wolff";
                                                                        }}),
                                                                        add(new HttpQueryParameter("dolore") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "perferendis";
                                                                            }};
                                                                            name = "Bessie Grady II";
                                                                        }}),
                                                                        add(new HttpQueryParameter("repudiandae") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "iusto";
                                                                            }};
                                                                            name = "Maryann Hamill";
                                                                        }}),
                                                                        add(new HttpQueryParameter("modi") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "quae";
                                                                            }};
                                                                            name = "Alison Mann";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                priority = 508969L;
                                            }};) {{
                                clientToken = "rem";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("sint", "veritatis") {{
                                        key = "quasi";
                                        value = "repudiandae";
                                    }}),
                                    add(new TagRef("enim", "consequatur") {{
                                        key = "itaque";
                                        value = "incidunt";
                                    }}),
                                    add(new TagRef("explicabo", "deserunt") {{
                                        key = "est";
                                        value = "quibusdam";
                                    }}),
                                    add(new TagRef("labore", "modi") {{
                                        key = "distinctio";
                                        value = "quibusdam";
                                    }}),
                                }};
                            }};, "qui", "aliquid") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
                meshOwner = "fugit";
            }};            

            CreateGatewayRouteResponse res = sdk.createGatewayRoute(req);

            if (res.createGatewayRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
