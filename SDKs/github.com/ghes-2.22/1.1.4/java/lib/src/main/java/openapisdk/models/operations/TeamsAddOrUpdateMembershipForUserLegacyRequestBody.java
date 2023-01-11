package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateMembershipForUserLegacyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum role;
    public TeamsAddOrUpdateMembershipForUserLegacyRequestBody withRole(TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
}