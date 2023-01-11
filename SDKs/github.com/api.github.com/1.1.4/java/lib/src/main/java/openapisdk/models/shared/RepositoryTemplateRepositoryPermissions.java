package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RepositoryTemplateRepositoryPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public Boolean admin;
    public RepositoryTemplateRepositoryPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull")
    public Boolean pull;
    public RepositoryTemplateRepositoryPermissions withPull(Boolean pull) {
        this.pull = pull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push")
    public Boolean push;
    public RepositoryTemplateRepositoryPermissions withPush(Boolean push) {
        this.push = push;
        return this;
    }
}