package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFirewallRuleGroupPolicyRequest {
    public PutFirewallRuleGroupPolicyHeaders headers;
    public PutFirewallRuleGroupPolicyRequest withHeaders(PutFirewallRuleGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutFirewallRuleGroupPolicyRequest request;
    public PutFirewallRuleGroupPolicyRequest withRequest(openapisdk.models.shared.PutFirewallRuleGroupPolicyRequest request) {
        this.request = request;
        return this;
    }
}