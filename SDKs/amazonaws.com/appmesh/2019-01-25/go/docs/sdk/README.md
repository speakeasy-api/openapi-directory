# SDK

## Overview

<p>App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and control microservices. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility and helping to ensure high availability for your applications.</p> <p>App Mesh gives you consistent visibility and network traffic controls for every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and Amazon EC2.</p> <note> <p>App Mesh supports microservice applications that use service discovery naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS for Services and Pods</a> in the Kubernetes documentation.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appmesh/>
### Available Operations

* [CreateGatewayRoute](#creategatewayroute) - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* [CreateMesh](#createmesh) - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* [CreateRoute](#createroute) - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* [CreateVirtualGateway](#createvirtualgateway) - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* [CreateVirtualNode](#createvirtualnode) - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
* [CreateVirtualRouter](#createvirtualrouter) - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* [CreateVirtualService](#createvirtualservice) - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* [DeleteGatewayRoute](#deletegatewayroute) - Deletes an existing gateway route.
* [DeleteMesh](#deletemesh) - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* [DeleteRoute](#deleteroute) - Deletes an existing route.
* [DeleteVirtualGateway](#deletevirtualgateway) - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* [DeleteVirtualNode](#deletevirtualnode) - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* [DeleteVirtualRouter](#deletevirtualrouter) - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* [DeleteVirtualService](#deletevirtualservice) - Deletes an existing virtual service.
* [DescribeGatewayRoute](#describegatewayroute) - Describes an existing gateway route.
* [DescribeMesh](#describemesh) - Describes an existing service mesh.
* [DescribeRoute](#describeroute) - Describes an existing route.
* [DescribeVirtualGateway](#describevirtualgateway) - Describes an existing virtual gateway.
* [DescribeVirtualNode](#describevirtualnode) - Describes an existing virtual node.
* [DescribeVirtualRouter](#describevirtualrouter) - Describes an existing virtual router.
* [DescribeVirtualService](#describevirtualservice) - Describes an existing virtual service.
* [ListGatewayRoutes](#listgatewayroutes) - Returns a list of existing gateway routes that are associated to a virtual gateway.
* [ListMeshes](#listmeshes) - Returns a list of existing service meshes.
* [ListRoutes](#listroutes) - Returns a list of existing routes in a service mesh.
* [ListTagsForResource](#listtagsforresource) - List the tags for an App Mesh resource.
* [ListVirtualGateways](#listvirtualgateways) - Returns a list of existing virtual gateways in a service mesh.
* [ListVirtualNodes](#listvirtualnodes) - Returns a list of existing virtual nodes.
* [ListVirtualRouters](#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [ListVirtualServices](#listvirtualservices) - Returns a list of existing virtual services in a service mesh.
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [UntagResource](#untagresource) - Deletes specified tags from a resource.
* [UpdateGatewayRoute](#updategatewayroute) - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* [UpdateMesh](#updatemesh) - Updates an existing service mesh.
* [UpdateRoute](#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [UpdateVirtualGateway](#updatevirtualgateway) - Updates an existing virtual gateway in a specified service mesh.
* [UpdateVirtualNode](#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [UpdateVirtualRouter](#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.
* [UpdateVirtualService](#updatevirtualservice) - Updates an existing virtual service in a specified service mesh.

## CreateGatewayRoute

<p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGatewayRoute(ctx, operations.CreateGatewayRouteRequest{
        RequestBody: operations.CreateGatewayRouteRequestBody{
            ClientToken: sdk.String("veritatis"),
            GatewayRouteName: "itaque",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(318569),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "consequatur",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("est"),
                            Suffix: sdk.String("quibusdam"),
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("deserunt"),
                                    Prefix: sdk.String("distinctio"),
                                    Range: &shared.MatchRange{
                                        End: 841386,
                                        Start: 289406,
                                    },
                                    Regex: sdk.String("modi"),
                                    Suffix: sdk.String("qui"),
                                },
                                Name: "Mr. Shelly Lueilwitz",
                            },
                        },
                        Port: sdk.Int64(369808),
                        ServiceName: sdk.String("alias"),
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("dolorum"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                                Value: sdk.String("tempora"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(703737),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "tempore",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("delectus"),
                                    Prefix: sdk.String("eum"),
                                    Range: &shared.MatchRange{
                                        End: 248753,
                                        Start: 756107,
                                    },
                                    Regex: sdk.String("sint"),
                                    Suffix: sdk.String("aliquid"),
                                },
                                Name: "Terence Marquardt",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("debitis"),
                                    Prefix: sdk.String("a"),
                                    Range: &shared.MatchRange{
                                        End: 680056,
                                        Start: 447125,
                                    },
                                    Regex: sdk.String("in"),
                                    Suffix: sdk.String("illum"),
                                },
                                Name: "Jean Buckridge",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("facere"),
                            Suffix: sdk.String("ea"),
                        },
                        Method: shared.HTTPMethodEnumPut.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("laborum"),
                            Regex: sdk.String("accusamus"),
                        },
                        Port: sdk.Int64(249796),
                        Prefix: sdk.String("occaecati"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("accusamus"),
                                },
                                Name: "Abraham McKenzie",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("blanditiis"),
                                },
                                Name: "Timmy Feeney",
                            },
                        },
                    },
                },
                HTTPRoute: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("natus"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                                Value: sdk.String("molestiae"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(19193),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "nihil",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("distinctio"),
                                    Prefix: sdk.String("id"),
                                    Range: &shared.MatchRange{
                                        End: 287991,
                                        Start: 290077,
                                    },
                                    Regex: sdk.String("suscipit"),
                                    Suffix: sdk.String("natus"),
                                },
                                Name: "Duane Thiel II",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("et"),
                                    Prefix: sdk.String("excepturi"),
                                    Range: &shared.MatchRange{
                                        End: 354047,
                                        Start: 590873,
                                    },
                                    Regex: sdk.String("quos"),
                                    Suffix: sdk.String("sint"),
                                },
                                Name: "Angie Wisozk",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("eum"),
                            Suffix: sdk.String("dolor"),
                        },
                        Method: shared.HTTPMethodEnumPatch.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("odit"),
                            Regex: sdk.String("nemo"),
                        },
                        Port: sdk.Int64(97260),
                        Prefix: sdk.String("iure"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("debitis"),
                                },
                                Name: "Jasmine Lind",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("architecto"),
                                },
                                Name: "Elvira Herman",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("repellat"),
                                },
                                Name: "Louis Turner Sr.",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("praesentium"),
                                },
                                Name: "Victor Casper",
                            },
                        },
                    },
                },
                Priority: sdk.Int64(864934),
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "ea",
                    Value: "excepturi",
                },
                shared.TagRef{
                    Key: "odit",
                    Value: "ea",
                },
                shared.TagRef{
                    Key: "accusantium",
                    Value: "ab",
                },
                shared.TagRef{
                    Key: "maiores",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        MeshName: "voluptatibus",
        MeshOwner: sdk.String("perferendis"),
        VirtualGatewayName: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayRouteOutput != nil {
        // handle response
    }
}
```

## CreateMesh

<p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMesh(ctx, operations.CreateMeshRequest{
        RequestBody: operations.CreateMeshRequestBody{
            ClientToken: sdk.String("amet"),
            MeshName: "aut",
            Spec: &operations.CreateMeshRequestBodySpec{
                EgressFilter: &shared.EgressFilter{
                    Type: shared.EgressFilterTypeEnumDropAll,
                },
                ServiceDiscovery: &shared.MeshServiceDiscovery{
                    IPPreference: shared.IPPreferenceEnumIPv4Preferred.ToPointer(),
                },
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "libero",
                    Value: "nobis",
                },
                shared.TagRef{
                    Key: "dolores",
                    Value: "quis",
                },
                shared.TagRef{
                    Key: "totam",
                    Value: "dignissimos",
                },
                shared.TagRef{
                    Key: "eaque",
                    Value: "quis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMeshOutput != nil {
        // handle response
    }
}
```

## CreateRoute

<p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRoute(ctx, operations.CreateRouteRequest{
        RequestBody: operations.CreateRouteRequestBody{
            ClientToken: sdk.String("vero"),
            RouteName: "nostrum",
            Spec: operations.CreateRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcRoute{
                    Action: shared.GrpcRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(928082),
                                VirtualNode: "omnis",
                                Weight: 704415,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(596656),
                                VirtualNode: "voluptatem",
                                Weight: 783645,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(164694),
                                VirtualNode: "blanditiis",
                                Weight: 621479,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(50370),
                                VirtualNode: "occaecati",
                                Weight: 699098,
                            },
                        },
                    },
                    Match: shared.GrpcRouteMatch{
                        Metadata: []shared.GrpcRouteMetadata{
                            shared.GrpcRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcRouteMetadataMatchMethod{
                                    Exact: sdk.String("asperiores"),
                                    Prefix: sdk.String("earum"),
                                    Range: &shared.MatchRange{
                                        End: 267262,
                                        Start: 613966,
                                    },
                                    Regex: sdk.String("dolorum"),
                                    Suffix: sdk.String("deleniti"),
                                },
                                Name: "Rene Rolfson",
                            },
                        },
                        MethodName: sdk.String("quaerat"),
                        Port: sdk.Int64(554242),
                        ServiceName: sdk.String("aliquid"),
                    },
                    RetryPolicy: &shared.GrpcRetryPolicy{
                        GrpcRetryEvents: []shared.GrpcRetryPolicyEventEnum{
                            shared.GrpcRetryPolicyEventEnumDeadlineExceeded,
                        },
                        HTTPRetryEvents: []string{
                            "qui",
                        },
                        MaxRetries: 218749,
                        PerRetryTimeout: shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(569574),
                        },
                        TCPRetryEvents: []shared.TCPRetryPolicyEventEnum{
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                        },
                    },
                    Timeout: &shared.GrpcTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(490459),
                        },
                        PerRequest: &shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(227414),
                        },
                    },
                },
                Http2Route: &shared.HTTPRoute{
                    Action: shared.HTTPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(254356),
                                VirtualNode: "veritatis",
                                Weight: 58029,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(56418),
                                VirtualNode: "iure",
                                Weight: 487838,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(311796),
                                VirtualNode: "accusamus",
                                Weight: 696344,
                            },
                        },
                    },
                    Match: shared.HTTPRouteMatch{
                        Headers: []shared.HTTPRouteHeader{
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("voluptas"),
                                    Prefix: sdk.String("natus"),
                                    Range: &shared.MatchRange{
                                        End: 179603,
                                        Start: 542499,
                                    },
                                    Regex: sdk.String("sit"),
                                    Suffix: sdk.String("fugiat"),
                                },
                                Name: "Latoya Parisian",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("dolorum"),
                                    Prefix: sdk.String("deleniti"),
                                    Range: &shared.MatchRange{
                                        End: 607045,
                                        Start: 896672,
                                    },
                                    Regex: sdk.String("distinctio"),
                                    Suffix: sdk.String("asperiores"),
                                },
                                Name: "Edna Klocko",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("eius"),
                                    Prefix: sdk.String("aspernatur"),
                                    Range: &shared.MatchRange{
                                        End: 20651,
                                        Start: 229219,
                                    },
                                    Regex: sdk.String("optio"),
                                    Suffix: sdk.String("accusamus"),
                                },
                                Name: "Jenna Hoppe",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("minima"),
                                    Prefix: sdk.String("repellendus"),
                                    Range: &shared.MatchRange{
                                        End: 519711,
                                        Start: 628982,
                                    },
                                    Regex: sdk.String("alias"),
                                    Suffix: sdk.String("at"),
                                },
                                Name: "Rhonda Kautzer",
                            },
                        },
                        Method: shared.HTTPMethodEnumHead.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("dolorum"),
                            Regex: sdk.String("a"),
                        },
                        Port: sdk.Int64(456130),
                        Prefix: sdk.String("harum"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("ipsum"),
                                },
                                Name: "Saul Fay",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("numquam"),
                                },
                                Name: "Florence Will",
                            },
                        },
                        Scheme: shared.HTTPSchemeEnumHTTP.ToPointer(),
                    },
                    RetryPolicy: &shared.HTTPRetryPolicy{
                        HTTPRetryEvents: []string{
                            "neque",
                            "sed",
                            "vel",
                        },
                        MaxRetries: 730442,
                        PerRetryTimeout: shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(646265),
                        },
                        TCPRetryEvents: []shared.TCPRetryPolicyEventEnum{
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                        },
                    },
                    Timeout: &shared.HTTPTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(277628),
                        },
                        PerRequest: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(586784),
                        },
                    },
                },
                HTTPRoute: &shared.HTTPRoute{
                    Action: shared.HTTPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(863856),
                                VirtualNode: "soluta",
                                Weight: 117531,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(674848),
                                VirtualNode: "totam",
                                Weight: 276894,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(132068),
                                VirtualNode: "dolores",
                                Weight: 716860,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(704474),
                                VirtualNode: "aliquid",
                                Weight: 463150,
                            },
                        },
                    },
                    Match: shared.HTTPRouteMatch{
                        Headers: []shared.HTTPRouteHeader{
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("temporibus"),
                                    Prefix: sdk.String("qui"),
                                    Range: &shared.MatchRange{
                                        End: 204865,
                                        Start: 144847,
                                    },
                                    Regex: sdk.String("magni"),
                                    Suffix: sdk.String("odio"),
                                },
                                Name: "Marion Reichert DDS",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("soluta"),
                                    Prefix: sdk.String("nobis"),
                                    Range: &shared.MatchRange{
                                        End: 92596,
                                        Start: 903720,
                                    },
                                    Regex: sdk.String("ipsum"),
                                    Suffix: sdk.String("veritatis"),
                                },
                                Name: "Isaac Reynolds DVM",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("dolorem"),
                                    Prefix: sdk.String("dolore"),
                                    Range: &shared.MatchRange{
                                        End: 286915,
                                        Start: 240829,
                                    },
                                    Regex: sdk.String("dolorum"),
                                    Suffix: sdk.String("architecto"),
                                },
                                Name: "Margaret Luettgen MD",
                            },
                        },
                        Method: shared.HTTPMethodEnumTrace.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("porro"),
                            Regex: sdk.String("doloribus"),
                        },
                        Port: sdk.Int64(281730),
                        Prefix: sdk.String("facilis"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("qui"),
                                },
                                Name: "Marsha Kuhic",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("quisquam"),
                                },
                                Name: "Arturo Hauck",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("voluptate"),
                                },
                                Name: "Meghan Wiegand",
                            },
                        },
                        Scheme: shared.HTTPSchemeEnumHTTPS.ToPointer(),
                    },
                    RetryPolicy: &shared.HTTPRetryPolicy{
                        HTTPRetryEvents: []string{
                            "odio",
                            "similique",
                            "facilis",
                            "vero",
                        },
                        MaxRetries: 498140,
                        PerRetryTimeout: shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(844550),
                        },
                        TCPRetryEvents: []shared.TCPRetryPolicyEventEnum{
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                        },
                    },
                    Timeout: &shared.HTTPTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(617877),
                        },
                        PerRequest: &shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(13236),
                        },
                    },
                },
                Priority: sdk.Int64(974259),
                TCPRoute: &shared.TCPRoute{
                    Action: shared.TCPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(862310),
                                VirtualNode: "fugit",
                                Weight: 780427,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(981830),
                                VirtualNode: "doloribus",
                                Weight: 478370,
                            },
                        },
                    },
                    Match: &shared.TCPRouteMatch{
                        Port: sdk.Int64(753570),
                    },
                    Timeout: &shared.TCPTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(4048),
                        },
                    },
                },
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "tempora",
                    Value: "ipsam",
                },
                shared.TagRef{
                    Key: "ea",
                    Value: "aspernatur",
                },
                shared.TagRef{
                    Key: "vel",
                    Value: "possimus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        MeshName: "quasi",
        MeshOwner: sdk.String("ex"),
        VirtualRouterName: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRouteOutput != nil {
        // handle response
    }
}
```

## CreateVirtualGateway

<p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVirtualGateway(ctx, operations.CreateVirtualGatewayRequest{
        RequestBody: operations.CreateVirtualGatewayRequestBody{
            ClientToken: sdk.String("excepturi"),
            Spec: operations.CreateVirtualGatewayRequestBodySpec{
                BackendDefaults: &shared.VirtualGatewayBackendDefaults{
                    ClientPolicy: &shared.VirtualGatewayClientPolicy{
                        TLS: &shared.VirtualGatewayClientPolicyTLS{
                            Certificate: &shared.VirtualGatewayClientTLSCertificate{
                                File: &shared.VirtualGatewayListenerTLSFileCertificate{
                                    CertificateChain: "voluptatibus",
                                    PrivateKey: "nostrum",
                                },
                                Sds: &shared.VirtualGatewayListenerTLSSdsCertificate{
                                    SecretName: "sapiente",
                                },
                            },
                            Enforce: sdk.Bool(false),
                            Ports: []int64{
                                906556,
                                411372,
                                774048,
                                359271,
                            },
                            Validation: shared.VirtualGatewayTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "aliquid",
                                            "inventore",
                                        },
                                    },
                                },
                                Trust: shared.VirtualGatewayTLSValidationContextTrust{
                                    Acm: &shared.VirtualGatewayTLSValidationContextAcmTrust{
                                        CertificateAuthorityArns: []string{
                                            "ea",
                                            "quo",
                                        },
                                    },
                                    File: &shared.VirtualGatewayTLSValidationContextFileTrust{
                                        CertificateChain: "consectetur",
                                    },
                                    Sds: &shared.VirtualGatewayTLSValidationContextSdsTrust{
                                        SecretName: "recusandae",
                                    },
                                },
                            },
                        },
                    },
                },
                Listeners: []shared.VirtualGatewayListener{
                    shared.VirtualGatewayListener{
                        ConnectionPool: &shared.VirtualGatewayConnectionPool{
                            Grpc: &shared.VirtualGatewayGrpcConnectionPool{
                                MaxRequests: 325310,
                            },
                            HTTP: &shared.VirtualGatewayHTTPConnectionPool{
                                MaxConnections: 53427,
                                MaxPendingRequests: sdk.Int64(952871),
                            },
                            Http2: &shared.VirtualGatewayHttp2ConnectionPool{
                                MaxRequests: 725595,
                            },
                        },
                        HealthCheck: &shared.VirtualGatewayHealthCheckPolicy{
                            HealthyThreshold: 13948,
                            IntervalMillis: 11427,
                            Path: sdk.String("deleniti"),
                            Port: sdk.Int64(770581),
                            Protocol: shared.VirtualGatewayPortProtocolEnumHTTP,
                            TimeoutMillis: 146946,
                            UnhealthyThreshold: 882860,
                        },
                        PortMapping: shared.VirtualGatewayPortMapping{
                            Port: 79522,
                            Protocol: shared.VirtualGatewayPortProtocolEnumHTTP,
                        },
                        TLS: &shared.VirtualGatewayListenerTLS{
                            Certificate: shared.VirtualGatewayListenerTLSCertificate{
                                Acm: &shared.VirtualGatewayListenerTLSAcmCertificate{
                                    CertificateArn: "et",
                                },
                                File: &shared.VirtualGatewayListenerTLSFileCertificate{
                                    CertificateChain: "dolorum",
                                    PrivateKey: "laborum",
                                },
                                Sds: &shared.VirtualGatewayListenerTLSSdsCertificate{
                                    SecretName: "placeat",
                                },
                            },
                            Mode: shared.VirtualGatewayListenerTLSModeEnumStrict,
                            Validation: &shared.VirtualGatewayListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "autem",
                                            "nobis",
                                        },
                                    },
                                },
                                Trust: shared.VirtualGatewayListenerTLSValidationContextTrust{
                                    File: &shared.VirtualGatewayTLSValidationContextFileTrust{
                                        CertificateChain: "quas",
                                    },
                                    Sds: &shared.VirtualGatewayTLSValidationContextSdsTrust{
                                        SecretName: "assumenda",
                                    },
                                },
                            },
                        },
                    },
                },
                Logging: &shared.VirtualGatewayLogging{
                    AccessLog: &shared.VirtualGatewayAccessLog{
                        File: &shared.VirtualGatewayFileAccessLog{
                            Format: &shared.LoggingFormat{
                                JSON: []shared.JSONFormatRef{
                                    shared.JSONFormatRef{
                                        Key: "voluptas",
                                        Value: "libero",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "quasi",
                                        Value: "tempora",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "numquam",
                                        Value: "explicabo",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "provident",
                                        Value: "ipsa",
                                    },
                                },
                                Text: sdk.String("molestiae"),
                            },
                            Path: "magnam",
                        },
                    },
                },
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "eius",
                    Value: "esse",
                },
                shared.TagRef{
                    Key: "esse",
                    Value: "rem",
                },
            },
            VirtualGatewayName: "fuga",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        MeshName: "eos",
        MeshOwner: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVirtualGatewayOutput != nil {
        // handle response
    }
}
```

