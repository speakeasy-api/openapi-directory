package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageMinimalRepositoryRepositoryPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public PackageMinimalRepositoryRepositoryPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintain")
    public Boolean maintain;
    public PackageMinimalRepositoryRepositoryPermissions withMaintain(Boolean maintain) {
        this.maintain = maintain;
        return this;
    }
    @JsonProperty("pull")
    public Boolean pull;
    public PackageMinimalRepositoryRepositoryPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonProperty("push")
    public Boolean push;
    public PackageMinimalRepositoryRepositoryPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triage")
    public Boolean triage;
    public PackageMinimalRepositoryRepositoryPermissions withTriage(Boolean triage) {
        this.triage = triage;
        return this;
    }
}