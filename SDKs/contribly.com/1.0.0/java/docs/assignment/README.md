# assignment

## Overview

Create and list assignments

### Available Operations

* [deleteAssignmentsId](#deleteassignmentsid) - Delete this assignment and all of it's contributions
* [getAssignments](#getassignments) - List assignments
* [getAssignmentsId](#getassignmentsid) - Get a single assigment by id
* [postAssignments](#postassignments) - Create a new assignment

## deleteAssignmentsId

Delete this assignment and all of it's contributions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssignmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteAssignmentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAssignmentsIdRequest req = new DeleteAssignmentsIdRequest("provident");            

            DeleteAssignmentsIdResponse res = sdk.assignment.deleteAssignmentsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssignments

List assignments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssignmentsRequest;
import org.openapis.openapi.models.operations.GetAssignmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssignmentsRequest req = new GetAssignmentsRequest() {{
                alwaysOpen = false;
                name = "Ellis Mitchell";
                open = false;
                ownedBy = "illum";
                page = 423655L;
                pageSize = 623564L;
                q = "deserunt";
                tag = "suscipit";
                urlWords = "iure";
            }};            

            GetAssignmentsResponse res = sdk.assignment.getAssignments(req);

            if (res.assignments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssignmentsId

Get a single assigment by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssignmentsIdRequest;
import org.openapis.openapi.models.operations.GetAssignmentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssignmentsIdRequest req = new GetAssignmentsIdRequest("magnam");            

            GetAssignmentsIdResponse res = sdk.assignment.getAssignmentsId(req);

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssignments

Create a new assignment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssignmentsResponse;
import org.openapis.openapi.models.shared.Artifact;
import org.openapis.openapi.models.shared.AssignmentSubmission;
import org.openapis.openapi.models.shared.LatLong;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.MediaUsage;
import org.openapis.openapi.models.shared.OsmId;
import org.openapis.openapi.models.shared.Place;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagSet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AssignmentSubmission req = new AssignmentSubmission("debitis") {{
                allowsAnonymousContributions = false;
                cover = new MediaUsage() {{
                    artifacts = new org.openapis.openapi.models.shared.Artifact[]{{
                        add(new Artifact() {{
                            contentLength = 9636.63;
                            contentType = "tempora";
                            height = 3834.41;
                            label = "molestiae";
                            url = "minus";
                            width = 8121.69;
                        }}),
                    }};
                    id = "8796ed15-1a05-4dfc-addf-7cc78ca1ba92";
                    media = new Media() {{
                        duration = 5373.73;
                        id = "fc816742-cb73-4920-9929-396fea7596eb";
                        place = new Place() {{
                            country = "Bhutan";
                            geohash = "ipsa";
                            google = "reiciendis";
                            latLong = new LatLong() {{
                                latitude = 6667.67;
                                longitude = 6531.4;
                            }};;
                            name = "Ernest Ebert";
                            osm = new OsmId() {{
                                osmId = 7506.86;
                                osmType = "enim";
                            }};;
                        }};;
                        type = "omnis";
                    }};;
                }};;
                description = "nemo";
                embargo = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                ends = OffsetDateTime.parse("2022-07-24T21:51:02.112Z");
                featured = false;
                id = "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0";
                mediaRequired = false;
                moderator = "quasi";
                receiptMessage = "error";
                starts = OffsetDateTime.parse("2020-12-24T08:13:29.299Z");
                tags = new org.openapis.openapi.models.shared.Tag[]{{
                    add(new Tag("officia", "dolor") {{
                        colour = "#0061a6";
                        id = "ffe78f09-7b00-474f-9547-1b5e6e13b99d";
                        name = "Irma Ledner DVM";
                        tagSet = new TagSet("provident", "necessitatibus") {{
                            id = "91e450ad-2abd-4442-a980-2d502a94bb4f";
                            name = "Ethel Roob";
                        }};
                        urlWords = "sint";
                    }}),
                }};
                urlWords = "debitis";
            }};            

            PostAssignmentsResponse res = sdk.assignment.postAssignments(req);

            if (res.assignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
