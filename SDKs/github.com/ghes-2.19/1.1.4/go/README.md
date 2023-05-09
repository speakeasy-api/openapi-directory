# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/github.com/ghes-2.19/1.1.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Activity.ActivityCheckRepoIsStarredByAuthenticatedUser(ctx, operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest{
        Owner: "corrupti",
        Repo: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Activity](docs/activity/README.md)

* [ActivityCheckRepoIsStarredByAuthenticatedUser](docs/activity/README.md#activitycheckrepoisstarredbyauthenticateduser) - Check if a repository is starred by the authenticated user
* [ActivityDeleteRepoSubscription](docs/activity/README.md#activitydeletereposubscription) - Delete a repository subscription
* [ActivityDeleteThreadSubscription](docs/activity/README.md#activitydeletethreadsubscription) - Delete a thread subscription
* [ActivityGetFeeds](docs/activity/README.md#activitygetfeeds) - Get feeds
* [ActivityGetRepoSubscription](docs/activity/README.md#activitygetreposubscription) - Get a repository subscription
* [ActivityGetThread](docs/activity/README.md#activitygetthread) - Get a thread
* [ActivityGetThreadSubscriptionForAuthenticatedUser](docs/activity/README.md#activitygetthreadsubscriptionforauthenticateduser) - Get a thread subscription for the authenticated user
* [ActivityListEventsForAuthenticatedUser](docs/activity/README.md#activitylisteventsforauthenticateduser) - List events for the authenticated user
* [ActivityListNotificationsForAuthenticatedUser](docs/activity/README.md#activitylistnotificationsforauthenticateduser) - List notifications for the authenticated user
* [ActivityListOrgEventsForAuthenticatedUser](docs/activity/README.md#activitylistorgeventsforauthenticateduser) - List organization events for the authenticated user
* [ActivityListPublicEvents](docs/activity/README.md#activitylistpublicevents) - List public events
* [ActivityListPublicEventsForRepoNetwork](docs/activity/README.md#activitylistpubliceventsforreponetwork) - List public events for a network of repositories
* [ActivityListPublicEventsForUser](docs/activity/README.md#activitylistpubliceventsforuser) - List public events for a user
* [ActivityListPublicOrgEvents](docs/activity/README.md#activitylistpublicorgevents) - List public organization events
* [ActivityListReceivedEventsForUser](docs/activity/README.md#activitylistreceivedeventsforuser) - List events received by the authenticated user
* [ActivityListReceivedPublicEventsForUser](docs/activity/README.md#activitylistreceivedpubliceventsforuser) - List public events received by a user
* [ActivityListRepoEvents](docs/activity/README.md#activitylistrepoevents) - List repository events
* [ActivityListRepoNotificationsForAuthenticatedUser](docs/activity/README.md#activitylistreponotificationsforauthenticateduser) - List repository notifications for the authenticated user
* [ActivityListReposStarredByAuthenticatedUser](docs/activity/README.md#activitylistreposstarredbyauthenticateduser) - List repositories starred by the authenticated user
* [ActivityListReposStarredByUser](docs/activity/README.md#activitylistreposstarredbyuser) - List repositories starred by a user
* [ActivityListReposWatchedByUser](docs/activity/README.md#activitylistreposwatchedbyuser) - List repositories watched by a user
* [ActivityListStargazersForRepo](docs/activity/README.md#activityliststargazersforrepo) - List stargazers
* [ActivityListWatchedReposForAuthenticatedUser](docs/activity/README.md#activitylistwatchedreposforauthenticateduser) - List repositories watched by the authenticated user
* [ActivityListWatchersForRepo](docs/activity/README.md#activitylistwatchersforrepo) - List watchers
* [ActivityMarkNotificationsAsRead](docs/activity/README.md#activitymarknotificationsasread) - Mark notifications as read
* [ActivityMarkRepoNotificationsAsRead](docs/activity/README.md#activitymarkreponotificationsasread) - Mark repository notifications as read
* [ActivityMarkThreadAsRead](docs/activity/README.md#activitymarkthreadasread) - Mark a thread as read
* [ActivitySetRepoSubscription](docs/activity/README.md#activitysetreposubscription) - Set a repository subscription
* [ActivitySetThreadSubscription](docs/activity/README.md#activitysetthreadsubscription) - Set a thread subscription
* [ActivityStarRepoForAuthenticatedUser](docs/activity/README.md#activitystarrepoforauthenticateduser) - Star a repository for the authenticated user
* [ActivityUnstarRepoForAuthenticatedUser](docs/activity/README.md#activityunstarrepoforauthenticateduser) - Unstar a repository for the authenticated user

### [Apps](docs/apps/README.md)

* [AppsAddRepoToInstallation](docs/apps/README.md#appsaddrepotoinstallation) - Add a repository to an app installation
* [AppsCreateContentAttachment](docs/apps/README.md#appscreatecontentattachment) - Create a content attachment
* [AppsCreateFromManifest](docs/apps/README.md#appscreatefrommanifest) - Create a GitHub App from a manifest
* [AppsCreateInstallationAccessToken](docs/apps/README.md#appscreateinstallationaccesstoken) - Create an installation access token for an app
* [AppsDeleteInstallation](docs/apps/README.md#appsdeleteinstallation) - Delete an installation for the authenticated app
* [AppsGetAuthenticated](docs/apps/README.md#appsgetauthenticated) - Get the authenticated app
* [AppsGetBySlug](docs/apps/README.md#appsgetbyslug) - Get an app
* [AppsGetInstallation](docs/apps/README.md#appsgetinstallation) - Get an installation for the authenticated app
* [AppsGetOrgInstallation](docs/apps/README.md#appsgetorginstallation) - Get an organization installation for the authenticated app
* [AppsGetRepoInstallation](docs/apps/README.md#appsgetrepoinstallation) - Get a repository installation for the authenticated app
* [AppsGetUserInstallation](docs/apps/README.md#appsgetuserinstallation) - Get a user installation for the authenticated app
* [AppsListInstallationReposForAuthenticatedUser](docs/apps/README.md#appslistinstallationreposforauthenticateduser) - List repositories accessible to the user access token
* [AppsListInstallations](docs/apps/README.md#appslistinstallations) - List installations for the authenticated app
* [AppsListInstallationsForAuthenticatedUser](docs/apps/README.md#appslistinstallationsforauthenticateduser) - List app installations accessible to the user access token
* [AppsListReposAccessibleToInstallation](docs/apps/README.md#appslistreposaccessibletoinstallation) - List repositories accessible to the app installation
* [AppsRemoveRepoFromInstallation](docs/apps/README.md#appsremoverepofrominstallation) - Remove a repository from an app installation

### [Checks](docs/checks/README.md)

* [ChecksCreate](docs/checks/README.md#checkscreate) - Create a check run
* [ChecksCreateSuite](docs/checks/README.md#checkscreatesuite) - Create a check suite
* [ChecksGet](docs/checks/README.md#checksget) - Get a check run
* [ChecksGetSuite](docs/checks/README.md#checksgetsuite) - Get a check suite
* [ChecksListAnnotations](docs/checks/README.md#checkslistannotations) - List check run annotations
* [ChecksListForRef](docs/checks/README.md#checkslistforref) - List check runs for a Git reference
* [ChecksListForSuite](docs/checks/README.md#checkslistforsuite) - List check runs in a check suite
* [ChecksListSuitesForRef](docs/checks/README.md#checkslistsuitesforref) - List check suites for a Git reference
* [ChecksRerequestSuite](docs/checks/README.md#checksrerequestsuite) - Rerequest a check suite
* [ChecksSetSuitesPreferences](docs/checks/README.md#checkssetsuitespreferences) - Update repository preferences for check suites
* [ChecksUpdate](docs/checks/README.md#checksupdate) - Update a check run

### [CodesOfConduct](docs/codesofconduct/README.md)

* [CodesOfConductGetAllCodesOfConduct](docs/codesofconduct/README.md#codesofconductgetallcodesofconduct) - Get all codes of conduct
* [CodesOfConductGetConductCode](docs/codesofconduct/README.md#codesofconductgetconductcode) - Get a code of conduct

### [Emojis](docs/emojis/README.md)

* [EmojisGet](docs/emojis/README.md#emojisget) - Get emojis

### [EnterpriseAdmin](docs/enterpriseadmin/README.md)

* [EnterpriseAdminAddAuthorizedSSHKey](docs/enterpriseadmin/README.md#enterpriseadminaddauthorizedsshkey) - Add an authorized SSH key
* [EnterpriseAdminCreateEnterpriseServerLicense](docs/enterpriseadmin/README.md#enterpriseadmincreateenterpriseserverlicense) - Create a GitHub license
* [EnterpriseAdminCreateGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmincreateglobalwebhook) - Create a global webhook
* [EnterpriseAdminCreateImpersonationOAuthToken](docs/enterpriseadmin/README.md#enterpriseadmincreateimpersonationoauthtoken) - Create an impersonation OAuth token
* [EnterpriseAdminCreateOrg](docs/enterpriseadmin/README.md#enterpriseadmincreateorg) - Create an organization
* [EnterpriseAdminCreatePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmincreateprereceiveenvironment) - Create a pre-receive environment
* [EnterpriseAdminCreatePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmincreateprereceivehook) - Create a pre-receive hook
* [EnterpriseAdminCreateUser](docs/enterpriseadmin/README.md#enterpriseadmincreateuser) - Create a user
* [EnterpriseAdminDeleteGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmindeleteglobalwebhook) - Delete a global webhook
* [EnterpriseAdminDeleteImpersonationOAuthToken](docs/enterpriseadmin/README.md#enterpriseadmindeleteimpersonationoauthtoken) - Delete an impersonation OAuth token
* [EnterpriseAdminDeletePersonalAccessToken](docs/enterpriseadmin/README.md#enterpriseadmindeletepersonalaccesstoken) - Delete a personal access token
* [EnterpriseAdminDeletePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmindeleteprereceiveenvironment) - Delete a pre-receive environment
* [EnterpriseAdminDeletePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmindeleteprereceivehook) - Delete a pre-receive hook
* [EnterpriseAdminDeletePublicKey](docs/enterpriseadmin/README.md#enterpriseadmindeletepublickey) - Delete a public key
* [EnterpriseAdminDeleteUser](docs/enterpriseadmin/README.md#enterpriseadmindeleteuser) - Delete a user
* [EnterpriseAdminDemoteSiteAdministrator](docs/enterpriseadmin/README.md#enterpriseadmindemotesiteadministrator) - Demote a site administrator
* [EnterpriseAdminEnableOrDisableMaintenanceMode](docs/enterpriseadmin/README.md#enterpriseadminenableordisablemaintenancemode) - Enable or disable maintenance mode
* [EnterpriseAdminGetAllAuthorizedSSHKeys](docs/enterpriseadmin/README.md#enterpriseadmingetallauthorizedsshkeys) - Get all authorized SSH keys
* [EnterpriseAdminGetAllStats](docs/enterpriseadmin/README.md#enterpriseadmingetallstats) - Get all statistics
* [EnterpriseAdminGetCommentStats](docs/enterpriseadmin/README.md#enterpriseadmingetcommentstats) - Get comment statistics
* [EnterpriseAdminGetConfigurationStatus](docs/enterpriseadmin/README.md#enterpriseadmingetconfigurationstatus) - Get the configuration status
* [EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmingetdownloadstatusforprereceiveenvironment) - Get the download status for a pre-receive environment
* [EnterpriseAdminGetGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadmingetglobalwebhook) - Get a global webhook
* [EnterpriseAdminGetHooksStats](docs/enterpriseadmin/README.md#enterpriseadmingethooksstats) - Get hooks statistics
* [EnterpriseAdminGetIssueStats](docs/enterpriseadmin/README.md#enterpriseadmingetissuestats) - Get issue statistics
* [EnterpriseAdminGetLicenseInformation](docs/enterpriseadmin/README.md#enterpriseadmingetlicenseinformation) - Get license information
* [EnterpriseAdminGetMaintenanceStatus](docs/enterpriseadmin/README.md#enterpriseadmingetmaintenancestatus) - Get the maintenance status
* [EnterpriseAdminGetMilestoneStats](docs/enterpriseadmin/README.md#enterpriseadmingetmilestonestats) - Get milestone statistics
* [EnterpriseAdminGetOrgStats](docs/enterpriseadmin/README.md#enterpriseadmingetorgstats) - Get organization statistics
* [EnterpriseAdminGetPagesStats](docs/enterpriseadmin/README.md#enterpriseadmingetpagesstats) - Get pages statistics
* [EnterpriseAdminGetPreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadmingetprereceiveenvironment) - Get a pre-receive environment
* [EnterpriseAdminGetPreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehook) - Get a pre-receive hook
* [EnterpriseAdminGetPreReceiveHookForOrg](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehookfororg) - Get a pre-receive hook for an organization
* [EnterpriseAdminGetPreReceiveHookForRepo](docs/enterpriseadmin/README.md#enterpriseadmingetprereceivehookforrepo) - Get a pre-receive hook for a repository
* [EnterpriseAdminGetPullRequestStats](docs/enterpriseadmin/README.md#enterpriseadmingetpullrequeststats) - Get pull request statistics
* [EnterpriseAdminGetRepoStats](docs/enterpriseadmin/README.md#enterpriseadmingetrepostats) - Get repository statistics
* [EnterpriseAdminGetSettings](docs/enterpriseadmin/README.md#enterpriseadmingetsettings) - Get settings
* [EnterpriseAdminGetUserStats](docs/enterpriseadmin/README.md#enterpriseadmingetuserstats) - Get users statistics
* [EnterpriseAdminListGlobalWebhooks](docs/enterpriseadmin/README.md#enterpriseadminlistglobalwebhooks) - List global webhooks
* [EnterpriseAdminListPersonalAccessTokens](docs/enterpriseadmin/README.md#enterpriseadminlistpersonalaccesstokens) - List personal access tokens
* [EnterpriseAdminListPreReceiveEnvironments](docs/enterpriseadmin/README.md#enterpriseadminlistprereceiveenvironments) - List pre-receive environments
* [EnterpriseAdminListPreReceiveHooks](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooks) - List pre-receive hooks
* [EnterpriseAdminListPreReceiveHooksForOrg](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooksfororg) - List pre-receive hooks for an organization
* [EnterpriseAdminListPreReceiveHooksForRepo](docs/enterpriseadmin/README.md#enterpriseadminlistprereceivehooksforrepo) - List pre-receive hooks for a repository
* [EnterpriseAdminListPublicKeys](docs/enterpriseadmin/README.md#enterpriseadminlistpublickeys) - List public keys
* [EnterpriseAdminPingGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadminpingglobalwebhook) - Ping a global webhook
* [EnterpriseAdminPromoteUserToBeSiteAdministrator](docs/enterpriseadmin/README.md#enterpriseadminpromoteusertobesiteadministrator) - Promote a user to be a site administrator
* [EnterpriseAdminRemoveAuthorizedSSHKey](docs/enterpriseadmin/README.md#enterpriseadminremoveauthorizedsshkey) - Remove an authorized SSH key
* [EnterpriseAdminRemovePreReceiveHookEnforcementForOrg](docs/enterpriseadmin/README.md#enterpriseadminremoveprereceivehookenforcementfororg) - Remove pre-receive hook enforcement for an organization
* [EnterpriseAdminRemovePreReceiveHookEnforcementForRepo](docs/enterpriseadmin/README.md#enterpriseadminremoveprereceivehookenforcementforrepo) - Remove pre-receive hook enforcement for a repository
* [EnterpriseAdminSetSettings](docs/enterpriseadmin/README.md#enterpriseadminsetsettings) - Set settings
* [EnterpriseAdminStartConfigurationProcess](docs/enterpriseadmin/README.md#enterpriseadminstartconfigurationprocess) - Start a configuration process
* [EnterpriseAdminStartPreReceiveEnvironmentDownload](docs/enterpriseadmin/README.md#enterpriseadminstartprereceiveenvironmentdownload) - Start a pre-receive environment download
* [EnterpriseAdminSuspendUser](docs/enterpriseadmin/README.md#enterpriseadminsuspenduser) - Suspend a user
* [EnterpriseAdminSyncLdapMappingForTeam](docs/enterpriseadmin/README.md#enterpriseadminsyncldapmappingforteam) - Sync LDAP mapping for a team
* [EnterpriseAdminSyncLdapMappingForUser](docs/enterpriseadmin/README.md#enterpriseadminsyncldapmappingforuser) - Sync LDAP mapping for a user
* [EnterpriseAdminUnsuspendUser](docs/enterpriseadmin/README.md#enterpriseadminunsuspenduser) - Unsuspend a user
* [EnterpriseAdminUpdateGlobalWebhook](docs/enterpriseadmin/README.md#enterpriseadminupdateglobalwebhook) - Update a global webhook
* [EnterpriseAdminUpdateLdapMappingForTeam](docs/enterpriseadmin/README.md#enterpriseadminupdateldapmappingforteam) - Update LDAP mapping for a team
* [EnterpriseAdminUpdateLdapMappingForUser](docs/enterpriseadmin/README.md#enterpriseadminupdateldapmappingforuser) - Update LDAP mapping for a user
* [EnterpriseAdminUpdateOrgName](docs/enterpriseadmin/README.md#enterpriseadminupdateorgname) - Update an organization name
* [EnterpriseAdminUpdatePreReceiveEnvironment](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceiveenvironment) - Update a pre-receive environment
* [EnterpriseAdminUpdatePreReceiveHook](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehook) - Update a pre-receive hook
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehookenforcementfororg) - Update pre-receive hook enforcement for an organization
* [EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo](docs/enterpriseadmin/README.md#enterpriseadminupdateprereceivehookenforcementforrepo) - Update pre-receive hook enforcement for a repository
* [EnterpriseAdminUpdateUsernameForUser](docs/enterpriseadmin/README.md#enterpriseadminupdateusernameforuser) - Update the username for a user
* [EnterpriseAdminUpgradeLicense](docs/enterpriseadmin/README.md#enterpriseadminupgradelicense) - Upgrade a license
* [GetEnterpriseStatsGists](docs/enterpriseadmin/README.md#getenterprisestatsgists) - Get gist statistics

### [Gists](docs/gists/README.md)

* [GistsCheckIsStarred](docs/gists/README.md#gistscheckisstarred) - Check if a gist is starred
* [GistsCreate](docs/gists/README.md#gistscreate) - Create a gist
* [GistsCreateComment](docs/gists/README.md#gistscreatecomment) - Create a gist comment
* [GistsDelete](docs/gists/README.md#gistsdelete) - Delete a gist
* [GistsDeleteComment](docs/gists/README.md#gistsdeletecomment) - Delete a gist comment
* [GistsFork](docs/gists/README.md#gistsfork) - Fork a gist
* [GistsGet](docs/gists/README.md#gistsget) - Get a gist
* [GistsGetComment](docs/gists/README.md#gistsgetcomment) - Get a gist comment
* [GistsGetRevision](docs/gists/README.md#gistsgetrevision) - Get a gist revision
* [GistsList](docs/gists/README.md#gistslist) - List gists for the authenticated user
* [GistsListComments](docs/gists/README.md#gistslistcomments) - List gist comments
* [GistsListCommits](docs/gists/README.md#gistslistcommits) - List gist commits
* [GistsListForUser](docs/gists/README.md#gistslistforuser) - List gists for a user
* [GistsListForks](docs/gists/README.md#gistslistforks) - List gist forks
* [GistsListPublic](docs/gists/README.md#gistslistpublic) - List public gists
* [GistsListStarred](docs/gists/README.md#gistsliststarred) - List starred gists
* [GistsStar](docs/gists/README.md#gistsstar) - Star a gist
* [GistsUnstar](docs/gists/README.md#gistsunstar) - Unstar a gist
* [GistsUpdate](docs/gists/README.md#gistsupdate) - Update a gist
* [GistsUpdateComment](docs/gists/README.md#gistsupdatecomment) - Update a gist comment

### [Git](docs/git/README.md)

* [GitCreateBlob](docs/git/README.md#gitcreateblob) - Create a blob
* [GitCreateCommit](docs/git/README.md#gitcreatecommit) - Create a commit
* [GitCreateRef](docs/git/README.md#gitcreateref) - Create a reference
* [GitCreateTag](docs/git/README.md#gitcreatetag) - Create a tag object
* [GitCreateTree](docs/git/README.md#gitcreatetree) - Create a tree
* [GitDeleteRef](docs/git/README.md#gitdeleteref) - Delete a reference
* [GitGetBlob](docs/git/README.md#gitgetblob) - Get a blob
* [GitGetCommit](docs/git/README.md#gitgetcommit) - Get a commit
* [GitGetRef](docs/git/README.md#gitgetref) - Get a reference
* [GitGetTag](docs/git/README.md#gitgettag) - Get a tag
* [GitGetTree](docs/git/README.md#gitgettree) - Get a tree
* [GitListMatchingRefs](docs/git/README.md#gitlistmatchingrefs) - List matching references
* [GitUpdateRef](docs/git/README.md#gitupdateref) - Update a reference

### [Gitignore](docs/gitignore/README.md)

* [GitignoreGetAllTemplates](docs/gitignore/README.md#gitignoregetalltemplates) - Get all gitignore templates
* [GitignoreGetTemplate](docs/gitignore/README.md#gitignoregettemplate) - Get a gitignore template

### [Issues](docs/issues/README.md)

* [IssuesAddAssignees](docs/issues/README.md#issuesaddassignees) - Add assignees to an issue
* [IssuesAddLabels](docs/issues/README.md#issuesaddlabels) - Add labels to an issue
* [IssuesCheckUserCanBeAssigned](docs/issues/README.md#issuescheckusercanbeassigned) - Check if a user can be assigned
* [IssuesCreate](docs/issues/README.md#issuescreate) - Create an issue
* [IssuesCreateComment](docs/issues/README.md#issuescreatecomment) - Create an issue comment
* [IssuesCreateLabel](docs/issues/README.md#issuescreatelabel) - Create a label
* [IssuesCreateMilestone](docs/issues/README.md#issuescreatemilestone) - Create a milestone
* [IssuesDeleteComment](docs/issues/README.md#issuesdeletecomment) - Delete an issue comment
* [IssuesDeleteLabel](docs/issues/README.md#issuesdeletelabel) - Delete a label
* [IssuesDeleteMilestone](docs/issues/README.md#issuesdeletemilestone) - Delete a milestone
* [IssuesGet](docs/issues/README.md#issuesget) - Get an issue
* [IssuesGetComment](docs/issues/README.md#issuesgetcomment) - Get an issue comment
* [IssuesGetEvent](docs/issues/README.md#issuesgetevent) - Get an issue event
* [IssuesGetLabel](docs/issues/README.md#issuesgetlabel) - Get a label
* [IssuesGetMilestone](docs/issues/README.md#issuesgetmilestone) - Get a milestone
* [IssuesList](docs/issues/README.md#issueslist) - List issues assigned to the authenticated user
* [IssuesListAssignees](docs/issues/README.md#issueslistassignees) - List assignees
* [IssuesListComments](docs/issues/README.md#issueslistcomments) - List issue comments
* [IssuesListCommentsForRepo](docs/issues/README.md#issueslistcommentsforrepo) - List issue comments for a repository
* [IssuesListEvents](docs/issues/README.md#issueslistevents) - List issue events
* [IssuesListEventsForRepo](docs/issues/README.md#issueslisteventsforrepo) - List issue events for a repository
* [IssuesListEventsForTimeline](docs/issues/README.md#issueslisteventsfortimeline) - List timeline events for an issue
* [IssuesListForAuthenticatedUser](docs/issues/README.md#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [IssuesListForOrg](docs/issues/README.md#issueslistfororg) - List organization issues assigned to the authenticated user
* [IssuesListForRepo](docs/issues/README.md#issueslistforrepo) - List repository issues
* [IssuesListLabelsForMilestone](docs/issues/README.md#issueslistlabelsformilestone) - List labels for issues in a milestone
* [IssuesListLabelsForRepo](docs/issues/README.md#issueslistlabelsforrepo) - List labels for a repository
* [IssuesListLabelsOnIssue](docs/issues/README.md#issueslistlabelsonissue) - List labels for an issue
* [IssuesListMilestones](docs/issues/README.md#issueslistmilestones) - List milestones
* [IssuesLock](docs/issues/README.md#issueslock) - Lock an issue
* [IssuesRemoveAllLabels](docs/issues/README.md#issuesremovealllabels) - Remove all labels from an issue
* [IssuesRemoveAssignees](docs/issues/README.md#issuesremoveassignees) - Remove assignees from an issue
* [IssuesRemoveLabel](docs/issues/README.md#issuesremovelabel) - Remove a label from an issue
* [IssuesSetLabels](docs/issues/README.md#issuessetlabels) - Set labels for an issue
* [IssuesUnlock](docs/issues/README.md#issuesunlock) - Unlock an issue
* [IssuesUpdate](docs/issues/README.md#issuesupdate) - Update an issue
* [IssuesUpdateComment](docs/issues/README.md#issuesupdatecomment) - Update an issue comment
* [IssuesUpdateLabel](docs/issues/README.md#issuesupdatelabel) - Update a label
* [IssuesUpdateMilestone](docs/issues/README.md#issuesupdatemilestone) - Update a milestone

### [Licenses](docs/licenses/README.md)

* [LicensesGet](docs/licenses/README.md#licensesget) - Get a license
* [LicensesGetAllCommonlyUsed](docs/licenses/README.md#licensesgetallcommonlyused) - Get all commonly used licenses
* [LicensesGetForRepo](docs/licenses/README.md#licensesgetforrepo) - Get the license for a repository

### [Markdown](docs/markdown/README.md)

* [MarkdownRender](docs/markdown/README.md#markdownrender) - Render a Markdown document
* [MarkdownRenderRaw](docs/markdown/README.md#markdownrenderraw) - Render a Markdown document in raw mode

### [Meta](docs/meta/README.md)

* [MetaGet](docs/meta/README.md#metaget) - Get GitHub Enterprise Server meta information
* [MetaGetOctocat](docs/meta/README.md#metagetoctocat) - Get Octocat
* [MetaGetZen](docs/meta/README.md#metagetzen) - Get the Zen of GitHub
* [MetaRoot](docs/meta/README.md#metaroot) - GitHub API Root

### [OauthAuthorizations](docs/oauthauthorizations/README.md)

* [OauthAuthorizationsCheckAuthorization](docs/oauthauthorizations/README.md#oauthauthorizationscheckauthorization) - Check an authorization
* [~~OauthAuthorizationsCreateAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationscreateauthorization) - Create a new authorization :warning: **Deprecated**
* [~~OauthAuthorizationsDeleteAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsdeleteauthorization) - Delete an authorization :warning: **Deprecated**
* [~~OauthAuthorizationsDeleteGrant~~](docs/oauthauthorizations/README.md#oauthauthorizationsdeletegrant) - Delete a grant :warning: **Deprecated**
* [~~OauthAuthorizationsGetAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetauthorization) - Get a single authorization :warning: **Deprecated**
* [~~OauthAuthorizationsGetGrant~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetgrant) - Get a single grant :warning: **Deprecated**
* [~~OauthAuthorizationsGetOrCreateAuthorizationForApp~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetorcreateauthorizationforapp) - Get-or-create an authorization for a specific app :warning: **Deprecated**
* [~~OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~](docs/oauthauthorizations/README.md#oauthauthorizationsgetorcreateauthorizationforappandfingerprint) - Get-or-create an authorization for a specific app and fingerprint :warning: **Deprecated**
* [~~OauthAuthorizationsListAuthorizations~~](docs/oauthauthorizations/README.md#oauthauthorizationslistauthorizations) - List your authorizations :warning: **Deprecated**
* [~~OauthAuthorizationsListGrants~~](docs/oauthauthorizations/README.md#oauthauthorizationslistgrants) - List your grants :warning: **Deprecated**
* [OauthAuthorizationsResetAuthorization](docs/oauthauthorizations/README.md#oauthauthorizationsresetauthorization) - Reset an authorization
* [OauthAuthorizationsRevokeAuthorizationForApplication](docs/oauthauthorizations/README.md#oauthauthorizationsrevokeauthorizationforapplication) - Revoke an authorization for an application
* [OauthAuthorizationsRevokeGrantForApplication](docs/oauthauthorizations/README.md#oauthauthorizationsrevokegrantforapplication) - Revoke a grant for an application
* [~~OauthAuthorizationsUpdateAuthorization~~](docs/oauthauthorizations/README.md#oauthauthorizationsupdateauthorization) - Update an existing authorization :warning: **Deprecated**

### [Orgs](docs/orgs/README.md)

* [OrgsCheckMembershipForUser](docs/orgs/README.md#orgscheckmembershipforuser) - Check organization membership for a user
* [OrgsCheckPublicMembershipForUser](docs/orgs/README.md#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [OrgsConvertMemberToOutsideCollaborator](docs/orgs/README.md#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [OrgsCreateWebhook](docs/orgs/README.md#orgscreatewebhook) - Create an organization webhook
* [OrgsDeleteWebhook](docs/orgs/README.md#orgsdeletewebhook) - Delete an organization webhook
* [OrgsGet](docs/orgs/README.md#orgsget) - Get an organization
* [OrgsGetMembershipForAuthenticatedUser](docs/orgs/README.md#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [OrgsGetMembershipForUser](docs/orgs/README.md#orgsgetmembershipforuser) - Get organization membership for a user
* [OrgsGetWebhook](docs/orgs/README.md#orgsgetwebhook) - Get an organization webhook
* [OrgsList](docs/orgs/README.md#orgslist) - List organizations
* [OrgsListAppInstallations](docs/orgs/README.md#orgslistappinstallations) - List app installations for an organization
* [OrgsListForAuthenticatedUser](docs/orgs/README.md#orgslistforauthenticateduser) - List organizations for the authenticated user
* [OrgsListForUser](docs/orgs/README.md#orgslistforuser) - List organizations for a user
* [OrgsListMembers](docs/orgs/README.md#orgslistmembers) - List organization members
* [OrgsListMembershipsForAuthenticatedUser](docs/orgs/README.md#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [OrgsListOutsideCollaborators](docs/orgs/README.md#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [OrgsListPublicMembers](docs/orgs/README.md#orgslistpublicmembers) - List public organization members
* [OrgsListWebhooks](docs/orgs/README.md#orgslistwebhooks) - List organization webhooks
* [OrgsPingWebhook](docs/orgs/README.md#orgspingwebhook) - Ping an organization webhook
* [OrgsRemoveMember](docs/orgs/README.md#orgsremovemember) - Remove an organization member
* [OrgsRemoveMembershipForUser](docs/orgs/README.md#orgsremovemembershipforuser) - Remove organization membership for a user
* [OrgsRemoveOutsideCollaborator](docs/orgs/README.md#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [OrgsRemovePublicMembershipForAuthenticatedUser](docs/orgs/README.md#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [OrgsSetMembershipForUser](docs/orgs/README.md#orgssetmembershipforuser) - Set organization membership for a user
* [OrgsSetPublicMembershipForAuthenticatedUser](docs/orgs/README.md#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [OrgsUpdate](docs/orgs/README.md#orgsupdate) - Update an organization
* [OrgsUpdateMembershipForAuthenticatedUser](docs/orgs/README.md#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [OrgsUpdateWebhook](docs/orgs/README.md#orgsupdatewebhook) - Update an organization webhook

### [Projects](docs/projects/README.md)

* [ProjectsAddCollaborator](docs/projects/README.md#projectsaddcollaborator) - Add project collaborator
* [ProjectsCreateCard](docs/projects/README.md#projectscreatecard) - Create a project card
* [ProjectsCreateColumn](docs/projects/README.md#projectscreatecolumn) - Create a project column
* [ProjectsCreateForAuthenticatedUser](docs/projects/README.md#projectscreateforauthenticateduser) - Create a user project
* [ProjectsCreateForOrg](docs/projects/README.md#projectscreatefororg) - Create an organization project
* [ProjectsCreateForRepo](docs/projects/README.md#projectscreateforrepo) - Create a repository project
* [ProjectsDelete](docs/projects/README.md#projectsdelete) - Delete a project
* [ProjectsDeleteCard](docs/projects/README.md#projectsdeletecard) - Delete a project card
* [ProjectsDeleteColumn](docs/projects/README.md#projectsdeletecolumn) - Delete a project column
* [ProjectsGet](docs/projects/README.md#projectsget) - Get a project
* [ProjectsGetCard](docs/projects/README.md#projectsgetcard) - Get a project card
* [ProjectsGetColumn](docs/projects/README.md#projectsgetcolumn) - Get a project column
* [ProjectsGetPermissionForUser](docs/projects/README.md#projectsgetpermissionforuser) - Get project permission for a user
* [ProjectsListCards](docs/projects/README.md#projectslistcards) - List project cards
* [ProjectsListCollaborators](docs/projects/README.md#projectslistcollaborators) - List project collaborators
* [ProjectsListColumns](docs/projects/README.md#projectslistcolumns) - List project columns
* [ProjectsListForOrg](docs/projects/README.md#projectslistfororg) - List organization projects
* [ProjectsListForRepo](docs/projects/README.md#projectslistforrepo) - List repository projects
* [ProjectsListForUser](docs/projects/README.md#projectslistforuser) - List user projects
* [ProjectsMoveCard](docs/projects/README.md#projectsmovecard) - Move a project card
* [ProjectsMoveColumn](docs/projects/README.md#projectsmovecolumn) - Move a project column
* [ProjectsRemoveCollaborator](docs/projects/README.md#projectsremovecollaborator) - Remove user as a collaborator
* [ProjectsUpdate](docs/projects/README.md#projectsupdate) - Update a project
* [ProjectsUpdateCard](docs/projects/README.md#projectsupdatecard) - Update an existing project card
* [ProjectsUpdateColumn](docs/projects/README.md#projectsupdatecolumn) - Update an existing project column

### [Pulls](docs/pulls/README.md)

* [PullsCheckIfMerged](docs/pulls/README.md#pullscheckifmerged) - Check if a pull request has been merged
* [PullsCreate](docs/pulls/README.md#pullscreate) - Create a pull request
* [PullsCreateReplyForReviewComment](docs/pulls/README.md#pullscreatereplyforreviewcomment) - Create a reply for a review comment
* [PullsCreateReview](docs/pulls/README.md#pullscreatereview) - Create a review for a pull request
* [PullsCreateReviewCommentAlternative](docs/pulls/README.md#pullscreatereviewcommentalternative) - Create a review comment for a pull request (alternative)
* [PullsDeletePendingReview](docs/pulls/README.md#pullsdeletependingreview) - Delete a pending review for a pull request
* [PullsDeleteReviewComment](docs/pulls/README.md#pullsdeletereviewcomment) - Delete a review comment for a pull request
* [PullsDismissReview](docs/pulls/README.md#pullsdismissreview) - Dismiss a review for a pull request
* [PullsGet](docs/pulls/README.md#pullsget) - Get a pull request
* [PullsGetReview](docs/pulls/README.md#pullsgetreview) - Get a review for a pull request
* [PullsGetReviewComment](docs/pulls/README.md#pullsgetreviewcomment) - Get a review comment for a pull request
* [PullsList](docs/pulls/README.md#pullslist) - List pull requests
* [PullsListCommentsForReview](docs/pulls/README.md#pullslistcommentsforreview) - List comments for a pull request review
* [PullsListCommits](docs/pulls/README.md#pullslistcommits) - List commits on a pull request
* [PullsListFiles](docs/pulls/README.md#pullslistfiles) - List pull requests files
* [PullsListRequestedReviewers](docs/pulls/README.md#pullslistrequestedreviewers) - List requested reviewers for a pull request
* [PullsListReviewComments](docs/pulls/README.md#pullslistreviewcomments) - List review comments on a pull request
* [PullsListReviewCommentsForRepo](docs/pulls/README.md#pullslistreviewcommentsforrepo) - List review comments in a repository
* [PullsListReviews](docs/pulls/README.md#pullslistreviews) - List reviews for a pull request
* [PullsMerge](docs/pulls/README.md#pullsmerge) - Merge a pull request
* [PullsRemoveRequestedReviewers](docs/pulls/README.md#pullsremoverequestedreviewers) - Remove requested reviewers from a pull request
* [PullsRequestReviewers](docs/pulls/README.md#pullsrequestreviewers) - Request reviewers for a pull request
* [PullsSubmitReview](docs/pulls/README.md#pullssubmitreview) - Submit a review for a pull request
* [PullsUpdate](docs/pulls/README.md#pullsupdate) - Update a pull request
* [PullsUpdateBranch](docs/pulls/README.md#pullsupdatebranch) - Update a pull request branch
* [PullsUpdateReview](docs/pulls/README.md#pullsupdatereview) - Update a review for a pull request
* [PullsUpdateReviewComment](docs/pulls/README.md#pullsupdatereviewcomment) - Update a review comment for a pull request

### [RateLimit](docs/ratelimit/README.md)

* [RateLimitGet](docs/ratelimit/README.md#ratelimitget) - Get rate limit status for the authenticated user

### [Reactions](docs/reactions/README.md)

* [ReactionsCreateForCommitComment](docs/reactions/README.md#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [ReactionsCreateForIssue](docs/reactions/README.md#reactionscreateforissue) - Create reaction for an issue
* [ReactionsCreateForIssueComment](docs/reactions/README.md#reactionscreateforissuecomment) - Create reaction for an issue comment
* [ReactionsCreateForPullRequestReviewComment](docs/reactions/README.md#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [ReactionsCreateForTeamDiscussion](docs/reactions/README.md#reactionscreateforteamdiscussion) - Create reaction for a team discussion
* [ReactionsCreateForTeamDiscussionComment](docs/reactions/README.md#reactionscreateforteamdiscussioncomment) - Create reaction for a team discussion comment
* [ReactionsDelete](docs/reactions/README.md#reactionsdelete) - Delete a reaction
* [ReactionsListForCommitComment](docs/reactions/README.md#reactionslistforcommitcomment) - List reactions for a commit comment
* [ReactionsListForIssue](docs/reactions/README.md#reactionslistforissue) - List reactions for an issue
* [ReactionsListForIssueComment](docs/reactions/README.md#reactionslistforissuecomment) - List reactions for an issue comment
* [ReactionsListForPullRequestReviewComment](docs/reactions/README.md#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [ReactionsListForTeamDiscussion](docs/reactions/README.md#reactionslistforteamdiscussion) - List reactions for a team discussion
* [ReactionsListForTeamDiscussionComment](docs/reactions/README.md#reactionslistforteamdiscussioncomment) - List reactions for a team discussion comment

### [Repos](docs/repos/README.md)

* [ReposAcceptInvitation](docs/repos/README.md#reposacceptinvitation) - Accept a repository invitation
* [ReposAddAppAccessRestrictions](docs/repos/README.md#reposaddappaccessrestrictions) - Add app access restrictions
* [ReposAddCollaborator](docs/repos/README.md#reposaddcollaborator) - Add a repository collaborator
* [ReposAddStatusCheckContexts](docs/repos/README.md#reposaddstatuscheckcontexts) - Add status check contexts
* [ReposAddTeamAccessRestrictions](docs/repos/README.md#reposaddteamaccessrestrictions) - Add team access restrictions
* [ReposAddUserAccessRestrictions](docs/repos/README.md#reposadduseraccessrestrictions) - Add user access restrictions
* [ReposCheckCollaborator](docs/repos/README.md#reposcheckcollaborator) - Check if a user is a repository collaborator
* [ReposCompareCommits](docs/repos/README.md#reposcomparecommits) - Compare two commits
* [ReposCreateCommitComment](docs/repos/README.md#reposcreatecommitcomment) - Create a commit comment
* [ReposCreateCommitSignatureProtection](docs/repos/README.md#reposcreatecommitsignatureprotection) - Create commit signature protection
* [ReposCreateCommitStatus](docs/repos/README.md#reposcreatecommitstatus) - Create a commit status
* [ReposCreateDeployKey](docs/repos/README.md#reposcreatedeploykey) - Create a deploy key
* [ReposCreateDeployment](docs/repos/README.md#reposcreatedeployment) - Create a deployment
* [ReposCreateDeploymentStatus](docs/repos/README.md#reposcreatedeploymentstatus) - Create a deployment status
* [ReposCreateForAuthenticatedUser](docs/repos/README.md#reposcreateforauthenticateduser) - Create a repository for the authenticated user
* [ReposCreateFork](docs/repos/README.md#reposcreatefork) - Create a fork
* [ReposCreateInOrg](docs/repos/README.md#reposcreateinorg) - Create an organization repository
* [ReposCreateOrUpdateFileContents](docs/repos/README.md#reposcreateorupdatefilecontents) - Create or update file contents
* [ReposCreatePagesSite](docs/repos/README.md#reposcreatepagessite) - Create a GitHub Pages site
* [ReposCreateRelease](docs/repos/README.md#reposcreaterelease) - Create a release
* [ReposCreateUsingTemplate](docs/repos/README.md#reposcreateusingtemplate) - Create a repository using a template
* [ReposCreateWebhook](docs/repos/README.md#reposcreatewebhook) - Create a repository webhook
* [ReposDeclineInvitation](docs/repos/README.md#reposdeclineinvitation) - Decline a repository invitation
* [ReposDelete](docs/repos/README.md#reposdelete) - Delete a repository
* [ReposDeleteAccessRestrictions](docs/repos/README.md#reposdeleteaccessrestrictions) - Delete access restrictions
* [ReposDeleteAdminBranchProtection](docs/repos/README.md#reposdeleteadminbranchprotection) - Delete admin branch protection
* [ReposDeleteBranchProtection](docs/repos/README.md#reposdeletebranchprotection) - Delete branch protection
* [ReposDeleteCommitComment](docs/repos/README.md#reposdeletecommitcomment) - Delete a commit comment
* [ReposDeleteCommitSignatureProtection](docs/repos/README.md#reposdeletecommitsignatureprotection) - Delete commit signature protection
* [ReposDeleteDeployKey](docs/repos/README.md#reposdeletedeploykey) - Delete a deploy key
* [ReposDeleteFile](docs/repos/README.md#reposdeletefile) - Delete a file
* [ReposDeleteInvitation](docs/repos/README.md#reposdeleteinvitation) - Delete a repository invitation
* [ReposDeletePagesSite](docs/repos/README.md#reposdeletepagessite) - Delete a GitHub Enterprise Server Pages site
* [ReposDeletePullRequestReviewProtection](docs/repos/README.md#reposdeletepullrequestreviewprotection) - Delete pull request review protection
* [ReposDeleteRelease](docs/repos/README.md#reposdeleterelease) - Delete a release
* [ReposDeleteReleaseAsset](docs/repos/README.md#reposdeletereleaseasset) - Delete a release asset
* [ReposDeleteWebhook](docs/repos/README.md#reposdeletewebhook) - Delete a repository webhook
* [ReposDownloadTarballArchive](docs/repos/README.md#reposdownloadtarballarchive) - Download a repository archive (tar)
* [ReposDownloadZipballArchive](docs/repos/README.md#reposdownloadzipballarchive) - Download a repository archive (zip)
* [ReposGet](docs/repos/README.md#reposget) - Get a repository
* [ReposGetAccessRestrictions](docs/repos/README.md#reposgetaccessrestrictions) - Get access restrictions
* [ReposGetAdminBranchProtection](docs/repos/README.md#reposgetadminbranchprotection) - Get admin branch protection
* [ReposGetAllStatusCheckContexts](docs/repos/README.md#reposgetallstatuscheckcontexts) - Get all status check contexts
* [ReposGetAllTopics](docs/repos/README.md#reposgetalltopics) - Get all repository topics
* [ReposGetAppsWithAccessToProtectedBranch](docs/repos/README.md#reposgetappswithaccesstoprotectedbranch) - Get apps with access to the protected branch
* [ReposGetBranch](docs/repos/README.md#reposgetbranch) - Get a branch
* [ReposGetBranchProtection](docs/repos/README.md#reposgetbranchprotection) - Get branch protection
* [ReposGetCodeFrequencyStats](docs/repos/README.md#reposgetcodefrequencystats) - Get the weekly commit activity
* [ReposGetCollaboratorPermissionLevel](docs/repos/README.md#reposgetcollaboratorpermissionlevel) - Get repository permissions for a user
* [ReposGetCombinedStatusForRef](docs/repos/README.md#reposgetcombinedstatusforref) - Get the combined status for a specific reference
* [ReposGetCommit](docs/repos/README.md#reposgetcommit) - Get a commit
* [ReposGetCommitActivityStats](docs/repos/README.md#reposgetcommitactivitystats) - Get the last year of commit activity
* [ReposGetCommitComment](docs/repos/README.md#reposgetcommitcomment) - Get a commit comment
* [ReposGetCommitSignatureProtection](docs/repos/README.md#reposgetcommitsignatureprotection) - Get commit signature protection
* [ReposGetContent](docs/repos/README.md#reposgetcontent) - Get repository content
* [ReposGetContributorsStats](docs/repos/README.md#reposgetcontributorsstats) - Get all contributor commit activity
* [ReposGetDeployKey](docs/repos/README.md#reposgetdeploykey) - Get a deploy key
* [ReposGetDeployment](docs/repos/README.md#reposgetdeployment) - Get a deployment
* [ReposGetDeploymentStatus](docs/repos/README.md#reposgetdeploymentstatus) - Get a deployment status
* [ReposGetLatestPagesBuild](docs/repos/README.md#reposgetlatestpagesbuild) - Get latest Pages build
* [ReposGetLatestRelease](docs/repos/README.md#reposgetlatestrelease) - Get the latest release
* [ReposGetPages](docs/repos/README.md#reposgetpages) - Get a GitHub Enterprise Server Pages site
* [ReposGetPagesBuild](docs/repos/README.md#reposgetpagesbuild) - Get GitHub Enterprise Server Pages build
* [ReposGetParticipationStats](docs/repos/README.md#reposgetparticipationstats) - Get the weekly commit count
* [ReposGetPullRequestReviewProtection](docs/repos/README.md#reposgetpullrequestreviewprotection) - Get pull request review protection
* [ReposGetPunchCardStats](docs/repos/README.md#reposgetpunchcardstats) - Get the hourly commit count for each day
* [ReposGetReadme](docs/repos/README.md#reposgetreadme) - Get a repository README
* [ReposGetReadmeInDirectory](docs/repos/README.md#reposgetreadmeindirectory) - Get a repository README for a directory
* [ReposGetRelease](docs/repos/README.md#reposgetrelease) - Get a release
* [ReposGetReleaseAsset](docs/repos/README.md#reposgetreleaseasset) - Get a release asset
* [ReposGetReleaseByTag](docs/repos/README.md#reposgetreleasebytag) - Get a release by tag name
* [ReposGetStatusChecksProtection](docs/repos/README.md#reposgetstatuschecksprotection) - Get status checks protection
* [ReposGetTeamsWithAccessToProtectedBranch](docs/repos/README.md#reposgetteamswithaccesstoprotectedbranch) - Get teams with access to the protected branch
* [ReposGetUsersWithAccessToProtectedBranch](docs/repos/README.md#reposgetuserswithaccesstoprotectedbranch) - Get users with access to the protected branch
* [ReposGetWebhook](docs/repos/README.md#reposgetwebhook) - Get a repository webhook
* [ReposListBranches](docs/repos/README.md#reposlistbranches) - List branches
* [ReposListBranchesForHeadCommit](docs/repos/README.md#reposlistbranchesforheadcommit) - List branches for HEAD commit
* [ReposListCollaborators](docs/repos/README.md#reposlistcollaborators) - List repository collaborators
* [ReposListCommentsForCommit](docs/repos/README.md#reposlistcommentsforcommit) - List commit comments
* [ReposListCommitCommentsForRepo](docs/repos/README.md#reposlistcommitcommentsforrepo) - List commit comments for a repository
* [ReposListCommitStatusesForRef](docs/repos/README.md#reposlistcommitstatusesforref) - List commit statuses for a reference
* [ReposListCommits](docs/repos/README.md#reposlistcommits) - List commits
* [ReposListContributors](docs/repos/README.md#reposlistcontributors) - List repository contributors
* [ReposListDeployKeys](docs/repos/README.md#reposlistdeploykeys) - List deploy keys
* [ReposListDeploymentStatuses](docs/repos/README.md#reposlistdeploymentstatuses) - List deployment statuses
* [ReposListDeployments](docs/repos/README.md#reposlistdeployments) - List deployments
* [ReposListForAuthenticatedUser](docs/repos/README.md#reposlistforauthenticateduser) - List repositories for the authenticated user
* [ReposListForOrg](docs/repos/README.md#reposlistfororg) - List organization repositories
* [ReposListForUser](docs/repos/README.md#reposlistforuser) - List repositories for a user
* [ReposListForks](docs/repos/README.md#reposlistforks) - List forks
* [ReposListInvitations](docs/repos/README.md#reposlistinvitations) - List repository invitations
* [ReposListInvitationsForAuthenticatedUser](docs/repos/README.md#reposlistinvitationsforauthenticateduser) - List repository invitations for the authenticated user
* [ReposListLanguages](docs/repos/README.md#reposlistlanguages) - List repository languages
* [ReposListPagesBuilds](docs/repos/README.md#reposlistpagesbuilds) - List GitHub Enterprise Server Pages builds
* [ReposListPublic](docs/repos/README.md#reposlistpublic) - List public repositories
* [ReposListPullRequestsAssociatedWithCommit](docs/repos/README.md#reposlistpullrequestsassociatedwithcommit) - List pull requests associated with a commit
* [ReposListReleaseAssets](docs/repos/README.md#reposlistreleaseassets) - List release assets
* [ReposListReleases](docs/repos/README.md#reposlistreleases) - List releases
* [ReposListTags](docs/repos/README.md#reposlisttags) - List repository tags
* [ReposListTeams](docs/repos/README.md#reposlistteams) - List repository teams
* [ReposListWebhooks](docs/repos/README.md#reposlistwebhooks) - List repository webhooks
* [ReposMerge](docs/repos/README.md#reposmerge) - Merge a branch
* [ReposPingWebhook](docs/repos/README.md#repospingwebhook) - Ping a repository webhook
* [ReposRemoveAppAccessRestrictions](docs/repos/README.md#reposremoveappaccessrestrictions) - Remove app access restrictions
* [ReposRemoveCollaborator](docs/repos/README.md#reposremovecollaborator) - Remove a repository collaborator
* [ReposRemoveStatusCheckContexts](docs/repos/README.md#reposremovestatuscheckcontexts) - Remove status check contexts
* [ReposRemoveStatusCheckProtection](docs/repos/README.md#reposremovestatuscheckprotection) - Remove status check protection
* [ReposRemoveTeamAccessRestrictions](docs/repos/README.md#reposremoveteamaccessrestrictions) - Remove team access restrictions
* [ReposRemoveUserAccessRestrictions](docs/repos/README.md#reposremoveuseraccessrestrictions) - Remove user access restrictions
* [ReposReplaceAllTopics](docs/repos/README.md#reposreplacealltopics) - Replace all repository topics
* [ReposRequestPagesBuild](docs/repos/README.md#reposrequestpagesbuild) - Request a GitHub Enterprise Server Pages build
* [ReposSetAdminBranchProtection](docs/repos/README.md#repossetadminbranchprotection) - Set admin branch protection
* [ReposSetAppAccessRestrictions](docs/repos/README.md#repossetappaccessrestrictions) - Set app access restrictions
* [ReposSetStatusCheckContexts](docs/repos/README.md#repossetstatuscheckcontexts) - Set status check contexts
* [ReposSetTeamAccessRestrictions](docs/repos/README.md#repossetteamaccessrestrictions) - Set team access restrictions
* [ReposSetUserAccessRestrictions](docs/repos/README.md#repossetuseraccessrestrictions) - Set user access restrictions
* [ReposTestPushWebhook](docs/repos/README.md#repostestpushwebhook) - Test the push repository webhook
* [ReposTransfer](docs/repos/README.md#repostransfer) - Transfer a repository
* [ReposUpdate](docs/repos/README.md#reposupdate) - Update a repository
* [ReposUpdateBranchProtection](docs/repos/README.md#reposupdatebranchprotection) - Update branch protection
* [ReposUpdateCommitComment](docs/repos/README.md#reposupdatecommitcomment) - Update a commit comment
* [ReposUpdateInformationAboutPagesSite](docs/repos/README.md#reposupdateinformationaboutpagessite) - Update information about a GitHub Pages site
* [ReposUpdateInvitation](docs/repos/README.md#reposupdateinvitation) - Update a repository invitation
* [ReposUpdatePullRequestReviewProtection](docs/repos/README.md#reposupdatepullrequestreviewprotection) - Update pull request review protection
* [ReposUpdateRelease](docs/repos/README.md#reposupdaterelease) - Update a release
* [ReposUpdateReleaseAsset](docs/repos/README.md#reposupdatereleaseasset) - Update a release asset
* [ReposUpdateStatusCheckProtection](docs/repos/README.md#reposupdatestatuscheckprotection) - Update status check protection
* [ReposUpdateWebhook](docs/repos/README.md#reposupdatewebhook) - Update a repository webhook
* [ReposUploadReleaseAsset](docs/repos/README.md#reposuploadreleaseasset) - Upload a release asset

### [Search](docs/search/README.md)

* [SearchCode](docs/search/README.md#searchcode) - Search code
* [SearchCommits](docs/search/README.md#searchcommits) - Search commits
* [SearchIssuesAndPullRequests](docs/search/README.md#searchissuesandpullrequests) - Search issues and pull requests
* [SearchLabels](docs/search/README.md#searchlabels) - Search labels
* [SearchRepos](docs/search/README.md#searchrepos) - Search repositories
* [SearchTopics](docs/search/README.md#searchtopics) - Search topics
* [SearchUsers](docs/search/README.md#searchusers) - Search users

### [Teams](docs/teams/README.md)

* [~~TeamsAddMemberLegacy~~](docs/teams/README.md#teamsaddmemberlegacy) - Add team member (Legacy) :warning: **Deprecated**
* [TeamsAddOrUpdateMembershipForUser](docs/teams/README.md#teamsaddorupdatemembershipforuser) - Add or update team membership for a user
* [TeamsAddOrUpdateProjectPermissions](docs/teams/README.md#teamsaddorupdateprojectpermissions) - Add or update team project permissions
* [TeamsAddOrUpdateRepoPermissions](docs/teams/README.md#teamsaddorupdaterepopermissions) - Add or update team repository permissions
* [TeamsCheckPermissionsForProject](docs/teams/README.md#teamscheckpermissionsforproject) - Check team permissions for a project
* [TeamsCheckPermissionsForRepo](docs/teams/README.md#teamscheckpermissionsforrepo) - Check team permissions for a repository
* [TeamsCreate](docs/teams/README.md#teamscreate) - Create a team
* [TeamsCreateDiscussion](docs/teams/README.md#teamscreatediscussion) - Create a discussion
* [TeamsCreateDiscussionComment](docs/teams/README.md#teamscreatediscussioncomment) - Create a discussion comment
* [TeamsDelete](docs/teams/README.md#teamsdelete) - Delete a team
* [TeamsDeleteDiscussion](docs/teams/README.md#teamsdeletediscussion) - Delete a discussion
* [TeamsDeleteDiscussionComment](docs/teams/README.md#teamsdeletediscussioncomment) - Delete a discussion comment
* [TeamsGet](docs/teams/README.md#teamsget) - Get a team
* [TeamsGetByName](docs/teams/README.md#teamsgetbyname) - Get a team by name
* [TeamsGetDiscussion](docs/teams/README.md#teamsgetdiscussion) - Get a discussion
* [TeamsGetDiscussionComment](docs/teams/README.md#teamsgetdiscussioncomment) - Get a discussion comment
* [~~TeamsGetMemberLegacy~~](docs/teams/README.md#teamsgetmemberlegacy) - Get team member (Legacy) :warning: **Deprecated**
* [TeamsGetMembershipForUser](docs/teams/README.md#teamsgetmembershipforuser) - Get team membership for a user
* [TeamsList](docs/teams/README.md#teamslist) - List teams
* [TeamsListChild](docs/teams/README.md#teamslistchild) - List child teams
* [TeamsListDiscussionComments](docs/teams/README.md#teamslistdiscussioncomments) - List discussion comments
* [TeamsListDiscussions](docs/teams/README.md#teamslistdiscussions) - List discussions
* [TeamsListForAuthenticatedUser](docs/teams/README.md#teamslistforauthenticateduser) - List teams for the authenticated user
* [TeamsListMembers](docs/teams/README.md#teamslistmembers) - List team members
* [TeamsListProjects](docs/teams/README.md#teamslistprojects) - List team projects
* [TeamsListRepos](docs/teams/README.md#teamslistrepos) - List team repositories
* [~~TeamsRemoveMemberLegacy~~](docs/teams/README.md#teamsremovememberlegacy) - Remove team member (Legacy) :warning: **Deprecated**
* [TeamsRemoveMembershipForUser](docs/teams/README.md#teamsremovemembershipforuser) - Remove team membership for a user
* [TeamsRemoveProject](docs/teams/README.md#teamsremoveproject) - Remove a project from a team
* [TeamsRemoveRepo](docs/teams/README.md#teamsremoverepo) - Remove a repository from a team
* [TeamsUpdate](docs/teams/README.md#teamsupdate) - Update a team
* [TeamsUpdateDiscussion](docs/teams/README.md#teamsupdatediscussion) - Update a discussion
* [TeamsUpdateDiscussionComment](docs/teams/README.md#teamsupdatediscussioncomment) - Update a discussion comment

### [Users](docs/users/README.md)

* [UsersAddEmailForAuthenticated](docs/users/README.md#usersaddemailforauthenticated) - Add an email address for the authenticated user
* [UsersCheckFollowingForUser](docs/users/README.md#userscheckfollowingforuser) - Check if a user follows another user
* [UsersCheckPersonIsFollowedByAuthenticated](docs/users/README.md#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [UsersCreateGpgKeyForAuthenticated](docs/users/README.md#userscreategpgkeyforauthenticated) - Create a GPG key for the authenticated user
* [UsersCreatePublicSSHKeyForAuthenticated](docs/users/README.md#userscreatepublicsshkeyforauthenticated) - Create a public SSH key for the authenticated user
* [UsersDeleteEmailForAuthenticated](docs/users/README.md#usersdeleteemailforauthenticated) - Delete an email address for the authenticated user
* [UsersDeleteGpgKeyForAuthenticated](docs/users/README.md#usersdeletegpgkeyforauthenticated) - Delete a GPG key for the authenticated user
* [UsersDeletePublicSSHKeyForAuthenticated](docs/users/README.md#usersdeletepublicsshkeyforauthenticated) - Delete a public SSH key for the authenticated user
* [UsersFollow](docs/users/README.md#usersfollow) - Follow a user
* [UsersGetAuthenticated](docs/users/README.md#usersgetauthenticated) - Get the authenticated user
* [UsersGetByUsername](docs/users/README.md#usersgetbyusername) - Get a user
* [UsersGetContextForUser](docs/users/README.md#usersgetcontextforuser) - Get contextual information for a user
* [UsersGetGpgKeyForAuthenticated](docs/users/README.md#usersgetgpgkeyforauthenticated) - Get a GPG key for the authenticated user
* [UsersGetPublicSSHKeyForAuthenticated](docs/users/README.md#usersgetpublicsshkeyforauthenticated) - Get a public SSH key for the authenticated user
* [UsersList](docs/users/README.md#userslist) - List users
* [UsersListEmailsForAuthenticated](docs/users/README.md#userslistemailsforauthenticated) - List email addresses for the authenticated user
* [UsersListFollowedByAuthenticated](docs/users/README.md#userslistfollowedbyauthenticated) - List the people the authenticated user follows
* [UsersListFollowersForAuthenticatedUser](docs/users/README.md#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [UsersListFollowersForUser](docs/users/README.md#userslistfollowersforuser) - List followers of a user
* [UsersListFollowingForUser](docs/users/README.md#userslistfollowingforuser) - List the people a user follows
* [UsersListGpgKeysForAuthenticated](docs/users/README.md#userslistgpgkeysforauthenticated) - List GPG keys for the authenticated user
* [UsersListGpgKeysForUser](docs/users/README.md#userslistgpgkeysforuser) - List GPG keys for a user
* [UsersListPublicEmailsForAuthenticated](docs/users/README.md#userslistpublicemailsforauthenticated) - List public email addresses for the authenticated user
* [UsersListPublicKeysForUser](docs/users/README.md#userslistpublickeysforuser) - List public keys for a user
* [UsersListPublicSSHKeysForAuthenticated](docs/users/README.md#userslistpublicsshkeysforauthenticated) - List public SSH keys for the authenticated user
* [UsersUnfollow](docs/users/README.md#usersunfollow) - Unfollow a user
* [UsersUpdateAuthenticated](docs/users/README.md#usersupdateauthenticated) - Update the authenticated user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
