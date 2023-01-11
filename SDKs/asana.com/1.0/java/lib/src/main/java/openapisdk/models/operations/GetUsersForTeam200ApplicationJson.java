package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsersForTeam200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.UserCompact[] data;
    public GetUsersForTeam200ApplicationJson withData(openapisdk.models.shared.UserCompact[] data) {
        this.data = data;
        return this;
    }
}