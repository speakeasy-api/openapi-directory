package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStandardsControlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlStatus")
    public UpdateStandardsControlRequestBodyControlStatusEnum controlStatus;
    public UpdateStandardsControlRequestBody withControlStatus(UpdateStandardsControlRequestBodyControlStatusEnum controlStatus) {
        this.controlStatus = controlStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisabledReason")
    public String disabledReason;
    public UpdateStandardsControlRequestBody withDisabledReason(String disabledReason) {
        this.disabledReason = disabledReason;
        return this;
    }
}