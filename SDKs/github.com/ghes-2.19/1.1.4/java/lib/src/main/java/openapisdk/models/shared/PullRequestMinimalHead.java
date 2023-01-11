package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestMinimalHead {
    @JsonProperty("ref")
    public String ref;
    public PullRequestMinimalHead withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("repo")
    public PullRequestMinimalHeadRepo repo;
    public PullRequestMinimalHead withRepo(PullRequestMinimalHeadRepo repo) {
        this.repo = repo;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public PullRequestMinimalHead withSha(String sha) {
        this.sha = sha;
        return this;
    }
}