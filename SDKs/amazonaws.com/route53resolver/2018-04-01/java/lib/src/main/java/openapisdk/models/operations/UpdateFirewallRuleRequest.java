package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallRuleRequest {
    public UpdateFirewallRuleHeaders headers;
    public UpdateFirewallRuleRequest withHeaders(UpdateFirewallRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallRuleRequest request;
    public UpdateFirewallRuleRequest withRequest(openapisdk.models.shared.UpdateFirewallRuleRequest request) {
        this.request = request;
        return this;
    }
}