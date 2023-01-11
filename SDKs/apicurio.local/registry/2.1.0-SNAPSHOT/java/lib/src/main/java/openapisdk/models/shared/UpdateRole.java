package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRole {
    @JsonProperty("role")
    public RoleTypeEnum role;
    public UpdateRole withRole(RoleTypeEnum role) {
        this.role = role;
        return this;
    }
}