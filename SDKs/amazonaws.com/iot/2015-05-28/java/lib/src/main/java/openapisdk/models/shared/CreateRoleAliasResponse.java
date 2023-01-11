package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRoleAliasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAlias")
    public String roleAlias;
    public CreateRoleAliasResponse withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAliasArn")
    public String roleAliasArn;
    public CreateRoleAliasResponse withRoleAliasArn(String roleAliasArn) {
        this.roleAliasArn = roleAliasArn;
        return this;
    }
}