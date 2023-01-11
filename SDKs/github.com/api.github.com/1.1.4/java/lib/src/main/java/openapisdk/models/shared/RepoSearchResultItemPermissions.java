package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RepoSearchResultItemPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public RepoSearchResultItemPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public RepoSearchResultItemPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public RepoSearchResultItemPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}