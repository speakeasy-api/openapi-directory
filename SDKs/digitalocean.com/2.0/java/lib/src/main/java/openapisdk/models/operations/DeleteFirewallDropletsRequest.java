package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallDropletsRequest {
    public DeleteFirewallDropletsPathParams pathParams;
    public DeleteFirewallDropletsRequest withPathParams(DeleteFirewallDropletsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public DeleteFirewallDropletsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}