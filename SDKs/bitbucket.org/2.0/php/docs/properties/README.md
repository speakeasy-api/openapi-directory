# properties

### Available Operations

* [deleteCommitHostedPropertyValue](#deletecommithostedpropertyvalue) - Delete a commit application property
* [deletePullRequestHostedPropertyValue](#deletepullrequesthostedpropertyvalue) - Delete a pull request application property
* [deleteRepositoryHostedPropertyValue](#deleterepositoryhostedpropertyvalue) - Delete a repository application property
* [deleteUserHostedPropertyValue](#deleteuserhostedpropertyvalue) - Delete a user application property
* [getCommitHostedPropertyValue](#getcommithostedpropertyvalue) - Get a commit application property
* [getPullRequestHostedPropertyValue](#getpullrequesthostedpropertyvalue) - Get a pull request application property
* [getRepositoryHostedPropertyValue](#getrepositoryhostedpropertyvalue) - Get a repository application property
* [retrieveUserHostedPropertyValue](#retrieveuserhostedpropertyvalue) - Get a user application property
* [updateCommitHostedPropertyValue](#updatecommithostedpropertyvalue) - Update a commit application property
* [updatePullRequestHostedPropertyValue](#updatepullrequesthostedpropertyvalue) - Update a pull request application property
* [updateRepositoryHostedPropertyValue](#updaterepositoryhostedpropertyvalue) - Update a repository application property
* [updateUserHostedPropertyValue](#updateuserhostedpropertyvalue) - Update a user application property

## deleteCommitHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCommitHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCommitHostedPropertyValueRequest();
    $request->appKey = 'aliquid';
    $request->commit = 'officia';
    $request->propertyName = 'suscipit';
    $request->repoSlug = 'aliquid';
    $request->workspace = 'perferendis';

    $response = $sdk->properties->deleteCommitHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePullRequestHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePullRequestHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePullRequestHostedPropertyValueRequest();
    $request->appKey = 'eum';
    $request->propertyName = 'voluptas';
    $request->pullrequestId = 'iste';
    $request->repoSlug = 'id';
    $request->workspace = 'ab';

    $response = $sdk->properties->deletePullRequestHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryHostedPropertyValueRequest();
    $request->appKey = 'error';
    $request->propertyName = 'possimus';
    $request->repoSlug = 'voluptates';
    $request->workspace = 'mollitia';

    $response = $sdk->properties->deleteRepositoryHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserHostedPropertyValue

Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserHostedPropertyValueRequest();
    $request->appKey = 'laborum';
    $request->propertyName = 'libero';
    $request->selectedUser = 'ad';

    $response = $sdk->properties->deleteUserHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitHostedPropertyValueRequest();
    $request->appKey = 'deleniti';
    $request->commit = 'enim';
    $request->propertyName = 'vitae';
    $request->repoSlug = 'repellendus';
    $request->workspace = 'ex';

    $response = $sdk->properties->getCommitHostedPropertyValue($request);

    if ($response->applicationProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPullRequestHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPullRequestHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPullRequestHostedPropertyValueRequest();
    $request->appKey = 'quo';
    $request->propertyName = 'ex';
    $request->pullrequestId = 'ut';
    $request->repoSlug = 'ad';
    $request->workspace = 'expedita';

    $response = $sdk->properties->getPullRequestHostedPropertyValue($request);

    if ($response->applicationProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryHostedPropertyValueRequest();
    $request->appKey = 'voluptatem';
    $request->propertyName = 'molestias';
    $request->repoSlug = 'cum';
    $request->workspace = 'aliquid';

    $response = $sdk->properties->getRepositoryHostedPropertyValue($request);

    if ($response->applicationProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveUserHostedPropertyValue

Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveUserHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveUserHostedPropertyValueRequest();
    $request->appKey = 'beatae';
    $request->propertyName = 'voluptatum';
    $request->selectedUser = 'omnis';

    $response = $sdk->properties->retrieveUserHostedPropertyValue($request);

    if ($response->applicationProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCommitHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCommitHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCommitHostedPropertyValueRequest();
    $request->requestBody = [
        'rerum' => 'est',
    ];
    $request->appKey = 'culpa';
    $request->commit = 'voluptatem';
    $request->propertyName = 'sapiente';
    $request->repoSlug = 'officiis';
    $request->workspace = 'architecto';

    $response = $sdk->properties->updateCommitHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePullRequestHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePullRequestHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePullRequestHostedPropertyValueRequest();
    $request->requestBody = [
        'pariatur' => 'debitis',
        'voluptatem' => 'alias',
        'deleniti' => 'earum',
    ];
    $request->appKey = 'ex';
    $request->propertyName = 'sapiente';
    $request->pullrequestId = 'rem';
    $request->repoSlug = 'minus';
    $request->workspace = 'nemo';

    $response = $sdk->properties->updatePullRequestHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRepositoryHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRepositoryHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRepositoryHostedPropertyValueRequest();
    $request->requestBody = [
        'ratione' => 'ullam',
        'perferendis' => 'illum',
        'totam' => 'impedit',
        'quibusdam' => 'nam',
    ];
    $request->appKey = 'ipsam';
    $request->propertyName = 'culpa';
    $request->repoSlug = 'dolor';
    $request->workspace = 'aliquam';

    $response = $sdk->properties->updateRepositoryHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserHostedPropertyValue

Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserHostedPropertyValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserHostedPropertyValueRequest();
    $request->requestBody = [
        'deleniti' => 'veritatis',
    ];
    $request->appKey = 'tempora';
    $request->propertyName = 'dolor';
    $request->selectedUser = 'consequatur';

    $response = $sdk->properties->updateUserHostedPropertyValue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