## CreateVirtualNode

<p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVirtualNode(ctx, operations.CreateVirtualNodeRequest{
        RequestBody: operations.CreateVirtualNodeRequestBody{
            ClientToken: sdk.String("quisquam"),
            Spec: operations.CreateVirtualNodeRequestBodySpec{
                BackendDefaults: &shared.BackendDefaults{
                    ClientPolicy: &shared.ClientPolicy{
                        TLS: &shared.ClientPolicyTLS{
                            Certificate: &shared.ClientTLSCertificate{
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "veritatis",
                                    PrivateKey: "ipsa",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "id",
                                },
                            },
                            Enforce: sdk.Bool(false),
                            Ports: []int64{
                                206594,
                                778696,
                                847276,
                            },
                            Validation: shared.TLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "fuga",
                                            "eius",
                                            "eos",
                                            "voluptas",
                                        },
                                    },
                                },
                                Trust: shared.TLSValidationContextTrust{
                                    Acm: &shared.TLSValidationContextAcmTrust{
                                        CertificateAuthorityArns: []string{
                                            "cupiditate",
                                        },
                                    },
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "consequatur",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "tempora",
                                    },
                                },
                            },
                        },
                    },
                },
                Backends: []shared.Backend{
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "ipsam",
                                            PrivateKey: "aspernatur",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "sequi",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        459856,
                                        925164,
                                        44612,
                                        715179,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "dignissimos",
                                                    "inventore",
                                                    "nihil",
                                                    "totam",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "aliquam",
                                                    "odio",
                                                    "occaecati",
                                                    "commodi",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "sapiente",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "dolores",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "deserunt",
                        },
                    },
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "molestiae",
                                            PrivateKey: "accusantium",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "porro",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        556429,
                                        510017,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "deleniti",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "fuga",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "mollitia",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "incidunt",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "atque",
                        },
                    },
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "explicabo",
                                            PrivateKey: "minima",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "nisi",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        956406,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "ratione",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "saepe",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "occaecati",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "atque",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "et",
                        },
                    },
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "esse",
                                            PrivateKey: "eveniet",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "accusamus",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        458604,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "nam",
                                                    "vero",
                                                    "aliquid",
                                                    "quasi",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "vel",
                                                    "harum",
                                                    "molestiae",
                                                    "rerum",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "occaecati",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "minima",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "distinctio",
                        },
                    },
                },
                Listeners: []shared.Listener{
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 27069,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 636061,
                                MaxPendingRequests: sdk.Int64(731398),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 240020,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 766964,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 160538,
                            IntervalMillis: 9766,
                            Path: sdk.String("minus"),
                            Port: sdk.Int64(308286),
                            Protocol: shared.PortProtocolEnumGrpc,
                            TimeoutMillis: 232865,
                            UnhealthyThreshold: 458139,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(590984),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(857723),
                            },
                            MaxEjectionPercent: 557811,
                            MaxServerErrors: 457223,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 97468,
                            Protocol: shared.PortProtocolEnumGrpc,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(575751),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(820767),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(908844),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(815524),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(159414),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(628899),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(398434),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "tenetur",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "quae",
                                    PrivateKey: "earum",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "vel",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumPermissive,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "libero",
                                            "illum",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "soluta",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "accusantium",
                                    },
                                },
                            },
                        },
                    },
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 306986,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 958983,
                                MaxPendingRequests: sdk.Int64(119771),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 355369,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 443879,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 356707,
                            IntervalMillis: 391774,
                            Path: sdk.String("aut"),
                            Port: sdk.Int64(531849),
                            Protocol: shared.PortProtocolEnumHTTP,
                            TimeoutMillis: 845358,
                            UnhealthyThreshold: 401259,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(929292),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(99615),
                            },
                            MaxEjectionPercent: 609178,
                            MaxServerErrors: 945302,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 98478,
                            Protocol: shared.PortProtocolEnumGrpc,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(454162),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(326701),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(232744),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(614465),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(33074),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(15606),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(428796),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "mollitia",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "ab",
                                    PrivateKey: "corrupti",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "non",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumStrict,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "occaecati",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "numquam",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "impedit",
                                    },
                                },
                            },
                        },
                    },
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 131055,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 376226,
                                MaxPendingRequests: sdk.Int64(12036),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 491025,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 115484,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 981640,
                            IntervalMillis: 618480,
                            Path: sdk.String("velit"),
                            Port: sdk.Int64(974257),
                            Protocol: shared.PortProtocolEnumTCP,
                            TimeoutMillis: 990345,
                            UnhealthyThreshold: 45659,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumS.ToPointer(),
                                Value: sdk.Int64(310067),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumS.ToPointer(),
                                Value: sdk.Int64(831520),
                            },
                            MaxEjectionPercent: 638762,
                            MaxServerErrors: 807023,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 490305,
                            Protocol: shared.PortProtocolEnumHttp2,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(368102),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(312753),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(801836),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(70447),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(683573),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(380729),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(633931),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "est",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "recusandae",
                                    PrivateKey: "totam",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "fugiat",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumPermissive,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "quos",
                                            "vel",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "labore",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "possimus",
                                    },
                                },
                            },
                        },
                    },
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 706575,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 738227,
                                MaxPendingRequests: sdk.Int64(414857),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 447144,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 360545,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 968904,
                            IntervalMillis: 828657,
                            Path: sdk.String("nemo"),
                            Port: sdk.Int64(924967),
                            Protocol: shared.PortProtocolEnumTCP,
                            TimeoutMillis: 46007,
                            UnhealthyThreshold: 738683,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumS.ToPointer(),
                                Value: sdk.Int64(449083),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumS.ToPointer(),
                                Value: sdk.Int64(937285),
                            },
                            MaxEjectionPercent: 814967,
                            MaxServerErrors: 257233,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 985492,
                            Protocol: shared.PortProtocolEnumTCP,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(697142),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(897071),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(121059),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(241545),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(228263),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(489509),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(891523),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "consectetur",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "corporis",
                                    PrivateKey: "harum",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "laboriosam",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumStrict,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "libero",
                                            "vitae",
                                            "accusamus",
                                            "similique",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "tempora",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "aspernatur",
                                    },
                                },
                            },
                        },
                    },
                },
                Logging: &shared.Logging{
                    AccessLog: &shared.AccessLog{
                        File: &shared.FileAccessLog{
                            Format: &shared.LoggingFormat{
                                JSON: []shared.JSONFormatRef{
                                    shared.JSONFormatRef{
                                        Key: "voluptas",
                                        Value: "voluptas",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "minima",
                                        Value: "nobis",
                                    },
                                },
                                Text: sdk.String("dolorum"),
                            },
                            Path: "adipisci",
                        },
                    },
                },
                ServiceDiscovery: &shared.ServiceDiscovery{
                    AwsCloudMap: &shared.AwsCloudMapServiceDiscovery{
                        Attributes: []shared.AwsCloudMapInstanceAttribute{
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "dolores",
                                Value: "blanditiis",
                            },
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "in",
                                Value: "dolore",
                            },
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "aliquam",
                                Value: "officiis",
                            },
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "temporibus",
                                Value: "ullam",
                            },
                        },
                        IPPreference: shared.IPPreferenceEnumIPv6Preferred.ToPointer(),
                        NamespaceName: "cum",
                        ServiceName: "blanditiis",
                    },
                    DNS: &shared.DNSServiceDiscovery{
                        Hostname: "naive-unique.biz",
                        IPPreference: shared.IPPreferenceEnumIPv4Only.ToPointer(),
                        ResponseType: shared.DNSResponseTypeEnumEndpoints.ToPointer(),
                    },
                },
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "totam",
                    Value: "hic",
                },
                shared.TagRef{
                    Key: "exercitationem",
                    Value: "nobis",
                },
                shared.TagRef{
                    Key: "sit",
                    Value: "rerum",
                },
                shared.TagRef{
                    Key: "sed",
                    Value: "reiciendis",
                },
            },
            VirtualNodeName: "explicabo",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolore"),
        MeshName: "laborum",
        MeshOwner: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVirtualNodeOutput != nil {
        // handle response
    }
}
```

## CreateVirtualRouter

<p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVirtualRouter(ctx, operations.CreateVirtualRouterRequest{
        RequestBody: operations.CreateVirtualRouterRequestBody{
            ClientToken: sdk.String("in"),
            Spec: operations.CreateVirtualRouterRequestBodySpec{
                Listeners: []shared.VirtualRouterListener{
                    shared.VirtualRouterListener{
                        PortMapping: shared.PortMapping{
                            Port: 696077,
                            Protocol: shared.PortProtocolEnumHTTP,
                        },
                    },
                    shared.VirtualRouterListener{
                        PortMapping: shared.PortMapping{
                            Port: 378326,
                            Protocol: shared.PortProtocolEnumHttp2,
                        },
                    },
                },
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "suscipit",
                    Value: "sapiente",
                },
            },
            VirtualRouterName: "debitis",
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("sed"),
        MeshName: "provident",
        MeshOwner: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVirtualRouterOutput != nil {
        // handle response
    }
}
```

