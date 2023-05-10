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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessTokenRequestBody();
    $request->expiresTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-25T05:21:43.948Z');
    $request->name = 'Ellis Mitchell';

    $response = $sdk->createAccessToken($request);

    if ($response->createAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAccessToken](docs/sdk/README.md#createaccesstoken) - Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
* [createDevEnvironment](docs/sdk/README.md#createdevenvironment) - <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
* [createProject](docs/sdk/README.md#createproject) - Creates a project in a specified space.
* [createSourceRepositoryBranch](docs/sdk/README.md#createsourcerepositorybranch) - <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
* [deleteAccessToken](docs/sdk/README.md#deleteaccesstoken) - Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
* [deleteDevEnvironment](docs/sdk/README.md#deletedevenvironment) - Deletes a Dev Environment. 
* [getDevEnvironment](docs/sdk/README.md#getdevenvironment) - Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
* [getProject](docs/sdk/README.md#getproject) - Returns information about a project.
* [getSourceRepositoryCloneUrls](docs/sdk/README.md#getsourcerepositorycloneurls) - Returns information about the URLs that can be used with a Git client to clone a source repository.
* [getSpace](docs/sdk/README.md#getspace) - Returns information about an space.
* [getSubscription](docs/sdk/README.md#getsubscription) - Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
* [getUserDetails](docs/sdk/README.md#getuserdetails) - Returns information about a user. 
* [listAccessTokens](docs/sdk/README.md#listaccesstokens) - Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.
* [listDevEnvironments](docs/sdk/README.md#listdevenvironments) - Retrieves a list of Dev Environments in a project.
* [listEventLogs](docs/sdk/README.md#listeventlogs) - Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
* [listProjects](docs/sdk/README.md#listprojects) - Retrieves a list of projects.
* [listSourceRepositories](docs/sdk/README.md#listsourcerepositories) - Retrieves a list of source repositories in a project.
* [listSourceRepositoryBranches](docs/sdk/README.md#listsourcerepositorybranches) - Retrieves a list of branches in a specified source repository.
* [listSpaces](docs/sdk/README.md#listspaces) - Retrieves a list of spaces.
* [startDevEnvironment](docs/sdk/README.md#startdevenvironment) - Starts a specified Dev Environment and puts it into an active state. 
* [startDevEnvironmentSession](docs/sdk/README.md#startdevenvironmentsession) - Starts a session for a specified Dev Environment.
* [stopDevEnvironment](docs/sdk/README.md#stopdevenvironment) - Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
* [stopDevEnvironmentSession](docs/sdk/README.md#stopdevenvironmentsession) - Stops a session for a specified Dev Environment.
* [updateDevEnvironment](docs/sdk/README.md#updatedevenvironment) - Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
* [verifySession](docs/sdk/README.md#verifysession) - Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
