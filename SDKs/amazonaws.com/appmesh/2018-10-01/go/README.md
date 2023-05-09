# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appmesh/2018-10-01/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateMesh(ctx, operations.CreateMeshRequest{
        RequestBody: operations.CreateMeshRequestBody{
            ClientToken: sdk.String("corrupti"),
            MeshName: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMeshOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateMesh](docs/sdk/README.md#createmesh) - <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>
* [CreateRoute](docs/sdk/README.md#createroute) - <p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>
* [CreateVirtualNode](docs/sdk/README.md#createvirtualnode) - <p>Creates a new virtual node within a service mesh.</p>
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
* [CreateVirtualRouter](docs/sdk/README.md#createvirtualrouter) - <p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>
* [DeleteMesh](docs/sdk/README.md#deletemesh) - <p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>
* [DeleteRoute](docs/sdk/README.md#deleteroute) - Deletes an existing route.
* [DeleteVirtualNode](docs/sdk/README.md#deletevirtualnode) - Deletes an existing virtual node.
* [DeleteVirtualRouter](docs/sdk/README.md#deletevirtualrouter) - <p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>
* [DescribeMesh](docs/sdk/README.md#describemesh) - Describes an existing service mesh.
* [DescribeRoute](docs/sdk/README.md#describeroute) - Describes an existing route.
* [DescribeVirtualNode](docs/sdk/README.md#describevirtualnode) - Describes an existing virtual node.
* [DescribeVirtualRouter](docs/sdk/README.md#describevirtualrouter) - Describes an existing virtual router.
* [ListMeshes](docs/sdk/README.md#listmeshes) - Returns a list of existing service meshes.
* [ListRoutes](docs/sdk/README.md#listroutes) - Returns a list of existing routes in a service mesh.
* [ListVirtualNodes](docs/sdk/README.md#listvirtualnodes) - Returns a list of existing virtual nodes.
* [ListVirtualRouters](docs/sdk/README.md#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [UpdateRoute](docs/sdk/README.md#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [UpdateVirtualNode](docs/sdk/README.md#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [UpdateVirtualRouter](docs/sdk/README.md#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
