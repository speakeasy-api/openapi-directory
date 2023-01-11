package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallPolicyRequest {
    public UpdateFirewallPolicyHeaders headers;
    public UpdateFirewallPolicyRequest withHeaders(UpdateFirewallPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallPolicyRequest request;
    public UpdateFirewallPolicyRequest withRequest(openapisdk.models.shared.UpdateFirewallPolicyRequest request) {
        this.request = request;
        return this;
    }
}