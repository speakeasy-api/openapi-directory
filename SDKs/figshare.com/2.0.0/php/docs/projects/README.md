# projects

### Available Operations

* [privateProjectArticleDelete](#privateprojectarticledelete) - Delete project article
* [privateProjectArticleDetails](#privateprojectarticledetails) - Project article details
* [privateProjectArticleFile](#privateprojectarticlefile) - Project article file details
* [privateProjectArticleFiles](#privateprojectarticlefiles) - Project article list files
* [privateProjectArticlesCreate](#privateprojectarticlescreate) - Create project article
* [privateProjectArticlesList](#privateprojectarticleslist) - List project articles
* [privateProjectCollaboratorDelete](#privateprojectcollaboratordelete) - Remove project collaborator
* [privateProjectCollaboratorsInvite](#privateprojectcollaboratorsinvite) - Invite project collaborators
* [privateProjectCollaboratorsList](#privateprojectcollaboratorslist) - List project collaborators
* [privateProjectCreate](#privateprojectcreate) - Create project
* [privateProjectDelete](#privateprojectdelete) - Delete project
* [privateProjectDetails](#privateprojectdetails) - View project details
* [privateProjectLeave](#privateprojectleave) - Private Project Leave
* [privateProjectNote](#privateprojectnote) - Project note details
* [privateProjectNoteDelete](#privateprojectnotedelete) - Delete project note
* [privateProjectNoteUpdate](#privateprojectnoteupdate) - Update project note
* [privateProjectNotesCreate](#privateprojectnotescreate) - Create project note
* [privateProjectNotesList](#privateprojectnoteslist) - List project notes
* [privateProjectPublish](#privateprojectpublish) - Private Project Publish
* [privateProjectUpdate](#privateprojectupdate) - Update project
* [privateProjectsList](#privateprojectslist) - Private Projects
* [privateProjectsSearch](#privateprojectssearch) - Private Projects search
* [projectArticles](#projectarticles) - Public Project Articles
* [projectDetails](#projectdetails) - Public Project
* [projectsList](#projectslist) - Public Projects
* [projectsSearch](#projectssearch) - Public Projects Search

## privateProjectArticleDelete

Delete project article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectArticleDeleteRequest();
    $request->articleId = 373813;
    $request->projectId = 69859;

    $requestSecurity = new PrivateProjectArticleDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectArticleDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectArticleDetails

Project article details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectArticleDetailsRequest();
    $request->articleId = 587600;
    $request->projectId = 9688;

    $requestSecurity = new PrivateProjectArticleDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectArticleDetails($request, $requestSecurity);

    if ($response->projectArticle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectArticleFile

Project article file details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectArticleFileRequest();
    $request->articleId = 272822;
    $request->fileId = 892050;
    $request->projectId = 370853;

    $requestSecurity = new PrivateProjectArticleFileSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectArticleFile($request, $requestSecurity);

    if ($response->privateFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectArticleFiles

List article files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticleFilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectArticleFilesRequest();
    $request->articleId = 133465;
    $request->projectId = 197054;

    $requestSecurity = new PrivateProjectArticleFilesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectArticleFiles($request, $requestSecurity);

    if ($response->privateFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectArticlesCreate

Create a new Article and associate it with this project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticlesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticleProjectCreate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Shared\TimelineUpdate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticlesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectArticlesCreateRequest();
    $request->articleProjectCreate = new ArticleProjectCreate();
    $request->articleProjectCreate->authors = [
        [
            'recusandae' => 'aperiam',
            'distinctio' => 'quod',
        ],
        [
            'inventore' => 'nihil',
            'totam' => 'accusamus',
        ],
        [
            'odio' => 'occaecati',
            'commodi' => 'sapiente',
        ],
        [
            'deserunt' => 'molestiae',
        ],
    ];
    $request->articleProjectCreate->categories = [
        783648,
    ];
    $request->articleProjectCreate->categoriesBySourceId = [
        'quas',
        'praesentium',
    ];
    $request->articleProjectCreate->customFields = [
        'deleniti' => 'fugit',
    ];
    $request->articleProjectCreate->customFieldsList = [
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
    ];
    $request->articleProjectCreate->definedType = 'media';
    $request->articleProjectCreate->description = 'Test description of article';
    $request->articleProjectCreate->doi = 'mollitia';
    $request->articleProjectCreate->funding = 'incidunt';
    $request->articleProjectCreate->fundingList = [
        new FundingCreate(),
        new FundingCreate(),
        new FundingCreate(),
    ];
    $request->articleProjectCreate->handle = 'explicabo';
    $request->articleProjectCreate->keywords = [
        'nisi',
        'fugit',
    ];
    $request->articleProjectCreate->license = 1;
    $request->articleProjectCreate->references = [
        'consequuntur',
        'ratione',
        'explicabo',
        'saepe',
    ];
    $request->articleProjectCreate->resourceDoi = 'occaecati';
    $request->articleProjectCreate->resourceTitle = 'atque';
    $request->articleProjectCreate->tags = [
        'esse',
    ];
    $request->articleProjectCreate->timeline = new TimelineUpdate();
    $request->articleProjectCreate->timeline->firstOnline = '2015-12-31';
    $request->articleProjectCreate->timeline->publisherAcceptance = '2015-12-31';
    $request->articleProjectCreate->timeline->publisherPublication = '2015-12-31';
    $request->articleProjectCreate->title = 'Test article title';
    $request->limit = 910545;
    $request->offset = 882042;
    $request->page = 82971;
    $request->pageSize = 458604;
    $request->projectId = 800379;

    $requestSecurity = new PrivateProjectArticlesCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectArticlesCreate($request, $requestSecurity);

    if ($response->locationWarnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectArticlesList

List project articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticlesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectArticlesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectArticlesListRequest();
    $request->limit = 724168;
    $request->offset = 877131;
    $request->page = 399025;
    $request->pageSize = 93459;
    $request->projectId = 904045;

    $requestSecurity = new PrivateProjectArticlesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectArticlesList($request, $requestSecurity);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectCollaboratorDelete

Remove project collaborator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCollaboratorDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCollaboratorDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectCollaboratorDeleteRequest();
    $request->projectId = 426306;
    $request->userId = 690025;

    $requestSecurity = new PrivateProjectCollaboratorDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectCollaboratorDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectCollaboratorsInvite

Invite users to collaborate on project or view the project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCollaboratorsInviteRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCollaboratorInvite;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCollaboratorInviteRoleNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCollaboratorsInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectCollaboratorsInviteRequest();
    $request->projectCollaboratorInvite = new ProjectCollaboratorInvite();
    $request->projectCollaboratorInvite->comment = 'hey';
    $request->projectCollaboratorInvite->email = 'user@domain.com';
    $request->projectCollaboratorInvite->roleName = ProjectCollaboratorInviteRoleNameEnum::VIEWER;
    $request->projectCollaboratorInvite->userId = 100008;
    $request->projectId = 473221;

    $requestSecurity = new PrivateProjectCollaboratorsInviteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectCollaboratorsInvite($request, $requestSecurity);

    if ($response->responseMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectCollaboratorsList

List Project collaborators and invited users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCollaboratorsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCollaboratorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectCollaboratorsListRequest();
    $request->projectId = 699622;

    $requestSecurity = new PrivateProjectCollaboratorsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectCollaboratorsList($request, $requestSecurity);

    if ($response->projectCollaborators !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectCreate

Create a new project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCreate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectCreate();
    $request->customFields = [
        'minima' => 'distinctio',
        'eligendi' => 'sit',
        'culpa' => 'tempore',
    ];
    $request->customFieldsList = [
        new CustomArticleFieldAdd(),
    ];
    $request->description = 'project description';
    $request->funding = 'cumque';
    $request->fundingList = [
        new FundingCreate(),
    ];
    $request->groupId = 9766;
    $request->title = 'project title';

    $requestSecurity = new PrivateProjectCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectCreate($request, $requestSecurity);

    if ($response->createProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectDelete

A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectDeleteRequest();
    $request->projectId = 796392;

    $requestSecurity = new PrivateProjectDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectDetails

View a private project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectDetailsRequest();
    $request->projectId = 308286;

    $requestSecurity = new PrivateProjectDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectDetails($request, $requestSecurity);

    if ($response->projectCompletePrivate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectLeave

Please note: project's owner cannot leave the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectLeaveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectLeaveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectLeaveRequest();
    $request->projectId = 959167;

    $requestSecurity = new PrivateProjectLeaveSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectLeave($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectNote

Project note details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectNoteRequest();
    $request->noteId = 232865;
    $request->projectId = 458139;

    $requestSecurity = new PrivateProjectNoteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectNote($request, $requestSecurity);

    if ($response->projectNotePrivate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectNoteDelete

Delete project note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNoteDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNoteDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectNoteDeleteRequest();
    $request->noteId = 503427;
    $request->projectId = 590984;

    $requestSecurity = new PrivateProjectNoteDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectNoteDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectNoteUpdate

Update project note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNoteUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectNoteCreate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNoteUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectNoteUpdateRequest();
    $request->projectNoteCreate = new ProjectNoteCreate();
    $request->projectNoteCreate->text = 'note to remember';
    $request->noteId = 953722;
    $request->projectId = 857723;

    $requestSecurity = new PrivateProjectNoteUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectNoteUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectNotesCreate

Create a new project note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNotesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectNoteCreate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNotesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectNotesCreateRequest();
    $request->projectNoteCreate = new ProjectNoteCreate();
    $request->projectNoteCreate->text = 'note to remember';
    $request->projectId = 557811;

    $requestSecurity = new PrivateProjectNotesCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectNotesCreate($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectNotesList

List project notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNotesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectNotesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectNotesListRequest();
    $request->limit = 457223;
    $request->offset = 97468;
    $request->page = 951875;
    $request->pageSize = 621679;
    $request->projectId = 575751;

    $requestSecurity = new PrivateProjectNotesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectNotesList($request, $requestSecurity);

    if ($response->projectNotes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectPublish

Publish a project. Possible after all items inside it are public

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectPublishRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectPublishRequest();
    $request->projectId = 863023;

    $requestSecurity = new PrivateProjectPublishSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectPublish($request, $requestSecurity);

    if ($response->responseMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectUpdate

Updating an project by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectUpdateRequest();
    $request->projectUpdate = new ProjectUpdate();
    $request->projectUpdate->customFields = [
        'quia' => 'eveniet',
        'asperiores' => 'facere',
        'veritatis' => 'consequuntur',
        'quasi' => 'similique',
    ];
    $request->projectUpdate->customFieldsList = [
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
    ];
    $request->projectUpdate->description = 'project description';
    $request->projectUpdate->funding = 'aliquid';
    $request->projectUpdate->fundingList = [
        new FundingCreate(),
        new FundingCreate(),
        new FundingCreate(),
        new FundingCreate(),
    ];
    $request->projectUpdate->title = 'project title';
    $request->projectId = 62713;

    $requestSecurity = new PrivateProjectUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectsList

List private projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectsListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectsListOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectsListStorageEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateProjectsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateProjectsListRequest();
    $request->limit = 936747;
    $request->offset = 424032;
    $request->order = PrivateProjectsListOrderEnum::MODIFIED_DATE;
    $request->orderDirection = PrivateProjectsListOrderDirectionEnum::ASC;
    $request->page = 727697;
    $request->pageSize = 849039;
    $request->roles = 'soluta';
    $request->storage = PrivateProjectsListStorageEnum::GROUP;

    $requestSecurity = new PrivateProjectsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privateProjectsList($request, $requestSecurity);

    if ($response->projectPrivates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateProjectsSearch

Search inside the private projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSearch;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSearchOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsSearch();
    $request->group = 2000013;
    $request->institution = 2000013;
    $request->limit = 10;
    $request->modifiedSince = '2017-12-22';
    $request->offset = 306986;
    $request->order = ProjectsSearchOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = ProjectsSearchOrderDirectionEnum::DESC;
    $request->page = 1;
    $request->pageSize = 10;
    $request->publishedSince = '2017-12-22';
    $request->searchFor = 'figshare';

    $response = $sdk->projects->privateProjectsSearch($request);

    if ($response->projectPrivates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectArticles

List articles in project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectArticlesRequest();
    $request->projectId = 958983;

    $response = $sdk->projects->projectArticles($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectDetails

View a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectDetailsRequest();
    $request->projectId = 119771;

    $response = $sdk->projects->projectDetails($request);

    if ($response->projectComplete !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsList

Returns a list of public projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsListOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsListRequest();
    $request->xCursor = '5756082d-68ea-419f-9d17-051339d08086';
    $request->group = 649832;
    $request->institution = 68074;
    $request->limit = 544591;
    $request->offset = 251941;
    $request->order = ProjectsListOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = ProjectsListOrderDirectionEnum::ASC;
    $request->page = 580152;
    $request->pageSize = 253191;
    $request->publishedSince = 'impedit';

    $response = $sdk->projects->projectsList($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectsSearch

Returns a list of public articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProjectsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSearch;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSearchOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectsSearchRequest();
    $request->projectsSearch = new ProjectsSearch();
    $request->projectsSearch->group = 2000013;
    $request->projectsSearch->institution = 2000013;
    $request->projectsSearch->limit = 10;
    $request->projectsSearch->modifiedSince = '2017-12-22';
    $request->projectsSearch->offset = 131055;
    $request->projectsSearch->order = ProjectsSearchOrderEnum::PUBLISHED_DATE;
    $request->projectsSearch->orderDirection = ProjectsSearchOrderDirectionEnum::DESC;
    $request->projectsSearch->page = 1;
    $request->projectsSearch->pageSize = 10;
    $request->projectsSearch->publishedSince = '2017-12-22';
    $request->projectsSearch->searchFor = 'figshare';
    $request->xCursor = '6071f93f-5f06-442d-ac7a-f515cc413aa6';

    $response = $sdk->projects->projectsSearch($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
