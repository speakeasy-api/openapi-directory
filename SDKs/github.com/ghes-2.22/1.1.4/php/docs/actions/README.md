# actions

## Overview

Endpoints to manage GitHub Actions using the REST API.

### Available Operations

* [actionsAddRepoAccessToSelfHostedRunnerGroupInOrg](#actionsaddrepoaccesstoselfhostedrunnergroupinorg) - Add repository access to a self-hosted runner group in an organization
* [actionsAddSelectedRepoToOrgSecret](#actionsaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [actionsAddSelfHostedRunnerToGroupForOrg](#actionsaddselfhostedrunnertogroupfororg) - Add a self-hosted runner to a group for an organization
* [actionsCancelWorkflowRun](#actionscancelworkflowrun) - Cancel a workflow run
* [actionsCreateOrUpdateOrgSecret](#actionscreateorupdateorgsecret) - Create or update an organization secret
* [actionsCreateOrUpdateRepoSecret](#actionscreateorupdatereposecret) - Create or update a repository secret
* [actionsCreateRegistrationTokenForOrg](#actionscreateregistrationtokenfororg) - Create a registration token for an organization
* [actionsCreateRegistrationTokenForRepo](#actionscreateregistrationtokenforrepo) - Create a registration token for a repository
* [actionsCreateRemoveTokenForOrg](#actionscreateremovetokenfororg) - Create a remove token for an organization
* [actionsCreateRemoveTokenForRepo](#actionscreateremovetokenforrepo) - Create a remove token for a repository
* [actionsCreateSelfHostedRunnerGroupForOrg](#actionscreateselfhostedrunnergroupfororg) - Create a self-hosted runner group for an organization
* [actionsCreateWorkflowDispatch](#actionscreateworkflowdispatch) - Create a workflow dispatch event
* [actionsDeleteArtifact](#actionsdeleteartifact) - Delete an artifact
* [actionsDeleteOrgSecret](#actionsdeleteorgsecret) - Delete an organization secret
* [actionsDeleteRepoSecret](#actionsdeletereposecret) - Delete a repository secret
* [actionsDeleteSelfHostedRunnerFromOrg](#actionsdeleteselfhostedrunnerfromorg) - Delete a self-hosted runner from an organization
* [actionsDeleteSelfHostedRunnerFromRepo](#actionsdeleteselfhostedrunnerfromrepo) - Delete a self-hosted runner from a repository
* [actionsDeleteSelfHostedRunnerGroupFromOrg](#actionsdeleteselfhostedrunnergroupfromorg) - Delete a self-hosted runner group from an organization
* [actionsDeleteWorkflowRun](#actionsdeleteworkflowrun) - Delete a workflow run
* [actionsDeleteWorkflowRunLogs](#actionsdeleteworkflowrunlogs) - Delete workflow run logs
* [actionsDownloadArtifact](#actionsdownloadartifact) - Download an artifact
* [actionsDownloadJobLogsForWorkflowRun](#actionsdownloadjoblogsforworkflowrun) - Download job logs for a workflow run
* [actionsDownloadWorkflowRunLogs](#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [actionsGetArtifact](#actionsgetartifact) - Get an artifact
* [actionsGetJobForWorkflowRun](#actionsgetjobforworkflowrun) - Get a job for a workflow run
* [actionsGetOrgPublicKey](#actionsgetorgpublickey) - Get an organization public key
* [actionsGetOrgSecret](#actionsgetorgsecret) - Get an organization secret
* [actionsGetRepoPublicKey](#actionsgetrepopublickey) - Get a repository public key
* [actionsGetRepoSecret](#actionsgetreposecret) - Get a repository secret
* [actionsGetSelfHostedRunnerForOrg](#actionsgetselfhostedrunnerfororg) - Get a self-hosted runner for an organization
* [actionsGetSelfHostedRunnerForRepo](#actionsgetselfhostedrunnerforrepo) - Get a self-hosted runner for a repository
* [actionsGetSelfHostedRunnerGroupForOrg](#actionsgetselfhostedrunnergroupfororg) - Get a self-hosted runner group for an organization
* [actionsGetWorkflow](#actionsgetworkflow) - Get a workflow
* [actionsGetWorkflowRun](#actionsgetworkflowrun) - Get a workflow run
* [actionsListArtifactsForRepo](#actionslistartifactsforrepo) - List artifacts for a repository
* [actionsListJobsForWorkflowRun](#actionslistjobsforworkflowrun) - List jobs for a workflow run
* [actionsListOrgSecrets](#actionslistorgsecrets) - List organization secrets
* [actionsListRepoAccessToSelfHostedRunnerGroupInOrg](#actionslistrepoaccesstoselfhostedrunnergroupinorg) - List repository access to a self-hosted runner group in an organization
* [actionsListRepoSecrets](#actionslistreposecrets) - List repository secrets
* [actionsListRepoWorkflows](#actionslistrepoworkflows) - List repository workflows
* [actionsListRunnerApplicationsForOrg](#actionslistrunnerapplicationsfororg) - List runner applications for an organization
* [actionsListRunnerApplicationsForRepo](#actionslistrunnerapplicationsforrepo) - List runner applications for a repository
* [actionsListSelectedReposForOrgSecret](#actionslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [actionsListSelfHostedRunnerGroupsForOrg](#actionslistselfhostedrunnergroupsfororg) - List self-hosted runner groups for an organization
* [actionsListSelfHostedRunnersForOrg](#actionslistselfhostedrunnersfororg) - List self-hosted runners for an organization
* [actionsListSelfHostedRunnersForRepo](#actionslistselfhostedrunnersforrepo) - List self-hosted runners for a repository
* [actionsListSelfHostedRunnersInGroupForOrg](#actionslistselfhostedrunnersingroupfororg) - List self-hosted runners in a group for an organization
* [actionsListWorkflowRunArtifacts](#actionslistworkflowrunartifacts) - List workflow run artifacts
* [actionsListWorkflowRuns](#actionslistworkflowruns) - List workflow runs
* [actionsListWorkflowRunsForRepo](#actionslistworkflowrunsforrepo) - List workflow runs for a repository
* [~~actionsReRunWorkflow~~](#actionsrerunworkflow) - Re-run a workflow :warning: **Deprecated**
* [actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg](#actionsremoverepoaccesstoselfhostedrunnergroupinorg) - Remove repository access to a self-hosted runner group in an organization
* [actionsRemoveSelectedRepoFromOrgSecret](#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [actionsRemoveSelfHostedRunnerFromGroupForOrg](#actionsremoveselfhostedrunnerfromgroupfororg) - Remove a self-hosted runner from a group for an organization
* [actionsSetRepoAccessToSelfHostedRunnerGroupInOrg](#actionssetrepoaccesstoselfhostedrunnergroupinorg) - Set repository access for a self-hosted runner group in an organization
* [actionsSetSelectedReposForOrgSecret](#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [actionsSetSelfHostedRunnersInGroupForOrg](#actionssetselfhostedrunnersingroupfororg) - Set self-hosted runners in a group for an organization
* [actionsUpdateSelfHostedRunnerGroupForOrg](#actionsupdateselfhostedrunnergroupfororg) - Update a self-hosted runner group for an organization

## actionsAddRepoAccessToSelfHostedRunnerGroupInOrg

Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->org = 'quibusdam';
    $request->repositoryId = 602763;
    $request->runnerGroupId = 857946;

    $response = $sdk->actions->actionsAddRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#add-selected-repository-to-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddSelectedRepoToOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddSelectedRepoToOrgSecretRequest();
    $request->org = 'corrupti';
    $request->repositoryId = 847252;
    $request->secretName = 'vel';

    $response = $sdk->actions->actionsAddSelectedRepoToOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsAddSelfHostedRunnerToGroupForOrg

Adds a self-hosted runner to a runner group configured in an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddSelfHostedRunnerToGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddSelfHostedRunnerToGroupForOrgRequest();
    $request->org = 'error';
    $request->runnerGroupId = 645894;
    $request->runnerId = 384382;

    $response = $sdk->actions->actionsAddSelfHostedRunnerToGroupForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCancelWorkflowRun

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#cancel-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCancelWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCancelWorkflowRunRequest();
    $request->owner = 'iure';
    $request->repo = 'magnam';
    $request->runId = 891773;

    $response = $sdk->actions->actionsCancelWorkflowRun($request);

    if ($response->actionsCancelWorkflowRun202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateOrUpdateOrgSecret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```


#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateOrgSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateOrgSecretRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateOrUpdateOrgSecretRequest();
    $request->requestBody = new ActionsCreateOrUpdateOrgSecretRequestBody();
    $request->requestBody->encryptedValue = 'ipsa';
    $request->requestBody->keyId = 'delectus';
    $request->requestBody->selectedRepositoryIds = [
        'suscipit',
        'molestiae',
    ];
    $request->requestBody->visibility = ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum::SELECTED;
    $request->org = 'placeat';
    $request->secretName = 'voluptatum';

    $response = $sdk->actions->actionsCreateOrUpdateOrgSecret($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```


#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateRepoSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateOrUpdateRepoSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateOrUpdateRepoSecretRequest();
    $request->requestBody = new ActionsCreateOrUpdateRepoSecretRequestBody();
    $request->requestBody->encryptedValue = 'iusto';
    $request->requestBody->keyId = 'excepturi';
    $request->owner = 'nisi';
    $request->repo = 'recusandae';
    $request->secretName = 'temporibus';

    $response = $sdk->actions->actionsCreateOrUpdateRepoSecret($request);

    if ($response->actionsCreateOrUpdateRepoSecret201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRegistrationTokenForOrg

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-registration-token-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRegistrationTokenForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRegistrationTokenForOrgRequest();
    $request->org = 'ab';

    $response = $sdk->actions->actionsCreateRegistrationTokenForOrg($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRegistrationTokenForRepo

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `repo` scope to use this endpoint.

#### Example using registration token
 
Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-registration-token-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRegistrationTokenForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRegistrationTokenForRepoRequest();
    $request->owner = 'quis';
    $request->repo = 'veritatis';

    $response = $sdk->actions->actionsCreateRegistrationTokenForRepo($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRemoveTokenForOrg

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-remove-token-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRemoveTokenForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRemoveTokenForOrgRequest();
    $request->org = 'deserunt';

    $response = $sdk->actions->actionsCreateRemoveTokenForOrg($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateRemoveTokenForRepo

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
You must authenticate using an access token with the `repo` scope to use this endpoint.

#### Example using remove token
 
To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-remove-token-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateRemoveTokenForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateRemoveTokenForRepoRequest();
    $request->owner = 'perferendis';
    $request->repo = 'ipsam';

    $response = $sdk->actions->actionsCreateRemoveTokenForRepo($request);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateSelfHostedRunnerGroupForOrg

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Creates a new self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateSelfHostedRunnerGroupForOrgRequest();
    $request->requestBody = new ActionsCreateSelfHostedRunnerGroupForOrgRequestBody();
    $request->requestBody->name = 'Timmy Satterfield';
    $request->requestBody->runners = [
        978619,
        473608,
        799159,
        800911,
    ];
    $request->requestBody->selectedRepositoryIds = [
        520478,
        780529,
    ];
    $request->requestBody->visibility = ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum::PRIVATE;
    $request->org = 'dicta';

    $response = $sdk->actions->actionsCreateSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsCreateWorkflowDispatch

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-a-workflow-dispatch-event>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateWorkflowDispatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsCreateWorkflowDispatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsCreateWorkflowDispatchRequest();
    $request->requestBody = new ActionsCreateWorkflowDispatchRequestBody();
    $request->requestBody->inputs = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->requestBody->ref = 'totam';
    $request->owner = 'beatae';
    $request->repo = 'commodi';
    $request->workflowId = 264555;

    $response = $sdk->actions->actionsCreateWorkflowDispatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteArtifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-an-artifact>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteArtifactRequest();
    $request->artifactId = 186332;
    $request->owner = 'impedit';
    $request->repo = 'cum';

    $response = $sdk->actions->actionsDeleteArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteOrgSecretRequest();
    $request->org = 'esse';
    $request->secretName = 'ipsum';

    $response = $sdk->actions->actionsDeleteOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteRepoSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteRepoSecretRequest();
    $request->owner = 'excepturi';
    $request->repo = 'aspernatur';
    $request->secretName = 'perferendis';

    $response = $sdk->actions->actionsDeleteRepoSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteSelfHostedRunnerFromOrg

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteSelfHostedRunnerFromOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteSelfHostedRunnerFromOrgRequest();
    $request->org = 'ad';
    $request->runnerId = 617636;

    $response = $sdk->actions->actionsDeleteSelfHostedRunnerFromOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteSelfHostedRunnerFromRepo

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo`
scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteSelfHostedRunnerFromRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteSelfHostedRunnerFromRepoRequest();
    $request->owner = 'sed';
    $request->repo = 'iste';
    $request->runnerId = 222321;

    $response = $sdk->actions->actionsDeleteSelfHostedRunnerFromRepo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteSelfHostedRunnerGroupFromOrg

Deletes a self-hosted runner group for an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteSelfHostedRunnerGroupFromOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteSelfHostedRunnerGroupFromOrgRequest();
    $request->org = 'natus';
    $request->runnerGroupId = 386489;

    $response = $sdk->actions->actionsDeleteSelfHostedRunnerGroupFromOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteWorkflowRun

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteWorkflowRunRequest();
    $request->owner = 'hic';
    $request->repo = 'saepe';
    $request->runId = 681820;

    $response = $sdk->actions->actionsDeleteWorkflowRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDeleteWorkflowRunLogs

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#delete-workflow-run-logs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDeleteWorkflowRunLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDeleteWorkflowRunLogsRequest();
    $request->owner = 'in';
    $request->repo = 'corporis';
    $request->runId = 613064;

    $response = $sdk->actions->actionsDeleteWorkflowRunLogs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadArtifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#download-an-artifact>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadArtifactRequest();
    $request->archiveFormat = 'iure';
    $request->artifactId = 902349;
    $request->owner = 'quidem';
    $request->repo = 'architecto';

    $response = $sdk->actions->actionsDownloadArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadJobLogsForWorkflowRun

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#download-job-logs-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadJobLogsForWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadJobLogsForWorkflowRunRequest();
    $request->jobId = 60225;
    $request->owner = 'reiciendis';
    $request->repo = 'est';

    $response = $sdk->actions->actionsDownloadJobLogsForWorkflowRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsDownloadWorkflowRunLogs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
`Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#download-workflow-run-logs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsDownloadWorkflowRunLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsDownloadWorkflowRunLogsRequest();
    $request->owner = 'mollitia';
    $request->repo = 'laborum';
    $request->runId = 170909;

    $response = $sdk->actions->actionsDownloadWorkflowRunLogs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetArtifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-an-artifact>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetArtifactRequest();
    $request->artifactId = 210382;
    $request->owner = 'corporis';
    $request->repo = 'explicabo';

    $response = $sdk->actions->actionsGetArtifact($request);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetJobForWorkflowRun

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-job-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetJobForWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetJobForWorkflowRunRequest();
    $request->jobId = 750686;
    $request->owner = 'enim';
    $request->repo = 'omnis';

    $response = $sdk->actions->actionsGetJobForWorkflowRun($request);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-an-organization-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetOrgPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetOrgPublicKeyRequest();
    $request->org = 'nemo';

    $response = $sdk->actions->actionsGetOrgPublicKey($request);

    if ($response->actionsPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetOrgSecretRequest();
    $request->org = 'minima';
    $request->secretName = 'excepturi';

    $response = $sdk->actions->actionsGetOrgSecret($request);

    if ($response->organizationActionsSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-repository-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetRepoPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetRepoPublicKeyRequest();
    $request->owner = 'accusantium';
    $request->repo = 'iure';

    $response = $sdk->actions->actionsGetRepoPublicKey($request);

    if ($response->actionsPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetRepoSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetRepoSecretRequest();
    $request->owner = 'culpa';
    $request->repo = 'doloribus';
    $request->secretName = 'sapiente';

    $response = $sdk->actions->actionsGetRepoSecret($request);

    if ($response->actionsSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetSelfHostedRunnerForOrg

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-self-hosted-runner-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetSelfHostedRunnerForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetSelfHostedRunnerForOrgRequest();
    $request->org = 'architecto';
    $request->runnerId = 652790;

    $response = $sdk->actions->actionsGetSelfHostedRunnerForOrg($request);

    if ($response->runnerNoLabels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetSelfHostedRunnerForRepo

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-self-hosted-runner-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetSelfHostedRunnerForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetSelfHostedRunnerForRepoRequest();
    $request->owner = 'dolorem';
    $request->repo = 'culpa';
    $request->runnerId = 161309;

    $response = $sdk->actions->actionsGetSelfHostedRunnerForRepo($request);

    if ($response->runnerNoLabels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetSelfHostedRunnerGroupForOrg

Gets a specific self-hosted runner group for an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetSelfHostedRunnerGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetSelfHostedRunnerGroupForOrgRequest();
    $request->org = 'repellat';
    $request->runnerGroupId = 653108;

    $response = $sdk->actions->actionsGetSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflow

Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-workflow>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetWorkflowRequest();
    $request->owner = 'occaecati';
    $request->repo = 'numquam';
    $request->workflowId = 466311;

    $response = $sdk->actions->actionsGetWorkflow($request);

    if ($response->workflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsGetWorkflowRun

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsGetWorkflowRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsGetWorkflowRunRequest();
    $request->excludePullRequests = false;
    $request->owner = 'molestiae';
    $request->repo = 'velit';
    $request->runId = 623510;

    $response = $sdk->actions->actionsGetWorkflowRun($request);

    if ($response->workflowRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListArtifactsForRepo

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-artifacts-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListArtifactsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListArtifactsForRepoRequest();
    $request->owner = 'quia';
    $request->page = 338007;
    $request->perPage = 110375;
    $request->repo = 'laborum';

    $response = $sdk->actions->actionsListArtifactsForRepo($request);

    if ($response->actionsListArtifactsForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListJobsForWorkflowRun

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-jobs-for-a-workflow-run>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListJobsForWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListJobsForWorkflowRunFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListJobsForWorkflowRunRequest();
    $request->filter = ActionsListJobsForWorkflowRunFilterEnum::ALL;
    $request->owner = 'enim';
    $request->page = 138183;
    $request->perPage = 778346;
    $request->repo = 'sequi';
    $request->runId = 949572;

    $response = $sdk->actions->actionsListJobsForWorkflowRun($request);

    if ($response->actionsListJobsForWorkflowRun200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-organization-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListOrgSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListOrgSecretsRequest();
    $request->org = 'ipsam';
    $request->page = 662527;
    $request->perPage = 820994;

    $response = $sdk->actions->actionsListOrgSecrets($request);

    if ($response->actionsListOrgSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRepoAccessToSelfHostedRunnerGroupInOrg

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Lists the repositories with access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->org = 'aut';
    $request->page = 97101;
    $request->perPage = 622846;
    $request->runnerGroupId = 837945;

    $response = $sdk->actions->actionsListRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-repository-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRepoSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRepoSecretsRequest();
    $request->owner = 'laborum';
    $request->page = 96098;
    $request->perPage = 971945;
    $request->repo = 'voluptatibus';

    $response = $sdk->actions->actionsListRepoSecrets($request);

    if ($response->actionsListRepoSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRepoWorkflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-repository-workflows>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRepoWorkflowsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRepoWorkflowsRequest();
    $request->owner = 'vero';
    $request->page = 468651;
    $request->perPage = 509624;
    $request->repo = 'voluptatibus';

    $response = $sdk->actions->actionsListRepoWorkflows($request);

    if ($response->actionsListRepoWorkflows200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRunnerApplicationsForOrg

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-runner-applications-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRunnerApplicationsForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRunnerApplicationsForOrgRequest();
    $request->org = 'ipsa';

    $response = $sdk->actions->actionsListRunnerApplicationsForOrg($request);

    if ($response->runnerApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListRunnerApplicationsForRepo

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-runner-applications-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListRunnerApplicationsForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListRunnerApplicationsForRepoRequest();
    $request->owner = 'omnis';
    $request->repo = 'voluptate';

    $response = $sdk->actions->actionsListRunnerApplicationsForRepo($request);

    if ($response->runnerApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-selected-repositories-for-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelectedReposForOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelectedReposForOrgSecretRequest();
    $request->org = 'cum';
    $request->page = 19987;
    $request->perPage = 39187;
    $request->secretName = 'reprehenderit';

    $response = $sdk->actions->actionsListSelectedReposForOrgSecret($request);

    if ($response->actionsListSelectedReposForOrgSecret200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnerGroupsForOrg

Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnerGroupsForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnerGroupsForOrgRequest();
    $request->org = 'ut';
    $request->page = 979587;
    $request->perPage = 120196;

    $response = $sdk->actions->actionsListSelfHostedRunnerGroupsForOrg($request);

    if ($response->actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnersForOrg

Lists all self-hosted runners configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runners-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnersForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnersForOrgRequest();
    $request->org = 'corporis';
    $request->page = 296140;
    $request->perPage = 480894;

    $response = $sdk->actions->actionsListSelfHostedRunnersForOrg($request);

    if ($response->actionsListSelfHostedRunnersForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnersForRepo

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runners-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnersForRepoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnersForRepoRequest();
    $request->owner = 'dicta';
    $request->page = 688661;
    $request->perPage = 317983;
    $request->repo = 'accusamus';

    $response = $sdk->actions->actionsListSelfHostedRunnersForRepo($request);

    if ($response->actionsListSelfHostedRunnersForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListSelfHostedRunnersInGroupForOrg

Lists self-hosted runners that are in a specific organization group.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListSelfHostedRunnersInGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListSelfHostedRunnersInGroupForOrgRequest();
    $request->org = 'commodi';
    $request->page = 918236;
    $request->perPage = 64147;
    $request->runnerGroupId = 216822;

    $response = $sdk->actions->actionsListSelfHostedRunnersInGroupForOrg($request);

    if ($response->actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRunArtifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-workflow-run-artifacts>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListWorkflowRunArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListWorkflowRunArtifactsRequest();
    $request->owner = 'quidem';
    $request->page = 565189;
    $request->perPage = 566602;
    $request->repo = 'pariatur';
    $request->runId = 265389;

    $response = $sdk->actions->actionsListWorkflowRunArtifacts($request);

    if ($response->actionsListWorkflowRunArtifacts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRuns

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-workflow-runs>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListWorkflowRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowRunStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListWorkflowRunsRequest();
    $request->actor = 'praesentium';
    $request->branch = 'rem';
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-20T03:14:35.704Z');
    $request->event = 'repudiandae';
    $request->excludePullRequests = false;
    $request->owner = 'sint';
    $request->page = 83112;
    $request->perPage = 929297;
    $request->repo = 'incidunt';
    $request->status = WorkflowRunStatusEnum::NEUTRAL;
    $request->workflowId = 667411;

    $response = $sdk->actions->actionsListWorkflowRuns($request);

    if ($response->actionsListWorkflowRuns200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsListWorkflowRunsForRepo

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#list-workflow-runs-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsListWorkflowRunsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowRunStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsListWorkflowRunsForRepoRequest();
    $request->actor = 'quibusdam';
    $request->branch = 'explicabo';
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T01:56:50.693Z');
    $request->event = 'quibusdam';
    $request->excludePullRequests = false;
    $request->owner = 'labore';
    $request->page = 264730;
    $request->perPage = 183191;
    $request->repo = 'aliquid';
    $request->status = WorkflowRunStatusEnum::SUCCESS;

    $response = $sdk->actions->actionsListWorkflowRunsForRepo($request);

    if ($response->actionsListWorkflowRunsForRepo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~actionsReRunWorkflow~~

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#re-run-a-workflow>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsReRunWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsReRunWorkflowRequest();
    $request->owner = 'quos';
    $request->repo = 'perferendis';
    $request->runId = 164940;

    $response = $sdk->actions->actionsReRunWorkflow($request);

    if ($response->actionsReRunWorkflow201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg

Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->org = 'assumenda';
    $request->repositoryId = 369808;
    $request->runnerGroupId = 4695;

    $response = $sdk->actions->actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#remove-selected-repository-from-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveSelectedRepoFromOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveSelectedRepoFromOrgSecretRequest();
    $request->org = 'fugit';
    $request->repositoryId = 677817;
    $request->secretName = 'excepturi';

    $response = $sdk->actions->actionsRemoveSelectedRepoFromOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsRemoveSelfHostedRunnerFromGroupForOrg

Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest();
    $request->org = 'tempora';
    $request->runnerGroupId = 703737;
    $request->runnerId = 735194;

    $response = $sdk->actions->actionsRemoveSelfHostedRunnerFromGroupForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetRepoAccessToSelfHostedRunnerGroupInOrg

Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest();
    $request->requestBody = new ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody();
    $request->requestBody->selectedRepositoryIds = [
        962189,
        433288,
    ];
    $request->org = 'non';
    $request->runnerGroupId = 756107;

    $response = $sdk->actions->actionsSetRepoAccessToSelfHostedRunnerGroupInOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#set-selected-repositories-for-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelectedReposForOrgSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelectedReposForOrgSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetSelectedReposForOrgSecretRequest();
    $request->requestBody = new ActionsSetSelectedReposForOrgSecretRequestBody();
    $request->requestBody->selectedRepositoryIds = [
        396098,
        592042,
        896039,
    ];
    $request->org = 'sint';
    $request->secretName = 'officia';

    $response = $sdk->actions->actionsSetSelectedReposForOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsSetSelfHostedRunnersInGroupForOrg

Replaces the list of self-hosted runners that are part of an organization runner group.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelfHostedRunnersInGroupForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsSetSelfHostedRunnersInGroupForOrgRequest();
    $request->requestBody = new ActionsSetSelfHostedRunnersInGroupForOrgRequestBody();
    $request->requestBody->runners = [
        891555,
    ];
    $request->org = 'a';
    $request->runnerGroupId = 680056;

    $response = $sdk->actions->actionsSetSelfHostedRunnersInGroupForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## actionsUpdateSelfHostedRunnerGroupForOrg

Updates the `name` and `visibility` of a self-hosted runner group in an organization.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsUpdateSelfHostedRunnerGroupForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsUpdateSelfHostedRunnerGroupForOrgRequest();
    $request->requestBody = new ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody();
    $request->requestBody->name = 'Arlene Stamm';
    $request->requestBody->visibility = ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum::SELECTED;
    $request->org = 'magnam';
    $request->runnerGroupId = 767024;

    $response = $sdk->actions->actionsUpdateSelfHostedRunnerGroupForOrg($request);

    if ($response->runnerGroupsOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
