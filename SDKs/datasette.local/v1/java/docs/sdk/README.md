# SDK

## Overview

Execute SQL queries against a Datasette database and return the results as JSON

### Available Operations

* [query](#query) - Execute a SQLite SQL query against the content database

## query

Accepts SQLite SQL query, returns JSON. Does not allow PRAGMA statements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryRequest;
import org.openapis.openapi.models.operations.QueryResponse;
import org.openapis.openapi.models.operations.QueryShapeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryRequest req = new QueryRequest(QueryShapeEnum.ARRAY, "provident");            

            QueryResponse res = sdk.sdk.query(req);

            if (res.query200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
