package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveSupportingWorkForGoalRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalAddSupportingWorkRequest data;
    public RemoveSupportingWorkForGoalRequestBody withData(openapisdk.models.shared.GoalAddSupportingWorkRequest data) {
        this.data = data;
        return this;
    }
}