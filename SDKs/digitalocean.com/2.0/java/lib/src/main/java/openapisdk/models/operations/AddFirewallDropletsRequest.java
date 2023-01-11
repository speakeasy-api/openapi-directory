package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFirewallDropletsRequest {
    public AddFirewallDropletsPathParams pathParams;
    public AddFirewallDropletsRequest withPathParams(AddFirewallDropletsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public AddFirewallDropletsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}