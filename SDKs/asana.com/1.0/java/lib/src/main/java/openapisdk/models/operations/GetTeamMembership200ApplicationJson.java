package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTeamMembership200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TeamMembershipResponse data;
    public GetTeamMembership200ApplicationJson withData(openapisdk.models.shared.TeamMembershipResponse data) {
        this.data = data;
        return this;
    }
}