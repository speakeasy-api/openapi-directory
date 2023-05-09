# layers

## Overview

General data retrieval endpoints.

### Available Operations

* [getV4LayersAsApplied](#getv4layersasapplied) - Retrieve a list of application activities
* [getV4LayersAsAppliedActivityIdContents](#getv4layersasappliedactivityidcontents) - Retrieve the raw application activity
* [getV4LayersAsHarvested](#getv4layersasharvested) - Retrieve a list of harvest activities
* [getV4LayersAsHarvestedActivityIdContents](#getv4layersasharvestedactivityidcontents) - Retrieve the raw harvest activity
* [getV4LayersAsPlanted](#getv4layersasplanted) - Retrieve a list of planting activities
* [getV4LayersAsPlantedActivityIdContents](#getv4layersasplantedactivityidcontents) - Retrieve the raw planting activity
* [getV4LayersScoutingObservations](#getv4layersscoutingobservations) - Retrieve a list of scouting observations
* [getV4LayersScoutingObservationsScoutingObservationId](#getv4layersscoutingobservationsscoutingobservationid) - Retrieve individual scouting observation
* [getV4LayersScoutingObservationsScoutingObservationIdAttachments](#getv4layersscoutingobservationsscoutingobservationidattachments) - Retrieve attachments associated with a given scouting observation.
* [getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents](#getv4layersscoutingobservationsscoutingobservationidattachmentsattachmentidcontents) - Retrieve the binary contents of a scouting observation’s attachment.

## getV4LayersAsApplied

Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersAsAppliedRequest;
import org.openapis.openapi.models.operations.GetV4LayersAsAppliedResponse;
import org.openapis.openapi.models.operations.GetV4LayersAsAppliedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersAsAppliedRequest req = new GetV4LayersAsAppliedRequest("quibusdam") {{
                xLimit = 149448;
                xNextToken = "saepe";
                occurredAfter = OffsetDateTime.parse("2022-11-20T20:56:20.791Z");
                occurredBefore = OffsetDateTime.parse("2022-06-29T11:09:23.468Z");
                resourceOwnerId = "921cddc6-9260-41fb-976b-0d5f0d30c5fb";
                updatedAfter = OffsetDateTime.parse("2022-08-28T17:02:52.151Z");
            }};            

            GetV4LayersAsAppliedResponse res = sdk.layers.getV4LayersAsApplied(req, new GetV4LayersAsAppliedSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.applicationActivities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV4LayersAsAppliedActivityIdContents

Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersAsAppliedActivityIdContentsRequest;
import org.openapis.openapi.models.operations.GetV4LayersAsAppliedActivityIdContentsResponse;
import org.openapis.openapi.models.operations.GetV4LayersAsAppliedActivityIdContentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersAsAppliedActivityIdContentsRequest req = new GetV4LayersAsAppliedActivityIdContentsRequest("quis", "totam", "7053202c-73d5-4fe9-b90c-28909b3fe49a");            

            GetV4LayersAsAppliedActivityIdContentsResponse res = sdk.layers.getV4LayersAsAppliedActivityIdContents(req, new GetV4LayersAsAppliedActivityIdContentsSecurity() {{
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

## getV4LayersAsHarvested

Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersAsHarvestedRequest;
import org.openapis.openapi.models.operations.GetV4LayersAsHarvestedResponse;
import org.openapis.openapi.models.operations.GetV4LayersAsHarvestedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersAsHarvestedRequest req = new GetV4LayersAsHarvestedRequest("deleniti") {{
                xLimit = 864282;
                xNextToken = "provident";
                occurredAfter = OffsetDateTime.parse("2020-10-23T12:23:35.067Z");
                occurredBefore = OffsetDateTime.parse("2022-01-24T10:05:07.174Z");
                resourceOwnerId = "8633323f-9b77-4f3a-8100-674ebf69280d";
                updatedAfter = OffsetDateTime.parse("2022-04-04T12:00:33.616Z");
            }};            

            GetV4LayersAsHarvestedResponse res = sdk.layers.getV4LayersAsHarvested(req, new GetV4LayersAsHarvestedSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.harvestActivities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV4LayersAsHarvestedActivityIdContents

Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersAsHarvestedActivityIdContentsRequest;
import org.openapis.openapi.models.operations.GetV4LayersAsHarvestedActivityIdContentsResponse;
import org.openapis.openapi.models.operations.GetV4LayersAsHarvestedActivityIdContentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersAsHarvestedActivityIdContentsRequest req = new GetV4LayersAsHarvestedActivityIdContentsRequest("dolorum", "iusto", "7a89ebf7-37ae-4420-bce5-e6a95d8a0d44");            

            GetV4LayersAsHarvestedActivityIdContentsResponse res = sdk.layers.getV4LayersAsHarvestedActivityIdContents(req, new GetV4LayersAsHarvestedActivityIdContentsSecurity() {{
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

## getV4LayersAsPlanted

Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersAsPlantedRequest;
import org.openapis.openapi.models.operations.GetV4LayersAsPlantedResponse;
import org.openapis.openapi.models.operations.GetV4LayersAsPlantedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersAsPlantedRequest req = new GetV4LayersAsPlantedRequest("vel") {{
                xLimit = 798047;
                xNextToken = "officiis";
                occurredAfter = OffsetDateTime.parse("2022-04-27T20:15:21.190Z");
                occurredBefore = OffsetDateTime.parse("2021-08-19T12:54:33.953Z");
                resourceOwnerId = "a73cf3be-453f-4870-b326-b5a73429cdb1";
                updatedAfter = OffsetDateTime.parse("2021-12-19T07:31:04.219Z");
            }};            

            GetV4LayersAsPlantedResponse res = sdk.layers.getV4LayersAsPlanted(req, new GetV4LayersAsPlantedSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.plantingActivities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV4LayersAsPlantedActivityIdContents

Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersAsPlantedActivityIdContentsRequest;
import org.openapis.openapi.models.operations.GetV4LayersAsPlantedActivityIdContentsResponse;
import org.openapis.openapi.models.operations.GetV4LayersAsPlantedActivityIdContentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersAsPlantedActivityIdContentsRequest req = new GetV4LayersAsPlantedActivityIdContentsRequest("incidunt", "aspernatur", "2bb679d2-3227-415b-b0cb-b1e31b8b90f3");            

            GetV4LayersAsPlantedActivityIdContentsResponse res = sdk.layers.getV4LayersAsPlantedActivityIdContents(req, new GetV4LayersAsPlantedActivityIdContentsSecurity() {{
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

## getV4LayersScoutingObservations

Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsRequest;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsResponse;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersScoutingObservationsRequest req = new GetV4LayersScoutingObservationsRequest() {{
                xLimit = 292147;
                xNextToken = "labore";
                occurredAfter = OffsetDateTime.parse("2022-04-28T19:10:24.037Z");
                occurredBefore = OffsetDateTime.parse("2022-12-08T23:47:03.469Z");
            }};            

            GetV4LayersScoutingObservationsResponse res = sdk.layers.getV4LayersScoutingObservations(req, new GetV4LayersScoutingObservationsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.scoutingObservations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV4LayersScoutingObservationsScoutingObservationId

Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdRequest;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdResponse;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersScoutingObservationsScoutingObservationIdRequest req = new GetV4LayersScoutingObservationsScoutingObservationIdRequest("08e0adcf-4b92-4187-9fce-953f73ef7fbc");            

            GetV4LayersScoutingObservationsScoutingObservationIdResponse res = sdk.layers.getV4LayersScoutingObservationsScoutingObservationId(req, new GetV4LayersScoutingObservationsScoutingObservationIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.scoutingObservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV4LayersScoutingObservationsScoutingObservationIdAttachments

Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest req = new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest("7abd74dd-39c0-4f5d-acff-7c70a45626d4") {{
                xLimit = 189848;
                xNextToken = "ex";
            }};            

            GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse res = sdk.layers.getV4LayersScoutingObservationsScoutingObservationIdAttachments(req, new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.scoutingObservationAttachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents

Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse;
import org.openapis.openapi.models.operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest req = new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest("laudantium", "dicta", "3f16d9f5-fce6-4c55-a146-c3e250fb008c", "42e141aa-c366-4c8d-96b1-442907474778");            

            GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse res = sdk.layers.getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents(req, new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity() {{
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
