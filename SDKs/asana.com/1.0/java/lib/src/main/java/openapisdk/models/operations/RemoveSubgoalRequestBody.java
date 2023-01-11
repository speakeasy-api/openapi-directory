package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveSubgoalRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalRemoveSubgoalRequest data;
    public RemoveSubgoalRequestBody withData(openapisdk.models.shared.GoalRemoveSubgoalRequest data) {
        this.data = data;
        return this;
    }
}