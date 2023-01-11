package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallRuleGroupRequest {
    public GetFirewallRuleGroupHeaders headers;
    public GetFirewallRuleGroupRequest withHeaders(GetFirewallRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFirewallRuleGroupRequest request;
    public GetFirewallRuleGroupRequest withRequest(openapisdk.models.shared.GetFirewallRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}