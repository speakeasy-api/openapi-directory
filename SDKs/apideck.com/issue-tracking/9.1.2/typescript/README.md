# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/issue-tracking/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/issue-tracking/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CollectionsAllRequest,
  CollectionsAllResponse
} from "openapi/dist/sdk/models/operations";
import {
  CollectionsSortByEnum,
  SortDirectionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CollectionsAllRequest = {
  cursor: "corrupti",
  fields: "provident",
  limit: 715190,
  raw: false,
  sort: {
    by: CollectionsSortByEnum.Name,
    direction: SortDirectionEnum.Desc,
  },
  xApideckAppId: "unde",
  xApideckConsumerId: "nulla",
  xApideckServiceId: "corrupti",
};

sdk.collections.collectionsAll(req).then((res: CollectionsAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### collections

* `collectionsAll` - List Collections
* `collectionsOne` - Get Collection

### comments

* `collectionTicketCommentsAdd` - Create Comment
* `collectionTicketCommentsAll` - List Comments
* `collectionTicketCommentsDelete` - Delete Comment
* `collectionTicketCommentsOne` - Get Comment
* `collectionTicketCommentsUpdate` - Update Comment

### tags

* `collectionTagsAll` - List Tags

### tickets

* `collectionTicketsAdd` - Create Ticket
* `collectionTicketsAll` - List Tickets
* `collectionTicketsDelete` - Delete Ticket
* `collectionTicketsOne` - Get Ticket
* `collectionTicketsUpdate` - Update Ticket

### users

* `collectionUsersAll` - List Users
* `collectionUsersOne` - Get user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

