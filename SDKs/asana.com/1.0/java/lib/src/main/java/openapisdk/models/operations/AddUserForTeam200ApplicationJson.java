package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserForTeam200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.UserResponse data;
    public AddUserForTeam200ApplicationJson withData(openapisdk.models.shared.UserResponse data) {
        this.data = data;
        return this;
    }
}