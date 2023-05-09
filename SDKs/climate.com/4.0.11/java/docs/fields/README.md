# fields

## Overview

Field data endpoints.

### Available Operations

* [fetchAllFields](#fetchallfields) - Retrieve list of all Fields the user has access to.
* [fetchFieldById](#fetchfieldbyid) - Retrieve a specific Field by ID
* [fetchFields](#fetchfields) - Retrieve list of Fields

## fetchAllFields

Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAllFieldsRequest;
import org.openapis.openapi.models.operations.FetchAllFieldsResponse;
import org.openapis.openapi.models.operations.FetchAllFieldsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAllFieldsRequest req = new FetchAllFieldsRequest() {{
                xLimit = 428769;
                xNextToken = "vero";
                fieldName = "aspernatur";
            }};            

            FetchAllFieldsResponse res = sdk.fields.fetchAllFields(req, new FetchAllFieldsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.fields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFieldById

Retrieve a given **Field** by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFieldByIdRequest;
import org.openapis.openapi.models.operations.FetchFieldByIdResponse;
import org.openapis.openapi.models.operations.FetchFieldByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFieldByIdRequest req = new FetchFieldByIdRequest("14195989-0afa-4563-a251-6fe4c8b711e5");            

            FetchFieldByIdResponse res = sdk.fields.fetchFieldById(req, new FetchFieldByIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.field != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFields

Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFieldsRequest;
import org.openapis.openapi.models.operations.FetchFieldsResponse;
import org.openapis.openapi.models.operations.FetchFieldsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFieldsRequest req = new FetchFieldsRequest() {{
                xLimit = 714242;
                xNextToken = "nihil";
                fieldName = "repellat";
            }};            

            FetchFieldsResponse res = sdk.fields.fetchFields(req, new FetchFieldsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.fields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
