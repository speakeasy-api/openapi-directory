package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImprovementSummary
 * An improvement summary of a lens review in a workload.
**/
public class ImprovementSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImprovementPlanUrl")
    public String improvementPlanUrl;
    public ImprovementSummary withImprovementPlanUrl(String improvementPlanUrl) {
        this.improvementPlanUrl = improvementPlanUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarId")
    public String pillarId;
    public ImprovementSummary withPillarId(String pillarId) {
        this.pillarId = pillarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionId")
    public String questionId;
    public ImprovementSummary withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuestionTitle")
    public String questionTitle;
    public ImprovementSummary withQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Risk")
    public RiskEnum risk;
    public ImprovementSummary withRisk(RiskEnum risk) {
        this.risk = risk;
        return this;
    }
}