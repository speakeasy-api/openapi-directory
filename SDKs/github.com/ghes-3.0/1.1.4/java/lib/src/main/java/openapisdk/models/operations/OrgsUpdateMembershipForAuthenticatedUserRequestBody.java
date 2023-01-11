package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrgsUpdateMembershipForAuthenticatedUserRequestBody {
    @JsonProperty("state")
    public OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum state;
    public OrgsUpdateMembershipForAuthenticatedUserRequestBody withState(OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
}