package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpActionRequest {
    public PostFloatingIpActionPathParams pathParams;
    public PostFloatingIpActionRequest withPathParams(PostFloatingIpActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostFloatingIpActionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}