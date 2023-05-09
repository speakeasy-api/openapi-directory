# statusUpdates

## Overview

A status update is an update on the progress of a particular object,
and is sent out to all followers when created. These updates
include both text describing the update and a `status_type` intended to
represent the overall state of the project. These include: `on_track` for projects that
are on track, `at_risk` for projects at risk, `off_track` for projects that
are behind, and `on_hold` for projects on hold.

Status updates can be created and deleted, but not modified.

### Available Operations

* [createStatusForObject](#createstatusforobject) - Create a status update
* [deleteStatus](#deletestatus) - Delete a status update
* [getStatus](#getstatus) - Get a status update
* [getStatusesForObject](#getstatusesforobject) - Get status updates from an object

## createStatusForObject

Creates a new status update on an object.
Returns the full record of the newly created status update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStatusForObjectRequest;
import org.openapis.openapi.models.operations.CreateStatusForObjectRequestBodyInput;
import org.openapis.openapi.models.operations.CreateStatusForObjectResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusUpdateRequestInput;
import org.openapis.openapi.models.shared.StatusUpdateRequestStatusTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateStatusForObjectRequest req = new CreateStatusForObjectRequest(                new CreateStatusForObjectRequestBodyInput() {{
                                data = new StatusUpdateRequestInput("sequi", StatusUpdateRequestStatusTypeEnum.ACHIEVED, "The project is moving forward according to plan...") {{
                                    htmlText = "<body>The project <strong>is</strong> moving forward according to plan...</body>";
                                    title = "Status Update - Jun 15";
                                }};;
                            }};) {{
                limit = 773326L;
                offset = "aut";
                optFields = new String[]{{
                    add("exercitationem"),
                    add("nulla"),
                    add("fugit"),
                    add("porro"),
                }};
                optPretty = false;
            }};            

            CreateStatusForObjectResponse res = sdk.statusUpdates.createStatusForObject(req);

            if (res.createStatusForObject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStatus

Deletes a specific, existing status update.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStatusRequest;
import org.openapis.openapi.models.operations.DeleteStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteStatusRequest req = new DeleteStatusRequest("maiores") {{
                optFields = new String[]{{
                    add("iusto"),
                    add("eligendi"),
                    add("ducimus"),
                    add("alias"),
                }};
                optPretty = false;
            }};            

            DeleteStatusResponse res = sdk.statusUpdates.deleteStatus(req);

            if (res.deleteStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatus

Returns the complete record for a single status update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatusRequest;
import org.openapis.openapi.models.operations.GetStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStatusRequest req = new GetStatusRequest("officia") {{
                optFields = new String[]{{
                    add("ipsam"),
                    add("ea"),
                }};
                optPretty = false;
            }};            

            GetStatusResponse res = sdk.statusUpdates.getStatus(req);

            if (res.getStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatusesForObject

Returns the compact status update records for all updates on the object.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatusesForObjectRequest;
import org.openapis.openapi.models.operations.GetStatusesForObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStatusesForObjectRequest req = new GetStatusesForObjectRequest("aspernatur") {{
                createdSince = OffsetDateTime.parse("2022-03-06T22:14:54.933Z");
                limit = 297842L;
                offset = "ratione";
                optFields = new String[]{{
                    add("laudantium"),
                    add("dicta"),
                }};
                optPretty = false;
            }};            

            GetStatusesForObjectResponse res = sdk.statusUpdates.getStatusesForObject(req);

            if (res.getStatusesForObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
