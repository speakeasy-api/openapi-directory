package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallRuleGroupPolicyRequest {
    public GetFirewallRuleGroupPolicyHeaders headers;
    public GetFirewallRuleGroupPolicyRequest withHeaders(GetFirewallRuleGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFirewallRuleGroupPolicyRequest request;
    public GetFirewallRuleGroupPolicyRequest withRequest(openapisdk.models.shared.GetFirewallRuleGroupPolicyRequest request) {
        this.request = request;
        return this;
    }
}