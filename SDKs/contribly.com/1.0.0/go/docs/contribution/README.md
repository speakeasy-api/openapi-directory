# Contribution

## Overview

Submit, moderate and retrieve user contributions

### Available Operations

* [DeleteContributionsID](#deletecontributionsid) - Delete this contribution
* [GetContributionRefinementTypes](#getcontributionrefinementtypes) - List valid contribution refinement types
* [GetContributionRefinements](#getcontributionrefinements) - List contribution refinement options
* [GetContributions](#getcontributions) - List contributions
* [GetContributionsID](#getcontributionsid) - Get a single contribution by id
* [GetContributionsIDLikes](#getcontributionsidlikes) - List users who have liked this contributions
* [GetExportsID](#getexportsid) - Get a single export job; poll to follow export progress.
* [PostContributions](#postcontributions) - Create a new contribution
* [PostContributionsIDFlag](#postcontributionsidflag) - Raise a flag against this contribution
* [PostContributionsIDLike](#postcontributionsidlike) - Allows a user to mark a contribution as liked
* [PostContributionsIDModerate](#postcontributionsidmoderate) - Perform a moderation action on this contribution
* [PostExport](#postexport) - Export contributions.
* [PostExportSummary](#postexportsummary) - Export contributions preflight summary.

## DeleteContributionsID

Delete this contribution

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
    res, err := s.Contribution.DeleteContributionsID(ctx, operations.DeleteContributionsIDRequest{
        ID: "73429cdb-1a84-422b-b679-d2322715bf0c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contribution != nil {
        // handle response
    }
}
```

## GetContributionRefinementTypes

List valid contribution refinement types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contribution.GetContributionRefinementTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContributionRefinementTypes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetContributionRefinements

Given a contribution list query determine the available filter options. Can be used to generate the UI to refinement a filter.

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
    res, err := s.Contribution.GetContributionRefinements(ctx, operations.GetContributionRefinementsRequest{
        Assignment: sdk.String("soluta"),
        Country: sdk.String("Saint Helena"),
        CreatedAfter: types.MustTimeFromString("2022-02-05T03:24:54.198Z"),
        CreatedBefore: types.MustTimeFromString("2022-12-01T13:13:09.182Z"),
        Geohash: sdk.String("nobis"),
        HasLocation: sdk.Bool(false),
        LatLong: sdk.String("quos"),
        MediaType: sdk.String("tempore"),
        OwnedBy: sdk.String("cupiditate"),
        Q: sdk.String("aperiam"),
        Radius: sdk.Float64(9619.37),
        RefinementSize: sdk.Float64(2091.57),
        Refinements: sdk.String("dolore"),
        URLWords: sdk.String("labore"),
        User: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContributionRefinements200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetContributions

Retrieve contributions.

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
    res, err := s.Contribution.GetContributions(ctx, operations.GetContributionsRequest{
        Assignment: sdk.String("dolorum"),
        Country: sdk.String("Bhutan"),
        CreatedAfter: types.MustTimeFromString("2022-12-26T00:04:34.165Z"),
        CreatedBefore: types.MustTimeFromString("2021-02-21T10:38:46.777Z"),
        CreatedDay: types.MustDateFromString("2022-05-01"),
        CreatedMonth: sdk.String("repellendus"),
        Format: sdk.String("porro"),
        Geohash: sdk.String("doloribus"),
        HasLocation: sdk.Bool(false),
        Ids: sdk.String("ut"),
        LatLong: sdk.String("facilis"),
        MediaType: sdk.String("cupiditate"),
        OwnedBy: sdk.String("qui"),
        Q: sdk.String("quae"),
        Radius: sdk.Float64(5123.93),
        URLWords: sdk.String("odio"),
        User: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contributions != nil {
        // handle response
    }
}
```

## GetContributionsID

Get a single contribution by id

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
    res, err := s.Contribution.GetContributionsID(ctx, operations.GetContributionsIDRequest{
        ID: "fce953f7-3ef7-4fbc-babd-74dd39c0f5d2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contribution != nil {
        // handle response
    }
}
```

## GetContributionsIDLikes

Returns a list of user ids of users who have liked this conribution

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
    res, err := s.Contribution.GetContributionsIDLikes(ctx, operations.GetContributionsIDLikesRequest{
        ID: "cff7c70a-4562-46d4-b681-3f16d9f5fce6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContributionsIDLikes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetExportsID

Get a single export job; poll to follow export progress.

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
    res, err := s.Contribution.GetExportsID(ctx, operations.GetExportsIDRequest{
        ID: "c556146c-3e25-40fb-808c-42e141aac366",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Export != nil {
        // handle response
    }
}
```

## PostContributions

Create a new contribution

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contribution.PostContributions(ctx, shared.Contribution{
        Assignment: &shared.Assignment{
            AllowsAnonymousContributions: sdk.Bool(false),
            CallToAction: sdk.String("nobis"),
            Cover: &shared.MediaUsage{
                Artifacts: []shared.Artifact{
                    shared.Artifact{
                        ContentLength: sdk.Float64(8296.03),
                        ContentType: sdk.String("nulla"),
                        Height: sdk.Float64(3790.34),
                        Label: sdk.String("libero"),
                        URL: sdk.String("quasi"),
                        Width: sdk.Float64(2703.28),
                    },
                    shared.Artifact{
                        ContentLength: sdk.Float64(2561.39),
                        ContentType: sdk.String("explicabo"),
                        Height: sdk.Float64(5919.35),
                        Label: sdk.String("ipsa"),
                        URL: sdk.String("molestiae"),
                        Width: sdk.Float64(3015.98),
                    },
                    shared.Artifact{
                        ContentLength: sdk.Float64(4879.35),
                        ContentType: sdk.String("eius"),
                        Height: sdk.Float64(4585.15),
                        Label: sdk.String("esse"),
                        URL: sdk.String("rem"),
                        Width: sdk.Float64(6832.82),
                    },
                },
                ID: sdk.String("7bd466d2-8c10-4ab3-8dca-4251904e523c"),
                Media: &shared.Media{
                    Duration: sdk.Float64(4598.56),
                    ID: sdk.String("e0bc7178-e479-46f2-a70c-688282aa4825"),
                    Place: &shared.Place{
                        Country: sdk.String("Hong Kong"),
                        Geohash: sdk.String("fugit"),
                        Google: sdk.String("sapiente"),
                        LatLong: &shared.LatLong{
                            Latitude: sdk.Float64(1598.7),
                            Longitude: sdk.Float64(1871.31),
                        },
                        Name: sdk.String("Kerry Mayert IV"),
                        Osm: &shared.OsmID{
                            OsmID: sdk.Float64(9105.45),
                            OsmType: sdk.String("accusamus"),
                        },
                    },
                    Type: sdk.String("veritatis"),
                },
            },
            Created: types.MustTimeFromString("2022-03-14T20:41:04.723Z"),
            Description: sdk.String("nam"),
            Embargo: types.MustTimeFromString("2021-10-21T01:36:51.257Z"),
            Ends: types.MustTimeFromString("2022-02-05T00:34:15.868Z"),
            Featured: sdk.Bool(false),
            ID: sdk.String("6b7b95bc-0ab3-4c20-84f3-789fd871f99d"),
            MediaRequired: sdk.Bool(false),
            Moderator: sdk.String("possimus"),
            Name: sdk.String("Laverne Zemlak Sr."),
            Open: sdk.Bool(false),
            ReceiptMessage: sdk.String("quasi"),
            Starts: types.MustTimeFromString("2021-09-25T11:11:22.943Z"),
            Tags: []shared.Tag{
                shared.Tag{
                    Colour: sdk.String("#0061a6"),
                    ID: "f1e674bd-b04f-4157-9608-2d68ea19f1d1",
                    Name: "Mrs. Cynthia Hansen",
                    TagSet: &shared.TagSet{
                        ID: "9d08086a-1840-4394-8260-71f93f5f0642",
                        Name: "Luke Schoen",
                    },
                    URLWords: sdk.String("asperiores"),
                },
                shared.Tag{
                    Colour: sdk.String("#0061a6"),
                    ID: "515cc413-aa63-4aae-8d67-864dbb675fd5",
                    Name: "Gilbert Bayer",
                    TagSet: &shared.TagSet{
                        ID: "75ed4f6f-bee4-41f3-b317-fe35b60eb1ea",
                        Name: "Kelly Hoeger",
                    },
                    URLWords: sdk.String("minima"),
                },
            },
            URLWords: sdk.String("nobis"),
            WebURL: sdk.String("dolorum"),
        },
        Attribution: sdk.String("adipisci"),
        Body: sdk.String("minus"),
        Created: types.MustTimeFromString("2022-07-01T01:32:29.196Z"),
        Headline: sdk.String("in"),
        ID: sdk.String("44ed53b8-8f3a-48d8-b5c0-b2f2fb7b194a"),
        MediaUsages: []shared.MediaUsage{
            shared.MediaUsage{
                Artifacts: []shared.Artifact{
                    shared.Artifact{
                        ContentLength: sdk.Float64(4174.86),
                        ContentType: sdk.String("quidem"),
                        Height: sdk.Float64(1312.89),
                        Label: sdk.String("voluptas"),
                        URL: sdk.String("unde"),
                        Width: sdk.Float64(1000.32),
                    },
                    shared.Artifact{
                        ContentLength: sdk.Float64(3828.08),
                        ContentType: sdk.String("sapiente"),
                        Height: sdk.Float64(8953.86),
                        Label: sdk.String("illo"),
                        URL: sdk.String("reiciendis"),
                        Width: sdk.Float64(193),
                    },
                },
                ID: sdk.String("8f4294e3-698f-4447-b603-e8b445e80ca5"),
                Media: &shared.Media{
                    Duration: sdk.Float64(3295.43),
                    ID: sdk.String("efd20e45-7e18-458b-aa89-fbe3a5aa8e48"),
                    Place: &shared.Place{
                        Country: sdk.String("Cameroon"),
                        Geohash: sdk.String("ut"),
                        Google: sdk.String("fugiat"),
                        LatLong: &shared.LatLong{
                            Latitude: sdk.Float64(302.35),
                            Longitude: sdk.Float64(6350.57),
                        },
                        Name: sdk.String("Miguel Adams"),
                        Osm: &shared.OsmID{
                            OsmID: sdk.Float64(245.27),
                            OsmType: sdk.String("voluptatum"),
                        },
                    },
                    Type: sdk.String("quas"),
                },
            },
        },
        ModerationHistory: []shared.ModerationHistoryItem{
            shared.ModerationHistoryItem{
                Action: &shared.ModerationAction{
                    ID: "51862065-e904-4f3b-9194-b8abf603a79f",
                    Label: "provident",
                    ResultingState: shared.ModerationState{
                        ID: "dfe0ab7d-a8a5-40ce-987f-86bc173d689e",
                        Label: "officiis",
                        Public: false,
                    },
                },
                Date: types.MustTimeFromString("2021-02-22T09:14:53.307Z"),
                Notes: sdk.String("minima"),
            },
            shared.ModerationHistoryItem{
                Action: &shared.ModerationAction{
                    ID: "26f8d986-e881-4ead-8f0e-1012563f94e2",
                    Label: "occaecati",
                    ResultingState: shared.ModerationState{
                        ID: "e973e922-a57a-415b-a3e0-60807e2b6e3a",
                        Label: "distinctio",
                        Public: false,
                    },
                },
                Date: types.MustTimeFromString("2021-12-15T04:55:40.282Z"),
                Notes: sdk.String("aliquam"),
            },
            shared.ModerationHistoryItem{
                Action: &shared.ModerationAction{
                    ID: "5f0597a6-0ff2-4a54-a31e-94764a3e865e",
                    Label: "esse",
                    ResultingState: shared.ModerationState{
                        ID: "956f9251-a5a9-4da6-a0ff-57bfaad4f9ef",
                        Label: "cumque",
                        Public: false,
                    },
                },
                Date: types.MustTimeFromString("2022-04-21T03:20:35.575Z"),
                Notes: sdk.String("tempora"),
            },
            shared.ModerationHistoryItem{
                Action: &shared.ModerationAction{
                    ID: "512c1032-648d-4c2f-a151-99ebfd0e9fe6",
                    Label: "porro",
                    ResultingState: shared.ModerationState{
                        ID: "632ca3ae-d011-4799-a312-fde04771778f",
                        Label: "reiciendis",
                        Public: false,
                    },
                },
                Date: types.MustTimeFromString("2022-11-25T12:21:47.459Z"),
                Notes: sdk.String("fugiat"),
            },
        },
        Place: &shared.Place{
            Country: sdk.String("Argentina"),
            Geohash: sdk.String("dicta"),
            Google: sdk.String("odio"),
            LatLong: &shared.LatLong{
                Latitude: sdk.Float64(2712.52),
                Longitude: sdk.Float64(4582.59),
            },
            Name: sdk.String("Miss Kim Jacobs II"),
            Osm: &shared.OsmID{
                OsmID: sdk.Float64(8567.56),
                OsmType: sdk.String("expedita"),
            },
        },
        URLWords: sdk.String("aliquid"),
        Via: &shared.Via{
            Authority: &shared.Authority{
                Client: &shared.Client{
                    ID: sdk.String("a660659a-1ade-4aab-9851-d6c645b08b61"),
                    Name: sdk.String("Arturo Bogan"),
                },
                ID: sdk.String("a0fe1ade-008e-46f8-85f3-50d8cdb5a341"),
                User: &shared.User{
                    Bio: sdk.String("deleniti"),
                    DisplayName: sdk.String("veritatis"),
                    ID: sdk.String("43010421-813d-4520-8ece-7e253b668451"),
                    Registered: types.MustTimeFromString("2021-09-26T01:55:33.743Z"),
                    Username: sdk.String("Nettie.Howell2"),
                },
            },
            IPAddress: sdk.String("exercitationem"),
            IPAddressPlace: &shared.Place{
                Country: sdk.String("Tokelau"),
                Geohash: sdk.String("quasi"),
                Google: sdk.String("nisi"),
                LatLong: &shared.LatLong{
                    Latitude: sdk.Float64(8711.03),
                    Longitude: sdk.Float64(8783.73),
                },
                Name: sdk.String("Kerry Dickinson"),
                Osm: &shared.OsmID{
                    OsmID: sdk.Float64(7592.83),
                    OsmType: sdk.String("occaecati"),
                },
            },
        },
    }, operations.PostContributionsSecurity{
        Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Contribution != nil {
        // handle response
    }
}
```

## PostContributionsIDFlag

Allows end users to bring potential issues with publicly visible content to the attention of moderators.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contribution.PostContributionsIDFlag(ctx, operations.PostContributionsIDFlagRequest{
        Flag: shared.Flag{
            Date: types.MustTimeFromString("2022-07-18T14:19:46.326Z"),
            Email: sdk.String("Ludie36@yahoo.com"),
            ID: sdk.String("84273a84-18d1-4623-89fb-0929921aefb9"),
            Notes: sdk.String("delectus"),
            Type: sdk.String("minima"),
        },
        ID: "8c4d86e6-8e4b-4e05-a013-f59da757a59e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Flag != nil {
        // handle response
    }
}
```

## PostContributionsIDLike

Allows a user to mark a contribution as liked

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
    res, err := s.Contribution.PostContributionsIDLike(ctx, operations.PostContributionsIDLikeRequest{
        ID: "cfef66ef-1caa-4338-bc2b-eb477373c8d7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostContributionsIDLike200ApplicationJSONNumber != nil {
        // handle response
    }
}
```

## PostContributionsIDModerate

Allows the contribution to approved of rejected.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Contribution.PostContributionsIDModerate(ctx, operations.PostContributionsIDModerateRequest{
        ModerationHistoryItemSubmission: shared.ModerationHistoryItemSubmission{
            Action: &shared.ModerationAction{
                ID: "2f64d1db-1f2c-4431-8661-e96349e1cf9e",
                Label: "alias",
                ResultingState: shared.ModerationState{
                    ID: "6e3a4370-00ae-46b6-bc9b-8f759eac55a9",
                    Label: "esse",
                    Public: false,
                },
            },
            Notes: sdk.String("labore"),
        },
        ID: "1d311352-965b-4b8a-b202-611435e139db",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostContributionsIDModerate200ApplicationJSONString != nil {
        // handle response
    }
}
```

## PostExport

Begin an export job. Returns a export job which can be polled to follow the progress of an export.

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
    res, err := s.Contribution.PostExport(ctx, operations.PostExportRequest{
        Assignment: sdk.String("maxime"),
        Combined: sdk.Bool(false),
        Country: sdk.String("Cape Verde"),
        CreatedAfter: types.MustTimeFromString("2022-08-29T02:52:30.806Z"),
        CreatedBefore: types.MustTimeFromString("2021-07-19T02:34:53.264Z"),
        Format: sdk.String("dicta"),
        Geohash: sdk.String("id"),
        HasLocation: sdk.Bool(false),
        Individual: sdk.Bool(false),
        JSON: sdk.Bool(false),
        LatLong: sdk.String("libero"),
        MediaType: sdk.String("fugiat"),
        OwnedBy: sdk.String("officia"),
        Q: sdk.String("quos"),
        Radius: sdk.Float64(8119.39),
        Tagged: sdk.Bool(false),
        URLWords: sdk.String("sit"),
        User: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Export != nil {
        // handle response
    }
}
```

## PostExportSummary

Provide a preflight summary of an export request.

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
    res, err := s.Contribution.PostExportSummary(ctx, operations.PostExportSummaryRequest{
        Assignment: sdk.String("ipsa"),
        Country: sdk.String("Turkmenistan"),
        CreatedAfter: types.MustTimeFromString("2022-12-13T23:42:10.683Z"),
        CreatedBefore: types.MustTimeFromString("2022-06-01T04:35:31.707Z"),
        Geohash: sdk.String("eligendi"),
        HasLocation: sdk.Bool(false),
        LatLong: sdk.String("distinctio"),
        MediaType: sdk.String("voluptatem"),
        OwnedBy: sdk.String("autem"),
        Q: sdk.String("esse"),
        Radius: sdk.Float64(1729.51),
        URLWords: sdk.String("assumenda"),
        User: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSummary != nil {
        // handle response
    }
}
```
