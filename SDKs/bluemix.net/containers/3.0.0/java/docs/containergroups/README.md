# containerGroups

### Available Operations

* [deleteContainersGroupsNameOrId](#deletecontainersgroupsnameorid) - Stop and delete all container instances in a container group.
* [getContainersGroups](#getcontainersgroups) - List all container groups in a space
* [getContainersGroupsNameOrId](#getcontainersgroupsnameorid) - Inspect a container group.
* [patchContainersGroupsNameOrId](#patchcontainersgroupsnameorid) - Update a container group.
* [postContainersGroups](#postcontainersgroups) - Create and start a container group.
* [postContainersGroupsNameOrIdMaproute](#postcontainersgroupsnameoridmaproute) - Map a public route to a container group.
* [postContainersGroupsNameOrIdUnmaproute](#postcontainersgroupsnameoridunmaproute) - Unmap a public route from a container group

## deleteContainersGroupsNameOrId

Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainersGroupsNameOrIdRequest;
import org.openapis.openapi.models.operations.DeleteContainersGroupsNameOrIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContainersGroupsNameOrIdRequest req = new DeleteContainersGroupsNameOrIdRequest("vel", "error", "deserunt") {{
                force = "suscipit";
            }};            

            DeleteContainersGroupsNameOrIdResponse res = sdk.containerGroups.deleteContainersGroupsNameOrId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersGroups

This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersGroupsRequest;
import org.openapis.openapi.models.operations.GetContainersGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersGroupsRequest req = new GetContainersGroupsRequest("iure", "magnam");            

            GetContainersGroupsResponse res = sdk.containerGroups.getContainersGroups(req);

            if (res.containersGroupsGetListItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersGroupsNameOrId

This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersGroupsNameOrIdRequest;
import org.openapis.openapi.models.operations.GetContainersGroupsNameOrIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersGroupsNameOrIdRequest req = new GetContainersGroupsNameOrIdRequest("debitis", "ipsa", "delectus");            

            GetContainersGroupsNameOrIdResponse res = sdk.containerGroups.getContainersGroupsNameOrId(req);

            if (res.containersGroupsNameOrIdGetDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchContainersGroupsNameOrId

Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`). 

Note: You can run only one update at a time.  

 The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchContainersGroupsNameOrIdRequest;
import org.openapis.openapi.models.operations.PatchContainersGroupsNameOrIdResponse;
import org.openapis.openapi.models.shared.ContainersGroupsNameOrIdPatchUpdatedInfo;
import org.openapis.openapi.models.shared.ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchContainersGroupsNameOrIdRequest req = new PatchContainersGroupsNameOrIdRequest(                new ContainersGroupsNameOrIdPatchUpdatedInfo() {{
                                autorecovery = "tempora";
                                environment = new String[]{{
                                    add("molestiae"),
                                    add("minus"),
                                }};
                                numberInstances = new ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances() {{
                                    desired = 812169;
                                    max = 528895;
                                    min = 479977;
                                }};;
                            }};, "excepturi", "nisi", "recusandae");            

            PatchContainersGroupsNameOrIdResponse res = sdk.containerGroups.patchContainersGroupsNameOrId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersGroups

This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.

To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
















- Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-). 
- Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersGroupsRequest;
import org.openapis.openapi.models.operations.PostContainersGroupsResponse;
import org.openapis.openapi.models.shared.ContainersGroupsPostRequiredAttributes;
import org.openapis.openapi.models.shared.ContainersGroupsPostRequiredAttributesNumberInstances;
import org.openapis.openapi.models.shared.ContainersGroupsPostRequiredAttributesRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersGroupsRequest req = new PostContainersGroupsRequest(                new ContainersGroupsPostRequiredAttributes("temporibus", "ab") {{
                                autorecovery = "quis";
                                bluemixApp = "veritatis";
                                cmd = new String[]{{
                                    add("perferendis"),
                                    add("ipsam"),
                                    add("repellendus"),
                                }};
                                env = new String[]{{
                                    add("quo"),
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                }};
                                memory = 978619;
                                numberInstances = new ContainersGroupsPostRequiredAttributesNumberInstances() {{
                                    desired = 473608;
                                    max = 799159;
                                    min = 800911;
                                }};;
                                port = 461479;
                                route = new ContainersGroupsPostRequiredAttributesRoute() {{
                                    domain = "totam";
                                    host = "porro";
                                }};;
                                volumes = new String[]{{
                                    add("dicta"),
                                    add("nam"),
                                    add("officia"),
                                }};
                            }};, "occaecati", "fugit");            

            PostContainersGroupsResponse res = sdk.containerGroups.postContainersGroups(req);

            if (res.containersGroupsPostCreatedInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersGroupsNameOrIdMaproute

If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersGroupsNameOrIdMaprouteRequest;
import org.openapis.openapi.models.operations.PostContainersGroupsNameOrIdMaprouteResponse;
import org.openapis.openapi.models.shared.Route;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersGroupsNameOrIdMaprouteRequest req = new PostContainersGroupsNameOrIdMaprouteRequest(                new Route() {{
                                domain = "deleniti";
                                host = "hic";
                            }};, "optio", "totam", "beatae");            

            PostContainersGroupsNameOrIdMaprouteResponse res = sdk.containerGroups.postContainersGroupsNameOrIdMaproute(req);

            if (res.containersGroupsNameOrIdMaproutePostInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersGroupsNameOrIdUnmaproute

This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet. 

 When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersGroupsNameOrIdUnmaprouteRequest;
import org.openapis.openapi.models.operations.PostContainersGroupsNameOrIdUnmaprouteResponse;
import org.openapis.openapi.models.shared.Route;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersGroupsNameOrIdUnmaprouteRequest req = new PostContainersGroupsNameOrIdUnmaprouteRequest(                new Route() {{
                                domain = "commodi";
                                host = "molestiae";
                            }};, "modi", "qui", "impedit");            

            PostContainersGroupsNameOrIdUnmaprouteResponse res = sdk.containerGroups.postContainersGroupsNameOrIdUnmaproute(req);

            if (res.containersGroupsNameOrIdMaproutePostInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
