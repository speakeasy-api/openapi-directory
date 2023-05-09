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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Assignment.DeleteAssignmentsID(ctx, operations.DeleteAssignmentsIDRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
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


### [Assignment](docs/assignment/README.md)

* [DeleteAssignmentsID](docs/assignment/README.md#deleteassignmentsid) - Delete this assignment and all of it's contributions
* [GetAssignments](docs/assignment/README.md#getassignments) - List assignments
* [GetAssignmentsID](docs/assignment/README.md#getassignmentsid) - Get a single assigment by id
* [PostAssignments](docs/assignment/README.md#postassignments) - Create a new assignment

### [Auth](docs/auth/README.md)

* [GetCredentials](docs/auth/README.md#getcredentials) - List the credentials associated with the authenticated user.
* [GetScopes](docs/auth/README.md#getscopes) - Scopes
* [PostVerify](docs/auth/README.md#postverify) - Verify token and return details of the owning user

### [Contribution](docs/contribution/README.md)

* [DeleteContributionsID](docs/contribution/README.md#deletecontributionsid) - Delete this contribution
* [GetContributionRefinementTypes](docs/contribution/README.md#getcontributionrefinementtypes) - List valid contribution refinement types
* [GetContributionRefinements](docs/contribution/README.md#getcontributionrefinements) - List contribution refinement options
* [GetContributions](docs/contribution/README.md#getcontributions) - List contributions
* [GetContributionsID](docs/contribution/README.md#getcontributionsid) - Get a single contribution by id
* [GetContributionsIDLikes](docs/contribution/README.md#getcontributionsidlikes) - List users who have liked this contributions
* [GetExportsID](docs/contribution/README.md#getexportsid) - Get a single export job; poll to follow export progress.
* [PostContributions](docs/contribution/README.md#postcontributions) - Create a new contribution
* [PostContributionsIDFlag](docs/contribution/README.md#postcontributionsidflag) - Raise a flag against this contribution
* [PostContributionsIDLike](docs/contribution/README.md#postcontributionsidlike) - Allows a user to mark a contribution as liked
* [PostContributionsIDModerate](docs/contribution/README.md#postcontributionsidmoderate) - Perform a moderation action on this contribution
* [PostExport](docs/contribution/README.md#postexport) - Export contributions.
* [PostExportSummary](docs/contribution/README.md#postexportsummary) - Export contributions preflight summary.

### [Form](docs/form/README.md)

* [DeleteFormsID](docs/form/README.md#deleteformsid) - Delete this form and all of it's responses.
* [GetFormResponses](docs/form/README.md#getformresponses) - List form responses
* [GetFormResponsesID](docs/form/README.md#getformresponsesid) - Get a single form response by id
* [GetForms](docs/form/README.md#getforms) - List forms
* [GetFormsID](docs/form/README.md#getformsid) - Get a single form by id
* [PostFormResponses](docs/form/README.md#postformresponses) - Submit a response to a form
* [PostForms](docs/form/README.md#postforms) - Create a form

### [Info](docs/info/README.md)

* [GetArtifactFormats](docs/info/README.md#getartifactformats) - Artifact formats
* [GetChangeLog](docs/info/README.md#getchangelog) - Recent changes
* [GetEventTypes](docs/info/README.md#geteventtypes) - Event types

### [Media](docs/media/README.md)

* [PostMedia](docs/media/README.md#postmedia) - Submit a new media file

### [Notifications](docs/notifications/README.md)

* [GetNotificationsContributionsIDPreview](docs/notifications/README.md#getnotificationscontributionsidpreview)

### [Subscriptions](docs/subscriptions/README.md)

* [DeleteSubscriptionsID](docs/subscriptions/README.md#deletesubscriptionsid) - Delete a subscription.
* [GetSubscriptionTypes](docs/subscriptions/README.md#getsubscriptiontypes) - Subscription types
* [GetSubscriptions](docs/subscriptions/README.md#getsubscriptions) - List subscriptions for the authorised user.

### [Tag](docs/tag/README.md)

* [GetTags](docs/tag/README.md#gettags) - List tags
* [GetTagsID](docs/tag/README.md#gettagsid) - Retrieve a single tag by id
* [GetTagsets](docs/tag/README.md#gettagsets) - List tag sets
* [GetTagsetsID](docs/tag/README.md#gettagsetsid) - Retrieve a single tag set by id
* [PostTags](docs/tag/README.md#posttags) - Create a new tag
* [PostTagsets](docs/tag/README.md#posttagsets) - Create a new tag set

### [User](docs/user/README.md)

* [GetUsers](docs/user/README.md#getusers) - List users
* [GetUsersID](docs/user/README.md#getusersid) - Retrieve a single user by id
* [GetUsersIDLinkedType](docs/user/README.md#getusersidlinkedtype) - Retrieve a users linked profile by type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
