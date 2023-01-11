package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallDeleteProtectionRequest {
    public UpdateFirewallDeleteProtectionHeaders headers;
    public UpdateFirewallDeleteProtectionRequest withHeaders(UpdateFirewallDeleteProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallDeleteProtectionRequest request;
    public UpdateFirewallDeleteProtectionRequest withRequest(openapisdk.models.shared.UpdateFirewallDeleteProtectionRequest request) {
        this.request = request;
        return this;
    }
}