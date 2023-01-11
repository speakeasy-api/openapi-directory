package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetParentGoalsForGoal200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalCompact[] data;
    public GetParentGoalsForGoal200ApplicationJson withData(openapisdk.models.shared.GoalCompact[] data) {
        this.data = data;
        return this;
    }
}