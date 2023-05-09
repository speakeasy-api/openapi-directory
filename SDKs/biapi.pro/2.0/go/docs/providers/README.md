# Providers

### Available Operations

* [DeleteConnectionsIDConnectionSourcesIDSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [DeleteConnectorsIDConnectorLogosIDLogo](#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [DeleteUsersIDUserConnections](#deleteusersiduserconnections) - Delete all connections
* [DeleteUsersIDUserConnectionsIDConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [GetBanks](#getbanks) - Get list of connectors
* [GetBanksIDBank](#getbanksidbank) - Get a connector
* [GetBanksIDConnectorLogos](#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorLogosMain](#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorLogosThumbnail](#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [GetBanksIDConnectorSourcesIDSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [GetConnections](#getconnections) - Get connections without a user
* [GetConnectionsIDConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [GetConnectionsIDConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [GetConnectors](#getconnectors) - Get list of connectors
* [GetConnectorsIDConnector](#getconnectorsidconnector) - Get a connector
* [GetConnectorsIDConnectorLogos](#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorLogosMain](#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorLogosThumbnail](#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [GetConnectorsIDConnectorSourcesIDSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [GetLogs](#getlogs) - Get connection logs
* [GetProviders](#getproviders) - Get list of connectors
* [GetProvidersIDConnectorLogos](#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorLogosMain](#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorLogosThumbnail](#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [GetProvidersIDConnectorSourcesIDSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [GetProvidersIDProvider](#getprovidersidprovider) - Get a connector
* [GetUsersIDUserConnections](#getusersiduserconnections) - Get connections
* [GetUsersIDUserConnectionsIDConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [GetUsersIDUserConnectionsIDConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [GetUsersIDUserConnectionsIDConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [GetUsersIDUserLogs](#getusersiduserlogs) - Get connection logs
* [PostConnectionsIDConnectionSourcesIDSource](#postconnectionsidconnectionsourcesidsource) - "
* [PostConnectors](#postconnectors) - Request a new connector
* [PostConnectorsIDConnectorLogos](#postconnectorsidconnectorlogos) - Create a connector Logo
* [PostUsersIDUserConnections](#postusersiduserconnections) - Add a new connection.
* [PostUsersIDUserConnectionsIDConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [PostUsersIDUserConnectionsIDConnectionSourcesIDSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [PutConnectionsIDConnectionSourcesIDSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [PutConnectorsIDConnectorLogos](#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [PutConnectorsIDConnectorLogosIDLogo](#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
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
    res, err := s.Providers.DeleteConnectionsIDConnectionSourcesIDSource(ctx, operations.DeleteConnectionsIDConnectionSourcesIDSourceRequest{
        Expand: sdk.String("adipisci"),
        IDConnection: 683573,
        IDSource: 662505,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## DeleteConnectorsIDConnectorLogosIDLogo

Delete a single Logo object.

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
    res, err := s.Providers.DeleteConnectorsIDConnectorLogosIDLogo(ctx, operations.DeleteConnectorsIDConnectorLogosIDLogoRequest{
        Expand: sdk.String("suscipit"),
        IDConnector: 246063,
        IDLogo: 633931,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorLogo != nil {
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
    res, err := s.Providers.DeleteUsersIDUserConnections(ctx, operations.DeleteUsersIDUserConnectionsRequest{
        Expand: sdk.String("est"),
        IDUser: "recusandae",
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
    res, err := s.Providers.DeleteUsersIDUserConnectionsIDConnection(ctx, operations.DeleteUsersIDUserConnectionsIDConnectionRequest{
        Expand: sdk.String("totam"),
        IDConnection: 853940,
        IDUser: "vel",
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
    res, err := s.Providers.DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource(ctx, operations.DeleteUsersIDUserConnectionsIDConnectionSourcesIDSourceRequest{
        Expand: sdk.String("ducimus"),
        IDConnection: 554688,
        IDSource: 427834,
        IDUser: "labore",
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
    res, err := s.Providers.GetBanks(ctx, operations.GetBanksRequest{
        Expand: sdk.String("possimus"),
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
    res, err := s.Providers.GetBanksIDBank(ctx, operations.GetBanksIDBankRequest{
        Expand: sdk.String("facilis"),
        IDBank: 738227,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetBanksIDConnectorLogos(ctx, operations.GetBanksIDConnectorLogosRequest{
        Expand: sdk.String("commodi"),
        IDConnector: 447144,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorLogos200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetBanksIDConnectorLogosMain(ctx, operations.GetBanksIDConnectorLogosMainRequest{
        Expand: sdk.String("corporis"),
        IDConnector: 968904,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorLogosMain200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBanksIDConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetBanksIDConnectorLogosThumbnail(ctx, operations.GetBanksIDConnectorLogosThumbnailRequest{
        Expand: sdk.String("assumenda"),
        IDConnector: 363161,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorLogosThumbnail200ApplicationJSONObject != nil {
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
    res, err := s.Providers.GetBanksIDConnectorSources(ctx, operations.GetBanksIDConnectorSourcesRequest{
        Expand: sdk.String("recusandae"),
        IDConnector: 397533,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBanksIDConnectorSources200ApplicationJSONObject != nil {
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
    res, err := s.Providers.GetBanksIDConnectorSourcesIDSource(ctx, operations.GetBanksIDConnectorSourcesIDSourceRequest{
        Expand: sdk.String("aperiam"),
        IDConnector: 738683,
        IDSource: 232627,
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
    res, err := s.Providers.GetConnections(ctx, operations.GetConnectionsRequest{
        Expand: sdk.String("in"),
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
    res, err := s.Providers.GetConnectionsIDConnectionLogs(ctx, operations.GetConnectionsIDConnectionLogsRequest{
        ConnectorUUID: sdk.String("exercitationem"),
        Error: sdk.String("earum"),
        Expand: sdk.String("facere"),
        IDConnectionPathParameter: 257233,
        IDConnectionQueryParameter: sdk.Int64(985492),
        IDConnector: sdk.Int64(381760),
        IDMax: sdk.Int64(968972),
        IDSource: sdk.Int64(697142),
        IDUser: sdk.Int64(904949),
        Limit: sdk.Int64(897071),
        MaxDate: types.MustDateFromString("2022-11-17"),
        MinDate: types.MustDateFromString("2022-04-11"),
        Offset: sdk.Int64(249420),
        Period: sdk.String("amet"),
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
    res, err := s.Providers.GetConnectionsIDConnectionSources(ctx, operations.GetConnectionsIDConnectionSourcesRequest{
        Expand: sdk.String("beatae"),
        IDConnection: 489509,
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
    res, err := s.Providers.GetConnectors(ctx, operations.GetConnectorsRequest{
        Expand: sdk.String("a"),
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
    res, err := s.Providers.GetConnectorsIDConnector(ctx, operations.GetConnectorsIDConnectorRequest{
        Expand: sdk.String("debitis"),
        IDConnector: 233420,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetConnectorsIDConnectorLogos(ctx, operations.GetConnectorsIDConnectorLogosRequest{
        Expand: sdk.String("corporis"),
        IDConnector: 689768,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsIDConnectorLogos200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetConnectorsIDConnectorLogosMain(ctx, operations.GetConnectorsIDConnectorLogosMainRequest{
        Expand: sdk.String("laboriosam"),
        IDConnector: 58356,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsIDConnectorLogosMain200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetConnectorsIDConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetConnectorsIDConnectorLogosThumbnail(ctx, operations.GetConnectorsIDConnectorLogosThumbnailRequest{
        Expand: sdk.String("voluptates"),
        IDConnector: 730709,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsIDConnectorLogosThumbnail200ApplicationJSONObject != nil {
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
    res, err := s.Providers.GetConnectorsIDConnectorSources(ctx, operations.GetConnectorsIDConnectorSourcesRequest{
        Expand: sdk.String("vitae"),
        IDConnector: 881721,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsIDConnectorSources200ApplicationJSONObject != nil {
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
    res, err := s.Providers.GetConnectorsIDConnectorSourcesIDSource(ctx, operations.GetConnectorsIDConnectorSourcesIDSourceRequest{
        Expand: sdk.String("similique"),
        IDConnector: 272437,
        IDSource: 132815,
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
    res, err := s.Providers.GetLogs(ctx, operations.GetLogsRequest{
        ConnectorUUID: sdk.String("voluptas"),
        Error: sdk.String("voluptas"),
        Expand: sdk.String("voluptas"),
        IDConnection: sdk.Int64(324405),
        IDConnector: sdk.Int64(748789),
        IDMax: sdk.Int64(680116),
        IDSource: sdk.Int64(237807),
        IDUser: sdk.Int64(795535),
        Limit: sdk.Int64(171853),
        MaxDate: types.MustDateFromString("2022-02-07"),
        MinDate: types.MustDateFromString("2022-09-11"),
        Offset: sdk.Int64(885963),
        Period: sdk.String("temporibus"),
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
    res, err := s.Providers.GetProviders(ctx, operations.GetProvidersRequest{
        Expand: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProviders200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetProvidersIDConnectorLogos(ctx, operations.GetProvidersIDConnectorLogosRequest{
        Expand: sdk.String("adipisci"),
        IDConnector: 738391,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorLogos200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetProvidersIDConnectorLogosMain(ctx, operations.GetProvidersIDConnectorLogosMainRequest{
        Expand: sdk.String("blanditiis"),
        IDConnector: 555361,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorLogosMain200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProvidersIDConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

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
    res, err := s.Providers.GetProvidersIDConnectorLogosThumbnail(ctx, operations.GetProvidersIDConnectorLogosThumbnailRequest{
        Expand: sdk.String("hic"),
        IDConnector: 201517,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorLogosThumbnail200ApplicationJSONObject != nil {
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
    res, err := s.Providers.GetProvidersIDConnectorSources(ctx, operations.GetProvidersIDConnectorSourcesRequest{
        Expand: sdk.String("culpa"),
        IDConnector: 548519,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvidersIDConnectorSources200ApplicationJSONObject != nil {
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
    res, err := s.Providers.GetProvidersIDConnectorSourcesIDSource(ctx, operations.GetProvidersIDConnectorSourcesIDSourceRequest{
        Expand: sdk.String("pariatur"),
        IDConnector: 519643,
        IDSource: 940210,
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
    res, err := s.Providers.GetProvidersIDProvider(ctx, operations.GetProvidersIDProviderRequest{
        Expand: sdk.String("exercitationem"),
        IDProvider: 750765,
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
    res, err := s.Providers.GetUsersIDUserConnections(ctx, operations.GetUsersIDUserConnectionsRequest{
        Expand: sdk.String("sit"),
        IDUser: "rerum",
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
    res, err := s.Providers.GetUsersIDUserConnectionsIDConnectionInformations(ctx, operations.GetUsersIDUserConnectionsIDConnectionInformationsRequest{
        Expand: sdk.String("sed"),
        IDConnection: 967966,
        IDUser: "explicabo",
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
    res, err := s.Providers.GetUsersIDUserConnectionsIDConnectionLogs(ctx, operations.GetUsersIDUserConnectionsIDConnectionLogsRequest{
        ConnectorUUID: sdk.String("asperiores"),
        Error: sdk.String("facilis"),
        Expand: sdk.String("voluptate"),
        IDConnectionPathParameter: 709072,
        IDConnectionQueryParameter: sdk.Int64(70869),
        IDConnector: sdk.Int64(611749),
        IDMax: sdk.Int64(292794),
        IDSource: sdk.Int64(671907),
        IDUserPathParameter: "sed",
        IDUserQueryParameter: sdk.Int64(447516),
        Limit: sdk.Int64(417486),
        MaxDate: types.MustDateFromString("2022-09-27"),
        MinDate: types.MustDateFromString("2022-05-25"),
        Offset: sdk.Int64(100032),
        Period: sdk.String("suscipit"),
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
    res, err := s.Providers.GetUsersIDUserConnectionsIDConnectionSources(ctx, operations.GetUsersIDUserConnectionsIDConnectionSourcesRequest{
        Expand: sdk.String("sapiente"),
        IDConnection: 895386,
        IDUser: "illo",
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
    res, err := s.Providers.GetUsersIDUserLogs(ctx, operations.GetUsersIDUserLogsRequest{
        ConnectorUUID: sdk.String("reiciendis"),
        Error: sdk.String("perferendis"),
        Expand: sdk.String("corrupti"),
        IDConnection: sdk.Int64(979574),
        IDConnector: sdk.Int64(274823),
        IDMax: sdk.Int64(148478),
        IDSource: sdk.Int64(592231),
        IDUserPathParameter: "eius",
        IDUserQueryParameter: sdk.Int64(896762),
        Limit: sdk.Int64(215529),
        MaxDate: types.MustDateFromString("2022-06-03"),
        MinDate: types.MustDateFromString("2021-01-18"),
        Offset: sdk.Int64(271653),
        Period: sdk.String("tempora"),
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
    res, err := s.Providers.PostConnectionsIDConnectionSourcesIDSource(ctx, operations.PostConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PostConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("voluptate"),
        IDConnection: 970076,
        IDSource: 401713,
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
    res, err := s.Providers.PostConnectors(ctx, operations.PostConnectorsRequest{
        RequestBody: operations.PostConnectorsRequestBody{
            Comment: sdk.String("sit"),
            Email: sdk.String("Shyann.Lakin27@gmail.com"),
            Login: "ipsam",
            Name: "Ian Balistreri",
            Password: "veniam",
            Sendmail: sdk.Bool(false),
            Types: sdk.String("minima"),
            URL: sdk.String("recusandae"),
        },
        Expand: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connector != nil {
        // handle response
    }
}
```

## PostConnectorsIDConnectorLogos

This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>

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
    res, err := s.Providers.PostConnectorsIDConnectorLogos(ctx, operations.PostConnectorsIDConnectorLogosRequest{
        Expand: sdk.String("nulla"),
        IDConnector: 168576,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorLogo != nil {
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
    res, err := s.Providers.PostUsersIDUserConnections(ctx, operations.PostUsersIDUserConnectionsRequest{
        RequestBody: &operations.PostUsersIDUserConnectionsRequestBody{
            ConnectorUUID: sdk.String("aperiam"),
            IDConnector: sdk.Int64(901483),
        },
        Expand: sdk.String("numquam"),
        IDUser: "veniam",
        Source: sdk.String("in"),
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
    res, err := s.Providers.PostUsersIDUserConnectionsIDConnection(ctx, operations.PostUsersIDUserConnectionsIDConnectionRequest{
        RequestBody: &operations.PostUsersIDUserConnectionsIDConnectionRequestBody{
            Active: sdk.Bool(false),
            Decoupled: sdk.Bool(false),
            Expire: types.MustTimeFromString("2022-09-08T10:22:44.124Z"),
            Login: sdk.String("laudantium"),
            Password: sdk.String("exercitationem"),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("praesentium"),
        IDConnection: 740098,
        IDUser: "laboriosam",
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
    res, err := s.Providers.PostUsersIDUserConnectionsIDConnectionSourcesIDSource(ctx, operations.PostUsersIDUserConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PostUsersIDUserConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("dolorum"),
        IDConnection: 530089,
        IDSource: 622385,
        IDUser: "hic",
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
    res, err := s.Providers.PutConnectionsIDConnectionSourcesIDSource(ctx, operations.PutConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PutConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Force: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("expedita"),
        IDConnection: 892863,
        IDSource: 204923,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```

## PutConnectorsIDConnectorLogos

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

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
    res, err := s.Providers.PutConnectorsIDConnectorLogos(ctx, operations.PutConnectorsIDConnectorLogosRequest{
        Expand: sdk.String("dolorum"),
        IDConnector: 341698,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorLogo != nil {
        // handle response
    }
}
```

## PutConnectorsIDConnectorLogosIDLogo

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

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
    res, err := s.Providers.PutConnectorsIDConnectorLogosIDLogo(ctx, operations.PutConnectorsIDConnectorLogosIDLogoRequest{
        Expand: sdk.String("officia"),
        IDConnector: 676243,
        IDLogo: 548361,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorLogo != nil {
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
    res, err := s.Providers.PutConnectorsIDConnectorSources(ctx, operations.PutConnectorsIDConnectorSourcesRequest{
        RequestBody: &operations.PutConnectorsIDConnectorSourcesRequestBody{
            DisabledCapabilities: sdk.String("accusamus"),
            UnavailableCapabilities: sdk.String("tempora"),
        },
        Expand: sdk.String("atque"),
        IDConnector: 148268,
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
    res, err := s.Providers.PutConnectorsIDConnectorSourcesIDSource(ctx, operations.PutConnectorsIDConnectorSourcesIDSourceRequest{
        RequestBody: &operations.PutConnectorsIDConnectorSourcesIDSourceRequestBody{
            AuthMechanism: sdk.String("ut"),
            Disabled: sdk.Bool(false),
            DisabledCapabilities: sdk.String("fugiat"),
            Unavailable: sdk.Bool(false),
            UnavailableCapabilities: sdk.String("voluptatem"),
        },
        Expand: sdk.String("culpa"),
        IDConnector: 710337,
        IDSource: 299643,
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
    res, err := s.Providers.PutUsersIDUserConnectionsIDConnection(ctx, operations.PutUsersIDUserConnectionsIDConnectionRequest{
        Background: sdk.Bool(false),
        Expand: sdk.String("consequatur"),
        IDConnection: 460220,
        IDUser: "ipsam",
        LastUpdate: types.MustTimeFromString("2022-06-21T08:29:37.931Z"),
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
    res, err := s.Providers.PutUsersIDUserConnectionsIDConnectionSourcesIDSource(ctx, operations.PutUsersIDUserConnectionsIDConnectionSourcesIDSourceRequest{
        RequestBody: &operations.PutUsersIDUserConnectionsIDConnectionSourcesIDSourceRequestBody{
            Disabled: sdk.Bool(false),
            Force: sdk.Bool(false),
            Synchronize: sdk.Bool(false),
        },
        Background: sdk.Bool(false),
        Expand: sdk.String("quas"),
        IDConnection: 922112,
        IDSource: 361151,
        IDUser: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionSource != nil {
        // handle response
    }
}
```
