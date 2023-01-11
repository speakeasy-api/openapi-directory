package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFirewallPolicyRequest {
    public CreateFirewallPolicyHeaders headers;
    public CreateFirewallPolicyRequest withHeaders(CreateFirewallPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFirewallPolicyRequest request;
    public CreateFirewallPolicyRequest withRequest(openapisdk.models.shared.CreateFirewallPolicyRequest request) {
        this.request = request;
        return this;
    }
}