## CreateVirtualService

<p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVirtualService(ctx, operations.CreateVirtualServiceRequest{
        RequestBody: operations.CreateVirtualServiceRequestBody{
            ClientToken: sdk.String("necessitatibus"),
            Spec: operations.CreateVirtualServiceRequestBodySpec{
                Provider: &shared.VirtualServiceProvider{
                    VirtualNode: &shared.VirtualNodeServiceProvider{
                        VirtualNodeName: "ipsum",
                    },
                    VirtualRouter: &shared.VirtualRouterServiceProvider{
                        VirtualRouterName: "ea",
                    },
                },
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "quos",
                    Value: "voluptatibus",
                },
                shared.TagRef{
                    Key: "tempora",
                    Value: "tempora",
                },
                shared.TagRef{
                    Key: "voluptate",
                    Value: "reiciendis",
                },
            },
            VirtualServiceName: "ex",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        MeshName: "ipsam",
        MeshOwner: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVirtualServiceOutput != nil {
        // handle response
    }
}
```

## DeleteGatewayRoute

Deletes an existing gateway route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGatewayRoute(ctx, operations.DeleteGatewayRouteRequest{
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        GatewayRouteName: "reiciendis",
        MeshName: "nulla",
        MeshOwner: sdk.String("magni"),
        VirtualGatewayName: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGatewayRouteOutput != nil {
        // handle response
    }
}
```

## DeleteMesh

<p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMesh(ctx, operations.DeleteMeshRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        MeshName: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMeshOutput != nil {
        // handle response
    }
}
```

## DeleteRoute

Deletes an existing route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRoute(ctx, operations.DeleteRouteRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("hic"),
        MeshName: "expedita",
        MeshOwner: sdk.String("debitis"),
        RouteName: "neque",
        VirtualRouterName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRouteOutput != nil {
        // handle response
    }
}
```

## DeleteVirtualGateway

Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVirtualGateway(ctx, operations.DeleteVirtualGatewayRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("atque"),
        MeshName: "fugit",
        MeshOwner: sdk.String("ut"),
        VirtualGatewayName: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualGatewayOutput != nil {
        // handle response
    }
}
```

## DeleteVirtualNode

<p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVirtualNode(ctx, operations.DeleteVirtualNodeRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        MeshName: "sit",
        MeshOwner: sdk.String("voluptatum"),
        VirtualNodeName: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualNodeOutput != nil {
        // handle response
    }
}
```

## DeleteVirtualRouter

<p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVirtualRouter(ctx, operations.DeleteVirtualRouterRequest{
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("sit"),
        MeshName: "vel",
        MeshOwner: sdk.String("nostrum"),
        VirtualRouterName: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualRouterOutput != nil {
        // handle response
    }
}
```

## DeleteVirtualService

Deletes an existing virtual service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVirtualService(ctx, operations.DeleteVirtualServiceRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        MeshName: "architecto",
        MeshOwner: sdk.String("occaecati"),
        VirtualServiceName: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualServiceOutput != nil {
        // handle response
    }
}
```

## DescribeGatewayRoute

Describes an existing gateway route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGatewayRoute(ctx, operations.DescribeGatewayRouteRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("alias"),
        GatewayRouteName: "amet",
        MeshName: "deserunt",
        MeshOwner: sdk.String("voluptate"),
        VirtualGatewayName: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGatewayRouteOutput != nil {
        // handle response
    }
}
```

## DescribeMesh

Describes an existing service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMesh(ctx, operations.DescribeMeshRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("est"),
        MeshName: "quidem",
        MeshOwner: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMeshOutput != nil {
        // handle response
    }
}
```

## DescribeRoute

Describes an existing route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRoute(ctx, operations.DescribeRouteRequest{
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        MeshName: "repudiandae",
        MeshOwner: sdk.String("quasi"),
        RouteName: "atque",
        VirtualRouterName: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRouteOutput != nil {
        // handle response
    }
}
```

## DescribeVirtualGateway

Describes an existing virtual gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVirtualGateway(ctx, operations.DescribeVirtualGatewayRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
        MeshName: "amet",
        MeshOwner: sdk.String("assumenda"),
        VirtualGatewayName: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVirtualGatewayOutput != nil {
        // handle response
    }
}
```

## DescribeVirtualNode

Describes an existing virtual node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVirtualNode(ctx, operations.DescribeVirtualNodeRequest{
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("minima"),
        MeshName: "aspernatur",
        MeshOwner: sdk.String("ex"),
        VirtualNodeName: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVirtualNodeOutput != nil {
        // handle response
    }
}
```

## DescribeVirtualRouter

Describes an existing virtual router.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVirtualRouter(ctx, operations.DescribeVirtualRouterRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("atque"),
        MeshName: "atque",
        MeshOwner: sdk.String("sunt"),
        VirtualRouterName: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVirtualRouterOutput != nil {
        // handle response
    }
}
```

## DescribeVirtualService

Describes an existing virtual service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVirtualService(ctx, operations.DescribeVirtualServiceRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("dicta"),
        MeshName: "accusantium",
        MeshOwner: sdk.String("beatae"),
        VirtualServiceName: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVirtualServiceOutput != nil {
        // handle response
    }
}
```

## ListGatewayRoutes

Returns a list of existing gateway routes that are associated to a virtual gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGatewayRoutes(ctx, operations.ListGatewayRoutesRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("saepe"),
        Limit: sdk.Int64(160467),
        MeshName: "occaecati",
        MeshOwner: sdk.String("officiis"),
        NextToken: sdk.String("perspiciatis"),
        VirtualGatewayName: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGatewayRoutesOutput != nil {
        // handle response
    }
}
```

## ListMeshes

Returns a list of existing service meshes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMeshes(ctx, operations.ListMeshesRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quis"),
        Limit: sdk.Int64(440264),
        NextToken: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMeshesOutput != nil {
        // handle response
    }
}
```

## ListRoutes

Returns a list of existing routes in a service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRoutes(ctx, operations.ListRoutesRequest{
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        Limit: sdk.Int64(434156),
        MeshName: "ipsa",
        MeshOwner: sdk.String("totam"),
        NextToken: sdk.String("quae"),
        VirtualRouterName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoutesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for an App Mesh resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("laborum"),
        Limit: sdk.Int64(715208),
        NextToken: sdk.String("voluptatum"),
        ResourceArn: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListVirtualGateways

Returns a list of existing virtual gateways in a service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVirtualGateways(ctx, operations.ListVirtualGatewaysRequest{
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        Limit: sdk.Int64(649078),
        MeshName: "voluptas",
        MeshOwner: sdk.String("alias"),
        NextToken: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualGatewaysOutput != nil {
        // handle response
    }
}
```

## ListVirtualNodes

Returns a list of existing virtual nodes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVirtualNodes(ctx, operations.ListVirtualNodesRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        Limit: sdk.Int64(63207),
        MeshName: "recusandae",
        MeshOwner: sdk.String("omnis"),
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualNodesOutput != nil {
        // handle response
    }
}
```

## ListVirtualRouters

Returns a list of existing virtual routers in a service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVirtualRouters(ctx, operations.ListVirtualRoutersRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        Limit: sdk.Int64(432606),
        MeshName: "nemo",
        MeshOwner: sdk.String("recusandae"),
        NextToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualRoutersOutput != nil {
        // handle response
    }
}
```

## ListVirtualServices

Returns a list of existing virtual services in a service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVirtualServices(ctx, operations.ListVirtualServicesRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ullam"),
        Limit: sdk.Int64(96804),
        MeshName: "animi",
        MeshOwner: sdk.String("nostrum"),
        NextToken: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualServicesOutput != nil {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "possimus",
                    Value: "animi",
                },
                shared.TagRef{
                    Key: "ex",
                    Value: "aliquid",
                },
                shared.TagRef{
                    Key: "accusantium",
                    Value: "repellat",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        ResourceArn: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

Deletes specified tags from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        RequestBody: operations.UntagResourceRequestBody{
            TagKeys: []string{
                "voluptatibus",
                "molestias",
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("quis"),
        ResourceArn: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateGatewayRoute

Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGatewayRoute(ctx, operations.UpdateGatewayRouteRequest{
        RequestBody: operations.UpdateGatewayRouteRequestBody{
            ClientToken: sdk.String("fugit"),
            Spec: operations.UpdateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(62636),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "perferendis",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("velit"),
                            Suffix: sdk.String("aspernatur"),
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("eius"),
                                    Prefix: sdk.String("rem"),
                                    Range: &shared.MatchRange{
                                        End: 871083,
                                        Start: 773084,
                                    },
                                    Regex: sdk.String("eos"),
                                    Suffix: sdk.String("sapiente"),
                                },
                                Name: "Ms. Cheryl Hane",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("earum"),
                                    Prefix: sdk.String("soluta"),
                                    Range: &shared.MatchRange{
                                        End: 940782,
                                        Start: 848151,
                                    },
                                    Regex: sdk.String("eaque"),
                                    Suffix: sdk.String("earum"),
                                },
                                Name: "Cary Toy",
                            },
                        },
                        Port: sdk.Int64(380335),
                        ServiceName: sdk.String("dolorem"),
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("cumque"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                                Value: sdk.String("ratione"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(656762),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "necessitatibus",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("consequatur"),
                                    Prefix: sdk.String("quasi"),
                                    Range: &shared.MatchRange{
                                        End: 90233,
                                        Start: 497777,
                                    },
                                    Regex: sdk.String("natus"),
                                    Suffix: sdk.String("occaecati"),
                                },
                                Name: "Josephine Boyer",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("nulla"),
                                    Prefix: sdk.String("necessitatibus"),
                                    Range: &shared.MatchRange{
                                        End: 58534,
                                        Start: 271113,
                                    },
                                    Regex: sdk.String("nihil"),
                                    Suffix: sdk.String("molestiae"),
                                },
                                Name: "Marlene Koch",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("reiciendis"),
                                    Prefix: sdk.String("vel"),
                                    Range: &shared.MatchRange{
                                        End: 99958,
                                        Start: 857125,
                                    },
                                    Regex: sdk.String("doloremque"),
                                    Suffix: sdk.String("dicta"),
                                },
                                Name: "Anita Koch",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("aliquid"),
                                    Prefix: sdk.String("ipsa"),
                                    Range: &shared.MatchRange{
                                        End: 671384,
                                        Start: 123844,
                                    },
                                    Regex: sdk.String("nostrum"),
                                    Suffix: sdk.String("fugiat"),
                                },
                                Name: "Gene Nikolaus",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("perferendis"),
                            Suffix: sdk.String("eum"),
                        },
                        Method: shared.HTTPMethodEnumPut.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("iste"),
                            Regex: sdk.String("id"),
                        },
                        Port: sdk.Int64(70042),
                        Prefix: sdk.String("error"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("voluptates"),
                                },
                                Name: "Cameron Reinger",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("enim"),
                                },
                                Name: "Estelle Jakubowski",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("ut"),
                                },
                                Name: "Lula Bartell",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("aliquid"),
                                },
                                Name: "Miss Nora Moen",
                            },
                        },
                    },
                },
                HTTPRoute: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("voluptatem"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                                Value: sdk.String("officiis"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(103298),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "fuga",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("debitis"),
                                    Prefix: sdk.String("voluptatem"),
                                    Range: &shared.MatchRange{
                                        End: 1207,
                                        Start: 534917,
                                    },
                                    Regex: sdk.String("earum"),
                                    Suffix: sdk.String("ex"),
                                },
                                Name: "Ian Schinner",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("ratione"),
                                    Prefix: sdk.String("ullam"),
                                    Range: &shared.MatchRange{
                                        End: 19122,
                                        Start: 848341,
                                    },
                                    Regex: sdk.String("totam"),
                                    Suffix: sdk.String("impedit"),
                                },
                                Name: "Alton Hintz",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("aliquam"),
                                    Prefix: sdk.String("inventore"),
                                    Range: &shared.MatchRange{
                                        End: 537279,
                                        Start: 85311,
                                    },
                                    Regex: sdk.String("tempora"),
                                    Suffix: sdk.String("dolor"),
                                },
                                Name: "Alice Bailey",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("ab"),
                                    Prefix: sdk.String("laudantium"),
                                    Range: &shared.MatchRange{
                                        End: 65604,
                                        Start: 222658,
                                    },
                                    Regex: sdk.String("fugiat"),
                                    Suffix: sdk.String("ipsam"),
                                },
                                Name: "Cynthia Macejkovic",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("officiis"),
                            Suffix: sdk.String("esse"),
                        },
                        Method: shared.HTTPMethodEnumPatch.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("sed"),
                            Regex: sdk.String("veniam"),
                        },
                        Port: sdk.Int64(199596),
                        Prefix: sdk.String("expedita"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("vel"),
                                },
                                Name: "Miss Oscar Heller",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("nobis"),
                                },
                                Name: "Mrs. Kate Cronin",
                            },
                        },
                    },
                },
                Priority: sdk.Int64(95619),
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        GatewayRouteName: "repudiandae",
        MeshName: "optio",
        MeshOwner: sdk.String("occaecati"),
        VirtualGatewayName: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGatewayRouteOutput != nil {
        // handle response
    }
}
```

## UpdateMesh

Updates an existing service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateMesh(ctx, operations.UpdateMeshRequest{
        RequestBody: operations.UpdateMeshRequestBody{
            ClientToken: sdk.String("voluptate"),
            Spec: &operations.UpdateMeshRequestBodySpec{
                EgressFilter: &shared.EgressFilter{
                    Type: shared.EgressFilterTypeEnumDropAll,
                },
                ServiceDiscovery: &shared.MeshServiceDiscovery{
                    IPPreference: shared.IPPreferenceEnumIPv4Only.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        MeshName: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMeshOutput != nil {
        // handle response
    }
}
```

