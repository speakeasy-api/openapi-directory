package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFirewallRequest {
    public UpdateFirewallPathParams pathParams;
    public UpdateFirewallRequest withPathParams(UpdateFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFirewallRequestBodyInput request;
    public UpdateFirewallRequest withRequest(UpdateFirewallRequestBodyInput request) {
        this.request = request;
        return this;
    }
}