package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGoalRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalRequestInput data;
    public UpdateGoalRequestBodyInput withData(openapisdk.models.shared.GoalRequestInput data) {
        this.data = data;
        return this;
    }
}