package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTeamsForOrganization200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TeamCompact[] data;
    public GetTeamsForOrganization200ApplicationJson withData(openapisdk.models.shared.TeamCompact[] data) {
        this.data = data;
        return this;
    }
}