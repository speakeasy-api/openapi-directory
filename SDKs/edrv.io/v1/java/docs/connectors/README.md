# connectors

### Available Operations

* [deleteConnector](#deleteconnector) - Delete a connector
* [getConnector](#getconnector) - Get a connector
* [getConnectors](#getconnectors) - List connectors
* [patchConnector](#patchconnector) - Update a connector's data
* [postConnectors](#postconnectors) - Create a new connector

## deleteConnector

Delete a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorRequest;
import org.openapis.openapi.models.operations.DeleteConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteConnectorRequest req = new DeleteConnectorRequest("nobis");            

            DeleteConnectorResponse res = sdk.connectors.deleteConnector(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnector

Get a connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorRequest;
import org.openapis.openapi.models.operations.GetConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConnectorRequest req = new GetConnectorRequest("omnis") {{
                includeEvse = false;
                includeOrganization = false;
                includeRate = false;
            }};            

            GetConnectorResponse res = sdk.connectors.getConnector(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectors

List connectors

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorsRequest;
import org.openapis.openapi.models.operations.GetConnectorsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConnectorsRequest req = new GetConnectorsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-07-24T21:51:02.112Z");
                includeEvse = false;
                includeOrganization = false;
                includeRate = false;
                paginateEnabled = false;
                paginateLimit = 634274L;
                paginatePage = "doloribus";
                sortBy = "sapiente";
                sortOrder = SortOrder1Enum.DESC;
                updatedAtDollarGte = OffsetDateTime.parse("2022-08-01T12:28:44.292Z");
                updatedAtDollarLte = OffsetDateTime.parse("2022-09-05T05:51:25.673Z");
            }};            

            GetConnectorsResponse res = sdk.connectors.getConnectors(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchConnector

Update a connector's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchConnectorRequest;
import org.openapis.openapi.models.operations.PatchConnectorRequestBody;
import org.openapis.openapi.models.operations.PatchConnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchConnectorRequest req = new PatchConnectorRequest(                new PatchConnectorRequestBody() {{
                                chargestation = "mollitia";
                                format = "occaecati";
                                power = 253291L;
                                powerType = "commodi";
                                rate = "quam";
                                type = "molestiae";
                            }};, "velit");            

            PatchConnectorResponse res = sdk.connectors.patchConnector(req);

            if (res.patchConnector201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConnectors

Create a new connector

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConnectorsRequestBody;
import org.openapis.openapi.models.operations.PostConnectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostConnectorsRequestBody req = new PostConnectorsRequestBody() {{
                chargestation = "quia";
                format = "quis";
                power = 110375L;
                powerType = "laborum";
                rate = "animi";
                type = "enim";
            }};            

            PostConnectorsResponse res = sdk.connectors.postConnectors(req);

            if (res.postConnectors200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
