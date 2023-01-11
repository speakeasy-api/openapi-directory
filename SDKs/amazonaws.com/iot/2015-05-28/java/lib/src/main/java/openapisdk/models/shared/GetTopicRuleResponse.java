package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTopicRuleResponse
 * The output from the GetTopicRule operation.
**/
public class GetTopicRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public TopicRule rule;
    public GetTopicRuleResponse withRule(TopicRule rule) {
        this.rule = rule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleArn")
    public String ruleArn;
    public GetTopicRuleResponse withRuleArn(String ruleArn) {
        this.ruleArn = ruleArn;
        return this;
    }
}