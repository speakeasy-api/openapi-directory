package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallRuleRequest {
    public DeleteFirewallRuleHeaders headers;
    public DeleteFirewallRuleRequest withHeaders(DeleteFirewallRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFirewallRuleRequest request;
    public DeleteFirewallRuleRequest withRequest(openapisdk.models.shared.DeleteFirewallRuleRequest request) {
        this.request = request;
        return this;
    }
}