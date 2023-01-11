package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestHeadRepoPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public PullRequestHeadRepoPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public PullRequestHeadRepoPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public PullRequestHeadRepoPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}