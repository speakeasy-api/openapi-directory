package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateFirewallRuleGroupRequest {
    public DisassociateFirewallRuleGroupHeaders headers;
    public DisassociateFirewallRuleGroupRequest withHeaders(DisassociateFirewallRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateFirewallRuleGroupRequest request;
    public DisassociateFirewallRuleGroupRequest withRequest(openapisdk.models.shared.DisassociateFirewallRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}