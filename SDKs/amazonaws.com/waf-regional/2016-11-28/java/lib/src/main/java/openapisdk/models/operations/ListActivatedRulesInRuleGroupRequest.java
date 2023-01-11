package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActivatedRulesInRuleGroupRequest {
    public ListActivatedRulesInRuleGroupHeaders headers;
    public ListActivatedRulesInRuleGroupRequest withHeaders(ListActivatedRulesInRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListActivatedRulesInRuleGroupRequest request;
    public ListActivatedRulesInRuleGroupRequest withRequest(openapisdk.models.shared.ListActivatedRulesInRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}