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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateGatewayRouteRequest{
        PathParams: operations.CreateGatewayRoutePathParams{
            MeshName: "corrupti",
            VirtualGatewayName: "provident",
        },
        QueryParams: operations.CreateGatewayRouteQueryParams{
            MeshOwner: "distinctio",
        },
        Headers: operations.CreateGatewayRouteHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
        Request: operations.CreateGatewayRouteRequestBody{
            ClientToken: "deserunt",
            GatewayRouteName: "suscipit",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 297534,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "debitis",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "ipsa",
                            Suffix: "delectus",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "suscipit",
                                    Prefix: "molestiae",
                                    Range: &shared.MatchRange{
                                        End: 791725,
                                        Start: 812169,
                                    },
                                    Regex: "voluptatum",
                                    Suffix: "iusto",
                                },
                                Name: "excepturi",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "nisi",
                                    Prefix: "recusandae",
                                    Range: &shared.MatchRange{
                                        End: 836079,
                                        Start: 71036,
                                    },
                                    Regex: "quis",
                                    Suffix: "veritatis",
                                },
                                Name: "deserunt",
                            },
                        },
                        Port: 20218,
                        ServiceName: "ipsam",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "sapiente",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "odit",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 870013,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "at",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "molestiae",
                                    Prefix: "quod",
                                    Range: &shared.MatchRange{
                                        End: 800911,
                                        Start: 461479,
                                    },
                                    Regex: "totam",
                                    Suffix: "porro",
                                },
                                Name: "dolorum",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "dicta",
                                    Prefix: "nam",
                                    Range: &shared.MatchRange{
                                        End: 639921,
                                        Start: 582020,
                                    },
                                    Regex: "fugit",
                                    Suffix: "deleniti",
                                },
                                Name: "hic",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "optio",
                                    Prefix: "totam",
                                    Range: &shared.MatchRange{
                                        End: 105907,
                                        Start: 414662,
                                    },
                                    Regex: "molestiae",
                                    Suffix: "modi",
                                },
                                Name: "qui",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "impedit",
                                    Prefix: "cum",
                                    Range: &shared.MatchRange{
                                        End: 456150,
                                        Start: 216550,
                                    },
                                    Regex: "excepturi",
                                    Suffix: "aspernatur",
                                },
                                Name: "perferendis",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "ad",
                            Suffix: "natus",
                        },
                        Method: "HEAD",
                        Path: &shared.HTTPPathMatch{
                            Exact: "iste",
                            Regex: "dolor",
                        },
                        Port: 616934,
                        Prefix: "laboriosam",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "saepe",
                                },
                                Name: "fuga",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "in",
                                },
                                Name: "corporis",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "iste",
                                },
                                Name: "iure",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "saepe",
                                },
                                Name: "quidem",
                            },
                        },
                    },
                },
                HTTPRoute: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "ipsa",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "est",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 653140,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "laborum",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "dolorem",
                                    Prefix: "corporis",
                                    Range: &shared.MatchRange{
                                        End: 128926,
                                        Start: 750686,
                                    },
                                    Regex: "enim",
                                    Suffix: "omnis",
                                },
                                Name: "nemo",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "minima",
                            Suffix: "excepturi",
                        },
                        Method: "GET",
                        Path: &shared.HTTPPathMatch{
                            Exact: "iure",
                            Regex: "culpa",
                        },
                        Port: 988374,
                        Prefix: "sapiente",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "mollitia",
                                },
                                Name: "dolorem",
                            },
                        },
                    },
                },
                Priority: 635059,
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "repellat",
                    Value: "mollitia",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateGatewayRoute(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CreateGatewayRoute` - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* `CreateMesh` - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* `CreateRoute` - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* `CreateVirtualGateway` - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* `CreateVirtualNode` - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
* `CreateVirtualRouter` - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* `CreateVirtualService` - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* `DeleteGatewayRoute` - Deletes an existing gateway route.
* `DeleteMesh` - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* `DeleteRoute` - Deletes an existing route.
* `DeleteVirtualGateway` - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* `DeleteVirtualNode` - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* `DeleteVirtualRouter` - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* `DeleteVirtualService` - Deletes an existing virtual service.
* `DescribeGatewayRoute` - Describes an existing gateway route.
* `DescribeMesh` - Describes an existing service mesh.
* `DescribeRoute` - Describes an existing route.
* `DescribeVirtualGateway` - Describes an existing virtual gateway.
* `DescribeVirtualNode` - Describes an existing virtual node.
* `DescribeVirtualRouter` - Describes an existing virtual router.
* `DescribeVirtualService` - Describes an existing virtual service.
* `ListGatewayRoutes` - Returns a list of existing gateway routes that are associated to a virtual gateway.
* `ListMeshes` - Returns a list of existing service meshes.
* `ListRoutes` - Returns a list of existing routes in a service mesh.
* `ListTagsForResource` - List the tags for an App Mesh resource.
* `ListVirtualGateways` - Returns a list of existing virtual gateways in a service mesh.
* `ListVirtualNodes` - Returns a list of existing virtual nodes.
* `ListVirtualRouters` - Returns a list of existing virtual routers in a service mesh.
* `ListVirtualServices` - Returns a list of existing virtual services in a service mesh.
* `TagResource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `UntagResource` - Deletes specified tags from a resource.
* `UpdateGatewayRoute` - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* `UpdateMesh` - Updates an existing service mesh.
* `UpdateRoute` - Updates an existing route for a specified service mesh and virtual router.
* `UpdateVirtualGateway` - Updates an existing virtual gateway in a specified service mesh.
* `UpdateVirtualNode` - Updates an existing virtual node in a specified service mesh.
* `UpdateVirtualRouter` - Updates an existing virtual router in a specified service mesh.
* `UpdateVirtualService` - Updates an existing virtual service in a specified service mesh.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
