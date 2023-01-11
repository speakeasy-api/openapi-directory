package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddSubgoalRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GoalAddSubgoalRequest data;
    public AddSubgoalRequestBody withData(openapisdk.models.shared.GoalAddSubgoalRequest data) {
        this.data = data;
        return this;
    }
}