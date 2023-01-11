package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFirewallTagsRequest {
    public AddFirewallTagsPathParams pathParams;
    public AddFirewallTagsRequest withPathParams(AddFirewallTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public AddFirewallTagsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}