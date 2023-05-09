# relations

## Overview

This contains requests related to relations. 

Relations can be of the following types: 
- `contracttest`
- `integrationtest`
- `documentation`
- `testsuite`
- `environment`
- `mock`
- `monitor`

### Available Operations

* [createRelations](#createrelations) - Create relations
* [getContractTestRelations](#getcontracttestrelations) - Get contract test relations
* [getDocumentationRelations](#getdocumentationrelations) - Get  documentation relations
* [getEnvironmentRelations](#getenvironmentrelations) - Get environment relations
* [getIntegrationTestRelations](#getintegrationtestrelations) - Get integration test relations
* [getLinkedRelations](#getlinkedrelations) - Get linked relations
* [getMonitorRelations](#getmonitorrelations) - Get monitor relations
* [getTestSuiteRelations](#gettestsuiterelations) - Get test suite relations
* [syncRelationsWithSchema](#syncrelationswithschema) - Sync relations with schema

## createRelations

This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. 

<table>
  <tr>
    <th>Relation</th>
    <th>Entity ID type</th>
  <tr>
  <tr>
    <td>contracttest</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>integrationtest</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>documentation</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>testsuite</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>environment</td>
    <td>Environment UIDs</td>
  </tr>
  <tr>
    <td>mock</td>
    <td>Mock IDs</td>
  </tr>
  <tr>
    <td>monitor</td>
    <td>Monitor IDs</td>
  </tr>
</table>

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRelationsRequest;
import org.openapis.openapi.models.operations.CreateRelationsRequestBody;
import org.openapis.openapi.models.operations.CreateRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRelationsRequest req = new CreateRelationsRequest("architecto", "ipsa") {{
                requestBody = new CreateRelationsRequestBody() {{
                    contracttest = new String[]{{
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                    }};
                    documentation = new String[]{{
                        add("collection-uid-3"),
                        add("collection-uid-3"),
                        add("collection-uid-3"),
                    }};
                    mock = new String[]{{
                        add("mock-uid-1"),
                        add("mock-uid-1"),
                        add("mock-uid-1"),
                    }};
                    testsuite = new String[]{{
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                        add("collection-uid-1"),
                    }};
                }};;
            }};            

            CreateRelationsResponse res = sdk.relations.createRelations(req);

            if (res.createRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContractTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContractTestRelationsRequest;
import org.openapis.openapi.models.operations.GetContractTestRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContractTestRelationsRequest req = new GetContractTestRelationsRequest("dolores", "dolorem");            

            GetContractTestRelationsResponse res = sdk.relations.getContractTestRelations(req);

            if (res.getContractTestRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentationRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentationRelationsRequest;
import org.openapis.openapi.models.operations.GetDocumentationRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentationRelationsRequest req = new GetDocumentationRelationsRequest("corporis", "explicabo");            

            GetDocumentationRelationsResponse res = sdk.relations.getDocumentationRelations(req);

            if (res.getDocumentationRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironmentRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRelationsRequest;
import org.openapis.openapi.models.operations.GetEnvironmentRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnvironmentRelationsRequest req = new GetEnvironmentRelationsRequest("nobis", "enim");            

            GetEnvironmentRelationsResponse res = sdk.relations.getEnvironmentRelations(req);

            if (res.getEnvironmentRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegrationTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationTestRelationsRequest;
import org.openapis.openapi.models.operations.GetIntegrationTestRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIntegrationTestRelationsRequest req = new GetIntegrationTestRelationsRequest("omnis", "nemo");            

            GetIntegrationTestRelationsResponse res = sdk.relations.getIntegrationTestRelations(req);

            if (res.getIntegrationTestRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinkedRelations

This call fetches all the relations which are linked to the specified API version along with their details.

The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinkedRelationsRequest;
import org.openapis.openapi.models.operations.GetLinkedRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLinkedRelationsRequest req = new GetLinkedRelationsRequest("minima", "excepturi");            

            GetLinkedRelationsResponse res = sdk.relations.getLinkedRelations(req);

            if (res.getLinkedRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitorRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitorRelationsRequest;
import org.openapis.openapi.models.operations.GetMonitorRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMonitorRelationsRequest req = new GetMonitorRelationsRequest("accusantium", "iure");            

            GetMonitorRelationsResponse res = sdk.relations.getMonitorRelations(req);

            if (res.getMonitorRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestSuiteRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestSuiteRelationsRequest;
import org.openapis.openapi.models.operations.GetTestSuiteRelationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTestSuiteRelationsRequest req = new GetTestSuiteRelationsRequest("culpa", "doloribus");            

            GetTestSuiteRelationsResponse res = sdk.relations.getTestSuiteRelations(req);

            if (res.getTestSuiteRelations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## syncRelationsWithSchema

This call allows you to keep the relation in sync with the API schema.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SyncRelationsWithSchemaRequest;
import org.openapis.openapi.models.operations.SyncRelationsWithSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SyncRelationsWithSchemaRequest req = new SyncRelationsWithSchemaRequest("{{apiId}}", "{{apiVersionId}}", "{{entityId}}", "{{entityType}}");            

            SyncRelationsWithSchemaResponse res = sdk.relations.syncRelationsWithSchema(req);

            if (res.syncRelationsWithSchema200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
