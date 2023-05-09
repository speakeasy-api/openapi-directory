# repository

### Available Operations

* [getAnnotatedTag](#getannotatedtag) - Gets the tag object of an annotated tag (not lightweight tags)
* [getBlob](#getblob) - Gets the blob of a repository.
* [getTree](#gettree) - Gets the tree of a repository.
* [acceptRepoTransfer](#acceptrepotransfer) - Accept a repo transfer
* [createCurrentUserRepo](#createcurrentuserrepo) - Create a repository
* [createForkJson](#createforkjson) - Fork a repository
* [createForkRaw](#createforkraw) - Fork a repository
* [generateRepo](#generaterepo) - Create a repository using a template
* [listForks](#listforks) - List a repository's forks
* [rejectRepoTransfer](#rejectrepotransfer) - Reject a repo transfer
* [repoAddCollaboratorJson](#repoaddcollaboratorjson) - Add a collaborator to a repository
* [repoAddCollaboratorRaw](#repoaddcollaboratorraw) - Add a collaborator to a repository
* [repoAddPushMirror](#repoaddpushmirror) - add a push mirror to the repository
* [repoAddTeam](#repoaddteam) - Add a team to a repository
* [repoAddTopic](#repoaddtopic) - Add a topic to a repository
* [repoApplyDiffPatch](#repoapplydiffpatch) - Apply diff patch to repository
* [repoCancelScheduledAutoMerge](#repocancelscheduledautomerge) - Cancel the scheduled auto merge for the given pull request
* [repoCheckCollaborator](#repocheckcollaborator) - Check if a user is a collaborator of a repository
* [repoCheckTeam](#repocheckteam) - Check if a team is assigned to a repository
* [repoCreateBranch](#repocreatebranch) - Create a branch
* [repoCreateBranchProtection](#repocreatebranchprotection) - Create a branch protections for a repository
* [repoCreateFile](#repocreatefile) - Create a file in a repository
* [repoCreateHook](#repocreatehook) - Create a hook
* [repoCreateKey](#repocreatekey) - Add a key to a repository
* [repoCreatePullRequest](#repocreatepullrequest) - Create a pull request
* [repoCreatePullReviewRequestsJson](#repocreatepullreviewrequestsjson) - create review requests for a pull request
* [repoCreatePullReviewRequestsRaw](#repocreatepullreviewrequestsraw) - create review requests for a pull request
* [repoCreatePullReviewJson](#repocreatepullreviewjson) - Create a review to an pull request
* [repoCreatePullReviewRaw](#repocreatepullreviewraw) - Create a review to an pull request
* [repoCreateRelease](#repocreaterelease) - Create a release
* [repoCreateReleaseAttachment](#repocreatereleaseattachment) - Create a release attachment
* [repoCreateStatusJson](#repocreatestatusjson) - Create a commit status
* [repoCreateStatusRaw](#repocreatestatusraw) - Create a commit status
* [repoCreateTagJson](#repocreatetagjson) - Create a new git tag in a repository
* [repoCreateTagRaw](#repocreatetagraw) - Create a new git tag in a repository
* [repoCreateWikiPage](#repocreatewikipage) - Create a wiki page
* [repoDelete](#repodelete) - Delete a repository
* [repoDeleteBranch](#repodeletebranch) - Delete a specific branch from a repository
* [repoDeleteBranchProtection](#repodeletebranchprotection) - Delete a specific branch protection for the repository
* [repoDeleteCollaborator](#repodeletecollaborator) - Delete a collaborator from a repository
* [repoDeleteFile](#repodeletefile) - Delete a file in a repository
* [repoDeleteGitHook](#repodeletegithook) - Delete a Git hook in a repository
* [repoDeleteHook](#repodeletehook) - Delete a hook in a repository
* [repoDeleteKey](#repodeletekey) - Delete a key from a repository
* [repoDeletePullReview](#repodeletepullreview) - Delete a specific review from a pull request
* [repoDeletePullReviewRequestsJson](#repodeletepullreviewrequestsjson) - cancel review requests for a pull request
* [repoDeletePullReviewRequestsRaw](#repodeletepullreviewrequestsraw) - cancel review requests for a pull request
* [repoDeletePushMirror](#repodeletepushmirror) - deletes a push mirror from a repository by remoteName
* [repoDeleteRelease](#repodeleterelease) - Delete a release
* [repoDeleteReleaseAttachment](#repodeletereleaseattachment) - Delete a release attachment
* [repoDeleteReleaseByTag](#repodeletereleasebytag) - Delete a release by tag name
* [repoDeleteTag](#repodeletetag) - Delete a repository's tag by name
* [repoDeleteTeam](#repodeleteteam) - Delete a team from a repository
* [repoDeleteTopic](#repodeletetopic) - Delete a topic from a repository
* [repoDeleteWikiPage](#repodeletewikipage) - Delete a wiki page
* [repoDismissPullReviewJson](#repodismisspullreviewjson) - Dismiss a review for a pull request
* [repoDismissPullReviewRaw](#repodismisspullreviewraw) - Dismiss a review for a pull request
* [repoDownloadCommitDiffOrPatch](#repodownloadcommitdifforpatch) - Get a commit's diff or patch
* [repoDownloadPullDiffOrPatch](#repodownloadpulldifforpatch) - Get a pull request diff or patch
* [repoEditBranchProtection](#repoeditbranchprotection) - Edit a branch protections for a repository. Only fields that are set will be changed
* [repoEditGitHookJson](#repoeditgithookjson) - Edit a Git hook in a repository
* [repoEditGitHookRaw](#repoeditgithookraw) - Edit a Git hook in a repository
* [repoEditHookJson](#repoedithookjson) - Edit a hook in a repository
* [repoEditHookRaw](#repoedithookraw) - Edit a hook in a repository
* [repoEditPullRequest](#repoeditpullrequest) - Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
* [repoEditRelease](#repoeditrelease) - Update a release
* [repoEditReleaseAttachment](#repoeditreleaseattachment) - Edit a release attachment
* [repoEditWikiPage](#repoeditwikipage) - Edit a wiki page
* [repoEditJson](#repoeditjson) - Edit a repository's properties. Only fields that are set will be changed.
* [repoEditRaw](#repoeditraw) - Edit a repository's properties. Only fields that are set will be changed.
* [repoGet](#repoget) - Get a repository
* [repoGetAllCommits](#repogetallcommits) - Get a list of all commits from a repository
* [repoGetArchive](#repogetarchive) - Get an archive of a repository
* [repoGetAssignees](#repogetassignees) - Return all users that have write access and can be assigned to issues
* [repoGetBranch](#repogetbranch) - Retrieve a specific branch from a repository, including its effective branch protection
* [repoGetBranchProtection](#repogetbranchprotection) - Get a specific branch protection for the repository
* [repoGetByID](#repogetbyid) - Get a repository by id
* [repoGetCombinedStatusByRef](#repogetcombinedstatusbyref) - Get a commit's combined status, by branch/tag/commit reference
* [repoGetContents](#repogetcontents) - Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
* [repoGetContentsList](#repogetcontentslist) - Gets the metadata of all the entries of the root dir
* [repoGetEditorConfig](#repogeteditorconfig) - Get the EditorConfig definitions of a file in a repository
* [repoGetGitHook](#repogetgithook) - Get a Git hook
* [repoGetHook](#repogethook) - Get a hook
* [repoGetIssueConfig](#repogetissueconfig) - Returns the issue config for a repo
* [repoGetIssueTemplates](#repogetissuetemplates) - Get available issue templates for a repository
* [repoGetKey](#repogetkey) - Get a repository's key by id
* [repoGetLanguages](#repogetlanguages) - Get languages and number of bytes of code written
* [repoGetLatestRelease](#repogetlatestrelease) - Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at
* [repoGetNote](#repogetnote) - Get a note corresponding to a single commit from a repository
* [repoGetPullRequest](#repogetpullrequest) - Get a pull request
* [repoGetPullRequestCommits](#repogetpullrequestcommits) - Get commits for a pull request
* [repoGetPullRequestFiles](#repogetpullrequestfiles) - Get changed files for a pull request
* [repoGetPullReview](#repogetpullreview) - Get a specific review for a pull request
* [repoGetPullReviewComments](#repogetpullreviewcomments) - Get a specific review for a pull request
* [repoGetPushMirrorByRemoteName](#repogetpushmirrorbyremotename) - Get push mirror of the repository by remoteName
* [repoGetRawFile](#repogetrawfile) - Get a file from a repository
* [repoGetRawFileOrLFS](#repogetrawfileorlfs) - Get a file or it's LFS object from a repository
* [repoGetRelease](#repogetrelease) - Get a release
* [repoGetReleaseAttachment](#repogetreleaseattachment) - Get a release attachment
* [repoGetReleaseByTag](#repogetreleasebytag) - Get a release by tag name
* [repoGetRepoPermissions](#repogetrepopermissions) - Get repository permissions for a user
* [repoGetReviewers](#repogetreviewers) - Return all users that can be requested to review in this repo
* [repoGetSingleCommit](#repogetsinglecommit) - Get a single commit from a repository
* [repoGetTag](#repogettag) - Get the tag of a repository by tag name
* [repoGetWikiPage](#repogetwikipage) - Get a wiki page
* [repoGetWikiPageRevisions](#repogetwikipagerevisions) - Get revisions of a wiki page
* [repoGetWikiPages](#repogetwikipages) - Get all wiki pages
* [repoListActivityFeeds](#repolistactivityfeeds) - List a repository's activity feeds
* [repoListAllGitRefs](#repolistallgitrefs) - Get specified ref or filtered repository's refs
* [repoListBranchProtection](#repolistbranchprotection) - List branch protections for a repository
* [repoListBranches](#repolistbranches) - List a repository's branches
* [repoListCollaborators](#repolistcollaborators) - List a repository's collaborators
* [repoListGitHooks](#repolistgithooks) - List the Git hooks in a repository
* [repoListGitRefs](#repolistgitrefs) - Get specified ref or filtered repository's refs
* [repoListHooks](#repolisthooks) - List the hooks in a repository
* [repoListKeys](#repolistkeys) - List a repository's keys
* [repoListPullRequests](#repolistpullrequests) - List a repo's pull requests
* [repoListPullReviews](#repolistpullreviews) - List all reviews for a pull request
* [repoListPushMirrors](#repolistpushmirrors) - Get all push mirrors of the repository
* [repoListReleaseAttachments](#repolistreleaseattachments) - List release's attachments
* [repoListReleases](#repolistreleases) - List a repo's releases
* [repoListStargazers](#repoliststargazers) - List a repo's stargazers
* [repoListStatuses](#repoliststatuses) - Get a commit's statuses
* [repoListStatusesByRef](#repoliststatusesbyref) - Get a commit's statuses, by branch/tag/commit reference
* [repoListSubscribers](#repolistsubscribers) - List a repo's watchers
* [repoListTags](#repolisttags) - List a repository's tags
* [repoListTeams](#repolistteams) - List a repository's teams
* [repoListTopics](#repolisttopics) - Get list of topics that a repository has
* [repoMergePullRequestJson](#repomergepullrequestjson) - Merge a pull request
* [repoMergePullRequestRaw](#repomergepullrequestraw) - Merge a pull request
* [repoMigrate](#repomigrate) - Migrate a remote git repository
* [repoMirrorSync](#repomirrorsync) - Sync a mirrored repository
* [repoPullRequestIsMerged](#repopullrequestismerged) - Check if a pull request has been merged
* [repoPushMirrorSync](#repopushmirrorsync) - Sync all push mirrored repository
* [repoSearch](#reposearch) - Search for repositories
* [repoSigningKey](#reposigningkey) - Get signing-key.gpg for given repository
* [repoSubmitPullReviewJson](#reposubmitpullreviewjson) - Submit a pending review to an pull request
* [repoSubmitPullReviewRaw](#reposubmitpullreviewraw) - Submit a pending review to an pull request
* [repoTestHook](#repotesthook) - Test a push webhook
* [repoTrackedTimes](#repotrackedtimes) - List a repo's tracked times
* [repoTransferJson](#repotransferjson) - Transfer a repo ownership
* [repoTransferRaw](#repotransferraw) - Transfer a repo ownership
* [repoUnDismissPullReview](#repoundismisspullreview) - Cancel to dismiss a review for a pull request
* [repoUpdateFile](#repoupdatefile) - Update a file in a repository
* [repoUpdatePullRequest](#repoupdatepullrequest) - Merge PR's baseBranch into headBranch
* [repoUpdateTopicsJson](#repoupdatetopicsjson) - Replace list of topics for a repository
* [repoUpdateTopicsRaw](#repoupdatetopicsraw) - Replace list of topics for a repository
* [repoValidateIssueConfig](#repovalidateissueconfig) - Returns the validation information for a issue config
* [topicSearch](#topicsearch) - search topics via keyword
* [userCurrentCheckSubscription](#usercurrentchecksubscription) - Check if the current user is watching a repo
* [userCurrentDeleteSubscription](#usercurrentdeletesubscription) - Unwatch a repo
* [userCurrentPutSubscription](#usercurrentputsubscription) - Watch a repo
* [~~userTrackedTimes~~](#usertrackedtimes) - List a user's tracked times in a repo :warning: **Deprecated**

## getAnnotatedTag

Gets the tag object of an annotated tag (not lightweight tags)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotatedTagRequest;
import org.openapis.openapi.models.operations.GetAnnotatedTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnnotatedTagRequest req = new GetAnnotatedTagRequest("rerum", "occaecati", "minima");            

            GetAnnotatedTagResponse res = sdk.repository.getAnnotatedTag(req);

            if (res.annotatedTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlob

Gets the blob of a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlobRequest;
import org.openapis.openapi.models.operations.GetBlobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlobRequest req = new GetBlobRequest("distinctio", "eligendi", "sit");            

            GetBlobResponse res = sdk.repository.getBlob(req);

            if (res.gitBlobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTree

Gets the tree of a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTreeRequest;
import org.openapis.openapi.models.operations.GetTreeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTreeRequest req = new GetTreeRequest("culpa", "tempore", "adipisci") {{
                page = 766964L;
                perPage = 160538L;
                recursive = false;
            }};            

            GetTreeResponse res = sdk.repository.getTree(req);

            if (res.gitTreeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## acceptRepoTransfer

Accept a repo transfer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptRepoTransferRequest;
import org.openapis.openapi.models.operations.AcceptRepoTransferResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptRepoTransferRequest req = new AcceptRepoTransferRequest("consequatur", "minus");            

            AcceptRepoTransferResponse res = sdk.repository.acceptRepoTransfer(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCurrentUserRepo

Create a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCurrentUserRepoResponse;
import org.openapis.openapi.models.shared.CreateRepoOption;
import org.openapis.openapi.models.shared.CreateRepoOptionTrustModelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateRepoOption req = new CreateRepoOption("quaerat") {{
                autoInit = false;
                defaultBranch = "sapiente";
                description = "consectetur";
                gitignores = "esse";
                issueLabels = "blanditiis";
                license = "provident";
                private_ = false;
                readme = "a";
                template = false;
                trustModel = CreateRepoOptionTrustModelEnum.COLLABORATORCOMMITTER;
            }};            

            CreateCurrentUserRepoResponse res = sdk.repository.createCurrentUserRepo(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createForkJson

Fork a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateForkJsonRequest;
import org.openapis.openapi.models.operations.CreateForkJsonResponse;
import org.openapis.openapi.models.shared.CreateForkOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateForkJsonRequest req = new CreateForkJsonRequest("quas", "esse") {{
                createForkOption = new CreateForkOption() {{
                    name = "Lorene Mueller";
                    organization = "possimus";
                }};;
            }};            

            CreateForkJsonResponse res = sdk.repository.createForkJson(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createForkRaw

Fork a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateForkRawRequest;
import org.openapis.openapi.models.operations.CreateForkRawResponse;
import org.openapis.openapi.models.shared.CreateForkOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateForkRawRequest req = new CreateForkRawRequest("quia", "eveniet") {{
                requestBody = "asperiores".getBytes();
            }};            

            CreateForkRawResponse res = sdk.repository.createForkRaw(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateRepo

Create a repository using a template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateRepoRequest;
import org.openapis.openapi.models.operations.GenerateRepoResponse;
import org.openapis.openapi.models.shared.GenerateRepoOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateRepoRequest req = new GenerateRepoRequest("facere", "veritatis") {{
                generateRepoOption = new GenerateRepoOption("consequuntur", "quasi") {{
                    avatar = false;
                    defaultBranch = "similique";
                    description = "culpa";
                    gitContent = false;
                    gitHooks = false;
                    labels = false;
                    private_ = false;
                    topics = false;
                    webhooks = false;
                }};;
            }};            

            GenerateRepoResponse res = sdk.repository.generateRepo(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listForks

List a repository's forks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListForksRequest;
import org.openapis.openapi.models.operations.ListForksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListForksRequest req = new ListForksRequest("aliquid", "tenetur") {{
                limit = 62713L;
                page = 936747L;
            }};            

            ListForksResponse res = sdk.repository.listForks(req);

            if (res.repositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectRepoTransfer

Reject a repo transfer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectRepoTransferRequest;
import org.openapis.openapi.models.operations.RejectRepoTransferResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectRepoTransferRequest req = new RejectRepoTransferRequest("vel", "in");            

            RejectRepoTransferResponse res = sdk.repository.rejectRepoTransfer(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoAddCollaboratorJson

Add a collaborator to a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoAddCollaboratorJsonRequest;
import org.openapis.openapi.models.operations.RepoAddCollaboratorJsonResponse;
import org.openapis.openapi.models.shared.AddCollaboratorOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoAddCollaboratorJsonRequest req = new RepoAddCollaboratorJsonRequest("eius", "libero", "illum") {{
                addCollaboratorOption = new AddCollaboratorOption() {{
                    permission = "soluta";
                }};;
            }};            

            RepoAddCollaboratorJsonResponse res = sdk.repository.repoAddCollaboratorJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoAddCollaboratorRaw

Add a collaborator to a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoAddCollaboratorRawRequest;
import org.openapis.openapi.models.operations.RepoAddCollaboratorRawResponse;
import org.openapis.openapi.models.shared.AddCollaboratorOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoAddCollaboratorRawRequest req = new RepoAddCollaboratorRawRequest("accusantium", "aliquam", "sapiente") {{
                requestBody = "dicta".getBytes();
            }};            

            RepoAddCollaboratorRawResponse res = sdk.repository.repoAddCollaboratorRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoAddPushMirror

add a push mirror to the repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoAddPushMirrorRequest;
import org.openapis.openapi.models.operations.RepoAddPushMirrorResponse;
import org.openapis.openapi.models.shared.CreatePushMirrorOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoAddPushMirrorRequest req = new RepoAddPushMirrorRequest("ullam", "reprehenderit") {{
                createPushMirrorOption = new CreatePushMirrorOption() {{
                    interval = "ullam";
                    remoteAddress = "nisi";
                    remotePassword = "aut";
                    remoteUsername = "voluptatum";
                    syncOnCommit = false;
                }};;
            }};            

            RepoAddPushMirrorResponse res = sdk.repository.repoAddPushMirror(req);

            if (res.pushMirror != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoAddTeam

Add a team to a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoAddTeamRequest;
import org.openapis.openapi.models.operations.RepoAddTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoAddTeamRequest req = new RepoAddTeamRequest("qui", "quibusdam", "ex");            

            RepoAddTeamResponse res = sdk.repository.repoAddTeam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoAddTopic

Add a topic to a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoAddTopicRequest;
import org.openapis.openapi.models.operations.RepoAddTopicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoAddTopicRequest req = new RepoAddTopicRequest("deleniti", "itaque", "dolorum");            

            RepoAddTopicResponse res = sdk.repository.repoAddTopic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoApplyDiffPatch

Apply diff patch to repository

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoApplyDiffPatchRequest;
import org.openapis.openapi.models.operations.RepoApplyDiffPatchResponse;
import org.openapis.openapi.models.shared.CommitDateOptions;
import org.openapis.openapi.models.shared.Identity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFileOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoApplyDiffPatchRequest req = new RepoApplyDiffPatchRequest(                new UpdateFileOptions("architecto", "omnis") {{
                                author = new Identity() {{
                                    email = "Ayden45@hotmail.com";
                                    name = "Joann Bogan";
                                }};;
                                branch = "iste";
                                committer = new Identity() {{
                                    email = "Alexanne51@hotmail.com";
                                    name = "Iris Bernhard";
                                }};;
                                dates = new CommitDateOptions() {{
                                    author = OffsetDateTime.parse("2022-10-12T06:37:48.702Z");
                                    committer = OffsetDateTime.parse("2022-06-30T04:05:24.454Z");
                                }};;
                                fromPath = "impedit";
                                message = "explicabo";
                                newBranch = "voluptas";
                                signoff = false;
                            }};, "aut", "dignissimos");            

            RepoApplyDiffPatchResponse res = sdk.repository.repoApplyDiffPatch(req);

            if (res.fileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCancelScheduledAutoMerge

Cancel the scheduled auto merge for the given pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCancelScheduledAutoMergeRequest;
import org.openapis.openapi.models.operations.RepoCancelScheduledAutoMergeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCancelScheduledAutoMergeRequest req = new RepoCancelScheduledAutoMergeRequest(115484L, "maiores", "natus");            

            RepoCancelScheduledAutoMergeResponse res = sdk.repository.repoCancelScheduledAutoMerge(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCheckCollaborator

Check if a user is a collaborator of a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCheckCollaboratorRequest;
import org.openapis.openapi.models.operations.RepoCheckCollaboratorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCheckCollaboratorRequest req = new RepoCheckCollaboratorRequest("velit", "voluptatibus", "voluptas");            

            RepoCheckCollaboratorResponse res = sdk.repository.repoCheckCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCheckTeam

Check if a team is assigned to a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCheckTeamRequest;
import org.openapis.openapi.models.operations.RepoCheckTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCheckTeamRequest req = new RepoCheckTeamRequest("asperiores", "aperiam", "ea");            

            RepoCheckTeamResponse res = sdk.repository.repoCheckTeam(req);

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateBranch

Create a branch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateBranchRequest;
import org.openapis.openapi.models.operations.RepoCreateBranchResponse;
import org.openapis.openapi.models.shared.CreateBranchRepoOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateBranchRequest req = new RepoCreateBranchRequest("quaerat", "consequuntur") {{
                createBranchRepoOption = new CreateBranchRepoOption("repellendus") {{
                    oldBranchName = "officia";
                }};;
            }};            

            RepoCreateBranchResponse res = sdk.repository.repoCreateBranch(req);

            if (res.branch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateBranchProtection

Create a branch protections for a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateBranchProtectionRequest;
import org.openapis.openapi.models.operations.RepoCreateBranchProtectionResponse;
import org.openapis.openapi.models.shared.CreateBranchProtectionOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateBranchProtectionRequest req = new RepoCreateBranchProtectionRequest("maxime", "dignissimos") {{
                createBranchProtectionOption = new CreateBranchProtectionOption() {{
                    approvalsWhitelistTeams = new String[]{{
                        add("asperiores"),
                        add("nemo"),
                        add("quae"),
                    }};
                    approvalsWhitelistUsername = new String[]{{
                        add("porro"),
                        add("quod"),
                    }};
                    blockOnOfficialReviewRequests = false;
                    blockOnOutdatedBranch = false;
                    blockOnRejectedReviews = false;
                    branchName = "labore";
                    dismissStaleApprovals = false;
                    enableApprovalsWhitelist = false;
                    enableMergeWhitelist = false;
                    enablePush = false;
                    enablePushWhitelist = false;
                    enableStatusCheck = false;
                    mergeWhitelistTeams = new String[]{{
                        add("adipisci"),
                    }};
                    mergeWhitelistUsernames = new String[]{{
                        add("id"),
                        add("suscipit"),
                        add("velit"),
                    }};
                    protectedFilePatterns = "culpa";
                    pushWhitelistDeployKeys = false;
                    pushWhitelistTeams = new String[]{{
                        add("recusandae"),
                        add("totam"),
                        add("fugiat"),
                    }};
                    pushWhitelistUsernames = new String[]{{
                        add("ducimus"),
                        add("quos"),
                    }};
                    requireSignedCommits = false;
                    requiredApprovals = 427834L;
                    ruleName = "labore";
                    statusCheckContexts = new String[]{{
                        add("facilis"),
                        add("cum"),
                        add("commodi"),
                        add("in"),
                    }};
                    unprotectedFilePatterns = "corporis";
                }};;
            }};            

            RepoCreateBranchProtectionResponse res = sdk.repository.repoCreateBranchProtection(req);

            if (res.branchProtection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateFile

Create a file in a repository

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateFileRequest;
import org.openapis.openapi.models.operations.RepoCreateFileResponse;
import org.openapis.openapi.models.shared.CommitDateOptions;
import org.openapis.openapi.models.shared.CreateFileOptions;
import org.openapis.openapi.models.shared.Identity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateFileRequest req = new RepoCreateFileRequest(                new CreateFileOptions("reiciendis") {{
                                author = new Identity() {{
                                    email = "Francisco.Walsh@hotmail.com";
                                    name = "Glenn Kirlin";
                                }};;
                                branch = "facere";
                                committer = new Identity() {{
                                    email = "Winona_Homenick90@gmail.com";
                                    name = "Clifford Cartwright";
                                }};;
                                dates = new CommitDateOptions() {{
                                    author = OffsetDateTime.parse("2022-10-09T16:24:37.905Z");
                                    committer = OffsetDateTime.parse("2022-07-06T07:53:53.511Z");
                                }};;
                                message = "a";
                                newBranch = "debitis";
                                signoff = false;
                            }};, "consectetur", "corporis", "harum");            

            RepoCreateFileResponse res = sdk.repository.repoCreateFile(req);

            if (res.fileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateHook

Create a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateHookRequest;
import org.openapis.openapi.models.operations.RepoCreateHookResponse;
import org.openapis.openapi.models.shared.CreateHookOption;
import org.openapis.openapi.models.shared.CreateHookOptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateHookRequest req = new RepoCreateHookRequest("laboriosam", "ipsa") {{
                createHookOption = new CreateHookOption(                new java.util.HashMap<String, String>() {{
                                    put("libero", "vitae");
                                    put("accusamus", "similique");
                                    put("tempora", "aspernatur");
                                    put("voluptas", "voluptas");
                                }}, CreateHookOptionTypeEnum.GOGS) {{
                    active = false;
                    authorizationHeader = "minima";
                    branchFilter = "nobis";
                    events = new String[]{{
                        add("adipisci"),
                        add("minus"),
                        add("dolores"),
                    }};
                }};;
            }};            

            RepoCreateHookResponse res = sdk.repository.repoCreateHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateKey

Add a key to a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateKeyRequest;
import org.openapis.openapi.models.operations.RepoCreateKeyResponse;
import org.openapis.openapi.models.shared.CreateKeyOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateKeyRequest req = new RepoCreateKeyRequest("blanditiis", "in") {{
                createKeyOption = new CreateKeyOption("dolore", "aliquam") {{
                    readOnly = false;
                }};;
            }};            

            RepoCreateKeyResponse res = sdk.repository.repoCreateKey(req);

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreatePullRequest

Create a pull request

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreatePullRequestRequest;
import org.openapis.openapi.models.operations.RepoCreatePullRequestResponse;
import org.openapis.openapi.models.shared.CreatePullRequestOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreatePullRequestRequest req = new RepoCreatePullRequestRequest("officiis", "temporibus") {{
                createPullRequestOption = new CreatePullRequestOption() {{
                    assignee = "ullam";
                    assignees = new String[]{{
                        add("cum"),
                    }};
                    base = "blanditiis";
                    body = "quas";
                    dueDate = OffsetDateTime.parse("2022-05-25T08:06:51.452Z");
                    head = "culpa";
                    labels = new Long[]{{
                        add(867290L),
                        add(519643L),
                        add(940210L),
                    }};
                    milestone = 348783L;
                    title = "Miss";
                }};;
            }};            

            RepoCreatePullRequestResponse res = sdk.repository.repoCreatePullRequest(req);

            if (res.pullRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreatePullReviewRequestsJson

create review requests for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreatePullReviewRequestsJsonRequest;
import org.openapis.openapi.models.operations.RepoCreatePullReviewRequestsJsonResponse;
import org.openapis.openapi.models.shared.PullReviewRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreatePullReviewRequestsJsonRequest req = new RepoCreatePullReviewRequestsJsonRequest(                new PullReviewRequestOptions() {{
                                reviewers = new String[]{{
                                    add("rerum"),
                                }};
                                teamReviewers = new String[]{{
                                    add("reiciendis"),
                                }};
                            }};, 131852L, "asperiores", "facilis");            

            RepoCreatePullReviewRequestsJsonResponse res = sdk.repository.repoCreatePullReviewRequestsJson(req);

            if (res.pullReviews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreatePullReviewRequestsRaw

create review requests for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreatePullReviewRequestsRawRequest;
import org.openapis.openapi.models.operations.RepoCreatePullReviewRequestsRawResponse;
import org.openapis.openapi.models.shared.PullReviewRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreatePullReviewRequestsRawRequest req = new RepoCreatePullReviewRequestsRawRequest("voluptate".getBytes(), 709072L, "ab", "iste");            

            RepoCreatePullReviewRequestsRawResponse res = sdk.repository.repoCreatePullReviewRequestsRaw(req);

            if (res.pullReviews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreatePullReviewJson

Create a review to an pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreatePullReviewJsonRequest;
import org.openapis.openapi.models.operations.RepoCreatePullReviewJsonResponse;
import org.openapis.openapi.models.shared.CreatePullReviewComment;
import org.openapis.openapi.models.shared.CreatePullReviewOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreatePullReviewJsonRequest req = new RepoCreatePullReviewJsonRequest(                new CreatePullReviewOptions() {{
                                body = "dolore";
                                comments = new org.openapis.openapi.models.shared.CreatePullReviewComment[]{{
                                    add(new CreatePullReviewComment() {{
                                        body = "sed";
                                        newPosition = 447516L;
                                        oldPosition = 417486L;
                                        path = "quidem";
                                    }}),
                                    add(new CreatePullReviewComment() {{
                                        body = "explicabo";
                                        newPosition = 378326L;
                                        oldPosition = 604118L;
                                        path = "architecto";
                                    }}),
                                    add(new CreatePullReviewComment() {{
                                        body = "suscipit";
                                        newPosition = 960257L;
                                        oldPosition = 895386L;
                                        path = "illo";
                                    }}),
                                }};
                                commitId = "reiciendis";
                                event = "perferendis";
                            }};, 546885L, "maiores", "incidunt");            

            RepoCreatePullReviewJsonResponse res = sdk.repository.repoCreatePullReviewJson(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreatePullReviewRaw

Create a review to an pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreatePullReviewRawRequest;
import org.openapis.openapi.models.operations.RepoCreatePullReviewRawResponse;
import org.openapis.openapi.models.shared.CreatePullReviewComment;
import org.openapis.openapi.models.shared.CreatePullReviewOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreatePullReviewRawRequest req = new RepoCreatePullReviewRawRequest("sed".getBytes(), 592231L, "eius", "necessitatibus");            

            RepoCreatePullReviewRawResponse res = sdk.repository.repoCreatePullReviewRaw(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateRelease

Create a release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateReleaseRequest;
import org.openapis.openapi.models.operations.RepoCreateReleaseResponse;
import org.openapis.openapi.models.shared.CreateReleaseOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateReleaseRequest req = new RepoCreateReleaseRequest("ipsum", "ea") {{
                createReleaseOption = new CreateReleaseOption("occaecati") {{
                    body = "quos";
                    draft = false;
                    name = "Eddie Goodwin";
                    prerelease = false;
                    targetCommitish = "ex";
                }};;
            }};            

            RepoCreateReleaseResponse res = sdk.repository.repoCreateRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateReleaseAttachment

Create a release attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateReleaseAttachmentRequest;
import org.openapis.openapi.models.operations.RepoCreateReleaseAttachmentRequestBody;
import org.openapis.openapi.models.operations.RepoCreateReleaseAttachmentRequestBodyAttachment;
import org.openapis.openapi.models.operations.RepoCreateReleaseAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateReleaseAttachmentRequest req = new RepoCreateReleaseAttachmentRequest(                new RepoCreateReleaseAttachmentRequestBody(                new RepoCreateReleaseAttachmentRequestBodyAttachment("sit", "non".getBytes()););, 888044L, "praesentium", "facilis") {{
                name = "Amber Hintz";
            }};            

            RepoCreateReleaseAttachmentResponse res = sdk.repository.repoCreateReleaseAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateStatusJson

Create a commit status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateStatusJsonRequest;
import org.openapis.openapi.models.operations.RepoCreateStatusJsonResponse;
import org.openapis.openapi.models.shared.CreateStatusOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateStatusJsonRequest req = new RepoCreateStatusJsonRequest("sit", "nobis", "error") {{
                createStatusOption = new CreateStatusOption() {{
                    context = "veniam";
                    description = "minima";
                    state = "recusandae";
                    targetUrl = "reiciendis";
                }};;
            }};            

            RepoCreateStatusJsonResponse res = sdk.repository.repoCreateStatusJson(req);

            if (res.commitStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateStatusRaw

Create a commit status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateStatusRawRequest;
import org.openapis.openapi.models.operations.RepoCreateStatusRawResponse;
import org.openapis.openapi.models.shared.CreateStatusOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateStatusRawRequest req = new RepoCreateStatusRawRequest("nulla", "magni", "aperiam") {{
                requestBody = "saepe".getBytes();
            }};            

            RepoCreateStatusRawResponse res = sdk.repository.repoCreateStatusRaw(req);

            if (res.commitStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateTagJson

Create a new git tag in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateTagJsonRequest;
import org.openapis.openapi.models.operations.RepoCreateTagJsonResponse;
import org.openapis.openapi.models.shared.CreateTagOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateTagJsonRequest req = new RepoCreateTagJsonRequest("numquam", "veniam") {{
                createTagOption = new CreateTagOption("in") {{
                    message = "officiis";
                    target = "beatae";
                }};;
            }};            

            RepoCreateTagJsonResponse res = sdk.repository.repoCreateTagJson(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateTagRaw

Create a new git tag in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateTagRawRequest;
import org.openapis.openapi.models.operations.RepoCreateTagRawResponse;
import org.openapis.openapi.models.shared.CreateTagOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateTagRawRequest req = new RepoCreateTagRawRequest("laudantium", "exercitationem") {{
                requestBody = "praesentium".getBytes();
            }};            

            RepoCreateTagRawResponse res = sdk.repository.repoCreateTagRaw(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoCreateWikiPage

Create a wiki page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoCreateWikiPageRequest;
import org.openapis.openapi.models.operations.RepoCreateWikiPageResponse;
import org.openapis.openapi.models.shared.CreateWikiPageOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoCreateWikiPageRequest req = new RepoCreateWikiPageRequest("cum", "laboriosam") {{
                createWikiPageOptions = new CreateWikiPageOptions() {{
                    contentBase64 = "dolorum";
                    message = "voluptatum";
                    title = "Miss";
                }};;
            }};            

            RepoCreateWikiPageResponse res = sdk.repository.repoCreateWikiPage(req);

            if (res.wikiPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDelete

Delete a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteRequest;
import org.openapis.openapi.models.operations.RepoDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteRequest req = new RepoDeleteRequest("hic", "expedita");            

            RepoDeleteResponse res = sdk.repository.repoDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteBranch

Delete a specific branch from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteBranchRequest;
import org.openapis.openapi.models.operations.RepoDeleteBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteBranchRequest req = new RepoDeleteBranchRequest("debitis", "neque", "dolorum");            

            RepoDeleteBranchResponse res = sdk.repository.repoDeleteBranch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteBranchProtection

Delete a specific branch protection for the repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteBranchProtectionRequest;
import org.openapis.openapi.models.operations.RepoDeleteBranchProtectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteBranchProtectionRequest req = new RepoDeleteBranchProtectionRequest("nostrum", "officia", "dolorum");            

            RepoDeleteBranchProtectionResponse res = sdk.repository.repoDeleteBranchProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteCollaborator

Delete a collaborator from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteCollaboratorRequest;
import org.openapis.openapi.models.operations.RepoDeleteCollaboratorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteCollaboratorRequest req = new RepoDeleteCollaboratorRequest("corrupti", "accusamus", "tempora");            

            RepoDeleteCollaboratorResponse res = sdk.repository.repoDeleteCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteFile

Delete a file in a repository

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteFileRequest;
import org.openapis.openapi.models.operations.RepoDeleteFileResponse;
import org.openapis.openapi.models.shared.CommitDateOptions;
import org.openapis.openapi.models.shared.DeleteFileOptions;
import org.openapis.openapi.models.shared.Identity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteFileRequest req = new RepoDeleteFileRequest(                new DeleteFileOptions("atque") {{
                                author = new Identity() {{
                                    email = "Easter63@gmail.com";
                                    name = "Miguel Adams";
                                }};;
                                branch = "sit";
                                committer = new Identity() {{
                                    email = "Keara.Walker@yahoo.com";
                                    name = "Ms. Ruben Cremin";
                                }};;
                                dates = new CommitDateOptions() {{
                                    author = OffsetDateTime.parse("2021-02-18T15:46:03.371Z");
                                    committer = OffsetDateTime.parse("2022-09-21T03:21:52.611Z");
                                }};;
                                message = "reiciendis";
                                newBranch = "dolorem";
                                signoff = false;
                            }};, "harum", "dicta", "architecto");            

            RepoDeleteFileResponse res = sdk.repository.repoDeleteFile(req);

            if (res.fileDeleteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteGitHook

Delete a Git hook in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteGitHookRequest;
import org.openapis.openapi.models.operations.RepoDeleteGitHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteGitHookRequest req = new RepoDeleteGitHookRequest("occaecati", "labore", "quidem");            

            RepoDeleteGitHookResponse res = sdk.repository.repoDeleteGitHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteHook

Delete a hook in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteHookRequest;
import org.openapis.openapi.models.operations.RepoDeleteHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteHookRequest req = new RepoDeleteHookRequest(539074L, "laborum", "nam");            

            RepoDeleteHookResponse res = sdk.repository.repoDeleteHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteKey

Delete a key from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteKeyRequest;
import org.openapis.openapi.models.operations.RepoDeleteKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteKeyRequest req = new RepoDeleteKeyRequest(948861L, "laboriosam", "alias");            

            RepoDeleteKeyResponse res = sdk.repository.repoDeleteKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeletePullReview

Delete a specific review from a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeletePullReviewRequest;
import org.openapis.openapi.models.operations.RepoDeletePullReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeletePullReviewRequest req = new RepoDeletePullReviewRequest(227084L, 647197L, "voluptate", "unde");            

            RepoDeletePullReviewResponse res = sdk.repository.repoDeletePullReview(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeletePullReviewRequestsJson

cancel review requests for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeletePullReviewRequestsJsonRequest;
import org.openapis.openapi.models.operations.RepoDeletePullReviewRequestsJsonResponse;
import org.openapis.openapi.models.shared.PullReviewRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeletePullReviewRequestsJsonRequest req = new RepoDeletePullReviewRequestsJsonRequest(                new PullReviewRequestOptions() {{
                                reviewers = new String[]{{
                                    add("provident"),
                                    add("repellendus"),
                                    add("delectus"),
                                    add("voluptates"),
                                }};
                                teamReviewers = new String[]{{
                                    add("est"),
                                }};
                            }};, 696483L, "reprehenderit", "facere");            

            RepoDeletePullReviewRequestsJsonResponse res = sdk.repository.repoDeletePullReviewRequestsJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeletePullReviewRequestsRaw

cancel review requests for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeletePullReviewRequestsRawRequest;
import org.openapis.openapi.models.operations.RepoDeletePullReviewRequestsRawResponse;
import org.openapis.openapi.models.shared.PullReviewRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeletePullReviewRequestsRawRequest req = new RepoDeletePullReviewRequestsRawRequest("fuga".getBytes(), 509807L, "mollitia", "veniam");            

            RepoDeletePullReviewRequestsRawResponse res = sdk.repository.repoDeletePullReviewRequestsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeletePushMirror

deletes a push mirror from a repository by remoteName

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeletePushMirrorRequest;
import org.openapis.openapi.models.operations.RepoDeletePushMirrorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeletePushMirrorRequest req = new RepoDeletePushMirrorRequest("voluptatem", "quisquam", "repudiandae");            

            RepoDeletePushMirrorResponse res = sdk.repository.repoDeletePushMirror(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteRelease

Delete a release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteReleaseRequest;
import org.openapis.openapi.models.operations.RepoDeleteReleaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteReleaseRequest req = new RepoDeleteReleaseRequest(97243L, "atque", "reprehenderit");            

            RepoDeleteReleaseResponse res = sdk.repository.repoDeleteRelease(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteReleaseAttachment

Delete a release attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteReleaseAttachmentRequest;
import org.openapis.openapi.models.operations.RepoDeleteReleaseAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteReleaseAttachmentRequest req = new RepoDeleteReleaseAttachmentRequest(991142L, 519952L, "suscipit", "quidem");            

            RepoDeleteReleaseAttachmentResponse res = sdk.repository.repoDeleteReleaseAttachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteReleaseByTag

Delete a release by tag name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteReleaseByTagRequest;
import org.openapis.openapi.models.operations.RepoDeleteReleaseByTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteReleaseByTagRequest req = new RepoDeleteReleaseByTagRequest("maxime", "et", "esse");            

            RepoDeleteReleaseByTagResponse res = sdk.repository.repoDeleteReleaseByTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteTag

Delete a repository's tag by name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteTagRequest;
import org.openapis.openapi.models.operations.RepoDeleteTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteTagRequest req = new RepoDeleteTagRequest("amet", "assumenda", "ea");            

            RepoDeleteTagResponse res = sdk.repository.repoDeleteTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteTeam

Delete a team from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteTeamRequest;
import org.openapis.openapi.models.operations.RepoDeleteTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteTeamRequest req = new RepoDeleteTeamRequest("atque", "error", "officiis");            

            RepoDeleteTeamResponse res = sdk.repository.repoDeleteTeam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteTopic

Delete a topic from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteTopicRequest;
import org.openapis.openapi.models.operations.RepoDeleteTopicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteTopicRequest req = new RepoDeleteTopicRequest("officiis", "accusamus", "natus");            

            RepoDeleteTopicResponse res = sdk.repository.repoDeleteTopic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDeleteWikiPage

Delete a wiki page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDeleteWikiPageRequest;
import org.openapis.openapi.models.operations.RepoDeleteWikiPageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDeleteWikiPageRequest req = new RepoDeleteWikiPageRequest("minima", "aspernatur", "ex");            

            RepoDeleteWikiPageResponse res = sdk.repository.repoDeleteWikiPage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDismissPullReviewJson

Dismiss a review for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDismissPullReviewJsonRequest;
import org.openapis.openapi.models.operations.RepoDismissPullReviewJsonResponse;
import org.openapis.openapi.models.shared.DismissPullReviewOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDismissPullReviewJsonRequest req = new RepoDismissPullReviewJsonRequest(                new DismissPullReviewOptions() {{
                                message = "maiores";
                                priors = false;
                            }};, 544647L, 871786L, "error", "blanditiis");            

            RepoDismissPullReviewJsonResponse res = sdk.repository.repoDismissPullReviewJson(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDismissPullReviewRaw

Dismiss a review for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDismissPullReviewRawRequest;
import org.openapis.openapi.models.operations.RepoDismissPullReviewRawResponse;
import org.openapis.openapi.models.shared.DismissPullReviewOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDismissPullReviewRawRequest req = new RepoDismissPullReviewRawRequest("suscipit".getBytes(), 922348L, 542129L, "atque", "sunt");            

            RepoDismissPullReviewRawResponse res = sdk.repository.repoDismissPullReviewRaw(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDownloadCommitDiffOrPatch

Get a commit's diff or patch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDownloadCommitDiffOrPatchDiffTypeEnum;
import org.openapis.openapi.models.operations.RepoDownloadCommitDiffOrPatchRequest;
import org.openapis.openapi.models.operations.RepoDownloadCommitDiffOrPatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDownloadCommitDiffOrPatchRequest req = new RepoDownloadCommitDiffOrPatchRequest(RepoDownloadCommitDiffOrPatchDiffTypeEnum.PATCH, "dolorum", "repellendus", "labore");            

            RepoDownloadCommitDiffOrPatchResponse res = sdk.repository.repoDownloadCommitDiffOrPatch(req);

            if (res.repoDownloadCommitDiffOrPatch200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoDownloadPullDiffOrPatch

Get a pull request diff or patch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoDownloadPullDiffOrPatchDiffTypeEnum;
import org.openapis.openapi.models.operations.RepoDownloadPullDiffOrPatchRequest;
import org.openapis.openapi.models.operations.RepoDownloadPullDiffOrPatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoDownloadPullDiffOrPatchRequest req = new RepoDownloadPullDiffOrPatchRequest(RepoDownloadPullDiffOrPatchDiffTypeEnum.PATCH, 42976L, "repudiandae", "dicta") {{
                binary = false;
            }};            

            RepoDownloadPullDiffOrPatchResponse res = sdk.repository.repoDownloadPullDiffOrPatch(req);

            if (res.repoDownloadPullDiffOrPatch200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditBranchProtection

Edit a branch protections for a repository. Only fields that are set will be changed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditBranchProtectionRequest;
import org.openapis.openapi.models.operations.RepoEditBranchProtectionResponse;
import org.openapis.openapi.models.shared.EditBranchProtectionOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditBranchProtectionRequest req = new RepoEditBranchProtectionRequest("accusantium", "beatae", "dolores") {{
                editBranchProtectionOption = new EditBranchProtectionOption() {{
                    approvalsWhitelistTeams = new String[]{{
                        add("laboriosam"),
                        add("velit"),
                    }};
                    approvalsWhitelistUsername = new String[]{{
                        add("molestias"),
                        add("magnam"),
                        add("saepe"),
                        add("consequuntur"),
                    }};
                    blockOnOfficialReviewRequests = false;
                    blockOnOutdatedBranch = false;
                    blockOnRejectedReviews = false;
                    dismissStaleApprovals = false;
                    enableApprovalsWhitelist = false;
                    enableMergeWhitelist = false;
                    enablePush = false;
                    enablePushWhitelist = false;
                    enableStatusCheck = false;
                    mergeWhitelistTeams = new String[]{{
                        add("officiis"),
                        add("perspiciatis"),
                        add("in"),
                    }};
                    mergeWhitelistUsernames = new String[]{{
                        add("eveniet"),
                    }};
                    protectedFilePatterns = "occaecati";
                    pushWhitelistDeployKeys = false;
                    pushWhitelistTeams = new String[]{{
                        add("fugit"),
                    }};
                    pushWhitelistUsernames = new String[]{{
                        add("quis"),
                        add("reprehenderit"),
                        add("error"),
                    }};
                    requireSignedCommits = false;
                    requiredApprovals = 76486L;
                    statusCheckContexts = new String[]{{
                        add("quidem"),
                        add("eveniet"),
                    }};
                    unprotectedFilePatterns = "non";
                }};;
            }};            

            RepoEditBranchProtectionResponse res = sdk.repository.repoEditBranchProtection(req);

            if (res.branchProtection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditGitHookJson

Edit a Git hook in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditGitHookJsonRequest;
import org.openapis.openapi.models.operations.RepoEditGitHookJsonResponse;
import org.openapis.openapi.models.shared.EditGitHookOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditGitHookJsonRequest req = new RepoEditGitHookJsonRequest("vero", "doloremque", "iure") {{
                editGitHookOption = new EditGitHookOption() {{
                    content = "ipsa";
                }};;
            }};            

            RepoEditGitHookJsonResponse res = sdk.repository.repoEditGitHookJson(req);

            if (res.gitHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditGitHookRaw

Edit a Git hook in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditGitHookRawRequest;
import org.openapis.openapi.models.operations.RepoEditGitHookRawResponse;
import org.openapis.openapi.models.shared.EditGitHookOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditGitHookRawRequest req = new RepoEditGitHookRawRequest("totam", "quae", "molestiae") {{
                requestBody = "eveniet".getBytes();
            }};            

            RepoEditGitHookRawResponse res = sdk.repository.repoEditGitHookRaw(req);

            if (res.gitHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditHookJson

Edit a hook in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditHookJsonRequest;
import org.openapis.openapi.models.operations.RepoEditHookJsonResponse;
import org.openapis.openapi.models.shared.EditHookOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditHookJsonRequest req = new RepoEditHookJsonRequest(184362L, "cum", "iure") {{
                editHookOption = new EditHookOption() {{
                    active = false;
                    authorizationHeader = "necessitatibus";
                    branchFilter = "ratione";
                    config = new java.util.HashMap<String, String>() {{
                        put("distinctio", "voluptatum");
                        put("rem", "aliquam");
                        put("ad", "repellat");
                    }};
                    events = new String[]{{
                        add("corporis"),
                    }};
                }};;
            }};            

            RepoEditHookJsonResponse res = sdk.repository.repoEditHookJson(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditHookRaw

Edit a hook in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditHookRawRequest;
import org.openapis.openapi.models.operations.RepoEditHookRawResponse;
import org.openapis.openapi.models.shared.EditHookOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditHookRawRequest req = new RepoEditHookRawRequest(597303L, "nihil", "mollitia") {{
                requestBody = "voluptas".getBytes();
            }};            

            RepoEditHookRawResponse res = sdk.repository.repoEditHookRaw(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditPullRequest

Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditPullRequestRequest;
import org.openapis.openapi.models.operations.RepoEditPullRequestResponse;
import org.openapis.openapi.models.shared.EditPullRequestOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditPullRequestRequest req = new RepoEditPullRequestRequest(5189L, "maiores", "reiciendis") {{
                editPullRequestOption = new EditPullRequestOption() {{
                    allowMaintainerEdit = false;
                    assignee = "dolores";
                    assignees = new String[]{{
                        add("minima"),
                        add("dolore"),
                        add("dolorum"),
                    }};
                    base = "nesciunt";
                    body = "quae";
                    dueDate = OffsetDateTime.parse("2021-03-07T01:29:10.520Z");
                    labels = new Long[]{{
                        add(477646L),
                        add(403218L),
                    }};
                    milestone = 284000L;
                    state = "culpa";
                    title = "Mrs.";
                    unsetDueDate = false;
                }};;
            }};            

            RepoEditPullRequestResponse res = sdk.repository.repoEditPullRequest(req);

            if (res.pullRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditRelease

Update a release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditReleaseRequest;
import org.openapis.openapi.models.operations.RepoEditReleaseResponse;
import org.openapis.openapi.models.shared.EditReleaseOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditReleaseRequest req = new RepoEditReleaseRequest(890653L, "laudantium", "eum") {{
                editReleaseOption = new EditReleaseOption() {{
                    body = "nemo";
                    draft = false;
                    name = "Cory Medhurst";
                    prerelease = false;
                    tagName = "reiciendis";
                    targetCommitish = "provident";
                }};;
            }};            

            RepoEditReleaseResponse res = sdk.repository.repoEditRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditReleaseAttachment

Edit a release attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditReleaseAttachmentRequest;
import org.openapis.openapi.models.operations.RepoEditReleaseAttachmentResponse;
import org.openapis.openapi.models.shared.EditAttachmentOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditReleaseAttachmentRequest req = new RepoEditReleaseAttachmentRequest(133439L, 354506L, "quasi", "animi") {{
                editAttachmentOptions = new EditAttachmentOptions() {{
                    name = "Angie McLaughlin";
                }};;
            }};            

            RepoEditReleaseAttachmentResponse res = sdk.repository.repoEditReleaseAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditWikiPage

Edit a wiki page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditWikiPageRequest;
import org.openapis.openapi.models.operations.RepoEditWikiPageResponse;
import org.openapis.openapi.models.shared.CreateWikiPageOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditWikiPageRequest req = new RepoEditWikiPageRequest("ex", "aliquid", "accusantium") {{
                createWikiPageOptions = new CreateWikiPageOptions() {{
                    contentBase64 = "repellat";
                    message = "doloribus";
                    title = "Mrs.";
                }};;
            }};            

            RepoEditWikiPageResponse res = sdk.repository.repoEditWikiPage(req);

            if (res.wikiPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditJson

Edit a repository's properties. Only fields that are set will be changed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditJsonRequest;
import org.openapis.openapi.models.operations.RepoEditJsonResponse;
import org.openapis.openapi.models.shared.EditRepoOption;
import org.openapis.openapi.models.shared.ExternalTracker;
import org.openapis.openapi.models.shared.ExternalWiki;
import org.openapis.openapi.models.shared.InternalTracker;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditJsonRequest req = new RepoEditJsonRequest("in", "nam") {{
                editRepoOption = new EditRepoOption() {{
                    allowManualMerge = false;
                    allowMergeCommits = false;
                    allowRebase = false;
                    allowRebaseExplicit = false;
                    allowRebaseUpdate = false;
                    allowSquashMerge = false;
                    archived = false;
                    autodetectManualMerge = false;
                    defaultAllowMaintainerEdit = false;
                    defaultBranch = "earum";
                    defaultDeleteBranchAfterMerge = false;
                    defaultMergeStyle = "officia";
                    description = "laborum";
                    enablePrune = false;
                    externalTracker = new ExternalTracker() {{
                        externalTrackerFormat = "placeat";
                        externalTrackerRegexpPattern = "modi";
                        externalTrackerStyle = "voluptatibus";
                        externalTrackerUrl = "molestias";
                    }};;
                    externalWiki = new ExternalWiki() {{
                        externalWikiUrl = "officiis";
                    }};;
                    hasActions = false;
                    hasIssues = false;
                    hasPackages = false;
                    hasProjects = false;
                    hasPullRequests = false;
                    hasReleases = false;
                    hasWiki = false;
                    ignoreWhitespaceConflicts = false;
                    internalTracker = new InternalTracker() {{
                        allowOnlyContributorsToTrackTime = false;
                        enableIssueDependencies = false;
                        enableTimeTracker = false;
                    }};;
                    mirrorInterval = "sapiente";
                    name = "Terry Price";
                    private_ = false;
                    template = false;
                    website = "inventore";
                }};;
            }};            

            RepoEditJsonResponse res = sdk.repository.repoEditJson(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoEditRaw

Edit a repository's properties. Only fields that are set will be changed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoEditRawRequest;
import org.openapis.openapi.models.operations.RepoEditRawResponse;
import org.openapis.openapi.models.shared.EditRepoOption;
import org.openapis.openapi.models.shared.ExternalTracker;
import org.openapis.openapi.models.shared.ExternalWiki;
import org.openapis.openapi.models.shared.InternalTracker;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoEditRawRequest req = new RepoEditRawRequest("fugit", "cumque") {{
                requestBody = "quae".getBytes();
            }};            

            RepoEditRawResponse res = sdk.repository.repoEditRaw(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGet

Get a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetRequest;
import org.openapis.openapi.models.operations.RepoGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetRequest req = new RepoGetRequest("perferendis", "velit");            

            RepoGetResponse res = sdk.repository.repoGet(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetAllCommits

Get a list of all commits from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetAllCommitsRequest;
import org.openapis.openapi.models.operations.RepoGetAllCommitsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetAllCommitsRequest req = new RepoGetAllCommitsRequest("aspernatur", "eum") {{
                limit = 260628L;
                page = 521996L;
                path = "at";
                sha = "impedit";
                stat = false;
            }};            

            RepoGetAllCommitsResponse res = sdk.repository.repoGetAllCommits(req);

            if (res.commits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetArchive

Get an archive of a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetArchiveRequest;
import org.openapis.openapi.models.operations.RepoGetArchiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetArchiveRequest req = new RepoGetArchiveRequest("eos", "sapiente", "eum");            

            RepoGetArchiveResponse res = sdk.repository.repoGetArchive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetAssignees

Return all users that have write access and can be assigned to issues

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetAssigneesRequest;
import org.openapis.openapi.models.operations.RepoGetAssigneesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetAssigneesRequest req = new RepoGetAssigneesRequest("dicta", "minima");            

            RepoGetAssigneesResponse res = sdk.repository.repoGetAssignees(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetBranch

Retrieve a specific branch from a repository, including its effective branch protection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetBranchRequest;
import org.openapis.openapi.models.operations.RepoGetBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetBranchRequest req = new RepoGetBranchRequest("beatae", "cupiditate", "provident");            

            RepoGetBranchResponse res = sdk.repository.repoGetBranch(req);

            if (res.branch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetBranchProtection

Get a specific branch protection for the repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetBranchProtectionRequest;
import org.openapis.openapi.models.operations.RepoGetBranchProtectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetBranchProtectionRequest req = new RepoGetBranchProtectionRequest("earum", "soluta", "hic");            

            RepoGetBranchProtectionResponse res = sdk.repository.repoGetBranchProtection(req);

            if (res.branchProtection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetByID

Get a repository by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetByIDRequest;
import org.openapis.openapi.models.operations.RepoGetByIDResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetByIDRequest req = new RepoGetByIDRequest(848151L);            

            RepoGetByIDResponse res = sdk.repository.repoGetByID(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetCombinedStatusByRef

Get a commit's combined status, by branch/tag/commit reference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetCombinedStatusByRefRequest;
import org.openapis.openapi.models.operations.RepoGetCombinedStatusByRefResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetCombinedStatusByRefRequest req = new RepoGetCombinedStatusByRefRequest("eaque", "earum", "perspiciatis") {{
                limit = 983427L;
                page = 891801L;
            }};            

            RepoGetCombinedStatusByRefResponse res = sdk.repository.repoGetCombinedStatusByRef(req);

            if (res.combinedStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetContents

Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetContentsRequest;
import org.openapis.openapi.models.operations.RepoGetContentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetContentsRequest req = new RepoGetContentsRequest("aliquid", "porro", "suscipit") {{
                ref = "dolorem";
            }};            

            RepoGetContentsResponse res = sdk.repository.repoGetContents(req);

            if (res.contentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetContentsList

Gets the metadata of all the entries of the root dir

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetContentsListRequest;
import org.openapis.openapi.models.operations.RepoGetContentsListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetContentsListRequest req = new RepoGetContentsListRequest("fugit", "cumque") {{
                ref = "fuga";
            }};            

            RepoGetContentsListResponse res = sdk.repository.repoGetContentsList(req);

            if (res.contentsResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetEditorConfig

Get the EditorConfig definitions of a file in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetEditorConfigRequest;
import org.openapis.openapi.models.operations.RepoGetEditorConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetEditorConfigRequest req = new RepoGetEditorConfigRequest("ratione", "animi", "necessitatibus") {{
                ref = "nulla";
            }};            

            RepoGetEditorConfigResponse res = sdk.repository.repoGetEditorConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetGitHook

Get a Git hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetGitHookRequest;
import org.openapis.openapi.models.operations.RepoGetGitHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetGitHookRequest req = new RepoGetGitHookRequest("consequatur", "quasi", "et");            

            RepoGetGitHookResponse res = sdk.repository.repoGetGitHook(req);

            if (res.gitHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetHook

Get a hook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetHookRequest;
import org.openapis.openapi.models.operations.RepoGetHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetHookRequest req = new RepoGetHookRequest(497777L, "natus", "occaecati");            

            RepoGetHookResponse res = sdk.repository.repoGetHook(req);

            if (res.hook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetIssueConfig

Returns the issue config for a repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetIssueConfigRequest;
import org.openapis.openapi.models.operations.RepoGetIssueConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetIssueConfigRequest req = new RepoGetIssueConfigRequest("suscipit", "adipisci");            

            RepoGetIssueConfigResponse res = sdk.repository.repoGetIssueConfig(req);

            if (res.issueConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetIssueTemplates

Get available issue templates for a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetIssueTemplatesRequest;
import org.openapis.openapi.models.operations.RepoGetIssueTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetIssueTemplatesRequest req = new RepoGetIssueTemplatesRequest("quasi", "magni");            

            RepoGetIssueTemplatesResponse res = sdk.repository.repoGetIssueTemplates(req);

            if (res.issueTemplates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetKey

Get a repository's key by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetKeyRequest;
import org.openapis.openapi.models.operations.RepoGetKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetKeyRequest req = new RepoGetKeyRequest(984934L, "nulla", "necessitatibus");            

            RepoGetKeyResponse res = sdk.repository.repoGetKey(req);

            if (res.deployKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetLanguages

Get languages and number of bytes of code written

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetLanguagesRequest;
import org.openapis.openapi.models.operations.RepoGetLanguagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetLanguagesRequest req = new RepoGetLanguagesRequest("ipsa", "tempora");            

            RepoGetLanguagesResponse res = sdk.repository.repoGetLanguages(req);

            if (res.repoGetLanguages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetLatestRelease

Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetLatestReleaseRequest;
import org.openapis.openapi.models.operations.RepoGetLatestReleaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetLatestReleaseRequest req = new RepoGetLatestReleaseRequest("nihil", "molestiae");            

            RepoGetLatestReleaseResponse res = sdk.repository.repoGetLatestRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetNote

Get a note corresponding to a single commit from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetNoteRequest;
import org.openapis.openapi.models.operations.RepoGetNoteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetNoteRequest req = new RepoGetNoteRequest("dicta", "iusto", "esse");            

            RepoGetNoteResponse res = sdk.repository.repoGetNote(req);

            if (res.note != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetPullRequest

Get a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetPullRequestRequest;
import org.openapis.openapi.models.operations.RepoGetPullRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetPullRequestRequest req = new RepoGetPullRequestRequest(508390L, "maiores", "reiciendis");            

            RepoGetPullRequestResponse res = sdk.repository.repoGetPullRequest(req);

            if (res.pullRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetPullRequestCommits

Get commits for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetPullRequestCommitsRequest;
import org.openapis.openapi.models.operations.RepoGetPullRequestCommitsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetPullRequestCommitsRequest req = new RepoGetPullRequestCommitsRequest(423706L, "architecto", "fugiat") {{
                limit = 39650L;
                page = 117315L;
            }};            

            RepoGetPullRequestCommitsResponse res = sdk.repository.repoGetPullRequestCommits(req);

            if (res.commits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetPullRequestFiles

Get changed files for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetPullRequestFilesRequest;
import org.openapis.openapi.models.operations.RepoGetPullRequestFilesResponse;
import org.openapis.openapi.models.operations.RepoGetPullRequestFilesWhitespaceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetPullRequestFilesRequest req = new RepoGetPullRequestFilesRequest(483706L, "tempora", "esse") {{
                limit = 403793L;
                page = 235263L;
                skipTo = "aliquid";
                whitespace = RepoGetPullRequestFilesWhitespaceEnum.IGNORE_ALL;
            }};            

            RepoGetPullRequestFilesResponse res = sdk.repository.repoGetPullRequestFiles(req);

            if (res.changedFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetPullReview

Get a specific review for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetPullReviewRequest;
import org.openapis.openapi.models.operations.RepoGetPullReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetPullReviewRequest req = new RepoGetPullReviewRequest(671384L, 123844L, "nostrum", "fugiat");            

            RepoGetPullReviewResponse res = sdk.repository.repoGetPullReview(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetPullReviewComments

Get a specific review for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetPullReviewCommentsRequest;
import org.openapis.openapi.models.operations.RepoGetPullReviewCommentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetPullReviewCommentsRequest req = new RepoGetPullReviewCommentsRequest(713767L, 399667L, "officia", "suscipit");            

            RepoGetPullReviewCommentsResponse res = sdk.repository.repoGetPullReviewComments(req);

            if (res.pullReviewComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetPushMirrorByRemoteName

Get push mirror of the repository by remoteName

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetPushMirrorByRemoteNameRequest;
import org.openapis.openapi.models.operations.RepoGetPushMirrorByRemoteNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetPushMirrorByRemoteNameRequest req = new RepoGetPushMirrorByRemoteNameRequest("aliquid", "perferendis", "eum");            

            RepoGetPushMirrorByRemoteNameResponse res = sdk.repository.repoGetPushMirrorByRemoteName(req);

            if (res.pushMirror != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetRawFile

Get a file from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetRawFileRequest;
import org.openapis.openapi.models.operations.RepoGetRawFileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetRawFileRequest req = new RepoGetRawFileRequest("voluptas", "iste", "id") {{
                ref = "ab";
            }};            

            RepoGetRawFileResponse res = sdk.repository.repoGetRawFile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetRawFileOrLFS

Get a file or it's LFS object from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetRawFileOrLFSRequest;
import org.openapis.openapi.models.operations.RepoGetRawFileOrLFSResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetRawFileOrLFSRequest req = new RepoGetRawFileOrLFSRequest("error", "possimus", "voluptates") {{
                ref = "mollitia";
            }};            

            RepoGetRawFileOrLFSResponse res = sdk.repository.repoGetRawFileOrLFS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetRelease

Get a release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetReleaseRequest;
import org.openapis.openapi.models.operations.RepoGetReleaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetReleaseRequest req = new RepoGetReleaseRequest(671794L, "libero", "ad");            

            RepoGetReleaseResponse res = sdk.repository.repoGetRelease(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetReleaseAttachment

Get a release attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetReleaseAttachmentRequest;
import org.openapis.openapi.models.operations.RepoGetReleaseAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetReleaseAttachmentRequest req = new RepoGetReleaseAttachmentRequest(536923L, 316220L, "vitae", "repellendus");            

            RepoGetReleaseAttachmentResponse res = sdk.repository.repoGetReleaseAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetReleaseByTag

Get a release by tag name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetReleaseByTagRequest;
import org.openapis.openapi.models.operations.RepoGetReleaseByTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetReleaseByTagRequest req = new RepoGetReleaseByTagRequest("ex", "quo", "ex");            

            RepoGetReleaseByTagResponse res = sdk.repository.repoGetReleaseByTag(req);

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetRepoPermissions

Get repository permissions for a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetRepoPermissionsRequest;
import org.openapis.openapi.models.operations.RepoGetRepoPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetRepoPermissionsRequest req = new RepoGetRepoPermissionsRequest("ut", "ad", "expedita");            

            RepoGetRepoPermissionsResponse res = sdk.repository.repoGetRepoPermissions(req);

            if (res.repoCollaboratorPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetReviewers

Return all users that can be requested to review in this repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetReviewersRequest;
import org.openapis.openapi.models.operations.RepoGetReviewersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetReviewersRequest req = new RepoGetReviewersRequest("voluptatem", "molestias");            

            RepoGetReviewersResponse res = sdk.repository.repoGetReviewers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetSingleCommit

Get a single commit from a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetSingleCommitRequest;
import org.openapis.openapi.models.operations.RepoGetSingleCommitResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetSingleCommitRequest req = new RepoGetSingleCommitRequest("cum", "aliquid", "beatae");            

            RepoGetSingleCommitResponse res = sdk.repository.repoGetSingleCommit(req);

            if (res.commit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetTag

Get the tag of a repository by tag name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetTagRequest;
import org.openapis.openapi.models.operations.RepoGetTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetTagRequest req = new RepoGetTagRequest("voluptatum", "omnis", "veritatis");            

            RepoGetTagResponse res = sdk.repository.repoGetTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetWikiPage

Get a wiki page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetWikiPageRequest;
import org.openapis.openapi.models.operations.RepoGetWikiPageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetWikiPageRequest req = new RepoGetWikiPageRequest("rerum", "est", "culpa");            

            RepoGetWikiPageResponse res = sdk.repository.repoGetWikiPage(req);

            if (res.wikiPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetWikiPageRevisions

Get revisions of a wiki page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetWikiPageRevisionsRequest;
import org.openapis.openapi.models.operations.RepoGetWikiPageRevisionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetWikiPageRevisionsRequest req = new RepoGetWikiPageRevisionsRequest("voluptatem", "sapiente", "officiis") {{
                page = 103298L;
            }};            

            RepoGetWikiPageRevisionsResponse res = sdk.repository.repoGetWikiPageRevisions(req);

            if (res.wikiCommitList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoGetWikiPages

Get all wiki pages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoGetWikiPagesRequest;
import org.openapis.openapi.models.operations.RepoGetWikiPagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoGetWikiPagesRequest req = new RepoGetWikiPagesRequest("fuga", "pariatur") {{
                limit = 891315L;
                page = 29190L;
            }};            

            RepoGetWikiPagesResponse res = sdk.repository.repoGetWikiPages(req);

            if (res.wikiPageMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListActivityFeeds

List a repository's activity feeds

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListActivityFeedsRequest;
import org.openapis.openapi.models.operations.RepoListActivityFeedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListActivityFeedsRequest req = new RepoListActivityFeedsRequest("alias", "deleniti") {{
                date = LocalDate.parse("2021-10-15");
                limit = 958308L;
                page = 524184L;
            }};            

            RepoListActivityFeedsResponse res = sdk.repository.repoListActivityFeeds(req);

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListAllGitRefs

Get specified ref or filtered repository's refs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListAllGitRefsRequest;
import org.openapis.openapi.models.operations.RepoListAllGitRefsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListAllGitRefsRequest req = new RepoListAllGitRefsRequest("minus", "nemo");            

            RepoListAllGitRefsResponse res = sdk.repository.repoListAllGitRefs(req);

            if (res.references != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListBranchProtection

List branch protections for a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListBranchProtectionRequest;
import org.openapis.openapi.models.operations.RepoListBranchProtectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListBranchProtectionRequest req = new RepoListBranchProtectionRequest("asperiores", "ratione");            

            RepoListBranchProtectionResponse res = sdk.repository.repoListBranchProtection(req);

            if (res.branchProtections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListBranches

List a repository's branches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListBranchesRequest;
import org.openapis.openapi.models.operations.RepoListBranchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListBranchesRequest req = new RepoListBranchesRequest("ullam", "perferendis") {{
                limit = 848341L;
                page = 518150L;
            }};            

            RepoListBranchesResponse res = sdk.repository.repoListBranches(req);

            if (res.branches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListCollaborators

List a repository's collaborators

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListCollaboratorsRequest;
import org.openapis.openapi.models.operations.RepoListCollaboratorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListCollaboratorsRequest req = new RepoListCollaboratorsRequest("impedit", "quibusdam") {{
                limit = 720528L;
                page = 373216L;
            }};            

            RepoListCollaboratorsResponse res = sdk.repository.repoListCollaborators(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListGitHooks

List the Git hooks in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListGitHooksRequest;
import org.openapis.openapi.models.operations.RepoListGitHooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListGitHooksRequest req = new RepoListGitHooksRequest("culpa", "dolor");            

            RepoListGitHooksResponse res = sdk.repository.repoListGitHooks(req);

            if (res.gitHooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListGitRefs

Get specified ref or filtered repository's refs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListGitRefsRequest;
import org.openapis.openapi.models.operations.RepoListGitRefsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListGitRefsRequest req = new RepoListGitRefsRequest("aliquam", "inventore", "deleniti");            

            RepoListGitRefsResponse res = sdk.repository.repoListGitRefs(req);

            if (res.references != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListHooks

List the hooks in a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListHooksRequest;
import org.openapis.openapi.models.operations.RepoListHooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListHooksRequest req = new RepoListHooksRequest("veritatis", "tempora") {{
                limit = 221396L;
                page = 8689L;
            }};            

            RepoListHooksResponse res = sdk.repository.repoListHooks(req);

            if (res.hooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListKeys

List a repository's keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListKeysRequest;
import org.openapis.openapi.models.operations.RepoListKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListKeysRequest req = new RepoListKeysRequest("architecto", "sit") {{
                fingerprint = "modi";
                keyId = 144286L;
                limit = 66149L;
                page = 513760L;
            }};            

            RepoListKeysResponse res = sdk.repository.repoListKeys(req);

            if (res.deployKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListPullRequests

List a repo's pull requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListPullRequestsRequest;
import org.openapis.openapi.models.operations.RepoListPullRequestsResponse;
import org.openapis.openapi.models.operations.RepoListPullRequestsSortEnum;
import org.openapis.openapi.models.operations.RepoListPullRequestsStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListPullRequestsRequest req = new RepoListPullRequestsRequest("quae", "dolor") {{
                labels = new Long[]{{
                    add(369490L),
                    add(162120L),
                    add(55107L),
                    add(559682L),
                }};
                limit = 911198L;
                milestone = 773456L;
                page = 884952L;
                sort = RepoListPullRequestsSortEnum.LEASTUPDATE;
                state = RepoListPullRequestsStateEnum.ALL;
            }};            

            RepoListPullRequestsResponse res = sdk.repository.repoListPullRequests(req);

            if (res.pullRequests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListPullReviews

List all reviews for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListPullReviewsRequest;
import org.openapis.openapi.models.operations.RepoListPullReviewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListPullReviewsRequest req = new RepoListPullReviewsRequest(153369L, "veniam", "nesciunt") {{
                limit = 712927L;
                page = 432984L;
            }};            

            RepoListPullReviewsResponse res = sdk.repository.repoListPullReviews(req);

            if (res.pullReviews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListPushMirrors

Get all push mirrors of the repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListPushMirrorsRequest;
import org.openapis.openapi.models.operations.RepoListPushMirrorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListPushMirrorsRequest req = new RepoListPushMirrorsRequest("vel", "voluptatum") {{
                limit = 301692L;
                page = 349440L;
            }};            

            RepoListPushMirrorsResponse res = sdk.repository.repoListPushMirrors(req);

            if (res.pushMirrors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListReleaseAttachments

List release's attachments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListReleaseAttachmentsRequest;
import org.openapis.openapi.models.operations.RepoListReleaseAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListReleaseAttachmentsRequest req = new RepoListReleaseAttachmentsRequest(70410L, "porro", "autem");            

            RepoListReleaseAttachmentsResponse res = sdk.repository.repoListReleaseAttachments(req);

            if (res.attachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListReleases

List a repo's releases

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListReleasesRequest;
import org.openapis.openapi.models.operations.RepoListReleasesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListReleasesRequest req = new RepoListReleasesRequest("nobis", "laboriosam") {{
                draft = false;
                limit = 927212L;
                page = 160393L;
                perPage = 28952L;
                preRelease = false;
            }};            

            RepoListReleasesResponse res = sdk.repository.repoListReleases(req);

            if (res.releases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListStargazers

List a repo's stargazers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListStargazersRequest;
import org.openapis.openapi.models.operations.RepoListStargazersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListStargazersRequest req = new RepoListStargazersRequest("exercitationem", "necessitatibus") {{
                limit = 95619L;
                page = 392569L;
            }};            

            RepoListStargazersResponse res = sdk.repository.repoListStargazers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListStatuses

Get a commit's statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListStatusesRequest;
import org.openapis.openapi.models.operations.RepoListStatusesResponse;
import org.openapis.openapi.models.operations.RepoListStatusesSortEnum;
import org.openapis.openapi.models.operations.RepoListStatusesStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListStatusesRequest req = new RepoListStatusesRequest("at", "vero", "est") {{
                limit = 690785L;
                page = 192718L;
                sort = RepoListStatusesSortEnum.HIGHESTINDEX;
                state = RepoListStatusesStateEnum.WARNING;
            }};            

            RepoListStatusesResponse res = sdk.repository.repoListStatuses(req);

            if (res.commitStatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListStatusesByRef

Get a commit's statuses, by branch/tag/commit reference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListStatusesByRefRequest;
import org.openapis.openapi.models.operations.RepoListStatusesByRefResponse;
import org.openapis.openapi.models.operations.RepoListStatusesByRefSortEnum;
import org.openapis.openapi.models.operations.RepoListStatusesByRefStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListStatusesByRefRequest req = new RepoListStatusesByRefRequest("optio", "occaecati", "nemo") {{
                limit = 455898L;
                page = 501063L;
                sort = RepoListStatusesByRefSortEnum.LEASTINDEX;
                state = RepoListStatusesByRefStateEnum.SUCCESS;
            }};            

            RepoListStatusesByRefResponse res = sdk.repository.repoListStatusesByRef(req);

            if (res.commitStatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListSubscribers

List a repo's watchers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListSubscribersRequest;
import org.openapis.openapi.models.operations.RepoListSubscribersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListSubscribersRequest req = new RepoListSubscribersRequest("numquam", "nemo") {{
                limit = 551079L;
                page = 260904L;
            }};            

            RepoListSubscribersResponse res = sdk.repository.repoListSubscribers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListTags

List a repository's tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListTagsRequest;
import org.openapis.openapi.models.operations.RepoListTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListTagsRequest req = new RepoListTagsRequest("aspernatur", "ducimus") {{
                limit = 200516L;
                page = 681740L;
            }};            

            RepoListTagsResponse res = sdk.repository.repoListTags(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListTeams

List a repository's teams

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListTeamsRequest;
import org.openapis.openapi.models.operations.RepoListTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListTeamsRequest req = new RepoListTeamsRequest("laudantium", "incidunt");            

            RepoListTeamsResponse res = sdk.repository.repoListTeams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoListTopics

Get list of topics that a repository has

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoListTopicsRequest;
import org.openapis.openapi.models.operations.RepoListTopicsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoListTopicsRequest req = new RepoListTopicsRequest("quasi", "rem") {{
                limit = 851854L;
                page = 117380L;
            }};            

            RepoListTopicsResponse res = sdk.repository.repoListTopics(req);

            if (res.topicName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoMergePullRequestJson

Merge a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoMergePullRequestJsonRequest;
import org.openapis.openapi.models.operations.RepoMergePullRequestJsonResponse;
import org.openapis.openapi.models.shared.MergePullRequestOption;
import org.openapis.openapi.models.shared.MergePullRequestOptionDoEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoMergePullRequestJsonRequest req = new RepoMergePullRequestJsonRequest(395544L, "consequuntur", "consectetur") {{
                mergePullRequestOption = new MergePullRequestOption(MergePullRequestOptionDoEnum.MERGE) {{
                    mergeCommitID = "cupiditate";
                    mergeMessageField = "reiciendis";
                    mergeTitleField = "soluta";
                    deleteBranchAfterMerge = false;
                    forceMerge = false;
                    headCommitId = "alias";
                    mergeWhenChecksSucceed = false;
                }};;
            }};            

            RepoMergePullRequestJsonResponse res = sdk.repository.repoMergePullRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoMergePullRequestRaw

Merge a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoMergePullRequestRawRequest;
import org.openapis.openapi.models.operations.RepoMergePullRequestRawResponse;
import org.openapis.openapi.models.shared.MergePullRequestOption;
import org.openapis.openapi.models.shared.MergePullRequestOptionDoEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoMergePullRequestRawRequest req = new RepoMergePullRequestRawRequest(608989L, "eos", "occaecati") {{
                requestBody = "iste".getBytes();
            }};            

            RepoMergePullRequestRawResponse res = sdk.repository.repoMergePullRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoMigrate

Migrate a remote git repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoMigrateResponse;
import org.openapis.openapi.models.shared.MigrateRepoOptions;
import org.openapis.openapi.models.shared.MigrateRepoOptionsServiceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.MigrateRepoOptions req = new MigrateRepoOptions("magni", "inventore") {{
                authPassword = "fuga";
                authToken = "accusamus";
                authUsername = "voluptatibus";
                description = "distinctio";
                issues = false;
                labels = false;
                lfs = false;
                lfsEndpoint = "omnis";
                milestones = false;
                mirror = false;
                mirrorInterval = "delectus";
                private_ = false;
                pullRequests = false;
                releases = false;
                repoOwner = "minima";
                service = MigrateRepoOptionsServiceEnum.GITEA;
                uid = 802692L;
                wiki = false;
            }};            

            RepoMigrateResponse res = sdk.repository.repoMigrate(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoMirrorSync

Sync a mirrored repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoMirrorSyncRequest;
import org.openapis.openapi.models.operations.RepoMirrorSyncResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoMirrorSyncRequest req = new RepoMirrorSyncRequest("magnam", "temporibus");            

            RepoMirrorSyncResponse res = sdk.repository.repoMirrorSync(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoPullRequestIsMerged

Check if a pull request has been merged

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoPullRequestIsMergedRequest;
import org.openapis.openapi.models.operations.RepoPullRequestIsMergedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoPullRequestIsMergedRequest req = new RepoPullRequestIsMergedRequest(549501L, "commodi", "itaque");            

            RepoPullRequestIsMergedResponse res = sdk.repository.repoPullRequestIsMerged(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoPushMirrorSync

Sync all push mirrored repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoPushMirrorSyncRequest;
import org.openapis.openapi.models.operations.RepoPushMirrorSyncResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoPushMirrorSyncRequest req = new RepoPushMirrorSyncRequest("commodi", "totam");            

            RepoPushMirrorSyncResponse res = sdk.repository.repoPushMirrorSync(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoSearch

Search for repositories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoSearchRequest;
import org.openapis.openapi.models.operations.RepoSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoSearchRequest req = new RepoSearchRequest() {{
                archived = false;
                exclusive = false;
                includeDesc = false;
                isPrivate = false;
                limit = 936618L;
                mode = "modi";
                order = "nam";
                page = 877399L;
                priorityOwnerId = 32901L;
                private_ = false;
                q = "ipsam";
                sort = "vel";
                starredBy = 1383L;
                teamId = 93894L;
                template = false;
                topic = false;
                uid = 247685L;
            }};            

            RepoSearchResponse res = sdk.repository.repoSearch(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoSigningKey

Get signing-key.gpg for given repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoSigningKeyRequest;
import org.openapis.openapi.models.operations.RepoSigningKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoSigningKeyRequest req = new RepoSigningKeyRequest("maiores", "enim");            

            RepoSigningKeyResponse res = sdk.repository.repoSigningKey(req);

            if (res.repoSigningKey200TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoSubmitPullReviewJson

Submit a pending review to an pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoSubmitPullReviewJsonRequest;
import org.openapis.openapi.models.operations.RepoSubmitPullReviewJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitPullReviewOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoSubmitPullReviewJsonRequest req = new RepoSubmitPullReviewJsonRequest(                new SubmitPullReviewOptions() {{
                                body = "sint";
                                event = "nulla";
                            }};, 643678L, 458503L, "nemo", "reprehenderit");            

            RepoSubmitPullReviewJsonResponse res = sdk.repository.repoSubmitPullReviewJson(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoSubmitPullReviewRaw

Submit a pending review to an pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoSubmitPullReviewRawRequest;
import org.openapis.openapi.models.operations.RepoSubmitPullReviewRawResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubmitPullReviewOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoSubmitPullReviewRawRequest req = new RepoSubmitPullReviewRawRequest("est".getBytes(), 336102L, 571844L, "accusamus", "impedit");            

            RepoSubmitPullReviewRawResponse res = sdk.repository.repoSubmitPullReviewRaw(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoTestHook

Test a push webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoTestHookRequest;
import org.openapis.openapi.models.operations.RepoTestHookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoTestHookRequest req = new RepoTestHookRequest(945027L, "necessitatibus", "asperiores") {{
                ref = "ex";
            }};            

            RepoTestHookResponse res = sdk.repository.repoTestHook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoTrackedTimes

List a repo's tracked times

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoTrackedTimesRequest;
import org.openapis.openapi.models.operations.RepoTrackedTimesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoTrackedTimesRequest req = new RepoTrackedTimesRequest("voluptas", "debitis") {{
                before = OffsetDateTime.parse("2022-10-21T17:37:55.823Z");
                limit = 791880L;
                page = 685478L;
                since = OffsetDateTime.parse("2022-07-16T07:39:08.844Z");
                user = "velit";
            }};            

            RepoTrackedTimesResponse res = sdk.repository.repoTrackedTimes(req);

            if (res.trackedTimes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoTransferJson

Transfer a repo ownership

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoTransferJsonRequest;
import org.openapis.openapi.models.operations.RepoTransferJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRepoOption;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoTransferJsonRequest req = new RepoTransferJsonRequest(                new TransferRepoOption("atque") {{
                                teamIds = new Long[]{{
                                    add(773035L),
                                }};
                            }};, "magni", "soluta");            

            RepoTransferJsonResponse res = sdk.repository.repoTransferJson(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoTransferRaw

Transfer a repo ownership

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoTransferRawRequest;
import org.openapis.openapi.models.operations.RepoTransferRawResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRepoOption;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoTransferRawRequest req = new RepoTransferRawRequest("repudiandae".getBytes(), "nam", "dolore");            

            RepoTransferRawResponse res = sdk.repository.repoTransferRaw(req);

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoUnDismissPullReview

Cancel to dismiss a review for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoUnDismissPullReviewRequest;
import org.openapis.openapi.models.operations.RepoUnDismissPullReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoUnDismissPullReviewRequest req = new RepoUnDismissPullReviewRequest(482892L, 453094L, "sequi", "dignissimos");            

            RepoUnDismissPullReviewResponse res = sdk.repository.repoUnDismissPullReview(req);

            if (res.pullReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoUpdateFile

Update a file in a repository

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoUpdateFileRequest;
import org.openapis.openapi.models.operations.RepoUpdateFileResponse;
import org.openapis.openapi.models.shared.CommitDateOptions;
import org.openapis.openapi.models.shared.Identity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFileOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoUpdateFileRequest req = new RepoUpdateFileRequest(                new UpdateFileOptions("neque", "quo") {{
                                author = new Identity() {{
                                    email = "Rosalind97@yahoo.com";
                                    name = "Dr. Megan Spinka";
                                }};;
                                branch = "architecto";
                                committer = new Identity() {{
                                    email = "Carli24@hotmail.com";
                                    name = "Ruth Kassulke PhD";
                                }};;
                                dates = new CommitDateOptions() {{
                                    author = OffsetDateTime.parse("2022-02-19T15:28:07.331Z");
                                    committer = OffsetDateTime.parse("2022-09-19T07:24:19.034Z");
                                }};;
                                fromPath = "perspiciatis";
                                message = "earum";
                                newBranch = "dicta";
                                signoff = false;
                            }};, "impedit", "voluptatibus", "iste");            

            RepoUpdateFileResponse res = sdk.repository.repoUpdateFile(req);

            if (res.fileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoUpdatePullRequest

Merge PR's baseBranch into headBranch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoUpdatePullRequestRequest;
import org.openapis.openapi.models.operations.RepoUpdatePullRequestResponse;
import org.openapis.openapi.models.operations.RepoUpdatePullRequestStyleEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoUpdatePullRequestRequest req = new RepoUpdatePullRequestRequest(932562L, "alias", "nisi") {{
                style = RepoUpdatePullRequestStyleEnum.REBASE;
            }};            

            RepoUpdatePullRequestResponse res = sdk.repository.repoUpdatePullRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoUpdateTopicsJson

Replace list of topics for a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoUpdateTopicsJsonRequest;
import org.openapis.openapi.models.operations.RepoUpdateTopicsJsonResponse;
import org.openapis.openapi.models.shared.RepoTopicOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoUpdateTopicsJsonRequest req = new RepoUpdateTopicsJsonRequest("velit", "laborum") {{
                repoTopicOptions = new RepoTopicOptions() {{
                    topics = new String[]{{
                        add("dolor"),
                        add("iusto"),
                    }};
                }};;
            }};            

            RepoUpdateTopicsJsonResponse res = sdk.repository.repoUpdateTopicsJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoUpdateTopicsRaw

Replace list of topics for a repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoUpdateTopicsRawRequest;
import org.openapis.openapi.models.operations.RepoUpdateTopicsRawResponse;
import org.openapis.openapi.models.shared.RepoTopicOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoUpdateTopicsRawRequest req = new RepoUpdateTopicsRawRequest("sit", "doloremque") {{
                requestBody = "consequatur".getBytes();
            }};            

            RepoUpdateTopicsRawResponse res = sdk.repository.repoUpdateTopicsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repoValidateIssueConfig

Returns the validation information for a issue config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepoValidateIssueConfigRequest;
import org.openapis.openapi.models.operations.RepoValidateIssueConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RepoValidateIssueConfigRequest req = new RepoValidateIssueConfigRequest("officia", "recusandae");            

            RepoValidateIssueConfigResponse res = sdk.repository.repoValidateIssueConfig(req);

            if (res.issueConfigValidation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## topicSearch

search topics via keyword

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TopicSearchRequest;
import org.openapis.openapi.models.operations.TopicSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TopicSearchRequest req = new TopicSearchRequest("ea") {{
                limit = 693153L;
                page = 377406L;
            }};            

            TopicSearchResponse res = sdk.repository.topicSearch(req);

            if (res.topicResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentCheckSubscription

Check if the current user is watching a repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentCheckSubscriptionRequest;
import org.openapis.openapi.models.operations.UserCurrentCheckSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentCheckSubscriptionRequest req = new UserCurrentCheckSubscriptionRequest("facilis", "placeat");            

            UserCurrentCheckSubscriptionResponse res = sdk.repository.userCurrentCheckSubscription(req);

            if (res.watchInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentDeleteSubscription

Unwatch a repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentDeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.UserCurrentDeleteSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentDeleteSubscriptionRequest req = new UserCurrentDeleteSubscriptionRequest("perspiciatis", "expedita");            

            UserCurrentDeleteSubscriptionResponse res = sdk.repository.userCurrentDeleteSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCurrentPutSubscription

Watch a repo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCurrentPutSubscriptionRequest;
import org.openapis.openapi.models.operations.UserCurrentPutSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserCurrentPutSubscriptionRequest req = new UserCurrentPutSubscriptionRequest("deleniti", "a");            

            UserCurrentPutSubscriptionResponse res = sdk.repository.userCurrentPutSubscription(req);

            if (res.watchInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~userTrackedTimes~~

List a user's tracked times in a repo

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserTrackedTimesRequest;
import org.openapis.openapi.models.operations.UserTrackedTimesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserTrackedTimesRequest req = new UserTrackedTimesRequest("voluptate", "ullam", "unde");            

            UserTrackedTimesResponse res = sdk.repository.userTrackedTimes(req);

            if (res.trackedTimes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
