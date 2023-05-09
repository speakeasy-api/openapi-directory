# SDK

## Overview

An example service, deployed with the Octane Service creator, which will echo the string

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotroborunner/>
### Available Operations

* [CreateDestination](#createdestination) - Grants permission to create a destination
* [CreateSite](#createsite) - Grants permission to create a site
* [CreateWorker](#createworker) - Grants permission to create a worker
* [CreateWorkerFleet](#createworkerfleet) - Grants permission to create a worker fleet
* [DeleteDestination](#deletedestination) - Grants permission to delete a destination
* [DeleteSite](#deletesite) - Grants permission to delete a site
* [DeleteWorker](#deleteworker) - Grants permission to delete a worker
* [DeleteWorkerFleet](#deleteworkerfleet) - Grants permission to delete a worker fleet
* [GetDestination](#getdestination) - Grants permission to get a destination
* [GetSite](#getsite) - Grants permission to get a site
* [GetWorker](#getworker) - Grants permission to get a worker
* [GetWorkerFleet](#getworkerfleet) - Grants permission to get a worker fleet
* [ListDestinations](#listdestinations) - Grants permission to list destinations
* [ListSites](#listsites) - Grants permission to list sites
* [ListWorkerFleets](#listworkerfleets) - Grants permission to list worker fleets
* [ListWorkers](#listworkers) - Grants permission to list workers
* [UpdateDestination](#updatedestination) - Grants permission to update a destination
* [UpdateSite](#updatesite) - Grants permission to update a site
* [UpdateWorker](#updateworker) - Grants permission to update a worker
* [UpdateWorkerFleet](#updateworkerfleet) - Grants permission to update a worker fleet

## CreateDestination

Grants permission to create a destination

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
    res, err := s.SDK.CreateDestination(ctx, operations.CreateDestinationRequest{
        RequestBody: operations.CreateDestinationRequestBody{
            AdditionalFixedProperties: sdk.String("delectus"),
            ClientToken: sdk.String("tempora"),
            Name: "Minnie Schiller",
            Site: "iusto",
            State: operations.CreateDestinationRequestBodyStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDestinationResponse != nil {
        // handle response
    }
}
```

## CreateSite

Grants permission to create a site

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
    res, err := s.SDK.CreateSite(ctx, operations.CreateSiteRequest{
        RequestBody: operations.CreateSiteRequestBody{
            ClientToken: sdk.String("perferendis"),
            CountryCode: "GU",
            Description: sdk.String("repellendus"),
            Name: "Cedric Connelly",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSiteResponse != nil {
        // handle response
    }
}
```

## CreateWorker

Grants permission to create a worker

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
    res, err := s.SDK.CreateWorker(ctx, operations.CreateWorkerRequest{
        RequestBody: operations.CreateWorkerRequestBody{
            AdditionalFixedProperties: sdk.String("dolorum"),
            AdditionalTransientProperties: sdk.String("dicta"),
            ClientToken: sdk.String("nam"),
            Fleet: "officia",
            Name: "Wayne Lind",
            Orientation: &operations.CreateWorkerRequestBodyOrientation{
                Degrees: sdk.Float64(5218.48),
            },
            Position: &operations.CreateWorkerRequestBodyPosition{
                CartesianCoordinates: &shared.CartesianCoordinates{
                    X: 1059.07,
                    Y: 4146.62,
                    Z: sdk.Float64(4736),
                },
            },
            VendorProperties: &operations.CreateWorkerRequestBodyVendorProperties{
                VendorAdditionalFixedProperties: sdk.String("modi"),
                VendorAdditionalTransientProperties: sdk.String("qui"),
                VendorWorkerID: sdk.String("impedit"),
                VendorWorkerIPAddress: sdk.String("cum"),
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkerResponse != nil {
        // handle response
    }
}
```

## CreateWorkerFleet

Grants permission to create a worker fleet

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
    res, err := s.SDK.CreateWorkerFleet(ctx, operations.CreateWorkerFleetRequest{
        RequestBody: operations.CreateWorkerFleetRequestBody{
            AdditionalFixedProperties: sdk.String("sed"),
            ClientToken: sdk.String("iste"),
            Name: "Faye Howe",
            Site: "fuga",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkerFleetResponse != nil {
        // handle response
    }
}
```

## DeleteDestination

Grants permission to delete a destination

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
    res, err := s.SDK.DeleteDestination(ctx, operations.DeleteDestinationRequest{
        RequestBody: operations.DeleteDestinationRequestBody{
            ID: "0faaa235-2c59-4559-87af-f1a3a2fa9467",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDestinationResponse != nil {
        // handle response
    }
}
```

## DeleteSite

Grants permission to delete a site

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
    res, err := s.SDK.DeleteSite(ctx, operations.DeleteSiteRequest{
        RequestBody: operations.DeleteSiteRequestBody{
            ID: "a52c3f5a-d019-4da1-bfe7-8f097b0074f1",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSiteResponse != nil {
        // handle response
    }
}
```

## DeleteWorker

Grants permission to delete a worker

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
    res, err := s.SDK.DeleteWorker(ctx, operations.DeleteWorkerRequest{
        RequestBody: operations.DeleteWorkerRequestBody{
            ID: "6e13b99d-488e-41e9-9e45-0ad2abd44269",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkerResponse != nil {
        // handle response
    }
}
```

## DeleteWorkerFleet

Grants permission to delete a worker fleet

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
    res, err := s.SDK.DeleteWorkerFleet(ctx, operations.DeleteWorkerFleetRequest{
        RequestBody: operations.DeleteWorkerFleetRequestBody{
            ID: "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkerFleetResponse != nil {
        // handle response
    }
}
```

## GetDestination

Grants permission to get a destination

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
    res, err := s.SDK.GetDestination(ctx, operations.GetDestinationRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        ID: "3a669970-74ba-4446-9b6e-2141959890af",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDestinationResponse != nil {
        // handle response
    }
}
```

## GetSite

Grants permission to get a site

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
    res, err := s.SDK.GetSite(ctx, operations.GetSiteRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        ID: "16fe4c8b-711e-45b7-bd2e-d028921cddc6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSiteResponse != nil {
        // handle response
    }
}
```

## GetWorker

Grants permission to get a worker

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
    res, err := s.SDK.GetWorker(ctx, operations.GetWorkerRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        ID: "576b0d5f-0d30-4c5f-bb25-87053202c73d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkerResponse != nil {
        // handle response
    }
}
```

## GetWorkerFleet

Grants permission to get a worker fleet

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
    res, err := s.SDK.GetWorkerFleet(ctx, operations.GetWorkerFleetRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        ID: "c28909b3-fe49-4a8d-9cbf-48633323f9b7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkerFleetResponse != nil {
        // handle response
    }
}
```

## ListDestinations

Grants permission to list destinations

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
    res, err := s.SDK.ListDestinations(ctx, operations.ListDestinationsRequest{
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        MaxResults: sdk.Int64(56418),
        NextToken: sdk.String("iure"),
        Site: "odio",
        State: operations.ListDestinationsStateEnumEnabled.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDestinationsResponse != nil {
        // handle response
    }
}
```

## ListSites

Grants permission to list sites

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
    res, err := s.SDK.ListSites(ctx, operations.ListSitesRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        MaxResults: sdk.Int64(24678),
        NextToken: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSitesResponse != nil {
        // handle response
    }
}
```

## ListWorkerFleets

Grants permission to list worker fleets

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
    res, err := s.SDK.ListWorkerFleets(ctx, operations.ListWorkerFleetsRequest{
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        MaxResults: sdk.Int64(607045),
        NextToken: sdk.String("necessitatibus"),
        Site: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerFleetsResponse != nil {
        // handle response
    }
}
```

## ListWorkers

Grants permission to list workers

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
    res, err := s.SDK.ListWorkers(ctx, operations.ListWorkersRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
        Fleet: sdk.String("aspernatur"),
        MaxResults: sdk.Int64(20651),
        NextToken: sdk.String("amet"),
        Site: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkersResponse != nil {
        // handle response
    }
}
```

## UpdateDestination

Grants permission to update a destination

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
    res, err := s.SDK.UpdateDestination(ctx, operations.UpdateDestinationRequest{
        RequestBody: operations.UpdateDestinationRequestBody{
            AdditionalFixedProperties: sdk.String("accusamus"),
            ID: "5e6a95d8-a0d4-446c-a2af-7a73cf3be453",
            Name: sdk.String("Miss Jimmie Kozey"),
            State: operations.UpdateDestinationRequestBodyStateEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDestinationResponse != nil {
        // handle response
    }
}
```

## UpdateSite

Grants permission to update a site

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
    res, err := s.SDK.UpdateSite(ctx, operations.UpdateSiteRequest{
        RequestBody: operations.UpdateSiteRequestBody{
            CountryCode: sdk.String("CM"),
            Description: sdk.String("cupiditate"),
            ID: "cdb1a842-2bb6-479d-a322-715bf0cbb1e3",
            Name: sdk.String("Gayle Lueilwitz"),
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSiteResponse != nil {
        // handle response
    }
}
```

## UpdateWorker

Grants permission to update a worker

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
    res, err := s.SDK.UpdateWorker(ctx, operations.UpdateWorkerRequest{
        RequestBody: operations.UpdateWorkerRequestBody{
            AdditionalFixedProperties: sdk.String("architecto"),
            AdditionalTransientProperties: sdk.String("quae"),
            ID: "08e0adcf-4b92-4187-9fce-953f73ef7fbc",
            Name: sdk.String("Harriet Quitzon"),
            Orientation: &operations.UpdateWorkerRequestBodyOrientation{
                Degrees: sdk.Float64(2930.2),
            },
            Position: &operations.UpdateWorkerRequestBodyPosition{
                CartesianCoordinates: &shared.CartesianCoordinates{
                    X: 8445.5,
                    Y: 8489.44,
                    Z: sdk.Float64(1943.42),
                },
            },
            VendorProperties: &operations.UpdateWorkerRequestBodyVendorProperties{
                VendorAdditionalFixedProperties: sdk.String("natus"),
                VendorAdditionalTransientProperties: sdk.String("impedit"),
                VendorWorkerID: sdk.String("aut"),
                VendorWorkerIPAddress: sdk.String("voluptatibus"),
            },
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkerResponse != nil {
        // handle response
    }
}
```

## UpdateWorkerFleet

Grants permission to update a worker fleet

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
    res, err := s.SDK.UpdateWorkerFleet(ctx, operations.UpdateWorkerFleetRequest{
        RequestBody: operations.UpdateWorkerFleetRequestBody{
            AdditionalFixedProperties: sdk.String("eligendi"),
            ID: "70a45626-d436-4813-b16d-9f5fce6c5561",
            Name: sdk.String("Rosemary Ryan"),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkerFleetResponse != nil {
        // handle response
    }
}
```
