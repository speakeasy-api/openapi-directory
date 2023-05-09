# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appmesh/2019-01-25/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreateGatewayRoute(ctx, operations.CreateGatewayRouteRequest{
        RequestBody: operations.CreateGatewayRouteRequestBody{
            ClientToken: sdk.String("corrupti"),
            GatewayRouteName: "provident",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(844266),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "unde",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("nulla"),
                            Suffix: sdk.String("corrupti"),
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("vel"),
                                    Prefix: sdk.String("error"),
                                    Range: &shared.MatchRange{
                                        End: 645894,
                                        Start: 384382,
                                    },
                                    Regex: sdk.String("iure"),
                                    Suffix: sdk.String("magnam"),
                                },
                                Name: "Larry Windler",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("molestiae"),
                                    Prefix: sdk.String("minus"),
                                    Range: &shared.MatchRange{
                                        End: 812169,
                                        Start: 528895,
                                    },
                                    Regex: sdk.String("iusto"),
                                    Suffix: sdk.String("excepturi"),
                                },
                                Name: "Mrs. Sophie Smith MD",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("perferendis"),
                                    Prefix: sdk.String("ipsam"),
                                    Range: &shared.MatchRange{
                                        End: 832620,
                                        Start: 957156,
                                    },
                                    Regex: sdk.String("quo"),
                                    Suffix: sdk.String("odit"),
                                },
                                Name: "Wilfred Wolff",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("quod"),
                                    Prefix: sdk.String("esse"),
                                    Range: &shared.MatchRange{
                                        End: 520478,
                                        Start: 780529,
                                    },
                                    Regex: sdk.String("dolorum"),
                                    Suffix: sdk.String("dicta"),
                                },
                                Name: "Luke McCullough",
                            },
                        },
                        Port: sdk.Int64(944669),
                        ServiceName: sdk.String("optio"),
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("beatae"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                                Value: sdk.String("molestiae"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(264555),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "qui",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("cum"),
                                    Prefix: sdk.String("esse"),
                                    Range: &shared.MatchRange{
                                        End: 216550,
                                        Start: 568434,
                                    },
                                    Regex: sdk.String("aspernatur"),
                                    Suffix: sdk.String("perferendis"),
                                },
                                Name: "Faye Cormier",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("natus"),
                                    Prefix: sdk.String("laboriosam"),
                                    Range: &shared.MatchRange{
                                        End: 943749,
                                        Start: 902599,
                                    },
                                    Regex: sdk.String("fuga"),
                                    Suffix: sdk.String("in"),
                                },
                                Name: "Sheryl Kertzmann",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("architecto"),
                                    Prefix: sdk.String("ipsa"),
                                    Range: &shared.MatchRange{
                                        End: 969810,
                                        Start: 666767,
                                    },
                                    Regex: sdk.String("mollitia"),
                                    Suffix: sdk.String("laborum"),
                                },
                                Name: "Connie Herzog",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("enim"),
                                    Prefix: sdk.String("omnis"),
                                    Range: &shared.MatchRange{
                                        End: 363711,
                                        Start: 325047,
                                    },
                                    Regex: sdk.String("excepturi"),
                                    Suffix: sdk.String("accusantium"),
                                },
                                Name: "Cecilia Yundt MD",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("dolorem"),
                            Suffix: sdk.String("culpa"),
                        },
                        Method: shared.HTTPMethodEnumHead.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("repellat"),
                            Regex: sdk.String("mollitia"),
                        },
                        Port: sdk.Int64(581850),
                        Prefix: sdk.String("numquam"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("quam"),
                                },
                                Name: "Shannon Mueller",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("vitae"),
                                },
                                Name: "Matt Hamill",
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
                                Exact: sdk.String("tenetur"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                                Value: sdk.String("id"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(820994),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "aut",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("error"),
                                    Prefix: sdk.String("temporibus"),
                                    Range: &shared.MatchRange{
                                        End: 673660,
                                        Start: 96098,
                                    },
                                    Regex: sdk.String("reiciendis"),
                                    Suffix: sdk.String("voluptatibus"),
                                },
                                Name: "Jessie Langosh V",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("voluptate"),
                            Suffix: sdk.String("cum"),
                        },
                        Method: shared.HTTPMethodEnumGet.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("doloremque"),
                            Regex: sdk.String("reprehenderit"),
                        },
                        Port: sdk.Int64(282807),
                        Prefix: sdk.String("maiores"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("corporis"),
                                },
                                Name: "Heidi Carter",
                            },
                        },
                    },
                },
                Priority: sdk.Int64(880476),
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "repudiandae",
                    Value: "quae",
                },
                shared.TagRef{
                    Key: "ipsum",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        MeshName: "quasi",
        MeshOwner: sdk.String("repudiandae"),
        VirtualGatewayName: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayRouteOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateGatewayRoute](docs/sdk/README.md#creategatewayroute) - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* [CreateMesh](docs/sdk/README.md#createmesh) - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* [CreateRoute](docs/sdk/README.md#createroute) - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* [CreateVirtualGateway](docs/sdk/README.md#createvirtualgateway) - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* [CreateVirtualNode](docs/sdk/README.md#createvirtualnode) - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
* [CreateVirtualRouter](docs/sdk/README.md#createvirtualrouter) - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* [CreateVirtualService](docs/sdk/README.md#createvirtualservice) - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* [DeleteGatewayRoute](docs/sdk/README.md#deletegatewayroute) - Deletes an existing gateway route.
* [DeleteMesh](docs/sdk/README.md#deletemesh) - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* [DeleteRoute](docs/sdk/README.md#deleteroute) - Deletes an existing route.
* [DeleteVirtualGateway](docs/sdk/README.md#deletevirtualgateway) - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* [DeleteVirtualNode](docs/sdk/README.md#deletevirtualnode) - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* [DeleteVirtualRouter](docs/sdk/README.md#deletevirtualrouter) - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* [DeleteVirtualService](docs/sdk/README.md#deletevirtualservice) - Deletes an existing virtual service.
* [DescribeGatewayRoute](docs/sdk/README.md#describegatewayroute) - Describes an existing gateway route.
* [DescribeMesh](docs/sdk/README.md#describemesh) - Describes an existing service mesh.
* [DescribeRoute](docs/sdk/README.md#describeroute) - Describes an existing route.
* [DescribeVirtualGateway](docs/sdk/README.md#describevirtualgateway) - Describes an existing virtual gateway.
* [DescribeVirtualNode](docs/sdk/README.md#describevirtualnode) - Describes an existing virtual node.
* [DescribeVirtualRouter](docs/sdk/README.md#describevirtualrouter) - Describes an existing virtual router.
* [DescribeVirtualService](docs/sdk/README.md#describevirtualservice) - Describes an existing virtual service.
* [ListGatewayRoutes](docs/sdk/README.md#listgatewayroutes) - Returns a list of existing gateway routes that are associated to a virtual gateway.
* [ListMeshes](docs/sdk/README.md#listmeshes) - Returns a list of existing service meshes.
* [ListRoutes](docs/sdk/README.md#listroutes) - Returns a list of existing routes in a service mesh.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags for an App Mesh resource.
* [ListVirtualGateways](docs/sdk/README.md#listvirtualgateways) - Returns a list of existing virtual gateways in a service mesh.
* [ListVirtualNodes](docs/sdk/README.md#listvirtualnodes) - Returns a list of existing virtual nodes.
* [ListVirtualRouters](docs/sdk/README.md#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [ListVirtualServices](docs/sdk/README.md#listvirtualservices) - Returns a list of existing virtual services in a service mesh.
* [TagResource](docs/sdk/README.md#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes specified tags from a resource.
* [UpdateGatewayRoute](docs/sdk/README.md#updategatewayroute) - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* [UpdateMesh](docs/sdk/README.md#updatemesh) - Updates an existing service mesh.
* [UpdateRoute](docs/sdk/README.md#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [UpdateVirtualGateway](docs/sdk/README.md#updatevirtualgateway) - Updates an existing virtual gateway in a specified service mesh.
* [UpdateVirtualNode](docs/sdk/README.md#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [UpdateVirtualRouter](docs/sdk/README.md#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.
* [UpdateVirtualService](docs/sdk/README.md#updatevirtualservice) - Updates an existing virtual service in a specified service mesh.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
