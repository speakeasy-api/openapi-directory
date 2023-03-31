# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/github.com/ghec.2022-11-28/1.1.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest{
        RequestBody: operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody{
            Labels: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        Org: "unde",
        RunnerID: 857946,
    }

    ctx := context.Background()
    res, err := s.Actions.ActionsAddCustomLabelsToSelfHostedRunnerForOrg(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Actions

* `ActionsAddCustomLabelsToSelfHostedRunnerForOrg` - Add custom labels to a self-hosted runner for an organization
* `ActionsAddCustomLabelsToSelfHostedRunnerForRepo` - Add custom labels to a self-hosted runner for a repository
* `ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg` - Add repository access to a self-hosted runner group in an organization
* `ActionsAddSelectedRepoToOrgSecret` - Add selected repository to an organization secret
* `ActionsAddSelectedRepoToOrgVariable` - Add selected repository to an organization variable
* `ActionsAddSelectedRepoToRequiredWorkflow` - Add a repository to a required workflow
* `ActionsAddSelfHostedRunnerToGroupForOrg` - Add a self-hosted runner to a group for an organization
* `ActionsApproveWorkflowRun` - Approve a workflow run for a fork pull request
* `ActionsCancelWorkflowRun` - Cancel a workflow run
* `ActionsCreateEnvironmentVariable` - Create an environment variable
* `ActionsCreateOrUpdateEnvironmentSecret` - Create or update an environment secret
* `ActionsCreateOrUpdateOrgSecret` - Create or update an organization secret
* `ActionsCreateOrUpdateRepoSecret` - Create or update a repository secret
* `ActionsCreateOrgVariable` - Create an organization variable
* `ActionsCreateRegistrationTokenForOrg` - Create a registration token for an organization
* `ActionsCreateRegistrationTokenForRepo` - Create a registration token for a repository
* `ActionsCreateRemoveTokenForOrg` - Create a remove token for an organization
* `ActionsCreateRemoveTokenForRepo` - Create a remove token for a repository
* `ActionsCreateRepoVariable` - Create a repository variable
* `ActionsCreateRequiredWorkflow` - Create a required workflow
* `ActionsCreateSelfHostedRunnerGroupForOrg` - Create a self-hosted runner group for an organization
* `ActionsCreateWorkflowDispatch` - Create a workflow dispatch event
* `ActionsDeleteActionsCacheByID` - Delete a GitHub Actions cache for a repository (using a cache ID)
* `ActionsDeleteActionsCacheByKey` - Delete GitHub Actions caches for a repository (using a cache key)
* `ActionsDeleteArtifact` - Delete an artifact
* `ActionsDeleteEnvironmentSecret` - Delete an environment secret
* `ActionsDeleteEnvironmentVariable` - Delete an environment variable
* `ActionsDeleteOrgSecret` - Delete an organization secret
* `ActionsDeleteOrgVariable` - Delete an organization variable
* `ActionsDeleteRepoSecret` - Delete a repository secret
* `ActionsDeleteRepoVariable` - Delete a repository variable
* `ActionsDeleteRequiredWorkflow` - Delete a required workflow
* `ActionsDeleteSelfHostedRunnerFromOrg` - Delete a self-hosted runner from an organization
* `ActionsDeleteSelfHostedRunnerFromRepo` - Delete a self-hosted runner from a repository
* `ActionsDeleteSelfHostedRunnerGroupFromOrg` - Delete a self-hosted runner group from an organization
* `ActionsDeleteWorkflowRun` - Delete a workflow run
* `ActionsDeleteWorkflowRunLogs` - Delete workflow run logs
* `ActionsDisableSelectedRepositoryGithubActionsOrganization` - Disable a selected repository for GitHub Actions in an organization
* `ActionsDisableWorkflow` - Disable a workflow
* `ActionsDownloadArtifact` - Download an artifact
* `ActionsDownloadJobLogsForWorkflowRun` - Download job logs for a workflow run
* `ActionsDownloadWorkflowRunAttemptLogs` - Download workflow run attempt logs
* `ActionsDownloadWorkflowRunLogs` - Download workflow run logs
* `ActionsEnableSelectedRepositoryGithubActionsOrganization` - Enable a selected repository for GitHub Actions in an organization
* `ActionsEnableWorkflow` - Enable a workflow
* `ActionsGetActionsCacheList` - List GitHub Actions caches for a repository
* `ActionsGetActionsCacheUsage` - Get GitHub Actions cache usage for a repository
* `ActionsGetActionsCacheUsageByRepoForOrg` - List repositories with GitHub Actions cache usage for an organization
* `ActionsGetActionsCacheUsageForEnterprise` - Get GitHub Actions cache usage for an enterprise
* `ActionsGetActionsCacheUsageForOrg` - Get GitHub Actions cache usage for an organization
* `ActionsGetAllowedActionsOrganization` - Get allowed actions and reusable workflows for an organization
* `ActionsGetAllowedActionsRepository` - Get allowed actions and reusable workflows for a repository
* `ActionsGetArtifact` - Get an artifact
* `ActionsGetCustomOidcSubClaimForRepo` - Get the customization template for an OIDC subject claim for a repository
* `ActionsGetEnvironmentPublicKey` - Get an environment public key
* `ActionsGetEnvironmentSecret` - Get an environment secret
* `ActionsGetEnvironmentVariable` - Get an environment variable
* `ActionsGetGithubActionsDefaultWorkflowPermissionsEnterprise` - Get default workflow permissions for an enterprise
* `ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization` - Get default workflow permissions for an organization
* `ActionsGetGithubActionsDefaultWorkflowPermissionsRepository` - Get default workflow permissions for a repository
* `ActionsGetGithubActionsPermissionsOrganization` - Get GitHub Actions permissions for an organization
* `ActionsGetGithubActionsPermissionsRepository` - Get GitHub Actions permissions for a repository
* `ActionsGetJobForWorkflowRun` - Get a job for a workflow run
* `ActionsGetOrgPublicKey` - Get an organization public key
* `ActionsGetOrgSecret` - Get an organization secret
* `ActionsGetOrgVariable` - Get an organization variable
* `ActionsGetPendingDeploymentsForRun` - Get pending deployments for a workflow run
* `ActionsGetRepoPublicKey` - Get a repository public key
* `ActionsGetRepoRequiredWorkflow` - Get a required workflow entity for a repository
* `ActionsGetRepoRequiredWorkflowUsage` - Get required workflow usage
* `ActionsGetRepoSecret` - Get a repository secret
* `ActionsGetRepoVariable` - Get a repository variable
* `ActionsGetRequiredWorkflow` - Get a required workflow
* `ActionsGetReviewsForRun` - Get the review history for a workflow run
* `ActionsGetSelfHostedRunnerForOrg` - Get a self-hosted runner for an organization
* `ActionsGetSelfHostedRunnerForRepo` - Get a self-hosted runner for a repository
* `ActionsGetSelfHostedRunnerGroupForOrg` - Get a self-hosted runner group for an organization
* `ActionsGetWorkflow` - Get a workflow
* `ActionsGetWorkflowAccessToRepository` - Get the level of access for workflows outside of the repository
* `ActionsGetWorkflowRun` - Get a workflow run
* `ActionsGetWorkflowRunAttempt` - Get a workflow run attempt
* `ActionsGetWorkflowRunUsage` - Get workflow run usage
* `ActionsGetWorkflowUsage` - Get workflow usage
* `ActionsListArtifactsForRepo` - List artifacts for a repository
* `ActionsListEnvironmentSecrets` - List environment secrets
* `ActionsListEnvironmentVariables` - List environment variables
* `ActionsListJobsForWorkflowRun` - List jobs for a workflow run
* `ActionsListJobsForWorkflowRunAttempt` - List jobs for a workflow run attempt
* `ActionsListLabelsForSelfHostedRunnerForOrg` - List labels for a self-hosted runner for an organization
* `ActionsListLabelsForSelfHostedRunnerForRepo` - List labels for a self-hosted runner for a repository
* `ActionsListOrgSecrets` - List organization secrets
* `ActionsListOrgVariables` - List organization variables
* `ActionsListRepoAccessToSelfHostedRunnerGroupInOrg` - List repository access to a self-hosted runner group in an organization
* `ActionsListRepoRequiredWorkflows` - List repository required workflows
* `ActionsListRepoSecrets` - List repository secrets
* `ActionsListRepoVariables` - List repository variables
* `ActionsListRepoWorkflows` - List repository workflows
* `ActionsListRequiredWorkflowRuns` - List workflow runs for a required workflow
* `ActionsListRequiredWorkflows` - List required workflows
* `ActionsListRunnerApplicationsForOrg` - List runner applications for an organization
* `ActionsListRunnerApplicationsForRepo` - List runner applications for a repository
* `ActionsListSelectedReposForOrgSecret` - List selected repositories for an organization secret
* `ActionsListSelectedReposForOrgVariable` - List selected repositories for an organization variable
* `ActionsListSelectedRepositoriesEnabledGithubActionsOrganization` - List selected repositories enabled for GitHub Actions in an organization
* `ActionsListSelectedRepositoriesRequiredWorkflow` - List selected repositories for a required workflow
* `ActionsListSelfHostedRunnerGroupsForOrg` - List self-hosted runner groups for an organization
* `ActionsListSelfHostedRunnersForOrg` - List self-hosted runners for an organization
* `ActionsListSelfHostedRunnersForRepo` - List self-hosted runners for a repository
* `ActionsListSelfHostedRunnersInGroupForOrg` - List self-hosted runners in a group for an organization
* `ActionsListWorkflowRunArtifacts` - List workflow run artifacts
* `ActionsListWorkflowRuns` - List workflow runs for a workflow
* `ActionsListWorkflowRunsForRepo` - List workflow runs for a repository
* `ActionsReRunJobForWorkflowRun` - Re-run a job from a workflow run
* `ActionsReRunWorkflow` - Re-run a workflow
* `ActionsReRunWorkflowFailedJobs` - Re-run failed jobs from a workflow run
* `ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg` - Remove all custom labels from a self-hosted runner for an organization
* `ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo` - Remove all custom labels from a self-hosted runner for a repository
* `ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg` - Remove a custom label from a self-hosted runner for an organization
* `ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo` - Remove a custom label from a self-hosted runner for a repository
* `ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg` - Remove repository access to a self-hosted runner group in an organization
* `ActionsRemoveSelectedRepoFromOrgSecret` - Remove selected repository from an organization secret
* `ActionsRemoveSelectedRepoFromOrgVariable` - Remove selected repository from an organization variable
* `ActionsRemoveSelectedRepoFromRequiredWorkflow` - Remove a selected repository from required workflow
* `ActionsRemoveSelfHostedRunnerFromGroupForOrg` - Remove a self-hosted runner from a group for an organization
* `ActionsReviewPendingDeploymentsForRun` - Review pending deployments for a workflow run
* `ActionsSetActionsOidcCustomIssuerPolicyForEnterprise` - Set the GitHub Actions OIDC custom issuer policy for an enterprise
* `ActionsSetAllowedActionsOrganization` - Set allowed actions for an organization
* `ActionsSetAllowedActionsRepository` - Set allowed actions for a repository
* `ActionsSetCustomLabelsForSelfHostedRunnerForOrg` - Set custom labels for a self-hosted runner for an organization
* `ActionsSetCustomLabelsForSelfHostedRunnerForRepo` - Set custom labels for a self-hosted runner for a repository
* `ActionsSetCustomOidcSubClaimForRepo` - Set the customization template for an OIDC subject claim for a repository
* `ActionsSetGithubActionsDefaultWorkflowPermissionsEnterprise` - Set default workflow permissions for an enterprise
* `ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization` - Set default workflow permissions for an organization
* `ActionsSetGithubActionsDefaultWorkflowPermissionsRepository` - Set default workflow permissions for a repository
* `ActionsSetGithubActionsPermissionsOrganization` - Set GitHub Actions permissions for an organization
* `ActionsSetGithubActionsPermissionsRepository` - Set GitHub Actions permissions for a repository
* `ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg` - Set repository access for a self-hosted runner group in an organization
* `ActionsSetSelectedReposForOrgSecret` - Set selected repositories for an organization secret
* `ActionsSetSelectedReposForOrgVariable` - Set selected repositories for an organization variable
* `ActionsSetSelectedReposToRequiredWorkflow` - Sets repositories for a required workflow
* `ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization` - Set selected repositories enabled for GitHub Actions in an organization
* `ActionsSetSelfHostedRunnersInGroupForOrg` - Set self-hosted runners in a group for an organization
* `ActionsSetWorkflowAccessToRepository` - Set the level of access for workflows outside of the repository
* `ActionsUpdateEnvironmentVariable` - Update an environment variable
* `ActionsUpdateOrgVariable` - Update an organization variable
* `ActionsUpdateRepoVariable` - Update a repository variable
* `ActionsUpdateRequiredWorkflow` - Update a required workflow
* `ActionsUpdateSelfHostedRunnerGroupForOrg` - Update a self-hosted runner group for an organization

### Activity

* `ActivityCheckRepoIsStarredByAuthenticatedUser` - Check if a repository is starred by the authenticated user
* `ActivityDeleteRepoSubscription` - Delete a repository subscription
* `ActivityDeleteThreadSubscription` - Delete a thread subscription
* `ActivityGetFeeds` - Get feeds
* `ActivityGetRepoSubscription` - Get a repository subscription
* `ActivityGetThread` - Get a thread
* `ActivityGetThreadSubscriptionForAuthenticatedUser` - Get a thread subscription for the authenticated user
* `ActivityListEventsForAuthenticatedUser` - List events for the authenticated user
* `ActivityListNotificationsForAuthenticatedUser` - List notifications for the authenticated user
* `ActivityListOrgEventsForAuthenticatedUser` - List organization events for the authenticated user
* `ActivityListPublicEvents` - List public events
* `ActivityListPublicEventsForRepoNetwork` - List public events for a network of repositories
* `ActivityListPublicEventsForUser` - List public events for a user
* `ActivityListPublicOrgEvents` - List public organization events
* `ActivityListReceivedEventsForUser` - List events received by the authenticated user
* `ActivityListReceivedPublicEventsForUser` - List public events received by a user
* `ActivityListRepoEvents` - List repository events
* `ActivityListRepoNotificationsForAuthenticatedUser` - List repository notifications for the authenticated user
* `ActivityListReposStarredByAuthenticatedUser` - List repositories starred by the authenticated user
* `ActivityListReposStarredByUser` - List repositories starred by a user
* `ActivityListReposWatchedByUser` - List repositories watched by a user
* `ActivityListStargazersForRepo` - List stargazers
* `ActivityListWatchedReposForAuthenticatedUser` - List repositories watched by the authenticated user
* `ActivityListWatchersForRepo` - List watchers
* `ActivityMarkNotificationsAsRead` - Mark notifications as read
* `ActivityMarkRepoNotificationsAsRead` - Mark repository notifications as read
* `ActivityMarkThreadAsRead` - Mark a thread as read
* `ActivitySetRepoSubscription` - Set a repository subscription
* `ActivitySetThreadSubscription` - Set a thread subscription
* `ActivityStarRepoForAuthenticatedUser` - Star a repository for the authenticated user
* `ActivityUnstarRepoForAuthenticatedUser` - Unstar a repository for the authenticated user

### Apps

* `AppsAddRepoToInstallationForAuthenticatedUser` - Add a repository to an app installation
* `AppsCheckToken` - Check a token
* `AppsCreateFromManifest` - Create a GitHub App from a manifest
* `AppsCreateInstallationAccessToken` - Create an installation access token for an app
* `AppsDeleteAuthorization` - Delete an app authorization
* `AppsDeleteInstallation` - Delete an installation for the authenticated app
* `AppsDeleteToken` - Delete an app token
* `AppsGetAuthenticated` - Get the authenticated app
* `AppsGetBySlug` - Get an app
* `AppsGetInstallation` - Get an installation for the authenticated app
* `AppsGetOrgInstallation` - Get an organization installation for the authenticated app
* `AppsGetRepoInstallation` - Get a repository installation for the authenticated app
* `AppsGetSubscriptionPlanForAccount` - Get a subscription plan for an account
* `AppsGetSubscriptionPlanForAccountStubbed` - Get a subscription plan for an account (stubbed)
* `AppsGetUserInstallation` - Get a user installation for the authenticated app
* `AppsGetWebhookConfigForApp` - Get a webhook configuration for an app
* `AppsGetWebhookDelivery` - Get a delivery for an app webhook
* `AppsListAccountsForPlan` - List accounts for a plan
* `AppsListAccountsForPlanStubbed` - List accounts for a plan (stubbed)
* `AppsListInstallationReposForAuthenticatedUser` - List repositories accessible to the user access token
* `AppsListInstallations` - List installations for the authenticated app
* `AppsListInstallationsForAuthenticatedUser` - List app installations accessible to the user access token
* `AppsListPlans` - List plans
* `AppsListPlansStubbed` - List plans (stubbed)
* `AppsListReposAccessibleToInstallation` - List repositories accessible to the app installation
* `AppsListSubscriptionsForAuthenticatedUser` - List subscriptions for the authenticated user
* `AppsListSubscriptionsForAuthenticatedUserStubbed` - List subscriptions for the authenticated user (stubbed)
* `AppsListWebhookDeliveries` - List deliveries for an app webhook
* `AppsRedeliverWebhookDelivery` - Redeliver a delivery for an app webhook
* `AppsRemoveRepoFromInstallationForAuthenticatedUser` - Remove a repository from an app installation
* `AppsResetToken` - Reset a token
* `AppsRevokeInstallationAccessToken` - Revoke an installation access token
* `AppsScopeToken` - Create a scoped access token
* `AppsSuspendInstallation` - Suspend an app installation
* `AppsUnsuspendInstallation` - Unsuspend an app installation
* `AppsUpdateWebhookConfigForApp` - Update a webhook configuration for an app

### Billing

* `BillingGetGithubActionsBillingGhe` - Get GitHub Actions billing for an enterprise
* `BillingGetGithubActionsBillingOrg` - Get GitHub Actions billing for an organization
* `BillingGetGithubActionsBillingUser` - Get GitHub Actions billing for a user
* `BillingGetGithubAdvancedSecurityBillingGhe` - Get GitHub Advanced Security active committers for an enterprise
* `BillingGetGithubAdvancedSecurityBillingOrg` - Get GitHub Advanced Security active committers for an organization
* `BillingGetGithubPackagesBillingGhe` - Get GitHub Packages billing for an enterprise
* `BillingGetGithubPackagesBillingOrg` - Get GitHub Packages billing for an organization
* `BillingGetGithubPackagesBillingUser` - Get GitHub Packages billing for a user
* `BillingGetSharedStorageBillingGhe` - Get shared storage billing for an enterprise
* `BillingGetSharedStorageBillingOrg` - Get shared storage billing for an organization
* `BillingGetSharedStorageBillingUser` - Get shared storage billing for a user

### Checks

* `ChecksCreate` - Create a check run
* `ChecksCreateSuite` - Create a check suite
* `ChecksGet` - Get a check run
* `ChecksGetSuite` - Get a check suite
* `ChecksListAnnotations` - List check run annotations
* `ChecksListForRef` - List check runs for a Git reference
* `ChecksListForSuite` - List check runs in a check suite
* `ChecksListSuitesForRef` - List check suites for a Git reference
* `ChecksRerequestRun` - Rerequest a check run
* `ChecksRerequestSuite` - Rerequest a check suite
* `ChecksSetSuitesPreferences` - Update repository preferences for check suites
* `ChecksUpdate` - Update a check run

### CodeScanning

* `CodeScanningDeleteAnalysis` - Delete a code scanning analysis from a repository
* `CodeScanningGetAlert` - Get a code scanning alert
* `CodeScanningGetAnalysis` - Get a code scanning analysis for a repository
* `CodeScanningGetCodeqlDatabase` - Get a CodeQL database for a repository
* `CodeScanningGetSarif` - Get information about a SARIF upload
* `CodeScanningListAlertInstances` - List instances of a code scanning alert
* `CodeScanningListAlertsForEnterprise` - List code scanning alerts for an enterprise
* `CodeScanningListAlertsForOrg` - List code scanning alerts for an organization
* `CodeScanningListAlertsForRepo` - List code scanning alerts for a repository
* `CodeScanningListCodeqlDatabases` - List CodeQL databases for a repository
* `CodeScanningListRecentAnalyses` - List code scanning analyses for a repository
* `CodeScanningUpdateAlert` - Update a code scanning alert
* `CodeScanningUploadSarif` - Upload an analysis as SARIF data

### CodesOfConduct

* `CodesOfConductGetAllCodesOfConduct` - Get all codes of conduct
* `CodesOfConductGetConductCode` - Get a code of conduct

### Codespaces

* `CodespacesAddRepositoryForSecretForAuthenticatedUser` - Add a selected repository to a user secret
* `CodespacesAddSelectedRepoToOrgSecret` - Add selected repository to an organization secret
* `CodespacesCodespaceMachinesForAuthenticatedUser` - List machine types for a codespace
* `CodespacesCreateForAuthenticatedUser` - Create a codespace for the authenticated user
* `CodespacesCreateOrUpdateOrgSecret` - Create or update an organization secret
* `CodespacesCreateOrUpdateRepoSecret` - Create or update a repository secret
* `CodespacesCreateOrUpdateSecretForAuthenticatedUser` - Create or update a secret for the authenticated user
* `CodespacesCreateWithPrForAuthenticatedUser` - Create a codespace from a pull request
* `CodespacesCreateWithRepoForAuthenticatedUser` - Create a codespace in a repository
* `CodespacesDeleteCodespacesBillingUsers` - Removes users from Codespaces billing for an organization
* `CodespacesDeleteForAuthenticatedUser` - Delete a codespace for the authenticated user
* `CodespacesDeleteFromOrganization` - Delete a codespace from the organization
* `CodespacesDeleteOrgSecret` - Delete an organization secret
* `CodespacesDeleteRepoSecret` - Delete a repository secret
* `CodespacesDeleteSecretForAuthenticatedUser` - Delete a secret for the authenticated user
* `CodespacesExportForAuthenticatedUser` - Export a codespace for the authenticated user
* `CodespacesGetCodespacesForUserInOrg` - List codespaces for a user in organization
* `CodespacesGetExportDetailsForAuthenticatedUser` - Get details about a codespace export
* `CodespacesGetForAuthenticatedUser` - Get a codespace for the authenticated user
* `CodespacesGetOrgPublicKey` - Get an organization public key
* `CodespacesGetOrgSecret` - Get an organization secret
* `CodespacesGetPublicKeyForAuthenticatedUser` - Get public key for the authenticated user
* `CodespacesGetRepoPublicKey` - Get a repository public key
* `CodespacesGetRepoSecret` - Get a repository secret
* `CodespacesGetSecretForAuthenticatedUser` - Get a secret for the authenticated user
* `CodespacesListDevcontainersInRepositoryForAuthenticatedUser` - List devcontainer configurations in a repository for the authenticated user
* `CodespacesListForAuthenticatedUser` - List codespaces for the authenticated user
* `CodespacesListInOrganization` - List codespaces for the organization
* `CodespacesListInRepositoryForAuthenticatedUser` - List codespaces in a repository for the authenticated user
* `CodespacesListOrgSecrets` - List organization secrets
* `CodespacesListRepoSecrets` - List repository secrets
* `CodespacesListRepositoriesForSecretForAuthenticatedUser` - List selected repositories for a user secret
* `CodespacesListSecretsForAuthenticatedUser` - List secrets for the authenticated user
* `CodespacesListSelectedReposForOrgSecret` - List selected repositories for an organization secret
* `CodespacesPreFlightWithRepoForAuthenticatedUser` - Get default attributes for a codespace
* `CodespacesPublishForAuthenticatedUser` - Create a repository from an unpublished codespace
* `CodespacesRemoveRepositoryForSecretForAuthenticatedUser` - Remove a selected repository from a user secret
* `CodespacesRemoveSelectedRepoFromOrgSecret` - Remove selected repository from an organization secret
* `CodespacesRepoMachinesForAuthenticatedUser` - List available machine types for a repository
* `CodespacesSetCodespacesBilling` - Manage access control for organization codespaces
* `CodespacesSetCodespacesBillingUsers` - Add users to Codespaces billing for an organization
* `CodespacesSetRepositoriesForSecretForAuthenticatedUser` - Set selected repositories for a user secret
* `CodespacesSetSelectedReposForOrgSecret` - Set selected repositories for an organization secret
* `CodespacesStartForAuthenticatedUser` - Start a codespace for the authenticated user
* `CodespacesStopForAuthenticatedUser` - Stop a codespace for the authenticated user
* `CodespacesStopInOrganization` - Stop a codespace for an organization user
* `CodespacesUpdateForAuthenticatedUser` - Update a codespace for the authenticated user

### Dependabot

* `DependabotAddSelectedRepoToOrgSecret` - Add selected repository to an organization secret
* `DependabotCreateOrUpdateOrgSecret` - Create or update an organization secret
* `DependabotCreateOrUpdateRepoSecret` - Create or update a repository secret
* `DependabotDeleteOrgSecret` - Delete an organization secret
* `DependabotDeleteRepoSecret` - Delete a repository secret
* `DependabotGetAlert` - Get a Dependabot alert
* `DependabotGetOrgPublicKey` - Get an organization public key
* `DependabotGetOrgSecret` - Get an organization secret
* `DependabotGetRepoPublicKey` - Get a repository public key
* `DependabotGetRepoSecret` - Get a repository secret
* `DependabotListAlertsForEnterprise` - List Dependabot alerts for an enterprise
* `DependabotListAlertsForOrg` - List Dependabot alerts for an organization
* `DependabotListAlertsForRepo` - List Dependabot alerts for a repository
* `DependabotListOrgSecrets` - List organization secrets
* `DependabotListRepoSecrets` - List repository secrets
* `DependabotListSelectedReposForOrgSecret` - List selected repositories for an organization secret
* `DependabotRemoveSelectedRepoFromOrgSecret` - Remove selected repository from an organization secret
* `DependabotSetSelectedReposForOrgSecret` - Set selected repositories for an organization secret
* `DependabotUpdateAlert` - Update a Dependabot alert

### DependencyGraph

* `DependencyGraphCreateRepositorySnapshot` - Create a snapshot of dependencies for a repository
* `DependencyGraphDiffRange` - Get a diff of the dependencies between commits

### Emojis

* `EmojisGet` - Get emojis

### EnterpriseAdmin

* `AnnouncementBannersGetAnnouncementBannerForEnterprise` - Get announcement banner for enterprise
* `AnnouncementBannersRemoveAnnouncementBannerForEnterprise` - Remove announcement banner from enterprise
* `AnnouncementBannersSetAnnouncementBannerForEnterprise` - Set announcement banner for enterprise
* `EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise` - Add custom labels to a self-hosted runner for an enterprise
* `EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise` - Add organization access to a self-hosted runner group in an enterprise
* `EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise` - Add a self-hosted runner to a group for an enterprise
* `EnterpriseAdminCreateRegistrationTokenForEnterprise` - Create a registration token for an enterprise
* `EnterpriseAdminCreateRemoveTokenForEnterprise` - Create a remove token for an enterprise
* `EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise` - Create a self-hosted runner group for an enterprise
* `EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise` - Delete a self-hosted runner from an enterprise
* `EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise` - Delete a self-hosted runner group from an enterprise
* `EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise` - Disable a selected organization for GitHub Actions in an enterprise
* `EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise` - Enable a selected organization for GitHub Actions in an enterprise
* `EnterpriseAdminGetAllowedActionsEnterprise` - Get allowed actions and reusable workflows for an enterprise
* `EnterpriseAdminGetAuditLog` - Get the audit log for an enterprise
* `EnterpriseAdminGetConsumedLicenses` - List enterprise consumed licenses
* `EnterpriseAdminGetGithubActionsPermissionsEnterprise` - Get GitHub Actions permissions for an enterprise
* `EnterpriseAdminGetLicenseSyncStatus` - Get a license sync status
* `EnterpriseAdminGetSelfHostedRunnerForEnterprise` - Get a self-hosted runner for an enterprise
* `EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise` - Get a self-hosted runner group for an enterprise
* `EnterpriseAdminGetServerStatistics` - Get GitHub Enterprise Server statistics
* `EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise` - List labels for a self-hosted runner for an enterprise
* `EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise` - List organization access to a self-hosted runner group in an enterprise
* `EnterpriseAdminListRunnerApplicationsForEnterprise` - List runner applications for an enterprise
* `EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise` - List selected organizations enabled for GitHub Actions in an enterprise
* `EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise` - List self-hosted runner groups for an enterprise
* `EnterpriseAdminListSelfHostedRunnersForEnterprise` - List self-hosted runners for an enterprise
* `EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise` - List self-hosted runners in a group for an enterprise
* `EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise` - Remove all custom labels from a self-hosted runner for an enterprise
* `EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise` - Remove a custom label from a self-hosted runner for an enterprise
* `EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise` - Remove organization access to a self-hosted runner group in an enterprise
* `EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise` - Remove a self-hosted runner from a group for an enterprise
* `EnterpriseAdminSetAllowedActionsEnterprise` - Set allowed actions and reusable workflows for an enterprise
* `EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise` - Set custom labels for a self-hosted runner for an enterprise
* `EnterpriseAdminSetGithubActionsPermissionsEnterprise` - Set GitHub Actions permissions for an enterprise
* `EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise` - Set organization access for a self-hosted runner group in an enterprise
* `EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise` - Set selected organizations enabled for GitHub Actions in an enterprise
* `EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise` - Set self-hosted runners in a group for an enterprise
* `EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise` - Update a self-hosted runner group for an enterprise
* `SecretScanningGetSecurityAnalysisSettingsForEnterprise` - Get code security and analysis features for an enterprise
* `SecretScanningPatchSecurityAnalysisSettingsForEnterprise` - Update code security and analysis features for an enterprise
* `SecretScanningPostSecurityProductEnablementForEnterprise` - Enable or disable a security feature

### Gists

* `GistsCheckIsStarred` - Check if a gist is starred
* `GistsCreate` - Create a gist
* `GistsCreateComment` - Create a gist comment
* `GistsDelete` - Delete a gist
* `GistsDeleteComment` - Delete a gist comment
* `GistsFork` - Fork a gist
* `GistsGet` - Get a gist
* `GistsGetComment` - Get a gist comment
* `GistsGetRevision` - Get a gist revision
* `GistsList` - List gists for the authenticated user
* `GistsListComments` - List gist comments
* `GistsListCommits` - List gist commits
* `GistsListForUser` - List gists for a user
* `GistsListForks` - List gist forks
* `GistsListPublic` - List public gists
* `GistsListStarred` - List starred gists
* `GistsStar` - Star a gist
* `GistsUnstar` - Unstar a gist
* `GistsUpdate` - Update a gist
* `GistsUpdateComment` - Update a gist comment

### Git

* `GitCreateBlob` - Create a blob
* `GitCreateCommit` - Create a commit
* `GitCreateRef` - Create a reference
* `GitCreateTag` - Create a tag object
* `GitCreateTree` - Create a tree
* `GitDeleteRef` - Delete a reference
* `GitGetBlob` - Get a blob
* `GitGetCommit` - Get a commit
* `GitGetRef` - Get a reference
* `GitGetTag` - Get a tag
* `GitGetTree` - Get a tree
* `GitListMatchingRefs` - List matching references
* `GitUpdateRef` - Update a reference

### Gitignore

* `GitignoreGetAllTemplates` - Get all gitignore templates
* `GitignoreGetTemplate` - Get a gitignore template

### Interactions

* `InteractionsGetRestrictionsForAuthenticatedUser` - Get interaction restrictions for your public repositories
* `InteractionsGetRestrictionsForOrg` - Get interaction restrictions for an organization
* `InteractionsGetRestrictionsForRepo` - Get interaction restrictions for a repository
* `InteractionsRemoveRestrictionsForAuthenticatedUser` - Remove interaction restrictions from your public repositories
* `InteractionsRemoveRestrictionsForOrg` - Remove interaction restrictions for an organization
* `InteractionsRemoveRestrictionsForRepo` - Remove interaction restrictions for a repository
* `InteractionsSetRestrictionsForAuthenticatedUser` - Set interaction restrictions for your public repositories
* `InteractionsSetRestrictionsForOrg` - Set interaction restrictions for an organization
* `InteractionsSetRestrictionsForRepo` - Set interaction restrictions for a repository

### Issues

* `IssuesAddAssignees` - Add assignees to an issue
* `IssuesAddLabels` - Add labels to an issue
* `IssuesCheckUserCanBeAssigned` - Check if a user can be assigned
* `IssuesCheckUserCanBeAssignedToIssue` - Check if a user can be assigned to a issue
* `IssuesCreate` - Create an issue
* `IssuesCreateComment` - Create an issue comment
* `IssuesCreateLabel` - Create a label
* `IssuesCreateMilestone` - Create a milestone
* `IssuesDeleteComment` - Delete an issue comment
* `IssuesDeleteLabel` - Delete a label
* `IssuesDeleteMilestone` - Delete a milestone
* `IssuesGet` - Get an issue
* `IssuesGetComment` - Get an issue comment
* `IssuesGetEvent` - Get an issue event
* `IssuesGetLabel` - Get a label
* `IssuesGetMilestone` - Get a milestone
* `IssuesList` - List issues assigned to the authenticated user
* `IssuesListAssignees` - List assignees
* `IssuesListComments` - List issue comments
* `IssuesListCommentsForRepo` - List issue comments for a repository
* `IssuesListEvents` - List issue events
* `IssuesListEventsForRepo` - List issue events for a repository
* `IssuesListEventsForTimeline` - List timeline events for an issue
* `IssuesListForAuthenticatedUser` - List user account issues assigned to the authenticated user
* `IssuesListForOrg` - List organization issues assigned to the authenticated user
* `IssuesListForRepo` - List repository issues
* `IssuesListLabelsForMilestone` - List labels for issues in a milestone
* `IssuesListLabelsForRepo` - List labels for a repository
* `IssuesListLabelsOnIssue` - List labels for an issue
* `IssuesListMilestones` - List milestones
* `IssuesLock` - Lock an issue
* `IssuesRemoveAllLabels` - Remove all labels from an issue
* `IssuesRemoveAssignees` - Remove assignees from an issue
* `IssuesRemoveLabel` - Remove a label from an issue
* `IssuesSetLabels` - Set labels for an issue
* `IssuesUnlock` - Unlock an issue
* `IssuesUpdate` - Update an issue
* `IssuesUpdateComment` - Update an issue comment
* `IssuesUpdateLabel` - Update a label
* `IssuesUpdateMilestone` - Update a milestone

### Licenses

* `LicensesGet` - Get a license
* `LicensesGetAllCommonlyUsed` - Get all commonly used licenses
* `LicensesGetForRepo` - Get the license for a repository

### Markdown

* `MarkdownRender` - Render a Markdown document
* `MarkdownRenderRaw` - Render a Markdown document in raw mode

### Meta

* `MetaGet` - Get GitHub Enterprise Cloud meta information
* `MetaGetAllVersions` - Get all API versions
* `MetaGetOctocat` - Get Octocat
* `MetaGetZen` - Get the Zen of GitHub
* `MetaRoot` - GitHub API Root

### Migrations

* `MigrationsCancelImport` - Cancel an import
* `MigrationsDeleteArchiveForAuthenticatedUser` - Delete a user migration archive
* `MigrationsDeleteArchiveForOrg` - Delete an organization migration archive
* `MigrationsDownloadArchiveForOrg` - Download an organization migration archive
* `MigrationsGetArchiveForAuthenticatedUser` - Download a user migration archive
* `MigrationsGetCommitAuthors` - Get commit authors
* `MigrationsGetImportStatus` - Get an import status
* `MigrationsGetLargeFiles` - Get large files
* `MigrationsGetStatusForAuthenticatedUser` - Get a user migration status
* `MigrationsGetStatusForOrg` - Get an organization migration status
* `MigrationsListForAuthenticatedUser` - List user migrations
* `MigrationsListForOrg` - List organization migrations
* `MigrationsListReposForAuthenticatedUser` - List repositories for a user migration
* `MigrationsListReposForOrg` - List repositories in an organization migration
* `MigrationsMapCommitAuthor` - Map a commit author
* `MigrationsSetLfsPreference` - Update Git LFS preference
* `MigrationsStartForAuthenticatedUser` - Start a user migration
* `MigrationsStartForOrg` - Start an organization migration
* `MigrationsStartImport` - Start an import
* `MigrationsUnlockRepoForAuthenticatedUser` - Unlock a user repository
* `MigrationsUnlockRepoForOrg` - Unlock an organization repository
* `MigrationsUpdateImport` - Update an import

### Oidc

* `OidcGetOidcCustomSubTemplateForOrg` - Get the customization template for an OIDC subject claim for an organization
* `OidcUpdateOidcCustomSubTemplateForOrg` - Set the customization template for an OIDC subject claim for an organization

### Orgs

* `AnnouncementBannersGetAnnouncementBannerForOrg` - Get announcement banner for organization
* `AnnouncementBannersRemoveAnnouncementBannerForOrg` - Remove announcement banner from organization
* `AnnouncementBannersSetAnnouncementBannerForOrg` - Set announcement banner for organization
* `OrgsAddSecurityManagerTeam` - Add a security manager team
* `OrgsBlockUser` - Block a user from an organization
* `OrgsCancelInvitation` - Cancel an organization invitation
* `OrgsCheckBlockedUser` - Check if a user is blocked by an organization
* `OrgsCheckMembershipForUser` - Check organization membership for a user
* `OrgsCheckPublicMembershipForUser` - Check public organization membership for a user
* `OrgsConvertMemberToOutsideCollaborator` - Convert an organization member to outside collaborator
* `OrgsCreateCustomRole` - Create a custom role
* `OrgsCreateInvitation` - Create an organization invitation
* `OrgsCreateWebhook` - Create an organization webhook
* `OrgsDeleteCustomRole` - Delete a custom role
* `OrgsDeleteWebhook` - Delete an organization webhook
* `OrgsEnableOrDisableSecurityProductOnAllOrgRepos` - Enable or disable a security feature for an organization
* `OrgsGet` - Get an organization
* `OrgsGetAuditLog` - Get the audit log for an organization
* `OrgsGetCustomRole` - Get a custom role
* `OrgsGetMembershipForAuthenticatedUser` - Get an organization membership for the authenticated user
* `OrgsGetMembershipForUser` - Get organization membership for a user
* `OrgsGetWebhook` - Get an organization webhook
* `OrgsGetWebhookConfigForOrg` - Get a webhook configuration for an organization
* `OrgsGetWebhookDelivery` - Get a webhook delivery for an organization webhook
* `OrgsList` - List organizations
* `OrgsListAppInstallations` - List app installations for an organization
* `OrgsListBlockedUsers` - List users blocked by an organization
* `OrgsListCustomRoles` - List custom repository roles in an organization
* `OrgsListFailedInvitations` - List failed organization invitations
* `OrgsListFineGrainedPermissions` - List repository fine-grained permissions for an organization
* `OrgsListForAuthenticatedUser` - List organizations for the authenticated user
* `OrgsListForUser` - List organizations for a user
* `OrgsListInvitationTeams` - List organization invitation teams
* `OrgsListMembers` - List organization members
* `OrgsListMembershipsForAuthenticatedUser` - List organization memberships for the authenticated user
* `OrgsListOutsideCollaborators` - List outside collaborators for an organization
* `OrgsListPendingInvitations` - List pending organization invitations
* `OrgsListPublicMembers` - List public organization members
* `OrgsListSamlSsoAuthorizations` - List SAML SSO authorizations for an organization
* `OrgsListSecurityManagerTeams` - List security manager teams
* `OrgsListWebhookDeliveries` - List deliveries for an organization webhook
* `OrgsListWebhooks` - List organization webhooks
* `OrgsPingWebhook` - Ping an organization webhook
* `OrgsRedeliverWebhookDelivery` - Redeliver a delivery for an organization webhook
* `OrgsRemoveMember` - Remove an organization member
* `OrgsRemoveMembershipForUser` - Remove organization membership for a user
* `OrgsRemoveOutsideCollaborator` - Remove outside collaborator from an organization
* `OrgsRemovePublicMembershipForAuthenticatedUser` - Remove public organization membership for the authenticated user
* `OrgsRemoveSamlSsoAuthorization` - Remove a SAML SSO authorization for an organization
* `OrgsRemoveSecurityManagerTeam` - Remove a security manager team
* `OrgsSetMembershipForUser` - Set organization membership for a user
* `OrgsSetPublicMembershipForAuthenticatedUser` - Set public organization membership for the authenticated user
* `OrgsUnblockUser` - Unblock a user from an organization
* `OrgsUpdate` - Update an organization
* `OrgsUpdateCustomRole` - Update a custom role
* `OrgsUpdateMembershipForAuthenticatedUser` - Update an organization membership for the authenticated user
* `OrgsUpdateWebhook` - Update an organization webhook
* `OrgsUpdateWebhookConfigForOrg` - Update a webhook configuration for an organization

### Packages

* `PackagesDeletePackageForAuthenticatedUser` - Delete a package for the authenticated user
* `PackagesDeletePackageForOrg` - Delete a package for an organization
* `PackagesDeletePackageForUser` - Delete a package for a user
* `PackagesDeletePackageVersionForAuthenticatedUser` - Delete a package version for the authenticated user
* `PackagesDeletePackageVersionForOrg` - Delete package version for an organization
* `PackagesDeletePackageVersionForUser` - Delete package version for a user
* `PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser` - List package versions for a package owned by the authenticated user
* `PackagesGetAllPackageVersionsForPackageOwnedByOrg` - List package versions for a package owned by an organization
* `PackagesGetAllPackageVersionsForPackageOwnedByUser` - List package versions for a package owned by a user
* `PackagesGetPackageForAuthenticatedUser` - Get a package for the authenticated user
* `PackagesGetPackageForOrganization` - Get a package for an organization
* `PackagesGetPackageForUser` - Get a package for a user
* `PackagesGetPackageVersionForAuthenticatedUser` - Get a package version for the authenticated user
* `PackagesGetPackageVersionForOrganization` - Get a package version for an organization
* `PackagesGetPackageVersionForUser` - Get a package version for a user
* `PackagesListPackagesForAuthenticatedUser` - List packages for the authenticated user's namespace
* `PackagesListPackagesForOrganization` - List packages for an organization
* `PackagesListPackagesForUser` - List packages for a user
* `PackagesRestorePackageForAuthenticatedUser` - Restore a package for the authenticated user
* `PackagesRestorePackageForOrg` - Restore a package for an organization
* `PackagesRestorePackageForUser` - Restore a package for a user
* `PackagesRestorePackageVersionForAuthenticatedUser` - Restore a package version for the authenticated user
* `PackagesRestorePackageVersionForOrg` - Restore package version for an organization
* `PackagesRestorePackageVersionForUser` - Restore package version for a user

### Projects

* `ProjectsAddCollaborator` - Add project collaborator
* `ProjectsCreateCard` - Create a project card
* `ProjectsCreateColumn` - Create a project column
* `ProjectsCreateForAuthenticatedUser` - Create a user project
* `ProjectsCreateForOrg` - Create an organization project
* `ProjectsCreateForRepo` - Create a repository project
* `ProjectsDelete` - Delete a project
* `ProjectsDeleteCard` - Delete a project card
* `ProjectsDeleteColumn` - Delete a project column
* `ProjectsGet` - Get a project
* `ProjectsGetCard` - Get a project card
* `ProjectsGetColumn` - Get a project column
* `ProjectsGetPermissionForUser` - Get project permission for a user
* `ProjectsListCards` - List project cards
* `ProjectsListCollaborators` - List project collaborators
* `ProjectsListColumns` - List project columns
* `ProjectsListForOrg` - List organization projects
* `ProjectsListForRepo` - List repository projects
* `ProjectsListForUser` - List user projects
* `ProjectsMoveCard` - Move a project card
* `ProjectsMoveColumn` - Move a project column
* `ProjectsRemoveCollaborator` - Remove user as a collaborator
* `ProjectsUpdate` - Update a project
* `ProjectsUpdateCard` - Update an existing project card
* `ProjectsUpdateColumn` - Update an existing project column

### Pulls

* `PullsCheckIfMerged` - Check if a pull request has been merged
* `PullsCreate` - Create a pull request
* `PullsCreateReplyForReviewComment` - Create a reply for a review comment
* `PullsCreateReview` - Create a review for a pull request
* `PullsCreateReviewComment` - Create a review comment for a pull request
* `PullsDeletePendingReview` - Delete a pending review for a pull request
* `PullsDeleteReviewComment` - Delete a review comment for a pull request
* `PullsDismissReview` - Dismiss a review for a pull request
* `PullsGet` - Get a pull request
* `PullsGetReview` - Get a review for a pull request
* `PullsGetReviewComment` - Get a review comment for a pull request
* `PullsList` - List pull requests
* `PullsListCommentsForReview` - List comments for a pull request review
* `PullsListCommits` - List commits on a pull request
* `PullsListFiles` - List pull requests files
* `PullsListRequestedReviewers` - Get all requested reviewers for a pull request
* `PullsListReviewComments` - List review comments on a pull request
* `PullsListReviewCommentsForRepo` - List review comments in a repository
* `PullsListReviews` - List reviews for a pull request
* `PullsMerge` - Merge a pull request
* `PullsRemoveRequestedReviewers` - Remove requested reviewers from a pull request
* `PullsRequestReviewers` - Request reviewers for a pull request
* `PullsSubmitReview` - Submit a review for a pull request
* `PullsUpdate` - Update a pull request
* `PullsUpdateBranch` - Update a pull request branch
* `PullsUpdateReview` - Update a review for a pull request
* `PullsUpdateReviewComment` - Update a review comment for a pull request

### RateLimit

* `RateLimitGet` - Get rate limit status for the authenticated user

### Reactions

* `ReactionsCreateForCommitComment` - Create reaction for a commit comment
* `ReactionsCreateForIssue` - Create reaction for an issue
* `ReactionsCreateForIssueComment` - Create reaction for an issue comment
* `ReactionsCreateForPullRequestReviewComment` - Create reaction for a pull request review comment
* `ReactionsCreateForRelease` - Create reaction for a release
* `ReactionsCreateForTeamDiscussionCommentInOrg` - Create reaction for a team discussion comment
* `ReactionsCreateForTeamDiscussionCommentLegacy` - Create reaction for a team discussion comment (Legacy)
* `ReactionsCreateForTeamDiscussionInOrg` - Create reaction for a team discussion
* `ReactionsCreateForTeamDiscussionLegacy` - Create reaction for a team discussion (Legacy)
* `ReactionsDeleteForCommitComment` - Delete a commit comment reaction
* `ReactionsDeleteForIssue` - Delete an issue reaction
* `ReactionsDeleteForIssueComment` - Delete an issue comment reaction
* `ReactionsDeleteForPullRequestComment` - Delete a pull request comment reaction
* `ReactionsDeleteForRelease` - Delete a release reaction
* `ReactionsDeleteForTeamDiscussion` - Delete team discussion reaction
* `ReactionsDeleteForTeamDiscussionComment` - Delete team discussion comment reaction
* `ReactionsListForCommitComment` - List reactions for a commit comment
* `ReactionsListForIssue` - List reactions for an issue
* `ReactionsListForIssueComment` - List reactions for an issue comment
* `ReactionsListForPullRequestReviewComment` - List reactions for a pull request review comment
* `ReactionsListForRelease` - List reactions for a release
* `ReactionsListForTeamDiscussionCommentInOrg` - List reactions for a team discussion comment
* `ReactionsListForTeamDiscussionCommentLegacy` - List reactions for a team discussion comment (Legacy)
* `ReactionsListForTeamDiscussionInOrg` - List reactions for a team discussion
* `ReactionsListForTeamDiscussionLegacy` - List reactions for a team discussion (Legacy)

### Repos

* `ReposAcceptInvitationForAuthenticatedUser` - Accept a repository invitation
* `ReposAddAppAccessRestrictions` - Add app access restrictions
* `ReposAddCollaborator` - Add a repository collaborator
* `ReposAddStatusCheckContexts` - Add status check contexts
* `ReposAddTeamAccessRestrictions` - Add team access restrictions
* `ReposAddUserAccessRestrictions` - Add user access restrictions
* `ReposCheckCollaborator` - Check if a user is a repository collaborator
* `ReposCheckVulnerabilityAlerts` - Check if vulnerability alerts are enabled for a repository
* `ReposCodeownersErrors` - List CODEOWNERS errors
* `ReposCompareCommits` - Compare two commits
* `ReposCreateAutolink` - Create an autolink reference for a repository
* `ReposCreateCommitComment` - Create a commit comment
* `ReposCreateCommitSignatureProtection` - Create commit signature protection
* `ReposCreateCommitStatus` - Create a commit status
* `ReposCreateDeployKey` - Create a deploy key
* `ReposCreateDeployment` - Create a deployment
* `ReposCreateDeploymentBranchPolicy` - Create a deployment branch policy
* `ReposCreateDeploymentStatus` - Create a deployment status
* `ReposCreateDispatchEvent` - Create a repository dispatch event
* `ReposCreateForAuthenticatedUser` - Create a repository for the authenticated user
* `ReposCreateFork` - Create a fork
* `ReposCreateInOrg` - Create an organization repository
* `ReposCreateOrUpdateEnvironment` - Create or update an environment
* `ReposCreateOrUpdateFileContents` - Create or update file contents
* `ReposCreatePagesDeployment` - Create a GitHub Pages deployment
* `ReposCreatePagesSite` - Create a GitHub Enterprise Cloud Pages site
* `ReposCreateRelease` - Create a release
* `ReposCreateTagProtection` - Create a tag protection state for a repository
* `ReposCreateUsingTemplate` - Create a repository using a template
* `ReposCreateWebhook` - Create a repository webhook
* `ReposDeclineInvitationForAuthenticatedUser` - Decline a repository invitation
* `ReposDelete` - Delete a repository
* `ReposDeleteAccessRestrictions` - Delete access restrictions
* `ReposDeleteAdminBranchProtection` - Delete admin branch protection
* `ReposDeleteAnEnvironment` - Delete an environment
* `ReposDeleteAutolink` - Delete an autolink reference from a repository
* `ReposDeleteBranchProtection` - Delete branch protection
* `ReposDeleteCommitComment` - Delete a commit comment
* `ReposDeleteCommitSignatureProtection` - Delete commit signature protection
* `ReposDeleteDeployKey` - Delete a deploy key
* `ReposDeleteDeployment` - Delete a deployment
* `ReposDeleteDeploymentBranchPolicy` - Delete a deployment branch policy
* `ReposDeleteFile` - Delete a file
* `ReposDeleteInvitation` - Delete a repository invitation
* `ReposDeletePagesSite` - Delete a GitHub Enterprise Cloud Pages site
* `ReposDeletePullRequestReviewProtection` - Delete pull request review protection
* `ReposDeleteRelease` - Delete a release
* `ReposDeleteReleaseAsset` - Delete a release asset
* `ReposDeleteTagProtection` - Delete a tag protection state for a repository
* `ReposDeleteWebhook` - Delete a repository webhook
* `ReposDisableAutomatedSecurityFixes` - Disable automated security fixes
* `ReposDisableLfsForRepo` - Disable Git LFS for a repository
* `ReposDisableVulnerabilityAlerts` - Disable vulnerability alerts
* `ReposDownloadTarballArchive` - Download a repository archive (tar)
* `ReposDownloadZipballArchive` - Download a repository archive (zip)
* `ReposEnableAutomatedSecurityFixes` - Enable automated security fixes
* `ReposEnableLfsForRepo` - Enable Git LFS for a repository
* `ReposEnableVulnerabilityAlerts` - Enable vulnerability alerts
* `ReposGenerateReleaseNotes` - Generate release notes content for a release
* `ReposGet` - Get a repository
* `ReposGetAccessRestrictions` - Get access restrictions
* `ReposGetAdminBranchProtection` - Get admin branch protection
* `ReposGetAllEnvironments` - List environments
* `ReposGetAllStatusCheckContexts` - Get all status check contexts
* `ReposGetAllTopics` - Get all repository topics
* `ReposGetAppsWithAccessToProtectedBranch` - Get apps with access to the protected branch
* `ReposGetAutolink` - Get an autolink reference of a repository
* `ReposGetBranch` - Get a branch
* `ReposGetBranchProtection` - Get branch protection
* `ReposGetClones` - Get repository clones
* `ReposGetCodeFrequencyStats` - Get the weekly commit activity
* `ReposGetCollaboratorPermissionLevel` - Get repository permissions for a user
* `ReposGetCombinedStatusForRef` - Get the combined status for a specific reference
* `ReposGetCommit` - Get a commit
* `ReposGetCommitActivityStats` - Get the last year of commit activity
* `ReposGetCommitComment` - Get a commit comment
* `ReposGetCommitSignatureProtection` - Get commit signature protection
* `ReposGetCommunityProfileMetrics` - Get community profile metrics
* `ReposGetContent` - Get repository content
* `ReposGetContributorsStats` - Get all contributor commit activity
* `ReposGetDeployKey` - Get a deploy key
* `ReposGetDeployment` - Get a deployment
* `ReposGetDeploymentBranchPolicy` - Get a deployment branch policy
* `ReposGetDeploymentStatus` - Get a deployment status
* `ReposGetEnvironment` - Get an environment
* `ReposGetLatestPagesBuild` - Get latest Pages build
* `ReposGetLatestRelease` - Get the latest release
* `ReposGetPages` - Get a GitHub Enterprise Cloud Pages site
* `ReposGetPagesBuild` - Get GitHub Enterprise Cloud Pages build
* `ReposGetPagesHealthCheck` - Get a DNS health check for GitHub Pages
* `ReposGetParticipationStats` - Get the weekly commit count
* `ReposGetPullRequestReviewProtection` - Get pull request review protection
* `ReposGetPunchCardStats` - Get the hourly commit count for each day
* `ReposGetReadme` - Get a repository README
* `ReposGetReadmeInDirectory` - Get a repository README for a directory
* `ReposGetRelease` - Get a release
* `ReposGetReleaseAsset` - Get a release asset
* `ReposGetReleaseByTag` - Get a release by tag name
* `ReposGetStatusChecksProtection` - Get status checks protection
* `ReposGetTeamsWithAccessToProtectedBranch` - Get teams with access to the protected branch
* `ReposGetTopPaths` - Get top referral paths
* `ReposGetTopReferrers` - Get top referral sources
* `ReposGetUsersWithAccessToProtectedBranch` - Get users with access to the protected branch
* `ReposGetViews` - Get page views
* `ReposGetWebhook` - Get a repository webhook
* `ReposGetWebhookConfigForRepo` - Get a webhook configuration for a repository
* `ReposGetWebhookDelivery` - Get a delivery for a repository webhook
* `ReposListAutolinks` - List all autolinks of a repository
* `ReposListBranches` - List branches
* `ReposListBranchesForHeadCommit` - List branches for HEAD commit
* `ReposListCollaborators` - List repository collaborators
* `ReposListCommentsForCommit` - List commit comments
* `ReposListCommitCommentsForRepo` - List commit comments for a repository
* `ReposListCommitStatusesForRef` - List commit statuses for a reference
* `ReposListCommits` - List commits
* `ReposListContributors` - List repository contributors
* `ReposListDeployKeys` - List deploy keys
* `ReposListDeploymentBranchPolicies` - List deployment branch policies
* `ReposListDeploymentStatuses` - List deployment statuses
* `ReposListDeployments` - List deployments
* `ReposListForAuthenticatedUser` - List repositories for the authenticated user
* `ReposListForOrg` - List organization repositories
* `ReposListForUser` - List repositories for a user
* `ReposListForks` - List forks
* `ReposListInvitations` - List repository invitations
* `ReposListInvitationsForAuthenticatedUser` - List repository invitations for the authenticated user
* `ReposListLanguages` - List repository languages
* `ReposListPagesBuilds` - List GitHub Enterprise Cloud Pages builds
* `ReposListPublic` - List public repositories
* `ReposListPullRequestsAssociatedWithCommit` - List pull requests associated with a commit
* `ReposListReleaseAssets` - List release assets
* `ReposListReleases` - List releases
* `ReposListTagProtection` - List tag protection states for a repository
* `ReposListTags` - List repository tags
* `ReposListTeams` - List repository teams
* `ReposListWebhookDeliveries` - List deliveries for a repository webhook
* `ReposListWebhooks` - List repository webhooks
* `ReposMerge` - Merge a branch
* `ReposMergeUpstream` - Sync a fork branch with the upstream repository
* `ReposPingWebhook` - Ping a repository webhook
* `ReposRedeliverWebhookDelivery` - Redeliver a delivery for a repository webhook
* `ReposRemoveAppAccessRestrictions` - Remove app access restrictions
* `ReposRemoveCollaborator` - Remove a repository collaborator
* `ReposRemoveStatusCheckContexts` - Remove status check contexts
* `ReposRemoveStatusCheckProtection` - Remove status check protection
* `ReposRemoveTeamAccessRestrictions` - Remove team access restrictions
* `ReposRemoveUserAccessRestrictions` - Remove user access restrictions
* `ReposRenameBranch` - Rename a branch
* `ReposReplaceAllTopics` - Replace all repository topics
* `ReposRequestPagesBuild` - Request a GitHub Enterprise Cloud Pages build
* `ReposSetAdminBranchProtection` - Set admin branch protection
* `ReposSetAppAccessRestrictions` - Set app access restrictions
* `ReposSetStatusCheckContexts` - Set status check contexts
* `ReposSetTeamAccessRestrictions` - Set team access restrictions
* `ReposSetUserAccessRestrictions` - Set user access restrictions
* `ReposTestPushWebhook` - Test the push repository webhook
* `ReposTransfer` - Transfer a repository
* `ReposUpdate` - Update a repository
* `ReposUpdateBranchProtection` - Update branch protection
* `ReposUpdateCommitComment` - Update a commit comment
* `ReposUpdateDeploymentBranchPolicy` - Update a deployment branch policy
* `ReposUpdateInformationAboutPagesSite` - Update information about a GitHub Enterprise Cloud Pages site
* `ReposUpdateInvitation` - Update a repository invitation
* `ReposUpdatePullRequestReviewProtection` - Update pull request review protection
* `ReposUpdateRelease` - Update a release
* `ReposUpdateReleaseAsset` - Update a release asset
* `ReposUpdateStatusCheckProtection` - Update status check protection
* `ReposUpdateWebhook` - Update a repository webhook
* `ReposUpdateWebhookConfigForRepo` - Update a webhook configuration for a repository
* `ReposUploadReleaseAsset` - Upload a release asset

### Scim

* `ScimDeleteUserFromOrg` - Delete a SCIM user from an organization
* `ScimGetProvisioningInformationForUser` - Get SCIM provisioning information for a user
* `ScimListProvisionedIdentities` - List SCIM provisioned identities
* `ScimProvisionAndInviteUser` - Provision and invite a SCIM user
* `ScimSetInformationForProvisionedUser` - Update a provisioned organization membership
* `ScimUpdateAttributeForUser` - Update an attribute for a SCIM user

### Search

* `SearchCode` - Search code
* `SearchCommits` - Search commits
* `SearchIssuesAndPullRequests` - Search issues and pull requests
* `SearchLabels` - Search labels
* `SearchRepos` - Search repositories
* `SearchTopics` - Search topics
* `SearchUsers` - Search users

### SecretScanning

* `SecretScanningGetAlert` - Get a secret scanning alert
* `SecretScanningListAlertsForEnterprise` - List secret scanning alerts for an enterprise
* `SecretScanningListAlertsForOrg` - List secret scanning alerts for an organization
* `SecretScanningListAlertsForRepo` - List secret scanning alerts for a repository
* `SecretScanningListLocationsForAlert` - List locations for a secret scanning alert
* `SecretScanningUpdateAlert` - Update a secret scanning alert

### ServerStatistics

* `EnterpriseAdminGetServerStatistics` - Get GitHub Enterprise Server statistics

### Teams

* `TeamsAddMemberLegacy` - Add team member (Legacy)
* `TeamsAddOrUpdateMembershipForUserInOrg` - Add or update team membership for a user
* `TeamsAddOrUpdateMembershipForUserLegacy` - Add or update team membership for a user (Legacy)
* `TeamsAddOrUpdateProjectPermissionsInOrg` - Add or update team project permissions
* `TeamsAddOrUpdateProjectPermissionsLegacy` - Add or update team project permissions (Legacy)
* `TeamsAddOrUpdateRepoPermissionsInOrg` - Add or update team repository permissions
* `TeamsAddOrUpdateRepoPermissionsLegacy` - Add or update team repository permissions (Legacy)
* `TeamsCheckPermissionsForProjectInOrg` - Check team permissions for a project
* `TeamsCheckPermissionsForProjectLegacy` - Check team permissions for a project (Legacy)
* `TeamsCheckPermissionsForRepoInOrg` - Check team permissions for a repository
* `TeamsCheckPermissionsForRepoLegacy` - Check team permissions for a repository (Legacy)
* `TeamsCreate` - Create a team
* `TeamsCreateDiscussionCommentInOrg` - Create a discussion comment
* `TeamsCreateDiscussionCommentLegacy` - Create a discussion comment (Legacy)
* `TeamsCreateDiscussionInOrg` - Create a discussion
* `TeamsCreateDiscussionLegacy` - Create a discussion (Legacy)
* `TeamsCreateOrUpdateIdpGroupConnectionsInOrg` - Create or update IdP group connections
* `TeamsCreateOrUpdateIdpGroupConnectionsLegacy` - Create or update IdP group connections (Legacy)
* `TeamsDeleteDiscussionCommentInOrg` - Delete a discussion comment
* `TeamsDeleteDiscussionCommentLegacy` - Delete a discussion comment (Legacy)
* `TeamsDeleteDiscussionInOrg` - Delete a discussion
* `TeamsDeleteDiscussionLegacy` - Delete a discussion (Legacy)
* `TeamsDeleteInOrg` - Delete a team
* `TeamsDeleteLegacy` - Delete a team (Legacy)
* `TeamsExternalIdpGroupInfoForOrg` - Get an external group
* `TeamsGetByName` - Get a team by name
* `TeamsGetDiscussionCommentInOrg` - Get a discussion comment
* `TeamsGetDiscussionCommentLegacy` - Get a discussion comment (Legacy)
* `TeamsGetDiscussionInOrg` - Get a discussion
* `TeamsGetDiscussionLegacy` - Get a discussion (Legacy)
* `TeamsGetLegacy` - Get a team (Legacy)
* `TeamsGetMemberLegacy` - Get team member (Legacy)
* `TeamsGetMembershipForUserInOrg` - Get team membership for a user
* `TeamsGetMembershipForUserLegacy` - Get team membership for a user (Legacy)
* `TeamsLinkExternalIdpGroupToTeamForOrg` - Update the connection between an external group and a team
* `TeamsList` - List teams
* `TeamsListChildInOrg` - List child teams
* `TeamsListChildLegacy` - List child teams (Legacy)
* `TeamsListDiscussionCommentsInOrg` - List discussion comments
* `TeamsListDiscussionCommentsLegacy` - List discussion comments (Legacy)
* `TeamsListDiscussionsInOrg` - List discussions
* `TeamsListDiscussionsLegacy` - List discussions (Legacy)
* `TeamsListExternalIdpGroupsForOrg` - List external groups in an organization
* `TeamsListForAuthenticatedUser` - List teams for the authenticated user
* `TeamsListIdpGroupsForLegacy` - List IdP groups for a team (Legacy)
* `TeamsListIdpGroupsForOrg` - List IdP groups for an organization
* `TeamsListIdpGroupsInOrg` - List IdP groups for a team
* `TeamsListLinkedExternalIdpGroupsToTeamForOrg` - List a connection between an external group and a team
* `TeamsListMembersInOrg` - List team members
* `TeamsListMembersLegacy` - List team members (Legacy)
* `TeamsListPendingInvitationsInOrg` - List pending team invitations
* `TeamsListPendingInvitationsLegacy` - List pending team invitations (Legacy)
* `TeamsListProjectsInOrg` - List team projects
* `TeamsListProjectsLegacy` - List team projects (Legacy)
* `TeamsListReposInOrg` - List team repositories
* `TeamsListReposLegacy` - List team repositories (Legacy)
* `TeamsRemoveMemberLegacy` - Remove team member (Legacy)
* `TeamsRemoveMembershipForUserInOrg` - Remove team membership for a user
* `TeamsRemoveMembershipForUserLegacy` - Remove team membership for a user (Legacy)
* `TeamsRemoveProjectInOrg` - Remove a project from a team
* `TeamsRemoveProjectLegacy` - Remove a project from a team (Legacy)
* `TeamsRemoveRepoInOrg` - Remove a repository from a team
* `TeamsRemoveRepoLegacy` - Remove a repository from a team (Legacy)
* `TeamsUnlinkExternalIdpGroupFromTeamForOrg` - Remove the connection between an external group and a team
* `TeamsUpdateDiscussionCommentInOrg` - Update a discussion comment
* `TeamsUpdateDiscussionCommentLegacy` - Update a discussion comment (Legacy)
* `TeamsUpdateDiscussionInOrg` - Update a discussion
* `TeamsUpdateDiscussionLegacy` - Update a discussion (Legacy)
* `TeamsUpdateInOrg` - Update a team
* `TeamsUpdateLegacy` - Update a team (Legacy)

### Users

* `UsersAddEmailForAuthenticatedUser` - Add an email address for the authenticated user
* `UsersBlock` - Block a user
* `UsersCheckBlocked` - Check if a user is blocked by the authenticated user
* `UsersCheckFollowingForUser` - Check if a user follows another user
* `UsersCheckPersonIsFollowedByAuthenticated` - Check if a person is followed by the authenticated user
* `UsersCreateGpgKeyForAuthenticatedUser` - Create a GPG key for the authenticated user
* `UsersCreatePublicSSHKeyForAuthenticatedUser` - Create a public SSH key for the authenticated user
* `UsersCreateSSHSigningKeyForAuthenticatedUser` - Create a SSH signing key for the authenticated user
* `UsersDeleteEmailForAuthenticatedUser` - Delete an email address for the authenticated user
* `UsersDeleteGpgKeyForAuthenticatedUser` - Delete a GPG key for the authenticated user
* `UsersDeletePublicSSHKeyForAuthenticatedUser` - Delete a public SSH key for the authenticated user
* `UsersDeleteSSHSigningKeyForAuthenticatedUser` - Delete an SSH signing key for the authenticated user
* `UsersFollow` - Follow a user
* `UsersGetAuthenticated` - Get the authenticated user
* `UsersGetByUsername` - Get a user
* `UsersGetContextForUser` - Get contextual information for a user
* `UsersGetGpgKeyForAuthenticatedUser` - Get a GPG key for the authenticated user
* `UsersGetPublicSSHKeyForAuthenticatedUser` - Get a public SSH key for the authenticated user
* `UsersGetSSHSigningKeyForAuthenticatedUser` - Get an SSH signing key for the authenticated user
* `UsersList` - List users
* `UsersListBlockedByAuthenticatedUser` - List users blocked by the authenticated user
* `UsersListEmailsForAuthenticatedUser` - List email addresses for the authenticated user
* `UsersListFollowedByAuthenticatedUser` - List the people the authenticated user follows
* `UsersListFollowersForAuthenticatedUser` - List followers of the authenticated user
* `UsersListFollowersForUser` - List followers of a user
* `UsersListFollowingForUser` - List the people a user follows
* `UsersListGpgKeysForAuthenticatedUser` - List GPG keys for the authenticated user
* `UsersListGpgKeysForUser` - List GPG keys for a user
* `UsersListPublicEmailsForAuthenticatedUser` - List public email addresses for the authenticated user
* `UsersListPublicKeysForUser` - List public keys for a user
* `UsersListPublicSSHKeysForAuthenticatedUser` - List public SSH keys for the authenticated user
* `UsersListSSHSigningKeysForAuthenticatedUser` - List SSH signing keys for the authenticated user
* `UsersListSSHSigningKeysForUser` - List SSH signing keys for a user
* `UsersSetPrimaryEmailVisibilityForAuthenticatedUser` - Set primary email visibility for the authenticated user
* `UsersUnblock` - Unblock a user
* `UsersUnfollow` - Unfollow a user
* `UsersUpdateAuthenticated` - Update the authenticated user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
