package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Answer
 * An answer of the question.
**/
public class Answer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChoiceAnswers")
    public ChoiceAnswer[] choiceAnswers;
    public Answer withChoiceAnswers(ChoiceAnswer[] choiceAnswers) {
        this.choiceAnswers = choiceAnswers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Choices")
    public Choice[] choices;
    public Answer withChoices(Choice[] choices) {
        this.choices = choices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HelpfulResourceUrl")
    public String helpfulResourceUrl;
    public Answer withHelpfulResourceUrl(String helpfulResourceUrl) {
        this.helpfulResourceUrl = helpfulResourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImprovementPlanUrl")
    public String improvementPlanUrl;
    public Answer withImprovementPlanUrl(String improvementPlanUrl) {
        this.improvementPlanUrl = improvementPlanUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsApplicable")
    public Boolean isApplicable;
    public Answer withIsApplicable(Boolean isApplicable) {
        this.isApplicable = isApplicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public Answer withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarId")
    public String pillarId;
    public Answer withPillarId(String pillarId) {
        this.pillarId = pillarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionDescription")
    public String questionDescription;
    public Answer withQuestionDescription(String questionDescription) {
        this.questionDescription = questionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionId")
    public String questionId;
    public Answer withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionTitle")
    public String questionTitle;
    public Answer withQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public AnswerReasonEnum reason;
    public Answer withReason(AnswerReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Risk")
    public RiskEnum risk;
    public Answer withRisk(RiskEnum risk) {
        this.risk = risk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectedChoices")
    public String[] selectedChoices;
    public Answer withSelectedChoices(String[] selectedChoices) {
        this.selectedChoices = selectedChoices;
        return this;
    }
}