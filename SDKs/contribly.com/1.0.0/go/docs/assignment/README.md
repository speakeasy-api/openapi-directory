# Assignment

## Overview

Create and list assignments

### Available Operations

* [DeleteAssignmentsID](#deleteassignmentsid) - Delete this assignment and all of it's contributions
* [GetAssignments](#getassignments) - List assignments
* [GetAssignmentsID](#getassignmentsid) - Get a single assigment by id
* [PostAssignments](#postassignments) - Create a new assignment

## DeleteAssignmentsID

Delete this assignment and all of it's contributions

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
    res, err := s.Assignment.DeleteAssignmentsID(ctx, operations.DeleteAssignmentsIDRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAssignments

List assignments

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
    res, err := s.Assignment.GetAssignments(ctx, operations.GetAssignmentsRequest{
        AlwaysOpen: sdk.Bool(false),
        Name: sdk.String("Jonathon Klocko"),
        Open: sdk.Bool(false),
        OwnedBy: sdk.String("aspernatur"),
        Page: sdk.Int64(18789),
        PageSize: sdk.Int64(324141),
        Q: sdk.String("natus"),
        Tag: sdk.String("sed"),
        URLWords: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignments != nil {
        // handle response
    }
}
```

## GetAssignmentsID

Get a single assigment by id

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
    res, err := s.Assignment.GetAssignmentsID(ctx, operations.GetAssignmentsIDRequest{
        ID: "396fea75-96eb-410f-aaa2-352c5955907a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```

## PostAssignments

Create a new assignment

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Assignment.PostAssignments(ctx, shared.AssignmentSubmission{
        AllowsAnonymousContributions: sdk.Bool(false),
        Cover: &shared.MediaUsage{
            Artifacts: []shared.Artifact{
                shared.Artifact{
                    ContentLength: sdk.Float64(9589.5),
                    ContentType: sdk.String("architecto"),
                    Height: sdk.Float64(6527.9),
                    Label: sdk.String("dolorem"),
                    URL: sdk.String("culpa"),
                    Width: sdk.Float64(1613.09),
                },
                shared.Artifact{
                    ContentLength: sdk.Float64(9953),
                    ContentType: sdk.String("mollitia"),
                    Height: sdk.Float64(5818.5),
                    Label: sdk.String("numquam"),
                    URL: sdk.String("commodi"),
                    Width: sdk.Float64(4663.11),
                },
                shared.Artifact{
                    ContentLength: sdk.Float64(4746.97),
                    ContentType: sdk.String("velit"),
                    Height: sdk.Float64(6235.1),
                    Label: sdk.String("quia"),
                    URL: sdk.String("quis"),
                    Width: sdk.Float64(1103.75),
                },
                shared.Artifact{
                    ContentLength: sdk.Float64(6747.52),
                    ContentType: sdk.String("animi"),
                    Height: sdk.Float64(3172.02),
                    Label: sdk.String("odit"),
                    URL: sdk.String("quo"),
                    Width: sdk.Float64(1965.82),
                },
            },
            ID: sdk.String("f5ad019d-a1ff-4e78-b097-b0074f15471b"),
            Media: &shared.Media{
                Duration: sdk.Float64(3179.83),
                ID: sdk.String("e6e13b99-d488-4e1e-91e4-50ad2abd4426"),
                Place: &shared.Place{
                    Country: sdk.String("Mongolia"),
                    Geohash: sdk.String("quos"),
                    Google: sdk.String("perferendis"),
                    LatLong: &shared.LatLong{
                        Latitude: sdk.Float64(1649.4),
                        Longitude: sdk.Float64(8289.4),
                    },
                    Name: sdk.String("Linda Corkery"),
                    Osm: &shared.OsmID{
                        OsmID: sdk.Float64(2700.08),
                        OsmType: sdk.String("facilis"),
                    },
                },
                Type: sdk.String("tempore"),
            },
        },
        Description: sdk.String("labore"),
        Embargo: types.MustTimeFromString("2021-09-13T13:11:22.288Z"),
        Ends: types.MustTimeFromString("2022-03-31T00:30:19.135Z"),
        Featured: sdk.Bool(false),
        ID: sdk.String("969e9a3e-fa77-4dfb-94cd-66ae395efb9b"),
        MediaRequired: sdk.Bool(false),
        Moderator: sdk.String("id"),
        Name: "Jaime Will",
        ReceiptMessage: sdk.String("nisi"),
        Starts: types.MustTimeFromString("2022-05-20T03:14:12.839Z"),
        Tags: []shared.Tag{
            shared.Tag{
                Colour: sdk.String("#0061a6"),
                ID: "7074ba44-69b6-4e21-8195-9890afa563e2",
                Name: "Joyce Kertzmann",
                TagSet: &shared.TagSet{
                    ID: "4c8b711e-5b7f-4d2e-9028-921cddc69260",
                    Name: "Ebony Predovic",
                },
                URLWords: sdk.String("autem"),
            },
            shared.Tag{
                Colour: sdk.String("#0061a6"),
                ID: "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe",
                Name: "Miss Cesar Metz",
                TagSet: &shared.TagSet{
                    ID: "8909b3fe-49a8-4d9c-bf48-633323f9b77f",
                    Name: "Mr. Lee Funk III",
                },
                URLWords: sdk.String("odio"),
            },
            shared.Tag{
                Colour: sdk.String("#0061a6"),
                ID: "4ebf6928-0d1b-4a77-a89e-bf737ae4203c",
                Name: "Tommy Turner",
                TagSet: &shared.TagSet{
                    ID: "95d8a0d4-46ce-42af-ba73-cf3be453f870",
                    Name: "Luis Cremin",
                },
                URLWords: sdk.String("voluptas"),
            },
        },
        URLWords: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignment != nil {
        // handle response
    }
}
```
