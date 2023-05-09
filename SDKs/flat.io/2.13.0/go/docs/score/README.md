# Score

## Overview

Sheet music is the main API object type available for all Flat account.
Here is a typical lifecycle for a music score document on Flat:
  - An end user can **create a music score** or **import a document** using our [web interface](https://flat.io) or a third-party website/app (e.g. Google Drive) using this API (see [`POST /v2/scores`](#operation/createScore). The creation and import of music scores can be done with this single API endpoint. This one currently supports the [MusicXML](http://www.musicxml.com/) (compressed or not) and [MIDI](https://www.midi.org/specifications).
  - **List scores**:
    - The **owned scores** can be listed using the [collections API methods](#tag/Collection), especially [`GET /collections/{collection}/scores`](#operation/listCollectionScores).
    - The scores from a public account can be listed with [`GET /users/{user}/scores`](#operation/getUserScores).
    - Scores shared with a specific group can be listed with [`GET /groups/{group}/scores`](#operation/getGroupScores).
  - The metadata of a single score can be retrieved with [`GET /scores/{score}`](#operation/getScore).
  - Scores on Flat have **one or multiple revisions**: creating a new score will create a first revision. These **revisions can be listed** using [`GET /scores/{score}/revisions`](#operation/getScoreRevisions) and a specific **revision data can be downloaded** with [`GET /scores/{score}/revisions/{revision}/{format}`](#operation/getScoreRevisionData). New revisions can be created using our [sheet music editor](https://flat.io) or using [`POST /scores/{score}/revisions`](#operation/createScoreRevision) (this endpoint has similar parameters than during the score creation). The last revision of a document may not directly reflect the really last version of a music score: recent modifications can be made offline or not yet consolidated into a new revision. In average, a new revision is created every 100 modifications made with our editor.
  - Scores can be **shared publicly** by changing the privacy option with [`POST /scores/{score}`](#operation/editScore), or **individually shared** using the different collaborators API endpoints (see [`POST /scores/{score}/collaborators`](#operation/addScoreCollaborator)).


### Available Operations

* [AddScoreCollaborator](#addscorecollaborator) - Add a new collaborator
* [AddScoreTrack](#addscoretrack) - Add a new video or audio track to the score
* [CreateScore](#createscore) - Create a new score
* [CreateScoreRevision](#createscorerevision) - Create a new revision
* [DeleteScore](#deletescore) - Delete a score
* [DeleteScoreComment](#deletescorecomment) - Delete a comment
* [DeleteScoreTrack](#deletescoretrack) - Remove an audio or video track linked to the score
* [EditScore](#editscore) - Edit a score's metadata
* [ForkScore](#forkscore) - Fork a score
* [GerUserLikes](#geruserlikes) - List liked scores
* [GetGroupScores](#getgroupscores) - List group's scores
* [GetScore](#getscore) - Get a score's metadata
* [GetScoreCollaborator](#getscorecollaborator) - Get a collaborator
* [GetScoreCollaborators](#getscorecollaborators) - List the collaborators
* [GetScoreComments](#getscorecomments) - List comments
* [GetScoreRevision](#getscorerevision) - Get a score revision
* [GetScoreRevisionData](#getscorerevisiondata) - Get a score revision data
* [GetScoreRevisions](#getscorerevisions) - List the revisions
* [GetScoreSubmissions](#getscoresubmissions) - List submissions related to the score
* [GetScoreTrack](#getscoretrack) - Retrieve the details of an audio or video track linked to a score
* [GetUserScores](#getuserscores) - List user's scores
* [ListScoreTracks](#listscoretracks) - List the audio or video tracks linked to a score
* [MarkScoreCommentResolved](#markscorecommentresolved) - Mark the comment as resolved
* [MarkScoreCommentUnresolved](#markscorecommentunresolved) - Mark the comment as unresolved
* [PostScoreComment](#postscorecomment) - Post a new comment
* [RemoveScoreCollaborator](#removescorecollaborator) - Delete a collaborator
* [UntrashScore](#untrashscore) - Untrash a score
* [UpdateScoreComment](#updatescorecomment) - Update an existing comment
* [UpdateScoreTrack](#updatescoretrack) - Update an audio or video track linked to a score

## AddScoreCollaborator

Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
- To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
- To invite an external user to the resource, specify its email in the `userEmail` property.
- To add a Flat group to the resource, specify its unique identifier in the `group` property.
- To update an existing collaborator, process the same request with different rights.


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
    res, err := s.Score.AddScoreCollaborator(ctx, operations.AddScoreCollaboratorRequest{
        ResourceCollaboratorCreation: shared.ResourceCollaboratorCreation{
            ACLAdmin: sdk.Bool(false),
            ACLRead: sdk.Bool(false),
            ACLWrite: sdk.Bool(false),
            Group: sdk.String("nihil"),
            User: sdk.String("magnam"),
            UserEmail: sdk.String("distinctio"),
            UserToken: sdk.String("id"),
        },
        Score: "labore",
    }, operations.AddScoreCollaboratorSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCollaborator != nil {
        // handle response
    }
}
```

## AddScoreTrack

Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
This API method support medias hosted on SoundCloud, YouTube and Vimeo.


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
    res, err := s.Score.AddScoreTrack(ctx, operations.AddScoreTrackRequest{
        ScoreTrackCreation: shared.ScoreTrackCreation{
            Default: sdk.Bool(false),
            State: shared.ScoreTrackStateEnumDraft.ToPointer(),
            SynchronizationPoints: []shared.ScoreTrackPoint{
                shared.ScoreTrackPoint{
                    MeasureUUID: sdk.String("9b6e2141-9598-490a-ba56-3e2516fe4c8b"),
                    Time: 4479.26,
                    Type: shared.ScoreTrackPointTypeEnumMeasure,
                },
                shared.ScoreTrackPoint{
                    MeasureUUID: sdk.String("1e5b7fd2-ed02-4892-9cdd-c692601fb576"),
                    Time: 7220.56,
                    Type: shared.ScoreTrackPointTypeEnumMeasure,
                },
            },
            Title: sdk.String("Dr."),
            URL: sdk.String("nemo"),
        },
        Score: "voluptatibus",
    }, operations.AddScoreTrackSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreTrack != nil {
        // handle response
    }
}
```

## CreateScore

Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.

This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).

The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).

If no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.
If a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.
You can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Score.CreateScore(ctx, shared.ScoreCreation{
        Collection: sdk.String("perferendis"),
        Data: sdk.String("<score-partwise version="3.0"></score-partwise>"),
        DataEncoding: shared.ScoreCreationDataEncodingEnumBase64.ToPointer(),
        Filename: sdk.String("fugiat"),
        GoogleDriveFolder: sdk.String("amet"),
        Privacy: shared.ScorePrivacyEnumPublic,
        Source: &shared.ScoreSource{
            GoogleDrive: sdk.String("cumque"),
        },
        Title: sdk.String("Mrs."),
    }, operations.CreateScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## CreateScoreRevision

Update a score by uploading a new revision for this one.


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
    res, err := s.Score.CreateScoreRevision(ctx, operations.CreateScoreRevisionRequest{
        ScoreRevisionCreation: shared.ScoreRevisionCreation{
            Autosave: sdk.Bool(false),
            Data: "<score-partwise version="3.0"></score-partwise>",
            DataEncoding: shared.ScoreRevisionCreationDataEncodingEnumBase64.ToPointer(),
            Description: sdk.String("hic"),
        },
        Score: "libero",
    }, operations.CreateScoreRevisionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreRevision != nil {
        // handle response
    }
}
```

## DeleteScore

This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.

When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.

When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).


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
    res, err := s.Score.DeleteScore(ctx, operations.DeleteScoreRequest{
        Now: sdk.Bool(false),
        Score: "nobis",
    }, operations.DeleteScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteScoreComment

Delete a comment

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
    res, err := s.Score.DeleteScoreComment(ctx, operations.DeleteScoreCommentRequest{
        Comment: "dolores",
        Score: "quis",
        SharingKey: sdk.String("totam"),
    }, operations.DeleteScoreCommentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteScoreTrack

Remove an audio or video track linked to the score

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
    res, err := s.Score.DeleteScoreTrack(ctx, operations.DeleteScoreTrackRequest{
        Score: "dignissimos",
        Track: "eaque",
    }, operations.DeleteScoreTrackSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EditScore

This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).

When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.


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
    res, err := s.Score.EditScore(ctx, operations.EditScoreRequest{
        ScoreModification: &shared.ScoreModification{
            Arranger: sdk.String("quis"),
            Composer: sdk.String("nesciunt"),
            CreationType: shared.ScoreCreationTypeEnumOriginal.ToPointer(),
            Description: sdk.String("perferendis"),
            License: shared.ScoreLicenseEnumCc0.ToPointer(),
            LicenseText: sdk.String("minus"),
            Lyricist: sdk.String("quam"),
            Privacy: shared.ScorePrivacyEnumPublic.ToPointer(),
            SharingKey: sdk.String("vero"),
            Subtitle: sdk.String("nostrum"),
            Tags: []string{
                "recusandae",
                "omnis",
                "facilis",
                "perspiciatis",
            },
            Title: sdk.String("Mr."),
        },
        Score: "porro",
    }, operations.EditScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## ForkScore

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


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
    res, err := s.Score.ForkScore(ctx, operations.ForkScoreRequest{
        ScoreFork: shared.ScoreFork{
            Collection: sdk.String("consequuntur"),
        },
        Score: "blanditiis",
        SharingKey: sdk.String("error"),
    }, operations.ForkScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## GerUserLikes

List liked scores

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
    res, err := s.Score.GerUserLikes(ctx, operations.GerUserLikesRequest{
        Ids: sdk.Bool(false),
        User: "eaque",
    }, operations.GerUserLikesSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## GetGroupScores

Get the list of scores shared with a group.


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
    res, err := s.Score.GetGroupScores(ctx, operations.GetGroupScoresRequest{
        Group: "occaecati",
        Parent: sdk.String("rerum"),
    }, operations.GetGroupScoresSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## GetScore

Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.


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
    res, err := s.Score.GetScore(ctx, operations.GetScoreRequest{
        Score: "adipisci",
        SharingKey: sdk.String("asperiores"),
    }, operations.GetScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## GetScoreCollaborator

Get the information about a collaborator (User or Group).


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
    res, err := s.Score.GetScoreCollaborator(ctx, operations.GetScoreCollaboratorRequest{
        Collaborator: "earum",
        Score: "modi",
        SharingKey: sdk.String("iste"),
    }, operations.GetScoreCollaboratorSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCollaborator != nil {
        // handle response
    }
}
```

## GetScoreCollaborators

This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).


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
    res, err := s.Score.GetScoreCollaborators(ctx, operations.GetScoreCollaboratorsRequest{
        Score: "dolorum",
        SharingKey: sdk.String("deleniti"),
    }, operations.GetScoreCollaboratorsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCollaborators != nil {
        // handle response
    }
}
```

## GetScoreComments

This method lists the different comments added on a music score (documents and inline) sorted by their post dates.

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
    res, err := s.Score.GetScoreComments(ctx, operations.GetScoreCommentsRequest{
        Direction: operations.GetScoreCommentsDirectionEnumDesc.ToPointer(),
        Score: "provident",
        SharingKey: sdk.String("nobis"),
        Sort: operations.GetScoreCommentsSortEnumDate.ToPointer(),
        Type: operations.GetScoreCommentsTypeEnumInline.ToPointer(),
    }, operations.GetScoreCommentsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreComments != nil {
        // handle response
    }
}
```

## GetScoreRevision

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.


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
    res, err := s.Score.GetScoreRevision(ctx, operations.GetScoreRevisionRequest{
        Revision: "delectus",
        Score: "quaerat",
        SharingKey: sdk.String("quos"),
    }, operations.GetScoreRevisionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreRevision != nil {
        // handle response
    }
}
```

## GetScoreRevisionData

Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.


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
    res, err := s.Score.GetScoreRevisionData(ctx, operations.GetScoreRevisionDataRequest{
        Format: operations.GetScoreRevisionDataFormatEnumMp3,
        OnlyCached: sdk.Bool(false),
        Parts: sdk.String("dolorem"),
        Revision: "dolorem",
        Score: "dolor",
        SharingKey: sdk.String("qui"),
        URL: sdk.Bool(false),
    }, operations.GetScoreRevisionDataSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScoreRevisionData200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetScoreRevisions

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.


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
    res, err := s.Score.GetScoreRevisions(ctx, operations.GetScoreRevisionsRequest{
        Score: "ipsum",
        SharingKey: sdk.String("hic"),
    }, operations.GetScoreRevisionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreRevisions != nil {
        // handle response
    }
}
```

## GetScoreSubmissions

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


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
    res, err := s.Score.GetScoreSubmissions(ctx, operations.GetScoreSubmissionsRequest{
        Score: "excepturi",
    }, operations.GetScoreSubmissionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentSubmissions != nil {
        // handle response
    }
}
```

## GetScoreTrack

Retrieve the details of an audio or video track linked to a score

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
    res, err := s.Score.GetScoreTrack(ctx, operations.GetScoreTrackRequest{
        Score: "cum",
        SharingKey: sdk.String("voluptate"),
        Track: "dignissimos",
    }, operations.GetScoreTrackSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreTrack != nil {
        // handle response
    }
}
```

## GetUserScores

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


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
    res, err := s.Score.GetUserScores(ctx, operations.GetUserScoresRequest{
        Parent: sdk.String("reiciendis"),
        User: "amet",
    }, operations.GetUserScoresSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## ListScoreTracks

List the audio or video tracks linked to a score

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
    res, err := s.Score.ListScoreTracks(ctx, operations.ListScoreTracksRequest{
        Assignment: sdk.String("dolorum"),
        ListAutoTrack: sdk.Bool(false),
        Score: "numquam",
        SharingKey: sdk.String("veritatis"),
    }, operations.ListScoreTracksSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreTracks != nil {
        // handle response
    }
}
```

## MarkScoreCommentResolved

Mark the comment as resolved

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
    res, err := s.Score.MarkScoreCommentResolved(ctx, operations.MarkScoreCommentResolvedRequest{
        Comment: "ipsa",
        Score: "ipsa",
        SharingKey: sdk.String("iure"),
    }, operations.MarkScoreCommentResolvedSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MarkScoreCommentUnresolved

Mark the comment as unresolved

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
    res, err := s.Score.MarkScoreCommentUnresolved(ctx, operations.MarkScoreCommentUnresolvedRequest{
        Comment: "odio",
        Score: "quaerat",
        SharingKey: sdk.String("accusamus"),
    }, operations.MarkScoreCommentUnresolvedSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostScoreComment

Post a document or a contextualized comment on a document.

Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.


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
    res, err := s.Score.PostScoreComment(ctx, operations.PostScoreCommentRequest{
        ScoreCommentCreation: shared.ScoreCommentCreation{
            Comment: "quidem",
            Context: &shared.ScoreCommentContext{
                MeasureUuids: []string{
                    "voluptas",
                    "natus",
                    "eos",
                    "atque",
                },
                PartUUID: "sit",
                StaffIdx: sdk.Float64(8546.14),
                StaffUUID: sdk.String("ab"),
                StartDpq: 7438.35,
                StartTimePos: 6793.93,
                StopDpq: 4785.96,
                StopTimePos: 4536.97,
            },
            Mentions: []string{
                "deleniti",
                "omnis",
                "necessitatibus",
            },
            RawComment: sdk.String("distinctio"),
            ReplyTo: sdk.String("asperiores"),
            Revision: sdk.String("nihil"),
        },
        Score: "ipsum",
        SharingKey: sdk.String("voluptate"),
    }, operations.PostScoreCommentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreComment != nil {
        // handle response
    }
}
```

## RemoveScoreCollaborator

Remove the specified collaborator from the score


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
    res, err := s.Score.RemoveScoreCollaborator(ctx, operations.RemoveScoreCollaboratorRequest{
        Collaborator: "id",
        Score: "saepe",
    }, operations.RemoveScoreCollaboratorSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntrashScore

This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.


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
    res, err := s.Score.UntrashScore(ctx, operations.UntrashScoreRequest{
        Score: "eius",
    }, operations.UntrashScoreSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateScoreComment

Update an existing comment

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
    res, err := s.Score.UpdateScoreComment(ctx, operations.UpdateScoreCommentRequest{
        ScoreCommentUpdate: shared.ScoreCommentUpdate{
            Comment: sdk.String("aspernatur"),
            Context: &shared.ScoreCommentContext{
                MeasureUuids: []string{
                    "amet",
                },
                PartUUID: "optio",
                StaffIdx: sdk.Float64(8815.86),
                StaffUUID: sdk.String("ad"),
                StartDpq: 9044.25,
                StartTimePos: 3834.64,
                StopDpq: 6457.85,
                StopTimePos: 5883.17,
            },
            RawComment: sdk.String("minima"),
            Revision: sdk.String("repellendus"),
        },
        Comment: "totam",
        Score: "similique",
        SharingKey: sdk.String("alias"),
    }, operations.UpdateScoreCommentSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreComment != nil {
        // handle response
    }
}
```

## UpdateScoreTrack

Update an audio or video track linked to a score

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
    res, err := s.Score.UpdateScoreTrack(ctx, operations.UpdateScoreTrackRequest{
        ScoreTrackUpdate: shared.ScoreTrackUpdate{
            Default: sdk.Bool(false),
            State: shared.ScoreTrackStateEnumDeleted.ToPointer(),
            SynchronizationPoints: []shared.ScoreTrackPoint{
                shared.ScoreTrackPoint{
                    MeasureUUID: sdk.String("46ce2af7-a73c-4f3b-a453-f870b326b5a7"),
                    Time: 2148.8,
                    Type: shared.ScoreTrackPointTypeEnumMeasure,
                },
                shared.ScoreTrackPoint{
                    MeasureUUID: sdk.String("29cdb1a8-422b-4b67-9d23-22715bf0cbb1"),
                    Time: 9037.2,
                    Type: shared.ScoreTrackPointTypeEnumMeasure,
                },
            },
            Title: sdk.String("Mr."),
        },
        Score: "nobis",
        Track: "quos",
    }, operations.UpdateScoreTrackSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreTrack != nil {
        // handle response
    }
}
```
