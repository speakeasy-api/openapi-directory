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
use \OpenAPI\OpenAPI\Models\Operations\AssociateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTeamMemberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTeamMemberRequest();
    $request->associateTeamMemberRequest = new AssociateTeamMemberRequest();
    $request->associateTeamMemberRequest->clientRequestToken = 'corrupti';
    $request->associateTeamMemberRequest->projectId = 'provident';
    $request->associateTeamMemberRequest->projectRole = 'distinctio';
    $request->associateTeamMemberRequest->remoteAccessAllowed = false;
    $request->associateTeamMemberRequest->userArn = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AssociateTeamMemberXAmzTargetEnum::CODE_STAR20170419_ASSOCIATE_TEAM_MEMBER;

    $response = $sdk->associateTeamMember($request);

    if ($response->associateTeamMemberResult !== null) {
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

* [associateTeamMember](docs/sdk/README.md#associateteammember) - Adds an IAM user to the team for an AWS CodeStar project.
* [createProject](docs/sdk/README.md#createproject) - Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
* [createUserProfile](docs/sdk/README.md#createuserprofile) - Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
* [deleteProject](docs/sdk/README.md#deleteproject) - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
* [deleteUserProfile](docs/sdk/README.md#deleteuserprofile) - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
* [describeProject](docs/sdk/README.md#describeproject) - Describes a project and its resources.
* [describeUserProfile](docs/sdk/README.md#describeuserprofile) - Describes a user in AWS CodeStar and the user attributes across all projects.
* [disassociateTeamMember](docs/sdk/README.md#disassociateteammember) - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
* [listProjects](docs/sdk/README.md#listprojects) - Lists all projects in AWS CodeStar associated with your AWS account.
* [listResources](docs/sdk/README.md#listresources) - Lists resources associated with a project in AWS CodeStar.
* [listTagsForProject](docs/sdk/README.md#listtagsforproject) - Gets the tags for a project.
* [listTeamMembers](docs/sdk/README.md#listteammembers) - Lists all team members associated with a project.
* [listUserProfiles](docs/sdk/README.md#listuserprofiles) - Lists all the user profiles configured for your AWS account in AWS CodeStar.
* [tagProject](docs/sdk/README.md#tagproject) - Adds tags to a project.
* [untagProject](docs/sdk/README.md#untagproject) - Removes tags from a project.
* [updateProject](docs/sdk/README.md#updateproject) - Updates a project in AWS CodeStar.
* [updateTeamMember](docs/sdk/README.md#updateteammember) - Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
* [updateUserProfile](docs/sdk/README.md#updateuserprofile) - Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
