package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateFirewallRuleGroupRequest {
    public AssociateFirewallRuleGroupHeaders headers;
    public AssociateFirewallRuleGroupRequest withHeaders(AssociateFirewallRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateFirewallRuleGroupRequest request;
    public AssociateFirewallRuleGroupRequest withRequest(openapisdk.models.shared.AssociateFirewallRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}