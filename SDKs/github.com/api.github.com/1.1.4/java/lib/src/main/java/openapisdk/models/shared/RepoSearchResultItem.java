package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RepoSearchResultItem
 * Repo Search Result Item
**/
public class RepoSearchResultItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;
    public RepoSearchResultItem withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;
    public RepoSearchResultItem withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;
    public RepoSearchResultItem withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    @JsonProperty("archive_url")
    public String archiveUrl;
    public RepoSearchResultItem withArchiveUrl(String archiveUrl) {
        this.archiveUrl = archiveUrl;
        return this;
    }
    @JsonProperty("archived")
    public Boolean archived;
    public RepoSearchResultItem withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("assignees_url")
    public String assigneesUrl;
    public RepoSearchResultItem withAssigneesUrl(String assigneesUrl) {
        this.assigneesUrl = assigneesUrl;
        return this;
    }
    @JsonProperty("blobs_url")
    public String blobsUrl;
    public RepoSearchResultItem withBlobsUrl(String blobsUrl) {
        this.blobsUrl = blobsUrl;
        return this;
    }
    @JsonProperty("branches_url")
    public String branchesUrl;
    public RepoSearchResultItem withBranchesUrl(String branchesUrl) {
        this.branchesUrl = branchesUrl;
        return this;
    }
    @JsonProperty("clone_url")
    public String cloneUrl;
    public RepoSearchResultItem withCloneUrl(String cloneUrl) {
        this.cloneUrl = cloneUrl;
        return this;
    }
    @JsonProperty("collaborators_url")
    public String collaboratorsUrl;
    public RepoSearchResultItem withCollaboratorsUrl(String collaboratorsUrl) {
        this.collaboratorsUrl = collaboratorsUrl;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public RepoSearchResultItem withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonProperty("commits_url")
    public String commitsUrl;
    public RepoSearchResultItem withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    @JsonProperty("compare_url")
    public String compareUrl;
    public RepoSearchResultItem withCompareUrl(String compareUrl) {
        this.compareUrl = compareUrl;
        return this;
    }
    @JsonProperty("contents_url")
    public String contentsUrl;
    public RepoSearchResultItem withContentsUrl(String contentsUrl) {
        this.contentsUrl = contentsUrl;
        return this;
    }
    @JsonProperty("contributors_url")
    public String contributorsUrl;
    public RepoSearchResultItem withContributorsUrl(String contributorsUrl) {
        this.contributorsUrl = contributorsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public RepoSearchResultItem withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("default_branch")
    public String defaultBranch;
    public RepoSearchResultItem withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;
    public RepoSearchResultItem withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    @JsonProperty("deployments_url")
    public String deploymentsUrl;
    public RepoSearchResultItem withDeploymentsUrl(String deploymentsUrl) {
        this.deploymentsUrl = deploymentsUrl;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public RepoSearchResultItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disabled")
    public Boolean disabled;
    public RepoSearchResultItem withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonProperty("downloads_url")
    public String downloadsUrl;
    public RepoSearchResultItem withDownloadsUrl(String downloadsUrl) {
        this.downloadsUrl = downloadsUrl;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public RepoSearchResultItem withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("fork")
    public Boolean fork;
    public RepoSearchResultItem withFork(Boolean fork) {
        this.fork = fork;
        return this;
    }
    @JsonProperty("forks")
    public Long forks;
    public RepoSearchResultItem withForks(Long forks) {
        this.forks = forks;
        return this;
    }
    @JsonProperty("forks_count")
    public Long forksCount;
    public RepoSearchResultItem withForksCount(Long forksCount) {
        this.forksCount = forksCount;
        return this;
    }
    @JsonProperty("forks_url")
    public String forksUrl;
    public RepoSearchResultItem withForksUrl(String forksUrl) {
        this.forksUrl = forksUrl;
        return this;
    }
    @JsonProperty("full_name")
    public String fullName;
    public RepoSearchResultItem withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("git_commits_url")
    public String gitCommitsUrl;
    public RepoSearchResultItem withGitCommitsUrl(String gitCommitsUrl) {
        this.gitCommitsUrl = gitCommitsUrl;
        return this;
    }
    @JsonProperty("git_refs_url")
    public String gitRefsUrl;
    public RepoSearchResultItem withGitRefsUrl(String gitRefsUrl) {
        this.gitRefsUrl = gitRefsUrl;
        return this;
    }
    @JsonProperty("git_tags_url")
    public String gitTagsUrl;
    public RepoSearchResultItem withGitTagsUrl(String gitTagsUrl) {
        this.gitTagsUrl = gitTagsUrl;
        return this;
    }
    @JsonProperty("git_url")
    public String gitUrl;
    public RepoSearchResultItem withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;
    public RepoSearchResultItem withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    @JsonProperty("has_issues")
    public Boolean hasIssues;
    public RepoSearchResultItem withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    @JsonProperty("has_pages")
    public Boolean hasPages;
    public RepoSearchResultItem withHasPages(Boolean hasPages) {
        this.hasPages = hasPages;
        return this;
    }
    @JsonProperty("has_projects")
    public Boolean hasProjects;
    public RepoSearchResultItem withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    @JsonProperty("has_wiki")
    public Boolean hasWiki;
    public RepoSearchResultItem withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    @JsonProperty("homepage")
    public String homepage;
    public RepoSearchResultItem withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("hooks_url")
    public String hooksUrl;
    public RepoSearchResultItem withHooksUrl(String hooksUrl) {
        this.hooksUrl = hooksUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public RepoSearchResultItem withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public RepoSearchResultItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("issue_comment_url")
    public String issueCommentUrl;
    public RepoSearchResultItem withIssueCommentUrl(String issueCommentUrl) {
        this.issueCommentUrl = issueCommentUrl;
        return this;
    }
    @JsonProperty("issue_events_url")
    public String issueEventsUrl;
    public RepoSearchResultItem withIssueEventsUrl(String issueEventsUrl) {
        this.issueEventsUrl = issueEventsUrl;
        return this;
    }
    @JsonProperty("issues_url")
    public String issuesUrl;
    public RepoSearchResultItem withIssuesUrl(String issuesUrl) {
        this.issuesUrl = issuesUrl;
        return this;
    }
    @JsonProperty("keys_url")
    public String keysUrl;
    public RepoSearchResultItem withKeysUrl(String keysUrl) {
        this.keysUrl = keysUrl;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public RepoSearchResultItem withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public RepoSearchResultItem withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("languages_url")
    public String languagesUrl;
    public RepoSearchResultItem withLanguagesUrl(String languagesUrl) {
        this.languagesUrl = languagesUrl;
        return this;
    }
    @JsonProperty("license")
    public RepoSearchResultItemLicenseSimple license;
    public RepoSearchResultItem withLicense(RepoSearchResultItemLicenseSimple license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("master_branch")
    public String masterBranch;
    public RepoSearchResultItem withMasterBranch(String masterBranch) {
        this.masterBranch = masterBranch;
        return this;
    }
    @JsonProperty("merges_url")
    public String mergesUrl;
    public RepoSearchResultItem withMergesUrl(String mergesUrl) {
        this.mergesUrl = mergesUrl;
        return this;
    }
    @JsonProperty("milestones_url")
    public String milestonesUrl;
    public RepoSearchResultItem withMilestonesUrl(String milestonesUrl) {
        this.milestonesUrl = milestonesUrl;
        return this;
    }
    @JsonProperty("mirror_url")
    public String mirrorUrl;
    public RepoSearchResultItem withMirrorUrl(String mirrorUrl) {
        this.mirrorUrl = mirrorUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RepoSearchResultItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public RepoSearchResultItem withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("notifications_url")
    public String notificationsUrl;
    public RepoSearchResultItem withNotificationsUrl(String notificationsUrl) {
        this.notificationsUrl = notificationsUrl;
        return this;
    }
    @JsonProperty("open_issues")
    public Long openIssues;
    public RepoSearchResultItem withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonProperty("open_issues_count")
    public Long openIssuesCount;
    public RepoSearchResultItem withOpenIssuesCount(Long openIssuesCount) {
        this.openIssuesCount = openIssuesCount;
        return this;
    }
    @JsonProperty("owner")
    public RepoSearchResultItemSimpleUser owner;
    public RepoSearchResultItem withOwner(RepoSearchResultItemSimpleUser owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public RepoSearchResultItemPermissions permissions;
    public RepoSearchResultItem withPermissions(RepoSearchResultItemPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("private")
    public Boolean private_;
    public RepoSearchResultItem withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonProperty("pulls_url")
    public String pullsUrl;
    public RepoSearchResultItem withPullsUrl(String pullsUrl) {
        this.pullsUrl = pullsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("pushed_at")
    public OffsetDateTime pushedAt;
    public RepoSearchResultItem withPushedAt(OffsetDateTime pushedAt) {
        this.pushedAt = pushedAt;
        return this;
    }
    @JsonProperty("releases_url")
    public String releasesUrl;
    public RepoSearchResultItem withReleasesUrl(String releasesUrl) {
        this.releasesUrl = releasesUrl;
        return this;
    }
    @JsonProperty("score")
    public Long score;
    public RepoSearchResultItem withScore(Long score) {
        this.score = score;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public RepoSearchResultItem withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonProperty("ssh_url")
    public String sshUrl;
    public RepoSearchResultItem withSshUrl(String sshUrl) {
        this.sshUrl = sshUrl;
        return this;
    }
    @JsonProperty("stargazers_count")
    public Long stargazersCount;
    public RepoSearchResultItem withStargazersCount(Long stargazersCount) {
        this.stargazersCount = stargazersCount;
        return this;
    }
    @JsonProperty("stargazers_url")
    public String stargazersUrl;
    public RepoSearchResultItem withStargazersUrl(String stargazersUrl) {
        this.stargazersUrl = stargazersUrl;
        return this;
    }
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public RepoSearchResultItem withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonProperty("subscribers_url")
    public String subscribersUrl;
    public RepoSearchResultItem withSubscribersUrl(String subscribersUrl) {
        this.subscribersUrl = subscribersUrl;
        return this;
    }
    @JsonProperty("subscription_url")
    public String subscriptionUrl;
    public RepoSearchResultItem withSubscriptionUrl(String subscriptionUrl) {
        this.subscriptionUrl = subscriptionUrl;
        return this;
    }
    @JsonProperty("svn_url")
    public String svnUrl;
    public RepoSearchResultItem withSvnUrl(String svnUrl) {
        this.svnUrl = svnUrl;
        return this;
    }
    @JsonProperty("tags_url")
    public String tagsUrl;
    public RepoSearchResultItem withTagsUrl(String tagsUrl) {
        this.tagsUrl = tagsUrl;
        return this;
    }
    @JsonProperty("teams_url")
    public String teamsUrl;
    public RepoSearchResultItem withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temp_clone_token")
    public String tempCloneToken;
    public RepoSearchResultItem withTempCloneToken(String tempCloneToken) {
        this.tempCloneToken = tempCloneToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public RepoSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public RepoSearchResultItem withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonProperty("trees_url")
    public String treesUrl;
    public RepoSearchResultItem withTreesUrl(String treesUrl) {
        this.treesUrl = treesUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public RepoSearchResultItem withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public RepoSearchResultItem withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("watchers")
    public Long watchers;
    public RepoSearchResultItem withWatchers(Long watchers) {
        this.watchers = watchers;
        return this;
    }
    @JsonProperty("watchers_count")
    public Long watchersCount;
    public RepoSearchResultItem withWatchersCount(Long watchersCount) {
        this.watchersCount = watchersCount;
        return this;
    }
}