# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppendTextUsingGETRequest;
import org.openapis.openapi.models.operations.AppendTextUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppendTextUsingGETRequest req = new AppendTextUsingGETRequest() {{
                padID = "provident";
                text = "distinctio";
            }};            

            AppendTextUsingGETResponse res = sdk.appendTextUsingGET(req);

            if (res.appendTextUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [appendTextUsingGET](docs/sdk/README.md#appendtextusingget)
* [appendTextUsingPOST](docs/sdk/README.md#appendtextusingpost)
* [copyPadUsingGET](docs/sdk/README.md#copypadusingget)
* [copyPadUsingPOST](docs/sdk/README.md#copypadusingpost)
* [copyPadWithoutHistoryUsingGET](docs/sdk/README.md#copypadwithouthistoryusingget)
* [copyPadWithoutHistoryUsingPOST](docs/sdk/README.md#copypadwithouthistoryusingpost)
* [getAttributePoolUsingGET](docs/sdk/README.md#getattributepoolusingget)
* [getAttributePoolUsingPOST](docs/sdk/README.md#getattributepoolusingpost)
* [getPadIDUsingGET](docs/sdk/README.md#getpadidusingget)
* [getPadIDUsingPOST](docs/sdk/README.md#getpadidusingpost)
* [getRevisionChangesetUsingGET](docs/sdk/README.md#getrevisionchangesetusingget)
* [getRevisionChangesetUsingPOST](docs/sdk/README.md#getrevisionchangesetusingpost)
* [getSavedRevisionsCountUsingGET](docs/sdk/README.md#getsavedrevisionscountusingget)
* [getSavedRevisionsCountUsingPOST](docs/sdk/README.md#getsavedrevisionscountusingpost)
* [getStatsUsingGET](docs/sdk/README.md#getstatsusingget)
* [getStatsUsingPOST](docs/sdk/README.md#getstatsusingpost)
* [listSavedRevisionsUsingGET](docs/sdk/README.md#listsavedrevisionsusingget)
* [listSavedRevisionsUsingPOST](docs/sdk/README.md#listsavedrevisionsusingpost)
* [movePadUsingGET](docs/sdk/README.md#movepadusingget)
* [movePadUsingPOST](docs/sdk/README.md#movepadusingpost)
* [restoreRevisionUsingGET](docs/sdk/README.md#restorerevisionusingget)
* [restoreRevisionUsingPOST](docs/sdk/README.md#restorerevisionusingpost)
* [saveRevisionUsingGET](docs/sdk/README.md#saverevisionusingget)
* [saveRevisionUsingPOST](docs/sdk/README.md#saverevisionusingpost)

### [author](docs/author/README.md)

* [createAuthorIfNotExistsForUsingGET](docs/author/README.md#createauthorifnotexistsforusingget) - this functions helps you to map your application author ids to Etherpad author ids
* [createAuthorIfNotExistsForUsingPOST](docs/author/README.md#createauthorifnotexistsforusingpost) - this functions helps you to map your application author ids to Etherpad author ids
* [createAuthorUsingGET](docs/author/README.md#createauthorusingget) - creates a new author
* [createAuthorUsingPOST](docs/author/README.md#createauthorusingpost) - creates a new author
* [getAuthorNameUsingGET](docs/author/README.md#getauthornameusingget) - Returns the Author Name of the author
* [getAuthorNameUsingPOST](docs/author/README.md#getauthornameusingpost) - Returns the Author Name of the author
* [listPadsOfAuthorUsingGET](docs/author/README.md#listpadsofauthorusingget) - returns an array of all pads this author contributed to
* [listPadsOfAuthorUsingPOST](docs/author/README.md#listpadsofauthorusingpost) - returns an array of all pads this author contributed to
* [listSessionsOfAuthorUsingGET](docs/author/README.md#listsessionsofauthorusingget) - returns all sessions of an author
* [listSessionsOfAuthorUsingPOST](docs/author/README.md#listsessionsofauthorusingpost) - returns all sessions of an author

### [group](docs/group/README.md)

* [createGroupIfNotExistsForUsingGET](docs/group/README.md#creategroupifnotexistsforusingget) - this functions helps you to map your application group ids to Etherpad group ids
* [createGroupIfNotExistsForUsingPOST](docs/group/README.md#creategroupifnotexistsforusingpost) - this functions helps you to map your application group ids to Etherpad group ids
* [createGroupPadUsingGET](docs/group/README.md#creategrouppadusingget) - creates a new pad in this group
* [createGroupPadUsingPOST](docs/group/README.md#creategrouppadusingpost) - creates a new pad in this group
* [createGroupUsingGET](docs/group/README.md#creategroupusingget) - creates a new group
* [createGroupUsingPOST](docs/group/README.md#creategroupusingpost) - creates a new group
* [deleteGroupUsingGET](docs/group/README.md#deletegroupusingget) - deletes a group
* [deleteGroupUsingPOST](docs/group/README.md#deletegroupusingpost) - deletes a group
* [listAllGroupsUsingGET](docs/group/README.md#listallgroupsusingget)
* [listAllGroupsUsingPOST](docs/group/README.md#listallgroupsusingpost)
* [listPadsUsingGET](docs/group/README.md#listpadsusingget) - returns all pads of this group
* [listPadsUsingPOST](docs/group/README.md#listpadsusingpost) - returns all pads of this group
* [listSessionsOfGroupUsingGET](docs/group/README.md#listsessionsofgroupusingget)
* [listSessionsOfGroupUsingPOST](docs/group/README.md#listsessionsofgroupusingpost)

### [pad](docs/pad/README.md)

* [appendChatMessageUsingGET](docs/pad/README.md#appendchatmessageusingget) - appends a chat message
* [appendChatMessageUsingPOST](docs/pad/README.md#appendchatmessageusingpost) - appends a chat message
* [checkTokenUsingGET](docs/pad/README.md#checktokenusingget) - returns ok when the current api token is valid
* [checkTokenUsingPOST](docs/pad/README.md#checktokenusingpost) - returns ok when the current api token is valid
* [createDiffHTMLUsingGET](docs/pad/README.md#creatediffhtmlusingget)
* [createDiffHTMLUsingPOST](docs/pad/README.md#creatediffhtmlusingpost)
* [createPadUsingGET](docs/pad/README.md#createpadusingget) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [createPadUsingPOST](docs/pad/README.md#createpadusingpost) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [deletePadUsingGET](docs/pad/README.md#deletepadusingget) - deletes a pad
* [deletePadUsingPOST](docs/pad/README.md#deletepadusingpost) - deletes a pad
* [getChatHeadUsingGET](docs/pad/README.md#getchatheadusingget) - returns the chatHead (chat-message) of the pad
* [getChatHeadUsingPOST](docs/pad/README.md#getchatheadusingpost) - returns the chatHead (chat-message) of the pad
* [getChatHistoryUsingGET](docs/pad/README.md#getchathistoryusingget) - returns the chat history
* [getChatHistoryUsingPOST](docs/pad/README.md#getchathistoryusingpost) - returns the chat history
* [getHTMLUsingGET](docs/pad/README.md#gethtmlusingget) - returns the text of a pad formatted as HTML
* [getHTMLUsingPOST](docs/pad/README.md#gethtmlusingpost) - returns the text of a pad formatted as HTML
* [getLastEditedUsingGET](docs/pad/README.md#getlasteditedusingget) - returns the timestamp of the last revision of the pad
* [getLastEditedUsingPOST](docs/pad/README.md#getlasteditedusingpost) - returns the timestamp of the last revision of the pad
* [getPublicStatusUsingGET](docs/pad/README.md#getpublicstatususingget) - return true of false
* [getPublicStatusUsingPOST](docs/pad/README.md#getpublicstatususingpost) - return true of false
* [getReadOnlyIDUsingGET](docs/pad/README.md#getreadonlyidusingget) - returns the read only link of a pad
* [getReadOnlyIDUsingPOST](docs/pad/README.md#getreadonlyidusingpost) - returns the read only link of a pad
* [getRevisionsCountUsingGET](docs/pad/README.md#getrevisionscountusingget) - returns the number of revisions of this pad
* [getRevisionsCountUsingPOST](docs/pad/README.md#getrevisionscountusingpost) - returns the number of revisions of this pad
* [getTextUsingGET](docs/pad/README.md#gettextusingget) - returns the text of a pad
* [getTextUsingPOST](docs/pad/README.md#gettextusingpost) - returns the text of a pad
* [listAllPadsUsingGET](docs/pad/README.md#listallpadsusingget) - list all the pads
* [listAllPadsUsingPOST](docs/pad/README.md#listallpadsusingpost) - list all the pads
* [listAuthorsOfPadUsingGET](docs/pad/README.md#listauthorsofpadusingget) - returns an array of authors who contributed to this pad
* [listAuthorsOfPadUsingPOST](docs/pad/README.md#listauthorsofpadusingpost) - returns an array of authors who contributed to this pad
* [padUsersCountUsingGET](docs/pad/README.md#paduserscountusingget) - returns the number of user that are currently editing this pad
* [padUsersCountUsingPOST](docs/pad/README.md#paduserscountusingpost) - returns the number of user that are currently editing this pad
* [padUsersUsingGET](docs/pad/README.md#padusersusingget) - returns the list of users that are currently editing this pad
* [padUsersUsingPOST](docs/pad/README.md#padusersusingpost) - returns the list of users that are currently editing this pad
* [sendClientsMessageUsingGET](docs/pad/README.md#sendclientsmessageusingget) - sends a custom message of type msg to the pad
* [sendClientsMessageUsingPOST](docs/pad/README.md#sendclientsmessageusingpost) - sends a custom message of type msg to the pad
* [setHTMLUsingGET](docs/pad/README.md#sethtmlusingget) - sets the text of a pad with HTML
* [setHTMLUsingPOST](docs/pad/README.md#sethtmlusingpost) - sets the text of a pad with HTML
* [setPublicStatusUsingGET](docs/pad/README.md#setpublicstatususingget) - sets a boolean for the public status of a pad
* [setPublicStatusUsingPOST](docs/pad/README.md#setpublicstatususingpost) - sets a boolean for the public status of a pad
* [setTextUsingGET](docs/pad/README.md#settextusingget) - sets the text of a pad
* [setTextUsingPOST](docs/pad/README.md#settextusingpost) - sets the text of a pad

### [session](docs/session/README.md)

* [createSessionUsingGET](docs/session/README.md#createsessionusingget) - creates a new session. validUntil is an unix timestamp in seconds
* [createSessionUsingPOST](docs/session/README.md#createsessionusingpost) - creates a new session. validUntil is an unix timestamp in seconds
* [deleteSessionUsingGET](docs/session/README.md#deletesessionusingget) - deletes a session
* [deleteSessionUsingPOST](docs/session/README.md#deletesessionusingpost) - deletes a session
* [getSessionInfoUsingGET](docs/session/README.md#getsessioninfousingget) - returns informations about a session
* [getSessionInfoUsingPOST](docs/session/README.md#getsessioninfousingpost) - returns informations about a session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
