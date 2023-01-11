package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrgsSetMembershipForUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public OrgsSetMembershipForUserRequestBodyRoleEnum role;
    public OrgsSetMembershipForUserRequestBody withRole(OrgsSetMembershipForUserRequestBodyRoleEnum role) {
        this.role = role;
        return this;
    }
}