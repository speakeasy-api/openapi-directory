# score

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

* [addScoreCollaborator](#addscorecollaborator) - Add a new collaborator
* [addScoreTrack](#addscoretrack) - Add a new video or audio track to the score
* [createScore](#createscore) - Create a new score
* [createScoreRevision](#createscorerevision) - Create a new revision
* [deleteScore](#deletescore) - Delete a score
* [deleteScoreComment](#deletescorecomment) - Delete a comment
* [deleteScoreTrack](#deletescoretrack) - Remove an audio or video track linked to the score
* [editScore](#editscore) - Edit a score's metadata
* [forkScore](#forkscore) - Fork a score
* [gerUserLikes](#geruserlikes) - List liked scores
* [getGroupScores](#getgroupscores) - List group's scores
* [getScore](#getscore) - Get a score's metadata
* [getScoreCollaborator](#getscorecollaborator) - Get a collaborator
* [getScoreCollaborators](#getscorecollaborators) - List the collaborators
* [getScoreComments](#getscorecomments) - List comments
* [getScoreRevision](#getscorerevision) - Get a score revision
* [getScoreRevisionData](#getscorerevisiondata) - Get a score revision data
* [getScoreRevisions](#getscorerevisions) - List the revisions
* [getScoreSubmissions](#getscoresubmissions) - List submissions related to the score
* [getScoreTrack](#getscoretrack) - Retrieve the details of an audio or video track linked to a score
* [getUserScores](#getuserscores) - List user's scores
* [listScoreTracks](#listscoretracks) - List the audio or video tracks linked to a score
* [markScoreCommentResolved](#markscorecommentresolved) - Mark the comment as resolved
* [markScoreCommentUnresolved](#markscorecommentunresolved) - Mark the comment as unresolved
* [postScoreComment](#postscorecomment) - Post a new comment
* [removeScoreCollaborator](#removescorecollaborator) - Delete a collaborator
* [untrashScore](#untrashscore) - Untrash a score
* [updateScoreComment](#updatescorecomment) - Update an existing comment
* [updateScoreTrack](#updatescoretrack) - Update an audio or video track linked to a score

## addScoreCollaborator

Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
- To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
- To invite an external user to the resource, specify its email in the `userEmail` property.
- To add a Flat group to the resource, specify its unique identifier in the `group` property.
- To update an existing collaborator, process the same request with different rights.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddScoreCollaboratorRequest;
import org.openapis.openapi.models.operations.AddScoreCollaboratorResponse;
import org.openapis.openapi.models.operations.AddScoreCollaboratorSecurity;
import org.openapis.openapi.models.shared.ResourceCollaboratorCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddScoreCollaboratorRequest req = new AddScoreCollaboratorRequest(                new ResourceCollaboratorCreation() {{
                                aclAdmin = false;
                                aclRead = false;
                                aclWrite = false;
                                group = "quo";
                                user = "illum";
                                userEmail = "pariatur";
                                userToken = "maxime";
                            }};, "ea");            

            AddScoreCollaboratorResponse res = sdk.score.addScoreCollaborator(req, new AddScoreCollaboratorSecurity("excepturi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resourceCollaborator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addScoreTrack

Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
This API method support medias hosted on SoundCloud, YouTube and Vimeo.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddScoreTrackRequest;
import org.openapis.openapi.models.operations.AddScoreTrackResponse;
import org.openapis.openapi.models.operations.AddScoreTrackSecurity;
import org.openapis.openapi.models.shared.ScoreTrackCreation;
import org.openapis.openapi.models.shared.ScoreTrackPoint;
import org.openapis.openapi.models.shared.ScoreTrackPointTypeEnum;
import org.openapis.openapi.models.shared.ScoreTrackStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddScoreTrackRequest req = new AddScoreTrackRequest(                new ScoreTrackCreation() {{
                                default_ = false;
                                state = ScoreTrackStateEnum.DRAFT;
                                synchronizationPoints = new org.openapis.openapi.models.shared.ScoreTrackPoint[]{{
                                    add(new ScoreTrackPoint(2239.24, ScoreTrackPointTypeEnum.END) {{
                                        measureUuid = "01fb576b-0d5f-40d3-8c5f-bb2587053202";
                                        time = 7936.98;
                                        type = ScoreTrackPointTypeEnum.MEASURE;
                                    }}),
                                    add(new ScoreTrackPoint(2187.49, ScoreTrackPointTypeEnum.END) {{
                                        measureUuid = "5fe9b90c-2890-49b3-be49-a8d9cbf48633";
                                        time = 2224.43;
                                        type = ScoreTrackPointTypeEnum.MEASURE;
                                    }}),
                                }};
                                title = "Ms.";
                                url = "cum";
                            }};, "voluptate");            

            AddScoreTrackResponse res = sdk.score.addScoreTrack(req, new AddScoreTrackSecurity("dignissimos") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreTrack != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScore

Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.

This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).

The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).

If no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.
If a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.
You can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScoreResponse;
import org.openapis.openapi.models.operations.CreateScoreSecurity;
import org.openapis.openapi.models.shared.ScoreCreation;
import org.openapis.openapi.models.shared.ScoreCreationDataEncodingEnum;
import org.openapis.openapi.models.shared.ScorePrivacyEnum;
import org.openapis.openapi.models.shared.ScoreSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScoreCreation req = new ScoreCreation(ScorePrivacyEnum.PRIVATE_LINK) {{
                collection = "amet";
                data = "<score-partwise version="3.0"></score-partwise>";
                dataEncoding = ScoreCreationDataEncodingEnum.BASE64;
                filename = "dolorum";
                googleDriveFolder = "numquam";
                source = new ScoreSource() {{
                    googleDrive = "veritatis";
                }};;
                title = "Mr.";
            }};            

            CreateScoreResponse res = sdk.score.createScore(req, new CreateScoreSecurity("ipsa") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScoreRevision

Update a score by uploading a new revision for this one.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScoreRevisionRequest;
import org.openapis.openapi.models.operations.CreateScoreRevisionResponse;
import org.openapis.openapi.models.operations.CreateScoreRevisionSecurity;
import org.openapis.openapi.models.shared.ScoreRevisionCreation;
import org.openapis.openapi.models.shared.ScoreRevisionCreationDataEncodingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateScoreRevisionRequest req = new CreateScoreRevisionRequest(                new ScoreRevisionCreation("<score-partwise version="3.0"></score-partwise>") {{
                                autosave = false;
                                dataEncoding = ScoreRevisionCreationDataEncodingEnum.BASE64;
                                description = "iure";
                            }};, "odio");            

            CreateScoreRevisionResponse res = sdk.score.createScoreRevision(req, new CreateScoreRevisionSecurity("quaerat") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreRevision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScore

This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.

When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.

When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScoreRequest;
import org.openapis.openapi.models.operations.DeleteScoreResponse;
import org.openapis.openapi.models.operations.DeleteScoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScoreRequest req = new DeleteScoreRequest("accusamus") {{
                now = false;
            }};            

            DeleteScoreResponse res = sdk.score.deleteScore(req, new DeleteScoreSecurity("quidem") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScoreComment

Delete a comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScoreCommentRequest;
import org.openapis.openapi.models.operations.DeleteScoreCommentResponse;
import org.openapis.openapi.models.operations.DeleteScoreCommentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScoreCommentRequest req = new DeleteScoreCommentRequest("voluptatibus", "voluptas") {{
                sharingKey = "natus";
            }};            

            DeleteScoreCommentResponse res = sdk.score.deleteScoreComment(req, new DeleteScoreCommentSecurity("eos") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScoreTrack

Remove an audio or video track linked to the score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScoreTrackRequest;
import org.openapis.openapi.models.operations.DeleteScoreTrackResponse;
import org.openapis.openapi.models.operations.DeleteScoreTrackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScoreTrackRequest req = new DeleteScoreTrackRequest("atque", "sit");            

            DeleteScoreTrackResponse res = sdk.score.deleteScoreTrack(req, new DeleteScoreTrackSecurity("fugiat") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## editScore

This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).

When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditScoreRequest;
import org.openapis.openapi.models.operations.EditScoreResponse;
import org.openapis.openapi.models.operations.EditScoreSecurity;
import org.openapis.openapi.models.shared.ScoreCreationTypeEnum;
import org.openapis.openapi.models.shared.ScoreLicenseEnum;
import org.openapis.openapi.models.shared.ScoreModification;
import org.openapis.openapi.models.shared.ScorePrivacyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EditScoreRequest req = new EditScoreRequest("ab") {{
                scoreModification = new ScoreModification() {{
                    arranger = "soluta";
                    composer = "dolorum";
                    creationType = ScoreCreationTypeEnum.ARRANGEMENT;
                    description = "voluptate";
                    license = ScoreLicenseEnum.CC_BY_NC;
                    licenseText = "deleniti";
                    lyricist = "omnis";
                    privacy = ScorePrivacyEnum.PRIVATE_LINK;
                    sharingKey = "distinctio";
                    subtitle = "asperiores";
                    tags = new String[]{{
                        add("ipsum"),
                        add("voluptate"),
                    }};
                    title = "Miss";
                }};;
            }};            

            EditScoreResponse res = sdk.score.editScore(req, new EditScoreSecurity("saepe") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forkScore

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForkScoreRequest;
import org.openapis.openapi.models.operations.ForkScoreResponse;
import org.openapis.openapi.models.operations.ForkScoreSecurity;
import org.openapis.openapi.models.shared.ScoreFork;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForkScoreRequest req = new ForkScoreRequest(                new ScoreFork() {{
                                collection = "eius";
                            }};, "aspernatur") {{
                sharingKey = "perferendis";
            }};            

            ForkScoreResponse res = sdk.score.forkScore(req, new ForkScoreSecurity("amet") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gerUserLikes

List liked scores

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GerUserLikesRequest;
import org.openapis.openapi.models.operations.GerUserLikesResponse;
import org.openapis.openapi.models.operations.GerUserLikesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GerUserLikesRequest req = new GerUserLikesRequest("optio") {{
                ids = false;
            }};            

            GerUserLikesResponse res = sdk.score.gerUserLikes(req, new GerUserLikesSecurity("accusamus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupScores

Get the list of scores shared with a group.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupScoresRequest;
import org.openapis.openapi.models.operations.GetGroupScoresResponse;
import org.openapis.openapi.models.operations.GetGroupScoresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupScoresRequest req = new GetGroupScoresRequest("ad") {{
                parent = "saepe";
            }};            

            GetGroupScoresResponse res = sdk.score.getGroupScores(req, new GetGroupScoresSecurity("suscipit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScore

Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreRequest;
import org.openapis.openapi.models.operations.GetScoreResponse;
import org.openapis.openapi.models.operations.GetScoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreRequest req = new GetScoreRequest("deserunt") {{
                sharingKey = "provident";
            }};            

            GetScoreResponse res = sdk.score.getScore(req, new GetScoreSecurity("minima") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreCollaborator

Get the information about a collaborator (User or Group).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreCollaboratorRequest;
import org.openapis.openapi.models.operations.GetScoreCollaboratorResponse;
import org.openapis.openapi.models.operations.GetScoreCollaboratorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreCollaboratorRequest req = new GetScoreCollaboratorRequest("repellendus", "totam") {{
                sharingKey = "similique";
            }};            

            GetScoreCollaboratorResponse res = sdk.score.getScoreCollaborator(req, new GetScoreCollaboratorSecurity("alias") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resourceCollaborator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreCollaborators

This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreCollaboratorsRequest;
import org.openapis.openapi.models.operations.GetScoreCollaboratorsResponse;
import org.openapis.openapi.models.operations.GetScoreCollaboratorsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreCollaboratorsRequest req = new GetScoreCollaboratorsRequest("at") {{
                sharingKey = "quaerat";
            }};            

            GetScoreCollaboratorsResponse res = sdk.score.getScoreCollaborators(req, new GetScoreCollaboratorsSecurity("tempora") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resourceCollaborators != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreComments

This method lists the different comments added on a music score (documents and inline) sorted by their post dates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreCommentsDirectionEnum;
import org.openapis.openapi.models.operations.GetScoreCommentsRequest;
import org.openapis.openapi.models.operations.GetScoreCommentsResponse;
import org.openapis.openapi.models.operations.GetScoreCommentsSecurity;
import org.openapis.openapi.models.operations.GetScoreCommentsSortEnum;
import org.openapis.openapi.models.operations.GetScoreCommentsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreCommentsRequest req = new GetScoreCommentsRequest("vel") {{
                direction = GetScoreCommentsDirectionEnum.DESC;
                sharingKey = "officiis";
                sort = GetScoreCommentsSortEnum.DATE;
                type = GetScoreCommentsTypeEnum.DOCUMENT;
            }};            

            GetScoreCommentsResponse res = sdk.score.getScoreComments(req, new GetScoreCommentsSecurity("dolorum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreRevision

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreRevisionRequest;
import org.openapis.openapi.models.operations.GetScoreRevisionResponse;
import org.openapis.openapi.models.operations.GetScoreRevisionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreRevisionRequest req = new GetScoreRevisionRequest("a", "esse") {{
                sharingKey = "harum";
            }};            

            GetScoreRevisionResponse res = sdk.score.getScoreRevision(req, new GetScoreRevisionSecurity("iusto") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreRevision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreRevisionData

Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreRevisionDataFormatEnum;
import org.openapis.openapi.models.operations.GetScoreRevisionDataRequest;
import org.openapis.openapi.models.operations.GetScoreRevisionDataResponse;
import org.openapis.openapi.models.operations.GetScoreRevisionDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreRevisionDataRequest req = new GetScoreRevisionDataRequest(GetScoreRevisionDataFormatEnum.MXL, "quisquam", "tenetur") {{
                onlyCached = false;
                parts = "amet";
                sharingKey = "tempore";
                url = false;
            }};            

            GetScoreRevisionDataResponse res = sdk.score.getScoreRevisionData(req, new GetScoreRevisionDataSecurity("accusamus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getScoreRevisionData200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreRevisions

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreRevisionsRequest;
import org.openapis.openapi.models.operations.GetScoreRevisionsResponse;
import org.openapis.openapi.models.operations.GetScoreRevisionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreRevisionsRequest req = new GetScoreRevisionsRequest("numquam") {{
                sharingKey = "enim";
            }};            

            GetScoreRevisionsResponse res = sdk.score.getScoreRevisions(req, new GetScoreRevisionsSecurity("dolorem") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreRevisions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreSubmissions

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreSubmissionsRequest;
import org.openapis.openapi.models.operations.GetScoreSubmissionsResponse;
import org.openapis.openapi.models.operations.GetScoreSubmissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreSubmissionsRequest req = new GetScoreSubmissionsRequest("sapiente");            

            GetScoreSubmissionsResponse res = sdk.score.getScoreSubmissions(req, new GetScoreSubmissionsSecurity("totam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignmentSubmissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreTrack

Retrieve the details of an audio or video track linked to a score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreTrackRequest;
import org.openapis.openapi.models.operations.GetScoreTrackResponse;
import org.openapis.openapi.models.operations.GetScoreTrackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScoreTrackRequest req = new GetScoreTrackRequest("nihil", "sit") {{
                sharingKey = "expedita";
            }};            

            GetScoreTrackResponse res = sdk.score.getScoreTrack(req, new GetScoreTrackSecurity("neque") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreTrack != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserScores

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserScoresRequest;
import org.openapis.openapi.models.operations.GetUserScoresResponse;
import org.openapis.openapi.models.operations.GetUserScoresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserScoresRequest req = new GetUserScoresRequest("sed") {{
                parent = "vel";
            }};            

            GetUserScoresResponse res = sdk.score.getUserScores(req, new GetUserScoresSecurity("libero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScoreTracks

List the audio or video tracks linked to a score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScoreTracksRequest;
import org.openapis.openapi.models.operations.ListScoreTracksResponse;
import org.openapis.openapi.models.operations.ListScoreTracksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListScoreTracksRequest req = new ListScoreTracksRequest("voluptas") {{
                assignment = "deserunt";
                listAutoTrack = false;
                sharingKey = "quam";
            }};            

            ListScoreTracksResponse res = sdk.score.listScoreTracks(req, new ListScoreTracksSecurity("ipsum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreTracks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## markScoreCommentResolved

Mark the comment as resolved

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarkScoreCommentResolvedRequest;
import org.openapis.openapi.models.operations.MarkScoreCommentResolvedResponse;
import org.openapis.openapi.models.operations.MarkScoreCommentResolvedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MarkScoreCommentResolvedRequest req = new MarkScoreCommentResolvedRequest("incidunt", "qui") {{
                sharingKey = "cupiditate";
            }};            

            MarkScoreCommentResolvedResponse res = sdk.score.markScoreCommentResolved(req, new MarkScoreCommentResolvedSecurity("maxime") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## markScoreCommentUnresolved

Mark the comment as unresolved

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarkScoreCommentUnresolvedRequest;
import org.openapis.openapi.models.operations.MarkScoreCommentUnresolvedResponse;
import org.openapis.openapi.models.operations.MarkScoreCommentUnresolvedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MarkScoreCommentUnresolvedRequest req = new MarkScoreCommentUnresolvedRequest("pariatur", "soluta") {{
                sharingKey = "dicta";
            }};            

            MarkScoreCommentUnresolvedResponse res = sdk.score.markScoreCommentUnresolved(req, new MarkScoreCommentUnresolvedSecurity("laborum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postScoreComment

Post a document or a contextualized comment on a document.

Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostScoreCommentRequest;
import org.openapis.openapi.models.operations.PostScoreCommentResponse;
import org.openapis.openapi.models.operations.PostScoreCommentSecurity;
import org.openapis.openapi.models.shared.ScoreCommentContext;
import org.openapis.openapi.models.shared.ScoreCommentCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostScoreCommentRequest req = new PostScoreCommentRequest(                new ScoreCommentCreation("totam") {{
                                context = new ScoreCommentContext(                new String[]{{
                                                    add("aspernatur"),
                                                    add("dolores"),
                                                }}, "distinctio", 7044.74, 3960.6, 4631.5, 5654.21) {{
                                    staffIdx = 8404.29;
                                    staffUuid = "qui";
                                }};;
                                mentions = new String[]{{
                                    add("fugit"),
                                }};
                                rawComment = "magni";
                                replyTo = "odio";
                                revision = "sunt";
                            }};, "ullam") {{
                sharingKey = "nam";
            }};            

            PostScoreCommentResponse res = sdk.score.postScoreComment(req, new PostScoreCommentSecurity("hic") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeScoreCollaborator

Remove the specified collaborator from the score


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveScoreCollaboratorRequest;
import org.openapis.openapi.models.operations.RemoveScoreCollaboratorResponse;
import org.openapis.openapi.models.operations.RemoveScoreCollaboratorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveScoreCollaboratorRequest req = new RemoveScoreCollaboratorRequest("voluptatem", "cumque");            

            RemoveScoreCollaboratorResponse res = sdk.score.removeScoreCollaborator(req, new RemoveScoreCollaboratorSecurity("soluta") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untrashScore

This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntrashScoreRequest;
import org.openapis.openapi.models.operations.UntrashScoreResponse;
import org.openapis.openapi.models.operations.UntrashScoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UntrashScoreRequest req = new UntrashScoreRequest("nobis");            

            UntrashScoreResponse res = sdk.score.untrashScore(req, new UntrashScoreSecurity("et") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScoreComment

Update an existing comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScoreCommentRequest;
import org.openapis.openapi.models.operations.UpdateScoreCommentResponse;
import org.openapis.openapi.models.operations.UpdateScoreCommentSecurity;
import org.openapis.openapi.models.shared.ScoreCommentContext;
import org.openapis.openapi.models.shared.ScoreCommentUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateScoreCommentRequest req = new UpdateScoreCommentRequest(                new ScoreCommentUpdate() {{
                                comment = "saepe";
                                context = new ScoreCommentContext(                new String[]{{
                                                    add("veritatis"),
                                                }}, "nobis", 5521.93, 7316.94, 5844.76, 456.14) {{
                                    staffIdx = 9619.37;
                                    staffUuid = "dolorem";
                                }};;
                                rawComment = "dolore";
                                revision = "labore";
                            }};, "adipisci", "dolorum") {{
                sharingKey = "architecto";
            }};            

            UpdateScoreCommentResponse res = sdk.score.updateScoreComment(req, new UpdateScoreCommentSecurity("quae") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScoreTrack

Update an audio or video track linked to a score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScoreTrackRequest;
import org.openapis.openapi.models.operations.UpdateScoreTrackResponse;
import org.openapis.openapi.models.operations.UpdateScoreTrackSecurity;
import org.openapis.openapi.models.shared.ScoreTrackPoint;
import org.openapis.openapi.models.shared.ScoreTrackPointTypeEnum;
import org.openapis.openapi.models.shared.ScoreTrackStateEnum;
import org.openapis.openapi.models.shared.ScoreTrackUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateScoreTrackRequest req = new UpdateScoreTrackRequest(                new ScoreTrackUpdate() {{
                                default_ = false;
                                state = ScoreTrackStateEnum.DRAFT;
                                synchronizationPoints = new org.openapis.openapi.models.shared.ScoreTrackPoint[]{{
                                    add(new ScoreTrackPoint(4981.4, ScoreTrackPointTypeEnum.MEASURE) {{
                                        measureUuid = "e0adcf4b-9218-479f-8e95-3f73ef7fbc7a";
                                        time = 7085.48;
                                        type = ScoreTrackPointTypeEnum.END;
                                    }}),
                                    add(new ScoreTrackPoint(8621.92, ScoreTrackPointTypeEnum.END) {{
                                        measureUuid = "dd39c0f5-d2cf-4f7c-b0a4-5626d436813f";
                                        time = 978.44;
                                        type = ScoreTrackPointTypeEnum.MEASURE;
                                    }}),
                                    add(new ScoreTrackPoint(8104.24, ScoreTrackPointTypeEnum.MEASURE) {{
                                        measureUuid = "f5fce6c5-5614-46c3-a250-fb008c42e141";
                                        time = 6774.12;
                                        type = ScoreTrackPointTypeEnum.END;
                                    }}),
                                }};
                                title = "Ms.";
                            }};, "autem", "nobis");            

            UpdateScoreTrackResponse res = sdk.score.updateScoreTrack(req, new UpdateScoreTrackSecurity("quas") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreTrack != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
