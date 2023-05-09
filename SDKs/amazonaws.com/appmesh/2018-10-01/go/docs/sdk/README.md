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

* [CreateMesh](#createmesh) - <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>
* [CreateRoute](#createroute) - <p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>
* [CreateVirtualNode](#createvirtualnode) - <p>Creates a new virtual node within a service mesh.</p>
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
* [CreateVirtualRouter](#createvirtualrouter) - <p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>
* [DeleteMesh](#deletemesh) - <p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>
* [DeleteRoute](#deleteroute) - Deletes an existing route.
* [DeleteVirtualNode](#deletevirtualnode) - Deletes an existing virtual node.
* [DeleteVirtualRouter](#deletevirtualrouter) - <p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>
* [DescribeMesh](#describemesh) - Describes an existing service mesh.
* [DescribeRoute](#describeroute) - Describes an existing route.
* [DescribeVirtualNode](#describevirtualnode) - Describes an existing virtual node.
* [DescribeVirtualRouter](#describevirtualrouter) - Describes an existing virtual router.
* [ListMeshes](#listmeshes) - Returns a list of existing service meshes.
* [ListRoutes](#listroutes) - Returns a list of existing routes in a service mesh.
* [ListVirtualNodes](#listvirtualnodes) - Returns a list of existing virtual nodes.
* [ListVirtualRouters](#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [UpdateRoute](#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [UpdateVirtualNode](#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [UpdateVirtualRouter](#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.

## CreateMesh

<p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>

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
    res, err := s.SDK.CreateMesh(ctx, operations.CreateMeshRequest{
        RequestBody: operations.CreateMeshRequestBody{
            ClientToken: sdk.String("error"),
            MeshName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
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

<p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>

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
            ClientToken: sdk.String("suscipit"),
            RouteName: "molestiae",
            Spec: operations.CreateRouteRequestBodySpec{
                HTTPRoute: &shared.HTTPRoute{
                    Action: &shared.HTTPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("placeat"),
                                Weight: sdk.Int64(528895),
                            },
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("iusto"),
                                Weight: sdk.Int64(568045),
                            },
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("nisi"),
                                Weight: sdk.Int64(925597),
                            },
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("temporibus"),
                                Weight: sdk.Int64(71036),
                            },
                        },
                    },
                    Match: &shared.HTTPRouteMatch{
                        Prefix: sdk.String("quis"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        MeshName: "odit",
        VirtualRouterName: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRouteOutput != nil {
        // handle response
    }
}
```

## CreateVirtualNode

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
            ClientToken: sdk.String("at"),
            Spec: operations.CreateVirtualNodeRequestBodySpec{
                Backends: []string{
                    "molestiae",
                    "quod",
                    "quod",
                    "esse",
                },
                Listeners: []shared.Listener{
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 780529,
                            IntervalMillis: 678880,
                            Path: sdk.String("dicta"),
                            Port: sdk.Int64(720633),
                            Protocol: shared.PortProtocolEnumTCP,
                            TimeoutMillis: 582020,
                            UnhealthyThreshold: 143353,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(537373),
                            Protocol: shared.PortProtocolEnumTCP.ToPointer(),
                        },
                    },
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 758616,
                            IntervalMillis: 521848,
                            Path: sdk.String("beatae"),
                            Port: sdk.Int64(414662),
                            Protocol: shared.PortProtocolEnumHTTP,
                            TimeoutMillis: 264555,
                            UnhealthyThreshold: 186332,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(774234),
                            Protocol: shared.PortProtocolEnumTCP.ToPointer(),
                        },
                    },
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 456150,
                            IntervalMillis: 216550,
                            Path: sdk.String("excepturi"),
                            Port: sdk.Int64(135218),
                            Protocol: shared.PortProtocolEnumHTTP,
                            TimeoutMillis: 324141,
                            UnhealthyThreshold: 617636,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(149675),
                            Protocol: shared.PortProtocolEnumTCP.ToPointer(),
                        },
                    },
                },
                ServiceDiscovery: &shared.ServiceDiscovery{
                    DNS: &shared.DNSServiceDiscovery{
                        ServiceName: sdk.String("dolor"),
                    },
                },
            },
            VirtualNodeName: "natus",
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        MeshName: "iure",
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

<p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>

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
    res, err := s.SDK.CreateVirtualRouter(ctx, operations.CreateVirtualRouterRequest{
        RequestBody: operations.CreateVirtualRouterRequestBody{
            ClientToken: sdk.String("saepe"),
            Spec: operations.CreateVirtualRouterRequestBodySpec{
                ServiceNames: []string{
                    "architecto",
                    "ipsa",
                    "reiciendis",
                },
            },
            VirtualRouterName: "est",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        MeshName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVirtualRouterOutput != nil {
        // handle response
    }
}
```

## DeleteMesh

<p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>

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
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        MeshName: "doloribus",
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
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        MeshName: "mollitia",
        RouteName: "occaecati",
        VirtualRouterName: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRouteOutput != nil {
        // handle response
    }
}
```

## DeleteVirtualNode

Deletes an existing virtual node.

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
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
        MeshName: "vitae",
        VirtualNodeName: "laborum",
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

<p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>

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
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        MeshName: "id",
        VirtualRouterName: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualRouterOutput != nil {
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
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        MeshName: "voluptatibus",
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
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        MeshName: "cum",
        RouteName: "perferendis",
        VirtualRouterName: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRouteOutput != nil {
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
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        MeshName: "dicta",
        VirtualNodeName: "harum",
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
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        MeshName: "molestias",
        VirtualRouterName: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVirtualRouterOutput != nil {
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
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        Limit: sdk.Int64(575947),
        NextToken: sdk.String("veritatis"),
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
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        Limit: sdk.Int64(647174),
        MeshName: "distinctio",
        NextToken: sdk.String("quibusdam"),
        VirtualRouterName: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoutesOutput != nil {
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
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        Limit: sdk.Int64(828940),
        MeshName: "ipsam",
        NextToken: sdk.String("alias"),
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
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        Limit: sdk.Int64(962189),
        MeshName: "eum",
        NextToken: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualRoutersOutput != nil {
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
            ClientToken: sdk.String("eligendi"),
            Spec: operations.UpdateRouteRequestBodySpec{
                HTTPRoute: &shared.HTTPRoute{
                    Action: &shared.HTTPRouteAction{
                        WeightedTargets: []shared.WeightedTarget{
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("aliquid"),
                                Weight: sdk.Int64(592042),
                            },
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("necessitatibus"),
                                Weight: sdk.Int64(572252),
                            },
                            shared.WeightedTarget{
                                VirtualNode: sdk.String("officia"),
                                Weight: sdk.Int64(223081),
                            },
                        },
                    },
                    Match: &shared.HTTPRouteMatch{
                        Prefix: sdk.String("debitis"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        MeshName: "dicta",
        RouteName: "magnam",
        VirtualRouterName: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRouteOutput != nil {
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
            ClientToken: sdk.String("facere"),
            Spec: operations.UpdateVirtualNodeRequestBodySpec{
                Backends: []string{
                    "aliquid",
                    "laborum",
                },
                Listeners: []shared.Listener{
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 249796,
                            IntervalMillis: 581273,
                            Path: sdk.String("enim"),
                            Port: sdk.Int64(881736),
                            Protocol: shared.PortProtocolEnumTCP,
                            TimeoutMillis: 692532,
                            UnhealthyThreshold: 588465,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(725255),
                            Protocol: shared.PortProtocolEnumTCP.ToPointer(),
                        },
                    },
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 501324,
                            IntervalMillis: 533206,
                            Path: sdk.String("sapiente"),
                            Port: sdk.Int64(230533),
                            Protocol: shared.PortProtocolEnumTCP,
                            TimeoutMillis: 394869,
                            UnhealthyThreshold: 423855,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(618809),
                            Protocol: shared.PortProtocolEnumTCP.ToPointer(),
                        },
                    },
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 474867,
                            IntervalMillis: 19193,
                            Path: sdk.String("nihil"),
                            Port: sdk.Int64(301575),
                            Protocol: shared.PortProtocolEnumTCP,
                            TimeoutMillis: 660174,
                            UnhealthyThreshold: 287991,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(290077),
                            Protocol: shared.PortProtocolEnumHTTP.ToPointer(),
                        },
                    },
                    shared.Listener{
                        HealthCheck: &shared.HealthCheckPolicy{
                            HealthyThreshold: 618016,
                            IntervalMillis: 749170,
                            Path: sdk.String("eum"),
                            Port: sdk.Int64(878453),
                            Protocol: shared.PortProtocolEnumHTTP,
                            TimeoutMillis: 102863,
                            UnhealthyThreshold: 298282,
                        },
                        PortMapping: &shared.PortMapping{
                            Port: sdk.Int64(92373),
                            Protocol: shared.PortProtocolEnumTCP.ToPointer(),
                        },
                    },
                },
                ServiceDiscovery: &shared.ServiceDiscovery{
                    DNS: &shared.DNSServiceDiscovery{
                        ServiceName: sdk.String("ullam"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        MeshName: "ad",
        VirtualNodeName: "eum",
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
            ClientToken: sdk.String("dolor"),
            Spec: operations.UpdateVirtualRouterRequestBodySpec{
                ServiceNames: []string{
                    "odit",
                    "nemo",
                    "quasi",
                    "iure",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
        MeshName: "architecto",
        VirtualRouterName: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVirtualRouterOutput != nil {
        // handle response
    }
}
```