## UpdateRoute

Updates an existing route for a specified service mesh and virtual router.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRoute(ctx, operations.UpdateRouteRequest{
        RequestBody: operations.UpdateRouteRequestBody{
            ClientToken: sdk.String("fuga"),
            Spec: operations.UpdateRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcRoute{
                    Action: shared.GrpcRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(277340),
                                VirtualNode: "quasi",
                                Weight: 524380,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(851854),
                                VirtualNode: "dicta",
                                Weight: 395544,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(159845),
                                VirtualNode: "consectetur",
                                Weight: 46806,
                            },
                        },
                    },
                    Match: shared.GrpcRouteMatch{
                        Metadata: []shared.GrpcRouteMetadata{
                            shared.GrpcRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcRouteMetadataMatchMethod{
                                    Exact: sdk.String("reiciendis"),
                                    Prefix: sdk.String("soluta"),
                                    Range: &shared.MatchRange{
                                        End: 3860,
                                        Start: 608989,
                                    },
                                    Regex: sdk.String("eos"),
                                    Suffix: sdk.String("occaecati"),
                                },
                                Name: "Ernest Bode",
                            },
                            shared.GrpcRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcRouteMetadataMatchMethod{
                                    Exact: sdk.String("voluptatibus"),
                                    Prefix: sdk.String("distinctio"),
                                    Range: &shared.MatchRange{
                                        End: 608593,
                                        Start: 966390,
                                    },
                                    Regex: sdk.String("minima"),
                                    Suffix: sdk.String("praesentium"),
                                },
                                Name: "Oscar Smith",
                            },
                            shared.GrpcRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcRouteMetadataMatchMethod{
                                    Exact: sdk.String("itaque"),
                                    Prefix: sdk.String("commodi"),
                                    Range: &shared.MatchRange{
                                        End: 520761,
                                        Start: 936618,
                                    },
                                    Regex: sdk.String("modi"),
                                    Suffix: sdk.String("nam"),
                                },
                                Name: "Kenneth Hilpert Sr.",
                            },
                        },
                        MethodName: sdk.String("non"),
                        Port: sdk.Int64(978548),
                        ServiceName: sdk.String("enim"),
                    },
                    RetryPolicy: &shared.GrpcRetryPolicy{
                        GrpcRetryEvents: []shared.GrpcRetryPolicyEventEnum{
                            shared.GrpcRetryPolicyEventEnumUnavailable,
                            shared.GrpcRetryPolicyEventEnumResourceExhausted,
                            shared.GrpcRetryPolicyEventEnumInternal,
                        },
                        HTTPRetryEvents: []string{
                            "reprehenderit",
                            "est",
                        },
                        MaxRetries: 336102,
                        PerRetryTimeout: shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(880679),
                        },
                        TCPRetryEvents: []shared.TCPRetryPolicyEventEnum{
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                        },
                    },
                    Timeout: &shared.GrpcTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(900103),
                        },
                        PerRequest: &shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(404306),
                        },
                    },
                },
                Http2Route: &shared.HTTPRoute{
                    Action: shared.HTTPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(895346),
                                VirtualNode: "delectus",
                                Weight: 65082,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(791880),
                                VirtualNode: "fuga",
                                Weight: 675689,
                            },
                        },
                    },
                    Match: shared.HTTPRouteMatch{
                        Headers: []shared.HTTPRouteHeader{
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("velit"),
                                    Prefix: sdk.String("atque"),
                                    Range: &shared.MatchRange{
                                        End: 216457,
                                        Start: 773035,
                                    },
                                    Regex: sdk.String("magni"),
                                    Suffix: sdk.String("soluta"),
                                },
                                Name: "Alton Grimes",
                            },
                        },
                        Method: shared.HTTPMethodEnumHead.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("dignissimos"),
                            Regex: sdk.String("neque"),
                        },
                        Port: sdk.Int64(778172),
                        Prefix: sdk.String("deleniti"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("iure"),
                                },
                                Name: "Camille Kautzer",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("inventore"),
                                },
                                Name: "Wm Brakus",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("porro"),
                                },
                                Name: "Ms. Sheila Blanda",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("beatae"),
                                },
                                Name: "Marshall Kemmer",
                            },
                        },
                        Scheme: shared.HTTPSchemeEnumHTTPS.ToPointer(),
                    },
                    RetryPolicy: &shared.HTTPRetryPolicy{
                        HTTPRetryEvents: []string{
                            "dicta",
                            "impedit",
                            "voluptatibus",
                            "iste",
                        },
                        MaxRetries: 932562,
                        PerRetryTimeout: shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(391797),
                        },
                        TCPRetryEvents: []shared.TCPRetryPolicyEventEnum{
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                        },
                    },
                    Timeout: &shared.HTTPTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(673838),
                        },
                        PerRequest: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(224467),
                        },
                    },
                },
                HTTPRoute: &shared.HTTPRoute{
                    Action: shared.HTTPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(24753),
                                VirtualNode: "doloremque",
                                Weight: 7468,
                            },
                            shared.WeightedTarget{
                                Port: sdk.Int64(639705),
                                VirtualNode: "recusandae",
                                Weight: 408303,
                            },
                        },
                    },
                    Match: shared.HTTPRouteMatch{
                        Headers: []shared.HTTPRouteHeader{
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("voluptas"),
                                    Prefix: sdk.String("facilis"),
                                    Range: &shared.MatchRange{
                                        End: 809365,
                                        Start: 596065,
                                    },
                                    Regex: sdk.String("expedita"),
                                    Suffix: sdk.String("deleniti"),
                                },
                                Name: "Karl Herman",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("animi"),
                                    Prefix: sdk.String("impedit"),
                                    Range: &shared.MatchRange{
                                        End: 373040,
                                        Start: 357425,
                                    },
                                    Regex: sdk.String("est"),
                                    Suffix: sdk.String("error"),
                                },
                                Name: "Lucille Bogan",
                            },
                            shared.HTTPRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("vitae"),
                                    Prefix: sdk.String("inventore"),
                                    Range: &shared.MatchRange{
                                        End: 212434,
                                        Start: 322017,
                                    },
                                    Regex: sdk.String("qui"),
                                    Suffix: sdk.String("iste"),
                                },
                                Name: "Vivian Rodriguez",
                            },
                        },
                        Method: shared.HTTPMethodEnumOptions.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("odio"),
                            Regex: sdk.String("fugit"),
                        },
                        Port: sdk.Int64(545),
                        Prefix: sdk.String("magni"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("quae"),
                                },
                                Name: "Pauline Durgan",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("et"),
                                },
                                Name: "Lindsay Stiedemann",
                            },
                        },
                        Scheme: shared.HTTPSchemeEnumHTTP.ToPointer(),
                    },
                    RetryPolicy: &shared.HTTPRetryPolicy{
                        HTTPRetryEvents: []string{
                            "nostrum",
                        },
                        MaxRetries: 605712,
                        PerRetryTimeout: shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(115661),
                        },
                        TCPRetryEvents: []shared.TCPRetryPolicyEventEnum{
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                            shared.TCPRetryPolicyEventEnumConnectionError,
                        },
                    },
                    Timeout: &shared.HTTPTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(854460),
                        },
                        PerRequest: &shared.Duration{
                            Unit: shared.DurationUnitEnumMs.ToPointer(),
                            Value: sdk.Int64(554603),
                        },
                    },
                },
                Priority: sdk.Int64(811939),
                TCPRoute: &shared.TCPRoute{
                    Action: shared.TCPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                Port: sdk.Int64(479385),
                                VirtualNode: "ipsa",
                                Weight: 914864,
                            },
                        },
                    },
                    Match: &shared.TCPRouteMatch{
                        Port: sdk.Int64(80061),
                    },
                    Timeout: &shared.TCPTimeout{
                        Idle: &shared.Duration{
                            Unit: shared.DurationUnitEnumS.ToPointer(),
                            Value: sdk.Int64(517137),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("dolores"),
        MeshName: "assumenda",
        MeshOwner: sdk.String("beatae"),
        RouteName: "est",
        VirtualRouterName: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRouteOutput != nil {
        // handle response
    }
}
```

## UpdateVirtualGateway

Updates an existing virtual gateway in a specified service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVirtualGateway(ctx, operations.UpdateVirtualGatewayRequest{
        RequestBody: operations.UpdateVirtualGatewayRequestBody{
            ClientToken: sdk.String("corrupti"),
            Spec: operations.UpdateVirtualGatewayRequestBodySpec{
                BackendDefaults: &shared.VirtualGatewayBackendDefaults{
                    ClientPolicy: &shared.VirtualGatewayClientPolicy{
                        TLS: &shared.VirtualGatewayClientPolicyTLS{
                            Certificate: &shared.VirtualGatewayClientTLSCertificate{
                                File: &shared.VirtualGatewayListenerTLSFileCertificate{
                                    CertificateChain: "molestiae",
                                    PrivateKey: "provident",
                                },
                                Sds: &shared.VirtualGatewayListenerTLSSdsCertificate{
                                    SecretName: "accusamus",
                                },
                            },
                            Enforce: sdk.Bool(false),
                            Ports: []int64{
                                733289,
                                575078,
                                409726,
                                421819,
                            },
                            Validation: shared.VirtualGatewayTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "rerum",
                                            "laudantium",
                                        },
                                    },
                                },
                                Trust: shared.VirtualGatewayTLSValidationContextTrust{
                                    Acm: &shared.VirtualGatewayTLSValidationContextAcmTrust{
                                        CertificateAuthorityArns: []string{
                                            "officiis",
                                            "voluptatibus",
                                        },
                                    },
                                    File: &shared.VirtualGatewayTLSValidationContextFileTrust{
                                        CertificateChain: "cum",
                                    },
                                    Sds: &shared.VirtualGatewayTLSValidationContextSdsTrust{
                                        SecretName: "at",
                                    },
                                },
                            },
                        },
                    },
                },
                Listeners: []shared.VirtualGatewayListener{
                    shared.VirtualGatewayListener{
                        ConnectionPool: &shared.VirtualGatewayConnectionPool{
                            Grpc: &shared.VirtualGatewayGrpcConnectionPool{
                                MaxRequests: 156653,
                            },
                            HTTP: &shared.VirtualGatewayHTTPConnectionPool{
                                MaxConnections: 694158,
                                MaxPendingRequests: sdk.Int64(684126),
                            },
                            Http2: &shared.VirtualGatewayHttp2ConnectionPool{
                                MaxRequests: 919508,
                            },
                        },
                        HealthCheck: &shared.VirtualGatewayHealthCheckPolicy{
                            HealthyThreshold: 34070,
                            IntervalMillis: 710456,
                            Path: sdk.String("officiis"),
                            Port: sdk.Int64(177005),
                            Protocol: shared.VirtualGatewayPortProtocolEnumGrpc,
                            TimeoutMillis: 483518,
                            UnhealthyThreshold: 510128,
                        },
                        PortMapping: shared.VirtualGatewayPortMapping{
                            Port: 140316,
                            Protocol: shared.VirtualGatewayPortProtocolEnumHTTP,
                        },
                        TLS: &shared.VirtualGatewayListenerTLS{
                            Certificate: shared.VirtualGatewayListenerTLSCertificate{
                                Acm: &shared.VirtualGatewayListenerTLSAcmCertificate{
                                    CertificateArn: "corporis",
                                },
                                File: &shared.VirtualGatewayListenerTLSFileCertificate{
                                    CertificateChain: "error",
                                    PrivateKey: "earum",
                                },
                                Sds: &shared.VirtualGatewayListenerTLSSdsCertificate{
                                    SecretName: "adipisci",
                                },
                            },
                            Mode: shared.VirtualGatewayListenerTLSModeEnumDisabled,
                            Validation: &shared.VirtualGatewayListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "ut",
                                            "quidem",
                                            "quis",
                                        },
                                    },
                                },
                                Trust: shared.VirtualGatewayListenerTLSValidationContextTrust{
                                    File: &shared.VirtualGatewayTLSValidationContextFileTrust{
                                        CertificateChain: "beatae",
                                    },
                                    Sds: &shared.VirtualGatewayTLSValidationContextSdsTrust{
                                        SecretName: "unde",
                                    },
                                },
                            },
                        },
                    },
                },
                Logging: &shared.VirtualGatewayLogging{
                    AccessLog: &shared.VirtualGatewayAccessLog{
                        File: &shared.VirtualGatewayFileAccessLog{
                            Format: &shared.LoggingFormat{
                                JSON: []shared.JSONFormatRef{
                                    shared.JSONFormatRef{
                                        Key: "delectus",
                                        Value: "cupiditate",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "fugit",
                                        Value: "numquam",
                                    },
                                },
                                Text: sdk.String("numquam"),
                            },
                            Path: "nesciunt",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("qui"),
        MeshName: "expedita",
        MeshOwner: sdk.String("voluptatum"),
        VirtualGatewayName: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVirtualGatewayOutput != nil {
        // handle response
    }
}
```

## UpdateVirtualNode

Updates an existing virtual node in a specified service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVirtualNode(ctx, operations.UpdateVirtualNodeRequest{
        RequestBody: operations.UpdateVirtualNodeRequestBody{
            ClientToken: sdk.String("minima"),
            Spec: operations.UpdateVirtualNodeRequestBodySpec{
                BackendDefaults: &shared.BackendDefaults{
                    ClientPolicy: &shared.ClientPolicy{
                        TLS: &shared.ClientPolicyTLS{
                            Certificate: &shared.ClientTLSCertificate{
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "placeat",
                                    PrivateKey: "enim",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "neque",
                                },
                            },
                            Enforce: sdk.Bool(false),
                            Ports: []int64{
                                796397,
                                433077,
                            },
                            Validation: shared.TLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "corporis",
                                            "magnam",
                                        },
                                    },
                                },
                                Trust: shared.TLSValidationContextTrust{
                                    Acm: &shared.TLSValidationContextAcmTrust{
                                        CertificateAuthorityArns: []string{
                                            "maiores",
                                            "tempore",
                                            "aperiam",
                                            "libero",
                                        },
                                    },
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "ratione",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "labore",
                                    },
                                },
                            },
                        },
                    },
                },
                Backends: []shared.Backend{
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "occaecati",
                                            PrivateKey: "voluptas",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "quo",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        795591,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "nostrum",
                                                    "est",
                                                    "impedit",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "tempore",
                                                    "vero",
                                                    "odit",
                                                    "repellat",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "pariatur",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "nemo",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "reprehenderit",
                        },
                    },
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "aperiam",
                                            PrivateKey: "odio",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "minima",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        496915,
                                        567846,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "error",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "ducimus",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "voluptate",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "pariatur",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "itaque",
                        },
                    },
                    shared.Backend{
                        VirtualService: &shared.VirtualServiceBackend{
                            ClientPolicy: &shared.ClientPolicy{
                                TLS: &shared.ClientPolicyTLS{
                                    Certificate: &shared.ClientTLSCertificate{
                                        File: &shared.ListenerTLSFileCertificate{
                                            CertificateChain: "similique",
                                            PrivateKey: "optio",
                                        },
                                        Sds: &shared.ListenerTLSSdsCertificate{
                                            SecretName: "ex",
                                        },
                                    },
                                    Enforce: sdk.Bool(false),
                                    Ports: []int64{
                                        416692,
                                        888616,
                                    },
                                    Validation: shared.TLSValidationContext{
                                        SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                            Match: shared.SubjectAlternativeNameMatchers{
                                                Exact: []string{
                                                    "quidem",
                                                    "exercitationem",
                                                    "quam",
                                                    "dolorem",
                                                },
                                            },
                                        },
                                        Trust: shared.TLSValidationContextTrust{
                                            Acm: &shared.TLSValidationContextAcmTrust{
                                                CertificateAuthorityArns: []string{
                                                    "ipsa",
                                                    "sint",
                                                },
                                            },
                                            File: &shared.TLSValidationContextFileTrust{
                                                CertificateChain: "vero",
                                            },
                                            Sds: &shared.TLSValidationContextSdsTrust{
                                                SecretName: "sequi",
                                            },
                                        },
                                    },
                                },
                            },
                            VirtualServiceName: "repudiandae",
                        },
                    },
                },
                Listeners: []shared.Listener{
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 120120,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 936928,
                                MaxPendingRequests: sdk.Int64(334474),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 659268,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 175372,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 724994,
                            IntervalMillis: 115898,
                            Path: sdk.String("consequuntur"),
                            Port: sdk.Int64(899867),
                            Protocol: shared.PortProtocolEnumHttp2,
                            TimeoutMillis: 56877,
                            UnhealthyThreshold: 497357,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(87382),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumS.ToPointer(),
                                Value: sdk.Int64(386447),
                            },
                            MaxEjectionPercent: 863471,
                            MaxServerErrors: 729448,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 566506,
                            Protocol: shared.PortProtocolEnumHttp2,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(306382),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(988749),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(574032),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(944950),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(559774),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(564667),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(51170),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "saepe",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "architecto",
                                    PrivateKey: "quos",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "iste",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumDisabled,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "libero",
                                            "velit",
                                            "doloremque",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "delectus",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "impedit",
                                    },
                                },
                            },
                        },
                    },
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 741238,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 216870,
                                MaxPendingRequests: sdk.Int64(238011),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 903150,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 644420,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 42924,
                            IntervalMillis: 339756,
                            Path: sdk.String("veniam"),
                            Port: sdk.Int64(727481),
                            Protocol: shared.PortProtocolEnumHTTP,
                            TimeoutMillis: 584593,
                            UnhealthyThreshold: 475589,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(820023),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumS.ToPointer(),
                                Value: sdk.Int64(298187),
                            },
                            MaxEjectionPercent: 932296,
                            MaxServerErrors: 150935,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 993002,
                            Protocol: shared.PortProtocolEnumTCP,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(813880),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(140384),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(227362),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(68852),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(705710),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(395233),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(310840),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "blanditiis",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "distinctio",
                                    PrivateKey: "nisi",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "quis",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumPermissive,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "minus",
                                            "facere",
                                            "facilis",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "ipsum",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "ad",
                                    },
                                },
                            },
                        },
                    },
                    shared.Listener{
                        ConnectionPool: &shared.VirtualNodeConnectionPool{
                            Grpc: &shared.VirtualNodeGrpcConnectionPool{
                                MaxRequests: 973819,
                            },
                            HTTP: &shared.VirtualNodeHTTPConnectionPool{
                                MaxConnections: 974589,
                                MaxPendingRequests: sdk.Int64(162358),
                            },
                            Http2: &shared.VirtualNodeHttp2ConnectionPool{
                                MaxRequests: 891581,
                            },
                            TCP: &shared.VirtualNodeTCPConnectionPool{
                                MaxConnections: 290841,
                            },
                        },
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 700928,
                            IntervalMillis: 179795,
                            Path: sdk.String("reprehenderit"),
                            Port: sdk.Int64(345506),
                            Protocol: shared.PortProtocolEnumHTTP,
                            TimeoutMillis: 480061,
                            UnhealthyThreshold: 664965,
                        },
                        OutlierDetection: &shared.OutlierDetection{
                            BaseEjectionDuration: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(753890),
                            },
                            Interval: shared.Duration{
                                Unit: shared.DurationUnitEnumMs.ToPointer(),
                                Value: sdk.Int64(604078),
                            },
                            MaxEjectionPercent: 889448,
                            MaxServerErrors: 495617,
                        },
                        PortMapping: shared.PortMapping{
                            Port: 220104,
                            Protocol: shared.PortProtocolEnumHTTP,
                        },
                        Timeout: &shared.ListenerTimeout{
                            Grpc: &shared.GrpcTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(784731),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(491591),
                                },
                            },
                            HTTP: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(854115),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(134818),
                                },
                            },
                            Http2: &shared.HTTPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(965090),
                                },
                                PerRequest: &shared.Duration{
                                    Unit: shared.DurationUnitEnumS.ToPointer(),
                                    Value: sdk.Int64(491201),
                                },
                            },
                            TCP: &shared.TCPTimeout{
                                Idle: &shared.Duration{
                                    Unit: shared.DurationUnitEnumMs.ToPointer(),
                                    Value: sdk.Int64(72350),
                                },
                            },
                        },
                        TLS: &shared.ListenerTLS{
                            Certificate: shared.ListenerTLSCertificate{
                                Acm: &shared.ListenerTLSAcmCertificate{
                                    CertificateArn: "ab",
                                },
                                File: &shared.ListenerTLSFileCertificate{
                                    CertificateChain: "incidunt",
                                    PrivateKey: "accusamus",
                                },
                                Sds: &shared.ListenerTLSSdsCertificate{
                                    SecretName: "saepe",
                                },
                            },
                            Mode: shared.ListenerTLSModeEnumDisabled,
                            Validation: &shared.ListenerTLSValidationContext{
                                SubjectAlternativeNames: &shared.SubjectAlternativeNames{
                                    Match: shared.SubjectAlternativeNameMatchers{
                                        Exact: []string{
                                            "eos",
                                            "reiciendis",
                                        },
                                    },
                                },
                                Trust: shared.ListenerTLSValidationContextTrust{
                                    File: &shared.TLSValidationContextFileTrust{
                                        CertificateChain: "earum",
                                    },
                                    Sds: &shared.TLSValidationContextSdsTrust{
                                        SecretName: "reprehenderit",
                                    },
                                },
                            },
                        },
                    },
                },
                Logging: &shared.Logging{
                    AccessLog: &shared.AccessLog{
                        File: &shared.FileAccessLog{
                            Format: &shared.LoggingFormat{
                                JSON: []shared.JSONFormatRef{
                                    shared.JSONFormatRef{
                                        Key: "nemo",
                                        Value: "repellat",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "quisquam",
                                        Value: "sequi",
                                    },
                                    shared.JSONFormatRef{
                                        Key: "nihil",
                                        Value: "deleniti",
                                    },
                                },
                                Text: sdk.String("illo"),
                            },
                            Path: "labore",
                        },
                    },
                },
                ServiceDiscovery: &shared.ServiceDiscovery{
                    AwsCloudMap: &shared.AwsCloudMapServiceDiscovery{
                        Attributes: []shared.AwsCloudMapInstanceAttribute{
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "aliquam",
                                Value: "quisquam",
                            },
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "provident",
                                Value: "laudantium",
                            },
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "repudiandae",
                                Value: "consequatur",
                            },
                            shared.AwsCloudMapInstanceAttribute{
                                Key: "maxime",
                                Value: "aspernatur",
                            },
                        },
                        IPPreference: shared.IPPreferenceEnumIPv4Only.ToPointer(),
                        NamespaceName: "expedita",
                        ServiceName: "quas",
                    },
                    DNS: &shared.DNSServiceDiscovery{
                        Hostname: "optimal-training.net",
                        IPPreference: shared.IPPreferenceEnumIPv4Preferred.ToPointer(),
                        ResponseType: shared.DNSResponseTypeEnumLoadbalancer.ToPointer(),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("impedit"),
        MeshName: "commodi",
        MeshOwner: sdk.String("aut"),
        VirtualNodeName: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVirtualNodeOutput != nil {
        // handle response
    }
}
```

## UpdateVirtualRouter

Updates an existing virtual router in a specified service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVirtualRouter(ctx, operations.UpdateVirtualRouterRequest{
        RequestBody: operations.UpdateVirtualRouterRequestBody{
            ClientToken: sdk.String("ad"),
            Spec: operations.UpdateVirtualRouterRequestBodySpec{
                Listeners: []shared.VirtualRouterListener{
                    shared.VirtualRouterListener{
                        PortMapping: shared.PortMapping{
                            Port: 229567,
                            Protocol: shared.PortProtocolEnumGrpc,
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        MeshName: "doloremque",
        MeshOwner: sdk.String("earum"),
        VirtualRouterName: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVirtualRouterOutput != nil {
        // handle response
    }
}
```

## UpdateVirtualService

Updates an existing virtual service in a specified service mesh.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVirtualService(ctx, operations.UpdateVirtualServiceRequest{
        RequestBody: operations.UpdateVirtualServiceRequestBody{
            ClientToken: sdk.String("amet"),
            Spec: operations.UpdateVirtualServiceRequestBodySpec{
                Provider: &shared.VirtualServiceProvider{
                    VirtualNode: &shared.VirtualNodeServiceProvider{
                        VirtualNodeName: "provident",
                    },
                    VirtualRouter: &shared.VirtualRouterServiceProvider{
                        VirtualRouterName: "dolorum",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("itaque"),
        MeshName: "facilis",
        MeshOwner: sdk.String("corrupti"),
        VirtualServiceName: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVirtualServiceOutput != nil {
        // handle response
    }
}
```
