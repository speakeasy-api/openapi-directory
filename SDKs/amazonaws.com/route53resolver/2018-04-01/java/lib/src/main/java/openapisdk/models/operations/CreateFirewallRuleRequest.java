package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFirewallRuleRequest {
    public CreateFirewallRuleHeaders headers;
    public CreateFirewallRuleRequest withHeaders(CreateFirewallRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFirewallRuleRequest request;
    public CreateFirewallRuleRequest withRequest(openapisdk.models.shared.CreateFirewallRuleRequest request) {
        this.request = request;
        return this;
    }
}