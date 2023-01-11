package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListActivatedRulesInRuleGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActivatedRules")
    public ActivatedRule[] activatedRules;
    public ListActivatedRulesInRuleGroupResponse withActivatedRules(ActivatedRule[] activatedRules) {
        this.activatedRules = activatedRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListActivatedRulesInRuleGroupResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}