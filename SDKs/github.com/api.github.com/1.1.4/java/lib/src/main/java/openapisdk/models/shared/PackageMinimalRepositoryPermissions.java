package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageMinimalRepositoryPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public Boolean admin;
    public PackageMinimalRepositoryPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull")
    public Boolean pull;
    public PackageMinimalRepositoryPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push")
    public Boolean push;
    public PackageMinimalRepositoryPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}