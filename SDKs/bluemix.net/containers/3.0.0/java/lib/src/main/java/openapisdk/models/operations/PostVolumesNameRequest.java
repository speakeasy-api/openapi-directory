package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesNameRequest {
    public PostVolumesNamePathParams pathParams;
    public PostVolumesNameRequest withPathParams(PostVolumesNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostVolumesNameHeaders headers;
    public PostVolumesNameRequest withHeaders(PostVolumesNameHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostVolumesNameRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}