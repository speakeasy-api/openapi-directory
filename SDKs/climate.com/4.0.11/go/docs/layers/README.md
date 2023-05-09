# Layers

## Overview

General data retrieval endpoints.

### Available Operations

* [GetV4LayersAsApplied](#getv4layersasapplied) - Retrieve a list of application activities
* [GetV4LayersAsAppliedActivityIDContents](#getv4layersasappliedactivityidcontents) - Retrieve the raw application activity
* [GetV4LayersAsHarvested](#getv4layersasharvested) - Retrieve a list of harvest activities
* [GetV4LayersAsHarvestedActivityIDContents](#getv4layersasharvestedactivityidcontents) - Retrieve the raw harvest activity
* [GetV4LayersAsPlanted](#getv4layersasplanted) - Retrieve a list of planting activities
* [GetV4LayersAsPlantedActivityIDContents](#getv4layersasplantedactivityidcontents) - Retrieve the raw planting activity
* [GetV4LayersScoutingObservations](#getv4layersscoutingobservations) - Retrieve a list of scouting observations
* [GetV4LayersScoutingObservationsScoutingObservationID](#getv4layersscoutingobservationsscoutingobservationid) - Retrieve individual scouting observation
* [GetV4LayersScoutingObservationsScoutingObservationIDAttachments](#getv4layersscoutingobservationsscoutingobservationidattachments) - Retrieve attachments associated with a given scouting observation.
* [GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContents](#getv4layersscoutingobservationsscoutingobservationidattachmentsattachmentidcontents) - Retrieve the binary contents of a scouting observation’s attachment.

## GetV4LayersAsApplied

Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersAsApplied(ctx, operations.GetV4LayersAsAppliedRequest{
        Accept: "quibusdam",
        XLimit: sdk.Int(149448),
        XNextToken: sdk.String("saepe"),
        OccurredAfter: types.MustTimeFromString("2022-11-20T20:56:20.791Z"),
        OccurredBefore: types.MustTimeFromString("2022-06-29T11:09:23.468Z"),
        ResourceOwnerID: sdk.String("921cddc6-9260-41fb-976b-0d5f0d30c5fb"),
        UpdatedAfter: types.MustTimeFromString("2022-08-28T17:02:52.151Z"),
    }, operations.GetV4LayersAsAppliedSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationActivities != nil {
        // handle response
    }
}
```

## GetV4LayersAsAppliedActivityIDContents

Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersAsAppliedActivityIDContents(ctx, operations.GetV4LayersAsAppliedActivityIDContentsRequest{
        Accept: "quis",
        Range: "totam",
        ActivityID: "7053202c-73d5-4fe9-b90c-28909b3fe49a",
    }, operations.GetV4LayersAsAppliedActivityIDContentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV4LayersAsHarvested

Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersAsHarvested(ctx, operations.GetV4LayersAsHarvestedRequest{
        Accept: "deleniti",
        XLimit: sdk.Int(864282),
        XNextToken: sdk.String("provident"),
        OccurredAfter: types.MustTimeFromString("2020-10-23T12:23:35.067Z"),
        OccurredBefore: types.MustTimeFromString("2022-01-24T10:05:07.174Z"),
        ResourceOwnerID: sdk.String("8633323f-9b77-4f3a-8100-674ebf69280d"),
        UpdatedAfter: types.MustTimeFromString("2022-04-04T12:00:33.616Z"),
    }, operations.GetV4LayersAsHarvestedSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HarvestActivities != nil {
        // handle response
    }
}
```

## GetV4LayersAsHarvestedActivityIDContents

Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersAsHarvestedActivityIDContents(ctx, operations.GetV4LayersAsHarvestedActivityIDContentsRequest{
        Accept: "dolorum",
        Range: "iusto",
        ActivityID: "7a89ebf7-37ae-4420-bce5-e6a95d8a0d44",
    }, operations.GetV4LayersAsHarvestedActivityIDContentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV4LayersAsPlanted

Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersAsPlanted(ctx, operations.GetV4LayersAsPlantedRequest{
        Accept: "vel",
        XLimit: sdk.Int(798047),
        XNextToken: sdk.String("officiis"),
        OccurredAfter: types.MustTimeFromString("2022-04-27T20:15:21.190Z"),
        OccurredBefore: types.MustTimeFromString("2021-08-19T12:54:33.953Z"),
        ResourceOwnerID: sdk.String("a73cf3be-453f-4870-b326-b5a73429cdb1"),
        UpdatedAfter: types.MustTimeFromString("2021-12-19T07:31:04.219Z"),
    }, operations.GetV4LayersAsPlantedSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlantingActivities != nil {
        // handle response
    }
}
```

## GetV4LayersAsPlantedActivityIDContents

Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersAsPlantedActivityIDContents(ctx, operations.GetV4LayersAsPlantedActivityIDContentsRequest{
        Accept: "incidunt",
        Range: "aspernatur",
        ActivityID: "2bb679d2-3227-415b-b0cb-b1e31b8b90f3",
    }, operations.GetV4LayersAsPlantedActivityIDContentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV4LayersScoutingObservations

Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersScoutingObservations(ctx, operations.GetV4LayersScoutingObservationsRequest{
        XLimit: sdk.Int(292147),
        XNextToken: sdk.String("labore"),
        OccurredAfter: types.MustTimeFromString("2022-04-28T19:10:24.037Z"),
        OccurredBefore: types.MustTimeFromString("2022-12-08T23:47:03.469Z"),
    }, operations.GetV4LayersScoutingObservationsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoutingObservations != nil {
        // handle response
    }
}
```

## GetV4LayersScoutingObservationsScoutingObservationID

Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersScoutingObservationsScoutingObservationID(ctx, operations.GetV4LayersScoutingObservationsScoutingObservationIDRequest{
        ScoutingObservationID: "08e0adcf-4b92-4187-9fce-953f73ef7fbc",
    }, operations.GetV4LayersScoutingObservationsScoutingObservationIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoutingObservation != nil {
        // handle response
    }
}
```

## GetV4LayersScoutingObservationsScoutingObservationIDAttachments

Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersScoutingObservationsScoutingObservationIDAttachments(ctx, operations.GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsRequest{
        XLimit: sdk.Int(486160),
        XNextToken: sdk.String("similique"),
        ScoutingObservationID: "bd74dd39-c0f5-4d2c-bf7c-70a45626d436",
    }, operations.GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoutingObservationAttachments != nil {
        // handle response
    }
}
```

## GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContents

Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Layers.GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContents(ctx, operations.GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsRequest{
        Accept: "laudantium",
        Range: "dicta",
        AttachmentID: "3f16d9f5-fce6-4c55-a146-c3e250fb008c",
        ScoutingObservationID: "42e141aa-c366-4c8d-96b1-442907474778",
    }, operations.GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
