package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GistSimple
 * Gist Simple
**/
public class GistSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Long comments;
    public GistSimple withComments(Long comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments_url")
    public String commentsUrl;
    public GistSimple withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commits_url")
    public String commitsUrl;
    public GistSimple withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public GistSimple withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GistSimple withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public java.util.Map<String, GistSimpleFiles> files;
    public GistSimple withFiles(java.util.Map<String, GistSimpleFiles> files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fork_of")
    public GistSimpleGist forkOf;
    public GistSimple withForkOf(GistSimpleGist forkOf) {
        this.forkOf = forkOf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forks")
    public java.util.Map<String, Object>[] forks;
    public GistSimple withForks(java.util.Map<String, Object>[] forks) {
        this.forks = forks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forks_url")
    public String forksUrl;
    public GistSimple withForksUrl(String forksUrl) {
        this.forksUrl = forksUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_pull_url")
    public String gitPullUrl;
    public GistSimple withGitPullUrl(String gitPullUrl) {
        this.gitPullUrl = gitPullUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git_push_url")
    public String gitPushUrl;
    public GistSimple withGitPushUrl(String gitPushUrl) {
        this.gitPushUrl = gitPushUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("history")
    public java.util.Map<String, Object>[] history;
    public GistSimple withHistory(java.util.Map<String, Object>[] history) {
        this.history = history;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public GistSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GistSimple withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public GistSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public SimpleUser owner;
    public GistSimple withOwner(SimpleUser owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public GistSimple withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncated")
    public Boolean truncated;
    public GistSimple withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public GistSimple withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GistSimple withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public GistSimple withUser(String user) {
        this.user = user;
        return this;
    }
}