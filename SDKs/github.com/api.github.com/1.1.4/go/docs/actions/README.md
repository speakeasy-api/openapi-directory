# Actions

## Overview

Endpoints to manage GitHub Actions using the REST API.

### Available Operations

* [ActionsAddCustomLabelsToSelfHostedRunnerForOrg](#actionsaddcustomlabelstoselfhostedrunnerfororg) - Add custom labels to a self-hosted runner for an organization
* [ActionsAddCustomLabelsToSelfHostedRunnerForRepo](#actionsaddcustomlabelstoselfhostedrunnerforrepo) - Add custom labels to a self-hosted runner for a repository
* [ActionsAddSelectedRepoToOrgSecret](#actionsaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [ActionsAddSelectedRepoToOrgVariable](#actionsaddselectedrepotoorgvariable) - Add selected repository to an organization variable
* [ActionsAddSelectedRepoToRequiredWorkflow](#actionsaddselectedrepotorequiredworkflow) - Add a repository to a required workflow
* [ActionsApproveWorkflowRun](#actionsapproveworkflowrun) - Approve a workflow run for a fork pull request
* [ActionsCancelWorkflowRun](#actionscancelworkflowrun) - Cancel a workflow run
* [ActionsCreateEnvironmentVariable](#actionscreateenvironmentvariable) - Create an environment variable
* [ActionsCreateOrUpdateEnvironmentSecret](#actionscreateorupdateenvironmentsecret) - Create or update an environment secret
* [ActionsCreateOrUpdateOrgSecret](#actionscreateorupdateorgsecret) - Create or update an organization secret
* [ActionsCreateOrUpdateRepoSecret](#actionscreateorupdatereposecret) - Create or update a repository secret
* [ActionsCreateOrgVariable](#actionscreateorgvariable) - Create an organization variable
* [ActionsCreateRegistrationTokenForOrg](#actionscreateregistrationtokenfororg) - Create a registration token for an organization
* [ActionsCreateRegistrationTokenForRepo](#actionscreateregistrationtokenforrepo) - Create a registration token for a repository
* [ActionsCreateRemoveTokenForOrg](#actionscreateremovetokenfororg) - Create a remove token for an organization
* [ActionsCreateRemoveTokenForRepo](#actionscreateremovetokenforrepo) - Create a remove token for a repository
* [ActionsCreateRepoVariable](#actionscreaterepovariable) - Create a repository variable
* [ActionsCreateRequiredWorkflow](#actionscreaterequiredworkflow) - Create a required workflow
* [ActionsCreateWorkflowDispatch](#actionscreateworkflowdispatch) - Create a workflow dispatch event
* [ActionsDeleteActionsCacheByID](#actionsdeleteactionscachebyid) - Delete a GitHub Actions cache for a repository (using a cache ID)
* [ActionsDeleteActionsCacheByKey](#actionsdeleteactionscachebykey) - Delete GitHub Actions caches for a repository (using a cache key)
* [ActionsDeleteArtifact](#actionsdeleteartifact) - Delete an artifact
* [ActionsDeleteEnvironmentSecret](#actionsdeleteenvironmentsecret) - Delete an environment secret
* [ActionsDeleteEnvironmentVariable](#actionsdeleteenvironmentvariable) - Delete an environment variable
* [ActionsDeleteOrgSecret](#actionsdeleteorgsecret) - Delete an organization secret
* [ActionsDeleteOrgVariable](#actionsdeleteorgvariable) - Delete an organization variable
* [ActionsDeleteRepoSecret](#actionsdeletereposecret) - Delete a repository secret
* [ActionsDeleteRepoVariable](#actionsdeleterepovariable) - Delete a repository variable
* [ActionsDeleteRequiredWorkflow](#actionsdeleterequiredworkflow) - Delete a required workflow
* [ActionsDeleteSelfHostedRunnerFromOrg](#actionsdeleteselfhostedrunnerfromorg) - Delete a self-hosted runner from an organization
* [ActionsDeleteSelfHostedRunnerFromRepo](#actionsdeleteselfhostedrunnerfromrepo) - Delete a self-hosted runner from a repository
* [ActionsDeleteWorkflowRun](#actionsdeleteworkflowrun) - Delete a workflow run
* [ActionsDeleteWorkflowRunLogs](#actionsdeleteworkflowrunlogs) - Delete workflow run logs
* [ActionsDisableSelectedRepositoryGithubActionsOrganization](#actionsdisableselectedrepositorygithubactionsorganization) - Disable a selected repository for GitHub Actions in an organization
* [ActionsDisableWorkflow](#actionsdisableworkflow) - Disable a workflow
* [ActionsDownloadArtifact](#actionsdownloadartifact) - Download an artifact
* [ActionsDownloadJobLogsForWorkflowRun](#actionsdownloadjoblogsforworkflowrun) - Download job logs for a workflow run
* [ActionsDownloadWorkflowRunAttemptLogs](#actionsdownloadworkflowrunattemptlogs) - Download workflow run attempt logs
* [ActionsDownloadWorkflowRunLogs](#actionsdownloadworkflowrunlogs) - Download workflow run logs
* [ActionsEnableSelectedRepositoryGithubActionsOrganization](#actionsenableselectedrepositorygithubactionsorganization) - Enable a selected repository for GitHub Actions in an organization
* [ActionsEnableWorkflow](#actionsenableworkflow) - Enable a workflow
* [ActionsGetActionsCacheList](#actionsgetactionscachelist) - List GitHub Actions caches for a repository
* [ActionsGetActionsCacheUsage](#actionsgetactionscacheusage) - Get GitHub Actions cache usage for a repository
* [ActionsGetActionsCacheUsageByRepoForOrg](#actionsgetactionscacheusagebyrepofororg) - List repositories with GitHub Actions cache usage for an organization
* [ActionsGetActionsCacheUsageForOrg](#actionsgetactionscacheusagefororg) - Get GitHub Actions cache usage for an organization
* [ActionsGetAllowedActionsOrganization](#actionsgetallowedactionsorganization) - Get allowed actions and reusable workflows for an organization
* [ActionsGetAllowedActionsRepository](#actionsgetallowedactionsrepository) - Get allowed actions and reusable workflows for a repository
* [ActionsGetArtifact](#actionsgetartifact) - Get an artifact
* [ActionsGetCustomOidcSubClaimForRepo](#actionsgetcustomoidcsubclaimforrepo) - Get the customization template for an OIDC subject claim for a repository
* [ActionsGetEnvironmentPublicKey](#actionsgetenvironmentpublickey) - Get an environment public key
* [ActionsGetEnvironmentSecret](#actionsgetenvironmentsecret) - Get an environment secret
* [ActionsGetEnvironmentVariable](#actionsgetenvironmentvariable) - Get an environment variable
* [ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization](#actionsgetgithubactionsdefaultworkflowpermissionsorganization) - Get default workflow permissions for an organization
* [ActionsGetGithubActionsDefaultWorkflowPermissionsRepository](#actionsgetgithubactionsdefaultworkflowpermissionsrepository) - Get default workflow permissions for a repository
* [ActionsGetGithubActionsPermissionsOrganization](#actionsgetgithubactionspermissionsorganization) - Get GitHub Actions permissions for an organization
* [ActionsGetGithubActionsPermissionsRepository](#actionsgetgithubactionspermissionsrepository) - Get GitHub Actions permissions for a repository
* [ActionsGetJobForWorkflowRun](#actionsgetjobforworkflowrun) - Get a job for a workflow run
* [ActionsGetOrgPublicKey](#actionsgetorgpublickey) - Get an organization public key
* [ActionsGetOrgSecret](#actionsgetorgsecret) - Get an organization secret
* [ActionsGetOrgVariable](#actionsgetorgvariable) - Get an organization variable
* [ActionsGetPendingDeploymentsForRun](#actionsgetpendingdeploymentsforrun) - Get pending deployments for a workflow run
* [ActionsGetRepoPublicKey](#actionsgetrepopublickey) - Get a repository public key
* [ActionsGetRepoRequiredWorkflow](#actionsgetreporequiredworkflow) - Get a required workflow entity for a repository
* [ActionsGetRepoRequiredWorkflowUsage](#actionsgetreporequiredworkflowusage) - Get required workflow usage
* [ActionsGetRepoSecret](#actionsgetreposecret) - Get a repository secret
* [ActionsGetRepoVariable](#actionsgetrepovariable) - Get a repository variable
* [ActionsGetRequiredWorkflow](#actionsgetrequiredworkflow) - Get a required workflow
* [ActionsGetReviewsForRun](#actionsgetreviewsforrun) - Get the review history for a workflow run
* [ActionsGetSelfHostedRunnerForOrg](#actionsgetselfhostedrunnerfororg) - Get a self-hosted runner for an organization
* [ActionsGetSelfHostedRunnerForRepo](#actionsgetselfhostedrunnerforrepo) - Get a self-hosted runner for a repository
* [ActionsGetWorkflow](#actionsgetworkflow) - Get a workflow
* [ActionsGetWorkflowAccessToRepository](#actionsgetworkflowaccesstorepository) - Get the level of access for workflows outside of the repository
* [ActionsGetWorkflowRun](#actionsgetworkflowrun) - Get a workflow run
* [ActionsGetWorkflowRunAttempt](#actionsgetworkflowrunattempt) - Get a workflow run attempt
* [ActionsGetWorkflowRunUsage](#actionsgetworkflowrunusage) - Get workflow run usage
* [ActionsGetWorkflowUsage](#actionsgetworkflowusage) - Get workflow usage
* [ActionsListArtifactsForRepo](#actionslistartifactsforrepo) - List artifacts for a repository
* [ActionsListEnvironmentSecrets](#actionslistenvironmentsecrets) - List environment secrets
* [ActionsListEnvironmentVariables](#actionslistenvironmentvariables) - List environment variables
* [ActionsListJobsForWorkflowRun](#actionslistjobsforworkflowrun) - List jobs for a workflow run
* [ActionsListJobsForWorkflowRunAttempt](#actionslistjobsforworkflowrunattempt) - List jobs for a workflow run attempt
* [ActionsListLabelsForSelfHostedRunnerForOrg](#actionslistlabelsforselfhostedrunnerfororg) - List labels for a self-hosted runner for an organization
* [ActionsListLabelsForSelfHostedRunnerForRepo](#actionslistlabelsforselfhostedrunnerforrepo) - List labels for a self-hosted runner for a repository
* [ActionsListOrgSecrets](#actionslistorgsecrets) - List organization secrets
* [ActionsListOrgVariables](#actionslistorgvariables) - List organization variables
* [ActionsListRepoRequiredWorkflows](#actionslistreporequiredworkflows) - List repository required workflows
* [ActionsListRepoSecrets](#actionslistreposecrets) - List repository secrets
* [ActionsListRepoVariables](#actionslistrepovariables) - List repository variables
* [ActionsListRepoWorkflows](#actionslistrepoworkflows) - List repository workflows
* [ActionsListRequiredWorkflowRuns](#actionslistrequiredworkflowruns) - List workflow runs for a required workflow
* [ActionsListRequiredWorkflows](#actionslistrequiredworkflows) - List required workflows
* [ActionsListRunnerApplicationsForOrg](#actionslistrunnerapplicationsfororg) - List runner applications for an organization
* [ActionsListRunnerApplicationsForRepo](#actionslistrunnerapplicationsforrepo) - List runner applications for a repository
* [ActionsListSelectedReposForOrgSecret](#actionslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [ActionsListSelectedReposForOrgVariable](#actionslistselectedreposfororgvariable) - List selected repositories for an organization variable
* [ActionsListSelectedRepositoriesEnabledGithubActionsOrganization](#actionslistselectedrepositoriesenabledgithubactionsorganization) - List selected repositories enabled for GitHub Actions in an organization
* [ActionsListSelectedRepositoriesRequiredWorkflow](#actionslistselectedrepositoriesrequiredworkflow) - List selected repositories for a required workflow
* [ActionsListSelfHostedRunnersForOrg](#actionslistselfhostedrunnersfororg) - List self-hosted runners for an organization
* [ActionsListSelfHostedRunnersForRepo](#actionslistselfhostedrunnersforrepo) - List self-hosted runners for a repository
* [ActionsListWorkflowRunArtifacts](#actionslistworkflowrunartifacts) - List workflow run artifacts
* [ActionsListWorkflowRuns](#actionslistworkflowruns) - List workflow runs for a workflow
* [ActionsListWorkflowRunsForRepo](#actionslistworkflowrunsforrepo) - List workflow runs for a repository
* [ActionsReRunJobForWorkflowRun](#actionsrerunjobforworkflowrun) - Re-run a job from a workflow run
* [ActionsReRunWorkflow](#actionsrerunworkflow) - Re-run a workflow
* [ActionsReRunWorkflowFailedJobs](#actionsrerunworkflowfailedjobs) - Re-run failed jobs from a workflow run
* [ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg](#actionsremoveallcustomlabelsfromselfhostedrunnerfororg) - Remove all custom labels from a self-hosted runner for an organization
* [ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo](#actionsremoveallcustomlabelsfromselfhostedrunnerforrepo) - Remove all custom labels from a self-hosted runner for a repository
* [ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg](#actionsremovecustomlabelfromselfhostedrunnerfororg) - Remove a custom label from a self-hosted runner for an organization
* [ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo](#actionsremovecustomlabelfromselfhostedrunnerforrepo) - Remove a custom label from a self-hosted runner for a repository
* [ActionsRemoveSelectedRepoFromOrgSecret](#actionsremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [ActionsRemoveSelectedRepoFromOrgVariable](#actionsremoveselectedrepofromorgvariable) - Remove selected repository from an organization variable
* [ActionsRemoveSelectedRepoFromRequiredWorkflow](#actionsremoveselectedrepofromrequiredworkflow) - Remove a selected repository from required workflow
* [ActionsReviewPendingDeploymentsForRun](#actionsreviewpendingdeploymentsforrun) - Review pending deployments for a workflow run
* [ActionsSetAllowedActionsOrganization](#actionssetallowedactionsorganization) - Set allowed actions and reusable workflows for an organization
* [ActionsSetAllowedActionsRepository](#actionssetallowedactionsrepository) - Set allowed actions and reusable workflows for a repository
* [ActionsSetCustomLabelsForSelfHostedRunnerForOrg](#actionssetcustomlabelsforselfhostedrunnerfororg) - Set custom labels for a self-hosted runner for an organization
* [ActionsSetCustomLabelsForSelfHostedRunnerForRepo](#actionssetcustomlabelsforselfhostedrunnerforrepo) - Set custom labels for a self-hosted runner for a repository
* [ActionsSetCustomOidcSubClaimForRepo](#actionssetcustomoidcsubclaimforrepo) - Set the customization template for an OIDC subject claim for a repository
* [ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization](#actionssetgithubactionsdefaultworkflowpermissionsorganization) - Set default workflow permissions for an organization
* [ActionsSetGithubActionsDefaultWorkflowPermissionsRepository](#actionssetgithubactionsdefaultworkflowpermissionsrepository) - Set default workflow permissions for a repository
* [ActionsSetGithubActionsPermissionsOrganization](#actionssetgithubactionspermissionsorganization) - Set GitHub Actions permissions for an organization
* [ActionsSetGithubActionsPermissionsRepository](#actionssetgithubactionspermissionsrepository) - Set GitHub Actions permissions for a repository
* [ActionsSetSelectedReposForOrgSecret](#actionssetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [ActionsSetSelectedReposForOrgVariable](#actionssetselectedreposfororgvariable) - Set selected repositories for an organization variable
* [ActionsSetSelectedReposToRequiredWorkflow](#actionssetselectedrepostorequiredworkflow) - Sets repositories for a required workflow
* [ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization](#actionssetselectedrepositoriesenabledgithubactionsorganization) - Set selected repositories enabled for GitHub Actions in an organization
* [ActionsSetWorkflowAccessToRepository](#actionssetworkflowaccesstorepository) - Set the level of access for workflows outside of the repository
* [ActionsUpdateEnvironmentVariable](#actionsupdateenvironmentvariable) - Update an environment variable
* [ActionsUpdateOrgVariable](#actionsupdateorgvariable) - Update an organization variable
* [ActionsUpdateRepoVariable](#actionsupdaterepovariable) - Update a repository variable
* [ActionsUpdateRequiredWorkflow](#actionsupdaterequiredworkflow) - Update a required workflow

## ActionsAddCustomLabelsToSelfHostedRunnerForOrg

Add custom labels to a self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsAddCustomLabelsToSelfHostedRunnerForOrg(ctx, operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest{
        RequestBody: operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody{
            Labels: []string{
                "illum",
                "vel",
                "error",
            },
        },
        Org: "deserunt",
        RunnerID: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsAddCustomLabelsToSelfHostedRunnerForRepo

Add custom labels to a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsAddCustomLabelsToSelfHostedRunnerForRepo(ctx, operations.ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest{
        RequestBody: operations.ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody{
            Labels: []string{
                "magnam",
                "debitis",
            },
        },
        Owner: "ipsa",
        Repo: "delectus",
        RunnerID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsAddCustomLabelsToSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsAddSelectedRepoToOrgSecret(ctx, operations.ActionsAddSelectedRepoToOrgSecretRequest{
        Org: "suscipit",
        RepositoryID: 477665,
        SecretName: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsAddSelectedRepoToOrgVariable

Adds a repository to an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#add-selected-repository-to-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsAddSelectedRepoToOrgVariable(ctx, operations.ActionsAddSelectedRepoToOrgVariableRequest{
        Name: "Ken Kshlerin",
        Org: "recusandae",
        RepositoryID: 836079,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsAddSelectedRepoToRequiredWorkflow

Adds a repository to a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#add-a-repository-to-selected-repositories-list-for-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsAddSelectedRepoToRequiredWorkflow(ctx, operations.ActionsAddSelectedRepoToRequiredWorkflowRequest{
        Org: "ab",
        RepositoryID: 337396,
        RequiredWorkflowID: 87129,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsApproveWorkflowRun

Approves a workflow run for a pull request from a public fork of a first time contributor. For more information, see ["Approving workflow runs from public forks](https://docs.github.com/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsApproveWorkflowRun(ctx, operations.ActionsApproveWorkflowRunRequest{
        Owner: "deserunt",
        Repo: "perferendis",
        RunID: 368241,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCancelWorkflowRun

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#cancel-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCancelWorkflowRun(ctx, operations.ActionsCancelWorkflowRunRequest{
        Owner: "repellendus",
        Repo: "sapiente",
        RunID: 778157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateEnvironmentVariable

Create an environment variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `environment:write` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#create-an-environment-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateEnvironmentVariable(ctx, operations.ActionsCreateEnvironmentVariableRequest{
        RequestBody: operations.ActionsCreateEnvironmentVariableRequestBody{
            Name: "Teri Strosin",
            Value: "quod",
        },
        EnvironmentName: "quod",
        RepositoryID: 461479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrUpdateEnvironmentSecret

Creates or updates an environment secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

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
<https://docs.github.com/rest/reference/actions#create-or-update-an-environment-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateOrUpdateEnvironmentSecret(ctx, operations.ActionsCreateOrUpdateEnvironmentSecretRequest{
        RequestBody: operations.ActionsCreateOrUpdateEnvironmentSecretRequestBody{
            EncryptedValue: "totam",
            KeyID: "porro",
        },
        EnvironmentName: "dolorum",
        RepositoryID: 118274,
        SecretName: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrUpdateOrgSecret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

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
<https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateOrUpdateOrgSecret(ctx, operations.ActionsCreateOrUpdateOrgSecretRequest{
        RequestBody: operations.ActionsCreateOrUpdateOrgSecretRequestBody{
            EncryptedValue: sdk.String("officia"),
            KeyID: sdk.String("occaecati"),
            SelectedRepositoryIds: []int64{
                537373,
            },
            Visibility: operations.ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnumSelected,
        },
        Org: "optio",
        SecretName: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

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
<https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateOrUpdateRepoSecret(ctx, operations.ActionsCreateOrUpdateRepoSecretRequest{
        RequestBody: operations.ActionsCreateOrUpdateRepoSecretRequestBody{
            EncryptedValue: sdk.String("beatae"),
            KeyID: sdk.String("commodi"),
        },
        Owner: "molestiae",
        Repo: "modi",
        SecretName: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateOrgVariable

Creates an organization variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.
GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#create-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateOrgVariable(ctx, operations.ActionsCreateOrgVariableRequest{
        RequestBody: operations.ActionsCreateOrgVariableRequestBody{
            Name: "Jonathon Klocko",
            SelectedRepositoryIds: []int64{
                18789,
            },
            Value: "ad",
            Visibility: operations.ActionsCreateOrgVariableRequestBodyVisibilityEnumPrivate,
        },
        Org: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateRegistrationTokenForOrg

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

API method documentation
<https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateRegistrationTokenForOrg(ctx, operations.ActionsCreateRegistrationTokenForOrgRequest{
        Org: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRegistrationTokenForRepo

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `repo` scope to use this endpoint.

#### Example using registration token
 
Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
```

API method documentation
<https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateRegistrationTokenForRepo(ctx, operations.ActionsCreateRegistrationTokenForRepoRequest{
        Owner: "dolor",
        Repo: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRemoveTokenForOrg

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateRemoveTokenForOrg(ctx, operations.ActionsCreateRemoveTokenForOrgRequest{
        Org: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRemoveTokenForRepo

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
You must authenticate using an access token with the `repo` scope to use this endpoint.

#### Example using remove token
 
To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```

API method documentation
<https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateRemoveTokenForRepo(ctx, operations.ActionsCreateRemoveTokenForRepoRequest{
        Owner: "hic",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## ActionsCreateRepoVariable

Creates a repository variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#create-a-repository-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateRepoVariable(ctx, operations.ActionsCreateRepoVariableRequest{
        RequestBody: operations.ActionsCreateRepoVariableRequestBody{
            Name: "Harvey Hessel",
            Value: "saepe",
        },
        Owner: "quidem",
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsCreateRequiredWorkflow

Create a required workflow in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#create-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateRequiredWorkflow(ctx, operations.ActionsCreateRequiredWorkflowRequest{
        RequestBody: operations.ActionsCreateRequiredWorkflowRequestBody{
            RepositoryID: "ipsa",
            Scope: operations.ActionsCreateRequiredWorkflowRequestBodyScopeEnumAll.ToPointer(),
            SelectedRepositoryIds: []int64{
                653140,
                670638,
                170909,
            },
            WorkflowFilePath: "dolorem",
        },
        Org: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequiredWorkflow != nil {
        // handle response
    }
}
```

## ActionsCreateWorkflowDispatch

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)."

API method documentation
<https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsCreateWorkflowDispatch(ctx, operations.ActionsCreateWorkflowDispatchRequest{
        RequestBody: operations.ActionsCreateWorkflowDispatchRequestBody{
            Inputs: map[string]string{
                "nobis": "enim",
            },
            Ref: "omnis",
        },
        Owner: "nemo",
        Repo: "minima",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteActionsCacheByID

Deletes a GitHub Actions cache for a repository, using a cache ID.

You must authenticate using an access token with the `repo` scope to use this endpoint.

GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteActionsCacheByID(ctx, operations.ActionsDeleteActionsCacheByIDRequest{
        CacheID: 570197,
        Owner: "accusantium",
        Repo: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteActionsCacheByKey

Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref.

You must authenticate using an access token with the `repo` scope to use this endpoint.

GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteActionsCacheByKey(ctx, operations.ActionsDeleteActionsCacheByKeyRequest{
        Key: "culpa",
        Owner: "doloribus",
        Ref: sdk.String("sapiente"),
        Repo: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheList != nil {
        // handle response
    }
}
```

## ActionsDeleteArtifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-an-artifact>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteArtifact(ctx, operations.ActionsDeleteArtifactRequest{
        ArtifactID: 652790,
        Owner: "dolorem",
        Repo: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteEnvironmentSecret

Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-an-environment-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteEnvironmentSecret(ctx, operations.ActionsDeleteEnvironmentSecretRequest{
        EnvironmentName: "consequuntur",
        RepositoryID: 995300,
        SecretName: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteEnvironmentVariable

Deletes an environment variable using the variable name.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `environment:write` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#delete-an-environment-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteEnvironmentVariable(ctx, operations.ActionsDeleteEnvironmentVariableRequest{
        EnvironmentName: "occaecati",
        Name: "Lucy Konopelski",
        RepositoryID: 623510,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteOrgSecret(ctx, operations.ActionsDeleteOrgSecretRequest{
        Org: "quia",
        SecretName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteOrgVariable

Deletes an organization variable using the variable name.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.
GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#delete-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteOrgVariable(ctx, operations.ActionsDeleteOrgVariableRequest{
        Name: "Kayla O'Kon",
        Org: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-a-repository-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteRepoSecret(ctx, operations.ActionsDeleteRepoSecretRequest{
        Owner: "sequi",
        Repo: "tenetur",
        SecretName: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteRepoVariable

Deletes a repository variable using the variable name.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#delete-a-repository-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteRepoVariable(ctx, operations.ActionsDeleteRepoVariableRequest{
        Name: "Miss Rufus Ankunding",
        Owner: "laborum",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteRequiredWorkflow

Deletes a required workflow configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#delete-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteRequiredWorkflow(ctx, operations.ActionsDeleteRequiredWorkflowRequest{
        Org: "reiciendis",
        RequiredWorkflowID: 976460,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteSelfHostedRunnerFromOrg

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteSelfHostedRunnerFromOrg(ctx, operations.ActionsDeleteSelfHostedRunnerFromOrgRequest{
        Org: "vero",
        RunnerID: 468651,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteSelfHostedRunnerFromRepo

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo`
scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteSelfHostedRunnerFromRepo(ctx, operations.ActionsDeleteSelfHostedRunnerFromRepoRequest{
        Owner: "praesentium",
        Repo: "voluptatibus",
        RunnerID: 55714,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteWorkflowRun

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteWorkflowRun(ctx, operations.ActionsDeleteWorkflowRunRequest{
        Owner: "omnis",
        Repo: "voluptate",
        RunID: 739264,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDeleteWorkflowRunLogs

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#delete-workflow-run-logs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDeleteWorkflowRunLogs(ctx, operations.ActionsDeleteWorkflowRunLogsRequest{
        Owner: "perferendis",
        Repo: "doloremque",
        RunID: 441711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDisableSelectedRepositoryGithubActionsOrganization

Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDisableSelectedRepositoryGithubActionsOrganization(ctx, operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest{
        Org: "ut",
        RepositoryID: 979587,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDisableWorkflow

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#disable-a-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDisableWorkflow(ctx, operations.ActionsDisableWorkflowRequest{
        Owner: "dicta",
        Repo: "corporis",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadArtifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#download-an-artifact>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDownloadArtifact(ctx, operations.ActionsDownloadArtifactRequest{
        ArchiveFormat: "dolore",
        ArtifactID: 480894,
        Owner: "dicta",
        Repo: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadJobLogsForWorkflowRun

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDownloadJobLogsForWorkflowRun(ctx, operations.ActionsDownloadJobLogsForWorkflowRunRequest{
        JobID: 317983,
        Owner: "accusamus",
        Repo: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadWorkflowRunAttemptLogs

Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#download-workflow-run-attempt-logs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDownloadWorkflowRunAttemptLogs(ctx, operations.ActionsDownloadWorkflowRunAttemptLogsRequest{
        AttemptNumber: 918236,
        Owner: "quae",
        Repo: "ipsum",
        RunID: 692472,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsDownloadWorkflowRunLogs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
`Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#download-workflow-run-logs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsDownloadWorkflowRunLogs(ctx, operations.ActionsDownloadWorkflowRunLogsRequest{
        Owner: "molestias",
        Repo: "excepturi",
        RunID: 865103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsEnableSelectedRepositoryGithubActionsOrganization

Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsEnableSelectedRepositoryGithubActionsOrganization(ctx, operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest{
        Org: "modi",
        RepositoryID: 508969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsEnableWorkflow

Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#enable-a-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsEnableWorkflow(ctx, operations.ActionsEnableWorkflowRequest{
        Owner: "rem",
        Repo: "voluptates",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsGetActionsCacheList

Lists the GitHub Actions caches for a repository.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/cache#list-github-actions-caches-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetActionsCacheList(ctx, operations.ActionsGetActionsCacheListRequest{
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Key: sdk.String("repudiandae"),
        Owner: "sint",
        Page: sdk.Int64(83112),
        PerPage: sdk.Int64(929297),
        Ref: sdk.String("incidunt"),
        Repo: "enim",
        Sort: shared.ActionsCacheListSortEnumCreatedAt.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheList != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsage

Gets GitHub Actions cache usage for a repository.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetActionsCacheUsage(ctx, operations.ActionsGetActionsCacheUsageRequest{
        Owner: "est",
        Repo: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsageByRepository != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsageByRepoForOrg

Lists repositories and their GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetActionsCacheUsageByRepoForOrg(ctx, operations.ActionsGetActionsCacheUsageByRepoForOrgRequest{
        Org: "explicabo",
        Page: sdk.Int64(647174),
        PerPage: sdk.Int64(716327),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsGetActionsCacheUsageByRepoForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsGetActionsCacheUsageForOrg

Gets the total GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetActionsCacheUsageForOrg(ctx, operations.ActionsGetActionsCacheUsageForOrgRequest{
        Org: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsCacheUsageOrgEnterprise != nil {
        // handle response
    }
}
```

## ActionsGetAllowedActionsOrganization

Gets the selected actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetAllowedActionsOrganization(ctx, operations.ActionsGetAllowedActionsOrganizationRequest{
        Org: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedActions != nil {
        // handle response
    }
}
```

## ActionsGetAllowedActionsRepository

Gets the settings for selected actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetAllowedActionsRepository(ctx, operations.ActionsGetAllowedActionsRepositoryRequest{
        Owner: "modi",
        Repo: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SelectedActions != nil {
        // handle response
    }
}
```

## ActionsGetArtifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-an-artifact>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetArtifact(ctx, operations.ActionsGetArtifactRequest{
        ArtifactID: 397821,
        Owner: "cupiditate",
        Repo: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## ActionsGetCustomOidcSubClaimForRepo

Gets the customization template for an OpenID Connect (OIDC) subject claim.
You must authenticate using an access token with the `repo` scope to use this
endpoint. GitHub Apps must have the `organization_administration:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetCustomOidcSubClaimForRepo(ctx, operations.ActionsGetCustomOidcSubClaimForRepoRequest{
        Owner: "perferendis",
        Repo: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OidcCustomSubRepo != nil {
        // handle response
    }
}
```

## ActionsGetEnvironmentPublicKey

Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-an-environment-public-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetEnvironmentPublicKey(ctx, operations.ActionsGetEnvironmentPublicKeyRequest{
        EnvironmentName: "assumenda",
        RepositoryID: 369808,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsPublicKey != nil {
        // handle response
    }
}
```

## ActionsGetEnvironmentSecret

Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-an-environment-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetEnvironmentSecret(ctx, operations.ActionsGetEnvironmentSecretRequest{
        EnvironmentName: "alias",
        RepositoryID: 146441,
        SecretName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSecret != nil {
        // handle response
    }
}
```

## ActionsGetEnvironmentVariable

Gets a specific variable in an environment. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `environments:read` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#get-an-environment-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetEnvironmentVariable(ctx, operations.ActionsGetEnvironmentVariableRequest{
        EnvironmentName: "excepturi",
        Name: "Olivia Rice",
        RepositoryID: 433288,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsVariable != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#get-default-workflow-permissions>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization(ctx, operations.ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest{
        Org: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsGetDefaultWorkflowPermissions != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsDefaultWorkflowPermissionsRepository

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
as well as if GitHub Actions can submit approving pull request reviews.
For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#get-default-workflow-permissions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetGithubActionsDefaultWorkflowPermissionsRepository(ctx, operations.ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequest{
        Owner: "eligendi",
        Repo: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsGetDefaultWorkflowPermissions != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsPermissionsOrganization

Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetGithubActionsPermissionsOrganization(ctx, operations.ActionsGetGithubActionsPermissionsOrganizationRequest{
        Org: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsOrganizationPermissions != nil {
        // handle response
    }
}
```

## ActionsGetGithubActionsPermissionsRepository

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetGithubActionsPermissionsRepository(ctx, operations.ActionsGetGithubActionsPermissionsRepositoryRequest{
        Owner: "provident",
        Repo: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRepositoryPermissions != nil {
        // handle response
    }
}
```

## ActionsGetJobForWorkflowRun

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetJobForWorkflowRun(ctx, operations.ActionsGetJobForWorkflowRunRequest{
        JobID: 572252,
        Owner: "officia",
        Repo: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## ActionsGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-an-organization-public-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetOrgPublicKey(ctx, operations.ActionsGetOrgPublicKeyRequest{
        Org: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsPublicKey != nil {
        // handle response
    }
}
```

## ActionsGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetOrgSecret(ctx, operations.ActionsGetOrgSecretRequest{
        Org: "a",
        SecretName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationActionsSecret != nil {
        // handle response
    }
}
```

## ActionsGetOrgVariable

Gets a specific variable in an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#get-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetOrgVariable(ctx, operations.ActionsGetOrgVariableRequest{
        Name: "Arlene Stamm",
        Org: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationActionsVariable != nil {
        // handle response
    }
}
```

## ActionsGetPendingDeploymentsForRun

Get all deployment environments for a workflow run that are waiting for protection rules to pass.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-pending-deployments-for-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetPendingDeploymentsForRun(ctx, operations.ActionsGetPendingDeploymentsForRunRequest{
        Owner: "magnam",
        Repo: "cumque",
        RunID: 813798,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PendingDeployments != nil {
        // handle response
    }
}
```

## ActionsGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-repository-public-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetRepoPublicKey(ctx, operations.ActionsGetRepoPublicKeyRequest{
        Owner: "ea",
        Repo: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsPublicKey != nil {
        // handle response
    }
}
```

## ActionsGetRepoRequiredWorkflow

Gets a specific required workflow present in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#get-repository-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetRepoRequiredWorkflow(ctx, operations.ActionsGetRepoRequiredWorkflowRequest{
        Org: "laborum",
        Repo: "accusamus",
        RequiredWorkflowIDForRepo: 249796,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepoRequiredWorkflow != nil {
        // handle response
    }
}
```

## ActionsGetRepoRequiredWorkflowUsage

Gets the number of billable minutes used by a specific required workflow during the current billing cycle.

Billable minutes only apply to required workflows running in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)."

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-repository-required-workflow-usage>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetRepoRequiredWorkflowUsage(ctx, operations.ActionsGetRepoRequiredWorkflowUsageRequest{
        Org: "occaecati",
        Repo: "enim",
        RequiredWorkflowIDForRepo: 881736,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowUsage != nil {
        // handle response
    }
}
```

## ActionsGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-repository-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetRepoSecret(ctx, operations.ActionsGetRepoSecretRequest{
        Owner: "delectus",
        Repo: "quidem",
        SecretName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSecret != nil {
        // handle response
    }
}
```

## ActionsGetRepoVariable

Gets a specific variable in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#get-a-repository-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetRepoVariable(ctx, operations.ActionsGetRepoVariableRequest{
        Name: "Lynn Kuvalis",
        Owner: "amet",
        Repo: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsVariable != nil {
        // handle response
    }
}
```

## ActionsGetRequiredWorkflow

Get a required workflow configured in an organization.

You must authenticate using an access token with the `read:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetRequiredWorkflow(ctx, operations.ActionsGetRequiredWorkflowRequest{
        Org: "nisi",
        RequiredWorkflowID: 423855,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequiredWorkflow != nil {
        // handle response
    }
}
```

## ActionsGetReviewsForRun

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetReviewsForRun(ctx, operations.ActionsGetReviewsForRunRequest{
        Owner: "natus",
        Repo: "omnis",
        RunID: 474867,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnvironmentApprovals != nil {
        // handle response
    }
}
```

## ActionsGetSelfHostedRunnerForOrg

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetSelfHostedRunnerForOrg(ctx, operations.ActionsGetSelfHostedRunnerForOrgRequest{
        Org: "perferendis",
        RunnerID: 470132,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Runner != nil {
        // handle response
    }
}
```

## ActionsGetSelfHostedRunnerForRepo

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetSelfHostedRunnerForRepo(ctx, operations.ActionsGetSelfHostedRunnerForRepoRequest{
        Owner: "magnam",
        Repo: "distinctio",
        RunnerID: 660174,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Runner != nil {
        // handle response
    }
}
```

## ActionsGetWorkflow

Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetWorkflow(ctx, operations.ActionsGetWorkflowRequest{
        Owner: "labore",
        Repo: "labore",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workflow != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowAccessToRepository

Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to private repositories.
For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-workflow-access-level-to-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetWorkflowAccessToRepository(ctx, operations.ActionsGetWorkflowAccessToRepositoryRequest{
        Owner: "suscipit",
        Repo: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsWorkflowAccessToRepository != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowRun

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetWorkflowRun(ctx, operations.ActionsGetWorkflowRunRequest{
        ExcludePullRequests: sdk.Bool(false),
        Owner: "nobis",
        Repo: "eum",
        RunID: 878453,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowRun != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowRunAttempt

Gets a specific workflow run attempt. Anyone with read access to the repository
can use this endpoint. If the repository is private you must use an access token
with the `repo` scope. GitHub Apps must have the `actions:read` permission to
use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-a-workflow-run-attempt>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetWorkflowRunAttempt(ctx, operations.ActionsGetWorkflowRunAttemptRequest{
        AttemptNumber: 135474,
        ExcludePullRequests: sdk.Bool(false),
        Owner: "architecto",
        Repo: "magnam",
        RunID: 92373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowRun != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowRunUsage

Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-workflow-run-usage>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetWorkflowRunUsage(ctx, operations.ActionsGetWorkflowRunUsageRequest{
        Owner: "excepturi",
        Repo: "ullam",
        RunID: 590873,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowRunUsage != nil {
        // handle response
    }
}
```

## ActionsGetWorkflowUsage

Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#get-workflow-usage>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsGetWorkflowUsage(ctx, operations.ActionsGetWorkflowUsageRequest{
        Owner: "quos",
        Repo: "sint",
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowUsage != nil {
        // handle response
    }
}
```

## ActionsListArtifactsForRepo

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListArtifactsForRepo(ctx, operations.ActionsListArtifactsForRepoRequest{
        Name: sdk.String("Angie Wisozk"),
        Owner: "eum",
        Page: sdk.Int64(221262),
        PerPage: sdk.Int64(896547),
        Repo: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListArtifactsForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListEnvironmentSecrets

Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-environment-secrets>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListEnvironmentSecrets(ctx, operations.ActionsListEnvironmentSecretsRequest{
        EnvironmentName: "nemo",
        Page: sdk.Int64(97260),
        PerPage: sdk.Int64(435865),
        RepositoryID: 984043,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListEnvironmentSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListEnvironmentVariables

Lists all environment variables. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `environments:read` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#list-environment-variables>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListEnvironmentVariables(ctx, operations.ActionsListEnvironmentVariablesRequest{
        EnvironmentName: "debitis",
        Page: sdk.Int64(260341),
        PerPage: sdk.Int64(806194),
        RepositoryID: 537023,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListEnvironmentVariables200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListJobsForWorkflowRun

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListJobsForWorkflowRun(ctx, operations.ActionsListJobsForWorkflowRunRequest{
        Filter: operations.ActionsListJobsForWorkflowRunFilterEnumAll.ToPointer(),
        Owner: "in",
        Page: sdk.Int64(100226),
        PerPage: sdk.Int64(99569),
        Repo: "repudiandae",
        RunID: 352312,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListJobsForWorkflowRun200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListJobsForWorkflowRunAttempt

Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

API method documentation
<https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run-attempt>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListJobsForWorkflowRunAttempt(ctx, operations.ActionsListJobsForWorkflowRunAttemptRequest{
        AttemptNumber: 714242,
        Owner: "nihil",
        Page: sdk.Int64(998848),
        PerPage: sdk.Int64(841140),
        Repo: "sed",
        RunID: 904648,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListJobsForWorkflowRunAttempt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListLabelsForSelfHostedRunnerForOrg

Lists all labels for a self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListLabelsForSelfHostedRunnerForOrg(ctx, operations.ActionsListLabelsForSelfHostedRunnerForOrgRequest{
        Org: "pariatur",
        RunnerID: 37559,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListLabelsForSelfHostedRunnerForRepo

Lists all labels for a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListLabelsForSelfHostedRunnerForRepo(ctx, operations.ActionsListLabelsForSelfHostedRunnerForRepoRequest{
        Owner: "consequuntur",
        Repo: "praesentium",
        RunnerID: 615560,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-organization-secrets>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListOrgSecrets(ctx, operations.ActionsListOrgSecretsRequest{
        Org: "magni",
        Page: sdk.Int64(123820),
        PerPage: sdk.Int64(779051),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListOrgSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListOrgVariables

Lists all organization variables. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#list-organization-variables>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListOrgVariables(ctx, operations.ActionsListOrgVariablesRequest{
        Org: "illum",
        Page: sdk.Int64(864934),
        PerPage: sdk.Int64(807319),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListOrgVariables200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoRequiredWorkflows

Lists the required workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#list-repository-required-workflows>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRepoRequiredWorkflows(ctx, operations.ActionsListRepoRequiredWorkflowsRequest{
        Org: "ea",
        Page: sdk.Int64(569101),
        PerPage: sdk.Int64(139972),
        Repo: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoRequiredWorkflows200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-repository-secrets>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRepoSecrets(ctx, operations.ActionsListRepoSecretsRequest{
        Owner: "accusantium",
        Page: sdk.Int64(69167),
        PerPage: sdk.Int64(982575),
        Repo: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoVariables

Lists all repository variables. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#list-repository-variables>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRepoVariables(ctx, operations.ActionsListRepoVariablesRequest{
        Owner: "ipsam",
        Page: sdk.Int64(453543),
        PerPage: sdk.Int64(420075),
        Repo: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoVariables200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRepoWorkflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-repository-workflows>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRepoWorkflows(ctx, operations.ActionsListRepoWorkflowsRequest{
        Owner: "eaque",
        Page: sdk.Int64(866383),
        PerPage: sdk.Int64(365496),
        Repo: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRepoWorkflows200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRequiredWorkflowRuns

List all workflow runs for a required workflow. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#list-required-workflow-runs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRequiredWorkflowRuns(ctx, operations.ActionsListRequiredWorkflowRunsRequest{
        Actor: sdk.String("perferendis"),
        Branch: sdk.String("fugiat"),
        CheckSuiteID: sdk.Int64(230742),
        Created: types.MustTimeFromString("2022-03-27T19:22:24.458Z"),
        Event: sdk.String("corporis"),
        ExcludePullRequests: sdk.Bool(false),
        HeadSha: sdk.String("hic"),
        Owner: "libero",
        Page: sdk.Int64(749999),
        PerPage: sdk.Int64(171629),
        Repo: "quis",
        RequiredWorkflowIDForRepo: 521037,
        Status: shared.WorkflowRunStatusEnumStale.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRequiredWorkflowRuns200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRequiredWorkflows

List all required workflows in an organization.

You must authenticate using an access token with the `read:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#list-required-workflows>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRequiredWorkflows(ctx, operations.ActionsListRequiredWorkflowsRequest{
        Org: "eaque",
        Page: sdk.Int64(338985),
        PerPage: sdk.Int64(199996),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListRequiredWorkflows200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListRunnerApplicationsForOrg

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRunnerApplicationsForOrg(ctx, operations.ActionsListRunnerApplicationsForOrgRequest{
        Org: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerApplications != nil {
        // handle response
    }
}
```

## ActionsListRunnerApplicationsForRepo

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListRunnerApplicationsForRepo(ctx, operations.ActionsListRunnerApplicationsForRepoRequest{
        Owner: "perferendis",
        Repo: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunnerApplications != nil {
        // handle response
    }
}
```

## ActionsListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListSelectedReposForOrgSecret(ctx, operations.ActionsListSelectedReposForOrgSecretRequest{
        Org: "minus",
        Page: sdk.Int64(463451),
        PerPage: sdk.Int64(223924),
        SecretName: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelectedReposForOrgSecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelectedReposForOrgVariable

Lists all repositories that can access an organization variable that is available to selected repositories. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#list-selected-repositories-for-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListSelectedReposForOrgVariable(ctx, operations.ActionsListSelectedReposForOrgVariableRequest{
        Name: "Mindy Walter",
        Org: "perspiciatis",
        Page: sdk.Int64(31838),
        PerPage: sdk.Int64(783645),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelectedReposForOrgVariable200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelectedRepositoriesEnabledGithubActionsOrganization

Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization(ctx, operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest{
        Org: "consequuntur",
        Page: sdk.Int64(500026),
        PerPage: sdk.Int64(621479),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelectedRepositoriesRequiredWorkflow

Lists the selected repositories that are configured for a required workflow in an organization. To use this endpoint, the required workflow must be configured to run on selected repositories.

You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation https://docs.github.com/rest/reference/actions#list-selected-repositories-required-workflows
<https://docs.github.com/rest/reference/actions#list-selected-repositories-required-workflows>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListSelectedRepositoriesRequiredWorkflow(ctx, operations.ActionsListSelectedRepositoriesRequiredWorkflowRequest{
        Org: "eaque",
        RequiredWorkflowID: 577229,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelectedRepositoriesRequiredWorkflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelfHostedRunnersForOrg

Lists all self-hosted runners configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListSelfHostedRunnersForOrg(ctx, operations.ActionsListSelfHostedRunnersForOrgRequest{
        Org: "rerum",
        Page: sdk.Int64(237893),
        PerPage: sdk.Int64(992397),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelfHostedRunnersForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListSelfHostedRunnersForRepo

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListSelfHostedRunnersForRepo(ctx, operations.ActionsListSelfHostedRunnersForRepoRequest{
        Owner: "earum",
        Page: sdk.Int64(267262),
        PerPage: sdk.Int64(613966),
        Repo: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListSelfHostedRunnersForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListWorkflowRunArtifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListWorkflowRunArtifacts(ctx, operations.ActionsListWorkflowRunArtifactsRequest{
        Owner: "deleniti",
        Page: sdk.Int64(864282),
        PerPage: sdk.Int64(589910),
        Repo: "nobis",
        RunID: 730122,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListWorkflowRunArtifacts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListWorkflowRuns

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

API method documentation
<https://docs.github.com/rest/reference/actions#list-workflow-runs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListWorkflowRuns(ctx, operations.ActionsListWorkflowRunsRequest{
        Actor: sdk.String("delectus"),
        Branch: sdk.String("quaerat"),
        CheckSuiteID: sdk.Int64(554242),
        Created: types.MustTimeFromString("2022-10-15T11:27:32.342Z"),
        Event: sdk.String("dolorem"),
        ExcludePullRequests: sdk.Bool(false),
        HeadSha: sdk.String("dolor"),
        Owner: "qui",
        Page: sdk.Int64(218749),
        PerPage: sdk.Int64(944373),
        Repo: "excepturi",
        Status: shared.WorkflowRunStatusEnumQueued.ToPointer(),
        WorkflowID: shared.WorkflowID{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListWorkflowRuns200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsListWorkflowRunsForRepo

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsListWorkflowRunsForRepo(ctx, operations.ActionsListWorkflowRunsForRepoRequest{
        Actor: sdk.String("voluptate"),
        Branch: sdk.String("dignissimos"),
        CheckSuiteID: sdk.Int64(970237),
        Created: types.MustTimeFromString("2022-04-27T14:25:42.204Z"),
        Event: sdk.String("numquam"),
        ExcludePullRequests: sdk.Bool(false),
        HeadSha: sdk.String("veritatis"),
        Owner: "ipsa",
        Page: sdk.Int64(56418),
        PerPage: sdk.Int64(434417),
        Repo: "odio",
        Status: shared.WorkflowRunStatusEnumNeutral.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsListWorkflowRunsForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsReRunJobForWorkflowRun

Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#re-run-job-for-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsReRunJobForWorkflowRun(ctx, operations.ActionsReRunJobForWorkflowRunRequest{
        RequestBody: &operations.ActionsReRunJobForWorkflowRunRequestBody{
            EnableDebugLogging: sdk.Bool(false),
        },
        JobID: 881005,
        Owner: "quidem",
        Repo: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsReRunWorkflow

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#re-run-a-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsReRunWorkflow(ctx, operations.ActionsReRunWorkflowRequest{
        RequestBody: &operations.ActionsReRunWorkflowRequestBody{
            EnableDebugLogging: sdk.Bool(false),
        },
        Owner: "voluptas",
        Repo: "natus",
        RunID: 179603,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsReRunWorkflowFailedJobs

Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#re-run-workflow-failed-jobs>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsReRunWorkflowFailedJobs(ctx, operations.ActionsReRunWorkflowFailedJobsRequest{
        RequestBody: &operations.ActionsReRunWorkflowFailedJobsRequestBody{
            EnableDebugLogging: sdk.Bool(false),
        },
        Owner: "atque",
        Repo: "sit",
        RunID: 854614,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg

Remove all custom labels from a self-hosted runner configured in an
organization. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg(ctx, operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest{
        Org: "ab",
        RunnerID: 743835,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo

Remove all custom labels from a self-hosted runner configured in a
repository. Returns the remaining read-only labels from the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo(ctx, operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest{
        Owner: "dolorum",
        Repo: "iusto",
        RunnerID: 453697,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg

Remove a custom label from a self-hosted runner configured
in an organization. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg(ctx, operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest{
        Name: "Alfredo Mohr",
        Org: "asperiores",
        RunnerID: 469497,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo

Remove a custom label from a self-hosted runner configured
in a repository. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo(ctx, operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest{
        Name: "Tamara Ondricka",
        Owner: "aspernatur",
        Repo: "perferendis",
        RunnerID: 229219,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveSelectedRepoFromOrgSecret(ctx, operations.ActionsRemoveSelectedRepoFromOrgSecretRequest{
        Org: "optio",
        RepositoryID: 881586,
        SecretName: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsRemoveSelectedRepoFromOrgVariable

Removes a repository from an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#remove-selected-repository-from-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveSelectedRepoFromOrgVariable(ctx, operations.ActionsRemoveSelectedRepoFromOrgVariableRequest{
        Name: "Sam Oberbrunner",
        Org: "repellendus",
        RepositoryID: 519711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsRemoveSelectedRepoFromRequiredWorkflow

Removes a repository from a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsRemoveSelectedRepoFromRequiredWorkflow(ctx, operations.ActionsRemoveSelectedRepoFromRequiredWorkflowRequest{
        Org: "similique",
        RepositoryID: 55,
        RequiredWorkflowID: 872651,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsReviewPendingDeploymentsForRun

Approve or reject pending deployments that are waiting on approval by a required reviewer.

Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#review-pending-deployments-for-a-workflow-run>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsReviewPendingDeploymentsForRun(ctx, operations.ActionsReviewPendingDeploymentsForRunRequest{
        RequestBody: operations.ActionsReviewPendingDeploymentsForRunRequestBody{
            Comment: "Ship it!",
            EnvironmentIds: []int64{
                161171787,
                161171787,
            },
            State: operations.ActionsReviewPendingDeploymentsForRunRequestBodyStateEnumApproved,
        },
        Owner: "tempora",
        Repo: "vel",
        RunID: 798047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployments != nil {
        // handle response
    }
}
```

## ActionsSetAllowedActionsOrganization

Sets the actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetAllowedActionsOrganization(ctx, operations.ActionsSetAllowedActionsOrganizationRequest{
        Org: "officiis",
        SelectedActions: &shared.SelectedActions{
            GithubOwnedAllowed: sdk.Bool(false),
            PatternsAllowed: []string{
                "dolorum",
            },
            VerifiedAllowed: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetAllowedActionsRepository

Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetAllowedActionsRepository(ctx, operations.ActionsSetAllowedActionsRepositoryRequest{
        Owner: "a",
        Repo: "esse",
        SelectedActions: &shared.SelectedActions{
            GithubOwnedAllowed: sdk.Bool(false),
            PatternsAllowed: []string{
                "iusto",
                "ipsum",
                "quisquam",
            },
            VerifiedAllowed: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetCustomLabelsForSelfHostedRunnerForOrg

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetCustomLabelsForSelfHostedRunnerForOrg(ctx, operations.ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest{
        RequestBody: operations.ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody{
            Labels: []string{
                "amet",
                "tempore",
                "accusamus",
                "numquam",
            },
        },
        Org: "enim",
        RunnerID: 213312,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSetCustomLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsSetCustomLabelsForSelfHostedRunnerForRepo

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetCustomLabelsForSelfHostedRunnerForRepo(ctx, operations.ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest{
        RequestBody: operations.ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody{
            Labels: []string{
                "totam",
                "nihil",
                "sit",
                "expedita",
            },
        },
        Owner: "neque",
        Repo: "sed",
        RunnerID: 424685,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsSetCustomLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ActionsSetCustomOidcSubClaimForRepo

Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.
You must authenticate using an access token with the `repo` scope to use this
endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetCustomOidcSubClaimForRepo(ctx, operations.ActionsSetCustomOidcSubClaimForRepoRequest{
        RequestBody: operations.ActionsSetCustomOIDCSubClaimForRepoActionsOIDCSubjectCustomizationForARepository{
            IncludeClaimKeys: []string{
                "voluptas",
                "deserunt",
                "quam",
            },
            UseDefault: false,
        },
        Owner: "ipsum",
        Repo: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-default-workflow-permissions>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization(ctx, operations.ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest{
        ActionsSetDefaultWorkflowPermissions: &shared.ActionsSetDefaultWorkflowPermissions{
            CanApprovePullRequestReviews: sdk.Bool(false),
            DefaultWorkflowPermissions: shared.ActionsDefaultWorkflowPermissionsEnumRead.ToPointer(),
        },
        Org: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetGithubActionsDefaultWorkflowPermissionsRepository

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
can submit approving pull request reviews.
For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-default-workflow-permissions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetGithubActionsDefaultWorkflowPermissionsRepository(ctx, operations.ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequest{
        ActionsSetDefaultWorkflowPermissions: shared.ActionsSetDefaultWorkflowPermissions{
            CanApprovePullRequestReviews: sdk.Bool(false),
            DefaultWorkflowPermissions: shared.ActionsDefaultWorkflowPermissionsEnumWrite.ToPointer(),
        },
        Owner: "pariatur",
        Repo: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetGithubActionsPermissionsOrganization

Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetGithubActionsPermissionsOrganization(ctx, operations.ActionsSetGithubActionsPermissionsOrganizationRequest{
        RequestBody: operations.ActionsSetGithubActionsPermissionsOrganizationRequestBody{
            AllowedActions: shared.AllowedActionsEnumAll.ToPointer(),
            EnabledRepositories: shared.EnabledRepositoriesEnumSelected,
        },
        Org: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetGithubActionsPermissionsRepository

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetGithubActionsPermissionsRepository(ctx, operations.ActionsSetGithubActionsPermissionsRepositoryRequest{
        RequestBody: operations.ActionsSetGithubActionsPermissionsRepositoryRequestBody{
            AllowedActions: shared.AllowedActionsEnumAll.ToPointer(),
            Enabled: false,
        },
        Owner: "aspernatur",
        Repo: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetSelectedReposForOrgSecret(ctx, operations.ActionsSetSelectedReposForOrgSecretRequest{
        RequestBody: operations.ActionsSetSelectedReposForOrgSecretRequestBody{
            SelectedRepositoryIds: []int64{
                704474,
                396060,
                463150,
            },
        },
        Org: "molestias",
        SecretName: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelectedReposForOrgVariable

Replaces all repositories for an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#set-selected-repositories-for-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetSelectedReposForOrgVariable(ctx, operations.ActionsSetSelectedReposForOrgVariableRequest{
        RequestBody: operations.ActionsSetSelectedReposForOrgVariableRequestBody{
            SelectedRepositoryIds: []int64{
                204865,
            },
        },
        Name: "Mrs. Louise Kuhlman",
        Org: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelectedReposToRequiredWorkflow

Sets the repositories for a required workflow that is required for selected repositories.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#set-selected-repositories-for-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetSelectedReposToRequiredWorkflow(ctx, operations.ActionsSetSelectedReposToRequiredWorkflowRequest{
        RequestBody: operations.ActionsSetSelectedReposToRequiredWorkflowRequestBody{
            SelectedRepositoryIds: []int64{
                765326,
            },
        },
        Org: "soluta",
        RequiredWorkflowID: 748664,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization

Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

API method documentation
<https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization(ctx, operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest{
        RequestBody: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody{
            SelectedRepositoryIds: []int64{
                903720,
            },
        },
        Org: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsSetWorkflowAccessToRepository

Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to private repositories.
For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)".

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/reference/actions#set-workflow-access-to-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsSetWorkflowAccessToRepository(ctx, operations.ActionsSetWorkflowAccessToRepositoryRequest{
        ActionsWorkflowAccessToRepository: shared.ActionsWorkflowAccessToRepository{
            AccessLevel: shared.ActionsWorkflowAccessToRepositoryAccessLevelEnumNone,
        },
        Owner: "nobis",
        Repo: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsUpdateEnvironmentVariable

Updates an environment variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `environment:write` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#update-an-environment-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsUpdateEnvironmentVariable(ctx, operations.ActionsUpdateEnvironmentVariableRequest{
        RequestBody: operations.ActionsUpdateEnvironmentVariableRequestBody{
            Name: sdk.String("Kent Bayer"),
            Value: sdk.String("dolore"),
        },
        EnvironmentName: "labore",
        Name: "Mr. Sonya Bradtke",
        RepositoryID: 929530,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsUpdateOrgVariable

Updates an organization variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.
GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#update-an-organization-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsUpdateOrgVariable(ctx, operations.ActionsUpdateOrgVariableRequest{
        RequestBody: operations.ActionsUpdateOrgVariableRequestBody{
            Name: sdk.String("Jodi Skiles"),
            SelectedRepositoryIds: []int64{
                703495,
                586410,
            },
            Value: sdk.String("qui"),
            Visibility: operations.ActionsUpdateOrgVariableRequestBodyVisibilityEnumAll.ToPointer(),
        },
        Name: "Darren McClure",
        Org: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsUpdateRepoVariable

Updates a repository variable that you can reference in a GitHub Actions workflow.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/rest/actions/variables#update-a-repository-variable>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsUpdateRepoVariable(ctx, operations.ActionsUpdateRepoVariableRequest{
        RequestBody: operations.ActionsUpdateRepoVariableRequestBody{
            Name: sdk.String("Tim Erdman"),
            Value: sdk.String("consectetur"),
        },
        Name: "Roman Kulas",
        Owner: "quod",
        Repo: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsUpdateRequiredWorkflow

Update a required workflow in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

API method documentation
<https://docs.github.com/rest/reference/actions#update-a-required-workflow>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsUpdateRequiredWorkflow(ctx, operations.ActionsUpdateRequiredWorkflowRequest{
        RequestBody: operations.ActionsUpdateRequiredWorkflowRequestBody{
            RepositoryID: sdk.String("similique"),
            Scope: operations.ActionsUpdateRequiredWorkflowRequestBodyScopeEnumAll.ToPointer(),
            SelectedRepositoryIds: []int64{
                498140,
                293020,
                844550,
                848944,
            },
            WorkflowFilePath: sdk.String("sequi"),
        },
        Org: "natus",
        RequiredWorkflowID: 773326,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequiredWorkflow != nil {
        // handle response
    }
}
```
