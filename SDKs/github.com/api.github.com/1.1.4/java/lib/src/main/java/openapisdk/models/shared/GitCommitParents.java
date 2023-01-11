package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitCommitParents {
    @JsonProperty("html_url")
    public String htmlUrl;
    public GitCommitParents withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public GitCommitParents withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitCommitParents withUrl(String url) {
        this.url = url;
        return this;
    }
}