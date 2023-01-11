package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallRuleGroupRequest {
    public DeleteFirewallRuleGroupHeaders headers;
    public DeleteFirewallRuleGroupRequest withHeaders(DeleteFirewallRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFirewallRuleGroupRequest request;
    public DeleteFirewallRuleGroupRequest withRequest(openapisdk.models.shared.DeleteFirewallRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}