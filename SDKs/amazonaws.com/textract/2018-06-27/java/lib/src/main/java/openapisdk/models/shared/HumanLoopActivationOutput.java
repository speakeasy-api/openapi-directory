package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HumanLoopActivationOutput
 * Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
**/
public class HumanLoopActivationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopActivationConditionsEvaluationResults")
    public String humanLoopActivationConditionsEvaluationResults;
    public HumanLoopActivationOutput withHumanLoopActivationConditionsEvaluationResults(String humanLoopActivationConditionsEvaluationResults) {
        this.humanLoopActivationConditionsEvaluationResults = humanLoopActivationConditionsEvaluationResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopActivationReasons")
    public String[] humanLoopActivationReasons;
    public HumanLoopActivationOutput withHumanLoopActivationReasons(String[] humanLoopActivationReasons) {
        this.humanLoopActivationReasons = humanLoopActivationReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopArn")
    public String humanLoopArn;
    public HumanLoopActivationOutput withHumanLoopArn(String humanLoopArn) {
        this.humanLoopArn = humanLoopArn;
        return this;
    }
}