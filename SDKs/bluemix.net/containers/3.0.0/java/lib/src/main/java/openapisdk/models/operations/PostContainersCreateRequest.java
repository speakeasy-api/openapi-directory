package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersCreateRequest {
    public PostContainersCreateQueryParams queryParams;
    public PostContainersCreateRequest withQueryParams(PostContainersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostContainersCreateHeaders headers;
    public PostContainersCreateRequest withHeaders(PostContainersCreateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostContainersCreateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}