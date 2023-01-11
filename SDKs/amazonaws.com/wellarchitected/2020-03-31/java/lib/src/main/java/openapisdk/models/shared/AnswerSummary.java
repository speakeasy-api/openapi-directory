package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnswerSummary
 * An answer summary of a lens review in a workload.
**/
public class AnswerSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChoiceAnswerSummaries")
    public ChoiceAnswerSummary[] choiceAnswerSummaries;
    public AnswerSummary withChoiceAnswerSummaries(ChoiceAnswerSummary[] choiceAnswerSummaries) {
        this.choiceAnswerSummaries = choiceAnswerSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Choices")
    public Choice[] choices;
    public AnswerSummary withChoices(Choice[] choices) {
        this.choices = choices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsApplicable")
    public Boolean isApplicable;
    public AnswerSummary withIsApplicable(Boolean isApplicable) {
        this.isApplicable = isApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarId")
    public String pillarId;
    public AnswerSummary withPillarId(String pillarId) {
        this.pillarId = pillarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionId")
    public String questionId;
    public AnswerSummary withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionTitle")
    public String questionTitle;
    public AnswerSummary withQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public AnswerReasonEnum reason;
    public AnswerSummary withReason(AnswerReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Risk")
    public RiskEnum risk;
    public AnswerSummary withRisk(RiskEnum risk) {
        this.risk = risk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectedChoices")
    public String[] selectedChoices;
    public AnswerSummary withSelectedChoices(String[] selectedChoices) {
        this.selectedChoices = selectedChoices;
        return this;
    }
}