package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRuleGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRuleGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroups")
    public RuleGroupMetadata[] ruleGroups;
    public ListRuleGroupsResponse withRuleGroups(RuleGroupMetadata[] ruleGroups) {
        this.ruleGroups = ruleGroups;
        return this;
    }
}