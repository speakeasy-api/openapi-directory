package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetIdentityPoolRolesInput
 * Input to the <code>SetIdentityPoolRoles</code> action.
**/
public class SetIdentityPoolRolesInput {
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public SetIdentityPoolRolesInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleMappings")
    public java.util.Map<String, RoleMapping> roleMappings;
    public SetIdentityPoolRolesInput withRoleMappings(java.util.Map<String, RoleMapping> roleMappings) {
        this.roleMappings = roleMappings;
        return this;
    }
    @JsonProperty("Roles")
    public java.util.Map<String, String> roles;
    public SetIdentityPoolRolesInput withRoles(java.util.Map<String, String> roles) {
        this.roles = roles;
        return this;
    }
}