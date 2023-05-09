# organizationExports

## Overview

An `organization_export` object represents a request to export the complete data of an organization in JSON format.

To export an organization using this API:

* Create an `organization_export`
  [request](/docs/create-an-organization-export-request)
  and store the ID that is returned.
* Request the `organization_export` every few minutes, until the
  `state` field contains ‘finished’.
* Download the file located at the URL in the `download_url` field. * Exports can take a long time, from several minutes to a few hours
  for large organizations.


*Note: These endpoints are only available to [Service Accounts](https://asana.com/guide/help/premium/service-accounts) of an [Enterprise](https://asana.com/enterprise) organization.*

### Available Operations

* [createOrganizationExport](#createorganizationexport) - Create an organization export request
* [getOrganizationExport](#getorganizationexport) - Get details on an org export request

## createOrganizationExport

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationExportRequest;
import org.openapis.openapi.models.operations.CreateOrganizationExportRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationExportResponse;
import org.openapis.openapi.models.shared.OrganizationExportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateOrganizationExportRequest req = new CreateOrganizationExportRequest(                new CreateOrganizationExportRequestBody() {{
                                data = new OrganizationExportRequest() {{
                                    organization = "1331";
                                }};;
                            }};) {{
                limit = 383462L;
                offset = "natus";
                optFields = new String[]{{
                    add("eum"),
                    add("vero"),
                    add("aspernatur"),
                }};
                optPretty = false;
            }};            

            CreateOrganizationExportResponse res = sdk.organizationExports.createOrganizationExport(req);

            if (res.createOrganizationExport201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationExport

Returns details of a previously-requested Organization export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationExportRequest;
import org.openapis.openapi.models.operations.GetOrganizationExportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetOrganizationExportRequest req = new GetOrganizationExportRequest("architecto") {{
                optFields = new String[]{{
                    add("et"),
                    add("excepturi"),
                }};
                optPretty = false;
            }};            

            GetOrganizationExportResponse res = sdk.organizationExports.getOrganizationExport(req);

            if (res.getOrganizationExport200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
