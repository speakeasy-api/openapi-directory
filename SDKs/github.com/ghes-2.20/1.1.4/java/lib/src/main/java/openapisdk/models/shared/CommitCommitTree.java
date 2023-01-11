package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommitCommitTree {
    @JsonProperty("sha")
    public String sha;
    public CommitCommitTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommitCommitTree withUrl(String url) {
        this.url = url;
        return this;
    }
}