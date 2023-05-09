# providers

### Available Operations

* [deleteConnectionsIdConnectionSourcesIdSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteConnectorsIdConnectorLogosIdLogo](#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [deleteUsersIdUserConnections](#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [getBanks](#getbanks) - Get list of connectors
* [getBanksIdBank](#getbanksidbank) - Get a connector
* [getBanksIdConnectorLogos](#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosMain](#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosThumbnail](#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getBanksIdConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [getConnections](#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorLogos](#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosMain](#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosThumbnail](#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getLogs](#getlogs) - Get connection logs
* [getProviders](#getproviders) - Get list of connectors
* [getProvidersIdConnectorLogos](#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosMain](#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosThumbnail](#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](#getprovidersidprovider) - Get a connector
* [getUsersIdUserConnections](#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserLogs](#getusersiduserlogs) - Get connection logs
* [postConnectionsIdConnectionSourcesIdSource](#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](#postconnectors) - Request a new connector
* [postConnectorsIdConnectorLogos](#postconnectorsidconnectorlogos) - Create a connector Logo
* [postUsersIdUserConnections](#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [putConnectionsIdConnectionSourcesIdSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectorsIdConnectorLogos](#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [putConnectorsIdConnectorLogosIdLogo](#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
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

            DeleteConnectionsIdConnectionSourcesIdSourceRequest req = new DeleteConnectionsIdConnectionSourcesIdSourceRequest(513075L, 428796L) {{
                expand = "mollitia";
            }};            

            DeleteConnectionsIdConnectionSourcesIdSourceResponse res = sdk.providers.deleteConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectorsIdConnectorLogosIdLogo

Delete a single Logo object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorsIdConnectorLogosIdLogoRequest;
import org.openapis.openapi.models.operations.DeleteConnectorsIdConnectorLogosIdLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectorsIdConnectorLogosIdLogoRequest req = new DeleteConnectorsIdConnectorLogosIdLogoRequest(68074L, 544591L) {{
                expand = "non";
            }};            

            DeleteConnectorsIdConnectorLogosIdLogoResponse res = sdk.providers.deleteConnectorsIdConnectorLogosIdLogo(req);

            if (res.connectorLogo != null) {
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

            DeleteUsersIdUserConnectionsRequest req = new DeleteUsersIdUserConnectionsRequest("voluptatem") {{
                expand = "dolor";
            }};            

            DeleteUsersIdUserConnectionsResponse res = sdk.providers.deleteUsersIdUserConnections(req);

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

            DeleteUsersIdUserConnectionsIdConnectionRequest req = new DeleteUsersIdUserConnectionsIdConnectionRequest(580152L, "numquam") {{
                expand = "impedit";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionResponse res = sdk.providers.deleteUsersIdUserConnectionsIdConnection(req);

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

            DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(131055L, 376226L, "aut") {{
                expand = "dignissimos";
            }};            

            DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.providers.deleteUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

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
                expand = "dicta";
            }};            

            GetBanksResponse res = sdk.providers.getBanks(req);

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

            GetBanksIdBankRequest req = new GetBanksIdBankRequest(981640L) {{
                expand = "natus";
            }};            

            GetBanksIdBankResponse res = sdk.providers.getBanksIdBank(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorLogosRequest req = new GetBanksIdConnectorLogosRequest(244651L) {{
                expand = "voluptatibus";
            }};            

            GetBanksIdConnectorLogosResponse res = sdk.providers.getBanksIdConnectorLogos(req);

            if (res.getBanksIdConnectorLogos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosMainRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorLogosMainRequest req = new GetBanksIdConnectorLogosMainRequest(374323L) {{
                expand = "asperiores";
            }};            

            GetBanksIdConnectorLogosMainResponse res = sdk.providers.getBanksIdConnectorLogosMain(req);

            if (res.getBanksIdConnectorLogosMain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBanksIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosThumbnailRequest;
import org.openapis.openapi.models.operations.GetBanksIdConnectorLogosThumbnailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBanksIdConnectorLogosThumbnailRequest req = new GetBanksIdConnectorLogosThumbnailRequest(45659L) {{
                expand = "ea";
            }};            

            GetBanksIdConnectorLogosThumbnailResponse res = sdk.providers.getBanksIdConnectorLogosThumbnail(req);

            if (res.getBanksIdConnectorLogosThumbnail200ApplicationJSONObject != null) {
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

            GetBanksIdConnectorSourcesRequest req = new GetBanksIdConnectorSourcesRequest(310067L) {{
                expand = "consequuntur";
            }};            

            GetBanksIdConnectorSourcesResponse res = sdk.providers.getBanksIdConnectorSources(req);

            if (res.getBanksIdConnectorSources200ApplicationJSONObject != null) {
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

            GetBanksIdConnectorSourcesIdSourceRequest req = new GetBanksIdConnectorSourcesIdSourceRequest(831520L, 638762L) {{
                expand = "maxime";
            }};            

            GetBanksIdConnectorSourcesIdSourceResponse res = sdk.providers.getBanksIdConnectorSourcesIdSource(req);

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
                expand = "dignissimos";
            }};            

            GetConnectionsResponse res = sdk.providers.getConnections(req);

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

            GetConnectionsIdConnectionLogsRequest req = new GetConnectionsIdConnectionLogsRequest(640024L) {{
                connectorUuid = "asperiores";
                error = "nemo";
                expand = "quae";
                idConnectionQueryParameter = 312753L;
                idConnector = 783235L;
                idMax = 801836L;
                idSource = 288398L;
                idUser = 70447L;
                limit = 241418L;
                maxDate = LocalDate.parse("2021-09-04");
                minDate = LocalDate.parse("2022-10-03");
                offset = 633931L;
                period = "est";
            }};            

            GetConnectionsIdConnectionLogsResponse res = sdk.providers.getConnectionsIdConnectionLogs(req);

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

            GetConnectionsIdConnectionSourcesRequest req = new GetConnectionsIdConnectionSourcesRequest(926880L) {{
                expand = "totam";
            }};            

            GetConnectionsIdConnectionSourcesResponse res = sdk.providers.getConnectionsIdConnectionSources(req);

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
                expand = "fugiat";
            }};            

            GetConnectorsResponse res = sdk.providers.getConnectors(req);

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

            GetConnectorsIdConnectorRequest req = new GetConnectorsIdConnectorRequest(424089L) {{
                expand = "ducimus";
            }};            

            GetConnectorsIdConnectorResponse res = sdk.providers.getConnectorsIdConnector(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorLogosRequest req = new GetConnectorsIdConnectorLogosRequest(554688L) {{
                expand = "vel";
            }};            

            GetConnectorsIdConnectorLogosResponse res = sdk.providers.getConnectorsIdConnectorLogos(req);

            if (res.getConnectorsIdConnectorLogos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosMainRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorLogosMainRequest req = new GetConnectorsIdConnectorLogosMainRequest(287051L) {{
                expand = "possimus";
            }};            

            GetConnectorsIdConnectorLogosMainResponse res = sdk.providers.getConnectorsIdConnectorLogosMain(req);

            if (res.getConnectorsIdConnectorLogosMain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorsIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosThumbnailRequest;
import org.openapis.openapi.models.operations.GetConnectorsIdConnectorLogosThumbnailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectorsIdConnectorLogosThumbnailRequest req = new GetConnectorsIdConnectorLogosThumbnailRequest(706575L) {{
                expand = "cum";
            }};            

            GetConnectorsIdConnectorLogosThumbnailResponse res = sdk.providers.getConnectorsIdConnectorLogosThumbnail(req);

            if (res.getConnectorsIdConnectorLogosThumbnail200ApplicationJSONObject != null) {
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

            GetConnectorsIdConnectorSourcesRequest req = new GetConnectorsIdConnectorSourcesRequest(414857L) {{
                expand = "in";
            }};            

            GetConnectorsIdConnectorSourcesResponse res = sdk.providers.getConnectorsIdConnectorSources(req);

            if (res.getConnectorsIdConnectorSources200ApplicationJSONObject != null) {
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

            GetConnectorsIdConnectorSourcesIdSourceRequest req = new GetConnectorsIdConnectorSourcesIdSourceRequest(360545L, 968904L) {{
                expand = "assumenda";
            }};            

            GetConnectorsIdConnectorSourcesIdSourceResponse res = sdk.providers.getConnectorsIdConnectorSourcesIdSource(req);

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
                connectorUuid = "nemo";
                error = "recusandae";
                expand = "aliquid";
                idConnection = 46007L;
                idConnector = 738683L;
                idMax = 232627L;
                idSource = 449083L;
                idUser = 348519L;
                limit = 937285L;
                maxDate = LocalDate.parse("2022-03-25");
                minDate = LocalDate.parse("2021-11-08");
                offset = 968972L;
                period = "quidem";
            }};            

            GetLogsResponse res = sdk.providers.getLogs(req);

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
                expand = "saepe";
            }};            

            GetProvidersResponse res = sdk.providers.getProviders(req);

            if (res.getProviders200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorLogosRequest req = new GetProvidersIdConnectorLogosRequest(897071L) {{
                expand = "dolore";
            }};            

            GetProvidersIdConnectorLogosResponse res = sdk.providers.getProvidersIdConnectorLogos(req);

            if (res.getProvidersIdConnectorLogos200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosMainRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosMainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorLogosMainRequest req = new GetProvidersIdConnectorLogosMainRequest(121059L) {{
                expand = "asperiores";
            }};            

            GetProvidersIdConnectorLogosMainResponse res = sdk.providers.getProvidersIdConnectorLogosMain(req);

            if (res.getProvidersIdConnectorLogosMain200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvidersIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosThumbnailRequest;
import org.openapis.openapi.models.operations.GetProvidersIdConnectorLogosThumbnailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProvidersIdConnectorLogosThumbnailRequest req = new GetProvidersIdConnectorLogosThumbnailRequest(241545L) {{
                expand = "non";
            }};            

            GetProvidersIdConnectorLogosThumbnailResponse res = sdk.providers.getProvidersIdConnectorLogosThumbnail(req);

            if (res.getProvidersIdConnectorLogosThumbnail200ApplicationJSONObject != null) {
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

            GetProvidersIdConnectorSourcesRequest req = new GetProvidersIdConnectorSourcesRequest(228263L) {{
                expand = "beatae";
            }};            

            GetProvidersIdConnectorSourcesResponse res = sdk.providers.getProvidersIdConnectorSources(req);

            if (res.getProvidersIdConnectorSources200ApplicationJSONObject != null) {
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

            GetProvidersIdConnectorSourcesIdSourceRequest req = new GetProvidersIdConnectorSourcesIdSourceRequest(489509L, 950953L) {{
                expand = "debitis";
            }};            

            GetProvidersIdConnectorSourcesIdSourceResponse res = sdk.providers.getProvidersIdConnectorSourcesIdSource(req);

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

            GetProvidersIdProviderRequest req = new GetProvidersIdProviderRequest(233420L) {{
                expand = "corporis";
            }};            

            GetProvidersIdProviderResponse res = sdk.providers.getProvidersIdProvider(req);

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

            GetUsersIdUserConnectionsRequest req = new GetUsersIdUserConnectionsRequest("harum") {{
                expand = "laboriosam";
            }};            

            GetUsersIdUserConnectionsResponse res = sdk.providers.getUsersIdUserConnections(req);

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

            GetUsersIdUserConnectionsIdConnectionInformationsRequest req = new GetUsersIdUserConnectionsIdConnectionInformationsRequest(58356L, "voluptates") {{
                expand = "libero";
            }};            

            GetUsersIdUserConnectionsIdConnectionInformationsResponse res = sdk.providers.getUsersIdUserConnectionsIdConnectionInformations(req);

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

            GetUsersIdUserConnectionsIdConnectionLogsRequest req = new GetUsersIdUserConnectionsIdConnectionLogsRequest(113816L, "accusamus") {{
                connectorUuid = "similique";
                error = "tempora";
                expand = "aspernatur";
                idConnectionQueryParameter = 379057L;
                idConnector = 374244L;
                idMax = 374296L;
                idSource = 324405L;
                idUserQueryParameter = 748789L;
                limit = 680116L;
                maxDate = LocalDate.parse("2022-03-16");
                minDate = LocalDate.parse("2022-07-01");
                offset = 449292L;
                period = "dolore";
            }};            

            GetUsersIdUserConnectionsIdConnectionLogsResponse res = sdk.providers.getUsersIdUserConnectionsIdConnectionLogs(req);

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

            GetUsersIdUserConnectionsIdConnectionSourcesRequest req = new GetUsersIdUserConnectionsIdConnectionSourcesRequest(304468L, "officiis") {{
                expand = "temporibus";
            }};            

            GetUsersIdUserConnectionsIdConnectionSourcesResponse res = sdk.providers.getUsersIdUserConnectionsIdConnectionSources(req);

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

            GetUsersIdUserLogsRequest req = new GetUsersIdUserLogsRequest("ullam") {{
                connectorUuid = "adipisci";
                error = "cum";
                expand = "blanditiis";
                idConnection = 555361L;
                idConnector = 942584L;
                idMax = 201517L;
                idSource = 633998L;
                idUserQueryParameter = 548519L;
                limit = 867290L;
                maxDate = LocalDate.parse("2021-02-13");
                minDate = LocalDate.parse("2022-04-01");
                offset = 24619L;
                period = "rerum";
            }};            

            GetUsersIdUserLogsResponse res = sdk.providers.getUsersIdUserLogs(req);

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

            PostConnectionsIdConnectionSourcesIdSourceRequest req = new PostConnectionsIdConnectionSourcesIdSourceRequest(148829L, 967966L) {{
                requestBody = new PostConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "explicabo";
            }};            

            PostConnectionsIdConnectionSourcesIdSourceResponse res = sdk.providers.postConnectionsIdConnectionSourcesIdSource(req);

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

            PostConnectorsRequest req = new PostConnectorsRequest(                new PostConnectorsRequestBody("asperiores", "facilis", "voluptate") {{
                                comment = "expedita";
                                email = "Leopoldo.Greenholt44@gmail.com";
                                sendmail = false;
                                types = "commodi";
                                url = "quidem";
                            }};) {{
                expand = "explicabo";
            }};            

            PostConnectorsResponse res = sdk.providers.postConnectors(req);

            if (res.connector != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectorsIdConnectorLogos

This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectorsIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.PostConnectorsIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConnectorsIdConnectorLogosRequest req = new PostConnectorsIdConnectorLogosRequest(378326L) {{
                expand = "unde";
            }};            

            PostConnectorsIdConnectorLogosResponse res = sdk.providers.postConnectorsIdConnectorLogos(req);

            if (res.connectorLogo != null) {
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

            PostUsersIdUserConnectionsRequest req = new PostUsersIdUserConnectionsRequest("architecto") {{
                requestBody = new PostUsersIdUserConnectionsRequestBody() {{
                    connectorUuid = "suscipit";
                    idConnector = 960257L;
                }};;
                expand = "debitis";
                source = "illo";
            }};            

            PostUsersIdUserConnectionsResponse res = sdk.providers.postUsersIdUserConnections(req);

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

            PostUsersIdUserConnectionsIdConnectionRequest req = new PostUsersIdUserConnectionsIdConnectionRequest(967795L, "perferendis") {{
                requestBody = new PostUsersIdUserConnectionsIdConnectionRequestBody() {{
                    active = false;
                    decoupled = false;
                    expire = OffsetDateTime.parse("2021-01-15T21:52:35.790Z");
                    login = "incidunt";
                    password = "sed";
                }};;
                background = false;
                expand = "provident";
                psuRequested = false;
                refreshPsd2Auth = false;
            }};            

            PostUsersIdUserConnectionsIdConnectionResponse res = sdk.providers.postUsersIdUserConnectionsIdConnection(req);

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

            PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(258702L, 896762L, "ipsum") {{
                requestBody = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "ea";
            }};            

            PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.providers.postUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

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

            PutConnectionsIdConnectionSourcesIdSourceRequest req = new PutConnectionsIdConnectionSourcesIdSourceRequest(579912L, 552078L) {{
                requestBody = new PutConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    force = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "voluptatibus";
            }};            

            PutConnectionsIdConnectionSourcesIdSourceResponse res = sdk.providers.putConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorLogos

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorLogosRequest req = new PutConnectorsIdConnectorLogosRequest(271653L) {{
                expand = "tempora";
            }};            

            PutConnectorsIdConnectorLogosResponse res = sdk.providers.putConnectorsIdConnectorLogos(req);

            if (res.connectorLogo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConnectorsIdConnectorLogosIdLogo

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosIdLogoRequest;
import org.openapis.openapi.models.operations.PutConnectorsIdConnectorLogosIdLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutConnectorsIdConnectorLogosIdLogoRequest req = new PutConnectorsIdConnectorLogosIdLogoRequest(455444L, 970076L) {{
                expand = "ex";
            }};            

            PutConnectorsIdConnectorLogosIdLogoResponse res = sdk.providers.putConnectorsIdConnectorLogosIdLogo(req);

            if (res.connectorLogo != null) {
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

            PutConnectorsIdConnectorSourcesRequest req = new PutConnectorsIdConnectorSourcesRequest(25497L) {{
                requestBody = new PutConnectorsIdConnectorSourcesRequestBody() {{
                    disabledCapabilities = "non";
                    unavailableCapabilities = "officiis";
                }};;
                expand = "praesentium";
            }};            

            PutConnectorsIdConnectorSourcesResponse res = sdk.providers.putConnectorsIdConnectorSources(req);

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

            PutConnectorsIdConnectorSourcesIdSourceRequest req = new PutConnectorsIdConnectorSourcesIdSourceRequest(708609L, 310381L) {{
                requestBody = new PutConnectorsIdConnectorSourcesIdSourceRequestBody() {{
                    authMechanism = "incidunt";
                    disabled = false;
                    disabledCapabilities = "ipsam";
                    unavailable = false;
                    unavailableCapabilities = "debitis";
                }};;
                expand = "rem";
            }};            

            PutConnectorsIdConnectorSourcesIdSourceResponse res = sdk.providers.putConnectorsIdConnectorSourcesIdSource(req);

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

            PutUsersIdUserConnectionsIdConnectionRequest req = new PutUsersIdUserConnectionsIdConnectionRequest(26522L, "nobis") {{
                background = false;
                expand = "error";
                lastUpdate = OffsetDateTime.parse("2022-09-02T17:12:20.523Z");
                psuRequested = false;
            }};            

            PutUsersIdUserConnectionsIdConnectionResponse res = sdk.providers.putUsersIdUserConnectionsIdConnection(req);

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

            PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest req = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest(924159L, 967122L, "nulla") {{
                requestBody = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody() {{
                    disabled = false;
                    force = false;
                    synchronize = false;
                }};;
                background = false;
                expand = "magni";
            }};            

            PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse res = sdk.providers.putUsersIdUserConnectionsIdConnectionSourcesIdSource(req);

            if (res.connectionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
