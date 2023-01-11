package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSamplingRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleARN")
    public String ruleARN;
    public DeleteSamplingRuleRequestBody withRuleArn(String ruleARN) {
        this.ruleARN = ruleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleName")
    public String ruleName;
    public DeleteSamplingRuleRequestBody withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}