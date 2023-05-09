# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitypubPersonRequest;
import org.openapis.openapi.models.operations.ActivitypubPersonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivitypubPersonRequest req = new ActivitypubPersonRequest(548814L);            

            ActivitypubPersonResponse res = sdk.activitypub.activitypubPerson(req);

            if (res.activityPub != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activitypub](docs/activitypub/README.md)

* [activitypubPerson](docs/activitypub/README.md#activitypubperson) - Returns the Person actor for a user
* [activitypubPersonInbox](docs/activitypub/README.md#activitypubpersoninbox) - Send to the inbox

### [admin](docs/admin/README.md)

* [adminAdoptRepository](docs/admin/README.md#adminadoptrepository) - Adopt unadopted files as a repository
* [adminCreateHook](docs/admin/README.md#admincreatehook) - Create a hook
* [adminCreateOrg](docs/admin/README.md#admincreateorg) - Create an organization
* [adminCreatePublicKey](docs/admin/README.md#admincreatepublickey) - Add a public key on behalf of a user
* [adminCreateRepo](docs/admin/README.md#admincreaterepo) - Create a repository on behalf of a user
* [adminCreateUser](docs/admin/README.md#admincreateuser) - Create a user
* [adminCronList](docs/admin/README.md#admincronlist) - List cron tasks
* [adminCronRun](docs/admin/README.md#admincronrun) - Run cron task
* [adminDeleteHook](docs/admin/README.md#admindeletehook) - Delete a hook
* [adminDeleteUnadoptedRepository](docs/admin/README.md#admindeleteunadoptedrepository) - Delete unadopted files
* [adminDeleteUser](docs/admin/README.md#admindeleteuser) - Delete a user
* [adminDeleteUserPublicKey](docs/admin/README.md#admindeleteuserpublickey) - Delete a user's public key
* [adminEditHook](docs/admin/README.md#adminedithook) - Update a hook
* [adminEditUser](docs/admin/README.md#adminedituser) - Edit an existing user
* [adminGetAllEmails](docs/admin/README.md#admingetallemails) - List all emails
* [adminGetAllOrgs](docs/admin/README.md#admingetallorgs) - List all organizations
* [adminGetHook](docs/admin/README.md#admingethook) - Get a hook
* [adminListHooks](docs/admin/README.md#adminlisthooks) - List system's webhooks
* [adminRenameUserJson](docs/admin/README.md#adminrenameuserjson) - Rename a user
* [adminRenameUserRaw](docs/admin/README.md#adminrenameuserraw) - Rename a user
* [adminSearchEmails](docs/admin/README.md#adminsearchemails) - Search all emails
* [adminSearchUsers](docs/admin/README.md#adminsearchusers) - Search users according filter conditions
* [adminUnadoptedList](docs/admin/README.md#adminunadoptedlist) - List unadopted repositories

### [issue](docs/issue/README.md)

* [issueAddLabel](docs/issue/README.md#issueaddlabel) - Add a label to an issue
* [issueAddSubscription](docs/issue/README.md#issueaddsubscription) - Subscribe user to issue
* [issueAddTime](docs/issue/README.md#issueaddtime) - Add tracked time to a issue
* [issueCheckSubscription](docs/issue/README.md#issuechecksubscription) - Check if user is subscribed to an issue
* [issueClearLabels](docs/issue/README.md#issueclearlabels) - Remove all labels from an issue
* [issueCreateComment](docs/issue/README.md#issuecreatecomment) - Add a comment to an issue
* [issueCreateIssue](docs/issue/README.md#issuecreateissue) - Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
* [issueCreateIssueAttachment](docs/issue/README.md#issuecreateissueattachment) - Create an issue attachment
* [issueCreateIssueBlockingJson](docs/issue/README.md#issuecreateissueblockingjson) - Block the issue given in the body by the issue in path
* [issueCreateIssueBlockingRaw](docs/issue/README.md#issuecreateissueblockingraw) - Block the issue given in the body by the issue in path
* [issueCreateIssueCommentAttachment](docs/issue/README.md#issuecreateissuecommentattachment) - Create a comment attachment
* [issueCreateIssueDependenciesJson](docs/issue/README.md#issuecreateissuedependenciesjson) - Make the issue in the url depend on the issue in the form.
* [issueCreateIssueDependenciesRaw](docs/issue/README.md#issuecreateissuedependenciesraw) - Make the issue in the url depend on the issue in the form.
* [issueCreateLabel](docs/issue/README.md#issuecreatelabel) - Create a label
* [issueCreateMilestone](docs/issue/README.md#issuecreatemilestone) - Create a milestone
* [issueDelete](docs/issue/README.md#issuedelete) - Delete an issue
* [issueDeleteComment](docs/issue/README.md#issuedeletecomment) - Delete a comment
* [~~issueDeleteCommentDeprecated~~](docs/issue/README.md#issuedeletecommentdeprecated) - Delete a comment :warning: **Deprecated**
* [issueDeleteCommentReaction](docs/issue/README.md#issuedeletecommentreaction) - Remove a reaction from a comment of an issue
* [issueDeleteIssueAttachment](docs/issue/README.md#issuedeleteissueattachment) - Delete an issue attachment
* [issueDeleteIssueCommentAttachment](docs/issue/README.md#issuedeleteissuecommentattachment) - Delete a comment attachment
* [issueDeleteIssueReaction](docs/issue/README.md#issuedeleteissuereaction) - Remove a reaction from an issue
* [issueDeleteLabel](docs/issue/README.md#issuedeletelabel) - Delete a label
* [issueDeleteMilestone](docs/issue/README.md#issuedeletemilestone) - Delete a milestone
* [issueDeleteStopWatch](docs/issue/README.md#issuedeletestopwatch) - Delete an issue's existing stopwatch.
* [issueDeleteSubscription](docs/issue/README.md#issuedeletesubscription) - Unsubscribe user from issue
* [issueDeleteTime](docs/issue/README.md#issuedeletetime) - Delete specific tracked time
* [issueEditComment](docs/issue/README.md#issueeditcomment) - Edit a comment
* [~~issueEditCommentDeprecated~~](docs/issue/README.md#issueeditcommentdeprecated) - Edit a comment :warning: **Deprecated**
* [issueEditIssue](docs/issue/README.md#issueeditissue) - Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
* [issueEditIssueAttachment](docs/issue/README.md#issueeditissueattachment) - Edit an issue attachment
* [issueEditIssueCommentAttachment](docs/issue/README.md#issueeditissuecommentattachment) - Edit a comment attachment
* [issueEditIssueDeadline](docs/issue/README.md#issueeditissuedeadline) - Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
* [issueEditLabel](docs/issue/README.md#issueeditlabel) - Update a label
* [issueEditMilestone](docs/issue/README.md#issueeditmilestone) - Update a milestone
* [issueGetComment](docs/issue/README.md#issuegetcomment) - Get a comment
* [issueGetCommentReactions](docs/issue/README.md#issuegetcommentreactions) - Get a list of reactions from a comment of an issue
* [issueGetComments](docs/issue/README.md#issuegetcomments) - List all comments on an issue
* [issueGetCommentsAndTimeline](docs/issue/README.md#issuegetcommentsandtimeline) - List all comments and events on an issue
* [issueGetIssue](docs/issue/README.md#issuegetissue) - Get an issue
* [issueGetIssueAttachment](docs/issue/README.md#issuegetissueattachment) - Get an issue attachment
* [issueGetIssueCommentAttachment](docs/issue/README.md#issuegetissuecommentattachment) - Get a comment attachment
* [issueGetIssueReactions](docs/issue/README.md#issuegetissuereactions) - Get a list reactions of an issue
* [issueGetLabel](docs/issue/README.md#issuegetlabel) - Get a single label
* [issueGetLabels](docs/issue/README.md#issuegetlabels) - Get an issue's labels
* [issueGetMilestone](docs/issue/README.md#issuegetmilestone) - Get a milestone
* [issueGetMilestonesList](docs/issue/README.md#issuegetmilestoneslist) - Get all of a repository's opened milestones
* [issueGetRepoComments](docs/issue/README.md#issuegetrepocomments) - List all comments in a repository
* [issueListBlocks](docs/issue/README.md#issuelistblocks) - List issues that are blocked by this issue
* [issueListIssueAttachments](docs/issue/README.md#issuelistissueattachments) - List issue's attachments
* [issueListIssueCommentAttachments](docs/issue/README.md#issuelistissuecommentattachments) - List comment's attachments
* [issueListIssueDependencies](docs/issue/README.md#issuelistissuedependencies) - List an issue's dependencies, i.e all issues that block this issue.
* [issueListIssues](docs/issue/README.md#issuelistissues) - List a repository's issues
* [issueListLabels](docs/issue/README.md#issuelistlabels) - Get all of a repository's labels
* [issuePostCommentReaction](docs/issue/README.md#issuepostcommentreaction) - Add a reaction to a comment of an issue
* [issuePostIssueReaction](docs/issue/README.md#issuepostissuereaction) - Add a reaction to an issue
* [issueRemoveIssueBlockingJson](docs/issue/README.md#issueremoveissueblockingjson) - Unblock the issue given in the body by the issue in path
* [issueRemoveIssueBlockingRaw](docs/issue/README.md#issueremoveissueblockingraw) - Unblock the issue given in the body by the issue in path
* [issueRemoveIssueDependenciesJson](docs/issue/README.md#issueremoveissuedependenciesjson) - Remove an issue dependency
* [issueRemoveIssueDependenciesRaw](docs/issue/README.md#issueremoveissuedependenciesraw) - Remove an issue dependency
* [issueRemoveLabel](docs/issue/README.md#issueremovelabel) - Remove a label from an issue
* [issueReplaceLabels](docs/issue/README.md#issuereplacelabels) - Replace an issue's labels
* [issueResetTime](docs/issue/README.md#issueresettime) - Reset a tracked time of an issue
* [issueSearchIssues](docs/issue/README.md#issuesearchissues) - Search for issues across the repositories that the user has access to
* [issueStartStopWatch](docs/issue/README.md#issuestartstopwatch) - Start stopwatch on an issue.
* [issueStopStopWatch](docs/issue/README.md#issuestopstopwatch) - Stop an issue's existing stopwatch.
* [issueSubscriptions](docs/issue/README.md#issuesubscriptions) - Get users who subscribed on an issue.
* [issueTrackedTimes](docs/issue/README.md#issuetrackedtimes) - List an issue's tracked times

### [miscellaneous](docs/miscellaneous/README.md)

* [getNodeInfo](docs/miscellaneous/README.md#getnodeinfo) - Returns the nodeinfo of the Gitea application
* [getSigningKey](docs/miscellaneous/README.md#getsigningkey) - Get default signing-key.gpg
* [getVersion](docs/miscellaneous/README.md#getversion) - Returns the version of the Gitea application
* [renderMarkdown](docs/miscellaneous/README.md#rendermarkdown) - Render a markdown document as HTML
* [renderMarkdownRaw](docs/miscellaneous/README.md#rendermarkdownraw) - Render raw markdown as HTML
* [renderMarkup](docs/miscellaneous/README.md#rendermarkup) - Render a markup document as HTML

### [notification](docs/notification/README.md)

* [notifyGetList](docs/notification/README.md#notifygetlist) - List users's notification threads
* [notifyGetRepoList](docs/notification/README.md#notifygetrepolist) - List users's notification threads on a specific repo
* [notifyGetThread](docs/notification/README.md#notifygetthread) - Get notification thread by ID
* [notifyNewAvailable](docs/notification/README.md#notifynewavailable) - Check if unread notifications exist
* [notifyReadList](docs/notification/README.md#notifyreadlist) - Mark notification threads as read, pinned or unread
* [notifyReadRepoList](docs/notification/README.md#notifyreadrepolist) - Mark notification threads as read, pinned or unread on a specific repo
* [notifyReadThread](docs/notification/README.md#notifyreadthread) - Mark notification thread as read by ID

### [organization](docs/organization/README.md)

* [createOrgRepo](docs/organization/README.md#createorgrepo) - Create a repository in an organization
* [~~createOrgRepoDeprecated~~](docs/organization/README.md#createorgrepodeprecated) - Create a repository in an organization :warning: **Deprecated**
* [orgAddTeamMember](docs/organization/README.md#orgaddteammember) - Add a team member
* [orgAddTeamRepository](docs/organization/README.md#orgaddteamrepository) - Add a repository to a team
* [orgConcealMember](docs/organization/README.md#orgconcealmember) - Conceal a user's membership
* [orgCreate](docs/organization/README.md#orgcreate) - Create an organization
* [orgCreateHook](docs/organization/README.md#orgcreatehook) - Create a hook
* [orgCreateLabel](docs/organization/README.md#orgcreatelabel) - Create a label for an organization
* [orgCreateTeam](docs/organization/README.md#orgcreateteam) - Create a team
* [orgDelete](docs/organization/README.md#orgdelete) - Delete an organization
* [orgDeleteHook](docs/organization/README.md#orgdeletehook) - Delete a hook
* [orgDeleteLabel](docs/organization/README.md#orgdeletelabel) - Delete a label
* [orgDeleteMember](docs/organization/README.md#orgdeletemember) - Remove a member from an organization
* [orgDeleteTeam](docs/organization/README.md#orgdeleteteam) - Delete a team
* [orgEdit](docs/organization/README.md#orgedit) - Edit an organization
* [orgEditHook](docs/organization/README.md#orgedithook) - Update a hook
* [orgEditLabel](docs/organization/README.md#orgeditlabel) - Update a label
* [orgEditTeam](docs/organization/README.md#orgeditteam) - Edit a team
* [orgGet](docs/organization/README.md#orgget) - Get an organization
* [orgGetAll](docs/organization/README.md#orggetall) - Get list of organizations
* [orgGetHook](docs/organization/README.md#orggethook) - Get a hook
* [orgGetLabel](docs/organization/README.md#orggetlabel) - Get a single label
* [orgGetTeam](docs/organization/README.md#orggetteam) - Get a team
* [orgGetUserPermissions](docs/organization/README.md#orggetuserpermissions) - Get user permissions in organization
* [orgIsMember](docs/organization/README.md#orgismember) - Check if a user is a member of an organization
* [orgIsPublicMember](docs/organization/README.md#orgispublicmember) - Check if a user is a public member of an organization
* [orgListActivityFeeds](docs/organization/README.md#orglistactivityfeeds) - List an organization's activity feeds
* [orgListCurrentUserOrgs](docs/organization/README.md#orglistcurrentuserorgs) - List the current user's organizations
* [orgListHooks](docs/organization/README.md#orglisthooks) - List an organization's webhooks
* [orgListLabels](docs/organization/README.md#orglistlabels) - List an organization's labels
* [orgListMembers](docs/organization/README.md#orglistmembers) - List an organization's members
* [orgListPublicMembers](docs/organization/README.md#orglistpublicmembers) - List an organization's public members
* [orgListRepos](docs/organization/README.md#orglistrepos) - List an organization's repos
* [orgListTeamActivityFeeds](docs/organization/README.md#orglistteamactivityfeeds) - List a team's activity feeds
* [orgListTeamMember](docs/organization/README.md#orglistteammember) - List a particular member of team
* [orgListTeamMembers](docs/organization/README.md#orglistteammembers) - List a team's members
* [orgListTeamRepo](docs/organization/README.md#orglistteamrepo) - List a particular repo of team
* [orgListTeamRepos](docs/organization/README.md#orglistteamrepos) - List a team's repos
* [orgListTeams](docs/organization/README.md#orglistteams) - List an organization's teams
* [orgListUserOrgs](docs/organization/README.md#orglistuserorgs) - List a user's organizations
* [orgPublicizeMember](docs/organization/README.md#orgpublicizemember) - Publicize a user's membership
* [orgRemoveTeamMember](docs/organization/README.md#orgremoveteammember) - Remove a team member
* [orgRemoveTeamRepository](docs/organization/README.md#orgremoveteamrepository) - Remove a repository from a team
* [teamSearch](docs/organization/README.md#teamsearch) - Search for teams within an organization

### [package_](docs/package/README.md)

* [deletePackage](docs/package/README.md#deletepackage) - Delete a package
* [getPackage](docs/package/README.md#getpackage) - Gets a package
* [listPackageFiles](docs/package/README.md#listpackagefiles) - Gets all files of a package
* [listPackages](docs/package/README.md#listpackages) - Gets all packages of an owner

### [repository](docs/repository/README.md)

* [getAnnotatedTag](docs/repository/README.md#getannotatedtag) - Gets the tag object of an annotated tag (not lightweight tags)
* [getBlob](docs/repository/README.md#getblob) - Gets the blob of a repository.
* [getTree](docs/repository/README.md#gettree) - Gets the tree of a repository.
* [acceptRepoTransfer](docs/repository/README.md#acceptrepotransfer) - Accept a repo transfer
* [createCurrentUserRepo](docs/repository/README.md#createcurrentuserrepo) - Create a repository
* [createForkJson](docs/repository/README.md#createforkjson) - Fork a repository
* [createForkRaw](docs/repository/README.md#createforkraw) - Fork a repository
* [generateRepo](docs/repository/README.md#generaterepo) - Create a repository using a template
* [listForks](docs/repository/README.md#listforks) - List a repository's forks
* [rejectRepoTransfer](docs/repository/README.md#rejectrepotransfer) - Reject a repo transfer
* [repoAddCollaboratorJson](docs/repository/README.md#repoaddcollaboratorjson) - Add a collaborator to a repository
* [repoAddCollaboratorRaw](docs/repository/README.md#repoaddcollaboratorraw) - Add a collaborator to a repository
* [repoAddPushMirror](docs/repository/README.md#repoaddpushmirror) - add a push mirror to the repository
* [repoAddTeam](docs/repository/README.md#repoaddteam) - Add a team to a repository
* [repoAddTopic](docs/repository/README.md#repoaddtopic) - Add a topic to a repository
* [repoApplyDiffPatch](docs/repository/README.md#repoapplydiffpatch) - Apply diff patch to repository
* [repoCancelScheduledAutoMerge](docs/repository/README.md#repocancelscheduledautomerge) - Cancel the scheduled auto merge for the given pull request
* [repoCheckCollaborator](docs/repository/README.md#repocheckcollaborator) - Check if a user is a collaborator of a repository
* [repoCheckTeam](docs/repository/README.md#repocheckteam) - Check if a team is assigned to a repository
* [repoCreateBranch](docs/repository/README.md#repocreatebranch) - Create a branch
* [repoCreateBranchProtection](docs/repository/README.md#repocreatebranchprotection) - Create a branch protections for a repository
* [repoCreateFile](docs/repository/README.md#repocreatefile) - Create a file in a repository
* [repoCreateHook](docs/repository/README.md#repocreatehook) - Create a hook
* [repoCreateKey](docs/repository/README.md#repocreatekey) - Add a key to a repository
* [repoCreatePullRequest](docs/repository/README.md#repocreatepullrequest) - Create a pull request
* [repoCreatePullReviewRequestsJson](docs/repository/README.md#repocreatepullreviewrequestsjson) - create review requests for a pull request
* [repoCreatePullReviewRequestsRaw](docs/repository/README.md#repocreatepullreviewrequestsraw) - create review requests for a pull request
* [repoCreatePullReviewJson](docs/repository/README.md#repocreatepullreviewjson) - Create a review to an pull request
* [repoCreatePullReviewRaw](docs/repository/README.md#repocreatepullreviewraw) - Create a review to an pull request
* [repoCreateRelease](docs/repository/README.md#repocreaterelease) - Create a release
* [repoCreateReleaseAttachment](docs/repository/README.md#repocreatereleaseattachment) - Create a release attachment
* [repoCreateStatusJson](docs/repository/README.md#repocreatestatusjson) - Create a commit status
* [repoCreateStatusRaw](docs/repository/README.md#repocreatestatusraw) - Create a commit status
* [repoCreateTagJson](docs/repository/README.md#repocreatetagjson) - Create a new git tag in a repository
* [repoCreateTagRaw](docs/repository/README.md#repocreatetagraw) - Create a new git tag in a repository
* [repoCreateWikiPage](docs/repository/README.md#repocreatewikipage) - Create a wiki page
* [repoDelete](docs/repository/README.md#repodelete) - Delete a repository
* [repoDeleteBranch](docs/repository/README.md#repodeletebranch) - Delete a specific branch from a repository
* [repoDeleteBranchProtection](docs/repository/README.md#repodeletebranchprotection) - Delete a specific branch protection for the repository
* [repoDeleteCollaborator](docs/repository/README.md#repodeletecollaborator) - Delete a collaborator from a repository
* [repoDeleteFile](docs/repository/README.md#repodeletefile) - Delete a file in a repository
* [repoDeleteGitHook](docs/repository/README.md#repodeletegithook) - Delete a Git hook in a repository
* [repoDeleteHook](docs/repository/README.md#repodeletehook) - Delete a hook in a repository
* [repoDeleteKey](docs/repository/README.md#repodeletekey) - Delete a key from a repository
* [repoDeletePullReview](docs/repository/README.md#repodeletepullreview) - Delete a specific review from a pull request
* [repoDeletePullReviewRequestsJson](docs/repository/README.md#repodeletepullreviewrequestsjson) - cancel review requests for a pull request
* [repoDeletePullReviewRequestsRaw](docs/repository/README.md#repodeletepullreviewrequestsraw) - cancel review requests for a pull request
* [repoDeletePushMirror](docs/repository/README.md#repodeletepushmirror) - deletes a push mirror from a repository by remoteName
* [repoDeleteRelease](docs/repository/README.md#repodeleterelease) - Delete a release
* [repoDeleteReleaseAttachment](docs/repository/README.md#repodeletereleaseattachment) - Delete a release attachment
* [repoDeleteReleaseByTag](docs/repository/README.md#repodeletereleasebytag) - Delete a release by tag name
* [repoDeleteTag](docs/repository/README.md#repodeletetag) - Delete a repository's tag by name
* [repoDeleteTeam](docs/repository/README.md#repodeleteteam) - Delete a team from a repository
* [repoDeleteTopic](docs/repository/README.md#repodeletetopic) - Delete a topic from a repository
* [repoDeleteWikiPage](docs/repository/README.md#repodeletewikipage) - Delete a wiki page
* [repoDismissPullReviewJson](docs/repository/README.md#repodismisspullreviewjson) - Dismiss a review for a pull request
* [repoDismissPullReviewRaw](docs/repository/README.md#repodismisspullreviewraw) - Dismiss a review for a pull request
* [repoDownloadCommitDiffOrPatch](docs/repository/README.md#repodownloadcommitdifforpatch) - Get a commit's diff or patch
* [repoDownloadPullDiffOrPatch](docs/repository/README.md#repodownloadpulldifforpatch) - Get a pull request diff or patch
* [repoEditBranchProtection](docs/repository/README.md#repoeditbranchprotection) - Edit a branch protections for a repository. Only fields that are set will be changed
* [repoEditGitHookJson](docs/repository/README.md#repoeditgithookjson) - Edit a Git hook in a repository
* [repoEditGitHookRaw](docs/repository/README.md#repoeditgithookraw) - Edit a Git hook in a repository
* [repoEditHookJson](docs/repository/README.md#repoedithookjson) - Edit a hook in a repository
* [repoEditHookRaw](docs/repository/README.md#repoedithookraw) - Edit a hook in a repository
* [repoEditPullRequest](docs/repository/README.md#repoeditpullrequest) - Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
* [repoEditRelease](docs/repository/README.md#repoeditrelease) - Update a release
* [repoEditReleaseAttachment](docs/repository/README.md#repoeditreleaseattachment) - Edit a release attachment
* [repoEditWikiPage](docs/repository/README.md#repoeditwikipage) - Edit a wiki page
* [repoEditJson](docs/repository/README.md#repoeditjson) - Edit a repository's properties. Only fields that are set will be changed.
* [repoEditRaw](docs/repository/README.md#repoeditraw) - Edit a repository's properties. Only fields that are set will be changed.
* [repoGet](docs/repository/README.md#repoget) - Get a repository
* [repoGetAllCommits](docs/repository/README.md#repogetallcommits) - Get a list of all commits from a repository
* [repoGetArchive](docs/repository/README.md#repogetarchive) - Get an archive of a repository
* [repoGetAssignees](docs/repository/README.md#repogetassignees) - Return all users that have write access and can be assigned to issues
* [repoGetBranch](docs/repository/README.md#repogetbranch) - Retrieve a specific branch from a repository, including its effective branch protection
* [repoGetBranchProtection](docs/repository/README.md#repogetbranchprotection) - Get a specific branch protection for the repository
* [repoGetByID](docs/repository/README.md#repogetbyid) - Get a repository by id
* [repoGetCombinedStatusByRef](docs/repository/README.md#repogetcombinedstatusbyref) - Get a commit's combined status, by branch/tag/commit reference
* [repoGetContents](docs/repository/README.md#repogetcontents) - Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
* [repoGetContentsList](docs/repository/README.md#repogetcontentslist) - Gets the metadata of all the entries of the root dir
* [repoGetEditorConfig](docs/repository/README.md#repogeteditorconfig) - Get the EditorConfig definitions of a file in a repository
* [repoGetGitHook](docs/repository/README.md#repogetgithook) - Get a Git hook
* [repoGetHook](docs/repository/README.md#repogethook) - Get a hook
* [repoGetIssueConfig](docs/repository/README.md#repogetissueconfig) - Returns the issue config for a repo
* [repoGetIssueTemplates](docs/repository/README.md#repogetissuetemplates) - Get available issue templates for a repository
* [repoGetKey](docs/repository/README.md#repogetkey) - Get a repository's key by id
* [repoGetLanguages](docs/repository/README.md#repogetlanguages) - Get languages and number of bytes of code written
* [repoGetLatestRelease](docs/repository/README.md#repogetlatestrelease) - Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at
* [repoGetNote](docs/repository/README.md#repogetnote) - Get a note corresponding to a single commit from a repository
* [repoGetPullRequest](docs/repository/README.md#repogetpullrequest) - Get a pull request
* [repoGetPullRequestCommits](docs/repository/README.md#repogetpullrequestcommits) - Get commits for a pull request
* [repoGetPullRequestFiles](docs/repository/README.md#repogetpullrequestfiles) - Get changed files for a pull request
* [repoGetPullReview](docs/repository/README.md#repogetpullreview) - Get a specific review for a pull request
* [repoGetPullReviewComments](docs/repository/README.md#repogetpullreviewcomments) - Get a specific review for a pull request
* [repoGetPushMirrorByRemoteName](docs/repository/README.md#repogetpushmirrorbyremotename) - Get push mirror of the repository by remoteName
* [repoGetRawFile](docs/repository/README.md#repogetrawfile) - Get a file from a repository
* [repoGetRawFileOrLFS](docs/repository/README.md#repogetrawfileorlfs) - Get a file or it's LFS object from a repository
* [repoGetRelease](docs/repository/README.md#repogetrelease) - Get a release
* [repoGetReleaseAttachment](docs/repository/README.md#repogetreleaseattachment) - Get a release attachment
* [repoGetReleaseByTag](docs/repository/README.md#repogetreleasebytag) - Get a release by tag name
* [repoGetRepoPermissions](docs/repository/README.md#repogetrepopermissions) - Get repository permissions for a user
* [repoGetReviewers](docs/repository/README.md#repogetreviewers) - Return all users that can be requested to review in this repo
* [repoGetSingleCommit](docs/repository/README.md#repogetsinglecommit) - Get a single commit from a repository
* [repoGetTag](docs/repository/README.md#repogettag) - Get the tag of a repository by tag name
* [repoGetWikiPage](docs/repository/README.md#repogetwikipage) - Get a wiki page
* [repoGetWikiPageRevisions](docs/repository/README.md#repogetwikipagerevisions) - Get revisions of a wiki page
* [repoGetWikiPages](docs/repository/README.md#repogetwikipages) - Get all wiki pages
* [repoListActivityFeeds](docs/repository/README.md#repolistactivityfeeds) - List a repository's activity feeds
* [repoListAllGitRefs](docs/repository/README.md#repolistallgitrefs) - Get specified ref or filtered repository's refs
* [repoListBranchProtection](docs/repository/README.md#repolistbranchprotection) - List branch protections for a repository
* [repoListBranches](docs/repository/README.md#repolistbranches) - List a repository's branches
* [repoListCollaborators](docs/repository/README.md#repolistcollaborators) - List a repository's collaborators
* [repoListGitHooks](docs/repository/README.md#repolistgithooks) - List the Git hooks in a repository
* [repoListGitRefs](docs/repository/README.md#repolistgitrefs) - Get specified ref or filtered repository's refs
* [repoListHooks](docs/repository/README.md#repolisthooks) - List the hooks in a repository
* [repoListKeys](docs/repository/README.md#repolistkeys) - List a repository's keys
* [repoListPullRequests](docs/repository/README.md#repolistpullrequests) - List a repo's pull requests
* [repoListPullReviews](docs/repository/README.md#repolistpullreviews) - List all reviews for a pull request
* [repoListPushMirrors](docs/repository/README.md#repolistpushmirrors) - Get all push mirrors of the repository
* [repoListReleaseAttachments](docs/repository/README.md#repolistreleaseattachments) - List release's attachments
* [repoListReleases](docs/repository/README.md#repolistreleases) - List a repo's releases
* [repoListStargazers](docs/repository/README.md#repoliststargazers) - List a repo's stargazers
* [repoListStatuses](docs/repository/README.md#repoliststatuses) - Get a commit's statuses
* [repoListStatusesByRef](docs/repository/README.md#repoliststatusesbyref) - Get a commit's statuses, by branch/tag/commit reference
* [repoListSubscribers](docs/repository/README.md#repolistsubscribers) - List a repo's watchers
* [repoListTags](docs/repository/README.md#repolisttags) - List a repository's tags
* [repoListTeams](docs/repository/README.md#repolistteams) - List a repository's teams
* [repoListTopics](docs/repository/README.md#repolisttopics) - Get list of topics that a repository has
* [repoMergePullRequestJson](docs/repository/README.md#repomergepullrequestjson) - Merge a pull request
* [repoMergePullRequestRaw](docs/repository/README.md#repomergepullrequestraw) - Merge a pull request
* [repoMigrate](docs/repository/README.md#repomigrate) - Migrate a remote git repository
* [repoMirrorSync](docs/repository/README.md#repomirrorsync) - Sync a mirrored repository
* [repoPullRequestIsMerged](docs/repository/README.md#repopullrequestismerged) - Check if a pull request has been merged
* [repoPushMirrorSync](docs/repository/README.md#repopushmirrorsync) - Sync all push mirrored repository
* [repoSearch](docs/repository/README.md#reposearch) - Search for repositories
* [repoSigningKey](docs/repository/README.md#reposigningkey) - Get signing-key.gpg for given repository
* [repoSubmitPullReviewJson](docs/repository/README.md#reposubmitpullreviewjson) - Submit a pending review to an pull request
* [repoSubmitPullReviewRaw](docs/repository/README.md#reposubmitpullreviewraw) - Submit a pending review to an pull request
* [repoTestHook](docs/repository/README.md#repotesthook) - Test a push webhook
* [repoTrackedTimes](docs/repository/README.md#repotrackedtimes) - List a repo's tracked times
* [repoTransferJson](docs/repository/README.md#repotransferjson) - Transfer a repo ownership
* [repoTransferRaw](docs/repository/README.md#repotransferraw) - Transfer a repo ownership
* [repoUnDismissPullReview](docs/repository/README.md#repoundismisspullreview) - Cancel to dismiss a review for a pull request
* [repoUpdateFile](docs/repository/README.md#repoupdatefile) - Update a file in a repository
* [repoUpdatePullRequest](docs/repository/README.md#repoupdatepullrequest) - Merge PR's baseBranch into headBranch
* [repoUpdateTopicsJson](docs/repository/README.md#repoupdatetopicsjson) - Replace list of topics for a repository
* [repoUpdateTopicsRaw](docs/repository/README.md#repoupdatetopicsraw) - Replace list of topics for a repository
* [repoValidateIssueConfig](docs/repository/README.md#repovalidateissueconfig) - Returns the validation information for a issue config
* [topicSearch](docs/repository/README.md#topicsearch) - search topics via keyword
* [userCurrentCheckSubscription](docs/repository/README.md#usercurrentchecksubscription) - Check if the current user is watching a repo
* [userCurrentDeleteSubscription](docs/repository/README.md#usercurrentdeletesubscription) - Unwatch a repo
* [userCurrentPutSubscription](docs/repository/README.md#usercurrentputsubscription) - Watch a repo
* [~~userTrackedTimes~~](docs/repository/README.md#usertrackedtimes) - List a user's tracked times in a repo :warning: **Deprecated**

### [settings](docs/settings/README.md)

* [getGeneralAPISettings](docs/settings/README.md#getgeneralapisettings) - Get instance's global settings for api
* [getGeneralAttachmentSettings](docs/settings/README.md#getgeneralattachmentsettings) - Get instance's global settings for Attachment
* [getGeneralRepositorySettings](docs/settings/README.md#getgeneralrepositorysettings) - Get instance's global settings for repositories
* [getGeneralUISettings](docs/settings/README.md#getgeneraluisettings) - Get instance's global settings for ui

### [user](docs/user/README.md)

* [createCurrentUserRepo](docs/user/README.md#createcurrentuserrepo) - Create a repository
* [getUserSettings](docs/user/README.md#getusersettings) - Get user settings
* [getVerificationToken](docs/user/README.md#getverificationtoken) - Get a Token to verify
* [updateUserSettingsJson](docs/user/README.md#updateusersettingsjson) - Update user settings
* [updateUserSettingsRaw](docs/user/README.md#updateusersettingsraw) - Update user settings
* [userAddEmailJson](docs/user/README.md#useraddemailjson) - Add email addresses
* [userAddEmailRaw](docs/user/README.md#useraddemailraw) - Add email addresses
* [userCheckFollowing](docs/user/README.md#usercheckfollowing) - Check if one user is following another user
* [userCreateHook](docs/user/README.md#usercreatehook) - Create a hook
* [userCreateOAuth2ApplicationJson](docs/user/README.md#usercreateoauth2applicationjson) - creates a new OAuth2 application
* [userCreateOAuth2ApplicationRaw](docs/user/README.md#usercreateoauth2applicationraw) - creates a new OAuth2 application
* [userCreateToken](docs/user/README.md#usercreatetoken) - Create an access token
* [userCurrentCheckFollowing](docs/user/README.md#usercurrentcheckfollowing) - Check whether a user is followed by the authenticated user
* [userCurrentCheckStarring](docs/user/README.md#usercurrentcheckstarring) - Whether the authenticated is starring the repo
* [userCurrentDeleteFollow](docs/user/README.md#usercurrentdeletefollow) - Unfollow a user
* [userCurrentDeleteGPGKey](docs/user/README.md#usercurrentdeletegpgkey) - Remove a GPG key
* [userCurrentDeleteKey](docs/user/README.md#usercurrentdeletekey) - Delete a public key
* [userCurrentDeleteStar](docs/user/README.md#usercurrentdeletestar) - Unstar the given repo
* [userCurrentGetGPGKey](docs/user/README.md#usercurrentgetgpgkey) - Get a GPG key
* [userCurrentGetKey](docs/user/README.md#usercurrentgetkey) - Get a public key
* [userCurrentListFollowers](docs/user/README.md#usercurrentlistfollowers) - List the authenticated user's followers
* [userCurrentListFollowing](docs/user/README.md#usercurrentlistfollowing) - List the users that the authenticated user is following
* [userCurrentListGPGKeys](docs/user/README.md#usercurrentlistgpgkeys) - List the authenticated user's GPG keys
* [userCurrentListKeys](docs/user/README.md#usercurrentlistkeys) - List the authenticated user's public keys
* [userCurrentListRepos](docs/user/README.md#usercurrentlistrepos) - List the repos that the authenticated user owns
* [userCurrentListStarred](docs/user/README.md#usercurrentliststarred) - The repos that the authenticated user has starred
* [userCurrentListSubscriptions](docs/user/README.md#usercurrentlistsubscriptions) - List repositories watched by the authenticated user
* [userCurrentPostGPGKey](docs/user/README.md#usercurrentpostgpgkey) - Create a GPG key
* [userCurrentPostKey](docs/user/README.md#usercurrentpostkey) - Create a public key
* [userCurrentPutFollow](docs/user/README.md#usercurrentputfollow) - Follow a user
* [userCurrentPutStar](docs/user/README.md#usercurrentputstar) - Star the given repo
* [userCurrentTrackedTimes](docs/user/README.md#usercurrenttrackedtimes) - List the current user's tracked times
* [userDeleteAccessToken](docs/user/README.md#userdeleteaccesstoken) - delete an access token
* [userDeleteEmailJson](docs/user/README.md#userdeleteemailjson) - Delete email addresses
* [userDeleteEmailRaw](docs/user/README.md#userdeleteemailraw) - Delete email addresses
* [userDeleteHook](docs/user/README.md#userdeletehook) - Delete a hook
* [userDeleteOAuth2Application](docs/user/README.md#userdeleteoauth2application) - delete an OAuth2 Application
* [userEditHook](docs/user/README.md#useredithook) - Update a hook
* [userGet](docs/user/README.md#userget) - Get a user
* [userGetCurrent](docs/user/README.md#usergetcurrent) - Get the authenticated user
* [userGetHeatmapData](docs/user/README.md#usergetheatmapdata) - Get a user's heatmap
* [userGetHook](docs/user/README.md#usergethook) - Get a hook
* [userGetOAuth2Application](docs/user/README.md#usergetoauth2application) - get an OAuth2 Application
* [userGetOauth2Application](docs/user/README.md#usergetoauth2application) - List the authenticated user's oauth2 applications
* [userGetStopWatches](docs/user/README.md#usergetstopwatches) - Get list of all existing stopwatches
* [userGetTokens](docs/user/README.md#usergettokens) - List the authenticated user's access tokens
* [userListActivityFeeds](docs/user/README.md#userlistactivityfeeds) - List a user's activity feeds
* [userListEmails](docs/user/README.md#userlistemails) - List the authenticated user's email addresses
* [userListFollowers](docs/user/README.md#userlistfollowers) - List the given user's followers
* [userListFollowing](docs/user/README.md#userlistfollowing) - List the users that the given user is following
* [userListGPGKeys](docs/user/README.md#userlistgpgkeys) - List the given user's GPG keys
* [userListHooks](docs/user/README.md#userlisthooks) - List the authenticated user's webhooks
* [userListKeys](docs/user/README.md#userlistkeys) - List the given user's public keys
* [userListRepos](docs/user/README.md#userlistrepos) - List the repos owned by the given user
* [userListStarred](docs/user/README.md#userliststarred) - The repos that the given user has starred
* [userListSubscriptions](docs/user/README.md#userlistsubscriptions) - List the repositories watched by a user
* [userListTeams](docs/user/README.md#userlistteams) - List all the teams a user belongs to
* [userSearch](docs/user/README.md#usersearch) - Search for users
* [userUpdateOAuth2ApplicationJson](docs/user/README.md#userupdateoauth2applicationjson) - update an OAuth2 Application, this includes regenerating the client secret
* [userUpdateOAuth2ApplicationRaw](docs/user/README.md#userupdateoauth2applicationraw) - update an OAuth2 Application, this includes regenerating the client secret
* [userVerifyGPGKey](docs/user/README.md#userverifygpgkey) - Verify a GPG key
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
