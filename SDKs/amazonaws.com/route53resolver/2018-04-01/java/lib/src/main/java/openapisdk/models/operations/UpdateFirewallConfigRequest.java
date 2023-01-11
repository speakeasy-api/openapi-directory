package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallConfigRequest {
    public UpdateFirewallConfigHeaders headers;
    public UpdateFirewallConfigRequest withHeaders(UpdateFirewallConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallConfigRequest request;
    public UpdateFirewallConfigRequest withRequest(openapisdk.models.shared.UpdateFirewallConfigRequest request) {
        this.request = request;
        return this;
    }
}