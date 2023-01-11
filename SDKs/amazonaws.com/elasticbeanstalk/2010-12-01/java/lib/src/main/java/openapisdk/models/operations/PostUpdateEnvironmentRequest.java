package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateEnvironmentRequest {
    public PostUpdateEnvironmentQueryParams queryParams;
    public PostUpdateEnvironmentRequest withQueryParams(PostUpdateEnvironmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateEnvironmentHeaders headers;
    public PostUpdateEnvironmentRequest withHeaders(PostUpdateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateEnvironmentRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}