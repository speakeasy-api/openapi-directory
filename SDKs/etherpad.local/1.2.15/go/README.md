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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AppendTextUsingGET(ctx, operations.AppendTextUsingGETRequest{
        PadID: sdk.String("corrupti"),
        Text: sdk.String("provident"),
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AppendTextUsingGET](docs/sdk/README.md#appendtextusingget)
* [AppendTextUsingPOST](docs/sdk/README.md#appendtextusingpost)
* [CopyPadUsingGET](docs/sdk/README.md#copypadusingget)
* [CopyPadUsingPOST](docs/sdk/README.md#copypadusingpost)
* [CopyPadWithoutHistoryUsingGET](docs/sdk/README.md#copypadwithouthistoryusingget)
* [CopyPadWithoutHistoryUsingPOST](docs/sdk/README.md#copypadwithouthistoryusingpost)
* [GETAttributePoolUsingGET](docs/sdk/README.md#getattributepoolusingget)
* [GetAttributePoolUsingPOST](docs/sdk/README.md#getattributepoolusingpost)
* [GETPadIDUsingGET](docs/sdk/README.md#getpadidusingget)
* [GetPadIDUsingPOST](docs/sdk/README.md#getpadidusingpost)
* [GETRevisionChangesetUsingGET](docs/sdk/README.md#getrevisionchangesetusingget)
* [GetRevisionChangesetUsingPOST](docs/sdk/README.md#getrevisionchangesetusingpost)
* [GETSavedRevisionsCountUsingGET](docs/sdk/README.md#getsavedrevisionscountusingget)
* [GetSavedRevisionsCountUsingPOST](docs/sdk/README.md#getsavedrevisionscountusingpost)
* [GETStatsUsingGET](docs/sdk/README.md#getstatsusingget)
* [GetStatsUsingPOST](docs/sdk/README.md#getstatsusingpost)
* [ListSavedRevisionsUsingGET](docs/sdk/README.md#listsavedrevisionsusingget)
* [ListSavedRevisionsUsingPOST](docs/sdk/README.md#listsavedrevisionsusingpost)
* [MovePadUsingGET](docs/sdk/README.md#movepadusingget)
* [MovePadUsingPOST](docs/sdk/README.md#movepadusingpost)
* [RestoreRevisionUsingGET](docs/sdk/README.md#restorerevisionusingget)
* [RestoreRevisionUsingPOST](docs/sdk/README.md#restorerevisionusingpost)
* [SaveRevisionUsingGET](docs/sdk/README.md#saverevisionusingget)
* [SaveRevisionUsingPOST](docs/sdk/README.md#saverevisionusingpost)

### [Author](docs/author/README.md)

* [CreateAuthorIfNotExistsForUsingGET](docs/author/README.md#createauthorifnotexistsforusingget) - this functions helps you to map your application author ids to Etherpad author ids
* [CreateAuthorIfNotExistsForUsingPOST](docs/author/README.md#createauthorifnotexistsforusingpost) - this functions helps you to map your application author ids to Etherpad author ids
* [CreateAuthorUsingGET](docs/author/README.md#createauthorusingget) - creates a new author
* [CreateAuthorUsingPOST](docs/author/README.md#createauthorusingpost) - creates a new author
* [GETAuthorNameUsingGET](docs/author/README.md#getauthornameusingget) - Returns the Author Name of the author
* [GetAuthorNameUsingPOST](docs/author/README.md#getauthornameusingpost) - Returns the Author Name of the author
* [ListPadsOfAuthorUsingGET](docs/author/README.md#listpadsofauthorusingget) - returns an array of all pads this author contributed to
* [ListPadsOfAuthorUsingPOST](docs/author/README.md#listpadsofauthorusingpost) - returns an array of all pads this author contributed to
* [ListSessionsOfAuthorUsingGET](docs/author/README.md#listsessionsofauthorusingget) - returns all sessions of an author
* [ListSessionsOfAuthorUsingPOST](docs/author/README.md#listsessionsofauthorusingpost) - returns all sessions of an author

### [Group](docs/group/README.md)

* [CreateGroupIfNotExistsForUsingGET](docs/group/README.md#creategroupifnotexistsforusingget) - this functions helps you to map your application group ids to Etherpad group ids
* [CreateGroupIfNotExistsForUsingPOST](docs/group/README.md#creategroupifnotexistsforusingpost) - this functions helps you to map your application group ids to Etherpad group ids
* [CreateGroupPadUsingGET](docs/group/README.md#creategrouppadusingget) - creates a new pad in this group
* [CreateGroupPadUsingPOST](docs/group/README.md#creategrouppadusingpost) - creates a new pad in this group
* [CreateGroupUsingGET](docs/group/README.md#creategroupusingget) - creates a new group
* [CreateGroupUsingPOST](docs/group/README.md#creategroupusingpost) - creates a new group
* [DeleteGroupUsingGET](docs/group/README.md#deletegroupusingget) - deletes a group
* [DeleteGroupUsingPOST](docs/group/README.md#deletegroupusingpost) - deletes a group
* [ListAllGroupsUsingGET](docs/group/README.md#listallgroupsusingget)
* [ListAllGroupsUsingPOST](docs/group/README.md#listallgroupsusingpost)
* [ListPadsUsingGET](docs/group/README.md#listpadsusingget) - returns all pads of this group
* [ListPadsUsingPOST](docs/group/README.md#listpadsusingpost) - returns all pads of this group
* [ListSessionsOfGroupUsingGET](docs/group/README.md#listsessionsofgroupusingget)
* [ListSessionsOfGroupUsingPOST](docs/group/README.md#listsessionsofgroupusingpost)

### [Pad](docs/pad/README.md)

* [AppendChatMessageUsingGET](docs/pad/README.md#appendchatmessageusingget) - appends a chat message
* [AppendChatMessageUsingPOST](docs/pad/README.md#appendchatmessageusingpost) - appends a chat message
* [CheckTokenUsingGET](docs/pad/README.md#checktokenusingget) - returns ok when the current api token is valid
* [CheckTokenUsingPOST](docs/pad/README.md#checktokenusingpost) - returns ok when the current api token is valid
* [CreateDiffHTMLUsingGET](docs/pad/README.md#creatediffhtmlusingget)
* [CreateDiffHTMLUsingPOST](docs/pad/README.md#creatediffhtmlusingpost)
* [CreatePadUsingGET](docs/pad/README.md#createpadusingget) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [CreatePadUsingPOST](docs/pad/README.md#createpadusingpost) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [DeletePadUsingGET](docs/pad/README.md#deletepadusingget) - deletes a pad
* [DeletePadUsingPOST](docs/pad/README.md#deletepadusingpost) - deletes a pad
* [GETChatHeadUsingGET](docs/pad/README.md#getchatheadusingget) - returns the chatHead (chat-message) of the pad
* [GetChatHeadUsingPOST](docs/pad/README.md#getchatheadusingpost) - returns the chatHead (chat-message) of the pad
* [GETChatHistoryUsingGET](docs/pad/README.md#getchathistoryusingget) - returns the chat history
* [GetChatHistoryUsingPOST](docs/pad/README.md#getchathistoryusingpost) - returns the chat history
* [GETHTMLUsingGET](docs/pad/README.md#gethtmlusingget) - returns the text of a pad formatted as HTML
* [GetHTMLUsingPOST](docs/pad/README.md#gethtmlusingpost) - returns the text of a pad formatted as HTML
* [GETLastEditedUsingGET](docs/pad/README.md#getlasteditedusingget) - returns the timestamp of the last revision of the pad
* [GetLastEditedUsingPOST](docs/pad/README.md#getlasteditedusingpost) - returns the timestamp of the last revision of the pad
* [GETPublicStatusUsingGET](docs/pad/README.md#getpublicstatususingget) - return true of false
* [GetPublicStatusUsingPOST](docs/pad/README.md#getpublicstatususingpost) - return true of false
* [GETReadOnlyIDUsingGET](docs/pad/README.md#getreadonlyidusingget) - returns the read only link of a pad
* [GetReadOnlyIDUsingPOST](docs/pad/README.md#getreadonlyidusingpost) - returns the read only link of a pad
* [GETRevisionsCountUsingGET](docs/pad/README.md#getrevisionscountusingget) - returns the number of revisions of this pad
* [GetRevisionsCountUsingPOST](docs/pad/README.md#getrevisionscountusingpost) - returns the number of revisions of this pad
* [GETTextUsingGET](docs/pad/README.md#gettextusingget) - returns the text of a pad
* [GetTextUsingPOST](docs/pad/README.md#gettextusingpost) - returns the text of a pad
* [ListAllPadsUsingGET](docs/pad/README.md#listallpadsusingget) - list all the pads
* [ListAllPadsUsingPOST](docs/pad/README.md#listallpadsusingpost) - list all the pads
* [ListAuthorsOfPadUsingGET](docs/pad/README.md#listauthorsofpadusingget) - returns an array of authors who contributed to this pad
* [ListAuthorsOfPadUsingPOST](docs/pad/README.md#listauthorsofpadusingpost) - returns an array of authors who contributed to this pad
* [PadUsersCountUsingGET](docs/pad/README.md#paduserscountusingget) - returns the number of user that are currently editing this pad
* [PadUsersCountUsingPOST](docs/pad/README.md#paduserscountusingpost) - returns the number of user that are currently editing this pad
* [PadUsersUsingGET](docs/pad/README.md#padusersusingget) - returns the list of users that are currently editing this pad
* [PadUsersUsingPOST](docs/pad/README.md#padusersusingpost) - returns the list of users that are currently editing this pad
* [SendClientsMessageUsingGET](docs/pad/README.md#sendclientsmessageusingget) - sends a custom message of type msg to the pad
* [SendClientsMessageUsingPOST](docs/pad/README.md#sendclientsmessageusingpost) - sends a custom message of type msg to the pad
* [SetHTMLUsingGET](docs/pad/README.md#sethtmlusingget) - sets the text of a pad with HTML
* [SetHTMLUsingPOST](docs/pad/README.md#sethtmlusingpost) - sets the text of a pad with HTML
* [SetPublicStatusUsingGET](docs/pad/README.md#setpublicstatususingget) - sets a boolean for the public status of a pad
* [SetPublicStatusUsingPOST](docs/pad/README.md#setpublicstatususingpost) - sets a boolean for the public status of a pad
* [SetTextUsingGET](docs/pad/README.md#settextusingget) - sets the text of a pad
* [SetTextUsingPOST](docs/pad/README.md#settextusingpost) - sets the text of a pad

### [Session](docs/session/README.md)

* [CreateSessionUsingGET](docs/session/README.md#createsessionusingget) - creates a new session. validUntil is an unix timestamp in seconds
* [CreateSessionUsingPOST](docs/session/README.md#createsessionusingpost) - creates a new session. validUntil is an unix timestamp in seconds
* [DeleteSessionUsingGET](docs/session/README.md#deletesessionusingget) - deletes a session
* [DeleteSessionUsingPOST](docs/session/README.md#deletesessionusingpost) - deletes a session
* [GETSessionInfoUsingGET](docs/session/README.md#getsessioninfousingget) - returns informations about a session
* [GetSessionInfoUsingPOST](docs/session/README.md#getsessioninfousingpost) - returns informations about a session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
