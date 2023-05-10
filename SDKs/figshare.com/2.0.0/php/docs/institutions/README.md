# institutions

### Available Operations

* [accountInstitutionCuration](#accountinstitutioncuration) - Institution Curation Review
* [accountInstitutionCurationComments](#accountinstitutioncurationcomments) - Institution Curation Review Comments
* [accountInstitutionCurations](#accountinstitutioncurations) - Institution Curation Reviews
* [customFieldsList](#customfieldslist) - Private account institution group custom fields
* [customFieldsUpload](#customfieldsupload) - Custom fields values files upload
* [institutionArticles](#institutionarticles) - Public Licenses
* [institutionHrfeedUpload](#institutionhrfeedupload) - Private Institution HRfeed Upload
* [postAccountInstitutionReviewCurationIdComments](#postaccountinstitutionreviewcurationidcomments) - POST Institution Curation Review Comment
* [privateAccountInstitutionUser](#privateaccountinstitutionuser) - Private Account Institution User
* [privateCategoriesList](#privatecategorieslist) - Private Account Categories
* [privateGroupEmbargoOptionsDetails](#privategroupembargooptionsdetails) - Private Account Institution Group Embargo Options
* [privateInstitutionAccountGroupRoleDelete](#privateinstitutionaccountgrouproledelete) - Delete Institution Account Group Role
* [privateInstitutionAccountGroupRoles](#privateinstitutionaccountgrouproles) - List Institution Account Group Roles
* [privateInstitutionAccountGroupRolesCreate](#privateinstitutionaccountgrouprolescreate) - Add Institution Account Group Roles
* [privateInstitutionAccountsCreate](#privateinstitutionaccountscreate) - Create new Institution Account
* [privateInstitutionAccountsList](#privateinstitutionaccountslist) - Private Account Institution Accounts
* [privateInstitutionAccountsSearch](#privateinstitutionaccountssearch) - Private Account Institution Accounts Search
* [privateInstitutionAccountsUpdate](#privateinstitutionaccountsupdate) - Update Institution Account
* [privateInstitutionArticles](#privateinstitutionarticles) - Private Institution Articles
* [privateInstitutionDetails](#privateinstitutiondetails) - Private Account Institutions
* [privateInstitutionEmbargoOptionsDetails](#privateinstitutionembargooptionsdetails) - Private Account Institution embargo options
* [privateInstitutionGroupsList](#privateinstitutiongroupslist) - Private Account Institution Groups
* [privateInstitutionRolesList](#privateinstitutionroleslist) - Private Account Institution Roles

## accountInstitutionCuration

Retrieve a certain curation review by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountInstitutionCurationRequest();
    $request->curationId = 407241;

    $requestSecurity = new AccountInstitutionCurationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->accountInstitutionCuration($request, $requestSecurity);

    if ($response->curationDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountInstitutionCurationComments

Retrieve a certain curation review's comments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountInstitutionCurationCommentsRequest();
    $request->curationId = 775220;
    $request->limit = 232234;
    $request->offset = 926213;

    $requestSecurity = new AccountInstitutionCurationCommentsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->accountInstitutionCurationComments($request, $requestSecurity);

    if ($response->curationComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountInstitutionCurations

Retrieve a list of curation reviews for this institution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccountInstitutionCurationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountInstitutionCurationsRequest();
    $request->articleId = 132487;
    $request->groupId = 325310;
    $request->limit = 53427;
    $request->offset = 952871;
    $request->status = AccountInstitutionCurationsStatusEnum::REJECTED;

    $requestSecurity = new AccountInstitutionCurationsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->accountInstitutionCurations($request, $requestSecurity);

    if ($response->curation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customFieldsList

Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomFieldsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomFieldsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomFieldsListRequest();
    $request->groupId = 13948;

    $requestSecurity = new CustomFieldsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->customFieldsList($request, $requestSecurity);

    if ($response->shortCustomFields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customFieldsUpload

Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href="#custom_fields">Custom Fields section</a>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomFieldsUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomFieldsUploadRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CustomFieldsUploadRequestBodyExternalFile;
use \OpenAPI\OpenAPI\Models\Operations\CustomFieldsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomFieldsUploadRequest();
    $request->requestBody = new CustomFieldsUploadRequestBody();
    $request->requestBody->externalFile = new CustomFieldsUploadRequestBodyExternalFile();
    $request->requestBody->externalFile->content = 'aut';
    $request->requestBody->externalFile->externalFile = 'deleniti';
    $request->customFieldId = 770581;

    $requestSecurity = new CustomFieldsUploadSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->customFieldsUpload($request, $requestSecurity);

    if ($response->customFieldsUpload200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## institutionArticles

Returns a list of articles belonging to the institution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InstitutionArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstitutionArticlesRequest();
    $request->filename = 'aliquam';
    $request->institutionStringId = 'fugit';
    $request->resourceId = 'accusamus';

    $response = $sdk->institutions->institutionArticles($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## institutionHrfeedUpload

More info in the <a href="#hr_feed">HR Feed section</a>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InstitutionHrfeedUploadRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\InstitutionHrfeedUploadRequestBodyHrfeed;
use \OpenAPI\OpenAPI\Models\Operations\InstitutionHrfeedUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstitutionHrfeedUploadRequestBody();
    $request->hrfeed = new InstitutionHrfeedUploadRequestBodyHrfeed();
    $request->hrfeed->content = 'inventore';
    $request->hrfeed->hrfeed = 'non';

    $requestSecurity = new InstitutionHrfeedUploadSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->institutionHrfeedUpload($request, $requestSecurity);

    if ($response->responseMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountInstitutionReviewCurationIdComments

Add a new comment to the review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountInstitutionReviewCurationIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CurationCommentCreate;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountInstitutionReviewCurationIdCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAccountInstitutionReviewCurationIdCommentsRequest();
    $request->curationCommentCreate = new CurationCommentCreate();
    $request->curationCommentCreate->text = 'et';
    $request->curationId = 677412;

    $requestSecurity = new PostAccountInstitutionReviewCurationIdCommentsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->postAccountInstitutionReviewCurationIdComments($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateAccountInstitutionUser

Retrieve institution user information using the account_id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateAccountInstitutionUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateAccountInstitutionUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateAccountInstitutionUserRequest();
    $request->accountId = 672048;

    $requestSecurity = new PrivateAccountInstitutionUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateAccountInstitutionUser($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCategoriesList

List institution categories (including parent Categories)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCategoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateCategoriesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateCategoriesList($requestSecurity);

    if ($response->categories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateGroupEmbargoOptionsDetails

Account institution group embargo options details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateGroupEmbargoOptionsDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateGroupEmbargoOptionsDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateGroupEmbargoOptionsDetailsRequest();
    $request->groupId = 810424;

    $requestSecurity = new PrivateGroupEmbargoOptionsDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateGroupEmbargoOptionsDetails($request, $requestSecurity);

    if ($response->groupEmbargoOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountGroupRoleDelete

Delete Institution Account Group Role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountGroupRoleDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountGroupRoleDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateInstitutionAccountGroupRoleDeleteRequest();
    $request->accountId = 245367;
    $request->groupId = 432148;
    $request->roleId = 420539;

    $requestSecurity = new PrivateInstitutionAccountGroupRoleDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountGroupRoleDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountGroupRoles

List Institution Account Group Roles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountGroupRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountGroupRolesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateInstitutionAccountGroupRolesRequest();
    $request->accountId = 752135;

    $requestSecurity = new PrivateInstitutionAccountGroupRolesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountGroupRoles($request, $requestSecurity);

    if ($response->accountGroupRoles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountGroupRolesCreate

Add Institution Account Group Roles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountGroupRolesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountGroupRolesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateInstitutionAccountGroupRolesCreateRequest();
    $request->requestBody = [
        'assumenda' => 'nulla',
        'voluptas' => 'libero',
        'quasi' => 'tempora',
    ];
    $request->accountId = 256139;

    $requestSecurity = new PrivateInstitutionAccountGroupRolesCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountGroupRolesCreate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountsCreate

Create a new Account by sending account information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccountCreate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCreate();
    $request->email = 'johndoe@example.com';
    $request->firstName = 'John';
    $request->groupId = 131482;
    $request->institutionUserId = 'johndoe';
    $request->isActive = false;
    $request->lastName = 'Doe';
    $request->quota = 1000;
    $request->symplecticUserId = 'johndoe';

    $requestSecurity = new PrivateInstitutionAccountsCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountsCreate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountsList

Returns the accounts for which the account has administrative privileges (assigned and inherited).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateInstitutionAccountsListRequest();
    $request->email = 'Amya48@yahoo.com';
    $request->idGte = 262118;
    $request->idLte = 458515;
    $request->institutionUserId = 'esse';
    $request->isActive = 524593;
    $request->limit = 683282;
    $request->offset = 442015;
    $request->page = 695626;
    $request->pageSize = 852635;

    $requestSecurity = new PrivateInstitutionAccountsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountsList($request, $requestSecurity);

    if ($response->shortAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountsSearch

Returns the accounts for which the account has administrative privileges (assigned and inherited).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\InstitutionAccountsSearch;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstitutionAccountsSearch();
    $request->email = 'alan@institution.com';
    $request->institutionUserId = 'alan';
    $request->isActive = 283519;
    $request->limit = 10;
    $request->offset = 433439;
    $request->page = 1;
    $request->pageSize = 10;
    $request->searchFor = 'figshare';

    $requestSecurity = new PrivateInstitutionAccountsSearchSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountsSearch($request, $requestSecurity);

    if ($response->shortAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionAccountsUpdate

Update Institution Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountUpdate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateInstitutionAccountsUpdateRequest();
    $request->accountUpdate = new AccountUpdate();
    $request->accountUpdate->groupId = 379927;
    $request->accountUpdate->isActive = false;
    $request->accountId = 826871;

    $requestSecurity = new PrivateInstitutionAccountsUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionAccountsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionArticles

Get Articles from own institution. User must be administrator of the institution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionArticlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionArticlesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionArticlesOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionArticlesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateInstitutionArticlesRequest();
    $request->itemType = 181151;
    $request->limit = 509342;
    $request->modifiedSince = 'quisquam';
    $request->offset = 86377;
    $request->order = PrivateInstitutionArticlesOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = PrivateInstitutionArticlesOrderDirectionEnum::DESC;
    $request->page = 696997;
    $request->pageSize = 206594;
    $request->publishedSince = 'quo';
    $request->resourceDoi = 'illum';
    $request->status = 777408;

    $requestSecurity = new PrivateInstitutionArticlesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionArticles($request, $requestSecurity);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionDetails

Account institution details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateInstitutionDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionDetails($requestSecurity);

    if ($response->institution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionEmbargoOptionsDetails

Account institution embargo options details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionEmbargoOptionsDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateInstitutionEmbargoOptionsDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionEmbargoOptionsDetails($requestSecurity);

    if ($response->groupEmbargoOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionGroupsList

Returns the groups for which the account has administrative privileges (assigned and inherited).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateInstitutionGroupsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionGroupsList($requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateInstitutionRolesList

Returns the roles available for groups and the institution group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateInstitutionRolesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PrivateInstitutionRolesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->institutions->privateInstitutionRolesList($requestSecurity);

    if ($response->roles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
