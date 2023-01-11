package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestMinimalHeadRepo {
    @JsonProperty("id")
    public Long id;
    public PullRequestMinimalHeadRepo withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PullRequestMinimalHeadRepo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PullRequestMinimalHeadRepo withUrl(String url) {
        this.url = url;
        return this;
    }
}