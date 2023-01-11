package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSubscribedRuleGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListSubscribedRuleGroupsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleGroups")
    public SubscribedRuleGroupSummary[] ruleGroups;
    public ListSubscribedRuleGroupsResponse withRuleGroups(SubscribedRuleGroupSummary[] ruleGroups) {
        this.ruleGroups = ruleGroups;
        return this;
    }
}