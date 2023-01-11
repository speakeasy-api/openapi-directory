package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommitSearchResultItemCommitTree {
    @JsonProperty("sha")
    public String sha;
    public CommitSearchResultItemCommitTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommitSearchResultItemCommitTree withUrl(String url) {
        this.url = url;
        return this;
    }
}