# SDK

## Overview

<p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects. </p> <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p> <ul> <li> <p> <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p> </li> <li> <p> <a>CreateDevEnvironment</a>, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.</p> </li> <li> <p> <a>CreateProject</a> which creates a project in a specified space.</p> </li> <li> <p> <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p> </li> <li> <p> <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p> </li> <li> <p> <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p> </li> <li> <p> <a>GetProject</a>, which returns information about a project.</p> </li> <li> <p> <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source repository.</p> </li> <li> <p> <a>GetSpace</a>, which returns information about a space.</p> </li> <li> <p> <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.</p> </li> <li> <p> <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p> </li> <li> <p> <a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p> </li> <li> <p> <a>ListProjects</a>, which retrieves a list of projects in a space.</p> </li> <li> <p> <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p> </li> <li> <p> <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p> </li> <li> <p> <a>ListSpaces</a>, which retrieves a list of spaces.</p> </li> <li> <p> <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p> </li> <li> <p> <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p> </li> <li> <p> <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p> </li> <li> <p> <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p> </li> <li> <p> <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p> </li> <li> <p> <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p> </li> </ul> <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p> <ul> <li> <p> <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p> </li> <li> <p> <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p> </li> <li> <p> <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p> </li> </ul> <note> <p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO). For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a> and the SSO documentation for your SDK.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codecatalyst/>
### Available Operations

