# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/etherpad.local/1.2.15/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/etherpad.local/1.2.15/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AppendTextUsingGETRequest,
  AppendTextUsingGETResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: AppendTextUsingGETRequest = {
  padID: "corrupti",
  text: "provident",
};

sdk.appendTextUsingGET(req).then((res: AppendTextUsingGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `appendTextUsingGET`
* `appendTextUsingPOST`
* `copyPadUsingGET`
* `copyPadUsingPOST`
* `copyPadWithoutHistoryUsingGET`
* `copyPadWithoutHistoryUsingPOST`
* `getAttributePoolUsingGET`
* `getAttributePoolUsingPOST`
* `getPadIDUsingGET`
* `getPadIDUsingPOST`
* `getRevisionChangesetUsingGET`
* `getRevisionChangesetUsingPOST`
* `getSavedRevisionsCountUsingGET`
* `getSavedRevisionsCountUsingPOST`
* `getStatsUsingGET`
* `getStatsUsingPOST`
* `listSavedRevisionsUsingGET`
* `listSavedRevisionsUsingPOST`
* `movePadUsingGET`
* `movePadUsingPOST`
* `restoreRevisionUsingGET`
* `restoreRevisionUsingPOST`
* `saveRevisionUsingGET`
* `saveRevisionUsingPOST`

### author

* `createAuthorIfNotExistsForUsingGET` - this functions helps you to map your application author ids to Etherpad author ids
* `createAuthorIfNotExistsForUsingPOST` - this functions helps you to map your application author ids to Etherpad author ids
* `createAuthorUsingGET` - creates a new author
* `createAuthorUsingPOST` - creates a new author
* `getAuthorNameUsingGET` - Returns the Author Name of the author
* `getAuthorNameUsingPOST` - Returns the Author Name of the author
* `listPadsOfAuthorUsingGET` - returns an array of all pads this author contributed to
* `listPadsOfAuthorUsingPOST` - returns an array of all pads this author contributed to
* `listSessionsOfAuthorUsingGET` - returns all sessions of an author
* `listSessionsOfAuthorUsingPOST` - returns all sessions of an author

### group

* `createGroupIfNotExistsForUsingGET` - this functions helps you to map your application group ids to Etherpad group ids
* `createGroupIfNotExistsForUsingPOST` - this functions helps you to map your application group ids to Etherpad group ids
* `createGroupPadUsingGET` - creates a new pad in this group
* `createGroupPadUsingPOST` - creates a new pad in this group
* `createGroupUsingGET` - creates a new group
* `createGroupUsingPOST` - creates a new group
* `deleteGroupUsingGET` - deletes a group
* `deleteGroupUsingPOST` - deletes a group
* `listAllGroupsUsingGET`
* `listAllGroupsUsingPOST`
* `listPadsUsingGET` - returns all pads of this group
* `listPadsUsingPOST` - returns all pads of this group
* `listSessionsOfGroupUsingGET`
* `listSessionsOfGroupUsingPOST`

### pad

* `appendChatMessageUsingGET` - appends a chat message
* `appendChatMessageUsingPOST` - appends a chat message
* `checkTokenUsingGET` - returns ok when the current api token is valid
* `checkTokenUsingPOST` - returns ok when the current api token is valid
* `createDiffHTMLUsingGET`
* `createDiffHTMLUsingPOST`
* `createPadUsingGET` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `createPadUsingPOST` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `deletePadUsingGET` - deletes a pad
* `deletePadUsingPOST` - deletes a pad
* `getChatHeadUsingGET` - returns the chatHead (chat-message) of the pad
* `getChatHeadUsingPOST` - returns the chatHead (chat-message) of the pad
* `getChatHistoryUsingGET` - returns the chat history
* `getChatHistoryUsingPOST` - returns the chat history
* `getHTMLUsingGET` - returns the text of a pad formatted as HTML
* `getHTMLUsingPOST` - returns the text of a pad formatted as HTML
* `getLastEditedUsingGET` - returns the timestamp of the last revision of the pad
* `getLastEditedUsingPOST` - returns the timestamp of the last revision of the pad
* `getPublicStatusUsingGET` - return true of false
* `getPublicStatusUsingPOST` - return true of false
* `getReadOnlyIDUsingGET` - returns the read only link of a pad
* `getReadOnlyIDUsingPOST` - returns the read only link of a pad
* `getRevisionsCountUsingGET` - returns the number of revisions of this pad
* `getRevisionsCountUsingPOST` - returns the number of revisions of this pad
* `getTextUsingGET` - returns the text of a pad
* `getTextUsingPOST` - returns the text of a pad
* `listAllPadsUsingGET` - list all the pads
* `listAllPadsUsingPOST` - list all the pads
* `listAuthorsOfPadUsingGET` - returns an array of authors who contributed to this pad
* `listAuthorsOfPadUsingPOST` - returns an array of authors who contributed to this pad
* `padUsersCountUsingGET` - returns the number of user that are currently editing this pad
* `padUsersCountUsingPOST` - returns the number of user that are currently editing this pad
* `padUsersUsingGET` - returns the list of users that are currently editing this pad
* `padUsersUsingPOST` - returns the list of users that are currently editing this pad
* `sendClientsMessageUsingGET` - sends a custom message of type msg to the pad
* `sendClientsMessageUsingPOST` - sends a custom message of type msg to the pad
* `setHTMLUsingGET` - sets the text of a pad with HTML
* `setHTMLUsingPOST` - sets the text of a pad with HTML
* `setPublicStatusUsingGET` - sets a boolean for the public status of a pad
* `setPublicStatusUsingPOST` - sets a boolean for the public status of a pad
* `setTextUsingGET` - sets the text of a pad
* `setTextUsingPOST` - sets the text of a pad

### session

* `createSessionUsingGET` - creates a new session. validUntil is an unix timestamp in seconds
* `createSessionUsingPOST` - creates a new session. validUntil is an unix timestamp in seconds
* `deleteSessionUsingGET` - deletes a session
* `deleteSessionUsingPOST` - deletes a session
* `getSessionInfoUsingGET` - returns informations about a session
* `getSessionInfoUsingPOST` - returns informations about a session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

