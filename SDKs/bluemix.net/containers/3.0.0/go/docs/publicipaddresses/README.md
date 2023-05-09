# PublicIPAddresses

### Available Operations

* [GetContainersFloatingIps](#getcontainersfloatingips) - List available public IP addresses in a space
* [PostContainersFloatingIpsRequest](#postcontainersfloatingipsrequest) - Request a public IP address for a space
* [PostContainersFloatingIpsIPRelease](#postcontainersfloatingipsiprelease) - Release public IP address
* [PostContainersNameOrIDFloatingIpsIPBind](#postcontainersnameoridfloatingipsipbind) - Bind a public IP address to a single container
* [PostContainersNameOrIDFloatingIpsIPUnbind](#postcontainersnameoridfloatingipsipunbind) - Unbind a public IP address from a container

## GetContainersFloatingIps

This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicIPAddresses.GetContainersFloatingIps(ctx, operations.GetContainersFloatingIpsRequest{
        XAuthProjectID: "laborum",
        XAuthToken: "quasi",
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloatingIPS != nil {
        // handle response
    }
}
```

## PostContainersFloatingIpsRequest

This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicIPAddresses.PostContainersFloatingIpsRequest(ctx, operations.PostContainersFloatingIpsRequestRequest{
        XAuthProjectID: "reiciendis",
        XAuthToken: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostContainersFloatingIpsRequest200ApplicationJSONString != nil {
        // handle response
    }
}
```

## PostContainersFloatingIpsIPRelease

This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicIPAddresses.PostContainersFloatingIpsIPRelease(ctx, operations.PostContainersFloatingIpsIPReleaseRequest{
        XAuthProjectID: "vero",
        XAuthToken: "nihil",
        IP: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDFloatingIpsIPBind

This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicIPAddresses.PostContainersNameOrIDFloatingIpsIPBind(ctx, operations.PostContainersNameOrIDFloatingIpsIPBindRequest{
        XAuthProjectID: "voluptatibus",
        XAuthToken: "ipsa",
        IP: "omnis",
        NameOrID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContainersNameOrIDFloatingIpsIPUnbind

This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PublicIPAddresses.PostContainersNameOrIDFloatingIpsIPUnbind(ctx, operations.PostContainersNameOrIDFloatingIpsIPUnbindRequest{
        XAuthProjectID: "cum",
        XAuthToken: "perferendis",
        IP: "doloremque",
        NameOrID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
