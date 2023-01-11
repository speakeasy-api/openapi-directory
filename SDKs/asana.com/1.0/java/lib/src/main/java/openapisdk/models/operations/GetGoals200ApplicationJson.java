package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGoals200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalCompact[] data;
    public GetGoals200ApplicationJson withData(openapisdk.models.shared.GoalCompact[] data) {
        this.data = data;
        return this;
    }
}