package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateMembershipForUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum role;
    public TeamsAddOrUpdateMembershipForUserRequestBody withRole(TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
}