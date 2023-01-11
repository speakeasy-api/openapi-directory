package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitRefObject {
    @JsonProperty("sha")
    public String sha;
    public GitRefObject withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GitRefObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitRefObject withUrl(String url) {
        this.url = url;
        return this;
    }
}