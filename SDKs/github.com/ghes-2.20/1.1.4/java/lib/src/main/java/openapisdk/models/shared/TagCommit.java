package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagCommit {
    @JsonProperty("sha")
    public String sha;
    public TagCommit withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TagCommit withUrl(String url) {
        this.url = url;
        return this;
    }
}