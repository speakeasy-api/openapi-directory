package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateMembershipForUserInOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum role;
    public TeamsAddOrUpdateMembershipForUserInOrgRequestBody withRole(TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
}