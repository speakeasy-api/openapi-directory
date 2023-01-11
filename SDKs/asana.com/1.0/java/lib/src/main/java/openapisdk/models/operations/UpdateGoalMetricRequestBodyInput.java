package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGoalMetricRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalMetricCurrentValueRequestInput data;
    public UpdateGoalMetricRequestBodyInput withData(openapisdk.models.shared.GoalMetricCurrentValueRequestInput data) {
        this.data = data;
        return this;
    }
}