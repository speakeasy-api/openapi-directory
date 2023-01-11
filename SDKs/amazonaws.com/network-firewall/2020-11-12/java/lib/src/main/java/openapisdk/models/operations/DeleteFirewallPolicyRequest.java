package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallPolicyRequest {
    public DeleteFirewallPolicyHeaders headers;
    public DeleteFirewallPolicyRequest withHeaders(DeleteFirewallPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFirewallPolicyRequest request;
    public DeleteFirewallPolicyRequest withRequest(openapisdk.models.shared.DeleteFirewallPolicyRequest request) {
        this.request = request;
        return this;
    }
}