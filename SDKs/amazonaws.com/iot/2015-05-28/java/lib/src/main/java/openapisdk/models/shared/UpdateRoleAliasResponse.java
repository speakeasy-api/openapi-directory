package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRoleAliasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAlias")
    public String roleAlias;
    public UpdateRoleAliasResponse withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAliasArn")
    public String roleAliasArn;
    public UpdateRoleAliasResponse withRoleAliasArn(String roleAliasArn) {
        this.roleAliasArn = roleAliasArn;
        return this;
    }
}