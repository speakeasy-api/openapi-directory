package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Commit
 * Commit
**/
public class Commit {
    @JsonProperty("author")
    public CommitSimpleUser author;
    public Commit withAuthor(CommitSimpleUser author) {
        this.author = author;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public Commit withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonProperty("commit")
    public CommitCommit commit;
    public Commit withCommit(CommitCommit commit) {
        this.commit = commit;
        return this;
    }
    @JsonProperty("committer")
    public CommitSimpleUser committer;
    public Commit withCommitter(CommitSimpleUser committer) {
        this.committer = committer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public CommitFiles[] files;
    public Commit withFiles(CommitFiles[] files) {
        this.files = files;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Commit withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Commit withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("parents")
    public CommitParents[] parents;
    public Commit withParents(CommitParents[] parents) {
        this.parents = parents;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public Commit withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public CommitStats stats;
    public Commit withStats(CommitStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Commit withUrl(String url) {
        this.url = url;
        return this;
    }
}