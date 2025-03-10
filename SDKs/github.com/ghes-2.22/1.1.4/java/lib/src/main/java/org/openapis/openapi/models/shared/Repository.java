/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * Repository - A git repository
 */
public class Repository {
    /**
     * Whether to allow forking this repo
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_forking")
    public Boolean allowForking;

    public Repository withAllowForking(Boolean allowForking) {
        this.allowForking = allowForking;
        return this;
    }
    
    /**
     * Whether to allow merge commits for pull requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;

    public Repository withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    
    /**
     * Whether to allow rebase merges for pull requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;

    public Repository withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    
    /**
     * Whether to allow squash merges for pull requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;

    public Repository withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    
    @JsonProperty("archive_url")
    public String archiveUrl;

    public Repository withArchiveUrl(String archiveUrl) {
        this.archiveUrl = archiveUrl;
        return this;
    }
    
    /**
     * Whether the repository is archived.
     */
    @JsonProperty("archived")
    public Boolean archived;

    public Repository withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    
    @JsonProperty("assignees_url")
    public String assigneesUrl;

    public Repository withAssigneesUrl(String assigneesUrl) {
        this.assigneesUrl = assigneesUrl;
        return this;
    }
    
    @JsonProperty("blobs_url")
    public String blobsUrl;

    public Repository withBlobsUrl(String blobsUrl) {
        this.blobsUrl = blobsUrl;
        return this;
    }
    
    @JsonProperty("branches_url")
    public String branchesUrl;

    public Repository withBranchesUrl(String branchesUrl) {
        this.branchesUrl = branchesUrl;
        return this;
    }
    
    @JsonProperty("clone_url")
    public String cloneUrl;

    public Repository withCloneUrl(String cloneUrl) {
        this.cloneUrl = cloneUrl;
        return this;
    }
    
    @JsonProperty("collaborators_url")
    public String collaboratorsUrl;

    public Repository withCollaboratorsUrl(String collaboratorsUrl) {
        this.collaboratorsUrl = collaboratorsUrl;
        return this;
    }
    
    @JsonProperty("comments_url")
    public String commentsUrl;

    public Repository withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    
    @JsonProperty("commits_url")
    public String commitsUrl;

    public Repository withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    
    @JsonProperty("compare_url")
    public String compareUrl;

    public Repository withCompareUrl(String compareUrl) {
        this.compareUrl = compareUrl;
        return this;
    }
    
    @JsonProperty("contents_url")
    public String contentsUrl;

    public Repository withContentsUrl(String contentsUrl) {
        this.contentsUrl = contentsUrl;
        return this;
    }
    
    @JsonProperty("contributors_url")
    public String contributorsUrl;

