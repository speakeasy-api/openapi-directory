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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApp` -  Creates a new Amplify app. 
* `createBackendEnvironment` -  Creates a new backend environment for an Amplify app. 
* `createBranch` -  Creates a new branch for an Amplify app. 
* `createDeployment` -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* `createDomainAssociation` -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* `createWebhook` -  Creates a new webhook on an Amplify app. 
* `deleteApp` -  Deletes an existing Amplify app specified by an app ID. 
* `deleteBackendEnvironment` -  Deletes a backend environment for an Amplify app. 
* `deleteBranch` -  Deletes a branch for an Amplify app. 
* `deleteDomainAssociation` -  Deletes a domain association for an Amplify app. 
* `deleteJob` -  Deletes a job for a branch of an Amplify app. 
* `deleteWebhook` -  Deletes a webhook. 
* `generateAccessLogs` -  Returns the website access logs for a specific time range using a presigned URL. 
* `getApp` -  Returns an existing Amplify app by appID. 
* `getArtifactUrl` -  Returns the artifact info that corresponds to an artifact id. 
* `getBackendEnvironment` -  Returns a backend environment for an Amplify app. 
* `getBranch` -  Returns a branch for an Amplify app. 
* `getDomainAssociation` -  Returns the domain information for an Amplify app. 
* `getJob` -  Returns a job for a branch of an Amplify app. 
* `getWebhook` -  Returns the webhook information that corresponds to a specified webhook ID. 
* `listApps` -  Returns a list of the existing Amplify apps. 
* `listArtifacts` -  Returns a list of artifacts for a specified app, branch, and job. 
* `listBackendEnvironments` -  Lists the backend environments for an Amplify app. 
* `listBranches` -  Lists the branches of an Amplify app. 
* `listDomainAssociations` -  Returns the domain associations for an Amplify app. 
* `listJobs` -  Lists the jobs for a branch of an Amplify app. 
* `listTagsForResource` -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* `listWebhooks` -  Returns a list of webhooks for an Amplify app. 
* `startDeployment` -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* `startJob` -  Starts a new job for a branch of an Amplify app. 
* `stopJob` -  Stops a job that is in progress for a branch of an Amplify app. 
* `tagResource` -  Tags the resource with a tag key and value. 
* `untagResource` -  Untags a resource with a specified Amazon Resource Name (ARN). 
* `updateApp` -  Updates an existing Amplify app. 
* `updateBranch` -  Updates a branch for an Amplify app. 
* `updateDomainAssociation` -  Creates a new domain association for an Amplify app.
* `updateWebhook` -  Updates a webhook. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
