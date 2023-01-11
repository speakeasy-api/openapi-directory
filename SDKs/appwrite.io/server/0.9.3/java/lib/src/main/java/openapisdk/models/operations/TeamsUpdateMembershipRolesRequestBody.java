package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsUpdateMembershipRolesRequestBody {
    @JsonProperty("roles")
    public String[] roles;
    public TeamsUpdateMembershipRolesRequestBody withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
}