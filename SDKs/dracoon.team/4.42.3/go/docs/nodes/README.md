# Nodes

## Overview

File system objects (rooms, folders, files)

### Available Operations

* [AddFavorite](#addfavorite) - Mark a node (room, folder or file) as favorite
* [AddRoomGuestUsers](#addroomguestusers) - Add guest users to a room
* [CancelFileUpload](#cancelfileupload) - Cancel file upload
* [ChangePendingAssignments](#changependingassignments) - Handle user-room assignments per group
* [~~CompleteFileUpload~~](#completefileupload) - Complete file upload :warning: **Deprecated**
* [CompleteS3FileUpload](#completes3fileupload) - Complete S3 file upload
* [ConfigureRoom](#configureroom) - Configure room
* [CopyNodes](#copynodes) - Copy node(s)
* [CreateAndPreserveRoomRescueKeyPair](#createandpreserveroomrescuekeypair) - Create key pair and preserve copy of old private key
* [CreateFileUploadChannel](#createfileuploadchannel) - Create new file upload channel
* [CreateFolder](#createfolder) - Create new folder
* [CreateNodeComment](#createnodecomment) - Create node comment
* [CreateRoom](#createroom) - Create new room
* [DownloadZipArchive](#downloadziparchive) - Download files / folders as ZIP archive
* [EmptyDeletedNodes](#emptydeletednodes) - Empty recycle bin
* [EncryptRoom](#encryptroom) - Encrypt room
* [GenerateDownloadURL](#generatedownloadurl) - Generate download URL
* [GenerateDownloadURLForZipArchive](#generatedownloadurlforziparchive) - Generate download URL for ZIP download
* [GeneratePresignedUrlsFiles](#generatepresignedurlsfiles) - Generate presigned URLs for S3 file upload
* [HandleRoomWebhookAssignments](#handleroomwebhookassignments) - Assign or unassign webhooks to room
* [MoveNodes](#movenodes) - Move node(s)
* [RemoveDeletedNodes](#removedeletednodes) - Remove nodes from recycle bin
* [RemoveFavorite](#removefavorite) - Unmark a node (room, folder or file) as favorite
* [RemoveNode](#removenode) - Remove node
* [RemoveNodeComment](#removenodecomment) - Remove node comment
* [RemoveNodes](#removenodes) - Remove nodes
* [RemoveRoomRescueKeyPair](#removeroomrescuekeypair) - Remove rooms's rescue key pair
* [RequestDeletedNode](#requestdeletednode) - Request deleted node
* [RequestDeletedNodeVersions](#requestdeletednodeversions) - Request deleted versions of nodes
* [RequestDeletedNodesSummary](#requestdeletednodessummary) - Request list of deleted nodes
* [RequestFileVersionList](#requestfileversionlist) - Request list of file versions
* [RequestListOfWebhooksForRoom](#requestlistofwebhooksforroom) - Request list of webhooks that are assigned or can be assigned to this room
* [RequestMissingFileKeys](#requestmissingfilekeys) - Request files without user's file key
* [RequestNode](#requestnode) - Request node
* [RequestNodeComments](#requestnodecomments) - Request list of node comments
* [RequestNodeParents](#requestnodeparents) - Request list of parent nodes
* [RequestNodes](#requestnodes) - Request list of nodes
* [RequestPendingAssignments](#requestpendingassignments) - Request user-room assignments per group
* [RequestRoomActivitiesLogAsJSON](#requestroomactivitieslogasjson) - Request events of a room
* [RequestRoomGroups](#requestroomgroups) - Request room granted group(s) or / and group(s) that can be granted
* [RequestRoomPolicies](#requestroompolicies) - Request Room Policies
* [~~RequestRoomRescueKey~~](#requestroomrescuekey) - Request room rescue key :warning: **Deprecated**
* [RequestRoomRescueKeyPair](#requestroomrescuekeypair) - Request room rescue key
* [RequestRoomRescueKeyPairs](#requestroomrescuekeypairs) - Request all room rescue key pairs
* [RequestRoomS3Tags](#requestrooms3tags) - Request list of all assigned S3 tags to the room
* [RequestRoomUsers](#requestroomusers) - Request room granted user(s) or / and user(s) that can be granted
* [~~RequestSystemRescueKey~~](#requestsystemrescuekey) - Request system rescue key :warning: **Deprecated**
* [RequestUploadStatusFiles](#requestuploadstatusfiles) - Request status of S3 file upload
* [RequestUserFileKey](#requestuserfilekey) - Request user's file key
* [RestoreNodes](#restorenodes) - Restore deleted nodes
* [RevokeRoomGroups](#revokeroomgroups) - Revoke granted group(s) from room
* [RevokeRoomUsers](#revokeroomusers) - Revoke granted user(s) from room
* [SearchNodes](#searchnodes) - Search nodes
* [SetRoomPolicies](#setroompolicies) - Set room policies
* [SetRoomRescueKeyPair](#setroomrescuekeypair) - Set room's rescue key pair
* [SetRoomS3Tags](#setrooms3tags) - Set S3 tags for a room
* [SetUserFileKeys](#setuserfilekeys) - Set file keys for a list of users and files
* [UpdateFavorites](#updatefavorites) - Mark or unmark a list of nodes (room, folder or file) as favorite
* [UpdateFile](#updatefile) - Updates a file’s metadata
* [UpdateFiles](#updatefiles) - Updates a list of  file’s metadata
* [UpdateFolder](#updatefolder) - Updates folder’s metadata
* [UpdateNodeComment](#updatenodecomment) - Edit node comment
* [UpdateRoom](#updateroom) - Updates room’s metadata
* [UpdateRoomGroups](#updateroomgroups) - Add or change room granted group(s)
* [UpdateRoomUsers](#updateroomusers) - Add or change room granted user(s)
* [~~UploadFileAsMultipart~~](#uploadfileasmultipart) - Upload file :warning: **Deprecated**

## AddFavorite

### Description:  
Marks a node (room, folder or file) as favorite.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).

### Postcondition:
A node gets marked as favorite.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.AddFavorite(ctx, operations.AddFavoriteRequest{
        XSdsAuthToken: sdk.String("repudiandae"),
        XSdsDateFormat: operations.AddFavoriteXSdsDateFormatEnumOffset.ToPointer(),
        NodeID: 83112,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## AddRoomGuestUsers

### Description:
Add guest users to a room

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
<span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Guest User Policy</span> needs to be enabled.


### Postcondition:
New or existing Guest-Users now have guest-permissions for this room

### Further Information:
Batch function.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.AddRoomGuestUsers(ctx, operations.AddRoomGuestUsersRequest{
        RoomGuestUserAddRequest: shared.RoomGuestUserAddRequest{
            RoomGuestInvitations: []shared.RoomGuestUserInvitation{
                shared.RoomGuestUserInvitation{
                    Email: "Emily_Altenwerth13@gmail.com",
                    FirstName: "Luther",
                    LastName: "Rau",
                },
                shared.RoomGuestUserInvitation{
                    Email: "Edyth39@hotmail.com",
                    FirstName: "Kyler",
                    LastName: "Lueilwitz",
                },
                shared.RoomGuestUserInvitation{
                    Email: "Casimir.Simonis@gmail.com",
                    FirstName: "Caden",
                    LastName: "Pagac",
                },
                shared.RoomGuestUserInvitation{
                    Email: "Dominique.Prosacco96@yahoo.com",
                    FirstName: "Horacio",
                    LastName: "Franey",
                },
            },
        },
        XSdsAuthToken: sdk.String("eligendi"),
        RoomID: 576157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelFileUpload

### Description:
Cancel a (S3) file upload and destroy the upload channel.

### Precondition:
An upload channel has been created and user has to be the creator of the upload channel.

### Postcondition:
The upload channel is removed and all temporary uploaded data is purged.

### Further Information:
It is recommended to notify the API about cancelled uploads if possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CancelFileUpload(ctx, operations.CancelFileUploadRequest{
        XSdsAuthToken: sdk.String("aliquid"),
        UploadID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangePendingAssignments

### Description:  
Handles a list of user-room assignments by groups that have **NOT** been approved yet  
**WAITING** or **DENIED** assignments can be **ACCEPTED**.

### Precondition:
None.

### Postcondition:
User-room assignment is approved and the user gets access to the group.

### Further Information:
Room administrators should **SHOULD** handle pending assignments to provide access to rooms for other users.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.ChangePendingAssignments(ctx, operations.ChangePendingAssignmentsRequest{
        PendingAssignmentsRequest: shared.PendingAssignmentsRequest{
            Items: []shared.PendingAssignment{
                shared.PendingAssignment{
                    GroupID: 572252,
                    RoomID: 638921,
                    RoomName: "dolor",
                    State: shared.PendingAssignmentStateEnumWaiting,
                    UserID: 952749,
                },
                shared.PendingAssignment{
                    GroupID: 680056,
                    RoomID: 447125,
                    RoomName: "in",
                    State: shared.PendingAssignmentStateEnumWaiting,
                    UserID: 978571,
                },
                shared.PendingAssignment{
                    GroupID: 699479,
                    RoomID: 116202,
                    RoomName: "magnam",
                    State: shared.PendingAssignmentStateEnumWaiting,
                    UserID: 813798,
                },
                shared.PendingAssignment{
                    GroupID: 411820,
                    RoomID: 396506,
                    RoomName: "laborum",
                    State: shared.PendingAssignmentStateEnumWaiting,
                    UserID: 249796,
                },
            },
        },
        XSdsAuthToken: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~CompleteFileUpload~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>

### Use `uploads` API

### Description:
Finishes an upload and closes the corresponding upload channel.

### Precondition:
An upload channel has been created and data has been transmitted.

### Postcondition:
The upload is finished and the temporary file is moved to the productive environment.

### Further Information:
The provided file name might be changed in accordance with the resolution strategy:  
* **autorename**: changes the file name and adds a number to avoid conflicts.
* **overwrite**: deletes any old file with the same file name.
* **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.

Please ensure that all chunks have been transferred correctly before finishing the upload.  
Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CompleteFileUpload(ctx, operations.CompleteFileUploadRequest{
        CompleteUploadRequest: &shared.CompleteUploadRequest{
            FileKey: &shared.FileKey{
                Iv: "enim",
                Key: "accusamus",
                Tag: "delectus",
                Version: "quidem",
            },
            FileName: sdk.String("provident"),
            KeepShareLinks: sdk.Bool(false),
            ResolutionStrategy: shared.CompleteUploadRequestResolutionStrategyEnumFail.ToPointer(),
            UserFileKeyList: &shared.UserFileKeyList{
                Items: []shared.UserFileKey{
                    shared.UserFileKey{
                        FileKey: shared.FileKey{
                            Iv: "blanditiis",
                            Key: "deleniti",
                            Tag: "sapiente",
                            Version: "amet",
                        },
                        UserID: 643990,
                    },
                    shared.UserFileKey{
                        FileKey: shared.FileKey{
                            Iv: "nisi",
                            Key: "vel",
                            Tag: "natus",
                            Version: "omnis",
                        },
                        UserID: 474867,
                    },
                    shared.UserFileKey{
                        FileKey: shared.FileKey{
                            Iv: "perferendis",
                            Key: "nihil",
                            Tag: "magnam",
                            Version: "distinctio",
                        },
                        UserID: 660174,
                    },
                },
            },
        },
        XSdsAuthToken: sdk.String("labore"),
        XSdsDateFormat: operations.CompleteFileUploadXSdsDateFormatEnumLocal.ToPointer(),
        UploadID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## CompleteS3FileUpload

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Finishes a S3 file upload and closes the corresponding upload channel.

### Precondition:
An upload channel has been created, data has been transmitted and user has to be the creator of the upload channel

### Postcondition:
Upload channel is closed. S3 multipart upload request is completed.

### Further Information:
Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CompleteS3FileUpload(ctx, operations.CompleteS3FileUploadRequest{
        CompleteS3FileUploadRequest: shared.CompleteS3FileUploadRequest{
            FileKey: &shared.FileKey{
                Iv: "natus",
                Key: "nobis",
                Tag: "eum",
                Version: "vero",
            },
            FileName: sdk.String("aspernatur"),
            KeepShareLinks: sdk.Bool(false),
            Parts: []shared.S3FileUploadPart{
                shared.S3FileUploadPart{
                    PartEtag: "magnam",
                    PartNumber: 92373,
                },
            },
            ResolutionStrategy: shared.CompleteS3FileUploadRequestResolutionStrategyEnumOverwrite.ToPointer(),
        },
        XSdsAuthToken: sdk.String("ullam"),
        UploadID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureRoom

### Description:
Configure a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Room's configuration is changed.

### Further Information:
Provided (or default) classification is taken from room when file gets uploaded without any classification.  

To set `adminIds` or `adminGroupIds` the `inheritPermissions` value has to be `false`. Otherwise use:
* `PUT /nodes/rooms/{room_id}/groups`
* `PUT /nodes/rooms/{room_id}/users `  

APIs.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.ConfigureRoom(ctx, operations.ConfigureRoomRequest{
        ConfigRoomRequest: shared.ConfigRoomRequest{
            AdminGroupIds: []int64{
                574325,
                33625,
                653201,
            },
            AdminIds: []int64{
                652103,
                320997,
                431418,
                221262,
            },
            Classification: shared.ConfigRoomRequestClassificationEnumFour.ToPointer(),
            HasActivitiesLog: sdk.Bool(false),
            InheritPermissions: sdk.Bool(false),
            NewGroupMemberAcceptance: shared.ConfigRoomRequestNewGroupMemberAcceptanceEnumAutoallow.ToPointer(),
            RecycleBinRetentionPeriod: sdk.Int(367562),
            TakeOverPermissions: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("quasi"),
        XSdsDateFormat: operations.ConfigureRoomXSdsDateFormatEnumOffset.ToPointer(),
        RoomID: 984043,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## CopyNodes

### Description:
Copies nodes (folder, file) to another parent.

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.

### Postcondition:
Nodes are copied to target parent.

### Further Information:
Nodes **MUST** be in same source parent.  
**Rooms **CANNOT** be copied.**

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CopyNodes(ctx, operations.CopyNodesRequest{
        CopyNodesRequest: shared.CopyNodesRequest{
            Items: []shared.CopyNode{
                shared.CopyNode{
                    ID: 260341,
                    Name: sdk.String("Alfredo Prosacco Sr."),
                    TimestampCreation: types.MustTimeFromString("2021-12-11T05:14:57.773Z"),
                    TimestampModification: types.MustTimeFromString("2022-01-23T10:45:15.714Z"),
                },
                shared.CopyNode{
                    ID: 998848,
                    Name: sdk.String("Louis Turner Sr."),
                    TimestampCreation: types.MustTimeFromString("2021-10-08T15:23:46.576Z"),
                    TimestampModification: types.MustTimeFromString("2022-11-16T19:20:12.159Z"),
                },
                shared.CopyNode{
                    ID: 779051,
                    Name: sdk.String("Ervin Schoen"),
                    TimestampCreation: types.MustTimeFromString("2022-08-05T09:04:26.932Z"),
                    TimestampModification: types.MustTimeFromString("2022-12-06T18:05:48.866Z"),
                },
                shared.CopyNode{
                    ID: 982575,
                    Name: sdk.String("Clyde Kling"),
                    TimestampCreation: types.MustTimeFromString("2022-02-18T18:29:26.833Z"),
                    TimestampModification: types.MustTimeFromString("2022-01-09T22:25:53.570Z"),
                },
            },
            KeepShareLinks: sdk.Bool(false),
            NodeIds: []int64{
                855804,
            },
            ResolutionStrategy: shared.CopyNodesRequestResolutionStrategyEnumAutorename.ToPointer(),
        },
        XSdsAuthToken: sdk.String("aut"),
        XSdsDateFormat: operations.CopyNodesXSdsDateFormatEnumEpoch.ToPointer(),
        NodeID: 359978,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## CreateAndPreserveRoomRescueKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Create room rescue key pair and preserve copy of old private key.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Room rescue key pair is created.  
Copy of old private key is preserved.

### Further Information:
You can submit your old private key, encrypted with your current password.  
This allows migrating file keys encrypted with your old key pair to the new one.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CreateAndPreserveRoomRescueKeyPair(ctx, operations.CreateAndPreserveRoomRescueKeyPairRequest{
        CreateKeyPairRequest: shared.CreateKeyPairRequest{
            PreviousPrivateKey: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2020-10-23T15:50:52.666Z"),
                CreatedBy: sdk.Int64(749999),
                PrivateKey: "dolores",
                Version: "quis",
            },
            PrivateKeyContainer: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-01-08T15:06:08.615Z"),
                CreatedBy: sdk.Int64(54338),
                PrivateKey: "quis",
                Version: "nesciunt",
            },
            PublicKeyContainer: shared.PublicKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-12-25T05:44:55.720Z"),
                CreatedBy: sdk.Int64(170986),
                PublicKey: "minus",
                Version: "quam",
            },
        },
        XSdsAuthToken: sdk.String("dolor"),
        RoomID: 874573,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateFileUploadChannel

### Description:
This endpoint creates a new upload channel which is the first step in any file upload workflow.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).

### Postcondition:
A new upload channel for a file is created.  
Its ID and an upload token are returned.

### Further Information:
The upload ID is used for uploads with `X-Sds-Auth-Token` header, the upload token can be used for uploads without authentication header.

Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.

Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CreateFileUploadChannel(ctx, operations.CreateFileUploadChannelRequest{
        CreateFileUploadRequest: shared.CreateFileUploadRequest{
            Classification: shared.CreateFileUploadRequestClassificationEnumTwo.ToPointer(),
            DirectS3Upload: sdk.Bool(false),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2020-03-20T18:01:24.992Z"),
            },
            Name: "Miss Cesar Metz",
            Notes: sdk.String("blanditiis"),
            ParentID: 621479,
            Size: sdk.Int64(50370),
            TimestampCreation: types.MustTimeFromString("2021-08-08T15:48:05.748Z"),
            TimestampModification: types.MustTimeFromString("2022-01-03T18:36:27.259Z"),
        },
        XSdsAuthToken: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFileUploadResponse != nil {
        // handle response
    }
}
```

## CreateFolder

### Description:
Create a new folder.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in current room.

### Postcondition:
New folder is created.

### Further Information:
Folders **CANNOT** be created on top level (without parent element).  
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CreateFolder(ctx, operations.CreateFolderRequest{
        CreateFolderRequest: shared.CreateFolderRequest{
            Classification: shared.CreateFolderRequestClassificationEnumTwo.ToPointer(),
            Name: "Omar Leuschke",
            Notes: sdk.String("nobis"),
            ParentID: 730122,
            TimestampCreation: types.MustTimeFromString("2022-01-24T10:05:07.174Z"),
            TimestampModification: types.MustTimeFromString("2022-03-16T07:10:00.236Z"),
        },
        XSdsAuthToken: sdk.String("dolorem"),
        XSdsDateFormat: operations.CreateFolderXSdsDateFormatEnumLocal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## CreateNodeComment

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Create a comment for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.

### Postcondition:
Comment is created.

### Further Information:
Maximum allowed text length: **65535** characters.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CreateNodeComment(ctx, operations.CreateNodeCommentRequest{
        CreateNodeCommentRequest: shared.CreateNodeCommentRequest{
            Text: "dolor",
        },
        XSdsAuthToken: sdk.String("qui"),
        XSdsDateFormat: operations.CreateNodeCommentXSdsDateFormatEnumLocal.ToPointer(),
        NodeID: 944373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## CreateRoom

### Description:
Creates a new room at the provided parent node.  
Creation of top level rooms provided.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span> permissions in the parent room.

### Postcondition:
A new room is created.

### Further Information:  
Rooms may only have other rooms as parent.  
Rooms on top level do **NOT** have any parent.  
Rooms may have rooms as children on n hierarchy levels.  
If permission inheritance is disabled, there **MUST** be at least one admin user / group (with neither the group nor the user having an expiration date).

Notes are limited to **255** characters.

Provided (or default) classification is taken from room when file gets uploaded without any classification.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.CreateRoom(ctx, operations.CreateRoomRequest{
        CreateRoomRequest: shared.CreateRoomRequest{
            AdminGroupIds: []int64{
                739551,
                452109,
                490459,
            },
            AdminIds: []int64{
                227414,
                680545,
                254356,
                85295,
            },
            Classification: shared.CreateRoomRequestClassificationEnumOne.ToPointer(),
            HasActivitiesLog: sdk.Bool(false),
            HasRecycleBin: sdk.Bool(false),
            InheritPermissions: sdk.Bool(false),
            Name: "Vera Kuhlman",
            NewGroupMemberAcceptance: shared.CreateRoomRequestNewGroupMemberAcceptanceEnumPending.ToPointer(),
            Notes: sdk.String("voluptatibus"),
            ParentID: sdk.Int64(377752),
            Quota: sdk.Int64(617658),
            RecycleBinRetentionPeriod: sdk.Int(179603),
            TimestampCreation: types.MustTimeFromString("2022-12-13T23:37:42.244Z"),
            TimestampModification: types.MustTimeFromString("2022-10-19T08:40:45.996Z"),
        },
        XSdsAuthToken: sdk.String("soluta"),
        XSdsDateFormat: operations.CreateRoomXSdsDateFormatEnumEpoch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## DownloadZipArchive

### Description:  
Download multiple files in a ZIP archive.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.

### Postcondition:
Stream is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.DownloadZipArchive(ctx, operations.DownloadZipArchiveRequest{
        XSdsAuthToken: sdk.String("iusto"),
        ZipDownloadRequest: shared.ZipDownloadRequest{
            NodeIds: []int64{
                677082,
                536579,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EmptyDeletedNodes

### Description:  
Empty a recycle bin.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.

### Postcondition:
All files in the recycle bin are permanently removed.

### Further Information:
Actually removes the previously deleted files from the system.  
**This action is irreversible.**

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.EmptyDeletedNodes(ctx, operations.EmptyDeletedNodesRequest{
        XSdsAuthToken: sdk.String("omnis"),
        NodeID: 896672,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EncryptRoom

### Description:  
Activates the client-side encryption for a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Encryption of room is activated.

### Further Information:
Only empty rooms at the top level may be encrypted.  
This endpoint may also be used to disable encryption of an empty room.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.EncryptRoom(ctx, operations.EncryptRoomRequest{
        EncryptRoomRequest: shared.EncryptRoomRequest{
            DataRoomRescueKey: &shared.UserKeyPairContainer{
                PrivateKeyContainer: shared.PrivateKeyContainer{
                    CreatedAt: types.MustTimeFromString("2021-01-08T01:15:41.988Z"),
                    CreatedBy: sdk.Int64(469497),
                    PrivateKey: "ipsum",
                    Version: "voluptate",
                },
                PublicKeyContainer: shared.PublicKeyContainer{
                    CreatedAt: types.MustTimeFromString("2021-03-10T07:33:18.208Z"),
                    CreatedBy: sdk.Int64(263322),
                    PublicKey: "aspernatur",
                    Version: "perferendis",
                },
            },
            IsEncrypted: false,
            UseDataSpaceRescueKey: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("amet"),
        XSdsDateFormat: operations.EncryptRoomXSdsDateFormatEnumEpoch.ToPointer(),
        RoomID: 881586,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## GenerateDownloadURL

### Description:
Create a download URL to retrieve a file without `X-Sds-Auth-Token` Header.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
Download token is generated and returned.

### Further Information:
The token is necessary to access `downloads` ressources.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.GenerateDownloadURL(ctx, operations.GenerateDownloadURLRequest{
        XSdsAuthToken: sdk.String("ad"),
        FileID: 904425,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadTokenGenerateResponse != nil {
        // handle response
    }
}
```

## GenerateDownloadURLForZipArchive

### Description:  
Create a download URL to retrieve several files in one ZIP archive.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
Download URL is generated and returned.

### Further Information:
The token is necessary to access `downloads` resources.  
ZIP download is only available for files and folders.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.GenerateDownloadURLForZipArchive(ctx, operations.GenerateDownloadURLForZipArchiveRequest{
        XSdsAuthToken: sdk.String("suscipit"),
        ZipDownloadRequest: shared.ZipDownloadRequest{
            NodeIds: []int64{
                588317,
                324683,
                831049,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadTokenGenerateResponse != nil {
        // handle response
    }
}
```

## GeneratePresignedUrlsFiles

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Generate presigned URLs for S3 file upload.

### Precondition:
An upload channel has been created and user has to be the creator of the upload channel.

### Postcondition:
List of presigned URLs is returned.

### Further Information:
The size for each part must be >= 5 MB, except for the last part.  
The part number of the first part in S3 is 1 (not 0).  
Use HTTP method `PUT` for uploading bytes via presigned URL.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.GeneratePresignedUrlsFiles(ctx, operations.GeneratePresignedUrlsFilesRequest{
        GeneratePresignedUrlsRequest: shared.GeneratePresignedUrlsRequest{
            FirstPartNumber: 519711,
            LastPartNumber: 628982,
            Size: 55,
        },
        XSdsAuthToken: sdk.String("at"),
        UploadID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PresignedURLList != nil {
        // handle response
    }
}
```

## HandleRoomWebhookAssignments

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Handle room webhook assignments.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
List of webhooks is returned.

### Further Information:
None.

### Available event types:

<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
| **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
| **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
| **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
| **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
| **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
| **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
| **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
| **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
| **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
| **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
| **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.HandleRoomWebhookAssignments(ctx, operations.HandleRoomWebhookAssignmentsRequest{
        UpdateRoomWebhookRequest: shared.UpdateRoomWebhookRequest{
            Items: []shared.RoomWebhookAssignment{
                shared.RoomWebhookAssignment{
                    IsAssigned: false,
                    WebhookID: 425451,
                },
                shared.RoomWebhookAssignment{
                    IsAssigned: false,
                    WebhookID: 798047,
                },
            },
        },
        XSdsAuthToken: sdk.String("officiis"),
        XSdsDateFormat: operations.HandleRoomWebhookAssignmentsXSdsDateFormatEnumUtc.ToPointer(),
        RoomID: 679880,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomWebhookList != nil {
        // handle response
    }
}
```

## MoveNodes

### Description:  
Moves nodes (folder, file) to another parent.

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.

### Postcondition:
Nodes are moved to target parent.

### Further Information:
Nodes **MUST** be in same source parent.  
**Rooms **CANNOT** be moved.**

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.MoveNodes(ctx, operations.MoveNodesRequest{
        MoveNodesRequest: shared.MoveNodesRequest{
            Items: []shared.MoveNode{
                shared.MoveNode{
                    ID: 456130,
                    Name: sdk.String("Tyrone Emard"),
                    TimestampCreation: types.MustTimeFromString("2022-04-09T05:42:11.142Z"),
                    TimestampModification: types.MustTimeFromString("2022-03-28T22:24:48.068Z"),
                },
                shared.MoveNode{
                    ID: 313692,
                    Name: sdk.String("Jeannie Leannon MD"),
                    TimestampCreation: types.MustTimeFromString("2022-11-05T21:38:15.600Z"),
                    TimestampModification: types.MustTimeFromString("2022-04-09T09:19:35.125Z"),
                },
                shared.MoveNode{
                    ID: 374170,
                    Name: sdk.String("Darryl Emard"),
                    TimestampCreation: types.MustTimeFromString("2021-05-21T11:11:37.334Z"),
                    TimestampModification: types.MustTimeFromString("2020-10-04T22:45:05.165Z"),
                },
                shared.MoveNode{
                    ID: 117531,
                    Name: sdk.String("Felix Gorczany"),
                    TimestampCreation: types.MustTimeFromString("2021-08-04T17:36:39.068Z"),
                    TimestampModification: types.MustTimeFromString("2022-07-15T22:48:14.867Z"),
                },
            },
            KeepShareLinks: sdk.Bool(false),
            NodeIds: []int64{
                840429,
                183280,
                204865,
            },
            ResolutionStrategy: shared.MoveNodesRequestResolutionStrategyEnumAutorename.ToPointer(),
        },
        XSdsAuthToken: sdk.String("magni"),
        XSdsDateFormat: operations.MoveNodesXSdsDateFormatEnumOffset.ToPointer(),
        NodeID: 124833,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## RemoveDeletedNodes

### Description:
Permanently remove a list of nodes from the recycle bin.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.

### Postcondition:
All provided nodes are removed.

### Further Information:
The removal of deleted nodes from the recycle bin is irreversible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RemoveDeletedNodes(ctx, operations.RemoveDeletedNodesRequest{
        DeleteDeletedNodesRequest: shared.DeleteDeletedNodesRequest{
            DeletedNodeIds: []int64{
                722081,
                940432,
            },
        },
        XSdsAuthToken: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveFavorite

### Description:
Unmarks a node (room, folder or file) as favorite.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).

### Postcondition:
A node gets unmarked as favorite.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RemoveFavorite(ctx, operations.RemoveFavoriteRequest{
        XSdsAuthToken: sdk.String("cumque"),
        NodeID: 746994,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveNode

### Description:
Delete node (room, folder or file).

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).

### Postcondition:
Node gets deleted.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RemoveNode(ctx, operations.RemoveNodeRequest{
        XSdsAuthToken: sdk.String("nobis"),
        NodeID: 92596,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveNodeComment

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Delete an existing comment for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment **OR** <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> in auth parent room.

### Postcondition:
Comment is deleted.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RemoveNodeComment(ctx, operations.RemoveNodeCommentRequest{
        XSdsAuthToken: sdk.String("saepe"),
        CommentID: 217450,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveNodes

### Description:
Delete nodes (room, folder or file).

### Precondition:
Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).

### Postcondition:
Nodes are deleted.

### Further Information:
Nodes **MUST** be in same parent.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RemoveNodes(ctx, operations.RemoveNodesRequest{
        DeleteNodesRequest: shared.DeleteNodesRequest{
            NodeIds: []int64{
                749255,
            },
        },
        XSdsAuthToken: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveRoomRescueKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Delete room rescue key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is removed (cf. further information below).

### Further Information:
Please set a new room rescue key pair first and re-encrypt file keys with it.  
If no version is set, deleted key pair with lowest preference value.  
Although, `version` **SHOULD** be set.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RemoveRoomRescueKeyPair(ctx, operations.RemoveRoomRescueKeyPairRequest{
        XSdsAuthToken: sdk.String("tempore"),
        RoomID: 584476,
        Version: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestDeletedNode

### Description:  
Get metadata of a deleted node.

### Precondition:
User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.

### Postcondition:
Requested deleted node is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestDeletedNode(ctx, operations.RequestDeletedNodeRequest{
        XSdsAuthToken: sdk.String("delectus"),
        XSdsDateFormat: operations.RequestDeletedNodeXSdsDateFormatEnumLocal.ToPointer(),
        DeletedNodeID: 292147,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletedNode != nil {
        // handle response
    }
}
```

## RequestDeletedNodeVersions

### Description:  
Retrieve all deleted versions of a node.

### Precondition:
User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.

### Postcondition:
List of deleted versions of a node is returned.

### Further Information:
The node is identified by three parameters:
* parent ID
* name
* type (file, folder).

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`expireAt:desc|size:asc`  
Sort by `expireAt` descending **AND** `size` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `expireAt` | Expiration date |
| `accessedAt` | Last access date |
| `size` | Node size |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `updatedAt` | Last modification date |
| `updatedBy` | Last modifier first name, last name |
| `deletedAt` | Deleted date |
| `deletedBy` | Deleter first name, last name |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestDeletedNodeVersions(ctx, operations.RequestDeletedNodeVersionsRequest{
        XSdsAuthToken: sdk.String("labore"),
        XSdsDateFormat: operations.RequestDeletedNodeVersionsXSdsDateFormatEnumLocal.ToPointer(),
        Limit: sdk.Int(677263),
        Name: "Amy Armstrong",
        NodeID: 9240,
        Offset: sdk.Int(669917),
        Sort: sdk.String("repellendus"),
        Type: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletedNodeVersionsList != nil {
        // handle response
    }
}
```

## RequestDeletedNodesSummary

### Description:  
Retrieve a list of deleted nodes in a recycle bin.

### Precondition:
User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.

### Postcondition:
List of deleted nodes is returned.

### Further Information:
Only room IDs are accepted as parent ID since only rooms may have a recycle bin.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`type:eq:file:folder|name:cn:searchString_1|parentPath:cn:searchString_2`  
Get deleted nodes where type equals (`file` **OR** `folder`) **AND** deleted node name containing `searchString_1` **AND** deleted node parent path containing `searchString 2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `type` | Node type filter | `eq` | Node type equals value(s).<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:folder:file` | <ul><li>`folder`</li><li>`file`</li></ul> |
| `name` | Node name filter | `cn` | Node name contains value. | `search String` |
| `parentPath` | Parent path filter | `cn` | Parent path contains value. | `search String` |
| `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31`&#124;<br>`timestampCreation:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.  
Nodes are sorted by type first, then by sent sort string.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc|timestampCreation:asc`  
Sort by `name` descending **AND** `timestampCreation` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Node name |
| `cntVersions` | Number of deleted versions of this file |
| `firstDeletedAt` | First deleted version |
| `lastDeletedAt` | Last deleted version |
| `parentPath` | Parent path of deleted node |
| `timestampCreation` | Creation timestamp |
| `timestampModification` | Modification timestamp |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestDeletedNodesSummary(ctx, operations.RequestDeletedNodesSummaryRequest{
        XSdsAuthToken: sdk.String("doloribus"),
        XSdsDateFormat: operations.RequestDeletedNodesSummaryXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("facilis"),
        Limit: sdk.Int(586410),
        NodeID: 181631,
        Offset: sdk.Int(63955),
        Sort: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletedNodeSummaryList != nil {
        // handle response
    }
}
```

## RequestFileVersionList

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:  
Request a list of file versions. Both nodes and deleted nodes are included, depending on the user's permissions.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read/read recycle bin</span> permissions in parent room.

### Postcondition:
List of file versions is returned.

### Further Information:
Maximum number of file versions is 500. The list is sorted by ID DESC.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestFileVersionList(ctx, operations.RequestFileVersionListRequest{
        XSdsAuthToken: sdk.String("odio"),
        XSdsDateFormat: operations.RequestFileVersionListXSdsDateFormatEnumOffset.ToPointer(),
        Limit: sdk.Int(977496),
        Offset: sdk.Int(787542),
        ReferenceID: 876506,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileVersionList != nil {
        // handle response
    }
}
```

## RequestListOfWebhooksForRoom

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of webhooks for the room scope with their assignment status.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
List of webhooks is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isAssigned:eq:true`  
Get a list of assigned webhooks to the room.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`isAssigned`** | Assigned/unassigned webhooks filter | `eq` |  | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestListOfWebhooksForRoom(ctx, operations.RequestListOfWebhooksForRoomRequest{
        XSdsAuthToken: sdk.String("omnis"),
        XSdsDateFormat: operations.RequestListOfWebhooksForRoomXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("ipsum"),
        Limit: sdk.Int(961571),
        Offset: sdk.Int(455169),
        RoomID: 231701,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomWebhookList != nil {
        // handle response
    }
}
```

## RequestMissingFileKeys

### Description:  
Requests a list of missing file keys that may be generated by the current user.  

### Precondition:
User has a key pair.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>

### Postcondition:
None.

### Further Information:
Clients **SHOULD** regularly request missing file keys to provide access to files for other users.  
The returned list is ordered by priority (emergency passwords / rescue keys are returned first).
There is an enforced limit of **100** items per request.
A total value greater than limit signals that there are more entries but does not necessarily reflect the precise
number of total items.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestMissingFileKeys(ctx, operations.RequestMissingFileKeysRequest{
        XSdsAuthToken: sdk.String("vero"),
        FileID: sdk.Int64(949319),
        Limit: sdk.Int(492268),
        Offset: sdk.Int(941378),
        RoomID: sdk.Int64(715561),
        UseKey: operations.RequestMissingFileKeysUseKeyEnumPreviousRoomRescueKey.ToPointer(),
        UserID: sdk.Int64(486160),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissingKeysResponse != nil {
        // handle response
    }
}
```

## RequestNode

### Description:  
Get node (room, folder or file).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.

### Postcondition:
Requested node is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestNode(ctx, operations.RequestNodeRequest{
        XSdsAuthToken: sdk.String("similique"),
        XSdsDateFormat: operations.RequestNodeXSdsDateFormatEnumEpoch.ToPointer(),
        NodeID: 874288,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## RequestNodeComments

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Get comments for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.

### Postcondition:
List with comments (sorted by `createdAt` timestamp) is returned.

### Further Information:
An empty list is returned if no comments were found.  
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`). 


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestNodeComments(ctx, operations.RequestNodeCommentsRequest{
        XSdsAuthToken: sdk.String("ducimus"),
        XSdsDateFormat: operations.RequestNodeCommentsXSdsDateFormatEnumLocal.ToPointer(),
        HideDeleted: sdk.Bool(false),
        Limit: sdk.Int(844550),
        NodeID: 848944,
        Offset: sdk.Int(194342),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentList != nil {
        // handle response
    }
}
```

## RequestNodeParents

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:  
Requests a list of node ancestors, sorted from root node to the node's direct parent node.

### Precondition:
User is allowed to browse through the node tree until the requested node.

### Postcondition:
List of parent nodes is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestNodeParents(ctx, operations.RequestNodeParentsRequest{
        XSdsAuthToken: sdk.String("natus"),
        NodeID: 773326,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeParentList != nil {
        // handle response
    }
}
```

## RequestNodes

### Description:  
Provides a hierarchical list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.

### Precondition:
Authenticated user.

### Postcondition:
List of nodes is returned.

### Further Information:
`EncryptionInfo` is **NOT** provided.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`type:eq:room:folder|perm:eq:read`  
Get nodes where type equals (`room` **OR** `folder`) **AND** user has `read` permissions.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
| `perm` | Permission filter | `eq` | Permission equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `perm:eq:read:create:delete` | <ul><li>`manage`</li><li>`read`</li><li>`change`</li><li>`create`</li><li>`delete`</li><li>`manageDownloadShare`</li><li>`manageUploadShare`</li><li>`canReadRecycleBin`</li><li>`canRestoreRecycleBin`</li><li>`canDeleteRecycleBin`</li></ul> |
| `childPerm` | Same as `perm`, but less restrictive (applies to child nodes only).<br>Child nodes of the parent node which do not meet the filter condition<br>are **NOT** returned. | `eq` | cf. `perm` | cf. `perm` |
| `name` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
| `encrypted` | Node encryption status filter | `eq` |  | `true or false` |
| `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
| `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
| `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
| `referenceId`           | Reference ID filter               | `eq` | Reference ID equals value.   | `Integer ` |
</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.  
Nodes are sorted by type first, then by sent sort string.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc|fileType:asc`  
Sort by `name` descending **AND** `fileType` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Node name |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `updatedAt` | Last modification date |
| `updatedBy` | Last modifier first name, last name |
| `fileType` | File type (extension) |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
| `size` | Node size |
| `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
| `timestampCreation` | Creation timestamp |
| `timestampModification` | Modification timestamp |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestNodes(ctx, operations.RequestNodesRequest{
        XSdsAuthToken: sdk.String("aut"),
        XSdsDateFormat: operations.RequestNodesXSdsDateFormatEnumLeet.ToPointer(),
        DepthLevel: sdk.Int(347233),
        Filter: sdk.String("nulla"),
        Limit: sdk.Int(148141),
        Offset: sdk.Int(780427),
        ParentID: sdk.Int64(981830),
        RoomManager: sdk.Bool(false),
        Sort: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeList != nil {
        // handle response
    }
}
```

## RequestPendingAssignments

### Description:  
Requests a list of user-room assignments by groups that have **NOT** been approved yet  
These can have the state:
* **WAITING**  
* **DENIED**  
* **ACCEPTED**  

**ACCEPTED** assignments are already removed from the list.

### Precondition:
None.

### Postcondition:
List of user-room assignments is returned.

### Further Information:
Room administrators **SHOULD** regularly request pending assingments to provide access to rooms for other users.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`state:eq:WAITING`  
Filter assignments by state `WAITING`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
| `roomId` | Room ID filter | `eq` | Room ID equals value. | `positive Integer` |
| `state` | Assignment state | `eq` | Assignment state equals value. | `WAITING or DENIED` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`userId:desc|state:asc`  
Sort by `userId` descending **AND** `state` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `userId` | User ID |
| `groupId` | Group ID |
| `roomId` | Room ID |
| `state` | State |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestPendingAssignments(ctx, operations.RequestPendingAssignmentsRequest{
        XSdsAuthToken: sdk.String("iusto"),
        Filter: sdk.String("eligendi"),
        Limit: sdk.Int(497391),
        Offset: sdk.Int(4048),
        Sort: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PendingAssignmentList != nil {
        // handle response
    }
}
```

## RequestRoomActivitiesLogAsJSON

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:
Retrieve syslog (audit log) events related to a room.

### Precondition:
Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.

### Postcondition:
List of events is returned.

### Further Information:
Output may be limited to a certain number of entries.  
Please use filter criteria and paging.

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`time:desc`  
Sort by `time` descending (default sort option).

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `time` | Event timestamp |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomActivitiesLogAsJSON(ctx, operations.RequestRoomActivitiesLogAsJSONRequest{
        XSdsAuthToken: sdk.String("tempora"),
        XSdsDateFormat: operations.RequestRoomActivitiesLogAsJSONXSdsDateFormatEnumLocal.ToPointer(),
        DateEnd: sdk.String("ea"),
        DateStart: sdk.String("aspernatur"),
        Limit: sdk.Int(428224),
        Offset: sdk.Int(822118),
        RoomID: 297842,
        Sort: sdk.String("ratione"),
        Status: sdk.Int(401132),
        Type: sdk.Int(511319),
        UserID: sdk.Int64(120657),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LogEventList != nil {
        // handle response
    }
}
```

## RequestRoomGroups

### Description:  
Retrieve a list of groups that are and / or can be granted to the room.

### Precondition:
Any permissions on target room.

### Postcondition:
List of groups is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isGranted:eq:false|name:cn:searchString`  
Get all groups that are **NOT** granted to this room **AND** whose name is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Group name filter | `cn` | Group name contains value. | `search String` |
| `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
| `isGranted` | Filter the groups that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for groups in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `permissionsManage` | Filter the groups that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
| `effectivePerm` | Filter groups with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc`  
Sort by `name` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Group name |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomGroups(ctx, operations.RequestRoomGroupsRequest{
        XSdsAuthToken: sdk.String("dolor"),
        Filter: sdk.String("maiores"),
        Limit: sdk.Int(97844),
        Offset: sdk.Int(406120),
        RoomID: 862192,
        Sort: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomGroupList != nil {
        // handle response
    }
}
```

## RequestRoomPolicies

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.32.0</h3>

### Description:  
Retrieve the room policies:
* `defaultExpirationPeriod`

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.

### Postcondition:
Room Policies returned.

### Further Information:
`defaultExpirationPeriod`: Default policy room expiration period in seconds.
All existing and future files in a room will have their expiration date set to this period after their respective upload.
Existing files can be set to expire earlier afterwards.
`0` means no default expiration policy will be enforced. 




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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomPolicies(ctx, operations.RequestRoomPoliciesRequest{
        XSdsAuthToken: sdk.String("voluptatibus"),
        RoomID: 343605,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomPolicies != nil {
        // handle response
    }
}
```

## ~~RequestRoomRescueKey~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>

### Description:  
Returns the file key for the room emergency password / rescue key of a certain file (if available).

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
File key is returned.

### Further Information:
None.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomRescueKey(ctx, operations.RequestRoomRescueKeyRequest{
        XSdsAuthToken: sdk.String("sapiente"),
        FileID: 788873,
        Version: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileKey != nil {
        // handle response
    }
}
```

## RequestRoomRescueKeyPair

### Description:  
Retrieve the room rescue key pair.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.

### Postcondition:
Key pair is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomRescueKeyPair(ctx, operations.RequestRoomRescueKeyPairRequest{
        XSdsAuthToken: sdk.String("ea"),
        XSdsDateFormat: operations.RequestRoomRescueKeyPairXSdsDateFormatEnumEpoch.ToPointer(),
        RoomID: 359271,
        Version: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainer != nil {
        // handle response
    }
}
```

## RequestRoomRescueKeyPairs

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Retrieve all room rescue key pairs to allow migrating room-rescue-key-encrypted file keys.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.

### Postcondition:
List of key pairs is returned.

### Further Information:
In the case of an algorithm migration to a room rescue key pair, one should create the new key pair before deleting the old one. This allows re-encrypting file keys with the new key pair, using the old one.

This API allows to retrieve both key pairs, in contrast to `GET /nodes/rooms/{room_id}/keypair`, which only delivers the preferred one.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomRescueKeyPairs(ctx, operations.RequestRoomRescueKeyPairsRequest{
        XSdsAuthToken: sdk.String("aliquid"),
        XSdsDateFormat: operations.RequestRoomRescueKeyPairsXSdsDateFormatEnumUtc.ToPointer(),
        RoomID: 301831,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainers != nil {
        // handle response
    }
}
```

## RequestRoomS3Tags

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Retrieve a list of S3 tags assigned to a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
List of assigned S3 tags is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomS3Tags(ctx, operations.RequestRoomS3TagsRequest{
        XSdsAuthToken: sdk.String("ea"),
        RoomID: 775220,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3TagList != nil {
        // handle response
    }
}
```

## RequestRoomUsers

### Description:  
Retrieve a list of users that are and / or can be granted to the room.

### Precondition:
Any permissions on target room.

### Postcondition:
None.

### Further Information:
List of users is returned.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

> `permissionsManage:eq:true|user:cn:searchString`  
Get all users that have `manage` permissions to this room **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
| `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
| `isGranted` | Filter the users that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for users in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
| `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
| `effectivePerm` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
| `hasRole` | User role filter<br>For more Roles information please call `GET /roles API` | `eq`, `neq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`user:desc`  
Sort by `user` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`user`** | User - sort by `firstName`, `lastName`, `username`, `email` (in this order) |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestRoomUsers(ctx, operations.RequestRoomUsersRequest{
        XSdsAuthToken: sdk.String("consectetur"),
        Filter: sdk.String("recusandae"),
        Limit: sdk.Int(132487),
        Offset: sdk.Int(325310),
        RoomID: 53427,
        Sort: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoomUserList != nil {
        // handle response
    }
}
```

## ~~RequestSystemRescueKey~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>

### Description:  
Returns the file key for the system emergency password / rescue key of a certain file (if available).

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.

### Postcondition:
File key is returned.

### Further Information:
None.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestSystemRescueKey(ctx, operations.RequestSystemRescueKeyRequest{
        XSdsAuthToken: sdk.String("libero"),
        FileID: 13948,
        Version: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileKey != nil {
        // handle response
    }
}
```

## RequestUploadStatusFiles

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Request status of a S3 file upload.

### Precondition:
An upload channel has been created and user has to be the creator of the upload channel.

### Postcondition:
Status of S3 multipart upload request is returned.

### Further Information:
None.

### Possible errors:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Http Status | Error Code | Description |
| :--- | :--- | :--- |
| `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
| `400 Bad Request` | `-80001` | Invalid positive number |
| `400 Bad Request` | `-80002` | Invalid number |
| `400 Bad Request` | `-40001` | (Target) room is not encrypted |
| `400 Bad Request` | `-40755` | Bad file name |
| `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
| `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
| `403 Forbidden` |  | Access denied |
| `404 Not Found` | `-20501` | Upload not found |
| `404 Not Found` | `-40000` | Container not found |
| `404 Not Found` | `-41000` | Node not found |
| `404 Not Found` | `-70501` | User not found |
| `409 Conflict` | `-40010` | Container cannot be overwritten |
| `409 Conflict` |  | File cannot be overwritten |
| `500 Internal Server Error` |  | System Error |
| `502 Bad Gateway` |  | S3 Error |
| `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
| `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
| `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
| `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestUploadStatusFiles(ctx, operations.RequestUploadStatusFilesRequest{
        XSdsAuthToken: sdk.String("deleniti"),
        XSdsDateFormat: operations.RequestUploadStatusFilesXSdsDateFormatEnumEpoch.ToPointer(),
        UploadID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3FileUploadStatus != nil {
        // handle response
    }
}
```

## RequestUserFileKey

### Description:  
Returns the file key for the current user (if available).

### Precondition:
User with one of the following permissions in parent room: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>

### Postcondition:
File key is returned.

### Further Information:
The symmetric file key is encrypted with the user's public key.  
File keys are generated with the workflow _"Generate file keys"_ that starts at `GET /nodes/missingFileKeys`.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RequestUserFileKey(ctx, operations.RequestUserFileKeyRequest{
        XSdsAuthToken: sdk.String("fugit"),
        FileID: 882860,
        Version: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileKey != nil {
        // handle response
    }
}
```

## RestoreNodes

### Description:  
Restore a list of deleted nodes.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in parent room and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; restore recycle bin</span> permissions.

### Postcondition:
The selected files are moved from the recycle bin to the chosen productive container.

### Further Information:
If no parent ID is provided, the node is restored to its previous location.  
The default resolution strategy is `autorename` that adds numbers to the file name until the conflict is solved.  
If an existing file is overwritten, it is moved to the recycle bin instead of the restored one.

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RestoreNodes(ctx, operations.RestoreNodesRequest{
        RestoreDeletedNodesRequest: shared.RestoreDeletedNodesRequest{
            DeletedNodeIds: []int64{
                89603,
                677412,
            },
            KeepShareLinks: sdk.Bool(false),
            ParentID: sdk.Int64(672048),
            ResolutionStrategy: shared.RestoreDeletedNodesRequestResolutionStrategyEnumFail.ToPointer(),
        },
        XSdsAuthToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RevokeRoomGroups

### Description:  
Revoke granted groups from room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Group's permissions are revoked.

### Further Information:
Batch function.  

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RevokeRoomGroups(ctx, operations.RevokeRoomGroupsRequest{
        RoomGroupsDeleteBatchRequest: shared.RoomGroupsDeleteBatchRequest{
            Ids: []int64{
                420539,
                752135,
            },
        },
        XSdsAuthToken: sdk.String("quas"),
        XSdsDateFormat: operations.RevokeRoomGroupsXSdsDateFormatEnumLeet.ToPointer(),
        RoomID: 860552,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RevokeRoomUsers

### Description:  
Revoke granted users from room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
User's permissions are revoked.

### Further Information:
Batch function.  

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.RevokeRoomUsers(ctx, operations.RevokeRoomUsersRequest{
        RoomUsersDeleteBatchRequest: shared.RoomUsersDeleteBatchRequest{
            Ids: []int64{
                727044,
                96549,
            },
        },
        XSdsAuthToken: sdk.String("tempora"),
        RoomID: 256139,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchNodes

### Description:  
Provides a flat list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> nodes (i.e. `isBrowsable = true`).

### Postcondition:
List of nodes is returned.

### Further Information:  
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`).  
`EncryptionInfo` is **NOT** provided.  
Wildcard character is the asterisk character: `*`

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`type:eq:file|createdAt:ge:2015-01-01`  
Get nodes where type equals `file` **AND** file creation date is **>=** `2015-01-01`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME`            | Filter Description                | `OPERATOR` | Operator Description                                                                                                                                                                                                                                                                | `VALUE` |
|:------------------------|:----------------------------------| :--- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
| `type`                  | Node type filter                  | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder`                                                                                                                                        | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
| `fileType`              | File type filter (file extension) | `cn, eq` | File type contains / equals value.                                                                                                                                                                                                                                                  | `search String` |
| `classification`        | Classification filter             | `eq` | Classification equals value.                                                                                                                                                                                                                                                        | <ul><li>`1` - public</li><li>`2` - internal</li><li>`3` - confidential</li><li>`4` - strictly confidential</li></ul> |
| `createdBy`             | Creator login filter              | `cn, eq` | Creator login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`).                                                                                                                                                                             | `search String` |
| `createdById`           | Creator ID filter                 | `eq` | Creator ID equals value.                                                                                                                                                                                                                                                            | `positive Integer  or -1 for external user` |
| `createdAt`             | Creation date filter              | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01`                                                                | `Date (yyyy-MM-dd)` |
| `updatedBy`             | Last modifier login filter        | `cn, eq` | Last modifier login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`).                                                                                                                                                                       | `search String` |
| `updatedById`           | Last modifier ID filter           | `eq` | Modifier ID equals value.                                                                                                                                                                                                                                                           | `positive Integer or -1 for external user` |
| `updatedAt`             | Last modification date filter     | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01`                                                       | `Date (yyyy-MM-dd)` |
| `expireAt`              | Expiration date filter            | `ge, le` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expireAt:ge:2016-12-31`&#124;`expireAt:le:2018-01-01`                                                                | `Date (yyyy-MM-dd)` |
| `size`                  | Node size filter                  | `ge, le` | Node size is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `size:ge:5`&#124;`size:le:10`                                                                                               | `size in bytes` |
| `isFavorite`            | Favorite filter                   | `eq` |                                                                                                                                                                                                                                                                                     | `true or false` |
| `branchVersion`         | Node branch version filter        | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404`                                                 | `version number` |
| `parentPath`            | Parent path                       | `cn, eq` | Parent path contains / equals  value.                                                                                                                                                                                                                                               | `search String` |
| `timestampCreation`     | Creation timestamp filter         | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540`             | `Date (yyyy-MM-dd)` |
| `timestampModification` | Modification timestamp filter     | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
| `referenceId`           | Reference ID filter               | `eq` | Reference ID equals value.                                                                                                                                                                                                                                                          | `Integer ` |
</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc|size:asc`  
Sort by `name` descending **AND** `size` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Node name |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `updatedAt` | Last modification date |
| `updatedBy` | Last modifier first name, last name |
| `fileType` | File type (extension) |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
| `size` | Node size |
| `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
| `type` | Node type (room, folder, file) |
| `parentPath` | Parent path |
| `timestampCreation` | Creation timestamp |
| `timestampModification` | Modification timestamp |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.SearchNodes(ctx, operations.SearchNodesRequest{
        XSdsAuthToken: sdk.String("explicabo"),
        XSdsDateFormat: operations.SearchNodesXSdsDateFormatEnumOffset.ToPointer(),
        DepthLevel: sdk.Int(55374),
        Filter: sdk.String("molestiae"),
        Limit: sdk.Int(301598),
        Offset: sdk.Int(487935),
        ParentID: sdk.Int64(262118),
        SearchString: "esse",
        Sort: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeList != nil {
        // handle response
    }
}
```

## SetRoomPolicies

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.32.0</h3>

### Description:  
Retrieve the room policies:
* `defaultExpirationPeriod`

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Room policy is set.

### Further Information:
`defaultExpirationPeriod`: Default policy room expiration period in seconds.
All existing and future files in a room will have their expiration date set to this period after their respective upload.
Existing files can be set to expire earlier afterwards.
`0` means no default expiration policy will be enforced. This removes all expiration dates from existing files.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.SetRoomPolicies(ctx, operations.SetRoomPoliciesRequest{
        RoomPoliciesRequest: shared.RoomPoliciesRequest{
            DefaultExpirationPeriod: sdk.Int(524593),
        },
        XSdsAuthToken: sdk.String("fuga"),
        RoomID: 442015,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetRoomRescueKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Set room rescue key pair.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Key pair is set.

### Further Information:
Room rescue key pair can be used to upgrade algorithm.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.SetRoomRescueKeyPair(ctx, operations.SetRoomRescueKeyPairRequest{
        UserKeyPairContainer: shared.UserKeyPairContainer{
            PrivateKeyContainer: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2021-04-18T13:50:09.955Z"),
                CreatedBy: sdk.Int64(283519),
                PrivateKey: "eum",
                Version: "suscipit",
            },
            PublicKeyContainer: shared.PublicKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-06-16T15:21:08.890Z"),
                CreatedBy: sdk.Int64(509342),
                PublicKey: "quisquam",
                Version: "veritatis",
            },
        },
        XSdsAuthToken: sdk.String("ipsa"),
        RoomID: 660040,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetRoomS3Tags

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Set S3 tags to a room.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.

### Postcondition:
Provided S3 tags are assigned to a room.

### Further Information:
Every request overrides current S3 tags.  
Mandatory S3 tag IDs **MUST** be sent.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.SetRoomS3Tags(ctx, operations.SetRoomS3TagsRequest{
        S3TagIds: shared.S3TagIds{
            Ids: []int64{
                206594,
                778696,
                847276,
            },
        },
        XSdsAuthToken: sdk.String("quo"),
        RoomID: 681359,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3TagList != nil {
        // handle response
    }
}
```

## SetUserFileKeys

### Description:  
Sets symmetric file keys for several users and files.

### Precondition:
User has file keys for the files.  
Only settable by users that own one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>

### Postcondition:
Stores new file keys for other users.

### Further Information:
Only users with copies of the file key (encrypted with their public keys) can access a certain file.  
This endpoint is used for the distribution of file keys amongst an authorized user base.  
User can set file key for himself.  
The users who already have a file key are ignored and keep the distributed file key


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.SetUserFileKeys(ctx, operations.SetUserFileKeysRequest{
        UserFileKeySetBatchRequest: shared.UserFileKeySetBatchRequest{
            Items: []shared.UserFileKeySetRequest{
                shared.UserFileKeySetRequest{
                    FileID: 178367,
                    FileKey: shared.FileKey{
                        Iv: "voluptas",
                        Key: "ab",
                        Tag: "cupiditate",
                        Version: "consequatur",
                    },
                    UserID: 272822,
                },
                shared.UserFileKeySetRequest{
                    FileID: 892050,
                    FileKey: shared.FileKey{
                        Iv: "ipsam",
                        Key: "aspernatur",
                        Tag: "sequi",
                        Version: "quo",
                    },
                    UserID: 459856,
                },
            },
        },
        XSdsAuthToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFavorites

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:  
Marks or unmarks a list of nodes (room, folder or file) as favorite.

### Precondition:
Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).

### Postcondition:
Nodes gets marked as favorite.

### Further Information:
Maximum number of nodes is 200.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateFavorites(ctx, operations.UpdateFavoritesRequest{
        UpdateFavoritesBulkRequest: shared.UpdateFavoritesBulkRequest{
            IsFavorite: false,
            ObjectIds: []int64{
                715179,
            },
        },
        XSdsAuthToken: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFile

### Description:
Updates a list of file’s metadata.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.

### Postcondition:
File's metadata is changed.




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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateFile(ctx, operations.UpdateFileRequest{
        UpdateFileRequest: shared.UpdateFileRequest{
            Classification: sdk.Int(490819),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-07-13T15:11:40.912Z"),
            },
            Name: sdk.String("Sheldon Hackett"),
            Notes: sdk.String("commodi"),
            TimestampCreation: types.MustTimeFromString("2022-06-24T08:20:15.921Z"),
            TimestampModification: types.MustTimeFromString("2022-01-19T00:55:43.636Z"),
        },
        XSdsAuthToken: sdk.String("accusantium"),
        XSdsDateFormat: operations.UpdateFileXSdsDateFormatEnumEpoch.ToPointer(),
        FileID: 430402,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## UpdateFiles

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:  
Updates a list of file’s metadata.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.

### Postcondition:
File's metadata is changed.

### Further Information:
Maximum number of files is 200


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateFiles(ctx, operations.UpdateFilesRequest{
        UpdateFilesBulkRequest: shared.UpdateFilesBulkRequest{
            Classification: sdk.Int(556429),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-09-06T07:07:42.754Z"),
            },
            ObjectIds: []int64{
                143829,
                681393,
                649463,
            },
        },
        XSdsAuthToken: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFolder

### Description:  
Updates folder’s metadata.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.

### Postcondition:
Folder's metadata is changed.

### Further Information:
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateFolder(ctx, operations.UpdateFolderRequest{
        UpdateFolderRequest: shared.UpdateFolderRequest{
            Classification: shared.UpdateFolderRequestClassificationEnumThree.ToPointer(),
            Name: sdk.String("Cathy Huel"),
            Notes: sdk.String("consequuntur"),
            TimestampCreation: types.MustTimeFromString("2022-11-14T18:20:51.649Z"),
            TimestampModification: types.MustTimeFromString("2021-04-07T01:55:10.347Z"),
        },
        XSdsAuthToken: sdk.String("atque"),
        XSdsDateFormat: operations.UpdateFolderXSdsDateFormatEnumUtc.ToPointer(),
        FolderID: 456911,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## UpdateNodeComment

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>

### Description:
Edit the text of an existing comment for a specific node.

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment.

### Postcondition:
Comments text gets changed.

### Further Information:
Maximum allowed text length: **65535** characters.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateNodeComment(ctx, operations.UpdateNodeCommentRequest{
        ChangeNodeCommentRequest: shared.ChangeNodeCommentRequest{
            Text: "eveniet",
        },
        XSdsAuthToken: sdk.String("accusamus"),
        XSdsDateFormat: operations.UpdateNodeCommentXSdsDateFormatEnumUtc.ToPointer(),
        CommentID: 458604,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## UpdateRoom

### Description:  
Updates room’s metadata.

### Precondition:
User is a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> at superordinated level.

### Postcondition:
Room's metadata is changed.

### Further Information:
Notes are limited to **255** characters.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateRoom(ctx, operations.UpdateRoomRequest{
        UpdateRoomRequest: shared.UpdateRoomRequest{
            Name: sdk.String("Marco Terry PhD"),
            Notes: sdk.String("vel"),
            Quota: sdk.Int64(690025),
            TimestampCreation: types.MustTimeFromString("2022-04-20T15:18:38.542Z"),
            TimestampModification: types.MustTimeFromString("2022-05-06T18:20:18.409Z"),
        },
        XSdsAuthToken: sdk.String("distinctio"),
        XSdsDateFormat: operations.UpdateRoomXSdsDateFormatEnumEpoch.ToPointer(),
        RoomID: 27069,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## UpdateRoomGroups

### Description:
All existing group permissions will be overwritten.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.

### Postcondition:
Group's permissions are changed.

### Further Information:
Batch function.  


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateRoomGroups(ctx, operations.UpdateRoomGroupsRequest{
        RoomGroupsAddBatchRequest: shared.RoomGroupsAddBatchRequest{
            Items: []shared.RoomGroupsAddBatchRequestItem{
                shared.RoomGroupsAddBatchRequestItem{
                    ID: 731398,
                    NewGroupMemberAcceptance: shared.RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumAutoallow.ToPointer(),
                    Permissions: shared.NodePermissions{
                        Change: false,
                        Create: false,
                        Delete: false,
                        DeleteRecycleBin: false,
                        Manage: false,
                        ManageDownloadShare: false,
                        ManageUploadShare: false,
                        Read: false,
                        ReadRecycleBin: false,
                        RestoreRecycleBin: false,
                    },
                },
                shared.RoomGroupsAddBatchRequestItem{
                    ID: 766964,
                    NewGroupMemberAcceptance: shared.RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumAutoallow.ToPointer(),
                    Permissions: shared.NodePermissions{
                        Change: false,
                        Create: false,
                        Delete: false,
                        DeleteRecycleBin: false,
                        Manage: false,
                        ManageDownloadShare: false,
                        ManageUploadShare: false,
                        Read: false,
                        ReadRecycleBin: false,
                        RestoreRecycleBin: false,
                    },
                },
                shared.RoomGroupsAddBatchRequestItem{
                    ID: 9766,
                    NewGroupMemberAcceptance: shared.RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnumPending.ToPointer(),
                    Permissions: shared.NodePermissions{
                        Change: false,
                        Create: false,
                        Delete: false,
                        DeleteRecycleBin: false,
                        Manage: false,
                        ManageDownloadShare: false,
                        ManageUploadShare: false,
                        Read: false,
                        ReadRecycleBin: false,
                        RestoreRecycleBin: false,
                    },
                },
            },
        },
        XSdsAuthToken: sdk.String("quaerat"),
        RoomID: 959167,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateRoomUsers

### Description:
All existing user permissions will be overwritten.

### Precondition:
User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.

### Postcondition:
User's permissions are changed.

### Further Information:
Batch function.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UpdateRoomUsers(ctx, operations.UpdateRoomUsersRequest{
        RoomUsersAddBatchRequest: shared.RoomUsersAddBatchRequest{
            Items: []shared.RoomUsersAddBatchRequestItem{
                shared.RoomUsersAddBatchRequestItem{
                    ID: 458139,
                    Permissions: shared.NodePermissions{
                        Change: false,
                        Create: false,
                        Delete: false,
                        DeleteRecycleBin: false,
                        Manage: false,
                        ManageDownloadShare: false,
                        ManageUploadShare: false,
                        Read: false,
                        ReadRecycleBin: false,
                        RestoreRecycleBin: false,
                    },
                },
            },
        },
        XSdsAuthToken: sdk.String("blanditiis"),
        RoomID: 590984,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~UploadFileAsMultipart~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>

### Use `uploads` API

### Description:  
Uploads a file or parts of it in an active upload channel.

### Precondition:
An upload channel has been created.

### Postcondition:
A file or parts of it are uploaded to a temporary location.

### Further Information:
This endpoints supports chunked upload.  

Following `Content-Types` are supported by this API:
* `multipart/form-data`
* provided `Content-Type`   

For both file upload types set the correct `Content-Type` header and body.  

### Examples:  

* `multipart/form-data`
```
POST /api/v4/nodes/files/uploads/{upload_id} HTTP/1.1

Header:
...
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
...

Body:
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: text/plain

Content of file.txt
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

* any other `Content-Type`  
```
POST /api/v4/nodes/files/uploads/{upload_id}  HTTP/1.1

Header:
...
Content-Type: { ... }
...

Body:
raw content
```

Range Requests
<https://tools.ietf.org/html/rfc7233>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Nodes.UploadFileAsMultipart(ctx, operations.UploadFileAsMultipartRequest{
        ContentRange: sdk.String("a"),
        RequestBody: &operations.UploadFileAsMultipartRequestBody{
            File: operations.UploadFileAsMultipartRequestBodyFile{
                Content: []byte("nulla"),
                File: "quas",
            },
        },
        XSdsAuthToken: sdk.String("esse"),
        UploadID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChunkUploadResponse != nil {
        // handle response
    }
}
```
