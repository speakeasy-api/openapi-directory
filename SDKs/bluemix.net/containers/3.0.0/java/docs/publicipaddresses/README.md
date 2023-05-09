# publicIPAddresses

### Available Operations

* [getContainersFloatingIps](#getcontainersfloatingips) - List available public IP addresses in a space
* [postContainersFloatingIpsRequest](#postcontainersfloatingipsrequest) - Request a public IP address for a space
* [postContainersFloatingIpsIpRelease](#postcontainersfloatingipsiprelease) - Release public IP address
* [postContainersNameOrIdFloatingIpsIpBind](#postcontainersnameoridfloatingipsipbind) - Bind a public IP address to a single container
* [postContainersNameOrIdFloatingIpsIpUnbind](#postcontainersnameoridfloatingipsipunbind) - Unbind a public IP address from a container

## getContainersFloatingIps

This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersFloatingIpsRequest;
import org.openapis.openapi.models.operations.GetContainersFloatingIpsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersFloatingIpsRequest req = new GetContainersFloatingIpsRequest("nemo", "minima") {{
                all = false;
            }};            

            GetContainersFloatingIpsResponse res = sdk.publicIPAddresses.getContainersFloatingIps(req);

            if (res.floatingIPS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersFloatingIpsRequest

This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersFloatingIpsRequestRequest;
import org.openapis.openapi.models.operations.PostContainersFloatingIpsRequestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersFloatingIpsRequestRequest req = new PostContainersFloatingIpsRequestRequest("excepturi", "accusantium");            

            PostContainersFloatingIpsRequestResponse res = sdk.publicIPAddresses.postContainersFloatingIpsRequest(req);

            if (res.postContainersFloatingIpsRequest200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersFloatingIpsIpRelease

This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersFloatingIpsIpReleaseRequest;
import org.openapis.openapi.models.operations.PostContainersFloatingIpsIpReleaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersFloatingIpsIpReleaseRequest req = new PostContainersFloatingIpsIpReleaseRequest("iure", "culpa", "doloribus");            

            PostContainersFloatingIpsIpReleaseResponse res = sdk.publicIPAddresses.postContainersFloatingIpsIpRelease(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdFloatingIpsIpBind

This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdFloatingIpsIpBindRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdFloatingIpsIpBindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdFloatingIpsIpBindRequest req = new PostContainersNameOrIdFloatingIpsIpBindRequest("sapiente", "architecto", "mollitia", "dolorem");            

            PostContainersNameOrIdFloatingIpsIpBindResponse res = sdk.publicIPAddresses.postContainersNameOrIdFloatingIpsIpBind(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdFloatingIpsIpUnbind

This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdFloatingIpsIpUnbindRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdFloatingIpsIpUnbindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdFloatingIpsIpUnbindRequest req = new PostContainersNameOrIdFloatingIpsIpUnbindRequest("culpa", "consequuntur", "repellat", "mollitia");            

            PostContainersNameOrIdFloatingIpsIpUnbindResponse res = sdk.publicIPAddresses.postContainersNameOrIdFloatingIpsIpUnbind(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
