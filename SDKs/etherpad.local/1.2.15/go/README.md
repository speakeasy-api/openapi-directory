# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AppendTextUsingGetRequest{
        QueryParams: operations.AppendTextUsingGetQueryParams{
            PadID: "sit",
            Text: "voluptas",
        },
    }
    
    res, err := s.AppendTextUsingGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AppendTextUsingGet`
* `AppendTextUsingPost`
* `CopyPadUsingGet`
* `CopyPadUsingPost`
* `CopyPadWithoutHistoryUsingGet`
* `CopyPadWithoutHistoryUsingPost`
* `GetAttributePoolUsingGet`
* `GetAttributePoolUsingPost`
* `GetPadIDUsingGet`
* `GetPadIDUsingPost`
* `GetRevisionChangesetUsingGet`
* `GetRevisionChangesetUsingPost`
* `GetSavedRevisionsCountUsingGet`
* `GetSavedRevisionsCountUsingPost`
* `GetStatsUsingGet`
* `GetStatsUsingPost`
* `ListSavedRevisionsUsingGet`
* `ListSavedRevisionsUsingPost`
* `MovePadUsingGet`
* `MovePadUsingPost`
* `RestoreRevisionUsingGet`
* `RestoreRevisionUsingPost`
* `SaveRevisionUsingGet`
* `SaveRevisionUsingPost`

### author

* `CreateAuthorIfNotExistsForUsingGet` - this functions helps you to map your application author ids to Etherpad author ids
* `CreateAuthorIfNotExistsForUsingPost` - this functions helps you to map your application author ids to Etherpad author ids
* `CreateAuthorUsingGet` - creates a new author
* `CreateAuthorUsingPost` - creates a new author
* `GetAuthorNameUsingGet` - Returns the Author Name of the author
* `GetAuthorNameUsingPost` - Returns the Author Name of the author
* `ListPadsOfAuthorUsingGet` - returns an array of all pads this author contributed to
* `ListPadsOfAuthorUsingPost` - returns an array of all pads this author contributed to
* `ListSessionsOfAuthorUsingGet` - returns all sessions of an author
* `ListSessionsOfAuthorUsingPost` - returns all sessions of an author

### group

* `CreateGroupIfNotExistsForUsingGet` - this functions helps you to map your application group ids to Etherpad group ids
* `CreateGroupIfNotExistsForUsingPost` - this functions helps you to map your application group ids to Etherpad group ids
* `CreateGroupPadUsingGet` - creates a new pad in this group
* `CreateGroupPadUsingPost` - creates a new pad in this group
* `CreateGroupUsingGet` - creates a new group
* `CreateGroupUsingPost` - creates a new group
* `DeleteGroupUsingGet` - deletes a group
* `DeleteGroupUsingPost` - deletes a group
* `ListAllGroupsUsingGet`
* `ListAllGroupsUsingPost`
* `ListPadsUsingGet` - returns all pads of this group
* `ListPadsUsingPost` - returns all pads of this group
* `ListSessionsOfGroupUsingGet`
* `ListSessionsOfGroupUsingPost`

### pad

* `AppendChatMessageUsingGet` - appends a chat message
* `AppendChatMessageUsingPost` - appends a chat message
* `CheckTokenUsingGet` - returns ok when the current api token is valid
* `CheckTokenUsingPost` - returns ok when the current api token is valid
* `CreateDiffHTMLUsingGet`
* `CreateDiffHTMLUsingPost`
* `CreatePadUsingGet` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `CreatePadUsingPost` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `DeletePadUsingGet` - deletes a pad
* `DeletePadUsingPost` - deletes a pad
* `GetChatHeadUsingGet` - returns the chatHead (chat-message) of the pad
* `GetChatHeadUsingPost` - returns the chatHead (chat-message) of the pad
* `GetChatHistoryUsingGet` - returns the chat history
* `GetChatHistoryUsingPost` - returns the chat history
* `GetHTMLUsingGet` - returns the text of a pad formatted as HTML
* `GetHTMLUsingPost` - returns the text of a pad formatted as HTML
* `GetLastEditedUsingGet` - returns the timestamp of the last revision of the pad
* `GetLastEditedUsingPost` - returns the timestamp of the last revision of the pad
* `GetPublicStatusUsingGet` - return true of false
* `GetPublicStatusUsingPost` - return true of false
* `GetReadOnlyIDUsingGet` - returns the read only link of a pad
* `GetReadOnlyIDUsingPost` - returns the read only link of a pad
* `GetRevisionsCountUsingGet` - returns the number of revisions of this pad
* `GetRevisionsCountUsingPost` - returns the number of revisions of this pad
* `GetTextUsingGet` - returns the text of a pad
* `GetTextUsingPost` - returns the text of a pad
* `ListAllPadsUsingGet` - list all the pads
* `ListAllPadsUsingPost` - list all the pads
* `ListAuthorsOfPadUsingGet` - returns an array of authors who contributed to this pad
* `ListAuthorsOfPadUsingPost` - returns an array of authors who contributed to this pad
* `PadUsersCountUsingGet` - returns the number of user that are currently editing this pad
* `PadUsersCountUsingPost` - returns the number of user that are currently editing this pad
* `PadUsersUsingGet` - returns the list of users that are currently editing this pad
* `PadUsersUsingPost` - returns the list of users that are currently editing this pad
* `SendClientsMessageUsingGet` - sends a custom message of type msg to the pad
* `SendClientsMessageUsingPost` - sends a custom message of type msg to the pad
* `SetHTMLUsingGet` - sets the text of a pad with HTML
* `SetHTMLUsingPost` - sets the text of a pad with HTML
* `SetPublicStatusUsingGet` - sets a boolean for the public status of a pad
* `SetPublicStatusUsingPost` - sets a boolean for the public status of a pad
* `SetTextUsingGet` - sets the text of a pad
* `SetTextUsingPost` - sets the text of a pad

### session

* `CreateSessionUsingGet` - creates a new session. validUntil is an unix timestamp in seconds
* `CreateSessionUsingPost` - creates a new session. validUntil is an unix timestamp in seconds
* `DeleteSessionUsingGet` - deletes a session
* `DeleteSessionUsingPost` - deletes a session
* `GetSessionInfoUsingGet` - returns informations about a session
* `GetSessionInfoUsingPost` - returns informations about a session

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
