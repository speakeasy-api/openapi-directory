package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestSimpleBase {
    @JsonProperty("label")
    public String label;
    public PullRequestSimpleBase withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public PullRequestSimpleBase withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("repo")
    public Repository repo;
    public PullRequestSimpleBase withRepo(Repository repo) {
        this.repo = repo;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public PullRequestSimpleBase withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("user")
    public PullRequestSimpleBaseSimpleUser user;
    public PullRequestSimpleBase withUser(PullRequestSimpleBaseSimpleUser user) {
        this.user = user;
        return this;
    }
}