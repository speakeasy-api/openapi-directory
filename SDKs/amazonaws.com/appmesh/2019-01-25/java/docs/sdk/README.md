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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest(                new CreateGatewayRouteRequestBody("excepturi",                 new CreateGatewayRouteRequestBodySpec() {{
                                                grpcRoute = new GrpcGatewayRoute(                new GrpcGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("tempora");) {{
                                                                                    port = 703737L;
                                                                                }};) {{
                                                                    rewrite = new GrpcGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                        }};;
                                                                    }};;
                                                                }};,                 new GrpcGatewayRouteMatch() {{
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "labore";
                                                                        suffix = "delectus";
                                                                    }};;
                                                                    metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                                                        add(new GrpcGatewayRouteMetadata("in") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "non";
                                                                                prefix = "eligendi";
                                                                                range = new MatchRange(592042L, 896039L) {{
                                                                                    end = 576157L;
                                                                                    start = 396098L;
                                                                                }};
                                                                                regex = "sint";
                                                                                suffix = "officia";
                                                                            }};
                                                                            name = "Raquel Wilderman";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("enim") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "illum";
                                                                                prefix = "maiores";
                                                                                range = new MatchRange(297437L, 767024L) {{
                                                                                    end = 699479L;
                                                                                    start = 116202L;
                                                                                }};
                                                                                regex = "facere";
                                                                                suffix = "ea";
                                                                            }};
                                                                            name = "Kayla Thompson";
                                                                        }}),
                                                                    }};
                                                                    port = 881736L;
                                                                    serviceName = "delectus";
                                                                }};);;
                                                http2Route = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("quidem");) {{
                                                                                    port = 588465L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "id";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                            value = "deleniti";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("labore") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "amet";
                                                                                prefix = "deserunt";
                                                                                range = new MatchRange(618809L, 606393L) {{
                                                                                    end = 394869L;
                                                                                    start = 423855L;
                                                                                }};
                                                                                regex = "molestiae";
                                                                                suffix = "perferendis";
                                                                            }};
                                                                            name = "Megan Rau";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("sint") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "suscipit";
                                                                                prefix = "natus";
                                                                                range = new MatchRange(878453L, 135474L) {{
                                                                                    end = 749170L;
                                                                                    start = 428769L;
                                                                                }};
                                                                                regex = "architecto";
                                                                                suffix = "magnam";
                                                                            }};
                                                                            name = "Miriam Hermann";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("debitis") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "accusantium";
                                                                                prefix = "mollitia";
                                                                                range = new MatchRange(320997L, 431418L) {{
                                                                                    end = 968962L;
                                                                                    start = 652103L;
                                                                                }};
                                                                                regex = "dolor";
                                                                                suffix = "necessitatibus";
                                                                            }};
                                                                            name = "Vivian Boyle";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("sed") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "eius";
                                                                                prefix = "maxime";
                                                                                range = new MatchRange(447926L, 100226L) {{
                                                                                    end = 537023L;
                                                                                    start = 703889L;
                                                                                }};
                                                                                regex = "architecto";
                                                                                suffix = "repudiandae";
                                                                            }};
                                                                            name = "Lola Koss";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "saepe";
                                                                        suffix = "pariatur";
                                                                    }};;
                                                                    method = HttpMethodEnum.GET;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "consequuntur";
                                                                        regex = "praesentium";
                                                                    }};;
                                                                    port = 615560L;
                                                                    prefix = "magni";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("odit") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "quo";
                                                                            }};
                                                                            name = "Ervin Schoen";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                httpRoute = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("ea");) {{
                                                                                    port = 33222L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "maiores";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                            value = "ipsam";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("libero") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "autem";
                                                                                prefix = "nam";
                                                                                range = new MatchRange(365496L, 975522L) {{
                                                                                    end = 50588L;
                                                                                    start = 866383L;
                                                                                }};
                                                                                regex = "perferendis";
                                                                                suffix = "fugiat";
                                                                            }};
                                                                            name = "Jennifer Runolfsdottir";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("dolor") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "nobis";
                                                                                prefix = "dolores";
                                                                                range = new MatchRange(489549L, 54338L) {{
                                                                                    end = 339404L;
                                                                                    start = 521037L;
                                                                                }};
                                                                                regex = "quis";
                                                                                suffix = "nesciunt";
                                                                            }};
                                                                            name = "Dorothy Dach";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "vero";
                                                                        suffix = "nostrum";
                                                                    }};;
                                                                    method = HttpMethodEnum.PATCH;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "recusandae";
                                                                        regex = "omnis";
                                                                    }};;
                                                                    port = 704415L;
                                                                    prefix = "perspiciatis";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("adipisci") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "porro";
                                                                            }};
                                                                            name = "Ms. Vickie Mraz";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                priority = 992397L;
                                            }};) {{
                                clientToken = "earum";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("deleniti", "pariatur") {{
                                        key = "iste";
                                        value = "dolorum";
                                    }}),
                                    add(new TagRef("libero", "delectus") {{
                                        key = "provident";
                                        value = "nobis";
                                    }}),
                                }};
                            }};, "quaerat", "quos") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
                meshOwner = "excepturi";
            }};            

            CreateGatewayRouteResponse res = sdk.sdk.createGatewayRoute(req);

            if (res.createGatewayRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMesh

<p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMeshRequest;
import org.openapis.openapi.models.operations.CreateMeshRequestBody;
import org.openapis.openapi.models.operations.CreateMeshRequestBodySpec;
import org.openapis.openapi.models.operations.CreateMeshResponse;
import org.openapis.openapi.models.shared.EgressFilter;
import org.openapis.openapi.models.shared.EgressFilterTypeEnum;
import org.openapis.openapi.models.shared.IpPreferenceEnum;
import org.openapis.openapi.models.shared.MeshServiceDiscovery;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMeshRequest req = new CreateMeshRequest(                new CreateMeshRequestBody("voluptate") {{
                                clientToken = "dignissimos";
                                spec = new CreateMeshRequestBodySpec() {{
                                    egressFilter = new EgressFilter(EgressFilterTypeEnum.DROP_ALL);;
                                    serviceDiscovery = new MeshServiceDiscovery() {{
                                        ipPreference = IpPreferenceEnum.I_PV6_PREFERRED;
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("ipsa", "ipsa") {{
                                        key = "numquam";
                                        value = "veritatis";
                                    }}),
                                    add(new TagRef("quaerat", "accusamus") {{
                                        key = "iure";
                                        value = "odio";
                                    }}),
                                    add(new TagRef("voluptas", "natus") {{
                                        key = "quidem";
                                        value = "voluptatibus";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateMeshResponse res = sdk.sdk.createMesh(req);

            if (res.createMeshOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRoute

<p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRouteRequest;
import org.openapis.openapi.models.operations.CreateRouteRequestBody;
import org.openapis.openapi.models.operations.CreateRouteRequestBodySpec;
import org.openapis.openapi.models.operations.CreateRouteResponse;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.DurationUnitEnum;
import org.openapis.openapi.models.shared.GrpcRetryPolicy;
import org.openapis.openapi.models.shared.GrpcRetryPolicyEventEnum;
import org.openapis.openapi.models.shared.GrpcRoute;
import org.openapis.openapi.models.shared.GrpcRouteAction;
import org.openapis.openapi.models.shared.GrpcRouteMatch;
import org.openapis.openapi.models.shared.GrpcRouteMetadata;
import org.openapis.openapi.models.shared.GrpcRouteMetadataMatchMethod;
import org.openapis.openapi.models.shared.GrpcTimeout;
import org.openapis.openapi.models.shared.HeaderMatchMethod;
import org.openapis.openapi.models.shared.HttpMethodEnum;
import org.openapis.openapi.models.shared.HttpPathMatch;
import org.openapis.openapi.models.shared.HttpQueryParameter;
import org.openapis.openapi.models.shared.HttpRetryPolicy;
import org.openapis.openapi.models.shared.HttpRoute;
import org.openapis.openapi.models.shared.HttpRouteAction;
import org.openapis.openapi.models.shared.HttpRouteHeader;
import org.openapis.openapi.models.shared.HttpRouteMatch;
import org.openapis.openapi.models.shared.HttpSchemeEnum;
import org.openapis.openapi.models.shared.HttpTimeout;
import org.openapis.openapi.models.shared.MatchRange;
import org.openapis.openapi.models.shared.QueryParameterMatch;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum;
import org.openapis.openapi.models.shared.TcpRoute;
import org.openapis.openapi.models.shared.TcpRouteAction;
import org.openapis.openapi.models.shared.TcpRouteMatch;
import org.openapis.openapi.models.shared.TcpTimeout;
import org.openapis.openapi.models.shared.WeightedTarget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRouteRequest req = new CreateRouteRequest(                new CreateRouteRequestBody("voluptate",                 new CreateRouteRequestBodySpec() {{
                                                grpcRoute = new GrpcRoute(                new GrpcRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("distinctio", 990339L) {{
                                                                                        port = 536579L;
                                                                                        virtualNode = "omnis";
                                                                                        weight = 896672L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("id", 906418L) {{
                                                                                        port = 469497L;
                                                                                        virtualNode = "ipsum";
                                                                                        weight = 456015L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("amet", 758379L) {{
                                                                                        port = 263322L;
                                                                                        virtualNode = "aspernatur";
                                                                                        weight = 20651L;
                                                                                    }}),
                                                                                }});,                 new GrpcRouteMatch() {{
                                                                    metadata = new org.openapis.openapi.models.shared.GrpcRouteMetadata[]{{
                                                                        add(new GrpcRouteMetadata("vel") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "ad";
                                                                                prefix = "saepe";
                                                                                range = new MatchRange(588317L, 324683L) {{
                                                                                    end = 383464L;
                                                                                    start = 645785L;
                                                                                }};
                                                                                regex = "repellendus";
                                                                                suffix = "totam";
                                                                            }};
                                                                            name = "James Swaniawski";
                                                                        }}),
                                                                        add(new GrpcRouteMetadata("accusamus") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "quod";
                                                                                prefix = "officiis";
                                                                                range = new MatchRange(952792L, 456130L) {{
                                                                                    end = 185636L;
                                                                                    start = 679880L;
                                                                                }};
                                                                                regex = "harum";
                                                                                suffix = "iusto";
                                                                            }};
                                                                            name = "Rosalie White";
                                                                        }}),
                                                                        add(new GrpcRouteMetadata("deserunt") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "numquam";
                                                                                prefix = "enim";
                                                                                range = new MatchRange(518201L, 471752L) {{
                                                                                    end = 213312L;
                                                                                    start = 957451L;
                                                                                }};
                                                                                regex = "sit";
                                                                                suffix = "expedita";
                                                                            }};
                                                                            name = "Jane Kassulke";
                                                                        }}),
                                                                        add(new GrpcRouteMetadata("dolores") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "quam";
                                                                                prefix = "ipsum";
                                                                                range = new MatchRange(586784L, 807581L) {{
                                                                                    end = 277628L;
                                                                                    start = 186458L;
                                                                                }};
                                                                                regex = "pariatur";
                                                                                suffix = "soluta";
                                                                            }};
                                                                            name = "Kayla Larson";
                                                                        }}),
                                                                    }};
                                                                    methodName = "distinctio";
                                                                    port = 704474L;
                                                                    serviceName = "aliquid";
                                                                }};) {{
                                                    retryPolicy = new GrpcRetryPolicy(463150L,                 new Duration() {{
                                                                        unit = DurationUnitEnum.MS;
                                                                        value = 840429L;
                                                                    }};) {{
                                                        grpcRetryEvents = new org.openapis.openapi.models.shared.GrpcRetryPolicyEventEnum[]{{
                                                            add(GrpcRetryPolicyEventEnum.DEADLINE_EXCEEDED),
                                                        }};
                                                        httpRetryEvents = new String[]{{
                                                            add("magni"),
                                                        }};
                                                        tcpRetryEvents = new org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum[]{{
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                        }};
                                                    }};;
                                                    timeout = new GrpcTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 355613L;
                                                        }};;
                                                        perRequest = new Duration() {{
                                                            unit = DurationUnitEnum.MS;
                                                            value = 940432L;
                                                        }};;
                                                    }};;
                                                }};;
                                                http2Route = new HttpRoute(                new HttpRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("et", 903720L) {{
                                                                                        port = 765326L;
                                                                                        virtualNode = "soluta";
                                                                                        weight = 748664L;
                                                                                    }}),
                                                                                }});,                 new HttpRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpRouteHeader[]{{
                                                                        add(new HttpRouteHeader("aut") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "veritatis";
                                                                                prefix = "nobis";
                                                                                range = new MatchRange(584476L, 45614L) {{
                                                                                    end = 552193L;
                                                                                    start = 731694L;
                                                                                }};
                                                                                regex = "delectus";
                                                                                suffix = "dolorem";
                                                                            }};
                                                                            name = "Clara Fisher Jr.";
                                                                        }}),
                                                                    }};
                                                                    method = HttpMethodEnum.CONNECT;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "itaque";
                                                                        regex = "consequatur";
                                                                    }};;
                                                                    port = 669917L;
                                                                    prefix = "repellendus";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("odio") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "doloribus";
                                                                            }};
                                                                            name = "Olivia McGlynn IV";
                                                                        }}),
                                                                        add(new HttpQueryParameter("ipsum") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "occaecati";
                                                                            }};
                                                                            name = "Wilson Terry";
                                                                        }}),
                                                                        add(new HttpQueryParameter("hic") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "delectus";
                                                                            }};
                                                                            name = "Victoria Thiel";
                                                                        }}),
                                                                        add(new HttpQueryParameter("ducimus") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "distinctio";
                                                                            }};
                                                                            name = "Lonnie Murray";
                                                                        }}),
                                                                    }};
                                                                    scheme = HttpSchemeEnum.HTTP;
                                                                }};) {{
                                                    retryPolicy = new HttpRetryPolicy(844550L,                 new Duration() {{
                                                                        unit = DurationUnitEnum.MS;
                                                                        value = 194342L;
                                                                    }};) {{
                                                        httpRetryEvents = new String[]{{
                                                            add("impedit"),
                                                            add("aut"),
                                                            add("voluptatibus"),
                                                        }};
                                                        tcpRetryEvents = new org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum[]{{
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                        }};
                                                    }};;
                                                    timeout = new HttpTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.MS;
                                                            value = 148141L;
                                                        }};;
                                                        perRequest = new Duration() {{
                                                            unit = DurationUnitEnum.MS;
                                                            value = 981830L;
                                                        }};;
                                                    }};;
                                                }};;
                                                httpRoute = new HttpRoute(                new HttpRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("alias", 639473L) {{
                                                                                        port = 478370L;
                                                                                        virtualNode = "eligendi";
                                                                                        weight = 497391L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("aspernatur", 428224L) {{
                                                                                        port = 269479L;
                                                                                        virtualNode = "ipsam";
                                                                                        weight = 410492L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("ex", 511319L) {{
                                                                                        port = 822118L;
                                                                                        virtualNode = "magnam";
                                                                                        weight = 189848L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("quasi", 406120L) {{
                                                                                        port = 120657L;
                                                                                        virtualNode = "dolor";
                                                                                        weight = 980700L;
                                                                                    }}),
                                                                                }});,                 new HttpRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpRouteHeader[]{{
                                                                        add(new HttpRouteHeader("quo") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "excepturi";
                                                                                prefix = "voluptatibus";
                                                                                range = new MatchRange(788873L, 906556L) {{
                                                                                    end = 343605L;
                                                                                    start = 960835L;
                                                                                }};
                                                                                regex = "ea";
                                                                                suffix = "impedit";
                                                                            }};
                                                                            name = "Mrs. Sally Jacobi";
                                                                        }}),
                                                                        add(new HttpRouteHeader("accusamus") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "consectetur";
                                                                                prefix = "recusandae";
                                                                                range = new MatchRange(53427L, 952871L) {{
                                                                                    end = 132487L;
                                                                                    start = 325310L;
                                                                                }};
                                                                                regex = "libero";
                                                                                suffix = "aut";
                                                                            }};
                                                                            name = "Margie Russel";
                                                                        }}),
                                                                        add(new HttpRouteHeader("voluptas") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "inventore";
                                                                                prefix = "non";
                                                                                range = new MatchRange(672048L, 810424L) {{
                                                                                    end = 89603L;
                                                                                    start = 677412L;
                                                                                }};
                                                                                regex = "velit";
                                                                                suffix = "eum";
                                                                            }};
                                                                            name = "Vicky Lynch";
                                                                        }}),
                                                                        add(new HttpRouteHeader("rem") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "libero";
                                                                                prefix = "quasi";
                                                                                range = new MatchRange(131482L, 591935L) {{
                                                                                    end = 270328L;
                                                                                    start = 256139L;
                                                                                }};
                                                                                regex = "ipsa";
                                                                                suffix = "molestiae";
                                                                            }};
                                                                            name = "Viola Gibson";
                                                                        }}),
                                                                    }};
                                                                    method = HttpMethodEnum.OPTIONS;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "reprehenderit";
                                                                        regex = "quidem";
                                                                    }};;
                                                                    port = 852635L;
                                                                    prefix = "ut";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("id") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "suscipit";
                                                                            }};
                                                                            name = "Alan Lang Jr.";
                                                                        }}),
                                                                        add(new HttpQueryParameter("eius") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "quidem";
                                                                            }};
                                                                            name = "Angelica Stamm";
                                                                        }}),
                                                                    }};
                                                                    scheme = HttpSchemeEnum.HTTP;
                                                                }};) {{
                                                    retryPolicy = new HttpRetryPolicy(373813L,                 new Duration() {{
                                                                        unit = DurationUnitEnum.S;
                                                                        value = 587600L;
                                                                    }};) {{
                                                        httpRetryEvents = new String[]{{
                                                            add("tempora"),
                                                        }};
                                                        tcpRetryEvents = new org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum[]{{
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                        }};
                                                    }};;
                                                    timeout = new HttpTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 133465L;
                                                        }};;
                                                        perRequest = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 779192L;
                                                        }};;
                                                    }};;
                                                }};;
                                                priority = 459856L;
                                                tcpRoute = new TcpRoute(                new TcpRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("dignissimos", 76956L) {{
                                                                                        port = 44612L;
                                                                                        virtualNode = "distinctio";
                                                                                        weight = 799796L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("aliquam", 488410L) {{
                                                                                        port = 469498L;
                                                                                        virtualNode = "totam";
                                                                                        weight = 882710L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("dolores", 645570L) {{
                                                                                        port = 577543L;
                                                                                        virtualNode = "commodi";
                                                                                        weight = 959434L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("eum", 556429L) {{
                                                                                        port = 475289L;
                                                                                        virtualNode = "accusantium";
                                                                                        weight = 783648L;
                                                                                    }}),
                                                                                }});) {{
                                                    match = new TcpRouteMatch() {{
                                                        port = 510017L;
                                                    }};;
                                                    timeout = new TcpTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 536178L;
                                                        }};;
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "fugit";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("atque", "explicabo") {{
                                        key = "mollitia";
                                        value = "incidunt";
                                    }}),
                                    add(new TagRef("fugit", "sapiente") {{
                                        key = "minima";
                                        value = "nisi";
                                    }}),
                                    add(new TagRef("explicabo", "saepe") {{
                                        key = "consequuntur";
                                        value = "ratione";
                                    }}),
                                }};
                            }};, "occaecati", "atque") {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "esse";
                xAmzCredential = "eveniet";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "quod";
                meshOwner = "nam";
            }};            

            CreateRouteResponse res = sdk.sdk.createRoute(req);

            if (res.createRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVirtualGateway

<p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualGatewayRequest;
import org.openapis.openapi.models.operations.CreateVirtualGatewayRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualGatewayRequestBodySpec;
import org.openapis.openapi.models.operations.CreateVirtualGatewayResponse;
import org.openapis.openapi.models.shared.JsonFormatRef;
import org.openapis.openapi.models.shared.LoggingFormat;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubjectAlternativeNameMatchers;
import org.openapis.openapi.models.shared.SubjectAlternativeNames;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.VirtualGatewayAccessLog;
import org.openapis.openapi.models.shared.VirtualGatewayBackendDefaults;
import org.openapis.openapi.models.shared.VirtualGatewayClientPolicy;
import org.openapis.openapi.models.shared.VirtualGatewayClientPolicyTls;
import org.openapis.openapi.models.shared.VirtualGatewayClientTlsCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayFileAccessLog;
import org.openapis.openapi.models.shared.VirtualGatewayGrpcConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayHealthCheckPolicy;
import org.openapis.openapi.models.shared.VirtualGatewayHttp2ConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayHttpConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayListener;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTls;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsAcmCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsFileCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsModeEnum;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsSdsCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsValidationContext;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsValidationContextTrust;
import org.openapis.openapi.models.shared.VirtualGatewayLogging;
import org.openapis.openapi.models.shared.VirtualGatewayPortMapping;
import org.openapis.openapi.models.shared.VirtualGatewayPortProtocolEnum;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContext;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextAcmTrust;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextFileTrust;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextSdsTrust;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextTrust;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualGatewayRequest req = new CreateVirtualGatewayRequest(                new CreateVirtualGatewayRequestBody(                new CreateVirtualGatewayRequestBodySpec() {{
                                                backendDefaults = new VirtualGatewayBackendDefaults() {{
                                                    clientPolicy = new VirtualGatewayClientPolicy() {{
                                                        tls = new VirtualGatewayClientPolicyTls(                new VirtualGatewayTlsValidationContext(                new VirtualGatewayTlsValidationContextTrust() {{
                                                                                            acm = new VirtualGatewayTlsValidationContextAcmTrust(                new String[]{{
                                                                                                                add("quasi"),
                                                                                                                add("saepe"),
                                                                                                            }});;
                                                                                            file = new VirtualGatewayTlsValidationContextFileTrust("vel");;
                                                                                            sds = new VirtualGatewayTlsValidationContextSdsTrust("harum");;
                                                                                        }};) {{
                                                                            subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                add("rerum"),
                                                                                                                add("occaecati"),
                                                                                                            }}););;
                                                                        }};) {{
                                                            certificate = new VirtualGatewayClientTlsCertificate() {{
                                                                file = new VirtualGatewayListenerTlsFileCertificate("minima", "distinctio");;
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("eligendi");;
                                                            }};;
                                                            enforce = false;
                                                            ports = new Long[]{{
                                                                add(636061L),
                                                            }};
                                                        }};;
                                                    }};;
                                                }};;
                                                listeners = new org.openapis.openapi.models.shared.VirtualGatewayListener[]{{
                                                    add(new VirtualGatewayListener(                new VirtualGatewayPortMapping(401259L, VirtualGatewayPortProtocolEnum.HTTP2);) {{
                                                        connectionPool = new VirtualGatewayConnectionPool() {{
                                                            grpc = new VirtualGatewayGrpcConnectionPool(766964L) {{
                                                                maxRequests = 240020L;
                                                            }};
                                                            http = new VirtualGatewayHttpConnectionPool(796392L) {{
                                                                maxConnections = 160538L;
                                                                maxPendingRequests = 9766L;
                                                            }};
                                                            http2 = new VirtualGatewayHttp2ConnectionPool(959167L) {{
                                                                maxRequests = 308286L;
                                                            }};
                                                        }};
                                                        healthCheck = new VirtualGatewayHealthCheckPolicy(457223L, 97468L, VirtualGatewayPortProtocolEnum.GRPC, 621679L, 575751L) {{
                                                            healthyThreshold = 232865L;
                                                            intervalMillis = 458139L;
                                                            path = "blanditiis";
                                                            port = 590984L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                            timeoutMillis = 857723L;
                                                            unhealthyThreshold = 557811L;
                                                        }};
                                                        portMapping = new VirtualGatewayPortMapping(157632L, VirtualGatewayPortProtocolEnum.GRPC) {{
                                                            port = 863023L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                        }};
                                                        tls = new VirtualGatewayListenerTls(                new VirtualGatewayListenerTlsCertificate() {{
                                                                            acm = new VirtualGatewayListenerTlsAcmCertificate("nisi");;
                                                                            file = new VirtualGatewayListenerTlsFileCertificate("aut", "voluptatum");;
                                                                            sds = new VirtualGatewayListenerTlsSdsCertificate("qui");;
                                                                        }};, VirtualGatewayListenerTlsModeEnum.DISABLED) {{
                                                            certificate = new VirtualGatewayListenerTlsCertificate() {{
                                                                acm = new VirtualGatewayListenerTlsAcmCertificate("facere") {{
                                                                    certificateArn = "asperiores";
                                                                }};
                                                                file = new VirtualGatewayListenerTlsFileCertificate("quasi", "similique") {{
                                                                    certificateChain = "veritatis";
                                                                    privateKey = "consequuntur";
                                                                }};
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("aliquid") {{
                                                                    secretName = "culpa";
                                                                }};
                                                            }};
                                                            mode = VirtualGatewayListenerTlsModeEnum.DISABLED;
                                                            validation = new VirtualGatewayListenerTlsValidationContext(                new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                                file = new VirtualGatewayTlsValidationContextFileTrust("reprehenderit");;
                                                                                sds = new VirtualGatewayTlsValidationContextSdsTrust("ullam");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("illum"),
                                                                                                    add("soluta"),
                                                                                                    add("accusantium"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("in"),
                                                                                        add("eius"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("earum"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                    file = new VirtualGatewayTlsValidationContextFileTrust("sapiente") {{
                                                                        certificateChain = "aliquam";
                                                                    }};
                                                                    sds = new VirtualGatewayTlsValidationContextSdsTrust("ullam") {{
                                                                        secretName = "dicta";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new VirtualGatewayListener(                new VirtualGatewayPortMapping(368102L, VirtualGatewayPortProtocolEnum.HTTP);) {{
                                                        connectionPool = new VirtualGatewayConnectionPool() {{
                                                            grpc = new VirtualGatewayGrpcConnectionPool(680270L) {{
                                                                maxRequests = 929292L;
                                                            }};
                                                            http = new VirtualGatewayHttpConnectionPool(945302L) {{
                                                                maxConnections = 99615L;
                                                                maxPendingRequests = 609178L;
                                                            }};
                                                            http2 = new VirtualGatewayHttp2ConnectionPool(869489L) {{
                                                                maxRequests = 98478L;
                                                            }};
                                                        }};
                                                        healthCheck = new VirtualGatewayHealthCheckPolicy(614465L, 839513L, VirtualGatewayPortProtocolEnum.HTTP, 522371L, 15606L) {{
                                                            healthyThreshold = 92027L;
                                                            intervalMillis = 454162L;
                                                            path = "ipsa";
                                                            port = 326701L;
                                                            protocol = VirtualGatewayPortProtocolEnum.HTTP;
                                                            timeoutMillis = 232744L;
                                                            unhealthyThreshold = 237173L;
                                                        }};
                                                        portMapping = new VirtualGatewayPortMapping(649832L, VirtualGatewayPortProtocolEnum.HTTP) {{
                                                            port = 513075L;
                                                            protocol = VirtualGatewayPortProtocolEnum.HTTP2;
                                                        }};
                                                        tls = new VirtualGatewayListenerTls(                new VirtualGatewayListenerTlsCertificate() {{
                                                                            acm = new VirtualGatewayListenerTlsAcmCertificate("officia");;
                                                                            file = new VirtualGatewayListenerTlsFileCertificate("maxime", "dignissimos");;
                                                                            sds = new VirtualGatewayListenerTlsSdsCertificate("officia");;
                                                                        }};, VirtualGatewayListenerTlsModeEnum.DISABLED) {{
                                                            certificate = new VirtualGatewayListenerTlsCertificate() {{
                                                                acm = new VirtualGatewayListenerTlsAcmCertificate("non") {{
                                                                    certificateArn = "corrupti";
                                                                }};
                                                                file = new VirtualGatewayListenerTlsFileCertificate("occaecati", "numquam") {{
                                                                    certificateChain = "voluptatem";
                                                                    privateKey = "dolor";
                                                                }};
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("explicabo") {{
                                                                    secretName = "impedit";
                                                                }};
                                                            }};
                                                            mode = VirtualGatewayListenerTlsModeEnum.PERMISSIVE;
                                                            validation = new VirtualGatewayListenerTlsValidationContext(                new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                                file = new VirtualGatewayTlsValidationContextFileTrust("consequuntur");;
                                                                                sds = new VirtualGatewayTlsValidationContextSdsTrust("repellendus");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("velit"),
                                                                                                    add("voluptatibus"),
                                                                                                    add("voluptas"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("maiores"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("dignissimos"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                    file = new VirtualGatewayTlsValidationContextFileTrust("aperiam") {{
                                                                        certificateChain = "asperiores";
                                                                    }};
                                                                    sds = new VirtualGatewayTlsValidationContextSdsTrust("quaerat") {{
                                                                        secretName = "ea";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new VirtualGatewayListener(                new VirtualGatewayPortMapping(689768L, VirtualGatewayPortProtocolEnum.HTTP2);) {{
                                                        connectionPool = new VirtualGatewayConnectionPool() {{
                                                            grpc = new VirtualGatewayGrpcConnectionPool(783235L) {{
                                                                maxRequests = 312753L;
                                                            }};
                                                            http = new VirtualGatewayHttpConnectionPool(70447L) {{
                                                                maxConnections = 801836L;
                                                                maxPendingRequests = 288398L;
                                                            }};
                                                            http2 = new VirtualGatewayHttp2ConnectionPool(683573L) {{
                                                                maxRequests = 241418L;
                                                            }};
                                                        }};
                                                        healthCheck = new VirtualGatewayHealthCheckPolicy(853940L, 424089L, VirtualGatewayPortProtocolEnum.HTTP2, 554688L, 427834L) {{
                                                            healthyThreshold = 662505L;
                                                            intervalMillis = 380729L;
                                                            path = "velit";
                                                            port = 633931L;
                                                            protocol = VirtualGatewayPortProtocolEnum.HTTP2;
                                                            timeoutMillis = 926880L;
                                                            unhealthyThreshold = 517309L;
                                                        }};
                                                        portMapping = new VirtualGatewayPortMapping(706575L, VirtualGatewayPortProtocolEnum.GRPC) {{
                                                            port = 287051L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                        }};
                                                        tls = new VirtualGatewayListenerTls(                new VirtualGatewayListenerTlsCertificate() {{
                                                                            acm = new VirtualGatewayListenerTlsAcmCertificate("dignissimos");;
                                                                            file = new VirtualGatewayListenerTlsFileCertificate("a", "debitis");;
                                                                            sds = new VirtualGatewayListenerTlsSdsCertificate("consectetur");;
                                                                        }};, VirtualGatewayListenerTlsModeEnum.PERMISSIVE) {{
                                                            certificate = new VirtualGatewayListenerTlsCertificate() {{
                                                                acm = new VirtualGatewayListenerTlsAcmCertificate("in") {{
                                                                    certificateArn = "commodi";
                                                                }};
                                                                file = new VirtualGatewayListenerTlsFileCertificate("assumenda", "nemo") {{
                                                                    certificateChain = "corporis";
                                                                    privateKey = "reiciendis";
                                                                }};
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("aliquid") {{
                                                                    secretName = "recusandae";
                                                                }};
                                                            }};
                                                            mode = VirtualGatewayListenerTlsModeEnum.STRICT;
                                                            validation = new VirtualGatewayListenerTlsValidationContext(                new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                                file = new VirtualGatewayTlsValidationContextFileTrust("amet");;
                                                                                sds = new VirtualGatewayTlsValidationContextSdsTrust("beatae");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("quidem"),
                                                                                                    add("saepe"),
                                                                                                    add("necessitatibus"),
                                                                                                    add("dolore"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("facere"),
                                                                                        add("numquam"),
                                                                                        add("doloribus"),
                                                                                        add("suscipit"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("consectetur"),
                                                                            add("in"),
                                                                            add("exercitationem"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                    file = new VirtualGatewayTlsValidationContextFileTrust("asperiores") {{
                                                                        certificateChain = "sunt";
                                                                    }};
                                                                    sds = new VirtualGatewayTlsValidationContextSdsTrust("non") {{
                                                                        secretName = "adipisci";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                logging = new VirtualGatewayLogging() {{
                                                    accessLog = new VirtualGatewayAccessLog() {{
                                                        file = new VirtualGatewayFileAccessLog("ipsa") {{
                                                            format = new LoggingFormat() {{
                                                                json = new org.openapis.openapi.models.shared.JsonFormatRef[]{{
                                                                    add(new JsonFormatRef("accusamus", "similique") {{
                                                                        key = "libero";
                                                                        value = "vitae";
                                                                    }}),
                                                                    add(new JsonFormatRef("voluptas", "voluptas") {{
                                                                        key = "tempora";
                                                                        value = "aspernatur";
                                                                    }}),
                                                                    add(new JsonFormatRef("nobis", "dolorum") {{
                                                                        key = "voluptas";
                                                                        value = "minima";
                                                                    }}),
                                                                    add(new JsonFormatRef("dolores", "blanditiis") {{
                                                                        key = "adipisci";
                                                                        value = "minus";
                                                                    }}),
                                                                }};
                                                                text = "in";
                                                            }};;
                                                        }};;
                                                    }};;
                                                }};;
                                            }};, "dolore") {{
                                clientToken = "aliquam";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("adipisci", "cum") {{
                                        key = "temporibus";
                                        value = "ullam";
                                    }}),
                                    add(new TagRef("hic", "nesciunt") {{
                                        key = "blanditiis";
                                        value = "quas";
                                    }}),
                                    add(new TagRef("pariatur", "totam") {{
                                        key = "culpa";
                                        value = "corrupti";
                                    }}),
                                    add(new TagRef("nobis", "sit") {{
                                        key = "hic";
                                        value = "exercitationem";
                                    }}),
                                }};
                            }};, "rerum") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "explicabo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "expedita";
                meshOwner = "ab";
            }};            

            CreateVirtualGatewayResponse res = sdk.sdk.createVirtualGateway(req);

            if (res.createVirtualGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVirtualNode

<p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualNodeRequest;
import org.openapis.openapi.models.operations.CreateVirtualNodeRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualNodeRequestBodySpec;
import org.openapis.openapi.models.operations.CreateVirtualNodeResponse;
import org.openapis.openapi.models.shared.AccessLog;
import org.openapis.openapi.models.shared.AwsCloudMapInstanceAttribute;
import org.openapis.openapi.models.shared.AwsCloudMapServiceDiscovery;
import org.openapis.openapi.models.shared.Backend;
import org.openapis.openapi.models.shared.BackendDefaults;
import org.openapis.openapi.models.shared.ClientPolicy;
import org.openapis.openapi.models.shared.ClientPolicyTls;
import org.openapis.openapi.models.shared.ClientTlsCertificate;
import org.openapis.openapi.models.shared.DnsResponseTypeEnum;
import org.openapis.openapi.models.shared.DnsServiceDiscovery;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.DurationUnitEnum;
import org.openapis.openapi.models.shared.FileAccessLog;
import org.openapis.openapi.models.shared.GrpcTimeout;
import org.openapis.openapi.models.shared.HealthCheckPolicy;
import org.openapis.openapi.models.shared.HttpTimeout;
import org.openapis.openapi.models.shared.IpPreferenceEnum;
import org.openapis.openapi.models.shared.JsonFormatRef;
import org.openapis.openapi.models.shared.Listener;
import org.openapis.openapi.models.shared.ListenerTimeout;
import org.openapis.openapi.models.shared.ListenerTls;
import org.openapis.openapi.models.shared.ListenerTlsAcmCertificate;
import org.openapis.openapi.models.shared.ListenerTlsCertificate;
import org.openapis.openapi.models.shared.ListenerTlsFileCertificate;
import org.openapis.openapi.models.shared.ListenerTlsModeEnum;
import org.openapis.openapi.models.shared.ListenerTlsSdsCertificate;
import org.openapis.openapi.models.shared.ListenerTlsValidationContext;
import org.openapis.openapi.models.shared.ListenerTlsValidationContextTrust;
import org.openapis.openapi.models.shared.Logging;
import org.openapis.openapi.models.shared.LoggingFormat;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.PortProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceDiscovery;
import org.openapis.openapi.models.shared.SubjectAlternativeNameMatchers;
import org.openapis.openapi.models.shared.SubjectAlternativeNames;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.TcpTimeout;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextAcmTrust;
import org.openapis.openapi.models.shared.TlsValidationContextFileTrust;
import org.openapis.openapi.models.shared.TlsValidationContextSdsTrust;
import org.openapis.openapi.models.shared.TlsValidationContextTrust;
import org.openapis.openapi.models.shared.VirtualNodeConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeGrpcConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeHttp2ConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeHttpConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeTcpConnectionPool;
import org.openapis.openapi.models.shared.VirtualServiceBackend;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualNodeRequest req = new CreateVirtualNodeRequest(                new CreateVirtualNodeRequestBody(                new CreateVirtualNodeRequestBodySpec() {{
                                                backendDefaults = new BackendDefaults() {{
                                                    clientPolicy = new ClientPolicy() {{
                                                        tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                add("laborum"),
                                                                                                                add("sed"),
                                                                                                            }});;
                                                                                            file = new TlsValidationContextFileTrust("in");;
                                                                                            sds = new TlsValidationContextSdsTrust("commodi");;
                                                                                        }};) {{
                                                                            subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                add("explicabo"),
                                                                                                                add("voluptas"),
                                                                                                                add("unde"),
                                                                                                            }}););;
                                                                        }};) {{
                                                            certificate = new ClientTlsCertificate() {{
                                                                file = new ListenerTlsFileCertificate("architecto", "suscipit");;
                                                                sds = new ListenerTlsSdsCertificate("sapiente");;
                                                            }};;
                                                            enforce = false;
                                                            ports = new Long[]{{
                                                                add(72434L),
                                                                add(967795L),
                                                                add(19300L),
                                                                add(546885L),
                                                            }};
                                                        }};;
                                                    }};;
                                                }};;
                                                backends = new org.openapis.openapi.models.shared.Backend[]{{
                                                    add(new Backend() {{
                                                        virtualService = new VirtualServiceBackend("error") {{
                                                            clientPolicy = new ClientPolicy() {{
                                                                tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                                    acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                        add("officiis"),
                                                                                                                        add("beatae"),
                                                                                                                    }});;
                                                                                                    file = new TlsValidationContextFileTrust("laudantium");;
                                                                                                    sds = new TlsValidationContextSdsTrust("exercitationem");;
                                                                                                }};) {{
                                                                                    subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                        add("cum"),
                                                                                                                        add("laboriosam"),
                                                                                                                        add("dolorum"),
                                                                                                                    }}););;
                                                                                }};) {{
                                                                    certificate = new ClientTlsCertificate() {{
                                                                        file = new ListenerTlsFileCertificate("provident", "eius") {{
                                                                            certificateChain = "incidunt";
                                                                            privateKey = "sed";
                                                                        }};
                                                                        sds = new ListenerTlsSdsCertificate("ipsum") {{
                                                                            secretName = "necessitatibus";
                                                                        }};
                                                                    }};
                                                                    enforce = false;
                                                                    ports = new Long[]{{
                                                                        add(579912L),
                                                                        add(552078L),
                                                                    }};
                                                                    validation = new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                        acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                            add("nulla"),
                                                                                                            add("magni"),
                                                                                                            add("aperiam"),
                                                                                                            add("saepe"),
                                                                                                        }});;
                                                                                        file = new TlsValidationContextFileTrust("numquam");;
                                                                                        sds = new TlsValidationContextSdsTrust("veniam");;
                                                                                    }};) {{
                                                                        subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                            add("praesentium"),
                                                                                                            add("facilis"),
                                                                                                            add("quaerat"),
                                                                                                            add("incidunt"),
                                                                                                        }});) {{
                                                                            match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                add("sit"),
                                                                                                add("non"),
                                                                                            }}) {{
                                                                                exact = new String[]{{
                                                                                    add("tempora"),
                                                                                    add("tempora"),
                                                                                    add("voluptate"),
                                                                                    add("reiciendis"),
                                                                                }};
                                                                            }};
                                                                        }};
                                                                        trust = new TlsValidationContextTrust() {{
                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                add("nobis"),
                                                                                            }}) {{
                                                                                certificateAuthorityArns = new String[]{{
                                                                                    add("debitis"),
                                                                                    add("rem"),
                                                                                }};
                                                                            }};
                                                                            file = new TlsValidationContextFileTrust("veniam") {{
                                                                                certificateChain = "error";
                                                                            }};
                                                                            sds = new TlsValidationContextSdsTrust("recusandae") {{
                                                                                secretName = "minima";
                                                                            }};
                                                                        }};
                                                                    }};
                                                                }};
                                                            }};
                                                            virtualServiceName = "voluptatum";
                                                        }};
                                                    }}),
                                                    add(new Backend() {{
                                                        virtualService = new VirtualServiceBackend("labore") {{
                                                            clientPolicy = new ClientPolicy() {{
                                                                tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                                    acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                        add("consequatur"),
                                                                                                                        add("incidunt"),
                                                                                                                        add("reiciendis"),
                                                                                                                    }});;
                                                                                                    file = new TlsValidationContextFileTrust("dolorem");;
                                                                                                    sds = new TlsValidationContextSdsTrust("harum");;
                                                                                                }};) {{
                                                                                    subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                        add("architecto"),
                                                                                                                    }}););;
                                                                                }};) {{
                                                                    certificate = new ClientTlsCertificate() {{
                                                                        file = new ListenerTlsFileCertificate("debitis", "neque") {{
                                                                            certificateChain = "hic";
                                                                            privateKey = "expedita";
                                                                        }};
                                                                        sds = new ListenerTlsSdsCertificate("nostrum") {{
                                                                            secretName = "dolorum";
                                                                        }};
                                                                    }};
                                                                    enforce = false;
                                                                    ports = new Long[]{{
                                                                        add(676243L),
                                                                        add(548361L),
                                                                        add(879235L),
                                                                    }};
                                                                    validation = new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                        acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                            add("vel"),
                                                                                                        }});;
                                                                                        file = new TlsValidationContextFileTrust("nostrum");;
                                                                                        sds = new TlsValidationContextSdsTrust("saepe");;
                                                                                    }};) {{
                                                                        subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                            add("expedita"),
                                                                                                            add("magnam"),
                                                                                                            add("consequatur"),
                                                                                                        }});) {{
                                                                            match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                add("fugiat"),
                                                                                                add("voluptatem"),
                                                                                            }}) {{
                                                                                exact = new String[]{{
                                                                                    add("atque"),
                                                                                    add("fugit"),
                                                                                }};
                                                                            }};
                                                                        }};
                                                                        trust = new TlsValidationContextTrust() {{
                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                add("quas"),
                                                                                                add("repudiandae"),
                                                                                                add("corporis"),
                                                                                            }}) {{
                                                                                certificateAuthorityArns = new String[]{{
                                                                                    add("ipsam"),
                                                                                    add("sit"),
                                                                                }};
                                                                            }};
                                                                            file = new TlsValidationContextFileTrust("blanditiis") {{
                                                                                certificateChain = "et";
                                                                            }};
                                                                            sds = new TlsValidationContextSdsTrust("sed") {{
                                                                                secretName = "ex";
                                                                            }};
                                                                        }};
                                                                    }};
                                                                }};
                                                            }};
                                                            virtualServiceName = "occaecati";
                                                        }};
                                                    }}),
                                                    add(new Backend() {{
                                                        virtualService = new VirtualServiceBackend("minima") {{
                                                            clientPolicy = new ClientPolicy() {{
                                                                tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                                    acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                        add("et"),
                                                                                                                        add("esse"),
                                                                                                                        add("amet"),
                                                                                                                        add("assumenda"),
                                                                                                                    }});;
                                                                                                    file = new TlsValidationContextFileTrust("ea");;
                                                                                                    sds = new TlsValidationContextSdsTrust("atque");;
                                                                                                }};) {{
                                                                                    subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                        add("officiis"),
                                                                                                                        add("officiis"),
                                                                                                                        add("accusamus"),
                                                                                                                    }}););;
                                                                                }};) {{
                                                                    certificate = new ClientTlsCertificate() {{
                                                                        file = new ListenerTlsFileCertificate("laborum", "nam") {{
                                                                            certificateChain = "quidem";
                                                                            privateKey = "atque";
                                                                        }};
                                                                        sds = new ListenerTlsSdsCertificate("laboriosam") {{
                                                                            secretName = "tenetur";
                                                                        }};
                                                                    }};
                                                                    enforce = false;
                                                                    ports = new Long[]{{
                                                                        add(227084L),
                                                                    }};
                                                                    validation = new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                        acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                            add("asperiores"),
                                                                                                            add("totam"),
                                                                                                        }});;
                                                                                        file = new TlsValidationContextFileTrust("suscipit");;
                                                                                        sds = new TlsValidationContextSdsTrust("quidem");;
                                                                                    }};) {{
                                                                        subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                            add("est"),
                                                                                                        }});) {{
                                                                            match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                add("repellendus"),
                                                                                                add("delectus"),
                                                                                                add("voluptates"),
                                                                                            }}) {{
                                                                                exact = new String[]{{
                                                                                    add("voluptate"),
                                                                                    add("unde"),
                                                                                    add("reiciendis"),
                                                                                }};
                                                                            }};
                                                                        }};
                                                                        trust = new TlsValidationContextTrust() {{
                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                add("mollitia"),
                                                                                                add("veniam"),
                                                                                                add("voluptatem"),
                                                                                            }}) {{
                                                                                certificateAuthorityArns = new String[]{{
                                                                                    add("reprehenderit"),
                                                                                    add("facere"),
                                                                                    add("fuga"),
                                                                                }};
                                                                            }};
                                                                            file = new TlsValidationContextFileTrust("repudiandae") {{
                                                                                certificateChain = "quisquam";
                                                                            }};
                                                                            sds = new TlsValidationContextSdsTrust("atque") {{
                                                                                secretName = "quasi";
                                                                            }};
                                                                        }};
                                                                    }};
                                                                }};
                                                            }};
                                                            virtualServiceName = "natus";
                                                        }};
                                                    }}),
                                                    add(new Backend() {{
                                                        virtualService = new VirtualServiceBackend("reprehenderit") {{
                                                            clientPolicy = new ClientPolicy() {{
                                                                tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                                    acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                        add("adipisci"),
                                                                                                                        add("eveniet"),
                                                                                                                    }});;
                                                                                                    file = new TlsValidationContextFileTrust("occaecati");;
                                                                                                    sds = new TlsValidationContextSdsTrust("consequuntur");;
                                                                                                }};) {{
                                                                                    subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                        add("id"),
                                                                                                                    }}););;
                                                                                }};) {{
                                                                    certificate = new ClientTlsCertificate() {{
                                                                        file = new ListenerTlsFileCertificate("maiores", "corrupti") {{
                                                                            certificateChain = "aspernatur";
                                                                            privateKey = "ex";
                                                                        }};
                                                                        sds = new ListenerTlsSdsCertificate("error") {{
                                                                            secretName = "at";
                                                                        }};
                                                                    }};
                                                                    enforce = false;
                                                                    ports = new Long[]{{
                                                                        add(379356L),
                                                                        add(922348L),
                                                                        add(542129L),
                                                                    }};
                                                                    validation = new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                        acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                            add("occaecati"),
                                                                                                        }});;
                                                                                        file = new TlsValidationContextFileTrust("officiis");;
                                                                                        sds = new TlsValidationContextSdsTrust("perspiciatis");;
                                                                                    }};) {{
                                                                        subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                            add("accusantium"),
                                                                                                        }});) {{
                                                                            match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                add("labore"),
                                                                                                add("reiciendis"),
                                                                                                add("doloremque"),
                                                                                                add("repudiandae"),
                                                                                            }}) {{
                                                                                exact = new String[]{{
                                                                                    add("sunt"),
                                                                                    add("recusandae"),
                                                                                    add("dolorum"),
                                                                                }};
                                                                            }};
                                                                        }};
                                                                        trust = new TlsValidationContextTrust() {{
                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                add("laboriosam"),
                                                                                                add("velit"),
                                                                                            }}) {{
                                                                                certificateAuthorityArns = new String[]{{
                                                                                    add("dolores"),
                                                                                }};
                                                                            }};
                                                                            file = new TlsValidationContextFileTrust("molestias") {{
                                                                                certificateChain = "a";
                                                                            }};
                                                                            sds = new TlsValidationContextSdsTrust("saepe") {{
                                                                                secretName = "magnam";
                                                                            }};
                                                                        }};
                                                                    }};
                                                                }};
                                                            }};
                                                            virtualServiceName = "quis";
                                                        }};
                                                    }}),
                                                }};
                                                listeners = new org.openapis.openapi.models.shared.Listener[]{{
                                                    add(new Listener(                new PortMapping(637583L, PortProtocolEnum.HTTP2);) {{
                                                        connectionPool = new VirtualNodeConnectionPool() {{
                                                            grpc = new VirtualNodeGrpcConnectionPool(361306L) {{
                                                                maxRequests = 76486L;
                                                            }};
                                                            http = new VirtualNodeHttpConnectionPool(247399L) {{
                                                                maxConnections = 696463L;
                                                                maxPendingRequests = 910994L;
                                                            }};
                                                            http2 = new VirtualNodeHttp2ConnectionPool(39615L) {{
                                                                maxRequests = 878493L;
                                                            }};
                                                            tcp = new VirtualNodeTcpConnectionPool(59944L) {{
                                                                maxConnections = 434156L;
                                                            }};
                                                        }};
                                                        healthCheck = new HealthCheckPolicy(898063L, 187552L, PortProtocolEnum.HTTP2, 715208L, 528940L) {{
                                                            healthyThreshold = 517612L;
                                                            intervalMillis = 61078L;
                                                            path = "molestiae";
                                                            port = 907733L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                            timeoutMillis = 739884L;
                                                            unhealthyThreshold = 434761L;
                                                        }};
                                                        outlierDetection = new OutlierDetection(                new Duration() {{
                                                                            unit = DurationUnitEnum.MS;
                                                                            value = 470649L;
                                                                        }};,                 new Duration() {{
                                                                            unit = DurationUnitEnum.MS;
                                                                            value = 378245L;
                                                                        }};, 5189L, 979527L) {{
                                                            baseEjectionDuration = new Duration() {{
                                                                unit = DurationUnitEnum.MS;
                                                                value = 304446L;
                                                            }};
                                                            interval = new Duration() {{
                                                                unit = DurationUnitEnum.S;
                                                                value = 997963L;
                                                            }};
                                                            maxEjectionPercent = 3099L;
                                                            maxServerErrors = 362189L;
                                                        }};
                                                        portMapping = new PortMapping(663866L, PortProtocolEnum.TCP) {{
                                                            port = 970222L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                        timeout = new ListenerTimeout() {{
                                                            grpc = new GrpcTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 680349L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 63207L;
                                                                }};
                                                            }};
                                                            http = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 607249L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 477646L;
                                                                }};
                                                            }};
                                                            http2 = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 284000L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 238413L;
                                                                }};
                                                            }};
                                                            tcp = new TcpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 514513L;
                                                                }};
                                                            }};
                                                        }};
                                                        tls = new ListenerTls(                new ListenerTlsCertificate() {{
                                                                            acm = new ListenerTlsAcmCertificate("doloribus");;
                                                                            file = new ListenerTlsFileCertificate("ullam", "in");;
                                                                            sds = new ListenerTlsSdsCertificate("nam");;
                                                                        }};, ListenerTlsModeEnum.DISABLED) {{
                                                            certificate = new ListenerTlsCertificate() {{
                                                                acm = new ListenerTlsAcmCertificate("nemo") {{
                                                                    certificateArn = "eum";
                                                                }};
                                                                file = new ListenerTlsFileCertificate("provident", "quis") {{
                                                                    certificateChain = "recusandae";
                                                                    privateKey = "esse";
                                                                }};
                                                                sds = new ListenerTlsSdsCertificate("reiciendis") {{
                                                                    secretName = "eum";
                                                                }};
                                                            }};
                                                            mode = ListenerTlsModeEnum.PERMISSIVE;
                                                            validation = new ListenerTlsValidationContext(                new ListenerTlsValidationContextTrust() {{
                                                                                file = new TlsValidationContextFileTrust("accusantium");;
                                                                                sds = new TlsValidationContextSdsTrust("repellat");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("mollitia"),
                                                                                                    add("provident"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("animi"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("ullam"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new ListenerTlsValidationContextTrust() {{
                                                                    file = new TlsValidationContextFileTrust("animi") {{
                                                                        certificateChain = "possimus";
                                                                    }};
                                                                    sds = new TlsValidationContextSdsTrust("aliquid") {{
                                                                        secretName = "ex";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new Listener(                new PortMapping(458259L, PortProtocolEnum.TCP);) {{
                                                        connectionPool = new VirtualNodeConnectionPool() {{
                                                            grpc = new VirtualNodeGrpcConnectionPool(266697L) {{
                                                                maxRequests = 813054L;
                                                            }};
                                                            http = new VirtualNodeHttpConnectionPool(889794L) {{
                                                                maxConnections = 976226L;
                                                                maxPendingRequests = 564064L;
                                                            }};
                                                            http2 = new VirtualNodeHttp2ConnectionPool(764562L) {{
                                                                maxRequests = 956933L;
                                                            }};
                                                            tcp = new VirtualNodeTcpConnectionPool(698249L) {{
                                                                maxConnections = 113486L;
                                                            }};
                                                        }};
                                                        healthCheck = new HealthCheckPolicy(241901L, 137251L, PortProtocolEnum.TCP, 260628L, 521996L) {{
                                                            healthyThreshold = 272229L;
                                                            intervalMillis = 335498L;
                                                            path = "inventore";
                                                            port = 147685L;
                                                            protocol = PortProtocolEnum.GRPC;
                                                            timeoutMillis = 62636L;
                                                            unhealthyThreshold = 21688L;
                                                        }};
                                                        outlierDetection = new OutlierDetection(                new Duration() {{
                                                                            unit = DurationUnitEnum.S;
                                                                            value = 107004L;
                                                                        }};,                 new Duration() {{
                                                                            unit = DurationUnitEnum.MS;
                                                                            value = 589695L;
                                                                        }};, 936469L, 745398L) {{
                                                            baseEjectionDuration = new Duration() {{
                                                                unit = DurationUnitEnum.MS;
                                                                value = 773084L;
                                                            }};
                                                            interval = new Duration() {{
                                                                unit = DurationUnitEnum.S;
                                                                value = 958741L;
                                                            }};
                                                            maxEjectionPercent = 433279L;
                                                            maxServerErrors = 117320L;
                                                        }};
                                                        portMapping = new PortMapping(52508L, PortProtocolEnum.GRPC) {{
                                                            port = 940782L;
                                                            protocol = PortProtocolEnum.GRPC;
                                                        }};
                                                        timeout = new ListenerTimeout() {{
                                                            grpc = new GrpcTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 983427L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 399802L;
                                                                }};
                                                            }};
                                                            http = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 380335L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 147808L;
                                                                }};
                                                            }};
                                                            http2 = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 684935L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 656762L;
                                                                }};
                                                            }};
                                                            tcp = new TcpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 862063L;
                                                                }};
                                                            }};
                                                        }};
                                                        tls = new ListenerTls(                new ListenerTlsCertificate() {{
                                                                            acm = new ListenerTlsAcmCertificate("fugiat");;
                                                                            file = new ListenerTlsFileCertificate("doloremque", "dicta");;
                                                                            sds = new ListenerTlsSdsCertificate("odio");;
                                                                        }};, ListenerTlsModeEnum.STRICT) {{
                                                            certificate = new ListenerTlsCertificate() {{
                                                                acm = new ListenerTlsAcmCertificate("quasi") {{
                                                                    certificateArn = "consequatur";
                                                                }};
                                                                file = new ListenerTlsFileCertificate("natus", "occaecati") {{
                                                                    certificateChain = "et";
                                                                    privateKey = "ducimus";
                                                                }};
                                                                sds = new ListenerTlsSdsCertificate("adipisci") {{
                                                                    secretName = "suscipit";
                                                                }};
                                                            }};
                                                            mode = ListenerTlsModeEnum.STRICT;
                                                            validation = new ListenerTlsValidationContext(                new ListenerTlsValidationContextTrust() {{
                                                                                file = new TlsValidationContextFileTrust("vel");;
                                                                                sds = new TlsValidationContextSdsTrust("architecto");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("dicta"),
                                                                                                    add("iusto"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("necessitatibus"),
                                                                                        add("ipsa"),
                                                                                        add("tempora"),
                                                                                        add("nihil"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("doloribus"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new ListenerTlsValidationContextTrust() {{
                                                                    file = new TlsValidationContextFileTrust("praesentium") {{
                                                                        certificateChain = "esse";
                                                                    }};
                                                                    sds = new TlsValidationContextSdsTrust("reiciendis") {{
                                                                        secretName = "maiores";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new Listener(                new PortMapping(24944L, PortProtocolEnum.TCP);) {{
                                                        connectionPool = new VirtualNodeConnectionPool() {{
                                                            grpc = new VirtualNodeGrpcConnectionPool(399812L) {{
                                                                maxRequests = 235263L;
                                                            }};
                                                            http = new VirtualNodeHttpConnectionPool(123844L) {{
                                                                maxConnections = 58870L;
                                                                maxPendingRequests = 671384L;
                                                            }};
                                                            http2 = new VirtualNodeHttp2ConnectionPool(856756L) {{
                                                                maxRequests = 344718L;
                                                            }};
                                                            tcp = new VirtualNodeTcpConnectionPool(399667L) {{
                                                                maxConnections = 713767L;
                                                            }};
                                                        }};
                                                        healthCheck = new HealthCheckPolicy(661607L, 70042L, PortProtocolEnum.HTTP2, 822407L, 913992L) {{
                                                            healthyThreshold = 639187L;
                                                            intervalMillis = 381397L;
                                                            path = "aliquid";
                                                            port = 21973L;
                                                            protocol = PortProtocolEnum.TCP;
                                                            timeoutMillis = 374753L;
                                                            unhealthyThreshold = 614528L;
                                                        }};
                                                        outlierDetection = new OutlierDetection(                new Duration() {{
                                                                            unit = DurationUnitEnum.S;
                                                                            value = 833316L;
                                                                        }};,                 new Duration() {{
                                                                            unit = DurationUnitEnum.S;
                                                                            value = 775803L;
                                                                        }};, 405373L, 281153L) {{
                                                            baseEjectionDuration = new Duration() {{
                                                                unit = DurationUnitEnum.MS;
                                                                value = 671794L;
                                                            }};
                                                            interval = new Duration() {{
                                                                unit = DurationUnitEnum.MS;
                                                                value = 324083L;
                                                            }};
                                                            maxEjectionPercent = 536923L;
                                                            maxServerErrors = 316220L;
                                                        }};
                                                        portMapping = new PortMapping(29950L, PortProtocolEnum.HTTP2) {{
                                                            port = 321043L;
                                                            protocol = PortProtocolEnum.HTTP2;
                                                        }};
                                                        timeout = new ListenerTimeout() {{
                                                            grpc = new GrpcTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 399660L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 530860L;
                                                                }};
                                                            }};
                                                            http = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 85233L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 665678L;
                                                                }};
                                                            }};
                                                            http2 = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 29634L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 889288L;
                                                                }};
                                                            }};
                                                            tcp = new TcpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 682119L;
                                                                }};
                                                            }};
                                                        }};
                                                        tls = new ListenerTls(                new ListenerTlsCertificate() {{
                                                                            acm = new ListenerTlsAcmCertificate("veritatis");;
                                                                            file = new ListenerTlsFileCertificate("tempora", "dolor");;
                                                                            sds = new ListenerTlsSdsCertificate("consequatur");;
                                                                        }};, ListenerTlsModeEnum.STRICT) {{
                                                            certificate = new ListenerTlsCertificate() {{
                                                                acm = new ListenerTlsAcmCertificate("debitis") {{
                                                                    certificateArn = "pariatur";
                                                                }};
                                                                file = new ListenerTlsFileCertificate("deleniti", "earum") {{
                                                                    certificateChain = "voluptatem";
                                                                    privateKey = "alias";
                                                                }};
                                                                sds = new ListenerTlsSdsCertificate("sapiente") {{
                                                                    secretName = "ex";
                                                                }};
                                                            }};
                                                            mode = ListenerTlsModeEnum.PERMISSIVE;
                                                            validation = new ListenerTlsValidationContext(                new ListenerTlsValidationContextTrust() {{
                                                                                file = new TlsValidationContextFileTrust("inventore");;
                                                                                sds = new TlsValidationContextSdsTrust("deleniti");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("impedit"),
                                                                                                    add("quibusdam"),
                                                                                                    add("nam"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("illum"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("nemo"),
                                                                            add("asperiores"),
                                                                            add("ratione"),
                                                                            add("ullam"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new ListenerTlsValidationContextTrust() {{
                                                                    file = new TlsValidationContextFileTrust("culpa") {{
                                                                        certificateChain = "ipsam";
                                                                    }};
                                                                    sds = new TlsValidationContextSdsTrust("aliquam") {{
                                                                        secretName = "dolor";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                logging = new Logging() {{
                                                    accessLog = new AccessLog() {{
                                                        file = new FileAccessLog("fugit") {{
                                                            format = new LoggingFormat() {{
                                                                json = new org.openapis.openapi.models.shared.JsonFormatRef[]{{
                                                                    add(new JsonFormatRef("dolor", "fugiat") {{
                                                                        key = "laudantium";
                                                                        value = "quae";
                                                                    }}),
                                                                }};
                                                                text = "ipsam";
                                                            }};;
                                                        }};;
                                                    }};;
                                                }};;
                                                serviceDiscovery = new ServiceDiscovery() {{
                                                    awsCloudMap = new AwsCloudMapServiceDiscovery("consequuntur", "ipsa") {{
                                                        attributes = new org.openapis.openapi.models.shared.AwsCloudMapInstanceAttribute[]{{
                                                            add(new AwsCloudMapInstanceAttribute("officiis", "esse") {{
                                                                key = "eveniet";
                                                                value = "impedit";
                                                            }}),
                                                            add(new AwsCloudMapInstanceAttribute("veniam", "nesciunt") {{
                                                                key = "necessitatibus";
                                                                value = "sed";
                                                            }}),
                                                            add(new AwsCloudMapInstanceAttribute("vel", "voluptatum") {{
                                                                key = "expedita";
                                                                value = "eum";
                                                            }}),
                                                        }};
                                                        ipPreference = IpPreferenceEnum.I_PV4_PREFERRED;
                                                    }};;
                                                    dns = new DnsServiceDiscovery("exercitationem") {{
                                                        ipPreference = IpPreferenceEnum.I_PV6_PREFERRED;
                                                        responseType = DnsResponseTypeEnum.ENDPOINTS;
                                                    }};;
                                                }};;
                                            }};, "autem") {{
                                clientToken = "nobis";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("voluptatem", "exercitationem") {{
                                        key = "recusandae";
                                        value = "consequuntur";
                                    }}),
                                    add(new TagRef("nisi", "at") {{
                                        key = "necessitatibus";
                                        value = "quasi";
                                    }}),
                                }};
                            }};, "vero") {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "harum";
                xAmzCredential = "sequi";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "occaecati";
                meshOwner = "nemo";
            }};            

            CreateVirtualNodeResponse res = sdk.sdk.createVirtualNode(req);

            if (res.createVirtualNodeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVirtualRouter

<p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualRouterRequest;
import org.openapis.openapi.models.operations.CreateVirtualRouterRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualRouterRequestBodySpec;
import org.openapis.openapi.models.operations.CreateVirtualRouterResponse;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.PortProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.VirtualRouterListener;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualRouterRequest req = new CreateVirtualRouterRequest(                new CreateVirtualRouterRequestBody(                new CreateVirtualRouterRequestBodySpec() {{
                                                listeners = new org.openapis.openapi.models.shared.VirtualRouterListener[]{{
                                                    add(new VirtualRouterListener(                new PortMapping(551079L, PortProtocolEnum.TCP);) {{
                                                        portMapping = new PortMapping(254025L, PortProtocolEnum.TCP) {{
                                                            port = 642352L;
                                                            protocol = PortProtocolEnum.TCP;
                                                        }};
                                                    }}),
                                                    add(new VirtualRouterListener(                new PortMapping(514054L, PortProtocolEnum.TCP);) {{
                                                        portMapping = new PortMapping(200516L, PortProtocolEnum.HTTP2) {{
                                                            port = 131903L;
                                                            protocol = PortProtocolEnum.TCP;
                                                        }};
                                                    }}),
                                                    add(new VirtualRouterListener(                new PortMapping(395544L, PortProtocolEnum.HTTP);) {{
                                                        portMapping = new PortMapping(851854L, PortProtocolEnum.HTTP) {{
                                                            port = 97493L;
                                                            protocol = PortProtocolEnum.HTTP2;
                                                        }};
                                                    }}),
                                                }};
                                            }};, "consectetur") {{
                                clientToken = "aperiam";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("alias", "omnis") {{
                                        key = "reiciendis";
                                        value = "soluta";
                                    }}),
                                    add(new TagRef("iste", "magni") {{
                                        key = "eos";
                                        value = "occaecati";
                                    }}),
                                    add(new TagRef("accusamus", "voluptatibus") {{
                                        key = "inventore";
                                        value = "fuga";
                                    }}),
                                }};
                            }};, "distinctio") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "minima";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "temporibus";
                meshOwner = "quos";
            }};            

            CreateVirtualRouterResponse res = sdk.sdk.createVirtualRouter(req);

            if (res.createVirtualRouterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVirtualService

<p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualServiceRequest;
import org.openapis.openapi.models.operations.CreateVirtualServiceRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualServiceRequestBodySpec;
import org.openapis.openapi.models.operations.CreateVirtualServiceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.VirtualNodeServiceProvider;
import org.openapis.openapi.models.shared.VirtualRouterServiceProvider;
import org.openapis.openapi.models.shared.VirtualServiceProvider;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualServiceRequest req = new CreateVirtualServiceRequest(                new CreateVirtualServiceRequestBody(                new CreateVirtualServiceRequestBodySpec() {{
                                                provider = new VirtualServiceProvider() {{
                                                    virtualNode = new VirtualNodeServiceProvider("itaque");;
                                                    virtualRouter = new VirtualRouterServiceProvider("commodi");;
                                                }};;
                                            }};, "totam") {{
                                clientToken = "earum";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("voluptatem", "ipsam") {{
                                        key = "nam";
                                        value = "vero";
                                    }}),
                                    add(new TagRef("quasi", "non") {{
                                        key = "vel";
                                        value = "alias";
                                    }}),
                                }};
                            }};, "maiores") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "sint";
                xAmzCredential = "nulla";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "esse";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "reprehenderit";
                meshOwner = "est";
            }};            

            CreateVirtualServiceResponse res = sdk.sdk.createVirtualService(req);

            if (res.createVirtualServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGatewayRoute

Deletes an existing gateway route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGatewayRouteRequest;
import org.openapis.openapi.models.operations.DeleteGatewayRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGatewayRouteRequest req = new DeleteGatewayRouteRequest("sint", "accusamus", "impedit") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "asperiores";
                xAmzDate = "ex";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "delectus";
                meshOwner = "quae";
            }};            

            DeleteGatewayRouteResponse res = sdk.sdk.deleteGatewayRoute(req);

            if (res.deleteGatewayRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMesh

<p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMeshRequest;
import org.openapis.openapi.models.operations.DeleteMeshResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMeshRequest req = new DeleteMeshRequest("fuga") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "velit";
                xAmzDate = "atque";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "magni";
            }};            

            DeleteMeshResponse res = sdk.sdk.deleteMesh(req);

            if (res.deleteMeshOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRoute

Deletes an existing route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRouteRequest;
import org.openapis.openapi.models.operations.DeleteRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteRequest req = new DeleteRouteRequest("repudiandae", "nam", "dolore") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "sequi";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "deleniti";
                meshOwner = "quibusdam";
            }};            

            DeleteRouteResponse res = sdk.sdk.deleteRoute(req);

            if (res.deleteRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVirtualGateway

Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVirtualGatewayRequest;
import org.openapis.openapi.models.operations.DeleteVirtualGatewayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualGatewayRequest req = new DeleteVirtualGatewayRequest("odit", "voluptatibus") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "quibusdam";
                xAmzDate = "inventore";
                xAmzSecurityToken = "facere";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "architecto";
                meshOwner = "voluptatibus";
            }};            

            DeleteVirtualGatewayResponse res = sdk.sdk.deleteVirtualGateway(req);

            if (res.deleteVirtualGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVirtualNode

<p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVirtualNodeRequest;
import org.openapis.openapi.models.operations.DeleteVirtualNodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualNodeRequest req = new DeleteVirtualNodeRequest("porro", "aliquam") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "illo";
                xAmzCredential = "accusantium";
                xAmzDate = "vel";
                xAmzSecurityToken = "ea";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "vero";
                meshOwner = "excepturi";
            }};            

            DeleteVirtualNodeResponse res = sdk.sdk.deleteVirtualNode(req);

            if (res.deleteVirtualNodeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVirtualRouter

<p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVirtualRouterRequest;
import org.openapis.openapi.models.operations.DeleteVirtualRouterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualRouterRequest req = new DeleteVirtualRouterRequest("velit", "ut") {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "earum";
                xAmzCredential = "dicta";
                xAmzDate = "impedit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "itaque";
                meshOwner = "alias";
            }};            

            DeleteVirtualRouterResponse res = sdk.sdk.deleteVirtualRouter(req);

            if (res.deleteVirtualRouterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVirtualService

Deletes an existing virtual service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVirtualServiceRequest;
import org.openapis.openapi.models.operations.DeleteVirtualServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualServiceRequest req = new DeleteVirtualServiceRequest("itaque", "velit") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "non";
                xAmzCredential = "dolor";
                xAmzDate = "iusto";
                xAmzSecurityToken = "sit";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "consequatur";
                meshOwner = "officia";
            }};            

            DeleteVirtualServiceResponse res = sdk.sdk.deleteVirtualService(req);

            if (res.deleteVirtualServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGatewayRoute

Describes an existing gateway route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGatewayRouteRequest;
import org.openapis.openapi.models.operations.DescribeGatewayRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGatewayRouteRequest req = new DescribeGatewayRouteRequest("ea", "quidem", "voluptas") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "perspiciatis";
                xAmzDate = "expedita";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "a";
                xAmzSignedHeaders = "voluptate";
                meshOwner = "ullam";
            }};            

            DescribeGatewayRouteResponse res = sdk.sdk.describeGatewayRoute(req);

            if (res.describeGatewayRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMesh

Describes an existing service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMeshRequest;
import org.openapis.openapi.models.operations.DescribeMeshResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMeshRequest req = new DescribeMeshRequest("necessitatibus") {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "ipsam";
                xAmzDate = "corporis";
                xAmzSecurityToken = "est";
                xAmzSignature = "error";
                xAmzSignedHeaders = "esse";
                meshOwner = "labore";
            }};            

            DescribeMeshResponse res = sdk.sdk.describeMesh(req);

            if (res.describeMeshOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRoute

Describes an existing route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRouteRequest;
import org.openapis.openapi.models.operations.DescribeRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRouteRequest req = new DescribeRouteRequest("vero", "consectetur", "vitae") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "ad";
                xAmzDate = "qui";
                xAmzSecurityToken = "iste";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "nemo";
                meshOwner = "soluta";
            }};            

            DescribeRouteResponse res = sdk.sdk.describeRoute(req);

            if (res.describeRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualGateway

Describes an existing virtual gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualGatewayRequest;
import org.openapis.openapi.models.operations.DescribeVirtualGatewayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualGatewayRequest req = new DescribeVirtualGatewayRequest("rem", "dolorum") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "alias";
                xAmzDate = "magni";
                xAmzSecurityToken = "vel";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quae";
                meshOwner = "modi";
            }};            

            DescribeVirtualGatewayResponse res = sdk.sdk.describeVirtualGateway(req);

            if (res.describeVirtualGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualNode

Describes an existing virtual node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualNodeRequest;
import org.openapis.openapi.models.operations.DescribeVirtualNodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualNodeRequest req = new DescribeVirtualNodeRequest("exercitationem", "itaque") {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "quia";
                meshOwner = "quia";
            }};            

            DescribeVirtualNodeResponse res = sdk.sdk.describeVirtualNode(req);

            if (res.describeVirtualNodeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualRouter

Describes an existing virtual router.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualRouterRequest;
import org.openapis.openapi.models.operations.DescribeVirtualRouterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualRouterRequest req = new DescribeVirtualRouterRequest("omnis", "libero") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "id";
                xAmzCredential = "libero";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "officia";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "placeat";
                meshOwner = "sit";
            }};            

            DescribeVirtualRouterResponse res = sdk.sdk.describeVirtualRouter(req);

            if (res.describeVirtualRouterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualService

Describes an existing virtual service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualServiceRequest;
import org.openapis.openapi.models.operations.DescribeVirtualServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualServiceRequest req = new DescribeVirtualServiceRequest("ipsa", "voluptates") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "totam";
                xAmzDate = "dolore";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "voluptatem";
                meshOwner = "autem";
            }};            

            DescribeVirtualServiceResponse res = sdk.sdk.describeVirtualService(req);

            if (res.describeVirtualServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGatewayRoutes

Returns a list of existing gateway routes that are associated to a virtual gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGatewayRoutesRequest;
import org.openapis.openapi.models.operations.ListGatewayRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGatewayRoutesRequest req = new ListGatewayRoutesRequest("dolores", "assumenda") {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "est";
                xAmzCredential = "facere";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "accusamus";
                limit = 896480L;
                meshOwner = "tempore";
                nextToken = "sint";
            }};            

            ListGatewayRoutesResponse res = sdk.sdk.listGatewayRoutes(req);

            if (res.listGatewayRoutesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMeshes

Returns a list of existing service meshes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMeshesRequest;
import org.openapis.openapi.models.operations.ListMeshesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMeshesRequest req = new ListMeshesRequest() {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "rerum";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "voluptatibus";
                limit = 737279L;
                nextToken = "at";
            }};            

            ListMeshesResponse res = sdk.sdk.listMeshes(req);

            if (res.listMeshesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoutes

Returns a list of existing routes in a service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoutesRequest;
import org.openapis.openapi.models.operations.ListRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRoutesRequest req = new ListRoutesRequest("quia", "quidem") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "accusantium";
                xAmzDate = "expedita";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "quibusdam";
                limit = 483518L;
                meshOwner = "praesentium";
                nextToken = "odit";
            }};            

            ListRoutesResponse res = sdk.sdk.listRoutes(req);

            if (res.listRoutesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags for an App Mesh resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("corporis") {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "earum";
                xAmzCredential = "adipisci";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "similique";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "quidem";
                limit = 339631L;
                nextToken = "beatae";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVirtualGateways

Returns a list of existing virtual gateways in a service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualGatewaysRequest;
import org.openapis.openapi.models.operations.ListVirtualGatewaysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualGatewaysRequest req = new ListVirtualGatewaysRequest("molestiae") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "fugit";
                xAmzDate = "numquam";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "at";
                limit = 637856L;
                meshOwner = "dignissimos";
                nextToken = "optio";
            }};            

            ListVirtualGatewaysResponse res = sdk.sdk.listVirtualGateways(req);

            if (res.listVirtualGatewaysOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVirtualNodes

Returns a list of existing virtual nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualNodesRequest;
import org.openapis.openapi.models.operations.ListVirtualNodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualNodesRequest req = new ListVirtualNodesRequest("corporis") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "voluptatum";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "minima";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "enim";
                limit = 204072L;
                meshOwner = "in";
                nextToken = "minus";
            }};            

            ListVirtualNodesResponse res = sdk.sdk.listVirtualNodes(req);

            if (res.listVirtualNodesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVirtualRouters

Returns a list of existing virtual routers in a service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualRoutersRequest;
import org.openapis.openapi.models.operations.ListVirtualRoutersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualRoutersRequest req = new ListVirtualRoutersRequest("modi") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "voluptates";
                xAmzDate = "maiores";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "libero";
                limit = 189753L;
                meshOwner = "labore";
                nextToken = "totam";
            }};            

            ListVirtualRoutersResponse res = sdk.sdk.listVirtualRouters(req);

            if (res.listVirtualRoutersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVirtualServices

Returns a list of existing virtual services in a service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualServicesRequest;
import org.openapis.openapi.models.operations.ListVirtualServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualServicesRequest req = new ListVirtualServicesRequest("voluptas") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "velit";
                xAmzCredential = "minus";
                xAmzDate = "fuga";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "est";
                xAmzSignedHeaders = "impedit";
                limit = 963741L;
                meshOwner = "tempore";
                nextToken = "vero";
            }};            

            ListVirtualServicesResponse res = sdk.sdk.listVirtualServices(req);

            if (res.listVirtualServicesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.TagRef[]{{
                                                add(new TagRef("reprehenderit", "aperiam") {{
                                                    key = "pariatur";
                                                    value = "nemo";
                                                }}),
                                                add(new TagRef("in", "ducimus") {{
                                                    key = "odio";
                                                    value = "minima";
                                                }}),
                                                add(new TagRef("error", "veritatis") {{
                                                    key = "excepturi";
                                                    value = "dolores";
                                                }}),
                                                add(new TagRef("pariatur", "itaque") {{
                                                    key = "ducimus";
                                                    value = "voluptate";
                                                }}),
                                            }});, "similique") {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "ex";
                xAmzCredential = "quaerat";
                xAmzDate = "commodi";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "quidem";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes specified tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody(                new String[]{{
                                                add("dolorem"),
                                                add("modi"),
                                            }});, "ipsa") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "vero";
                xAmzCredential = "sequi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "cum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "earum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGatewayRoute

Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGatewayRouteRequest;
import org.openapis.openapi.models.operations.UpdateGatewayRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateGatewayRouteRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateGatewayRouteResponse;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGatewayRouteRequest req = new UpdateGatewayRouteRequest(                new UpdateGatewayRouteRequestBody(                new UpdateGatewayRouteRequestBodySpec() {{
                                                grpcRoute = new GrpcGatewayRoute(                new GrpcGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("animi");) {{
                                                                                    port = 175372L;
                                                                                }};) {{
                                                                    rewrite = new GrpcGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                        }};;
                                                                    }};;
                                                                }};,                 new GrpcGatewayRouteMatch() {{
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "dicta";
                                                                        suffix = "consequuntur";
                                                                    }};;
                                                                    metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                                                        add(new GrpcGatewayRouteMetadata("nostrum") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "nobis";
                                                                                prefix = "ipsa";
                                                                                range = new MatchRange(87382L, 96450L) {{
                                                                                    end = 497357L;
                                                                                    start = 980486L;
                                                                                }};
                                                                                regex = "laboriosam";
                                                                                suffix = "pariatur";
                                                                            }};
                                                                            name = "Andy Mayert";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("iste") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "doloribus";
                                                                                prefix = "eligendi";
                                                                                range = new MatchRange(944950L, 657319L) {{
                                                                                    end = 574032L;
                                                                                    start = 314573L;
                                                                                }};
                                                                                regex = "quas";
                                                                                suffix = "totam";
                                                                            }};
                                                                            name = "Darren Bechtelar V";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("veniam") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "assumenda";
                                                                                prefix = "tempore";
                                                                                range = new MatchRange(38557L, 963976L) {{
                                                                                    end = 725574L;
                                                                                    start = 244032L;
                                                                                }};
                                                                                regex = "impedit";
                                                                                suffix = "cum";
                                                                            }};
                                                                            name = "Sylvia Turner II";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("facere") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "libero";
                                                                                prefix = "architecto";
                                                                                range = new MatchRange(756654L, 820023L) {{
                                                                                    end = 584593L;
                                                                                    start = 475589L;
                                                                                }};
                                                                                regex = "non";
                                                                                suffix = "magnam";
                                                                            }};
                                                                            name = "Jeremy Zemlak";
                                                                        }}),
                                                                    }};
                                                                    port = 512905L;
                                                                    serviceName = "odit";
                                                                }};);;
                                                http2Route = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("pariatur");) {{
                                                                                    port = 227362L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "ab";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                            value = "facilis";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("ad") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "nisi";
                                                                                prefix = "voluptatibus";
                                                                                range = new MatchRange(718627L, 392430L) {{
                                                                                    end = 310840L;
                                                                                    start = 503748L;
                                                                                }};
                                                                                regex = "quis";
                                                                                suffix = "nisi";
                                                                            }};
                                                                            name = "Roosevelt Schultz";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("eligendi") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "voluptatibus";
                                                                                prefix = "voluptatibus";
                                                                                range = new MatchRange(290841L, 700928L) {{
                                                                                    end = 162358L;
                                                                                    start = 891581L;
                                                                                }};
                                                                                regex = "eos";
                                                                                suffix = "reprehenderit";
                                                                            }};
                                                                            name = "Rita Kshlerin";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("aspernatur") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "fugiat";
                                                                                prefix = "unde";
                                                                                range = new MatchRange(220104L, 118041L) {{
                                                                                    end = 889448L;
                                                                                    start = 495617L;
                                                                                }};
                                                                                regex = "error";
                                                                                suffix = "porro";
                                                                            }};
                                                                            name = "Marian Koelpin";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "enim";
                                                                        suffix = "delectus";
                                                                    }};;
                                                                    method = HttpMethodEnum.DELETE;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "dignissimos";
                                                                        regex = "libero";
                                                                    }};;
                                                                    port = 72350L;
                                                                    prefix = "ab";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("earum") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "accusamus";
                                                                            }};
                                                                            name = "Geoffrey Hartmann";
                                                                        }}),
                                                                        add(new HttpQueryParameter("nihil") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "reprehenderit";
                                                                            }};
                                                                            name = "Maurice Zulauf";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                httpRoute = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("deleniti");) {{
                                                                                    port = 75566L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "assumenda";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                            value = "quisquam";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("vero") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "laudantium";
                                                                                prefix = "repudiandae";
                                                                                range = new MatchRange(136357L, 723942L) {{
                                                                                    end = 9683L;
                                                                                    start = 805264L;
                                                                                }};
                                                                                regex = "expedita";
                                                                                suffix = "quas";
                                                                            }};
                                                                            name = "Lamar Prohaska";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("praesentium") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "similique";
                                                                                prefix = "repellendus";
                                                                                range = new MatchRange(413801L, 771226L) {{
                                                                                    end = 434827L;
                                                                                    start = 213835L;
                                                                                }};
                                                                                regex = "commodi";
                                                                                suffix = "aut";
                                                                            }};
                                                                            name = "Lauren Beier";
                                                                        }}),
                                                                        add(new HttpGatewayRouteHeader("provident") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "quidem";
                                                                                prefix = "cum";
                                                                                range = new MatchRange(118126L, 514922L) {{
                                                                                    end = 230411L;
                                                                                    start = 97676L;
                                                                                }};
                                                                                regex = "doloremque";
                                                                                suffix = "earum";
                                                                            }};
                                                                            name = "Wendy McKenzie";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "repudiandae";
                                                                        suffix = "consequatur";
                                                                    }};;
                                                                    method = HttpMethodEnum.PUT;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "molestiae";
                                                                        regex = "itaque";
                                                                    }};;
                                                                    port = 708771L;
                                                                    prefix = "corrupti";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("dolor") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "sint";
                                                                            }};
                                                                            name = "Mr. Craig Leannon";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                priority = 124289L;
                                            }};) {{
                                clientToken = "a";
                            }};, "dolor", "occaecati", "atque") {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "at";
                xAmzCredential = "labore";
                xAmzDate = "minus";
                xAmzSecurityToken = "esse";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "perferendis";
                meshOwner = "rerum";
            }};            

            UpdateGatewayRouteResponse res = sdk.sdk.updateGatewayRoute(req);

            if (res.updateGatewayRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMesh

Updates an existing service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMeshRequest;
import org.openapis.openapi.models.operations.UpdateMeshRequestBody;
import org.openapis.openapi.models.operations.UpdateMeshRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateMeshResponse;
import org.openapis.openapi.models.shared.EgressFilter;
import org.openapis.openapi.models.shared.EgressFilterTypeEnum;
import org.openapis.openapi.models.shared.IpPreferenceEnum;
import org.openapis.openapi.models.shared.MeshServiceDiscovery;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMeshRequest req = new UpdateMeshRequest(                new UpdateMeshRequestBody() {{
                                clientToken = "aperiam";
                                spec = new UpdateMeshRequestBodySpec() {{
                                    egressFilter = new EgressFilter(EgressFilterTypeEnum.ALLOW_ALL);;
                                    serviceDiscovery = new MeshServiceDiscovery() {{
                                        ipPreference = IpPreferenceEnum.I_PV6_ONLY;
                                    }};;
                                }};;
                            }};, "velit") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "provident";
                xAmzCredential = "consectetur";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "soluta";
            }};            

            UpdateMeshResponse res = sdk.sdk.updateMesh(req);

            if (res.updateMeshOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoute

Updates an existing route for a specified service mesh and virtual router.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRouteRequest;
import org.openapis.openapi.models.operations.UpdateRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateRouteRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateRouteResponse;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.DurationUnitEnum;
import org.openapis.openapi.models.shared.GrpcRetryPolicy;
import org.openapis.openapi.models.shared.GrpcRetryPolicyEventEnum;
import org.openapis.openapi.models.shared.GrpcRoute;
import org.openapis.openapi.models.shared.GrpcRouteAction;
import org.openapis.openapi.models.shared.GrpcRouteMatch;
import org.openapis.openapi.models.shared.GrpcRouteMetadata;
import org.openapis.openapi.models.shared.GrpcRouteMetadataMatchMethod;
import org.openapis.openapi.models.shared.GrpcTimeout;
import org.openapis.openapi.models.shared.HeaderMatchMethod;
import org.openapis.openapi.models.shared.HttpMethodEnum;
import org.openapis.openapi.models.shared.HttpPathMatch;
import org.openapis.openapi.models.shared.HttpQueryParameter;
import org.openapis.openapi.models.shared.HttpRetryPolicy;
import org.openapis.openapi.models.shared.HttpRoute;
import org.openapis.openapi.models.shared.HttpRouteAction;
import org.openapis.openapi.models.shared.HttpRouteHeader;
import org.openapis.openapi.models.shared.HttpRouteMatch;
import org.openapis.openapi.models.shared.HttpSchemeEnum;
import org.openapis.openapi.models.shared.HttpTimeout;
import org.openapis.openapi.models.shared.MatchRange;
import org.openapis.openapi.models.shared.QueryParameterMatch;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum;
import org.openapis.openapi.models.shared.TcpRoute;
import org.openapis.openapi.models.shared.TcpRouteAction;
import org.openapis.openapi.models.shared.TcpRouteMatch;
import org.openapis.openapi.models.shared.TcpTimeout;
import org.openapis.openapi.models.shared.WeightedTarget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRouteRequest req = new UpdateRouteRequest(                new UpdateRouteRequestBody(                new UpdateRouteRequestBodySpec() {{
                                                grpcRoute = new GrpcRoute(                new GrpcRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("aspernatur", 778276L) {{
                                                                                        port = 639622L;
                                                                                        virtualNode = "amet";
                                                                                        weight = 948541L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("dignissimos", 876285L) {{
                                                                                        port = 931077L;
                                                                                        virtualNode = "illum";
                                                                                        weight = 670762L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("explicabo", 129355L) {{
                                                                                        port = 185348L;
                                                                                        virtualNode = "consectetur";
                                                                                        weight = 995816L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("ab", 72754L) {{
                                                                                        port = 350325L;
                                                                                        virtualNode = "nihil";
                                                                                        weight = 252700L;
                                                                                    }}),
                                                                                }});,                 new GrpcRouteMatch() {{
                                                                    metadata = new org.openapis.openapi.models.shared.GrpcRouteMetadata[]{{
                                                                        add(new GrpcRouteMetadata("aperiam") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "deserunt";
                                                                                prefix = "delectus";
                                                                                range = new MatchRange(450224L, 349993L) {{
                                                                                    end = 251212L;
                                                                                    start = 719389L;
                                                                                }};
                                                                                regex = "labore";
                                                                                suffix = "numquam";
                                                                            }};
                                                                            name = "Dr. Joel Kirlin";
                                                                        }}),
                                                                        add(new GrpcRouteMetadata("dignissimos") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "odit";
                                                                                prefix = "deleniti";
                                                                                range = new MatchRange(626707L, 326118L) {{
                                                                                    end = 316730L;
                                                                                    start = 452730L;
                                                                                }};
                                                                                regex = "libero";
                                                                                suffix = "magnam";
                                                                            }};
                                                                            name = "Emma Keeling";
                                                                        }}),
                                                                        add(new GrpcRouteMetadata("dolorum") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "fugiat";
                                                                                prefix = "nostrum";
                                                                                range = new MatchRange(969206L, 66207L) {{
                                                                                    end = 475325L;
                                                                                    start = 330600L;
                                                                                }};
                                                                                regex = "modi";
                                                                                suffix = "aut";
                                                                            }};
                                                                            name = "Olive Kub";
                                                                        }}),
                                                                        add(new GrpcRouteMetadata("autem") {{
                                                                            invert = false;
                                                                            match = new GrpcRouteMetadataMatchMethod() {{
                                                                                exact = "possimus";
                                                                                prefix = "voluptate";
                                                                                range = new MatchRange(310629L, 929476L) {{
                                                                                    end = 232772L;
                                                                                    start = 200637L;
                                                                                }};
                                                                                regex = "minus";
                                                                                suffix = "sunt";
                                                                            }};
                                                                            name = "Miss Mathew Lynch";
                                                                        }}),
                                                                    }};
                                                                    methodName = "fuga";
                                                                    port = 5310L;
                                                                    serviceName = "rem";
                                                                }};) {{
                                                    retryPolicy = new GrpcRetryPolicy(11355L,                 new Duration() {{
                                                                        unit = DurationUnitEnum.MS;
                                                                        value = 511222L;
                                                                    }};) {{
                                                        grpcRetryEvents = new org.openapis.openapi.models.shared.GrpcRetryPolicyEventEnum[]{{
                                                            add(GrpcRetryPolicyEventEnum.CANCELLED),
                                                            add(GrpcRetryPolicyEventEnum.CANCELLED),
                                                            add(GrpcRetryPolicyEventEnum.CANCELLED),
                                                            add(GrpcRetryPolicyEventEnum.UNAVAILABLE),
                                                        }};
                                                        httpRetryEvents = new String[]{{
                                                            add("mollitia"),
                                                            add("nulla"),
                                                            add("officia"),
                                                            add("sed"),
                                                        }};
                                                        tcpRetryEvents = new org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum[]{{
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                        }};
                                                    }};;
                                                    timeout = new GrpcTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 910073L;
                                                        }};;
                                                        perRequest = new Duration() {{
                                                            unit = DurationUnitEnum.MS;
                                                            value = 27982L;
                                                        }};;
                                                    }};;
                                                }};;
                                                http2Route = new HttpRoute(                new HttpRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("harum", 126727L) {{
                                                                                        port = 185448L;
                                                                                        virtualNode = "qui";
                                                                                        weight = 895912L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("optio", 975095L) {{
                                                                                        port = 108903L;
                                                                                        virtualNode = "aliquid";
                                                                                        weight = 264649L;
                                                                                    }}),
                                                                                }});,                 new HttpRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpRouteHeader[]{{
                                                                        add(new HttpRouteHeader("laborum") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "officia";
                                                                                prefix = "libero";
                                                                                range = new MatchRange(397919L, 412052L) {{
                                                                                    end = 520678L;
                                                                                    start = 192846L;
                                                                                }};
                                                                                regex = "impedit";
                                                                                suffix = "ducimus";
                                                                            }};
                                                                            name = "Thelma Wisoky";
                                                                        }}),
                                                                        add(new HttpRouteHeader("eligendi") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "natus";
                                                                                prefix = "accusamus";
                                                                                range = new MatchRange(700856L, 924840L) {{
                                                                                    end = 42906L;
                                                                                    start = 392967L;
                                                                                }};
                                                                                regex = "voluptates";
                                                                                suffix = "non";
                                                                            }};
                                                                            name = "Howard Hermann DVM";
                                                                        }}),
                                                                        add(new HttpRouteHeader("ullam") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "quae";
                                                                                prefix = "officiis";
                                                                                range = new MatchRange(317898L, 758985L) {{
                                                                                    end = 100002L;
                                                                                    start = 100251L;
                                                                                }};
                                                                                regex = "rem";
                                                                                suffix = "perferendis";
                                                                            }};
                                                                            name = "Van Wilkinson V";
                                                                        }}),
                                                                    }};
                                                                    method = HttpMethodEnum.POST;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "modi";
                                                                        regex = "itaque";
                                                                    }};;
                                                                    port = 807419L;
                                                                    prefix = "modi";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("totam") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "assumenda";
                                                                            }};
                                                                            name = "Domingo Rutherford";
                                                                        }}),
                                                                    }};
                                                                    scheme = HttpSchemeEnum.HTTPS;
                                                                }};) {{
                                                    retryPolicy = new HttpRetryPolicy(66074L,                 new Duration() {{
                                                                        unit = DurationUnitEnum.MS;
                                                                        value = 472414L;
                                                                    }};) {{
                                                        httpRetryEvents = new String[]{{
                                                            add("iure"),
                                                            add("odio"),
                                                        }};
                                                        tcpRetryEvents = new org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum[]{{
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                        }};
                                                    }};;
                                                    timeout = new HttpTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.MS;
                                                            value = 423588L;
                                                        }};;
                                                        perRequest = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 357758L;
                                                        }};;
                                                    }};;
                                                }};;
                                                httpRoute = new HttpRoute(                new HttpRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("distinctio", 262800L) {{
                                                                                        port = 163684L;
                                                                                        virtualNode = "officia";
                                                                                        weight = 441374L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("accusantium", 331452L) {{
                                                                                        port = 56372L;
                                                                                        virtualNode = "rem";
                                                                                        weight = 978154L;
                                                                                    }}),
                                                                                }});,                 new HttpRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpRouteHeader[]{{
                                                                        add(new HttpRouteHeader("nemo") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "neque";
                                                                                prefix = "facere";
                                                                                range = new MatchRange(984773L, 851809L) {{
                                                                                    end = 307173L;
                                                                                    start = 552581L;
                                                                                }};
                                                                                regex = "est";
                                                                                suffix = "delectus";
                                                                            }};
                                                                            name = "Gloria Douglas DVM";
                                                                        }}),
                                                                        add(new HttpRouteHeader("consequuntur") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "doloribus";
                                                                                prefix = "possimus";
                                                                                range = new MatchRange(128021L, 368491L) {{
                                                                                    end = 603323L;
                                                                                    start = 275425L;
                                                                                }};
                                                                                regex = "cupiditate";
                                                                                suffix = "optio";
                                                                            }};
                                                                            name = "Yvette Dooley";
                                                                        }}),
                                                                        add(new HttpRouteHeader("ab") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "veniam";
                                                                                prefix = "debitis";
                                                                                range = new MatchRange(280859L, 256768L) {{
                                                                                    end = 638390L;
                                                                                    start = 575062L;
                                                                                }};
                                                                                regex = "tenetur";
                                                                                suffix = "adipisci";
                                                                            }};
                                                                            name = "Harvey Harber";
                                                                        }}),
                                                                        add(new HttpRouteHeader("adipisci") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "beatae";
                                                                                prefix = "hic";
                                                                                range = new MatchRange(221218L, 496548L) {{
                                                                                    end = 392319L;
                                                                                    start = 786954L;
                                                                                }};
                                                                                regex = "fuga";
                                                                                suffix = "minima";
                                                                            }};
                                                                            name = "Lois Hyatt";
                                                                        }}),
                                                                    }};
                                                                    method = HttpMethodEnum.DELETE;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "dolor";
                                                                        regex = "exercitationem";
                                                                    }};;
                                                                    port = 709701L;
                                                                    prefix = "facilis";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("modi") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "sit";
                                                                            }};
                                                                            name = "Molly Cronin";
                                                                        }}),
                                                                        add(new HttpQueryParameter("doloribus") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "veniam";
                                                                            }};
                                                                            name = "Bradford Wilkinson";
                                                                        }}),
                                                                        add(new HttpQueryParameter("necessitatibus") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "assumenda";
                                                                            }};
                                                                            name = "Juan Abshire DDS";
                                                                        }}),
                                                                        add(new HttpQueryParameter("architecto") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "quia";
                                                                            }};
                                                                            name = "Kristin Mertz";
                                                                        }}),
                                                                    }};
                                                                    scheme = HttpSchemeEnum.HTTP;
                                                                }};) {{
                                                    retryPolicy = new HttpRetryPolicy(18096L,                 new Duration() {{
                                                                        unit = DurationUnitEnum.S;
                                                                        value = 590585L;
                                                                    }};) {{
                                                        httpRetryEvents = new String[]{{
                                                            add("iure"),
                                                            add("quibusdam"),
                                                            add("quod"),
                                                            add("nemo"),
                                                        }};
                                                        tcpRetryEvents = new org.openapis.openapi.models.shared.TcpRetryPolicyEventEnum[]{{
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                            add(TcpRetryPolicyEventEnum.CONNECTION_ERROR),
                                                        }};
                                                    }};;
                                                    timeout = new HttpTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 299153L;
                                                        }};;
                                                        perRequest = new Duration() {{
                                                            unit = DurationUnitEnum.S;
                                                            value = 388404L;
                                                        }};;
                                                    }};;
                                                }};;
                                                priority = 152283L;
                                                tcpRoute = new TcpRoute(                new TcpRouteAction(                new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                                                    add(new WeightedTarget("doloribus", 703966L) {{
                                                                                        port = 616941L;
                                                                                        virtualNode = "provident";
                                                                                        weight = 739508L;
                                                                                    }}),
                                                                                    add(new WeightedTarget("unde", 263767L) {{
                                                                                        port = 697330L;
                                                                                        virtualNode = "itaque";
                                                                                        weight = 389548L;
                                                                                    }}),
                                                                                }});) {{
                                                    match = new TcpRouteMatch() {{
                                                        port = 595198L;
                                                    }};;
                                                    timeout = new TcpTimeout() {{
                                                        idle = new Duration() {{
                                                            unit = DurationUnitEnum.MS;
                                                            value = 736985L;
                                                        }};;
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "aspernatur";
                            }};, "libero", "nam", "incidunt") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "autem";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "nesciunt";
                meshOwner = "illum";
            }};            

            UpdateRouteResponse res = sdk.sdk.updateRoute(req);

            if (res.updateRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVirtualGateway

Updates an existing virtual gateway in a specified service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVirtualGatewayRequest;
import org.openapis.openapi.models.operations.UpdateVirtualGatewayRequestBody;
import org.openapis.openapi.models.operations.UpdateVirtualGatewayRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateVirtualGatewayResponse;
import org.openapis.openapi.models.shared.JsonFormatRef;
import org.openapis.openapi.models.shared.LoggingFormat;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubjectAlternativeNameMatchers;
import org.openapis.openapi.models.shared.SubjectAlternativeNames;
import org.openapis.openapi.models.shared.VirtualGatewayAccessLog;
import org.openapis.openapi.models.shared.VirtualGatewayBackendDefaults;
import org.openapis.openapi.models.shared.VirtualGatewayClientPolicy;
import org.openapis.openapi.models.shared.VirtualGatewayClientPolicyTls;
import org.openapis.openapi.models.shared.VirtualGatewayClientTlsCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayFileAccessLog;
import org.openapis.openapi.models.shared.VirtualGatewayGrpcConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayHealthCheckPolicy;
import org.openapis.openapi.models.shared.VirtualGatewayHttp2ConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayHttpConnectionPool;
import org.openapis.openapi.models.shared.VirtualGatewayListener;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTls;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsAcmCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsFileCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsModeEnum;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsSdsCertificate;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsValidationContext;
import org.openapis.openapi.models.shared.VirtualGatewayListenerTlsValidationContextTrust;
import org.openapis.openapi.models.shared.VirtualGatewayLogging;
import org.openapis.openapi.models.shared.VirtualGatewayPortMapping;
import org.openapis.openapi.models.shared.VirtualGatewayPortProtocolEnum;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContext;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextAcmTrust;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextFileTrust;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextSdsTrust;
import org.openapis.openapi.models.shared.VirtualGatewayTlsValidationContextTrust;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualGatewayRequest req = new UpdateVirtualGatewayRequest(                new UpdateVirtualGatewayRequestBody(                new UpdateVirtualGatewayRequestBodySpec() {{
                                                backendDefaults = new VirtualGatewayBackendDefaults() {{
                                                    clientPolicy = new VirtualGatewayClientPolicy() {{
                                                        tls = new VirtualGatewayClientPolicyTls(                new VirtualGatewayTlsValidationContext(                new VirtualGatewayTlsValidationContextTrust() {{
                                                                                            acm = new VirtualGatewayTlsValidationContextAcmTrust(                new String[]{{
                                                                                                                add("facilis"),
                                                                                                                add("non"),
                                                                                                                add("mollitia"),
                                                                                                                add("assumenda"),
                                                                                                            }});;
                                                                                            file = new VirtualGatewayTlsValidationContextFileTrust("recusandae");;
                                                                                            sds = new VirtualGatewayTlsValidationContextSdsTrust("distinctio");;
                                                                                        }};) {{
                                                                            subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                add("ad"),
                                                                                                                add("facere"),
                                                                                                                add("laborum"),
                                                                                                                add("eveniet"),
                                                                                                            }}););;
                                                                        }};) {{
                                                            certificate = new VirtualGatewayClientTlsCertificate() {{
                                                                file = new VirtualGatewayListenerTlsFileCertificate("laborum", "incidunt");;
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("maxime");;
                                                            }};;
                                                            enforce = false;
                                                            ports = new Long[]{{
                                                                add(60L),
                                                                add(379894L),
                                                            }};
                                                        }};;
                                                    }};;
                                                }};;
                                                listeners = new org.openapis.openapi.models.shared.VirtualGatewayListener[]{{
                                                    add(new VirtualGatewayListener(                new VirtualGatewayPortMapping(523365L, VirtualGatewayPortProtocolEnum.HTTP);) {{
                                                        connectionPool = new VirtualGatewayConnectionPool() {{
                                                            grpc = new VirtualGatewayGrpcConnectionPool(672889L) {{
                                                                maxRequests = 560451L;
                                                            }};
                                                            http = new VirtualGatewayHttpConnectionPool(286716L) {{
                                                                maxConnections = 668218L;
                                                                maxPendingRequests = 577413L;
                                                            }};
                                                            http2 = new VirtualGatewayHttp2ConnectionPool(19462L) {{
                                                                maxRequests = 777378L;
                                                            }};
                                                        }};
                                                        healthCheck = new VirtualGatewayHealthCheckPolicy(888265L, 603650L, VirtualGatewayPortProtocolEnum.GRPC, 621393L, 653000L) {{
                                                            healthyThreshold = 143528L;
                                                            intervalMillis = 399222L;
                                                            path = "magnam";
                                                            port = 308528L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                            timeoutMillis = 942185L;
                                                            unhealthyThreshold = 342921L;
                                                        }};
                                                        portMapping = new VirtualGatewayPortMapping(460909L, VirtualGatewayPortProtocolEnum.HTTP2) {{
                                                            port = 298613L;
                                                            protocol = VirtualGatewayPortProtocolEnum.HTTP2;
                                                        }};
                                                        tls = new VirtualGatewayListenerTls(                new VirtualGatewayListenerTlsCertificate() {{
                                                                            acm = new VirtualGatewayListenerTlsAcmCertificate("maiores");;
                                                                            file = new VirtualGatewayListenerTlsFileCertificate("laudantium", "maiores");;
                                                                            sds = new VirtualGatewayListenerTlsSdsCertificate("alias");;
                                                                        }};, VirtualGatewayListenerTlsModeEnum.DISABLED) {{
                                                            certificate = new VirtualGatewayListenerTlsCertificate() {{
                                                                acm = new VirtualGatewayListenerTlsAcmCertificate("facere") {{
                                                                    certificateArn = "fuga";
                                                                }};
                                                                file = new VirtualGatewayListenerTlsFileCertificate("deserunt", "quod") {{
                                                                    certificateChain = "impedit";
                                                                    privateKey = "quasi";
                                                                }};
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("doloremque") {{
                                                                    secretName = "laboriosam";
                                                                }};
                                                            }};
                                                            mode = VirtualGatewayListenerTlsModeEnum.STRICT;
                                                            validation = new VirtualGatewayListenerTlsValidationContext(                new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                                file = new VirtualGatewayTlsValidationContextFileTrust("excepturi");;
                                                                                sds = new VirtualGatewayTlsValidationContextSdsTrust("a");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("blanditiis"),
                                                                                                    add("quae"),
                                                                                                    add("magni"),
                                                                                                    add("officiis"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("similique"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("necessitatibus"),
                                                                            add("maxime"),
                                                                            add("consequatur"),
                                                                            add("eaque"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                    file = new VirtualGatewayTlsValidationContextFileTrust("necessitatibus") {{
                                                                        certificateChain = "sed";
                                                                    }};
                                                                    sds = new VirtualGatewayTlsValidationContextSdsTrust("ipsa") {{
                                                                        secretName = "impedit";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new VirtualGatewayListener(                new VirtualGatewayPortMapping(787916L, VirtualGatewayPortProtocolEnum.GRPC);) {{
                                                        connectionPool = new VirtualGatewayConnectionPool() {{
                                                            grpc = new VirtualGatewayGrpcConnectionPool(938257L) {{
                                                                maxRequests = 380595L;
                                                            }};
                                                            http = new VirtualGatewayHttpConnectionPool(260588L) {{
                                                                maxConnections = 985360L;
                                                                maxPendingRequests = 244569L;
                                                            }};
                                                            http2 = new VirtualGatewayHttp2ConnectionPool(446547L) {{
                                                                maxRequests = 458212L;
                                                            }};
                                                        }};
                                                        healthCheck = new VirtualGatewayHealthCheckPolicy(771241L, 104736L, VirtualGatewayPortProtocolEnum.HTTP, 116558L, 139133L) {{
                                                            healthyThreshold = 757407L;
                                                            intervalMillis = 94697L;
                                                            path = "neque";
                                                            port = 876649L;
                                                            protocol = VirtualGatewayPortProtocolEnum.HTTP2;
                                                            timeoutMillis = 37534L;
                                                            unhealthyThreshold = 185816L;
                                                        }};
                                                        portMapping = new VirtualGatewayPortMapping(4654L, VirtualGatewayPortProtocolEnum.HTTP2) {{
                                                            port = 357639L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                        }};
                                                        tls = new VirtualGatewayListenerTls(                new VirtualGatewayListenerTlsCertificate() {{
                                                                            acm = new VirtualGatewayListenerTlsAcmCertificate("velit");;
                                                                            file = new VirtualGatewayListenerTlsFileCertificate("reiciendis", "amet");;
                                                                            sds = new VirtualGatewayListenerTlsSdsCertificate("nemo");;
                                                                        }};, VirtualGatewayListenerTlsModeEnum.STRICT) {{
                                                            certificate = new VirtualGatewayListenerTlsCertificate() {{
                                                                acm = new VirtualGatewayListenerTlsAcmCertificate("accusantium") {{
                                                                    certificateArn = "vel";
                                                                }};
                                                                file = new VirtualGatewayListenerTlsFileCertificate("ex", "quas") {{
                                                                    certificateChain = "id";
                                                                    privateKey = "laboriosam";
                                                                }};
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("ullam") {{
                                                                    secretName = "veritatis";
                                                                }};
                                                            }};
                                                            mode = VirtualGatewayListenerTlsModeEnum.STRICT;
                                                            validation = new VirtualGatewayListenerTlsValidationContext(                new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                                file = new VirtualGatewayTlsValidationContextFileTrust("maiores");;
                                                                                sds = new VirtualGatewayTlsValidationContextSdsTrust("laudantium");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("maxime"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("delectus"),
                                                                                        add("omnis"),
                                                                                        add("sed"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("incidunt"),
                                                                            add("quam"),
                                                                            add("magni"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                    file = new VirtualGatewayTlsValidationContextFileTrust("cupiditate") {{
                                                                        certificateChain = "quis";
                                                                    }};
                                                                    sds = new VirtualGatewayTlsValidationContextSdsTrust("excepturi") {{
                                                                        secretName = "aliquam";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new VirtualGatewayListener(                new VirtualGatewayPortMapping(300651L, VirtualGatewayPortProtocolEnum.HTTP2);) {{
                                                        connectionPool = new VirtualGatewayConnectionPool() {{
                                                            grpc = new VirtualGatewayGrpcConnectionPool(476003L) {{
                                                                maxRequests = 555294L;
                                                            }};
                                                            http = new VirtualGatewayHttpConnectionPool(955466L) {{
                                                                maxConnections = 395634L;
                                                                maxPendingRequests = 989033L;
                                                            }};
                                                            http2 = new VirtualGatewayHttp2ConnectionPool(598316L) {{
                                                                maxRequests = 749702L;
                                                            }};
                                                        }};
                                                        healthCheck = new VirtualGatewayHealthCheckPolicy(693747L, 265930L, VirtualGatewayPortProtocolEnum.GRPC, 145435L, 259377L) {{
                                                            healthyThreshold = 34245L;
                                                            intervalMillis = 118917L;
                                                            path = "minus";
                                                            port = 417539L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                            timeoutMillis = 781582L;
                                                            unhealthyThreshold = 735740L;
                                                        }};
                                                        portMapping = new VirtualGatewayPortMapping(992887L, VirtualGatewayPortProtocolEnum.HTTP2) {{
                                                            port = 194058L;
                                                            protocol = VirtualGatewayPortProtocolEnum.GRPC;
                                                        }};
                                                        tls = new VirtualGatewayListenerTls(                new VirtualGatewayListenerTlsCertificate() {{
                                                                            acm = new VirtualGatewayListenerTlsAcmCertificate("eos");;
                                                                            file = new VirtualGatewayListenerTlsFileCertificate("nobis", "natus");;
                                                                            sds = new VirtualGatewayListenerTlsSdsCertificate("minus");;
                                                                        }};, VirtualGatewayListenerTlsModeEnum.STRICT) {{
                                                            certificate = new VirtualGatewayListenerTlsCertificate() {{
                                                                acm = new VirtualGatewayListenerTlsAcmCertificate("sint") {{
                                                                    certificateArn = "blanditiis";
                                                                }};
                                                                file = new VirtualGatewayListenerTlsFileCertificate("animi", "maiores") {{
                                                                    certificateChain = "repellat";
                                                                    privateKey = "a";
                                                                }};
                                                                sds = new VirtualGatewayListenerTlsSdsCertificate("nulla") {{
                                                                    secretName = "itaque";
                                                                }};
                                                            }};
                                                            mode = VirtualGatewayListenerTlsModeEnum.PERMISSIVE;
                                                            validation = new VirtualGatewayListenerTlsValidationContext(                new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                                file = new VirtualGatewayTlsValidationContextFileTrust("eius");;
                                                                                sds = new VirtualGatewayTlsValidationContextSdsTrust("quisquam");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("repudiandae"),
                                                                                                    add("accusantium"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("officia"),
                                                                                        add("saepe"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("velit"),
                                                                            add("officiis"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new VirtualGatewayListenerTlsValidationContextTrust() {{
                                                                    file = new VirtualGatewayTlsValidationContextFileTrust("impedit") {{
                                                                        certificateChain = "officia";
                                                                    }};
                                                                    sds = new VirtualGatewayTlsValidationContextSdsTrust("blanditiis") {{
                                                                        secretName = "quasi";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                logging = new VirtualGatewayLogging() {{
                                                    accessLog = new VirtualGatewayAccessLog() {{
                                                        file = new VirtualGatewayFileAccessLog("quod") {{
                                                            format = new LoggingFormat() {{
                                                                json = new org.openapis.openapi.models.shared.JsonFormatRef[]{{
                                                                    add(new JsonFormatRef("molestiae", "amet") {{
                                                                        key = "corrupti";
                                                                        value = "amet";
                                                                    }}),
                                                                    add(new JsonFormatRef("perferendis", "necessitatibus") {{
                                                                        key = "laborum";
                                                                        value = "modi";
                                                                    }}),
                                                                    add(new JsonFormatRef("dolore", "sunt") {{
                                                                        key = "architecto";
                                                                        value = "molestias";
                                                                    }}),
                                                                }};
                                                                text = "maiores";
                                                            }};;
                                                        }};;
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "neque";
                            }};, "odit", "earum") {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "eaque";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ad";
                meshOwner = "nisi";
            }};            

            UpdateVirtualGatewayResponse res = sdk.sdk.updateVirtualGateway(req);

            if (res.updateVirtualGatewayOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVirtualNode

Updates an existing virtual node in a specified service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVirtualNodeRequest;
import org.openapis.openapi.models.operations.UpdateVirtualNodeRequestBody;
import org.openapis.openapi.models.operations.UpdateVirtualNodeRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateVirtualNodeResponse;
import org.openapis.openapi.models.shared.AccessLog;
import org.openapis.openapi.models.shared.AwsCloudMapInstanceAttribute;
import org.openapis.openapi.models.shared.AwsCloudMapServiceDiscovery;
import org.openapis.openapi.models.shared.Backend;
import org.openapis.openapi.models.shared.BackendDefaults;
import org.openapis.openapi.models.shared.ClientPolicy;
import org.openapis.openapi.models.shared.ClientPolicyTls;
import org.openapis.openapi.models.shared.ClientTlsCertificate;
import org.openapis.openapi.models.shared.DnsResponseTypeEnum;
import org.openapis.openapi.models.shared.DnsServiceDiscovery;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.DurationUnitEnum;
import org.openapis.openapi.models.shared.FileAccessLog;
import org.openapis.openapi.models.shared.GrpcTimeout;
import org.openapis.openapi.models.shared.HealthCheckPolicy;
import org.openapis.openapi.models.shared.HttpTimeout;
import org.openapis.openapi.models.shared.IpPreferenceEnum;
import org.openapis.openapi.models.shared.JsonFormatRef;
import org.openapis.openapi.models.shared.Listener;
import org.openapis.openapi.models.shared.ListenerTimeout;
import org.openapis.openapi.models.shared.ListenerTls;
import org.openapis.openapi.models.shared.ListenerTlsAcmCertificate;
import org.openapis.openapi.models.shared.ListenerTlsCertificate;
import org.openapis.openapi.models.shared.ListenerTlsFileCertificate;
import org.openapis.openapi.models.shared.ListenerTlsModeEnum;
import org.openapis.openapi.models.shared.ListenerTlsSdsCertificate;
import org.openapis.openapi.models.shared.ListenerTlsValidationContext;
import org.openapis.openapi.models.shared.ListenerTlsValidationContextTrust;
import org.openapis.openapi.models.shared.Logging;
import org.openapis.openapi.models.shared.LoggingFormat;
import org.openapis.openapi.models.shared.OutlierDetection;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.PortProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceDiscovery;
import org.openapis.openapi.models.shared.SubjectAlternativeNameMatchers;
import org.openapis.openapi.models.shared.SubjectAlternativeNames;
import org.openapis.openapi.models.shared.TcpTimeout;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextAcmTrust;
import org.openapis.openapi.models.shared.TlsValidationContextFileTrust;
import org.openapis.openapi.models.shared.TlsValidationContextSdsTrust;
import org.openapis.openapi.models.shared.TlsValidationContextTrust;
import org.openapis.openapi.models.shared.VirtualNodeConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeGrpcConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeHttp2ConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeHttpConnectionPool;
import org.openapis.openapi.models.shared.VirtualNodeTcpConnectionPool;
import org.openapis.openapi.models.shared.VirtualServiceBackend;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualNodeRequest req = new UpdateVirtualNodeRequest(                new UpdateVirtualNodeRequestBody(                new UpdateVirtualNodeRequestBodySpec() {{
                                                backendDefaults = new BackendDefaults() {{
                                                    clientPolicy = new ClientPolicy() {{
                                                        tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                add("quibusdam"),
                                                                                                                add("nemo"),
                                                                                                            }});;
                                                                                            file = new TlsValidationContextFileTrust("suscipit");;
                                                                                            sds = new TlsValidationContextSdsTrust("pariatur");;
                                                                                        }};) {{
                                                                            subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                add("quidem"),
                                                                                                            }}););;
                                                                        }};) {{
                                                            certificate = new ClientTlsCertificate() {{
                                                                file = new ListenerTlsFileCertificate("repellendus", "perferendis");;
                                                                sds = new ListenerTlsSdsCertificate("id");;
                                                            }};;
                                                            enforce = false;
                                                            ports = new Long[]{{
                                                                add(152364L),
                                                                add(823572L),
                                                                add(996072L),
                                                                add(921060L),
                                                            }};
                                                        }};;
                                                    }};;
                                                }};;
                                                backends = new org.openapis.openapi.models.shared.Backend[]{{
                                                    add(new Backend() {{
                                                        virtualService = new VirtualServiceBackend("doloribus") {{
                                                            clientPolicy = new ClientPolicy() {{
                                                                tls = new ClientPolicyTls(                new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                                    acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                                        add("delectus"),
                                                                                                                        add("minus"),
                                                                                                                        add("quo"),
                                                                                                                        add("quos"),
                                                                                                                    }});;
                                                                                                    file = new TlsValidationContextFileTrust("asperiores");;
                                                                                                    sds = new TlsValidationContextSdsTrust("voluptatum");;
                                                                                                }};) {{
                                                                                    subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                                        add("corporis"),
                                                                                                                        add("accusantium"),
                                                                                                                        add("illo"),
                                                                                                                    }}););;
                                                                                }};) {{
                                                                    certificate = new ClientTlsCertificate() {{
                                                                        file = new ListenerTlsFileCertificate("harum", "dolore") {{
                                                                            certificateChain = "adipisci";
                                                                            privateKey = "pariatur";
                                                                        }};
                                                                        sds = new ListenerTlsSdsCertificate("iure") {{
                                                                            secretName = "voluptatibus";
                                                                        }};
                                                                    }};
                                                                    enforce = false;
                                                                    ports = new Long[]{{
                                                                        add(795457L),
                                                                    }};
                                                                    validation = new TlsValidationContext(                new TlsValidationContextTrust() {{
                                                                                        acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                            add("rerum"),
                                                                                                        }});;
                                                                                        file = new TlsValidationContextFileTrust("sed");;
                                                                                        sds = new TlsValidationContextSdsTrust("accusamus");;
                                                                                    }};) {{
                                                                        subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                            add("accusamus"),
                                                                                                            add("harum"),
                                                                                                            add("cumque"),
                                                                                                        }});) {{
                                                                            match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                add("error"),
                                                                                                add("non"),
                                                                                                add("quasi"),
                                                                                            }}) {{
                                                                                exact = new String[]{{
                                                                                    add("dolorum"),
                                                                                    add("velit"),
                                                                                    add("earum"),
                                                                                }};
                                                                            }};
                                                                        }};
                                                                        trust = new TlsValidationContextTrust() {{
                                                                            acm = new TlsValidationContextAcmTrust(                new String[]{{
                                                                                                add("eaque"),
                                                                                                add("deserunt"),
                                                                                                add("aliquid"),
                                                                                            }}) {{
                                                                                certificateAuthorityArns = new String[]{{
                                                                                    add("expedita"),
                                                                                }};
                                                                            }};
                                                                            file = new TlsValidationContextFileTrust("magni") {{
                                                                                certificateChain = "excepturi";
                                                                            }};
                                                                            sds = new TlsValidationContextSdsTrust("possimus") {{
                                                                                secretName = "tempora";
                                                                            }};
                                                                        }};
                                                                    }};
                                                                }};
                                                            }};
                                                            virtualServiceName = "aut";
                                                        }};
                                                    }}),
                                                }};
                                                listeners = new org.openapis.openapi.models.shared.Listener[]{{
                                                    add(new Listener(                new PortMapping(712640L, PortProtocolEnum.HTTP2);) {{
                                                        connectionPool = new VirtualNodeConnectionPool() {{
                                                            grpc = new VirtualNodeGrpcConnectionPool(823472L) {{
                                                                maxRequests = 869848L;
                                                            }};
                                                            http = new VirtualNodeHttpConnectionPool(424853L) {{
                                                                maxConnections = 205499L;
                                                                maxPendingRequests = 866135L;
                                                            }};
                                                            http2 = new VirtualNodeHttp2ConnectionPool(652515L) {{
                                                                maxRequests = 960813L;
                                                            }};
                                                            tcp = new VirtualNodeTcpConnectionPool(552646L) {{
                                                                maxConnections = 65121L;
                                                            }};
                                                        }};
                                                        healthCheck = new HealthCheckPolicy(162450L, 982445L, PortProtocolEnum.HTTP, 400448L, 513185L) {{
                                                            healthyThreshold = 44571L;
                                                            intervalMillis = 251200L;
                                                            path = "voluptates";
                                                            port = 324052L;
                                                            protocol = PortProtocolEnum.TCP;
                                                            timeoutMillis = 788165L;
                                                            unhealthyThreshold = 557987L;
                                                        }};
                                                        outlierDetection = new OutlierDetection(                new Duration() {{
                                                                            unit = DurationUnitEnum.MS;
                                                                            value = 498534L;
                                                                        }};,                 new Duration() {{
                                                                            unit = DurationUnitEnum.S;
                                                                            value = 927959L;
                                                                        }};, 271306L, 503449L) {{
                                                            baseEjectionDuration = new Duration() {{
                                                                unit = DurationUnitEnum.MS;
                                                                value = 221329L;
                                                            }};
                                                            interval = new Duration() {{
                                                                unit = DurationUnitEnum.S;
                                                                value = 232316L;
                                                            }};
                                                            maxEjectionPercent = 768195L;
                                                            maxServerErrors = 525917L;
                                                        }};
                                                        portMapping = new PortMapping(532320L, PortProtocolEnum.HTTP) {{
                                                            port = 258059L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                        timeout = new ListenerTimeout() {{
                                                            grpc = new GrpcTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 84178L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 419858L;
                                                                }};
                                                            }};
                                                            http = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 517121L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 646491L;
                                                                }};
                                                            }};
                                                            http2 = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 471207L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 658199L;
                                                                }};
                                                            }};
                                                            tcp = new TcpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 716L;
                                                                }};
                                                            }};
                                                        }};
                                                        tls = new ListenerTls(                new ListenerTlsCertificate() {{
                                                                            acm = new ListenerTlsAcmCertificate("facilis");;
                                                                            file = new ListenerTlsFileCertificate("beatae", "cumque");;
                                                                            sds = new ListenerTlsSdsCertificate("delectus");;
                                                                        }};, ListenerTlsModeEnum.STRICT) {{
                                                            certificate = new ListenerTlsCertificate() {{
                                                                acm = new ListenerTlsAcmCertificate("aut") {{
                                                                    certificateArn = "fuga";
                                                                }};
                                                                file = new ListenerTlsFileCertificate("aliquam", "iste") {{
                                                                    certificateChain = "dolore";
                                                                    privateKey = "maxime";
                                                                }};
                                                                sds = new ListenerTlsSdsCertificate("eligendi") {{
                                                                    secretName = "ullam";
                                                                }};
                                                            }};
                                                            mode = ListenerTlsModeEnum.DISABLED;
                                                            validation = new ListenerTlsValidationContext(                new ListenerTlsValidationContextTrust() {{
                                                                                file = new TlsValidationContextFileTrust("harum");;
                                                                                sds = new TlsValidationContextSdsTrust("facere");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("libero"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("nihil"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("occaecati"),
                                                                            add("unde"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new ListenerTlsValidationContextTrust() {{
                                                                    file = new TlsValidationContextFileTrust("quasi") {{
                                                                        certificateChain = "ipsam";
                                                                    }};
                                                                    sds = new TlsValidationContextSdsTrust("dicta") {{
                                                                        secretName = "cumque";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new Listener(                new PortMapping(118349L, PortProtocolEnum.HTTP);) {{
                                                        connectionPool = new VirtualNodeConnectionPool() {{
                                                            grpc = new VirtualNodeGrpcConnectionPool(543353L) {{
                                                                maxRequests = 523995L;
                                                            }};
                                                            http = new VirtualNodeHttpConnectionPool(863330L) {{
                                                                maxConnections = 886118L;
                                                                maxPendingRequests = 739633L;
                                                            }};
                                                            http2 = new VirtualNodeHttp2ConnectionPool(775427L) {{
                                                                maxRequests = 956871L;
                                                            }};
                                                            tcp = new VirtualNodeTcpConnectionPool(797293L) {{
                                                                maxConnections = 277990L;
                                                            }};
                                                        }};
                                                        healthCheck = new HealthCheckPolicy(457150L, 944033L, PortProtocolEnum.GRPC, 36691L, 743531L) {{
                                                            healthyThreshold = 793282L;
                                                            intervalMillis = 781491L;
                                                            path = "id";
                                                            port = 569706L;
                                                            protocol = PortProtocolEnum.HTTP2;
                                                            timeoutMillis = 726851L;
                                                            unhealthyThreshold = 774880L;
                                                        }};
                                                        outlierDetection = new OutlierDetection(                new Duration() {{
                                                                            unit = DurationUnitEnum.MS;
                                                                            value = 480421L;
                                                                        }};,                 new Duration() {{
                                                                            unit = DurationUnitEnum.S;
                                                                            value = 917152L;
                                                                        }};, 274295L, 169935L) {{
                                                            baseEjectionDuration = new Duration() {{
                                                                unit = DurationUnitEnum.S;
                                                                value = 866292L;
                                                            }};
                                                            interval = new Duration() {{
                                                                unit = DurationUnitEnum.MS;
                                                                value = 927490L;
                                                            }};
                                                            maxEjectionPercent = 83791L;
                                                            maxServerErrors = 13637L;
                                                        }};
                                                        portMapping = new PortMapping(30192L, PortProtocolEnum.TCP) {{
                                                            port = 701841L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                        timeout = new ListenerTimeout() {{
                                                            grpc = new GrpcTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 431253L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 531195L;
                                                                }};
                                                            }};
                                                            http = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 470647L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 697994L;
                                                                }};
                                                            }};
                                                            http2 = new HttpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.MS;
                                                                    value = 541822L;
                                                                }};
                                                                perRequest = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 542340L;
                                                                }};
                                                            }};
                                                            tcp = new TcpTimeout() {{
                                                                idle = new Duration() {{
                                                                    unit = DurationUnitEnum.S;
                                                                    value = 667213L;
                                                                }};
                                                            }};
                                                        }};
                                                        tls = new ListenerTls(                new ListenerTlsCertificate() {{
                                                                            acm = new ListenerTlsAcmCertificate("minus");;
                                                                            file = new ListenerTlsFileCertificate("asperiores", "recusandae");;
                                                                            sds = new ListenerTlsSdsCertificate("voluptates");;
                                                                        }};, ListenerTlsModeEnum.PERMISSIVE) {{
                                                            certificate = new ListenerTlsCertificate() {{
                                                                acm = new ListenerTlsAcmCertificate("rem") {{
                                                                    certificateArn = "enim";
                                                                }};
                                                                file = new ListenerTlsFileCertificate("quas", "placeat") {{
                                                                    certificateChain = "magni";
                                                                    privateKey = "quae";
                                                                }};
                                                                sds = new ListenerTlsSdsCertificate("labore") {{
                                                                    secretName = "enim";
                                                                }};
                                                            }};
                                                            mode = ListenerTlsModeEnum.DISABLED;
                                                            validation = new ListenerTlsValidationContext(                new ListenerTlsValidationContextTrust() {{
                                                                                file = new TlsValidationContextFileTrust("sit");;
                                                                                sds = new TlsValidationContextSdsTrust("odio");;
                                                                            }};) {{
                                                                subjectAlternativeNames = new SubjectAlternativeNames(                new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                                    add("mollitia"),
                                                                                                    add("cumque"),
                                                                                                    add("quis"),
                                                                                                    add("enim"),
                                                                                                }});) {{
                                                                    match = new SubjectAlternativeNameMatchers(                new String[]{{
                                                                                        add("quaerat"),
                                                                                        add("doloribus"),
                                                                                        add("quia"),
                                                                                    }}) {{
                                                                        exact = new String[]{{
                                                                            add("delectus"),
                                                                            add("officia"),
                                                                            add("natus"),
                                                                            add("cumque"),
                                                                        }};
                                                                    }};
                                                                }};
                                                                trust = new ListenerTlsValidationContextTrust() {{
                                                                    file = new TlsValidationContextFileTrust("nemo") {{
                                                                        certificateChain = "eum";
                                                                    }};
                                                                    sds = new TlsValidationContextSdsTrust("nesciunt") {{
                                                                        secretName = "illum";
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                                logging = new Logging() {{
                                                    accessLog = new AccessLog() {{
                                                        file = new FileAccessLog("sit") {{
                                                            format = new LoggingFormat() {{
                                                                json = new org.openapis.openapi.models.shared.JsonFormatRef[]{{
                                                                    add(new JsonFormatRef("deleniti", "sunt") {{
                                                                        key = "necessitatibus";
                                                                        value = "sed";
                                                                    }}),
                                                                    add(new JsonFormatRef("laborum", "aliquam") {{
                                                                        key = "nesciunt";
                                                                        value = "delectus";
                                                                    }}),
                                                                }};
                                                                text = "deserunt";
                                                            }};;
                                                        }};;
                                                    }};;
                                                }};;
                                                serviceDiscovery = new ServiceDiscovery() {{
                                                    awsCloudMap = new AwsCloudMapServiceDiscovery("modi", "sunt") {{
                                                        attributes = new org.openapis.openapi.models.shared.AwsCloudMapInstanceAttribute[]{{
                                                            add(new AwsCloudMapInstanceAttribute("ipsa", "at") {{
                                                                key = "eius";
                                                                value = "voluptatum";
                                                            }}),
                                                            add(new AwsCloudMapInstanceAttribute("aspernatur", "inventore") {{
                                                                key = "dolorem";
                                                                value = "repellat";
                                                            }}),
                                                            add(new AwsCloudMapInstanceAttribute("fuga", "hic") {{
                                                                key = "sequi";
                                                                value = "fugit";
                                                            }}),
                                                            add(new AwsCloudMapInstanceAttribute("architecto", "aperiam") {{
                                                                key = "eaque";
                                                                value = "dolorem";
                                                            }}),
                                                        }};
                                                        ipPreference = IpPreferenceEnum.I_PV6_PREFERRED;
                                                    }};;
                                                    dns = new DnsServiceDiscovery("nulla") {{
                                                        ipPreference = IpPreferenceEnum.I_PV4_PREFERRED;
                                                        responseType = DnsResponseTypeEnum.LOADBALANCER;
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "magnam";
                            }};, "delectus", "numquam") {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "ex";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quae";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "expedita";
                meshOwner = "hic";
            }};            

            UpdateVirtualNodeResponse res = sdk.sdk.updateVirtualNode(req);

            if (res.updateVirtualNodeOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVirtualRouter

Updates an existing virtual router in a specified service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVirtualRouterRequest;
import org.openapis.openapi.models.operations.UpdateVirtualRouterRequestBody;
import org.openapis.openapi.models.operations.UpdateVirtualRouterRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateVirtualRouterResponse;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.PortProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VirtualRouterListener;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualRouterRequest req = new UpdateVirtualRouterRequest(                new UpdateVirtualRouterRequestBody(                new UpdateVirtualRouterRequestBodySpec() {{
                                                listeners = new org.openapis.openapi.models.shared.VirtualRouterListener[]{{
                                                    add(new VirtualRouterListener(                new PortMapping(657301L, PortProtocolEnum.TCP);) {{
                                                        portMapping = new PortMapping(627341L, PortProtocolEnum.TCP) {{
                                                            port = 151385L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                    }}),
                                                    add(new VirtualRouterListener(                new PortMapping(512488L, PortProtocolEnum.TCP);) {{
                                                        portMapping = new PortMapping(457835L, PortProtocolEnum.HTTP2) {{
                                                            port = 945419L;
                                                            protocol = PortProtocolEnum.TCP;
                                                        }};
                                                    }}),
                                                }};
                                            }};) {{
                                clientToken = "eveniet";
                            }};, "earum", "velit") {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "rerum";
                xAmzDate = "itaque";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "explicabo";
                meshOwner = "impedit";
            }};            

            UpdateVirtualRouterResponse res = sdk.sdk.updateVirtualRouter(req);

            if (res.updateVirtualRouterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVirtualService

Updates an existing virtual service in a specified service mesh.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVirtualServiceRequest;
import org.openapis.openapi.models.operations.UpdateVirtualServiceRequestBody;
import org.openapis.openapi.models.operations.UpdateVirtualServiceRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateVirtualServiceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VirtualNodeServiceProvider;
import org.openapis.openapi.models.shared.VirtualRouterServiceProvider;
import org.openapis.openapi.models.shared.VirtualServiceProvider;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualServiceRequest req = new UpdateVirtualServiceRequest(                new UpdateVirtualServiceRequestBody(                new UpdateVirtualServiceRequestBodySpec() {{
                                                provider = new VirtualServiceProvider() {{
                                                    virtualNode = new VirtualNodeServiceProvider("quis");;
                                                    virtualRouter = new VirtualRouterServiceProvider("facilis");;
                                                }};;
                                            }};) {{
                                clientToken = "ipsum";
                            }};, "ut", "quaerat") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "eveniet";
                xAmzDate = "dolor";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "iste";
                meshOwner = "illo";
            }};            

            UpdateVirtualServiceResponse res = sdk.sdk.updateVirtualService(req);

            if (res.updateVirtualServiceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
