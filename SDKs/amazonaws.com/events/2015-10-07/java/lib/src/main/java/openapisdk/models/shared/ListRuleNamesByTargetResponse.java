package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRuleNamesByTargetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRuleNamesByTargetResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleNames")
    public String[] ruleNames;
    public ListRuleNamesByTargetResponse withRuleNames(String[] ruleNames) {
        this.ruleNames = ruleNames;
        return this;
    }
}