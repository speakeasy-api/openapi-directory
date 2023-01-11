package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTeamRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TeamRequestInput data;
    public CreateTeamRequestBodyInput withData(openapisdk.models.shared.TeamRequestInput data) {
        this.data = data;
        return this;
    }
}