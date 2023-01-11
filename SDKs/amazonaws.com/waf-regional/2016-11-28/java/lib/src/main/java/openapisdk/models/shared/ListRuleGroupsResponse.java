package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRuleGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListRuleGroupsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroups")
    public RuleGroupSummary[] ruleGroups;
    public ListRuleGroupsResponse withRuleGroups(RuleGroupSummary[] ruleGroups) {
        this.ruleGroups = ruleGroups;
        return this;
    }
}