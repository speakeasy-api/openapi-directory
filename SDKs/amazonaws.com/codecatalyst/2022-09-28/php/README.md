# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAccessToken` - Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user account. You use PATs to access Amazon CodeCatalyst resources such as source repositories from third-party applications like Git and integrated development environments (IDEs). For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
* `createDevEnvironment` - <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development Dev Environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
* `createProject` - Creates a project in a specified space.
* `createSourceRepositoryBranch` - <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
* `deleteAccessToken` - Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
* `deleteDevEnvironment` - Deletes a Dev Environment. 
* `getDevEnvironment` - Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
* `getProject` - Returns information about a project.
* `getSourceRepositoryCloneUrls` - Returns information about the URLs that can be used with a Git client to clone a source repository.
* `getSpace` - Returns information about an space.
* `getSubscription` - Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
* `getUserDetails` - Returns information about a user. 
* `listAccessTokens` - Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your user account.
* `listDevEnvironments` - Retrives a list of Dev Environments in a project.
* `listEventLogs` - Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
* `listProjects` - Retrieves a list of projects.
* `listSourceRepositories` - Retrieves a list of source repositories in a project.
* `listSourceRepositoryBranches` - Retrieves a list of branches in a specified source repository.
* `listSpaces` - Retrieves a list of spaces.
* `startDevEnvironment` - Starts a specified Dev Environment and puts it into an active state. 
* `startDevEnvironmentSession` - Starts a session for a specified Dev Environment.
* `stopDevEnvironment` - Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
* `stopDevEnvironmentSession` - Stops a session for a specified Dev Environment.
* `updateDevEnvironment` - Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
* `verifySession` - Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
