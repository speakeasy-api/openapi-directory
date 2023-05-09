# connections

### Available Operations

* [deleteConnectionsIdConnectionSourcesIdSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteUsersIdUserConnections](#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [getBanks](#getbanks) - Get list of connectors
* [getBanksIdBank](#getbanksidbank) - Get a connector
* [getBanksIdConnectorConnections](#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [getBanksIdConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdConnectorSourceFields](#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getBanksIdConnectorSourcesIdSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [getConnections](#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdConnectorSourceFields](#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getConnectorsIdConnectorSourcesIdSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getLogs](#getlogs) - Get connection logs
* [getProviders](#getproviders) - Get list of connectors
* [getProvidersIdConnectorConnections](#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [getProvidersIdConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdConnectorSourceFields](#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getProvidersIdConnectorSourcesIdSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](#getprovidersidprovider) - Get a connector
* [getUsersIdUserConnections](#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserLogs](#getusersiduserlogs) - Get connection logs
* [postConnectionsIdConnectionSourcesIdSource](#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](#postconnectors) - Request a new connector
* [postUsersIdUserConnections](#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [putConnectionsIdConnectionSourcesIdSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectorsIdConnectorSources](#putconnectorsidconnectorsources) - Edit several connector sources
* [putConnectorsIdConnectorSourcesIdSource](#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [putUsersIdUserConnectionsIdConnection](#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [putUsersIdUserConnectionsIdConnectionSourcesIdSource](#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

## deleteConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.DeleteConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectionsIdConnectionSourcesIdSourceRequest req = new DeleteConnectionsIdConnectionSourcesIdSourceRequest(146946L, 882860L) {{
                expand = "inventore";
            }};            

            DeleteConnectionsIdConnectionSourcesIdSourceResponse res = sdk.connections.deleteConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnections

Delete all connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsRequest req = new DeleteUsersIdUserConnectionsRequest("non") {{
                expand = "et";
            }};            

            DeleteUsersIdUserConnectionsResponse res = sdk.connections.deleteUsersIdUserConnections(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnection

This endpoint deletes a connection and all related accounts and transactions.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionRequest req = new DeleteUsersIdUserConnectionsIdConnectionRequest(677412L, "laborum") {{
                expand = "placeat";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionResponse res = sdk.connections.deleteUsersIdUserConnectionsIdConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUserConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(245367L, 432148L, "autem") {{
                expand = "nobis";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.connections.deleteUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanks

Get list of connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksRequest;
import org.openapis.openapi.models.operations.GetBanksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksRequest req = new GetBanksRequest() {{
                expand = "quas";
            }};            

            GetBanksResponse res = sdk.connections.getBanks(req);

            if (res.getBanks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdBank

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdBankRequest;
import org.openapis.openapi.models.operations.GetBanksIdBankResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdBankRequest req = new GetBanksIdBankRequest(829603L) {{
                expand = "nulla";
            }};            

            GetBanksIdBankResponse res = sdk.connections.getBanksIdBank(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorConnections

By default, it selects a set of 3 connections with the 'diversity' method<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorConnectionsRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorConnectionsRequest req = new GetBanksIdConnectorConnectionsRequest(379034L) {{
                expand = "libero";
                method = "quasi";
                minutesWithoutSync = 270328L;
                n = 256139L;
                occurences = 131482L;
                source = "provident";
                type = 55374L;
            }};            

            GetBanksIdConnectorConnectionsResponse res = sdk.connections.getBanksIdConnectorConnections(req);

            if (res.getBanksIdConnectorConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorSources

Get list of connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorSourcesRequest req = new GetBanksIdConnectorSourcesRequest(476477L) {{
                expand = "magnam";
            }};            

            GetBanksIdConnectorSourcesResponse res = sdk.connections.getBanksIdConnectorSources(req);

            if (res.getBanksIdConnectorSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest req = new GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest(487935L, 262118L) {{
                expand = "esse";
            }};            

            GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse res = sdk.connections.getBanksIdConnectorSourcesIdConnectorSourceFields(req);

            if (res.getBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorSourcesIdSourceRequest req = new GetBanksIdConnectorSourcesIdSourceRequest(456141L, 524593L) {{
                expand = "fuga";
            }};            

            GetBanksIdConnectorSourcesIdSourceResponse res = sdk.connections.getBanksIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnections

Get connections without a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsRequest;
import org.openapis.openapi.models.operations.GetConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsRequest req = new GetConnectionsRequest() {{
                expand = "reprehenderit";
            }};            

            GetConnectionsResponse res = sdk.connections.getConnections(req);

            if (res.getConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionLogsRequest;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsIdConnectionLogsRequest req = new GetConnectionsIdConnectionLogsRequest(695626L) {{
                connectorUuid = "fugiat";
                error = "ut";
                expand = "eum";
                idConnectionQueryParameter = 379927L;
                idConnector = 826871L;
                idMax = 181151L;
                idSource = 509342L;
                idUser = 788546L;
                limit = 86377L;
                maxDate = LocalDate.parse("2022-05-05");
                minDate = LocalDate.parse("2022-08-03");
                offset = 778696L;
                period = "illum";
            }};            

            GetConnectionsIdConnectionLogsResponse res = sdk.connections.getConnectionsIdConnectionLogs(req);

            if (res.getConnectionsIdConnectionLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectionsIdConnectionSources

Get connection sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionSourcesRequest;
import org.openapis.openapi.models.operations.GetConnectionsIdConnectionSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsIdConnectionSourcesRequest req = new GetConnectionsIdConnectionSourcesRequest(777408L) {{
                expand = "fuga";
            }};            

            GetConnectionsIdConnectionSourcesResponse res = sdk.connections.getConnectionsIdConnectionSources(req);

            if (res.getConnectionsIdConnectionSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectors

Get list of connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsRequest;
import org.openapis.openapi.models.operations.GetConnectorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsRequest req = new GetConnectorsRequest() {{
                expand = "eius";
            }};            

            GetConnectorsResponse res = sdk.connections.getConnectors(req);

            if (res.getConnectors200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnector

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorRequest req = new GetConnectorsIdConnectorRequest(178367L) {{
                expand = "voluptas";
            }};            

            GetConnectorsIdConnectorResponse res = sdk.connections.getConnectorsIdConnector(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorSources

Get list of connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorSourcesRequest req = new GetConnectorsIdConnectorSourcesRequest(69859L) {{
                expand = "cupiditate";
            }};            

            GetConnectorsIdConnectorSourcesResponse res = sdk.connections.getConnectorsIdConnectorSources(req);

            if (res.getConnectorsIdConnectorSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest req = new GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest(9688L, 272822L) {{
                expand = "debitis";
            }};            

            GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse res = sdk.connections.getConnectorsIdConnectorSourcesIdConnectorSourceFields(req);

            if (res.getConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorSourcesIdSourceRequest req = new GetConnectorsIdConnectorSourcesIdSourceRequest(370853L, 133465L) {{
                expand = "sequi";
            }};            

            GetConnectorsIdConnectorSourcesIdSourceResponse res = sdk.connections.getConnectorsIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogsRequest;
import org.openapis.openapi.models.operations.GetLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLogsRequest req = new GetLogsRequest() {{
                connectorUuid = "quo";
                error = "esse";
                expand = "recusandae";
                idConnection = 44612L;
                idConnector = 715179L;
                idMax = 799796L;
                idSource = 490819L;
                idUser = 76956L;
                limit = 469498L;
                maxDate = LocalDate.parse("2021-03-27");
                minDate = LocalDate.parse("2022-07-06");
                offset = 577543L;
                period = "commodi";
            }};            

            GetLogsResponse res = sdk.connections.getLogs(req);

            if (res.getLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProviders

Get list of connectors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersRequest;
import org.openapis.openapi.models.operations.GetProvidersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersRequest req = new GetProvidersRequest() {{
                expand = "sapiente";
            }};            

            GetProvidersResponse res = sdk.connections.getProviders(req);

            if (res.getProviders200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorConnections

By default, it selects a set of 3 connections.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorConnectionsRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorConnectionsRequest req = new GetProvidersIdConnectorConnectionsRequest(174112L) {{
                expand = "deserunt";
                range = 475289L;
            }};            

            GetProvidersIdConnectorConnectionsResponse res = sdk.connections.getProvidersIdConnectorConnections(req);

            if (res.getProvidersIdConnectorConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorSources

Get list of connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorSourcesRequest req = new GetProvidersIdConnectorSourcesRequest(35362L) {{
                expand = "porro";
            }};            

            GetProvidersIdConnectorSourcesResponse res = sdk.connections.getProvidersIdConnectorSources(req);

            if (res.getProvidersIdConnectorSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest req = new GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest(430402L, 556429L) {{
                expand = "praesentium";
            }};            

            GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse res = sdk.connections.getProvidersIdConnectorSourcesIdConnectorSourceFields(req);

            if (res.getProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorSourcesIdSourceRequest req = new GetProvidersIdConnectorSourcesIdSourceRequest(159867L, 536178L) {{
                expand = "fugit";
            }};            

            GetProvidersIdConnectorSourcesIdSourceResponse res = sdk.connections.getProvidersIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdProvider

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdProviderRequest;
import org.openapis.openapi.models.operations.GetProvidersIdProviderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdProviderRequest req = new GetProvidersIdProviderRequest(681393L) {{
                expand = "mollitia";
            }};            

            GetProvidersIdProviderResponse res = sdk.connections.getProvidersIdProvider(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnections

Get connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsRequest req = new GetUsersIdUserConnectionsRequest("incidunt") {{
                expand = "atque";
            }};            

            GetUsersIdUserConnectionsResponse res = sdk.connections.getUsersIdUserConnections(req);

            if (res.getUsersIdUserConnections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionInformations

<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionInformationsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionInformationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionInformationsRequest req = new GetUsersIdUserConnectionsIdConnectionInformationsRequest(128860L, "minima") {{
                expand = "nisi";
            }};            

            GetUsersIdUserConnectionsIdConnectionInformationsResponse res = sdk.connections.getUsersIdUserConnectionsIdConnectionInformations(req);

            if (res.getUsersIdUserConnectionsIdConnectionInformations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionLogsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionLogsRequest req = new GetUsersIdUserConnectionsIdConnectionLogsRequest(147014L, "sapiente") {{
                connectorUuid = "consequuntur";
                error = "ratione";
                expand = "explicabo";
                idConnectionQueryParameter = 903984L;
                idConnector = 578922L;
                idMax = 543806L;
                idSource = 92260L;
                idUserQueryParameter = 456911L;
                limit = 910545L;
                maxDate = LocalDate.parse("2022-10-02");
                minDate = LocalDate.parse("2022-03-14");
                offset = 724168L;
                period = "vero";
            }};            

            GetUsersIdUserConnectionsIdConnectionLogsResponse res = sdk.connections.getUsersIdUserConnectionsIdConnectionLogs(req);

            if (res.getUsersIdUserConnectionsIdConnectionLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserConnectionsIdConnectionSources

Get connection sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionSourcesRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserConnectionsIdConnectionSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserConnectionsIdConnectionSourcesRequest req = new GetUsersIdUserConnectionsIdConnectionSourcesRequest(399025L, "quasi") {{
                expand = "saepe";
            }};            

            GetUsersIdUserConnectionsIdConnectionSourcesResponse res = sdk.connections.getUsersIdUserConnectionsIdConnectionSources(req);

            if (res.getUsersIdUserConnectionsIdConnectionSources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUserLogs

Get logs about connections.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserLogsRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserLogsRequest req = new GetUsersIdUserLogsRequest("vel") {{
                connectorUuid = "harum";
                error = "molestiae";
                expand = "rerum";
                idConnection = 580197L;
                idConnector = 327720L;
                idMax = 716244L;
                idSource = 756779L;
                idUserQueryParameter = 27069L;
                limit = 636061L;
                maxDate = LocalDate.parse("2022-07-09");
                minDate = LocalDate.parse("2022-07-09");
                offset = 9766L;
                period = "minus";
            }};            

            GetUsersIdUserLogsResponse res = sdk.connections.getUsersIdUserLogs(req);

            if (res.getUsersIdUserLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PostConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PostConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConnectionsIdConnectionSourcesIdSourceRequest req = new PostConnectionsIdConnectionSourcesIdSourceRequest(308286L, 959167L) {{
                requestBody = new PostConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "consectetur";
            }};            

            PostConnectionsIdConnectionSourcesIdSourceResponse res = sdk.connections.postConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectors

Send a request to add a new connector<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectorsRequest;
import org.openapis.openapi.models.operations.PostConnectorsRequestBody;
import org.openapis.openapi.models.operations.PostConnectorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConnectorsRequest req = new PostConnectorsRequest(                new PostConnectorsRequestBody("esse", "blanditiis", "provident") {{
                                comment = "a";
                                email = "Keara95@hotmail.com";
                                sendmail = false;
                                types = "error";
                                url = "sint";
                            }};) {{
                expand = "pariatur";
            }};            

            PostConnectorsResponse res = sdk.connections.postConnectors(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnections

Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsRequest req = new PostUsersIdUserConnectionsRequest("possimus") {{
                requestBody = new PostUsersIdUserConnectionsRequestBody() {{
                    connectorUuid = "quia";
                    idConnector = 908844L;
                }};;
                expand = "asperiores";
                source = "facere";
            }};            

            PostUsersIdUserConnectionsResponse res = sdk.connections.postUsersIdUserConnections(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnection

Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionRequest req = new PostUsersIdUserConnectionsIdConnectionRequest(85001L, "consequuntur") {{
                requestBody = new PostUsersIdUserConnectionsIdConnectionRequestBody() {{
                    active = false;
                    decoupled = false;
                    expire = OffsetDateTime.parse("2022-05-16T10:50:58.442Z");
                    login = "culpa";
                    password = "aliquid";
                }};;
                background = false;
                expand = "tenetur";
                psuRequested = false;
                refreshPsd2Auth = false;
            }};            

            PostUsersIdUserConnectionsIdConnectionResponse res = sdk.connections.postUsersIdUserConnectionsIdConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(62713L, 936747L, "vel") {{
                requestBody = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "in";
            }};            

            PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.connections.postUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PutConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PutConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectionsIdConnectionSourcesIdSourceRequest req = new PutConnectionsIdConnectionSourcesIdSourceRequest(258684L, 727697L) {{
                requestBody = new PutConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    force = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "illum";
            }};            

            PutConnectionsIdConnectionSourcesIdSourceResponse res = sdk.connections.putConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorSources

Edit several connector sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesRequestBody;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorSourcesRequest req = new PutConnectorsIdConnectorSourcesRequest(742238L) {{
                requestBody = new PutConnectorsIdConnectorSourcesRequestBody() {{
                    disabledCapabilities = "accusantium";
                    unavailableCapabilities = "aliquam";
                }};;
                expand = "sapiente";
            }};            

            PutConnectorsIdConnectorSourcesResponse res = sdk.connections.putConnectorsIdConnectorSources(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorSourcesIdSource

Edit the provided connector source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorSourcesIdSourceRequest req = new PutConnectorsIdConnectorSourcesIdSourceRequest(119771L, 355369L) {{
                requestBody = new PutConnectorsIdConnectorSourcesIdSourceRequestBody() {{
                    authMechanism = "reprehenderit";
                    disabled = false;
                    disabledCapabilities = "ullam";
                    unavailable = false;
                    unavailableCapabilities = "nisi";
                }};;
                expand = "aut";
            }};            

            PutConnectorsIdConnectorSourcesIdSourceResponse res = sdk.connections.putConnectorsIdConnectorSourcesIdSource(req);

            if (res.connectorSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnection

We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionRequest req = new PutUsersIdUserConnectionsIdConnectionRequest(531849L, "qui") {{
                background = false;
                expand = "quibusdam";
                lastUpdate = OffsetDateTime.parse("2022-06-19T06:14:05.723Z");
                psuRequested = false;
            }};            

            PutUsersIdUserConnectionsIdConnectionResponse res = sdk.connections.putUsersIdUserConnectionsIdConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(929292L, 680270L, "architecto") {{
                requestBody = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    force = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "omnis";
            }};            

            PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.connections.putUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
