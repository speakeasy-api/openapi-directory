package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallDescriptionRequest {
    public UpdateFirewallDescriptionHeaders headers;
    public UpdateFirewallDescriptionRequest withHeaders(UpdateFirewallDescriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFirewallDescriptionRequest request;
    public UpdateFirewallDescriptionRequest withRequest(openapisdk.models.shared.UpdateFirewallDescriptionRequest request) {
        this.request = request;
        return this;
    }
}