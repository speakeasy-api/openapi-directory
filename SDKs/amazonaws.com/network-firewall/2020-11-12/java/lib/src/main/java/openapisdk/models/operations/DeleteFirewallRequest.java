package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallRequest {
    public DeleteFirewallHeaders headers;
    public DeleteFirewallRequest withHeaders(DeleteFirewallHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFirewallRequest request;
    public DeleteFirewallRequest withRequest(openapisdk.models.shared.DeleteFirewallRequest request) {
        this.request = request;
        return this;
    }
}