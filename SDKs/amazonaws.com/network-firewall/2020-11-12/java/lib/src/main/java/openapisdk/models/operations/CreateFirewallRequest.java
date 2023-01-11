package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFirewallRequest {
    public CreateFirewallHeaders headers;
    public CreateFirewallRequest withHeaders(CreateFirewallHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFirewallRequest request;
    public CreateFirewallRequest withRequest(openapisdk.models.shared.CreateFirewallRequest request) {
        this.request = request;
        return this;
    }
}