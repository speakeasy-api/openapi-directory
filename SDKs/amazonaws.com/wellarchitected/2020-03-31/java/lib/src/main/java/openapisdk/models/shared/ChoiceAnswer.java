package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChoiceAnswer
 * A choice that has been answered on a question in your workload.
**/
public class ChoiceAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChoiceId")
    public String choiceId;
    public ChoiceAnswer withChoiceId(String choiceId) {
        this.choiceId = choiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public ChoiceAnswer withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public ChoiceReasonEnum reason;
    public ChoiceAnswer withReason(ChoiceReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ChoiceStatusEnum status;
    public ChoiceAnswer withStatus(ChoiceStatusEnum status) {
        this.status = status;
        return this;
    }
}