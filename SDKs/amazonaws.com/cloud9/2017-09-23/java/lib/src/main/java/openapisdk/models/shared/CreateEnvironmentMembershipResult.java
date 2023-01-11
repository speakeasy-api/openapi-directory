package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentMembershipResult {
    @JsonProperty("membership")
    public EnvironmentMember membership;
    public CreateEnvironmentMembershipResult withMembership(EnvironmentMember membership) {
        this.membership = membership;
        return this;
    }
}