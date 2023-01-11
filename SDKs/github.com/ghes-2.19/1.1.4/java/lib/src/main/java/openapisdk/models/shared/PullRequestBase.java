package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestBase {
    @JsonProperty("label")
    public String label;
    public PullRequestBase withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public PullRequestBase withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("repo")
    public PullRequestBaseRepo repo;
    public PullRequestBase withRepo(PullRequestBaseRepo repo) {
        this.repo = repo;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public PullRequestBase withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("user")
    public PullRequestBaseUser user;
    public PullRequestBase withUser(PullRequestBaseUser user) {
        this.user = user;
        return this;
    }
}