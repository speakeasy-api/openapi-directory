# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/contribly.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/contribly.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAssignmentsIdRequest,
  DeleteAssignmentsIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAssignmentsIdRequest = {
  id: "corrupti",
};

sdk.assignment.deleteAssignmentsId(req).then((res: DeleteAssignmentsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### assignment

* `deleteAssignmentsId` - Delete this assignment and all of it's contributions
* `getAssignments` - List assignments
* `getAssignmentsId` - Get a single assigment by id
* `postAssignments` - Create a new assignment

### auth

* `getCredentials` - List the credentials associated with the authenticated user.
* `getScopes` - Scopes
* `postVerify` - Verify token and return details of the owning user

### contribution

* `deleteContributionsId` - Delete this contribution
* `getContributionRefinementTypes` - List valid contribution refinement types
* `getContributionRefinements` - List contribution refinement options
* `getContributions` - List contributions
* `getContributionsId` - Get a single contribution by id
* `getContributionsIdLikes` - List users who have liked this contributions
* `getExportsId` - Get a single export job; poll to follow export progress.
* `postContributions` - Create a new contribution
* `postContributionsIdFlag` - Raise a flag against this contribution
* `postContributionsIdLike` - Allows a user to mark a contribution as liked
* `postContributionsIdModerate` - Perform a moderation action on this contribution
* `postExport` - Export contributions.
* `postExportSummary` - Export contributions preflight summary.

### form

* `deleteFormsId` - Delete this form and all of it's responses.
* `getFormResponses` - List form responses
* `getFormResponsesId` - Get a single form response by id
* `getForms` - List forms
* `getFormsId` - Get a single form by id
* `postFormResponses` - Submit a response to a form
* `postForms` - Create a form

### info

* `getArtifactFormats` - Artifact formats
* `getChangeLog` - Recent changes
* `getEventTypes` - Event types

### media

* `postMedia` - Submit a new media file

### notifications

* `getNotificationsContributionsIdPreview`

### subscriptions

* `deleteSubscriptionsId` - Delete a subscription.
* `getSubscriptionTypes` - Subscription types

### tag

* `getTags` - List tags
* `getTagsId` - Retrieve a single tag by id
* `getTagsets` - List tag sets
* `getTagsetsId` - Retrieve a single tag set by id
* `postTags` - Create a new tag
* `postTagsets` - Create a new tag set

### user

* `getUsers` - List users
* `getUsersId` - Retrieve a single user by id
* `getUsersIdLinkedType` - Retrieve a users linked profile by type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

