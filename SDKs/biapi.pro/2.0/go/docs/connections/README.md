# Connections

### Available Operations

* [DeleteConnectionsIDConnectionSourcesIDSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [DeleteUsersIDUserConnections](#deleteusersiduserconnections) - Delete all connections
* [DeleteUsersIDUserConnectionsIDConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [GetBanks](#getbanks) - Get list of connectors
* [GetBanksIDBank](#getbanksidbank) - Get a connector
* [GetBanksIDConnectorConnections](#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [GetBanksIDConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [GetBanksIDConnectorSourcesIDConnectorSourceFields](#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetBanksIDConnectorSourcesIDSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [GetConnections](#getconnections) - Get connections without a user
* [GetConnectionsIDConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [GetConnectionsIDConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [GetConnectors](#getconnectors) - Get list of connectors
* [GetConnectorsIDConnector](#getconnectorsidconnector) - Get a connector
* [GetConnectorsIDConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [GetConnectorsIDConnectorSourcesIDConnectorSourceFields](#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetConnectorsIDConnectorSourcesIDSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [GetLogs](#getlogs) - Get connection logs
* [GetProviders](#getproviders) - Get list of connectors
* [GetProvidersIDConnectorConnections](#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [GetProvidersIDConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [GetProvidersIDConnectorSourcesIDConnectorSourceFields](#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetProvidersIDConnectorSourcesIDSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [GetProvidersIDProvider](#getprovidersidprovider) - Get a connector
* [GetUsersIDUserConnections](#getusersiduserconnections) - Get connections
* [GetUsersIDUserConnectionsIDConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [GetUsersIDUserConnectionsIDConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [GetUsersIDUserConnectionsIDConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [GetUsersIDUserLogs](#getusersiduserlogs) - Get connection logs
* [PostConnectionsIDConnectionSourcesIDSource](#postconnectionsidconnectionsourcesidsource) - "
* [PostConnectors](#postconnectors) - Request a new connector
* [PostUsersIDUserConnections](#postusersiduserconnections) - Add a new connection.
* [PostUsersIDUserConnectionsIDConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [PostUsersIDUserConnectionsIDConnectionSourcesIDSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [PutConnectionsIDConnectionSourcesIDSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [PutConnectorsIDConnectorSources](#putconnectorsidconnectorsources) - Edit several connector sources
* [PutConnectorsIDConnectorSourcesIDSource](#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [PutUsersIDUserConnectionsIDConnection](#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [PutUsersIDUserConnectionsIDConnectionSourcesIDSource](#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

## DeleteConnectionsIDConnectionSourcesIDSource

This will make it so the specified source will not be synchronized anymore.<br><br>

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
    res, err := s.Connections.DeleteConnectionsIDConnectionSourcesIDSource(ctx, operations.DeleteConnectionsIDConnectionSourcesIDSourceRequest{
        Expand: sdk.String("fuga"),
        IDConnection: 442015,
        IDSource: 695626,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## DeleteUsersIDUserConnections

Delete all connections

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
    res, err := s.Connections.DeleteUsersIDUserConnections(ctx, operations.DeleteUsersIDUserConnectionsRequest{
        Expand: sdk.String("fugiat"),
        IDUser: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## DeleteUsersIDUserConnectionsIDConnection

This endpoint deletes a connection and all related accounts and transactions.<br><br>

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
    res, err := s.Connections.DeleteUsersIDUserConnectionsIDConnection(ctx, operations.DeleteUsersIDUserConnectionsIDConnectionRequest{
        Expand: sdk.String("eum"),
        IDConnection: 379927,
        IDUser: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource

This will make it so the specified source will not be synchronized anymore.<br><br>

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
    res, err := s.Connections.DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource(ctx, operations.DeleteUsersIDUserConnectionsIDConnectionSourcesIDSourceRequest{
        Expand: sdk.String("eos"),
        IDConnection: 509342,
        IDSource: 788546,
        IDUser: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## GetBanks

Get list of connectors

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
    res, err := s.Connections.GetBanks(ctx, operations.GetBanksRequest{
        Expand: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBanksIDBank

Get a connector

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
    res, err := s.Connections.GetBanksIDBank(ctx, operations.GetBanksIDBankRequest{
        Expand: sdk.String("id"),
        IDBank: 696997,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorConnections

By default, it selects a set of 3 connections with the 'diversity' method<br><br>

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
    res, err := s.Connections.GetBanksIDConnectorConnections(ctx, operations.GetBanksIDConnectorConnectionsRequest{
        Expand: sdk.String("neque"),
        IDConnector: 778696,
        Method: sdk.String("illum"),
        MinutesWithoutSync: sdk.Int64(777408),
        N: sdk.Int64(681359),
        Occurences: sdk.Int64(259422),
        Source: sdk.String("eos"),
        Type: sdk.Int64(373813),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorConnections200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorSources

Get list of connector sources

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
    res, err := s.Connections.GetBanksIDConnectorSources(ctx, operations.GetBanksIDConnectorSourcesRequest{
        Expand: sdk.String("ab"),
        IDConnector: 587600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorSources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorSourcesIDConnectorSourceFields

Get fields specific to a domain and a source

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
    res, err := s.Connections.GetBanksIDConnectorSourcesIDConnectorSourceFields(ctx, operations.GetBanksIDConnectorSourcesIDConnectorSourceFieldsRequest{
        Expand: sdk.String("consequatur"),
        IDConnector: 272822,
        IDConnectorSource: 892050,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorSourcesIDConnectorSourceFields200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorSourcesIDSource

Get the connector source

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
    res, err := s.Connections.GetBanksIDConnectorSourcesIDSource(ctx, operations.GetBanksIDConnectorSourcesIDSourceRequest{
        Expand: sdk.String("ipsam"),
        IDConnector: 133465,
        IDSource: 197054,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorSource != nil {
        // handle response
    }
}
```

## GetConnections

Get connections without a user

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
    res, err := s.Connections.GetConnections(ctx, operations.GetConnectionsRequest{
        Expand: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnections200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectionsIDConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.GetConnectionsIDConnectionLogs(ctx, operations.GetConnectionsIDConnectionLogsRequest{
        ConnectorUUID: sdk.String("esse"),
        Error: sdk.String("recusandae"),
        Expand: sdk.String("aperiam"),
        IDConnectionPathParameter: 715179,
        IDConnectionQueryParameter: sdk.Int64(799796),
        IDConnector: sdk.Int64(490819),
        IDMax: sdk.Int64(76956),
        IDSource: sdk.Int64(469498),
        IDUser: sdk.Int64(518835),
        Limit: sdk.Int64(882710),
        MaxDate: types.MustDateFromString("2022-07-06"),
        MinDate: types.MustDateFromString("2022-03-04"),
        Offset: sdk.Int64(959434),
        Period: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionsIDConnectionLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectionsIDConnectionSources

Get connection sources

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
    res, err := s.Connections.GetConnectionsIDConnectionSources(ctx, operations.GetConnectionsIDConnectionSourcesRequest{
        Expand: sdk.String("deserunt"),
        IDConnection: 475289,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionsIDConnectionSources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectors

Get list of connectors

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
    res, err := s.Connections.GetConnectors(ctx, operations.GetConnectorsRequest{
        Expand: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectors200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnector

Get a connector

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
    res, err := s.Connections.GetConnectorsIDConnector(ctx, operations.GetConnectorsIDConnectorRequest{
        Expand: sdk.String("porro"),
        IDConnector: 430402,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnectorSources

Get list of connector sources

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
    res, err := s.Connections.GetConnectorsIDConnectorSources(ctx, operations.GetConnectorsIDConnectorSourcesRequest{
        Expand: sdk.String("quas"),
        IDConnector: 510017,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsIDConnectorSources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnectorSourcesIDConnectorSourceFields

Get fields specific to a domain and a source

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
    res, err := s.Connections.GetConnectorsIDConnectorSourcesIDConnectorSourceFields(ctx, operations.GetConnectorsIDConnectorSourcesIDConnectorSourceFieldsRequest{
        Expand: sdk.String("consequuntur"),
        IDConnector: 536178,
        IDConnectorSource: 143829,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsIDConnectorSourcesIDConnectorSourceFields200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnectorSourcesIDSource

Get the connector source

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
    res, err := s.Connections.GetConnectorsIDConnectorSourcesIDSource(ctx, operations.GetConnectorsIDConnectorSourcesIDSourceRequest{
        Expand: sdk.String("fuga"),
        IDConnector: 649463,
        IDSource: 277596,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorSource != nil {
        // handle response
    }
}
```

## GetLogs

Get logs about connections.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.GetLogs(ctx, operations.GetLogsRequest{
        ConnectorUUID: sdk.String("atque"),
        Error: sdk.String("explicabo"),
        Expand: sdk.String("minima"),
        IDConnection: sdk.Int64(392676),
        IDConnector: sdk.Int64(147014),
        IDMax: sdk.Int64(956406),
        IDSource: sdk.Int64(159870),
        IDUser: sdk.Int64(187131),
        Limit: sdk.Int64(129412),
        MaxDate: types.MustDateFromString("2021-04-07"),
        MinDate: types.MustDateFromString("2022-10-25"),
        Offset: sdk.Int64(456911),
        Period: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProviders

Get list of connectors

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
    res, err := s.Connections.GetProviders(ctx, operations.GetProvidersRequest{
        Expand: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProviders200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorConnections

By default, it selects a set of 3 connections.<br><br>

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
    res, err := s.Connections.GetProvidersIDConnectorConnections(ctx, operations.GetProvidersIDConnectorConnectionsRequest{
        Expand: sdk.String("veritatis"),
        IDConnector: 458604,
        Range: sdk.Int64(800379),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorConnections200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorSources

Get list of connector sources

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
    res, err := s.Connections.GetProvidersIDConnectorSources(ctx, operations.GetProvidersIDConnectorSourcesRequest{
        Expand: sdk.String("nam"),
        IDConnector: 877131,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorSources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorSourcesIDConnectorSourceFields

Get fields specific to a domain and a source

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
    res, err := s.Connections.GetProvidersIDConnectorSourcesIDConnectorSourceFields(ctx, operations.GetProvidersIDConnectorSourcesIDConnectorSourceFieldsRequest{
        Expand: sdk.String("aliquid"),
        IDConnector: 93459,
        IDConnectorSource: 904045,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorSourcesIDConnectorSourceFields200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorSourcesIDSource

Get the connector source

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
    res, err := s.Connections.GetProvidersIDConnectorSourcesIDSource(ctx, operations.GetProvidersIDConnectorSourcesIDSourceRequest{
        Expand: sdk.String("vel"),
        IDConnector: 690025,
        IDSource: 473221,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorSource != nil {
        // handle response
    }
}
```

## GetProvidersIDProvider

Get a connector

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
    res, err := s.Connections.GetProvidersIDProvider(ctx, operations.GetProvidersIDProviderRequest{
        Expand: sdk.String("rerum"),
        IDProvider: 580197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## GetUsersIDUserConnections

Get connections

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
    res, err := s.Connections.GetUsersIDUserConnections(ctx, operations.GetUsersIDUserConnectionsRequest{
        Expand: sdk.String("minima"),
        IDUser: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserConnections200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUserConnectionsIDConnectionInformations

<br><br>

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
    res, err := s.Connections.GetUsersIDUserConnectionsIDConnectionInformations(ctx, operations.GetUsersIDUserConnectionsIDConnectionInformationsRequest{
        Expand: sdk.String("eligendi"),
        IDConnection: 27069,
        IDUser: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserConnectionsIDConnectionInformations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUserConnectionsIDConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.GetUsersIDUserConnectionsIDConnectionLogs(ctx, operations.GetUsersIDUserConnectionsIDConnectionLogsRequest{
        ConnectorUUID: sdk.String("tempore"),
        Error: sdk.String("adipisci"),
        Expand: sdk.String("cumque"),
        IDConnectionPathParameter: 160538,
        IDConnectionQueryParameter: sdk.Int64(9766),
        IDConnector: sdk.Int64(796392),
        IDMax: sdk.Int64(308286),
        IDSource: sdk.Int64(959167),
        IDUserPathParameter: "consectetur",
        IDUserQueryParameter: sdk.Int64(458139),
        Limit: sdk.Int64(503427),
        MaxDate: types.MustDateFromString("2021-02-03"),
        MinDate: types.MustDateFromString("2021-04-30"),
        Offset: sdk.Int64(457223),
        Period: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserConnectionsIDConnectionLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUserConnectionsIDConnectionSources

Get connection sources

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
    res, err := s.Connections.GetUsersIDUserConnectionsIDConnectionSources(ctx, operations.GetUsersIDUserConnectionsIDConnectionSourcesRequest{
        Expand: sdk.String("a"),
        IDConnection: 621679,
        IDUser: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserConnectionsIDConnectionSources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersIDUserLogs

Get logs about connections.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.GetUsersIDUserLogs(ctx, operations.GetUsersIDUserLogsRequest{
        ConnectorUUID: sdk.String("pariatur"),
        Error: sdk.String("possimus"),
        Expand: sdk.String("quia"),
        IDConnection: sdk.Int64(908844),
        IDConnector: sdk.Int64(992430),
        IDMax: sdk.Int64(815524),
        IDSource: sdk.Int64(85001),
        IDUserPathParameter: "consequuntur",
        IDUserQueryParameter: sdk.Int64(94458),
        Limit: sdk.Int64(628899),
        MaxDate: types.MustDateFromString("2022-03-16"),
        MinDate: types.MustDateFromString("2022-10-24"),
        Offset: sdk.Int64(936747),
        Period: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDUserLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostConnectionsIDConnectionSourcesIDSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

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
    res, err := s.Connections.PostConnectionsIDConnectionSourcesIDSource(ctx, operations.PostConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PostConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("in"),
        IDConnection: 258684,
        IDSource: 727697,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## PostConnectors

Send a request to add a new connector<br><br>

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
    res, err := s.Connections.PostConnectors(ctx, operations.PostConnectorsRequest{
        RequestBody: operations.PostConnectorsRequestBody{
            Comment: sdk.String("illum"),
            Email: sdk.String("Alexie.Hackett35@hotmail.com"),
            Login: "reprehenderit",
            Name: "Alma Armstrong",
            Password: "quibusdam",
            Sendmail: sdk.Bool(false),
            Types: sdk.String("ex"),
            URL: sdk.String("deleniti"),
        },
        Expand: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## PostUsersIDUserConnections

Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>

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
    res, err := s.Connections.PostUsersIDUserConnections(ctx, operations.PostUsersIDUserConnectionsRequest{
        RequestBody: &operations.PostUsersIDUserConnectionsRequestBody{
            ConnectorUUID: sdk.String("dolorum"),
            IDConnector: sdk.Int64(99615),
        },
        Expand: sdk.String("omnis"),
        IDUser: "tenetur",
        Source: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## PostUsersIDUserConnectionsIDConnection

Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.PostUsersIDUserConnectionsIDConnection(ctx, operations.PostUsersIDUserConnectionsIDConnectionRequest{
        RequestBody: &operations.PostUsersIDUserConnectionsIDConnectionRequestBody{
            Active: sdk.Bool(false),
            Decoupled: sdk.Bool(false),
            Expire: types.MustTimeFromString("2022-09-22T05:30:53.483Z"),
            Login: sdk.String("voluptate"),
            Password: sdk.String("ipsa"),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("minima"),
        IDConnection: 86532,
        IDUser: "consectetur",
        PsuRequested: sdk.Bool(false),
        RefreshPsd2Auth: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## PostUsersIDUserConnectionsIDConnectionSourcesIDSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

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
    res, err := s.Connections.PostUsersIDUserConnectionsIDConnectionSourcesIDSource(ctx, operations.PostUsersIDUserConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PostUsersIDUserConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("adipisci"),
        IDConnection: 614465,
        IDSource: 839513,
        IDUser: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## PutConnectionsIDConnectionSourcesIDSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

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
    res, err := s.Connections.PutConnectionsIDConnectionSourcesIDSource(ctx, operations.PutConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PutConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Force: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("rem"),
        IDConnection: 15606,
        IDSource: 513075,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## PutConnectorsIDConnectorSources

Edit several connector sources

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
    res, err := s.Connections.PutConnectorsIDConnectorSources(ctx, operations.PutConnectorsIDConnectorSourcesRequest{
        RequestBody: &operations.PutConnectorsIDConnectorSourcesRequestBody{
            DisabledCapabilities: sdk.String("eum"),
            UnavailableCapabilities: sdk.String("mollitia"),
        },
        Expand: sdk.String("ab"),
        IDConnector: 544591,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorSource != nil {
        // handle response
    }
}
```

## PutConnectorsIDConnectorSourcesIDSource

Edit the provided connector source

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
    res, err := s.Connections.PutConnectorsIDConnectorSourcesIDSource(ctx, operations.PutConnectorsIDConnectorSourcesIDSourceRequest{
        RequestBody: &operations.PutConnectorsIDConnectorSourcesIDSourceRequestBody{
            AuthMechanism: sdk.String("non"),
            Disabled: sdk.Bool(false),
            DisabledCapabilities: sdk.String("voluptatem"),
            Unavailable: sdk.Bool(false),
            UnavailableCapabilities: sdk.String("dolor"),
        },
        Expand: sdk.String("occaecati"),
        IDConnector: 253191,
        IDSource: 771089,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorSource != nil {
        // handle response
    }
}
```

## PutUsersIDUserConnectionsIDConnection

We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.PutUsersIDUserConnectionsIDConnection(ctx, operations.PutUsersIDUserConnectionsIDConnectionRequest{
        Background: sdk.Bool(false),
        Expand: sdk.String("explicabo"),
        IDConnection: 376226,
        IDUser: "aut",
        LastUpdate: types.MustTimeFromString("2022-11-19T20:21:26.456Z"),
        PsuRequested: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## PutUsersIDUserConnectionsIDConnectionSourcesIDSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

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
    res, err := s.Connections.PutUsersIDUserConnectionsIDConnectionSourcesIDSource(ctx, operations.PutUsersIDUserConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PutUsersIDUserConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Force: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("maiores"),
        IDConnection: 618480,
        IDSource: 244651,
        IDUser: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```
