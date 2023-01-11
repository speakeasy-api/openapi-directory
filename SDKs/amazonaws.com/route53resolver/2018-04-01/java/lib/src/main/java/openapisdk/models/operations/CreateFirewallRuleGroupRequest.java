package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFirewallRuleGroupRequest {
    public CreateFirewallRuleGroupHeaders headers;
    public CreateFirewallRuleGroupRequest withHeaders(CreateFirewallRuleGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFirewallRuleGroupRequest request;
    public CreateFirewallRuleGroupRequest withRequest(openapisdk.models.shared.CreateFirewallRuleGroupRequest request) {
        this.request = request;
        return this;
    }
}