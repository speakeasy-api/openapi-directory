# exports

## Overview

General data export endpoints.

### Available Operations

* [fetchExportContentsById](#fetchexportcontentsbyid) - Retrieve the binary contents of a processed export request.
* [fetchExportStatusById](#fetchexportstatusbyid) - Retrieve the status of an Export.
* [postExport](#postexport) - Initiate a new export request.

## fetchExportContentsById

Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExportContentsByIdRequest;
import org.openapis.openapi.models.operations.FetchExportContentsByIdResponse;
import org.openapis.openapi.models.operations.FetchExportContentsByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExportContentsByIdRequest req = new FetchExportContentsByIdRequest("accusamus", "commodi", "e13b99d4-88e1-4e91-a450-ad2abd442698");            

            FetchExportContentsByIdResponse res = sdk.exports.fetchExportContentsById(req, new FetchExportContentsByIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchExportStatusById

Check the status of an **Export** by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExportStatusByIdRequest;
import org.openapis.openapi.models.operations.FetchExportStatusByIdResponse;
import org.openapis.openapi.models.operations.FetchExportStatusByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExportStatusByIdRequest req = new FetchExportStatusByIdRequest("02d502a9-4bb4-4f63-8969-e9a3efa77dfb");            

            FetchExportStatusByIdResponse res = sdk.exports.fetchExportStatusById(req, new FetchExportStatusByIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.exportStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExport

Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.
The following `contentTypes` may be requested:
  * __application/vnd.climate.acrsi.geojson__ (Beta)
     Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * plantingStartDate
       * plantingEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.
  
  * __application/vnd.climate.harvest.geojson__
     Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * harvestStartDate
       * harvestEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExportResponse;
import org.openapis.openapi.models.operations.PostExportSecurity;
import org.openapis.openapi.models.shared.Export;
import org.openapis.openapi.models.shared.ExportContentTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Export req = new Export(ExportContentTypeEnum.APPLICATION_VND_CLIMATE_ACRSI_GEOJSON) {{
                definition = new java.util.HashMap<String, Object>() {{
                    put("cumque", "facere");
                    put("ea", "aliquid");
                }};
            }};            

            PostExportResponse res = sdk.exports.postExport(req, new PostExportSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createdExport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
