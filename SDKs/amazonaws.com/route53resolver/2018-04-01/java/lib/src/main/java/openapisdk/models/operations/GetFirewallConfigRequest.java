package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallConfigRequest {
    public GetFirewallConfigHeaders headers;
    public GetFirewallConfigRequest withHeaders(GetFirewallConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFirewallConfigRequest request;
    public GetFirewallConfigRequest withRequest(openapisdk.models.shared.GetFirewallConfigRequest request) {
        this.request = request;
        return this;
    }
}