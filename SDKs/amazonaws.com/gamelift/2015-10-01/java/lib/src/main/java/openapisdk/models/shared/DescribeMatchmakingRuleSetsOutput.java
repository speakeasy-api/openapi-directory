package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeMatchmakingRuleSetsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeMatchmakingRuleSetsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeMatchmakingRuleSetsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("RuleSets")
    public MatchmakingRuleSet[] ruleSets;
    public DescribeMatchmakingRuleSetsOutput withRuleSets(MatchmakingRuleSet[] ruleSets) {
        this.ruleSets = ruleSets;
        return this;
    }
}