# downloads

## Overview

Access the list of download links associated with the repository.

### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugDownloadsFilename](#deleterepositoriesworkspacereposlugdownloadsfilename) - Delete a download artifact
* [getRepositoriesWorkspaceRepoSlugDownloads](#getrepositoriesworkspacereposlugdownloads) - List download artifacts
* [getRepositoriesWorkspaceRepoSlugDownloadsFilename](#getrepositoriesworkspacereposlugdownloadsfilename) - Get a download artifact link
* [postRepositoriesWorkspaceRepoSlugDownloads](#postrepositoriesworkspacereposlugdownloads) - Upload a download artifact

## deleteRepositoriesWorkspaceRepoSlugDownloadsFilename

Deletes the specified download artifact from the repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest();
    $request->filename = 'nobis';
    $request->repoSlug = 'dolores';
    $request->workspace = 'quis';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->downloads->deleteRepositoriesWorkspaceRepoSlugDownloadsFilename($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDownloads

Returns a list of download links associated with the repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDownloadsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDownloadsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDownloadsRequest();
    $request->repoSlug = 'totam';
    $request->workspace = 'dignissimos';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDownloadsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->downloads->getRepositoriesWorkspaceRepoSlugDownloads($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDownloadsFilename

Return a redirect to the contents of a download artifact.

This endpoint returns the actual file contents and not the artifact's
metadata.

    $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
    Hello World

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest();
    $request->filename = 'eaque';
    $request->repoSlug = 'quis';
    $request->workspace = 'nesciunt';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->downloads->getRepositoriesWorkspaceRepoSlugDownloadsFilename($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugDownloads

Upload new download artifacts.

To upload files, perform a `multipart/form-data` POST containing one
or more `files` fields:

    $ echo Hello World > hello.txt
    $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

When a file is uploaded with the same name as an existing artifact,
then the existing file will be replaced.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugDownloadsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugDownloadsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugDownloadsRequest();
    $request->repoSlug = 'eos';
    $request->workspace = 'perferendis';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugDownloadsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->downloads->postRepositoriesWorkspaceRepoSlugDownloads($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
