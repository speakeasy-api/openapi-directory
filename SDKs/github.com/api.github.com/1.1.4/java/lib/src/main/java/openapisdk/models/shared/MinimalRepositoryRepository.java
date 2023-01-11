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
 * MinimalRepositoryRepository
 * A git repository
**/
public class MinimalRepositoryRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;
    public MinimalRepositoryRepository withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;
    public MinimalRepositoryRepository withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;
    public MinimalRepositoryRepository withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    @JsonProperty("archive_url")
    public String archiveUrl;
    public MinimalRepositoryRepository withArchiveUrl(String archiveUrl) {
        this.archiveUrl = archiveUrl;
        return this;
    }
    @JsonProperty("archived")
    public Boolean archived;
    public MinimalRepositoryRepository withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("assignees_url")
    public String assigneesUrl;
    public MinimalRepositoryRepository withAssigneesUrl(String assigneesUrl) {
        this.assigneesUrl = assigneesUrl;
        return this;
    }
    @JsonProperty("blobs_url")
    public String blobsUrl;
    public MinimalRepositoryRepository withBlobsUrl(String blobsUrl) {
        this.blobsUrl = blobsUrl;
        return this;
    }
    @JsonProperty("branches_url")
    public String branchesUrl;
    public MinimalRepositoryRepository withBranchesUrl(String branchesUrl) {
        this.branchesUrl = branchesUrl;
        return this;
    }
    @JsonProperty("clone_url")
    public String cloneUrl;
    public MinimalRepositoryRepository withCloneUrl(String cloneUrl) {
        this.cloneUrl = cloneUrl;
        return this;
    }
    @JsonProperty("collaborators_url")
    public String collaboratorsUrl;
    public MinimalRepositoryRepository withCollaboratorsUrl(String collaboratorsUrl) {
        this.collaboratorsUrl = collaboratorsUrl;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public MinimalRepositoryRepository withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonProperty("commits_url")
    public String commitsUrl;
    public MinimalRepositoryRepository withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    @JsonProperty("compare_url")
    public String compareUrl;
    public MinimalRepositoryRepository withCompareUrl(String compareUrl) {
        this.compareUrl = compareUrl;
        return this;
    }
    @JsonProperty("contents_url")
    public String contentsUrl;
    public MinimalRepositoryRepository withContentsUrl(String contentsUrl) {
        this.contentsUrl = contentsUrl;
        return this;
    }
    @JsonProperty("contributors_url")
    public String contributorsUrl;
    public MinimalRepositoryRepository withContributorsUrl(String contributorsUrl) {
        this.contributorsUrl = contributorsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public MinimalRepositoryRepository withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("default_branch")
    public String defaultBranch;
    public MinimalRepositoryRepository withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;
    public MinimalRepositoryRepository withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    @JsonProperty("deployments_url")
    public String deploymentsUrl;
    public MinimalRepositoryRepository withDeploymentsUrl(String deploymentsUrl) {
        this.deploymentsUrl = deploymentsUrl;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public MinimalRepositoryRepository withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disabled")
    public Boolean disabled;
    public MinimalRepositoryRepository withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonProperty("downloads_url")
    public String downloadsUrl;
    public MinimalRepositoryRepository withDownloadsUrl(String downloadsUrl) {
        this.downloadsUrl = downloadsUrl;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public MinimalRepositoryRepository withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("fork")
    public Boolean fork;
    public MinimalRepositoryRepository withFork(Boolean fork) {
        this.fork = fork;
        return this;
    }
    @JsonProperty("forks")
    public Long forks;
    public MinimalRepositoryRepository withForks(Long forks) {
        this.forks = forks;
        return this;
    }
    @JsonProperty("forks_count")
    public Long forksCount;
    public MinimalRepositoryRepository withForksCount(Long forksCount) {
        this.forksCount = forksCount;
        return this;
    }
    @JsonProperty("forks_url")
    public String forksUrl;
    public MinimalRepositoryRepository withForksUrl(String forksUrl) {
        this.forksUrl = forksUrl;
        return this;
    }
    @JsonProperty("full_name")
    public String fullName;
    public MinimalRepositoryRepository withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("git_commits_url")
    public String gitCommitsUrl;
    public MinimalRepositoryRepository withGitCommitsUrl(String gitCommitsUrl) {
        this.gitCommitsUrl = gitCommitsUrl;
        return this;
    }
    @JsonProperty("git_refs_url")
    public String gitRefsUrl;
    public MinimalRepositoryRepository withGitRefsUrl(String gitRefsUrl) {
        this.gitRefsUrl = gitRefsUrl;
        return this;
    }
    @JsonProperty("git_tags_url")
    public String gitTagsUrl;
    public MinimalRepositoryRepository withGitTagsUrl(String gitTagsUrl) {
        this.gitTagsUrl = gitTagsUrl;
        return this;
    }
    @JsonProperty("git_url")
    public String gitUrl;
    public MinimalRepositoryRepository withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;
    public MinimalRepositoryRepository withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    @JsonProperty("has_issues")
    public Boolean hasIssues;
    public MinimalRepositoryRepository withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    @JsonProperty("has_pages")
    public Boolean hasPages;
    public MinimalRepositoryRepository withHasPages(Boolean hasPages) {
        this.hasPages = hasPages;
        return this;
    }
    @JsonProperty("has_projects")
    public Boolean hasProjects;
    public MinimalRepositoryRepository withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    @JsonProperty("has_wiki")
    public Boolean hasWiki;
    public MinimalRepositoryRepository withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    @JsonProperty("homepage")
    public String homepage;
    public MinimalRepositoryRepository withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("hooks_url")
    public String hooksUrl;
    public MinimalRepositoryRepository withHooksUrl(String hooksUrl) {
        this.hooksUrl = hooksUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public MinimalRepositoryRepository withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public MinimalRepositoryRepository withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;
    public MinimalRepositoryRepository withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    @JsonProperty("issue_comment_url")
    public String issueCommentUrl;
    public MinimalRepositoryRepository withIssueCommentUrl(String issueCommentUrl) {
        this.issueCommentUrl = issueCommentUrl;
        return this;
    }
    @JsonProperty("issue_events_url")
    public String issueEventsUrl;
    public MinimalRepositoryRepository withIssueEventsUrl(String issueEventsUrl) {
        this.issueEventsUrl = issueEventsUrl;
        return this;
    }
    @JsonProperty("issues_url")
    public String issuesUrl;
    public MinimalRepositoryRepository withIssuesUrl(String issuesUrl) {
        this.issuesUrl = issuesUrl;
        return this;
    }
    @JsonProperty("keys_url")
    public String keysUrl;
    public MinimalRepositoryRepository withKeysUrl(String keysUrl) {
        this.keysUrl = keysUrl;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public MinimalRepositoryRepository withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public MinimalRepositoryRepository withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("languages_url")
    public String languagesUrl;
    public MinimalRepositoryRepository withLanguagesUrl(String languagesUrl) {
        this.languagesUrl = languagesUrl;
        return this;
    }
    @JsonProperty("license")
    public MinimalRepositoryRepositoryLicenseSimple license;
    public MinimalRepositoryRepository withLicense(MinimalRepositoryRepositoryLicenseSimple license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("master_branch")
    public String masterBranch;
    public MinimalRepositoryRepository withMasterBranch(String masterBranch) {
        this.masterBranch = masterBranch;
        return this;
    }
    @JsonProperty("merges_url")
    public String mergesUrl;
    public MinimalRepositoryRepository withMergesUrl(String mergesUrl) {
        this.mergesUrl = mergesUrl;
        return this;
    }
    @JsonProperty("milestones_url")
    public String milestonesUrl;
    public MinimalRepositoryRepository withMilestonesUrl(String milestonesUrl) {
        this.milestonesUrl = milestonesUrl;
        return this;
    }
    @JsonProperty("mirror_url")
    public String mirrorUrl;
    public MinimalRepositoryRepository withMirrorUrl(String mirrorUrl) {
        this.mirrorUrl = mirrorUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public MinimalRepositoryRepository withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_count")
    public Long networkCount;
    public MinimalRepositoryRepository withNetworkCount(Long networkCount) {
        this.networkCount = networkCount;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public MinimalRepositoryRepository withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("notifications_url")
    public String notificationsUrl;
    public MinimalRepositoryRepository withNotificationsUrl(String notificationsUrl) {
        this.notificationsUrl = notificationsUrl;
        return this;
    }
    @JsonProperty("open_issues")
    public Long openIssues;
    public MinimalRepositoryRepository withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonProperty("open_issues_count")
    public Long openIssuesCount;
    public MinimalRepositoryRepository withOpenIssuesCount(Long openIssuesCount) {
        this.openIssuesCount = openIssuesCount;
        return this;
    }
    @JsonProperty("owner")
    public MinimalRepositoryRepositorySimpleUser owner;
    public MinimalRepositoryRepository withOwner(MinimalRepositoryRepositorySimpleUser owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public MinimalRepositoryRepositoryPermissions permissions;
    public MinimalRepositoryRepository withPermissions(MinimalRepositoryRepositoryPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("private")
    public Boolean private_;
    public MinimalRepositoryRepository withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonProperty("pulls_url")
    public String pullsUrl;
    public MinimalRepositoryRepository withPullsUrl(String pullsUrl) {
        this.pullsUrl = pullsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("pushed_at")
    public OffsetDateTime pushedAt;
    public MinimalRepositoryRepository withPushedAt(OffsetDateTime pushedAt) {
        this.pushedAt = pushedAt;
        return this;
    }
    @JsonProperty("releases_url")
    public String releasesUrl;
    public MinimalRepositoryRepository withReleasesUrl(String releasesUrl) {
        this.releasesUrl = releasesUrl;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public MinimalRepositoryRepository withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonProperty("ssh_url")
    public String sshUrl;
    public MinimalRepositoryRepository withSshUrl(String sshUrl) {
        this.sshUrl = sshUrl;
        return this;
    }
    @JsonProperty("stargazers_count")
    public Long stargazersCount;
    public MinimalRepositoryRepository withStargazersCount(Long stargazersCount) {
        this.stargazersCount = stargazersCount;
        return this;
    }
    @JsonProperty("stargazers_url")
    public String stargazersUrl;
    public MinimalRepositoryRepository withStargazersUrl(String stargazersUrl) {
        this.stargazersUrl = stargazersUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred_at")
    public String starredAt;
    public MinimalRepositoryRepository withStarredAt(String starredAt) {
        this.starredAt = starredAt;
        return this;
    }
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public MinimalRepositoryRepository withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribers_count")
    public Long subscribersCount;
    public MinimalRepositoryRepository withSubscribersCount(Long subscribersCount) {
        this.subscribersCount = subscribersCount;
        return this;
    }
    @JsonProperty("subscribers_url")
    public String subscribersUrl;
    public MinimalRepositoryRepository withSubscribersUrl(String subscribersUrl) {
        this.subscribersUrl = subscribersUrl;
        return this;
    }
    @JsonProperty("subscription_url")
    public String subscriptionUrl;
    public MinimalRepositoryRepository withSubscriptionUrl(String subscriptionUrl) {
        this.subscriptionUrl = subscriptionUrl;
        return this;
    }
    @JsonProperty("svn_url")
    public String svnUrl;
    public MinimalRepositoryRepository withSvnUrl(String svnUrl) {
        this.svnUrl = svnUrl;
        return this;
    }
    @JsonProperty("tags_url")
    public String tagsUrl;
    public MinimalRepositoryRepository withTagsUrl(String tagsUrl) {
        this.tagsUrl = tagsUrl;
        return this;
    }
    @JsonProperty("teams_url")
    public String teamsUrl;
    public MinimalRepositoryRepository withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temp_clone_token")
    public String tempCloneToken;
    public MinimalRepositoryRepository withTempCloneToken(String tempCloneToken) {
        this.tempCloneToken = tempCloneToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_repository")
    public MinimalRepositoryRepositoryTemplateRepository templateRepository;
    public MinimalRepositoryRepository withTemplateRepository(MinimalRepositoryRepositoryTemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public MinimalRepositoryRepository withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonProperty("trees_url")
    public String treesUrl;
    public MinimalRepositoryRepository withTreesUrl(String treesUrl) {
        this.treesUrl = treesUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public MinimalRepositoryRepository withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public MinimalRepositoryRepository withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public String visibility;
    public MinimalRepositoryRepository withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
    @JsonProperty("watchers")
    public Long watchers;
    public MinimalRepositoryRepository withWatchers(Long watchers) {
        this.watchers = watchers;
        return this;
    }
    @JsonProperty("watchers_count")
    public Long watchersCount;
    public MinimalRepositoryRepository withWatchersCount(Long watchersCount) {
        this.watchersCount = watchersCount;
        return this;
    }
}