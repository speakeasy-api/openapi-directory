# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AppendTextUsingGetRequest req = new AppendTextUsingGetRequest() {{
                queryParams = new AppendTextUsingGetQueryParams() {{
                    padID = "autem";
                    text = "odit";
                }};
            }};

            AppendTextUsingGetResponse res = sdk.appendTextUsingGet(req);

            if (res.appendTextUsingGET200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `appendTextUsingGet`
* `appendTextUsingPost`
* `copyPadUsingGet`
* `copyPadUsingPost`
* `copyPadWithoutHistoryUsingGet`
* `copyPadWithoutHistoryUsingPost`
* `getAttributePoolUsingGet`
* `getAttributePoolUsingPost`
* `getPadIdUsingGet`
* `getPadIdUsingPost`
* `getRevisionChangesetUsingGet`
* `getRevisionChangesetUsingPost`
* `getSavedRevisionsCountUsingGet`
* `getSavedRevisionsCountUsingPost`
* `getStatsUsingGet`
* `getStatsUsingPost`
* `listSavedRevisionsUsingGet`
* `listSavedRevisionsUsingPost`
* `movePadUsingGet`
* `movePadUsingPost`
* `restoreRevisionUsingGet`
* `restoreRevisionUsingPost`
* `saveRevisionUsingGet`
* `saveRevisionUsingPost`

### author

* `createAuthorIfNotExistsForUsingGet` - this functions helps you to map your application author ids to Etherpad author ids
* `createAuthorIfNotExistsForUsingPost` - this functions helps you to map your application author ids to Etherpad author ids
* `createAuthorUsingGet` - creates a new author
* `createAuthorUsingPost` - creates a new author
* `getAuthorNameUsingGet` - Returns the Author Name of the author
* `getAuthorNameUsingPost` - Returns the Author Name of the author
* `listPadsOfAuthorUsingGet` - returns an array of all pads this author contributed to
* `listPadsOfAuthorUsingPost` - returns an array of all pads this author contributed to
* `listSessionsOfAuthorUsingGet` - returns all sessions of an author
* `listSessionsOfAuthorUsingPost` - returns all sessions of an author

### group

* `createGroupIfNotExistsForUsingGet` - this functions helps you to map your application group ids to Etherpad group ids
* `createGroupIfNotExistsForUsingPost` - this functions helps you to map your application group ids to Etherpad group ids
* `createGroupPadUsingGet` - creates a new pad in this group
* `createGroupPadUsingPost` - creates a new pad in this group
* `createGroupUsingGet` - creates a new group
* `createGroupUsingPost` - creates a new group
* `deleteGroupUsingGet` - deletes a group
* `deleteGroupUsingPost` - deletes a group
* `listAllGroupsUsingGet`
* `listAllGroupsUsingPost`
* `listPadsUsingGet` - returns all pads of this group
* `listPadsUsingPost` - returns all pads of this group
* `listSessionsOfGroupUsingGet`
* `listSessionsOfGroupUsingPost`

### pad

* `appendChatMessageUsingGet` - appends a chat message
* `appendChatMessageUsingPost` - appends a chat message
* `checkTokenUsingGet` - returns ok when the current api token is valid
* `checkTokenUsingPost` - returns ok when the current api token is valid
* `createDiffHtmlUsingGet`
* `createDiffHtmlUsingPost`
* `createPadUsingGet` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `createPadUsingPost` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `deletePadUsingGet` - deletes a pad
* `deletePadUsingPost` - deletes a pad
* `getChatHeadUsingGet` - returns the chatHead (chat-message) of the pad
* `getChatHeadUsingPost` - returns the chatHead (chat-message) of the pad
* `getChatHistoryUsingGet` - returns the chat history
* `getChatHistoryUsingPost` - returns the chat history
* `getHtmlUsingGet` - returns the text of a pad formatted as HTML
* `getHtmlUsingPost` - returns the text of a pad formatted as HTML
* `getLastEditedUsingGet` - returns the timestamp of the last revision of the pad
* `getLastEditedUsingPost` - returns the timestamp of the last revision of the pad
* `getPublicStatusUsingGet` - return true of false
* `getPublicStatusUsingPost` - return true of false
* `getReadOnlyIdUsingGet` - returns the read only link of a pad
* `getReadOnlyIdUsingPost` - returns the read only link of a pad
* `getRevisionsCountUsingGet` - returns the number of revisions of this pad
* `getRevisionsCountUsingPost` - returns the number of revisions of this pad
* `getTextUsingGet` - returns the text of a pad
* `getTextUsingPost` - returns the text of a pad
* `listAllPadsUsingGet` - list all the pads
* `listAllPadsUsingPost` - list all the pads
* `listAuthorsOfPadUsingGet` - returns an array of authors who contributed to this pad
* `listAuthorsOfPadUsingPost` - returns an array of authors who contributed to this pad
* `padUsersCountUsingGet` - returns the number of user that are currently editing this pad
* `padUsersCountUsingPost` - returns the number of user that are currently editing this pad
* `padUsersUsingGet` - returns the list of users that are currently editing this pad
* `padUsersUsingPost` - returns the list of users that are currently editing this pad
* `sendClientsMessageUsingGet` - sends a custom message of type msg to the pad
* `sendClientsMessageUsingPost` - sends a custom message of type msg to the pad
* `setHtmlUsingGet` - sets the text of a pad with HTML
* `setHtmlUsingPost` - sets the text of a pad with HTML
* `setPublicStatusUsingGet` - sets a boolean for the public status of a pad
* `setPublicStatusUsingPost` - sets a boolean for the public status of a pad
* `setTextUsingGet` - sets the text of a pad
* `setTextUsingPost` - sets the text of a pad

### session

* `createSessionUsingGet` - creates a new session. validUntil is an unix timestamp in seconds
* `createSessionUsingPost` - creates a new session. validUntil is an unix timestamp in seconds
* `deleteSessionUsingGet` - deletes a session
* `deleteSessionUsingPost` - deletes a session
* `getSessionInfoUsingGet` - returns informations about a session
* `getSessionInfoUsingPost` - returns informations about a session

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
