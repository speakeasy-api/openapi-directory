package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChoiceAnswerSummary
 * A choice summary that has been answered on a question in your workload.
**/
public class ChoiceAnswerSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChoiceId")
    public String choiceId;
    public ChoiceAnswerSummary withChoiceId(String choiceId) {
        this.choiceId = choiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public ChoiceReasonEnum reason;
    public ChoiceAnswerSummary withReason(ChoiceReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ChoiceStatusEnum status;
    public ChoiceAnswerSummary withStatus(ChoiceStatusEnum status) {
        this.status = status;
        return this;
    }
}