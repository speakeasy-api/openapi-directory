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
 * PackageMinimalRepository
 * Minimal Repository
**/
public class PackageMinimalRepository {
    @JsonProperty("archive_url")
    public String archiveUrl;
    public PackageMinimalRepository withArchiveUrl(String archiveUrl) {
        this.archiveUrl = archiveUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public PackageMinimalRepository withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("assignees_url")
    public String assigneesUrl;
    public PackageMinimalRepository withAssigneesUrl(String assigneesUrl) {
        this.assigneesUrl = assigneesUrl;
        return this;
    }
    @JsonProperty("blobs_url")
    public String blobsUrl;
    public PackageMinimalRepository withBlobsUrl(String blobsUrl) {
        this.blobsUrl = blobsUrl;
        return this;
    }
    @JsonProperty("branches_url")
    public String branchesUrl;
    public PackageMinimalRepository withBranchesUrl(String branchesUrl) {
        this.branchesUrl = branchesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clone_url")
    public String cloneUrl;
    public PackageMinimalRepository withCloneUrl(String cloneUrl) {
        this.cloneUrl = cloneUrl;
        return this;
    }
    @JsonProperty("collaborators_url")
    public String collaboratorsUrl;
    public PackageMinimalRepository withCollaboratorsUrl(String collaboratorsUrl) {
        this.collaboratorsUrl = collaboratorsUrl;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public PackageMinimalRepository withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonProperty("commits_url")
    public String commitsUrl;
    public PackageMinimalRepository withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    @JsonProperty("compare_url")
    public String compareUrl;
    public PackageMinimalRepository withCompareUrl(String compareUrl) {
        this.compareUrl = compareUrl;
        return this;
    }
    @JsonProperty("contents_url")
    public String contentsUrl;
    public PackageMinimalRepository withContentsUrl(String contentsUrl) {
        this.contentsUrl = contentsUrl;
        return this;
    }
    @JsonProperty("contributors_url")
    public String contributorsUrl;
    public PackageMinimalRepository withContributorsUrl(String contributorsUrl) {
        this.contributorsUrl = contributorsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PackageMinimalRepository withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_branch")
    public String defaultBranch;
    public PackageMinimalRepository withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;
    public PackageMinimalRepository withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    @JsonProperty("deployments_url")
    public String deploymentsUrl;
    public PackageMinimalRepository withDeploymentsUrl(String deploymentsUrl) {
        this.deploymentsUrl = deploymentsUrl;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PackageMinimalRepository withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public PackageMinimalRepository withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonProperty("downloads_url")
    public String downloadsUrl;
    public PackageMinimalRepository withDownloadsUrl(String downloadsUrl) {
        this.downloadsUrl = downloadsUrl;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public PackageMinimalRepository withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("fork")
    public Boolean fork;
    public PackageMinimalRepository withFork(Boolean fork) {
        this.fork = fork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forks")
    public Long forks;
    public PackageMinimalRepository withForks(Long forks) {
        this.forks = forks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forks_count")
    public Long forksCount;
    public PackageMinimalRepository withForksCount(Long forksCount) {
        this.forksCount = forksCount;
        return this;
    }
    @JsonProperty("forks_url")
    public String forksUrl;
    public PackageMinimalRepository withForksUrl(String forksUrl) {
        this.forksUrl = forksUrl;
        return this;
    }
    @JsonProperty("full_name")
    public String fullName;
    public PackageMinimalRepository withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("git_commits_url")
    public String gitCommitsUrl;
    public PackageMinimalRepository withGitCommitsUrl(String gitCommitsUrl) {
        this.gitCommitsUrl = gitCommitsUrl;
        return this;
    }
    @JsonProperty("git_refs_url")
    public String gitRefsUrl;
    public PackageMinimalRepository withGitRefsUrl(String gitRefsUrl) {
        this.gitRefsUrl = gitRefsUrl;
        return this;
    }
    @JsonProperty("git_tags_url")
    public String gitTagsUrl;
    public PackageMinimalRepository withGitTagsUrl(String gitTagsUrl) {
        this.gitTagsUrl = gitTagsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_url")
    public String gitUrl;
    public PackageMinimalRepository withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;
    public PackageMinimalRepository withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_issues")
    public Boolean hasIssues;
    public PackageMinimalRepository withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_pages")
    public Boolean hasPages;
    public PackageMinimalRepository withHasPages(Boolean hasPages) {
        this.hasPages = hasPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_projects")
    public Boolean hasProjects;
    public PackageMinimalRepository withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_wiki")
    public Boolean hasWiki;
    public PackageMinimalRepository withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public String homepage;
    public PackageMinimalRepository withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("hooks_url")
    public String hooksUrl;
    public PackageMinimalRepository withHooksUrl(String hooksUrl) {
        this.hooksUrl = hooksUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PackageMinimalRepository withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PackageMinimalRepository withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;
    public PackageMinimalRepository withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    @JsonProperty("issue_comment_url")
    public String issueCommentUrl;
    public PackageMinimalRepository withIssueCommentUrl(String issueCommentUrl) {
        this.issueCommentUrl = issueCommentUrl;
        return this;
    }
    @JsonProperty("issue_events_url")
    public String issueEventsUrl;
    public PackageMinimalRepository withIssueEventsUrl(String issueEventsUrl) {
        this.issueEventsUrl = issueEventsUrl;
        return this;
    }
    @JsonProperty("issues_url")
    public String issuesUrl;
    public PackageMinimalRepository withIssuesUrl(String issuesUrl) {
        this.issuesUrl = issuesUrl;
        return this;
    }
    @JsonProperty("keys_url")
    public String keysUrl;
    public PackageMinimalRepository withKeysUrl(String keysUrl) {
        this.keysUrl = keysUrl;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public PackageMinimalRepository withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public PackageMinimalRepository withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("languages_url")
    public String languagesUrl;
    public PackageMinimalRepository withLanguagesUrl(String languagesUrl) {
        this.languagesUrl = languagesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public PackageMinimalRepositoryLicense license;
    public PackageMinimalRepository withLicense(PackageMinimalRepositoryLicense license) {
        this.license = license;
        return this;
    }
    @JsonProperty("merges_url")
    public String mergesUrl;
    public PackageMinimalRepository withMergesUrl(String mergesUrl) {
        this.mergesUrl = mergesUrl;
        return this;
    }
    @JsonProperty("milestones_url")
    public String milestonesUrl;
    public PackageMinimalRepository withMilestonesUrl(String milestonesUrl) {
        this.milestonesUrl = milestonesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mirror_url")
    public String mirrorUrl;
    public PackageMinimalRepository withMirrorUrl(String mirrorUrl) {
        this.mirrorUrl = mirrorUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PackageMinimalRepository withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_count")
    public Long networkCount;
    public PackageMinimalRepository withNetworkCount(Long networkCount) {
        this.networkCount = networkCount;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PackageMinimalRepository withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("notifications_url")
    public String notificationsUrl;
    public PackageMinimalRepository withNotificationsUrl(String notificationsUrl) {
        this.notificationsUrl = notificationsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_issues")
    public Long openIssues;
    public PackageMinimalRepository withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_issues_count")
    public Long openIssuesCount;
    public PackageMinimalRepository withOpenIssuesCount(Long openIssuesCount) {
        this.openIssuesCount = openIssuesCount;
        return this;
    }
    @JsonProperty("owner")
    public PackageMinimalRepositorySimpleUser owner;
    public PackageMinimalRepository withOwner(PackageMinimalRepositorySimpleUser owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public PackageMinimalRepositoryPermissions permissions;
    public PackageMinimalRepository withPermissions(PackageMinimalRepositoryPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("private")
    public Boolean private_;
    public PackageMinimalRepository withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonProperty("pulls_url")
    public String pullsUrl;
    public PackageMinimalRepository withPullsUrl(String pullsUrl) {
        this.pullsUrl = pullsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("pushed_at")
    public OffsetDateTime pushedAt;
    public PackageMinimalRepository withPushedAt(OffsetDateTime pushedAt) {
        this.pushedAt = pushedAt;
        return this;
    }
    @JsonProperty("releases_url")
    public String releasesUrl;
    public PackageMinimalRepository withReleasesUrl(String releasesUrl) {
        this.releasesUrl = releasesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PackageMinimalRepository withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_url")
    public String sshUrl;
    public PackageMinimalRepository withSshUrl(String sshUrl) {
        this.sshUrl = sshUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stargazers_count")
    public Long stargazersCount;
    public PackageMinimalRepository withStargazersCount(Long stargazersCount) {
        this.stargazersCount = stargazersCount;
        return this;
    }
    @JsonProperty("stargazers_url")
    public String stargazersUrl;
    public PackageMinimalRepository withStargazersUrl(String stargazersUrl) {
        this.stargazersUrl = stargazersUrl;
        return this;
    }
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public PackageMinimalRepository withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribers_count")
    public Long subscribersCount;
    public PackageMinimalRepository withSubscribersCount(Long subscribersCount) {
        this.subscribersCount = subscribersCount;
        return this;
    }
    @JsonProperty("subscribers_url")
    public String subscribersUrl;
    public PackageMinimalRepository withSubscribersUrl(String subscribersUrl) {
        this.subscribersUrl = subscribersUrl;
        return this;
    }
    @JsonProperty("subscription_url")
    public String subscriptionUrl;
    public PackageMinimalRepository withSubscriptionUrl(String subscriptionUrl) {
        this.subscriptionUrl = subscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("svn_url")
    public String svnUrl;
    public PackageMinimalRepository withSvnUrl(String svnUrl) {
        this.svnUrl = svnUrl;
        return this;
    }
    @JsonProperty("tags_url")
    public String tagsUrl;
    public PackageMinimalRepository withTagsUrl(String tagsUrl) {
        this.tagsUrl = tagsUrl;
        return this;
    }
    @JsonProperty("teams_url")
    public String teamsUrl;
    public PackageMinimalRepository withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temp_clone_token")
    public String tempCloneToken;
    public PackageMinimalRepository withTempCloneToken(String tempCloneToken) {
        this.tempCloneToken = tempCloneToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_repository")
    public PackageMinimalRepositoryRepository templateRepository;
    public PackageMinimalRepository withTemplateRepository(PackageMinimalRepositoryRepository templateRepository) {
        this.templateRepository = templateRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public PackageMinimalRepository withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonProperty("trees_url")
    public String treesUrl;
    public PackageMinimalRepository withTreesUrl(String treesUrl) {
        this.treesUrl = treesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PackageMinimalRepository withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PackageMinimalRepository withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public String visibility;
    public PackageMinimalRepository withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchers")
    public Long watchers;
    public PackageMinimalRepository withWatchers(Long watchers) {
        this.watchers = watchers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchers_count")
    public Long watchersCount;
    public PackageMinimalRepository withWatchersCount(Long watchersCount) {
        this.watchersCount = watchersCount;
        return this;
    }
}