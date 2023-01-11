package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveUserForTeamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TeamRemoveUserRequest data;
    public RemoveUserForTeamRequestBody withData(openapisdk.models.shared.TeamRemoveUserRequest data) {
        this.data = data;
        return this;
    }
}