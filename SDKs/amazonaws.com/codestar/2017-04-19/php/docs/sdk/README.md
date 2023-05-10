# SDK

## Overview

<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar/>
### Available Operations

* [associateTeamMember](#associateteammember) - Adds an IAM user to the team for an AWS CodeStar project.
* [createProject](#createproject) - Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
* [createUserProfile](#createuserprofile) - Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
* [deleteProject](#deleteproject) - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
* [deleteUserProfile](#deleteuserprofile) - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
* [describeProject](#describeproject) - Describes a project and its resources.
* [describeUserProfile](#describeuserprofile) - Describes a user in AWS CodeStar and the user attributes across all projects.
* [disassociateTeamMember](#disassociateteammember) - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
* [listProjects](#listprojects) - Lists all projects in AWS CodeStar associated with your AWS account.
* [listResources](#listresources) - Lists resources associated with a project in AWS CodeStar.
* [listTagsForProject](#listtagsforproject) - Gets the tags for a project.
* [listTeamMembers](#listteammembers) - Lists all team members associated with a project.
* [listUserProfiles](#listuserprofiles) - Lists all the user profiles configured for your AWS account in AWS CodeStar.
* [tagProject](#tagproject) - Adds tags to a project.
* [untagProject](#untagproject) - Removes tags from a project.
* [updateProject](#updateproject) - Updates a project in AWS CodeStar.
* [updateTeamMember](#updateteammember) - Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
* [updateUserProfile](#updateuserprofile) - Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

## associateTeamMember

Adds an IAM user to the team for an AWS CodeStar project.

### Example Usage

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
    $request->associateTeamMemberRequest->clientRequestToken = 'suscipit';
    $request->associateTeamMemberRequest->projectId = 'iure';
    $request->associateTeamMemberRequest->projectRole = 'magnam';
    $request->associateTeamMemberRequest->remoteAccessAllowed = false;
    $request->associateTeamMemberRequest->userArn = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = AssociateTeamMemberXAmzTargetEnum::CODE_STAR20170419_ASSOCIATE_TEAM_MEMBER;

    $response = $sdk->sdk->associateTeamMember($request);

    if ($response->associateTeamMemberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\Code;
use \OpenAPI\OpenAPI\Models\Shared\CodeDestination;
use \OpenAPI\OpenAPI\Models\Shared\CodeCommitCodeDestination;
use \OpenAPI\OpenAPI\Models\Shared\GitHubCodeDestination;
use \OpenAPI\OpenAPI\Models\Shared\CodeSource;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\Toolchain;
use \OpenAPI\OpenAPI\Models\Shared\ToolchainSource;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->createProjectRequest = new CreateProjectRequest();
    $request->createProjectRequest->clientRequestToken = 'voluptatum';
    $request->createProjectRequest->description = 'iusto';
    $request->createProjectRequest->id = '96ed151a-05df-4c2d-9f7c-c78ca1ba928f';
    $request->createProjectRequest->name = 'optio';
    $request->createProjectRequest->sourceCode = [
        new Code(),
        new Code(),
        new Code(),
    ];
    $request->createProjectRequest->tags = [
        'commodi' => 'molestiae',
    ];
    $request->createProjectRequest->toolchain = new Toolchain();
    $request->createProjectRequest->toolchain->roleArn = 'modi';
    $request->createProjectRequest->toolchain->source = new ToolchainSource();
    $request->createProjectRequest->toolchain->source->s3 = new S3Location();
    $request->createProjectRequest->toolchain->source->s3->bucketKey = 'qui';
    $request->createProjectRequest->toolchain->source->s3->bucketName = 'impedit';
    $request->createProjectRequest->toolchain->stackParameters = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = CreateProjectXAmzTargetEnum::CODE_STAR20170419_CREATE_PROJECT;

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserProfile

Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserProfileRequest();
    $request->createUserProfileRequest = new CreateUserProfileRequest();
    $request->createUserProfileRequest->displayName = 'saepe';
    $request->createUserProfileRequest->emailAddress = 'fuga';
    $request->createUserProfileRequest->sshPublicKey = 'in';
    $request->createUserProfileRequest->userArn = 'corporis';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateUserProfileXAmzTargetEnum::CODE_STAR20170419_CREATE_USER_PROFILE;

    $response = $sdk->sdk->createUserProfile($request);

    if ($response->createUserProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->deleteProjectRequest = new DeleteProjectRequest();
    $request->deleteProjectRequest->clientRequestToken = 'est';
    $request->deleteProjectRequest->deleteStack = false;
    $request->deleteProjectRequest->id = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DeleteProjectXAmzTargetEnum::CODE_STAR20170419_DELETE_PROJECT;

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserProfile

Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserProfileRequest();
    $request->deleteUserProfileRequest = new DeleteUserProfileRequest();
    $request->deleteUserProfileRequest->userArn = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteUserProfileXAmzTargetEnum::CODE_STAR20170419_DELETE_USER_PROFILE;

    $response = $sdk->sdk->deleteUserProfile($request);

    if ($response->deleteUserProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProject

Describes a project and its resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProjectRequest();
    $request->describeProjectRequest = new DescribeProjectRequest();
    $request->describeProjectRequest->id = '9da1ffe7-8f09-47b0-874f-15471b5e6e13';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = DescribeProjectXAmzTargetEnum::CODE_STAR20170419_DESCRIBE_PROJECT;

    $response = $sdk->sdk->describeProject($request);

    if ($response->describeProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserProfile

Describes a user in AWS CodeStar and the user attributes across all projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserProfileRequest();
    $request->describeUserProfileRequest = new DescribeUserProfileRequest();
    $request->describeUserProfileRequest->userArn = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DescribeUserProfileXAmzTargetEnum::CODE_STAR20170419_DESCRIBE_USER_PROFILE;

    $response = $sdk->sdk->describeUserProfile($request);

    if ($response->describeUserProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateTeamMember

Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTeamMemberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateTeamMemberRequest();
    $request->disassociateTeamMemberRequest = new DisassociateTeamMemberRequest();
    $request->disassociateTeamMemberRequest->projectId = 'consequatur';
    $request->disassociateTeamMemberRequest->userArn = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DisassociateTeamMemberXAmzTargetEnum::CODE_STAR20170419_DISASSOCIATE_TEAM_MEMBER;

    $response = $sdk->sdk->disassociateTeamMember($request);

    if ($response->disassociateTeamMemberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Lists all projects in AWS CodeStar associated with your AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->listProjectsRequest = new ListProjectsRequest();
    $request->listProjectsRequest->maxResults = 183191;
    $request->listProjectsRequest->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = ListProjectsXAmzTargetEnum::CODE_STAR20170419_LIST_PROJECTS;

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResources

Lists resources associated with a project in AWS CodeStar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesRequest();
    $request->listResourcesRequest = new ListResourcesRequest();
    $request->listResourcesRequest->maxResults = 146441;
    $request->listResourcesRequest->nextToken = 'dolorum';
    $request->listResourcesRequest->projectId = 'excepturi';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = ListResourcesXAmzTargetEnum::CODE_STAR20170419_LIST_RESOURCES;

    $response = $sdk->sdk->listResources($request);

    if ($response->listResourcesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForProject

Gets the tags for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForProjectRequest();
    $request->listTagsForProjectRequest = new ListTagsForProjectRequest();
    $request->listTagsForProjectRequest->id = 'c969e9a3-efa7-47df-b14c-d66ae395efb9';
    $request->listTagsForProjectRequest->maxResults = 725255;
    $request->listTagsForProjectRequest->nextToken = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = ListTagsForProjectXAmzTargetEnum::CODE_STAR20170419_LIST_TAGS_FOR_PROJECT;

    $response = $sdk->sdk->listTagsForProject($request);

    if ($response->listTagsForProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTeamMembers

Lists all team members associated with a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTeamMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTeamMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTeamMembersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTeamMembersRequest();
    $request->listTeamMembersRequest = new ListTeamMembersRequest();
    $request->listTeamMembersRequest->maxResults = 618809;
    $request->listTeamMembersRequest->nextToken = 'omnis';
    $request->listTeamMembersRequest->projectId = 'molestiae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListTeamMembersXAmzTargetEnum::CODE_STAR20170419_LIST_TEAM_MEMBERS;

    $response = $sdk->sdk->listTeamMembers($request);

    if ($response->listTeamMembersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserProfiles

Lists all the user profiles configured for your AWS account in AWS CodeStar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUserProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserProfilesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserProfilesRequest();
    $request->listUserProfilesRequest = new ListUserProfilesRequest();
    $request->listUserProfilesRequest->maxResults = 383462;
    $request->listUserProfilesRequest->nextToken = 'natus';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListUserProfilesXAmzTargetEnum::CODE_STAR20170419_LIST_USER_PROFILES;

    $response = $sdk->sdk->listUserProfiles($request);

    if ($response->listUserProfilesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagProject

Adds tags to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagProjectRequest();
    $request->tagProjectRequest = new TagProjectRequest();
    $request->tagProjectRequest->id = '959890af-a563-4e25-96fe-4c8b711e5b7f';
    $request->tagProjectRequest->tags = [
        'sed' => 'saepe',
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
    ];
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = TagProjectXAmzTargetEnum::CODE_STAR20170419_TAG_PROJECT;

    $response = $sdk->sdk->tagProject($request);

    if ($response->tagProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagProject

Removes tags from a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagProjectRequest();
    $request->untagProjectRequest = new UntagProjectRequest();
    $request->untagProjectRequest->id = '2601fb57-6b0d-45f0-930c-5fbb25870532';
    $request->untagProjectRequest->tags = [
        'dolores',
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UntagProjectXAmzTargetEnum::CODE_STAR20170419_UNTAG_PROJECT;

    $response = $sdk->sdk->untagProject($request);

    if ($response->untagProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

Updates a project in AWS CodeStar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->updateProjectRequest = new UpdateProjectRequest();
    $request->updateProjectRequest->description = 'omnis';
    $request->updateProjectRequest->id = 'b90c2890-9b3f-4e49-a8d9-cbf48633323f';
    $request->updateProjectRequest->name = 'excepturi';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = UpdateProjectXAmzTargetEnum::CODE_STAR20170419_UPDATE_PROJECT;

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTeamMember

Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTeamMemberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTeamMemberRequest();
    $request->updateTeamMemberRequest = new UpdateTeamMemberRequest();
    $request->updateTeamMemberRequest->projectId = 'veritatis';
    $request->updateTeamMemberRequest->projectRole = 'ipsa';
    $request->updateTeamMemberRequest->remoteAccessAllowed = false;
    $request->updateTeamMemberRequest->userArn = 'ipsa';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = UpdateTeamMemberXAmzTargetEnum::CODE_STAR20170419_UPDATE_TEAM_MEMBER;

    $response = $sdk->sdk->updateTeamMember($request);

    if ($response->updateTeamMemberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserProfile

Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserProfileRequest();
    $request->updateUserProfileRequest = new UpdateUserProfileRequest();
    $request->updateUserProfileRequest->displayName = 'natus';
    $request->updateUserProfileRequest->emailAddress = 'eos';
    $request->updateUserProfileRequest->sshPublicKey = 'atque';
    $request->updateUserProfileRequest->userArn = 'sit';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UpdateUserProfileXAmzTargetEnum::CODE_STAR20170419_UPDATE_USER_PROFILE;

    $response = $sdk->sdk->updateUserProfile($request);

    if ($response->updateUserProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