* [createAccessToken](#createaccesstoken) - Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.
* [createDevEnvironment](#createdevenvironment) - <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>
* [createProject](#createproject) - Creates a project in a specified space.
* [createSourceRepositoryBranch](#createsourcerepositorybranch) - <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>
* [deleteAccessToken](#deleteaccesstoken) - Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
* [deleteDevEnvironment](#deletedevenvironment) - Deletes a Dev Environment. 
* [getDevEnvironment](#getdevenvironment) - Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
* [getProject](#getproject) - Returns information about a project.
* [getSourceRepositoryCloneUrls](#getsourcerepositorycloneurls) - Returns information about the URLs that can be used with a Git client to clone a source repository.
* [getSpace](#getspace) - Returns information about an space.
* [getSubscription](#getsubscription) - Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
* [getUserDetails](#getuserdetails) - Returns information about a user. 
* [listAccessTokens](#listaccesstokens) - Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.
* [listDevEnvironments](#listdevenvironments) - Retrieves a list of Dev Environments in a project.
* [listEventLogs](#listeventlogs) - Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.
* [listProjects](#listprojects) - Retrieves a list of projects.
* [listSourceRepositories](#listsourcerepositories) - Retrieves a list of source repositories in a project.
* [listSourceRepositoryBranches](#listsourcerepositorybranches) - Retrieves a list of branches in a specified source repository.
* [listSpaces](#listspaces) - Retrieves a list of spaces.
* [startDevEnvironment](#startdevenvironment) - Starts a specified Dev Environment and puts it into an active state. 
* [startDevEnvironmentSession](#startdevenvironmentsession) - Starts a session for a specified Dev Environment.
* [stopDevEnvironment](#stopdevenvironment) - Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
* [stopDevEnvironmentSession](#stopdevenvironmentsession) - Stops a session for a specified Dev Environment.
* [updateDevEnvironment](#updatedevenvironment) - Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
* [verifySession](#verifysession) - Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.

## createAccessToken

Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.

### Example Usage

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
    $request->expiresTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T02:21:06.409Z');
    $request->name = 'Doug Hoppe';

    $response = $sdk->sdk->createAccessToken($request);

    if ($response->createAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDevEnvironment

<p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. </p> <note> <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\IdeConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevEnvironmentRequestBodyInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevEnvironmentRequestBodyPersistentStorage;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDevEnvironmentRequest();
    $request->requestBody = new CreateDevEnvironmentRequestBody();
    $request->requestBody->alias = 'debitis';
    $request->requestBody->clientToken = 'ipsa';
    $request->requestBody->ides = [
        new IdeConfiguration(),
        new IdeConfiguration(),
        new IdeConfiguration(),
        new IdeConfiguration(),
    ];
    $request->requestBody->inactivityTimeoutMinutes = 272656;
    $request->requestBody->instanceType = CreateDevEnvironmentRequestBodyInstanceTypeEnum::DEV_STANDARD1_MEDIUM;
    $request->requestBody->persistentStorage = new CreateDevEnvironmentRequestBodyPersistentStorage();
    $request->requestBody->persistentStorage->sizeInGiB = 477665;
    $request->requestBody->repositories = [
        new RepositoryInput(),
        new RepositoryInput(),
        new RepositoryInput(),
        new RepositoryInput(),
    ];
    $request->projectName = 'placeat';
    $request->spaceName = 'voluptatum';

    $response = $sdk->sdk->createDevEnvironment($request);

    if ($response->createDevEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Creates a project in a specified space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBody();
    $request->requestBody->description = 'iusto';
    $request->requestBody->displayName = 'excepturi';
    $request->spaceName = 'nisi';

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSourceRepositoryBranch

<p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p> <note> <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSourceRepositoryBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSourceRepositoryBranchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSourceRepositoryBranchRequest();
    $request->requestBody = new CreateSourceRepositoryBranchRequestBody();
    $request->requestBody->headCommitId = 'recusandae';
    $request->name = 'Miss Raymond Hauck III';
    $request->projectName = 'repellendus';
    $request->sourceRepositoryName = 'sapiente';
    $request->spaceName = 'quo';

    $response = $sdk->sdk->createSourceRepositoryBranch($request);

    if ($response->createSourceRepositoryBranchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccessToken

Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessTokenRequest();
    $request->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';

    $response = $sdk->sdk->deleteAccessToken($request);

    if ($response->deleteAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDevEnvironment

Deletes a Dev Environment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDevEnvironmentRequest();
    $request->id = '05929396-fea7-4596-ab10-faaa2352c595';
    $request->projectName = 'minima';
    $request->spaceName = 'excepturi';

    $response = $sdk->sdk->deleteDevEnvironment($request);

    if ($response->deleteDevEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevEnvironment

Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevEnvironmentRequest();
    $request->id = '07aff1a3-a2fa-4946-b739-251aa52c3f5a';
    $request->projectName = 'possimus';
    $request->spaceName = 'aut';

    $response = $sdk->sdk->getDevEnvironment($request);

    if ($response->getDevEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Returns information about a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->name = 'Sabrina Smitham DVM';
    $request->spaceName = 'voluptatibus';

    $response = $sdk->sdk->getProject($request);

    if ($response->getProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSourceRepositoryCloneUrls

Returns information about the URLs that can be used with a Git client to clone a source repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSourceRepositoryCloneUrlsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSourceRepositoryCloneUrlsRequest();
    $request->projectName = 'vero';
    $request->sourceRepositoryName = 'nihil';
    $request->spaceName = 'praesentium';

    $response = $sdk->sdk->getSourceRepositoryCloneUrls($request);

    if ($response->getSourceRepositoryCloneUrlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpace

Returns information about an space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSpaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpaceRequest();
    $request->name = 'Jose Moen';

    $response = $sdk->sdk->getSpace($request);

    if ($response->getSpaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscription

Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionRequest();
    $request->spaceName = 'perferendis';

    $response = $sdk->sdk->getSubscription($request);

    if ($response->getSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserDetails

Returns information about a user. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserDetailsRequest();
    $request->id = '074f1547-1b5e-46e1-bb99-d488e1e91e45';
    $request->userName = 'Adele.Orn64';

    $response = $sdk->sdk->getUserDetails($request);

    if ($response->getUserDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccessTokens

Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessTokensRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessTokensRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessTokensRequest();
    $request->requestBody = new ListAccessTokensRequestBody();
    $request->requestBody->maxResults = 716327;
    $request->requestBody->nextToken = 'quibusdam';
    $request->maxResults = 'labore';
    $request->nextToken = 'modi';

    $response = $sdk->sdk->listAccessTokens($request);

    if ($response->listAccessTokensResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevEnvironments

Retrieves a list of Dev Environments in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevEnvironmentsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevEnvironmentsRequest();
    $request->requestBody = new ListDevEnvironmentsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 397821;
    $request->requestBody->nextToken = 'cupiditate';
    $request->maxResults = 'quos';
    $request->nextToken = 'perferendis';
    $request->projectName = 'magni';
    $request->spaceName = 'assumenda';

    $response = $sdk->sdk->listDevEnvironments($request);

    if ($response->listDevEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventLogs

Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventLogsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventLogsRequest();
    $request->requestBody = new ListEventLogsRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T06:52:02.282Z');
    $request->requestBody->eventName = 'fugit';
    $request->requestBody->maxResults = 677817;
    $request->requestBody->nextToken = 'excepturi';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T03:15:40.816Z');
    $request->maxResults = 'tempore';
    $request->nextToken = 'labore';
    $request->spaceName = 'delectus';

    $response = $sdk->sdk->listEventLogs($request);

    if ($response->listEventLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Retrieves a list of projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ProjectListFilter;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterKeyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->requestBody = new ListProjectsRequestBody();
    $request->requestBody->filters = [
        new ProjectListFilter(),
        new ProjectListFilter(),
    ];
    $request->requestBody->maxResults = 248753;
    $request->requestBody->nextToken = 'eligendi';
    $request->maxResults = 'sint';
    $request->nextToken = 'aliquid';
    $request->spaceName = 'provident';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceRepositories

Retrieves a list of source repositories in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceRepositoriesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceRepositoriesRequest();
    $request->requestBody = new ListSourceRepositoriesRequestBody();
    $request->requestBody->maxResults = 896039;
    $request->requestBody->nextToken = 'sint';
    $request->maxResults = 'officia';
    $request->nextToken = 'dolor';
    $request->projectName = 'debitis';
    $request->spaceName = 'a';

    $response = $sdk->sdk->listSourceRepositories($request);

    if ($response->listSourceRepositoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceRepositoryBranches

Retrieves a list of branches in a specified source repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceRepositoryBranchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceRepositoryBranchesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceRepositoryBranchesRequest();
    $request->requestBody = new ListSourceRepositoryBranchesRequestBody();
    $request->requestBody->maxResults = 680056;
    $request->requestBody->nextToken = 'in';
    $request->maxResults = 'in';
    $request->nextToken = 'illum';
    $request->projectName = 'maiores';
    $request->sourceRepositoryName = 'rerum';
    $request->spaceName = 'dicta';

    $response = $sdk->sdk->listSourceRepositoryBranches($request);

    if ($response->listSourceRepositoryBranchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSpaces

Retrieves a list of spaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSpacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSpacesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSpacesRequest();
    $request->requestBody = new ListSpacesRequestBody();
    $request->requestBody->nextToken = 'magnam';
    $request->nextToken = 'cumque';

    $response = $sdk->sdk->listSpaces($request);

    if ($response->listSpacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDevEnvironment

Starts a specified Dev Environment and puts it into an active state. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDevEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDevEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\IdeConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartDevEnvironmentRequestBodyInstanceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDevEnvironmentRequest();
    $request->requestBody = new StartDevEnvironmentRequestBody();
    $request->requestBody->ides = [
        new IdeConfiguration(),
        new IdeConfiguration(),
        new IdeConfiguration(),
        new IdeConfiguration(),
    ];
    $request->requestBody->inactivityTimeoutMinutes = 411820;
    $request->requestBody->instanceType = StartDevEnvironmentRequestBodyInstanceTypeEnum::DEV_STANDARD1_MEDIUM;
    $request->id = 'ae395efb-9ba8-48f3-a669-97074ba4469b';
    $request->projectName = 'eum';
    $request->spaceName = 'vero';

    $response = $sdk->sdk->startDevEnvironment($request);

    if ($response->startDevEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDevEnvironmentSession

Starts a session for a specified Dev Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDevEnvironmentSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDevEnvironmentSessionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartDevEnvironmentSessionRequestBodySessionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteCommandSessionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DevEnvironmentSessionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDevEnvironmentSessionRequest();
    $request->requestBody = new StartDevEnvironmentSessionRequestBody();
    $request->requestBody->sessionConfiguration = new StartDevEnvironmentSessionRequestBodySessionConfiguration();
    $request->requestBody->sessionConfiguration->executeCommandSessionConfiguration = new ExecuteCommandSessionConfiguration();
    $request->requestBody->sessionConfiguration->executeCommandSessionConfiguration->arguments = [
        'architecto',
    ];
    $request->requestBody->sessionConfiguration->executeCommandSessionConfiguration->command = 'magnam';
    $request->requestBody->sessionConfiguration->sessionType = DevEnvironmentSessionTypeEnum::SSM;
    $request->id = '959890af-a563-4e25-96fe-4c8b711e5b7f';
    $request->projectName = 'quibusdam';
    $request->spaceName = 'sed';

    $response = $sdk->sdk->startDevEnvironmentSession($request);

    if ($response->startDevEnvironmentSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDevEnvironment

Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDevEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDevEnvironmentRequest();
    $request->id = 'ed028921-cddc-4692-a01f-b576b0d5f0d3';
    $request->projectName = 'aut';
    $request->spaceName = 'cumque';

    $response = $sdk->sdk->stopDevEnvironment($request);

    if ($response->stopDevEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDevEnvironmentSession

Stops a session for a specified Dev Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDevEnvironmentSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDevEnvironmentSessionRequest();
    $request->id = '5fbb2587-0532-402c-b3d5-fe9b90c28909';
    $request->projectName = 'rerum';
    $request->sessionId = 'adipisci';
    $request->spaceName = 'asperiores';

    $response = $sdk->sdk->stopDevEnvironmentSession($request);

    if ($response->stopDevEnvironmentSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevEnvironment

Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\IdeConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevEnvironmentRequestBodyInstanceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDevEnvironmentRequest();
    $request->requestBody = new UpdateDevEnvironmentRequestBody();
    $request->requestBody->alias = 'earum';
    $request->requestBody->clientToken = 'modi';
    $request->requestBody->ides = [
        new IdeConfiguration(),
        new IdeConfiguration(),
        new IdeConfiguration(),
    ];
    $request->requestBody->inactivityTimeoutMinutes = 679091;
    $request->requestBody->instanceType = UpdateDevEnvironmentRequestBodyInstanceTypeEnum::DEV_STANDARD1_LARGE;
    $request->id = 'd9cbf486-3332-43f9-b77f-3a4100674ebf';
    $request->projectName = 'voluptas';
    $request->spaceName = 'natus';

    $response = $sdk->sdk->updateDevEnvironment($request);

    if ($response->updateDevEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifySession

Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->verifySession();

    if ($response->verifySessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
