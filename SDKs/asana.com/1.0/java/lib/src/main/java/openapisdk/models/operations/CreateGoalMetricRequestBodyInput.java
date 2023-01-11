package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGoalMetricRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalMetricRequestInput data;
    public CreateGoalMetricRequestBodyInput withData(openapisdk.models.shared.GoalMetricRequestInput data) {
        this.data = data;
        return this;
    }
}