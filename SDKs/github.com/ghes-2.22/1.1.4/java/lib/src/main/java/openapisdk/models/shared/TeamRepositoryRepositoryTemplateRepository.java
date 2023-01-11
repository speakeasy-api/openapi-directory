package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamRepositoryRepositoryTemplateRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;
    public TeamRepositoryRepositoryTemplateRepository withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;
    public TeamRepositoryRepositoryTemplateRepository withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;
    public TeamRepositoryRepositoryTemplateRepository withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archive_url")
    public String archiveUrl;
    public TeamRepositoryRepositoryTemplateRepository withArchiveUrl(String archiveUrl) {
        this.archiveUrl = archiveUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public TeamRepositoryRepositoryTemplateRepository withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees_url")
    public String assigneesUrl;
    public TeamRepositoryRepositoryTemplateRepository withAssigneesUrl(String assigneesUrl) {
        this.assigneesUrl = assigneesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobs_url")
    public String blobsUrl;
    public TeamRepositoryRepositoryTemplateRepository withBlobsUrl(String blobsUrl) {
        this.blobsUrl = blobsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branches_url")
    public String branchesUrl;
    public TeamRepositoryRepositoryTemplateRepository withBranchesUrl(String branchesUrl) {
        this.branchesUrl = branchesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clone_url")
    public String cloneUrl;
    public TeamRepositoryRepositoryTemplateRepository withCloneUrl(String cloneUrl) {
        this.cloneUrl = cloneUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators_url")
    public String collaboratorsUrl;
    public TeamRepositoryRepositoryTemplateRepository withCollaboratorsUrl(String collaboratorsUrl) {
        this.collaboratorsUrl = collaboratorsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments_url")
    public String commentsUrl;
    public TeamRepositoryRepositoryTemplateRepository withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commits_url")
    public String commitsUrl;
    public TeamRepositoryRepositoryTemplateRepository withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compare_url")
    public String compareUrl;
    public TeamRepositoryRepositoryTemplateRepository withCompareUrl(String compareUrl) {
        this.compareUrl = compareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents_url")
    public String contentsUrl;
    public TeamRepositoryRepositoryTemplateRepository withContentsUrl(String contentsUrl) {
        this.contentsUrl = contentsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributors_url")
    public String contributorsUrl;
    public TeamRepositoryRepositoryTemplateRepository withContributorsUrl(String contributorsUrl) {
        this.contributorsUrl = contributorsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public TeamRepositoryRepositoryTemplateRepository withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_branch")
    public String defaultBranch;
    public TeamRepositoryRepositoryTemplateRepository withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;
    public TeamRepositoryRepositoryTemplateRepository withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments_url")
    public String deploymentsUrl;
    public TeamRepositoryRepositoryTemplateRepository withDeploymentsUrl(String deploymentsUrl) {
        this.deploymentsUrl = deploymentsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamRepositoryRepositoryTemplateRepository withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public TeamRepositoryRepositoryTemplateRepository withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloads_url")
    public String downloadsUrl;
    public TeamRepositoryRepositoryTemplateRepository withDownloadsUrl(String downloadsUrl) {
        this.downloadsUrl = downloadsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events_url")
    public String eventsUrl;
    public TeamRepositoryRepositoryTemplateRepository withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fork")
    public Boolean fork;
    public TeamRepositoryRepositoryTemplateRepository withFork(Boolean fork) {
        this.fork = fork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forks_count")
    public Long forksCount;
    public TeamRepositoryRepositoryTemplateRepository withForksCount(Long forksCount) {
        this.forksCount = forksCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forks_url")
    public String forksUrl;
    public TeamRepositoryRepositoryTemplateRepository withForksUrl(String forksUrl) {
        this.forksUrl = forksUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public TeamRepositoryRepositoryTemplateRepository withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_commits_url")
    public String gitCommitsUrl;
    public TeamRepositoryRepositoryTemplateRepository withGitCommitsUrl(String gitCommitsUrl) {
        this.gitCommitsUrl = gitCommitsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_refs_url")
    public String gitRefsUrl;
    public TeamRepositoryRepositoryTemplateRepository withGitRefsUrl(String gitRefsUrl) {
        this.gitRefsUrl = gitRefsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_tags_url")
    public String gitTagsUrl;
    public TeamRepositoryRepositoryTemplateRepository withGitTagsUrl(String gitTagsUrl) {
        this.gitTagsUrl = gitTagsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_url")
    public String gitUrl;
    public TeamRepositoryRepositoryTemplateRepository withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;
    public TeamRepositoryRepositoryTemplateRepository withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_issues")
    public Boolean hasIssues;
    public TeamRepositoryRepositoryTemplateRepository withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_pages")
    public Boolean hasPages;
    public TeamRepositoryRepositoryTemplateRepository withHasPages(Boolean hasPages) {
        this.hasPages = hasPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_projects")
    public Boolean hasProjects;
    public TeamRepositoryRepositoryTemplateRepository withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_wiki")
    public Boolean hasWiki;
    public TeamRepositoryRepositoryTemplateRepository withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public String homepage;
    public TeamRepositoryRepositoryTemplateRepository withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hooks_url")
    public String hooksUrl;
    public TeamRepositoryRepositoryTemplateRepository withHooksUrl(String hooksUrl) {
        this.hooksUrl = hooksUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public TeamRepositoryRepositoryTemplateRepository withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TeamRepositoryRepositoryTemplateRepository withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;
    public TeamRepositoryRepositoryTemplateRepository withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_comment_url")
    public String issueCommentUrl;
    public TeamRepositoryRepositoryTemplateRepository withIssueCommentUrl(String issueCommentUrl) {
        this.issueCommentUrl = issueCommentUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_events_url")
    public String issueEventsUrl;
    public TeamRepositoryRepositoryTemplateRepository withIssueEventsUrl(String issueEventsUrl) {
        this.issueEventsUrl = issueEventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues_url")
    public String issuesUrl;
    public TeamRepositoryRepositoryTemplateRepository withIssuesUrl(String issuesUrl) {
        this.issuesUrl = issuesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys_url")
    public String keysUrl;
    public TeamRepositoryRepositoryTemplateRepository withKeysUrl(String keysUrl) {
        this.keysUrl = keysUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels_url")
    public String labelsUrl;
    public TeamRepositoryRepositoryTemplateRepository withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public TeamRepositoryRepositoryTemplateRepository withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages_url")
    public String languagesUrl;
    public TeamRepositoryRepositoryTemplateRepository withLanguagesUrl(String languagesUrl) {
        this.languagesUrl = languagesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merges_url")
    public String mergesUrl;
    public TeamRepositoryRepositoryTemplateRepository withMergesUrl(String mergesUrl) {
        this.mergesUrl = mergesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("milestones_url")
    public String milestonesUrl;
    public TeamRepositoryRepositoryTemplateRepository withMilestonesUrl(String milestonesUrl) {
        this.milestonesUrl = milestonesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mirror_url")
    public String mirrorUrl;
    public TeamRepositoryRepositoryTemplateRepository withMirrorUrl(String mirrorUrl) {
        this.mirrorUrl = mirrorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamRepositoryRepositoryTemplateRepository withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_count")
    public Long networkCount;
    public TeamRepositoryRepositoryTemplateRepository withNetworkCount(Long networkCount) {
        this.networkCount = networkCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public TeamRepositoryRepositoryTemplateRepository withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications_url")
    public String notificationsUrl;
    public TeamRepositoryRepositoryTemplateRepository withNotificationsUrl(String notificationsUrl) {
        this.notificationsUrl = notificationsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_issues_count")
    public Long openIssuesCount;
    public TeamRepositoryRepositoryTemplateRepository withOpenIssuesCount(Long openIssuesCount) {
        this.openIssuesCount = openIssuesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public TeamRepositoryRepositoryTemplateRepositoryOwner owner;
    public TeamRepositoryRepositoryTemplateRepository withOwner(TeamRepositoryRepositoryTemplateRepositoryOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public TeamRepositoryRepositoryTemplateRepositoryPermissions permissions;
    public TeamRepositoryRepositoryTemplateRepository withPermissions(TeamRepositoryRepositoryTemplateRepositoryPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public TeamRepositoryRepositoryTemplateRepository withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pulls_url")
    public String pullsUrl;
    public TeamRepositoryRepositoryTemplateRepository withPullsUrl(String pullsUrl) {
        this.pullsUrl = pullsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushed_at")
    public String pushedAt;
    public TeamRepositoryRepositoryTemplateRepository withPushedAt(String pushedAt) {
        this.pushedAt = pushedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releases_url")
    public String releasesUrl;
    public TeamRepositoryRepositoryTemplateRepository withReleasesUrl(String releasesUrl) {
        this.releasesUrl = releasesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public TeamRepositoryRepositoryTemplateRepository withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_url")
    public String sshUrl;
    public TeamRepositoryRepositoryTemplateRepository withSshUrl(String sshUrl) {
        this.sshUrl = sshUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stargazers_count")
    public Long stargazersCount;
    public TeamRepositoryRepositoryTemplateRepository withStargazersCount(Long stargazersCount) {
        this.stargazersCount = stargazersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stargazers_url")
    public String stargazersUrl;
    public TeamRepositoryRepositoryTemplateRepository withStargazersUrl(String stargazersUrl) {
        this.stargazersUrl = stargazersUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public TeamRepositoryRepositoryTemplateRepository withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribers_count")
    public Long subscribersCount;
    public TeamRepositoryRepositoryTemplateRepository withSubscribersCount(Long subscribersCount) {
        this.subscribersCount = subscribersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribers_url")
    public String subscribersUrl;
    public TeamRepositoryRepositoryTemplateRepository withSubscribersUrl(String subscribersUrl) {
        this.subscribersUrl = subscribersUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription_url")
    public String subscriptionUrl;
    public TeamRepositoryRepositoryTemplateRepository withSubscriptionUrl(String subscriptionUrl) {
        this.subscriptionUrl = subscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("svn_url")
    public String svnUrl;
    public TeamRepositoryRepositoryTemplateRepository withSvnUrl(String svnUrl) {
        this.svnUrl = svnUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags_url")
    public String tagsUrl;
    public TeamRepositoryRepositoryTemplateRepository withTagsUrl(String tagsUrl) {
        this.tagsUrl = tagsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams_url")
    public String teamsUrl;
    public TeamRepositoryRepositoryTemplateRepository withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temp_clone_token")
    public String tempCloneToken;
    public TeamRepositoryRepositoryTemplateRepository withTempCloneToken(String tempCloneToken) {
        this.tempCloneToken = tempCloneToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public TeamRepositoryRepositoryTemplateRepository withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trees_url")
    public String treesUrl;
    public TeamRepositoryRepositoryTemplateRepository withTreesUrl(String treesUrl) {
        this.treesUrl = treesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public TeamRepositoryRepositoryTemplateRepository withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TeamRepositoryRepositoryTemplateRepository withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public String visibility;
    public TeamRepositoryRepositoryTemplateRepository withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchers_count")
    public Long watchersCount;
    public TeamRepositoryRepositoryTemplateRepository withWatchersCount(Long watchersCount) {
        this.watchersCount = watchersCount;
        return this;
    }
}