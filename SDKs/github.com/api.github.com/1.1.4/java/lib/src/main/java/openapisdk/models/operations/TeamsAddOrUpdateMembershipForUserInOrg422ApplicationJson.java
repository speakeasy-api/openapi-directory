package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors[] errors;
    public TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson withErrors(TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}