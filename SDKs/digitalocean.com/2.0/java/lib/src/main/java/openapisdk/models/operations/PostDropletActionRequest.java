package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDropletActionRequest {
    public PostDropletActionPathParams pathParams;
    public PostDropletActionRequest withPathParams(PostDropletActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDropletActionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}