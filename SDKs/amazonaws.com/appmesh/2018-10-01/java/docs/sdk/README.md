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

* [createMesh](#createmesh) - <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>
* [createRoute](#createroute) - <p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>
* [createVirtualNode](#createvirtualnode) - <p>Creates a new virtual node within a service mesh.</p>
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
* [createVirtualRouter](#createvirtualrouter) - <p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>
* [deleteMesh](#deletemesh) - <p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>
* [deleteRoute](#deleteroute) - Deletes an existing route.
* [deleteVirtualNode](#deletevirtualnode) - Deletes an existing virtual node.
* [deleteVirtualRouter](#deletevirtualrouter) - <p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>
* [describeMesh](#describemesh) - Describes an existing service mesh.
* [describeRoute](#describeroute) - Describes an existing route.
* [describeVirtualNode](#describevirtualnode) - Describes an existing virtual node.
* [describeVirtualRouter](#describevirtualrouter) - Describes an existing virtual router.
* [listMeshes](#listmeshes) - Returns a list of existing service meshes.
* [listRoutes](#listroutes) - Returns a list of existing routes in a service mesh.
* [listVirtualNodes](#listvirtualnodes) - Returns a list of existing virtual nodes.
* [listVirtualRouters](#listvirtualrouters) - Returns a list of existing virtual routers in a service mesh.
* [updateRoute](#updateroute) - Updates an existing route for a specified service mesh and virtual router.
* [updateVirtualNode](#updatevirtualnode) - Updates an existing virtual node in a specified service mesh.
* [updateVirtualRouter](#updatevirtualrouter) - Updates an existing virtual router in a specified service mesh.

## createMesh

<p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMeshRequest;
import org.openapis.openapi.models.operations.CreateMeshRequestBody;
import org.openapis.openapi.models.operations.CreateMeshResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMeshRequest req = new CreateMeshRequest(                new CreateMeshRequestBody("suscipit") {{
                                clientToken = "iure";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
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

<p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRouteRequest;
import org.openapis.openapi.models.operations.CreateRouteRequestBody;
import org.openapis.openapi.models.operations.CreateRouteRequestBodySpec;
import org.openapis.openapi.models.operations.CreateRouteResponse;
import org.openapis.openapi.models.shared.HttpRoute;
import org.openapis.openapi.models.shared.HttpRouteAction;
import org.openapis.openapi.models.shared.HttpRouteMatch;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTarget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRouteRequest req = new CreateRouteRequest(                new CreateRouteRequestBody("placeat",                 new CreateRouteRequestBodySpec() {{
                                                httpRoute = new HttpRoute() {{
                                                    action = new HttpRouteAction() {{
                                                        weightedTargets = new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "iusto";
                                                                weight = 568045L;
                                                            }}),
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "nisi";
                                                                weight = 925597L;
                                                            }}),
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "temporibus";
                                                                weight = 71036L;
                                                            }}),
                                                        }};
                                                    }};;
                                                    match = new HttpRouteMatch() {{
                                                        prefix = "quis";
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "veritatis";
                            }};, "deserunt", "perferendis") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
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

## createVirtualNode

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualNodeRequest;
import org.openapis.openapi.models.operations.CreateVirtualNodeRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualNodeRequestBodySpec;
import org.openapis.openapi.models.operations.CreateVirtualNodeResponse;
import org.openapis.openapi.models.shared.DnsServiceDiscovery;
import org.openapis.openapi.models.shared.HealthCheckPolicy;
import org.openapis.openapi.models.shared.Listener;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.PortProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceDiscovery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualNodeRequest req = new CreateVirtualNodeRequest(                new CreateVirtualNodeRequestBody(                new CreateVirtualNodeRequestBodySpec() {{
                                                backends = new String[]{{
                                                    add("quod"),
                                                    add("quod"),
                                                }};
                                                listeners = new org.openapis.openapi.models.shared.Listener[]{{
                                                    add(new Listener() {{
                                                        healthCheck = new HealthCheckPolicy(143353L, 537373L, PortProtocolEnum.TCP, 758616L, 521848L) {{
                                                            healthyThreshold = 520478L;
                                                            intervalMillis = 780529L;
                                                            path = "dolorum";
                                                            port = 118274L;
                                                            protocol = PortProtocolEnum.TCP;
                                                            timeoutMillis = 639921L;
                                                            unhealthyThreshold = 582020L;
                                                        }};
                                                        portMapping = new PortMapping() {{
                                                            port = 105907L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                    }}),
                                                    add(new Listener() {{
                                                        healthCheck = new HealthCheckPolicy(568434L, 135218L, PortProtocolEnum.HTTP, 324141L, 617636L) {{
                                                            healthyThreshold = 473600L;
                                                            intervalMillis = 264555L;
                                                            path = "qui";
                                                            port = 774234L;
                                                            protocol = PortProtocolEnum.TCP;
                                                            timeoutMillis = 456150L;
                                                            unhealthyThreshold = 216550L;
                                                        }};
                                                        portMapping = new PortMapping() {{
                                                            port = 149675L;
                                                            protocol = PortProtocolEnum.TCP;
                                                        }};
                                                    }}),
                                                }};
                                                serviceDiscovery = new ServiceDiscovery() {{
                                                    dns = new DnsServiceDiscovery() {{
                                                        serviceName = "dolor";
                                                    }};;
                                                }};;
                                            }};, "natus") {{
                                clientToken = "laboriosam";
                            }};, "hic") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
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

<p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVirtualRouterRequest;
import org.openapis.openapi.models.operations.CreateVirtualRouterRequestBody;
import org.openapis.openapi.models.operations.CreateVirtualRouterRequestBodySpec;
import org.openapis.openapi.models.operations.CreateVirtualRouterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVirtualRouterRequest req = new CreateVirtualRouterRequest(                new CreateVirtualRouterRequestBody(                new CreateVirtualRouterRequestBodySpec() {{
                                                serviceNames = new String[]{{
                                                    add("ipsa"),
                                                }};
                                            }};, "reiciendis") {{
                                clientToken = "est";
                            }};, "mollitia") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
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

## deleteMesh

<p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>

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
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMeshRequest req = new DeleteMeshRequest("nemo") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
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
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteRequest req = new DeleteRouteRequest("mollitia", "dolorem", "culpa") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
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

## deleteVirtualNode

Deletes an existing virtual node.

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
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualNodeRequest req = new DeleteVirtualNodeRequest("velit", "error") {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
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

<p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>

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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualRouterRequest req = new DeleteVirtualRouterRequest("sequi", "tenetur") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMeshRequest req = new DescribeMeshRequest("quasi") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
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
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRouteRequest req = new DescribeRouteRequest("voluptate", "cum", "perferendis") {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
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
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualNodeRequest req = new DescribeVirtualNodeRequest("dicta", "harum") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
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
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualRouterRequest req = new DescribeVirtualRouterRequest("excepturi", "pariatur") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
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
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMeshesRequest req = new ListMeshesRequest() {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
                limit = 647174L;
                nextToken = "distinctio";
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
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRoutesRequest req = new ListRoutesRequest("labore", "modi") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
                limit = 369808L;
                nextToken = "alias";
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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualNodesRequest req = new ListVirtualNodesRequest("dolorum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
                limit = 248753L;
                nextToken = "eligendi";
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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualRoutersRequest req = new ListVirtualRoutersRequest("aliquid") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
                limit = 680056L;
                nextToken = "in";
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
import org.openapis.openapi.models.shared.HttpRoute;
import org.openapis.openapi.models.shared.HttpRouteAction;
import org.openapis.openapi.models.shared.HttpRouteMatch;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeightedTarget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRouteRequest req = new UpdateRouteRequest(                new UpdateRouteRequestBody(                new UpdateRouteRequestBodySpec() {{
                                                httpRoute = new HttpRoute() {{
                                                    action = new HttpRouteAction() {{
                                                        weightedTargets = new org.openapis.openapi.models.shared.WeightedTarget[]{{
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "maiores";
                                                                weight = 699479L;
                                                            }}),
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "dicta";
                                                                weight = 297437L;
                                                            }}),
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "cumque";
                                                                weight = 813798L;
                                                            }}),
                                                            add(new WeightedTarget() {{
                                                                virtualNode = "ea";
                                                                weight = 396506L;
                                                            }}),
                                                        }};
                                                    }};;
                                                    match = new HttpRouteMatch() {{
                                                        prefix = "laborum";
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "accusamus";
                            }};, "non", "occaecati", "enim") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quidem";
                xAmzDate = "provident";
                xAmzSecurityToken = "nam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "blanditiis";
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
import org.openapis.openapi.models.shared.DnsServiceDiscovery;
import org.openapis.openapi.models.shared.HealthCheckPolicy;
import org.openapis.openapi.models.shared.Listener;
import org.openapis.openapi.models.shared.PortMapping;
import org.openapis.openapi.models.shared.PortProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceDiscovery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualNodeRequest req = new UpdateVirtualNodeRequest(                new UpdateVirtualNodeRequestBody(                new UpdateVirtualNodeRequestBodySpec() {{
                                                backends = new String[]{{
                                                    add("amet"),
                                                    add("deserunt"),
                                                    add("nisi"),
                                                    add("vel"),
                                                }};
                                                listeners = new org.openapis.openapi.models.shared.Listener[]{{
                                                    add(new Listener() {{
                                                        healthCheck = new HealthCheckPolicy(287991L, 290077L, PortProtocolEnum.HTTP, 618016L, 749170L) {{
                                                            healthyThreshold = 606393L;
                                                            intervalMillis = 474867L;
                                                            path = "perferendis";
                                                            port = 470132L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                            timeoutMillis = 716075L;
                                                            unhealthyThreshold = 660174L;
                                                        }};
                                                        portMapping = new PortMapping() {{
                                                            port = 428769L;
                                                            protocol = PortProtocolEnum.TCP;
                                                        }};
                                                    }}),
                                                    add(new Listener() {{
                                                        healthCheck = new HealthCheckPolicy(551816L, 574325L, PortProtocolEnum.HTTP, 653201L, 968962L) {{
                                                            healthyThreshold = 135474L;
                                                            intervalMillis = 102863L;
                                                            path = "magnam";
                                                            port = 92373L;
                                                            protocol = PortProtocolEnum.TCP;
                                                            timeoutMillis = 354047L;
                                                            unhealthyThreshold = 590873L;
                                                        }};
                                                        portMapping = new PortMapping() {{
                                                            port = 652103L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                    }}),
                                                    add(new Listener() {{
                                                        healthCheck = new HealthCheckPolicy(984043L, 891924L, PortProtocolEnum.HTTP, 806194L, 537023L) {{
                                                            healthyThreshold = 431418L;
                                                            intervalMillis = 221262L;
                                                            path = "necessitatibus";
                                                            port = 141264L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                            timeoutMillis = 97260L;
                                                            unhealthyThreshold = 435865L;
                                                        }};
                                                        portMapping = new PortMapping() {{
                                                            port = 703889L;
                                                            protocol = PortProtocolEnum.HTTP;
                                                        }};
                                                    }}),
                                                }};
                                                serviceDiscovery = new ServiceDiscovery() {{
                                                    dns = new DnsServiceDiscovery() {{
                                                        serviceName = "architecto";
                                                    }};;
                                                }};;
                                            }};) {{
                                clientToken = "architecto";
                            }};, "repudiandae", "ullam") {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualRouterRequest req = new UpdateVirtualRouterRequest(                new UpdateVirtualRouterRequestBody(                new UpdateVirtualRouterRequestBodySpec() {{
                                                serviceNames = new String[]{{
                                                    add("praesentium"),
                                                }};
                                            }};) {{
                                clientToken = "natus";
                            }};, "magni", "sunt") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "pariatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ea";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "odit";
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
