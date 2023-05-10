# git

## Overview

Raw Git functionality.

### Available Operations

* [gitCreateBlob](#gitcreateblob) - Create a blob
* [gitCreateCommit](#gitcreatecommit) - Create a commit
* [gitCreateRef](#gitcreateref) - Create a reference
* [gitCreateTag](#gitcreatetag) - Create a tag object
* [gitCreateTree](#gitcreatetree) - Create a tree
* [gitDeleteRef](#gitdeleteref) - Delete a reference
* [gitGetBlob](#gitgetblob) - Get a blob
* [gitGetCommit](#gitgetcommit) - Get a commit
* [gitGetRef](#gitgetref) - Get a reference
* [gitGetTag](#gitgettag) - Get a tag
* [gitGetTree](#gitgettree) - Get a tree
* [gitListMatchingRefs](#gitlistmatchingrefs) - List matching references
* [gitUpdateRef](#gitupdateref) - Update a reference

## gitCreateBlob

Create a blob

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-blob>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateBlobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateBlobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitCreateBlobRequest();
    $request->requestBody = new GitCreateBlobRequestBody();
    $request->requestBody->content = 'odio';
    $request->requestBody->encoding = 'occaecati';
    $request->owner = 'voluptatibus';
    $request->repo = 'quisquam';

    $response = $sdk->git->gitCreateBlob($request);

    if ($response->shortBlob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitCreateCommit

Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateCommitRequest;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateCommitRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateCommitRequestBodyAuthor;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateCommitRequestBodyCommitter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitCreateCommitRequest();
    $request->requestBody = new GitCreateCommitRequestBody();
    $request->requestBody->author = new GitCreateCommitRequestBodyAuthor();
    $request->requestBody->author->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-07T21:49:29.078Z');
    $request->requestBody->author->email = 'Cyrus.Willms@yahoo.com';
    $request->requestBody->author->name = 'Roman Kulas';
    $request->requestBody->committer = new GitCreateCommitRequestBodyCommitter();
    $request->requestBody->committer->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-17T15:43:35.984Z');
    $request->requestBody->committer->email = 'Melody.Swift@yahoo.com';
    $request->requestBody->committer->name = 'Gilberto Dickinson';
    $request->requestBody->message = 'aut';
    $request->requestBody->parents = [
        'exercitationem',
        'nulla',
        'fugit',
        'porro',
    ];
    $request->requestBody->signature = 'maiores';
    $request->requestBody->tree = 'doloribus';
    $request->owner = 'iusto';
    $request->repo = 'eligendi';

    $response = $sdk->git->gitCreateCommit($request);

    if ($response->gitCommit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitCreateRef

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateRefRequest;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateRefRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitCreateRefRequest();
    $request->requestBody = new GitCreateRefRequestBody();
    $request->requestBody->key = '"refs/heads/newbranch"';
    $request->requestBody->ref = 'ducimus';
    $request->requestBody->sha = 'alias';
    $request->owner = 'officia';
    $request->repo = 'tempora';

    $response = $sdk->git->gitCreateRef($request);

    if ($response->gitRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitCreateTag

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-tag-object>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTagger;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTagRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitCreateTagRequest();
    $request->requestBody = new GitCreateTagRequestBody();
    $request->requestBody->message = 'ipsam';
    $request->requestBody->object = 'ea';
    $request->requestBody->tag = 'aspernatur';
    $request->requestBody->tagger = new GitCreateTagRequestBodyTagger();
    $request->requestBody->tagger->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T22:14:54.933Z');
    $request->requestBody->tagger->email = 'Clarabelle.Jacobs@gmail.com';
    $request->requestBody->tagger->name = 'Elisa Boyle';
    $request->requestBody->type = GitCreateTagRequestBodyTypeEnum::TREE;
    $request->owner = 'voluptatibus';
    $request->repo = 'nostrum';

    $response = $sdk->git->gitCreateTag($request);

    if ($response->gitTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitCreateTree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@2.20/rest/reference/git#update-a-reference)."

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#create-a-tree>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTreeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTreeRequestBodyTree;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTreeRequestBodyTreeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GitCreateTreeRequestBodyTreeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitCreateTreeRequest();
    $request->requestBody = new GitCreateTreeRequestBody();
    $request->requestBody->baseTree = 'sapiente';
    $request->requestBody->tree = [
        new GitCreateTreeRequestBodyTree(),
        new GitCreateTreeRequestBodyTree(),
        new GitCreateTreeRequestBodyTree(),
        new GitCreateTreeRequestBodyTree(),
    ];
    $request->owner = 'saepe';
    $request->repo = 'ea';

    $response = $sdk->git->gitCreateTree($request);

    if ($response->gitTree !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitDeleteRef

Delete a reference

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#delete-a-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitDeleteRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitDeleteRefRequest();
    $request->owner = 'impedit';
    $request->ref = 'corporis';
    $request->repo = 'veniam';

    $response = $sdk->git->gitDeleteRef($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitGetBlob

The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-blob>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitGetBlobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitGetBlobRequest();
    $request->fileSha = 'aliquid';
    $request->owner = 'inventore';
    $request->repo = 'magnam';

    $response = $sdk->git->gitGetBlob($request);

    if ($response->blob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitGetCommit

Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-commit>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitGetCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitGetCommitRequest();
    $request->commitSha = 'ea';
    $request->owner = 'quo';
    $request->repo = 'consectetur';

    $response = $sdk->git->gitGetCommit($request);

    if ($response->gitCommit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitGetRef

Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.20/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitGetRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitGetRefRequest();
    $request->owner = 'recusandae';
    $request->ref = 'aspernatur';
    $request->repo = 'minima';

    $response = $sdk->git->gitGetRef($request);

    if ($response->gitRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitGetTag

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string` | The signature that was extracted from the commit. |
| `payload` | `string` | The value that was signed. |

These are the possible values for `reason` in the `verification` object:

| Value | Description |
| ----- | ----------- |
| `expired_key` | The key that made the signature is expired. |
| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
| `gpgverify_error` | There was an error communicating with the signature verification service. |
| `gpgverify_unavailable` | The signature verification service is currently unavailable. |
| `unsigned` | The object does not include a signature. |
| `unknown_signature_type` | A non-PGP signature was found in the commit. |
| `no_user` | No user was associated with the `committer` email address in the commit. |
| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
| `unknown_key` | The key that made the signature has not been registered with any user's account. |
| `malformed_signature` | There was an error parsing the signature. |
| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
| `valid` | None of the above errors applied, so the signature is considered to be verified. |

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-tag>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitGetTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitGetTagRequest();
    $request->owner = 'eaque';
    $request->repo = 'a';
    $request->tagSha = 'libero';

    $response = $sdk->git->gitGetTag($request);

    if ($response->gitTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitGetTree

Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-tree>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitGetTreeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitGetTreeRequest();
    $request->owner = 'aut';
    $request->recursive = 'aut';
    $request->repo = 'deleniti';
    $request->treeSha = 'impedit';

    $response = $sdk->git->gitGetTree($request);

    if ($response->gitTree !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitListMatchingRefs

Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.

When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.20/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#list-matching-references>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitListMatchingRefsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitListMatchingRefsRequest();
    $request->owner = 'aliquam';
    $request->page = 146946;
    $request->perPage = 882860;
    $request->ref = 'inventore';
    $request->repo = 'non';

    $response = $sdk->git->gitListMatchingRefs($request);

    if ($response->gitRefs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitUpdateRef

Update a reference

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/git#update-a-reference>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitUpdateRefRequest;
use \OpenAPI\OpenAPI\Models\Operations\GitUpdateRefRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitUpdateRefRequest();
    $request->requestBody = new GitUpdateRefRequestBody();
    $request->requestBody->force = false;
    $request->requestBody->sha = 'et';
    $request->owner = 'dolorum';
    $request->ref = 'laborum';
    $request->repo = 'placeat';

    $response = $sdk->git->gitUpdateRef($request);

    if ($response->gitRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
