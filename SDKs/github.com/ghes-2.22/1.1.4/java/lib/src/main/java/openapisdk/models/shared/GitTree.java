package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitTree
 * The hierarchy between files in a Git repository.
**/
public class GitTree {
    @JsonProperty("sha")
    public String sha;
    public GitTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("tree")
    public GitTreeTree[] tree;
    public GitTree withTree(GitTreeTree[] tree) {
        this.tree = tree;
        return this;
    }
    @JsonProperty("truncated")
    public Boolean truncated;
    public GitTree withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitTree withUrl(String url) {
        this.url = url;
        return this;
    }
}