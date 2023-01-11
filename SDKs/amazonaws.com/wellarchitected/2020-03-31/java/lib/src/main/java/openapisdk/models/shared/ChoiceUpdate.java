package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChoiceUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public ChoiceUpdate withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public ChoiceReasonEnum reason;
    public ChoiceUpdate withReason(ChoiceReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ChoiceStatusEnum status;
    public ChoiceUpdate withStatus(ChoiceStatusEnum status) {
        this.status = status;
        return this;
    }
}