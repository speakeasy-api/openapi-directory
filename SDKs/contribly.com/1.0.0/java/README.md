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
import org.openapis.openapi.models.operations.DeleteAssignmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteAssignmentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAssignmentsIdRequest req = new DeleteAssignmentsIdRequest("corrupti");            

            DeleteAssignmentsIdResponse res = sdk.assignment.deleteAssignmentsId(req);

            if (res.statusCode == 200) {
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


### [assignment](docs/assignment/README.md)

* [deleteAssignmentsId](docs/assignment/README.md#deleteassignmentsid) - Delete this assignment and all of it's contributions
* [getAssignments](docs/assignment/README.md#getassignments) - List assignments
* [getAssignmentsId](docs/assignment/README.md#getassignmentsid) - Get a single assigment by id
* [postAssignments](docs/assignment/README.md#postassignments) - Create a new assignment

### [auth](docs/auth/README.md)

* [getCredentials](docs/auth/README.md#getcredentials) - List the credentials associated with the authenticated user.
* [getScopes](docs/auth/README.md#getscopes) - Scopes
* [postVerify](docs/auth/README.md#postverify) - Verify token and return details of the owning user

### [contribution](docs/contribution/README.md)

* [deleteContributionsId](docs/contribution/README.md#deletecontributionsid) - Delete this contribution
* [getContributionRefinementTypes](docs/contribution/README.md#getcontributionrefinementtypes) - List valid contribution refinement types
* [getContributionRefinements](docs/contribution/README.md#getcontributionrefinements) - List contribution refinement options
* [getContributions](docs/contribution/README.md#getcontributions) - List contributions
* [getContributionsId](docs/contribution/README.md#getcontributionsid) - Get a single contribution by id
* [getContributionsIdLikes](docs/contribution/README.md#getcontributionsidlikes) - List users who have liked this contributions
* [getExportsId](docs/contribution/README.md#getexportsid) - Get a single export job; poll to follow export progress.
* [postContributions](docs/contribution/README.md#postcontributions) - Create a new contribution
* [postContributionsIdFlag](docs/contribution/README.md#postcontributionsidflag) - Raise a flag against this contribution
* [postContributionsIdLike](docs/contribution/README.md#postcontributionsidlike) - Allows a user to mark a contribution as liked
* [postContributionsIdModerate](docs/contribution/README.md#postcontributionsidmoderate) - Perform a moderation action on this contribution
* [postExport](docs/contribution/README.md#postexport) - Export contributions.
* [postExportSummary](docs/contribution/README.md#postexportsummary) - Export contributions preflight summary.

### [form](docs/form/README.md)

* [deleteFormsId](docs/form/README.md#deleteformsid) - Delete this form and all of it's responses.
* [getFormResponses](docs/form/README.md#getformresponses) - List form responses
* [getFormResponsesId](docs/form/README.md#getformresponsesid) - Get a single form response by id
* [getForms](docs/form/README.md#getforms) - List forms
* [getFormsId](docs/form/README.md#getformsid) - Get a single form by id
* [postFormResponses](docs/form/README.md#postformresponses) - Submit a response to a form
* [postForms](docs/form/README.md#postforms) - Create a form

### [info](docs/info/README.md)

* [getArtifactFormats](docs/info/README.md#getartifactformats) - Artifact formats
* [getChangeLog](docs/info/README.md#getchangelog) - Recent changes
* [getEventTypes](docs/info/README.md#geteventtypes) - Event types

### [media](docs/media/README.md)

* [postMedia](docs/media/README.md#postmedia) - Submit a new media file

### [notifications](docs/notifications/README.md)

* [getNotificationsContributionsIdPreview](docs/notifications/README.md#getnotificationscontributionsidpreview)

### [subscriptions](docs/subscriptions/README.md)

* [deleteSubscriptionsId](docs/subscriptions/README.md#deletesubscriptionsid) - Delete a subscription.
* [getSubscriptionTypes](docs/subscriptions/README.md#getsubscriptiontypes) - Subscription types
* [getSubscriptions](docs/subscriptions/README.md#getsubscriptions) - List subscriptions for the authorised user.

### [tag](docs/tag/README.md)

* [getTags](docs/tag/README.md#gettags) - List tags
* [getTagsId](docs/tag/README.md#gettagsid) - Retrieve a single tag by id
* [getTagsets](docs/tag/README.md#gettagsets) - List tag sets
* [getTagsetsId](docs/tag/README.md#gettagsetsid) - Retrieve a single tag set by id
* [postTags](docs/tag/README.md#posttags) - Create a new tag
* [postTagsets](docs/tag/README.md#posttagsets) - Create a new tag set

### [user](docs/user/README.md)

* [getUsers](docs/user/README.md#getusers) - List users
* [getUsersId](docs/user/README.md#getusersid) - Retrieve a single user by id
* [getUsersIdLinkedType](docs/user/README.md#getusersidlinkedtype) - Retrieve a users linked profile by type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
