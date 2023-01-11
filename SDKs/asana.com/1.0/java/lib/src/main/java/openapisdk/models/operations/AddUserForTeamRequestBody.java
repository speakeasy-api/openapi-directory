package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserForTeamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TeamAddUserRequest data;
    public AddUserForTeamRequestBody withData(openapisdk.models.shared.TeamAddUserRequest data) {
        this.data = data;
        return this;
    }
}