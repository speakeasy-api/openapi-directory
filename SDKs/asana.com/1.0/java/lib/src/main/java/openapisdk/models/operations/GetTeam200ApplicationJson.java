package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTeam200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TeamResponse data;
    public GetTeam200ApplicationJson withData(openapisdk.models.shared.TeamResponse data) {
        this.data = data;
        return this;
    }
}