    public Repository withContributorsUrl(String contributorsUrl) {
        this.contributorsUrl = contributorsUrl;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public Repository withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The default branch of the repository.
     */
    @JsonProperty("default_branch")
    public String defaultBranch;

    public Repository withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    
    /**
     * Whether to delete head branches when pull requests are merged
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;

    public Repository withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    
    @JsonProperty("deployments_url")
    public String deploymentsUrl;

    public Repository withDeploymentsUrl(String deploymentsUrl) {
        this.deploymentsUrl = deploymentsUrl;
        return this;
    }
    
    @JsonProperty("description")
    public String description;

    public Repository withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Returns whether or not this repository disabled.
     */
    @JsonProperty("disabled")
    public Boolean disabled;

    public Repository withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    
    @JsonProperty("downloads_url")
    public String downloadsUrl;

    public Repository withDownloadsUrl(String downloadsUrl) {
        this.downloadsUrl = downloadsUrl;
        return this;
    }
    
    @JsonProperty("events_url")
    public String eventsUrl;

    public Repository withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    
    @JsonProperty("fork")
    public Boolean fork;

    public Repository withFork(Boolean fork) {
        this.fork = fork;
        return this;
    }
    
    @JsonProperty("forks")
    public Long forks;

    public Repository withForks(Long forks) {
        this.forks = forks;
        return this;
    }
    
    @JsonProperty("forks_count")
    public Long forksCount;

    public Repository withForksCount(Long forksCount) {
        this.forksCount = forksCount;
        return this;
    }
    
    @JsonProperty("forks_url")
    public String forksUrl;

    public Repository withForksUrl(String forksUrl) {
        this.forksUrl = forksUrl;
        return this;
    }
    
    @JsonProperty("full_name")
    public String fullName;

    public Repository withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    
    @JsonProperty("git_commits_url")
    public String gitCommitsUrl;

    public Repository withGitCommitsUrl(String gitCommitsUrl) {
        this.gitCommitsUrl = gitCommitsUrl;
        return this;
    }
    
    @JsonProperty("git_refs_url")
    public String gitRefsUrl;

    public Repository withGitRefsUrl(String gitRefsUrl) {
        this.gitRefsUrl = gitRefsUrl;
        return this;
    }
    
    @JsonProperty("git_tags_url")
    public String gitTagsUrl;

    public Repository withGitTagsUrl(String gitTagsUrl) {
        this.gitTagsUrl = gitTagsUrl;
        return this;
    }
    
    @JsonProperty("git_url")
    public String gitUrl;

    public Repository withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    
    /**
     * Whether downloads are enabled.
     */
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;

    public Repository withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    
    /**
     * Whether issues are enabled.
     */
    @JsonProperty("has_issues")
    public Boolean hasIssues;

    public Repository withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    
    @JsonProperty("has_pages")
    public Boolean hasPages;

    public Repository withHasPages(Boolean hasPages) {
        this.hasPages = hasPages;
        return this;
    }
    
    /**
     * Whether projects are enabled.
     */
    @JsonProperty("has_projects")
    public Boolean hasProjects;

    public Repository withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    
    /**
     * Whether the wiki is enabled.
     */
    @JsonProperty("has_wiki")
    public Boolean hasWiki;

    public Repository withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    
    @JsonProperty("homepage")
    public String homepage;

    public Repository withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    
    @JsonProperty("hooks_url")
    public String hooksUrl;

    public Repository withHooksUrl(String hooksUrl) {
        this.hooksUrl = hooksUrl;
        return this;
    }
    
    @JsonProperty("html_url")
    public String htmlUrl;

    public Repository withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    
    /**
     * Unique identifier of the repository
     */
    @JsonProperty("id")
    public Long id;

    public Repository withId(Long id) {
        this.id = id;
        return this;
    }
    
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;

    public Repository withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    
    @JsonProperty("issue_comment_url")
    public String issueCommentUrl;

    public Repository withIssueCommentUrl(String issueCommentUrl) {
        this.issueCommentUrl = issueCommentUrl;
        return this;
    }
    
    @JsonProperty("issue_events_url")
    public String issueEventsUrl;

    public Repository withIssueEventsUrl(String issueEventsUrl) {
        this.issueEventsUrl = issueEventsUrl;
        return this;
    }
    
    @JsonProperty("issues_url")
    public String issuesUrl;

    public Repository withIssuesUrl(String issuesUrl) {
        this.issuesUrl = issuesUrl;
        return this;
    }
    
    @JsonProperty("keys_url")
    public String keysUrl;

    public Repository withKeysUrl(String keysUrl) {
        this.keysUrl = keysUrl;
        return this;
    }
    
    @JsonProperty("labels_url")
    public String labelsUrl;

    public Repository withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    
    @JsonProperty("language")
    public String language;

    public Repository withLanguage(String language) {
        this.language = language;
        return this;
    }
    
    @JsonProperty("languages_url")
    public String languagesUrl;

    public Repository withLanguagesUrl(String languagesUrl) {
        this.languagesUrl = languagesUrl;
        return this;
    }
    
    /**
     * License Simple
     */
    @JsonProperty("license")
    public NullableLicenseSimple license;

    public Repository withLicense(NullableLicenseSimple license) {
        this.license = license;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("master_branch")
    public String masterBranch;

    public Repository withMasterBranch(String masterBranch) {
        this.masterBranch = masterBranch;
        return this;
    }
    
    @JsonProperty("merges_url")
    public String mergesUrl;

    public Repository withMergesUrl(String mergesUrl) {
        this.mergesUrl = mergesUrl;
        return this;
    }
    
    @JsonProperty("milestones_url")
    public String milestonesUrl;

    public Repository withMilestonesUrl(String milestonesUrl) {
        this.milestonesUrl = milestonesUrl;
        return this;
    }
    
    @JsonProperty("mirror_url")
    public String mirrorUrl;

    public Repository withMirrorUrl(String mirrorUrl) {
        this.mirrorUrl = mirrorUrl;
        return this;
    }
    
    /**
     * The name of the repository.
     */
    @JsonProperty("name")
    public String name;

    public Repository withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_count")
    public Long networkCount;

    public Repository withNetworkCount(Long networkCount) {
        this.networkCount = networkCount;
        return this;
    }
    
    @JsonProperty("node_id")
    public String nodeId;

    public Repository withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    
    @JsonProperty("notifications_url")
    public String notificationsUrl;

    public Repository withNotificationsUrl(String notificationsUrl) {
        this.notificationsUrl = notificationsUrl;
        return this;
    }
    
    @JsonProperty("open_issues")
    public Long openIssues;

    public Repository withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    
    @JsonProperty("open_issues_count")
    public Long openIssuesCount;

    public Repository withOpenIssuesCount(Long openIssuesCount) {
        this.openIssuesCount = openIssuesCount;
        return this;
    }
    
    /**
     * Simple User
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public NullableSimpleUser organization;

    public Repository withOrganization(NullableSimpleUser organization) {
        this.organization = organization;
        return this;
    }
    
    /**
     * Simple User
     */
    @JsonProperty("owner")
    public SimpleUser owner;

    public Repository withOwner(SimpleUser owner) {
        this.owner = owner;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public RepositoryPermissions permissions;

    public Repository withPermissions(RepositoryPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    
    /**
     * Whether the repository is private or public.
     */
    @JsonProperty("private")
    public Boolean private_;

    public Repository withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    
    @JsonProperty("pulls_url")
    public String pullsUrl;

    public Repository withPullsUrl(String pullsUrl) {
        this.pullsUrl = pullsUrl;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("pushed_at")
    public OffsetDateTime pushedAt;

    public Repository withPushedAt(OffsetDateTime pushedAt) {
        this.pushedAt = pushedAt;
        return this;
    }
    
    @JsonProperty("releases_url")
    public String releasesUrl;

    public Repository withReleasesUrl(String releasesUrl) {
        this.releasesUrl = releasesUrl;
        return this;
    }
    
    @JsonProperty("size")
    public Long size;

    public Repository withSize(Long size) {
        this.size = size;
        return this;
    }
    
    @JsonProperty("ssh_url")
    public String sshUrl;

    public Repository withSshUrl(String sshUrl) {
        this.sshUrl = sshUrl;
        return this;
    }
    
    @JsonProperty("stargazers_count")
    public Long stargazersCount;

    public Repository withStargazersCount(Long stargazersCount) {
        this.stargazersCount = stargazersCount;
        return this;
    }
    
    @JsonProperty("stargazers_url")
    public String stargazersUrl;

    public Repository withStargazersUrl(String stargazersUrl) {
        this.stargazersUrl = stargazersUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred_at")
    public String starredAt;

    public Repository withStarredAt(String starredAt) {
        this.starredAt = starredAt;
        return this;
    }
    
    @JsonProperty("statuses_url")
    public String statusesUrl;

    public Repository withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribers_count")
    public Long subscribersCount;

    public Repository withSubscribersCount(Long subscribersCount) {
        this.subscribersCount = subscribersCount;
        return this;
    }
    
    @JsonProperty("subscribers_url")
    public String subscribersUrl;

    public Repository withSubscribersUrl(String subscribersUrl) {
        this.subscribersUrl = subscribersUrl;
        return this;
    }
    
    @JsonProperty("subscription_url")
    public String subscriptionUrl;

    public Repository withSubscriptionUrl(String subscriptionUrl) {
        this.subscriptionUrl = subscriptionUrl;
        return this;
    }
    
    @JsonProperty("svn_url")
    public String svnUrl;

    public Repository withSvnUrl(String svnUrl) {
        this.svnUrl = svnUrl;
        return this;
    }
    
    @JsonProperty("tags_url")
    public String tagsUrl;

    public Repository withTagsUrl(String tagsUrl) {
        this.tagsUrl = tagsUrl;
        return this;
    }
    
    @JsonProperty("teams_url")
    public String teamsUrl;

    public Repository withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temp_clone_token")
    public String tempCloneToken;

    public Repository withTempCloneToken(String tempCloneToken) {
        this.tempCloneToken = tempCloneToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_repository")
    public RepositoryTemplateRepository templateRepository;

    public Repository withTemplateRepository(RepositoryTemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;

    public Repository withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    
    @JsonProperty("trees_url")
    public String treesUrl;

    public Repository withTreesUrl(String treesUrl) {
        this.treesUrl = treesUrl;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public Repository withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    @JsonProperty("url")
    public String url;

    public Repository withUrl(String url) {
        this.url = url;
        return this;
    }
    
    /**
     * The repository visibility: public, private, or internal.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public String visibility;

    public Repository withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
    
    @JsonProperty("watchers")
    public Long watchers;

    public Repository withWatchers(Long watchers) {
        this.watchers = watchers;
        return this;
    }
    
    @JsonProperty("watchers_count")
    public Long watchersCount;

    public Repository withWatchersCount(Long watchersCount) {
        this.watchersCount = watchersCount;
        return this;
    }
    
    public Repository(@JsonProperty("archive_url") String archiveUrl, @JsonProperty("archived") Boolean archived, @JsonProperty("assignees_url") String assigneesUrl, @JsonProperty("blobs_url") String blobsUrl, @JsonProperty("branches_url") String branchesUrl, @JsonProperty("clone_url") String cloneUrl, @JsonProperty("collaborators_url") String collaboratorsUrl, @JsonProperty("comments_url") String commentsUrl, @JsonProperty("commits_url") String commitsUrl, @JsonProperty("compare_url") String compareUrl, @JsonProperty("contents_url") String contentsUrl, @JsonProperty("contributors_url") String contributorsUrl, @JsonProperty("created_at") OffsetDateTime createdAt, @JsonProperty("default_branch") String defaultBranch, @JsonProperty("deployments_url") String deploymentsUrl, @JsonProperty("description") String description, @JsonProperty("disabled") Boolean disabled, @JsonProperty("downloads_url") String downloadsUrl, @JsonProperty("events_url") String eventsUrl, @JsonProperty("fork") Boolean fork, @JsonProperty("forks") Long forks, @JsonProperty("forks_count") Long forksCount, @JsonProperty("forks_url") String forksUrl, @JsonProperty("full_name") String fullName, @JsonProperty("git_commits_url") String gitCommitsUrl, @JsonProperty("git_refs_url") String gitRefsUrl, @JsonProperty("git_tags_url") String gitTagsUrl, @JsonProperty("git_url") String gitUrl, @JsonProperty("has_downloads") Boolean hasDownloads, @JsonProperty("has_issues") Boolean hasIssues, @JsonProperty("has_pages") Boolean hasPages, @JsonProperty("has_projects") Boolean hasProjects, @JsonProperty("has_wiki") Boolean hasWiki, @JsonProperty("homepage") String homepage, @JsonProperty("hooks_url") String hooksUrl, @JsonProperty("html_url") String htmlUrl, @JsonProperty("id") Long id, @JsonProperty("issue_comment_url") String issueCommentUrl, @JsonProperty("issue_events_url") String issueEventsUrl, @JsonProperty("issues_url") String issuesUrl, @JsonProperty("keys_url") String keysUrl, @JsonProperty("labels_url") String labelsUrl, @JsonProperty("language") String language, @JsonProperty("languages_url") String languagesUrl, @JsonProperty("license") NullableLicenseSimple license, @JsonProperty("merges_url") String mergesUrl, @JsonProperty("milestones_url") String milestonesUrl, @JsonProperty("mirror_url") String mirrorUrl, @JsonProperty("name") String name, @JsonProperty("node_id") String nodeId, @JsonProperty("notifications_url") String notificationsUrl, @JsonProperty("open_issues") Long openIssues, @JsonProperty("open_issues_count") Long openIssuesCount, @JsonProperty("owner") SimpleUser owner, @JsonProperty("private") Boolean private_, @JsonProperty("pulls_url") String pullsUrl, @JsonProperty("pushed_at") OffsetDateTime pushedAt, @JsonProperty("releases_url") String releasesUrl, @JsonProperty("size") Long size, @JsonProperty("ssh_url") String sshUrl, @JsonProperty("stargazers_count") Long stargazersCount, @JsonProperty("stargazers_url") String stargazersUrl, @JsonProperty("statuses_url") String statusesUrl, @JsonProperty("subscribers_url") String subscribersUrl, @JsonProperty("subscription_url") String subscriptionUrl, @JsonProperty("svn_url") String svnUrl, @JsonProperty("tags_url") String tagsUrl, @JsonProperty("teams_url") String teamsUrl, @JsonProperty("trees_url") String treesUrl, @JsonProperty("updated_at") OffsetDateTime updatedAt, @JsonProperty("url") String url, @JsonProperty("watchers") Long watchers, @JsonProperty("watchers_count") Long watchersCount) {
        this.archiveUrl = archiveUrl;
        this.archived = archived;
        this.assigneesUrl = assigneesUrl;
        this.blobsUrl = blobsUrl;
        this.branchesUrl = branchesUrl;
        this.cloneUrl = cloneUrl;
        this.collaboratorsUrl = collaboratorsUrl;
        this.commentsUrl = commentsUrl;
        this.commitsUrl = commitsUrl;
        this.compareUrl = compareUrl;
        this.contentsUrl = contentsUrl;
        this.contributorsUrl = contributorsUrl;
        this.createdAt = createdAt;
        this.defaultBranch = defaultBranch;
        this.deploymentsUrl = deploymentsUrl;
        this.description = description;
        this.disabled = disabled;
        this.downloadsUrl = downloadsUrl;
        this.eventsUrl = eventsUrl;
        this.fork = fork;
        this.forks = forks;
        this.forksCount = forksCount;
        this.forksUrl = forksUrl;
        this.fullName = fullName;
        this.gitCommitsUrl = gitCommitsUrl;
        this.gitRefsUrl = gitRefsUrl;
        this.gitTagsUrl = gitTagsUrl;
        this.gitUrl = gitUrl;
        this.hasDownloads = hasDownloads;
        this.hasIssues = hasIssues;
        this.hasPages = hasPages;
        this.hasProjects = hasProjects;
        this.hasWiki = hasWiki;
        this.homepage = homepage;
        this.hooksUrl = hooksUrl;
        this.htmlUrl = htmlUrl;
        this.id = id;
        this.issueCommentUrl = issueCommentUrl;
        this.issueEventsUrl = issueEventsUrl;
        this.issuesUrl = issuesUrl;
        this.keysUrl = keysUrl;
        this.labelsUrl = labelsUrl;
        this.language = language;
        this.languagesUrl = languagesUrl;
        this.license = license;
        this.mergesUrl = mergesUrl;
        this.milestonesUrl = milestonesUrl;
        this.mirrorUrl = mirrorUrl;
        this.name = name;
        this.nodeId = nodeId;
        this.notificationsUrl = notificationsUrl;
        this.openIssues = openIssues;
        this.openIssuesCount = openIssuesCount;
        this.owner = owner;
        this.private_ = private_;
        this.pullsUrl = pullsUrl;
        this.pushedAt = pushedAt;
        this.releasesUrl = releasesUrl;
        this.size = size;
        this.sshUrl = sshUrl;
        this.stargazersCount = stargazersCount;
        this.stargazersUrl = stargazersUrl;
        this.statusesUrl = statusesUrl;
        this.subscribersUrl = subscribersUrl;
        this.subscriptionUrl = subscriptionUrl;
        this.svnUrl = svnUrl;
        this.tagsUrl = tagsUrl;
        this.teamsUrl = teamsUrl;
        this.treesUrl = treesUrl;
        this.updatedAt = updatedAt;
        this.url = url;
        this.watchers = watchers;
        this.watchersCount = watchersCount;
  }
}
