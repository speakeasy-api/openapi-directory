# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/etherpad.local/1.2.15/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AppendTextUsingGETRequest{
        QueryParams: operations.AppendTextUsingGETQueryParams{
            PadID: "corrupti",
            Text: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.AppendTextUsingGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AppendTextUsingGET`
* `AppendTextUsingPOST`
* `CopyPadUsingGET`
* `CopyPadUsingPOST`
* `CopyPadWithoutHistoryUsingGET`
* `CopyPadWithoutHistoryUsingPOST`
* `GETAttributePoolUsingGET`
* `GetAttributePoolUsingPOST`
* `GETPadIDUsingGET`
* `GetPadIDUsingPOST`
* `GETRevisionChangesetUsingGET`
* `GetRevisionChangesetUsingPOST`
* `GETSavedRevisionsCountUsingGET`
* `GetSavedRevisionsCountUsingPOST`
* `GETStatsUsingGET`
* `GetStatsUsingPOST`
* `ListSavedRevisionsUsingGET`
* `ListSavedRevisionsUsingPOST`
* `MovePadUsingGET`
* `MovePadUsingPOST`
* `RestoreRevisionUsingGET`
* `RestoreRevisionUsingPOST`
* `SaveRevisionUsingGET`
* `SaveRevisionUsingPOST`

### Author

* `CreateAuthorIfNotExistsForUsingGET` - this functions helps you to map your application author ids to Etherpad author ids
* `CreateAuthorIfNotExistsForUsingPOST` - this functions helps you to map your application author ids to Etherpad author ids
* `CreateAuthorUsingGET` - creates a new author
* `CreateAuthorUsingPOST` - creates a new author
* `GETAuthorNameUsingGET` - Returns the Author Name of the author
* `GetAuthorNameUsingPOST` - Returns the Author Name of the author
* `ListPadsOfAuthorUsingGET` - returns an array of all pads this author contributed to
* `ListPadsOfAuthorUsingPOST` - returns an array of all pads this author contributed to
* `ListSessionsOfAuthorUsingGET` - returns all sessions of an author
* `ListSessionsOfAuthorUsingPOST` - returns all sessions of an author

### Group

* `CreateGroupIfNotExistsForUsingGET` - this functions helps you to map your application group ids to Etherpad group ids
* `CreateGroupIfNotExistsForUsingPOST` - this functions helps you to map your application group ids to Etherpad group ids
* `CreateGroupPadUsingGET` - creates a new pad in this group
* `CreateGroupPadUsingPOST` - creates a new pad in this group
* `CreateGroupUsingGET` - creates a new group
* `CreateGroupUsingPOST` - creates a new group
* `DeleteGroupUsingGET` - deletes a group
* `DeleteGroupUsingPOST` - deletes a group
* `ListAllGroupsUsingGET`
* `ListAllGroupsUsingPOST`
* `ListPadsUsingGET` - returns all pads of this group
* `ListPadsUsingPOST` - returns all pads of this group
* `ListSessionsOfGroupUsingGET`
* `ListSessionsOfGroupUsingPOST`

### Pad

* `AppendChatMessageUsingGET` - appends a chat message
* `AppendChatMessageUsingPOST` - appends a chat message
* `CheckTokenUsingGET` - returns ok when the current api token is valid
* `CheckTokenUsingPOST` - returns ok when the current api token is valid
* `CreateDiffHTMLUsingGET`
* `CreateDiffHTMLUsingPOST`
* `CreatePadUsingGET` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `CreatePadUsingPOST` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `DeletePadUsingGET` - deletes a pad
* `DeletePadUsingPOST` - deletes a pad
* `GETChatHeadUsingGET` - returns the chatHead (chat-message) of the pad
* `GetChatHeadUsingPOST` - returns the chatHead (chat-message) of the pad
* `GETChatHistoryUsingGET` - returns the chat history
* `GetChatHistoryUsingPOST` - returns the chat history
* `GETHTMLUsingGET` - returns the text of a pad formatted as HTML
* `GetHTMLUsingPOST` - returns the text of a pad formatted as HTML
* `GETLastEditedUsingGET` - returns the timestamp of the last revision of the pad
* `GetLastEditedUsingPOST` - returns the timestamp of the last revision of the pad
* `GETPublicStatusUsingGET` - return true of false
* `GetPublicStatusUsingPOST` - return true of false
* `GETReadOnlyIDUsingGET` - returns the read only link of a pad
* `GetReadOnlyIDUsingPOST` - returns the read only link of a pad
* `GETRevisionsCountUsingGET` - returns the number of revisions of this pad
* `GetRevisionsCountUsingPOST` - returns the number of revisions of this pad
* `GETTextUsingGET` - returns the text of a pad
* `GetTextUsingPOST` - returns the text of a pad
* `ListAllPadsUsingGET` - list all the pads
* `ListAllPadsUsingPOST` - list all the pads
* `ListAuthorsOfPadUsingGET` - returns an array of authors who contributed to this pad
* `ListAuthorsOfPadUsingPOST` - returns an array of authors who contributed to this pad
* `PadUsersCountUsingGET` - returns the number of user that are currently editing this pad
* `PadUsersCountUsingPOST` - returns the number of user that are currently editing this pad
* `PadUsersUsingGET` - returns the list of users that are currently editing this pad
* `PadUsersUsingPOST` - returns the list of users that are currently editing this pad
* `SendClientsMessageUsingGET` - sends a custom message of type msg to the pad
* `SendClientsMessageUsingPOST` - sends a custom message of type msg to the pad
* `SetHTMLUsingGET` - sets the text of a pad with HTML
* `SetHTMLUsingPOST` - sets the text of a pad with HTML
* `SetPublicStatusUsingGET` - sets a boolean for the public status of a pad
* `SetPublicStatusUsingPOST` - sets a boolean for the public status of a pad
* `SetTextUsingGET` - sets the text of a pad
* `SetTextUsingPOST` - sets the text of a pad

### Session

* `CreateSessionUsingGET` - creates a new session. validUntil is an unix timestamp in seconds
* `CreateSessionUsingPOST` - creates a new session. validUntil is an unix timestamp in seconds
* `DeleteSessionUsingGET` - deletes a session
* `DeleteSessionUsingPOST` - deletes a session
* `GETSessionInfoUsingGET` - returns informations about a session
* `GetSessionInfoUsingPOST` - returns informations about a session
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
