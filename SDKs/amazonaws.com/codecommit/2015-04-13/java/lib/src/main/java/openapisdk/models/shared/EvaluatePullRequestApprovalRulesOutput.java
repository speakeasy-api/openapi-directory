package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EvaluatePullRequestApprovalRulesOutput {
    @JsonProperty("evaluation")
    public Evaluation evaluation;
    public EvaluatePullRequestApprovalRulesOutput withEvaluation(Evaluation evaluation) {
        this.evaluation = evaluation;
        return this;
    }
}