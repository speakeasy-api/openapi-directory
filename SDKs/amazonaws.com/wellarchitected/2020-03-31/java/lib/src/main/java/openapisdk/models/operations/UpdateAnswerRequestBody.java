package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAnswerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChoiceUpdates")
    public java.util.Map<String, openapisdk.models.shared.ChoiceUpdate> choiceUpdates;
    public UpdateAnswerRequestBody withChoiceUpdates(java.util.Map<String, openapisdk.models.shared.ChoiceUpdate> choiceUpdates) {
        this.choiceUpdates = choiceUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsApplicable")
    public Boolean isApplicable;
    public UpdateAnswerRequestBody withIsApplicable(Boolean isApplicable) {
        this.isApplicable = isApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public UpdateAnswerRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public UpdateAnswerRequestBodyReasonEnum reason;
    public UpdateAnswerRequestBody withReason(UpdateAnswerRequestBodyReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectedChoices")
    public String[] selectedChoices;
    public UpdateAnswerRequestBody withSelectedChoices(String[] selectedChoices) {
        this.selectedChoices = selectedChoices;
        return this;
    }
}