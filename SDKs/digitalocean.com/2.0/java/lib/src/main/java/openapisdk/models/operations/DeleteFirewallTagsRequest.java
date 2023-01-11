package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFirewallTagsRequest {
    public DeleteFirewallTagsPathParams pathParams;
    public DeleteFirewallTagsRequest withPathParams(DeleteFirewallTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public DeleteFirewallTagsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}