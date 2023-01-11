package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddFollowers201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalResponse data;
    public AddFollowers201ApplicationJson withData(openapisdk.models.shared.GoalResponse data) {
        this.data = data;
        return this;
    }
}