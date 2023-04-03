# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/contribly.com/1.0.0/go
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
    s := sdk.New()

    req := operations.DeleteAssignmentsIDRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Assignment.DeleteAssignmentsID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Assignment

* `DeleteAssignmentsID` - Delete this assignment and all of it's contributions
* `GetAssignments` - List assignments
* `GetAssignmentsID` - Get a single assigment by id
* `PostAssignments` - Create a new assignment

### Auth

* `GetCredentials` - List the credentials associated with the authenticated user.
* `GetScopes` - Scopes
* `PostVerify` - Verify token and return details of the owning user

### Contribution

* `DeleteContributionsID` - Delete this contribution
* `GetContributionRefinementTypes` - List valid contribution refinement types
* `GetContributionRefinements` - List contribution refinement options
* `GetContributions` - List contributions
* `GetContributionsID` - Get a single contribution by id
* `GetContributionsIDLikes` - List users who have liked this contributions
* `GetExportsID` - Get a single export job; poll to follow export progress.
* `PostContributions` - Create a new contribution
* `PostContributionsIDFlag` - Raise a flag against this contribution
* `PostContributionsIDLike` - Allows a user to mark a contribution as liked
* `PostContributionsIDModerate` - Perform a moderation action on this contribution
* `PostExport` - Export contributions.
* `PostExportSummary` - Export contributions preflight summary.

### Form

* `DeleteFormsID` - Delete this form and all of it's responses.
* `GetFormResponses` - List form responses
* `GetFormResponsesID` - Get a single form response by id
* `GetForms` - List forms
* `GetFormsID` - Get a single form by id
* `PostFormResponses` - Submit a response to a form
* `PostForms` - Create a form

### Info

* `GetArtifactFormats` - Artifact formats
* `GetChangeLog` - Recent changes
* `GetEventTypes` - Event types

### Media

* `PostMedia` - Submit a new media file

### Notifications

* `GetNotificationsContributionsIDPreview`

### Subscriptions

* `DeleteSubscriptionsID` - Delete a subscription.
* `GetSubscriptionTypes` - Subscription types
* `GetSubscriptions` - List subscriptions for the authorised user.

### Tag

* `GetTags` - List tags
* `GetTagsID` - Retrieve a single tag by id
* `GetTagsets` - List tag sets
* `GetTagsetsID` - Retrieve a single tag set by id
* `PostTags` - Create a new tag
* `PostTagsets` - Create a new tag set

### User

* `GetUsers` - List users
* `GetUsersID` - Retrieve a single user by id
* `GetUsersIDLinkedType` - Retrieve a users linked profile by type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
