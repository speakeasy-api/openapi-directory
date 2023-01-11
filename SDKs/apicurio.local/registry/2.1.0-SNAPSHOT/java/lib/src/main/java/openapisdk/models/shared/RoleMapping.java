package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RoleMapping
 * The mapping between a user/principal and their role.
**/
public class RoleMapping {
    @JsonProperty("principalId")
    public String principalId;
    public RoleMapping withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @JsonProperty("role")
    public RoleTypeEnum role;
    public RoleMapping withRole(RoleTypeEnum role) {
        this.role = role;
        return this;
    }
}