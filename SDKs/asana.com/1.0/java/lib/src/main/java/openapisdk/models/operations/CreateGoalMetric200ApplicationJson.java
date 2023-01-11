package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGoalMetric200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalResponse data;
    public CreateGoalMetric200ApplicationJson withData(openapisdk.models.shared.GoalResponse data) {
        this.data = data;
        return this;
    }
}