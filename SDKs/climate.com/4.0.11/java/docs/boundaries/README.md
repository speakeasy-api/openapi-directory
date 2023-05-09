# boundaries

## Overview

Field Boundary data endpoints.

### Available Operations

* [fetchBoundaries](#fetchboundaries) - Retrieve Boundaries in batch
* [fetchBoundaryById](#fetchboundarybyid) - Retrieve a Boundary by ID
* [uploadBoundary](#uploadboundary) - Upload a boundary

## fetchBoundaries

Retrieve multiple **Boundaries** (up to 10 per request).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBoundariesResponse;
import org.openapis.openapi.models.operations.FetchBoundariesSecurity;
import org.openapis.openapi.models.shared.BoundariesQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BoundariesQuery req = new BoundariesQuery(                new String[]{{
                                add("c5955907-aff1-4a3a-afa9-467739251aa5"),
                            }});            

            FetchBoundariesResponse res = sdk.boundaries.fetchBoundaries(req, new FetchBoundariesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.boundaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBoundaryById

Retrieve a **Boundary** by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBoundaryByIdRequest;
import org.openapis.openapi.models.operations.FetchBoundaryByIdResponse;
import org.openapis.openapi.models.operations.FetchBoundaryByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBoundaryByIdRequest req = new FetchBoundaryByIdRequest("2c3f5ad0-19da-41ff-a78f-097b0074f154");            

            FetchBoundaryByIdResponse res = sdk.boundaries.fetchBoundaryById(req, new FetchBoundaryByIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.boundary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadBoundary

Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
This is restricted to callers with **boundaries:write** scope.
To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadBoundaryResponse;
import org.openapis.openapi.models.operations.UploadBoundarySecurity;
import org.openapis.openapi.models.shared.BoundaryUpload;
import org.openapis.openapi.models.shared.Geometry;
import org.openapis.openapi.models.shared.GeometryTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BoundaryUpload req = new BoundaryUpload(                new Geometry(                new String[]{{
                                                add("dicta"),
                                                add("harum"),
                                            }}, GeometryTypeEnum.POINT););            

            UploadBoundaryResponse res = sdk.boundaries.uploadBoundary(req, new UploadBoundarySecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.uploadedBoundaryId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
