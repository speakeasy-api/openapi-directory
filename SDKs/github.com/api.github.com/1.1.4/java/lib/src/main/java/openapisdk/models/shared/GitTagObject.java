package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitTagObject {
    @JsonProperty("sha")
    public String sha;
    public GitTagObject withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GitTagObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitTagObject withUrl(String url) {
        this.url = url;
        return this;
    }
}