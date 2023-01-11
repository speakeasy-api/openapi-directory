package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEnvironmentRequest {
    public PostCreateEnvironmentQueryParams queryParams;
    public PostCreateEnvironmentRequest withQueryParams(PostCreateEnvironmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateEnvironmentHeaders headers;
    public PostCreateEnvironmentRequest withHeaders(PostCreateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateEnvironmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}